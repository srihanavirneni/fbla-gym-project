import{j as n,B as I,L as J,f as X,r as B}from"./index-DW1NDbZa.js";import{I as tt,P as et}from"./Policies-BDiyJJ-r.js";import{C as st}from"./Combobox-DTtLEfkB.js";import{B as nt}from"./badge-DHnMGr0H.js";import{C as it,a as rt,b as at,d as ot,e as ct}from"./card-B6NMr3ii.js";import{s as ut,a as lt,b as ht,c as dt,E as ft}from"./event-list-DYNlcKgl.js";const mt=()=>n.jsxs("div",{className:"events-header",children:[n.jsx("h1",{className:"black",children:"Events"}),n.jsx("p",{children:"Attend an event for our gymnasium with a ticket, or host an event yourself!"}),n.jsxs("p",{children:[n.jsx("b",{children:"Disclaimer:"})," Our gym administrators have to verify your proposed event before it is final!"]}),n.jsxs("div",{className:"events-header__button-content",children:[n.jsx(I,{asChild:!0,size:"sm",variant:"accent",children:n.jsx(J,{to:"/events/create",className:"bold",children:"Host an Event"})}),n.jsx(I,{asChild:!0,size:"sm",variant:"secondary",children:n.jsx(J,{to:"/status",className:"bold",children:"Check Status"})})]})]});function V(){return V=Object.assign||function(a){for(var l=1;l<arguments.length;l++){var M=arguments[l];for(var f in M)Object.prototype.hasOwnProperty.call(M,f)&&(a[f]=M[f])}return a},V.apply(this,arguments)}function K(a){var l={exports:{}};return a(l,l.exports),l.exports}var k=K(function(a,l){a.exports=function(){var M="millisecond",f="second",v="minute",d="hour",g="day",m="week",c="month",O="quarter",b="year",x="date",o=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,L={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},N=function(i,e,t){var r=String(i);return!r||r.length>=e?i:""+Array(e+1-r.length).join(t)+i},_={s:N,z:function(i){var e=-i.utcOffset(),t=Math.abs(e),r=Math.floor(t/60),s=t%60;return(e<=0?"+":"-")+N(r,2,"0")+":"+N(s,2,"0")},m:function i(e,t){if(e.date()<t.date())return-i(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(r,c),h=t-s<0,u=e.clone().add(r+(h?-1:1),c);return+(-(r+(t-s)/(h?s-u:u-s))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:c,y:b,w:m,d:g,D:x,h:d,m:v,s:f,ms:M,Q:O}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},Y="en",U={};U[Y]=L;var Q=function(i){return i instanceof R},W=function(i,e,t){var r;if(!i)return Y;if(typeof i=="string")U[i]&&(r=i),e&&(U[i]=e,r=i);else{var s=i.name;U[s]=i,r=s}return!t&&r&&(Y=r),r||!t&&Y},S=function(i,e){if(Q(i))return i.clone();var t=typeof e=="object"?e:{};return t.date=i,t.args=arguments,new R(t)},$=_;$.l=W,$.i=Q,$.w=function(i,e){return S(i,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var R=function(){function i(t){this.$L=W(t.locale,null,!0),this.parse(t)}var e=i.prototype;return e.parse=function(t){this.$d=function(r){var s=r.date,h=r.utc;if(s===null)return new Date(NaN);if($.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var u=s.match(o);if(u){var y=u[2]-1||0,j=(u[7]||"0").substring(0,3);return h?new Date(Date.UTC(u[1],y,u[3]||1,u[4]||0,u[5]||0,u[6]||0,j)):new Date(u[1],y,u[3]||1,u[4]||0,u[5]||0,u[6]||0,j)}}return new Date(s)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return $},e.isValid=function(){return this.$d.toString()!=="Invalid Date"},e.isSame=function(t,r){var s=S(t);return this.startOf(r)<=s&&s<=this.endOf(r)},e.isAfter=function(t,r){return S(t)<this.startOf(r)},e.isBefore=function(t,r){return this.endOf(r)<S(t)},e.$g=function(t,r,s){return $.u(t)?this[r]:this.set(s,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,r){var s=this,h=!!$.u(r)||r,u=$.p(t),y=function(A,p){var E=$.w(s.$u?Date.UTC(s.$y,p,A):new Date(s.$y,p,A),s);return h?E:E.endOf(g)},j=function(A,p){return $.w(s.toDate()[A].apply(s.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(p)),s)},D=this.$W,T=this.$M,H=this.$D,w="set"+(this.$u?"UTC":"");switch(u){case b:return h?y(1,0):y(31,11);case c:return h?y(1,T):y(0,T+1);case m:var z=this.$locale().weekStart||0,F=(D<z?D+7:D)-z;return y(h?H-F:H+(6-F),T);case g:case x:return j(w+"Hours",0);case d:return j(w+"Minutes",1);case v:return j(w+"Seconds",2);case f:return j(w+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,r){var s,h=$.p(t),u="set"+(this.$u?"UTC":""),y=(s={},s[g]=u+"Date",s[x]=u+"Date",s[c]=u+"Month",s[b]=u+"FullYear",s[d]=u+"Hours",s[v]=u+"Minutes",s[f]=u+"Seconds",s[M]=u+"Milliseconds",s)[h],j=h===g?this.$D+(r-this.$W):r;if(h===c||h===b){var D=this.clone().set(x,1);D.$d[y](j),D.init(),this.$d=D.set(x,Math.min(this.$D,D.daysInMonth())).$d}else y&&this.$d[y](j);return this.init(),this},e.set=function(t,r){return this.clone().$set(t,r)},e.get=function(t){return this[$.p(t)]()},e.add=function(t,r){var s,h=this;t=Number(t);var u=$.p(r),y=function(T){var H=S(h);return $.w(H.date(H.date()+Math.round(T*t)),h)};if(u===c)return this.set(c,this.$M+t);if(u===b)return this.set(b,this.$y+t);if(u===g)return y(1);if(u===m)return y(7);var j=(s={},s[v]=6e4,s[d]=36e5,s[f]=1e3,s)[u]||1,D=this.$d.getTime()+t*j;return $.w(D,this)},e.subtract=function(t,r){return this.add(-1*t,r)},e.format=function(t){var r=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",h=$.z(this),u=this.$locale(),y=this.$H,j=this.$m,D=this.$M,T=u.weekdays,H=u.months,w=function(p,E,Z,P){return p&&(p[E]||p(r,s))||Z[E].substr(0,P)},z=function(p){return $.s(y%12||12,p,"0")},F=u.meridiem||function(p,E,Z){var P=p<12?"AM":"PM";return Z?P.toLowerCase():P},A={YY:String(this.$y).slice(-2),YYYY:this.$y,M:D+1,MM:$.s(D+1,2,"0"),MMM:w(u.monthsShort,D,H,3),MMMM:w(H,D),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:w(u.weekdaysMin,this.$W,T,2),ddd:w(u.weekdaysShort,this.$W,T,3),dddd:T[this.$W],H:String(y),HH:$.s(y,2,"0"),h:z(1),hh:z(2),a:F(y,j,!0),A:F(y,j,!1),m:String(j),mm:$.s(j,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:h};return s.replace(C,function(p,E){return E||A[p]||h.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,r,s){var h,u=$.p(r),y=S(t),j=6e4*(y.utcOffset()-this.utcOffset()),D=this-y,T=$.m(this,y);return T=(h={},h[b]=T/12,h[c]=T,h[O]=T/3,h[m]=(D-j)/6048e5,h[g]=(D-j)/864e5,h[d]=D/36e5,h[v]=D/6e4,h[f]=D/1e3,h)[u]||D,s?T:$.a(T)},e.daysInMonth=function(){return this.endOf(c).$D},e.$locale=function(){return U[this.$L]},e.locale=function(t,r){if(!t)return this.$L;var s=this.clone(),h=W(t,r,!0);return h&&(s.$L=h),s},e.clone=function(){return $.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},i}(),q=R.prototype;return S.prototype=q,[["$ms",M],["$s",f],["$m",v],["$H",d],["$W",g],["$M",c],["$y",b],["$D",x]].forEach(function(i){q[i[1]]=function(e){return this.$g(e,i[0],i[1])}}),S.extend=function(i,e){return i.$i||(i(e,R,S),i.$i=!0),S},S.locale=W,S.isDayjs=Q,S.unix=function(i){return S(1e3*i)},S.en=U[Y],S.Ls=U,S.p={},S}()}),$t=K(function(a,l){a.exports=function(M,f,v){var d=f.prototype;v.utc=function(o){return new f({date:o,utc:!0,args:arguments})},d.utc=function(o){var C=v(this.toDate(),{locale:this.$L,utc:!0});return o?C.add(this.utcOffset(),"minute"):C},d.local=function(){return v(this.toDate(),{locale:this.$L,utc:!1})};var g=d.parse;d.parse=function(o){o.utc&&(this.$u=!0),this.$utils().u(o.$offset)||(this.$offset=o.$offset),g.call(this,o)};var m=d.init;d.init=function(){if(this.$u){var o=this.$d;this.$y=o.getUTCFullYear(),this.$M=o.getUTCMonth(),this.$D=o.getUTCDate(),this.$W=o.getUTCDay(),this.$H=o.getUTCHours(),this.$m=o.getUTCMinutes(),this.$s=o.getUTCSeconds(),this.$ms=o.getUTCMilliseconds()}else m.call(this)};var c=d.utcOffset;d.utcOffset=function(o,C){var L=this.$utils().u;if(L(o))return this.$u?0:L(this.$offset)?c.call(this):this.$offset;var N=Math.abs(o)<=16?60*o:o,_=this;if(C)return _.$offset=N,_.$u=o===0,_;if(o!==0){var Y=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(_=this.local().add(N+Y,"minute")).$offset=N,_.$x.$localOffset=Y}else _=this.utc();return _};var O=d.format;d.format=function(o){return O.call(this,o||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":""))},d.valueOf=function(){var o=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||new Date().getTimezoneOffset());return this.$d.valueOf()-6e4*o},d.isUTC=function(){return!!this.$u},d.toISOString=function(){return this.toDate().toISOString()},d.toString=function(){return this.toDate().toUTCString()};var b=d.toDate;d.toDate=function(o){return o==="s"&&this.$offset?v(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var x=d.diff;d.diff=function(o,C,L){if(o&&this.$u===o.$u)return x.call(this,o,C,L);var N=this.local(),_=v(o).local();return x.call(N,_,C,L)}}});const vt={dateTimeLocal:"YYYY-MM-DD[T]HH:mm:ss",dateTimeUTC:"YYYYMMDD[T]HHmmss[Z]",allDay:"YYYYMMDD"};function gt(a){const l=new URLSearchParams;return Object.keys(a).sort().forEach(M=>{const f=a[M];f!=null&&l.append(M,f)}),l.toString().replace(/\+/g,"%20")}function yt({startTime:a,endTime:l},M){const f=vt[M];return{start:a.format(f),end:l.format(f)}}k.extend($t);const xt=(a,l=!0)=>{const{start:M,end:f,duration:v}=a,d=function(c,O){if(c==null)return{};var b,x,o={},C=Object.keys(c);for(x=0;x<C.length;x++)O.indexOf(b=C[x])>=0||(o[b]=c[b]);return o}(a,["start","end","duration"]),g=l?k(M).utc():k(M),m=f?l?k(f).utc():k(f):(()=>{if(a.allDay)return g.add(1,"day");if(v&&v.length==2){const c=Number(v[0]);return g.add(c,v[1])}return l?k().utc():k()})();return V({},d,{startTime:g,endTime:m})},Dt=a=>{const l=xt(a),{start:M,end:f}=yt(l,l.allDay?"allDay":"dateTimeUTC"),v={action:"TEMPLATE",text:l.title,details:l.description,location:l.location,trp:l.busy,dates:M+"/"+f,recur:l.rRule?"RRULE:"+l.rRule:void 0};return l.guests&&l.guests.length&&(v.add=l.guests.join()),`https://calendar.google.com/calendar/render?${gt(v)}`},Mt=a=>{const l=g=>{let m=new Date(0);return m=ut(m,g.getHours()),m=lt(m,g.getMinutes()),m=ht(m,0),m=dt(m,0),X(m,"h:mm a")},M=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],f=g=>{const m=g.getMonth();return M[m]},v=(g,m)=>{const c=g.getFullYear(),O=g.getMonth(),b=g.getDate(),x=m.getHours(),o=m.getMinutes(),C=m.getSeconds();return new Date(c,O,b,x,o,C)},d=Dt({title:a.name,description:a.description,start:v(a.date,a.startTime),end:v(a.date,a.endTime)});return n.jsx("li",{className:"event-item",children:n.jsxs(it,{className:"event-item__content",children:[n.jsx(rt,{children:n.jsxs(at,{className:"event-item__content-title",children:[n.jsxs("div",{className:"event-item__content-date",children:[n.jsx("h3",{className:"medium",children:f(a.date)}),n.jsx("h1",{className:"bold",children:a.date.getDate()})]}),n.jsxs("div",{className:"event-item__content-sub-info",children:[n.jsx("h1",{className:"bold",children:a.name}),n.jsxs("div",{className:"item-content__info",children:[n.jsx(nt,{children:a.type}),n.jsx("p",{className:"bold",children:l(a.startTime)+" - "+l(a.endTime)})]}),n.jsxs("p",{className:"bold",children:["Location: ",a.location]})]})]})}),n.jsxs(ot,{className:"item-content__main-info",children:[n.jsx("p",{children:a.description}),n.jsxs("p",{children:[n.jsx("b",{children:"Event Organizers: "})," ",a.eventOrganizers]}),a.specialNotes&&n.jsxs("p",{children:[n.jsx("b",{children:"Special Notes: "})," ",a.specialNotes]})]}),n.jsxs(ct,{className:"item-content__actions",children:[n.jsx(I,{asChild:!0,variant:"secondary",size:"sm",children:n.jsx("a",{href:d,target:"_blank",className:"bold",children:"Add To Calendar"})}),n.jsx(I,{asChild:!0,variant:"accent",size:"sm",children:n.jsx(J,{to:a.noSeats?`/events/payment/${a.id}/transaction/no-seat`:`/events/payment/${a.id}`,className:"bold",children:a.ticketCost===0?"Get Ticket for FREE":`Buy Ticket for $${a.ticketCost}.00`})})]})]})})},G=()=>n.jsxs("div",{className:"events-list__fail",children:[n.jsx("h1",{className:"black",children:"No events at the moment!"}),n.jsx("p",{children:"Why not host one?"}),n.jsx(I,{asChild:!0,variant:"accent",size:"sm",children:n.jsx(J,{to:"/events/create",children:"Host an Event"})})]}),bt=a=>{if(a.items.length===0)return n.jsx(G,{});const[l,M]=B.useState(a.items),[f,v]=B.useState(""),[d,g]=B.useState(""),m=B.useMemo(()=>{const c=f.toLowerCase(),O=d.toLowerCase();let b=O===""?l:l.filter(x=>x.type.toLowerCase().includes(O));return b=b.filter(x=>x.name.toLowerCase().includes(c)&&x.date>=new Date),b.sort((x,o)=>x.date-o.date),b},[l,f,d]);return n.jsxs("div",{children:[n.jsxs("div",{className:"events-list__search-bar",children:[n.jsx(st,{labelPlaceholder:"Select category",placeholder:"Search categories",className:"search-bar__combo-box",onChange:c=>{g(c)},items:[{value:"sports",label:"Sports"},{value:"social",label:"Social"},{value:"theater",label:"Theater"},{value:"academic",label:"Academic"},{value:"music",label:"Music"},{value:"arts",label:"Arts"},{value:"community service",label:"Community Service"},{value:"entertainment",label:"Entertainment"},{value:"market",label:"Market"},{value:"technology",label:"Technology"},{value:"festival",label:"Festival"}]}),n.jsx(tt,{placeholder:"Search For Events",value:f,onChange:c=>v(c.target.value),type:"search"})]}),n.jsx("ul",{className:"events-list",children:m.length?m.map(c=>n.jsx(Mt,{id:c.id,name:c.name,date:c.date,startTime:c.startTime,endTime:c.endTime,type:c.type,location:c.location,ticketCost:c.ticketCost,description:c.description,eventOrganizers:c.eventOrganizers,specialNotes:c.specialNotes,socialMedia:c.socialMedia,noSeats:c.noSeats},c.id)):n.jsx(G,{})})]})},_t=()=>n.jsx(n.Fragment,{children:n.jsxs("div",{className:"events-page",children:[n.jsx(mt,{}),n.jsx(et,{}),n.jsx(bt,{items:ft})]})});export{_t as default};
