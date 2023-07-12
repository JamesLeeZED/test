import{j as t}from"./jsx-runtime-94f6e698.js";import{r as f}from"./index-8db94870.js";import{u as l,b as T,E as A,c as y,A as E}from"./ZEDComponent-126b9559.js";import{A as r}from"./ArgType-e8b100be.js";import{H as F,Z as h}from"./ZedDecorator-5eaa2432.js";import{a as v,b as C}from"./AnimationArgs-470ea978.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const g=["-","Living","Bed","Bath","Entrance","Door_Entrance","Door_Room","Door_Bath","Air_Purifier","Wall_Pad","WIN_A_01","WIN_A_02"],w={thing:g[0],horAngle:0,verAngle:0,dist:2,fromThingsForward:!0,...C},P={title:"Examples/Camera/타겟으로 이동",decorators:[F({view:"top"}),h],args:w,argTypes:{thing:r.Select(g),horAngle:r.Range(-180,180,1),verAngle:r.Range(-90,90,1),dist:r.Range(.1,5,.1),...v}},n={storyName:"타겟으로 이동",render:function(e){const a=l();return f.useEffect(()=>{if(!a)return;const o=a.camera.getCameraTargetEntityWithSameName(e.thing);if(!o)return;const c=new T({angleHor:e.horAngle,angleVer:e.verAngle}),d=A[e.easingFunction],p=y[e.easingMode],u=new E({seconds:e.seconds,easingFunction:d,easingMode:p});a.camera.moveToCameraTarget({targetName:o.TransformNode.name,cameraAngle:c,dist:e.dist,animationOption:u,fromForward:e.fromThingsForward})},[a,e]),t.jsx(t.Fragment,{})}};n.storyName="타겟으로 이동";var s,i,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  storyName: '타겟으로 이동',
  render: function Render(args) {
    const zed = useZed();
    useEffect(() => {
      if (!zed) return;

      // CameraTargets 중 이름이 매칭되는 target 찾음
      const target = zed.camera.getCameraTargetEntityWithSameName(args.thing);
      if (!target) return;

      // CameraAngle 생성
      const cameraAngle = new CameraAngle({
        angleHor: args.horAngle,
        angleVer: args.verAngle
      });

      // string arg 값을 Enum 값으로 변환
      const easingFuntion = EasingFunctionType[(args.easingFunction as keyof typeof EasingFunctionType)];
      const easingMode = EasingModeType[(args.easingMode as keyof typeof EasingModeType)];

      // animation option 생성
      const animationOption = new AnimationOption({
        seconds: args.seconds,
        easingFunction: easingFuntion,
        easingMode: easingMode
      });

      // moveToCameraTarget
      zed.camera.moveToCameraTarget({
        targetName: target.TransformNode.name,
        cameraAngle: cameraAngle,
        dist: args.dist,
        animationOption: animationOption,
        fromForward: args.fromThingsForward
      });
    }, [zed, args]);
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const V=["MoveToCameraTargetStory"];export{n as MoveToCameraTargetStory,V as __namedExportsOrder,P as default};
//# sourceMappingURL=moveToCameraTarget.stories-ba6782b3.js.map
