(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{12:function(e,t,a){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},131:function(e,t,a){},132:function(e,t,a){e.exports=a.p+"static/media/preloader.cd2b8065.gif"},133:function(e,t,a){},134:function(e,t,a){e.exports={content:"Message_content__1vTbk",dialogs:"Message_dialogs__2BZUu",dialogsItems:"Message_dialogsItems__3BxQb",active:"Message_active__3KMb1",messages:"Message_messages__11r0A",message:"Message_message__1MOXo"}},161:function(e,t,a){e.exports=a(291)},163:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},288:function(e,t,a){e.exports={content:"Settings_content__3FxpE"}},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(163),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(8),o={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return e},i=a(31),l=a(5),u=a(127),m=a.n(u).a.create({baseURL:"http://localhost:4000/",responseType:"json"}),d={getUsers:function(){return m.get("users").then((function(e){return e.data}))},follow:function(e){return m.post("follow?page=".concat(e))},unfollow:function(e){return m.delete("follow?page=".concat(e))},getProfile:function(e){return console.warn("Obsilete method. Please use profileAPI object"),p.getProfile(e)}},p={getProfile:function(e){return m.get("users"+e)},getStatus:function(e){return m.get("profile"+e)},updateStatus:function(e){return m.put("profile/status",{status:e})}},f=function(){return m.get("auth/me")},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return m.post("auth/login",{email:e,password:t,rememberMe:a})},E=function(){return m.delete("auth/login")},v={posts:[{id:"1",message:"Hi",likesCount:"15"},{id:"2",message:"Hello",likesCount:"20"},{id:"3",message:"Yo",likesCount:"20"},{id:"4",message:"Moove",likesCount:"20"}],profile:null,status:""},h=function(e){return{type:"SET_STATUS",status:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:t.newPostText,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[a]),newPostText:""});case"SET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});default:return e}},_={dialogs:[{id:"1",name:"Nastya",avatar:""},{id:"2",name:"Vika",avatar:1},{id:"3",name:"Sveta",avatar:2}],messages:[{id:"1",message:"Hi"},{id:"2",message:"Hello"},{id:"3",message:"How are you"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var a=t.newMessageBody;return Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),[{id:4,message:a}])});default:return e}},w=a(18),S=a.n(w),P=a(35),j={users:[],pageSize:3,totalUsersCount:40,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e){return{type:"FOLLOW",userId:e}},y=function(e){return{type:"UNFOLLOW",userId:e}},C=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},I=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},U=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},k=function(){var e=Object(P.a)(S.a.mark((function e(t,a,n,r){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(U(!0,a)),e.next=3,n(a);case 3:e.sent.data.userId&&t(r(a)),t(U(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(l.a)(Object(l.a)({},e),{},{users:[].concat(Object(i.a)(e.users),Object(i.a)(t.users))});case"SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"TOGGLE_IS_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},T=a(38),F={userId:null,email:null,login:null,isAuth:!1},A=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},D=a(128),G=a(126),L=Object(s.c)({profilePage:b,dialogsPage:O,sidebar:c,usersPage:x,auth:M,form:G.a}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,B=Object(s.e)(L,R(Object(s.a)(D.a)));window.__store__=B;var z,H=B,W=a(60),V=a.n(W),X=a(23),q=a(24),J=a(26),Q=a(25),Z=a(85),K=a.n(Z),Y=a(10),$=a(9),ee=a(64),te=a.n(ee),ae=function(e){return r.a.createElement("div",null,r.a.createElement("form",{action:""},r.a.createElement("input",{type:"text",placeholder:"email",name:"email"}),r.a.createElement("input",{type:"password",placeholder:"password",name:"password"}),r.a.createElement("input",{type:"text",placeholder:"name",name:"name"}),r.a.createElement("button",{onClick:e.postUser},"Registration")))},ne=function(e){return r.a.createElement("header",{className:te.a.header},r.a.createElement("img",{src:"https://prestonvill.ru/common/uploads/images/Post/barbara-palvin-yarkij-natural-soft-drama-victoria-s-secret-barbara-palvin-tipazh-kibbi-top-model-podium-stil-yarkogo-naturala-obrazy%2041.jpg",height:100}),r.a.createElement("div",{className:te.a.div},"Barbara's Sayt"),r.a.createElement("div",{className:te.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement($.b,{to:"/login"},"LOGIN")),r.a.createElement($.b,{to:"/registration"},"REGISTRATION")," }")},re=a(11),se=function(e){Object(J.a)(a,e);var t=Object(Q.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"render",value:function(){return r.a.createElement(ne,this.props)}}]),a}(r.a.Component),oe=Object(re.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:M,logout:function(){return function(e){E().then((function(t){0===t.data.resultCode&&e(A(null,null,null,!1))}))}}})(se),ce=a(12),ie=a.n(ce),le=function(){return r.a.createElement("nav",{className:ie.a.nav},r.a.createElement("div",{className:ie.a.item},r.a.createElement($.b,{to:"/",activeClassName:ie.a.active},"Home")),r.a.createElement("div",{className:ie.a.item},r.a.createElement($.b,{to:"/profile",activeClassName:ie.a.active},"Profile")),r.a.createElement("div",{className:ie.a.item},r.a.createElement($.b,{to:"/user",activeClassName:ie.a.active},"User")),r.a.createElement("div",{className:ie.a.item},r.a.createElement($.b,{to:"/users",activeClassName:ie.a.active},"Users")),r.a.createElement("div",{className:"".concat(ie.a.item," ").concat(ie.a.active)},r.a.createElement($.b,{to:"/dialogs",activeClassName:ie.a.active},"Dialogs")),r.a.createElement("div",{className:ie.a.item},r.a.createElement($.b,{to:"/settings",activeClassName:ie.a.active},"Settings")),r.a.createElement("div",{className:ie.a.item},r.a.createElement($.b,{to:"/friends",activeClassName:ie.a.active},"Friends")))},ue=(a(249),a(131)),me=a.n(ue),de=a(132),pe=a.n(de),fe=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:pe.a}))},ge=a(92),Ee=function(e){var t=Object(n.useState)(!1),a=Object(ge.a)(t,2),s=a[0],o=a[1],c=Object(n.useState)(e.status),i=Object(ge.a)(c,2),l=i[0],u=i[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!s&&r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){o(!0)}},e.status||"---")),s&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1)},value:l})))},ve=function(e){return e.profile?r.a.createElement("div",{className:me.a.background},r.a.createElement("div",null,r.a.createElement("img",{src:e.profile.photoUrl}),r.a.createElement(Ee,{status:"Hello!!!"}),"// status=props.status updateStatus=props.updateStatus")):r.a.createElement(fe,null)},he=a(133),be=a.n(he),_e=(a(250),function(e){return r.a.createElement("article",null,r.a.createElement("div",{className:"item"},e.message,", ",e.likesCount),r.a.createElement("span",null,"likes"))}),Oe=a(124),we=a(125),Se=function(e){if(!e)return"Field is required"},Pe=a(93),je=a(36),Ne=a.n(je),ye=function(e){var t=e.input,a=e.meta,n=Object(Pe.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:Ne.a.formControl+" "+(s?Ne.a.error:" ")},r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,n))),s&&r.a.createElement("span",null,a.error))},Ce=function(e){var t=e.input,a=e.meta,n=Object(Pe.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:Ne.a.formControl+" "+(s?Ne.a.error:" ")},r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,n))),s&&r.a.createElement("span",null,a.error))},Ie=(z=10,function(e){if(e&&e.length>z)return"Error: max length is ".concat(z," symbols!")}),Ue=r.a.memo((function(e){var t=e.posts.map((function(e){return r.a.createElement(_e,{message:e.message,likesCount:e.likesCount})}));r.a.createRef();return r.a.createElement("div",null,r.a.createElement("h3",null,"New post"),r.a.createElement(ke,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:be.a.posts},t))})),ke=Object(we.a)({form:"addNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Oe.a,{name:"newPostText",component:ye,placeholder:"Post you message",validate:[Se,Ie]})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",null,"Add post"))))})),xe=Ue,Te=Object(re.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(xe),Fe=function(e){return r.a.createElement("div",null,r.a.createElement(ve,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Te,null))},Ae=function(e){Object(J.a)(a,e);var t=Object(Q.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(Fe,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(r.a.Component),Me=Object(Y.f)((function(e){return r.a.createElement(Ae,e)})),De=Object(re.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){d.getProfile(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){p.getStatus(e).then((function(e){t(h(e.data))}))}},updateStatus:function(e){return function(t){p.updateStatus(e).then((function(a){0===a.data.resultCode&&t(h(e))}))}}})(Me),Ge=(a(288),function(e){return r.a.createElement("div",null,"Settings")}),Le=(a(289),function(e){return r.a.createElement("div",null,"Friends")}),Re=a(66),Be=a.n(Re),ze=a(134),He=a.n(ze),We=function(e){return r.a.createElement("div",{className:He.a.message},e.message)},Ve=a(90),Xe=a.n(Ve),qe=function(e){return r.a.createElement("div",{className:Xe.a.dialog+" "+Xe.a.active},r.a.createElement($.b,{to:"/dialogs/"+e.id},e.avatar," ",e.name))},Je=Object(we.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Oe.a,{component:"textarea",name:"newMessageBody",placeholder:"enter message"})),r.a.createElement("div",null,r.a.createElement("button",null,"Add dialog")))})),Qe=function(e){var t=e.dialogsPage,a=t.dialogs.map((function(e){return r.a.createElement(qe,{name:e.name,id:e.id,avatar:e.avatar})})),n=t.messages.map((function(e){return r.a.createElement(We,{message:e.message})}));t.newMessageBody;return r.a.createElement("div",{className:Be.a.dialogs},r.a.createElement("div",{className:Be.a.dialogsItems},a),r.a.createElement("div",{className:Be.a.messages},r.a.createElement("div",null,n),r.a.createElement(Je,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},Ze=Object(s.d)(Object(re.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",newMessageBody:e}}(t))}}})))(Qe),Ke=a(67),Ye=a.n(Ke),$e=a(91),et=a.n($e),tt=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",{className:et.a.pages},a.map((function(t){return r.a.createElement("span",{className:e.currentPage===t&&et.a.selectedPages,onClick:function(){e.onPageChanged(t)}},t)})))},at=function(e){return r.a.createElement("div",{className:Ye.a.container},r.a.createElement(tt,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:Ye.a.container},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement($.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:" "!==t.photoUrl?t.photoUrl:"https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png",className:Ye.a.userPhoto,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.fullName)),r.a.createElement("span",null,r.a.createElement("div",null,t.id)))))})))},nt=a(135),rt=function(e){return e.usersPage.users},st=Object(nt.a)(rt,(function(e){return e.filter((function(e){return!0}))})),ot=function(e){return e.usersPage.pageSize},ct=function(e){return e.usersPage.totalUsersCount},it=function(e){return e.usersPage.currentPage},lt=function(e){return e.usersPage.isFetching},ut=function(e){return e.usersPage.followingInProgress},mt=function(e){Object(J.a)(a,e);var t=Object(Q.a)(a);function a(){var e;Object(X.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(q.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",this.props.isFetching?r.a.createElement(fe,null):null,r.a.createElement(at,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})," ")}}]),a}(r.a.Component),dt=Object(re.b)((function(e){return{users:st(e),pageSize:ot(e),totalUsersCount:ct(e),currentPage:it(e),isFetching:lt(e),followingInProgress:ut(e)}}),{follow:function(e){return function(){var t=Object(P.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.follow.bind(d),t.next=3,k(a,e,n,N);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.unfollow.bind(d),t.next=3,k(a,e,n,y);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:C,toggleFollowingProgress:U,requestUsers:function(e,t){return function(){var a=Object(P.a)(S.a.mark((function a(n){var r;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(I(!0)),n(C(e)),a.next=4,d.getUsers(e,t);case 4:r=a.sent,n(I(!1)),n({type:"SET_USERS",users:r.users});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(mt),pt=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Oe.a,{placeholder:"email",name:"email",validate:[Se],component:Ce})),r.a.createElement("div",null,r.a.createElement(Oe.a,{placeholder:"password",name:"password",type:"password",validate:[Se],component:Ce})),r.a.createElement("div",null,r.a.createElement(Oe.a,{name:"rememberMe",type:"checkbox",component:Ce})," remember me"),a&&r.a.createElement("div",{className:Ne.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"login")))})),ft=Object(re.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(n){g(e,t,a).then((function(e){if(0===e.data.resultCode)n(function(){var e=Object(P.a)(S.a.mark((function e(t){var a,n,r,s,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n._id,s=n.login,o=n.email,t(A(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";n(Object(T.a)("login",{_error:t}))}}))}}})((function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(pt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),gt=(a(290),function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://i.gifer.com/APw5.gif",width:500}),r.a.createElement("h3",null,"Welcome!"))}),Et=function(e){Object(J.a)(a,e);var t=Object(Q.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:K.a.wallpaper,src:"https://i.pinimg.com/originals/7b/13/7a/7b137a04428d38f110e32aa2cebd4791.jpg"}),r.a.createElement("div",{className:K.a.container},r.a.createElement(oe,null),r.a.createElement("section",null,r.a.createElement(le,null),r.a.createElement("div",{className:"container_content"},r.a.createElement(Y.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(Y.b,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(Y.b,{path:"/settings",component:Ge}),r.a.createElement(Y.b,{path:"/friends",component:Le}),r.a.createElement(Y.b,{path:"/users",render:function(){return r.a.createElement(dt,null)}}),r.a.createElement(Y.b,{path:"/login",render:function(){return r.a.createElement(ft,null)}}),r.a.createElement(Y.b,{path:"/registration",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(Y.b,{exact:!0,path:"/",render:function(){return r.a.createElement(gt,null)}})))))}}]),a}(r.a.Component);V.a.render(r.a.createElement($.a,null,r.a.createElement(re.a,{store:H},r.a.createElement(Et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports={formControl:"FormsControls_formControl__ajVyF",error:"FormsControls_error__35B8G",formSummaryError:"FormsControls_formSummaryError__3e7lO"}},64:function(e,t,a){e.exports={header:"Header_header__1VCKf",div:"Header_div__X5wUp",loginBlock:"Header_loginBlock__6mma5"}},66:function(e,t,a){e.exports={content:"Dialogs_content__1VIii",dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},67:function(e,t,a){e.exports={userPhoto:"Users_userPhoto__17MJB",container:"Users_container__6F9oG"}},85:function(e,t,a){e.exports={wallpaper:"App_wallpaper__32fiQ",container:"App_container__1MQN3",container_content:"App_container_content__3dOsD"}},90:function(e,t,a){e.exports={content:"User_content__6_31B",dialogs:"User_dialogs__2ssZV",dialogsItems:"User_dialogsItems__2bkXD",active:"User_active__2n5JZ",messages:"User_messages__p4aMc"}},91:function(e,t,a){e.exports={selectedPages:"Paginator_selectedPages__2FcsM",pages:"Paginator_pages__1-rF3"}}},[[161,1,2]]]);
//# sourceMappingURL=main.d93420bd.chunk.js.map