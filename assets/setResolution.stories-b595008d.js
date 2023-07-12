import{j as n}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{R as p,u as c}from"./ZEDComponent-126b9559.js";import{u as l}from"./ZedStorybookStyles-5be3d5a8.js";import{A as d}from"./ArgType-e8b100be.js";import{I as f,H as g,Z as R}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const h=Object.values(p).filter(o=>typeof o=="string").map(o=>o.toString()),x={resolution:"p900"},b={title:"Examples/Graphic/해상도 설정",decorators:[f({showExplorer:!1,showInspector:!0}),g({homeId:"TYPE_04",qualitySettings:{modelLOD:"LOD0",textureMaxSize:"2048"},view:"top"}),R],args:x,argTypes:{resolution:d.Select(h)}},e={storyName:"해상도 설정",render:function({...t}){const r=c(),s=l();return u.useEffect(()=>{!r||!s||r.graphic.setResolution(p[t.resolution])},[r,s,t.resolution]),n.jsx(n.Fragment,{})}};e.storyName="해상도 설정";var i,a,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  storyName: '해상도 설정',
  render: function Render({
    ...args
  }) {
    const zed = useZed();
    const home = useHome();
    useEffect(() => {
      if (!zed || !home) return;
      zed.graphic.setResolution(Resolution[(args.resolution as keyof typeof Resolution)]);
    }, [zed, home, args.resolution]);
    return <></>;
  }
} satisfies StoryObj<Args>`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const v=["SetResolution"];export{e as SetResolution,v as __namedExportsOrder,b as default};
//# sourceMappingURL=setResolution.stories-b595008d.js.map
