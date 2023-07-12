import{j as e}from"./jsx-runtime-94f6e698.js";import{u as s}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const n={display:"inline",height:256};function d(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(l,{})})):l();function l(){const r=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",strong:"strong",h2:"h2",a:"a",h3:"h3",ol:"ol",li:"li"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"ar에서-활용되는-기술",children:"AR에서 활용되는 기술"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Note"}),`\r
본 문서의 상당량은 ChatGPT에 의존하였습니다.`]}),`
`]}),`
`,e.jsx(r.p,{children:"증강현실을 구현하기 위해 여러 영상처리 기법들이 사용됩니다."}),`
`,e.jsx(r.p,{children:"ARemote에 관련되어 필요한 기술들을 간략히 소개 합니다."}),`
`,e.jsx("iframe",{src:"https://www.youtube.com/embed/zff2aQ1RaVo",title:"Microsoft HoloLens: Spatial Mapping",frameborder:"0",style:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),`
`,e.jsx(r.h2,{id:"slam",children:"SLAM"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://www.8thwall.com/blog/post/45697581391/building-the-next-generation-of-slam-for-the-browser",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"8thWall SLAM",src:"https://f.hubspotusercontent20.net/hubfs/7182223/Hnet-image.gif",style:n})}),`\r
`,e.jsx(r.a,{href:"https://www.kudan.io/blog/depth-cameras-and-rgb-d-slam/",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"Kudan RGB-D SLAM",src:"https://i0.wp.com/www.kudan.io/wp-content/uploads/2020/11/00-Animated-Header-2.gif?resize=640%2C320&ssl=1",style:n})})]}),`
`,e.jsx(r.p,{children:"SLAM(Simulateneous Localization and Mapping)은 AR에서 가장 중요한 기술 중 하나입니다."}),`
`,e.jsx(r.p,{children:"SLAM은 카메라, 센서 및 알고리즘을 사용하여 3D 환경에서 실시간으로 위치를 추적하고 동시에 지도를 작성하는 기술입니다."}),`
`,e.jsx(r.p,{children:"AR에서는 SLAM을 사용하여 사용자의 위치와 방향을 추적하고, 가상 객체와 현실 세계를 정확하게 결합하여 현실감 있는 AR 경험을 제공합니다."}),`
`,e.jsx(r.h2,{id:"marker-based-tracking",children:"Marker-based tracking"}),`
`,e.jsx(r.p,{children:"현실 공간에 미리 정의된 특정 마커를 인식하면 안정적으로 가상 공간에 배치할 수 있습니다."}),`
`,e.jsx(r.h3,{id:"2d-marker",children:"2D Marker"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://www.8thwall.com/8thwall/image-target-to-slam-aframe",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"8thWall image tracking",src:"https://media.giphy.com/media/lRR0c6ElvE2C1KYkgq/giphy.gif",style:n})}),`\r
`,e.jsx(r.a,{href:"https://www.8thwall.com/8thwall/image-target-portal-aframe",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"8thWall image target portal",src:"https://media.giphy.com/media/kBxbQNBBoB4xtPAG8h/giphy.gif",style:n})}),`\r
`,e.jsx(r.a,{href:"https://pub.dev/packages/qr_code_vision",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"Flutter QR code vision",src:"https://user-images.githubusercontent.com/54476193/153677665-7df21310-d46d-498a-8a21-5b22e7eef043.gif",style:n})})]}),`
`,e.jsx(r.p,{children:"QR 또는 미리 학습된 특정 이미지를 카메라에서 인식하여 실제 환경에서의 위치를 계산합니다."}),`
`,e.jsx(r.p,{children:"이 마커는 일반적으로 코너 포인트를 가지고 있는 사각형 형태의 이미지입니다."}),`
`,e.jsx(r.p,{children:"AR 앱은 마커를 인식하고, 마커의 위치와 방향을 계산하여, 가상 객체를 렌더링합니다."}),`
`,e.jsx(r.p,{children:"Image Marker는 AR 앱 개발에 있어서 쉽게 접근할 수 있는 기술 중 하나이며, AR의 기본 개념을 이해하기에도 유용합니다."}),`
`,e.jsx(r.h3,{id:"3d-marker",children:"3D Marker"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://www.8thwall.com/8thwall/vps-procedural",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"",src:"https://media.giphy.com/media/lGLoasNVXiQ3r4oI8L/giphy.gif",style:n})}),`\r
`,e.jsx(r.a,{href:"https://library.vuforia.com/model-targets/model-target-guide-view",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"",src:"https://library.vuforia.com/sites/default/files/vuforia-library/articles/solution/unity-model-target/mt_gif_02-optimized.gif",style:n})})]}),`
`,e.jsx(r.p,{children:"일반적으로, 3D model marker를 사용하려면, 먼저 3D 모델을 만들고, 이 모델을 인식할 수 있는 마커 이미지를 생성합니다. 그 후에, AR 앱에서 이 마커를 인식하고, 3D 모델과 연동하여 렌더링합니다. 이를 통해, 마커 이미지에 연결된 3D 모델을 자유롭게 회전, 확대/축소, 이동 등의 조작을 할 수 있습니다."}),`
`,e.jsx(r.p,{children:"3D model marker를 사용하면, 인식 대상으로 3D 모델을 사용할 수 있어, 더욱 다양한 AR 콘텐츠를 제작할 수 있습니다. 또한, 마커 이미지를 보여주는 것이 아니기 때문에, 마커 이미지를 준비하고 인식할 필요가 없습니다."}),`
`,e.jsx(r.p,{children:"하지만, 3D model marker를 사용하려면, 3D 모델을 제작하는데에 대한 높은 수준의 기술과 지식이 필요합니다. 또한, 3D 모델의 크기나 자세 등을 정확하게 매칭시키는 것이 어려울 수 있으며, 다양한 환경에서의 안정성과 정확도를 보장하기 위한 다양한 기술적인 문제들이 존재합니다."}),`
`,e.jsx(r.h2,{id:"anchor",children:"Anchor"}),`
`,e.jsx(r.p,{children:"Anchor는 가상 객체를 특정 위치나 방향에 고정시키는 기능을 수행하는 개념입니다. 즉, 가상 객체를 실제 세계와 연결해주는 요소로, AR 콘텐츠의 안정성과 일관성을 유지하는데에 중요한 역할을 합니다."}),`
`,e.jsx(r.p,{children:"일반적으로 사용자가 움직일 수 있는 가상 객체, 예를 들어, 가상의 가구나 장식품 등을 배치하는데 사용됩니다. 이렇게 배치된 가상 객체는 사용자가 카메라를 움직이더라도 일관된 위치와 방향에 유지되며, 적절한 라이팅과 그림자 효과 등을 적용하여, 현실감 있는 AR 경험을 제공합니다."}),`
`,e.jsx(r.h3,{id:"spatial-anchor",children:"Spatial Anchor"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://learn.microsoft.com/en-us/azure/spatial-anchors/spatial-anchor-faq",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"Azure spatial anchor point cloud",src:"https://learn.microsoft.com/en-us/azure/spatial-anchors/media/sparse-point-cloud.png",style:n})})}),`
`,e.jsx(r.p,{children:"SLAM에서 획득된 주변 특징점들과 다른 센서들의 정보를 바탕으로 임의의 한 지점을 고정 시킬 수 있습니다."}),`
`,e.jsx(r.h3,{id:"world-locked-anchor",children:"World Locked Anchor"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://learn.microsoft.com/en-us/mixed-reality/world-locking-tools/documentation/concepts/basicconcepts",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"World locking tools",src:"https://learn.microsoft.com/en-us/mixed-reality/world-locking-tools/images/wlt_final_hero.png",style:n})}),`\r
`,e.jsx(r.a,{href:"https://learn.microsoft.com/en-us/mixed-reality/world-locking-tools/documentation/howtos/samples/spacepin",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"World lokcing tools marker layout",src:"https://raw.githubusercontent.com/microsoft/MixedReality-WorldLockingTools-Unity/master/DocGen/Images/PinMarkerLayout.png",style:n})})]}),`
`,e.jsx(r.p,{children:"보통 Anchor와 추적되는 Marker들의 좌표는 각각 독립적으로 관리 되기 때문에 큰 공간 또는 할당된 정보가 보이지 않는 위치에서는 drift가 발생할 수 있습니다."}),`
`,e.jsx(r.p,{children:"여러 앵커들의 상관관계를 기록하고 보정하면 좀 더 큰 스케일의 가상 환경을 안정적으로 구성할 수 있습니다."}),`
`,e.jsx(r.h3,{id:"persistent-anchor",children:"Persistent Anchor"}),`
`,e.jsx(r.p,{children:"일반적으로 AR 앱은 사용자가 앱을 닫으면 가상 객체와 Anchor를 모두 삭제합니다. 하지만, Persistent Anchor는 사용자가 앱을 종료하고 다시 시작하더라도 Anchor를 유지하여, 이전 상태를 그대로 유지할 수 있습니다. 이를 통해 사용자는 이전에 배치된 가상 객체를 쉽게 찾을 수 있습니다."}),`
`,e.jsx(r.h3,{id:"cloud-anchor",children:"Cloud Anchor"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://developers.google.com/ar/develop/cloud-anchors",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"Google cloud anchors",src:"https://media.giphy.com/media/fjxybkoLtuB9RelHkX/giphy.gif",style:n})}),`\r
`,e.jsx(r.a,{href:"https://learn.microsoft.com/ko-kr/azure/spatial-anchors/how-tos/create-locate-anchors-unity",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"Azure spatial anchors",src:"https://learn.microsoft.com/ko-kr/azure/includes/media/spatial-anchors-azure-concepts/place-anchor.gif",style:n})})]}),`
`,e.jsx(r.p,{children:"클라우드 앵커는 사용자가 지정한 위치에 가상 객체를 배치하고, 이를 클라우드에 업로드합니다. 그러면 다른 사용자들이 동일한 가상 공간에 액세스하여 동일한 위치에서 같은 가상 객체를 볼 수 있게 됩니다."}),`
`,e.jsx(r.p,{children:"클라우드 앵커는 다음과 같은 방식으로 작동합니다."}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"사용자가 가상 객체를 배치하면, 클라우드 앵커 API는 해당 위치의 고유 식별자와 함께 가상 객체의 정보를 업로드합니다."}),`
`,e.jsx(r.li,{children:"다른 사용자들이 동일한 가상 공간에 액세스하면, 앱은 가까이 있는 가장 가까운 클라우드 앵커를 찾습니다."}),`
`,e.jsx(r.li,{children:"사용자의 위치를 기반으로 가상 객체의 위치를 조정하여 다른 사용자들이 동일한 가상 객체를 볼 수 있도록 합니다."}),`
`]}),`
`,e.jsx(r.p,{children:"클라우드 앵커를 사용하면 사용자들이 동일한 가상 공간에서 협업하고, 다양한 AR 앱에서 사용할 수 있는 컨텐츠를 만들 수 있습니다. 또한, 사용자가 이동할 때도 일관된 경험을 제공하며, 다양한 장치 및 플랫폼에서도 작동합니다."}),`
`,e.jsx(r.h2,{id:"plane-detection",children:"Plane Detection"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://developers.google.com/ar/design/content/content-manipulation",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"Content manipulation | ARCore | Google Developers",src:"https://developers.google.com/ar/design/assets/verticalsurfaces.gif",style:n})})}),`
`,e.jsx(r.p,{children:"Plane Detection은 AR에서 현실 세계의 평면(surface)을 식별하고 인식하는 기술입니다. 이를 통해 AR 앱은 평면 상에 가상 객체를 배치하거나 표시할 수 있습니다."}),`
`,e.jsx(r.p,{children:"Plane Detection은 다음과 같은 단계로 작동합니다."}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"카메라가 주변 환경을 스캔하여 세부적인 공간 데이터를 수집합니다."}),`
`,e.jsx(r.li,{children:"수집된 데이터에서 공간에서의 표면 패턴, 각도, 굴곡 등을 파악하여 평면을 탐지합니다."}),`
`,e.jsx(r.li,{children:"탐지된 평면에 대한 정보를 추적하고 업데이트하여 평면이 변화할 때마다 즉시 반응합니다."}),`
`]}),`
`,e.jsx(r.p,{children:"이러한 Plane Detection은 AR 앱에서 다양한 기능을 제공합니다. 예를 들어, 사용자가 바닥이나 벽면 위에 가상 객체를 배치할 수 있으며, 물체와의 상호작용도 가능합니다. 또한, 실시간으로 평면을 탐지하고 업데이트하기 때문에 사용자가 움직일 때도 즉각적으로 반응합니다."}),`
`,e.jsx(r.h2,{id:"semantic-segmentation",children:"Semantic Segmentation"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://www.8thwall.com/8thwall/sky-effects-aframe",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"8thWall sky effects",src:"https://i.giphy.com/media/Bv3GSyMhX1Qisc0VWW/giphy.gif",style:n})}),`\r
`,e.jsx(r.a,{href:"https://github.com/ayushdabra/drone-images-semantic-segmentation",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx("img",{alt:"semantic segmentation",src:"https://camo.githubusercontent.com/0b33288e3ebf969a9b26432a4570eaa5232885b52de8db72c3df5ae7cdcaf35a/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3735302f312a525a6e4253423351706b4977465554524661574459672e676966",style:n})})]}),`
`,e.jsx(r.p,{children:"Semantic Segmentation은 이미지에서 픽셀 단위로 객체를 분리하고, 각 픽셀이 어떤 객체에 속하는지를 분류하는 컴퓨터 비전 기술입니다."}),`
`,e.jsx(r.p,{children:"이 기술은 주로 딥러닝 기반의 신경망 알고리즘을 사용하여 구현됩니다. 학습된 모델은 이미지에서 객체의 경계를 식별하고, 객체의 윤곽을 추정하는 등의 작업을 수행하여 객체를 인식합니다. 이후, 모델은 객체를 구분하고 분류하기 위해 각 픽셀의 속성을 분석하고, 해당 객체에 해당하는 레이블을 지정합니다."}),`
`,e.jsx(r.p,{children:"Semantic Segmentation은 다양한 분야에서 활용됩니다. 자율 주행 자동차에서는 도로와 차량, 보행자 등의 객체를 식별하고 분류하여 차량이 안전하게 주행할 수 있도록 돕습니다. 의료 분야에서는 MRI와 CT 등의 영상을 분석하여 종양, 조직, 혈관 등을 식별하여 진단을 돕습니다. 또한, AR 기술에서도 Semantic Segmentation을 사용하여 실시간으로 객체를 분리하고 인식하여, 가상 객체를 더 자연스럽게 배치하고 표현할 수 있습니다."})]})}}export{d as default,n as imageStyle};
//# sourceMappingURL=Technology-c52de48c.js.map
