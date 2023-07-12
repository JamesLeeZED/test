import{j as l}from"./jsx-runtime-94f6e698.js";import{r as n}from"./index-8db94870.js";import{Z as i}from"./ZEDComponent-126b9559.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";const g={title:"Examples/Home/집 불러오기 (legacy)"},o={storyName:"집 불러오기 (legacy)",render:function(){const[e,s]=n.useState();return n.useEffect(()=>{e&&(async()=>(e.observer.onFirstModelLoaded.addOnce(()=>{}),e.observer.onAllModelLoaded.add(()=>{console.log("onAllModelLoaded"),e.camera.zoomFitOnInit()}),e.observer.onModelLoadProgress.add(d=>{console.log(d)}),await e.loadHome("TYPE_04",{modelLOD:"LOD1",textureMaxSize:"512"})))()},[e]),l.jsx(i,{ref:s,style:{position:"absolute",left:0,right:0,top:0,bottom:0}})}};o.storyName="집 불러오기 (legacy)";var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  storyName: '집 불러오기 (legacy)',
  render: function Render() {
    const [zed, setZed] = useState<ZED | null>();
    useEffect(() => {
      if (!zed) return;
      (async () => {
        zed.observer.onFirstModelLoaded.addOnce(() => {
          // zed.camera.zoomFitOnInit();
        });
        zed.observer.onAllModelLoaded.add(() => {
          console.log('onAllModelLoaded');
          zed.camera.zoomFitOnInit();
        });
        zed.observer.onModelLoadProgress.add(progress => {
          console.log(progress);
        });
        await zed.loadHome('TYPE_04', {
          modelLOD: 'LOD1',
          textureMaxSize: '512'
        });
      })();
    }, [zed]);
    return <Zed ref={setZed} style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }} />;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   await waitFor(
  //     () => {
  //       const bjsCanvas = canvasElement.querySelectorAll('canvas');
  //       expect(bjsCanvas).toBeTruthy();
  //     },
  //     {
  //       timeout: 10000,
  //     }
  //   );
  //   await new Promise((resolve) => setTimeout(resolve, 1000)); // FIXME: wait for proper ready event
  // },
} satisfies StoryObj`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const z=["LoadHomeStory"];export{o as LoadHomeStory,z as __namedExportsOrder,g as default};
//# sourceMappingURL=loadHome.stories-2d6178b3.js.map
