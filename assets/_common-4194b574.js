import{j as C}from"./jsx-runtime-94f6e698.js";import{r as e}from"./index-8db94870.js";import{Z as D}from"./ZEDComponent-126b9559.js";const d="_wrapper_1mrf8_1",f="_canvas_1mrf8_21",g="_full_1mrf8_33",A="_gui_1mrf8_51",_={wrapper:d,canvas:f,full:g,gui:A},r=e.forwardRef(function({guiComponent:i,onUpdateGUIPosition:n},o){const[u,c]=e.useState(),[p,m]=e.useState();e.useImperativeHandle(o,()=>u??void 0,[u]);const a=e.useCallback((t,B)=>{m(t),n==null||n(t,B)},[n]);e.useEffect(()=>{u&&(async()=>(u.graphic.setEnablePostprocess(!0),u.observer.onAllModelLoaded.addOnce(()=>{u.camera.zoomFitOnInit()}),await u.loadHome("TYPE_04",{modelLOD:"LOD0",textureMaxSize:"512"}),u.observer.onUpdateGUIPosition.add(a)))()},[a,u]);const l=e.memo(i);return C.jsx(D,{ref:c,className:_.full,children:C.jsx(l,{things:p,zed:u})})});try{r.displayName="SampleWrapper",r.__docgenInfo={description:`Devices in Zed environemnt.

You can attach gui on received 3D events for things.

If you attach a callback function through 'zed.observer.onUpdateGUIPosition.add\`, GuiState[] is called as a parameter every render events.

\`\`\`ts
type GuiState = {
  key: string;
  /// thing 이름
  name: string;
  /// 화면 x 좌표
  x: number;
  /// 화면 y 좌표
  y: number;
  /// thing 객체 onCLick() 등 호출 가능
  thing: IThings;
  /// 현재 camera zoom 값에 따라 0~1 사이의 값 반환 min + (max - min) * iconSize로 활용 가능
  iconSize: number;
};
\`\`\``,displayName:"SampleWrapper",props:{guiComponent:{defaultValue:null,description:`onUpdateGUIPosition 이벤트를 받아서 그리는 컴포넌트
@param props.things 각 GUI 요소들의 2D 좌표와 정보
@param zed GUI 컴포넌트에서 조작할 수 있는 ZED 오브젝트`,name:"guiComponent",required:!0,type:{name:"(props: { things?: GuiState[]; zed: any; }) => ReactElement<any, string | JSXElementConstructor<any>>"}},onUpdateGUIPosition:{defaultValue:null,description:`GUI의 2D 좌표가 변경될때마다 호출 되는 이벤트
@param states 각 GUI 요소들의 2D 좌표와 정보
@param eventState 이벤트 상태`,name:"onUpdateGUIPosition",required:!1,type:{name:"(states: GuiState[], eventState: EventState) => void"}}}}}catch{}export{r as S};
//# sourceMappingURL=_common-4194b574.js.map
