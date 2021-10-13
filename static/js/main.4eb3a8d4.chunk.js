(this["webpackJsonpredux-sand-box"]=this["webpackJsonpredux-sand-box"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"Filter_container__3SYRe",input:"Filter_input__N4Cy5"}},3:function(t,e,n){t.exports={container:"ContactList_container__xOjfZ",contactsList:"ContactList_contactsList__g5Udv",listItem:"ContactList_listItem__2nUmU",contactIcon:"ContactList_contactIcon__39JxE",number:"ContactList_number__1ctlU",btnDelete:"ContactList_btnDelete__2NdG9"}},33:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=n(4),o=n(20),l=n(6),u=n(21),d={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filtered:""},b=Object(u.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"contacts/addContact":return t.contacts.find((function(t){return t.name===a.name}))?(alert("".concat(a.name+" is already in contacts")),t):Object(l.a)(Object(l.a)({},t),{},{contacts:[].concat(Object(o.a)(t.contacts),[a])});case"contacts/delete":return Object(l.a)(Object(l.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==a}))});case"contacts/filter":return Object(l.a)(Object(l.a)({},t),{},{filtered:a});default:return t}})),m=b,j=(n(33),n(7)),f=n.n(j),x=n(19),O=n(11),p=n(15),_=n(36),h=n(5),C=n.n(h),N=n(2),v=Object(i.b)((function(t){return{contacts:t.contacts}}),(function(t){return{addContact:function(e,n){return t(function(t,e){return{type:"contacts/addContact",payload:{id:Object(_.a)(),name:t,number:e}}}(e,n))}}}))((function(t){t.contacts;var e=t.addContact,n=Object(a.useState)(""),c=Object(p.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),l=o[0],u=o[1],d=Object(_.a)(),b=Object(_.a)(),m=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":u(a);break;default:return}},j=function(){s(""),u("")};return Object(N.jsx)("div",{className:C.a.container,children:Object(N.jsxs)("form",{className:C.a.form,onSubmit:function(t){t.preventDefault(),e(r,l),j()},children:[Object(N.jsxs)("label",{className:C.a.label,htmlFor:d,children:["Name",Object(N.jsx)("input",{type:"text",placeholder:"Mark Zuckerberg",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,className:C.a.input,id:d})]}),Object(N.jsxs)("label",{className:C.a.label,htmlFor:b,children:["Number",Object(N.jsx)("input",{type:"tel",placeholder:"xxx-xx-xx",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,className:C.a.input,id:b})]}),Object(N.jsx)("button",{type:"submit",className:C.a.btn,children:"Add contact"})]})})})),g=n(12),y=n.n(g),A=Object(i.b)((function(t){return{filtered:t.filtered}}),(function(t){return{changeFilter:function(e){return t(function(t){return{type:"contacts/filter",payload:t}}(e))}}}))((function(t){var e=t.filtered,n=t.changeFilter;return Object(N.jsxs)("div",{className:y.a.container,children:[Object(N.jsx)("h2",{className:y.a.title,children:"Search by name"}),Object(N.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(t){return n(t.currentTarget.value)},className:y.a.input})]})})),F=n(3),L=n.n(F),I=n(18),S=n(17),k=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteBtnPush;return Object(N.jsxs)("li",{className:L.a.listItem,children:[Object(N.jsxs)("p",{className:L.a.name,children:[Object(N.jsx)(O.a,{className:L.a.contactIcon}),n,":"]}),Object(N.jsxs)("p",{className:L.a.number,children:[Object(N.jsx)(S.a,{className:L.a.contactIcon}),a]}),Object(N.jsx)("button",{type:"button",className:L.a.btnDelete,onClick:function(){return c(e)},children:Object(N.jsx)(I.a,{})})]},e)},z=Object(i.b)((function(t){return{contacts:t.contacts,filtered:t.filtered}}),(function(t){return{deleteContact:function(e){return t(function(t){return{type:"contacts/delete",payload:t}}(e))}}}))((function(t){var e=t.contacts,n=t.filtered,a=t.deleteContact,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(N.jsx)("div",{className:L.a.container,children:Object(N.jsx)("ul",{className:L.a.contactsList,children:c.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(N.jsx)(k,{id:e,name:n,number:c,onDeleteBtnPush:a},e)}))})})})),D=function(){return Object(N.jsxs)("div",{className:f.a.container,children:[Object(N.jsxs)("h1",{className:f.a.title,children:["Phonebook ",Object(N.jsx)(x.a,{className:f.a.icon})]}),Object(N.jsx)(v,{}),Object(N.jsx)(A,{}),Object(N.jsxs)("h2",{className:f.a.title,children:["Contacts",Object(N.jsx)(O.b,{className:f.a.icon})]}),Object(N.jsx)(z,{})]})},Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(i.a,{store:m,children:Object(N.jsx)(D,{})})}),document.getElementById("root")),Z()},5:function(t,e,n){t.exports={container:"ContactForm_container__gRIsP",form:"ContactForm_form__1Xyki",label:"ContactForm_label__1uqc7",input:"ContactForm_input__3Eq0w",btn:"ContactForm_btn__1zSaF"}},7:function(t,e,n){t.exports={container:"App_container__3PDox",title:"App_title__2Al-S",icon:"App_icon__1-aEy"}}},[[35,1,2]]]);
//# sourceMappingURL=main.4eb3a8d4.chunk.js.map