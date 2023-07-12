import{j as e}from"./jsx-runtime-94f6e698.js";import{u as d,d as n}from"./ZEDComponent-126b9559.js";import{A as s}from"./ArgType-e8b100be.js";import{H as w,Z as g}from"./ZedDecorator-5eaa2432.js";import{I as h}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const u={from:{x:0,y:0,width:1,height:1},to:{x:0,y:0,width:.5,height:.5},second:1},y={transformViewport:new h("transformViewport")},D={title:"Examples/Camera/화면 조정 애니메이션",decorators:[w({view:"top"}),g],args:y,argTypes:{transformViewport:s.Invoke(u,{second:s.Range(0,30,.05)})}},o={storyName:"화면 조정 애니메이션",render:function({transformViewport:p,...V}){const t=d();return p.useCallback(r=>{if(!t)return;const f=new n(r.from.x,r.from.y,r.from.width,r.from.height),c=new n(r.to.x,r.to.y,r.to.width,r.to.height);t.camera.transformViewport(f,c,r.second)}),e.jsx(e.Fragment,{})}};o.storyName="화면 조정 애니메이션";var a,m,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  storyName: '화면 조정 애니메이션',
  render: function Render({
    transformViewport,
    ...args
  }) {
    const zed = useZed();
    transformViewport.useCallback(args => {
      if (!zed) return;

      // viewport 생성
      const from = new CameraViewport(args.from.x, args.from.y, args.from.width, args.from.height);
      const to = new CameraViewport(args.to.x, args.to.y, args.to.width, args.to.height);

      // transformViewport
      zed.camera.transformViewport(from, to, args.second);
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const F=["TransformViewportStory"];export{o as TransformViewportStory,F as __namedExportsOrder,D as default};
//# sourceMappingURL=transformViewport.stories-9a659f33.js.map
