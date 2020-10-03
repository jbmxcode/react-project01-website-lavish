(this["webpackJsonpreact-project01-website-lavish"]=this["webpackJsonpreact-project01-website-lavish"]||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),i=a.n(r),c=a(15),o=a(2),s=a(11),m=a(8),u=(a(27),["btn--primary","btn-outline"]),d=["btn--medium","btn--large","btn--mobile","btn--wide"],E=["primary","blue","red","green"],g=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,i=e.buttonSize,c=e.buttonColor,o=u.includes(r)?r:u[0],s=u.includes(i)?i:d[0],m=E.includes(c)?c:null;return l.a.createElement("button",{className:"btn ".concat(o," ").concat(s," ").concat(m),onClick:n,type:a},t)},b=a(0);a(28);var p=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),u=Object(c.a)(i,2),d=u[0],E=u[1],p=function(){return r(!1)},v=function(){return window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){v()}),[]),window.addEventListener("resize",v),l.a.createElement(l.a.Fragment,null,l.a.createElement(b.b.Provider,{value:{color:"#fff"}},l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-container container"},l.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:p},l.a.createElement(s.a,{className:"nav-icon"}),"Lavish"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},a?l.a.createElement(m.f,null):l.a.createElement(m.a,null)),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-links",onClick:p},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/services",className:"nav-links",onClick:p},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/products",className:"nav-links",onClick:p},"Products")),l.a.createElement("li",{className:"nav-btn"},d?l.a.createElement(o.b,{to:"/sign-up",className:"btn-link",onClick:p},l.a.createElement(g,{buttonStyle:"btn--outline"},"SIGN UP")):l.a.createElement(o.b,{to:"/sign-up",className:"btn-link",onClick:p},l.a.createElement(g,{buttonStyle:"btn--outline",buttonSize:"btn--mobile"},"SIGN UP"))))))))},v=a(3);a(34);var h=function(e){var t=e.lightBg,a=e.topLine,n=e.lightText,r=e.lightTextDesc,i=e.headline,c=e.description,s=e.buttonLabel,m=e.img,u=e.alt,d=e.imgStart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t?"home__hero-section":"home__hero-section darkBg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-text-wrapper"},l.a.createElement("div",{className:"top-line"},a),l.a.createElement("h1",{className:n?"heading":"heading dark"},i),l.a.createElement("p",{className:r?"home__hero-subtitle":"hero__hero-subtitle dark"},c),l.a.createElement(o.b,{to:"/sign-up"},l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"blue"},s)))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-img-wrapper"},l.a.createElement("img",{src:m,alt:u,className:"home__hero-img"})))))))},N={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"./images/svg-1.svg",alt:"Credit Card"},f={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"90% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"./images/svg-5.svg",alt:"Vault"},y={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"./images/svg-7.svg",alt:"Vault"},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"./images/svg-8.svg",alt:"Vault"},w=a(20),_=a(21);a(35);var k=function(){return l.a.createElement(b.b.Provider,{value:{color:"#fff, size: 64"}},l.a.createElement("div",null,l.a.createElement("div",{className:"pricing__section"},l.a.createElement("div",{className:"pricing__wrapper"},l.a.createElement("h1",{className:"pricing__heading"},"Pricing"),l.a.createElement("div",{className:"pricing__container"},l.a.createElement(o.b,{className:"pricing__container-card",to:"/sign-up"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(m.c,null)),l.a.createElement("h3",null,"Starter"),l.a.createElement("h4",null,"$8.99"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"100 transactions"),l.a.createElement("li",null,"2% Cack Back"),l.a.createElement("li",null,"$10,000 Limit")),l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan"))),l.a.createElement(o.b,{className:"pricing__container-card",to:"/sign-up"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(w.a,null)),l.a.createElement("h3",null,"Gold"),l.a.createElement("h4",null,"$29.99"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"1000 transactions"),l.a.createElement("li",null,"3.5% Cack Back"),l.a.createElement("li",null,"$100,000 Limit")),l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan"))),l.a.createElement(o.b,{className:"pricing__container-card",to:"/sign-up"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(_.a,null)),l.a.createElement("h3",null,"Diamond"),l.a.createElement("h4",null,"$99.99"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"Unlimited transactions"),l.a.createElement("li",null,"5% Cack Back"),l.a.createElement("li",null,"Unlimited Spending")),l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan"))))))))};var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,N),l.a.createElement(h,y),l.a.createElement(h,f),l.a.createElement(k,null),l.a.createElement(h,S))};a(36);var C=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our exclusive membership to receive the latest news and trends"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(g,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(o.b,{to:"/sign-up"},"How it works"),l.a.createElement(o.b,{to:"/"},"Testimonials"),l.a.createElement(o.b,{to:"/"},"Careers"),l.a.createElement(o.b,{to:"/"},"Investors"),l.a.createElement(o.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(o.b,{to:"/"},"Contact"),l.a.createElement(o.b,{to:"/"},"Support"),l.a.createElement(o.b,{to:"/"},"Destinations"),l.a.createElement(o.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(o.b,{to:"/"},"Submit Video"),l.a.createElement(o.b,{to:"/"},"Ambassadors"),l.a.createElement(o.b,{to:"/"},"Agency"),l.a.createElement(o.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(o.b,{to:"/"},"Instagram"),l.a.createElement(o.b,{to:"/"},"Facebook"),l.a.createElement(o.b,{to:"/"},"Youtube"),l.a.createElement(o.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(o.b,{to:"/",className:"social-logo"},l.a.createElement(s.a,{className:"navbar-icon"}),"LAVISH")),l.a.createElement("small",{className:"website-rights"},"LAVISH \xa9 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement(m.b,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement(m.d,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"//www.youtube.com",target:"_blank","aria-label":"Youtube"},l.a.createElement(m.h,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement(m.g,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement(m.e,null))))))},x={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"./images/svg-1.svg",alt:"Credit Card"},L={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"./images/svg-7.svg",alt:"Vault"};var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(h,x),l.a.createElement(h,L))},I={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"./images/svg-8.svg",alt:"Vault"};var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,I))},D={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"./images/svg-7.svg",alt:"Vault"};var U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,D),l.a.createElement(k,null))};a(37);var P=function(){return l.a.createElement(o.a,null,l.a.createElement(p,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",exact:!0,component:T}),l.a.createElement(v.a,{path:"/services",component:A}),l.a.createElement(v.a,{path:"/products",component:B}),l.a.createElement(v.a,{path:"/sign-up",component:U})),l.a.createElement(C,null))};i.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8127a3dd.chunk.js.map