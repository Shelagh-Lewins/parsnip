(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,n){},108:function(t,e,n){},110:function(t,e,n){},234:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(93),l=n.n(s),r=(n(102),n(16)),o=n(17),c=n(19),u=n(18),p=n(20),d=n(236),m=n(238),h=n(237),v=n(35),b=["Private","Public"],f=function(t){var e="select-".concat(t.list.id),n=t.list.is_public?"Public":"Private";return a.a.createElement("div",{className:"list"},a.a.createElement("div",{className:"list-header"},a.a.createElement("div",null,t.list.title)),a.a.createElement("hr",null),a.a.createElement("div",{className:"list-body"},t.list.description),a.a.createElement("div",{className:"list-status"},a.a.createElement("select",{value:n,onChange:function(e){var n="Public"===e.target.value;t.onIsPublicChange({id:t.list.id,is_public:n})},id:e},b.map(function(t){return a.a.createElement("option",{key:t,value:t},t)}))))},E=function(t){return a.a.createElement("div",{className:"lists-list"},a.a.createElement("div",{className:"lists-list-title"},a.a.createElement("strong",null,"My lists")),t.lists.map(function(e){return a.a.createElement(f,{key:e.id,list:e,onIsPublicChange:t.onIsPublicChange})}))},C=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).onTitleChange=function(t){n.setState({title:t.target.value})},n.onDescriptionChange=function(t){n.setState({description:t.target.value})},n.onCreateList=function(t){t.preventDefault(),n.props.onCreateList({title:n.state.title,description:n.state.description}),n.resetForm()},n.toggleForm=function(){n.setState({showNewCardForm:!n.state.showNewCardForm})},n.state={showNewCardForm:!1,title:"",description:""},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"resetForm",value:function(){this.setState({showNewCardForm:!1,title:"",description:""})}},{key:"renderListsList",value:function(){var t=this.props.lists;return a.a.createElement(E,{lists:t,onIsPublicChange:this.props.onIsPublicChange})}},{key:"render",value:function(){return a.a.createElement("div",{className:"lists-list"},a.a.createElement("div",{className:"lists-list-header"},a.a.createElement("button",{className:"button button-default",onClick:this.toggleForm},"+ New list")),this.state.showNewCardForm&&a.a.createElement("form",{className:"lists-list-form",onSubmit:this.onCreateList},a.a.createElement("input",{className:"full-width-input",onChange:this.onTitleChange,value:this.state.title,type:"text",placeholder:"title"}),a.a.createElement("input",{className:"full-width-input",onChange:this.onDescriptionChange,value:this.state.description,type:"text",placeholder:"description"}),a.a.createElement("button",{className:"button",type:"submit"},"Save")),a.a.createElement("div",{className:"lists"},this.renderListsList()))}}]),e}(i.Component),g=1;function y(){return g++}var w=function(t){function e(){var t,n;Object(r.a)(this,e);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(n=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).onCreateList=function(t){var e=t.title,i=t.description;n.props.dispatch(function(t){var e=t.title,n=t.description;return{type:"CREATE_LIST",payload:{id:y(),title:e,description:n}}}({title:e,description:i}))},n.onIsPublicChange=function(t){var e=t.id,i=t.is_public;n.props.dispatch(function(t){return{type:"SET_LIST_IS_PUBLIC",payload:{id:t.id,is_public:t.is_public}}}({id:e,is_public:i}))},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"main-content"},a.a.createElement(C,{lists:this.props.lists,onCreateList:this.onCreateList,onIsPublicChange:this.onIsPublicChange}))}}]),e}(i.Component);var N=Object(v.b)(function(t){return{lists:t.lists}})(w),j=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Not Found"),a.a.createElement("p",null,"The page you're looking for is not found."))},I=(n(108),n(110),function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(m.a,null,a.a.createElement(h.a,{exact:!0,path:"/",component:N}),a.a.createElement(h.a,{component:j})))}}]),e}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(25),_=n(113),L=[{id:y(),title:"Books",description:"My favourite books",is_public:!1},{id:y(),title:"People",description:"My favourite people",is_public:!1}];var P=n(96),k=Object(O.createStore)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lists:L},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_LIST":return _({lists:function(t){return[].concat(t,e.payload)}},t);case"SET_LIST_IS_PUBLIC":for(var n=0;n<t.lists.length;n++)if(t.lists[n].id===e.payload.id)return _.updateIn("lists.".concat(n,".is_public"),e.payload.is_public,t);return t;default:return t}},Object(P.composeWithDevTools)());l.a.render(a.a.createElement(v.a,{store:k},a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},97:function(t,e,n){t.exports=n(234)}},[[97,2,1]]]);
//# sourceMappingURL=main.98bcd426.chunk.js.map