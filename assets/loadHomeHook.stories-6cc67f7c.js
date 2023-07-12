import{j as m}from"./jsx-runtime-94f6e698.js";import{a as n}from"./chunk-OPEUWD42-8042112b.js";import{r as l}from"./index-8db94870.js";import{Z as h,u as v}from"./ZEDComponent-126b9559.js";import{b as y,H as L,u as x}from"./ZedStorybookStyles-5be3d5a8.js";import{A as M}from"./ArgType-e8b100be.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";const b=[{homeId:"TYPE_04",lightIntensity:.4,ambientColor:{r:.4980392,g:.5137254,b:.545098},environmentTexture:"00_ReCap_Livingroom.env"}],z={homeId:"TYPE_04",onFirstModelLoaded:n("onFirstModelLoaded",{limit:void 0}),onAllModelLoaded:n("onAllModelLoaded",{limit:void 0}),onModelLoadProgress:n("onModelLoadProgress",{limit:void 0}),onHome:n("onHome",{limit:void 0})},S={title:"Examples/Home/집 불러오기",args:z,argTypes:{homeId:M.Select(b.map(i=>i.homeId))},parameters:{controls:{exclude:["onFirstModelLoaded","onAllModelLoaded","onModelLoadProgress","onHome"]}}},o={storyName:"집 불러오기",render:function({homeId:g,onFirstModelLoaded:r,onAllModelLoaded:t,onModelLoadProgress:s,onHome:a}){function f(){const e=v(),d=x();return l.useEffect(()=>{e&&(e.observer.onFirstModelLoaded.addOnce(()=>{r==null||r()}),e.observer.onAllModelLoaded.add(()=>{t==null||t(),e.camera.zoomFitOnInit()}),e.observer.onModelLoadProgress.add(H=>{s==null||s(H)}))},[e]),l.useEffect(()=>{!e||!d||a==null||a(d)},[e,d]),null}return m.jsx(h,{style:y,children:m.jsx(L,{homeId:g,children:m.jsx(f,{})})})}};o.storyName="집 불러오기";var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  storyName: '집 불러오기',
  render: function Render({
    homeId,
    onFirstModelLoaded,
    onAllModelLoaded,
    onModelLoadProgress,
    onHome
  }) {
    function MyHome() {
      const zed = useZed();
      const home = useHome();
      useEffect(() => {
        if (!zed) return;
        // Home 로드가 완료되기 전에 Event를 등록하는 등 초기 Code를 작성하세요
        zed.observer.onFirstModelLoaded.addOnce(() => {
          onFirstModelLoaded?.();
          // console.log('onFirstModelLoaded');
        });

        zed.observer.onAllModelLoaded.add(() => {
          onAllModelLoaded?.();
          // console.log('onAllModelLoaded');
          zed.camera.zoomFitOnInit();
        });
        zed.observer.onModelLoadProgress.add(progress => {
          onModelLoadProgress?.(progress);
          // console.log(progress);
        });
      }, [zed]);
      useEffect(() => {
        if (!zed || !home) return;
        // Home 로드가 완료된 상태입니다. 모든 api를 사용해 Code를 작성하세요.
        onHome?.(home);
        // console.log(home);
      }, [zed, home]);
      return null;
    }
    return <Zed style={backgroundStyle}>\r
        <Home homeId={homeId}>\r
          <MyHome />\r
        </Home>\r
      </Zed>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   await step('Wait for ready', async () => {
  //     await waitFor(
  //       () => {
  //         expect(args.onHome).toBeCalledTimes(1);
  //       },
  //       {
  //         timeout: 5000,
  //       }
  //     );
  //   });

  //   expect(args.onHome).toHaveBeenCalledWith(expect.objectContaining({ homeId: args.homeId }));
  //   expect(args.onAllModelLoaded).toHaveBeenCalledTimes(1);
  //   expect(args.onFirstModelLoaded).toHaveBeenCalledTimes(1);
  //   expect(args.onModelLoadProgress).toHaveBeenLastCalledWith(1);

  //   await step('Wait for animation', async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //   });
  // },
} satisfies StoryObj<Args>`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["LoadHomeHookStory"];export{o as LoadHomeHookStory,w as __namedExportsOrder,S as default};
//# sourceMappingURL=loadHomeHook.stories-6cc67f7c.js.map
