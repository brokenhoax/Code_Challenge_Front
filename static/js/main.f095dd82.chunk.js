(this.webpackJsonpcode_challenge=this.webpackJsonpcode_challenge||[]).push([[0],[,function(e,t,r){e.exports={text:"Main_text__3-236",instructions:"Main_instructions__1sYi_",challenge:"Main_challenge__ppj6g",main:"Main_main__1L4bc",mainCorrect:"Main_mainCorrect__jpRst",mainIncorrect:"Main_mainIncorrect__3yrn9",welcomeContainer:"Main_welcomeContainer__1Cqof",welcomeHeader:"Main_welcomeHeader__5iKA9",readyUp:"Main_readyUp__W22aK",quizContainer:"Main_quizContainer__1q7y2",question:"Main_question__1vWmY",one:"Main_one__3YSCn",two:"Main_two__2x4Lw",three:"Main_three__6p1qE",four:"Main_four__146ui",btn:"Main_btn__jTWsn",scoreboard:"Main_scoreboard__2Cs8t",score:"Main_score__3ae4w",scoreboardHeader:"Main_scoreboardHeader__sMGBK",navBtns:"Main_navBtns__aL0Gf",nav:"Main_nav__17-o1"}},,,,function(e,t,r){e.exports={logo:"Logo_logo__zUSEk",spinner:"Logo_spinner__1jHcj",spin:"Logo_spin__1YDGO",depth:"Logo_depth__1bBtw"}},function(e,t,r){e.exports={timer:"Timer_timer__2aZOV",hide:"Timer_hide__2JQd1"}},function(e,t,r){},,function(e,t,r){e.exports={title:"Title_title__3qxXi"}},,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(2),i=r.n(o),c=r(8),s=r.n(c),a=(r(15),r(3)),l=Object(o.createContext)(),u=function(e){var t=Object(o.useState)({isStarted:!1,isFinished:!1,number:0,score:"Q",correctAnswer:!0,questions:[{question:"What was Tandem's previous name?",incorrect:["Tandem","Burger Shack","Extraordinary Humans"],correct:"Devmynd"},{question:"In Shakespeare's play Julius Caesar, Caesar's last words were...",incorrect:["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],correct:"Et tu, Brute?"},{question:"A group of tigers are referred to as:",incorrect:["Chowder","Pride","Destruction"],correct:"Ambush"},{question:"What is the top speed an average cat can travel?",incorrect:["42 mph","13 mph","9 mph"],correct:"31 mph"},{question:"A cat can jump to _____ times its own height:",incorrect:["3","9","7"],correct:"5"},{question:"What is the only letter that doesn't appear in a US state name?",incorrect:["M","Z","X"],correct:"Q"},{question:"What is the name for a cow-bison hybrid?",incorrect:["Cowson","Bicow","Mooson"],correct:"Beefalo"},{question:"What is the largest freshwater lake in the world?",incorrect:["Lake Baikal","Lake Michigan","Lake Victoria"],correct:"Lake Superior"},{question:"In a website address bar, what does WWW stand for?",incorrect:["Wild Wild West","War World Web"],correct:"World Wide Web"},{question:"In a game of bingo, what number is represented by the name two little ducks?",incorrect:["20","55","77"],correct:"22"},{question:"According to Greek mythology, who was the first woman on Earth?",incorrect:["Lilith","Eve","Hera"],correct:"Pandora"},{question:"In which European city would you find Orly airport?",incorrect:["London","Belgium","Munich"],correct:"Paris"},{question:"Where would you find the Sea of Tranquility?",incorrect:["California","Siberia","China"],correct:"The Moon"},{question:"Which artist painted 'Girl with a Pearl Earrin'?",incorrect:["Van Gogh","Picasso","Da Vinci"],correct:"Vermeer"},{question:"What is the official name for the 'hashtag' symbol?",incorrect:["Number sign","Hash Sign","Pound"],correct:"Octothorpe"},{question:"Not American at all, where is apple pie from?",incorrect:["Japan","Ethiopia","Canada"],correct:"England"},{question:"What is the national animal of Scotland?",incorrect:["Bear","Rabbit","Seal"],correct:"Unicorn"},{question:"Where in the world is the only place where Canada is *due south*",incorrect:["Alaska","Russia","Washington"],correct:"Detroit"},{question:"Approximately how many grapes go into a bottle of wine?",incorrect:["500","200","1000"],correct:"700"},{question:"How much does a US One Dollar Bill cost to make?",incorrect:["$0.25","$1","$5"],correct:"$0.05"},{question:"The Vatican bank has the only ATM in the world that allows users to do what?",incorrect:["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],correct:"Perform transactions in Latin"}]}),r=Object(a.a)(t,2),i=r[0],c=r[1];return Object(n.jsx)(l.Provider,{value:[i,c],children:e.children})},h=r(1),d=r.n(h),b=function(e){var t=Object(o.useContext)(l),r=Object(a.a)(t,2),i=r[0];r[1];return i.isStarted||i.isFinished?i.isFinished?i.isFinished?Object(n.jsx)("div",{className:d.a.main,children:Object(n.jsxs)("div",{className:d.a.scoreboard,children:[Object(n.jsx)("h1",{className:d.a.scoreboardHeader,children:i.score<=60?"\xaf\xaf\\_(\u30c4)_/\xaf\xaf":i.score>=70&&i.score<100?"Great job!":i.score>=100?"Super Hero Like!!!":void 0}),Object(n.jsx)("p",{className:d.a.score,children:i.score}),Object(n.jsx)("h1",{className:d.a.message,children:"Points"}),Object(n.jsxs)("div",{className:d.a.navBtns,children:[Object(n.jsx)("button",{className:d.a.nav,onClick:function(t){e.goHome(t)},children:"Home"}),Object(n.jsx)("button",{className:d.a.nav,onClick:function(t){e.startGame(t)},children:"Restart"})]})]})}):void 0:Object(n.jsx)("div",{className:e.correctAnswer?"".concat(d.a.mainCorrect):"".concat(d.a.mainIncorrect),children:Object(n.jsxs)("div",{className:d.a.quizContainer,children:[Object(n.jsx)("div",{className:d.a.question,children:e.question}),Object(n.jsx)("div",{className:d.a.one,children:Object(n.jsx)("button",{className:d.a.btn,value:e.answerOne,onClick:function(t){e.handleAnswer(t)},children:e.answerOne})}),Object(n.jsx)("div",{className:d.a.two,children:Object(n.jsx)("button",{className:d.a.btn,value:e.answerTwo,onClick:function(t){e.handleAnswer(t)},children:e.answerTwo})}),Object(n.jsx)("div",{className:d.a.three,children:Object(n.jsx)("button",{className:d.a.btn,value:e.answerThree,onClick:function(t){e.handleAnswer(t)},children:e.answerThree})}),Object(n.jsx)("div",{className:d.a.four,children:Object(n.jsx)("button",{className:d.a.btn,value:e.answerFour,onClick:function(t){e.handleAnswer(t)},children:e.answerFour})})]})}):Object(n.jsx)("div",{className:d.a.main,children:Object(n.jsxs)("div",{className:d.a.welcomeContainer,children:[Object(n.jsx)("h1",{className:d.a.welcomeHeader,children:"Welcome to Quizzy!"}),Object(n.jsx)("h2",{children:"What is Quizzy?"}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{className:d.a.text,children:"Quizzy is a simple quiz app built using the MERN stack. Quizzy allows users to track their score as they work through the provided questions. Answers are provided in multiple-choice format and correct answers are provided when answered incorrectly. The pressure is on with the addition of a 35-second timer! And the stakes are high with point deductions for every incorrect answer."}),Object(n.jsx)("h2",{children:"How to Play"}),Object(n.jsxs)("ul",{className:d.a.instructions,children:[Object(n.jsx)("li",{children:"You will have 35 seconds to complete the quiz."}),Object(n.jsx)("li",{children:"A countdown timer (top-right) will help you keep track."}),Object(n.jsx)("li",{children:"You will earn 10 points for every question you answer correctly."}),Object(n.jsx)("li",{children:"You will lose 10 points for every question you get wrong."})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{className:d.a.challenge,children:"Challenge: Break 100 Points!"}),Object(n.jsx)("hr",{}),Object(n.jsx)("button",{className:d.a.nav,onClick:function(t){e.startGame(t)},children:"Play"})]})})},m=r(5),j=r.n(m),w=function(e){var t=Object(o.useContext)(l),r=Object(a.a)(t,2),i=r[0];r[1];return Object(n.jsx)("div",{className:j.a.logo,children:Object(n.jsx)("div",{id:j.a.spinner,children:i.score})})},p=r(9),_=r.n(p),O=function(){return Object(n.jsx)("div",{className:_.a.title,children:"Quizzy"})},f=r(6),v=r.n(f),g=Object(o.createContext)(),q=function(e){var t=Object(o.useState)({seconds:35,isActive:!1}),r=Object(a.a)(t,2),i=r[0],c=r[1];return Object(n.jsx)(g.Provider,{value:[i,c],children:e.children})},x=function(e){var t=Object(o.useContext)(g),r=Object(a.a)(t,2),i=r[0],c=r[1],s=Object(o.useContext)(l),u=Object(a.a)(s,2),h=u[0],d=u[1];Object(o.useEffect)((function(){if(h.isStarted){console.log("Is Quiz Started?: "+h.isStarted);var e=i.seconds>=1&&setInterval((function(){return c({seconds:i.seconds-1,isActive:!0})}),1e3);return console.log("Is Timer Active?: "+i.isActive),console.log(i.seconds),i.seconds<1&&(d({isStarted:!1,isFinished:!0,number:0,score:0,correctAnswer:!0,questions:h.questions}),c({seconds:"",isActive:!1}),console.log("Is Quiz Started?: "+h.isStarted),console.log("Is Timer Active?: "+i.isActive),console.log(i.seconds),b()),function(){return clearTimeout(e)}}}),[i.seconds,i.isActive,h.isStarted,d]),Object(o.useEffect)((function(){h.number===h.questions.length-1&&c({seconds:35,isActive:!1})}),[h.number,h.questions.length]);var b=function(){c({seconds:35,isActive:!1}),d({isStarted:!1,isFinished:!0,number:0,score:h.score,correctAnswer:!0,questions:h.questions})};return Object(n.jsx)("div",{className:"".concat(i.isActive)?"".concat(v.a.timer):"".concat(v.a.hide),children:i.seconds})},y=[{question:"What was Tandem's previous name?",incorrect:["Tandem","Burger Shack","Extraordinary Humans"],correct:"Devmynd"},{question:"In Shakespeare's play Julius Caesar, Caesar's last words were...",incorrect:["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],correct:"Et tu, Brute?"},{question:"A group of tigers are referred to as:",incorrect:["Chowder","Pride","Destruction"],correct:"Ambush"},{question:"What is the top speed an average cat can travel?",incorrect:["42 mph","13 mph","9 mph"],correct:"31 mph"},{question:"A cat can jump to _____ times its own height:",incorrect:["3","9","7"],correct:"5"},{question:"What is the only letter that doesn't appear in a US state name?",incorrect:["M","Z","X"],correct:"Q"},{question:"What is the name for a cow-bison hybrid?",incorrect:["Cowson","Bicow","Mooson"],correct:"Beefalo"},{question:"What is the largest freshwater lake in the world?",incorrect:["Lake Baikal","Lake Michigan","Lake Victoria"],correct:"Lake Superior"},{question:"In a website address bar, what does WWW stand for?",incorrect:["Wild Wild West","War World Web"],correct:"World Wide Web"},{question:"In a game of bingo, what number is represented by the name two little ducks?",incorrect:["20","55","77"],correct:"22"},{question:"According to Greek mythology, who was the first woman on Earth?",incorrect:["Lilith","Eve","Hera"],correct:"Pandora"},{question:"In which European city would you find Orly airport?",incorrect:["London","Belgium","Munich"],correct:"Paris"},{question:"Where would you find the Sea of Tranquility?",incorrect:["California","Siberia","China"],correct:"The Moon"},{question:"Which artist painted 'Girl with a Pearl Earrin'?",incorrect:["Van Gogh","Picasso","Da Vinci"],correct:"Vermeer"},{question:"What is the official name for the 'hashtag' symbol?",incorrect:["Number sign","Hash Sign","Pound"],correct:"Octothorpe"},{question:"Not American at all, where is apple pie from?",incorrect:["Japan","Ethiopia","Canada"],correct:"England"},{question:"What is the national animal of Scotland?",incorrect:["Bear","Rabbit","Seal"],correct:"Unicorn"},{question:"Where in the world is the only place where Canada is *due south*",incorrect:["Alaska","Russia","Washington"],correct:"Detroit"},{question:"Approximately how many grapes go into a bottle of wine?",incorrect:["500","200","1000"],correct:"700"},{question:"How much does a US One Dollar Bill cost to make?",incorrect:["$0.25","$1","$5"],correct:"$0.05"},{question:"The Vatican bank has the only ATM in the world that allows users to do what?",incorrect:["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],correct:"Perform transactions in Latin"}],A=(r(7),function(){var e=Object(o.useContext)(l),t=Object(a.a)(e,2),r=t[0],i=t[1],c=Object(o.useState)(!0),s=Object(a.a)(c,2),u=(s[0],s[1],Object(o.useState)(!0)),h=Object(a.a)(u,2),d=h[0],m=(h[1],Object(o.useState)(!1)),j=Object(a.a)(m,2),p=(j[0],j[1],Object(o.useState)(!1)),_=Object(a.a)(p,2),f=_[0],v=(_[1],Object(o.useState)(!0)),g=Object(a.a)(v,2),q=g[0],A=(g[1],Object.values(r.questions)[r.number]);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{welcomeClass:q,startClass:d,startGame:function(e){e.preventDefault(),console.log(r.number),i({isStarted:!0,isFinished:!1,number:0,score:0,correctAnswer:!0,questions:y})},resultsBtnClass:f,question:A.question,answerOne:A.correct,answerTwo:A.incorrect[0],answerThree:A.incorrect[1],answerFour:A.incorrect[2],handleAnswer:function(e){var t=e.target.value,n=(Object.keys(A),Object.values(A)[2]);console.log(n),t===n?(console.log("Your Score Is: "+r.score),console.log("Your Number Is: "+r.number),r.number===r.questions.length-1?i({isStarted:!1,isFinished:!0,number:0,score:r.score,correctAnswer:!0,questions:y}):i({isStarted:!0,isFinished:!1,number:r.number+1,score:r.score+10,correctAnswer:!0,questions:y})):(i({isStarted:!0,isFinished:!1,number:r.number,score:r.score,correctAnswer:!1,questions:y}),alert("Sorry, the correct answer is: "+n),r.number===r.questions.length-1?i({isStarted:!1,isFinished:!0,number:0,score:r.score,correctAnswer:!0,questions:y}):i({isStarted:!0,isFinished:!1,number:r.number+1,score:r.score-10,correctAnswer:!0,questions:y}))},correctAnswer:r.correctAnswer,goHome:function(e){e.preventDefault(),i({isStarted:!1,isFinished:!1,number:0,score:0,correctAnswer:!0,questions:y})}}),Object(n.jsx)(w,{}),Object(n.jsx)(O,{}),Object(n.jsx)(x,{})]})}),S=function(){return Object(n.jsx)(u,{children:Object(n.jsx)(q,{children:Object(n.jsx)(A,{})})})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),n(e),o(e),i(e),c(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),W()}],[[16,1,2]]]);
//# sourceMappingURL=main.f095dd82.chunk.js.map