(window.webpackJsonpbootcamp14=window.webpackJsonpbootcamp14||[]).push([[0],{14:function(e,t,n){e.exports={dashboard:"Dashboard_dashboard__32n4y"}},15:function(e,t,n){e.exports={controls:"Controls_controls__2CoQI"}},16:function(e,t,n){e.exports={balance:"Balance_balance__2kqaG"}},17:function(e,t,n){e.exports={history:"TransactionHistory_history__1py2h"}},21:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(3),c=n.n(o),s=n(20),i=n(6),l=n(7),u=n(9),p=n(8),m=n(10),d=n(13),h=n.n(d),b=n(2),f=(n(34),n(14)),E=n.n(f),v=n(15),y=n.n(v),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleChange=function(e){n.setState({value:e.target.value})},n.reset=function(){n.setState({value:""})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.onDeposit,a=t.onWithdraw,o=this.state.value;return r.a.createElement("section",{className:y.a.controls},r.a.createElement("input",{type:"number",name:"amount",value:o,onChange:this.handleChange}),r.a.createElement("button",{type:"button",onClick:function(){n(o),e.reset()}},"Deposit"),r.a.createElement("button",{type:"button",onClick:function(){a(o),e.reset()}},"Withdraw"))}}]),t}(a.Component);O.defaultProps={};var w=n(16),g=n.n(w),S=function(e){var t=e.income,n=e.expenses,a=e.balance;return r.a.createElement("section",{className:g.a.balance},r.a.createElement("span",null," \u2b06 ",t,"$"),r.a.createElement("span",null,"\u2b07 ",n,"$"),r.a.createElement("span",null," Balance ",a,": $"))},_=n(17),D=n.n(_),I=function(e){var t=e.items;return r.a.createElement("table",{className:D.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.amount,"$"),r.a.createElement("td",null,e.date))}))))};b.a.configure({autoClose:3500,draggable:!1});var j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[],balance:0,income:0,expenses:0},n.onDeposit=function(e){""===e||Number(e)<=0?n.errorInput("input zerro"):n.addTransaction(e,"deposit")},n.onWithdraw=function(e){""===e||Number(e)<=0?n.errorInput("input zerro"):e>n.state.balance?n.errorInput("no balanse"):n.addTransaction(e,"withdrawal")},n.addTransaction=function(e,t){var a={id:h.a.generate(),type:t,amount:Number(e),date:n.newDate()};n.setState((function(e){return{transactions:[].concat(Object(s.a)(e.transactions),[a])}}),(function(){return n.updateState()}))},n.updateState=function(){var e=n.state.transactions,t=0,a=0;e.forEach((function(e){"deposit"===e.type?t+=e.amount:a+=e.amount})),n.setState({balance:t-a,income:t,expenses:a})},n.errorInput=function(e){"input zerro"===e&&b.a.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 !",{position:b.a.POSITION.TOP_LEFT}),"no balanse"===e&&b.a.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:b.a.POSITION.TOP_LEFT})},n.newDate=function(){return(new Date).toLocaleString()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("transactions");t&&this.setState({transactions:JSON.parse(t)},(function(){return e.updateState()}))}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.transactions;t!==n&&localStorage.setItem("transactions",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.balance,n=e.income,a=e.expenses,o=e.transactions;return r.a.createElement("div",{className:E.a.dashboard},r.a.createElement(O,{onDeposit:this.onDeposit,onWithdraw:this.onWithdraw}),r.a.createElement(S,{balance:t,income:n,expenses:a}),r.a.createElement(I,{items:o}))}}]),t}(a.Component),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.10b53bfe.chunk.js.map