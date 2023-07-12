import{j as t}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{f as l,u as S,L as j}from"./leva.esm-16811d8f.js";import{u as P}from"./ZEDComponent-126b9559.js";import{H as k,Z as z}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./index-b36ebdc5.js";import"./index-1fc0ca9a.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";function u(a){const r=a.enable,n=a.inspector,e=P(),_={fps:0,"frame times (ms)":l({frameTotal:0,interFrame:0,meshSelection:{value:0,disabled:!0},renderTarget:{value:0,disabled:!0},render:{value:0,disabled:!0}},{collapsed:!0}),infos:l({activeMeshes:{value:0,disabled:!0},drawCalls:{value:0,disabled:!0},vertices:{value:0,disabled:!0},resolution:""},{collapsed:!0}),loadHomeTotal:0},[s,d]=m.useState(_),[{},p]=S(()=>s,[s]);return m.useEffect(()=>{if(!e)return;const C=(I,D)=>{const{customInfo:i,...f}=I;if(i!==void 0&&i.size>0){let c={...s};for(const g of i.keys()){let b={};const h=i.get(g);for(const v of h.keys())b[v]=h.get(v);let F={};F[g]=l(b,{collapsed:!0}),c={...c,...F}}d(c),p(f)}else d(s),p(f)};r?e.performance.registerCallback(C,500):e.performance.unregisterCallback(),n?e.performance.showInspector():e.performance.hideInspector()},[e,r,n]),t.jsx(t.Fragment,{children:t.jsx(j,{hidden:!r,flat:!1,titleBar:!0,theme:{colors:{elevation1:"#292D39",elevation2:"#181C20",elevation3:"#373C4B",accent1:"#0066DC",accent2:"#007BFF",accent3:"#3C93FF",highlight1:"#535760",highlight2:"#FFFFFF",highlight3:"#FEFEFE",vivid1:"#ffcc00"}}})})}try{u.displayName="PerformancePanel",u.__docgenInfo={description:"",displayName:"PerformancePanel",props:{enable:{defaultValue:null,description:"",name:"enable",required:!0,type:{name:"boolean"}},inspector:{defaultValue:null,description:"",name:"inspector",required:!0,type:{name:"boolean"}}}}}catch{}const N={enable:!0,inspector:!1},Y={title:"Examples/Debugging/성능측정",decorators:[k({view:"top"}),z],args:N},o={storyName:"성능 측정",render:function({enable:r,inspector:n}){const e=P();return m.useEffect(()=>{},[r,e]),t.jsx(t.Fragment,{children:t.jsx(u,{enable:r,inspector:n})})}};o.storyName="성능 측정";var y,x,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  storyName: '성능 측정',
  render: function Render({
    enable,
    inspector
  }) {
    const zed = useZed();
    useEffect(() => {
      if (!zed) return;
    }, [enable, zed]);
    return <>\r
        <PerformancePanel enable={enable} inspector={inspector} />\r
      </>;
  }
} satisfies StoryObj<Args>`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const $=["PerformanceStory"];export{o as PerformanceStory,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=performance.stories-27778a92.js.map
