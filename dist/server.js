(()=>{"use strict";var e={n:r=>{var s=r&&r.__esModule?()=>r.default:()=>r;return e.d(s,{a:s}),s},d:(r,s)=>{for(var t in s)e.o(s,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:s[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("react-dom/server");var s=e.n(r);const t=require("express");var n=e.n(t);const i=require("react-router-dom/server"),o=require("react-router-dom"),a=require("react/jsx-runtime"),l=()=>(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o.Link,{to:"/red",children:"Red"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.Link,{to:"/blue",children:"Blue"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.Link,{to:"/users",children:"Users"})})]}),u=()=>(0,a.jsx)("div",{className:"Red",children:"Red"}),c=()=>(0,a.jsx)(u,{}),d=()=>(0,a.jsx)("div",{className:"Blue",children:"Blue"}),h=()=>(0,a.jsx)(d,{}),p=require("react"),x=require("react-redux"),j=require("axios");var m=e.n(j);const y=require("redux-saga/effects"),v="users/GET_USERS_PENDING",g="users/GET_USERS_SUCCESS",S="users/GET_USERS+FAILURE",f="users/GET_USER",E="users/GET_USER_SUCCESS",R="users/GET_USER_FAILURE",_=e=>({type:f,payload:e}),q=e=>({type:E,payload:e}),b=e=>({type:R,payload:e,error:!0}),k=()=>async e=>{try{e({type:v});const r=await m().get("https://jsonplaceholder.typicode.com/users");e({type:g,payload:r})}catch(r){throw e({type:S,error:!0,payload:r}),r}},P=e=>m().get("https://jsonplaceholder.typicode.com/users/".concat(e));function*T(e){try{const r=yield(0,y.call)(P,e.payload);yield(0,y.put)(q(r.data))}catch(e){yield(0,y.put)(b(e))}}function*U(){yield(0,y.takeEvery)(f,T)}const w={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}},C=e=>{let{users:r}=e;return r?(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:r.map((e=>(0,a.jsx)("li",{children:(0,a.jsx)(o.Link,{to:"/users/".concat(e.id),children:e.username})},r.id)))})}):null},D=(0,p.createContext)(null),G=D,L=e=>{let{resolve:r}=e;const s=(0,p.useContext)(D);return s?(s.done||s.promises.push(Promise.resolve(r())),null):null},N=()=>{const e=(0,x.useSelector)((e=>e.users.users)),r=(0,x.useDispatch)();return(0,p.useEffect)((()=>{e||r(k())}),[r,e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{users:e}),(0,a.jsx)(L,{resolve:()=>r(k)})]})},O=e=>{let{user:r}=e;const{email:s,name:t,username:n}=r;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{children:[n," (",t,")"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"e-mail"})," ",s]})]})},A=e=>{let{id:r}=e;const s=(0,x.useSelector)((e=>e.users.user)),t=(0,x.useDispatch)();return(0,p.useEffect)((()=>{s&&s.id===parseInt(r,10)||t(_(r))}),[t,r,s]),s?(0,a.jsx)(O,{user:s}):(0,a.jsx)(L,{resolve:()=>t(_(r))})},F=()=>{const{id:e}=(0,o.useParams)();return(0,a.jsx)(A,{id:e})},I=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{}),(0,a.jsx)(o.Routes,{children:(0,a.jsx)(o.Route,{path:":id",element:(0,a.jsx)(F,{})})})]}),B=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l,{}),(0,a.jsx)("hr",{}),(0,a.jsxs)(o.Routes,{children:[(0,a.jsx)(o.Route,{path:"/red",element:(0,a.jsx)(c,{})}),(0,a.jsx)(o.Route,{path:"/blue",element:(0,a.jsx)(h,{})}),(0,a.jsx)(o.Route,{path:"/users/*",element:(0,a.jsx)(I,{})})]})]}),J=require("path");var M=e.n(J);const Y=require("fs");var z=e.n(Y);const H=require("redux"),K=require("redux-saga");var Q=e.n(K);function*V(){yield(0,y.all)([U()])}const W=(0,H.combineReducers)({users:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case v:return{...e,loading:{...e.loading,users:!0}};case g:return{...e,loading:{...e.loading,users:!1},users:r.payload.data};case S:return{...e,loading:{...e.loading,users:!1},error:{...e.error,users:r.payload}};case f:return{...e,loading:{...e.loading,user:!0},error:{...e.error,user:null}};case E:return{...e,loading:{...e.loading,user:!1},user:r.payload};case R:return{...e,loading:{...e.loading,user:!1},error:{...e.error,user:r.payload}};default:return e}}}),X=require("redux-thunk"),Z=JSON.parse(z().readFileSync(M().resolve("./build/asset-manifest.json"),"utf8")),$=n()(),ee=n().static(M().resolve("./build"),{index:!1});$.use(ee),$.use((async(e,r,t)=>{const n=Q()(),o=(0,H.createStore)(W,(0,H.applyMiddleware)(X.thunk,n)),l=n.run(V).toPromise(),u={done:!1,promises:[]},c=(0,a.jsx)(G.Provider,{value:u,children:(0,a.jsx)(x.Provider,{store:o,children:(0,a.jsx)(i.StaticRouter,{location:e.url,context:{},children:(0,a.jsx)(B,{})})})});s().renderToStaticMarkup(c),o.dispatch(K.END);try{await l,await Promise.all(u.promises)}catch(e){return r.status(500)}u.done=!0;const d=s().renderToString(c),h=JSON.stringify(o.getState()).replace(/</g,"\\u003c"),p="<script>__PRELOADED_STATE__ = ".concat(h,"<\/script>");r.send(function(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n        <head>\n            <meta charset="utf-8" />\n            <link rel="shortcut icon" href="/favicon.ico" />\n            <meta\n                name="viewport"\n                contetn="width=device-width,initial-scale=1,shrink-to-fit=no"\n            />\n            <meta name="theme-color" content="#00000" />\n            <title>React App</title>\n            <link href="'.concat(Z.files["main.css"],'" rel="stylesheet" />\n        </head>\n        <body>\n            <noscript>You need to enable JavaScript to run this app.</noscript>\n            <div id="root">').concat(e,"</div>\n            ").concat(r,'\n            <script src="').concat(Z.files["main.js"],'"><\/script>\n        </body>\n    </html>;\n    ')}(d,p))})),$.listen(5e3,(()=>{console.log("Running on http://localhost:5000")}))})();