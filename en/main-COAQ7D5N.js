import{a as W_}from"./chunk-JEO2BFZO.js";import{a as U_,b as X_,d as w_,e as x_,f as L,g as B_,h as Z_}from"./chunk-UQAZDBIZ.js";import{Ba as Y_,Ea as O,Gb as c,Kb as D_,Lb as j_,O as z_,Pa as k,Q as k_,Qa as S,Ra as A,T as N_,Ua as N,Va as b_,W as v,Wa as h_,X as c_,Xa as V_,Ya as e,Za as _,_a as r,cb as l,fa as L_,gb as g,hb as $_,ia as p_,pb as R,qa as v_,r as M_,sa as f_,ub as K_,vb as G_,xa as u,xb as F_,ya as T,za as y_}from"./chunk-PFJRUD22.js";var H_=[{path:"home",loadComponent:()=>import("./chunk-SEJG6KQR.js").then(E=>E.HomeComponent)},{path:"about",loadComponent:()=>import("./chunk-YRJP5OCP.js").then(E=>E.AboutComponent)},{path:"services",loadComponent:()=>import("./chunk-YG5J2HMC.js").then(E=>E.ServicesComponent)},{path:"products",loadComponent:()=>import("./chunk-OFEI4TSK.js").then(E=>E.ProductsComponent)},{path:"product/:barcode",loadComponent:()=>import("./chunk-VFJDDI6M.js").then(E=>E.ProductComponent)},{path:"contact",loadComponent:()=>import("./chunk-LATXZ65G.js").then(E=>E.ContactComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",loadComponent:()=>import("./chunk-UH5ACCX2.js").then(E=>E.NotFoundComponent)}];var ne="@",ae=(()=>{class E{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=v(L_,{optional:!0});loadingSchedulerFn=v(le,{optional:!0});_engine;constructor(t,a,n,s,P){this.doc=t,this.delegate=a,this.zone=n,this.animationType=s,this.moduleImpl=P;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-32B7JYUQ.js").then(n=>n),a;return this.loadingSchedulerFn?a=this.loadingSchedulerFn(t):a=t(),a.catch(n=>{throw new z_(5300,!1);}).then(({ɵcreateEngine:n,ɵAnimationRendererFactory:s})=>{this._engine=n(this.animationType,this.doc);let P=new s(this.delegate,this._engine,this.zone);return this.delegate=P,P;});}createRenderer(t,a){let n=this.delegate.createRenderer(t,a);if(n.ɵtype===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new f(n);return a?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(P=>{let d=P.createRenderer(t,a);s.use(d),this.scheduler?.notify(11);}).catch(P=>{s.use(n);}),s;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}static ɵfac=function(a){y_();};static ɵprov=k_({token:E,factory:E.ɵfac});}return E;})(),f=class{delegate;replay=[];ɵtype=1;constructor(i){this.delegate=i;}use(i){if(this.delegate=i,this.replay!==null){for(let t of this.replay)t(i);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(i,t){return this.delegate.createElement(i,t);}createComment(i){return this.delegate.createComment(i);}createText(i){return this.delegate.createText(i);}get destroyNode(){return this.delegate.destroyNode;}appendChild(i,t){this.delegate.appendChild(i,t);}insertBefore(i,t,a,n){this.delegate.insertBefore(i,t,a,n);}removeChild(i,t,a){this.delegate.removeChild(i,t,a);}selectRootElement(i,t){return this.delegate.selectRootElement(i,t);}parentNode(i){return this.delegate.parentNode(i);}nextSibling(i){return this.delegate.nextSibling(i);}setAttribute(i,t,a,n){this.delegate.setAttribute(i,t,a,n);}removeAttribute(i,t,a){this.delegate.removeAttribute(i,t,a);}addClass(i,t){this.delegate.addClass(i,t);}removeClass(i,t){this.delegate.removeClass(i,t);}setStyle(i,t,a,n){this.delegate.setStyle(i,t,a,n);}removeStyle(i,t,a){this.delegate.removeStyle(i,t,a);}setProperty(i,t,a){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(i,t,a)),this.delegate.setProperty(i,t,a);}setValue(i,t){this.delegate.setValue(i,t);}listen(i,t,a){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(i,t,a)),this.delegate.listen(i,t,a);}shouldReplay(i){return this.replay!==null&&i.startsWith(ne);}},le=new N_("");function J_(E="animations"){return f_("NgAsyncAnimations"),c_([{provide:Y_,useFactory:(i,t,a)=>new ae(i,t,a,E),deps:[c,U_,p_]},{provide:v_,useValue:E==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var Q_={providers:[Z_(H_),J_()]};var Ee=(E,i)=>({"mask-image":E,"webkit-mask-image":i}),oe=()=>[];function ie(E,i){E&1&&r(0,"img",25);}function se(E,i){if(E&1&&(e(0,"div",23)(1,"div",24),h_(2,ie,1,0,"img",25,b_),_()()),E&2){let t=$_();u(),A("ngStyle",G_(1,Ee,t.getGradientMask(),t.getGradientMask())),u(),V_(K_(4,oe).constructor(t.svgCount));}}var q_=(()=>{class E{constructor(t,a,n){this.router=t,this.locale_id=a,this.document=n,this.isNavMenuOpen=!1;}navLinkClick(t){this.isMobileView&&this.isNavMenuOpen&&(this.isNavMenuOpen=!1),t&&t.match("banner")?this.scrollToTop("smooth"):this.scrollToTop();}scrollToTop(t){let a=this.router.url;t==="smooth"&&a==="/home"?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"instant"}),this.scrollPercentage=0;}toggleNavMenuOpenState(){this.isNavMenuOpen=!this.isNavMenuOpen;}changeLocaleTo(t){let n=this.router.url.replace(/^\/(en|hu)/,""),s=this.document.getElementsByTagName("base")[0]?.href||"/";s=s.replace(/\/(en|hu)(\/|$)/,"/");let P=`${s}${t}${n}`;window.location.href=P;}getGradientMask(){let t=this.scrollPercentage;return`linear-gradient(to right, black ${t}%, transparent ${t}%)`;}static{this.ɵfac=function(a){return new(a||E)(T(x_),T(F_),T(c));};}static{this.ɵcmp=O({type:E,selectors:[["app-navbar"]],inputs:{isMobileView:"isMobileView",svgCount:"svgCount",scrollPercentage:"scrollPercentage"},decls:26,vars:18,consts:()=>{let t;t="Brand logo";let a;a="Our story";let n;n="Products";let s;s="Services";let P;return P="Contacts",[a,n,s,P,["id","nav-filler",2,"height","68px"],[1,"fixed-top",2,"height","0px"],["id","fixed-nav",1,"navbar","navbar-expand-md","px-4","py-2","shadow","text-dark"],[1,"container-fluid","p-0"],["routerLink","/home","routerLinkActive","activebutton","ariaCurrentWhenActive","page",1,"navbar-brand","col-4","col-md-2","p-0","m-0","text-center","align-middle",3,"click"],["src","assets/icons/kalocsai_navbar_logo.svg","alt",t,1,"h-100"],["id","navToggler","type","button","data-bs-toggle","collapse","data-bs-target","#navItems","aria-controls","navItems","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","p-0",3,"click"],[1,"fs-1","fw-bold",3,"ngClass"],["id","navItems",1,"collapse","navbar-collapse","col-8","col-md-10","justify-content-center"],[1,"navbar-nav","p-4","p-md-0","col-12","justify-content-around"],["routerLink","about","routerLinkActive","activebutton","ariaCurrentWhenActive","page",1,"nav-link",3,"click"],["routerLink","products","routerLinkActive","activebutton","ariaCurrentWhenActive","page",1,"nav-link",3,"click"],["routerLink","services","routerLinkActive","activebutton","ariaCurrentWhenActive","page",1,"nav-link",3,"click"],["routerLink","contact","routerLinkActive","activebutton","ariaCurrentWhenActive","page",1,"nav-link",3,"click"],["role","group","aria-label","radio toggle button group",1,"btn-group","btn-group-sm","align-self-md-center","mt-4","mt-md-0"],["type","radio","name","btn-radio","id","btn-radio-hu","autocomplete","off",1,"btn-check",3,"click","checked"],["for","btn-radio-hu",1,"btn","btn-outline-dark","btn-diagonal-left"],["type","radio","name","btn-radio","id","btn-radio-en","autocomplete","off",1,"btn-check",3,"click","checked"],["for","btn-radio-en",1,"btn","btn-outline-dark","btn-diagonal-right"],[1,"svg-container","d-flex"],["id","svgScrollSpy",1,"d-block","mx-auto",3,"ngStyle"],["src","assets/icons/paprika_garland_edited.svg","alt","Paprika Icon"]];},template:function(a,n){a&1&&(r(0,"div",4),e(1,"div",5)(2,"nav",6)(3,"div",7)(4,"a",8),g("click",function(){return n.navLinkClick("banner");}),r(5,"img",9),_(),e(6,"button",10),g("click",function(){return n.toggleNavMenuOpenState();}),r(7,"span",11),_(),e(8,"div",12)(9,"ul",13)(10,"a",14),g("click",function(){return n.navLinkClick();}),l(11,0),_(),e(12,"a",15),g("click",function(){return n.navLinkClick();}),l(13,1),_(),e(14,"a",16),g("click",function(){return n.navLinkClick();}),l(15,2),_(),e(16,"a",17),g("click",function(){return n.navLinkClick();}),l(17,3),_(),e(18,"div",18)(19,"input",19),g("click",function(){return n.changeLocaleTo("hu");}),_(),e(20,"label",20),R(21,"HU"),_(),e(22,"input",21),g("click",function(){return n.changeLocaleTo("en");}),_(),e(23,"label",22),R(24,"EN"),_()()()()()(),k(25,se,4,5,"div",23),_()),a&2&&(u(4),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(3),A("ngClass",n.isNavMenuOpen?"bi bi-x-lg":"bi bi-list"),u(3),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(2),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(2),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(2),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(3),A("checked",n.locale_id=="hu"),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(3),A("checked",n.locale_id=="en"),S("data-bs-toggle",n.isNavMenuOpen?"collapse":null)("data-bs-target",n.isNavMenuOpen?"#navItems":null),u(3),N(n.isNavMenuOpen?-1:25));},dependencies:[L,B_,D_,j_],styles:['nav[_ngcontent-%COMP%]{z-index:10;background-color:var(--bs-body-bg)}.navbar[_ngcontent-%COMP%]{padding-bottom:20px!important}.svg-container[_ngcontent-%COMP%]{position:relative;z-index:11;top:50%;transform:translateY(-50%)}#svgScrollSpy[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.5px);backdrop-filter:blur(.5px)}.navbar-brand[_ngcontent-%COMP%]{height:40px}.nav-link[_ngcontent-%COMP%]{font-weight:400;letter-spacing:1px}.activebutton[_ngcontent-%COMP%]{font-weight:700}.navbar-toggler[_ngcontent-%COMP%]{border:none;outline:none}.navbar-toggler[_ngcontent-%COMP%]:focus{box-shadow:none}.navbar-toggler[_ngcontent-%COMP%]   span.bi[_ngcontent-%COMP%]{color:var(--bs-dark)}#nav-filler[_ngcontent-%COMP%]{height:0px}.btn-diagonal-left[_ngcontent-%COMP%], .btn-diagonal-right[_ngcontent-%COMP%]{height:30px;margin:0;position:relative}.btn-diagonal-left[_ngcontent-%COMP%]:after, .btn-diagonal-left[_ngcontent-%COMP%]:before, .btn-diagonal-right[_ngcontent-%COMP%]:after, .btn-diagonal-right[_ngcontent-%COMP%]:before{height:28px;content:"";position:absolute;transition:all .2s ease-in-out}.btn-diagonal-left[_ngcontent-%COMP%]{margin-right:15px!important}.btn-diagonal-left[_ngcontent-%COMP%]:after{right:-30px;top:0;border-bottom:28.5px solid var(--bs-body-secondary-bg);border-right:30px solid transparent;box-shadow:0 .5px 0 0 var(--bs-dark)}.btn-check[_ngcontent-%COMP%]:checked + .btn-diagonal-left[_ngcontent-%COMP%]:after{border-bottom:28.5px solid var(--bs-dark);top:0}.btn-diagonal-right[_ngcontent-%COMP%]{margin-left:15px!important}.btn-diagonal-right[_ngcontent-%COMP%]:before{left:-30px;top:0;border-top:29px solid var(--bs-body-secondary-bg);border-left:30px solid transparent;box-shadow:0 -1px 0 0 var(--bs-dark)}.btn-check[_ngcontent-%COMP%]:checked + .btn-diagonal-right[_ngcontent-%COMP%]:before{border-top:29px solid var(--bs-dark);box-shadow:0 1px 0 0 var(--bs-dark);top:-1px}.btn-check[_ngcontent-%COMP%] + .btn-diagonal-right[_ngcontent-%COMP%]{border-left:none!important}.btn-check[_ngcontent-%COMP%] + .btn-diagonal-left[_ngcontent-%COMP%]{border-right:none!important}']});}}return E;})();function re(E,i){E&1&&(e(0,"div",20)(1,"div",27)(2,"a",28),l(3,1),_(),e(4,"span",29),R(5,"|"),_(),e(6,"a",30),l(7,2),_()(),e(8,"div",31)(9,"a",32),l(10,3),_(),e(11,"span",29),R(12,"|"),_(),e(13,"a",33),l(14,4),_()()());}function Pe(E,i){E&1&&(e(0,"div",21)(1,"div",34),r(2,"img",35),_(),e(3,"div",36)(4,"h5",37),R(5,"Kalocsai F\u0171szerpaprika Zrt."),_(),e(6,"p",38),l(7,5),_(),e(8,"p",39)(9,"span"),l(10,6),_(),e(11,"span",40),R(12,"+36\xA0(78)\xA0462-555"),_()()()());}var _e=(()=>{class E{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"});}static{this.ɵfac=function(a){return new(a||E)();};}static{this.ɵcmp=O({type:E,selectors:[["app-footer"]],inputs:{isMobileView:"isMobileView"},decls:25,vars:1,consts:()=>{let t;t="Scroll to the top";let a;a="Visit the Facebook page";let n;n="Watch the YouTube video";let s;s="Privacy policy";let P;P="Our story";let d;d="Products";let I;I="Services";let m;m="Contacts";let M;M="6300\xA0Kalocsa, 49\xA0Alkotm\xE1ny\xA0str.";let z;return z="Landline:",[s,P,d,I,m,M,z,[1,"d-block","mt-5"],["id","tricolorStripes",1,"d-block","position-relative"],["id","scrollToTopBtn","aria-label",t,1,"btn","btn-dark","position-absolute","rounded-3","border-0","shadow-sm",3,"click"],[1,"bi","bi-arrow-up"],[1,"d-block","d-sm-flex","bg-body-secondary","justify-content-around","py-3","px-5","px-sm-4"],[1,"d-block","my-auto"],[1,"d-flex","justify-content-center","mb-2","mb-sm-0"],["href","https://www.facebook.com/profile.php?id=100042244067190","aria-label",a,"target","_blank",1,"text-dark"],[1,"bi","bi-facebook"],[1,"mx-4"],["href","https://youtu.be/LB-7EOS1MiU?si=buyHCTmJhoYQMLeZ","aria-label",n,"target","_blank",1,"text-dark"],[1,"bi","bi-youtube"],["id","separator"],[1,"d-block","my-3"],[1,"d-flex","justify-content-between","align-items-center","text-center"],[1,"d-flex","justify-content-center","d-sm-block","mt-3","my-sm-auto","user-select-none"],["id","privacyPolicyLink","role","button","tabindex","0","data-bs-toggle","modal","data-bs-target","#privacyPolicyModal",1,"text-dark","cursor-pointer"],[1,"d-block","bg-dark","text-light"],[1,"d-flex","justify-content-around"],["href","https://markteching.ae/",1,"text-light","text-decoration-none"],[1,"d-flex","justify-content-center","mb-2"],["routerLink","../about",1,"text-dark","fs-6","fw-semibold"],[1,"fs-6","mx-2"],["routerLink","../products",1,"text-dark","fs-6","fw-semibold"],[1,"d-flex","justify-content-center"],["routerLink","../services",1,"text-dark","fs-6","fw-semibold"],["routerLink","../contacts",1,"text-dark","fs-6","fw-semibold"],[1,"col-2"],["src","assets/icons/kalocsai_footer_logo.webp",1,"w-100"],[1,"col-9","h-100"],[1,"pb-3","user-select-none"],[1,"mb-1","user-select-all"],[1,"mb-0"],[1,"user-select-all"]];},template:function(a,n){a&1&&(e(0,"div",7)(1,"div",8)(2,"button",9),g("click",function(){return n.scrollToTop();}),r(3,"i",10),_()(),e(4,"div",11)(5,"div",12)(6,"div",13)(7,"a",14),r(8,"i",15),_(),r(9,"div",16),e(10,"a",17),r(11,"i",18),_()()(),r(12,"div",19),k(13,re,15,0,"div",20)(14,Pe,13,0,"div",21),r(15,"div",19),e(16,"div",22)(17,"a",23),l(18,0),_()()(),e(19,"div",24)(20,"div",25)(21,"span"),R(22,"\xA92024"),_(),e(23,"a",26),R(24,"markteching"),_()()()()),a&2&&(u(13),N(n.isMobileView?13:14));},dependencies:[L],styles:["#tricolorStripes[_ngcontent-%COMP%]{height:1.5vh;color:var(--bs-body-bg);border-top:.5vh solid var(--bs-primary);border-bottom:.5vh solid var(--bs-secondary);position:relative}#tricolorStripes[_ngcontent-%COMP%]   #scrollToTopBtn[_ngcontent-%COMP%]{top:50%;right:8.2vw;transform:translateY(-50%);font-size:1.25rem}i[_ngcontent-%COMP%]{font-size:xx-large}#separator[_ngcontent-%COMP%]{border-bottom:.2vw solid var(--bs-dark)}#privacyPolicyLink[_ngcontent-%COMP%]{font-size:small}h6[_ngcontent-%COMP%]{color:var(--bs-dark)}@media screen and (min-width: 575px){#separator[_ngcontent-%COMP%]{border-right:.2vw solid var(--bs-dark)}#privacyPolicyLink[_ngcontent-%COMP%]{font-size:large;font-weight:700}}"]});}}return E;})();var ee=(()=>{class E{static{this.ɵfac=function(a){return new(a||E)();};}static{this.ɵcmp=O({type:E,selectors:[["app-privacy-policy"]],decls:123,vars:0,consts:()=>{let t;t="Privacy policy";let a;a="The purpose of the policy";let n;n="The purpose of the privacy and data management policy is to ensure the protection of personal data that has become known during the registration of data of individuals interested in the activities and products of Szegedi Paprika ZRt., during the transmission of inquiries to interested parties, and during data recording and processing in accordance with data protection regulations.";let s;s="The legal basis and legislative background of data management";let P;P="The enforcement of the legitimate interest of the data controller (Szegedi Paprika ZRt.) based on point b of Section 6(1) of Act CXII of 2011 on the Right to Informational Self-Determination and Freedom of Information.";let d;d="Act CVIII of 2001 on certain issues of electronic commerce services and information society-related services (Section 13/A)";let I;I="Act XLVII of 2008 on the prohibition of unfair commercial practices against consumers.";let m;m="Act XLVIII of 2008 on the fundamental conditions and certain limitations of economic advertising activity (Section 6).";let M;M="The scope of the policy";let z;z="It covers all data management and processing by Kalocsai F\u0171szerpaprika ZRt. related to the data of interested individuals as well as public interest or publicly available data for public interest purposes.";let C;C="Concepts";let y;y="Data management: regardless of the procedure used, any operation or series of operations performed on the data, such as collection, recording, organization, storage, alteration, use, transmission, disclosure, coordination, or combination, blocking, deletion, and destruction, as well as preventing further use of the data. Data management also includes taking photographs, audio, or video recordings, as well as recording physical characteristics suitable for identifying a person (e.g., fingerprint, palm print, DNA sample, iris image).";let Y;Y="Data controller: a natural or legal person, or an organization with legal personality, who determines the purpose of data processing, makes and implements decisions regarding data management (including the tool used), or has the data processing executed by a data processor commissioned by them. For the purposes of this policy, it refers to Szegedi Paprika ZRt.";let b;b="Data provision: providing information to a third party about the recorded data, or part of it, in any form or medium.";let h;h="Third party: a natural or legal person, or an organization without legal personality, who is not the data subject, data controller, or data processor.";let V;V="Data transfer: making the recorded data or part of it available to a third party.";let $;$="Data deletion: making the data unrecognizable in such a way that their recovery is impossible.";let K;K="Data protection officer: the person responsible for protecting personal data, ensuring legal compliance in data processing, and data provision.";let G;G="Access: partial or full viewing of the recorded data.";let F;F="Personal data: data that can be associated with a specific natural person (hereinafter: data subject), from which a conclusion about the data subject can be drawn; personal data retains its quality during data processing as long as its relationship with the data subject can be restored.";let D;D="Public interest data: information or knowledge, in any form or manner, that is handled by a body or person performing state or local government duties, as well as other public tasks defined by law, and does not fall under the concept of personal data.";let j;j="Data subject: any identified or identifiable natural person based on specific personal data, either directly or indirectly.";let U;U="Consent: the voluntary and explicit declaration of the data subject's will, based on adequate information, and with which they give their unambiguous consent to the processing of their personal data, either fully or for specific operations.";let X;X="Data processor: the natural or legal person or organization without legal personality that processes data based on a contract with the data controller, including contracts concluded pursuant to legal provisions.";let w;w="Data set: the entirety of the data processed in a single registry.";let x;x="Purpose of data processing";let B;B="Recording the data of natural persons interested in Kalocsai F\u0171szerpaprika Zrt. for the purpose of maintaining contact with them and presenting the company and its products.";let Z;Z="Scope of processed data";let W;W="The data controller processes the following personal data:";let H;H="First and last name, date of birth, address, phone number, email address, name of the purchased product, purchase date, quantity, price, and any other information provided voluntarily by the data subject.";let J;J="Rules regarding the management of records";let Q;Q="The data controller may use the personal data of data subjects for the following purposes based on their voluntary consent:";let q;q="Sending advertisements through direct inquiries by mail, email, or phone";let __;__="Direct inquiries for market research or public opinion research";let e_;e_="Inquiries for the purpose of measuring customer satisfaction.";let t_;t_="Data subjects can withdraw their consent to data processing at any time without justification.";let n_;n_="Possibility of data transfer";let a_;a_="The data controller does not engage in data transfer activities regarding the records of the data subjects.";let l_;l_="Duration of data processing";let E_;E_="The personal data provided by users may be processed for up to 2 years from the last inquiry or until the user requests the termination of processing.";let o_;o_="Data Processing";let i_;i_="The data necessary for using the service may be processed by the controller's employees in accordance with data protection regulations. The data controller defines the rights and obligations related to the processing of personal data by the data processor.";let s_;s_="Within its scope of activity and under the framework defined by the data controller, the data processor is responsible for the processing of personal data. The data processor may only process the personal data in accordance with the data controller's instructions and may not process data for its own purposes.";let r_;r_="Rights of the Data Subjects";let P_;P_="Data subjects can request the modification of their data, or its deletion, except in cases of mandatory data processing. They can also request information from the data controller about the purpose, legal basis, and duration of the data processing. Requests must be submitted in writing either by mail to the controller's address or via email to info@szegdipaprika.hu.";let u_;u_="Szegedi Paprika ZRt. will respond to the request within 30 days of its submission.";let d_;d_="Data Protection Officer's Responsibilities";let C_;C_="Participates and provides assistance in making decisions related to data processing and ensuring the rights of the data subjects.";let R_;R_="Ensures compliance with data protection and data security regulations, as well as data security requirements.";let g_;g_="Investigates received complaints and, in the event of unauthorized data processing, calls on the data controller or processor to cease such processing.";let O_;O_="Prepares the internal data protection policy.";let S_;S_="Logs data transfers.";let A_;A_="Data Security";let T_;T_="The data controller ensures that the computer containing personal data is placed in a location with adequate physical protection (from environmental damage, fire), so that the data cannot be accessed by unauthorized persons.";let I_;I_="The data controller documents the maintenance and repair of computing devices containing personal data and ensures through confidentiality agreements that any third party that gains knowledge of such data handles them in accordance with data protection regulations.";let m_;return m_="The data controller is authorized to use data files containing personal data to the extent necessary to carry out its business and employment activities. During the handling and processing of personal data, the authorized user must ensure that only authorized individuals have access to the data during processing. The employee responsible for data processing is accountable for managing written and printed documents generated during the data processing, and must perform their duties in compliance with this policy and other regulations in force within the company.",[t,a,n,s,P,d,I,m,M,z,C,y,Y,b,h,V,$,K,G,F,D,j,U,X,w,x,B,Z,W,H,J,Q,q,__,e_,t_,n_,a_,l_,E_,o_,i_,s_,r_,P_,u_,d_,C_,R_,g_,O_,S_,A_,T_,I_,m_,["id","privacyPolicyModal","tabindex","-1","aria-labelledby","privacyPolicyModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-dark"]];},template:function(a,n){a&1&&(e(0,"div",56)(1,"div",57)(2,"div",58)(3,"div",59)(4,"h1",60),l(5,0),_(),r(6,"button",61),_(),e(7,"div",62)(8,"h4"),l(9,1),_(),e(10,"p"),l(11,2),_(),e(12,"h4"),l(13,3),_(),e(14,"ul")(15,"li"),l(16,4),_(),e(17,"li"),l(18,5),_(),e(19,"li"),l(20,6),_(),e(21,"li"),l(22,7),_()(),e(23,"h4"),l(24,8),_(),e(25,"p"),l(26,9),_(),e(27,"h4"),l(28,10),_(),e(29,"p"),l(30,11),_(),e(31,"p"),l(32,12),_(),e(33,"p"),l(34,13),_(),e(35,"p"),l(36,14),_(),e(37,"p"),l(38,15),_(),e(39,"p"),l(40,16),_(),e(41,"p"),l(42,17),_(),e(43,"p"),l(44,18),_(),e(45,"p"),l(46,19),_(),e(47,"p"),l(48,20),_(),e(49,"p"),l(50,21),_(),e(51,"p"),l(52,22),_(),e(53,"p"),l(54,23),_(),e(55,"p"),l(56,24),_(),e(57,"h4"),l(58,25),_(),e(59,"p"),l(60,26),_(),e(61,"h4"),l(62,27),_(),e(63,"p"),l(64,28),_(),e(65,"p"),l(66,29),_(),e(67,"h4"),l(68,30),_(),e(69,"p"),l(70,31),_(),e(71,"ul")(72,"li"),l(73,32),_(),e(74,"li"),l(75,33),_(),e(76,"li"),l(77,34),_()(),e(78,"p"),l(79,35),_(),e(80,"h4"),l(81,36),_(),e(82,"p"),l(83,37),_(),e(84,"h4"),l(85,38),_(),e(86,"p"),l(87,39),_(),e(88,"h4"),l(89,40),_(),e(90,"p"),l(91,41),_(),e(92,"p"),l(93,42),_(),e(94,"h4"),l(95,43),_(),e(96,"p"),l(97,44),_(),e(98,"p"),l(99,45),_(),e(100,"h4"),l(101,46),_(),e(102,"p"),l(103,47),_(),e(104,"p"),l(105,48),_(),e(106,"p"),l(107,49),_(),e(108,"p"),l(109,50),_(),e(110,"p"),l(111,51),_(),e(112,"h4"),l(113,52),_(),e(114,"p"),l(115,53),_(),e(116,"p"),l(117,54),_(),e(118,"p"),l(119,55),_()(),e(120,"div",63)(121,"button",64),R(122,"OK"),_()()()()());},encapsulation:2});}}return E;})();var te=(()=>{class E{constructor(t){this.windowListener=t,this.title="PaprikaRT",this.mobileViewWidthLimitPx=768,this.isMobileView=!1,this.scrollPercentage=0,this.svgCount=0;}ngOnInit(){this.setIsMobileView(window.innerWidth),this.svgCount=0,M_([this.windowListener.$onResize,this.windowListener.$onScroll]).subscribe(([t,a])=>{this.setIsMobileView(t.width),this.setSvgCount(t),this.setScrollPercentage(t,a);});}setIsMobileView(t){this.isMobileView=t<this.mobileViewWidthLimitPx;}setSvgCount(t){let a=170;this.svgCount=Math.floor(t.width/a);}setScrollPercentage(t,a){this.scrollPercentage=Math.floor(Math.max(a.scrollTop,0)/(a.scrollHeight-t.height)*100);}static{this.ɵfac=function(a){return new(a||E)(T(W_));};}static{this.ɵcmp=O({type:E,selectors:[["app-root"]],decls:7,vars:4,consts:[[1,"page-container"],[3,"isMobileView","svgCount","scrollPercentage"],[1,"routerOutlet"],[1,"footer"],[3,"isMobileView"]],template:function(a,n){a&1&&(e(0,"div",0),r(1,"app-navbar",1),e(2,"div",2),r(3,"router-outlet"),_(),e(4,"div",3),r(5,"app-footer",4),_(),r(6,"app-privacy-policy"),_()),a&2&&(u(),A("isMobileView",n.isMobileView)("svgCount",n.svgCount)("scrollPercentage",n.scrollPercentage),u(4),A("isMobileView",n.isMobileView));},dependencies:[w_,q_,_e,ee],styles:[".page-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.routerOutlet[_ngcontent-%COMP%]{flex:1 0 auto}.footer[_ngcontent-%COMP%]{flex-shrink:0}"]});}}return E;})();X_(te,Q_).catch(E=>console.error(E));/**i18n:e390d991e50c78291aeb213969f9ae00c48f5dc66c0bc69c427f580838e414b3*/