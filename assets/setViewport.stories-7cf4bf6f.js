import{j as a}from"./jsx-runtime-94f6e698.js";import{r as p}from"./index-8db94870.js";import{u as c,d}from"./ZEDComponent-126b9559.js";import{A as t}from"./ArgType-e8b100be.js";import{H as g,Z as w}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const u={x:0,y:0,width:1,height:1},N={title:"Examples/Camera/화면 조정",decorators:[g({view:"top"}),w],args:u,argTypes:{x:t.Range(0,1,.01),y:t.Range(0,1,.01),width:t.Range(0,1,.01),height:t.Range(0,1,.01)}},r={storyName:"타겟으로 이동",render:function(e){const o=c();return p.useEffect(()=>{if(!o)return;const m=new d(e.x,e.y,e.width,e.height);o.camera.setViewport(m)},[o,e]),a.jsx(a.Fragment,{})}};r.storyName="화면 조정";var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  storyName: '타겟으로 이동',
  render: function Render(args) {
    const zed = useZed();
    useEffect(() => {
      if (!zed) return;

      // viewport 생성
      const cameraViewport = new CameraViewport(args.x, args.y, args.width, args.height);

      // setViewport
      zed.camera.setViewport(cameraViewport);
    }, [zed, args]);
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const b=["ViewportStory"];export{r as ViewportStory,b as __namedExportsOrder,N as default};
//# sourceMappingURL=setViewport.stories-7cf4bf6f.js.map
