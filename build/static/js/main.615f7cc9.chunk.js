(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(0),i=n(11),a=n.n(i),c=(n(89),n(134)),s=n(72),l=n(13),u=n(73),d=Object(u.a)({typography:{fontFamily:'"Roboto"',fontSize:30,h1:{}},palette:{},color:{myBlack:"#111111",myRed:"#AA0000",myBlue:"#0044AA",myGreen:"#00BB00",myOrange:"#DD8800",myYellow:"#FFDF44",myBrown:"#BB6611",myPink:"#FFAAAA",myPurple:"#AA00FF",myMagenta:"#FF00FF",myWhite:"#F5FFE8",red:"#FF4444",orange:"#FF8400",yellow:"#F0E900",lime:"#B0FF33",green:"#55FF77",cyan:"#22EEFF",blue:"#0088FF",purple:"#B400FF",skyGradient:"linear-gradient(to top, #FFE760, #FFF4E0)",conicGradient:"linear-gradient(to bottom right, red, orange, yellow, lime, yellow, orange, red) 1"}}),m=n(18),h=n(7),f=n(129),b=n(132),p=n(140),v=n(135),w=n(141),g=n(127),j=Object(g.a)((function(e){return{headingSelectRow:{direction:"row",display:"flex",padding:"0.5vw",paddingBottom:"1.4vh"},selectLabel:Object(h.a)({fontSize:"1.8vw",color:d.color.myBlack},e.breakpoints.down("sm"),{fontSize:"3.6vw"}),selectText:Object(h.a)({fontSize:"1.4vw",color:d.color.myBlue,height:"2vw"},e.breakpoints.down("sm"),{fontSize:"2.8vw",height:"4vw"}),selectWidth:Object(h.a)({width:"12vw"},e.breakpoints.down("sm"),{width:"24vw"}),selectIcon:Object(h.a)({fontSize:"2vw"},e.breakpoints.down("sm"),{fontSize:"4vw"})}})),y=function(e){var t=e.selectLabel,n=e.selectIndex,r=e.setItemIndex,i=e.itemsArray,a=j();return Object(o.jsxs)(f.a,{className:a.headingSelectRow,children:[Object(o.jsxs)(p.a,{className:a.selectLabel,children:[t,":"]}),Object(o.jsx)(v.a,{variant:"outlined",className:"".concat(a.selectText," ").concat(a.selectWidth),inputProps:{classes:{icon:a.selectIcon}},value:n,onChange:function(e){!function(e,t){t(e.target.value)}(e,r)},children:i.map((function(e,t){return Object(o.jsx)(w.a,{className:a.selectText,value:t,children:e})}))})]})},x=n(74),O=n(133),T=n(49),k=n(139),I=n(137),S=Object(g.a)((function(e){return{alert:Object(h.a)({fontSize:"2vw"},e.breakpoints.down("sm"),{fontSize:"4vw"})}}));function C(e){return Object(o.jsx)(I.a,Object(T.a)({elevation:6,variant:"filled"},e))}var z=function(e){var t=e.open,n=e.closeAlert,r=e.errorMessage,i=e.severity,a=S();return Object(o.jsx)(k.a,{open:t,autoHideDuration:4e3,onClose:n,children:Object(o.jsx)(C,{className:a.alert,onClose:n,severity:i,children:Object(o.jsx)("div",{children:r})})})},F=n(75),N=Object(g.a)((function(e){return{frame:{},centerRow:{display:"flex",justifyContent:"center"},topic:Object(h.a)({fontSize:"2.4vw",color:d.color.myOrange},e.breakpoints.down("sm"),{fontSize:"4.8vw",textAlign:"center"}),learningTool:Object(h.a)({fontSize:"1.6vw"},e.breakpoints.down("sm"),{fontSize:"3.2vw"})}})),L=function(e){var t=N(),n=e.children,r=e.topic,i=e.learningTool,a=Object(F.a)(e,["children","topic","learningTool"]);return Object(o.jsxs)(f.a,Object(T.a)(Object(T.a)({className:t.frame},a),{},{children:[Object(o.jsx)(f.a,{className:t.centerRow,children:Object(o.jsx)(b.a,{className:t.topic,children:r})}),Object(o.jsx)(f.a,{className:t.centerRow,children:Object(o.jsx)(b.a,{className:t.learningTool,children:i})}),n]}))},A=Object(g.a)((function(e){return{myInputText:Object(h.a)({width:"6vw",height:"2.4vw",fontSize:"2vw",margin:"0.5vw",textAlign:"right"},e.breakpoints.down("sm"),{width:"12vw",height:"4.8vw",fontSize:"4vw"}),centerRow:{display:"flex",justifyContent:"center"},keypadKey:Object(h.a)({width:"4vw",height:"4vw",fontSize:"2vw",minWidth:"1vw"},e.breakpoints.down("sm"),{width:"8vw",height:"8vw",fontSize:"4vw"})}})),R=function(e){var t=e.handleClick,n=e.topicIndex,r=e.formulaFocusedIndex,i=["0","1","2","3","4","5","6","7","8","9"],a=[d.color.red,d.color.orange,d.color.yellow,d.color.lime,d.color.green,d.color.cyan,d.color.blue,d.color.purple],c=Math.floor(Math.random()*a.length);(1!=n||1==n&&r>0)&&i.push("\xd7"),0!=n&&i.push("\xf7"),i.push("<-");var s=A();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{className:s.centerRow,children:i.map((function(e,n){if(n<6)return Object(o.jsx)(O.a,{className:s.keypadKey,value:e,variant:"contained",style:{color:d.color.myBlack,backgroundColor:a[(n+c)%a.length]},onClick:function(n){t(n,e)},children:e})}))}),Object(o.jsx)(f.a,{className:s.centerRow,children:i.map((function(e,n){if(n>5)return Object(o.jsx)(O.a,{className:s.keypadKey,value:e,variant:"contained",style:{color:d.color.myBlack,backgroundColor:a[(n+c+5)%a.length]},onClick:function(n){t(n,e)},children:e})}))})]})},B=n(136),P=Object(g.a)((function(e){return Object(h.a)({myInputText:Object(h.a)({width:"6vw",height:"2.4vw",fontSize:"2vw",margin:"0.5vw",textAlign:"right"},e.breakpoints.down("sm"),{width:"12vw",height:"4.8vw",fontSize:"4vw"}),centerRow:{display:"flex",justifyContent:"center"},leftRow:{display:"flex",direction:"row",alignItems:"center",overflow:"auto"},fractionColumn:{alignItems:"center"},integerInput:{width:"4vw",height:"4vw",fontSize:"1.7vw",minWidth:"4vw"},commonInput:{width:"5.5vw",height:"3vw",fontSize:"1.5vw",minWidth:"5.5vw"},smallInput:{width:"4vw",height:"2vw",fontSize:"1vw",minWidth:"4vw"},operatorInput:{borderRadius:"6vw",width:"4vw",height:"4vw",minWidth:"1vw",fontSize:"1.7vw",marginRight:"0.3vw"},fractionLineBox:{width:"6vw",height:"0.01vw",padding:"0vw",margin:"0.3vw",minWidth:"6vw"}},e.breakpoints.down("sm"),{integerInput:{width:"6vw",height:"8vw",fontSize:"3vw",minWidth:"6vw"},commonInput:{width:"8vw",height:"6vw",fontSize:"2.6vw",minWidth:"8vw"},smallInput:{width:"6vw",height:"4vw",fontSize:"2vw",minWidth:"6vw"},operatorInput:{borderRadius:"8vw",width:"6vw",height:"6vw",minWidth:"2vw",fontSize:"3vw",marginRight:"0.4vw"},fractionLineBox:{width:"10vw",height:"0.02vw",padding:"0vw",margin:"0.4vw",minWidth:"8vw"}})})),W=function(e){var t=e.handlePartClick,n=e.formula,r=e.learningToolIndex,i=e.positionIndex,a=e.partIndex,c=e.showSmallInput,s=e.isFocusedLine,l=e.calculationStage,u=e.lineIndex,m=P();return Object(o.jsx)(f.a,{className:m.leftRow,children:n.map((function(e,n){return Object(o.jsxs)(o.Fragment,{children:[0!=n&&Object(o.jsx)(O.a,{variant:"outlined",style:s&&i==n&&0==a?{backgroundColor:d.color.myPink,color:d.color.myRed}:{backgroundColor:d.color.myWhite,color:d.color.myBlue},className:m.operatorInput,onClick:function(e){t(e,n,0)},children:e[0]}),(1==r||l>1&&u>0)&&Object(o.jsx)(O.a,{variant:"outlined",style:s&&i==n&&1==a?{backgroundColor:d.color.myPink,color:d.color.myRed}:{backgroundColor:d.color.myWhite,color:d.color.myBlue},className:m.integerInput,onClick:function(e){t(e,n,1)},children:0==e[1]?"":e[1]}),Object(o.jsxs)(f.a,{container:!0,direction:"column",className:m.fractionColumn,children:[c&&Object(o.jsx)(O.a,{variant:"outlined",style:s&&i==n&&2==a?{backgroundColor:d.color.myPink,color:d.color.myRed}:{backgroundColor:d.color.myWhite,color:d.color.myBlue},className:m.smallInput,onClick:function(e){t(e,n,2)},children:0==e[2]?"":e[2]}),Object(o.jsx)(O.a,{variant:"outlined",style:s&&i==n&&3==a?{backgroundColor:d.color.myPink,color:d.color.myRed}:{backgroundColor:d.color.myWhite,color:d.color.myBlue},className:m.commonInput,onClick:function(e){t(e,n,3)},children:0==e[3]?"":e[3]}),Object(o.jsx)(B.a,{borderBottom:3,className:m.fractionLineBox}),Object(o.jsx)(O.a,{variant:"outlined",style:s&&i==n&&4==a?{backgroundColor:d.color.myPink,color:d.color.myRed}:{backgroundColor:d.color.myWhite,color:d.color.myBlue},className:m.commonInput,onClick:function(e){t(e,n,4)},children:0==e[4]?"":e[4]}),c&&Object(o.jsx)(O.a,{variant:"outlined",style:s&&i==n&&5==a?{backgroundColor:d.color.myPink,color:d.color.myRed}:{backgroundColor:d.color.myWhite,color:d.color.myBlue},className:m.smallInput,onClick:function(e){t(e,n,5)},children:0==e[5]?"":e[5]})]})]})}))})};var M=n(71),E=n.n(M),G=Object(g.a)((function(e){return{centerRow:{display:"flex",justifyContent:"center"},formulaColumn:Object(h.a)({width:"80vw",alignSelf:"center"},e.breakpoints.down("sm"),{width:"94vw",maxWidth:"96vw"}),formulaLine:Object(h.a)({fontSize:"2.5vw",letterSpacing:"0.6vw",textAlign:"left",justifyContent:"flex-start"},e.breakpoints.down("sm"),{fontSize:"5vw"}),formulaBox:Object(h.a)({width:"75vw"},e.breakpoints.down("sm"),{width:"90vw"}),verticalCenterRow:{display:"flex",alignItems:"center"},commonPadding:{margin:"1vw"},commonText:Object(h.a)({fontSize:"2vw",margin:"0.5vw"},e.breakpoints.down("sm"),{fontSize:"4vw"}),okButton:Object(h.a)({height:"4vw",width:"7vw",fontSize:"1vw",margin:"0.5vw"},e.breakpoints.down("sm"),{height:"8vw",width:"14vw",fontSize:"2vw"}),resetArrow:Object(h.a)({fontSize:"6vw"},e.breakpoints.down("sm"),{fontSize:"12vw"})}})),q=function(e){var t=e.languageIndex,n=e.topic,i=e.learningTool,a=e.topicIndex,c=e.learningToolIndex,s=Object(r.useState)(!1),l=Object(m.a)(s,2),u=l[0],h=l[1],p=Object(r.useState)(""),v=Object(m.a)(p,2),w=v[0],g=v[1],j=Object(r.useState)("error"),y=Object(m.a)(j,2),T=y[0],k=y[1],I=Object(r.useState)(0),S=Object(m.a)(I,2),C=S[0],F=S[1],N=Object(r.useState)(!1),A=Object(m.a)(N,2),B=A[0],P=A[1],M=Object(r.useState)([[["",0,0,0,0,0],["",0,0,0,0,0]]]),q=Object(m.a)(M,2),D=q[0],Y=q[1],V=Object(r.useState)(0),H=Object(m.a)(V,2),J=H[0],U=H[1],K=Object(r.useState)(3),$=Object(m.a)(K,2),Q=$[0],X=$[1],Z=Object(r.useState)(0),_=Object(m.a)(Z,2),ee=_[0],te=_[1],ne=Object(r.useState)(0),oe=Object(m.a)(ne,2),re=oe[0],ie=oe[1],ae=200,ce=function(){var e,t=[2];for(e=3;e<200;e++){var n,o=!0;for(n=0;n<t.length;n++)e%t[n]==0?(o=!1,n=t.length):Math.pow(t[n],2)>e&&(n=t.length);o&&t.push(e)}return t}(),se=["\u8f38\u5165","\u7d04\u7c21","\u5b8c\u6210","\u8f93\u5165","\u7ea6\u7b80","\u5b8c\u6210","Enter","Reduce?","Completed","Entrer","R\xe9duire?","Termin\xe9"],le=["\u4f60\u505a\u5f97\u5230\ufe57\u4f60\u5b8c\u6210\u4e86\u9019\u984c\u5206\u6578\u8a08\u7b97\ufe57","\u4f60\u505a\u5f97\u5230\ufe57\u4f60\u5b8c\u6210\u4e86\u8fd9\u9898\u5206\u6570\u8ba1\u7b97\ufe57","You can do it! You have completed this fraction calculation!","Tu peux le faire! Vous avez termin\xe9 ce calcul de fraction!"],ue=["\u9019\u5152\u5c11\u4e86\u904b\u7b97\u7b26\u865f\u3002","\u8fd9\u513f\u5c11\u4e86\u8fd0\u7b97\u7b26\u53f7\u3002","Operators are missing here.","Les op\xe9rateurs manquent ici."],de=["\u904b\u7b97\u7b26\u865f\u7684\u524d\u5f8c\u9700\u8f38\u5165\u5206\u6578\u6216\u6574\u6578\u3002","\u8fd0\u7b97\u7b26\u53f7\u7684\u524d\u540e\u9700\u8f93\u5165\u5206\u6570\u6216\u6574\u6570\u3002","There should be a whole number or an integer before and after an operator.","Il doit y avoir un nombre entier ou un entier avant et apr\xe8s un op\xe9rateur."],me=["\u4e00\u500b\u5206\u6578\u9700\u540c\u6642\u6709\u5206\u5b50\u548c\u5206\u6bcd\u3002","\u4e00\u4e2a\u5206\u6570\u9700\u540c\u65f6\u6709\u5206\u5b50\u548c\u5206\u6bcd\u3002","A fraction should both a numerator and a denominator.","Une fraction doit \xe0 la fois un num\xe9rateur et un d\xe9nominateur."],he=["\u9019\u5152\u6709\u5047\u5206\u6578\uff0c\u8acb\u8f38\u5165\u5e36\u5206\u6578\u3002","\u8fd9\u513f\u6709\u5047\u5206\u6570\uff0c\u8bf7\u8f93\u5165\u5e26\u5206\u6570\u3002","There are improper fractions, please enter a mixed number instead.","Il y a des fractions incorrectes, veuillez saisir un nombre mixte \xe0 la place."],fe=["\u76f8\u4e58\u5f8c\uff0c\u61c9\u53ea\u5f97\u4e00\u500b\u5206\u6578\u3002","\u76f8\u4e58\u540e\uff0c\u5e94\u53ea\u5f97\u4e00\u4e2a\u5206\u6570\u3002","You should only get one fraction after multiplication.","Vous ne devriez obtenir qu'une fraction apr\xe8s la multiplication."],be=["\u6574\u6578\u4e0d\u6b63\u78ba\uff0c\u9019\u61c9\u662f\u5206\u5b50\u9664\u4ee5\u5206\u6bcd\u5f97\u5230\u7684\u6574\u6578\u5546\u3002","\u6574\u6570\u4e0d\u6b63\u786e\uff0c\u8fd9\u5e94\u662f\u5206\u5b50\u9664\u4ee5\u5206\u6bcd\u5f97\u5230\u7684\u6574\u6570\u5546\u3002","The whole number is incorrect. This should be the integer quotient obtained by dividing the numerator by the denominator.","Le nombre entier est incorrect. Cela devrait \xeatre le quotient entier obtenu en divisant le num\xe9rateur par le d\xe9nominateur."],pe=["\u9019\u662f\u6574\u6578\uff0c\u6c92\u6709\u5206\u6578\u90e8\u4efd\u3002","\u8fd9\u662f\u6574\u6570\uff0c\u6ca1\u6709\u5206\u6570\u90e8\u4efd\u3002","This is a whole number, it has no fractional part.","C'est un nombre entier, il n'a pas de partie fractionnaire."],ve=["\u5206\u6bcd\u61c9\u4fdd\u6301\u4e0d\u8b8a\u3002","\u5206\u6bcd\u5e94\u4fdd\u6301\u4e0d\u53d8\u3002","The denominator should remain unchanged.","Le d\xe9nominateur doit rester inchang\xe9."],we=["\u5206\u5b50\u4e0d\u6b63\u78ba\uff0c\u9019\u61c9\u662f\u5206\u5b50\u9664\u4ee5\u5206\u6bcd\u5f97\u5230\u7684\u9918\u6578\u3002","\u5206\u5b50\u4e0d\u6b63\u786e\uff0c\u8fd9\u5e94\u662f\u5206\u5b50\u9664\u4ee5\u5206\u6bcd\u5f97\u5230\u7684\u4f59\u6570\u3002","The numerator is incorrect. This should be the remainder obtained by dividing the numerator by the denominator.","Le num\xe9rateur est incorrect. Il doit s'agir du reste obtenu en divisant le num\xe9rateur par le d\xe9nominateur."],ge=["\u5728\u8a08\u7b97\u4e58\u6cd5\u6216\u9664\u6cd5\u524d\uff0c\u5148\u5c07\u6240\u6709\u5e36\u5206\u6578\u8f49\u70ba\u5047\u5206\u6578\u3002","\u5728\u8ba1\u7b97\u4e58\u6cd5\u6216\u9664\u6cd5\u524d\uff0c\u5148\u5c06\u6240\u6709\u5e26\u5206\u6570\u8f6c\u4e3a\u5047\u5206\u6570\u3002","All mixed fractions should be changed to improper fractions before multiplication or division.","Toutes les fractions m\xe9lang\xe9es doivent \xeatre chang\xe9es en fractions impropres avant la multiplication ou la division."],je=["\u9019\u7b97\u5f0f\u61c9\u8207\u4e0a\u4e00\u884c\u7b97\u5f0f\u6709\u76f8\u540c\u6578\u91cf\u7684\u5206\u6578\u3002","\u8fd9\u7b97\u5f0f\u5e94\u4e0e\u4e0a\u4e00\u884c\u7b97\u5f0f\u6709\u76f8\u540c\u6570\u91cf\u7684\u5206\u6570\u3002","This calculation should have the same number of fractions as the previous calculation.","Ce calcul doit avoir le m\xeame nombre de fractions que le calcul pr\xe9c\xe9dent."],ye=["\u904b\u7b97\u7b26\u865f\u9700\u4fdd\u6301\u4e0d\u8b8a\u3002","\u8fd0\u7b97\u7b26\u53f7\u9700\u4fdd\u6301\u4e0d\u53d8\u3002","All operators should remain unchanged here.","Tous les op\xe9rateurs devraient rester inchang\xe9s ici."],xe=["\u6574\u6578\u90e8\u4efd\u61c9\u8f49\u70ba \u5206\u5b50=\u6574\u6578\uff0c\u5206\u6bcd=1\u3002","\u6574\u6570\u90e8\u4efd\u5e94\u8f6c\u4e3a \u5206\u5b50=\u6574\u6570\uff0c\u5206\u6bcd=1\u3002","A whole number should be changed to a fraction with numerator=whole number and denominator=1.","Un nombre entier doit \xeatre chang\xe9 en une fraction avec num\xe9rateur=nombre entier et d\xe9nominateur=1."],Oe=["\u65b0\u5206\u5b50\u61c9\u662f ( \u6574\u6578\xd7\u5206\u6bcd + \u5206\u5b50 )\u3002","\u65b0\u5206\u5b50\u5e94\u662f ( \u6574\u6570\xd7\u5206\u6bcd + \u5206\u5b50 )\u3002","A new numerator should be ( whole number\xd7denominator + numerator ).","Un nouveau num\xe9rateur doit \xeatre (nombre entier \xd7 d\xe9nominateur + num\xe9rateur)."],Te=["\u6240\u6709\u9664\u6cd5\u9700\u8f49\u70ba\u4e58\u6cd5\u3002","\u6240\u6709\u9664\u6cd5\u9700\u8f6c\u4e3a\u4e58\u6cd5\u3002","All divisions should be changed to multiplications.","Toutes les divisions devraient \xeatre chang\xe9es en multiplications."],ke=["\u4e58\u6578\u548c\u7b2c\u4e00\u500b\u5206\u6578\u9700\u4fdd\u6301\u4e0d\u8b8a\u3002","\u4e58\u6570\u548c\u7b2c\u4e00\u4e2a\u5206\u6570\u9700\u4fdd\u6301\u4e0d\u53d8\u3002","The multipliers and the first fraction should remain unchanged.","Les multiplicateurs et la premi\xe8re fraction devraient rester inchang\xe9s."],Ie=["\u9700\u628a\u6240\u6709\u9664\u6578\u4e0a\u4e0b\u5012\u8f49\u3002","\u9700\u628a\u6240\u6709\u9664\u6570\u4e0a\u4e0b\u5012\u8f6c\u3002","All divisors should be turned upside down.","Tous les diviseurs doivent \xeatre invers\xe9s."],Se=["\u9019\u4e0d\u662f\u6700\u7c21\u5206\u6578\uff0c\u8acb\u628a\u5b83\u7d04\u7c21\u3002","\u8fd9\u4e0d\u662f\u6700\u7b80\u5206\u6570\uff0c\u8bf7\u628a\u5b83\u7ea6\u7b80\u3002","It is not an irreducible fraction. Please reduce it.","Ce n'est pas une fraction irr\xe9ductible. Veuillez la r\xe9duire."],Ce=["\u9019\u5206\u5b50\u61c9\u662f\u4e0a\u4e00\u884c\u5206\u5b50\u76f8\u4e58\u7684\u7a4d\uff0c\u800c\u5206\u6bcd\u4e5f\u662f\u4e0a\u4e00\u884c\u5206\u6bcd\u76f8\u4e58\u7684\u7a4d\u3002","\u8fd9\u5206\u5b50\u5e94\u662f\u4e0a\u4e00\u884c\u5206\u5b50\u76f8\u4e58\u7684\u79ef\uff0c\u800c\u5206\u6bcd\u4e5f\u662f\u4e0a\u4e00\u884c\u5206\u6bcd\u76f8\u4e58\u7684\u79ef\u3002","This numerator should be the product of the above numerators and this denominator should be the product of the above denominators too.","Ce num\xe9rateur doit \xeatre le produit des num\xe9rateurs ci-dessus et ce d\xe9nominateur doit \xe9galement \xeatre le produit des d\xe9nominateurs ci-dessus."],ze=["\u5728\u7d04\u7c21\u7684\u904e\u7a0b\u4e2d\uff0c\u65b0\u5206\u5b50\u61c9\u662f\u539f\u672c\u5206\u5b50\u7684\u56e0\u6578\u3002","\u5728\u7ea6\u7b80\u7684\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u5206\u5b50\u5e94\u662f\u539f\u672c\u5206\u5b50\u7684\u56e0\u6570\u3002","The new numerator should be a factor of the original numerator in the process of reduction.","Le nouveau num\xe9rateur doit \xeatre un facteur du num\xe9rateur d'origine dans le processus de r\xe9duction."],Fe=["\u5728\u7d04\u7c21\u7684\u904e\u7a0b\u4e2d\uff0c\u65b0\u5206\u6bcd\u61c9\u662f\u539f\u672c\u5206\u6bcd\u7684\u56e0\u6578\u3002","\u5728\u7ea6\u7b80\u7684\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u5206\u6bcd\u5e94\u662f\u539f\u672c\u5206\u6bcd\u7684\u56e0\u6570\u3002","The new denominator should be a factor of the original denominator in the process of reduction.","Le nouveau d\xe9nominateur devrait \xeatre un facteur du d\xe9nominateur d'origine dans le processus de r\xe9duction."],Ne=["\u7d04\u7c21\u4e0d\u6b63\u78ba\uff0c\u5206\u5b50\u548c\u5206\u6bcd\u9700\u4ee5\u76f8\u540c\u7684\u56e0\u6578\u9032\u884c\u7d04\u7c21\u3002","\u7ea6\u7b80\u4e0d\u6b63\u786e\uff0c\u5206\u5b50\u548c\u5206\u6bcd\u9700\u4ee5\u76f8\u540c\u7684\u56e0\u6570\u8fdb\u884c\u7ea6\u7b80\u3002","The reduction is incorrect. The numerator and denominator must be reduced by the same factor.","La r\xe9duction est incorrecte. Le num\xe9rateur et le d\xe9nominateur doivent \xeatre r\xe9duits du m\xeame facteur."],Le=["\u9019\u7b97\u5f0f\u9084\u80fd\u4ee5","\u8fd9\u7b97\u5f0f\u8fd8\u80fd\u4ee5","This calculation can be further reduced by ","Ce calcul peut \xeatre encore r\xe9duit par "],Ae=["\u9032\u884c\u7d04\u7c21","\u8fdb\u884c\u7ea6\u7b80",".","."],Re=["\u5728\u9032\u884c\u7d04\u7c21\u524d\uff0c\u5148\u628a\u6240\u6709\u5e36\u5206\u6578\u8f49\u70ba\u5047\u5206\u6578\u3002","\u5728\u8fdb\u884c\u7ea6\u7b80\u524d\uff0c\u5148\u628a\u6240\u6709\u5e26\u5206\u6570\u8f6c\u4e3a\u5047\u5206\u6570\u3002","All mixed fractions should be changed to improper fractions before reduction.","Toutes les fractions m\xe9lang\xe9es doivent \xeatre remplac\xe9es par des fractions impropres avant r\xe9duction."],Be=["\u5728\u9032\u884c\u7d04\u7c21\u524d\uff0c\u5148\u628a\u6240\u6709\u9664\u6cd5\u8f49\u70ba\u4e58\u6cd5\u3002","\u5728\u8fdb\u884c\u7ea6\u7b80\u524d\uff0c\u5148\u628a\u6240\u6709\u9664\u6cd5\u8f6c\u4e3a\u4e58\u6cd5\u3002","All divisions should be changed to multiplications before reduction.","Toutes les divisions devraient \xeatre chang\xe9es en multiplications avant r\xe9duction."];Object(r.useEffect)((function(){Pe()}),[c]),Object(r.useEffect)((function(){Pe()}),[a]);function Pe(){k("error"),Y([[["",0,0,0,0,0],["",0,0,0,0,0]]]),F(0),P(!1),te(0),ie(0)}var We=function(e){B?Pe():ee>0&&(2==re?Ve(C,!1):Me())};function Me(){Je(0,-1,-1,!0,!1,!1),F(C+1),te(0)}function Ee(e){var n;for(n=0;n<D[e].length-1;n++){if(n>0&&""==D[e][n][0])return g(ue[t]),setTimeout((function(){h(!0)}),ae),!1;if(""==D[e][n][1]&&""==D[e][n][3]&""==D[e][n][4])return g(de[t]),setTimeout((function(){h(!0)}),ae),!1;if(""==D[e][n][3]&&""!=D[e][n][4]||""!=D[e][n][3]&&""==D[e][n][4])return g(me[t]),setTimeout((function(){h(!0)}),ae),!1}return!0}function Ge(e,n){var o;for(o=0;o<D[e].length-1;o++)if(D[e][o][3]>=D[e][o][4]&&D[e][o][4]>0)return!n&&e>0?(Me(),!1):(g(he[t]),setTimeout((function(){h(!0)}),ae),!1);if(0==e)return!0;if(n){if(D[e].length>2)return g(fe[t]),setTimeout((function(){h(!0)}),ae),!1;for(o=0;o<1;o++){var r=D[e][o][3];if(""==r&&(r=0),D[e][o][1]!=parseInt(D[e-1][o][3]/D[e-1][o][4]))return g(be[t]),setTimeout((function(){h(!0)}),ae),!1;if(1==D[e-1][o][4]){if(D[e][o][3]>0||D[e][o][4]>0)return g(pe[t]),setTimeout((function(){h(!0)}),ae),!1}else{if(D[e][o][4]!=D[e-1][o][4])return g(ve[t]),setTimeout((function(){h(!0)}),ae),!1;if(D[e][o][3]!=D[e-1][o][3]%D[e-1][o][4])return g(we[t]),setTimeout((function(){h(!0)}),ae),!1}}return 4==re&&(g("\ud83d\udc4d\ud83c\udffb"+le[t]),F(C+1),P(!0),k("success"),setTimeout((function(){h(!0)}),ae)),!0}return g("\ud83d\udc4d\ud83c\udffb"+le[t]),F(C+1),P(!0),k("success"),setTimeout((function(){h(!0)}),ae),!0}function qe(e,n){var o;for(o=0;o<D[e].length-1;o++)if(""!=D[e][o][1])return 0!=e&&0==re?(g(ge[t]),setTimeout((function(){h(!0)}),ae)):Me(),!1;if(0==e||!n)return ie(1),De(e,!1),!0;if(n){if(D[e].length!=D[e-1].length)return g(je[t]),setTimeout((function(){h(!0)}),ae),!1;for(o=0;o<D[e].length-1;o++){if(D[e][o][0]!=D[e-1][o][0])return g(ye[t]),setTimeout((function(){h(!0)}),ae),!1;var r=D[e-1][o][3]+D[e-1][o][1]*D[e-1][o][4];if(D[e-1][o][3]>0||D[e-1][o][4]>0){if(D[e][o][3]!=r)return g(Oe[t]),setTimeout((function(){h(!0)}),ae),!1;if(D[e][o][4]!=D[e-1][o][4])return g(ve[t]),setTimeout((function(){h(!0)}),ae),!1}else if(D[e][o][3]!=D[e-1][o][1]||1!=D[e][o][4])return g(xe[t]),setTimeout((function(){h(!0)}),ae),!1}return ie(1),De(e,!1),!0}}function De(e,n){var o;for(o=0;o<D[e].length-1;o++)if("\xf7"==D[e][o][0])return 0!=e&&1==re?(g(Te[t]),setTimeout((function(){h(!0)}),ae)):Me(),!1;if(0==e||!n)return ie(2),te(1),!0;if(n){if(D[e].length!=D[e-1].length)return g(je[t]),setTimeout((function(){h(!0)}),ae),!1;for(o=0;o<D[e].length-1;o++){if(D[e][o][1]>0)return g(ge[t]),setTimeout((function(){h(!0)}),ae),!1;if(0==o||"\xd7"==D[e-1][o][0]){if(D[e][o][3]!=D[e-1][o][3]||D[e][o][4]!=D[e-1][o][4])return g(ke[t]),setTimeout((function(){h(!0)}),ae),!1}else if("\xf7"==D[e-1][o][0]&&(D[e][o][3]!=D[e-1][o][4]||D[e][o][4]!=D[e-1][o][3]))return g(Ie[t]),setTimeout((function(){h(!0)}),ae),!1}return ie(2),te(1),!0}}function Ye(){var e;if(Ee(C))if(0==C){if(2==D[e=C].length&&0==e&&(g(ue[t]),setTimeout((function(){h(!0)}),ae),1))return;if(!Ge(C,!1))return;qe(C,!1)}else switch(re){case 0:Ee(C)&&qe(C,!0);break;case 1:Ee(C)&&De(C,!0);break;case 2:Ee(C)&&te(1);break;case 3:Ee(C)&&function(e,n){if(n){if(2!=D[e].length)return g(fe[t]),setTimeout((function(){h(!0)}),ae),!1;var o,r=1,i=1;for(o=0;o<D[e-1].length-1;o++)r*=D[e-1][o][3],i*=D[e-1][o][4];if(D[e][0][3]!=r||D[e][0][4]!=i)return g(Ce[t]),setTimeout((function(){h(!0)}),ae),!1;for(o=0;o<ce.length;o++)if(D[e][0][3]%ce[o]==0&&D[e][0][4]%ce[o]==0)return g(Se[t]),setTimeout((function(){h(!0)}),ae),te(1),!1;return ie(4),te(1),Ge(e,!1),!0}ie(4),Ge(e,!1)}(C,!0);break;case 4:Ee(C)&&Ge(C,!0)}}function Ve(e,n){var o,r=1,i=1,a=1,c=1;for(o=0;o<D[e].length-1;o++){if(D[e][o][2]>0){if(D[e][o][3]%D[e][o][2]!=0)return g(ze[t]),setTimeout((function(){h(!0)}),ae),!1;r*=D[e][o][2],a*=D[e][o][3]/D[e][o][2]}else r*=D[e][o][3];if(D[e][o][5]>0){if(D[e][o][4]%D[e][o][5]!=0)return g(Fe[t]),setTimeout((function(){h(!0)}),ae),!1;i*=D[e][o][5],c*=D[e][o][4]/D[e][o][5]}else i*=D[e][o][4]}if(a!=c)return g(Ne[t]),setTimeout((function(){h(!0)}),ae),!1;for(o=0;o<ce.length;o++){if(r%ce[o]==0&&i%ce[o]==0)return g(Le[t]+ce[o]+Ae[t]),setTimeout((function(){h(!0)}),ae),!1;Math.pow(ce[o],2)>r&&Math.pow(ce[o],2)>i&&(o=ce.length)}for(o=0;o<D[e].length-1;o++)D[e][o][2]>0&&Je(D[e][o][2],o,3,!1,!1,!1),D[e][o][5]>0&&Je(D[e][o][5],o,4,!1,!1,!1);return ie(3),te(0),Me(),!0}var He=function(e){switch(ee){case 0:Ye();break;case 1:re>1?(X(2),te(2)):(g(0==re?Re[t]:Be[t]),setTimeout((function(){h(!0)}),ae));break;case 2:Ve(C)}};function Je(e,t,n,o,r,i){var a=!1;Y((function(c){var s=c.map((function(o,c){if(c==C){var s=o.map((function(o,r){if(r==t){var i=o.map((function(t,o){return o==n?e:t}));return r==D[C].length-2&&r>0&&(""!=i[0]||i[1]>0||i[3]>0||i[4]>0||(a=!0)),i}return o}));return r&&s.push(["",0,0,0,0,0]),(i||a)&&s.pop(),s}return o}));return o&&s.push([["",0,0,0,0,0],["",0,0,0,0,0]]),s}))}var Ue=function(e,t,n){(2!=ee||2!=n&&5!=n)&&2==ee||(U(t),X(n))},Ke=G();return Object(o.jsxs)(L,{topic:["","","",""][t]+n,learningTool:i,children:[Object(o.jsx)(f.a,{className:Ke.centerRow,children:Object(o.jsx)(f.a,{className:Ke.formulaColumn,children:D.map((function(e,n){return Object(o.jsxs)(f.a,{className:"".concat(Ke.verticalCenterRow," ").concat(Ke.commonPadding),children:[Object(o.jsx)(b.a,{className:Ke.formulaLine,style:{opacity:0==n?0:1},children:"="}),Object(o.jsx)(O.a,{className:"".concat(Ke.formulaLine," ").concat(Ke.formulaBox),variant:"outlined",style:{borderColor:n==C?d.color.myMagenta:d.color.blue,borderWidth:n==C?3:1},children:Object(o.jsx)(W,{formula:e,handlePartClick:Ue,isFocusedLine:C==n,positionIndex:J,partIndex:Q,learningToolIndex:c,showSmallInput:2==ee&&n==C,calculationStage:re,lineIndex:n})}),Object(o.jsxs)(f.a,{children:[n==C&&Object(o.jsx)(O.a,{className:Ke.okButton,variant:"contained",onClick:He,color:"primary",children:se[3*t+ee]}),n==D.length-1&&(1==ee||B)&&Object(o.jsx)(O.a,{className:Ke.okButton,variant:"contained",onClick:We,color:"primary",children:Object(o.jsx)(E.a,{className:Ke.resetArrow})})]})]})}))})}),Object(o.jsx)(R,{handleClick:function(e,t){var n=!1;if(C==D.length-1&&(["\xd7","\xf7"].includes(t)&&0==Q&&""==D[C][J][Q]||!["\xd7","\xf7"].includes(t)&&0!=Q&&(""!=D[C][J][Q]||"0"!=t)||"<-"==t)){["\xd7","\xf7"].includes(t)&&J==D[C].length-1&&(n=!0);var o=Object(x.a)(D)[C][J][Q];"<-"==t?0==Q?o="":""!=o&&(o=parseInt(o/10)):o+=t,0!=Q&&(o=parseInt(o)),Je(o,J,Q,!1,n,!1)}},topicIndex:a,formulaFocusedIndex:C}),Object(o.jsx)(z,{open:u,closeAlert:function(e){h(!1)},errorMessage:w,severity:T})]})},D=n(6),Y=n.p+"static/media/cross5.06d3dbbf.jpg",V=n.p+"static/media/cross6.9fa45661.jpg",H=n.p+"static/media/neighbor1.656deb2a.jpg",J=n.p+"static/media/prayer4.cdbdd61c.jpg";var U=Object(D.a)((function(e){return{mathsLearningContainer:{margin:"1vw",minHeight:"97vh",backgroundImage:d.color.skyGradient},headingContainer:{direction:"row",display:"flex",alignItems:"center",justifyContent:"center"},scriptureVerseRow:{display:"flex",alignItems:"center",justifyContent:"center"},scriptureVerseBorder:Object(h.a)({direction:"row",display:"flex",alignItems:"center",justifyContent:"center",width:"80vw",borderWidth:"0.5vw",borderImage:d.color.conicGradient,border:"solid"},e.breakpoints.down("sm"),{width:"95vw"}),scriptureImage:Object(h.a)({height:"8vw",padding:"0.5vw"},e.breakpoints.down("sm"),{height:"20vw"}),scriptureVerse:Object(h.a)({width:"70vw",fontSize:"2vw",color:d.color.myPurple},e.breakpoints.down("sm"),{width:"90vw",fontSize:"4vw"}),prayerRow:{display:"flex",alignItems:"center",justifyContent:"center"},prayerImage:Object(h.a)({height:"6vw",padding:"0.5vw"},e.breakpoints.down("sm"),{height:"12vw"}),prayerText:Object(h.a)({width:"60vw",fontSize:"2vw",color:d.color.myPurple},e.breakpoints.down("sm"),{width:"80vw",fontSize:"4vw"}),commonText:Object(h.a)({fontSize:"1.4vw",textAlign:"center"},e.breakpoints.down("sm"),{fontSize:"2.8vw"}),emailText:Object(h.a)({width:"92vw",textAlign:"right",fontSize:"1.5vw",color:d.color.myBrown},e.breakpoints.down("sm"),{fontSize:"3vw"})}}))((function(e){var t=Object(r.useState)(2),n=Object(m.a)(t,2),i=n[0],a=n[1],c=Object(r.useState)(0),s=Object(m.a)(c,2),l=s[0],u=s[1],d=Object(r.useState)(2),h=Object(m.a)(d,2),p=h[0],v=h[1],w=Object(r.useState)(1),g=Object(m.a)(w,2),j=g[0],x=g[1],O=Object(r.useState)(0),T=Object(m.a)(O,2),k=T[0],I=T[1],S=[Y,V,H],C=["\u5206\u6578\u4e58\u6cd5","\u5206\u6578\u9664\u6cd5","\u5206\u6578\u4e58\u9664\u6df7\u5408","\u5206\u6570\u4e58\u6cd5","\u5206\u6570\u9664\u6cd5","\u5206\u6570\u4e58\u9664\u6df7\u5408","Fractional Multiplication","Fractional Division","Fractional Multiplication and Division Mixed","Multiplication fractionnaire","Division fractionnaire","Multiplication fractionnaire et division mixte"],z=["\u771f\u5206\u6578\u8a08\u7b97","\u5e36\u5206\u6578\u8a08\u7b97","\u771f\u5206\u6578\u8a08\u7b97","\u5e36\u5206\u6578\u8a08\u7b97","\u771f\u5206\u6578\u8a08\u7b97","\u5e36\u5206\u6578\u8a08\u7b97","\u771f\u5206\u6570\u8ba1\u7b97","\u5e26\u5206\u6570\u8ba1\u7b97","\u771f\u5206\u6570\u8ba1\u7b97","\u5e26\u5206\u6570\u8ba1\u7b97","\u771f\u5206\u6570\u8ba1\u7b97","\u5e26\u5206\u6570\u8ba1\u7b97","Proper fraction","Mixed fraction","Proper fraction","Mixed fraction","Proper fraction","Mixed fraction","Proper fraction","Mixed fraction","Proper fraction","Mixed fraction","Proper fraction","Mixed fraction"];Object(r.useEffect)((function(){var t=e.location.search,n=new URLSearchParams(t);null!=n.get("lang")&&""!=n.get("lang")&&n.get("lang")>=0&&n.get("lang")<4&&a(parseInt(n.get("lang"))),null!=n.get("ver")&&""!=n.get("ver")&&n.get("ver")>=0&&n.get("ver")<2&&u(parseInt(n.get("ver"))),I(Math.floor(3*Math.random()))}),[]);var F=e.classes;return Object(o.jsxs)(f.a,{className:F.mathsLearningContainer,spacing:0,children:[Object(o.jsxs)(f.a,{container:!0,className:F.headingContainer,children:[Object(o.jsx)(y,{selectLabel:"Language",selectIndex:i,setItemIndex:a,itemsArray:["\u7e41\u9ad4\u4e2d\u6587","\u7b80\u4f53\u4e2d\u6587","English","Fran\xe7aise"]}),Object(o.jsx)(y,{selectLabel:["\u7d93\u6587\u7248\u672c","\u7ecf\u6587\u7248\u672c","Scripture version","Version biblique"][i],selectIndex:l,setItemIndex:u,itemsArray:["\u5929\u4e3b\u6559","\u57fa\u7763\u6559","\u5929\u4e3b\u6559","\u57fa\u7763\u6559","Catholic","Christian","Catholique","Chr\xe9tienne"].slice(2*i,2*i+2)}),Object(o.jsx)(y,{selectLabel:["\u4e3b\u984c","\u4e3b\u9898","Topic","Sujet"][i],selectIndex:p,setItemIndex:v,itemsArray:C.slice(3*i,3*i+3)}),Object(o.jsx)(y,{selectLabel:["\u5206\u6578\u985e\u578b","\u5206\u6570\u7c7b\u578b","Fraction Type","Type de Fraction"][i],selectIndex:j,setItemIndex:x,itemsArray:z.slice(2*(3*i+p),2*(3*i+p+1))})]}),Object(o.jsx)(f.a,{className:F.scriptureVerseRow,children:Object(o.jsxs)(f.a,{className:F.scriptureVerseBorder,border:1,children:[Object(o.jsx)("img",{className:F.scriptureImage,src:S[k]}),Object(o.jsx)(b.a,{className:F.scriptureVerse,children:["\u300c\u4e0a\u4e3b\u5be6\u5728\u7576\u662f\u6211\u7684\u5929\u4e3b\u3002\u6211\u7acb\u4f5c\u77f3\u67f1\u7684\u9019\u584a\u77f3\u982d\uff0c\u5fc5\u8981\u6210\u70ba\u5929\u4e3b\u7684\u4f4f\u6240\uff1b\u51e1\u4f60\u8cdc\u8207\u6211\u7684\uff0c\u6211\u5fc5\u7d66\u4f60\u5949\u737b\u5341\u5206\u4e4b\u4e00\u3002\u300d\u527528:21-22","\u51e1\u571f\u5730\u7684\u51fa\u7522\uff0c\u6216\u662f\u7530\u5730\u7684\u7a40\u7269\uff0c\u6216\u662f\u6a39\u6728\u7684\u679c\u5be6\uff0c\u5341\u5206\u4e4b\u4e00\u61c9\u6b78\u65bc\u4e0a\u4e3b\uff0c\u662f\u737b\u65bc\u4e0a\u4e3b\u7684\u8056\u7269\u3002\u808b27:30","\u4ed6\u7b54\u8aaa\uff1a\u300c\u4f60\u61c9\u7576\u5168\u5fc3\u3001\u5168\u9748\u3001\u5168\u529b\u3001\u5168\u610f\u611b\u4e0a\u4e3b\uff0c\u4f60\u7684\u5929\u4e3b\uff1b\u4e26\u611b\u8fd1\u4eba\u5982\u4f60\u81ea\u5df1\u3002\u300d\u8def10:27","\u300c\u6211\u5c31\u5fc5\u4ee5\u8036\u548c\u83ef\u70ba\u6211\u7684\u795e\u3002\u6211\u6240\u7acb\u70ba\u67f1\u5b50\u7684\u9019\u584a\u77f3\u982d\u5fc5\u4f5c\u795e\u7684\u6bbf\uff1b\u51e1\u4f60\u6240\u8cdc\u7d66\u6211\u7684\uff0c\u6211\u5fc5\u5c07\u5341\u5206\u4e4b\u4e00\u737b\u7d66\u4f60\u3002\u300d\u527528:21-22","\u5730\u4e0a\u6240\u6709\u7684\uff0c\u7121\u8ad6\u662f\u5730\u4e0a\u7684\u7a2e\u5b50\uff0c\u662f\u6a39\u4e0a\u7684\u679c\u5b50\uff0c\u5341\u5206\u4e4b\u4e00\u662f\u8036\u548c\u83ef\u7684\uff0c\u662f\u6b78\u8036\u548c\u83ef\u70ba\u8056\u7684\u3002\u522927:30","\u4ed6\u56de\u7b54\u8aaa\uff1a\u300c\u4f60\u8981\u76e1\u5fc3\u3001\u76e1\u6027\u3001\u76e1\u529b\u3001\u76e1\u610f\u611b\u4e3b\u2014\u4f60\u7684\u795e\uff0c\u53c8\u8981\u611b\u9130\u5982\u5df1\u3002\u300d\u8def10:27","\u300c\u4e0a\u4e3b\u5b9e\u5728\u5f53\u662f\u6211\u7684\u5929\u4e3b\u3002\u6211\u7acb\u4f5c\u77f3\u67f1\u7684\u8fd9\u5757\u77f3\u5934\uff0c\u5fc5\u8981\u6210\u4e3a\u5929\u4e3b\u7684\u4f4f\u6240\uff1b\u51e1\u4f60\u8d50\u4e0e\u6211\u7684\uff0c\u6211\u5fc5\u7ed9\u4f60\u5949\u732e\u5341\u5206\u4e4b\u4e00\u3002\u300d\u521b28:21-22 ","\u51e1\u571f\u5730\u7684\u51fa\u4ea7\uff0c\u6216\u662f\u7530\u5730\u7684\u8c37\u7269\uff0c\u6216\u662f\u6811\u6728\u7684\u679c\u5b9e\uff0c\u5341\u5206\u4e4b\u4e00\u5e94\u5f52\u4e8e\u4e0a\u4e3b\uff0c\u662f\u732e\u4e8e\u4e0a\u4e3b\u7684\u5723\u7269\u3002\u808b27:30","\u4ed6\u7b54\u8bf4\uff1a\u300c\u4f60\u5e94\u5f53\u5168\u5fc3\u3001\u5168\u7075\u3001\u5168\u529b\u3001\u5168\u610f\u7231\u4e0a\u4e3b\uff0c\u4f60\u7684\u5929\u4e3b\uff1b\u5e76\u7231\u8fd1\u4eba\u5982\u4f60\u81ea\u5df1\u3002\u300d\u8def10:27","\u300c\u6211\u5c31\u5fc5\u4ee5\u8036\u548c\u534e\u4e3a\u6211\u7684\u795e\u3002\u6211\u6240\u7acb\u4e3a\u67f1\u5b50\u7684\u8fd9\u5757\u77f3\u5934\u5fc5\u4f5c\u795e\u7684\u6bbf\uff1b\u51e1\u4f60\u6240\u8d50\u7ed9\u6211\u7684\uff0c\u6211\u5fc5\u5c06\u5341\u5206\u4e4b\u4e00\u732e\u7ed9\u4f60\u3002\u300d\u521b28: 21-22","\u5730\u4e0a\u6240\u6709\u7684\uff0c\u65e0\u8bba\u662f\u5730\u4e0a\u7684\u79cd\u5b50\uff0c\u662f\u6811\u4e0a\u7684\u679c\u5b50\uff0c\u5341\u5206\u4e4b\u4e00\u662f\u8036\u548c\u534e\u7684\uff0c\u662f\u5f52\u8036\u548c\u534e\u4e3a\u5723\u7684\u3002\u522927:30","\u4ed6\u56de\u7b54\u8bf4\uff1a\u300c\u4f60\u8981\u5c3d\u5fc3\u3001\u5c3d\u6027\u3001\u5c3d\u529b\u3001\u5c3d\u610f\u7231\u4e3b\u2014\u4f60\u7684\u795e\uff0c\u53c8\u8981\u7231\u90bb\u5982\u5df1\u3002\u300d\u8def10:27","'Yahweh shall be my God. This stone I have set up as a pillar is to be a house of God, and I shall faithfully pay you a tenth part of everything you give me.'Genesis28:21-22","All tithes on land, levied on the produce of the soil or on the fruit of trees, belong to Yahweh; they are consecrated to Yahweh.Leviticus27:30","He replied, 'You must love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind, and your neighbour as yourself.'Luke10:27","I will take the Lord to be my God, And this stone which I have put up for a pillar will be God's house: and of all you give me, I will give a tenth part to you.Genesis28:21-22","And every tenth part of the land, of the seed planted, or of the fruit of trees, is holy to the Lord.Leviticus27:30","And he, answering, said, Have love for the Lord your God with all your heart and with all your soul and with all your strength and with all your mind; and for your neighbour as for yourself.Luke10:27","'Yahweh sera mon Dieu; cette pierre que j'ai dress\xe9e pour monument sera une maison de Dieu, et je vous paierai la d\xeeme de tout ce que vous me donnerez.'Gen\xe8se28:21-22","Toute dime de la terre, pr\xe9lev\xe9e soit sur les semences de la terre, soit sur les fruits des arbres, appartient \xe0 Yahweh c'est une chose consacr\xe9e \xe0 Yahweh.L\xe9vitique27:30","Il r\xe9pondit: 'Tu aimeras le Seigneur ton Dieu de tout coeur, de toute ton \xe2me, de toute ta force et de tout ton esprit, et ton proche comme toi-m\xeame.'Luc10:27","\xab Alors l'Eternel sera mon Dieu. Cette pierre dont j\u2019ai fait un monument sera la maison de Dieu et je te donnerai la d\xeeme de tout ce que tu me donneras. \xbbGen\xe8se28:21-22","Toute d\xeeme de la terre, soit des r\xe9coltes de la terre, soit du fruit des arbres, appartient \xe0 l'Eternel ; c'est une chose consacr\xe9e \xe0 l'Eternel.L\xe9vitique27:30","Il r\xe9pondit : \xab Tu aimeras le Seigneur, ton Dieu, de tout ton c\u0153ur, de toute ton \xe2me, de toute ta force et de toute ta pens\xe9e, et ton prochain comme toi-m\xeame. \xbbLuc10:27"][3*(2*i+l)+k]})]})}),Object(o.jsx)(q,{languageIndex:i,topic:C[3*i+p],learningTool:z[2*(3*i+p)+j],topicIndex:p,learningToolIndex:j}),Object(o.jsxs)(f.a,{className:F.prayerRow,children:[Object(o.jsx)("img",{className:F.prayerImage,src:J}),Object(o.jsx)(b.a,{className:F.prayerText,children:["\u4e3b\u8036\u7a4c\uff0c\u6c42\u7962\u7d66\u6211\u4e00\u9846\u9858\u610f\u5949\u737b\u7684\u5fc3\uff0c\u8b93\u6211\u66f4\u80fd\u5168\u5fc3\u3001\u5168\u610f\u611b\u5929\u4e0a\u7684\u7236\u89aa\uff01","\u4e3b\u8036\u7a23\uff0c\u6c42\u7962\u7ed9\u6211\u4e00\u9897\u613f\u610f\u5949\u732e\u7684\u5fc3\uff0c\u8ba9\u6211\u66f4\u80fd\u5168\u5fc3\u3001\u5168\u610f\u7231\u5929\u4e0a\u7684\u7236\u4eb2\uff01","Lord Jesus, please give me a heart that is willing to give, so that I can love my Father in heaven with all my heart and with all my soul!","Seigneur J\xe9sus, s'il te pla\xeet, donne-moi un c\u0153ur pr\xeat \xe0 donner, afin que je puisse aimer mon P\xe8re c\xe9leste de tout mon c\u0153ur et de toute mon \xe2me!"][i]})]}),Object(o.jsx)(f.a,{className:F.prayerRow,children:Object(o.jsx)(b.a,{className:F.commonText,children:["\u4f7f\u7528\u65b9\u6cd5\uff1a\u5148\u6309\u7a7a\u683c\uff0c\u518d\u8f38\u5165\u6578\u5b57\u6216\u904b\u7b97\u7b26\u865f\u3002","\u4f7f\u7528\u65b9\u6cd5\uff1a\u5148\u6309\u7a7a\u683c\uff0c\u518d\u8f93\u5165\u6570\u5b57\u6216\u8fd0\u7b97\u7b26\u53f7\u3002","How to use: Press the space first, then enter a number or an operator.","Comment utiliser: appuyez d'abord sur l'espace, puis entrez un nombre ou un op\xe9rateur."][i]})}),Object(o.jsx)(f.a,{className:F.prayerRow,children:Object(o.jsx)(b.a,{className:F.commonText,children:["\u958b\u555f\u901a\u77e5\uff0c\u8a08\u7b97\u904e\u7a0b\u6703\u986f\u793a\u63d0\u793a\u3002","\u5f00\u542f\u901a\u77e5\uff0c\u8ba1\u7b97\u8fc7\u7a0b\u4f1a\u663e\u793a\u63d0\u793a\u3002","Turn on the notification, prompts will be displayed during the calculation.","Activez la notification, des invites seront affich\xe9es pendant le calcul."][i]})}),Object(o.jsx)(f.a,{className:F.emailRow,children:Object(o.jsx)(b.a,{className:F.emailText,children:"samsoncsyuapple@gmail.com"})})]})}));n(97);var K=function(){return Object(o.jsx)(c.a,{theme:d,children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{path:"/",component:U})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(K,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,n){},97:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.615f7cc9.chunk.js.map