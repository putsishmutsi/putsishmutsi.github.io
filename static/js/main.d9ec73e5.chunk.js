(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d,u,b,x,j,p,h,f,O,g=n(1),y=n(85),m=n.n(y),v=n(16),C=n.n(v),w=n(43),A=n(69),S=n(14),E=n(58),T=n(68),N=n.n(T),_=n(220),k=n.n(_),M=n(70),D=n(221),L=n(19),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},I),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},e),{},{account:t.payload.account});default:return e}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},K),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},P=Object(M.b)({blockchain:R,data:U}),F=[D.a],W=Object(M.c)(M.a.apply(void 0,F)),H=Object(M.d)(P,W),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},z=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,H.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(z());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=n(15),q=X.a.div(c||(c=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Q=X.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=X.a.div(a||(a=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=X.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=X.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=X.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=X.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(X.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ne=(X.a.div(b||(b=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(2)),ce=X.a.button(x||(x=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=X.a.button(j||(j=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ae=X.a.div(p||(p=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),oe=X.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=X.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),se=X.a.a(O||(O=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var le=function(){var e,t,n=Object(E.b)(),c=Object(E.c)((function(e){return e.blockchain})),r=Object(E.c)((function(e){return e.data})),a=Object(g.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(g.useState)("Click buy to mint your NFT."),d=Object(A.a)(l,2),u=d[0],b=d[1],x=Object(g.useState)(1),j=Object(A.a)(x,2),p=j[0],h=j[1],f=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,MAX_PER_TX:0,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(A.a)(f,2),y=O[0],m=O[1],v=function(){""!==c.account&&null!==c.smartContract&&n(z(c.account))},S=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,m(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){S()}),[]),Object(g.useEffect)((function(){v()}),[c.account]),Object(ne.jsx)(q,{children:Object(ne.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ne.jsx)(oe,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(ae,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ie,{alt:"example",src:"/config/images/example.gif"})}),Object(ne.jsx)(Z,{}),Object(ne.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Little Skulls is an NFT collection made with love by an aspiring artist from Israel.",Object(ne.jsx)("br",{}),"Adopt your own little skull buddy today!",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"To allow for fair minting, the base URL will only be released once all skulls have been minted.",Object(ne.jsx)("br",{}),"The provenance hash 4cf6fe58c03b188642080751e19b3f065a4173cc471c7bf4a168b2fafe380d86",Object(ne.jsx)("br",{}),"can be used to prove the order the skulls have been minted.",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"All images were SHA256 hashed in sequence, all the hashes were",Object(ne.jsx)("br",{}),"concatenated and the provenance hash is the SHA256 hash of the result.",Object(ne.jsx)("br",{}),"This guarantees that the order of minting the little skulls have been",Object(ne.jsx)("br",{}),"pre-determined, without revealing to buyers the different traits before",Object(ne.jsx)("br",{}),"all the little skulls have been minted.",Object(ne.jsx)("br",{})]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)(se,{target:"_blank",href:y.SCAN_LINK,children:(e=y.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ne.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(se,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["LAUNCH SALE ENDS 22-02-22",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(ne.jsx)(Q,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ne.jsx)(J,{}),""===c.account||null===c.smartContract?Object(ne.jsxs)($,{ai:"center",jc:"center",children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ce,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(w.a)(C.a.mark((function e(t){var n,c,r,a,o,i,s,l,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new k.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){t(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(B("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(B("Something went wrong."));case 31:e.next=34;break;case 33:t(B("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)(re,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p-1;e<1&&(e=1),h(e)}()},children:"-"}),Object(ne.jsx)(V,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(ne.jsx)(V,{}),Object(ne.jsx)(re,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p+1;e>33&&(e=33),h(e)}()},children:"+"})]}),Object(ne.jsx)(J,{}),Object(ne.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(ne.jsx)(ce,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=y.WEI_COST,t=y.GAS_LIMIT,r=String(e*p),a=String(t*p);console.log("Cost: ",r),console.log("Gas limit: ",a),b("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(p).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),b("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),b("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(z(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(ne.jsx)(V,{})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ie,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(533);m.a.render(Object(ne.jsx)(E.a,{store:H,children:Object(ne.jsx)(le,{})}),document.getElementById("root")),de()}},[[534,1,2]]]);
//# sourceMappingURL=main.d9ec73e5.chunk.js.map