var p=Object.defineProperty;var a=(e,t)=>p(e,"name",{value:t,configurable:!0});import{j as c}from"./jsx-runtime.8cf7ed0d.js";import"./index.8f335b28.js";import"./iframe.d3f56893.js";function n({children:e,options:t,...r}){var o;return c("select",{defaultValue:(o=t.find(l=>l.selected))==null?void 0:o.value,className:"outline-none h-12 flex items-center gap-3 py-4 px-3 bg-gray-800 w-full text-gray-100 rounded text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300",...r,children:t.map(l=>{const{value:s,label:i}=l;return c("option",{value:s,children:i})})})}a(n,"Select");try{n.displayName="Select",n.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select.tsx#Select"]={docgenInfo:n.__docgenInfo,name:"Select",path:"src/components/Select.tsx#Select"})}catch{}const g={title:"Components/Select",component:n,args:{onChange:e=>{console.log("Selected: ",e.target.value)},options:[{label:"Option 01",value:"01",selected:!1},{label:"Option 02",value:"02",selected:!0}]},argTypes:{onChange:{table:{disable:!0}}}},m={},_=["Default"];export{m as Default,_ as __namedExportsOrder,g as default};
//# sourceMappingURL=Select.stories.c23cc719.js.map