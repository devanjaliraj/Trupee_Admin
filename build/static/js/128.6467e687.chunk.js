(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[128],{1961:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),r=t(16),c=t(15),s=t(0),o=t.n(s),i=t(1082),m=t(1080),u=t(1081),p=t(171),d=t(1085),f=t(795),b=t(794),E=t(791),h=(t(561),t(56)),y=t(790),g=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y.a,{breadCrumbTitle:"Equirty Cash",breadCrumbParent:"Home",breadCrumbActive:"Equirty Cash"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Equirty Cash")),o.a.createElement(u.a,null,o.a.createElement(h.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/trade/equirtyCashList")}},"Back")}}))),o.a.createElement(d.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"mb-2"},o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Date"),o.a.createElement(E.a,{type:"date",placeholder:"Enter User Id"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Time"),o.a.createElement(E.a,{type:"time",placeholder:"Enter User Id"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,{for:"exampleSelect"},"Equity Script"),o.a.createElement(E.a,{id:"exampleSelect",name:"select",type:"select"},o.a.createElement("option",null,"Select Script"),o.a.createElement("option",null,"CE"),o.a.createElement("option",null,"PF"),o.a.createElement("option",null,"BUY"),o.a.createElement("option",null,"SELL"))),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Script Name"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Script Name"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Tip"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Tip"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,{for:"exampleSelect"},"Call Type"),o.a.createElement(E.a,{id:"exampleSelect",name:"select",type:"select"},o.a.createElement("option",null,"Select Typr"),o.a.createElement("option",null,"Intraday"),o.a.createElement("option",null,"BTST"),o.a.createElement("option",null,"Short Term"),o.a.createElement("option",null,"Intraday or BTST"),o.a.createElement("option",null,"Intraday (Risky)"),o.a.createElement("option",null,"Intraday (Trailed)"),o.a.createElement("option",null,"Intraday (Re-entry)"),o.a.createElement("option",null,"Intraday (Re-entry- Trailed)"),o.a.createElement("option",null,"Intraday (Hero-Zero)"))),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Active Value"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Active Value"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"SL"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Stop Loss"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Quantity"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Quantity"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Investment Amount"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Investment Amount"})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Lots Price"),o.a.createElement(E.a,{type:"text",placeholder:"Enter Lots Price"}))),o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update All Trade")))))))}}]),t}(o.a.Component);a.default=g},791:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),c=t(12),s=t(0),o=t.n(s),i=t(1),m=t.n(i),u=t(4),p=t.n(u),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,s=e.valid,i=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,E=e.innerRef,h=Object(l.a)(e,f),y=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),N="form-control";b?(N+="-plaintext",v=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":y&&(N=u?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var O=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,N),t);return("input"===v||m&&"function"===typeof m)&&(h.type=r),h.children&&!b&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(v,Object(n.a)({},h,{ref:E,className:O,"aria-invalid":i}))},a}(o.a.Component);E.propTypes=b,E.defaultProps={type:"text"},a.a=E},794:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},E={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,i=e.check,d=e.size,f=e.for,b=Object(l.a)(e,p),E=[];s.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var r,c=!n;if(Object(u.isObject)(l)){var s,o=c?"-":"-"+a+"-";r=h(c,a,l.size),E.push(Object(u.mapToCssModules)(m()(((s={})[r]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s))),t)}else r=h(c,a,l),E.push(r)}}));var y=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,E,!!E.length&&"col-form-label"),t);return c.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:y}))};y.propTypes=b,y.defaultProps=E,a.a=y},795:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),c=t(12),s=t(0),o=t.n(s),i=t(1),m=t.n(i),u=t(4),p=t.n(u),d=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,s=e.innerRef,i=Object(l.a)(e,f),m=Object(d.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return o.a.createElement(c,Object(n.a)({},i,{ref:s,className:m}))},a}(s.Component);E.propTypes=b,E.defaultProps={tag:"form"},a.a=E}}]);
//# sourceMappingURL=128.6467e687.chunk.js.map