(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],{37:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),a=t.n(c),i=t(12),o=t.n(i),u=t(6),s=t(17),l=t(2),b=t(3);function d(){var n=Object(l.a)(["\n  width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media (max-width: 1283px) {\n    width: 940px;\n  }\n\n  @media (max-width: 992px) {\n    width: 700px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]);return d=function(){return n},n}var j=b.a.div(d()),p=function(n){var e=n.children;return Object(r.jsx)(j,{children:e})};var f=function(){return Object(r.jsx)(p,{children:Object(r.jsx)(G,{})})},m=t(7);function O(){var n=Object(l.a)(["\n  text-align: center;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #000;\n"]);return O=function(){return n},n}function x(){var n=Object(l.a)([""]);return x=function(){return n},n}function h(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 35px;\n\n  /* @media (max-width: 576px) {\n    grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));\n  } */\n"]);return h=function(){return n},n}function v(){var n=Object(l.a)(["\n  margin-bottom: 30px;\n"]);return v=function(){return n},n}function g(){var n=Object(l.a)(["\n  width: 65%;\n"]);return g=function(){return n},n}function y(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 50px;\n"]);return y=function(){return n},n}var w=b.a.div(y()),E=b.a.div(g()),k=b.a.h2(v()),N=b.a.ul(h()),C=b.a.li(x()),D=b.a.h3(O()),I=t(14),M=t.n(I),J=t(21),S=function(){return fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(n){return n.json()})).then((function(n){return n}))},A=t(4),F=Object(A.b)("employees/fetchEmployeesRequest"),U=Object(A.b)("employees/fetchEmployeesSuccess"),q=Object(A.b)("employees/fetchEmployeesError"),z=function(n){return n.employees.entities},G=function(){var n=Object(u.c)(z),e=Object(u.b)(),t="abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");Object(c.useEffect)((function(){e(function(){var n=Object(J.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(F()),n.prev=1,n.next=4,S();case 4:t=n.sent,e(U(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),e(q(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}())}),[e]);var a=function(e){return function(e){return Object(m.a)(n).filter((function(n){return n.lastName[0].toUpperCase().includes(e)}))}(e).sort((function(n,e){return n.lastName.localeCompare(e.lastName)}))};return Object(r.jsxs)(w,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(k,{children:"Employees"}),n.length>0&&Object(r.jsx)(N,{children:t.map((function(n,e){return Object(r.jsxs)(C,{children:[Object(r.jsx)(D,{children:n}),a(n).length>0?Object(r.jsx)(Q,{employees:a(n)}):"-----"]},e)}))})]}),Object(r.jsx)(on,{})]})},L=t(22);function Y(){var n=Object(l.a)(["\n  margin-bottom: 3px;\n  color: ",";\n"]);return Y=function(){return n},n}function B(){var n=Object(l.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid transparent;\n  transition: all 0.2s linear;\n\n  &:hover {\n    border-top: 1px solid #000;\n    border-bottom: 1px solid #000;\n    background-color: rgb(219, 219, 219);\n  }\n"]);return B=function(){return n},n}var R=b.a.li(B()),T=b.a.h4(Y(),(function(n){return n.activeClass?"blue":""})),H=function(n){return n.selectedEmployeesId},K=function(n){var e=z(n),t=H(n);return e.filter((function(n){return[n.id].every((function(n){return t.includes(n)}))}))},P=function(n){var e=n.id,t=n.firstName,c=n.lastName,a=Object(u.c)(H).includes(e);return Object(r.jsxs)(R,{children:[Object(r.jsx)(T,{activeClass:a,children:"".concat(c," ").concat(t)}),Object(r.jsx)(hn,{id:e})]})},Q=function(n){var e=n.employees;return Object(r.jsx)("ul",{children:e.map((function(n){return Object(r.jsx)(P,Object(L.a)({},n),n.id)}))})};function V(){var n=Object(l.a)(["\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 5px;\n\n  &::before {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 10px;\n    width: 8px;\n    height: 8px;\n    background: #000;\n    border-radius: 50%;\n    transform: translateY(-50%);\n  }\n"]);return V=function(){return n},n}function W(){var n=Object(l.a)(["\n  margin-bottom: 20px;\n"]);return W=function(){return n},n}function X(){var n=Object(l.a)(["\n  margin-bottom: 10px;\n"]);return X=function(){return n},n}function Z(){var n=Object(l.a)(["\n  margin-bottom: 30px;\n"]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n  width: 30%;\n"]);return $=function(){return n},n}var _=b.a.div($()),nn=b.a.h2(Z()),en=b.a.h3(X()),tn=b.a.ul(W()),rn=b.a.li(V()),cn=function(n){var e=n.employees,t=n.onGetDate;return Object(r.jsx)(tn,{children:e.map((function(n){return Object(r.jsx)(rn,{children:"".concat(n.lastName," ").concat(n.firstName,"  - ").concat(t(n.dob))},n.id)}))})},an=["January","February","March","April","May","June","July","August","September","October","November","December "],on=function(){var n=Object(u.c)(K),e=n.map((function(n){return new Date(n.dob).getMonth()})),t=Object(m.a)(new Set(e)).sort((function(n,e){return n-e})),c=(new Date).getMonth(),a=[].concat(Object(m.a)(t.splice(t.findIndex((function(n){return n>=c})))),Object(m.a)(t)),i=function(n){var e=new Date(n),t=e.getDate(),r=an[e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(r,", ").concat(c," year")},o=function(e){return function(e){return Object(m.a)(n).filter((function(n){return[new Date(n.dob).getMonth()].includes(e)}))}(e).sort((function(n,e){return n.lastName.localeCompare(e.lastName)}))};return Object(r.jsxs)(_,{children:[Object(r.jsx)(nn,{children:"Employees birthday"}),n.length>0?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{children:a.map((function(n){return Object(r.jsxs)("li",{children:[Object(r.jsx)(en,{children:an[n]}),Object(r.jsx)(cn,{employees:o(n),onGetDate:i})]},n)}))})}):Object(r.jsx)("h3",{children:"Employees List is empty"})]})},un=Object(A.b)("selectedEmployees/AddEmployeesId"),sn=Object(A.b)("selectedEmployees/DeleteEmployeesId");function ln(){var n=Object(l.a)(["\n  cursor: pointer;\n  margin-right: 3px;\n"]);return ln=function(){return n},n}function bn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 5px;\n  width: max-content;\n"]);return bn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  padding-left: 15px;\n"]);return dn=function(){return n},n}var jn,pn,fn,mn=b.a.div(dn()),On=b.a.label(bn()),xn=b.a.input(ln()),hn=function(n){var e=n.id,t=Object(u.c)(H).includes(e),c=Object(u.b)(),a=function(n){var t="true"===n.target.value;c(t?un(e):sn(e))};return Object(r.jsxs)(mn,{children:[Object(r.jsxs)(On,{children:[Object(r.jsx)(xn,{type:"radio",value:"false",checked:!t,onChange:a}),"not active"]}),Object(r.jsxs)(On,{children:[Object(r.jsx)(xn,{type:"radio",value:"true",checked:t,onChange:a}),"active"]})]})},vn=t(5),gn=t(11),yn=t(15),wn=t(23),En=t.n(wn),kn=t(8),Nn=Object(A.c)([],Object(kn.a)({},U,(function(n,e){return e.payload}))),Cn=Object(A.c)(!1,(jn={},Object(kn.a)(jn,F,(function(){return!0})),Object(kn.a)(jn,U,(function(){return!1})),Object(kn.a)(jn,q,(function(){return!1})),jn)),Dn=Object(A.c)(null,(pn={},Object(kn.a)(pn,q,(function(n,e){return e.payload})),Object(kn.a)(pn,F,(function(){return null})),pn)),In=Object(vn.b)({entities:Nn,isLoading:Cn,error:Dn}),Mn=Object(A.c)([],(fn={},Object(kn.a)(fn,un,(function(n,e){var t=e.payload;return[].concat(Object(m.a)(n),[t])})),Object(kn.a)(fn,sn,(function(n,e){var t=e.payload;return Object(m.a)(n.filter((function(n){return n!==t})))})),fn)),Jn=[].concat(Object(m.a)(Object(A.d)({serializableCheck:!1})),[gn.a]),Sn={key:"activeUsersId",storage:En.a,blacklist:["employees"]},An=Object(vn.b)({employees:In,selectedEmployeesId:Mn}),Fn=Object(yn.a)(Sn,An),Un=Object(A.a)({reducer:Fn,devTools:!1,middleware:Jn}),qn=Object(yn.b)(Un);t(37);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{store:Un,children:Object(r.jsx)(s.a,{loading:null,persistor:qn,children:Object(r.jsx)(f,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.794988b2.chunk.js.map