(this["webpackJsonpsinterklaas-quiz"]=this["webpackJsonpsinterklaas-quiz"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"questions":[{"question":"Waar is Thijmen zoal in slaap gevallen tijdens dronken avond?","answers":["Op de spoorwegovergang","In de bosjes naast de shell","Hangend over zijn fiets in de schuur","Alle bovenstaande"],"correctAnswer":"Alle bovenstaande"},{"question":"Hoe is Rob ooit een brommer kwijt geraakt?","answers":["In beslag genomen door de politie","Niet meer kunnen vinden na een dronken avond","Met zn blauwe harses door het ijs gezakt met brommer en al"],"correctAnswer":"Met zn blauwe harses door het ijs gezakt met brommer en al"},{"question":"Waar is Jimmy ooit zeer verslaafd aan geweest?","answers":["Crack","LEGO\xae worlds the videogame","World of warcraft"],"correctAnswer":"World of warcraft"},{"question":"Er zit een kat in een doos met een fles vol gif die op elk moment open kan gaan. Todat je in de doos kijkt is deze kat zowel dood als levend. Deze theorie heet Schr\xf6dinger\'s cat, van welke tak van de wetenschap in op onder andere deze theorie gebasseerd?","answers":["Astrofisica","Quantum mechanica","Thermodynamica","Mechano"],"correctAnswer":"Quantum mechanica"},{"question":"Wie is de grondlegger van de moderne Homeopathie?","answers":["Bassie","Ewald St\xf6teler","Dr. Samuel Hahnemann"],"correctAnswer":"Dr. Samuel Hahnemann"},{"question":"Welke bijnaam heeft Thijmen overgehouden aan zijn vakantie in Marmaris?","answers":["Timon","Casanova","Beugelbekkie"],"correctAnswer":"Beugelbekkie"},{"question":"Waar heeft Femmie ooit een blauw gezicht aan overgehouden?","answers":["Van de trap gevallen","Een paaltje die niet meegaf","Van een koord gevallen tijdens koorddansen"],"correctAnswer":"Een paaltje die niet meegaf"},{"question":"Met wie heeft Clau flink ruzie staan maken om 3 uur \'s nachts vanwege Roy?","answers":["Anniek de Ridder","Jimmy Schenk","Esmee Nauta"],"correctAnswer":"Esmee Nauta"},{"question":"Waarom staat Roy het meest bekend bij zijn vrienden?","answers":["De lengte van zijn penis","Dat hij altijd minstens een half uur te laat is","Zijn passie voor vissen"],"correctAnswer":"Dat hij altijd minstens een half uur te laat is"},{"question":"Waar is Thijmen zoal in slaap gevallen tijdens dronken avond","answers":["Op de spoorwegovergang","In de bosjes naast de shell","Hangend over zijn fiets in de schuur","Alle bovenstaande"],"correctAnswer":"Alle bovenstaande"}]}')},54:function(e,a,n){e.exports=n(66)},59:function(e,a,n){},60:function(e,a,n){},66:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(17),i=n.n(o),s=(n(59),n(60),n(99)),l=n(100),c=n(68),m=n(101),u=n(47),d=n(98),g=n(46),h=n(7),p=n(88),v=n(90),f=n(91),k=n(92),E=n(93),w=n(94),b=Object(p.a)({media:{height:500}}),j=Object(h.f)((function(e){var a=e.history,n=b();return r.a.createElement(v.a,null,r.a.createElement(f.a,{image:"sinterklaas.jpeg",className:n.media}),r.a.createElement(k.a,null,r.a.createElement(c.a,{gutterBottom:!0,variant:"h5",component:"h2"},"SchenkMulderDavidsVerkerk familiequiz"),r.a.createElement(c.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p"},"Sinterklaas zat te denken, zal ik de cadeaus zomaar schenken. Helaas Mar, je bent er bijna."),r.a.createElement(E.a,null,r.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",onClick:function(){return a.push("/quiz")}},"Volgende"))))})),z=n(34),q=n(95),A=n(49),S=n(106),y=n(96),O=n(103),x=n(104),N=n(107),W=n(105),B=n(97),M=n(102),T=n(21),V=[],D=function(){return H()},H=function e(){if(5===V.length)return[T.questions[V[0]],T.questions[V[1]],T.questions[V[2]],T.questions[V[3]],T.questions[V[4]]];var a=I();-1===V.indexOf(a)?(V.push(a),e()):e()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;return Math.ceil(Math.random()*(a-e)+e)},C=Object(p.a)((function(e){return{root:{paddingTop:"5em",width:"100%"},button:{marginRight:e.spacing(1),marginTop:"2em"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},questions:{padding:"2em"}}})),J=function(){var e=Object(t.useState)(0),a=Object(z.a)(e,2),n=a[0],o=a[1],i=Object(t.useState)(0),s=Object(z.a)(i,2),l=s[0],m=s[1],u=Object(t.useState)(),d=Object(z.a)(u,2),g=d[0],h=d[1],p=["Vraag 1","Vraag 2","Vraag 3","Vraag 4","Vraag 5"],v=C();Object(t.useEffect)((function(){o(Number(localStorage.getItem("step"))||0),D(),h(D())}),[]);var f=function(){localStorage.setItem("step",0),o(0),m(0),V=[],D(),h(D())};return r.a.createElement(q.a,{container:!0,className:v.root},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(A.a,null,r.a.createElement(S.a,{activeStep:n},p.map((function(e,a){return r.a.createElement(y.a,{key:e},r.a.createElement(O.a,null))}))),g&&r.a.createElement(q.a,{container:!0,className:v.questions},n===p.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(c.a,{gutterBottom:!0,variant:"h5",component:"h2",className:v.instructions},"Je hebt successvol de quiz afgerond.")),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(c.a,{gutterBottom:!0,variant:"body1",component:"p"},"De cijfercode is: 1234"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(c.a,{className:v.instructions},g[n].question),r.a.createElement(x.a,{component:"fieldset"},r.a.createElement(N.a,{component:"legend"},"Antwoord"),r.a.createElement(W.a,{"aria-label":"gender",name:"gender1",value:l,onChange:function(e){return m(e.target.value)}},function(e){return g[e].answers}(n).map((function(e){return r.a.createElement(B.a,{key:e,value:e,control:r.a.createElement(M.a,null),label:e})}))))),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:function(){var e=g[n].correctAnswer;l===e?(o((function(e){return e+1})),localStorage.setItem("step",1),m(0)):f()},className:v.button},n===p.length-1?"Finish":"Next")))))))},R=Object(u.a)({palette:{primary:{main:"#d32f2f"}}});var F=function(){return r.a.createElement(d.a,{theme:R},r.a.createElement(s.a,{position:"static"},r.a.createElement(l.a,null,r.a.createElement(c.a,{variant:"h6"},"Sinterklaas quiz"))),r.a.createElement(m.a,{maxWidth:"lg"},r.a.createElement(g.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:j}),r.a.createElement(h.a,{path:"/quiz",exact:!0,component:J})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.1350fbe8.chunk.js.map