(this["webpackJsonpreact-third-image-finder"]=this["webpackJsonpreact-third-image-finder"]||[]).push([[0],{27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(20),o=a.n(c),s=(a(27),a(11)),i=a(4),l=a(5),u=a(7),h=a(6),g=a(0),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={input:""},e.setInput=function(t){e.setState({input:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.throwQuery(e.state.input)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{type:"text",className:"SearchForm-input",autoComplete:"off",autoFocus:!0,placefolder:"Search images and photos",onChange:this.setInput})]})})})}}]),a}(r.a.Component),m=d;var p=function(e){var t=e.article,a=e.handleLargeImage;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{className:"ImageGalleryItem-image",src:t.webformatURL,alt:t.tags,"data-largeimage":t.largeImageURL,onClick:a})})};var j=function(e){var t=e.articles,a=e.handleLargeImage;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(g.jsx)(p,{article:e,handleLargeImage:a},e.id)}))})};var f=function(e){var t=e.fetchNewImages;return Object(g.jsx)("button",{className:"Button",onClick:t,children:"Load more"})},b=(a(29),a(21)),y=a.n(b),v=a(22),O=a.n(v);var I={fetchImageDatabyQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cat",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return O.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=17873748-3f7eaecfe33175e69c7f70038&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},w=I,x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).keyEscape=function(t){"Escape"===t.code&&e.props.toggleModal(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.props.toggleModal),window.addEventListener("keydown",this.keyEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.props.toggleModal),window.removeEventListener("keydown",this.keyEscape)}},{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"Overlay",children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.largeImage,alt:""})})})})}}]),a}(r.a.Component),L=x,k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],query:"",page:1,isLoading:!1,showModal:!1,largeImage:""},e.fetchImage=function(){e.setState({isLoading:!0}),w.fetchImageDatabyQuery(e.state.query,e.state.page).then((function(t){return e.setState((function(e){return{articles:[].concat(Object(s.a)(e.articles),Object(s.a)(t)),page:e.page+1}}))})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.handleQuery=function(t){if(e.state.query===t)return console.log("1"),!1;e.setState({query:t,page:1,articles:[]})},e.scrollToBottom=function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},e.getLargeImage=function(t){e.setState({largeImage:t.target.dataset.largeimage}),e.toggleModal(t)},e.toggleModal=function(t){t.stopPropagation(),e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImage()}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(m,{throwQuery:this.handleQuery}),this.state.articles.length>1&&Object(g.jsx)(j,{articles:this.state.articles,handleLargeImage:this.getLargeImage}),this.state.page>2&&this.scrollToBottom(),!0===this.state.isLoading&&Object(g.jsx)(y.a,{className:"Loader",type:"MutatingDots",color:"#00BFFF",height:100,width:100}),this.state.articles.length>1&&!0!==this.state.isLoading&&Object(g.jsx)(f,{fetchNewImages:this.fetchImage}),""!==this.state.largeImage&&!0===this.state.showModal&&Object(g.jsx)(L,{toggleModal:this.toggleModal,largeImage:this.state.largeImage})]})}}]),a}(r.a.Component),S=k;o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.dbd879e1.chunk.js.map