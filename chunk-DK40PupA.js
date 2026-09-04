import{Er as y,H as M,Kn as pb,Mn as mo,O as Gh,Q as Pi,U as MC,Un as pC,Xn as qI,Z as Ph,_t as Un,in as fp,mr as uf,nt as Rh,tr as qw,un as go,vr as w,x as F1}from"./chunk-B35GEMdv.js";import{u as V$1}from"./chunk-ChvxzfGp.js";import{J as H,St as xi,ht as kt,tt as S$1,xt as vs}from"./main-N3RUTDEO.js";import{t as Bt}from"./chunk-BuYV9ccp.js";var S=(()=>{class t extends kt{modelValue=Pi(void 0);$filled=MC(()=>S$1(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=fp(t)))(o||t)}})();static ɵdir=mo({type:t,features:[Rh]})}return t})();var V=`
    
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }


    /* For ngx-prime */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var B={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var C=(()=>{class t extends H{name=`inputtext`;style=V;classes=B;static ɵfac=(()=>{let e;return function(o){return(e||(e=fp(t)))(o||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var E=new w(`INPUTTEXT_INSTANCE`);var et=(()=>{class t extends S{componentName=`InputText`;hostName=F1(``);ptInputText=F1();pInputTextPT=F1();pInputTextUnstyled=F1();bindDirectiveInstance=y(vs,{self:!0});$pcInputText=y(E,{optional:!0,skipSelf:!0})??void 0;ngControl=y(V$1,{optional:!0,self:!0});pcFluid=y(Bt,{optional:!0,host:!0,skipSelf:!0});pSize=F1();variant=F1();fluid=F1(void 0,{transform:pb});invalid=F1(void 0,{transform:pb});$variant=MC(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=y(C);constructor(){super(),uf(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),uf(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()})}static ɵfac=function(i){return new(i||t)};static ɵdir=mo({type:t,selectors:[[``,`pInputText`,``]],hostVars:4,hostBindings:function(i,o){i&1&&Gh(`input`,function(){return o.onInput()}),i&2&&(Ph(`data-p`,o.dataP)(`aria-invalid`,o.invalid()||null),qw(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[pC([C,{provide:E,useExisting:t},{provide:xi,useExisting:t}]),qI([vs]),Rh]})}return t})();var nt=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=go({type:t});static ɵinj=Un({})}return t})();export{et as n,nt as r,S as t};