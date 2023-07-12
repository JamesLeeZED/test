import{j as n}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{S as m}from"./_common-4194b574.js";import{BasicGui as h}from"./basicGui.stories-5a86ceb7.js";import{OnUpdateGUIPosition as w}from"./onUpdateGUIPosition.stories-a3502c04.js";import"./_commonjsHelpers-042e6b4d.js";import"./ZEDComponent-126b9559.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";const r={storyName:"화면 맞춤 예시",render:function(x){const t=o.useRef(),d=o.useCallback(()=>{var e;(e=t.current)==null||e.camera.setViewport({x:.5,y:.5,width:.5,height:.5})},[t]),l=o.useCallback(()=>{var e;(e=t.current)==null||e.camera.setViewport({x:Math.random()*.5,y:Math.random()*.5,width:Math.random()*.5+.5,height:Math.random()*.5+.5})},[t]),u=o.useCallback(()=>{var e;(e=t.current)==null||e.camera.setViewport({x:0,y:0,width:1,height:1})},[t]);return n.jsxs(n.Fragment,{children:[n.jsx(m,{ref:t,guiComponent:h.args.guiComponent,onUpdateGUIPosition:w.args.onUpdateGUIPosition}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("button",{onClick:d,children:"Resize"}),n.jsx("button",{onClick:l,children:"Randomize"}),n.jsx("button",{onClick:u,children:"Reset"})]})]})}};r.storyName="화면 맞춤 확인";const G={title:"Examples/Gui/화면 맞춤 확인",component:m,parameters:{options:{selectedPanel:"storybook/interactions/panel"},controls:{exclude:["apiFunction","className","ref","style","key"]}}};var i,s,a,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  storyName: '화면 맞춤 예시',
  render: function ViewportGUITester(args) {
    const zed = useRef<ZED>();
    const resizeViewport = useCallback(() => {
      zed.current?.camera.setViewport({
        x: 0.5,
        y: 0.5,
        width: 0.5,
        height: 0.5
      });
    }, [zed]);
    const randomizeViewport = useCallback(() => {
      zed.current?.camera.setViewport({
        x: Math.random() * 0.5,
        y: Math.random() * 0.5,
        width: Math.random() * 0.5 + 0.5,
        height: Math.random() * 0.5 + 0.5
      });
    }, [zed]);
    const resetViewport = useCallback(() => {
      zed.current?.camera.setViewport({
        x: 0,
        y: 0,
        width: 1,
        height: 1
      });
    }, [zed]);
    return <>\r
        <SampleWrapper ref={zed} guiComponent={BasicGui.args.guiComponent} onUpdateGUIPosition={OnUpdateGUIPosition.args.onUpdateGUIPosition} />\r
        <div style={{
        position: 'relative'
      }}>\r
          <button onClick={resizeViewport}>Resize</button>\r
          <button onClick={randomizeViewport}>Randomize</button>\r
          <button onClick={resetViewport}>Reset</button>\r
        </div>\r
      </>;
  }
  // play: async ({ canvasElement, ...rest }) => {
  //   await OnUpdateGUIPosition.play({ canvasElement, ...rest });

  //   const canvas = within(canvasElement);

  //   userEvent.click(canvas.getByText('Resize'));
  // },
} satisfies Story`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source},description:{story:"Scene to test if viewport breaks gui position",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};const v=["ViewportGUITester"];export{r as ViewportGUITester,v as __namedExportsOrder,G as default};
//# sourceMappingURL=viewportGui.stories-d91ab9cb.js.map
