(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(t){t.exports=JSON.parse('[{"projectTitle":"Daily Planner","projectGitHub":"https://github.com/hstor3/planner","projectUrl":"https://hstor3.github.io/planner/","screenShot":"./assets/dailyplanner.png","tech":["html"," css"," javascript"]},{"projectTitle":"Weather Dashboard","projectGitHub":"https://github.com/hstor3/weather-dashboard","projectUrl":"https://hstor3.github.io/weather-dashboard/","screenShot":"./assets/weatherboard.png","tech":["html"," css"," javascript"]},{"projectTitle":"Timed Quiz","projectGitHub":"https://github.com/hstor3/timed-quiz","projectUrl":"https://hstor3.github.io/timed-quiz/","screenShot":"./assets/timedquiz.png","tech":["html"," css"," javascript"]},{"projectTitle":"Password Generator","projectGitHub":"https://github.com/hstor3/prompt_pass_generator","projectUrl":"https://hstor3.github.io/prompt_pass_generator/","screenShot":"./assets/passgen.png","tech":["html"," css"," javascript"]},{"projectTitle":"Treat Yo Shelf","projectGitHub":"https://github.com/hstor3/treat-yo-shelf","projectUrl":"https://treatyourshelf.herokuapp.com/","screenShot":"./assets/treatyoshelf.png","tech":["Greensock","CSS","Handlebars","Express","Node.js","MySQL"]},{"projectTitle":"MVC Blog","projectGitHub":"https://github.com/hstor3/turtle-sniffles","projectUrl":"https://warm-bayou-06994.herokuapp.com/","screenShot":"./assets/blog.gif","tech":["CSS","Handlebars","Express","Node","MySQL","JavaScript","Express"]}]')},34:function(t,e,s){},35:function(t,e,s){},37:function(t,e,s){},41:function(t,e,s){},42:function(t,e,s){},43:function(t,e,s){},45:function(t,e,s){"use strict";s.r(e);var a=s(0),r=s.n(a),c=s(11),n=s.n(c),o=(s(34),s(35),s(1));var i=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{alt:"Heather Storseth",className:"text-center pb-3 pt-3",children:"Heather Storseth"})})},l=(s(37),s(53)),h=s(52);var j=function(){return Object(o.jsxs)(l.a,{className:"nav text-center",bg:"light",expand:"lg",children:[Object(o.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(o.jsx)(h.a.Item,{eventKey:"about",href:"#about-me",children:"About"}),Object(o.jsx)(h.a.Item,{eventKey:"about",href:"#work-stuff",children:"Projects"}),Object(o.jsx)(h.a.Item,{eventKey:"about",href:"#contact-info",children:"Contact Info"}),Object(o.jsx)(h.a.Item,{eventKey:"about",href:"#about-me",children:"Resume"})]})]})};s(41);var b=function(){return Object(o.jsxs)("article",{id:"about-me",className:"stuff",alt:"about me section",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("img",{src:"./assets/pro-pic.JPG",alt:"profile",className:"profile-pic"}),Object(o.jsx)("p",{children:"Hi, I'm Heather! I am a full stack developer whith a great appreciation for both the front and backend sides of apps. I enjoy creating modern apps that are visually appealing, have a strong foundation, and a smooth functionality. I am a natural problem solver so debugging and creating new solutions to problems comes easy to me. My coding knowledge is primarily JavaScript based but I've found that I'm able to pick up new languages with no problem."})]})},p=s(25),u=s(26),d=s(29),f=s(28),m=(s(42),s(27)),x=function(t){Object(d.a)(s,t);var e=Object(f.a)(s);function s(){var t;Object(p.a)(this,s);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={projects:m,projectIndex:0},t}return Object(u.a)(s,[{key:"componentDidMount",value:function(){console.log(this.state)}},{key:"nextBtn",value:function(){var t=this.state.projectIndex,e=++t%this.state.projects.length;this.setState({projectIndex:e})}},{key:"backBtn",value:function(){var t=this.state.projectIndex;0==t?t=this.state.projects.length-1:t--,this.setState({projectIndex:t})}},{key:"projectInfo",value:function(){if(this.state.projects.length){var t=this.state.projects[this.state.projectIndex];return console.log(t),console.log("/react-portfolio"),Object(o.jsxs)("div",{className:"card text-center",id:"projectCard",children:[Object(o.jsx)("img",{className:"card-img",alt:"images examples of the projects",src:t.screenShot}),Object(o.jsx)("div",{className:"card-body"}),Object(o.jsx)("h3",{className:"card-title",children:t.projectTitle}),Object(o.jsx)("a",{target:"_blank",className:"deployed-link",href:t.projectUrl,children:t.projectUrl}),Object(o.jsx)("a",{target:"_blank",className:"gitHub text-center",href:t.projectGitHub,children:t.projectGitHub}),Object(o.jsxs)("div",{className:"text-center",children:["This project includes: ",t.tech]})]})}}},{key:"render",value:function(){var t=this,e=this.projectInfo();return Object(o.jsxs)("section",{id:"work-stuff",className:"stuff",alt:"section with my work",children:[Object(o.jsx)("h2",{children:"Projects"}),e,Object(o.jsx)("button",{className:"nextBtn btn btn-primary",onClick:function(){return t.nextBtn()},children:"Next"}),Object(o.jsx)("button",{className:"backBtn btn btn-primary",onClick:function(){return t.backBtn()},children:"Back"})]})}}]),s}(a.Component);s(43);var g=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("section",{id:"contact-info",className:"contact-info",alt:"contact information",children:[Object(o.jsx)("h2",{children:"Contact Info"}),Object(o.jsx)("a",{href:"mailto: heatherstorseth3@gmail.com",target:"_blank",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),Object(o.jsx)("a",{href:"./Resume.pdf",target:"_blank",children:Object(o.jsx)("i",{className:"fas fa-file"})}),Object(o.jsx)("a",{href:"www.linkedin.com/in/heather-storseth-5571501b9",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-linkedin"})}),Object(o.jsx)("a",{href:"https://github.com/hstor3",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-github-square"})}),Object(o.jsx)("a",{href:"tel: +1-509-901-1565",children:Object(o.jsx)("i",{className:"fas fa-mobile"})})]})})};s(7);var O=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(i,{}),Object(o.jsx)(j,{}),Object(o.jsx)(b,{}),Object(o.jsx)(x,{}),Object(o.jsx)(g,{})]})},v=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(e){var s=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,n=e.getTTFB;s(t),a(t),r(t),c(t),n(t)}))};s(44);n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.e62c7fbb.chunk.js.map