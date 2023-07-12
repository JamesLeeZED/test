import{j as r}from"./jsx-runtime-94f6e698.js";import{u as g,E as u,c as y,A as z}from"./ZEDComponent-126b9559.js";import{A as t}from"./ArgType-e8b100be.js";import{H as f,Z as l}from"./ZedDecorator-5eaa2432.js";import{a as O,b as E}from"./AnimationArgs-470ea978.js";import{I as F}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const I={method:"zoomIn",percent:30,...E},A={zoom:new F("zoom")},B={title:"Examples/Camera/상대값으로 축소 확대",decorators:[f({view:"top"}),l],args:A,argTypes:{zoom:t.Invoke(I,{method:t.Radio(["zoomIn","zoomOut"]),percent:t.Range(1,50,1),...O})}},o={storyName:"상대값으로 축소 확대",render:function({zoom:p,...T}){const e=g();return p.useCallback(n=>{if(!e)return;const c=u[n.easingFunction],d=y[n.easingMode],a=new z({seconds:n.seconds,easingFunction:c,easingMode:d});n.method==="zoomIn"?e.camera.zoomIn({percent:n.percent,animationOption:a}):e.camera.zoomOut({percent:n.percent,animationOption:a})}),r.jsx(r.Fragment,{})}};o.storyName="상대값으로 축소 확대";var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  storyName: '상대값으로 축소 확대',
  render: function Render({
    zoom,
    ...args
  }) {
    const zed = useZed();
    zoom.useCallback(args => {
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

      // zoomIn / zoomOut
      if (args.method === 'zoomIn') {
        zed.camera.zoomIn({
          percent: args.percent,
          animationOption: animationOption
        });
      } else {
        zed.camera.zoomOut({
          percent: args.percent,
          animationOption: animationOption
        });
      }
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const G=["ZoomInOutStory"];export{o as ZoomInOutStory,G as __namedExportsOrder,B as default};
//# sourceMappingURL=zoomInOut.stories-7b304864.js.map
