"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[6420],{6420:(e,t,i)=>{i.r(t),i.d(t,{Repulser:()=>c});var s=i(4709),o=i(4794);const n="repulse";class c extends s.L8{constructor(e,t){super(t),this._clickRepulse=()=>{var e;const t=this.container,i=t.actualOptions.interactivity.modes.repulse;if(!i)return;const o=null!==(e=t.repulse)&&void 0!==e?e:{particles:[]};if(o.finish||(o.count||(o.count=0),o.count++,o.count===t.particles.count&&(o.finish=!0)),o.clicking){const e=t.retina.repulseModeDistance;if(!e||e<0)return;const n=Math.pow(e/6,3),c=t.interactivity.mouse.clickPosition;if(void 0===c)return;const r=new s.Cd(c.x,c.y,n),l=t.particles.quadTree.query(r,(e=>this.isEnabled(e)));for(const t of l){const{dx:e,dy:r,distance:l}=(0,s.oW)(c,t.position),a=l**2,u=-n*i.speed/a;if(a<=n){o.particles.push(t);const i=s.OW.create(e,r);i.length=u,t.velocity.setTo(i)}}}else if(!1===o.clicking){for(const e of o.particles)e.velocity.setTo(e.initialVelocity);o.particles=[]}},this._hoverRepulse=()=>{const e=this.container,t=e.interactivity.mouse.position,i=e.retina.repulseModeDistance;!i||i<0||!t||this._processRepulse(t,i,new s.Cd(t.x,t.y,i))},this._processRepulse=(e,t,i,o)=>{var n;const c=this.container,r=c.particles.quadTree.query(i,(e=>this.isEnabled(e))),l=c.actualOptions.interactivity.modes.repulse;if(!l)return;const{easing:a,speed:u,factor:p,maxSpeed:d}=l,f=(0,s._X)(a),h=(null!==(n=null===o||void 0===o?void 0:o.speed)&&void 0!==n?n:u)*p;for(const v of r){const{dx:i,dy:o,distance:n}=(0,s.oW)(v.position,e),c=(0,s.uZ)(f(1-n/t)*h,0,d),r=s.OW.create(n?i/n*c:h,n?o/n*c:h);v.position.addTo(r)}},this._singleSelectorRepulse=(e,t)=>{const i=this.container,o=i.actualOptions.interactivity.modes.repulse;if(!o)return;const n=document.querySelectorAll(e);n.length&&n.forEach((e=>{const n=e,c=i.retina.pixelRatio,r={x:(n.offsetLeft+.5*n.offsetWidth)*c,y:(n.offsetTop+.5*n.offsetHeight)*c},l=.5*n.offsetWidth*c,a="circle"===t.type?new s.Cd(r.x,r.y,l):new s.Ae(n.offsetLeft*c,n.offsetTop*c,n.offsetWidth*c,n.offsetHeight*c),u=o.divs,p=(0,s.iC)(u,n);this._processRepulse(r,l,a,p)}))},this._engine=e,t.repulse||(t.repulse={particles:[]}),this.handleClickMode=e=>{const i=this.container.actualOptions.interactivity.modes.repulse;if(!i||e!==n)return;t.repulse||(t.repulse={particles:[]});const o=t.repulse;o.clicking=!0,o.count=0;for(const s of t.repulse.particles)this.isEnabled(s)&&s.velocity.setTo(s.initialVelocity);o.particles=[],o.finish=!1,setTimeout((()=>{t.destroyed||(o.clicking=!1)}),i.duration*s.X5)}}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.repulse;t&&(e.retina.repulseModeDistance=t.distance*e.retina.pixelRatio)}async interact(){const e=this.container,t=e.actualOptions,i=e.interactivity.status===s.Wt,o=t.interactivity.events,c=o.onHover,r=c.enable,l=c.mode,a=o.onClick,u=a.enable,p=a.mode,d=o.onDiv;i&&r&&(0,s.dB)(n,l)?this._hoverRepulse():u&&(0,s.dB)(n,p)?this._clickRepulse():(0,s.XD)(n,d,((e,t)=>this._singleSelectorRepulse(e,t))),await Promise.resolve()}isEnabled(e){var t;const i=this.container,o=i.actualOptions,c=i.interactivity.mouse,r=(null!==(t=null===e||void 0===e?void 0:e.interactivity)&&void 0!==t?t:o.interactivity).events,l=r.onDiv,a=r.onHover,u=r.onClick,p=(0,s.wm)(n,l);if(!(p||a.enable&&c.position||u.enable&&c.clickPosition))return!1;const d=a.mode,f=u.mode;return(0,s.dB)(n,d)||(0,s.dB)(n,f)||p}loadModeOptions(e){e.repulse||(e.repulse=new o.H);for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];for(const o of i)e.repulse.load(null===o||void 0===o?void 0:o.repulse)}reset(){}}}}]);
//# sourceMappingURL=6420.fca9e04d.chunk.js.map