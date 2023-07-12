import{j as u}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{u as y,T as f}from"./ZEDComponent-126b9559.js";import{u as T}from"./ZedStorybookStyles-5be3d5a8.js";import{H as z,Z as I}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const D={door1:!1,door2:!1,door3:!1,window1:!1,window2:!1},U={title:"Examples/Furniture/문 조작",decorators:[z({view:"top"}),I],args:D},r={storyName:"문 조작",render:function(i){const t=y(),e=T(),[n,h]=s.useState(void 0),[o,m]=s.useState(void 0);return s.useEffect(()=>{if(!t||!e)return;const g=e.floorplanIds[0],d=t.furniture.getThingStateEntitiesInFloorplan(g);if(!d)return;const l=d.filter(a=>a.ThingState.type==f.Door);h(l);const S=d.filter(a=>a.ThingState.type==f.Window);m(S)},[t,e]),s.useEffect(()=>{!t||!e||!n||n.length<1||t.furniture.updateThingState(n[0].entityId,{isOpen:i.door1})},[t,e,n,i.door1]),s.useEffect(()=>{!t||!e||!n||n.length<2||t.furniture.updateThingState(n[1].entityId,{isOpen:i.door2})},[t,e,n,i.door2]),s.useEffect(()=>{!t||!e||!n||n.length<3||t.furniture.updateThingState(n[2].entityId,{isOpen:i.door3})},[t,e,n,i.door3]),s.useEffect(()=>{!t||!e||!o||o.length<1||t.furniture.updateThingState(o[0].entityId,{isOpen:i.window1})},[t,e,o,i.window1]),s.useEffect(()=>{!t||!e||!o||o.length<2||t.furniture.updateThingState(o[1].entityId,{isOpen:i.window2})},[t,e,o,i.window2]),u.jsx(u.Fragment,{})},play:async({args:w,id:i,step:t,canvasElement:e,globals:n})=>{}};r.storyName="문 조작";var p,E,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  storyName: '문 조작',
  render: function Render(args) {
    const zed = useZed();
    const home = useHome();
    const [doorsEntities, setDoorEntities] = useState<ZEDSchema['ThingState'][] | undefined>(undefined);
    const [windowsEntities, setWindowsEntities] = useState<ZEDSchema['ThingState'][] | undefined>(undefined);
    useEffect(() => {
      if (!zed || !home) return;

      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];

      // 해당 평면도의 GUIDisplayable[](컨트롤 가능한 가구 리스트)을 가져와
      const entities = zed.furniture.getThingStateEntitiesInFloorplan(targetFloorplanId);
      if (!entities) return;

      // 그 중 Door(문)과 Window(창문) Type만 필터링해
      // setDoorEntities
      const doorsEntities = entities.filter(entity => entity.ThingState.type == ThingType.Door);
      setDoorEntities(doorsEntities);
      // setWindowsEntities
      const windowsEntities = entities.filter(entity => entity.ThingState.type == ThingType.Window);
      setWindowsEntities(windowsEntities);
    }, [zed, home]);
    useEffect(() => {
      if (!zed || !home || !doorsEntities || doorsEntities.length < 1) return;

      // changeState
      zed.furniture.updateThingState(doorsEntities[0].entityId, {
        isOpen: args.door1
      });
    }, [zed, home, doorsEntities, args.door1]);
    useEffect(() => {
      if (!zed || !home || !doorsEntities || doorsEntities.length < 2) return;

      // changeState
      zed.furniture.updateThingState(doorsEntities[1].entityId, {
        isOpen: args.door2
      });
    }, [zed, home, doorsEntities, args.door2]);
    useEffect(() => {
      if (!zed || !home || !doorsEntities || doorsEntities.length < 3) return;

      // changeState
      zed.furniture.updateThingState(doorsEntities[2].entityId, {
        isOpen: args.door3
      });
    }, [zed, home, doorsEntities, args.door3]);
    useEffect(() => {
      if (!zed || !home || !windowsEntities || windowsEntities.length < 1) return;

      // changeState
      zed.furniture.updateThingState(windowsEntities[0].entityId, {
        isOpen: args.window1
      });
    }, [zed, home, windowsEntities, args.window1]);
    useEffect(() => {
      if (!zed || !home || !windowsEntities || windowsEntities.length < 2) return;

      // changeState
      zed.furniture.updateThingState(windowsEntities[1].entityId, {
        isOpen: args.window2
      });
    }, [zed, home, windowsEntities, args.window2]);
    return <></>;
  },
  play: async ({
    args,
    id,
    step,
    canvasElement,
    globals
  }) => {}
} satisfies StoryObj<Args>`,...(c=(E=r.parameters)==null?void 0:E.docs)==null?void 0:c.source}}};const k=["SetDoorStateStory"];export{r as SetDoorStateStory,k as __namedExportsOrder,U as default};
//# sourceMappingURL=setDoorStateStory.stories-196c8c26.js.map
