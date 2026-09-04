import{Er as y,H as M,Kn as pb,Mn as mo,O as Gh,U as MC,Un as pC,Xn as qI,Z as Ph,_t as Un,in as fp,mr as uf,nt as Rh,tr as qw,un as go,vr as w$1,x as F1,xn as k1}from"./chunk-B35GEMdv.js";import{u as V}from"./chunk-ChvxzfGp.js";import{J as H,St as xi,xt as vs}from"./main-N3RUTDEO.js";import{t as Bt}from"./chunk-BuYV9ccp.js";import{t as S}from"./chunk-DK40PupA.js";var I=`
    
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }


    /* For ngx-prime */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`;var R={root:({instance:e})=>[`p-textarea p-component`,{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()===`filled`,"p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize()===`small`,"p-textarea-lg p-inputfield-lg":e.pSize()===`large`,"p-invalid":e.invalid()}]};var w=(()=>{class e extends H{name=`textarea`;style=I;classes=R;static ɵfac=(()=>{let t;return function(i){return(t||(t=fp(e)))(i||e)}})();static ɵprov=M({token:e,factory:e.ɵfac})}return e})();var C=new w$1(`TEXTAREA_INSTANCE`);var L=(()=>{class e extends S{componentName=`Textarea`;bindDirectiveInstance=y(vs,{self:!0});$pcTextarea=y(C,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=F1();pTextareaUnstyled=F1();autoResize=F1(!1,{transform:pb});pSize=F1();variant=F1();fluid=F1(void 0,{transform:pb});invalid=F1(void 0,{transform:pb});ariaDescribedBy=F1();$variant=MC(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=k1();ngControlSubscription;_componentStyle=y(w);ngControl=y(V,{optional:!0,self:!0});pcFluid=y(Bt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),uf(()=>{let t=this.pTextareaPT();t&&this.directivePT.set(t)}),uf(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl?.valueChanges&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize()&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize()&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(t||{})}updateState(){this.autoResize()&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static ɵfac=function(a){return new(a||e)};static ɵdir=mo({type:e,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:4,hostBindings:function(a,i){a&1&&Gh(`input`,function(F){return i.onInput(F)}),a&2&&(Ph(`aria-invalid`,i.invalid()||null)(`aria-describedby`,i.ariaDescribedBy()||null),qw(i.cx(`root`)))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[1,`autoResize`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`],ariaDescribedBy:[1,`ariaDescribedBy`]},outputs:{onResize:`onResize`},features:[pC([w,{provide:C,useExisting:e},{provide:xi,useExisting:e}]),qI([vs]),Rh]})}return e})();var O=(()=>{class e{static ɵfac=function(a){return new(a||e)};static ɵmod=go({type:e});static ɵinj=Un({})}return e})();export{O as n,L as t};