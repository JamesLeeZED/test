import{j as s}from"./jsx-runtime-94f6e698.js";import{S as m}from"./_common-4194b574.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ZEDComponent-126b9559.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";const e={storyName:"2D GUI 좌표 이벤트",args:{guiComponent:({things:a})=>s.jsx("ul",{children:a==null?void 0:a.map(t=>s.jsx("li",{"data-testid":"gui",children:JSON.stringify({name:t.name,x:t.x,y:t.y,iconSize:t.iconSize})},t.key))})}};e.storyName="2D GUI 좌표 이벤트";const x={title:"Examples/Gui/2D GUI 좌표 이벤트",component:m,parameters:{options:{selectedPanel:"storybook/actions/panel"},controls:{exclude:["apiFunction","className","ref","style","key"]}}};var i,o,r,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  storyName: '2D GUI 좌표 이벤트',
  args: {
    guiComponent: ({
      things
    }) => <ul>\r
        {things?.map(g => <li key={g.key} data-testid="gui">\r
            {JSON.stringify({
          name: g.name,
          x: g.x,
          y: g.y,
          iconSize: g.iconSize
        })}\r
          </li>)}\r
      </ul>
  }
  // play: async ({ args, canvasElement, step }) => {
  //   const canvas = within(canvasElement);
  //   await step('Wait for gui to display', async () => {
  //     const guis = await canvas.findAllByTestId('gui', undefined, {
  //       timeout: 10000,
  //     });
  //     await new Promise((resolve) => setTimeout(resolve, 1000)); // FIXME: wait for proper ready event
  //   });
  // },
} satisfies Story`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source},description:{story:"Example of print GuiState[]",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.description}}};const f=["OnUpdateGUIPosition"];export{e as OnUpdateGUIPosition,f as __namedExportsOrder,x as default};
//# sourceMappingURL=onUpdateGUIPosition.stories-a3502c04.js.map
