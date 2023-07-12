import{j as u}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{c as f,E as y,u as S,T,M as z}from"./ZEDComponent-126b9559.js";import{u as F}from"./ZedStorybookStyles-5be3d5a8.js";import{g as I,a as M}from"./AnimationArgs-470ea978.js";import{A as o}from"./ArgType-e8b100be.js";import{H as O,Z as L}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const A={light1:!0,intensity1:1,light2:!0,intensity2:1,light3:!0,intensity3:1,light4:!0,intensity4:1,...I(.6,y.QuarticEase,f.Out)},q={title:"Examples/Furniture/조명 조작",decorators:[O({view:"top"}),L],args:A,argTypes:{intensity1:o.Range(0,1,.05),intensity2:o.Range(0,1,.05),intensity3:o.Range(0,1,.05),intensity4:o.Range(0,1,.05),...M}},r={storyName:"조명 조작",render:function(t){const n=S(),i=F(),[e,p]=s.useState(void 0);return s.useEffect(()=>{if(!n||!i)return;n.furniture.setEnableDraggingMovable(!0);const g=i.floorplanIds[0],a=n.furniture.getThingStateEntitiesInFloorplan(g);if(!a)return;const m=a.filter(E=>E.ThingState.type==T.Light);p(m)},[n,i]),s.useEffect(()=>{if(!n||!i)return;const g=y[t.easingFunction],a=f[t.easingMode];z.instance.setRoomLightAnimationOption(t.seconds,g,a)},[n,i,t.seconds,t.easingFunction,,t.easingMode]),s.useEffect(()=>{!n||!i||!e||e.length<1||n.furniture.updateThingState(e[0].entityId,{isOn:t.light1,intensity:t.intensity1})},[n,i,e,t.light1,t.intensity1]),s.useEffect(()=>{!n||!i||!e||e.length<2||n.furniture.updateThingState(e[1].entityId,{isOn:t.light2,intensity:t.intensity2})},[n,i,e,t.light2,t.intensity2]),s.useEffect(()=>{!n||!i||!e||e.length<3||n.furniture.updateThingState(e[2].entityId,{isOn:t.light3,intensity:t.intensity3})},[n,i,e,t.light3,t.intensity3]),s.useEffect(()=>{!n||!i||!e||e.length<4||n.furniture.updateThingState(e[3].entityId,{isOn:t.light4,intensity:t.intensity4})},[n,i,e,t.light4,t.intensity4]),u.jsx(u.Fragment,{})},play:async({args:c,id:t,step:n,canvasElement:i,globals:e})=>{}};r.storyName="조명 조작";var h,l,d;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  storyName: '조명 조작',
  render: function Render(args) {
    const zed = useZed();
    const home = useHome();
    const [lightEntities, setLightEntities] = useState<ZEDSchema['ThingState'][] | undefined>(undefined);
    useEffect(() => {
      if (!zed || !home) return;
      zed.furniture.setEnableDraggingMovable(true);
      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];
      // 해당 평면도의 GUIDisplayable[](컨트롤 가능한 가구 리스트)을 가져와
      const entities = zed.furniture.getThingStateEntitiesInFloorplan(targetFloorplanId);
      if (!entities) return;

      // 그 중 Light(조명) Type만 필터링해 setLightEntities
      const lightEntities = entities.filter(entity => entity.ThingState.type == ThingType.Light);
      setLightEntities(lightEntities);
    }, [zed, home]);
    useEffect(() => {
      if (!zed || !home) return;
      const easingFuntion = EasingFunctionType[(args.easingFunction as keyof typeof EasingFunctionType)];
      const easingMode = EasingModeType[(args.easingMode as keyof typeof EasingModeType)];
      MaterialPluginManager.instance.setRoomLightAnimationOption(args.seconds, easingFuntion, easingMode);
    }, [zed, home, args.seconds, args.easingFunction,, args.easingMode]);
    useEffect(() => {
      if (!zed || !home || !lightEntities || lightEntities.length < 1) return;

      // changeState
      zed.furniture.updateThingState(lightEntities[0].entityId, {
        isOn: args.light1,
        intensity: args.intensity1
      });
    }, [zed, home, lightEntities, args.light1, args.intensity1]);
    useEffect(() => {
      if (!zed || !home || !lightEntities || lightEntities.length < 2) return;

      // changeState
      zed.furniture.updateThingState(lightEntities[1].entityId, {
        isOn: args.light2,
        intensity: args.intensity2
      });
    }, [zed, home, lightEntities, args.light2, args.intensity2]);
    useEffect(() => {
      if (!zed || !home || !lightEntities || lightEntities.length < 3) return;

      // changeState
      zed.furniture.updateThingState(lightEntities[2].entityId, {
        isOn: args.light3,
        intensity: args.intensity3
      });
    }, [zed, home, lightEntities, args.light3, args.intensity3]);
    useEffect(() => {
      if (!zed || !home || !lightEntities || lightEntities.length < 4) return;

      // changeState
      zed.furniture.updateThingState(lightEntities[3].entityId, {
        isOn: args.light4,
        intensity: args.intensity4
      });
    }, [zed, home, lightEntities, args.light4, args.intensity4]);
    return <></>;
  },
  play: async ({
    args,
    id,
    step,
    canvasElement,
    globals
  }) => {}
} satisfies StoryObj<Args>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const B=["SetLightStateStory"];export{r as SetLightStateStory,B as __namedExportsOrder,q as default};
//# sourceMappingURL=setLightState.stories-81b9f343.js.map
