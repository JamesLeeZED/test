import{j as s}from"./jsx-runtime-94f6e698.js";import{u as c,A as f,c as u}from"./ZEDComponent-126b9559.js";import{u as y}from"./ZedStorybookStyles-5be3d5a8.js";import{A as i}from"./ArgType-e8b100be.js";import{H as T,Z as F}from"./ZedDecorator-5eaa2432.js";import{I as w}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const a=["floor1"],x={targetFloor:a[0],alwaysQuaterView:!0},I={setTarget:new w("setTarget")},q={title:"Examples/Home/평면도 선택",decorators:[T({view:"top"}),F],args:I,argTypes:{setTarget:i.Invoke(x,{targetFloor:i.Radio(a)})}},e={storyName:"평면도 선택",render:function({setTarget:p,...h}){const r=c(),o=y();return p.useCallback(n=>{if(!r||!o)return;let t=a.indexOf(n.targetFloor);if(t!=-1&&o.floorplanIds.length>t){const g=o.floorplanIds[t];r.camera.setTargetFloor(g,!1,new f({seconds:.4,easingMode:u.In})),n.alwaysQuaterView&&r.camera.quaterView(45,45)}}),s.jsx(s.Fragment,{})}};e.storyName="평면도 선택";var m,l,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  storyName: '평면도 선택',
  render: function Render({
    setTarget,
    ...args
  }) {
    const zed = useZed();
    const home = useHome();
    setTarget.useCallback(args => {
      if (!zed || !home) return;
      let index = floors.indexOf(args.targetFloor);
      if (index != -1 && home.floorplanIds.length > index) {
        const targetFloorplanId = home.floorplanIds[index];

        // Camera API - setTargetFloor
        zed.camera.setTargetFloor(targetFloorplanId, false, new AnimationOption({
          seconds: 0.4,
          easingMode: EasingModeType.In
        }));
        if (args.alwaysQuaterView) {
          zed.camera.quaterView(45, 45);
        }
      }
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const D=["SetTargetFloorStory"];export{e as SetTargetFloorStory,D as __namedExportsOrder,q as default};
//# sourceMappingURL=setTargetFloor.stories-f2ab3bea.js.map
