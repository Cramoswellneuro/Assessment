(function(){var t,i,e,s,n,o,a,h,r,l,c,p,u,d,g=[].slice,m={}.hasOwnProperty,f=function(t,i){for(var e in i)m.call(i,e)&&(t[e]=i[e]);function s(){this.constructor=t}return s.prototype=i.prototype,t.prototype=new s,t.__super__=i.prototype,t},x=[].indexOf||function(t){for(var i=0,e=this.length;i<e;i++)if(i in this&&this[i]===t)return i;return-1};!function(){var t,i,e,s,n,o,a;for(e=0,n=(a=["ms","moz","webkit","o"]).length;e<n&&(o=a[e],!window.requestAnimationFrame);e++)window.requestAnimationFrame=window[o+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];t=null,s=0,i={},window.requestAnimationFrame?window.cancelAnimationFrame||(t=window.requestAnimationFrame,window.requestAnimationFrame=function(e,n){var o;return o=++s,t((function(){if(!i[o])return e()}),n),o},window.cancelAnimationFrame=function(t){return i[t]=!0}):(window.requestAnimationFrame=function(t,i){var e,s,n,o;return e=(new Date).getTime(),o=Math.max(0,16-(e-n)),s=window.setTimeout((function(){return t(e+o)}),o),n=e+o,s},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),d=function(t){var i,e;for(t-=3600*(i=Math.floor(t/3600))+60*(e=Math.floor((t-3600*i)/60)),t+="",e+="";e.length<2;)e="0"+e;for(;t.length<2;)t="0"+t;return(i=i?i+":":"")+e+":"+t},p=function(){var t,i,e;return e=(i=1<=arguments.length?g.call(arguments,0):[])[0],t=i[1],l(e.toFixed(t))},u=function(t,i){var e,s,n;for(e in s={},t)m.call(t,e)&&(n=t[e],s[e]=n);for(e in i)m.call(i,e)&&(n=i[e],s[e]=n);return s},l=function(t){var i,e,s,n;for(s=(e=(t+="").split("."))[0],n="",e.length>1&&(n="."+e[1]),i=/(\d+)(\d{3})/;i.test(s);)s=s.replace(i,"$1,$2");return s+n},c=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},s=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return f(i,t),i.prototype.displayScale=1,i.prototype.forceUpdate=!0,i.prototype.setTextField=function(t,i){return this.textField=t instanceof h?t:new h(t,i)},i.prototype.setMinValue=function(t,i){var e,s,n,o,a;if(this.minValue=t,null==i&&(i=!0),i){for(this.displayedValue=this.minValue,a=[],s=0,n=(o=this.gp||[]).length;s<n;s++)e=o[s],a.push(e.displayedValue=this.minValue);return a}},i.prototype.setOptions=function(t){return null==t&&(t=null),this.options=u(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.options.angle=.5),this.configDisplayScale(),this},i.prototype.configDisplayScale=function(){var t,i,e,s,n;return s=this.displayScale,!1===this.options.highDpiSupport?delete this.displayScale:(i=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=i/t),this.displayScale!==s&&(n=this.canvas.G__width||this.canvas.width,e=this.canvas.G__height||this.canvas.height,this.canvas.width=n*this.displayScale,this.canvas.height=e*this.displayScale,this.canvas.style.width=n+"px",this.canvas.style.height=e+"px",this.canvas.G__width=n,this.canvas.G__height=e),this},i.prototype.parseValue=function(t){return t=parseFloat(t)||Number(t),isFinite(t)?t:0},i}(r=function(){function t(t,e){null==t&&(t=!0),this.clear=null==e||e,t&&i.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var i;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=this.value-this.displayedValue,Math.abs(i/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+i/this.animationSpeed,this.render(),!0)},t}()),h=function(){function t(t,i){this.el=t,this.fractionDigits=i}return t.prototype.render=function(t){return this.el.innerHTML=p(t.displayedValue,this.fractionDigits)},t}(),t=function(t){function i(t,e){if(this.elem=t,this.text=null!=e&&e,i.__super__.constructor.call(this),void 0===this.elem)throw new Error("The element isn't defined.");this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return f(i,t),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.setVal=function(t){return this.value=1*t},i.prototype.render=function(){var t;return t=this.text?d(this.displayedValue.toFixed(0)):l(p(this.displayedValue)),this.elem.innerHTML=t},i}(r),a=function(t){function i(t){if(this.gauge=t,void 0===this.gauge)throw new Error("The element isn't defined.");this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,i.__super__.constructor.call(this,!1,!1),this.setOptions()}return f(i,t),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.options={strokeWidth:.035,length:.1,color:"#000000",iconPath:null,iconScale:1,iconAngle:0},i.prototype.img=null,i.prototype.setOptions=function(t){if(null==t&&(t=null),this.options=u(this.options,t),this.length=2*this.gauge.radius*this.gauge.options.radiusScale*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle,this.options.iconPath)return this.img=new Image,this.img.src=this.options.iconPath},i.prototype.render=function(){var t,i,e,s,n,o,a,h,r;if(t=this.gauge.getAngle.call(this,this.displayedValue),h=Math.round(this.length*Math.cos(t)),r=Math.round(this.length*Math.sin(t)),o=Math.round(this.strokeWidth*Math.cos(t-Math.PI/2)),a=Math.round(this.strokeWidth*Math.sin(t-Math.PI/2)),i=Math.round(this.strokeWidth*Math.cos(t+Math.PI/2)),e=Math.round(this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.beginPath(),this.ctx.fillStyle=this.options.color,this.ctx.arc(0,0,this.strokeWidth,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(o,a),this.ctx.lineTo(h,r),this.ctx.lineTo(i,e),this.ctx.fill(),this.img)return s=Math.round(this.img.width*this.options.iconScale),n=Math.round(this.img.height*this.options.iconScale),this.ctx.save(),this.ctx.translate(h,r),this.ctx.rotate(t+Math.PI/180*(90+this.options.iconAngle)),this.ctx.drawImage(this.img,-s/2,-n/2,s,n),this.ctx.restore()},i}(r),function(){function t(t){this.elem=t}t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){var t,i;return this.textField&&this.textField.text(p(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),i=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:i+"%"}),$(".typical-value",this.elem).css({width:t+"%"})}}(),o=function(t){function e(t){var i,s;this.canvas=t,e.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),i=this.canvas.clientHeight,s=this.canvas.clientWidth,this.canvas.height=i,this.canvas.width=s,this.gp=[new a(this)],this.setOptions()}return f(e,t),e.prototype.elem=null,e.prototype.value=[20],e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.displayedAngle=0,e.prototype.displayedValue=0,e.prototype.lineWidth=40,e.prototype.paddingTop=.1,e.prototype.paddingBottom=.1,e.prototype.percentColors=null,e.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035,iconScale:1},angle:.15,lineWidth:.44,radiusScale:1,fontSize:40,limitMax:!1,limitMin:!1},e.prototype.setOptions=function(t){var i,s,n,o,a;for(null==t&&(t=null),e.__super__.setOptions.call(this,t),this.configPercentColors(),this.extraPadding=0,this.options.angle<0&&(o=Math.PI*(1+this.options.angle),this.extraPadding=Math.sin(o)),this.availableHeight=this.canvas.height*(1-this.paddingTop-this.paddingBottom),this.lineWidth=this.availableHeight*this.options.lineWidth,this.radius=(this.availableHeight-this.lineWidth/2)/(1+this.extraPadding),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),s=0,n=(a=this.gp).length;s<n;s++)(i=a[s]).setOptions(this.options.pointer),i.render();return this.render(),this},e.prototype.configPercentColors=function(){var t,i,e,s,n,o,a;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,o=[],e=s=0,n=this.options.percentColors.length-1;0<=n?s<=n:s>=n;e=0<=n?++s:--s)a=parseInt(c(this.options.percentColors[e][1]).substring(0,2),16),i=parseInt(c(this.options.percentColors[e][1]).substring(2,4),16),t=parseInt(c(this.options.percentColors[e][1]).substring(4,6),16),o.push(this.percentColors[e]={pct:this.options.percentColors[e][0],color:{r:a,g:i,b:t}});return o}},e.prototype.set=function(t){var e,s,n,o,h,r,l,c,p;for(t instanceof Array||(t=[t]),s=n=0,l=t.length-1;0<=l?n<=l:n>=l;s=0<=l?++n:--n)t[s]=this.parseValue(t[s]);if(t.length>this.gp.length)for(s=o=0,c=t.length-this.gp.length;0<=c?o<c:o>c;s=0<=c?++o:--o)(e=new a(this)).setOptions(this.options.pointer),this.gp.push(e);else t.length<this.gp.length&&(this.gp=this.gp.slice(this.gp.length-t.length));for(s=0,r=0,h=t.length;r<h;r++)(p=t[r])>this.maxValue?this.options.limitMax?p=this.maxValue:this.maxValue=p+1:p<this.minValue&&(this.options.limitMin?p=this.minValue:this.minValue=p-1),this.gp[s].value=p,this.gp[s++].setOptions({minValue:this.minValue,maxValue:this.maxValue,angle:this.options.angle});return this.value=Math.max(Math.min(t[t.length-1],this.maxValue),this.minValue),i.add(this),i.run(this.forceUpdate),this.forceUpdate=!1},e.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},e.prototype.getColorForPercentage=function(t,i){var e,s,n,o,a,h,r;if(0===t)e=this.percentColors[0].color;else for(e=this.percentColors[this.percentColors.length-1].color,n=o=0,h=this.percentColors.length-1;0<=h?o<=h:o>=h;n=0<=h?++o:--o)if(t<=this.percentColors[n].pct){!0===i?(r=this.percentColors[n-1]||this.percentColors[0],s=this.percentColors[n],a=(t-r.pct)/(s.pct-r.pct),e={r:Math.floor(r.color.r*(1-a)+s.color.r*a),g:Math.floor(r.color.g*(1-a)+s.color.g*a),b:Math.floor(r.color.b*(1-a)+s.color.b*a)}):e=this.percentColors[n].color;break}return"rgb("+[e.r,e.g,e.b].join(",")+")"},e.prototype.getColorForValue=function(t,i){var e;return e=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(e,i)},e.prototype.renderStaticLabels=function(t,i,e,s){var n,o,a,h,r,l,c,u,d,g;for(this.ctx.save(),this.ctx.translate(i,e),l=/\d+\.?\d?/,r=(n=t.font||"10px Times").match(l)[0],u=n.slice(r.length),o=parseFloat(r)*this.displayScale,this.ctx.font=o+u,this.ctx.fillStyle=t.color||"#000000",this.ctx.textBaseline="bottom",this.ctx.textAlign="center",a=0,h=(c=t.labels).length;a<h;a++)void 0!==(g=c[a]).label?(!this.options.limitMin||g>=this.minValue)&&(!this.options.limitMax||g<=this.maxValue)&&(r=(n=g.font||t.font).match(l)[0],u=n.slice(r.length),o=parseFloat(r)*this.displayScale,this.ctx.font=o+u,d=this.getAngle(g.label)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(p(g.label,t.fractionDigits),0,-s-this.lineWidth/2),this.ctx.rotate(-d)):(!this.options.limitMin||g>=this.minValue)&&(!this.options.limitMax||g<=this.maxValue)&&(d=this.getAngle(g)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(p(g,t.fractionDigits),0,-s-this.lineWidth/2),this.ctx.rotate(-d));return this.ctx.restore()},e.prototype.renderTicks=function(t,i,e,s){var n,o,a,h,r,l,c,p,u,d,g,m,f,x,v,y,V,w,S,M;if(t!=={}){for(l=t.divisions||0,w=t.subDivisions||0,a=t.divColor||"#fff",x=t.subColor||"#fff",h=t.divLength||.7,y=t.subLength||.2,u=parseFloat(this.maxValue)-parseFloat(this.minValue),d=parseFloat(u)/parseFloat(t.divisions),v=parseFloat(d)/parseFloat(t.subDivisions),n=parseFloat(this.minValue),o=0+v,r=(p=u/400)*(t.divWidth||1),V=p*(t.subWidth||1),m=[],S=c=0,g=l+1;c<g;S=c+=1)this.ctx.lineWidth=this.lineWidth*h,f=this.lineWidth/2*(1-h),M=this.radius*this.options.radiusScale+f,this.ctx.strokeStyle=a,this.ctx.beginPath(),this.ctx.arc(0,0,M,this.getAngle(n-r),this.getAngle(n+r),!1),this.ctx.stroke(),o=n+v,n+=d,S!==t.divisions&&w>0?m.push(function(){var t,i,e;for(e=[],t=0,i=w-1;t<i;t+=1)this.ctx.lineWidth=this.lineWidth*y,f=this.lineWidth/2*(1-y),M=this.radius*this.options.radiusScale+f,this.ctx.strokeStyle=x,this.ctx.beginPath(),this.ctx.arc(0,0,M,this.getAngle(o-V),this.getAngle(o+V),!1),this.ctx.stroke(),e.push(o+=v);return e}.call(this)):m.push(void 0);return m}},e.prototype.render=function(){var t,i,e,s,n,o,a,h,r,l,c,p,u,d,g,m,f,x;if(f=this.canvas.width/2,e=this.canvas.height*this.paddingTop+this.availableHeight-(this.radius+this.lineWidth/2)*this.extraPadding,t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",l=this.radius*this.options.radiusScale,this.options.staticLabels&&this.renderStaticLabels(this.options.staticLabels,f,e,l),this.options.staticZones)for(this.ctx.save(),this.ctx.translate(f,e),this.ctx.lineWidth=this.lineWidth,s=0,o=(c=this.options.staticZones).length;s<o;s++)r=(x=c[s]).min,this.options.limitMin&&r<this.minValue&&(r=this.minValue),h=x.max,this.options.limitMax&&h>this.maxValue&&(h=this.maxValue),m=this.radius*this.options.radiusScale,x.height&&(this.ctx.lineWidth=this.lineWidth*x.height,u=this.lineWidth/2*(x.offset||1-x.height),m=this.radius*this.options.radiusScale+u),this.ctx.strokeStyle=x.strokeStyle,this.ctx.beginPath(),this.ctx.arc(0,0,m,this.getAngle(r),this.getAngle(h),!1),this.ctx.stroke();else void 0!==this.options.customFillStyle?i=this.options.customFillStyle(this):null!==this.percentColors?i=this.getColorForValue(this.displayedValue,this.options.generateGradient):void 0!==this.options.colorStop?(0===this.options.gradientType?(d=l-this.lineWidth/2,g=l+this.lineWidth/2,i=this.ctx.createLinearGradient(f,e,d,f,e,g)):i=this.ctx.createLinearGradient(0,0,f,0),i.addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop)):i=this.options.colorStart,this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(f,e,l,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(f,e,l,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),this.ctx.save(),this.ctx.translate(f,e);for(this.options.renderTicks&&this.renderTicks(this.options.renderTicks,f,e,l),this.ctx.restore(),this.ctx.translate(f,e),n=0,a=(p=this.gp).length;n<a;n++)p[n].update(!0);return this.ctx.translate(-f,-e)},e}(s),e=function(t){function e(t){this.canvas=t,e.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return f(e,t),e.prototype.lineWidth=15,e.prototype.displayedValue=0,e.prototype.value=33,e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35,radiusScale:1},e.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},e.prototype.setOptions=function(t){return null==t&&(t=null),e.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.options.radiusScale*(this.canvas.height/2-this.lineWidth/2),this},e.prototype.set=function(t){return this.value=this.parseValue(t),this.value>this.maxValue?this.options.limitMax?this.value=this.maxValue:this.maxValue=this.value:this.value<this.minValue&&(this.options.limitMin?this.value=this.minValue:this.minValue=this.value),i.add(this),i.run(this.forceUpdate),this.forceUpdate=!1},e.prototype.render=function(){var t,i,e,s,n,o;return t=this.getAngle(this.displayedValue),o=this.canvas.width/2,e=this.canvas.height/2,this.textField&&this.textField.render(this),s=this.radius-this.lineWidth/2,n=this.radius+this.lineWidth/2,(i=this.ctx.createLinearGradient(o,e,s,o,e,n)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(o,e,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(o,e,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},e}(s),n=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return f(i,t),i.prototype.strokeGradient=function(t,i,e,s){var n;return(n=this.ctx.createLinearGradient(t,i,e,t,i,s)).addColorStop(0,this.options.shadowColor),n.addColorStop(.12,this.options._orgStrokeColor),n.addColorStop(.88,this.options._orgStrokeColor),n.addColorStop(1,this.options.shadowColor),n},i.prototype.setOptions=function(t){var e,s,n,o;return null==t&&(t=null),i.__super__.setOptions.call(this,t),o=this.canvas.width/2,e=this.canvas.height/2,s=this.radius-this.lineWidth/2,n=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(o,e,s,n),this},i}(e),i={elements:[],animId:null,addAll:function(t){var e,s,n,o;for(o=[],s=0,n=t.length;s<n;s++)e=t[s],o.push(i.elements.push(e));return o},add:function(t){if(x.call(i.elements,t)<0)return i.elements.push(t)},run:function(t){var e,s,n,o,a,h,r;if(null==t&&(t=!1),isFinite(parseFloat(t))||!0===t){for(e=!0,r=[],n=s=0,a=(h=i.elements).length;s<a;n=++s)h[n].update(!0===t)?e=!1:r.push(n);for(o=r.length-1;o>=0;o+=-1)n=r[o],i.elements.splice(n,1);return i.animId=e?null:requestAnimationFrame(i.run)}if(!1===t)return!0===i.animId&&cancelAnimationFrame(i.animId),i.animId=requestAnimationFrame(i.run)}},"function"==typeof window.define&&null!=window.define.amd?define((function(){return{Gauge:o,Donut:n,BaseDonut:e,TextRenderer:h,AnimationUpdater:i}})):"undefined"!=typeof module&&null!=module.exports?module.exports={Gauge:o,Donut:n,BaseDonut:e,TextRenderer:h,AnimationUpdater:i}:(window.Gauge=o,window.Donut=n,window.BaseDonut=e,window.TextRenderer=h,window.AnimationUpdater=i)}).call(this);
