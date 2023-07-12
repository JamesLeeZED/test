import{j as N}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{u as C}from"./ZEDComponent-126b9559.js";import{u as f}from"./ZedStorybookStyles-5be3d5a8.js";import{A as _}from"./ArgType-e8b100be.js";import{H as W,Z as u}from"./ZedDecorator-5eaa2432.js";import{I as h}from"./InvokerControl-e69181cb.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const m=["A","B","C","D","ERROR"],F={preset:m[0],saveToCache:new h("saveToCache"),deleteCache:new h("deleteCache")},j={title:"Examples/Graphic/벽, 바닥 재질 변경",decorators:[W({homeId:"TYPE_04",qualitySettings:{modelLOD:"LOD0",textureMaxSize:"2048",reflection:!0},view:"quater"}),u],args:F,argTypes:{preset:_.Select(m),saveToCache:_.Invoke(),deleteCache:_.Invoke()}},l={storyName:"벽, 바닥 재질 변경",render:function({saveToCache:T,deleteCache:g,...o}){const e=C(),t=f(),[d,p]=r.useState(void 0);return r.useEffect(()=>{if(!e||!t)return;const a=e.graphic.getMaterialChangeableInFloorplan(t.floorplanIds[0]);p(a)},[e,t]),r.useEffect(()=>{!e||!t||!d||(async()=>{const a=m.indexOf(o.preset);if(a!==-1&&a<E.length){const i=E[a];for(let n=0;n<i.length;n++){const s=d.find(G=>G.TransformNode.name===i[n].name);s&&await e.graphic.setMaterialChange([s,i[n]])}}})()},[e,t,o.preset]),T.useCallback(a=>{e&&e.saveCache()}),g.useCallback(a=>{e&&e.deleteCache()}),N.jsx(N.Fragment,{})}};l.storyName="벽, 바닥 재질 변경";const E=[[{name:"Living",index:0,materialName:"GEN_Floor_Wood"},{name:"Wall_Living",index:0,materialName:"00_GEN_Wall_Paper"},{name:"Bath",index:0,materialName:"00_GEN_Floor_Tile_Bath_A"},{name:"Bath",index:1,materialName:"00_GEN_Floor_Tile_Bath_B"},{name:"Bed",index:0,materialName:"GEN_Floor_Wood"},{name:"Wall_BedRoom",index:0,materialName:"00_GEN_Wall_Paper"},{name:"Wall_Entrance",index:0,materialName:"00_GEN_Wall_Paper"},{name:"Wall_Bath",index:0,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:1,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:2,materialName:"BAKE_COLOR_ONLYUSEEDITOR"},{name:"Wall_Bath",index:3,materialName:"00_GEN_Metal_Clear"},{name:"Entrance",index:0,materialName:"00_GEN_Floor_Tile"}],[{name:"Living",index:0,materialName:"00_GEN_Floor_Tile_Bath_B"},{name:"Wall_Living",index:0,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Bath",index:0,materialName:"00_GEN_Floor_Tile_Bath_A"},{name:"Bath",index:1,materialName:"00_GEN_Floor_Tile_Bath_B"},{name:"Bed",index:0,materialName:"00_GEN_Floor_Tile_Bath_B"},{name:"Wall_BedRoom",index:0,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Entrance",index:0,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:0,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:1,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:2,materialName:"BAKE_COLOR_ONLYUSEEDITOR"},{name:"Wall_Bath",index:3,materialName:"00_GEN_Metal_Clear"},{name:"Entrance",index:0,materialName:"00_GEN_Floor_Tile"}],[{name:"Living",index:0,materialName:"00_GEN_Floor_Tile_Bath_C"},{name:"Wall_Living",index:0,materialName:"00_GEN_Floor_Tile_Bath_B"},{name:"Bath",index:0,materialName:"00_GEN_Floor_Tile_Bath_A"},{name:"Bath",index:1,materialName:"00_GEN_Floor_Tile_Bath_B"},{name:"Bed",index:0,materialName:"00_GEN_Floor_Tile_Bath_C"},{name:"Wall_BedRoom",index:0,materialName:"00_GEN_Floor_Tile_Bath_A"},{name:"Wall_Entrance",index:0,materialName:"00_GEN_Floor_Tile_Bath_A"},{name:"Wall_Bath",index:0,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:1,materialName:"00_GEN_Wall_Tile_Bath"},{name:"Wall_Bath",index:2,materialName:"BAKE_COLOR_ONLYUSEEDITOR"},{name:"Wall_Bath",index:3,materialName:"00_GEN_Metal_Clear"},{name:"Entrance",index:0,materialName:"00_GEN_Floor_Tile"}],[{name:"Living",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Wall_Living",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Bath",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Bath",index:1,materialName:"00_GEN_Floor_Tile"},{name:"Bed",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Wall_BedRoom",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Wall_Entrance",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Wall_Bath",index:0,materialName:"00_GEN_Floor_Tile"},{name:"Wall_Bath",index:1,materialName:"00_GEN_Floor_Tile"},{name:"Wall_Bath",index:2,materialName:"BAKE_COLOR_ONLYUSEEDITOR"},{name:"Wall_Bath",index:3,materialName:"00_GEN_Metal_Clear"},{name:"Entrance",index:0,materialName:"00_GEN_Floor_Tile"}],[{name:"Living",index:0,materialName:"00_GEN_Floor_Tile_2"},{name:"Wall_Living",index:0,materialName:"00_GEN_Floor_Tile_2"},{name:"Bath",index:0,materialName:"00_GEN_Floor_Tile_2"},{name:"Bath",index:1,materialName:"00_GEN_Floor_Tile_2"},{name:"Bed",index:0,materialName:"00_GEN_Floor_Tile_2"}]];var c,x,B;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  storyName: '벽, 바닥 재질 변경',
  render: function Render({
    saveToCache,
    deleteCache,
    ...args
  }) {
    const zed = useZed();
    const home = useHome();
    const [materialChangeableEntities, setMaterialChangeableEntities] = useState<ZEDSchema['MaterialChangeable'][] | undefined>(undefined);
    useEffect(() => {
      if (!zed || !home) return;
      const materialChangeableEntities = zed.graphic.getMaterialChangeableInFloorplan(home.floorplanIds[0]);
      setMaterialChangeableEntities(materialChangeableEntities);
    }, [zed, home]);
    useEffect(() => {
      if (!zed || !home || !materialChangeableEntities) return;
      (async () => {
        const index = PresetType.indexOf(args.preset);
        if (index !== -1 && index < presets.length) {
          const data = presets[index];
          for (let i = 0; i < data.length; i++) {
            // @ts-ignore
            const entity = materialChangeableEntities.find(e => e.TransformNode.name === data[i].name);
            if (entity) {
              await zed.graphic.setMaterialChange([entity, data[i]]);
            }
          }
        }
      })();
    }, [zed, home, args.preset]);
    saveToCache.useCallback(args => {
      if (!zed) return;
      zed.saveCache();
    });
    deleteCache.useCallback(args => {
      if (!zed) return;
      zed.deleteCache();
    });
    return <></>;
  }
} satisfies StoryObj<Args>`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const H=["ChageMaterial"];export{l as ChageMaterial,H as __namedExportsOrder,j as default};
//# sourceMappingURL=chageMaterial.stories-fe1f9652.js.map
