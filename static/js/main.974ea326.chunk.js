(this.webpackJsonptdash=this.webpackJsonptdash||[]).push([[0],{96:function(n,e,t){"use strict";t.r(e);var r,i=t(1),a=t.n(i),o=t(12),c=t.n(o),s=t(7),d=t(26),l=t.n(d),b=t.p+"static/media/close.3e1aec8b.svg",j=t(9),p=t(10),m=p.b.div(r||(r=Object(j.a)(['\n  h2 {\n    color: var(--text-title);\n    font-size: 1.5rem;\n    margin-bottom: 2rem;    \n  }\n\n  input {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    border-radius: 0.25rem;\n\n    border: 1px solid #d7d7d7;\n    background: #e7e9ee;\n\n    font-weight: 400;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--text-body);\n    }\n\n    & + input {\n      margin-top: 1rem;\n    }\n  }\n\n    button[type="submit"] {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    background: var(--green);\n    color: #fff;\n    border-radius: 0.25rem;\n    border: 0;\n    font-size: 1rem;\n    font-weight: 600;\n    margin-top: 1.5rem;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(1.1);\n    }\n  }\n']))),u=t(2);function h(n){var e=n.isOpen,t=n.onRequestClose;return Object(u.jsxs)(l.a,{isOpen:e,onRequestClose:t,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[Object(u.jsx)("button",{type:"button",onClick:t,className:"react-modal-close",children:Object(u.jsx)("img",{src:b,alt:"Fechar modal"})}),Object(u.jsxs)(m,{children:[Object(u.jsx)("h2",{children:"Cadastrar equipamento"}),Object(u.jsx)("input",{type:"text",placeholder:"Modelo"}),Object(u.jsx)("input",{type:"number",placeholder:"Tombo"}),Object(u.jsx)("input",{type:"text",placeholder:"N\xba de S\xe9rie"}),Object(u.jsx)("input",{type:"text",placeholder:"Cliente"}),Object(u.jsx)("button",{type:"submit",children:"Cadastrar"})]})]})}l.a.setAppElement("#root");var g,x=t(8),f=p.b.div(g||(g=Object(j.a)(["\n  max-width: 100%;\n  min-width: 700px;\n  margin: 0 1rem 0 0;\n  padding: 1rem 2rem;\n  background-color: var(--shape);\n  grid-area: mainTable;\n  border-radius: 4px;\n\n  .vertical-line {\n    width: 1px;\n    background-color: var(--shape);\n    height: 90%;\n  }\n\n  table {\n    width: 100%;\n    min-width: 700px;\n    border-spacing: 0 0.5rem;\n\n    tr:hover td {\n      background-color: var(--green3);\n      color: var(--shape);\n      transition-duration: 0.5s;\n      color: var(--text-title);\n    }\n\n    tr {\n\n      .dark-td {\n          color: var(--text-title);\n        }\n\n      th {\n        color: var(--green);\n        background-color: var(--green3);\n        font-weight: 600;\n        padding: 1rem 0.75rem;\n        text-align: left;\n        line-height: 1.5rem;\n        font-size: 14px;\n        border-radius: 0;\n\n        button {\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center;\n          border: none;\n          width: 6rem;\n          height: 28px;\n          border-radius: 4px;\n          outline: none;\n          background-color: var(--green);\n          \n\n          svg {\n            margin-top: 3px;\n            margin-left: 0.3rem;\n            font-weight: bold;\n            color: var(--background);\n          }\n\n          .addText {\n            font-weight: bold;\n            color: var(--background);\n            text-align: end;\n            margin-right: 0.7rem;\n          }\n\n          &:hover {\n            filter: brightness(1.1);\n            transition-duration: 0.4s;\n            \n            .addText {\n              color: var(--shape);\n              transition-duration: 0.4s;\n            }\n          }\n        }\n      }\n\n      td {       \n\n        &.estoque {\n          color: #008000;\n\n          span {\n            background-color: ",";\n            padding: 0.25rem;\n            border-radius: 50%;\n          }\n\n          svg {\n            position: relative;\n            top: 2px;\n          }\n\n          text {\n            padding-left: 4px;\n          }\n        }\n\n        &.manuten\xe7\xe3o {\n          color: #FFA500;\n\n          span {\n            background-color: ",";\n            padding: 0.25rem;\n            border-radius: 50%;\n          }\n\n          svg {\n            position: relative;\n            top: 2px;\n          }\n\n          text {\n            padding-left: 4px;\n          }      \n        }\n\n        &.cliente {\n          color: #1E90FF;\n\n          span {\n            background-color: ",";\n            padding: 0.25rem;\n            border-radius: 50%;\n          }\n\n          svg {\n            position: relative;\n            top: 2px;\n          }\n\n          text {\n            padding-left: 4px;\n          }\n        }\n\n        &.aguardando {\n          color: #8B0000;\n\n          span {\n            background-color: ",";\n            padding: 0.25rem;\n            border-radius: 50%;\n          }\n          \n          svg {\n            position: relative;\n            top: 2px;\n          }\n\n          text {\n            padding-left: 4px;\n          }\n        }\n\n        &.sem {\n          color: #FF0000;\n\n          span {\n            background-color: ",";\n            padding: 0.25rem;\n            border-radius: 50%;\n          }\n\n          svg {\n            position: relative;\n            top: 2px;\n          }\n\n          text {\n            padding-left: 4px;\n          }\n        }    \n        \n        padding: 0.75rem 0.75rem;\n        border: 0;\n        background: var(--green2);\n        color: var(--text-body);\n        border-radius: 0;\n        text-align: left;\n        font-size: 13px;\n      \n        .actionButtons {\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: center;\n\n\n          button {\n            \n            border: none;\n            width: 28px;\n            height: 28px;\n            justify-content: center;\n            align-items: center;\n            border-radius: 3px;\n            outline: none;          \n\n            svg {\n              position: relative;\n              left: 1px;\n            }\n\n          }\n          \n          button.delete {\n            background-color: ",";\n            color: var(--red);\n            \n            svg {\n              position: relative;\n              top: 3px;\n            }\n\n            &:hover {\n              border: 1px solid ",";\n            }\n          }\n\n          button.edit {\n            background-color: ",";\n            color: var(--darkblue);\n            margin-right: 5px;\n\n            svg {\n              position: relative;\n              top: 2px;\n              left: 2px;\n            }\n\n            &:hover {\n              border: 1px solid ",";\n            }\n          }\n\n          button.show {\n            background-color: ",";\n            color: var(--green);\n            margin-right: 5px;\n\n            svg {\n              position: relative;\n              top: 3px;\n              left: 0;\n            }\n\n            &:hover {\n              border: 1px solid ",";\n            }\n          }\n        }             \n      }\n    }\n  }\n"])),Object(x.a)(.56,"#1a8e5f"),Object(x.a)(.44,"#FFA500"),Object(x.a)(.38,"#1E90FF"),Object(x.a)(.66,"#8B0000"),Object(x.a)(.56,"#1a8e5f"),Object(x.a)(.4,"#e52e4d"),Object(x.a)(.28,"#e52e4d"),Object(x.a)(.54,"#000ecc"),Object(x.a)(.45,"#000ecc"),Object(x.a)(.56,"#1a8e5f"),Object(x.a)(.3,"#1a8e5f")),O=t(46),v=t(16),w=t(22),y=t(45),k=t(44),z=t.n(k).a.create({baseURL:"https://stock-print.herokuapp.com/"}),N=Object(i.createContext)({});function I(n){var e=n.children,t=Object(i.useState)([]),r=Object(s.a)(t,2),a=r[0],o=r[1];return Object(i.useEffect)((function(){z.get("equipments").then((function(n){o(n.data)})).catch((function(n){return console.log(n)}))}),[]),Object(u.jsx)(N.Provider,{value:{equipments:a},children:e})}function C(){return Object(i.useContext)(N)}var F,q,T=function(n){var e=n.onOpenAddModal,t=C().equipments;return Object(u.jsx)(f,{children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"ID"}),Object(u.jsx)("th",{children:"Modelo"}),Object(u.jsx)("th",{children:"Tombo"}),Object(u.jsx)("th",{children:"S\xe9rie"}),Object(u.jsx)("th",{children:"Cliente"}),Object(u.jsx)("th",{children:"Status"}),Object(u.jsx)("th",{children:"Suprimento"}),Object(u.jsx)("th",{children:"Atualiza\xe7\xe3o"}),Object(u.jsx)("th",{children:Object(u.jsxs)("button",{onClick:e,children:[Object(u.jsx)("div",{className:"addIcon",children:Object(u.jsx)(v.a,{size:"18"})}),Object(u.jsx)("div",{className:"addText",children:"Adicionar"})]})})]})}),Object(u.jsx)("tbody",{children:t.map((function(n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"dark-td",children:0}),Object(u.jsx)("td",{className:"dark-td",children:n.description}),Object(u.jsxs)("td",{children:[n.patrimony," "]}),Object(u.jsx)("td",{children:n.serial}),Object(u.jsx)("td",{children:n.customer.name}),Object(u.jsxs)("td",{className:n.status,children:[""===n.status&&"-",Object(u.jsx)("span",{children:Object(u.jsx)(w.b,{})}),Object(u.jsx)("text",{children:n.status})]}),Object(u.jsx)("td",{children:n.supply}),Object(u.jsxs)("td",{children:[" ",new Intl.DateTimeFormat("pt-BR").format(new Date(n.updated_at))]}),Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:"actionButtons",children:[Object(u.jsx)("button",{className:"show",children:Object(u.jsx)(y.a,{size:23})}),Object(u.jsx)("button",{className:"edit",children:Object(u.jsx)(v.b,{size:23})}),Object(u.jsx)("button",{className:"delete",children:Object(u.jsx)(O.a,{size:23})})]})})]},n.id)}))})]})})},E=p.b.main(F||(F=Object(j.a)(["\n  grid-area: navbar;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 1120px;\n  width: 100%;\n  height: 3rem;\n  margin: 0 auto;\n  padding: 1rem;\n  background: var(--green);\n  color: var(--shape);\n\n  h3 {\n    padding: 0;\n    margin: 0;\n  }\n"])));function S(){return Object(u.jsxs)(E,{children:[Object(u.jsx)("h3",{children:"Printers Stock"}),Object(u.jsx)("h3",{children:'"Login Area"'})]})}var A,B=p.b.div(q||(q=Object(j.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  border-bottom: 1px solid var(--text-body);\n  margin-bottom: 1.5rem;\n  padding: 1rem 0;\n\n  justify-content: center;\n  align-items: center;\n  column-gap: 1rem;\n  \n  span {\n    font-weight: 600;\n    color: var(--green);\n    font-style: italic;\n    font-size: 1.5rem;\n  }\n\n  img {\n    margin: 0;\n    width: 70px;  \n    padding: 0;\n  }\n"]))),M=t.p+"static/media/logo.c2c648d8.png";function R(){return Object(u.jsxs)(B,{children:[Object(u.jsx)("img",{src:M,alt:"logo"}),Object(u.jsx)("span",{children:"Total Ink"})]})}var D,W,L=p.b.main(A||(A=Object(j.a)(["\n  max-width: 280px;\n  margin: 0 0 0 1rem;\n  padding: 0 0.7rem;\n  background-color: var(--shape);\n  grid-area: sidebar;\n  border-radius: 4px;\n\n  .filtersBackground {\n    background-color: var(--green2);\n    padding: 0.5rem;\n  }\n\n  .filtersTitle {\n      padding: 0;\n      margin: 0;\n      height: 3rem;\n    h3 {\n      text-align: center;\n      padding: 0.5rem;\n      background-color: var(--green3);\n      color: var(--green);\n      margin-bottom: 0.5rem;\n    }\n    svg {\n    position: relative;\n    top: -36px;\n    left: 65px;\n    width: 20px;\n    height: 20px;\n    color: var(--green);    \n    }\n  }\n"]))),P=t(47),J=t(122);function U(){return Object(u.jsxs)(L,{children:[Object(u.jsx)(R,{}),Object(u.jsxs)("div",{className:"filtersBackground",children:[Object(u.jsxs)("div",{className:"filtersTitle",children:[Object(u.jsx)("h3",{children:"Filtros"}),Object(u.jsx)(P.a,{})]}),Object(u.jsx)(J.a,{fullWidth:!0,id:"outlined-size-small",label:"Cliente",size:"small",margin:"dense",color:"success"}),Object(u.jsx)(J.a,{fullWidth:!0,id:"outlined-size-small",label:"Equipamento",size:"small",margin:"dense",color:"success"}),Object(u.jsx)(J.a,{fullWidth:!0,id:"outlined-size-small",label:"Status",size:"small",margin:"dense",color:"success"}),Object(u.jsx)(J.a,{fullWidth:!0,id:"outlined-size-small",type:"date",InputLabelProps:{shrink:!0},label:"Data Inicial",size:"small",margin:"dense",color:"success"}),Object(u.jsx)(J.a,{fullWidth:!0,id:"outlined-size-small",type:"date",InputLabelProps:{shrink:!0},label:"Data Final",size:"small",margin:"dense",color:"success"})]})]})}var _,G=p.b.div(D||(D=Object(j.a)(["\n  display: grid;\n  grid-area: summary;\n  gap: 2rem;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 0 1rem 0 0;\n\n  /* div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background: var(--shape);\n    padding: 1.5rem 2rem;\n    width: 100%;\n    border-radius: 0.25rem;\n    color: var(--text-title);\n    justify-items: center;\n  } */\n"]))),H=p.b.div(W||(W=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 30% 70%;\n  justify-content: space-evenly;\n  align-items: center;\n  background: var(--shape);\n  padding: 0;\n  width: 100%;\n  min-width: 10rem;\n  border-radius: 0.5rem;\n  color: var(--text-title);\n  justify-items: center;\n  text-align: center;\n  box-shadow: 2px 2px 2px #dedede;\n\n  &:hover {\n    background-color: var(--green2);\n  }\n\n  h2 {\n    padding-top: 1rem;\n    padding-left: 0.6rem;\n    justify-self: start;\n  }\n\n  span {\n    padding-bottom: 1rem;\n    font-size: 85%;\n    justify-self: start;\n    padding-left: 0.6rem;\n    color:#808080\n  }\n\n  .clientIcon {\n    display: flex;\n    background-color: ",";\n    grid-row-start: span 2;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 1px;\n    margin-left: 0.6rem;\n  }\n\n  .instockIcon {\n    display: flex;\n    background-color: ",";\n    grid-row-start: span 2;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 0;\n    margin-left: 0.6rem;\n  }\n\n  .inClientIcon {\n    display: flex;\n    background-color: ",";\n    grid-row-start: span 2;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 0;\n    margin-left: 0.6rem;\n  }\n\n  .inMaintenanceIcon {\n    display: flex;\n    background-color: ",";\n    grid-row-start: span 2;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 0;\n    margin-left: 0.6rem;\n  }\n\n  .totalIcon {\n    display: flex;\n    background-color: ",";\n    grid-row-start: span 2;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 0;\n    margin-left: 0.6rem;\n  }\n"])),Object(x.a)(.4,"#ff8000"),Object(x.a)(.6,"#00750c"),Object(x.a)(.53,"#000ecc"),Object(x.a)(.65,"#750000"),Object(x.a)(.87,"#000000")),K=t(50),Q=t(48),V=t(49);function X(){var n=C().equipments,e=n.reduce((function(n,e){return"estoque"===e.status?n+1:n}),0),t=n.reduce((function(n,e){return"cliente"===e.status?n+1:n}),0),r=n.reduce((function(n,e){return"sem conserto"===e.status?n+1:n}),0),i=n.reduce((function(n,e){return"aguardando pe\xe7as"===e.status?n+1:n}),0),a=n.reduce((function(n,e){return"manuten\xe7\xe3o"===e.status?n+1:n}),0),o=e+t+a+r+i;return Object(u.jsxs)(G,{children:[Object(u.jsxs)(H,{children:[Object(u.jsx)("div",{className:"instockIcon",children:Object(u.jsx)(w.a,{})}),Object(u.jsx)("h2",{children:e}),Object(u.jsx)("span",{children:"Em estoque"})]}),Object(u.jsxs)(H,{children:[Object(u.jsx)("div",{className:"inClientIcon",children:Object(u.jsx)(v.c,{})}),Object(u.jsx)("h2",{children:t}),Object(u.jsx)("span",{children:"Em cliente"})]}),Object(u.jsxs)(H,{children:[Object(u.jsx)("div",{className:"inMaintenanceIcon",children:Object(u.jsx)(Q.a,{})}),Object(u.jsx)("h2",{children:a}),Object(u.jsx)("span",{children:"Em manuten\xe7\xe3o"})]}),Object(u.jsxs)(H,{children:[Object(u.jsx)("div",{className:"totalIcon",children:Object(u.jsx)(V.a,{})}),Object(u.jsx)("h2",{children:o}),Object(u.jsx)("span",{children:"Total equip."})]}),Object(u.jsxs)(H,{children:[Object(u.jsx)("div",{className:"clientIcon",children:Object(u.jsx)(K.a,{})}),Object(u.jsx)("h2",{children:"59"}),Object(u.jsx)("span",{children:"Clientes"})]})]})}var Y,Z=p.b.div(_||(_=Object(j.a)(['\n  display: grid;\n\n  grid-template-areas:\n    "navbar navbar"\n    "sidebar summary"\n    "sidebar mainTable";\n  grid-template-columns: 280px auto;\n  grid-template-rows: 3rem 5rem auto;\n  grid-gap: 1rem;\n  height: 90vh;\n  margin: 0 auto;\n  padding: 0;\n  max-width: 100%;\n'])));function $(){var n=Object(i.useState)(!1),e=Object(s.a)(n,2),t=e[0],r=e[1];return Object(u.jsxs)(Z,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(U,{}),Object(u.jsx)(X,{}),Object(u.jsx)(T,{onOpenAddModal:function(){r(!0)}}),Object(u.jsx)(h,{isOpen:t,onRequestClose:function(){r(!1)}})]})}var nn=Object(p.a)(Y||(Y=Object(j.a)(["\n  :root {\n    --red: #e52e4d;\n    --green: #1a8e5f;\n    --green2: ",";\n    --green3: #d6ede3;\n    --blue: #5429cc;\n    --darkblue: #0314fa;\n\n    --blue-light: #6933ff;\n\n    --text-title: #363f5f;\n    --text-body: #969cb3;\n\n    --background: #f5f6fa;\n    --shape: #ffffff;\n    --silver: #cacaca;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, textarea, button {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 600;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  .react-modal-overlay {\n    background: rgba(0, 0, 0, 0.5);\n\n    position: fixed;\n    \n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .react-modal-content {\n    width: 100%;\n    max-width: 576px;\n    background: var(--background);\n    padding: 3rem;\n    position: relative;\n    border-radius: 0.25rem;\n  }\n\n  .react-modal-close {\n    position: absolute;\n    right: 1.5rem;\n    top: 1.5rem;\n    border: 0;\n    background: transparent;\n    width: 1.2rem;\n\n    transition: filter 0.2s;\n    \n    &:hover {\n      filter: brightness(0.6);\n    }\n  }\n"])),Object(x.a)(.045,"#e8f3ef"));function en(){return Object(u.jsxs)(I,{children:[Object(u.jsx)($,{}),Object(u.jsx)(nn,{})]})}c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(en,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.974ea326.chunk.js.map