import{j as r}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{T as a}from"./ZEDComponent-126b9559.js";import{S as y}from"./_common-4194b574.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";const t={storyName:"기본 GUI 예시",args:{guiComponent:function({things:s,zed:i}){const l=u.memo(function({g:e}){const h=u.useCallback(()=>{if(!i||!e.thingState)return;const n=e.thingState;switch(e.thingType){case a.AirConditioner:i.furniture.updateThingState(e.key,{isOn:!(n!=null&&n.isOn)});break;case a.Boiler:i.furniture.updateThingState(e.key,{isOn:!(n!=null&&n.isOn)});break;case a.Door:i.furniture.updateThingState(e.key,{isOpen:!(n!=null&&n.isOpen)});break;case a.Light:i.furniture.updateThingState(e.key,{isOn:!(n!=null&&n.isOn)});break;default:console.error(`unimplemented thing type: ${e.thingType}`);break}},[e.key,e.thingType,e.thingState]);return r.jsx("div",{onClick:h,style:{position:"absolute",left:e.x,top:e.y,scale:e.iconSize,padding:"0.5em",borderRadius:"0.5em",background:"white",translate:"-50%",userSelect:"none",cursor:"pointer"},"data-testid":"gui",children:r.jsx("div",{children:e.name})})});return r.jsx("div",{children:s==null?void 0:s.map(o=>r.jsx(l,{g:o},o.key))})}}};t.storyName="기본 GUI 예시";const x={title:"Examples/Gui/기본 GUI 예시",component:y,parameters:{controls:{exclude:["apiFunction","className","ref","style","key"]}}};var p,c,d,g,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  storyName: '기본 GUI 예시',
  args: {
    guiComponent: function ThingGuis({
      things,
      zed
    }) {
      const ThingGui = memo(function ThingGui({
        g
      }: {
        g: GuiState;
      }) {
        const setFurnitureState = useCallback(() => {
          if (!zed || !g.thingState) return;
          const thingState = g.thingState;
          switch (g.thingType) {
            case ThingType.AirConditioner:
              zed.furniture.updateThingState(g.key, ({
                isOn: !(thingState as AirConditionerState)?.isOn
              } as AirConditionerState));
              break;
            case ThingType.Boiler:
              zed.furniture.updateThingState(g.key, ({
                isOn: !(thingState as BoilerState)?.isOn
              } as BoilerState));
              break;
            case ThingType.Door:
              zed.furniture.updateThingState(g.key, ({
                isOpen: !(thingState as DoorState)?.isOpen
              } as DoorState));
              break;
            case ThingType.Light:
              zed.furniture.updateThingState(g.key, ({
                isOn: !(thingState as LightState)?.isOn
              } as LightState));
              break;
            default:
              console.error(\`unimplemented thing type: \${g.thingType}\`);
              break;
          }
        }, [g.key, g.thingType, g.thingState]);
        return <div onClick={setFurnitureState} style={{
          position: 'absolute',
          left: g.x,
          top: g.y,
          scale: g.iconSize,
          padding: '0.5em',
          borderRadius: '0.5em',
          background: 'white',
          translate: '-50%',
          userSelect: 'none',
          cursor: 'pointer'
        }} data-testid="gui">\r
            <div>{g.name}</div>\r
          </div>;
      });
      return <div>\r
          {things?.map(g => <ThingGui key={g.key} g={g} />)}\r
        </div>;
    }
  }
  // play: async (context) => {
  //   await OnUpdateGUIPosition.play(context);
  // },
} satisfies Story`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"Example of Basic gui\r\n\n#### Centering\r\n\nIt is recommended to style `translate: '-50%'` to center element\r\n\n#### Change State\r\n\nPlease use `GuiState.key` to `ZEDFurnitureApi.changeState`'s `entityId`",...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};const C=["BasicGui"];export{t as BasicGui,C as __namedExportsOrder,x as default};
//# sourceMappingURL=basicGui.stories-5a86ceb7.js.map
