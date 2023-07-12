import{j as d}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{u as v}from"./ZEDComponent-126b9559.js";import{u as b}from"./ZedStorybookStyles-5be3d5a8.js";import{A as l}from"./ArgType-e8b100be.js";import{H as y,Z as D}from"./ZedDecorator-5eaa2432.js";import{I}from"./InvokerControl-e69181cb.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const c=["Coffee_Table","Coffee_Table_02","Bed_Chest","Floor_Lamp","Bar_Stool_01","Sofa","Plant_02","TV_Drawer","Art_Frame_01"],S={},C={furniture:c[0],addFurniture:new I("addNewFurniture")},L={title:"Examples/Furniture/가구 추가",decorators:[y({homeId:"TYPE_04",view:"top"}),D],args:C,argTypes:{furniture:l.Select(c),addFurniture:l.Invoke(S,{})}},n={storyName:"가구 추가",render:function(a){const r=v(),t=b(),[i,F]=o.useState(void 0);let s=o.useRef(!1);o.useEffect(()=>{!r||!t||r.furniture.setEnableDraggingMovable(!0)},[r,t]),o.useEffect(()=>{!r||!t||F(a.furniture)},[r,t,a.furniture]);const u=o.useCallback((e=!1,f,T)=>{if(!r||!t)return;const N=t.floorplanIds[0];(async()=>{const m=await r.furniture.addFurniture(t.homeId,N,T??i??c[0]);e&&m&&r.furniture.pickup(m,f)})()},[r,t,i]);return a.addFurniture.useCallback(e=>{u(!1,0,i)}),d.jsx("div",{style:{position:"absolute"},children:d.jsx("div",{style:{display:"flex",background:"white",width:"2em",height:"2em",borderRadius:"50%",fontSize:"2em",alignItems:"center",justifyContent:"center",userSelect:"none",cursor:"pointer",touchAction:"none"},onClick:()=>u(),onTouchEnd:e=>s.current=!1,onTouchMoveCapture:console.log,onTouchMove:e=>{s.current||e.touches.length!==1||document.elementFromPoint(e.touches[0].pageX,e.touches[0].pageY)===e.currentTarget||(s.current=!0,u(!0,e.touches[0].identifier))},onDragStart:e=>{e.preventDefault(),u(!0)},draggable:"true",children:d.jsx("div",{children:"🛏️"})})})}};n.storyName="가구 추가";var g,p,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  storyName: '가구 추가',
  render: function Render(args) {
    const zed = useZed();
    const home = useHome();
    const [targetFurnitureName, setTargetFurnitureNames] = useState<string | undefined>(undefined);
    let isTouchDragging = useRef(false);
    useEffect(() => {
      if (!zed || !home) return;
      zed.furniture.setEnableDraggingMovable(true);
    }, [zed, home]);
    useEffect(() => {
      if (!zed || !home) return;
      setTargetFurnitureNames(args.furniture);
    }, [zed, home, args.furniture]);
    const addFurniture = useCallback((isDragging = false, pointerId?: number, furnitureName?: string) => {
      if (!zed || !home) return;
      const targetFloorplanId = home.floorplanIds[0]; // TODO: 적절한 floorplanId를 사용하거나 배치 할때 지정

      (async () => {
        const transformNode = await zed.furniture.addFurniture(home.homeId, targetFloorplanId, furnitureName ?? targetFurnitureName ?? furnitureNames[0]);
        if (isDragging && transformNode) {
          zed.furniture.pickup(transformNode, pointerId);
        }
      })();
    }, [zed, home, targetFurnitureName]);
    args.addFurniture.useCallback(args => {
      addFurniture(false, 0, targetFurnitureName);
    });
    return <div style={{
      position: 'absolute'
    }}>\r
        <div style={{
        display: 'flex',
        background: 'white',
        width: '2em',
        height: '2em',
        borderRadius: '50%',
        fontSize: '2em',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        touchAction: 'none'
      }} onClick={() => addFurniture()} onTouchEnd={e => isTouchDragging.current = false} onTouchMoveCapture={console.log} onTouchMove={e => {
        if (isTouchDragging.current) return;
        if (e.touches.length !== 1) return;
        const hit = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
        if (hit === e.currentTarget) return;
        isTouchDragging.current = true;
        addFurniture(true, e.touches[0].identifier);
      }} onDragStart={e => {
        e.preventDefault();
        addFurniture(true);
      }} draggable="true">\r
          <div>🛏️</div>\r
        </div>\r
      </div>;
  }
} satisfies StoryObj<Args>`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const V=["AddNewFurnitureStory"];export{n as AddNewFurnitureStory,V as __namedExportsOrder,L as default};
//# sourceMappingURL=addNewFurniture.stories-a0c00913.js.map
