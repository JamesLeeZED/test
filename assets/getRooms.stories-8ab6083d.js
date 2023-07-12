import{j as c}from"./jsx-runtime-94f6e698.js";import{a as g}from"./chunk-OPEUWD42-8042112b.js";import{r as w}from"./index-8db94870.js";import{u as j}from"./ZEDComponent-126b9559.js";import{u as T}from"./ZedStorybookStyles-5be3d5a8.js";import{A as m}from"./ArgType-e8b100be.js";import{H as D,Z as O}from"./ZedDecorator-5eaa2432.js";import{I as l}from"./InvokerControl-e69181cb.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const f=["Living","Bed","Bath","Entrance"],z={roomName:f[0]},y={getRooms:new l("getRooms"),getRoomObjects:new l("getRoomObjects"),getRoomThings:new l("getRoomThings"),moveToRoomPosition:new l("moveToRoomPosition")},J={title:"Examples/Home/방 정보 가져오기",decorators:[D({view:"top"}),O],args:y,argTypes:{getRooms:m.Invoke(),getRoomObjects:m.Invoke(),getRoomThings:m.Invoke(),moveToRoomPosition:m.Invoke(z,{roomName:m.Radio(f)})}},a={storyName:"방 정보 가져오기",render:function({getRooms:u,getRoomObjects:I,getRoomThings:h,moveToRoomPosition:b,...k}){const e=j(),n=T();return w.useEffect(()=>{!e||!n||e.furniture.setEnableDraggingMovable(!0)},[e,n]),u.useCallback(i=>{if(!e||!n)return;const s=n.floorplanIds[0],t=e.getRooms(s);t[0].floorplanId,g("rooms")(t),console.log("rooms",t)}),I.useCallback(i=>{if(!e||!n)return;const s=n.floorplanIds[0],t=e.getRooms(s);for(let o=0;o<t.length;o++){const r=e.getRoomObjects(t[o].roomEntityId);g(`objects_${t[o].name}`)(r),console.log(`objects_${t[o].name}`,r)}}),h.useCallback(i=>{if(!e||!n)return;const s=n.floorplanIds[0],t=e.getRooms(s);for(let o=0;o<t.length;o++){const r=e.getRoomObjectsOnlyThing(t[o].roomEntityId);g(`things_${t[o].name}`)(r),console.log(`things_${t[o].name}`,r)}}),b.useCallback(i=>{if(!e||!n)return;const s=n.floorplanIds[0],o=e.getRooms(s).find(v=>v.name===i.roomName);if(!o||!o.viewDataList)return;const r=o.viewDataList[0];r.position,r.rotation,g(`view_${o.name}`)(o.viewDataList),console.log(`view_${o.name}`,o.viewDataList)}),c.jsx(c.Fragment,{})}};a.storyName="방 정보 가져오기";var d,R,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  storyName: '방 정보 가져오기',
  render: function Render({
    getRooms,
    getRoomObjects,
    getRoomThings,
    moveToRoomPosition,
    ...args
  }) {
    const zed = useZed();
    const home = useHome();
    useEffect(() => {
      if (!zed || !home) return;
      zed.furniture.setEnableDraggingMovable(true);
    }, [zed, home]);
    getRooms.useCallback(args => {
      if (!zed || !home) return;

      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];
      // 해당 평면도 Room 정보 가져오기
      const rooms = zed.getRooms(targetFloorplanId);
      rooms[0].floorplanId;
      action('rooms')(rooms);
      console.log('rooms', rooms);
    });
    getRoomObjects.useCallback(args => {
      if (!zed || !home) return;

      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];
      // 해당 평면도 Room 정보 가져오기
      const rooms = zed.getRooms(targetFloorplanId);
      // Room 별 Object 정보 가져오기
      for (let i = 0; i < rooms.length; i++) {
        const roomObjects = zed.getRoomObjects(rooms[i].roomEntityId);
        action(\`objects_\${rooms[i].name}\`)(roomObjects);
        console.log(\`objects_\${rooms[i].name}\`, roomObjects);
      }
    });
    getRoomThings.useCallback(args => {
      if (!zed || !home) return;

      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];
      // 해당 평면도 Room 정보 가져오기
      const rooms = zed.getRooms(targetFloorplanId);
      // Room 별 Object 정보 중 Thing만 가져오기
      for (let i = 0; i < rooms.length; i++) {
        const roomThings = zed.getRoomObjectsOnlyThing(rooms[i].roomEntityId);
        action(\`things_\${rooms[i].name}\`)(roomThings);
        console.log(\`things_\${rooms[i].name}\`, roomThings);
      }
    });
    moveToRoomPosition.useCallback(args => {
      if (!zed || !home) return;

      // 첫번째 평면도 ID 가져오기
      const targetFloorplanId = home.floorplanIds[0];
      // 해당 평면도 Room 정보 가져오기
      const rooms = zed.getRooms(targetFloorplanId);
      const targetRoom = rooms.find(r => r.name === args.roomName);
      if (!targetRoom || !targetRoom.viewDataList) return;
      const roomViewData = targetRoom.viewDataList[0];
      const roomViewPosition = roomViewData.position;
      const roomViewRotation = roomViewData.rotation;

      // moveToCoordinate
      // zed.camera.moveToCoordinate({
      //   position: roomViewPosition,
      //   rotation: roomViewRotation,
      // });

      action(\`view_\${targetRoom.name}\`)(targetRoom.viewDataList);
      console.log(\`view_\${targetRoom.name}\`, targetRoom.viewDataList);
    });
    return <></>;
  }
} satisfies StoryObj<Args>`,...(p=(R=a.parameters)==null?void 0:R.docs)==null?void 0:p.source}}};const K=["GetRoomsStory"];export{a as GetRoomsStory,K as __namedExportsOrder,J as default};
//# sourceMappingURL=getRooms.stories-8ab6083d.js.map
