"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[6271],{6271:(t,e,o)=>{o.r(e),o.d(e,{Attractor:()=>i});var a=o(4709);class i extends a.$S{constructor(t){super(t)}clear(){}init(){}async interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,a.Gu)(t.options.move.attract.distance)*e.retina.pixelRatio);const o=t.attractDistance,i=t.getPosition(),c=e.particles.quadTree.queryCircle(i,o);for(const r of c){if(t===r||!r.options.move.attract.enable||r.destroyed||r.spawning)continue;const e=r.getPosition(),{dx:o,dy:c}=(0,a.oW)(i,e),s=t.options.move.attract.rotate,n=o/(1e3*s.x),l=c/(1e3*s.y),p=r.size.value/t.size.value,u=1/p;t.velocity.x-=n*p,t.velocity.y-=l*p,r.velocity.x+=n*u,r.velocity.y+=l*u}await Promise.resolve()}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=6271.fe7145f5.chunk.js.map