(this["webpackJsonpphasmophobia-cheatsheet"]=this["webpackJsonpphasmophobia-cheatsheet"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/ghost.c97139a7.svg"},48:function(e,t,a){e.exports=a(62)},53:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),i=a(18),h=(a(53),a(24)),c=a(26),l=a(8),u=a(10),d=a(11),p=a(17),m=a(14),g=a(13),y=a(5),v=(a(54),a(55),a(21)),f=a(22),b=a(39),w=a(64),E=a(65),k=a(66),x=a(67),S=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data.primaryevidence.map((function(t,a){var n=r.a.createElement(b.a,{className:"evidence-header"+(e.props.remainingEvidence[t]?"":" grey")},t),o=e.props.ghostNames.map((function(a){var n=" grey";return e.props.ignoredGhosts[a]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[a]||(n=""),r.a.createElement(b.a,{className:"ghost-evidence"+n,key:"col-"+a+"-"+t},e.props.ghostHasEvidence[a][t]?"X":"")})),s="evidence-row";return e.props.selectedEvidence[t]?s+=" green-background":e.props.ignoredEvidence[t]?s+=" red-background":a%2===0&&(s+=" darkgrey-background"),r.a.createElement(w.a,{className:s,onClick:function(a){return e.props.onEvidenceClick(a,t)},onContextMenu:function(a){return e.props.onEvidenceClick(a,t)},key:"row-"+t},n,o)})),a=0,n=null;(this.props.selectedEvidenceAmount>0||this.props.selectedSecondaryEvidenceAmount>0||this.props.showAllSecondaryEvidence)&&(n=this.props.data.secondaryevidence.map((function(t){var n,o=!1,s=Object(l.a)(e.props.ghostNames);try{for(s.s();!(n=s.n()).done;){var i=n.value;if(e.props.selectedGhosts[i]&&e.props.ghostHasEvidence[i][t]){o=!0;break}}}catch(d){s.e(d)}finally{s.f()}if(o||e.props.ignoredEvidence[t]||e.props.selectedEvidence[t]||e.props.showAllSecondaryEvidence){var h=r.a.createElement(b.a,{className:"evidence-header"+(e.props.remainingEvidence[t]?"":" grey"),key:"header-"+t},t),c=e.props.ghostNames.map((function(a){return r.a.createElement(b.a,{className:"ghost-evidence"+(0===e.props.selectedEvidenceAmount||e.props.selectedGhosts[a]?"":" grey"),key:"col-"+a+"-"+t},e.props.ghostHasEvidence[a][t]?"X":"")})),u="evidence-row";return e.props.selectedEvidence[t]?u+=" green-background":e.props.ignoredEvidence[t]?u+=" red-background":a%2===0&&(u+=" darkgrey-background"),a++,r.a.createElement(w.a,{className:u,onClick:function(a){return e.props.onEvidenceClick(a,t)},onContextMenu:function(a){return e.props.onEvidenceClick(a,t)},key:"row-"+t},h,c)}return null})));var o=this.props.ghostNames.map((function(t,a){var n=" grey";return e.props.ignoredGhosts[t]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[t]||(n=""),1===e.props.selectedGhostAmount&&e.props.selectedGhosts[t]&&(n=" green"),r.a.createElement(b.a,{className:"ghost-header"+n,key:"header-"+t},r.a.createElement("div",{className:"rotated45"},t))}));return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},r.a.createElement(E.a,{style:{padding:"0",margin:"20px",marginTop:"0px",maxWidth:"100000px"}},r.a.createElement(w.a,null,r.a.createElement(b.a,{style:{textAlign:"center"}},r.a.createElement("b",null,"Leftclick: Select/Unselect Evidence.",r.a.createElement("br",null),"Rightclick: Ignore/Unignore Evidence.",r.a.createElement("br",null),"* Denotes sanity threshhold unknown."))),r.a.createElement(w.a,null,r.a.createElement(b.a,{className:"evidence-header"},r.a.createElement(k.a,{variant:"danger",onClick:function(){return e.props.resetSelected()}},"Unselect All Evidence"))),r.a.createElement(w.a,{style:{width:"100%"}},r.a.createElement(b.a,{className:"evidence-header"},"EVIDENCE"),o),t,r.a.createElement(x.a.Check,{id:"toggleSecondaryEvidence",draggable:!1,type:"checkbox",custom:"true",label:"Always show all Secondary Evidence",checked:this.props.showAllSecondaryEvidence,style:{margin:"15px"},onChange:function(t){return e.props.toggleSetting("showAllSecondaryEvidence")}}),null!==n&&r.a.createElement(w.a,{style:{width:"100%",marginTop:"25px"}},r.a.createElement(b.a,{className:"evidence-header"},"SECONDARY EVIDENCE")),n)))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,t={marginTop:"5px",marginLeft:"5px"},a=function(e,a){return a<e.length?r.a.createElement(b.a,{style:t,key:"voiceline-"+e[a]},e[a]):r.a.createElement(b.a,null)},n=function(t){return r.a.createElement(w.a,{key:"voicelines-row-"+t},a(e.props.data.voicelines.general,t),a(e.props.data.voicelines.ouija,t),a(e.props.data.voicelines.spiritbox,t),a(e.props.data.voicelines.attacktrigger,t))};if(this.state.width>1e3){for(var o=[],s=0,i=Math.max(this.props.data.voicelines.general.length,this.props.data.voicelines.ouija.length,this.props.data.voicelines.spiritbox.length,this.props.data.voicelines.attacktrigger.length);s<i;)o.push(n(s++));var h=["General Questions","Ouija Board Questions","Spirit Box Questions","Anger and Attack Trigger Words"].map((function(e,t){return r.a.createElement(b.a,{key:"header-"+e},r.a.createElement("h3",null,e))}));return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},r.a.createElement(E.a,{style:{padding:"0",margin:"20px",maxWidth:"90%"}},r.a.createElement(w.a,{style:{width:"100%"}},h),o)))}var c=[],l={general:"General Questions",ouija:"Ouija Board Questions",spiritbox:"Spirit Box Questions",attacktrigger:"Anger and Attack Trigger Words"};for(var u in this.props.data.voicelines){console.log(u);var d=[];d.push(r.a.createElement(b.a,{key:"header-"+l[u],style:{marginTop:"35px"}},r.a.createElement("h3",null,l[u])));for(var p=0;p<this.props.data.voicelines[u].length;p++)d.push(a(this.props.data.voicelines[u],p)),p++;c.push(d)}return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{display:"flex",margin:"25px 0px 15px 0px"}},r.a.createElement(E.a,{style:{marginLeft:"20px"}},c)))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},r.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},r.a.createElement("h2",{style:{textAlign:"center"}},"About Phasmophobia CheatSheet"),r.a.createElement("br",null),r.a.createElement("p",null,"This is a fork of un0btanium's Phasmophobia CheatSheet, with some adjustments I made for my playstyle. You can find the original project ",r.a.createElement("a",{href:"https://github.com/un0btanium/phasmophobia-cheatsheet"},"here"),". The original about page continues below."),r.a.createElement("p",null,"Phasmophobia CheatSheet provides an interactive 2D grid overview about all ghost types and their evidence. Add evidence to rule out ghosts and narrow down your search. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game."),r.a.createElement("p",null,"Special thanks to Redforce04, aschlick, thijnmens & Buguslavv for contributing on GitHub and keeping the project up-to-date."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Phasmophobia CheatSheet isn\u2019t endorsed by Kinetic Games and doesn\u2019t reflect the views or opinions of Kinetic Games or anyone officially involved in producing or managing Phasmophobia."))))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},r.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Contact"),r.a.createElement("br",null),r.a.createElement("p",null,"This is a fork of un0btanium's Phasmophobia CheatSheet, with some adjustments I made for my playstyle. You can find the original project ",r.a.createElement("a",{href:"https://github.com/un0btanium/phasmophobia-cheatsheet"},"here"),"."))))}}]),a}(n.Component),C={patchVersion:"October 2021",primaryevidence:["EMF Level 5","Fingerprints","Freezing Temperature","Ghost Orbs","Ghost Writing","Spirit Box","D.O.T.S. Projector"],secondaryevidence:["hunts only below 40% sanity if the light is on in the ghost room, otherwise it can hunt below 60%","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","hunts above 80% sanity","throw objects further away","more active when people are nearby","smudge stick stops attacks for 180 seconds (instead of 90 seconds)","no footprints after walking on salt (need to hear footsteps)","more active after stepping into the salt","his special ability allows him to appear near player far away from ghost room which creates EMF reading. Can also start hunting from that spot but it is very rare","looking at the ghost in range of 10 meters drops sanity considerably (0.4% per second instead of 0.2%)","taking a photo makes the ghost disappear. You cannot see the ghost on the photo even though it is qualified as a ghost photo","blinks less frequently at the hunt (every 1-2 seconds instead of 0.3-1 seconds)","throws multiple objects at once which decreases sanity of all players that is nearby (2% multiplied by amount of objects threw)","targets and hunts one person at a time. If the target is outside the building during hunt, it targets the players as normal ghost","scared off easily by the Crucifix. Crucifix has bigger range (6 meters instead of 3)","walks 2 times faster than a player if breaker is on and ghost is 3 meters away from targeted player","his special power ability instantly 25% sanity within 3 meters","increased chance of an attack if the lights in the ghost room are off","lower chance of an attack when lights in the ghost room are on","travels 2 times faster than a player at hunts when has player in sight","travels 2 times slower than a player at hunts when has no player in sight","shy ghost with no activity/hunting when multiple people are in the ghost room","attacks often","sanity is not lowered when asking successful Ouija Board questions","haunts family homes","Only visibly through the Video Camera","Rarely seen far away from their place of death","Makes paranormal sounds","Quieter when hunting","smudging the room will stop it from wandering around for 90 seconds","talking in 2 meter range from ghost increases chance of attack","while hunting only hears voices from 2 meters","attack more often during cold temperatures","moves slightly faster than a player at lower temperatures","Fears any form of fire","Attacks when flames are extinguished","Attacks from different locations","Simultaneous events far from each other","Moves faster when nearby electrical devices","Rarely leaves a trace when interacting with the environment","Sometimes leaves a six fingered handprint"],ghosts:[{name:"Spirit",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Ghost Writing","Spirit Box","smudge stick stops attacks for 180 seconds (instead of 90 seconds)"]},{name:"Wraith",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Spirit Box","D.O.T.S. Projector","no footprints after walking on salt (need to hear footsteps)","more active after stepping into the salt","his special ability allows him to appear near player far away from ghost room which creates EMF reading. Can also start hunting from that spot but it is very rare"]},{name:"Phantom",description:"",uniquestrength:"",weaknesses:"",evidence:["Spirit Box","Fingerprints","D.O.T.S. Projector","his special ability allows him to appear near player far away from ghost room which creates EMF reading. Can also start hunting from that spot but it is very rare","looking at the ghost in range of 10 meters drops sanity considerably (0.4% per second instead of 0.2%)","taking a photo makes the ghost disappear. You cannot see the ghost on the photo even though it is qualified as a ghost photo","blinks less frequently at the hunt (every 1-2 seconds instead of 0.3-1 seconds)"]},{name:"Poltergeist",description:"",uniquestrength:"",weaknesses:"",evidence:["Spirit Box","Ghost Writing","Fingerprints","throws multiple objects at once which decreases sanity of all players that is nearby (2% multiplied by amount of objects threw)","throw objects further away"]},{name:"Banshee",description:"",uniquestrength:"",weaknesses:"",evidence:["Ghost Orbs","Fingerprints","D.O.T.S. Projector","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","hunts above 80% sanity","targets and hunts one person at a time. If the target is outside the building during hunt, it targets the players as normal ghost","scared off easily by the Crucifix. Crucifix has bigger range (6 meters instead of 3)"]},{name:"Jinn",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","EMF Level 5","Fingerprints","walks 2 times faster than a player if breaker is on and ghost is 3 meters away from targeted player","his special ability drains instantly 25% sanity within 3 meters"]},{name:"Mare",description:"",uniquestrength:"",weaknesses:"",evidence:["Ghost Orbs","Spirit Box","Ghost Writing","hunts above 50% sanity","hunts only below 40% sanity if the light is on in the ghost room, otherwise it can hunt below 60%","increased chance of an attack if the lights in the ghost room are off","lower chance of an attack when lights in the ghost room are on"]},{name:"Revenant",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Ghost Orbs","Ghost Writing","travels 2 times faster than a player at hunts when has player in sight","travels 2 times slower than a player at hunts when has no player in sight"]},{name:"Shade",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","EMF Level 5","Ghost Writing","shy ghost with no activity/hunting when multiple people are in the ghost room"]},{name:"Demon",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Fingerprints","Ghost Writing","hunts above 50% sanity","hunts above 60% sanity","attacks often","sanity is not lowered when asking successful Ouija Board questions"]},{name:"Yurei",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Ghost Orbs","D.O.T.S. Projector","looking at the ghost in range of 10 meters drops sanity considerably (0.4% per second instead of 0.2%)","smudging the room will stop it from wandering around for 90 seconds"]},{name:"Oni",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","EMF Level 5","D.O.T.S. Projector","throw objects further away","more active when people are nearby"]},{name:"Yokai",description:"",uniquestrength:"",weaknesses:"",evidence:["Ghost Orbs","Spirit Box","D.O.T.S. Projector","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","haunts family homes","talking in 2 meter range from ghost increases chance of attack","while hunting only hears voices from 2 meters"]},{name:"Hantu",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Ghost Orbs","Fingerprints","attack more often during cold temperatures","moves slightly faster than a player at lower temperatures"]},{name:"Goryo",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Fingerprints","D.O.T.S. Projector","Only visibly through the Video Camera","Rarely seen far away from their place of death"]},{name:"Myling",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Fingerprints","Ghost Writing","Makes paranormal sounds","Quieter when hunting"]},{name:"Onryo*",description:"",uniquestrength:"",weaknesses:"",evidence:["Spirit Box","Ghost Orbs","Freezing Temperature","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","hunts above 80% sanity","Fears any form of fire","Attacks when flames are extinguished"]},{name:"The Twins*",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Spirit Box","Freezing Temperature","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","hunts above 80% sanity","Attacks from different locations","Simultaneous events far from each other"]},{name:"Raiju*",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Ghost Orbs","D.O.T.S. Projector","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","hunts above 80% sanity","Moves faster when nearby electrical devices"]},{name:"Obake*",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Fingerprints","Ghost Orbs","hunts above 50% sanity","hunts above 60% sanity","hunts above 70% sanity","hunts above 80% sanity","Rarely leaves a trace when interacting with the environment","Sometimes leaves a six fingered handprint"]}],voicelines:{general:["What do you want?","Why are you here?","Do you want to hurt us?","Are you angry?","Do you want us here?","Shall we leave?","Should we leave?","Do you want us to leave?","What should we do?","Can we help?","Are you friendly?","What are you?","Are you close?","Can you show yourself?","Give us a sign.","Let us know you are here.","Show yourself.","Can you talk?","Speak to us.","Are you here?","Are you with us?","Anybody with us?","Is anyone here?","Anybody in the room?","Anybody here?","Is there a spirit here?","Is there a Ghost here?","Are you a girl?","Are you a boy?","Are you male?","Are you female?","Who are you?","What are you?","Who is this?","Who are we talking to?","Who am I talking to?","Hello?","What is your name?","Can you give me your name?","How old are you?","How young are you?","What is your age?","When were you born?","Are you a child?","Are you old?","Are you young?","What is your location?","What is your gender?","Are you male or female?","Are you a woman?"],ouija:["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favorite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"],spiritbox:["Can you speak?","Can you speak to us?","Make a noise.","Open a door.","Open this door.","Turn on the light.","Turn off the light.","Are there any ghosts?","Give us a sign.","Show us.","Let us know you are here.","Do something.","Is there anyone with me?","Scream.","Can we speak?","Would like to speak to you.","Is there anyone here?","May I ask you?","Would you like to talk?","Are you the only one here?","Are you waiting?","Is there anything I can do?","Do you know who we are?","Are you happy?","Are you here all the time?","Are you male or female?","Do you want us to leave?","Can I ask you?","Can you make a sound?","Show us your presence.","Knock something.","Make a sound.","Open the door.","Throw something.","Talk to me.","Talk to us.","We mean you no harm.","We are friends.","Is this you're home?","Can you speak to us?"],attacktrigger:["<The Ghosts Name>","I'm scared.","I am scared.","Scared.","Scary.","Spooky.","Horror.","Scare.","Frighten.","Panic.","Fright.","Hide.","Run.","Show your presence.","Show us.","Show me.","Fuck","Bitch","Shit","Cunt","Ass","Bastard","Motherfucker (high response)","Arsehole","Crap","Pussy","Dickhead","Bloody Mary"]}},W=a(40),G=a.n(W),T=C.patchVersion,F=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this,e);var r,o=[],s={},i={},h={},c={},d={},m={},g={},y=Object(l.a)(C.ghosts);try{for(y.s();!(r=y.n()).done;){var v=r.value;i[v.name]=!1,h[v.name]=!1,s[v.name]=v,o.push(v.name)}}catch(D){y.e(D)}finally{y.f()}var f=function(e,t){return e<t?-1:e>t?1:0};for(var b in o.sort(f),C.voicelines)C.voicelines[b].sort(f);var w,E=Object(l.a)(C.primaryevidence);try{for(E.s();!(w=E.n()).done;){var k=w.value;d[k]=!1,m[k]=!1,g[k]=!0}}catch(D){E.e(D)}finally{E.f()}var x,S=Object(l.a)(C.secondaryevidence);try{for(S.s();!(x=S.n()).done;){var j=x.value;d[j]=!1,m[j]=!1,g[j]=!0}}catch(D){S.e(D)}finally{S.f()}for(var O=0,A=o;O<A.length;O++){var W=A[O];c[W]={};var G,T=Object(l.a)(s[W].evidence);try{for(T.s();!(G=T.n()).done;){var F=G.value;c[W][F]=!0}}catch(D){T.e(D)}finally{T.f()}}return n.onEvidenceClick=n.onEvidenceClick.bind(Object(p.a)(n)),n.toggleSetting=n.toggleSetting.bind(Object(p.a)(n)),n.resetSelected=n.resetSelected.bind(Object(p.a)(n)),n.state={showAllSecondaryEvidence:!1,data:C,ghostNames:o,ghostsByName:s,selectedGhosts:i,ignoredGhosts:h,selectedEvidence:d,ignoredEvidence:m,remainingEvidence:g,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0,ghostHasEvidence:c,onEvidenceClick:n.onEvidenceClick,toggleSetting:n.toggleSetting,resetSelected:n.resetSelected},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"full-screenable-node"},r.a.createElement(v.a,{bg:"dark",variant:"dark",expand:"xl",style:{boxShadow:"0px 2px 5px #000000"}},r.a.createElement(v.a.Brand,{style:{marginLeft:"15%"}},r.a.createElement("a",{href:"http://un0btanium.github.io/phasmophobia-cheatsheet/"},r.a.createElement("img",{src:G.a,width:"35",height:"35",alt:"Logo"}),r.a.createElement("b",null," Phasmophobia CheatSheet"))),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav",style:{marginRight:"10%"}},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{as:i.b,variant:"light",to:"/phasmophobia-cheatsheet/ghostsandevidence"},r.a.createElement("b",null,"Ghosts & Evidence")),r.a.createElement(f.a.Link,{as:i.b,variant:"light",to:"/phasmophobia-cheatsheet/voicelines"},r.a.createElement("b",null,"Voicelines"))),r.a.createElement(f.a,null,r.a.createElement(f.a.Link,{as:i.b,variant:"light",to:"/phasmophobia-cheatsheet/about"},r.a.createElement("b",null,"About")),r.a.createElement(v.a.Text,{style:{color:"rgb(223, 105, 26)",marginLeft:"20px"}},r.a.createElement("b",null,"Patch ",r.a.createElement("i",null,T)))))),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/ghostsandevidence",render:function(t){return r.a.createElement(S,Object.assign({},t,e.state))}}),r.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/voicelines",render:function(t){return r.a.createElement(j,Object.assign({},t,e.state))}}),r.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/about",render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/contact",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(y.a,{render:function(t){return r.a.createElement(S,Object.assign({},t,e.state))}}))))}},{key:"preventEvent",value:function(e){e.preventDefault()}},{key:"toggleSetting",value:function(e){localStorage.setItem(e,!this.state[e]),this.setState(Object(c.a)({},e,!this.state[e]))}},{key:"onEvidenceClick",value:function(e,t){e.preventDefault();var a=Object(h.a)({},this.state.selectedEvidence),n=Object(h.a)({},this.state.ignoredEvidence);"click"===e.type?(a[t]=!a[t],a[t]&&(n[t]=!1)):"contextmenu"===e.type&&(n[t]=!n[t],n[t]&&(a[t]=!1));var r=0,o=0;for(var s in a)!0!==a[s]&&!0!==n[s]||(r++,this.state.data.secondaryevidence.includes(s)&&o++);var i,c={},u={},d=0,p={},m=Object(l.a)(this.state.data.ghosts);try{for(m.s();!(i=m.n()).done;){var g=i.value,y=!0;for(var v in a)if(a[v]&&!g.evidence.includes(v)){y=!1;break}for(var f in n)if(n[f]&&g.evidence.includes(f)){u[g.name]=!0,y=!1;break}if(y){c[g.name]=!0,d++;var b,w=Object(l.a)(g.evidence);try{for(w.s();!(b=w.n()).done;){p[b.value]=!0}}catch(E){w.e(E)}finally{w.f()}}else c[g.name]=!1}}catch(E){m.e(E)}finally{m.f()}this.setState({selectedGhosts:c,ignoredGhosts:u,selectedEvidence:a,ignoredEvidence:n,remainingEvidence:p,selectedGhostAmount:d,selectedEvidenceAmount:r,selectedSecondaryEvidenceAmount:o})}},{key:"resetSelected",value:function(){var e,t={},a={},n=Object(h.a)({},this.state.selectedEvidence),r=Object(h.a)({},this.state.ignoredEvidence),o={},s=Object(l.a)(C.ghosts);try{for(s.s();!(e=s.n()).done;){var i=e.value;t[i.name]=!1,a[i.name]=!1}}catch(y){s.e(y)}finally{s.f()}var c,u=Object(l.a)(C.primaryevidence);try{for(u.s();!(c=u.n()).done;){var d=c.value;n[d]=!1,r[d]=!1,o[d]=!0}}catch(y){u.e(y)}finally{u.f()}var p,m=Object(l.a)(C.secondaryevidence);try{for(m.s();!(p=m.n()).done;){var g=p.value;n[g]=!1,r[g]=!1,o[g]=!0}}catch(y){m.e(y)}finally{m.f()}this.setState({selectedGhosts:t,ignoredGhosts:a,selectedEvidence:n,ignoredEvidence:r,remainingEvidence:o,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0})}}]),a}(n.Component),D=Object(y.f)(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.8559a56d.chunk.js.map