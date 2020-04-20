function _classCallCheck(t,c){if(!(t instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,c){for(var e=0;e<c.length;e++){var r=c[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,c,e){return c&&_defineProperties(t.prototype,c),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qvFY:function(t,c,e){"use strict";e.r(c),e.d(c,"ProductModule",(function(){return P}));var r,o=e("ofXK"),n=e("tyNb"),i=e("fXoL"),a=e("X849"),u=e("Wp6s"),s=e("bTqV"),d=function(t){return["/products",t]},p=((r=function(){function t(){_classCallCheck(this,t),this.productClicked=new i.o,this.today=new Date}return _createClass(t,[{key:"addCart",value:function(){console.log("A\xf1adir al carrito"),this.productClicked.emit(this.product.id)}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=i.Ib({type:r,selectors:[["app-product"]],inputs:{product:"product"},outputs:{productClicked:"productClicked"},decls:19,vars:11,consts:[[1,"product-card"],["mat-card-avatar","",1,"product-header-image"],[1,"crop-image"],["alt","",3,"src"],["mat-raised-button","","color","primary",3,"click"],["mat-button","",3,"routerLink"]],template:function(t,c){1&t&&(i.Ub(0,"mat-card",0),i.Ub(1,"mat-card-header"),i.Pb(2,"div",1),i.Ub(3,"mat-card-title"),i.zc(4),i.hc(5,"uppercase"),i.Tb(),i.Ub(6,"mat-card-subtitle"),i.zc(7),i.hc(8,"currency"),i.Tb(),i.Tb(),i.Ub(9,"div",2),i.Pb(10,"img",3),i.Tb(),i.Ub(11,"mat-card-content"),i.Ub(12,"p"),i.zc(13),i.Tb(),i.Tb(),i.Ub(14,"mat-card-actions"),i.Ub(15,"button",4),i.cc("click",(function(){return c.addCart()})),i.zc(16,"Agregar al Carrito"),i.Tb(),i.Ub(17,"a",5),i.zc(18,"Ver Detalle"),i.Tb(),i.Tb(),i.Tb()),2&t&&(i.Cb(4),i.Ac(i.ic(5,5,c.product.title)),i.Cb(3),i.Ac(i.ic(8,7,c.product.price)),i.Cb(3),i.lc("src",c.product.image,i.sc),i.Cb(3),i.Bc(" ",c.product.description," "),i.Cb(4),i.lc("routerLink",i.nc(9,d,c.product.id)))},directives:[u.a,u.e,u.c,u.h,u.g,u.d,u.b,s.b,s.a,n.d],pipes:[o.r,o.d],styles:[".crop-image[_ngcontent-%COMP%]{height:300px;width:100%;overflow:hidden;position:relative}.crop-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100%}"]}),r);function l(t,c){if(1&t){var e=i.Vb();i.Ub(0,"app-product",2),i.cc("productClicked",(function(t){return i.rc(e),i.gc().clickProduct(t)})),i.Tb()}2&t&&i.lc("product",c.$implicit)}function b(t,c){if(1&t&&(i.Ub(0,"div"),i.Ub(1,"div"),i.Pb(2,"img",2),i.Tb(),i.Ub(3,"div"),i.Ub(4,"ul"),i.Ub(5,"li"),i.zc(6),i.Tb(),i.Ub(7,"li"),i.zc(8),i.hc(9,"currency"),i.Tb(),i.Tb(),i.Ub(10,"p"),i.zc(11),i.Tb(),i.Tb(),i.Tb()),2&t){var e=i.gc();i.Cb(2),i.lc("src",e.product.image,i.sc),i.Cb(4),i.Bc("Nombre: ",e.product.title,""),i.Cb(2),i.Bc("Precio: ",i.ic(9,4,e.product.price),""),i.Cb(3),i.Ac(e.product.description)}}function f(t,c){1&t&&(i.Ub(0,"h2"),i.zc(1,"No se encontr\xf3 el producto"),i.Tb())}var h,m,C,g,v=[{path:"",component:(m=function(){function t(c){_classCallCheck(this,t),this.productsService=c}return _createClass(t,[{key:"ngOnInit",value:function(){this.fetchProducts()}},{key:"clickProduct",value:function(t){console.log("Product ID ",t)}},{key:"fetchProducts",value:function(){var t=this;this.productsService.getAllProducts().subscribe((function(c){t.products=c}))}}]),t}(),m.\u0275fac=function(t){return new(t||m)(i.Ob(a.a))},m.\u0275cmp=i.Ib({type:m,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"product-grid"],["class","product",3,"product","productClicked",4,"ngFor","ngForOf"],[1,"product",3,"product","productClicked"]],template:function(t,c){1&t&&(i.Ub(0,"div",0),i.xc(1,l,1,1,"app-product",1),i.Tb()),2&t&&(i.Cb(1),i.lc("ngForOf",c.products))},directives:[o.k,p],styles:[""]}),m)},{path:":id",component:(h=function(){function t(c,e){_classCallCheck(this,t),this.route=c,this.ProductsService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(c){console.log("params ",c),t.fetchProduct(c.id)}))}},{key:"fetchProduct",value:function(t){var c=this;this.ProductsService.getProduct(t).subscribe((function(t){c.product=t}))}}]),t}(),h.\u0275fac=function(t){return new(t||h)(i.Ob(n.a),i.Ob(a.a))},h.\u0275cmp=i.Ib({type:h,selectors:[["app-product-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notFound",""],["alt","",3,"src"]],template:function(t,c){if(1&t&&(i.xc(0,b,12,6,"div",0),i.xc(1,f,2,0,"ng-template",null,1,i.yc)),2&t){var e=i.pc(2);i.lc("ngIf",c.product)("ngIfElse",e)}},directives:[o.l],pipes:[o.d],styles:["img[_ngcontent-%COMP%]{max-width:100%}"]}),h)}],k=((C=function t(){_classCallCheck(this,t)}).\u0275mod=i.Mb({type:C}),C.\u0275inj=i.Lb({factory:function(t){return new(t||C)},imports:[[n.e.forChild(v)],n.e]}),C),y=e("hctd"),P=((g=function t(){_classCallCheck(this,t)}).\u0275mod=i.Mb({type:g}),g.\u0275inj=i.Lb({factory:function(t){return new(t||g)},imports:[[o.c,k,y.a]]}),g)}}]);