import{j as l}from"./jsx-runtime-94f6e698.js";import{V as b,A as C}from"./glTFMaterialsCommonExtension-1bf2ca18.js";import{r as i}from"./index-8db94870.js";import{u as _}from"./ZEDComponent-126b9559.js";import{u as y}from"./ZedStorybookStyles-5be3d5a8.js";import{A as a}from"./ArgType-e8b100be.js";import{H as z,Z as I}from"./ZedDecorator-5eaa2432.js";import{I as u}from"./InvokerControl-e69181cb.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const{useArgs:A}=__STORYBOOK_MODULE_CLIENT_API__,E=["-","Coffee_Table","Sofa","Floor_Lamp","Art_Frame_01","Art_Frame_02","Art_Frame_03","Bed","Bed_Chest","Plant_02","Carpet_Living","TV_Drawer","Carpet_ENT","Carpet_Bath","Bar_Stool_01","Bar_Stool_02","Chair_Desk","Air_Purifier","Wall_Pad"],Y={draggingMovable:!0,target:E[0],posX:0,posY:0,posZ:0,rotY:0,saveToCache:new u("saveToCache"),deleteCache:new u("deleteCache")},F=function(d,f){const[e,t]=A(),n=i.useCallback(o=>{t({posX:-o.position.x,posY:o.position.y,posZ:o.position.z,rotY:C.FromRadians(o.rotation.y).degrees()})},[t]);return l.jsx(d,{...f,args:{...e,onTargetChange:n}})},P={title:"Examples/Furniture/가구 이동",decorators:[z({view:"top"}),I,F],args:Y,argTypes:{target:a.Select(E),posX:a.Range(-3,3,.01),posY:a.Range(0,2.4,.01),posZ:a.Range(-3,3,.01),rotY:a.Range(0,360,1),saveToCache:a.Invoke(),deleteCache:a.Invoke()}},m={storyName:"가구 이동",render:function({saveToCache:d,deleteCache:f,...e}){const t=_(),n=y(),[o,h]=i.useState(void 0);return i.useEffect(()=>{if(!t||!n)return;const r=n.floorplanIds[0],s=t.furniture.getMovableTransformEntitiesInFloorplan(r);h(s)},[t,n]),i.useEffect(()=>{!t||!n||t.furniture.setEnableDraggingMovable(e.draggingMovable)},[t,n,e.draggingMovable]),i.useEffect(()=>{var s;if(!t||!n||!o)return;const r=o.find(T=>T.TransformNode.name===e.target);r?(t.furniture.setTransfromGizmo(r.TransformNode),(s=e.onTargetChange)==null||s.call(e,r==null?void 0:r.TransformNode)):t.furniture.setTransfromGizmo(void 0)},[t,n,o,e.target,e.onTargetChange]),i.useEffect(()=>{if(!t||!n||!o)return;const r=o.find(s=>s.TransformNode.name===e.target);r&&t.furniture.updateTransform(r.entityId,new b(e.posX,e.posY,e.posZ),e.rotY)},[t,n,o,e.posX,e.posY,e.posZ,e.rotY,e.target]),d.useCallback(r=>{t&&t.saveCache()}),f.useCallback(r=>{t&&t.deleteCache()}),l.jsx(l.Fragment,{})}};m.storyName="가구 이동";var g,c,p;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  storyName: '가구 이동',
  render: function Render({
    saveToCache,
    deleteCache,
    ...args
  }) {
    const zed = useZed();
    const home = useHome();
    const [movableEntities, setMovableEntities] = useState<ZEDSchema['MovableTransform'][] | undefined>(undefined);
    useEffect(() => {
      if (!zed || !home) return;

      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];

      // 움직일 수 있는 가구 목록 가져오기
      const movableEntities = zed.furniture.getMovableTransformEntitiesInFloorplan(targetFloorplanId);
      setMovableEntities(movableEntities);
    }, [zed, home]);
    useEffect(() => {
      if (!zed || !home) return;
      zed.furniture.setEnableDraggingMovable(args.draggingMovable);
    }, [zed, home, args.draggingMovable]);
    useEffect(() => {
      if (!zed || !home || !movableEntities) return;
      const targetEntity = movableEntities.find(entity => entity.TransformNode.name === args.target);
      if (targetEntity) {
        zed.furniture.setTransfromGizmo(targetEntity.TransformNode);
        args.onTargetChange?.(targetEntity?.TransformNode);
      } else {
        zed.furniture.setTransfromGizmo(undefined);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zed, home, movableEntities, args.target, args.onTargetChange]);
    useEffect(() => {
      if (!zed || !home || !movableEntities) return;
      const targetEntity = movableEntities.find(entity => entity.TransformNode.name === args.target);
      if (targetEntity) {
        zed.furniture.updateTransform(targetEntity.entityId, new Vector3(args.posX, args.posY, args.posZ), args.rotY);
      }
    }, [zed, home, movableEntities, args.posX, args.posY, args.posZ, args.rotY, args.target]);
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
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(p=(c=m.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const V=["SetTransformStory"];export{m as SetTransformStory,V as __namedExportsOrder,P as default};
//# sourceMappingURL=setTransform.stories-5c7c0e43.js.map
