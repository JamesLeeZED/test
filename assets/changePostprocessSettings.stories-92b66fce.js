import{j as h}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{u as b}from"./ZEDComponent-126b9559.js";import{u as S}from"./ZedStorybookStyles-5be3d5a8.js";import{A as t}from"./ArgType-e8b100be.js";import{I as A,H as C,Z as T}from"./ZedDecorator-5eaa2432.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./gui3DManager-0cfa6e39.js";const{useArgs:v}=__STORYBOOK_MODULE_CLIENT_API__,g=["Hable","HejiDawson","Photographic","Reinhard"],p=["Low","Medium","High"],L={enable:!0,useMSAA:!0,useFXAA:!0,useToneMapping:!0,toneMappingType:g[0],contrast:1,expoure:1,useColorGrading:!1,lutTextureURL:"",lutTexturePNG:void 0,lutLocalFilePath:"",useColorCurve:!1,colorCurveSettings:{globalDensity:0,globalExposure:0,globalHue:30,globalSaturation:0,highlightsDensity:0,highlightsExposure:0,highlightsHue:30,highlightsSaturation:0,midtonesDensity:0,midtonesExposure:0,midtonesHue:30,midtonesSaturation:0,shadowsDensity:0,shadowsExposure:0,shadowsHue:30,shadowsSaturation:0},useBloom:!1,bloomKernel:64,bloomScale:.5,bloomThreshold:.9,bloomWeight:.15,useDepthOfField:!1,blurLevel:p[0],fStop:1.4,focalLength:50,focusDistance:2e3,lensSize:50,useSharpen:!1,edgeAmount:.3,colorAmount:1,useChromaticAberration:!1,aberrationAmount:30,useVignette:!0,vignetteWeight:1,useMotionBlur:!1,motionStrength:1,saveToJson:!1,loadFromJson:void 0},x=function(e,r){const[s,a]=v(),n=i.useCallback((l,o)=>{a({enable:l,useMSAA:o.useMSAA,useFXAA:o.useFXAA,useToneMapping:o.useToneMapping,toneMappingType:o.toneMappingType?g[o.toneMappingType]:g[0],contrast:o.contrast,expoure:o.expoure,useColorGrading:o.useColorGrading,useVignette:o.useVignette,vignetteWeight:o.vignetteWeight,useColorCurve:o.useColorCurve,colorCurveSettings:o.colorCurveSettings,useSharpen:o.useSharpen,edgeAmount:o.edgeAmount,colorAmount:o.colorAmount,useChromaticAberration:o.useChromaticAberration,aberrationAmount:o.aberrationAmount,useBloom:o.useBloom,bloomKernel:o.bloomKernel,bloomScale:o.bloomScale,bloomThreshold:o.bloomThreshold,bloomWeight:o.bloomWeight,useDepthOfField:o.useDepthOfField,blurLevel:o.blurLevel?p[o.blurLevel]:p[0],fStop:o.fStop,focalLength:o.focalLength,focusDistance:o.focusDistance,lensSize:o.lensSize,useMotionBlur:o.useMotionBlur,motionStrength:o.motionStrength,saveToJson:!1,loadFromJson:void 0})},[a]);return h.jsx(e,{...r,args:{...s,onTargetChange:n}})},H={title:"Examples/Graphic/포스트 프로세스 조절",decorators:[A(),C({homeId:"TYPE_04",qualitySettings:{modelLOD:"LOD0",textureMaxSize:"2048",reflection:!0},view:"top"}),T,x],args:L,argTypes:{saveToJson:t.Category("Save & Load"),loadFromJson:t.File(".json","Save & Load"),useMSAA:t.Category("Anti Aliasing"),useFXAA:t.Category("Anti Aliasing"),useToneMapping:t.Category("Image Process"),toneMappingType:t.Select(g,"Image Process"),contrast:t.Range(0,4,.01,"Image Process"),expoure:t.Range(0,4,.01,"Image Process"),useColorGrading:t.Category("Image Process"),lutTextureURL:t.Category("Image Process"),lutTexturePNG:t.File(".png","Image Process"),lutLocalFilePath:t.Category("Image Process"),useColorCurve:t.Category("Color Curve"),colorCurveSettings:t.Object("Color Curve"),useBloom:t.Category("Bloom"),bloomKernel:t.Range(1,500,1,"Bloom"),bloomScale:t.Range(0,1,.1,"Bloom"),bloomThreshold:t.Range(0,1,.1,"Bloom"),bloomWeight:t.Range(0,1,.1,"Bloom"),useDepthOfField:t.Category("Depth Of Field"),blurLevel:t.Select(p,"Depth Of Field"),fStop:t.Range(1,10,.01,"Depth Of Field"),focalLength:t.Range(1,300,.01,"Depth Of Field"),focusDistance:t.Range(1,5e3,.01,"Depth Of Field"),lensSize:t.Range(1,500,.01,"Depth Of Field"),useSharpen:t.Category("Sharpen"),edgeAmount:t.Range(0,2,.01,"Sharpen"),colorAmount:t.Range(0,1,.01,"Sharpen"),useChromaticAberration:t.Category("Chromatic Aberration"),aberrationAmount:t.Range(-100,100,1,"Chromatic Aberration"),useVignette:t.Category("Vignette"),vignetteWeight:t.Range(0,10,.01,"Vignette"),useMotionBlur:t.Category("Motion Blur"),motionStrength:t.Range(0,10,.01,"Motion Blur")}},c={storyName:"포스트 프로세스 조절",render:function(e){const r=b(),s=S();i.useEffect(()=>{var n;!r||!s||(n=e.onTargetChange)==null||n.call(e,!0,r.graphic.currentPostprocessSettings)},[r,s,e.onTargetChange]),i.useEffect(()=>{if(!(!r||!s))if(e.enable)if(e.lutTexturePNG)F(e.lutTexturePNG).then(n=>{const l=a();l.lutTexture=n,l.lutIsBlob=!0,r.graphic.setEnablePostprocess(!0,l)});else{const n=a();n.lutTexture=e.lutTextureURL,n.lutIsBlob=void 0,r.graphic.setEnablePostprocess(!0,n)}else r.graphic.setEnablePostprocess(!1)},[r,s,e.enable,e.useMSAA,e.useFXAA,e.useToneMapping,e.toneMappingType,e.contrast,e.expoure,e.useColorGrading,e.lutTextureURL,e.lutTexturePNG,e.useVignette,e.vignetteWeight,e.useColorCurve,e.colorCurveSettings,e.useBloom,e.bloomKernel,e.bloomScale,e.bloomThreshold,e.bloomWeight,e.useDepthOfField,e.blurLevel,e.fStop,e.focalLength,e.focusDistance,e.lensSize,e.useSharpen,e.edgeAmount,e.colorAmount,e.useChromaticAberration,e.aberrationAmount,e.useMotionBlur,e.motionStrength]),i.useEffect(()=>{if(!(!r||!s)&&e.saveToJson){const n=a();e.lutLocalFilePath!==""&&(e.lutLocalFilePath.toLocaleLowerCase().endsWith("png")||e.lutLocalFilePath.toLocaleLowerCase().endsWith("3dl"))&&(n.lutTexture=`/assets/data/${e.lutLocalFilePath}`),P(n,`PostProessSettings_${new Date().toLocaleString()}.json`)}},[r,s,e.saveToJson]),i.useEffect(()=>{!r||!s||e.loadFromJson&&D(e.loadFromJson).then(n=>{var o;const l=n;(o=e.onTargetChange)==null||o.call(e,!0,l),r.graphic.setEnablePostprocess(!0,l)})},[r,s,e.loadFromJson]);const a=()=>({useMSAA:e.useMSAA,useFXAA:e.useFXAA,useToneMapping:e.useToneMapping,toneMappingType:g.indexOf(e.toneMappingType),contrast:e.contrast,expoure:e.expoure,useColorGrading:e.useColorGrading,useColorCurve:e.useColorCurve,colorCurveSettings:e.colorCurveSettings,useBloom:e.useBloom,bloomKernel:e.bloomKernel,bloomScale:e.bloomScale,bloomThreshold:e.bloomThreshold,bloomWeight:e.bloomWeight,useDepthOfField:e.useDepthOfField,blurLevel:p.indexOf(e.blurLevel),fStop:e.fStop,focalLength:e.focalLength,focusDistance:e.focusDistance,lensSize:e.lensSize,useSharpen:e.useSharpen,edgeAmount:e.edgeAmount,colorAmount:e.colorAmount,useChromaticAberration:e.useChromaticAberration,aberrationAmount:e.aberrationAmount,useVignette:e.useVignette,vignetteWeight:e.vignetteWeight,useMotionBlur:e.useMotionBlur,motionStrength:e.motionStrength});return h.jsx(h.Fragment,{})}};c.storyName="포스트 프로세스 조절";const F=async u=>{const e=await fetch(u);return console.log(e),await e.url},D=async u=>await(await fetch(u)).json(),P=(u,e)=>{const r=JSON.stringify(u),s=new Blob([r],{type:"application/json"}),a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=e,n.click(),URL.revokeObjectURL(a)};var m,d,f;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  storyName: '포스트 프로세스 조절',
  render: function ChangePostprocess(args) {
    const zed = useZed();
    const home = useHome();
    useEffect(() => {
      if (!zed || !home) return;
      args.onTargetChange?.(true, zed.graphic.currentPostprocessSettings);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zed, home, args.onTargetChange]);
    useEffect(() => {
      if (!zed || !home) return;
      if (args.enable) {
        if (args.lutTexturePNG) {
          parseFromBlob(args.lutTexturePNG).then(data => {
            const settings = generateData();
            settings.lutTexture = data;
            settings.lutIsBlob = true;
            zed.graphic.setEnablePostprocess(true, settings);
          });
        } else {
          const settings = generateData();
          settings.lutTexture = args.lutTextureURL;
          settings.lutIsBlob = undefined;
          zed.graphic.setEnablePostprocess(true, settings);
        }
      } else {
        zed.graphic.setEnablePostprocess(false);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zed, home, args.enable, args.useMSAA, args.useFXAA, args.useToneMapping, args.toneMappingType, args.contrast, args.expoure, args.useColorGrading, args.lutTextureURL, args.lutTexturePNG, args.useVignette, args.vignetteWeight, args.useColorCurve, args.colorCurveSettings, args.useBloom, args.bloomKernel, args.bloomScale, args.bloomThreshold, args.bloomWeight, args.useDepthOfField, args.blurLevel, args.fStop, args.focalLength, args.focusDistance, args.lensSize, args.useSharpen, args.edgeAmount, args.colorAmount, args.useChromaticAberration, args.aberrationAmount, args.useMotionBlur, args.motionStrength]);
    useEffect(() => {
      if (!zed || !home) return;
      if (args.saveToJson) {
        const d = new Date(Date.now());
        const settings = generateData();
        if (args.lutLocalFilePath !== '') {
          if (args.lutLocalFilePath.toLocaleLowerCase().endsWith('png') || args.lutLocalFilePath.toLocaleLowerCase().endsWith('3dl')) {
            settings.lutTexture = \`/assets/data/\${args.lutLocalFilePath}\`;
          }
        }
        downloadJSON(settings, \`PostProessSettings_\${new Date().toLocaleString()}.json\`);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zed, home, args.saveToJson]);
    useEffect(() => {
      if (!zed || !home) return;
      if (!!args.loadFromJson) {
        parseJsonFromBlob(args.loadFromJson).then(data => {
          const settings = (data as PostprocessSettings);
          args.onTargetChange?.(true, settings);
          zed.graphic.setEnablePostprocess(true, settings);
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zed, home, args.loadFromJson]);
    const generateData = () => {
      let settings: PostprocessSettings = ({
        useMSAA: args.useMSAA,
        useFXAA: args.useFXAA,
        useToneMapping: args.useToneMapping,
        toneMappingType: (ToneMappingType.indexOf(args.toneMappingType) as TonemappingOperator),
        contrast: args.contrast,
        expoure: args.expoure,
        useColorGrading: args.useColorGrading,
        useColorCurve: args.useColorCurve,
        colorCurveSettings: args.colorCurveSettings,
        useBloom: args.useBloom,
        bloomKernel: args.bloomKernel,
        bloomScale: args.bloomScale,
        bloomThreshold: args.bloomThreshold,
        bloomWeight: args.bloomWeight,
        useDepthOfField: args.useDepthOfField,
        blurLevel: (DepthOfFieldBlurLevel.indexOf(args.blurLevel) as DepthOfFieldEffectBlurLevel),
        fStop: args.fStop,
        focalLength: args.focalLength,
        focusDistance: args.focusDistance,
        lensSize: args.lensSize,
        useSharpen: args.useSharpen,
        edgeAmount: args.edgeAmount,
        colorAmount: args.colorAmount,
        useChromaticAberration: args.useChromaticAberration,
        aberrationAmount: args.aberrationAmount,
        useVignette: args.useVignette,
        vignetteWeight: args.vignetteWeight,
        useMotionBlur: args.useMotionBlur,
        motionStrength: args.motionStrength
      } as PostprocessSettings);
      return settings;
    };
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(f=(d=c.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const V=["ChangePostprocessSettingsStory"];export{c as ChangePostprocessSettingsStory,V as __namedExportsOrder,H as default};
//# sourceMappingURL=changePostprocessSettings.stories-92b66fce.js.map
