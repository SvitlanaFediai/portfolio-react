"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[8430],{8430:(i,t,n)=>{n.r(t),n.d(t,{applyDistance:()=>y,applyPath:()=>u,getProximitySpeedFactor:()=>d,initSpin:()=>x,move:()=>p,spin:()=>v});var e=n(4709);const o=.5,a=0,s=1,c=60,l=0,r=.01;function y(i){var t,n;const s=i.initialPosition,{dx:c,dy:l}=(0,e.oW)(s,i.position),r=Math.abs(c),y=Math.abs(l),{maxDistance:p}=i.retina,v=p.horizontal,u=p.vertical;if(!v&&!u)return;const d=null!==(n=u&&y>=u)&&void 0!==n&&n;if(!(null!==(t=v&&r>=v)&&void 0!==t&&t)&&!d||i.misplaced){if((!v||r<v)&&(!u||y<u)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){const t=i.position,n=i.velocity;v&&(t.x<s.x&&n.x<a||t.x>s.x&&n.x>a)&&(n.x*=-(0,e.sZ)()),u&&(t.y<s.y&&n.y<a||t.y>s.y&&n.y>a)&&(n.y*=-(0,e.sZ)())}}else i.misplaced=!!v&&r>v||!!u&&y>u,v&&(i.velocity.x=i.velocity.y*o-i.velocity.x),u&&(i.velocity.y=i.velocity.x*o-i.velocity.y)}async function p(i,t,n,e,o,l){await u(i,l);const r=i.gravity,y=null!==r&&void 0!==r&&r.enable&&r.inverse?-s:s;o&&n&&(i.velocity.x+=o*l.factor/(c*n)),null!==r&&void 0!==r&&r.enable&&n&&(i.velocity.y+=y*(r.acceleration*l.factor)/(c*n));const p=i.moveDecay;i.velocity.multTo(p);const v=i.velocity.mult(n);null!==r&&void 0!==r&&r.enable&&e>a&&(!r.inverse&&v.y>=a&&v.y>=e||r.inverse&&v.y<=a&&v.y<=-e)&&(v.y=y*e,n&&(i.velocity.y=v.y/n));const d=i.options.zIndex,x=(s-i.zIndexFactor)**d.velocityRate;v.multTo(x);const{position:h}=i;h.addTo(v),t.vibrate&&(h.x+=Math.sin(h.x*Math.cos(h.y)),h.y+=Math.cos(h.y*Math.sin(h.x)))}function v(i,t){const n=i.container;if(!i.spin)return;const e={x:"clockwise"===i.spin.direction?Math.cos:Math.sin,y:"clockwise"===i.spin.direction?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*e.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*e.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;const a=Math.max(n.canvas.size.width,n.canvas.size.height),c=a*o;i.spin.radius>c?(i.spin.radius=c,i.spin.acceleration*=-s):i.spin.radius<l&&(i.spin.radius=l,i.spin.acceleration*=-s),i.spin.angle+=t*r*(s-i.spin.radius/a)}async function u(i,t){var n;const o=i.options.move.path;if(!o.enable)return;if(i.lastPathTime<=i.pathDelay)return void(i.lastPathTime+=t.value);const a=await(null===(n=i.pathGenerator)||void 0===n?void 0:n.generate(i,t));a&&i.velocity.addTo(a),o.clamp&&(i.velocity.x=(0,e.uZ)(i.velocity.x,-s,s),i.velocity.y=(0,e.uZ)(i.velocity.y,-s,s)),i.lastPathTime-=i.pathDelay}function d(i){return i.slow.inRange?i.slow.factor:s}function x(i){var t;const n=i.container,o=i.options.move.spin;if(!o.enable)return;const a=null!==(t=o.position)&&void 0!==t?t:{x:50,y:50},s={x:.01*a.x*n.canvas.size.width,y:.01*a.y*n.canvas.size.height},c=i.getPosition(),l=(0,e.Sp)(c,s),r=(0,e.Gu)(o.acceleration);i.retina.spinAcceleration=r*n.retina.pixelRatio;i.spin={center:s,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:l,acceleration:i.retina.spinAcceleration}}}}]);
//# sourceMappingURL=8430.29e9c76b.chunk.js.map