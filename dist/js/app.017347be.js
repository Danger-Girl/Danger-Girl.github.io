(function(t){function e(e){for(var i,r,h=e[0],a=e[1],c=e[2],u=0,d=[];u<h.length;u++)r=h[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,h=1;h<n.length;h++){var a=n[h];0!==o[a]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/danger-girl.github.io/";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],a=h.push.bind(h);h.push=e,h=h.slice();for(var c=0;c<h.length;c++)e(h[c]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3084:function(t,e,n){"use strict";n("d930")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Snake")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" Le Serpent ")]),n("canvas",{ref:"snake",attrs:{id:"snake",width:t.width*t.cellSize,height:t.height*t.cellSize}})])},h=[],a=(n("7db0"),n("159b"),n("cb29"),{name:"Snake",data:function(){return{width:50,height:30,cellSize:20,snake:[],nextFoodPosition:{x:0,y:0},nextDirection:null,directions:[{keyCode:37,move:{x:-1,y:0}},{keyCode:38,move:{x:0,y:-1}},{keyCode:39,move:{x:1,y:0}},{keyCode:40,move:{x:0,y:1}}]}},mounted:function(){this.context=this.$refs.snake.getContext("2d"),this.resetGame(),window.addEventListener("keydown",this.onKeyDown),this.interval=setInterval(this.moveNext,100)},methods:{resetGame:function(){this.snake=[{x:this.width/2,y:this.height/2}],this.nextDirection=null,this.computeNewFoodPosition(),this.drawGame()},computeNewFoodPosition:function(){var t=!1;while(!t){var e={x:Math.floor(Math.random()*this.width),y:Math.floor(Math.random()*this.height)},n=this.snake.find((function(t){return t.x===e.x&&t.y===e.y}));n||(this.nextFoodPosition=e,t=!0)}this.drawGame()},moveNext:function(){if(null!=this.nextDirection){if(this.snake.unshift({x:this.snake[0].x+this.nextDirection.move.x,y:this.snake[0].y+this.nextDirection.move.y}),this.snake[0].x===this.nextFoodPosition.x&&this.snake[0].y===this.nextFoodPosition.y?this.computeNewFoodPosition():this.snake.pop(),this.snake[0].x<0||this.snake[0].x>=this.width||this.snake[0].y<0||this.snake[0].y>=this.height)return window.alert("T'as perdu CHEH !"),void this.resetGame();for(var t=1;t<this.snake.length;t++)if(this.snake[0].x===this.snake[t].x&&this.snake[0].y===this.snake[t].y)return this.resetGame(),void window.alert("Cheh perdu t'as touché le corps");this.drawGame()}},onKeyDown:function(t){var e=this.directions.find((function(e){return e.keyCode==t.keyCode}));e&&(null!=this.nextDirection&&2==Math.abs(this.nextDirection.keyCode-e.keyCode)||(this.nextDirection=e))},drawGame:function(){var t=this;this.context.clearRect(0,0,this.width*this.cellSize,this.height*this.cellSize),this.context.beginPath(),this.snake.forEach((function(e){t.context.rect(e.x*t.cellSize,e.y*t.cellSize,t.cellSize,t.cellSize),t.context.fillStyle="#3D3E48",t.context.fill()})),this.context.closePath(),this.context.beginPath(),this.context.rect(this.nextFoodPosition.x*this.cellSize,this.nextFoodPosition.y*this.cellSize,this.cellSize,this.cellSize),this.context.fillStyle="#AC4327",this.context.fill(),this.context.closePath()}}}),c=a,l=(n("3084"),n("2877")),u=Object(l["a"])(c,r,h,!1,null,null,null),d=u.exports,f={name:"App",components:{Snake:d}},p=f,x=Object(l["a"])(p,o,s,!1,null,null,null),y=x.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(y)}}).$mount("#app")},d930:function(t,e,n){}});
//# sourceMappingURL=app.017347be.js.map