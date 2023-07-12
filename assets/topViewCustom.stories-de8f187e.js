import{j as a}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import{u as d,E as u,c as y,A as f}from"./ZEDComponent-126b9559.js";import{A as e}from"./ArgType-e8b100be.js";import{H as E,Z as x}from"./ZedDecorator-5eaa2432.js";import{a as F,b as z}from"./AnimationArgs-470ea978.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const T={x:0,y:0,zoomPercent:100,rotation:0,...z},D={title:"Examples/Camera/평면으로 조정된 이동",decorators:[E({view:"top"}),x],args:T,argTypes:{x:e.Range(-5,5,.2),y:e.Range(-5,5,.2),zoomPercent:e.Range(1,200,10),rotation:e.Range(-180,180,10),...F}},o={storyName:"평면으로 조정된 이동",render:function(n){const t=d();return g.useEffect(()=>{if(!t)return;const m=u[n.easingFunction],p=y[n.easingMode],c=new f({seconds:n.seconds,easingFunction:m,easingMode:p});t.camera.topViewCustom({x:n.x,y:n.y,zoomPercent:n.zoomPercent,rotation:n.rotation,animationOption:c})},[t,n]),a.jsx(a.Fragment,{})}};o.storyName="평면으로 조정된 이동";var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  storyName: '평면으로 조정된 이동',
  render: function Render(args) {
    const zed = useZed();
    useEffect(() => {
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

      // topViewCustom
      zed.camera.topViewCustom({
        x: args.x,
        y: args.y,
        zoomPercent: args.zoomPercent,
        rotation: args.rotation,
        animationOption: animationOption
      });
    }, [zed, args]);
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _=["TopViewCustomStory"];export{o as TopViewCustomStory,_ as __namedExportsOrder,D as default};
//# sourceMappingURL=topViewCustom.stories-de8f187e.js.map
