(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(32),l=t.n(r),i=(t(44),t(33)),s=t(8),m=(t(45),t(46),t(35)),o=t.n(m),u=t(36),p=t.n(u),d=t(15),g=Object(n.createContext)(),E=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},_=function(){return Object(n.useContext)(g)},h=t(34),b=t.n(h).a.initializeApp({apiKey:"AIzaSyAJu8zvaL08BMGqVBOJBW4BcOYzab5kHbU",authDomain:"challange-c1266.firebaseapp.com",databaseURL:"https://challange-c1266.firebaseio.com",projectId:"challange-c1266",storageBucket:"challange-c1266.appspot.com",messagingSenderId:"848156774022",appId:"1:848156774022:web:0bcac02e1a5f68d1440b07",measurementId:"G-1NHXKSWY7Y"}),f=(b.firestore(),b.auth());function v(){var e=_(),a=Object(s.a)(e,2),t=a[0],n=t.basket,r=t.user;a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement(d.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"logo"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(o.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(d.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&f.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Return"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Order")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(d.b,{to:"/checkout"},c.a.createElement("div",{className:"header_optionBasket"},c.a.createElement(p.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length))))))}t(62),t(63);function N(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=_(),m=Object(s.a)(i,2),o=(m[0].basket,m[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50\ufe0f")})))),c.a.createElement("img",{src:n,alt:"book photo"}),c.a.createElement("button",{onClick:function(){o({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:l}})}},"Add to basket"))}function O(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg",alt:"home image",className:"home__image"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"001",title:"the lean startup",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",rating:4}),c.a.createElement(N,{title:"rich dad poor dad",price:100,image:"https://economictranscript.files.wordpress.com/2018/11/media.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"002",title:"samsang mobile",price:1e3,image:"https://i.gadgets360cdn.com/products/large/1555507135_635_samsung_galaxy_a60.jpg",rating:5}),c.a.createElement(N,{id:"005",title:"samsumg smart watch",price:2500,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPafhdMLdYv4CgEl2GnPZ86Y5b1muKMndayQ&usqp=CAU",rating:3}),c.a.createElement(N,{id:"004",title:"samsung refrigarator",price:420,image:"https://images-na.ssl-images-amazon.com/images/I/71O31clz6mL._SX679_.jpg",rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"003",title:"samsung smart tv",price:3e3,image:"https://images.samsung.com/is/image/samsung/in-fhdtv-n5200-ua32n5200arxxl-frontblack-184404442?$PD_GALLERY_L_JPG$",rating:4}))))}var k=t(4);t(64),t(65);function j(e){var a=e.id,t=e.image,n=e.title,r=e.price,l=e.rating,i=_(),m=Object(s.a)(i,2),o=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkOutProduct"},c.a.createElement("img",{src:t,className:"CheckOutProduct__image"}),c.a.createElement("div",{className:"checkOutProduct__info"},c.a.createElement("p",{className:"checkOutProduct__title"},n,"  "),c.a.createElement("p",{className:"checkOutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkOutProdect__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50\ufe0f")}))),c.a.createElement("button",{onClick:function(){o({type:"REMOVE_TO_BASKET",id:a})}},"remove from cart")))}t(66);var A=t(37),S=t.n(A),w=t(27),y=t(18),P=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},C=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[a.item])});case"REMOVE_TO_BASKET":var t=e.basket.findIndex((function(e){return e.id==a.id})),n=Object(w.a)(e.basket);return t>=0?n.splice(t,1):console.warn("cannt remove product id : ".concat(a.id,"   as its not in basket")),Object(y.a)(Object(y.a)({},e),{},{basket:n});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:a.user});default:return e}};function T(){var e=_(),a=Object(s.a)(e,2),t=a[0].basket;a[1];return c.a.createElement("div",{className:"subtotal"},c.a.createElement(S.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items):",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This is contain a gift"))},decimalScale:2,value:P(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed For payment"))}function L(){var e=_(),a=Object(s.a)(e,2),t=a[0].basket;a[1];return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"chaeckout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Apple/iPhone11/Pre-book/D12731792_IN_WLM_Apple_PC_LP_top_banner._CB452057659_.jpg",alt:"checkout img"}),c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),t.map((function(e){return c.a.createElement(j,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(T,null)))}t(68);function B(){var e=Object(k.f)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1];return c.a.createElement("div",{className:"login"},c.a.createElement(d.b,{to:"/"},"    ",c.a.createElement("img",{src:"https://www.indiannewsandtimes.com/wp-content/uploads/2018/05/11_amazon_470_2.png",className:"login__logo"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-In"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"loginbutton",onClick:function(a){a.preventDefault(),f.signInWithEmailAndPassword(r,o).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))}},"Sign In")),c.a.createElement("p",null,"Afghanistan's interim chief was confident that CA would agree to ACB's request of hosting the Test as a day game instead of it being played under lights"),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),f.createUserWithEmailAndPassword(r,o).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))}},"Create Account")))}var I=function(){var e=_(),a=Object(s.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("the useris >>>>>",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(k.c,null,c.a.createElement(k.a,{exact:!0,path:"/"},c.a.createElement(v,null),c.a.createElement(O,null)),c.a.createElement(k.a,{path:"/checkout"},c.a.createElement(v,null),c.a.createElement(L,null)),c.a.createElement(k.a,{path:"/login"},c.a.createElement(B,null))))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{initialState:{basket:[],user:null},reducer:C},c.a.createElement(I,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.81b3d222.chunk.js.map