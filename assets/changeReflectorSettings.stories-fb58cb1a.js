import{j as s}from"./jsx-runtime-94f6e698.js";import{r as p}from"./index-8db94870.js";import{u as d}from"./ZEDComponent-126b9559.js";import{u as f}from"./ZedStorybookStyles-5be3d5a8.js";import{A as l}from"./ArgType-e8b100be.js";import{H as u,Z as g}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const h={level:.1,blurKernel:40},C={title:"Examples/Graphic/반사 재질 설정",decorators:[u({qualitySettings:{modelLOD:"LOD0",textureMaxSize:"2048",reflection:!0}}),g],args:h,argTypes:{level:l.Range(0,1,.01),blurKernel:l.Range(1,100,1)}},n={storyName:"반사 재질 설정",render:function({level:o,blurKernel:a}){const r=d(),t=f();return p.useEffect(()=>{if(!r||!t)return;t.floorplanIds.flatMap(e=>r.graphic.getReflectorsInFloorplan(e)).map(e=>e.Reflector).forEach(e=>{r.graphic.changeReflectorSettings(e,o,a)})},[a,o,r,t]),s.jsx(s.Fragment,{})}};n.storyName="반사 재질 설정";var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  storyName: '반사 재질 설정',
  render: function Render({
    level,
    blurKernel
  }) {
    const zed = useZed();
    const home = useHome();
    useEffect(() => {
      if (!zed || !home) return;
      const reflectors = home.floorplanIds.flatMap(floorplanId => zed.graphic.getReflectorsInFloorplan(floorplanId)).map(floorplan => floorplan.Reflector);
      reflectors.forEach(reflector => {
        zed.graphic.changeReflectorSettings(reflector, level, blurKernel);
      });
    }, [blurKernel, level, zed, home]);
    return <></>;
  }

  // play: async ({ id, step }) => {
  //   const channel = addons.getChannel();

  //   await WaitForHomeReady({ step });

  //   await step('Change level to 0.5', async () => {
  //     channel.emit(UPDATE_STORY_ARGS, {
  //       storyId: id,
  //       updatedArgs: {
  //         level: 0.5,
  //       },
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //   });
  //   await step('Change level to 1', async () => {
  //     channel.emit(UPDATE_STORY_ARGS, {
  //       storyId: id,
  //       updatedArgs: {
  //         level: 1,
  //       },
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //   });
  //   await step('Change blurKernel to 100', async () => {
  //     channel.emit(UPDATE_STORY_ARGS, {
  //       storyId: id,
  //       updatedArgs: {
  //         blurKernel: 100,
  //       },
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //   });
  //   await step('Change blurKernel to 1', async () => {
  //     channel.emit(UPDATE_STORY_ARGS, {
  //       storyId: id,
  //       updatedArgs: {
  //         blurKernel: 1,
  //       },
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //   });
  //   await step('Reset args', async () => {
  //     channel.emit(RESET_STORY_ARGS, {
  //       storyId: id,
  //     });
  //   });
  // },
} satisfies StoryObj<Args>`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const G=["ChangeReflectorSettings"];export{n as ChangeReflectorSettings,G as __namedExportsOrder,C as default};
//# sourceMappingURL=changeReflectorSettings.stories-fb58cb1a.js.map
