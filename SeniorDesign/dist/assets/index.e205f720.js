import{S as W,P as J,W as Q,I as _,A as $,T as c,a as M,M as x,b as d,c as v,D as ee,G as C,d as te,e as oe,f as ne,g as P,h as se,O as ae,V as re}from"./vendor.52c68e82.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))w(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&w(p)}).observe(document,{childList:!0,subtree:!0});function g(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function w(n){if(n.ep)return;n.ep=!0;const s=g(n);fetch(n.href,s)}};ie();const o=new W,ce=new W;let u=new J(75,window.innerWidth/window.innerHeight,.1,1e3);u.position.setZ(-10);u.position.setY(25);const a=new Q({alpha:!0,antialias:!0,canvas:document.querySelector("#bg")}),R=new _(a,u,a.domElement);a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);u.position.setZ(30);a.xr.enabled=!0;document.body.appendChild($.createButton(a));window.addEventListener("resize",de);function de(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}a.render(o,u);const m=20,le=new c().load("../Resources/Textures/earthTexture.jpg");new c().load("../Resources/Maps/earthNormalMap.tif");const ue=new M(3,32,32),pe=new x({map:le}),r=new d(ue,pe);r.position.set(m,0,10);o.add(r);const me=new c().load("../Resources/Textures/sun.jpg"),he=new M(10,32,32),we=new v({map:me}),H=new d(he,we);o.add(H);const fe=new c().load("../Resources/Textures/marsTexture.jpg"),ye=new M(3/2,32,32),ge=new x({map:fe}),i=new d(ye,ge);i.position.setX(m*1.5);o.add(i);const xe=new c().load("../Resources/Textures/moonTexture.jpg"),be=new M(3*.25,32,32),Te=new x({map:xe}),b=new d(be,Te);b.position.setX(m+8);o.add(b);const Le=new c().load("../Resources/Textures/psycheTexture.jpg"),Ee=new ee(1),G=new x({map:Le}),h=new d(Ee,G);h.position.setX(m*2.5);r.position.setX(m);var f=new C;const X=new te;X.load("../Resources/Models/PsycheModel.stl",function(e){const t=new d(e,G);t.position.setX(m*2.5),o.add(t),f.add(t),o.add(f)},e=>{console.log(e.loaded/e.total*100+"% loaded")},e=>{console.log(e)});new x;X.load("../Resources/Models/SpaceCraft.stl",function(e){const t=new d(e,G);t.position.setX(m*2.5),t.scale.set(.005,.005,.005),o.add(t),f.add(t)},e=>{console.log(e.loaded/e.total*100+"% loaded")},e=>{console.log(e)});const Me=new re;function ve(){this.userData.isSelecting=!0,this.userData.skipFrames=2}function Ce(){this.userData.isSelecting=!1}let T=a.xr.getController(0);T.addEventListener("selectstart",ve);T.addEventListener("selectend",Ce);T.userData.skipFrames=0;o.add(T);function Re(e){e.userData,Me.set(0,0,-.2).applyMatrix4(e.matrixWorld)}const q=oe();document.body.appendChild(q.dom);const Ie=new ne(16050587,5,150);o.add(Ie);R.add(r);R.add(i);R.add(H);const Be=new P(5,3),je=new c().load("../Resources/Textures/earthLabelTexture.jpg"),Ae=new v({map:je,side:se}),I=new d(Be,Ae);I.position.set(r.position.x,r.position.y+5,r.position.z);const B=I.clone();B.rotation.y+=3.141;B.position.set(r.position.x,r.position.y+5,r.position.z-.01);o.add(I);o.add(B);const Fe=new P(5,3),Se=new c().load("../Resources/Textures/marsLabelTexture.jpg"),Pe=new v({map:Se}),j=new d(Fe,Pe);j.position.set(i.position.x,i.position.y+5,i.position.z);const A=j.clone();A.rotation.y+=3.141;A.position.set(i.position.x,i.position.y+5,i.position.z-.01);o.add(j);o.add(A);const Ge=new P(5,3),De=new c().load("../Resources/Textures/psycheLabelTexture.jpg"),ke=new v({map:De}),F=new d(Ge,ke);F.position.set(h.position.x,h.position.y+5,h.position.z);const S=F.clone();S.rotation.y+=3.141;S.position.set(h.position.x,h.position.y+5,h.position.z-.01);o.add(F);o.add(S);new c().load("../Resources/Textures/spaceBackground.jpg");let D=!1;const ze=["The Psyche mission will begin by launching from our home planet Earth!","This is the Psyche spacecraft. It is an unmanned orbiting spacecraft","The current launch date is set for August 01, 2022"],Ne=["Resources/Images/earthFact1.jpeg","Resources/Images/earthFact2.jpeg","Resources/Images/earthFact3.jpeg"];let k=!1;const Oe=["The Psyche spacecraft will fly by Mars on its way to Psyche","The fly by will give the spacecraft the extra speed it needs for its journey","The fly by is expected to happen sometime in 2023"],We=["Resources/Images/marsFact1.jpeg","Resources/Images/marsFact2.jpeg","Resources/Images/marsFact3.jpeg"];r.addEventListener("click",e=>{D?z():(D=!0,V("Earth"),N("Earth"))});i.addEventListener("click",e=>{k?z():(k=!0,V("Mars"),N("Mars"))});function z(){l=2,document.getElementById("fact-card").innerText="",D=!1,k=!1}function V(e){document.getElementById("fact-card").innerText="";const t=document.createElement("div");t.setAttribute("class","card");const g=document.createElement("img");g.setAttribute("class","card-img-top"),g.setAttribute("id","card-img");const w=document.createElement("div");w.setAttribute("class","card-body");const n=document.createElement("p");n.setAttribute("class","card-text"),n.setAttribute("id","fact-text"),w.appendChild(n);const s=document.createElement("div");s.setAttribute("class","card-button-container");const p=document.createElement("button"),E=document.createElement("button"),U=document.createTextNode("Close"),Y=document.createTextNode("Read More");p.setAttribute("class","control-button"),E.setAttribute("class","control-button"),p.appendChild(U),E.appendChild(Y),s.appendChild(p),s.appendChild(E),t.appendChild(g),t.appendChild(w),t.appendChild(s),document.getElementById("fact-card").appendChild(t),p.addEventListener("click",z),E.addEventListener("click",function(){N(e)})}let l=0,Z="";function N(e){l==2?l=0:e!=Z?(console.log("different identifier, setting factIndex to 0"),l=0,Z=e):l++,console.log("Updating "+e+" with factIndex: "+l);let t;switch(e){case"Earth":t=document.createTextNode(ze[l]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(t),document.getElementById("card-img").setAttribute("src",Ne[l]);break;case"Mars":t=document.createTextNode(Oe[l]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(t),document.getElementById("card-img").setAttribute("src",We[l]);break;default:console.log("Error in showNextFact switch")}}const He=new ae(u,a.domElement);var y=new C;y.add(r);y.add(b);y.add(I);y.add(B);o.add(y);var L=new C;L.add(i);L.add(j);L.add(A);o.add(L);var O=new C;O.add(b);o.add(O);f.add(F);f.add(S);function K(){a.setAnimationLoop(Xe)}function Xe(){requestAnimationFrame(K),r.rotation.y+=.003,i.rotation.y+=.003,y.rotation.y+=5e-4,L.rotation.y+=4e-4,O.rotation.y+=5e-4,f.rotation.y+=2e-4,b.rotation.y+=.003,He.update(),Re(T),R.update(),q.update(),a.render(o,u),a.autoClear=!1,a.render(ce,a.xr.getCamera())}K();