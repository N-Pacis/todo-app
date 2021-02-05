(this["webpackJsonpmern-crud"]=this["webpackJsonpmern-crud"]||[]).push([[0],{36:function(t,e,c){},63:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(30),s=c.n(a),i=(c(36),c(8)),o=c(2),l=c(9),d=c.n(l),j=c(11),b=c(14),u=c(12),h=c.n(u),p=c(0);function m(t){var e=h.a.create({baseURL:"http://localhost:4000"}),c=Object(n.useState)([]),r=Object(b.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){function t(){return(t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("/").then((function(t){s(t.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"mt-3 text-center",children:Object(p.jsx)("h3",{children:"Todo List"})}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Id"}),Object(p.jsx)("th",{scope:"col",children:"Todo"}),Object(p.jsx)("th",{scope:"col",children:"Priority"}),Object(p.jsx)("th",{scope:"col",colSpan:2,children:"Actions"})]})}),Object(p.jsx)("tbody",{children:a.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t._id}),Object(p.jsx)("td",{children:t.todo}),Object(p.jsx)("td",{children:t.priority}),Object(p.jsx)("td",{children:Object(p.jsx)(i.b,{className:"btn btn-secondary sm",to:"/edit/".concat(t._id),children:"Edit"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"btn btn-danger sm",onClick:function(){var c;c=t._id,e.delete("/delete/".concat(c)).then((function(){s(a.filter((function(t){return t._id===c})))}))},children:"Delete"})})]},t._id)}))})]})]})}var O=c(13),x=c(15);function f(t){var e=Object(o.f)(),c=h.a.create({baseURL:"http://localhost:4000"}),r=Object(n.useState)({todo:"",priority:""}),a=Object(b.a)(r,2),s=a[0],i=a[1];function l(t){var e=t.target.name,c=t.target.value;i(Object(x.a)(Object(x.a)({},s),{},Object(O.a)({},e,c)))}function u(){return(u=Object(j.a)(d.a.mark((function n(r){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,c.post("/edit/".concat(t.match.params.id),{todo:s.todo,priority:s.priority}).then((function(t){alert(JSON.stringify(t.data)),e.push("/")})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(n.useEffect)((function(){c.get("/edit/".concat(t.match.params.id)).then((function(t){i(t.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:["Edit Todo",Object(p.jsxs)("form",{onSubmit:function(t){!function(t){u.apply(this,arguments)}(t)},children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"todo",children:"Todo:"}),Object(p.jsx)("input",{type:"text",name:"todo",id:"todo",value:s.todo,onChange:l,className:"form-control",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"priority",children:"Priority:"}),Object(p.jsx)("input",{type:"text",name:"priority",id:"priority",value:s.priority,onChange:l,className:"form-control",required:!0})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-success sm",children:"Update"})})]})]})}var v=h.a.create({baseURL:"http://localhost:4000"});function y(){var t=Object(o.f)(),e=Object(n.useState)({todo:"",priority:""}),c=Object(b.a)(e,2),r=c[0],a=c[1],s=function(t){var e=t.target.name,c=t.target.value;a(Object(x.a)(Object(x.a)({},r),{},Object(O.a)({},e,c)))};function i(){return(i=Object(j.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,v.post("/create",r).then((function(e){alert(JSON.stringify(e.data)),t.push("/")})).catch((function(t){alert(t.message)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"mt-3",children:Object(p.jsx)("h3",{children:"Create Todo"})}),Object(p.jsxs)("form",{method:"post",onSubmit:function(t){return function(t){return i.apply(this,arguments)}(t)},children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"todo",children:"Todo:"}),Object(p.jsx)("input",{type:"text",name:"todo",id:"todo",value:r.todo,onChange:s,className:"form-control",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"priority",children:"Priority:"}),Object(p.jsx)("input",{type:"text",name:"priority",id:"priority",value:r.priority,onChange:s,className:"form-control",required:!0})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Todo"})})]})]})}var N=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{className:"navbar bg-light navbar-expand-lg navbar-light",children:Object(p.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(p.jsx)("li",{className:"navbar-item",children:Object(p.jsx)(i.b,{to:"/",className:"nav-link",children:"Todos"})}),Object(p.jsx)("li",{className:"navbar-item",children:Object(p.jsx)(i.b,{to:"/create",className:"nav-link",children:"Create Todo"})})]})}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(p.jsx)(o.a,{exact:!0,path:"/edit/:id",component:f}),Object(p.jsx)(o.a,{exact:!0,path:"/create",component:y})]})]})};c(62);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(N,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.c5e33e47.chunk.js.map