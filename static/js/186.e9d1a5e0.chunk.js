"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[186],{186:(e,o,t)=>{t.r(o),t.d(o,{Collider:()=>i});var n=t(4709);async function s(e,o,n,s){switch(e.options.collisions.mode){case"absorb":{const{absorb:i}=await t.e(3826).then(t.bind(t,3826));i(e,o,n,s);break}case"bounce":{const{bounce:n}=await t.e(4896).then(t.bind(t,4896));n(e,o);break}case"destroy":{const{destroy:n}=await t.e(1927).then(t.bind(t,1927));n(e,o);break}}}class i extends n.$S{constructor(e){super(e)}clear(){}init(){}async interact(e,o){if(e.destroyed||e.spawning)return;const t=this.container,i=e.getPosition(),a=e.getRadius(),r=t.particles.quadTree.queryCircle(i,2*a);for(const c of r){if(e===c||!c.options.collisions.enable||e.options.collisions.mode!==c.options.collisions.mode||c.destroyed||c.spawning)continue;const r=c.getPosition(),l=c.getRadius();if(Math.abs(Math.round(i.z)-Math.round(r.z))>a+l)continue;(0,n.Sp)(i,r)>a+l||await s(e,c,o,t.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=186.e9d1a5e0.chunk.js.map