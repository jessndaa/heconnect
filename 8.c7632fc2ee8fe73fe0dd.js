(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+qFP":function(n,l,b){"use strict";b.r(l);var e=b("CcnG"),t=function(){return function(){}}(),a=b("pMnS"),o=b("gIcY"),u=b("tct4"),i=function(){function n(n){this._afs=n,this.title="app works!",this.init=!0,this.n=navigator}return n.prototype.ngOnInit=function(){var n,l=this,b=this.myVideo.nativeElement,e=this._afs,t=this.init;this.n.getUserMedia=this.n.getUserMedia||this.n.webkitGetUserMedia||this.n.mozGetUserMedia||this.n.msGetUserMedia,this.n.getUserMedia({video:!0,audio:!0},function(l){n=new SimplePeer({initiator:!0,trickle:!1,stream:l}),e.collection("live").doc("cc-test-con").valueChanges().subscribe(function(l){console.log("answer:",l),l&&(t?t=!1:n.signal(JSON.parse(l.peer)))}),n.on("signal",function(n){console.log("strfy: -> :",JSON.stringify(n)),e.collection("live").doc("cc-test").set({peer:JSON.stringify(n)}),this.targetpeer=n}),n.on("data",function(n){console.log("Recieved message:"+n)}),n.on("stream",function(n){b.srcObject=n,b.play()})},function(n){console.log("Failed to get stream",n)}),setTimeout(function(){l.peer=n,console.log(l.peer)},5e3)},n.prototype.connect=function(){this.peer.signal(JSON.parse(this.targetpeer))},n.prototype.message=function(){this.peer.send("Hello world")},n}(),c=e.rb({encapsulation:0,styles:[[""]],data:{}});function A(n){return e.Kb(0,[e.Gb(402653184,1,{myVideo:0}),(n()(),e.Ib(-1,null,[" --\x3e "])),(n()(),e.tb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Ib(3,null,[" "," "])),(n()(),e.tb(4,0,null,null,5,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,b){var t=!0,a=n.component;return"input"===l&&(t=!1!==e.Cb(n,5)._handleInput(b.target.value)&&t),"blur"===l&&(t=!1!==e.Cb(n,5).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.Cb(n,5)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.Cb(n,5)._compositionEnd(b.target.value)&&t),"ngModelChange"===l&&(t=!1!==(a.targetpeer=b)&&t),t},null,null)),e.sb(5,16384,null,0,o.d,[e.G,e.k,[2,o.a]],null,null),e.Fb(1024,null,o.j,function(n){return[n]},[o.d]),e.sb(7,671744,null,0,o.o,[[8,null],[8,null],[8,null],[6,o.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,o.k,null,[o.o]),e.sb(9,16384,null,0,o.l,[[4,o.k]],null,null),(n()(),e.tb(10,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,b){var e=!0;return"click"===l&&(e=!1!==n.component.connect()&&e),e},null,null)),(n()(),e.Ib(-1,null,["Connect"])),(n()(),e.tb(12,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,b){var e=!0;return"click"===l&&(e=!1!==n.component.message()&&e),e},null,null)),(n()(),e.Ib(-1,null,["Send Message"])),(n()(),e.tb(14,0,[[1,0],["myvideo",1]],null,0,"video",[],null,null,null,null,null))],function(n,l){n(l,7,0,l.component.targetpeer)},function(n,l){n(l,3,0,l.component.title),n(l,4,0,e.Cb(l,9).ngClassUntouched,e.Cb(l,9).ngClassTouched,e.Cb(l,9).ngClassPristine,e.Cb(l,9).ngClassDirty,e.Cb(l,9).ngClassValid,e.Cb(l,9).ngClassInvalid,e.Cb(l,9).ngClassPending)})}function s(n){return e.Kb(0,[(n()(),e.tb(0,0,null,null,1,"app-server-comande",[],null,null,null,A,c)),e.sb(1,114688,null,0,i,[u.a],null,null)],function(n,l){n(l,1,0)},null)}var r=e.pb("app-server-comande",i,s,{},{},[]),d=b("yWMr"),g=b("t68o"),p=b("zbXB"),h=b("NcP4"),f=b("xYTU"),m=b("Ip0R"),C=b("M2Lx"),v=b("eDkP"),k=b("Fzqc"),y=b("lLAP"),w=b("dWZg"),j=b("OBdK"),M=b("4tE/"),S=b("Wf4p"),O=b("o3x0"),I=b("jQLj"),N=b("mVsa"),P=b("uGex"),U=b("v9Dh"),q=b("ZYjt"),B=b("4epT"),F=b("OkvK"),K=b("wmQ5"),G=b("t/Na"),J=b("OzfB"),L=b("ZYCi"),V=function(){return function(){}}(),z=b("4c35"),T=b("qAlS"),W=b("Lwpp"),Y=b("y4qS"),x=b("9Bt9"),D=b("6Wmm"),R=b("BgWK"),Z=b("UodH"),E=b("u7R8"),X=b("FVSy"),_=b("de3e"),Q=b("/dO6"),H=b("LC5p"),$=b("YhbO"),nn=b("jlZm"),ln=b("seP3"),bn=b("r43C"),en=b("SMsm"),tn=b("/VYK"),an=b("b716"),on=b("0/Q6"),un=b("Z+uX"),cn=b("Blfk"),An=b("9It4"),sn=b("Nsh5"),rn=b("w+lc"),dn=b("kWGw"),gn=b("vARd"),pn=b("BHnd"),hn=b("La40"),fn=b("8mMr"),mn=b("J12g"),Cn=b("61cZ"),vn=b("h0Lh"),kn=b("21Lb"),yn=b("hUWP"),wn=b("3pJQ"),jn=b("V9q+"),Mn=b("VjqO"),Sn=b("YSh2");b.d(l,"ServerComandeModuleNgFactory",function(){return On});var On=e.qb(t,[],function(n){return e.zb([e.Ab(512,e.j,e.fb,[[8,[a.a,r,d.a,g.a,p.b,p.a,h.a,f.a,f.b]],[3,e.j],e.z]),e.Ab(4608,m.m,m.l,[e.w,[2,m.w]]),e.Ab(4608,o.u,o.u,[]),e.Ab(4608,C.c,C.c,[]),e.Ab(4608,v.a,v.a,[v.g,v.c,e.j,v.f,v.d,e.s,e.B,m.d,k.b,[2,m.g]]),e.Ab(5120,v.h,v.i,[v.a]),e.Ab(135680,y.h,y.h,[e.B,w.a]),e.Ab(4608,j.e,j.e,[e.P]),e.Ab(5120,M.a,M.b,[v.a]),e.Ab(4608,S.d,S.d,[]),e.Ab(5120,O.b,O.c,[v.a]),e.Ab(135680,O.d,O.d,[v.a,e.s,[2,m.g],[2,O.a],O.b,[3,O.d],v.c]),e.Ab(4608,I.h,I.h,[]),e.Ab(5120,I.a,I.b,[v.a]),e.Ab(5120,N.a,N.c,[v.a]),e.Ab(4608,S.c,S.z,[[2,S.h],w.a]),e.Ab(5120,P.a,P.b,[v.a]),e.Ab(5120,U.b,U.c,[v.a]),e.Ab(4608,q.f,S.e,[[2,S.i],[2,S.n]]),e.Ab(5120,B.b,B.a,[[3,B.b]]),e.Ab(5120,F.b,F.a,[[3,F.b]]),e.Ab(5120,K.b,K.a,[[3,K.b]]),e.Ab(4608,G.h,G.n,[m.d,e.D,G.l]),e.Ab(4608,G.o,G.o,[G.h,G.m]),e.Ab(5120,G.a,function(n){return[n]},[G.o]),e.Ab(4608,G.k,G.k,[]),e.Ab(6144,G.i,null,[G.k]),e.Ab(4608,G.g,G.g,[G.i]),e.Ab(6144,G.b,null,[G.g]),e.Ab(4608,G.f,G.j,[G.b,e.s]),e.Ab(4608,G.c,G.c,[G.f]),e.Ab(4608,J.j,J.i,[J.d,J.g]),e.Ab(5120,e.b,function(n,l){return[J.m(n,l)]},[m.d,e.D]),e.Ab(1073742336,m.c,m.c,[]),e.Ab(1073742336,L.l,L.l,[[2,L.r],[2,L.k]]),e.Ab(1073742336,V,V,[]),e.Ab(1073742336,o.s,o.s,[]),e.Ab(1073742336,o.h,o.h,[]),e.Ab(1073742336,w.b,w.b,[]),e.Ab(1073742336,C.d,C.d,[]),e.Ab(1073742336,y.a,y.a,[]),e.Ab(1073742336,k.a,k.a,[]),e.Ab(1073742336,z.g,z.g,[]),e.Ab(1073742336,T.d,T.d,[]),e.Ab(1073742336,v.e,v.e,[]),e.Ab(1073742336,T.b,T.b,[]),e.Ab(1073742336,W.d,W.d,[]),e.Ab(1073742336,Y.o,Y.o,[]),e.Ab(1073742336,j.c,j.c,[]),e.Ab(1073742336,x.a,x.a,[]),e.Ab(1073742336,S.n,S.n,[[2,S.f],[2,q.g]]),e.Ab(1073742336,S.y,S.y,[]),e.Ab(1073742336,S.w,S.w,[]),e.Ab(1073742336,S.t,S.t,[]),e.Ab(1073742336,M.c,M.c,[]),e.Ab(1073742336,D.a,D.a,[]),e.Ab(1073742336,R.c,R.c,[]),e.Ab(1073742336,Z.c,Z.c,[]),e.Ab(1073742336,E.a,E.a,[]),e.Ab(1073742336,X.f,X.f,[]),e.Ab(1073742336,_.a,_.a,[]),e.Ab(1073742336,Q.b,Q.b,[]),e.Ab(1073742336,O.j,O.j,[]),e.Ab(1073742336,I.i,I.i,[]),e.Ab(1073742336,H.a,H.a,[]),e.Ab(1073742336,$.c,$.c,[]),e.Ab(1073742336,nn.a,nn.a,[]),e.Ab(1073742336,ln.e,ln.e,[]),e.Ab(1073742336,S.p,S.p,[]),e.Ab(1073742336,bn.b,bn.b,[]),e.Ab(1073742336,en.c,en.c,[]),e.Ab(1073742336,tn.c,tn.c,[]),e.Ab(1073742336,an.b,an.b,[]),e.Ab(1073742336,on.d,on.d,[]),e.Ab(1073742336,N.b,N.b,[]),e.Ab(1073742336,S.A,S.A,[]),e.Ab(1073742336,S.q,S.q,[]),e.Ab(1073742336,P.c,P.c,[]),e.Ab(1073742336,U.e,U.e,[]),e.Ab(1073742336,B.c,B.c,[]),e.Ab(1073742336,un.c,un.c,[]),e.Ab(1073742336,cn.a,cn.a,[]),e.Ab(1073742336,An.a,An.a,[]),e.Ab(1073742336,sn.h,sn.h,[]),e.Ab(1073742336,rn.a,rn.a,[]),e.Ab(1073742336,dn.a,dn.a,[]),e.Ab(1073742336,gn.d,gn.d,[]),e.Ab(1073742336,F.c,F.c,[]),e.Ab(1073742336,K.c,K.c,[]),e.Ab(1073742336,pn.a,pn.a,[]),e.Ab(1073742336,hn.j,hn.j,[]),e.Ab(1073742336,fn.b,fn.b,[]),e.Ab(1073742336,mn.a,mn.a,[]),e.Ab(1073742336,Cn.a,Cn.a,[]),e.Ab(1073742336,G.e,G.e,[]),e.Ab(1073742336,G.d,G.d,[]),e.Ab(1073742336,vn.a,vn.a,[en.d,q.c]),e.Ab(1073742336,J.e,J.e,[]),e.Ab(1073742336,kn.b,kn.b,[]),e.Ab(1073742336,yn.a,yn.a,[]),e.Ab(1073742336,wn.a,wn.a,[]),e.Ab(1073742336,jn.a,jn.a,[[2,J.k],e.D]),e.Ab(1073742336,Mn.a,Mn.a,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,L.i,function(){return[[{path:"",component:i}]]},[]),e.Ab(256,Q.a,{separatorKeyCodes:[Sn.f]},[]),e.Ab(256,S.g,S.k,[]),e.Ab(256,G.l,"XSRF-TOKEN",[]),e.Ab(256,G.m,"X-XSRF-TOKEN",[])])})}}]);