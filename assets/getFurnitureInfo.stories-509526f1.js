import{j as d}from"./jsx-runtime-94f6e698.js";import{a as S}from"./chunk-OPEUWD42-8042112b.js";import{u as b,T as e}from"./ZEDComponent-126b9559.js";import{u as k}from"./ZedStorybookStyles-5be3d5a8.js";import{A as f}from"./ArgType-e8b100be.js";import{H as F,Z as O}from"./ZedDecorator-5eaa2432.js";import{I as w}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const i=["floo1","floor2"],E={targetFloorId:i[0]},L={getList:new w("getList")},P={title:"Examples/Furniture/평면도 가구 목록 조회",decorators:[F({view:"top"}),O],args:L,argTypes:{getList:f.Invoke(E,{targetFloorId:f.Radio(i)})}},r={storyName:"평면도 가구 목록 조회",render:function({getList:T,...C}){const a=b(),n=k();return T.useCallback(p=>{if(!a||!n)return;let s=[];if(p.targetFloorId==i[0]&&n.floorplanIds.length>0?s=a.furniture.getThingStateEntitiesInFloorplan(n.floorplanIds[0]):p.targetFloorId==i[1]&&n.floorplanIds.length>1&&(s=a.furniture.getThingStateEntitiesInFloorplan(n.floorplanIds[1])),s){let g=[];s.forEach(l=>{const y=l.entityId.substring(0,8),c=l.ThingState.type,I=e[c],o=l.ThingState.state;let t="";switch(c){case e.Light:t="light "+o.isOn?"on":"off";break;case e.AirConditioner:t="airConditioner "+o.isOn?"on":"off";break;case e.Boiler:t="boiler "+o.isOn?"on":"off";break;case e.Door:t="door "+o.isOpen?"open":"close";break;case e.Window:t="window "+o.isOpen?"open":"close";break}const x=`id : ${y}... / type : ${I} / name : ${name} / state : ${t}`;g.push(x)}),S("furnitureState")(g)}}),d.jsx(d.Fragment,{})}};r.storyName="평면도 가구 목록 조회";var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  storyName: '평면도 가구 목록 조회',
  render: function Render({
    getList,
    ...args
  }) {
    const zed = useZed();
    const home = useHome();
    getList.useCallback(args => {
      if (!zed || !home) return;
      let entities: ZEDSchema['ThingState'][] = [];
      if (args.targetFloorId == floors[0] && home.floorplanIds.length > 0) {
        entities = zed.furniture.getThingStateEntitiesInFloorplan(home.floorplanIds[0]);
      } else if (args.targetFloorId == floors[1] && home.floorplanIds.length > 1) {
        entities = zed.furniture.getThingStateEntitiesInFloorplan(home.floorplanIds[1]);
      }
      if (entities) {
        let texts: string[] = [];
        entities.forEach(entity => {
          const id = entity.entityId.substring(0, 8);
          const type = entity.ThingState.type;
          const typeText = ThingType[type];
          const state = entity.ThingState.state;
          let stateText = '';
          switch (type) {
            case ThingType.Light:
              stateText = 'light ' + (state as LightState).isOn ? 'on' : 'off';
              break;
            case ThingType.AirConditioner:
              stateText = 'airConditioner ' + (state as AirConditionerState).isOn ? 'on' : 'off';
              break;
            case ThingType.Boiler:
              stateText = 'boiler ' + (state as BoilerState).isOn ? 'on' : 'off';
              break;
            case ThingType.Door:
              stateText = 'door ' + (state as DoorState).isOpen ? 'open' : 'close';
              break;
            case ThingType.Window:
              stateText = 'window ' + (state as WindowState).isOpen ? 'open' : 'close';
              break;
          }
          const text = \`id : \${id}... / type : \${typeText} / name : \${name} / state : \${stateText}\`;
          texts.push(text);
        });
        action('furnitureState')(texts);
      }
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  // },
} satisfies StoryObj<Args>`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const Q=["GetFurnitureInfoStory"];export{r as GetFurnitureInfoStory,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=getFurnitureInfo.stories-509526f1.js.map
