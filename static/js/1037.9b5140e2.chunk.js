"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[1037],{1037:(s,e,t)=>{t.r(e),t.d(e,{CircleWarp:()=>n});var i=t(4709);class n extends i.Cd{constructor(s,e,t,i){super(s,e,t),this.canvasSize=i,this.canvasSize={...i}}contains(s){const{width:e,height:t}=this.canvasSize,{x:i,y:n}=s;return super.contains(s)||super.contains({x:i-e,y:n})||super.contains({x:i-e,y:n-t})||super.contains({x:i,y:n-t})}intersects(s){if(super.intersects(s))return!0;const e=s,t=s,n={x:s.position.x-this.canvasSize.width,y:s.position.y-this.canvasSize.height};if(void 0!==t.radius){const s=new i.Cd(n.x,n.y,2*t.radius);return super.intersects(s)}if(void 0!==e.size){const s=new i.Ae(n.x,n.y,2*e.size.width,2*e.size.height);return super.intersects(s)}return!1}}}}]);
//# sourceMappingURL=1037.9b5140e2.chunk.js.map