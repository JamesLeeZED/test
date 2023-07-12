import{j as i}from"./jsx-runtime-94f6e698.js";import{u as c}from"./ZEDComponent-126b9559.js";import{A as t}from"./ArgType-e8b100be.js";import{H as f,Z as V}from"./ZedDecorator-5eaa2432.js";import{I as s}from"./InvokerControl-e69181cb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./glTFMaterialsCommonExtension-1bf2ca18.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./ZedStorybookStyles-5be3d5a8.js";import"./gui3DManager-0cfa6e39.js";const P={volume:.1,playVideo:new s("playVideo"),stopVideo:new s("stopVideo")},H={title:"Examples/Furniture/영상 재생",decorators:[f({view:"top"}),V],args:P,argTypes:{volume:t.Range(0,1,.01),playVideo:t.Invoke(),stopVideo:t.Invoke()}},r={storyName:"영상 재생",render:function({playVideo:m,stopVideo:y,...u}){const o=c();return m.useCallback(()=>{if(!o)return;const e=o.furniture.getVideoPlayers().pop();e&&(e.setVolume(u.volume),e.play())}),y.useCallback(()=>{if(!o)return;const e=o.furniture.getVideoPlayers().pop();e&&e.pause()}),i.jsx(i.Fragment,{})}};r.storyName="영상 재생";var a,n,p,d,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  storyName: '영상 재생',
  render: function Render({
    playVideo,
    stopVideo,
    ...args
  }) {
    const zed = useZed();
    playVideo.useCallback(() => {
      if (!zed) return;
      const firstVideoPlayer = zed.furniture.getVideoPlayers().pop();
      if (firstVideoPlayer) {
        firstVideoPlayer.setVolume(args.volume);
        // eslint-disable-next-line storybook/context-in-play-function
        firstVideoPlayer.play();
      }
    });
    stopVideo.useCallback(() => {
      if (!zed) return;
      const firstVideoPlayer = zed.furniture.getVideoPlayers().pop();
      if (firstVideoPlayer) {
        firstVideoPlayer.pause();
      }
    });
    return <></>;
  }
  // play: async ({ args, id, step, canvasElement, globals }) => {
  //   // test code 작성 필요
  //   await WaitForHomeReady({ step });
  // },
} satisfies StoryObj<Args>`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source},description:{story:`Video Control\r
* zed.getVideoPlayers() : 현재 활성화된 홈의 VideoPlayerIO[]를 반환합니다\r
* VideoPlayerIO 내에는 play, pause 등 해당 player의 video를 제어할 수 있는 함수가 포함되어 있습니다.\r
* 아래 예제는 첫번째로 등록된 VideoPlayer의 볼륨을 조절하고 1초 후 play한 후 5초 후 pause하는 예제입니다.`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};const N=["ControlVideoPlayerStory"];export{r as ControlVideoPlayerStory,N as __namedExportsOrder,H as default};
//# sourceMappingURL=controlVideoPlayer.stories-1b931c83.js.map
