(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,e,n){},110:function(t,e,n){},112:function(t,e,n){},236:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"fetchLists",function(){return g}),n.d(i,"fetchListsSucceeded",function(){return y}),n.d(i,"createList",function(){return S}),n.d(i,"createListSucceeded",function(){return T}),n.d(i,"deleteList",function(){return _}),n.d(i,"deleteListSucceeded",function(){return D}),n.d(i,"setListIsPublic",function(){return I}),n.d(i,"setListIsPublicSucceeded",function(){return j});var a=n(0),s=n.n(a),r=n(93),o=n.n(r),c=(n(104),n(16)),l=n(17),u=n(20),d=n(18),p=n(21),h=n(238),f=n(240),m=n(239),E=n(35),v=["Private","Public"],C=function(t){var e="select-".concat(t.list.id),n=t.list.is_public?"Public":"Private";return s.a.createElement("div",{className:"list"},s.a.createElement("div",{className:"list-header"},s.a.createElement("div",null,t.list.title)),s.a.createElement("hr",null),s.a.createElement("div",{className:"list-body"},t.list.description),s.a.createElement("div",{className:"list-status"},s.a.createElement("select",{value:n,onChange:function(e){var n="Public"===e.target.value;t.onIsPublicChange({id:t.list.id,is_public:n})},id:e},v.map(function(t){return s.a.createElement("option",{key:t,value:t},t)}))),s.a.createElement("button",{onClick:function(e){t.onDeleteList(t.list.id)}},"delete"))},b=function(t){return s.a.createElement("div",{className:"lists-list"},s.a.createElement("div",{className:"lists-list-title"},s.a.createElement("strong",null,"My lists")),t.lists.map(function(e){return s.a.createElement(C,{key:e.id,list:e,onIsPublicChange:t.onIsPublicChange,onDeleteList:t.onDeleteList})}))},L=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).onTitleChange=function(t){n.setState({title:t.target.value})},n.onDescriptionChange=function(t){n.setState({description:t.target.value})},n.onCreateList=function(t){t.preventDefault(),n.props.onCreateList({title:n.state.title,description:n.state.description}),n.resetForm()},n.onDeleteList=function(t){n.props.onDeleteList(t)},n.toggleForm=function(){n.setState({showNewCardForm:!n.state.showNewCardForm})},n.state={showNewCardForm:!1,title:"",description:""},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"resetForm",value:function(){this.setState({showNewCardForm:!1,title:"",description:""})}},{key:"renderListsList",value:function(){var t=this.props.lists;return s.a.createElement(b,{lists:t,onIsPublicChange:this.props.onIsPublicChange,onDeleteList:this.props.onDeleteList})}},{key:"render",value:function(){return console.log("this.props ",this.props),this.props.isLoading?s.a.createElement("div",{className:"lists-loading"},"Loading..."):s.a.createElement("div",{className:"lists-list"},s.a.createElement("div",{className:"lists-list-header"},s.a.createElement("button",{className:"button button-default",onClick:this.toggleForm},"+ New list")),this.state.showNewCardForm&&s.a.createElement("form",{className:"lists-list-form",onSubmit:this.onCreateList},s.a.createElement("input",{className:"full-width-input",onChange:this.onTitleChange,value:this.state.title,type:"text",placeholder:"title"}),s.a.createElement("input",{className:"full-width-input",onChange:this.onDescriptionChange,value:this.state.description,type:"text",placeholder:"description"}),s.a.createElement("button",{className:"button",type:"submit"},"Save")),s.a.createElement("div",{className:"lists"},this.renderListsList()))}}]),e}(a.Component);var g=function(){return function(t){t({type:"FETCH_LISTS_STARTED"});return fetch("/api/lists/",{headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t(y(e))}).catch(function(e){t({type:"FETCH_LISTS_FAILED",payload:{error:"Unable to load lists. The server says: "+e.message}})})}};function y(t){return{type:"FETCH_LISTS_SUCCEEDED",payload:{lists:t}}}var S=function(t){return function(e){var n=JSON.stringify(t);return fetch("/api/lists/",{headers:{"Content-Type":"application/json"},method:"POST",body:n}).then(function(t){return t.json()}).then(function(t){e(T(t))})}};function T(t){return{type:"CREATE_LIST_SUCCEEDED",payload:{list:t}}}var _=function(t){return function(e,n){return fetch("/api/lists/".concat(t,"/"),{headers:{"Content-Type":"application/json"},method:"DELETE"}).then(function(n){e(D(t))})}};function D(t){return{type:"DELETE_LIST_SUCCEEDED",payload:{id:t}}}var I=function(t){var e=t.id,n=t.is_public;return function(t,i){var a=JSON.stringify({is_public:n});return fetch("/api/lists/".concat(e,"/"),{headers:{"Content-Type":"application/json"},method:"PATCH",body:a}).then(function(t){return t.json()}).then(function(e){t(j(e))})}};function j(t){var e=t.id,n=t.is_public;return console.log("is_public ",n),{type:"SET_LIST_IS_PUBLIC_SUCCEEDED",payload:{id:e,is_public:n}}}function w(t){return s.a.createElement("div",{className:"flash-error"},t.message)}Error.defaultProps={message:"An error occurred"};var N=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).onCreateList=function(t){var e=t.title,a=t.description;n.props.dispatch(i.createList({title:e,description:a}))},n.onIsPublicChange=function(t){var e=t.id,a=t.is_public;n.props.dispatch(i.setListIsPublic({id:e,is_public:a}))},n.onDeleteList=function(t){n.props.dispatch(i.deleteList(t))},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(i.fetchLists())}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},this.props.error&&s.a.createElement(w,{message:this.props.error}),s.a.createElement("div",{className:"main-content"},s.a.createElement(L,{lists:this.props.lists,onCreateList:this.onCreateList,onIsPublicChange:this.onIsPublicChange,onDeleteList:this.onDeleteList,isLoading:this.props.isLoading})))}}]),e}(a.Component);var O=Object(E.b)(function(t){var e=t.lists;return{lists:e.lists,isLoading:e.isLoading,error:e.error}})(N),P=function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Not Found"),s.a.createElement("p",null,"The page you're looking for is not found."))},F=(n(110),n(112),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(f.a,null,s.a.createElement(m.a,{exact:!0,path:"/",component:O}),s.a.createElement(m.a,{component:P})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(19),U=n(96),A=n(98),H=n(115),x={lists:[],isloading:!1,error:null};function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_LISTS_STARTED":return H({isLoading:!0},t);case"FETCH_LISTS_FAILED":return H({isLoading:!1,error:e.payload.error},t);case"FETCH_LISTS_SUCCEEDED":return H({lists:function(){return[].concat(e.payload.lists)},isLoading:!1},t);case"CREATE_LIST_SUCCEEDED":return H({lists:function(t){return[].concat(t,e.payload.list)}},t);case"DELETE_LIST_SUCCEEDED":for(var n=function(n){if(t.lists[n].id===e.payload.id){return{v:H({lists:function(t){var e=Object(A.a)(t);return e.splice(n,1),e}},t)}}},i=0;i<t.lists.length;i++){var a=n(i);if("object"===typeof a)return a.v}return t;case"SET_LIST_IS_PUBLIC_SUCCEEDED":for(i=0;i<t.lists.length;i++)if(t.lists[i].id===e.payload.id)return H.updateIn("lists.".concat(i,".is_public"),e.payload.is_public,t);return t;default:return t}}var J=n(97),R=Object(k.createStore)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return{lists:B(t.lists,e)}},Object(J.composeWithDevTools)(Object(k.applyMiddleware)(U.a)));o.a.render(s.a.createElement(E.a,{store:R},s.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},99:function(t,e,n){t.exports=n(236)}},[[99,2,1]]]);
//# sourceMappingURL=main.e192a5a1.chunk.js.map