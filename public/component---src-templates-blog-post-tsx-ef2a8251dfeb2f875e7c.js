(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{b1Q2:function(e,t,a){"use strict";function r(e){return e+" "+(e>1?"mins":"min")+" read"}a.d(t,"a",(function(){return r}))},cZrw:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=a("9eSz"),o=a.n(i),s=a("9Dj+"),c=a("H8eV"),m=a("gU7r"),u=a("rB5o"),p=a("b1Q2");t.default=function(e){var t=e.data,a=e.pageContext,r=e.location,i=t.markdownRemark,f=t.site.siteMetadata.title,d=a.previous,g=a.next;i.fields.slug;return n.a.createElement(s.a,{location:r,title:f},n.a.createElement(c.a,{title:""+i.frontmatter.title,description:i.frontmatter.description||i.excerpt,keywords:i.frontmatter.keywords}),n.a.createElement("div",{className:"blog-post"},n.a.createElement("h1",{style:{marginTop:0}},i.frontmatter.published?"":"DRAFT: ",i.frontmatter.title),n.a.createElement("small",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginTop:Object(u.a)(-1)}),title:i.frontmatter.longDate},i.frontmatter.shortDate," ·"," ",Object(p.a)(i.timeToRead)),n.a.createElement(m.a,{items:i.frontmatter.categories}),n.a.createElement(o.a,{fluid:i.frontmatter.cover.childImageSharp.fluid,alt:i.frontmatter.coverAuthor,className:"u-full-width",style:{marginTop:Object(u.a)(1)}}),n.a.createElement("div",{style:{marginTop:Object(u.a)(1)},dangerouslySetInnerHTML:{__html:i.html}}),n.a.createElement("hr",{style:{margin:Object(u.a)(1)+" 0"}}),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,d&&n.a.createElement(l.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),n.a.createElement("li",null,g&&n.a.createElement(l.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))))}},gU7r:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);var l=a("rB5o");t.a=function(e){var t=e.items;return n.a.createElement("div",{className:"pills"},t.map((function(e,t){return n.a.createElement("span",{className:"pill pill--"+(a=e,encodeURIComponent(a.toLowerCase()).replace(/%[0-9A-F]{2}/gi,"")),key:t,style:{marginRight:Object(l.a)(1/4)}},function(e){var t=e[0],a=e.slice(1);return""+t.toUpperCase()+a}(e));var a})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-ef2a8251dfeb2f875e7c.js.map