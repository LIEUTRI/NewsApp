(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{52:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(22),i=n.n(c),l=(n(52),n(17)),r=n(104),o=n(105),j=n(2);var h=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(l.b,{className:"navbar-brand",to:"/NewsApp",children:[Object(j.jsx)("sup",{children:"SpringBoot"})," ",Object(j.jsx)("span",{style:{color:"#469FFD",fontSize:25},children:Object(j.jsx)("b",{children:"NEWS"})})," ",Object(j.jsx)("sub",{children:"React"})]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)(l.b,{className:"nav-link",to:"",children:["Trang ch\u1ee7",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"",children:"Th\u1ec3 lo\u1ea1i"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"",children:"Li\xean h\u1ec7"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"news",children:"Th\xf4ng tin"})})]})})]})})})};var b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("footer",{className:"py-5 bg-dark",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("p",{className:"m-0 text-center text-white",children:["Copyright ",Object(j.jsx)("sup",{children:"\xa9"})," News Website 2021"]})})})})},d=n(9),u=n(101),x=n(102),p=n(103),O=n(12),g=n(13),m=n(16),v=n(15),f=n(94),y=n(95),N=n(86),w=n(87),P=n(88),C=n(89),k=n(90),S=n(91),T=n(92),D=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center",children:"Tin t\u1ee9c"}),this.props.newsList.map((function(e,t){return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)("div",{style:{textAlign:"left"},children:Object(j.jsxs)(N.a,{children:[Object(j.jsx)(w.a,{top:!0,width:"100%",src:e.thumbnail,alt:e.title}),Object(j.jsxs)(P.a,{children:[Object(j.jsx)(C.a,{tag:"h5",children:e.title}),Object(j.jsx)(k.a,{tag:"h6",className:"mb-2 text-muted",children:e.categoryName}),Object(j.jsx)(S.a,{children:Object(j.jsx)("span",{style:{width:"100%",height:100},children:Object(j.jsx)("i",{children:e.shortDescription})})}),Object(j.jsx)(T.a,{style:{backgroundColor:"blue"},children:Object(j.jsx)(l.b,{className:"btn-link",to:"news/"+e.id,children:"\u0110\u1ecdc ti\u1ebfp"})})]})]})}),Object(j.jsx)("br",{})]},t)}))]})}}]),n}(s.a.Component),F=n(24),L=n.n(F),M="https://news-lieutri.herokuapp.com/news",A=new(function(){function e(){Object(O.a)(this,e)}return Object(g.a)(e,[{key:"getNewses",value:function(e,t){return null==e||null==t?L.a.get(M):L.a.get(M+"?page="+e+"&limit="+t)}},{key:"getNews",value:function(e){return L.a.get(M+"/"+e)}},{key:"addNews",value:function(e){return L()({method:"post",url:M,data:e})}}]),e}()),R=n(93),I=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={items:[],visiblePage:3},a}return Object(g.a)(n,[{key:"onChangePage",value:function(e){this.props.changePage(e),this.setState({buttonId:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsxs)(R.a,{"aria-label":"Page navigation",children:[Object(j.jsx)(f.a,{disabled:1===this.props.curPage,onClick:function(){return e.onChangePage(1)},children:Object(j.jsx)(y.a,{first:!0})}),Object(j.jsx)(f.a,{disabled:1===this.props.curPage,onClick:function(){return e.onChangePage(-1)},children:Object(j.jsx)(y.a,{previous:!0})}),this.props.items,Object(j.jsx)(f.a,{disabled:this.props.curPage===this.props.totalPage,onClick:function(){return e.onChangePage(0)},children:Object(j.jsx)(y.a,{next:!0})}),Object(j.jsx)(f.a,{disabled:this.props.curPage===this.props.totalPage,onClick:function(){return e.onChangePage(-2)},children:Object(j.jsx)(y.a,{last:!0})})]})})}}]),n}(s.a.Component),J=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={newsList:[],limit:4,curPage:1,totalPage:0,visiblePage:3,items:[]},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.xuly(this.state.curPage,this.state.limit,this.state.visiblePage)}},{key:"xuly",value:function(e,t,n){var a=this;A.getNewses(e,t).then((function(t){var s=t.data,c=s.totalPage,i=[],l=1===e||c===n?1:e-1,r=c>=n?n:c;console.log("Paging > totalPage="+c+", visiblePage="+n+", offset="+l+", end="+r);for(var o=function(t){i.push(Object(j.jsx)(f.a,{active:t===e,onClick:function(){return a.onChangePageNumber(t)},children:Object(j.jsx)(y.a,{last:!0,children:t})},t))},h=l;h<=r;h++)o(h);a.setState({newsList:s.listResult,totalPage:c,items:i})})).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))}))}},{key:"onChangePageNumber",value:function(e){console.log("body called, news:="+this.state.newsList.length),0===e?e=this.state.curPage<this.state.totalPage?this.state.curPage+1:this.state.curPage:-1===e?e=this.state.curPage>1?this.state.curPage-1:this.state.curPage:-2===e&&(e=this.state.totalPage),this.setState({curPage:e}),this.xuly(e,this.state.limit,this.state.visiblePage)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row align-items-center my-5",children:[Object(j.jsx)("div",{className:"col-lg-7",children:Object(j.jsx)("img",{className:"img-fluid rounded mb-4 mb-lg-0",src:"https://placehold.it/900x400",alt:""})}),Object(j.jsxs)("div",{className:"col-lg-5 text-center",children:[Object(j.jsx)("h1",{className:"font-weight-light",children:"Li\u1ec5u Minh Tr\xed"}),Object(j.jsx)("p",{children:"L\xe0 m\u1ed9t Fresher Java DEV, t\xf4i y\xeau th\xedch ng\xf4n ng\u1eef l\u1eadp tr\xecnh Java. T\xf4i v\u1eeba t\u1ed1t nghi\u1ec7p \u0110\u1ea1i h\u1ecdc tr\u01b0\u1eddng \u0110\u1ea1i h\u1ecdc C\u1ea7n Th\u01a1 chuy\xean ng\xe0nh C\xf4ng ngh\u1ec7 th\xf4ng tin."}),Object(j.jsx)("button",{className:"btn btn-primary",children:"T\xecm hi\u1ec3u th\xeam"})]})]}),Object(j.jsx)("div",{className:"card text-white bg-secondary my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{className:"text-white m-0",children:Object(j.jsx)("span",{style:{fontSize:30},children:Object(j.jsx)("b",{children:"Happy New Year 2021"})})})})}),Object(j.jsx)(D,{newsList:this.state.newsList}),Object(j.jsx)(I,{items:this.state.items,curPage:this.state.curPage,totalPage:this.state.totalPage,changePage:this.onChangePageNumber.bind(this)})]})}}]),n}(s.a.Component),B=(n(79),n(80),n(82),function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={news:{}},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;A.getNews(this.props.match.params.id).then((function(t){var n=t.data;console.log("data: "+n.title),e.setState({news:n})}))}},{key:"showNews",value:function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("p",{children:e.content})]})}},{key:"render",value:function(){return Object(j.jsx)("div",{style:{marginTop:"20px"},children:this.showNews(this.state.news)})}}]),n}(a.Component)),E=n(23),z=n(96),W=n(97),H=n(98),V=n(99),Y=n(100),q={marginTop:"30px"},G=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={email:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(a)),a}return Object(g.a)(n,[{key:"handleChange",value:function(e){this.setState({email:e.email.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target,n=new FormData(t),a={thumbnail:n.get("thumbnail"),title:n.get("title"),shortDescription:n.get("shortDescription"),content:n.get("content"),categoryCode:n.get("categoryCode")};A.addNews(a).then((function(e){e.data})).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))}))}},{key:"render",value:function(){return Object(j.jsx)("div",{style:q,children:Object(j.jsxs)(z.a,{onSubmit:this.handleSubmit,children:[Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"Thumbnail",children:"Thumbnail"}),Object(j.jsx)(V.a,{type:"text",name:"thumbnail",id:"thumbnail",placeholder:"Thumbnail"})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"Title",children:"Title"}),Object(j.jsx)(V.a,{type:"text",name:"title",id:"title",placeholder:"Title"})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"shortDescription",children:"Short Description"}),Object(j.jsx)(V.a,{type:"textarea",name:"shortDescription",id:"shortDescription"})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"content",children:"Content"}),Object(j.jsx)(V.a,{type:"textarea",name:"content",id:"content"})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"category",children:"Category Code"}),Object(j.jsx)(V.a,{type:"text",name:"categoryCode",id:"categoryCode",placeholder:"Category Code"})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"exampleSelect",children:"Select"}),Object(j.jsxs)(V.a,{type:"select",name:"select",id:"exampleSelect",children:[Object(j.jsx)("option",{children:"1"}),Object(j.jsx)("option",{children:"2"}),Object(j.jsx)("option",{children:"3"}),Object(j.jsx)("option",{children:"4"}),Object(j.jsx)("option",{children:"5"})]})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"exampleSelectMulti",children:"Select Multiple"}),Object(j.jsxs)(V.a,{type:"select",name:"selectMulti",id:"exampleSelectMulti",multiple:!0,children:[Object(j.jsx)("option",{children:"1"}),Object(j.jsx)("option",{children:"2"}),Object(j.jsx)("option",{children:"3"}),Object(j.jsx)("option",{children:"4"}),Object(j.jsx)("option",{children:"5"})]})]}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(H.a,{for:"exampleFile",children:"File"}),Object(j.jsx)(V.a,{type:"file",name:"file",id:"exampleFile"}),Object(j.jsx)(Y.a,{color:"muted",children:"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."})]}),Object(j.jsx)(T.a,{type:"submit",children:"Submit"})]})})}}]),n}(a.Component);n(83);var K=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(u.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)(p.a,{lg:12,style:{marginTop:"20px"},children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/NewsApp",exact:!0,component:J}),Object(j.jsx)(d.a,{path:"/NewsApp/news/:id",exact:!0,component:B}),Object(j.jsx)(d.a,{path:"/NewsApp/admin",exact:!0,component:G})]})})})}),Object(j.jsx)(b,{})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),Q()}},[[84,1,2]]]);
//# sourceMappingURL=main.519fc4a6.chunk.js.map