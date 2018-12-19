(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(248)},114:function(e,t,n){},241:function(e,t,n){},243:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchLists",function(){return S}),n.d(r,"filterLists",function(){return y}),n.d(r,"createList",function(){return g}),n.d(r,"createListSucceeded",function(){return _}),n.d(r,"deleteList",function(){return I}),n.d(r,"deleteListSucceeded",function(){return j}),n.d(r,"setListIsPublic",function(){return D}),n.d(r,"setListIsPublicSucceeded",function(){return O});var i=n(1),a=n.n(i),s=n(103),c=n.n(s),o=(n(114),n(23)),l=n(24),u=n(27),d=n(25),p=n(28),h=n(250),f=n(251),m=n(252),E=n(44),b=[!1,!0],v=["Private","Public"],T=function(e){var t="select-".concat(e.list.id),n=e.list.is_public?"Public":"Private";return a.a.createElement("div",{className:"list"},a.a.createElement("div",{className:"list-header"},a.a.createElement("div",null,e.list.title)),a.a.createElement("hr",null),a.a.createElement("div",{className:"list-body"},e.list.description),a.a.createElement("div",{className:"list-status"},a.a.createElement("select",{value:n,onChange:function(t){var n="Public"===t.target.value;e.onIsPublicChange({id:e.list.id,is_public:n})},id:t},v.map(function(e){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("div",{className:"list-timer"},e.list.timer,"s"),a.a.createElement("button",{onClick:function(t){e.onDeleteList(e.list.id)}},"delete"))},C=function(e){var t=b.indexOf("true"===e.is_public),n=v[t];return a.a.createElement("div",{className:"lists-list"},a.a.createElement("div",{className:"lists-list-title"},a.a.createElement("strong",null,n)),e.lists.map(function(t){return a.a.createElement(T,{key:t.id,list:t,onIsPublicChange:e.onIsPublicChange,onDeleteList:e.onDeleteList})}))},L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onSearch=function(e){n.props.onSearch(e.target.value)},n.onTitleChange=function(e){n.setState({title:e.target.value})},n.onDescriptionChange=function(e){n.setState({description:e.target.value})},n.onCreateList=function(e){e.preventDefault(),n.props.onCreateList({title:n.state.title,description:n.state.description}),n.resetForm()},n.onDeleteList=function(e){n.props.onDeleteList(e)},n.toggleForm=function(){n.setState({showNewCardForm:!n.state.showNewCardForm})},n.state={showNewCardForm:!1,title:"",description:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"resetForm",value:function(){this.setState({showNewCardForm:!1,title:"",description:""})}},{key:"renderListsList",value:function(){var e=this.props,t=e.lists,n=e.onIsPublicChange,r=e.onDeleteList;return Object.keys(t).map(function(e){var i=t[e];return a.a.createElement(C,{lists:i,onIsPublicChange:n,onDeleteList:r,is_public:e,key:e})})}},{key:"render",value:function(){return this.props.isLoading?a.a.createElement("div",{className:"lists-loading"},"Loading..."):a.a.createElement("div",{className:"lists-list"},a.a.createElement("div",{className:"lists-list-header"},a.a.createElement("input",{onChange:this.onSearch,type:"text",placeholder:"Search..."}),a.a.createElement("button",{className:"button button-default",onClick:this.toggleForm},"+ New list")),this.state.showNewCardForm&&a.a.createElement("form",{className:"lists-list-form",onSubmit:this.onCreateList},a.a.createElement("input",{className:"full-width-input",onChange:this.onTitleChange,value:this.state.title,type:"text",placeholder:"title"}),a.a.createElement("input",{className:"full-width-input",onChange:this.onDescriptionChange,value:this.state.description,type:"text",placeholder:"description"}),a.a.createElement("button",{className:"button",type:"submit"},"Save")),a.a.createElement("div",{className:"lists"},this.renderListsList()))}}]),t}(i.Component);function S(){return{type:"FETCH_LISTS_STARTED"}}function y(e){return{type:"FILTER_LISTS",payload:{searchTerm:e}}}var g=function(e){return function(t){var n=JSON.stringify(e);return fetch("/api/lists/",{headers:{"Content-Type":"application/json"},method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){t(_(e))})}};function _(e){return{type:"CREATE_LIST_SUCCEEDED",payload:{list:e}}}var I=function(e){return function(t,n){return fetch("/api/lists/".concat(e,"/"),{headers:{"Content-Type":"application/json"},method:"DELETE"}).then(function(n){t(j(e))})}};function j(e){return{type:"DELETE_LIST_SUCCEEDED",payload:{id:e}}}var D=function(e){var t=e.id,n=e.is_public;return function(e,r){var i=JSON.stringify({is_public:n});return fetch("/api/lists/".concat(t,"/"),{headers:{"Content-Type":"application/json"},method:"PATCH",body:i}).then(function(e){return e.json()}).then(function(t){e(O(t)),t.is_public?e({type:"TIMER_START",payload:{id:t.id}}):e(function(e){return{type:"TIMER_STOP",payload:{id:e}}}(t.id))})}};function O(e){return{type:"SET_LIST_IS_PUBLIC_SUCCEEDED",payload:{id:e.id,is_public:e.is_public}}}function w(e){return a.a.createElement("div",{className:"flash-error"},e.message)}Error.defaultProps={message:"An error occurred"};var N=n(108),x=n(72),k=n(120),P={lists:[],isloading:!1,error:null,searchTerm:""},F=Object(x.a)([function(e){return e.lists.lists},function(e){return e.lists.searchTerm}],function(e,t){return e.filter(function(e){return""===t?e:e.title.match(new RegExp(t,"i"))})}),R=Object(x.a)([F],function(e){var t={};return b.forEach(function(n){t[n]=e.filter(function(e){return e.is_public===n})}),t});function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LISTS_STARTED":return k({isLoading:!0},e);case"FETCH_LISTS_FAILED":return k({isLoading:!1,error:t.payload.error},e);case"FETCH_LISTS_SUCCEEDED":return k({lists:function(){return[].concat(t.payload.lists)},isLoading:!1},e);case"FILTER_LISTS":return k({searchTerm:t.payload.searchTerm},e);case"CREATE_LIST_SUCCEEDED":return k({lists:function(e){return[].concat(e,t.payload.list)}},e);case"DELETE_LIST_SUCCEEDED":var n=e.lists.findIndex(function(e){return e.id===t.payload.id});if(-1!==n){return k({lists:function(e){var t=Object(N.a)(e);return t.splice(n,1),t}},e)}return e;case"SET_LIST_IS_PUBLIC_SUCCEEDED":var r=e.lists.findIndex(function(e){return e.id===t.payload.id});return-1!==r?k.updateIn("lists.".concat(r,".is_public"),t.payload.is_public,e):e;case"TIMER_INCREMENT":for(var i=0;i<e.lists.length;i++)if(e.lists[i].id===t.payload.id)return k.updateIn("lists.".concat(i,".timer"),e.lists[i].timer+1,e);return e;default:return e}}var M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).onSearch=function(e){n.props.dispatch(r.filterLists(e))},n.onCreateList=function(e){var t=e.title,i=e.description;n.props.dispatch(r.createList({title:t,description:i}))},n.onIsPublicChange=function(e){var t=e.id,i=e.is_public;n.props.dispatch(r.setListIsPublic({id:t,is_public:i}))},n.onDeleteList=function(e){n.props.dispatch(r.deleteList(e))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(r.fetchLists())}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},this.props.error&&a.a.createElement(w,{message:this.props.error}),a.a.createElement("div",{className:"main-content"},a.a.createElement(L,{lists:this.props.lists,onSearch:this.onSearch,onCreateList:this.onCreateList,onIsPublicChange:this.onIsPublicChange,onDeleteList:this.onDeleteList,isLoading:this.props.isLoading})))}}]),t}(i.Component);var U=Object(E.b)(function(e){var t=e.lists,n=t.isLoading,r=t.error;return{lists:R(e),isLoading:n,error:r}})(M),H=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Not Found"),a.a.createElement("p",null,"The page you're looking for is not found."))},B=(n(241),n(243),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,null,a.a.createElement(f.a,null,a.a.createElement(m.a,{exact:!0,path:"/",component:U}),a.a.createElement(m.a,{component:H})))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(26),W=n(106),$=n(107),q=n(34),z=n(12),G=n.n(z),K=n(9),Q=G.a.mark(Z),V=G.a.mark(ee),X=G.a.mark(te),Y=G.a.mark(ne);function Z(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)("FETCH_LISTS_STARTED",te);case 2:return e.next=4,ee(["TIMER_START","TIMER_STOP"],ne);case 4:case"end":return e.stop()}},Q,this)}function ee(e,t){var n,r,i;return G.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n={};case 1:return a.next=4,Object(K.c)(e);case 4:if(r=a.sent,i=r.payload.id,n[i]){a.next=10;break}return n[i]=Object(q.a)(),a.next=10,Object(K.d)(n[i],t);case 10:return a.next=12,Object(K.b)(n[i],r);case 12:a.next=1;break;case 14:case"end":return a.stop()}},V,this)}function te(){var e,t;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={"Content-Type":"application/json"},n.prev=1,n.next=4,fetch("/api/lists/",{headers:e}).then(function(e){return e.json()});case 4:return t=n.sent,n.next=7,Object(K.b)({type:"FETCH_LISTS_SUCCEEDED",payload:{lists:t}});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(K.b)({type:"FETCH_LISTS_FAILED",payload:{error:n.t0.message}});case 13:case"end":return n.stop()}},X,this,[[1,9]])}function ne(e){var t;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.payload,"TIMER_START"!==e.type){n.next=9;break}case 2:return n.next=5,Object(K.a)(q.c,1e3);case 5:return n.next=7,Object(K.b)({type:"TIMER_INCREMENT",payload:{id:t.id}});case 7:n.next=2;break;case 9:case"end":return n.stop()}},Y,this)}var re=Object(q.b)(),ie=Object(J.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{lists:A(e.lists,t)}},Object($.composeWithDevTools)(Object(J.applyMiddleware)(W.a,re)));re.run(Z),c.a.render(a.a.createElement(E.a,{store:ie},a.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,2,1]]]);
//# sourceMappingURL=main.f88b9687.chunk.js.map