!function(){var t={},e=function(t,e,i){this.element=t,this.value=e,this.options=i,this.inDrag=!1};e.prototype.valueToRadians=function(t,e,i,n,s){return e=e||100,s=s||0,i=i||360,n=n||0,Math.PI/180*((t-s)*(i-n)/(e-s)+n)},e.prototype.radiansToValue=function(t,e,i,n,s){return e=e||100,i=i||0,n=n||360,s=s||0,(180/Math.PI*t-s)*(e-i)/(n-s)+i},e.prototype.createArc=function(t,e,i,n,s){return d3.svg.arc().innerRadius(t).outerRadius(e).startAngle(i).endAngle(n).cornerRadius(s)},e.prototype.drawArc=function(t,e,i,n,s,o){var r=t.append("path").attr("id",i).attr("d",e).style(n).attr("transform","translate("+this.options.size/2+", "+this.options.size/2+")");return!1===this.options.readOnly&&(s&&r.on("click",s),o&&r.call(o)),r},e.prototype.createArcs=function(){var t=parseInt(this.options.size/2,10),e=this.valueToRadians(this.options.startAngle,360),i=this.valueToRadians(this.options.endAngle,360);this.options.scale.enabled&&(t-=this.options.scale.width+this.options.scale.spaceWidth);var n,s=t-this.options.trackWidth,o=t-this.options.barWidth,r=t-this.options.barWidth,a=t,l=t,c=t,p=t;this.options.barWidth>this.options.trackWidth?(n=(this.options.barWidth-this.options.trackWidth)/2,s-=n,a-=n):this.options.barWidth<this.options.trackWidth&&(n=(this.options.trackWidth-this.options.barWidth)/2,l-=n,c-=n,o-=n,r-=n),this.options.bgColor&&(this.bgArc=this.createArc(0,t,e,i)),"tron"===this.options.skin.type&&(a=a-this.options.skin.width-this.options.skin.spaceWidth,l=l-this.options.skin.width-this.options.skin.spaceWidth,c=c-this.options.skin.width-this.options.skin.spaceWidth,p=p-this.options.skin.width-this.options.skin.spaceWidth,this.hoopArc=this.createArc(t-this.options.skin.width,t,e,i)),this.trackArc=this.createArc(s,a,e,i),this.changeArc=this.createArc(o,l,e,e,this.options.barCap),this.valueArc=this.createArc(r,c,e,e,this.options.barCap),this.interactArc=this.createArc(1,p,e,i)},e.prototype.drawArcs=function(t,e){var i=d3.select(this.element).append("svg").attr("width",this.options.size).attr("height",this.options.size);if(this.options.bgColor&&this.drawArc(i,this.bgArc,"bgArc",{fill:this.options.bgColor}),this.options.displayInput){var n=.2*this.options.size+"px";"auto"!==this.options.fontSize&&(n=this.options.fontSize+"px"),this.options.step<1&&(this.value=this.value.toFixed(1));var s=this.value;"function"==typeof this.options.inputFormatter&&(s=this.options.inputFormatter(s)),i.append("text").attr("id","text").attr("text-anchor","middle").attr("font-size",n).style("fill",this.options.textColor).text(s+this.options.unit||"").attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.06*this.options.size)+")"),this.options.subText.enabled&&(n=.07*this.options.size+"px","auto"!==this.options.subText.font&&(n=this.options.subText.font+"px"),i.append("text").attr("class","sub-text").attr("text-anchor","middle").attr("font-size",n).style("fill",this.options.subText.color).text(this.options.subText.text).attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.15*this.options.size)+")"))}if(this.options.scale.enabled){var o,r,a,l=0,c=0,p=this.valueToRadians(this.options.min,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),h=this.valueToRadians(this.options.max,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),u=0;if(0===this.options.startAngle&&360===this.options.endAngle||(u=1),"dots"===this.options.scale.type){var d=this.options.scale.width;o=this.options.size/2-d,r=this.options.scale.quantity;var f=o+this.options.scale.width;a=d3.range(r).map(function(){return c=l*(h-p)-Math.PI/2+p,l+=1/(r-u),{cx:f+Math.cos(c)*o,cy:f+Math.sin(c)*o,r:d}}),i.selectAll("circle").data(a).enter().append("circle").attr({r:function(t){return t.r},cx:function(t){return t.cx},cy:function(t){return t.cy},fill:this.options.scale.color})}else if("lines"===this.options.scale.type){var v=this.options.scale.height;o=this.options.size/2,r=this.options.scale.quantity,a=d3.range(r).map(function(){return c=l*(h-p)-Math.PI/2+p,l+=1/(r-u),{x1:o+Math.cos(c)*o,y1:o+Math.sin(c)*o,x2:o+Math.cos(c)*(o-v),y2:o+Math.sin(c)*(o-v)}}),i.selectAll("line").data(a).enter().append("line").attr({x1:function(t){return t.x1},y1:function(t){return t.y1},x2:function(t){return t.x2},y2:function(t){return t.y2},"stroke-width":this.options.scale.width,stroke:this.options.scale.color})}}"tron"===this.options.skin.type&&this.drawArc(i,this.hoopArc,"hoopArc",{fill:this.options.skin.color}),this.drawArc(i,this.trackArc,"trackArc",{fill:this.options.trackColor}),this.options.displayPrevious?this.changeElem=this.drawArc(i,this.changeArc,"changeArc",{fill:this.options.prevBarColor}):this.changeElem=this.drawArc(i,this.changeArc,"changeArc",{"fill-opacity":0}),this.valueElem=this.drawArc(i,this.valueArc,"valueArc",{fill:this.options.barColor});var g="pointer";this.options.readOnly&&(g="default"),this.drawArc(i,this.interactArc,"interactArc",{"fill-opacity":0,cursor:g},t,e)},e.prototype.draw=function(t){function e(){s.inDrag=!0,n(d3.event.x-s.options.size/2,d3.event.y-s.options.size/2,!1)}function i(){s.inDrag=!1;var t=d3.mouse(this.parentNode);n(t[0]-s.options.size/2,t[1]-s.options.size/2,!0)}function n(e,i,n){var o,r,a=Math.atan(i/e)/(Math.PI/180);if(e>=0&&0>=i||e>=0&&i>=0?r=90:(r=270,s.options.startAngle<0&&(r=-90)),o=(r+a)*(Math.PI/180),s.value=s.radiansToValue(o,s.options.max,s.options.min,s.options.endAngle,s.options.startAngle),s.value>=s.options.min&&s.value<=s.options.max&&(s.value=Math.round(~~((s.value<0?-.5:.5)+s.value/s.options.step)*s.options.step*100)/100,s.options.step<1&&(s.value=s.value.toFixed(1)),t(s.value),s.valueArc.endAngle(s.valueToRadians(s.value,s.options.max,s.options.endAngle,s.options.startAngle,s.options.min)),s.valueElem.attr("d",s.valueArc),n&&(s.changeArc.endAngle(s.valueToRadians(s.value,s.options.max,s.options.endAngle,s.options.startAngle,s.options.min)),s.changeElem.attr("d",s.changeArc)),s.options.displayInput)){var l=s.value;"function"==typeof s.options.inputFormatter&&(l=s.options.inputFormatter(l)),d3.select(s.element).select("#text").text(l+s.options.unit||"")}}d3.select(this.element).select("svg").remove();var s=this;s.createArcs();var o=d3.behavior.drag().on("drag",e).on("dragend",i);s.drawArcs(i,o),s.options.animate.enabled?s.valueElem.transition().ease(s.options.animate.ease).duration(s.options.animate.duration).tween("",function(){var t=d3.interpolate(s.valueToRadians(s.options.startAngle,360),s.valueToRadians(s.value,s.options.max,s.options.endAngle,s.options.startAngle,s.options.min));return function(e){var i=t(e);s.valueElem.attr("d",s.valueArc.endAngle(i)),s.changeElem.attr("d",s.changeArc.endAngle(i))}}):(s.changeArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),s.changeElem.attr("d",s.changeArc),s.valueArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),s.valueElem.attr("d",s.valueArc))},e.prototype.setValue=function(t){if(!this.inDrag&&this.value>=this.options.min&&this.value<=this.options.max){var e=this.valueToRadians(t,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min);if(this.value=Math.round(~~((0>t?-.5:.5)+t/this.options.step)*this.options.step*100)/100,this.options.step<1&&(this.value=this.value.toFixed(1)),this.changeArc.endAngle(e),d3.select(this.element).select("#changeArc").attr("d",this.changeArc),this.valueArc.endAngle(e),d3.select(this.element).select("#valueArc").attr("d",this.valueArc),this.options.displayInput){var i=this.value;"function"==typeof this.options.inputFormatter&&(i=this.options.inputFormatter(i)),d3.select(this.element).select("#text").text(i+this.options.unit||"")}}},t.Knob=e,t.knobDirective=function(){return{restrict:"E",scope:{value:"=",options:"="},link:function(e,i){e.value=e.value||0;var n={skin:{type:"simple",width:10,color:"rgba(255,0,0,.5)",spaceWidth:5},animate:{enabled:!0,duration:1e3,ease:"bounce"},size:200,startAngle:0,endAngle:360,unit:"",displayInput:!0,inputFormatter:function(t){return t},readOnly:!1,trackWidth:50,barWidth:50,trackColor:"rgba(0,0,0,0)",barColor:"rgba(255,0,0,.5)",prevBarColor:"rgba(0,0,0,0)",textColor:"#222",barCap:0,fontSize:"auto",subText:{enabled:!1,text:"",color:"gray",font:"auto"},bgColor:"",scale:{enabled:!1,type:"lines",color:"gray",width:4,quantity:20,height:10,spaceWidth:15},step:1,displayPrevious:!1,min:0,max:100,dynamicOptions:!1};e.options=angular.merge(n,e.options);var s=new t.Knob(i[0],e.value,e.options);if(e.$watch("value",function(t,e){null===t&&void 0===t||void 0===e||t===e||s.setValue(t)}),e.options.dynamicOptions){var o=!0;e.$watch("options",function(){if(o)o=!1;else{var a=angular.merge(n,e.options);s=new t.Knob(i[0],e.value,a),r()}},!0)}var r=function(){s.draw(function(t){e.$apply(function(){e.value=t})})};r()}}},angular.module("ui.knob",[]).directive("uiKnob",t.knobDirective)}(),function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.X2JS=e()}(this,function(){return function(t){function e(t){var e=t.localName;return null==e&&(e=t.baseName),null!=e&&""!=e||(e=t.nodeName),e}function i(t){return t.prefix}function n(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):t}function s(t,e,i,n){for(var s=0;s<t.length;s++){var o=t[s];if("string"==typeof o){if(o==n)break}else if(o instanceof RegExp){if(o.test(n))break}else if("function"==typeof o&&o(e,i,n))break}return s!=t.length}function o(e,i,n){switch(t.arrayAccessForm){case"property":e[i]instanceof Array?e[i+"_asArray"]=e[i]:e[i+"_asArray"]=[e[i]]}!(e[i]instanceof Array)&&t.arrayAccessFormPaths.length>0&&s(t.arrayAccessFormPaths,e,i,n)&&(e[i]=[e[i]])}function r(t){var e=t.split(/[-T:+Z]/g),i=new Date(e[0],e[1]-1,e[2]),n=e[5].split(".");if(i.setHours(e[3],e[4],n[0]),n.length>1&&i.setMilliseconds(n[1]),e[6]&&e[7]){var s=60*e[6]+Number(e[7]);s=0+("-"==(/\d\d-\d\d:\d\d$/.test(t)?"-":"+")?-1*s:s),i.setMinutes(i.getMinutes()-s-i.getTimezoneOffset())}else-1!==t.indexOf("Z",t.length-1)&&(i=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds())));return i}function a(e,i,n){if(t.datetimeAccessFormPaths.length>0){var o=n.split(".#")[0];return s(t.datetimeAccessFormPaths,e,i,o)?r(e):e}return e}function l(e,i,n,o){return!(i==b.ELEMENT_NODE&&t.xmlElementsFilter.length>0)||s(t.xmlElementsFilter,e,n,o)}function c(n,s){if(n.nodeType==b.DOCUMENT_NODE){for(var r=new Object,p=n.childNodes,h=0;h<p.length;h++){var u=p.item(h);if(u.nodeType==b.ELEMENT_NODE){var d=e(u);r[d]=c(u,d)}}return r}if(n.nodeType==b.ELEMENT_NODE){var r=new Object;r.__cnt=0;for(var p=n.childNodes,h=0;h<p.length;h++){var u=p.item(h),d=e(u);if(u.nodeType!=b.COMMENT_NODE){var f=s+"."+d;l(r,u.nodeType,d,f)&&(r.__cnt++,null==r[d]?(r[d]=c(u,f),o(r,d,f)):(null!=r[d]&&(r[d]instanceof Array||(r[d]=[r[d]],o(r,d,f))),r[d][r[d].length]=c(u,f)))}}for(var v=0;v<n.attributes.length;v++){var g=n.attributes.item(v);r.__cnt++,r[t.attributePrefix+g.name]=g.value}var m=i(n);return null!=m&&""!=m&&(r.__cnt++,r.__prefix=m),null!=r["#text"]&&(r.__text=r["#text"],r.__text instanceof Array&&(r.__text=r.__text.join("\n")),t.stripWhitespaces&&(r.__text=r.__text.trim()),delete r["#text"],"property"==t.arrayAccessForm&&delete r["#text_asArray"],r.__text=a(r.__text,d,s+"."+d)),null!=r["#cdata-section"]&&(r.__cdata=r["#cdata-section"],delete r["#cdata-section"],"property"==t.arrayAccessForm&&delete r["#cdata-section_asArray"]),0==r.__cnt&&"text"==t.emptyNodeForm?r="":1==r.__cnt&&null!=r.__text?r=r.__text:1!=r.__cnt||null==r.__cdata||t.keepCData?r.__cnt>1&&null!=r.__text&&t.skipEmptyTextNodesForObj&&(t.stripWhitespaces&&""==r.__text||""==r.__text.trim())&&delete r.__text:r=r.__cdata,delete r.__cnt,!t.enableToStringFunc||null==r.__text&&null==r.__cdata||(r.toString=function(){return(null!=this.__text?this.__text:"")+(null!=this.__cdata?this.__cdata:"")}),r}if(n.nodeType==b.TEXT_NODE||n.nodeType==b.CDATA_SECTION_NODE)return n.nodeValue}function p(e,i,s,o){var r="<"+(null!=e&&null!=e.__prefix?e.__prefix+":":"")+i;if(null!=s)for(var a=0;a<s.length;a++){var l=s[a],c=e[l];t.escapeMode&&(c=n(c)),r+=" "+l.substr(t.attributePrefix.length)+"=",t.useDoubleQuotes?r+='"'+c+'"':r+="'"+c+"'"}return r+=o?"/>":">"}function h(t,e){return"</"+(null!=t.__prefix?t.__prefix+":":"")+e+">"}function u(t,e){return-1!==t.indexOf(e,t.length-e.length)}function d(e,i){return!!("property"==t.arrayAccessForm&&u(i.toString(),"_asArray")||0==i.toString().indexOf(t.attributePrefix)||0==i.toString().indexOf("__")||e[i]instanceof Function)}function f(t){var e=0;if(t instanceof Object)for(var i in t)d(t,i)||e++;return e}function v(e,i,n){return 0==t.jsonPropertiesFilter.length||""==n||s(t.jsonPropertiesFilter,e,i,n)}function g(e){var i=[];if(e instanceof Object)for(var n in e)-1==n.toString().indexOf("__")&&0==n.toString().indexOf(t.attributePrefix)&&i.push(n);return i}function m(e){var i="";return null!=e.__cdata&&(i+="<![CDATA["+e.__cdata+"]]>"),null!=e.__text&&(t.escapeMode?i+=n(e.__text):i+=e.__text),i}function A(e){var i="";return e instanceof Object?i+=m(e):null!=e&&(t.escapeMode?i+=n(e):i+=e),i}function x(t,e){return""===t?e:t+"."+e}function _(t,e,i,n){var s="";if(0==t.length)s+=p(t,e,i,!0);else for(var o=0;o<t.length;o++)s+=p(t[o],e,g(t[o]),!1),s+=y(t[o],x(n,e)),s+=h(t[o],e);return s}function y(t,e){var i="";if(f(t)>0)for(var n in t)if(!d(t,n)&&(""==e||v(t,n,x(e,n)))){var s=t[n],o=g(s);if(null==s||void 0==s)i+=p(s,n,o,!0);else if(s instanceof Object)if(s instanceof Array)i+=_(s,n,o,e);else if(s instanceof Date)i+=p(s,n,o,!1),i+=s.toISOString(),i+=h(s,n);else{var r=f(s);r>0||null!=s.__text||null!=s.__cdata?(i+=p(s,n,o,!1),i+=y(s,x(e,n)),i+=h(s,n)):i+=p(s,n,o,!0)}else i+=p(s,n,o,!1),i+=A(s),i+=h(s,n)}return i+=A(t)}t=t||{},function(){void 0===t.escapeMode&&(t.escapeMode=!0),t.attributePrefix=t.attributePrefix||"_",t.arrayAccessForm=t.arrayAccessForm||"none",t.emptyNodeForm=t.emptyNodeForm||"text",void 0===t.enableToStringFunc&&(t.enableToStringFunc=!0),t.arrayAccessFormPaths=t.arrayAccessFormPaths||[],void 0===t.skipEmptyTextNodesForObj&&(t.skipEmptyTextNodesForObj=!0),void 0===t.stripWhitespaces&&(t.stripWhitespaces=!0),t.datetimeAccessFormPaths=t.datetimeAccessFormPaths||[],void 0===t.useDoubleQuotes&&(t.useDoubleQuotes=!1),t.xmlElementsFilter=t.xmlElementsFilter||[],t.jsonPropertiesFilter=t.jsonPropertiesFilter||[],void 0===t.keepCData&&(t.keepCData=!1)}();var b={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};this.parseXmlString=function(t){var e=window.ActiveXObject||"ActiveXObject"in window;if(void 0===t)return null;var i;if(window.DOMParser){var n=new window.DOMParser,s=null;if(!e)try{s=n.parseFromString("INVALID","text/xml").getElementsByTagName("parsererror")[0].namespaceURI}catch(t){s=null}try{i=n.parseFromString(t,"text/xml"),null!=s&&i.getElementsByTagNameNS(s,"parsererror").length>0&&(i=null)}catch(t){i=null}}else 0==t.indexOf("<?")&&(t=t.substr(t.indexOf("?>")+2)),i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(t);return i},this.asArray=function(t){return void 0===t||null==t?[]:t instanceof Array?t:[t]},this.toXmlDateTime=function(t){return t instanceof Date?t.toISOString():"number"==typeof t?new Date(t).toISOString():null},this.asDateTime=function(t){return"string"==typeof t?r(t):t},this.xml2json=function(t){return c(t)},this.xml_str2json=function(t){var e=this.parseXmlString(t);return null!=e?this.xml2json(e):null},this.json2xml_str=function(t){return y(t,"")},this.json2xml=function(t){var e=this.json2xml_str(t);return this.parseXmlString(e)},this.getVersion=function(){return"1.2.0"}}});