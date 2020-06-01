(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(331)),i={title:"HTTP \ubd88\ub7ec\uc624\uae30"},p={id:"pipeline/workflow/workspace/import-data/http",title:"HTTP \ubd88\ub7ec\uc624\uae30",description:"## HTTP \ubd88\ub7ec\uc624\uae30",source:"@site/docs/pipeline/workflow/workspace/import-data/http.md",permalink:"/docs/pipeline/workflow/workspace/import-data/http",sidebar:"pipeline",previous:{title:"HDFS \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/hdfs"},next:{title:"ICOS \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/icos"}},l=[{value:"HTTP \ubd88\ub7ec\uc624\uae30",id:"http-\ubd88\ub7ec\uc624\uae30",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"http-\ubd88\ub7ec\uc624\uae30"},"HTTP \ubd88\ub7ec\uc624\uae30"),Object(o.b)("p",null,"HTTP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec Batch Pipeline\uc73c\ub85c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub178\ub4dc\uc774\ub2e4."),Object(o.b)("p",null,"\uc88c\uce21 ","[\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc \uc911 ","[HTTP\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/import-data/impdata004_http_main.png",alt:"impdata004"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"file : \ubd88\ub7ec\uc62c HTTP\ud30c\uc77c \uacbd\ub85c\ub97c \uc785\ub825\ud55c\ub2e4. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"[\uc5f0\uacb0\ud14c\uc2a4\ud2b8]"," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uc815\uc0c1\uc801\uc73c\ub85c \ub85c\ub529\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."))),Object(o.b)("li",{parentName:"ol"},"format : \ubd88\ub7ec\uc62c \ud30c\uc77c\uc758 \ub370\uc774\ud130 \ud3ec\ub9f7\uc744 \uc120\ud0dd\ud55c\ub2e4(csv, json\uc911 \ud0dd1)."),Object(o.b)("li",{parentName:"ol"},"delimiter : \uad6c\ubd84\uc790\ub97c \uc785\ub825\ud55c\ub2e4."),Object(o.b)("li",{parentName:"ol"},"option : \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158\uc744 \uc124\uc815\ud55c\ub2e4.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"key: header, value : true = \ud5e4\ub354 \uc124\uc815 \uc5ec\ubd80 "),Object(o.b)("li",{parentName:"ol"},"key: nullValue, value : Null = Null \ubb38\uc790\uc5f4 \ucc98\ub9ac"),Object(o.b)("li",{parentName:"ol"},"key: nanValue, value : NaN = NaN \ubb38\uc790\uc5f4 \ucc98\ub9ac"))),Object(o.b)("li",{parentName:"ol"},"schema : column \ubc0f dataType\ub97c \uc815\uc758\ud55c\ub2e4(\uc6b0\uce21 \ubc84\ud2bc\uc744 \uc774\uc6a9\ud558\uc5ec \uc804\uccb4 \ud30c\uc2f1 \ubc0f \uc77c\ubd80 \ucd94\uac00 \uac00\ub2a5).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Schema\ub97c \ud30c\uc2f1\ud558\uc5ec \ub4a4\uc5d0 \uc5f0\uacb0\ub418\ub294 ETL \uc791\uc5c5\uc5d0\uc11c \uc0ac\uc6a9\uac00\ub2a5\ud558\ub2e4."),Object(o.b)("li",{parentName:"ul"},"\uc790\ub3d9\ud30c\uc2f1\ud31d\uc5c5 \uc0ac\uc6a9\ubc95\uc740 HDFS\ubd88\ub7ec\uc624\uae30\uc758 \ub0b4\uc6a9\uacfc \uac19\ub2e4."))),Object(o.b)("li",{parentName:"ol"},"params : parameters\ub97c \uc785\ub825\ud55c\ub2e4.")))}u.isMDXComponent=!0},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,s=b["".concat(i,".").concat(f)]||b[f]||m[f]||o;return r?a.a.createElement(s,p({ref:t},c,{components:r})):a.a.createElement(s,p({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);