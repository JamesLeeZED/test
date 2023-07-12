import{j as r}from"./jsx-runtime-94f6e698.js";import{b as a,u as d}from"./leva.esm-16811d8f.js";import{r as g}from"./index-8db94870.js";import{u as y,C as s}from"./ZEDComponent-126b9559.js";import{H as u,Z as l,W as E}from"./ZedDecorator-5eaa2432.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-b36ebdc5.js";import"./index-1fc0ca9a.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,C={},B={title:"Examples/Camera/자이로",decorators:[u({view:"top"}),l],args:C},n={storyName:"자이로",render:function(){const e=y(),t={Arc_Rotate:a(o=>e==null?void 0:e.changeCamera(s.ArcRotate)),Gyro:a(o=>e==null?void 0:e.changeCamera(s.Gyro)),Free:a(o=>e==null?void 0:e.changeCamera(s.Free))};return d(()=>t,[t]),g.useEffect(()=>{},[e]),r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"자이로 모드 진입: 원하는 위치 탭"}),r.jsx("br",{}),r.jsx("strong",{children:"탑뷰로 나가기: 더블 탭"})]})},play:async({id:p,step:e,canvasElement:t,globals:o,...h})=>{f.getChannel(),t.getElementsByTagName("canvas")[0],t.style.pointerEvents="none",await E({step:e}),o.zed.startTopViewForGyro(),t.style.pointerEvents=""}};n.storyName="자이로";var m,i,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  storyName: '자이로',
  render: function Render() {
    const zed = useZed();
    const uiItems: {
      [index: string]: any;
    } = {
      Arc_Rotate: button(get => zed?.changeCamera(CameraType.ArcRotate)),
      Gyro: button(get => zed?.changeCamera(CameraType.Gyro)),
      Free: button(get => zed?.changeCamera(CameraType.Free))
    };
    const [{}, set] = useControls(() => uiItems, [uiItems]);
    useEffect(() => {
      if (!zed) return;
    }, [zed]);
    return <>\r
        <strong>자이로 모드 진입: 원하는 위치 탭</strong>\r
        <br></br>\r
        <strong>탑뷰로 나가기: 더블 탭</strong>\r
      </>;
  },
  play: async ({
    id,
    step,
    canvasElement,
    globals,
    ...rest
  }) => {
    const channel = addons.getChannel();
    const canvas = canvasElement.getElementsByTagName('canvas')[0];
    canvasElement.style.pointerEvents = 'none';
    await WaitForHomeReady({
      step
    });
    const zed = (globals.zed as ZED);
    zed.startTopViewForGyro();
    canvasElement.style.pointerEvents = '';
  }
} satisfies StoryObj<Args>`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const V=["DeviceOrientationStory"];export{n as DeviceOrientationStory,V as __namedExportsOrder,B as default};
//# sourceMappingURL=deviceOrientation.stories-944eb3b4.js.map
