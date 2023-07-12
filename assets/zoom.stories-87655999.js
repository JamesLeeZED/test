import{j as a}from"./jsx-runtime-94f6e698.js";import{u as d,E as u,c as y,A as f}from"./ZEDComponent-126b9559.js";import{A as s}from"./ArgType-e8b100be.js";import{H as D,Z as l}from"./ZedDecorator-5eaa2432.js";import{a as E,b as F}from"./AnimationArgs-470ea978.js";import{I as A}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const M={cameraDistance:3,...F},T={setDistance:new A("setDistance")},B={title:"Examples/Camera/절대값으로 축소 확대",decorators:[D({view:"top"}),l],args:T,argTypes:{setDistance:s.Invoke(M,{cameraDistance:s.Range(0,15,.5),...E})}},n={storyName:"절대값으로 축소 확대",render:function({setDistance:c,...k}){const t=d();return c.useCallback(e=>{if(!t)return;const m=u[e.easingFunction],p=y[e.easingMode],g=new f({seconds:e.seconds,easingFunction:m,easingMode:p});t.camera.setDistance({distance:e.cameraDistance,animationOption:g})}),a.jsx(a.Fragment,{})}};n.storyName="절대값으로 축소 확대";var o,i,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  storyName: '절대값으로 축소 확대',
  render: function Render({
    setDistance,
    ...args
  }) {
    const zed = useZed();
    setDistance.useCallback(args => {
      if (!zed) return;

      // string arg 값을 Enum 값으로 변환
      const easingFuntion = EasingFunctionType[(args.easingFunction as keyof typeof EasingFunctionType)];
      const easingMode = EasingModeType[(args.easingMode as keyof typeof EasingModeType)];

      // animation option 생성
      const animationOption = new AnimationOption({
        seconds: args.seconds,
        easingFunction: easingFuntion,
        easingMode: easingMode
      });

      // setDistance
      zed.camera.setDistance({
        distance: args.cameraDistance,
        animationOption: animationOption
      });
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const G=["SetDistanceStory"];export{n as SetDistanceStory,G as __namedExportsOrder,B as default};
//# sourceMappingURL=zoom.stories-87655999.js.map
