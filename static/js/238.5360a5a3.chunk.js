"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[238],{6238:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var s=n(5671),r=n(3144),o=n(136),a=n(516),c=n(2791),i=n(1087),l=n(7689),u=n(1413),d=n(9439),h=n(6778),m=n(526),x=n(184),f=function(){var e=(0,c.useState)((function(){return console.log("contractor"),{cosunt:0,name:"increment"}})),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=n.cosunt,o=n.name;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:"btn-1",onClick:function(){s((function(e){return(0,u.Z)((0,u.Z)({},e),{},{name:"increment",cosunt:e.cosunt+1})}))},children:"+"}),r,(0,x.jsx)("button",{className:"btn-1",onClick:function(){s((function(e){return(0,u.Z)((0,u.Z)({},e),{},{name:"dicrement",cosunt:r-1})}))},children:"-"}),(0,x.jsx)("br",{}),o,(0,x.jsx)(h.Z,{className:"rounded-5",language:"jsx",style:m.Z,children:j})]})},j="\nimport React, { useState } from 'react';\nimport SyntaxHighlighter from 'react-syntax-highlighter';\nimport { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';\n\nconst UseState_1 = () => {\n    const [state, setstate] = useState(() => {\n        console.log(\"contractor\");\n        return { cosunt: 0, name: \"increment\" }\n    });\n    const count = state.cosunt\n    const name = state.name\n    function increment() {\n        setstate(e => {\n            return { ...e, name: \"increment\", cosunt: e.cosunt + 1}\n        })\n        // setstate(prevcount => prevcount + 1) //two Time increment\n    }\n    function dicrement() {\n        setstate(e => {\n            return { ...e, name: \"dicrement\", cosunt: state.cosunt - 1, cosunt: state.cosunt - 1 }//only one time dicrement\n        })\n\n    }\n    return (\n        <>\n            <button className='btn-1' onClick={increment}>+</button>\n            {count}\n            <button className='btn-1' onClick={dicrement}>-</button>\n            <br />\n            {name}\n            <SyntaxHighlighter className=\"rounded-5\" language=\"jsx\" style={atomOneDarkReasonable}>\n                {codeString}\n            </SyntaxHighlighter>\n        </>\n    );\n};\n\nexport default UseState_1;\nconst codeString = ''\n",b=function(){var e=(0,c.useState)("posts"),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=(0,c.useState)([]),o=(0,d.Z)(r,2),a=o[0],i=o[1];return(0,c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/"+n).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:"btn-1",onClick:function(){s("posts")},children:"Posts"}),(0,x.jsx)("button",{className:"btn-1",onClick:function(){s("users")},children:"Users"}),(0,x.jsx)("button",{className:"btn-1",onClick:function(){s("comments")},children:"Comments"}),(0,x.jsx)("br",{}),n,(0,x.jsx)("pre",{children:a&&a.map((function(e){return(0,x.jsxs)("pre",{children:[e.id,":-",e.name]},e.id)}))})]})},p=function(){var e=(0,c.useState)(0),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=(0,c.useState)(null),o=(0,d.Z)(r,2),a=o[0],i=o[1];return(0,c.useEffect)((function(){null!=n&&""!==n&&(fetch("https://picsum.photos/v2/list?page=1&limit=100").then((function(e){return e.json()})).then((function(e){var t;return i(null===(t=e[n])||void 0===t?void 0:t.download_url)})),fetch("https://picsum.photos/v2/list?page=1&limit=100").then((function(e){return e.json()})).then((function(e){var t;return i(null===(t=e[n])||void 0===t?void 0:t.download_url)})))}),[n]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{children:["photo 0 to 99",(0,x.jsx)("input",{type:"number",value:n,onChange:function(e){s(e.target.value)}}),(0,x.jsx)("img",{src:a,alt:"This NOt Corect",className:"imgss"})]})})},g=function(){var e=(0,c.useContext)(U);return(0,x.jsx)(x.Fragment,{children:e})},v=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(g,{})})},C=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(v,{})})},U=(0,c.createContext)();var k=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(U.Provider,{value:"deep",children:(0,x.jsx)(C,{})})})},S=(0,c.createContext)("light");function y(){return(0,x.jsxs)(Z,{title:"Logoin Page",children:[(0,x.jsx)("button",{children:"Sign in"}),(0,x.jsx)("button",{children:"Sign up"})]})}function Z(e){var t=e.title,n=e.children,s="panel-"+(0,c.useContext)(S);return(0,x.jsxs)("section",{className:s,children:[(0,x.jsx)("h1",{children:t}),n]})}var _=function(){var e=(0,c.useState)("light"),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=(0,c.useState)("fa-solid fa-moon"),o=(0,d.Z)(r,2),a=o[0],i=o[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S.Provider,{value:n,children:(0,x.jsx)(y,{})}),(0,x.jsx)("button",{onClick:function(){s("dark"===n?"light":"dark"),i("fa-solid fa-moon"===a?"fa-regular fa-sun":"fa-solid fa-moon")},children:(0,x.jsx)("i",{className:a},n)}),(0,x.jsx)("br",{})]})},N={count:0,valu:"decrement"},E=function(e,t){switch(t.type){case"decrement":return{count:e.count-1,valu:"decrement"};case"iecrement":return{count:e.count+1,valu:"iecrement"};default:return e}},R=function(){var e=(0,c.useReducer)(E,N),t=(0,d.Z)(e,2),n=t[0],s=t[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:"btn-1",onClick:function(){return s({type:"decrement"})},children:"-"}),n.count,(0,x.jsx)("button",{className:"btn-1",onClick:function(){return s({type:"iecrement"})},children:"+"}),(0,x.jsx)("br",{}),n.valu]})},w=function(){var e=(0,c.useState)(0),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=["one","two","three","four","five","six"],o=r[n];var a=(0,c.useMemo)((function(){return function(e){for(var t=0;t<1e8;t++);return e.length}(r)}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:["not  useMemo",(0,x.jsx)("br",{}),o,o.length,(0,x.jsx)("br",{}),(0,x.jsx)("button",{onClick:function(){s(n+1===r.length?0:n+1)},children:"Hi"}),(0,x.jsx)("br",{}),(0,x.jsx)("hr",{})," ",(0,x.jsx)("br",{}),"use useMemo",(0,x.jsx)("br",{}),o,a,(0,x.jsx)("br",{}),(0,x.jsx)("button",{onClick:function(){s(n+1===r.length?0:n+1)},children:"Hi"})]}),(0,x.jsx)(h.Z,{className:"rounded-5",language:"jsx",style:m.Z,children:F})]})},F='\nimport React, { useMemo, useState } from \'react\';\nimport SyntaxHighlighter from \'react-syntax-highlighter\';\nimport { atomOneDarkReasonable } from \'react-syntax-highlighter/dist/esm/styles/hljs\';\n\nconst UseMemo_1 = () => {\n    const [cont, setstate] = useState(0);\n    const word = ["one", "two", "three", "four", "five", "six"];\n    const print = word[cont]\n    function computeLetterCount(word) {\n        for (let index = 0; index < 100000000; index++) {\n        }\n        return word.length;\n    }\n    const letterCount = useMemo(() => computeLetterCount(word), [])\n    return (\n        <>\n            <div>\n                not  useMemo<br />{print}{print.length}<br />\n                <button onClick={() => { if (cont + 1 == word.length) { setstate(0) } else { setstate(cont + 1) } }}>Hi</button>\n\n                <br /><hr /> <br />use useMemo<br />\n                {print}{letterCount}\n                <br />\n                <button onClick={() => { if (cont + 1 == word.length) { setstate(0) } else { setstate(cont + 1) } }}>Hi</button>\n            </div>\n </>\n    );\n};\n\nexport default UseMemo_1;\n',L=function(e){var t=e.getued,n=(0,c.useState)([]),s=(0,d.Z)(n,2),r=s[0],o=s[1];return(0,c.useEffect)((function(){o(t())}),[t]),(0,x.jsx)("div",{children:r&&r.map((function(e){return(0,x.jsx)("div",{children:e},e)}))})},A=function(){var e=(0,c.useState)(0),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=(0,c.useState)(0),o=(0,d.Z)(r,2),a=o[0],i=o[1],l=(0,c.useCallback)((function(){console.log(a+1,a-1);for(var e=0;e<1e9;e++);return console.log("hi"),[a+1,a-1]}),[n]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("button",{onClick:function(){s(n+1)},children:["Count ",n]}),(0,x.jsx)("br",{}),(0,x.jsxs)("button",{onClick:function(){i(a+1)},children:["Count ",a]}),(0,x.jsx)(L,{getued:l}),(0,x.jsx)(h.Z,{className:"rounded-5",language:"jsx",style:m.Z,children:M})]})},M="\n*****Perent****\nimport React, { useCallback, useState } from 'react';\nimport UseCallbackback from './UseCallbackback/UseCallbackback.jsx';\n\n\nconst UseCallback_1 = () => {\n    const [stateone, setstateone] = useState(0);\n    const [statetwo, setstatetwo] = useState(0);\n    const getued = useCallback(() => {\n        console.log(statetwo + 1, statetwo - 1);\n        for (let index = 0; index < 1000000000; index++) { }\n        console.log(\"hi\");\n        return [statetwo + 1, statetwo - 1];\n    }, [stateone])\n\n    return (\n        <div>\n            <button onClick={() => { setstateone(stateone + 1) }}>Count {stateone}</button>\n            <br />\n            <button onClick={() => { setstatetwo(statetwo + 1) }}>Count {statetwo}</button>\n            <UseCallbackback getued={getued} />\n        </div>\n    );\n};\n\nexport default UseCallback_1;\n\n\n******Chaild******\nimport React, { useEffect, useState } from 'react';\n\nconst UseCallbackback = ({getued}) => {\n    const [state, setstate] = useState([]);\n    useEffect(() => {\n        setstate(getued())\n    }, [getued]);\n    \n    return (\n        <div>\n            {state && state.map(keys=>{\n                return <div key={keys}>{keys}</div>\n            })}\n        </div>\n    );\n};\n\nexport default UseCallbackback;\n",H=function(){var e=(0,c.useRef)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("input",{ref:e,type:"text"}),(0,x.jsx)("button",{onClick:function(){""==e.current.value?(e.current.focus(),e.current.style.color="black"):e.current.style.color="red"},children:"This"}),(0,x.jsx)(h.Z,{className:"rounded-5",language:"jsx",style:m.Z,children:W})]})},W='\nimport React, { useRef } from \'react\';\n\nconst UseRef_1 = () => {\n    const inputref=useRef()\n    const hendalclick =()=>{\n        if(inputref.current.value == ""){\n            inputref.current.focus()\n            inputref.current.style.color="black"\n        }else{\n            inputref.current.style.color="red"\n        }\n    }\n    return (\n        <>\n            <input  ref={inputref} type="text" />\n            <button onClick={hendalclick}>This</button>\n        </>\n    );\n};\n\nexport default UseRef_1;\n',I=(0,c.forwardRef)((function(e,t){var n=(0,c.useState)(0),s=(0,d.Z)(n,2),r=s[0],o=s[1];(0,c.useImperativeHandle)(t,(function(){return{incr:a}}));var a=function(){o(r+1)};return(0,x.jsxs)(x.Fragment,{children:[r,(0,x.jsx)("button",{onClick:a,children:"Count Chaild"})]})})),D=function(){var e=(0,c.useRef)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(I,{ref:e}),(0,x.jsx)("button",{onClick:function(){return e.current.incr()},children:"Perent"}),(0,x.jsx)(h.Z,{className:"rounded-5",language:"jsx",style:m.Z,children:P})]})},P="\n*****perent*****\n\n\n\nimport React, { useRef } from 'react';\nimport Chaild from './chaild/UseImperativeHandlchaild.jsx'\n\nconst UseImperativeHandle_1 = () => {\n    const ref =useRef();\n    return (\n        <>\n            <Chaild ref={ref}></Chaild>\n            <br />\n            <button onClick={()=>ref.current.incr()}>Perent</button>\n        </>\n    );\n};\n\nexport default UseImperativeHandle_1;\n\n\n*****Chaild*****\nimport React, { forwardRef, useImperativeHandle, useState } from 'react';\n\nconst UseImperativeHandlchaild = forwardRef((props, ref) => {\n    const [state, setstate] = useState(0);\n\n    useImperativeHandle(ref, () => ({ incr }))\n    const incr = () => {\n        setstate(state + 1);\n    }\n    return (\n        <>\n            {state}\n            <button onClick={incr}>Count Chaild</button>\n        </>\n    );\n})\n\nexport default UseImperativeHandlchaild;\n***********************************************************************\n<button onClick={() => ref.current.incr()}>Perent</button>\nforwardRef\nuseImperativeHandle\n\n",O=function(){var e=(0,c.useRef)("red");return(0,c.useEffect)((function(){e.current="yellow",console.log(e,"useEffect")})),(0,c.useLayoutEffect)((function(){window.scrollBy(0,500),console.log(e,"useLayoutEffect")})),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{style:{height:"1000px",background:"DarkSalmon"}})})},q=function(e){(0,c.useDebugValue)(e),(0,c.useEffect)((function(){console.log(e)}),[e])},J=function(){var e=(0,c.useState)([]),t=(0,d.Z)(e,2),n=t[0],s=t[1];return q(n),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)}})})};var T=function(e,t){var n=(0,c.useState)((function(){return function(e,t){var n=JSON.parse(localStorage.getItem(e));return n||t}(e,t)})),s=(0,d.Z)(n,2),r=s[0],o=s[1];return(0,c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r]),[r,o]},X=function(){var e=T(""),t=(0,d.Z)(e,2),n=t[0],s=t[1];return q(n),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)}})})},V=n(1134);function B(){var e=(0,V.cI)(),t=e.register,n=e.handleSubmit,s=e.formState.errors;return console.log(s),(0,x.jsxs)("form",{onSubmit:n((function(e){return console.log(e)})),children:[(0,x.jsxs)("select",(0,u.Z)((0,u.Z)({},t("Title",{required:!0})),{},{children:[(0,x.jsx)("option",{value:"Mr",children:"Mr"}),(0,x.jsx)("option",{value:"Mrs",children:"Mrs"}),(0,x.jsx)("option",{value:"Miss",children:"Miss"}),(0,x.jsx)("option",{value:"Dr",children:"Dr"})]})),(0,x.jsx)("input",(0,u.Z)({type:"text",placeholder:"First name"},t("Firstname",{required:!0,maxLength:80}))),s.Firstname&&(0,x.jsx)("span",{children:"First name Error"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",(0,u.Z)({type:"text",placeholder:"Last name"},t("Lastname",{required:!0,maxLength:100}))),s.Lastname&&(0,x.jsx)("span",{children:"Lastname  Error"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",(0,u.Z)({type:"tel",placeholder:"Mobile number"},t("Mobilenumber",{required:!0,minLength:6,maxLength:12}))),s.Mobilenumber&&(0,x.jsx)("span",{children:"Mobilenumber  Error"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",(0,u.Z)({type:"text",placeholder:"Email"},t("Email",{required:!0,pattern:/^\S+@\S+$/i}))),(0,x.jsx)("br",{}),s.Email&&(0,x.jsx)("span",{children:"Email Error"}),(0,x.jsx)("br",{}),(0,x.jsx)("input",{type:"submit"})]})}var $=function(){var e=(0,c.useState)(null),t=(0,d.Z)(e,2),n=t[0],s=t[1],r=(0,c.useState)(!1),o=(0,d.Z)(r,2),a=o[0],i=o[1],l=(0,c.useState)([]),u=(0,d.Z)(l,2),h=u[0],m=u[1];return(0,c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){i(!0),m(e)}),(function(e){i(!0),s(e)}))}),[]),n?(0,x.jsxs)("div",{children:["Error:",n.message]}):a?(0,x.jsx)("ul",{children:h.map((function(e){return(0,x.jsx)("li",{children:e.title},e.id)}))}):(0,x.jsx)("div",{children:"Loading..."})},z=n(6915),G=n.n(z),K=function(){var e=G()("https://jsonplaceholder.typicode.com/posts"),t=e.isLoading,n=e.data,s=e.error;return s?(0,x.jsxs)("div",{children:["Error:",s.message]}):t?(0,x.jsx)("div",{children:"Loading..."}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{children:n.map((function(e){return(0,x.jsx)("li",{children:e.title},e.id)}))}),(0,x.jsx)(h.Z,{className:"rounded-5",language:"jsx",style:m.Z,children:Q})]})},Q="\nimport React from 'react';\nimport useFetch from 'react-fetch-hook';\n\nconst Reactfetchhook = () => {\n    const { isLoading, data ,error} =  useFetch(\"https://jsonplaceholder.typicode.com/posts\")\n    if (error) {\n        return <div>Error:{error.message}</div>\n    } else if (isLoading) {\n        return <div>Loading...</div>;\n    } else {\n        return (\n            <ul>\n                {data.map(item => (\n                    <li key={item.id}>\n                        {item.title}\n                    </li>\n                ))}\n            </ul>\n        );\n    }\n};\n\nexport default Reactfetchhook;\n\n",Y=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).btnadd=function(){r.setState({addclass:"thisremove col-20"}),r.setState({togal:!r.state.togal})},r.togalebtn=function(){r.setState({togal:!r.state.togal}),r.state.togal?r.setState({addclass:"thisremove col-20"}):r.setState({addclass:"thisadd col-20"})},r.state={togal:!1,addclass:"thisremove col-20"},r}return(0,r.Z)(n,[{key:"render",value:function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:"togal",onClick:this.togalebtn,children:"this"}),(0,x.jsxs)("div",{className:"display-flex ",children:[(0,x.jsx)("div",{className:this.state.addclass,onClick:this.btnadd,children:(0,x.jsxs)("div",{children:[(0,x.jsx)(i.rU,{to:"UseState_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseState_1"})}),(0,x.jsx)(i.rU,{to:"UseEffect_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseEffect_1"})}),(0,x.jsx)(i.rU,{to:"UseEffect_2",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseEffect_2"})}),(0,x.jsx)(i.rU,{to:"UseContext_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseContext_1"})}),(0,x.jsx)(i.rU,{to:"UseContext_2",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseContext_2"})}),(0,x.jsx)(i.rU,{to:"Usereducer_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"Usereducer_1"})}),(0,x.jsx)(i.rU,{to:"UseMemo_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseMemo_1"})}),(0,x.jsx)(i.rU,{to:"UseCallback_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseCallback_1"})}),(0,x.jsx)(i.rU,{to:"UseRef_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseRef_1"})}),(0,x.jsx)(i.rU,{to:"UseImperativeHandle_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseImperativeHandle_1"})}),(0,x.jsx)(i.rU,{to:"UseLocalStorage",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseLocalStorage"})}),(0,x.jsx)(i.rU,{to:"UseLayoutEffect_1",children:(0,x.jsx)("button",{className:"btn btnp",children:"UseLayoutEffect_1"})}),(0,x.jsx)(i.rU,{to:"Costamhook",children:(0,x.jsx)("button",{className:"btn btnp",children:"Costamhook and useDebugValue "})}),(0,x.jsx)(i.rU,{to:"Usefrom",children:(0,x.jsx)("button",{className:"btn btnp",children:"Usefrom"})}),(0,x.jsx)(i.rU,{to:"UsingAJAX",children:(0,x.jsx)("button",{className:"btn btnp",children:"Using AJAX api"})}),(0,x.jsx)(i.rU,{to:"Reactfetchhook",children:(0,x.jsx)("button",{className:"btn btnp",children:"react-fetch-hook"})})]})}),(0,x.jsx)("div",{className:"col-80",children:(0,x.jsx)("div",{className:"isname",children:(0,x.jsxs)(l.Z5,{children:[(0,x.jsx)(l.AW,{path:"/",element:(0,x.jsx)(x.Fragment,{children:" "})}),(0,x.jsx)(l.AW,{path:"UseState_1",element:(0,x.jsx)(f,{})}),(0,x.jsx)(l.AW,{path:"UseEffect_2",element:(0,x.jsx)(b,{})}),(0,x.jsx)(l.AW,{path:"UseEffect_1",element:(0,x.jsx)(p,{})}),(0,x.jsx)(l.AW,{path:"UseContext_1",element:(0,x.jsx)(k,{})}),(0,x.jsx)(l.AW,{path:"UseContext_2",element:(0,x.jsx)(_,{})}),(0,x.jsx)(l.AW,{path:"Usereducer_1",element:(0,x.jsx)(R,{})}),(0,x.jsx)(l.AW,{path:"UseMemo_1",element:(0,x.jsx)(w,{})}),(0,x.jsx)(l.AW,{path:"UseCallback_1",element:(0,x.jsx)(A,{})}),(0,x.jsx)(l.AW,{path:"UseRef_1",element:(0,x.jsx)(H,{})}),(0,x.jsx)(l.AW,{path:"UseImperativeHandle_1",element:(0,x.jsx)(D,{})}),(0,x.jsx)(l.AW,{path:"UseLayoutEffect_1",element:(0,x.jsx)(O,{})}),(0,x.jsx)(l.AW,{path:"Costamhook",element:(0,x.jsx)(J,{})}),(0,x.jsx)(l.AW,{path:"UseLocalStorage",element:(0,x.jsx)(X,{})}),(0,x.jsx)(l.AW,{path:"Usefrom",element:(0,x.jsx)(B,{})}),(0,x.jsx)(l.AW,{path:"UsingAJAX",element:(0,x.jsx)($,{})}),(0,x.jsx)(l.AW,{path:"Reactfetchhook",element:(0,x.jsx)(K,{})})]})})})]})]})}}]),n}(c.Component)}}]);
//# sourceMappingURL=238.5360a5a3.chunk.js.map