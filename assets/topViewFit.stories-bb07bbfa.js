import{j as t}from"./jsx-runtime-94f6e698.js";import{u as g,E as d,c as u,A as F}from"./ZEDComponent-126b9559.js";import{A as y}from"./ArgType-e8b100be.js";import{H as f,Z as w}from"./ZedDecorator-5eaa2432.js";import{a as l,b as E}from"./AnimationArgs-470ea978.js";import{I as T}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const V={...E},A={topViewFit:new T("topViewFit")},q={title:"Examples/Camera/평면으로 맞춤 이동",decorators:[f({view:"top"}),w],args:A,argTypes:{topViewFit:y.Invoke(V,l)}},n={storyName:"평면으로 맞춤 이동",render:function({topViewFit:r,...O}){const e=g();return r.useCallback(o=>{if(!e)return;const p=d[o.easingFunction],m=u[o.easingMode],c=new F({seconds:o.seconds,easingFunction:p,easingMode:m});e.camera.topViewFit(c)}),t.jsx(t.Fragment,{})}};n.storyName="평면으로 맞춤 이동";var i,s,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  storyName: '평면으로 맞춤 이동',
  render: function Render({
    topViewFit,
    ...args
  }) {
    const zed = useZed();
    topViewFit.useCallback(args => {
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

      // topViewFit
      zed.camera.topViewFit(animationOption);
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["TopViewFitStory"];export{n as TopViewFitStory,B as __namedExportsOrder,q as default};
//# sourceMappingURL=topViewFit.stories-bb07bbfa.js.map
