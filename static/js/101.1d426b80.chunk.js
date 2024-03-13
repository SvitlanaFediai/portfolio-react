"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[101],{101:(t,i,e)=>{e.r(i),e.d(i,{Particle:()=>f});var s=e(1675),o=e(9271),a=e(6949),n=e(5463),l=e(514),r=e(534),h=e(4941),c=e(8413);const d=2,u=.5;function p(t){if(!(0,a.dB)(t.outMode,t.checkModes))return;const i=t.radius*d;t.coord>t.maxCoord-i?t.setCb(-t.radius):t.coord<i&&t.setCb(t.radius)}class f{constructor(t,i){var e=this;this.container=i,this._calcPosition=function(t,i,a){var n,l,r,h;let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;for(const[,o]of t.plugins){const t=void 0!==o.particlePosition?o.particlePosition(i,e):void 0;if(t)return s.U.create(t.x,t.y,a)}const d=t.canvas.size,u=(0,o.mC)({size:d,position:i}),f=s.U.create(u.x,u.y,a),v=e.getRadius(),g=e.options.move.outModes,y=i=>{p({outMode:i,checkModes:["bounce"],coord:f.x,maxCoord:t.canvas.size.width,setCb:t=>f.x+=t,radius:v})},w=i=>{p({outMode:i,checkModes:["bounce"],coord:f.y,maxCoord:t.canvas.size.height,setCb:t=>f.y+=t,radius:v})};if(y(null!==(n=g.left)&&void 0!==n?n:g.default),y(null!==(l=g.right)&&void 0!==l?l:g.default),w(null!==(r=g.top)&&void 0!==r?r:g.default),w(null!==(h=g.bottom)&&void 0!==h?h:g.default),e._checkOverlap(f,c)){const i=1;return e._calcPosition(t,void 0,a,c+i)}return f},this._calculateVelocity=()=>{const t=(0,o.lQ)(this.direction).copy(),i=this.options.move;if("inside"===i.direction||"outside"===i.direction)return t;const e=(0,o.Id)((0,o.Gu)(i.angle.value)),s=(0,o.Id)((0,o.Gu)(i.angle.offset)),a={left:s-e*u,right:s+e*u};return i.straight||(t.angle+=(0,o.vd)((0,o.Cs)(a.left,a.right))),i.random&&"number"===typeof i.speed&&(t.length*=(0,o.sZ)()),t},this._checkOverlap=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const s=e.options.collisions,a=e.getRadius();if(!s.enable)return!1;const l=s.overlap;if(l.enable)return!1;const r=l.retries;if(r>=0&&i>r)throw new Error("".concat(n.gK," particle is overlapping and can't be placed"));return!!e.container.particles.find((i=>(0,o.Sp)(t,i.position)<a+i.getRadius()))},this._getRollColor=t=>{var i;if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;const e=this.roll.horizontal&&this.roll.vertical?1*d:1,s=this.roll.horizontal?Math.PI*u:0;return Math.floor(((null!==(i=this.roll.angle)&&void 0!==i?i:0)+s)/(Math.PI/e))%d?this.backColor?this.backColor:this.roll.alter?(0,h.PL)(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{var i,e;const n=this.container,l=(0,o.Gu)(this.options.zIndex.value);this.position=this._calcPosition(n,t,(0,o.uZ)(l,0,n.zLayers)),this.initialPosition=this.position.copy();const r=n.canvas.size;switch(this.moveCenter={...(0,a.bt)(this.options.move.center,r),radius:null!==(i=this.options.move.center.radius)&&void 0!==i?i:0,mode:null!==(e=this.options.move.center.mode)&&void 0!==e?e:"percent"},this.direction=(0,o.Gk)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=s.O.origin},this._engine=t}destroy(t){var i;if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const e=this.container,s=this.pathGenerator,o=e.shapeDrawers.get(this.shape);null===o||void 0===o||null===(i=o.particleDestroy)||void 0===i||i.call(o,this);for(const[,l]of e.plugins){var a;null===(a=l.particleDestroyed)||void 0===a||a.call(l,this,t)}for(const l of e.particles.updaters){var n;null===(n=l.particleDestroyed)||void 0===n||n.call(l,this,t)}null===s||void 0===s||s.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}async draw(t){const i=this.container,e=i.canvas;for(const[,s]of i.plugins)await e.drawParticlePlugin(s,this,t);await e.drawParticle(this,t)}getFillColor(){var t;return this._getRollColor(null!==(t=this.bubble.color)&&void 0!==t?t:(0,l.gW)(this.color))}getMass(){return this.getRadius()**2*Math.PI*u}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){var t;return null!==(t=this.bubble.radius)&&void 0!==t?t:this.size.value}getStrokeColor(){var t;return this._getRollColor(null!==(t=this.bubble.color)&&void 0!==t?t:(0,l.gW)(this.strokeColor))}async init(t,i,e,s){var h,d,u,p,f,v,g,y,w,b,C;const m=this.container,P=this._engine;this.id=t,this.group=s,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const _=m.retina.pixelRatio,z=m.actualOptions,D=(0,c.x)(this._engine,m,z.particles),k=D.effect.type,x=D.shape.type,{reduceDuplicates:R}=D;this.effect=(0,a.wA)(k,this.id,R),this.shape=(0,a.wA)(x,this.id,R);const G=D.effect,I=D.shape;if(e){var M,A;if(null!==(M=e.effect)&&void 0!==M&&M.type){const t=e.effect.type,i=(0,a.wA)(t,this.id,R);i&&(this.effect=i,G.load(e.effect))}if(null!==(A=e.shape)&&void 0!==A&&A.type){const t=e.shape.type,i=(0,a.wA)(t,this.id,R);i&&(this.shape=i,I.load(e.shape))}}this.effectData=function(t,i,e,s){const o=i.options[t];if(o)return(0,a.ZB)({close:i.close,fill:i.fill},(0,a.wA)(o,e,s))}(this.effect,G,this.id,R),this.shapeData=function(t,i,e,s){const o=i.options[t];if(o)return(0,a.ZB)({close:i.close,fill:i.fill},(0,a.wA)(o,e,s))}(this.shape,I,this.id,R),D.load(e);const F=this.effectData;F&&D.load(F.particles);const S=this.shapeData;S&&D.load(S.particles);const V=new r.o(P,m);V.load(m.actualOptions.interactivity),V.load(D.interactivity),this.interactivity=V,this.effectFill=null!==(h=null===F||void 0===F?void 0:F.fill)&&void 0!==h?h:D.effect.fill,this.effectClose=null!==(d=null===F||void 0===F?void 0:F.close)&&void 0!==d?d:D.effect.close,this.shapeFill=null!==(u=null===S||void 0===S?void 0:S.fill)&&void 0!==u?u:D.shape.fill,this.shapeClose=null!==(p=null===S||void 0===S?void 0:S.close)&&void 0!==p?p:D.shape.close,this.options=D;const E=this.options.move.path;this.pathDelay=(0,o.Gu)(E.delay.value)*n.X5,E.generator&&(this.pathGenerator=this._engine.getPathGenerator(E.generator),this.pathGenerator&&m.addPath(E.generator,this.pathGenerator)&&await this.pathGenerator.init(m)),m.retina.initParticle(this),this.size=(0,a.V0)(this.options.size,_),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(i),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy();this.moveDecay=1-(0,o.Gu)(this.options.move.decay);const O=m.particles;O.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/m.zLayers,this.sides=24;let Z=m.effectDrawers.get(this.effect);Z||(Z=this._engine.getEffectDrawer(this.effect),Z&&m.effectDrawers.set(this.effect,Z)),null!==(f=Z)&&void 0!==f&&f.loadEffect&&await Z.loadEffect(this);let L=m.shapeDrawers.get(this.shape);L||(L=this._engine.getShapeDrawer(this.shape),L&&m.shapeDrawers.set(this.shape,L)),null!==(v=L)&&void 0!==v&&v.loadShape&&await L.loadShape(this);const T=null===(g=L)||void 0===g?void 0:g.getSidesCount;T&&(this.sides=T(this)),this.spawning=!1,this.shadowColor=(0,l.tX)(this.options.shadow.color);for(const o of O.updaters)await o.init(this);for(const o of O.movers){var B;await(null===(B=o.init)||void 0===B?void 0:B.call(o,this))}await(null===(y=Z)||void 0===y||null===(w=y.particleInit)||void 0===w?void 0:w.call(y,m,this)),await(null===(b=L)||void 0===b||null===(C=b.particleInit)||void 0===C?void 0:C.call(b,m,this));for(const[,o]of m.plugins){var U;null===(U=o.particleCreated)||void 0===U||U.call(o,this)}}isInsideCanvas(){const t=this.getRadius(),i=this.container.canvas.size,e=this.position;return e.x>=-t&&e.y>=-t&&e.y<=i.height+t&&e.x<=i.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const i of this.container.particles.updaters){var t;null===(t=i.reset)||void 0===t||t.call(i,this)}}}}}]);
//# sourceMappingURL=101.1d426b80.chunk.js.map