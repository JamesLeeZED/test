class a{static GetCategory(t){return t?{category:t}:void 0}static Category(t){return{table:a.GetCategory(t)}}static Range(t,e,o,r){return{control:{type:"range",min:t,max:e,step:o},table:a.GetCategory(r)}}static Select(t,e){return{options:t,control:{type:"select"},table:a.GetCategory(e)}}static Radio(t,e){return{options:t,control:{type:"radio"},table:a.GetCategory(e)}}static File(t,e){return{control:{type:"file",accept:t},table:a.GetCategory(e)}}static Object(t){return{control:"object",table:a.GetCategory(t)}}static Invoke(t,e,o){return{control:{type:"invoke",args:t,argTypes:t&&e?{...e}:void 0},table:a.GetCategory(o)}}}export{a as A};
//# sourceMappingURL=ArgType-e8b100be.js.map
