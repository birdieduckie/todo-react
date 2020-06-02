(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),l=a.n(r),i=a(12),c=a(21),o=a(5),u=a(6),d=a(8),k=a(7),h=a(37),p=(a(30),function(e){Object(d.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isCheckboxChecked:e.props.isCompleted},e.handleDelete=function(){var t=e.props,a=t.id;(0,t.deleteTask)(a)},e.handleChangeStatus=function(){var t=e.props,a=t.id,n=t.completeTask;e.setState((function(e){return{isCheckboxChecked:!e.isCheckboxChecked}}),(function(){return n(a,e.state.isCheckboxChecked)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.isCheckboxChecked,t=this.props,a=(t.id,t.content);return s.a.createElement("div",{className:"task"},s.a.createElement("input",{type:"checkbox",checked:e,onChange:this.handleChangeStatus}),s.a.createElement("div",null,a),s.a.createElement(h.a,{variant:"danger",onClick:this.handleDelete},"X"))}}]),a}(s.a.Component)),f=(a(31),function(e){Object(d.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={inputValue:"",selectedValue:"all"},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleClick=function(){(0,e.props.addTask)(e.state.inputValue),e.setState({inputValue:""})},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleClick()},e.handleFilterChange=function(t){var a=e.props.setFilter;e.setState({selectedValue:t.target.value},(function(){return a(e.state.selectedValue)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.inputValue,a=e.selectedValue;return s.a.createElement("div",{className:"control"},s.a.createElement("input",{value:t,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),s.a.createElement(h.a,{variant:"success",onClick:this.handleClick},"+"),s.a.createElement("select",{onChange:this.handleFilterChange,value:a,className:"filter"},s.a.createElement("option",{value:"all"},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),s.a.createElement("option",{value:"unsuccess"},"\u0422\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"),s.a.createElement("option",{value:"success"},"\u0422\u043e\u043b\u044c\u043a\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435")))}}]),a}(s.a.Component)),m=a(38),v=a(23),C=(a(32),function(e){Object(d.a)(a,e);var t=Object(k.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.deleteTask,n=e.completeTask,r=e.filteredTasks,l=e.isFiltered?r:t;return s.a.createElement(m.a,null,l.length>0&&l.map((function(e){return s.a.createElement(v.a,null,s.a.createElement(p,{key:e.id,id:e.id,content:e.content,isCompleted:e.isCompleted,deleteTask:a,completeTask:n}))})),0===l.length&&"\u0422\u0430\u0441\u043e\u043a \u043f\u043e\u043a\u0430 \u043d\u0435\u0442!")}}]),a}(s.a.Component)),b=(a(33),function(e){Object(d.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={tasks:[],filteredTasks:[],filterType:"all",isFiltered:!1},e.addTask=function(t){var a=e.state.tasks;if(t){var n={id:+new Date,content:t,isCompleted:!1};e.setState({tasks:[].concat(Object(c.a)(a),[n])},(function(){return localStorage.setItem("tasks",JSON.stringify(e.state.tasks))}))}},e.deleteTask=function(t){var a=e.state.tasks.filter((function(e){return e.id!==t}));e.setState({tasks:a},(function(){return localStorage.setItem("tasks",JSON.stringify(e.state.tasks))}))},e.completeTask=function(t,a){var n=e.state.tasks.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{isCompleted:a}):e}));e.setState({tasks:n},(function(){return localStorage.setItem("tasks",JSON.stringify(e.state.tasks))}))},e.setFilter=function(t){var a=e.state.tasks;e.setState({filterType:t},(function(){return"success"===e.state.filterType?e.setState({filteredTasks:a.filter((function(e){return e.isCompleted})),isFiltered:!0}):"unsuccess"===e.state.filterType?e.setState({filteredTasks:a.filter((function(e){return!e.isCompleted})),isFiltered:!0}):e.setState({filteredTasks:[],isFiltered:!1})}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("tasks");e&&this.setState({tasks:JSON.parse(e)})}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.filteredTasks,n=e.isFiltered;return s.a.createElement("div",{className:"App"},s.a.createElement(f,{setFilter:this.setFilter,addTask:this.addTask}),s.a.createElement(C,{isFiltered:n,deleteTask:this.deleteTask,completeTask:this.completeTask,tasks:t,filteredTasks:a}))}}]),a}(s.a.Component));a(34),a(35);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e1618edd.chunk.js.map