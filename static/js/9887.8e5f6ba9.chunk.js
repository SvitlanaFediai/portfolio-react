"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[9887],{9887:(o,e,i)=>{i.r(e),i.d(e,{StrokeColorUpdater:()=>r});var t=i(4709);class r{constructor(o){this.container=o}async init(o){var e,i,r;const l=this.container,a=o.options,n=(0,t.wA)(a.stroke,o.id,a.reduceDuplicates);o.strokeWidth=(0,t.Gu)(n.width)*l.retina.pixelRatio,o.strokeOpacity=(0,t.Gu)(null!==(e=n.opacity)&&void 0!==e?e:1),o.strokeAnimation=null===(i=n.color)||void 0===i?void 0:i.animation;const s=null!==(r=(0,t.lN)(n.color))&&void 0!==r?r:o.getFillColor();s&&(o.strokeColor=(0,t.bS)(s,o.strokeAnimation,l.retina.reduceFactor)),await Promise.resolve()}isEnabled(o){const e=o.strokeAnimation,{strokeColor:i}=o;return!o.destroyed&&!o.spawning&&!!e&&(void 0!==(null===i||void 0===i?void 0:i.h.value)&&i.h.enable||void 0!==(null===i||void 0===i?void 0:i.s.value)&&i.s.enable||void 0!==(null===i||void 0===i?void 0:i.l.value)&&i.l.enable)}async update(o,e){this.isEnabled(o)&&((0,t.PB)(o.strokeColor,e),await Promise.resolve())}}}}]);
//# sourceMappingURL=9887.8e5f6ba9.chunk.js.map