(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return p});n(66);var o=n(0),a=n.n(o),r=n(136),i=n(145),l=n(140),c=n(146);t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges,o=t.site;return a.a.createElement(i.a,{site:o},n.map(function(e){var t=e.node,n=t.fields,o=t.frontmatter,i=t.html,p=o.title,s=o.date,d=i.split("\x3c!-- more --\x3e")[0];return a.a.createElement(c.c,{key:n.slug},a.a.createElement(r.a,null,a.a.createElement(c.d,null,Object(l.a)(s)),a.a.createElement(c.f,{to:n.slug},p),a.a.createElement(c.a,{dangerouslySetInnerHTML:{__html:d}}),a.a.createElement(c.e,{to:n.slug},"READ MORE")))}))};var p="654699111"},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var o=n(0),a=n.n(o),r=n(4),i=n.n(r),l=n(134),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var p=n(139),s=n.n(p);n.d(t,"PageRenderer",function(){return s.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var u=a.a.createContext({}),m=function(e){return a.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},136:function(e,t,n){"use strict";var o=n(133);t.a=o.c.article.withConfig({displayName:"Container",componentId:"ig9vs6-0"})(["max-width:650px;margin:auto;@media (max-width:730px){max-width:100%;padding:0px 10px;}@media (max-width:950px){max-width:100%;padding:0px 20px;}"])},138:function(e,t,n){e.exports=n.p+"static/favicon-4877df40e4dc6bc5a18d2a720d004e21.png"},139:function(e,t,n){var o;e.exports=(o=n(144))&&o.default||o},140:function(e,t,n){"use strict";var o=n(151),a=n(153),r=n.n(a);o.a.locale(r.a);var i=new o.a("zh-Hant");t.a=function(e){var t=new Date(e);return t.getFullYear()+" 年 "+(t.getMonth()+1)+" 月 "+t.getDate()+" 日（"+i.format(t)+"）"}},142:function(e,t,n){"use strict";var o=n(136),a=n(0),r=n.n(a),i=n(133),l=i.c.aside.withConfig({displayName:"TitleSection__Wrapper",componentId:"sc-1yttyxn-0"})(["padding:30px 0 50px;border-bottom:1px solid rgb(234,234,234);"]),c=i.c.h1.withConfig({displayName:"TitleSection__Title",componentId:"sc-1yttyxn-1"})(["color:rgb(0,0,0);font-weight:400;font-size:32px;text-align:center;"]),p=function(e){var t=e.children;return r.a.createElement(l,null,r.a.createElement(c,null,t))};n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return p})},144:function(e,t,n){"use strict";n.r(t);n(29);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),l=n(46),c=n(2),p=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},145:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(149),i=n.n(r),l=n(133),c=Object(l.b)(["@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');body{font-family:'SF Pro TC','SF Pro Text','PingFang TC','Helvetica Neue','Helvetica','Arial','Microsoft JhengHei',wf_SegoeUI,'Segoe UI',Segoe,'Segoe WP',Tahoma,Verdana,Ubuntu,'Bitstream Vera Sans','DejaVu Sans',Tahoma,微軟正黑體,'LiHei Pro','WenQuanYi Micro Hei','Droid Sans Fallback','AR PL UMing TW',Roboto,'Helvetica Neue','Hiragino Maru Gothic ProN',メイリオ,'ヒラギノ丸ゴ ProN W4',Meiryo,'Droid Sans',sans-serif;text-rendering:optimizeLegibility;}::selection{background-color:#79ffe1;color:#000;}code,pre{font-family:Menlo,Monaco,Consolas,'Courier New','Roboto Mono',monospace;}"]),p=Object(l.b)(["/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */ html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}"]),s={blue:"#005cc5",green:"#22863a",orange:"#d73a49",purple:"#6f42c1",black:"#24292e",darkBlue:"#032f62",gray:"#6a737d",greenLight:"#e6ffed",redLight:"#ffdce0"},d={char:s.green,comment:s.gray,keyword:s.orange,lineHighlight:"#ddd",primitive:s.blue,string:s.darkBlue,variable:s.blue,boolean:s.blue,punctuation:s.black,tag:s.oragne,function:s.blue,className:s.purple,method:s.blue,operator:s.orange},u=Object(l.b)([".gatsby-highlight{font-size:13px;background-color:#fff;color:#000;border-width:1px;border-style:solid;border-color:rgb(234,234,234);margin:40px 0px;padding:20px;overflow:auto;}.gatsby-highlight code[class*='language-'],.gatsby-highlight pre[class*='language-'],.gatsby-highlight pre.prism-code{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;tab-size:4;hyphens:none;}.gatsby-highlight + .gatsby-highlight{margin-top:20;}.gatsby-highlight-code-line{background-color:",";display:block;margin:-0.125rem calc(-1rem - 15px);padding:0.125rem calc(1rem + 15px);}.token.attr-name{color:",";}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:",";}.token.property,.token.number,.token.function-name,.token.constant,.token.symbol{color:",";}.token.deleted{background-color:",";}.token.boolean{color:",";}.token.tag{color:",";}.token.string{color:",";}.token.punctuation{color:",";}.token.selector,.token.char,.token.builtin{color:",";}.token.inserted{background-color:",";}.token.function{color:",";}.token.operator,.token.entity,.token.url,.token.variable{color:",";}.token.attr-value{color:",";}.token.keyword{color:",";}.token.atrule,.token.class-name{color:",";}.token.important{font-weight:400;}.token.bold{font-weight:700;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}"],d.lineHighlight,d.keyword,d.comment,d.primitive,s.redLight,d.boolean,d.tag,d.string,d.punctuation,d.char,s.greenLight,d.function,d.variable,d.string,d.keyword,d.className);function m(){var e=i()(["\n  ",";\n  ",";\n  ",";\n"]);return m=function(){return e},e}var g=Object(l.a)(m(),p,u,c),f=l.c.div.withConfig({displayName:"Copyright__CopyrightWrapper",componentId:"sc-14thj82-0"})(["display:flex;vertical-align:top;justify-content:center;padding:40px 0;margin:auto;p{color:#999999;text-align:center;font-size:12px;}a{color:#999999;text-decoration:none;font-size:12px;transition:all 0.2s ease;:hover{color:#000;}}"]),b=function(){return a.a.createElement(f,null,a.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," ",a.a.createElement("a",{href:"https://jigsawye.com"},"Evan Ye"),", powered by"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"Gatsby"),". All rights reserved."))},h=l.c.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"w8tijy-0"})(["background:#fafafa;border-top:1px solid #eaeaea;"]),x=function(){return a.a.createElement(h,null,a.a.createElement(b,null))},y=n(143),w=n.n(y),k=n(138),v=n.n(k),E=function(e){var t=e.siteMetadata;return a.a.createElement(w.a,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("meta",{name:"description",content:t.description}),a.a.createElement("title",null,t.title),a.a.createElement("meta",{property:"og:title",content:t.title}),a.a.createElement("meta",{property:"og:url",content:t.siteUrl}),a.a.createElement("meta",{property:"og:site_name",content:t.title}),a.a.createElement("meta",{property:"og:image",content:"https://avatars1.githubusercontent.com/u/8567270?v=3&s=300"}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:title",content:t.title}),a.a.createElement("meta",{name:"twitter:description",content:t.description}),a.a.createElement("link",{rel:"icon",href:v.a}),a.a.createElement("link",{rel:"search",type:"application/opensearchdescription+xml",href:"/rss.xml",title:"JIGSAWYE"}))},z=n(142),_=n(135),C=l.c.aside.withConfig({displayName:"Logo__LogoWrapper",componentId:"sc-1dmboy-0"})(["padding:30px 0;display:flex;justify-content:space-between;align-items:center;"]),N=Object(l.c)(_.Link).withConfig({displayName:"Logo__LogoLink",componentId:"sc-1dmboy-1"})(["display:block;width:28px;height:24px;position:relative;"]),I=function(){return a.a.createElement(C,null,a.a.createElement(N,{to:"/"},a.a.createElement("img",{src:v.a,height:"28px",width:"28px",alt:"Logo"})))},L=(n(150),[{title:"HOME",path:"/"},{title:"ARCHIVE",path:"/archives"},{title:"ABOUT",path:"/about"},{title:"GitHub",path:"https://github.com/jigsawye"}]),j=l.c.div.withConfig({displayName:"Nav__NavWrapper",componentId:"h8swmt-0"})(["display:flex;align-items:center;margin:2px 0 0 auto;a{border:0;font-size:12px;padding:10px;color:#999;text-transform:uppercase;text-decoration:none;transition:color 0.2s ease;&.active{color:#000;}:hover{background:none;color:#000;}}"]),T=function(e){var t=e.to,n=e.children;return t.startsWith("http")?a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n):a.a.createElement(_.Link,{to:t,activeClassName:"active",exact:!0},n)},S=function(){return a.a.createElement(j,null,L.map(function(e){var t=e.title,n=e.path;return a.a.createElement(T,{to:n,key:t},t)}))},M=Object(l.c)(z.a).withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1wabp0g-0"})(["margin:auto;position:relative;display:flex;flex-direction:row;"]),H=function(){return a.a.createElement(M,null,a.a.createElement(I,null),a.a.createElement(S,null))};t.a=function(e){var t=e.children,n=e.site;return a.a.createElement(o.Fragment,null,a.a.createElement(g,null),a.a.createElement(E,{siteMetadata:n.siteMetadata}),a.a.createElement(H,null),t,a.a.createElement(x,null))}},146:function(e,t,n){"use strict";var o=n(133),a=n(135),r=n(0),i=n.n(r),l=n(140),c=o.c.aside.withConfig({displayName:"ArticleTitleSection__Wrapper",componentId:"sc-8eqskn-0"})(["width:100%;padding-bottom:10px;margin-top:35px;margin-bottom:80px;border-bottom:1px solid rgb(234,234,234);"]),p=o.c.h1.withConfig({displayName:"ArticleTitleSection__Title",componentId:"sc-8eqskn-1"})(["color:rgb(0,0,0);font-weight:400;font-size:28px;max-width:650px;text-align:center;padding-left:20px;padding-right:20px;line-height:42px;margin:0px auto;"]),s=o.c.div.withConfig({displayName:"ArticleTitleSection__Date",componentId:"sc-8eqskn-2"})(["color:rgb(153,153,153);font-size:12px;text-align:center;margin:20px 0px 40px;"]),d=function(e){var t=e.title,n=e.date;return i.a.createElement(c,null,i.a.createElement(p,null,t),i.a.createElement(s,null,Object(l.a)(n)))},u=o.c.div.withConfig({displayName:"ArticleContent",componentId:"sc-1ah6ipv-0"})(["font-weight:400;font-size:14px;line-height:24px;margin:30px 0 15px;p{margin-bottom:20px;}a{color:rgb(6,125,247);font-size:inherit;text-decoration:none;}h1,h2,h3,h4,h5,h6{font-weight:bold;font-size:18px;margin-top:40px;}strong{font-weight:600;}blockquote{border-left:5px solid;margin:0;padding-left:10px;}ul{list-style-type:none;margin-left:15px;padding:0px;li{font-size:14px;line-height:24px;margin-bottom:10px;ul{margin-top:10px;}:before{content:'-';display:inline-block;color:rgb(153,153,153);position:absolute;margin-left:-15px;}}}img{width:100%;display:block;text-align:center;margin:40px 0px;}code[class*='language-text'],code:not([class*='language-']){color:rgb(189,16,224);font-size:0.9em;white-space:pre-wrap;:before{content:'`';}:after{content:'`';}}"]),m=o.c.div.withConfig({displayName:"ArticleWrapper",componentId:"sc-15s683c-0"})(["border-bottom:1px solid rgb(234,234,234);padding:50px 0px 40px;transition:background 200ms;&:first-of-type{border-top:1px solid rgb(234,234,234);}&::last-of-type{border-bottom:0;}&:hover{background:rgb(250,250,250);}"]);n.d(t,"d",function(){return g}),n.d(t,"f",function(){return f}),n.d(t,"e",function(){return b}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return m});var g=o.c.div.withConfig({displayName:"Article__DateWrapper",componentId:"sc-16rrwn9-0"})(["margin-top:0px;color:rgb(153,153,153);font-size:12px;"]),f=Object(o.c)(a.Link).withConfig({displayName:"Article__TitleLink",componentId:"sc-16rrwn9-1"})(["display:block;text-decoration:none;color:rgb(0,0,0);font-size:24px;margin-top:20px;margin-bottom:0px;text-align:left;&:hover{text-decoration:underline;}"]),b=Object(o.c)(a.Link).withConfig({displayName:"Article__ReadMoreLink",componentId:"sc-16rrwn9-2"})(["font-size:12px;color:rgb(0,0,0);text-transform:uppercase;"])}}]);
//# sourceMappingURL=component---src-pages-index-js-bace9afb49d15931a72c.js.map