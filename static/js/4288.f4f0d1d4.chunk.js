"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[4288],{4288:(e,s,t)=>{t.r(s),t.d(s,{DestroyOutMode:()=>r});var o=t(4709);class r{constructor(e){this.container=e,this.modes=["destroy"]}async update(e,s,t,r){if(!this.modes.includes(r))return;const i=this.container;switch(e.outType){case"normal":case"outside":if((0,o.Ac)(e.position,i.canvas.size,o.OW.origin,e.getRadius(),s))return;break;case"inside":{const{dx:s,dy:t}=(0,o.oW)(e.position,e.moveCenter),{x:r,y:i}=e.velocity;if(r<0&&s>e.moveCenter.radius||i<0&&t>e.moveCenter.radius||r>=0&&s<-e.moveCenter.radius||i>=0&&t<-e.moveCenter.radius)return;break}}i.particles.remove(e,void 0,!0),await Promise.resolve()}}}}]);
//# sourceMappingURL=4288.f4f0d1d4.chunk.js.map