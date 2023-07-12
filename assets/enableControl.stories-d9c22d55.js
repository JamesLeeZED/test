import{j as t}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{u as c}from"./ZEDComponent-126b9559.js";import{H as d,Z as m}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const l={enable:!1},S={title:"Examples/Camera/사용자 조작 여부",decorators:[d({view:"top"}),m],args:l},n={storyName:"사용자 조작 여부",render:function({enable:e}){const a=c();return i.useEffect(()=>{a&&a.camera.enableControl(e)},[e,a]),t.jsx(t.Fragment,{children:!e&&t.jsx("strong",{children:"사용자 조작 불가"})})}};n.storyName="사용자 조작 여부";var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  storyName: '사용자 조작 여부',
  render: function Render({
    enable
  }) {
    const zed = useZed();
    useEffect(() => {
      if (!zed) return;

      // enableControl
      zed.camera.enableControl(enable);
    }, [enable, zed]);
    return <>{!enable && <strong>사용자 조작 불가</strong>}</>;
  }
  // play: async ({ id, step, canvasElement, globals, ...rest }) => {
  //   const channel = addons.getChannel();
  //   const canvas = canvasElement.getElementsByTagName('canvas')[0];

  //   canvasElement.style.pointerEvents = 'none';

  //   await WaitForHomeReady({ step });

  //   const zed = globals.zed as ZED;

  //   channel.emit(UPDATE_STORY_ARGS, {
  //     storyId: id,
  //     updatedArgs: {
  //       enable: true,
  //     },
  //   });

  //   await step('Drag when enabled', async () => {
  //     channel.emit(UPDATE_STORY_ARGS, {
  //       storyId: id,
  //       updatedArgs: {
  //         enable: true,
  //       },
  //     });

  //     const originalPosition = zed.camera['zedCamera']['camera'].position.clone();

  //     await drag(canvas, {
  //       delta: { x: canvas.offsetWidth * 0.1, y: -canvas.offsetHeight * 0.1 },
  //       duration: 100,
  //     });
  //     await waitFor(() => expect(zed.camera['zedCamera'].isRemainInertia()).toBeFalsy(), {
  //       timeout: 3000,
  //     });

  //     const position = zed.camera['zedCamera']['camera'].position.clone();
  //     expect(position).not.toEqual(originalPosition);
  //   });

  //   await step('Drag when disabled', async () => {
  //     channel.emit(UPDATE_STORY_ARGS, {
  //       storyId: id,
  //       updatedArgs: {
  //         enable: false,
  //       },
  //     });

  //     const originalPosition = zed.camera['zedCamera']['camera'].position.clone();

  //     await drag(canvas, {
  //       delta: { x: -canvas.offsetWidth * 0.1, y: canvas.offsetHeight * 0.1 },
  //       duration: 100,
  //     });

  //     const position = zed.camera['zedCamera']['camera'].position.clone();
  //     expect(position).toEqual(originalPosition);
  //   });

  //   canvasElement.style.pointerEvents = '';
  // },
} satisfies StoryObj<Args>`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const D=["EnableControlStory"];export{n as EnableControlStory,D as __namedExportsOrder,S as default};
//# sourceMappingURL=enableControl.stories-d9c22d55.js.map
