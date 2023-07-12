import{j as a}from"./jsx-runtime-94f6e698.js";import{u as T,a as d,b as A,E as y,c as f,A as u}from"./ZEDComponent-126b9559.js";import{A as o}from"./ArgType-e8b100be.js";import{H as C,Z as R}from"./ZedDecorator-5eaa2432.js";import{a as x,b as h}from"./AnimationArgs-470ea978.js";import{I as w}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const z={x:0,y:0,h:0,isRelativePosition:!1,horAngle:0,verAngle:0,isRelativeAngle:!1,...h},E={moveTo:new w("moveTo")},J={title:"Examples/Camera/좌표로 이동",decorators:[C({view:"top"}),R],args:E,argTypes:{moveTo:o.Invoke(z,{x:o.Range(0,2,.05,"Position"),y:o.Range(0,2,.05,"Position"),h:o.Range(0,2,.05,"Position"),isRelativePosition:o.Category("Position"),horAngle:o.Range(-180,180,1,"Rotation"),verAngle:o.Range(-90,90,1,"Rotation"),isRelativeAngle:o.Category("Rotation"),...x})}},n={storyName:"좌표로 이동",render:function({moveTo:m,...F}){const s=T();return m.useCallback(e=>{if(!s)return;const g=new d(e.x,e.y,e.h,e.isRelativePosition),l=new A({angleHor:e.horAngle,angleVer:e.verAngle}),c=y[e.easingFunction],p=f[e.easingMode],v=new u({seconds:e.seconds,easingFunction:c,easingMode:p});s.camera.moveTo({position:g,cameraAngle:l,isRelativeAngle:e.isRelativeAngle,animationOption:v})}),a.jsx(a.Fragment,{})}};n.storyName="좌표로 이동";var t,i,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  storyName: '좌표로 이동',
  render: function Render({
    moveTo,
    ...args
  }) {
    const zed = useZed();
    moveTo.useCallback(args => {
      if (!zed) return;

      // CameraPosition, CameraAngle 생성
      const pos = new CameraPosition(args.x, args.y, args.h, args.isRelativePosition);
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

      // moveTo
      zed.camera.moveTo({
        position: pos,
        cameraAngle: cameraAngle,
        isRelativeAngle: args.isRelativeAngle,
        animationOption: animationOption
      });
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   canvasElement.style.pointerEvents = 'none';

  //   await WaitForHomeReady({ step });

  //   const seconds = isChromatic() ? 0 : moveToArgs.seconds;
  //   const zed = globals.zed as ZED;

  //   await step('moveTo absolute zero', async () => {
  //     args.moveTo.invoke({
  //       ...moveToArgs,
  //       seconds,
  //     });

  //     await new Promise((resolve) => setTimeout(resolve, seconds * 1000 + 100));

  //     const position = zed.camera['zedCamera']['camera'].position;

  //     expect(position.x).toBeCloseTo(moveToArgs.x);
  //     expect(position.y).toBeCloseTo(moveToArgs.h);
  //     expect(position.z).toBeCloseTo(moveToArgs.y);
  //   });

  //   await step('moveTo relative position', async () => {
  //     const offset = {
  //       x: -0.5,
  //       y: 0.5,
  //       h: 1,
  //     };
  //     args.moveTo.invoke({
  //       ...moveToArgs,
  //       ...offset,
  //       isRelativePosition: true,
  //       seconds,
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, seconds * 1000 + 100));

  //     const position = zed.camera['zedCamera']['camera'].position;
  //     expect(position.x).toBeCloseTo(moveToArgs.x - offset.x);
  //     expect(position.y).toBeCloseTo(moveToArgs.h + offset.h);
  //     expect(position.z).toBeCloseTo(moveToArgs.y - offset.y);
  //   });

  //   await step('moveTo relative rotation', async () => {
  //     const { alpha: originalAlpha, beta: originalBeta } = zed.camera['zedCamera']['camera'];
  //     const originalHorAngle = Tools.ToDegrees(originalAlpha);
  //     const originalVerAngle = Tools.ToDegrees(originalBeta);

  //     const offset = {
  //       horAngle: 90,
  //       verAngle: 30,
  //     };
  //     args.moveTo.invoke({
  //       ...moveToArgs,
  //       isRelativePosition: true,
  //       ...offset,
  //       isRelativeAngle: true,
  //       seconds,
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, seconds * 1000 + 100));

  //     const { alpha, beta } = zed.camera['zedCamera']['camera'];
  //     expect(Tools.ToDegrees(alpha)).toBeCloseTo(originalHorAngle + offset.horAngle);
  //     expect(Tools.ToDegrees(beta)).toBeCloseTo(originalVerAngle - offset.verAngle);
  //   });

  //   canvasElement.style.pointerEvents = '';
  // },
} satisfies StoryObj<Args>`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const K=["MoveToStory"];export{n as MoveToStory,K as __namedExportsOrder,J as default};
//# sourceMappingURL=moveTo.stories-e15f0669.js.map
