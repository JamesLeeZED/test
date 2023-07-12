import{j as m}from"./jsx-runtime-94f6e698.js";import{V as c}from"./glTFMaterialsCommonExtension-1bf2ca18.js";import{b as a,u as x}from"./leva.esm-16811d8f.js";import{u as F,t as r,E as v,c as A,A as l,C as i}from"./ZEDComponent-126b9559.js";import{A as e}from"./ArgType-e8b100be.js";import{H as M,Z as E}from"./ZedDecorator-5eaa2432.js";import{a as b,b as z}from"./AnimationArgs-470ea978.js";import{I as w}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./index-b36ebdc5.js";import"./index-1fc0ca9a.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const O={x:0,y:0,z:0,rx:0,ry:0,rz:0,...z},I={moveToCoordinate:new w("moveToCoordinate")},no={title:"Examples/Camera/3D 좌표로 이동",decorators:[M({view:"top"}),E],args:I,argTypes:{moveToCoordinate:e.Invoke(O,{x:e.Range(-5,5,.1,"Position"),y:e.Range(0,5,.1,"Position"),z:e.Range(-5,5,.1,"Position"),rx:e.Range(-180,180,1,"Rotation"),ry:e.Range(-180,180,1,"Rotation"),rz:e.Range(-180,180,1,"Rotation"),...b})}},t={storyName:"3D 좌표로 이동",render:function({moveToCoordinate:u,...k}){const n=F(),s={Arc_Rotate:a(o=>n==null?void 0:n.changeCamera(i.ArcRotate)),Gyro:a(o=>n==null?void 0:n.changeCamera(i.Gyro)),Free:a(o=>n==null?void 0:n.changeCamera(i.Free))};return x(()=>s,[s]),u.useCallback(o=>{if(!n)return;const y=new c(o.x,o.y,o.z),C=new c(o.rx*r,o.ry*r,o.rz*r),T=v[o.easingFunction],R=A[o.easingMode],f=new l({seconds:o.seconds,easingFunction:T,easingMode:R});n.camera.moveToCoordinate({position:y,rotation:C,animationOption:f})}),m.jsx(m.Fragment,{})}};t.storyName="3D 좌표로 이동";var p,g,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  storyName: '3D 좌표로 이동',
  render: function Render({
    moveToCoordinate,
    ...args
  }) {
    const zed = useZed();

    // 카메라 변경 (모든 카메라 테스트용)
    const uiItems: {
      [index: string]: any;
    } = {
      Arc_Rotate: button(get => zed?.changeCamera(CameraType.ArcRotate)),
      Gyro: button(get => zed?.changeCamera(CameraType.Gyro)),
      Free: button(get => zed?.changeCamera(CameraType.Free))
    };
    const [{}, set] = useControls(() => uiItems, [uiItems]);
    moveToCoordinate.useCallback(args => {
      if (!zed) return;

      // 각도는 Radian 이어야 함
      const pos = new Vector3(args.x, args.y, args.z);
      const rot = new Vector3(args.rx * toRadian, args.ry * toRadian, args.rz * toRadian);

      // animation option
      const easingFuntion = EasingFunctionType[(args.easingFunction as keyof typeof EasingFunctionType)];
      const easingMode = EasingModeType[(args.easingMode as keyof typeof EasingModeType)];
      const animationOption = new AnimationOption({
        seconds: args.seconds,
        easingFunction: easingFuntion,
        easingMode: easingMode
      });

      // moveToCoordinate
      zed.camera.moveToCoordinate({
        position: pos,
        rotation: rot,
        animationOption: animationOption
      });
    });
    return <></>;
  }
} satisfies StoryObj<Args>`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const eo=["MoveToCoordinateStory"];export{t as MoveToCoordinateStory,eo as __namedExportsOrder,no as default};
//# sourceMappingURL=moveToCoordinate.stories-db3fc872.js.map
