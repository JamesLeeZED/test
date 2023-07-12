import{j as e}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{S as f}from"./_common-4194b574.js";import"./_commonjsHelpers-042e6b4d.js";import"./ZEDComponent-126b9559.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";const o={storyName:"콜아웃 GUI 예시",args:{guiComponent:function({things:a}){const m=s.memo(function({g:t,i:p}){const r=s.useRef(null),[i,y]=s.useState();s.useEffect(()=>{if(!r.current)return;const n=r.current.getBBox();y({x:n.x+n.width+8,y:n.y+n.height*.5})},[r]);const d=t.iconSize*8;return e.jsxs("g",{"data-testid":"gui",children:[e.jsx("text",{ref:r,x:8,y:32+p*16,children:t.name}),i&&e.jsx("line",{x1:i.x,y1:i.y,x2:t.x,y2:t.y,stroke:"black"}),e.jsx("circle",{cx:t.x,cy:t.y,r:d})]})});return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",width:"100%",height:"100%",pointerEvents:"none"},children:a==null?void 0:a.map((c,t)=>e.jsx(m,{g:c,i:t},c.key))})}}};o.storyName="콜아웃 GUI 예시";const k={title:"Examples/Gui/콜아웃 GUI 예시",component:f,parameters:{controls:{exclude:["apiFunction","className","ref","style","key"]}}};var x,l,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  storyName: '콜아웃 GUI 예시',
  args: {
    guiComponent: function CalloutSample({
      things
    }) {
      const leftPad = 8;
      const topPad = 32;
      const textSpacing = 16;
      const Callout = memo(function Callout({
        g,
        i
      }: {
        g: GuiState;
        i: number;
      }) {
        const textRef = useRef<SVGTextElement>(null);
        const [textAnchor, setTextAnchor] = useState<{
          x: number;
          y: number;
        }>();
        useEffect(() => {
          if (!textRef.current) return;
          const bbox = textRef.current.getBBox();
          setTextAnchor({
            x: bbox.x + bbox.width + leftPad,
            y: bbox.y + bbox.height * 0.5
          });
        }, [textRef]);
        const radius = g.iconSize * 8;
        return <g data-testid="gui">\r
            <text ref={textRef} x={leftPad} y={topPad + i * textSpacing}>\r
              {g.name}\r
            </text>\r
            {textAnchor && <line x1={textAnchor.x} y1={textAnchor.y} x2={g.x} y2={g.y} stroke="black" />}\r
            <circle cx={g.x} cy={g.y} r={radius} />\r
          </g>;
      });
      return <svg xmlns="http://www.w3.org/2000/svg" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>\r
          {things?.map((g, i) => <Callout key={g.key} g={g} i={i} />)}\r
        </svg>;
    }
  }
  // play: async (context) => {
  //   await OnUpdateGUIPosition.play(context);
  // },
} satisfies Story`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const A=["CustomCallout"];export{o as CustomCallout,A as __namedExportsOrder,k as default};
//# sourceMappingURL=calloutGui.stories-5e2909f2.js.map
