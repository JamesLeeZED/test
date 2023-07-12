import{V as c,M as St,Q as G,l as ri,f as E,W as L,S as He,i as dt,ak as cs,al as ds,am as us,a4 as ye,an as ve,ao as re,E as Wt,af as z,O as B,K as S,C as A,ap as fs,h as P,aq as ki,ar as Wi,as as gs,at as Hi,au as Ge,n as w,av as ms,b as ps,aw as bs,g as Ke,ax as Ee,e as Bi,ay as oi,az as vs,aA as pi,aB as Ti,aC as n,aD as _,T as it,aE as X,aF as N,aG as Gi,aH as Lt,aI as Me,aJ as xs,aK as ys,aL as Is,aM as bi,aN as nt,aO as wt,a7 as De,ad as Ui,aP as Yi,aQ as ht,aR as _i,aS as Xi,aT as Ki,aU as Ie,aV as Ps,aW as qt,aX as Q,Z as $t,aY as Bs,aZ as ne,a2 as Ci,a_ as jt,a$ as ji,b0 as Ts,j as Ni,b1 as Cs,b2 as Rs,b3 as Ai,U as Ss,b4 as ws}from"./glTFMaterialsCommonExtension-1bf2ca18.js";class Oe{constructor(t,e=new c,i=0,s=!1){this.direction=t,this.rotatedDirection=e,this.diff=i,this.ignore=s}}class Go{constructor(t){this._ui=t,this.name="AttachToBoxBehavior",this.distanceAwayFromFace=.15,this.distanceAwayFromBottomOfFace=.15,this._faceVectors=[new Oe(c.Up()),new Oe(c.Down()),new Oe(c.Left()),new Oe(c.Right()),new Oe(c.Forward()),new Oe(c.Forward().scaleInPlace(-1))],this._tmpMatrix=new St,this._tmpVector=new c,this._zeroVector=c.Zero(),this._lookAtTmpMatrix=new St}init(){}_closestFace(t){return this._faceVectors.forEach(e=>{this._target.rotationQuaternion||(this._target.rotationQuaternion=G.RotationYawPitchRoll(this._target.rotation.y,this._target.rotation.x,this._target.rotation.z)),this._target.rotationQuaternion.toRotationMatrix(this._tmpMatrix),c.TransformCoordinatesToRef(e.direction,this._tmpMatrix,e.rotatedDirection),e.diff=c.GetAngleBetweenVectors(e.rotatedDirection,t,c.Cross(e.rotatedDirection,t))}),this._faceVectors.reduce((e,i)=>e.ignore?i:i.ignore||e.diff<i.diff?e:i,this._faceVectors[0])}_lookAtToRef(t,e=new c(0,1,0),i){St.LookAtLHToRef(this._zeroVector,t,e,this._lookAtTmpMatrix),this._lookAtTmpMatrix.invert(),G.FromRotationMatrixToRef(this._lookAtTmpMatrix,i)}attach(t){this._target=t,this._scene=this._target.getScene(),this._onRenderObserver=this._scene.onBeforeRenderObservable.add(()=>{if(!this._scene.activeCamera)return;let e=this._scene.activeCamera.position;this._scene.activeCamera.devicePosition&&(e=this._scene.activeCamera.devicePosition);const i=this._closestFace(e.subtract(t.position));this._scene.activeCamera.leftCamera?this._scene.activeCamera.leftCamera.computeWorldMatrix().getRotationMatrixToRef(this._tmpMatrix):this._scene.activeCamera.computeWorldMatrix().getRotationMatrixToRef(this._tmpMatrix),c.TransformCoordinatesToRef(c.Up(),this._tmpMatrix,this._tmpVector),this._faceVectors.forEach(o=>{i.direction.x&&o.direction.x&&(o.ignore=!0),i.direction.y&&o.direction.y&&(o.ignore=!0),i.direction.z&&o.direction.z&&(o.ignore=!0)});const s=this._closestFace(this._tmpVector);this._faceVectors.forEach(o=>{o.ignore=!1}),this._ui.position.copyFrom(t.position),i.direction.x&&(i.rotatedDirection.scaleToRef(t.scaling.x/2+this.distanceAwayFromFace,this._tmpVector),this._ui.position.addInPlace(this._tmpVector)),i.direction.y&&(i.rotatedDirection.scaleToRef(t.scaling.y/2+this.distanceAwayFromFace,this._tmpVector),this._ui.position.addInPlace(this._tmpVector)),i.direction.z&&(i.rotatedDirection.scaleToRef(t.scaling.z/2+this.distanceAwayFromFace,this._tmpVector),this._ui.position.addInPlace(this._tmpVector)),this._ui.rotationQuaternion||(this._ui.rotationQuaternion=G.RotationYawPitchRoll(this._ui.rotation.y,this._ui.rotation.x,this._ui.rotation.z)),i.rotatedDirection.scaleToRef(-1,this._tmpVector),this._lookAtToRef(this._tmpVector,s.rotatedDirection,this._ui.rotationQuaternion),s.direction.x&&this._ui.up.scaleToRef(this.distanceAwayFromBottomOfFace-t.scaling.x/2,this._tmpVector),s.direction.y&&this._ui.up.scaleToRef(this.distanceAwayFromBottomOfFace-t.scaling.y/2,this._tmpVector),s.direction.z&&this._ui.up.scaleToRef(this.distanceAwayFromBottomOfFace-t.scaling.z/2,this._tmpVector),this._ui.position.addInPlace(this._tmpVector)})}detach(){this._scene.onBeforeRenderObservable.remove(this._onRenderObserver)}}class Zi{get delay(){return this.fadeInDelay}set delay(t){this.fadeInDelay=t,this.fadeOutDelay=t}constructor(){this.fadeInDelay=0,this.fadeOutDelay=0,this.fadeInTime=300,this.fadeOutTime=300,this._millisecondsPerFrame=1e3/60,this._hovered=!1,this._hoverValue=0,this._ownerNode=null,this._delay=0,this._time=300,this._update=()=>{if(this._ownerNode){if(this._hoverValue+=this._hovered?this._millisecondsPerFrame:-this._millisecondsPerFrame,this._setAllVisibility(this._ownerNode,(this._hoverValue-this._delay)/this._time),this._ownerNode.visibility>1){if(this._setAllVisibility(this._ownerNode,1),this._hoverValue>this._time){this._hoverValue=this._time,this._detachObserver();return}}else if(this._ownerNode.visibility<0&&(this._setAllVisibility(this._ownerNode,0),this._hoverValue<0)){this._hoverValue=0,this._detachObserver();return}this._attachObserver()}}}get name(){return"FadeInOut"}init(){}attach(t){this._ownerNode=t,this._setAllVisibility(this._ownerNode,0)}detach(){this._ownerNode=null}fadeIn(t=!0){this._delay=t?this.fadeInDelay:this.fadeOutDelay,this._time=t?this.fadeInTime:this.fadeOutTime,this._detachObserver(),!(this._ownerNode&&(t&&this._ownerNode.visibility>=1||!t&&this._ownerNode.visibility<=0))&&(this._hovered=t,this._hovered||(this._delay*=-1),this._ownerNode.visibility>=1?this._hoverValue=this._time:this._ownerNode.visibility<=0&&(this._hoverValue=0),this._update())}fadeOut(){this.fadeIn(!1)}_setAllVisibility(t,e){t.visibility=e,t.getChildMeshes().forEach(i=>{this._setAllVisibility(i,e)})}_attachObserver(){var t;this._onBeforeRenderObserver||(this._onBeforeRenderObserver=(t=this._ownerNode)===null||t===void 0?void 0:t.getScene().onBeforeRenderObservable.add(this._update))}_detachObserver(){var t;this._onBeforeRenderObserver&&((t=this._ownerNode)===null||t===void 0||t.getScene().onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=null)}}class Uo{constructor(){this._startDistance=0,this._initialScale=new c(0,0,0),this._targetScale=new c(0,0,0),this._sceneRenderObserver=null,this._dragBehaviorA=new ri({}),this._dragBehaviorA.moveAttached=!1,this._dragBehaviorB=new ri({}),this._dragBehaviorB.moveAttached=!1}get name(){return"MultiPointerScale"}init(){}_getCurrentDistance(){return this._dragBehaviorA.lastDragPosition.subtract(this._dragBehaviorB.lastDragPosition).length()}attach(t){this._ownerNode=t,this._dragBehaviorA.onDragStartObservable.add(()=>{this._dragBehaviorA.dragging&&this._dragBehaviorB.dragging&&(this._dragBehaviorA.currentDraggingPointerId==this._dragBehaviorB.currentDraggingPointerId?this._dragBehaviorA.releaseDrag():(this._initialScale.copyFrom(t.scaling),this._startDistance=this._getCurrentDistance()))}),this._dragBehaviorB.onDragStartObservable.add(()=>{this._dragBehaviorA.dragging&&this._dragBehaviorB.dragging&&(this._dragBehaviorA.currentDraggingPointerId==this._dragBehaviorB.currentDraggingPointerId?this._dragBehaviorB.releaseDrag():(this._initialScale.copyFrom(t.scaling),this._startDistance=this._getCurrentDistance()))}),[this._dragBehaviorA,this._dragBehaviorB].forEach(e=>{e.onDragObservable.add(()=>{if(this._dragBehaviorA.dragging&&this._dragBehaviorB.dragging){const i=this._getCurrentDistance()/this._startDistance;this._initialScale.scaleToRef(i,this._targetScale)}})}),t.addBehavior(this._dragBehaviorA),t.addBehavior(this._dragBehaviorB),this._sceneRenderObserver=t.getScene().onBeforeRenderObservable.add(()=>{if(this._dragBehaviorA.dragging&&this._dragBehaviorB.dragging){const e=this._targetScale.subtract(t.scaling).scaleInPlace(.1);e.length()>.01&&t.scaling.addInPlace(e)}})}detach(){this._ownerNode.getScene().onBeforeRenderObservable.remove(this._sceneRenderObserver),[this._dragBehaviorA,this._dragBehaviorB].forEach(t=>{t.onDragStartObservable.clear(),t.onDragObservable.clear(),this._ownerNode.removeBehavior(t)})}}class Os{constructor(){this._attachPointLocalOffset=new c,this._workingPosition=new c,this._workingQuaternion=new G,this._lastTick=-1,this._hit=!1,this.hitNormalOffset=.05,this.meshes=[],this.interpolatePose=!0,this.lerpTime=250,this.keepOrientationVertical=!0,this.enabled=!0,this.maxStickingDistance=.8}get name(){return"SurfaceMagnetism"}init(){}attach(t,e){this._attachedMesh=t,this._scene=e||t.getScene(),this._attachedMesh.rotationQuaternion||(this._attachedMesh.rotationQuaternion=G.RotationYawPitchRoll(this._attachedMesh.rotation.y,this._attachedMesh.rotation.x,this._attachedMesh.rotation.z)),this.updateAttachPoint(),this._workingPosition.copyFrom(this._attachedMesh.position),this._workingQuaternion.copyFrom(this._attachedMesh.rotationQuaternion),this._addObservables()}detach(){this._attachedMesh=null,this._removeObservables()}_getTargetPose(t){if(!this._attachedMesh)return null;if(t&&t.hit){const e=t.getNormal(!0,!0),i=t.pickedPoint;if(!e||!i)return null;e.normalize();const s=E.Vector3[0];return s.copyFrom(e),s.scaleInPlace(this.hitNormalOffset),s.addInPlace(i),this._attachedMesh.parent&&(E.Matrix[0].copyFrom(this._attachedMesh.parent.getWorldMatrix()).invert(),c.TransformNormalToRef(s,E.Matrix[0],s)),{position:s,quaternion:G.RotationYawPitchRoll(-Math.atan2(e.x,-e.z),this.keepOrientationVertical?0:Math.atan2(e.y,Math.sqrt(e.z*e.z+e.x*e.x)),0)}}return null}updateAttachPoint(){this._getAttachPointOffsetToRef(this._attachPointLocalOffset)}findAndUpdateTarget(t){if(this._hit=!1,!t.ray)return!1;const e=t.ray.intersectsMeshes(this.meshes)[0];if(this._attachedMesh&&e&&e.hit&&e.pickedMesh){const i=this._getTargetPose(e);i&&c.Distance(this._attachedMesh.position,i.position)<this.maxStickingDistance&&(this._workingPosition.copyFrom(i.position),this._workingQuaternion.copyFrom(i.quaternion),this._hit=!0)}return this._hit}_getAttachPointOffsetToRef(t){if(!this._attachedMesh){t.setAll(0);return}const e=E.Quaternion[0];e.copyFrom(this._attachedMesh.rotationQuaternion),this._attachedMesh.rotationQuaternion.copyFromFloats(0,0,0,1),this._attachedMesh.computeWorldMatrix();const i=this._attachedMesh.getHierarchyBoundingVectors(),s=E.Vector3[0];i.max.addToRef(i.min,s),s.scaleInPlace(.5),s.z=i.max.z;const o=E.Matrix[0];this._attachedMesh.getWorldMatrix().invertToRef(o),c.TransformCoordinatesToRef(s,o,t),this._attachedMesh.rotationQuaternion.copyFrom(e)}_updateTransformToGoal(t){if(!this._attachedMesh||!this._hit)return;const e=this._attachedMesh.parent;this._attachedMesh.setParent(null);const i=E.Vector3[0];if(c.TransformNormalToRef(this._attachPointLocalOffset,this._attachedMesh.getWorldMatrix(),i),!this.interpolatePose){this._attachedMesh.position.copyFrom(this._workingPosition).subtractInPlace(i),this._attachedMesh.rotationQuaternion.copyFrom(this._workingQuaternion);return}const s=new c;c.SmoothToRef(this._attachedMesh.position,this._workingPosition,t,this.lerpTime,s),this._attachedMesh.position.copyFrom(s);const o=new G;o.copyFrom(this._attachedMesh.rotationQuaternion),G.SmoothToRef(o,this._workingQuaternion,t,this.lerpTime,this._attachedMesh.rotationQuaternion),this._attachedMesh.setParent(e)}_addObservables(){this._pointerObserver=this._scene.onPointerObservable.add(t=>{this.enabled&&t.type==L.POINTERMOVE&&t.pickInfo&&this.findAndUpdateTarget(t.pickInfo)}),this._lastTick=Date.now(),this._onBeforeRender=this._scene.onBeforeRenderObservable.add(()=>{const t=Date.now();this._updateTransformToGoal(t-this._lastTick),this._lastTick=t})}_removeObservables(){this._scene.onPointerObservable.remove(this._pointerObserver),this._scene.onBeforeRenderObservable.remove(this._onBeforeRender),this._pointerObserver=null,this._onBeforeRender=null}}class Fs{constructor(){this._tmpQuaternion=new G,this._tmpVectors=[new c,new c,new c,new c,new c,new c,new c],this._tmpMatrix=new St,this._tmpInvertView=new St,this._tmpForward=new c,this._tmpNodeForward=new c,this._tmpPosition=new c,this._workingPosition=new c,this._workingQuaternion=new G,this._lastTick=-1,this._recenterNextUpdate=!0,this.interpolatePose=!0,this.lerpTime=500,this.ignoreCameraPitchAndRoll=!1,this.pitchOffset=15,this.maxViewVerticalDegrees=30,this.maxViewHorizontalDegrees=30,this.orientToCameraDeadzoneDegrees=60,this.ignoreDistanceClamp=!1,this.ignoreAngleClamp=!1,this.verticalMaxDistance=0,this.defaultDistance=.8,this.maximumDistance=2,this.minimumDistance=.3,this.useFixedVerticalOffset=!1,this.fixedVerticalOffset=0,this._enabled=!0}get followedCamera(){return this._followedCamera||this._scene.activeCamera}set followedCamera(t){this._followedCamera=t}get name(){return"Follow"}init(){}attach(t,e){this._scene=t.getScene(),this.attachedNode=t,e&&(this.followedCamera=e),this._addObservables()}detach(){this.attachedNode=null,this._removeObservables()}recenter(){this._recenterNextUpdate=!0}_angleBetweenVectorAndPlane(t,e){return this._tmpVectors[0].copyFrom(t),t=this._tmpVectors[0],this._tmpVectors[1].copyFrom(e),e=this._tmpVectors[1],t.normalize(),e.normalize(),Math.PI/2-Math.acos(c.Dot(t,e))}_length2D(t){return Math.sqrt(t.x*t.x+t.z*t.z)}_distanceClamp(t,e=!1){let i=this.minimumDistance,s=this.maximumDistance;const o=this.defaultDistance,r=this._tmpVectors[0];r.copyFrom(t);let a=r.length();if(r.normalizeFromLength(a),this.ignoreCameraPitchAndRoll){i=this._length2D(r)*i,s=this._length2D(r)*s;const h=this._length2D(t);r.scaleInPlace(a/h),a=h}let l=a;return e?l=o:l=He.Clamp(a,i,s),t.copyFrom(r).scaleInPlace(l),a!==l}_applyVerticalClamp(t){this.verticalMaxDistance!==0&&(t.y=He.Clamp(t.y,-this.verticalMaxDistance,this.verticalMaxDistance))}_toOrientationQuatToRef(t,e){G.RotationYawPitchRollToRef(Math.atan2(t.x,t.z),Math.atan2(t.y,Math.sqrt(t.z*t.z+t.x*t.x)),0,e)}_applyPitchOffset(t){const e=this._tmpVectors[0],i=this._tmpVectors[1];e.copyFromFloats(0,0,this._scene.useRightHandedSystem?-1:1),i.copyFromFloats(1,0,0),c.TransformNormalToRef(e,t,e),e.y=0,e.normalize(),c.TransformNormalToRef(i,t,i),G.RotationAxisToRef(i,this.pitchOffset*Math.PI/180,this._tmpQuaternion),e.rotateByQuaternionToRef(this._tmpQuaternion,e),this._toOrientationQuatToRef(e,this._tmpQuaternion),this._tmpQuaternion.toRotationMatrix(this._tmpMatrix),t.copyFrom(this._tmpMatrix)}_angularClamp(t,e){const i=this._tmpVectors[5];i.copyFromFloats(0,0,this._scene.useRightHandedSystem?-1:1);const s=this._tmpVectors[6];s.copyFromFloats(1,0,0),c.TransformNormalToRef(i,t,i),c.TransformNormalToRef(s,t,s);const o=c.UpReadOnly;if(e.length()<dt)return!1;let a=!1;const l=this._tmpQuaternion;if(this.ignoreCameraPitchAndRoll){const f=c.GetAngleBetweenVectorsOnPlane(e,i,s);G.RotationAxisToRef(s,f,l),e.rotateByQuaternionToRef(l,e)}else{const f=-c.GetAngleBetweenVectorsOnPlane(e,i,s),g=this.maxViewVerticalDegrees*Math.PI/180*.5;f<-g?(G.RotationAxisToRef(s,-f-g,l),e.rotateByQuaternionToRef(l,e),a=!0):f>g&&(G.RotationAxisToRef(s,-f+g,l),e.rotateByQuaternionToRef(l,e),a=!0)}const h=this._angleBetweenVectorAndPlane(e,s)*(this._scene.useRightHandedSystem?-1:1),d=this.maxViewHorizontalDegrees*Math.PI/180*.5;return h<-d?(G.RotationAxisToRef(o,-h-d,l),e.rotateByQuaternionToRef(l,e),a=!0):h>d&&(G.RotationAxisToRef(o,-h+d,l),e.rotateByQuaternionToRef(l,e),a=!0),a}_orientationClamp(t,e){var i;const s=this._tmpVectors[0];s.copyFrom(t).scaleInPlace(-1).normalize();const o=this._tmpVectors[1],r=this._tmpVectors[2];o.copyFromFloats(0,1,0),c.CrossToRef(s,o,r);const a=r.length();a<dt||(r.normalizeFromLength(a),c.CrossToRef(r,s,o),!((i=this.attachedNode)===null||i===void 0)&&i.getScene().useRightHandedSystem?G.FromLookDirectionRHToRef(s,o,e):G.FromLookDirectionLHToRef(s,o,e))}_passedOrientationDeadzone(t,e){const i=this._tmpVectors[5];return i.copyFrom(t),i.normalize(),Math.abs(c.GetAngleBetweenVectorsOnPlane(e,i,c.UpReadOnly))*180/Math.PI>this.orientToCameraDeadzoneDegrees}_updateLeashing(t){if(this.attachedNode&&this._enabled){const e=this.attachedNode.parent;this.attachedNode.setParent(null);const i=this.attachedNode.getWorldMatrix(),s=this._workingPosition,o=this._workingQuaternion,r=this.attachedNode.getPivotPoint(),a=this._tmpInvertView;a.copyFrom(t.getViewMatrix()),a.invert(),c.TransformCoordinatesToRef(r,i,s);const l=this._tmpPosition;l.copyFromFloats(0,0,0),c.TransformCoordinatesToRef(l,i,l),l.scaleInPlace(-1).subtractInPlace(r),s.subtractInPlace(t.globalPosition),this.ignoreCameraPitchAndRoll&&this._applyPitchOffset(a);let h=!1;const d=this._tmpForward;d.copyFromFloats(0,0,this._scene.useRightHandedSystem?-1:1),c.TransformNormalToRef(d,a,d);const f=this._tmpNodeForward;if(f.copyFromFloats(0,0,this._scene.useRightHandedSystem?-1:1),c.TransformNormalToRef(f,i,f),this._recenterNextUpdate)s.copyFrom(d).scaleInPlace(this.defaultDistance);else if(this.ignoreAngleClamp){const y=s.length();s.copyFrom(d).scaleInPlace(y)}else h=this._angularClamp(a,s);let g=!1;this.ignoreDistanceClamp||(g=this._distanceClamp(s,h),this._applyVerticalClamp(s)),this.useFixedVerticalOffset&&(s.y=l.y-t.globalPosition.y+this.fixedVerticalOffset),(h||g||this._passedOrientationDeadzone(s,f)||this._recenterNextUpdate)&&this._orientationClamp(s,o),this._workingPosition.subtractInPlace(r),this._recenterNextUpdate=!1,this.attachedNode.setParent(e)}}_updateTransformToGoal(t){if(!this.attachedNode||!this.followedCamera||!this._enabled)return;this.attachedNode.rotationQuaternion||(this.attachedNode.rotationQuaternion=G.Identity());const e=this.attachedNode.parent;if(this.attachedNode.setParent(null),!this.interpolatePose){this.attachedNode.position.copyFrom(this.followedCamera.globalPosition).addInPlace(this._workingPosition),this.attachedNode.rotationQuaternion.copyFrom(this._workingQuaternion);return}const i=new c;i.copyFrom(this.attachedNode.position).subtractInPlace(this.followedCamera.globalPosition),c.SmoothToRef(i,this._workingPosition,t,this.lerpTime,i),i.addInPlace(this.followedCamera.globalPosition),this.attachedNode.position.copyFrom(i);const s=new G;s.copyFrom(this.attachedNode.rotationQuaternion),G.SmoothToRef(s,this._workingQuaternion,t,this.lerpTime,this.attachedNode.rotationQuaternion),this.attachedNode.setParent(e)}_addObservables(){this._lastTick=Date.now(),this._onBeforeRender=this._scene.onBeforeRenderObservable.add(()=>{if(!this.followedCamera)return;const t=Date.now();this._updateLeashing(this.followedCamera),this._updateTransformToGoal(t-this._lastTick),this._lastTick=t})}_removeObservables(){this._onBeforeRender&&this._scene.onBeforeRenderObservable.remove(this._onBeforeRender)}}class Yo extends cs{set distanceBetweenEyes(t){this._distanceBetweenEyes=t}get distanceBetweenEyes(){return this._distanceBetweenEyes}set distanceToProjectionPlane(t){this._distanceToProjectionPlane=t}get distanceToProjectionPlane(){return this._distanceToProjectionPlane}constructor(t,e,i,s=1,o=.065){super(t,e,i),this._distanceBetweenEyes=o,this._distanceToProjectionPlane=s,this.setCameraRigMode(ds.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL,{stereoHalfAngle:0}),this._cameraRigParams.stereoHalfAngle=0,this._cameraRigParams.interaxialDistance=o}getClassName(){return"StereoscopicUniversalCamera"}createRigCamera(t){const e=new us(t,c.Zero(),this.getScene()),i=new ye("tm_"+t,this.getScene());return e.parent=i,i.setPivotMatrix(St.Identity(),!1),e.isRigCamera=!0,e.rigParent=this,e}_updateRigCameras(){for(let t=0;t<this._rigCameras.length;t++){const e=this._rigCameras[t];e.minZ=this.minZ,e.maxZ=this.maxZ,e.fov=this.fov,e.upVector.copyFrom(this.upVector),e.rotationQuaternion?e.rotationQuaternion.copyFrom(this.rotationQuaternion):e.rotation.copyFrom(this.rotation),this._updateCamera(this._rigCameras[t],t)}}_updateCamera(t,e){const i=this.distanceBetweenEyes/2,s=i/this.distanceToProjectionPlane;t.position.copyFrom(this.position),t.position.addInPlaceFromFloats(e===0?-i:i,0,-this._distanceToProjectionPlane);const o=t.parent,r=o.getPivotMatrix();r.setTranslationFromFloats(e===0?i:-i,0,0),r.setRowFromFloats(2,e===0?s:-s,0,1,0),o.setPivotMatrix(r,!1)}_setRigMode(){this._rigCameras[0].viewport=new ve(0,0,.5,1),this._rigCameras[1].viewport=new ve(.5,0,.5,1);for(let t=0;t<this._rigCameras.length;t++)this._updateCamera(this._rigCameras[t],t)}}class Es{constructor(t){this.name=re.NAME_LAYER,this.scene=t||Wt.LastCreatedScene,this.scene&&(this._engine=this.scene.getEngine(),this.scene.layers=new Array)}register(){this.scene._beforeCameraDrawStage.registerStep(re.STEP_BEFORECAMERADRAW_LAYER,this,this._drawCameraBackground),this.scene._afterCameraDrawStage.registerStep(re.STEP_AFTERCAMERADRAW_LAYER,this,this._drawCameraForegroundWithPostProcessing),this.scene._afterCameraPostProcessStage.registerStep(re.STEP_AFTERCAMERAPOSTPROCESS_LAYER,this,this._drawCameraForegroundWithoutPostProcessing),this.scene._beforeRenderTargetDrawStage.registerStep(re.STEP_BEFORERENDERTARGETDRAW_LAYER,this,this._drawRenderTargetBackground),this.scene._afterRenderTargetDrawStage.registerStep(re.STEP_AFTERRENDERTARGETDRAW_LAYER,this,this._drawRenderTargetForegroundWithPostProcessing),this.scene._afterRenderTargetPostProcessStage.registerStep(re.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER,this,this._drawRenderTargetForegroundWithoutPostProcessing)}rebuild(){const t=this.scene.layers;for(const e of t)e._rebuild()}dispose(){const t=this.scene.layers;for(;t.length;)t[0].dispose()}_draw(t){const e=this.scene.layers;if(e.length){this._engine.setDepthBuffer(!1);for(const i of e)t(i)&&i.render();this._engine.setDepthBuffer(!0)}}_drawCameraPredicate(t,e,i,s){return!t.renderOnlyInRenderTargetTextures&&t.isBackground===e&&t.applyPostProcess===i&&(t.layerMask&s)!==0}_drawCameraBackground(t){this._draw(e=>this._drawCameraPredicate(e,!0,!0,t.layerMask))}_drawCameraForegroundWithPostProcessing(t){this._draw(e=>this._drawCameraPredicate(e,!1,!0,t.layerMask))}_drawCameraForegroundWithoutPostProcessing(t){this._draw(e=>this._drawCameraPredicate(e,!1,!1,t.layerMask))}_drawRenderTargetPredicate(t,e,i,s,o){return t.renderTargetTextures.length>0&&t.isBackground===e&&t.applyPostProcess===i&&t.renderTargetTextures.indexOf(o)>-1&&(t.layerMask&s)!==0}_drawRenderTargetBackground(t){this._draw(e=>this._drawRenderTargetPredicate(e,!0,!0,this.scene.activeCamera.layerMask,t))}_drawRenderTargetForegroundWithPostProcessing(t){this._draw(e=>this._drawRenderTargetPredicate(e,!1,!0,this.scene.activeCamera.layerMask,t))}_drawRenderTargetForegroundWithoutPostProcessing(t){this._draw(e=>this._drawRenderTargetPredicate(e,!1,!1,this.scene.activeCamera.layerMask,t))}addFromContainer(t){t.layers&&t.layers.forEach(e=>{this.scene.layers.push(e)})}removeFromContainer(t,e=!1){t.layers&&t.layers.forEach(i=>{const s=this.scene.layers.indexOf(i);s!==-1&&this.scene.layers.splice(s,1),e&&i.dispose()})}}class Ms{set applyPostProcess(t){this._applyPostProcess=t}get applyPostProcess(){return this.isBackground||this._applyPostProcess}set onDispose(t){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(t)}set onBeforeRender(t){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(t)}set onAfterRender(t){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(t)}constructor(t,e,i,s,o){this.name=t,this._applyPostProcess=!0,this.scale=new z(1,1),this.offset=new z(0,0),this.alphaBlendingMode=2,this.layerMask=268435455,this.renderTargetTextures=[],this.renderOnlyInRenderTargetTextures=!1,this.isEnabled=!0,this._vertexBuffers={},this.onDisposeObservable=new B,this.onBeforeRenderObservable=new B,this.onAfterRenderObservable=new B,this.texture=e?new S(e,i,!0):null,this.isBackground=s===void 0?!0:s,this.color=o===void 0?new A(1,1,1,1):o,this._scene=i||Wt.LastCreatedScene;let r=this._scene._getComponent(re.NAME_LAYER);r||(r=new Es(this._scene),this._scene._addComponent(r)),this._scene.layers.push(this);const a=this._scene.getEngine();this._drawWrapper=new fs(a);const l=[];l.push(1,1),l.push(-1,1),l.push(-1,-1),l.push(1,-1);const h=new P(a,l,P.PositionKind,!1,!1,2);this._vertexBuffers[P.PositionKind]=h,this._createIndexBuffer()}_createIndexBuffer(){const t=this._scene.getEngine(),e=[];e.push(0),e.push(1),e.push(2),e.push(0),e.push(2),e.push(3),this._indexBuffer=t.createIndexBuffer(e)}_rebuild(){const t=this._vertexBuffers[P.PositionKind];t&&t._rebuild(),this._createIndexBuffer()}isReady(){var t;const e=this._scene.getEngine();let i="";this.alphaTest&&(i="#define ALPHATEST"),this.texture&&!this.texture.gammaSpace&&(i+=`\r
#define LINEAR`),this._previousDefines!==i&&(this._previousDefines=i,this._drawWrapper.effect=e.createEffect("layer",[P.PositionKind],["textureMatrix","color","scale","offset"],["textureSampler"],i));const s=this._drawWrapper.effect;return(s==null?void 0:s.isReady())&&((t=this.texture)===null||t===void 0?void 0:t.isReady())}render(){if(!this.isEnabled)return;const t=this._scene.getEngine();if(!this.isReady())return;const e=this._drawWrapper.effect;this.onBeforeRenderObservable.notifyObservers(this),t.enableEffect(this._drawWrapper),t.setState(!1),e.setTexture("textureSampler",this.texture),e.setMatrix("textureMatrix",this.texture.getTextureMatrix()),e.setFloat4("color",this.color.r,this.color.g,this.color.b,this.color.a),e.setVector2("offset",this.offset),e.setVector2("scale",this.scale),t.bindBuffers(this._vertexBuffers,this._indexBuffer,e),this.alphaTest?t.drawElementsType(ki.TriangleFillMode,0,6):(t.setAlphaMode(this.alphaBlendingMode),t.drawElementsType(ki.TriangleFillMode,0,6),t.setAlphaMode(0)),this.onAfterRenderObservable.notifyObservers(this)}dispose(){const t=this._vertexBuffers[P.PositionKind];t&&(t.dispose(),this._vertexBuffers[P.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this.texture&&(this.texture.dispose(),this.texture=null),this.renderTargetTextures=[];const e=this._scene.layers.indexOf(this);this._scene.layers.splice(e,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onAfterRenderObservable.clear(),this.onBeforeRenderObservable.clear()}}class Xo extends Wi{constructor(t,e){super(t,e,"color",{attributes:["position"],uniforms:["world","viewProjection","color"]}),this.disableColorWrite=!0,this.forceDepthWrite=!0,this.setColor4("color",new A(0,0,0,1))}}class Ko extends gs{constructor(t,e,i,s,o,r,a){super(t,i,null,s,o,r),this._animate=!0,this._time=0,this._texturePath=e,a?this.setFragment(this._texturePath):this._loadJson(e),this.refreshRate=1}_loadJson(t){const e=()=>{try{this.setFragment(this._texturePath)}catch{Ge.Log("No json or ShaderStore or DOM element found for CustomProceduralTexture")}},i=t+"/config.json",s=new Hi;s.open("GET",i),s.addEventListener("load",()=>{if(s.status===200||s.responseText&&s.responseText.length>0)try{this._config=JSON.parse(s.response),this.updateShaderUniforms(),this.updateTextures(),this.setFragment(this._texturePath+"/custom"),this._animate=this._config.animate,this.refreshRate=this._config.refreshrate}catch{e()}else e()},!1),s.addEventListener("error",()=>{e()},!1);try{s.send()}catch{Ge.Error("CustomProceduralTexture: Error on XHR send request.")}}isReady(){if(!super.isReady())return!1;for(const t in this._textures)if(!this._textures[t].isReady())return!1;return!0}render(t){const e=this.getScene();this._animate&&e&&(this._time+=e.getAnimationRatio()*.03,this.updateShaderUniforms()),super.render(t)}updateTextures(){for(let t=0;t<this._config.sampler2Ds.length;t++)this.setTexture(this._config.sampler2Ds[t].sample2Dname,new S(this._texturePath+"/"+this._config.sampler2Ds[t].textureRelativeUrl,this.getScene()))}updateShaderUniforms(){if(this._config)for(let t=0;t<this._config.uniforms.length;t++){const e=this._config.uniforms[t];switch(e.type){case"float":this.setFloat(e.name,e.value);break;case"color3":this.setColor3(e.name,new w(e.r,e.g,e.b));break;case"color4":this.setColor4(e.name,new A(e.r,e.g,e.b,e.a));break;case"vector2":this.setVector2(e.name,new z(e.x,e.y));break;case"vector3":this.setVector3(e.name,new c(e.x,e.y,e.z));break}}this.setFloat("time",this._time)}get animate(){return this._animate}set animate(t){this._animate=t}}class jo extends S{constructor(t,e,i,s,o,r,a=!0,l=!1,h=S.TRILINEAR_SAMPLINGMODE,d=0){super(null,r,!a,l),this.format=o,this._texture=r.getEngine().createRawTexture3D(t,e,i,s,o,a,l,h,null,d),this.is3D=!0}update(t){this._texture&&this._getEngine().updateRawTexture3D(this._texture,t,this._texture.format,this._texture.invertY,null,this._texture.type)}}class qi extends ms{constructor(t,e,i,s){super(t,e,i,s,!0),this.refractionPlane=new ps(0,1,0,1),this.depth=2,this.onBeforeRenderObservable.add(()=>{this.getScene().clipPlane=this.refractionPlane}),this.onAfterRenderObservable.add(()=>{this.getScene().clipPlane=null})}clone(){const t=this.getScene();if(!t)return this;const e=this.getSize(),i=new qi(this.name,e.width,t,this._generateMipMaps);return i.hasAlpha=this.hasAlpha,i.level=this.level,i.refractionPlane=this.refractionPlane.clone(),this.renderList&&(i.renderList=this.renderList.slice(0)),i.depth=this.depth,i}serialize(){if(!this.name)return null;const t=super.serialize();return t.mirrorPlane=this.refractionPlane.asArray(),t.depth=this.depth,t}}class Zo extends bs{get renderTarget(){return this._renderTarget}constructor(t,e,i){super(null),this._renderTarget=null,this._engine=t,this._renderTargetOptions=i,this.resize(e)}resize(t){var e;(e=this._renderTarget)===null||e===void 0||e.dispose(),this._renderTarget=null,this._texture=null,this._size=t,this._engine&&(this._renderTarget=this._engine.createRenderTargetTexture(this._size,this._renderTargetOptions)),this._texture=this.renderTarget.texture}getInternalTexture(){return this._texture}getClassName(){return"ThinRenderTargetTexture"}dispose(t=!1){var e;(e=this._renderTarget)===null||e===void 0||e.dispose(!0),this._renderTarget=null,t||super.dispose()}}class Ii extends Ke{constructor(t,e,i,s=1,o=60,r=!0){super(t,i),this._sectionPolygonPointsCount=4,this._running=!1,this._autoStart=r,this._generator=e,this.diameter=s,this._length=o,this._sectionVectors=[],this._sectionNormalVectors=[];for(let a=0;a<this._sectionPolygonPointsCount;a++)this._sectionVectors[a]=c.Zero(),this._sectionNormalVectors[a]=c.Zero();this._createMesh()}getClassName(){return"TrailMesh"}_createMesh(){const t=new Ee,e=[],i=[],s=[];let o=c.Zero();this._generator instanceof Bi&&this._generator.hasBoundingInfo?o=this._generator.getBoundingInfo().boundingBox.centerWorld:o=this._generator.position;const r=2*Math.PI/this._sectionPolygonPointsCount;for(let a=0;a<this._sectionPolygonPointsCount;a++)e.push(o.x+Math.cos(a*r)*this.diameter,o.y+Math.sin(a*r)*this.diameter,o.z);for(let a=1;a<=this._length;a++){for(let h=0;h<this._sectionPolygonPointsCount;h++)e.push(o.x+Math.cos(h*r)*this.diameter,o.y+Math.sin(h*r)*this.diameter,o.z);const l=e.length/3-2*this._sectionPolygonPointsCount;for(let h=0;h<this._sectionPolygonPointsCount-1;h++)s.push(l+h,l+h+this._sectionPolygonPointsCount,l+h+this._sectionPolygonPointsCount+1),s.push(l+h,l+h+this._sectionPolygonPointsCount+1,l+h+1);s.push(l+this._sectionPolygonPointsCount-1,l+this._sectionPolygonPointsCount-1+this._sectionPolygonPointsCount,l+this._sectionPolygonPointsCount),s.push(l+this._sectionPolygonPointsCount-1,l+this._sectionPolygonPointsCount,l)}Ee.ComputeNormals(e,s,i),t.positions=e,t.normals=i,t.indices=s,t.applyToMesh(this,!0),this._autoStart&&this.start()}start(){this._running||(this._running=!0,this._beforeRenderObserver=this.getScene().onBeforeRenderObservable.add(()=>{this.update()}))}stop(){this._beforeRenderObserver&&this._running&&(this._running=!1,this.getScene().onBeforeRenderObservable.remove(this._beforeRenderObserver))}update(){const t=this.getVerticesData(P.PositionKind),e=this.getVerticesData(P.NormalKind),i=this._generator.getWorldMatrix();if(t&&e){for(let r=3*this._sectionPolygonPointsCount;r<t.length;r++)t[r-3*this._sectionPolygonPointsCount]=t[r]-e[r]/this._length*this.diameter;for(let r=3*this._sectionPolygonPointsCount;r<e.length;r++)e[r-3*this._sectionPolygonPointsCount]=e[r];const s=t.length-3*this._sectionPolygonPointsCount,o=2*Math.PI/this._sectionPolygonPointsCount;for(let r=0;r<this._sectionPolygonPointsCount;r++)this._sectionVectors[r].copyFromFloats(Math.cos(r*o)*this.diameter,Math.sin(r*o)*this.diameter,0),this._sectionNormalVectors[r].copyFromFloats(Math.cos(r*o),Math.sin(r*o),0),c.TransformCoordinatesToRef(this._sectionVectors[r],i,this._sectionVectors[r]),c.TransformNormalToRef(this._sectionNormalVectors[r],i,this._sectionNormalVectors[r]);for(let r=0;r<this._sectionPolygonPointsCount;r++)t[s+3*r]=this._sectionVectors[r].x,t[s+3*r+1]=this._sectionVectors[r].y,t[s+3*r+2]=this._sectionVectors[r].z,e[s+3*r]=this._sectionNormalVectors[r].x,e[s+3*r+1]=this._sectionNormalVectors[r].y,e[s+3*r+2]=this._sectionNormalVectors[r].z;this.updateVerticesData(P.PositionKind,t,!0,!1),this.updateVerticesData(P.NormalKind,e,!0,!1)}}clone(t="",e){return new Ii(t,e===void 0?this._generator:e,this.getScene(),this.diameter,this._length,this._autoStart)}serialize(t){super.serialize(t)}static Parse(t,e){var i;return new Ii(t.name,t._generator,e,(i=t.diameter)!==null&&i!==void 0?i:t._diameter,t._length,t._autoStart)}}class qo extends oi{getClassName(){return"HighlightsPostProcess"}constructor(t,e,i,s,o,r,a=0){super(t,"highlights",null,null,e,i,s,o,r,null,a)}}class $o extends vs{constructor(t,e,i,s=1,o){super(i.getEngine(),t),this.LensChromaticAberrationEffect="LensChromaticAberrationEffect",this.HighlightsEnhancingEffect="HighlightsEnhancingEffect",this.LensDepthOfFieldEffect="LensDepthOfFieldEffect",this._pentagonBokehIsEnabled=!1,this._scene=i,this._depthTexture=i.enableDepthRenderer().getDepthMap(),e.grain_texture?this._grainTexture=e.grain_texture:this._createGrainTexture(),this._edgeBlur=e.edge_blur?e.edge_blur:0,this._grainAmount=e.grain_amount?e.grain_amount:0,this._chromaticAberration=e.chromatic_aberration?e.chromatic_aberration:0,this._distortion=e.distortion?e.distortion:0,this._highlightsGain=e.dof_gain!==void 0?e.dof_gain:-1,this._highlightsThreshold=e.dof_threshold?e.dof_threshold:1,this._dofDistance=e.dof_focus_distance!==void 0?e.dof_focus_distance:-1,this._dofAperture=e.dof_aperture?e.dof_aperture:1,this._dofDarken=e.dof_darken?e.dof_darken:0,this._dofPentagon=e.dof_pentagon!==void 0?e.dof_pentagon:!0,this._blurNoise=e.blur_noise!==void 0?e.blur_noise:!0,this._createChromaticAberrationPostProcess(s),this._createHighlightsPostProcess(s),this._createDepthOfFieldPostProcess(s/4),this.addEffect(new pi(i.getEngine(),this.LensChromaticAberrationEffect,()=>this._chromaticAberrationPostProcess,!0)),this.addEffect(new pi(i.getEngine(),this.HighlightsEnhancingEffect,()=>this._highlightsPostProcess,!0)),this.addEffect(new pi(i.getEngine(),this.LensDepthOfFieldEffect,()=>this._depthOfFieldPostProcess,!0)),this._highlightsGain===-1&&this._disableEffect(this.HighlightsEnhancingEffect,null),i.postProcessRenderPipelineManager.addPipeline(this),o&&i.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(t,o)}getClassName(){return"LensRenderingPipeline"}get scene(){return this._scene}get edgeBlur(){return this._edgeBlur}set edgeBlur(t){this.setEdgeBlur(t)}get grainAmount(){return this._grainAmount}set grainAmount(t){this.setGrainAmount(t)}get chromaticAberration(){return this._chromaticAberration}set chromaticAberration(t){this.setChromaticAberration(t)}get dofAperture(){return this._dofAperture}set dofAperture(t){this.setAperture(t)}get edgeDistortion(){return this._distortion}set edgeDistortion(t){this.setEdgeDistortion(t)}get dofDistortion(){return this._dofDistance}set dofDistortion(t){this.setFocusDistance(t)}get darkenOutOfFocus(){return this._dofDarken}set darkenOutOfFocus(t){this.setDarkenOutOfFocus(t)}get blurNoise(){return this._blurNoise}set blurNoise(t){this._blurNoise=t}get pentagonBokeh(){return this._pentagonBokehIsEnabled}set pentagonBokeh(t){t?this.enablePentagonBokeh():this.disablePentagonBokeh()}get highlightsGain(){return this._highlightsGain}set highlightsGain(t){this.setHighlightsGain(t)}get highlightsThreshold(){return this._highlightsThreshold}set highlightsThreshold(t){this.setHighlightsThreshold(t)}setEdgeBlur(t){this._edgeBlur=t}disableEdgeBlur(){this._edgeBlur=0}setGrainAmount(t){this._grainAmount=t}disableGrain(){this._grainAmount=0}setChromaticAberration(t){this._chromaticAberration=t}disableChromaticAberration(){this._chromaticAberration=0}setEdgeDistortion(t){this._distortion=t}disableEdgeDistortion(){this._distortion=0}setFocusDistance(t){this._dofDistance=t}disableDepthOfField(){this._dofDistance=-1}setAperture(t){this._dofAperture=t}setDarkenOutOfFocus(t){this._dofDarken=t}enablePentagonBokeh(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0}disablePentagonBokeh(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()}enableNoiseBlur(){this._blurNoise=!0}disableNoiseBlur(){this._blurNoise=!1}setHighlightsGain(t){this._highlightsGain=t}setHighlightsThreshold(t){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=t}disableHighlights(){this._highlightsGain=-1}dispose(t=!1){this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),t&&this._scene.disableDepthRenderer()}_createChromaticAberrationPostProcess(t){this._chromaticAberrationPostProcess=new oi("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],t,null,S.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=e=>{e.setFloat("chromatic_aberration",this._chromaticAberration),e.setFloat("screen_width",this._scene.getEngine().getRenderWidth()),e.setFloat("screen_height",this._scene.getEngine().getRenderHeight()),e.setFloat("radialIntensity",1),e.setFloat2("direction",17,17),e.setFloat2("centerPosition",.5,.5)}}_createHighlightsPostProcess(t){this._highlightsPostProcess=new oi("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],t,null,S.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.externalTextureSamplerBinding=!0,this._highlightsPostProcess.onApply=e=>{e.setFloat("gain",this._highlightsGain),e.setFloat("threshold",this._highlightsThreshold),e.setTextureFromPostProcess("textureSampler",this._chromaticAberrationPostProcess),e.setFloat("screen_width",this._scene.getEngine().getRenderWidth()),e.setFloat("screen_height",this._scene.getEngine().getRenderHeight())}}_createDepthOfFieldPostProcess(t){this._depthOfFieldPostProcess=new oi("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],t,null,S.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.externalTextureSamplerBinding=!0,this._depthOfFieldPostProcess.onApply=e=>{e.setTexture("depthSampler",this._depthTexture),e.setTexture("grainSampler",this._grainTexture),e.setTextureFromPostProcess("textureSampler",this._highlightsPostProcess),e.setTextureFromPostProcess("highlightsSampler",this._depthOfFieldPostProcess),e.setFloat("grain_amount",this._grainAmount),e.setBool("blur_noise",this._blurNoise),e.setFloat("screen_width",this._scene.getEngine().getRenderWidth()),e.setFloat("screen_height",this._scene.getEngine().getRenderHeight()),e.setFloat("distortion",this._distortion),e.setBool("dof_enabled",this._dofDistance!==-1),e.setFloat("screen_distance",1/(.1-1/this._dofDistance)),e.setFloat("aperture",this._dofAperture),e.setFloat("darken",this._dofDarken),e.setFloat("edge_blur",this._edgeBlur),e.setBool("highlights",this._highlightsGain!==-1),this._scene.activeCamera&&(e.setFloat("near",this._scene.activeCamera.minZ),e.setFloat("far",this._scene.activeCamera.maxZ))}}_createGrainTexture(){this._grainTexture=new Ti("LensNoiseTexture",512,this._scene,!1,S.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=S.WRAP_ADDRESSMODE,this._grainTexture.wrapV=S.WRAP_ADDRESSMODE;const e=this._grainTexture.getContext(),i=(o,r)=>Math.random()*(r-o)+o;let s;for(let o=0;o<512;o++)for(let r=0;r<512;r++)s=Math.floor(i(.42,.58)*255),e.fillStyle="rgb("+s+", "+s+", "+s+")",e.fillRect(o,r,1,1);this._grainTexture.update(!1)}}class I{constructor(t,e=I.UNITMODE_PIXEL,i=!0){this.negativeValueAllowed=i,this._value=1,this._unit=I.UNITMODE_PIXEL,this.ignoreAdaptiveScaling=!1,this.onChangedObservable=new B,this._value=t,this._unit=e,this._originalUnit=e}get isPercentage(){return this._unit===I.UNITMODE_PERCENTAGE}get isPixel(){return this._unit===I.UNITMODE_PIXEL}get internalValue(){return this._value}get value(){return this._value}set value(t){t!==this._value&&(this._value=t,this.onChangedObservable.notifyObservers())}get unit(){return this._unit}set unit(t){t!==this._unit&&(this._unit=t,this.onChangedObservable.notifyObservers())}getValueInPixel(t,e){return this.isPixel?this.getValue(t):this.getValue(t)*e}updateInPlace(t,e=I.UNITMODE_PIXEL){return(this.value!==t||this.unit!==e)&&(this._value=t,this._unit=e,this.onChangedObservable.notifyObservers()),this}getValue(t){if(t&&!this.ignoreAdaptiveScaling&&this.unit!==I.UNITMODE_PERCENTAGE){let e=0,i=0;if(t.idealWidth&&(e=Math.ceil(this._value*t.getSize().width/t.idealWidth)),t.idealHeight&&(i=Math.ceil(this._value*t.getSize().height/t.idealHeight)),t.useSmallestIdeal&&t.idealWidth&&t.idealHeight)return window.innerWidth<window.innerHeight?e:i;if(t.idealWidth)return e;if(t.idealHeight)return i}return this._value}toString(t,e){switch(this._unit){case I.UNITMODE_PERCENTAGE:{const i=this.getValue(t)*100;return(e?i.toFixed(e):i)+"%"}case I.UNITMODE_PIXEL:{const i=this.getValue(t);return(e?i.toFixed(e):i)+"px"}}return this._unit.toString()}fromString(t){const e=I._Regex.exec(t.toString());if(!e||e.length===0)return!1;let i=parseFloat(e[1]),s=this._originalUnit;if(this.negativeValueAllowed||i<0&&(i=0),e.length===4)switch(e[3]){case"px":s=I.UNITMODE_PIXEL;break;case"%":s=I.UNITMODE_PERCENTAGE,i/=100;break}return i===this._value&&s===this._unit?!1:(this._value=i,this._unit=s,this.onChangedObservable.notifyObservers(),!0)}static get UNITMODE_PERCENTAGE(){return I._UNITMODE_PERCENTAGE}static get UNITMODE_PIXEL(){return I._UNITMODE_PIXEL}}I._Regex=/(^-?\d*(\.\d+)?)(%|px)?/;I._UNITMODE_PERCENTAGE=0;I._UNITMODE_PIXEL=1;const Fe=[new z(0,0),new z(0,0),new z(0,0),new z(0,0)],We=[new z(0,0),new z(0,0),new z(0,0),new z(0,0)],Xt=new z(0,0),be=new z(0,0);class et{constructor(t,e,i,s){this.left=t,this.top=e,this.width=i,this.height=s}copyFrom(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height}copyFromFloats(t,e,i,s){this.left=t,this.top=e,this.width=i,this.height=s}static CombineToRef(t,e,i){const s=Math.min(t.left,e.left),o=Math.min(t.top,e.top),r=Math.max(t.left+t.width,e.left+e.width),a=Math.max(t.top+t.height,e.top+e.height);i.left=s,i.top=o,i.width=r-s,i.height=a-o}addAndTransformToRef(t,e,i,s,o,r){const a=this.left+e,l=this.top+i,h=this.width+s,d=this.height+o;Fe[0].copyFromFloats(a,l),Fe[1].copyFromFloats(a+h,l),Fe[2].copyFromFloats(a+h,l+d),Fe[3].copyFromFloats(a,l+d),Xt.copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE),be.copyFromFloats(0,0);for(let f=0;f<4;f++)t.transformCoordinates(Fe[f].x,Fe[f].y,We[f]),Xt.x=Math.floor(Math.min(Xt.x,We[f].x)),Xt.y=Math.floor(Math.min(Xt.y,We[f].y)),be.x=Math.ceil(Math.max(be.x,We[f].x)),be.y=Math.ceil(Math.max(be.y,We[f].y));r.left=Xt.x,r.top=Xt.y,r.width=be.x-Xt.x,r.height=be.y-Xt.y}transformToRef(t,e){this.addAndTransformToRef(t,0,0,0,0,e)}isEqualsTo(t){return!(this.left!==t.left||this.top!==t.top||this.width!==t.width||this.height!==t.height)}static Empty(){return new et(0,0,0,0)}}class vi extends z{constructor(t,e=0){super(t.x,t.y),this.buttonIndex=e}}class M{constructor(t,e,i,s,o,r){this.m=new Float32Array(6),this.fromValues(t,e,i,s,o,r)}fromValues(t,e,i,s,o,r){return this.m[0]=t,this.m[1]=e,this.m[2]=i,this.m[3]=s,this.m[4]=o,this.m[5]=r,this}determinant(){return this.m[0]*this.m[3]-this.m[1]*this.m[2]}invertToRef(t){const e=this.m[0],i=this.m[1],s=this.m[2],o=this.m[3],r=this.m[4],a=this.m[5],l=this.determinant();if(l<dt*dt)return t.m[0]=0,t.m[1]=0,t.m[2]=0,t.m[3]=0,t.m[4]=0,t.m[5]=0,this;const h=1/l,d=s*a-o*r,f=i*r-e*a;return t.m[0]=o*h,t.m[1]=-i*h,t.m[2]=-s*h,t.m[3]=e*h,t.m[4]=d*h,t.m[5]=f*h,this}multiplyToRef(t,e){const i=this.m[0],s=this.m[1],o=this.m[2],r=this.m[3],a=this.m[4],l=this.m[5],h=t.m[0],d=t.m[1],f=t.m[2],g=t.m[3],y=t.m[4],V=t.m[5];return e.m[0]=i*h+s*f,e.m[1]=i*d+s*g,e.m[2]=o*h+r*f,e.m[3]=o*d+r*g,e.m[4]=a*h+l*f+y,e.m[5]=a*d+l*g+V,this}transformCoordinates(t,e,i){return i.x=t*this.m[0]+e*this.m[2]+this.m[4],i.y=t*this.m[1]+e*this.m[3]+this.m[5],this}static Identity(){return new M(1,0,0,1,0,0)}static IdentityToRef(t){t.m[0]=1,t.m[1]=0,t.m[2]=0,t.m[3]=1,t.m[4]=0,t.m[5]=0}static TranslationToRef(t,e,i){i.fromValues(1,0,0,1,t,e)}static ScalingToRef(t,e,i){i.fromValues(t,0,0,e,0,0)}static RotationToRef(t,e){const i=Math.sin(t),s=Math.cos(t);e.fromValues(s,i,-i,s,0,0)}static ComposeToRef(t,e,i,s,o,r,a){M.TranslationToRef(t,e,M._TempPreTranslationMatrix),M.ScalingToRef(s,o,M._TempScalingMatrix),M.RotationToRef(i,M._TempRotationMatrix),M.TranslationToRef(-t,-e,M._TempPostTranslationMatrix),M._TempPreTranslationMatrix.multiplyToRef(M._TempScalingMatrix,M._TempCompose0),M._TempCompose0.multiplyToRef(M._TempRotationMatrix,M._TempCompose1),r?(M._TempCompose1.multiplyToRef(M._TempPostTranslationMatrix,M._TempCompose2),M._TempCompose2.multiplyToRef(r,a)):M._TempCompose1.multiplyToRef(M._TempPostTranslationMatrix,a)}}M._TempPreTranslationMatrix=M.Identity();M._TempPostTranslationMatrix=M.Identity();M._TempRotationMatrix=M.Identity();M._TempScalingMatrix=M.Identity();M._TempCompose0=M.Identity();M._TempCompose1=M.Identity();M._TempCompose2=M.Identity();class Ri{static Round(t,e=Ri.DefaultRoundingPrecision){return Math.round(t*e)/e}}Ri.DefaultRoundingPrecision=100;class u{get isReadOnly(){return this._isReadOnly}set isReadOnly(t){this._isReadOnly=t}get transformedMeasure(){return this._evaluatedMeasure}set clipChildren(t){this._clipChildren=t}get clipChildren(){return this._clipChildren}set clipContent(t){this._clipContent=t}get clipContent(){return this._clipContent}get shadowOffsetX(){return this._shadowOffsetX}set shadowOffsetX(t){this._shadowOffsetX!==t&&(this._shadowOffsetX=t,this._markAsDirty())}get shadowOffsetY(){return this._shadowOffsetY}set shadowOffsetY(t){this._shadowOffsetY!==t&&(this._shadowOffsetY=t,this._markAsDirty())}get shadowBlur(){return this._shadowBlur}set shadowBlur(t){this._shadowBlur!==t&&(this._previousShadowBlur=this._shadowBlur,this._shadowBlur=t,this._markAsDirty())}get shadowColor(){return this._shadowColor}set shadowColor(t){this._shadowColor!==t&&(this._shadowColor=t,this._markAsDirty())}get typeName(){return this._getTypeName()}getClassName(){return this._getTypeName()}set accessibilityTag(t){this._accessibilityTag=t,this.onAccessibilityTagChangedObservable.notifyObservers(t)}get accessibilityTag(){return this._accessibilityTag}get host(){return this._host}get fontOffset(){return this._fontOffset}set fontOffset(t){this._fontOffset=t}get alpha(){return this._alpha}set alpha(t){this._alpha!==t&&(this._alphaSet=!0,this._alpha=t,this._markAsDirty())}get highlightLineWidth(){return this._highlightLineWidth}set highlightLineWidth(t){this._highlightLineWidth!==t&&(this._highlightLineWidth=t,this._markAsDirty())}get isHighlighted(){return this._isHighlighted}set isHighlighted(t){this._isHighlighted!==t&&(this._isHighlighted=t,this._markAsDirty())}get highlightColor(){return this._highlightColor}set highlightColor(t){this._highlightColor!==t&&(this._highlightColor=t,this._markAsDirty())}get scaleX(){return this._scaleX}set scaleX(t){this._scaleX!==t&&(this._scaleX=t,this._markAsDirty(),this._markMatrixAsDirty())}get scaleY(){return this._scaleY}set scaleY(t){this._scaleY!==t&&(this._scaleY=t,this._markAsDirty(),this._markMatrixAsDirty())}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._markAsDirty(),this._markMatrixAsDirty())}get transformCenterY(){return this._transformCenterY}set transformCenterY(t){this._transformCenterY!==t&&(this._transformCenterY=t,this._markAsDirty(),this._markMatrixAsDirty())}get transformCenterX(){return this._transformCenterX}set transformCenterX(t){this._transformCenterX!==t&&(this._transformCenterX=t,this._markAsDirty(),this._markMatrixAsDirty())}get horizontalAlignment(){return this._horizontalAlignment}set horizontalAlignment(t){this._horizontalAlignment!==t&&(this._horizontalAlignment=t,this._markAsDirty())}get verticalAlignment(){return this._verticalAlignment}set verticalAlignment(t){this._verticalAlignment!==t&&(this._verticalAlignment=t,this._markAsDirty())}get width(){return this._width.toString(this._host)}set width(t){this._fixedRatioMasterIsWidth=!0,this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()}get widthInPixels(){return this._width.getValueInPixel(this._host,this._cachedParentMeasure.width)}set widthInPixels(t){isNaN(t)||(this._fixedRatioMasterIsWidth=!0,this.width=t+"px")}get height(){return this._height.toString(this._host)}set height(t){this._fixedRatioMasterIsWidth=!1,this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()}get heightInPixels(){return this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)}set heightInPixels(t){isNaN(t)||(this._fixedRatioMasterIsWidth=!1,this.height=t+"px")}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily!==t&&(this._fontFamily=t,this._resetFontCache())}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle!==t&&(this._fontStyle=t,this._resetFontCache())}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this._resetFontCache())}get style(){return this._style}set style(t){this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this._style=t,this._style&&(this._styleObserver=this._style.onChangedObservable.add(()=>{this._markAsDirty(),this._resetFontCache()})),this._markAsDirty(),this._resetFontCache()}get _isFontSizeInPercentage(){return this._fontSize.isPercentage}get fontSizeInPixels(){const t=this._style?this._style._fontSize:this._fontSize;return t.isPixel?t.getValue(this._host):t.getValueInPixel(this._host,this._tempParentMeasure.height||this._cachedParentMeasure.height)}set fontSizeInPixels(t){isNaN(t)||(this.fontSize=t+"px")}get fontSize(){return this._fontSize.toString(this._host)}set fontSize(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&(this._markAsDirty(),this._resetFontCache())}get color(){return this._color}set color(t){this._color!==t&&(this._color=t,this._markAsDirty())}get gradient(){return this._gradient}set gradient(t){this._gradient!==t&&(this._gradient=t,this._markAsDirty())}get zIndex(){return this._zIndex}set zIndex(t){this.zIndex!==t&&(this._zIndex=t,this.parent&&this.parent._reOrderControl(this))}get notRenderable(){return this._doNotRender}set notRenderable(t){this._doNotRender!==t&&(this._doNotRender=t,this._markAsDirty())}get isVisible(){return this._isVisible}set isVisible(t){this._isVisible!==t&&(this._isVisible=t,this._markAsDirty(!0),this.onIsVisibleChangedObservable.notifyObservers(t))}get isDirty(){return this._isDirty}get linkedMesh(){return this._linkedMesh}get descendantsOnlyPadding(){return this._descendantsOnlyPadding}set descendantsOnlyPadding(t){this._descendantsOnlyPadding!==t&&(this._descendantsOnlyPadding=t,this._markAsDirty())}get paddingLeft(){return this._paddingLeft.toString(this._host)}set paddingLeft(t){this._paddingLeft.fromString(t)&&this._markAsDirty()}get paddingLeftInPixels(){return this._paddingLeft.getValueInPixel(this._host,this._cachedParentMeasure.width)}set paddingLeftInPixels(t){isNaN(t)||(this.paddingLeft=t+"px")}get _paddingLeftInPixels(){return this._descendantsOnlyPadding?0:this.paddingLeftInPixels}get paddingRight(){return this._paddingRight.toString(this._host)}set paddingRight(t){this._paddingRight.fromString(t)&&this._markAsDirty()}get paddingRightInPixels(){return this._paddingRight.getValueInPixel(this._host,this._cachedParentMeasure.width)}set paddingRightInPixels(t){isNaN(t)||(this.paddingRight=t+"px")}get _paddingRightInPixels(){return this._descendantsOnlyPadding?0:this.paddingRightInPixels}get paddingTop(){return this._paddingTop.toString(this._host)}set paddingTop(t){this._paddingTop.fromString(t)&&this._markAsDirty()}get paddingTopInPixels(){return this._paddingTop.getValueInPixel(this._host,this._cachedParentMeasure.height)}set paddingTopInPixels(t){isNaN(t)||(this.paddingTop=t+"px")}get _paddingTopInPixels(){return this._descendantsOnlyPadding?0:this.paddingTopInPixels}get paddingBottom(){return this._paddingBottom.toString(this._host)}set paddingBottom(t){this._paddingBottom.fromString(t)&&this._markAsDirty()}get paddingBottomInPixels(){return this._paddingBottom.getValueInPixel(this._host,this._cachedParentMeasure.height)}set paddingBottomInPixels(t){isNaN(t)||(this.paddingBottom=t+"px")}get _paddingBottomInPixels(){return this._descendantsOnlyPadding?0:this.paddingBottomInPixels}get left(){return this._left.toString(this._host)}set left(t){this._left.fromString(t)&&this._markAsDirty()}get leftInPixels(){return this._left.getValueInPixel(this._host,this._cachedParentMeasure.width)}set leftInPixels(t){isNaN(t)||(this.left=t+"px")}get top(){return this._top.toString(this._host)}set top(t){this._top.fromString(t)&&this._markAsDirty()}get topInPixels(){return this._top.getValueInPixel(this._host,this._cachedParentMeasure.height)}set topInPixels(t){isNaN(t)||(this.top=t+"px")}get linkOffsetX(){return this._linkOffsetX.toString(this._host)}set linkOffsetX(t){this._linkOffsetX.fromString(t)&&this._markAsDirty()}get linkOffsetXInPixels(){return this._linkOffsetX.getValueInPixel(this._host,this._cachedParentMeasure.width)}set linkOffsetXInPixels(t){isNaN(t)||(this.linkOffsetX=t+"px")}get linkOffsetY(){return this._linkOffsetY.toString(this._host)}set linkOffsetY(t){this._linkOffsetY.fromString(t)&&this._markAsDirty()}get linkOffsetYInPixels(){return this._linkOffsetY.getValueInPixel(this._host,this._cachedParentMeasure.height)}set linkOffsetYInPixels(t){isNaN(t)||(this.linkOffsetY=t+"px")}get centerX(){return this._currentMeasure.left+this._currentMeasure.width/2}get centerY(){return this._currentMeasure.top+this._currentMeasure.height/2}get isEnabled(){return this._isEnabled}set isEnabled(t){if(this._isEnabled===t)return;this._isEnabled=t,this._markAsDirty();const e=i=>{if(i.host){for(const s in i.host._lastControlOver)i===this.host._lastControlOver[s]&&(i._onPointerOut(i,null,!0),delete i.host._lastControlOver[s]);i.children!==void 0&&i.children.forEach(e)}};e(this)}get disabledColor(){return this._disabledColor}set disabledColor(t){this._disabledColor!==t&&(this._disabledColor=t,this._markAsDirty())}get disabledColorItem(){return this._disabledColorItem}set disabledColorItem(t){this._disabledColorItem!==t&&(this._disabledColorItem=t,this._markAsDirty())}constructor(t){this.name=t,this._alpha=1,this._alphaSet=!1,this._zIndex=0,this._currentMeasure=et.Empty(),this._tempPaddingMeasure=et.Empty(),this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new I(18,I.UNITMODE_PIXEL,!1),this._width=new I(1,I.UNITMODE_PERCENTAGE,!1),this._height=new I(1,I.UNITMODE_PERCENTAGE,!1),this._color="",this._style=null,this._horizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,this._verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,this._isDirty=!0,this._wasDirty=!1,this._tempParentMeasure=et.Empty(),this._prevCurrentMeasureTransformedIntoGlobalSpace=et.Empty(),this._cachedParentMeasure=et.Empty(),this._descendantsOnlyPadding=!1,this._paddingLeft=new I(0),this._paddingRight=new I(0),this._paddingTop=new I(0),this._paddingBottom=new I(0),this._left=new I(0),this._top=new I(0),this._scaleX=1,this._scaleY=1,this._rotation=0,this._transformCenterX=.5,this._transformCenterY=.5,this._transformMatrix=M.Identity(),this._invertTransformMatrix=M.Identity(),this._transformedPosition=z.Zero(),this._isMatrixDirty=!0,this._isVisible=!0,this._isHighlighted=!1,this._highlightColor="#4affff",this._highlightLineWidth=2,this._fontSet=!1,this._dummyVector2=z.Zero(),this._downCount=0,this._enterCount=-1,this._doNotRender=!1,this._downPointerIds={},this._evaluatedMeasure=new et(0,0,0,0),this._evaluatedParentMeasure=new et(0,0,0,0),this._isEnabled=!0,this._disabledColor="#9a9a9a",this._disabledColorItem="#6a6a6a",this._isReadOnly=!1,this._gradient=null,this._rebuildLayout=!1,this._customData={},this._isClipped=!1,this._automaticSize=!1,this.metadata=null,this.isHitTestVisible=!0,this.isPointerBlocker=!1,this.isFocusInvisible=!1,this._clipChildren=!0,this._clipContent=!0,this.useBitmapCache=!1,this._shadowOffsetX=0,this._shadowOffsetY=0,this._shadowBlur=0,this._previousShadowBlur=0,this._shadowColor="black",this.hoverCursor="",this._linkOffsetX=new I(0),this._linkOffsetY=new I(0),this._accessibilityTag=null,this.onAccessibilityTagChangedObservable=new B,this.onWheelObservable=new B,this.onPointerMoveObservable=new B,this.onPointerOutObservable=new B,this.onPointerDownObservable=new B,this.onPointerUpObservable=new B,this.onPointerClickObservable=new B,this.onPointerEnterObservable=new B,this.onDirtyObservable=new B,this.onBeforeDrawObservable=new B,this.onAfterDrawObservable=new B,this.onDisposeObservable=new B,this.onIsVisibleChangedObservable=new B,this.fixedRatio=0,this._fixedRatioMasterIsWidth=!0,this.animations=null,this._tmpMeasureA=new et(0,0,0,0)}_getTypeName(){return"Control"}getAscendantOfClass(t){return this.parent?this.parent.getClassName()===t?this.parent:this.parent.getAscendantOfClass(t):null}markAsDirty(t=!1){this._markAsDirty(t)}markAllAsDirty(){this._markAllAsDirty()}_resetFontCache(){this._fontSet=!0,this._markAsDirty()}isAscendant(t){return this.parent?this.parent===t?!0:this.parent.isAscendant(t):!1}getLocalCoordinates(t){const e=z.Zero();return this.getLocalCoordinatesToRef(t,e),e}getLocalCoordinatesToRef(t,e){return e.x=t.x-this._currentMeasure.left,e.y=t.y-this._currentMeasure.top,this}getParentLocalCoordinates(t){const e=z.Zero();return e.x=t.x-this._cachedParentMeasure.left,e.y=t.y-this._cachedParentMeasure.top,e}moveToVector3(t,e){if(!this._host||this.parent!==this._host._rootContainer){it.Error("Cannot move a control to a vector3 if the control is not at root level");return}this.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP;const i=this._host._getGlobalViewport(),s=c.Project(t,St.IdentityReadOnly,e.getTransformMatrix(),i);if(this._moveToProjectedPosition(s),s.z<0||s.z>1){this.notRenderable=!0;return}this.notRenderable=!1}getDescendantsToRef(t,e=!1,i){}getDescendants(t,e){const i=new Array;return this.getDescendantsToRef(i,t,e),i}linkWithMesh(t){if(!this._host||this.parent&&this.parent!==this._host._rootContainer){t&&it.Error("Cannot link a control to a mesh if the control is not at root level");return}const e=this._host._linkedControls.indexOf(this);if(e!==-1){this._linkedMesh=t,t||this._host._linkedControls.splice(e,1);return}else if(!t)return;this.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._linkedMesh=t,this._host._linkedControls.push(this)}setPadding(t,e,i,s){const o=t,r=e??o,a=i??o,l=s??r;this.paddingTop=o,this.paddingRight=r,this.paddingBottom=a,this.paddingLeft=l}setPaddingInPixels(t,e,i,s){const o=t,r=e??o,a=i??o,l=s??r;this.paddingTopInPixels=o,this.paddingRightInPixels=r,this.paddingBottomInPixels=a,this.paddingLeftInPixels=l}_moveToProjectedPosition(t){var e;const i=this._left.getValue(this._host),s=this._top.getValue(this._host),o=(e=this.parent)===null||e===void 0?void 0:e._currentMeasure;o&&this._processMeasures(o,this._host.getContext());let r=t.x+this._linkOffsetX.getValue(this._host)-this._currentMeasure.width/2,a=t.y+this._linkOffsetY.getValue(this._host)-this._currentMeasure.height/2;const l=this._left.ignoreAdaptiveScaling&&this._top.ignoreAdaptiveScaling;l&&(Math.abs(r-i)<.5&&(r=i),Math.abs(a-s)<.5&&(a=s)),!(!l&&i===r&&s===a)&&(this.left=r+"px",this.top=a+"px",this._left.ignoreAdaptiveScaling=!0,this._top.ignoreAdaptiveScaling=!0,this._markAsDirty())}_offsetLeft(t){this._isDirty=!0,this._currentMeasure.left+=t}_offsetTop(t){this._isDirty=!0,this._currentMeasure.top+=t}_markMatrixAsDirty(){this._isMatrixDirty=!0,this._flagDescendantsAsMatrixDirty()}_flagDescendantsAsMatrixDirty(){}_intersectsRect(t,e){return this._transform(e),!(this._evaluatedMeasure.left>=t.left+t.width||this._evaluatedMeasure.top>=t.top+t.height||this._evaluatedMeasure.left+this._evaluatedMeasure.width<=t.left||this._evaluatedMeasure.top+this._evaluatedMeasure.height<=t.top)}_computeAdditionnalOffsetX(){return 0}_computeAdditionnalOffsetY(){return 0}invalidateRect(){if(this._transform(),this.host&&this.host.useInvalidateRectOptimization){this._currentMeasure.transformToRef(this._transformMatrix,this._tmpMeasureA),et.CombineToRef(this._tmpMeasureA,this._prevCurrentMeasureTransformedIntoGlobalSpace,this._tmpMeasureA);const t=this.shadowOffsetX,e=this.shadowOffsetY,i=Math.max(this._previousShadowBlur,this.shadowBlur),s=Math.min(Math.min(t,0)-i*2,0),o=Math.max(Math.max(t,0)+i*2,0),r=Math.min(Math.min(e,0)-i*2,0),a=Math.max(Math.max(e,0)+i*2,0),l=this._computeAdditionnalOffsetX(),h=this._computeAdditionnalOffsetY();this.host.invalidateRect(Math.floor(this._tmpMeasureA.left+s-l),Math.floor(this._tmpMeasureA.top+r-h),Math.ceil(this._tmpMeasureA.left+this._tmpMeasureA.width+o+l),Math.ceil(this._tmpMeasureA.top+this._tmpMeasureA.height+a+h))}}_markAsDirty(t=!1){!this._isVisible&&!t||(this._isDirty=!0,this._markMatrixAsDirty(),this._host&&this._host.markAsDirty())}_markAllAsDirty(){this._markAsDirty(),this._font&&this._prepareFont()}_link(t){this._host=t,this._host&&(this.uniqueId=this._host.getScene().getUniqueId())}_transform(t){if(!this._isMatrixDirty&&this._scaleX===1&&this._scaleY===1&&this._rotation===0)return;const e=this._currentMeasure.width*this._transformCenterX+this._currentMeasure.left,i=this._currentMeasure.height*this._transformCenterY+this._currentMeasure.top;t&&(t.translate(e,i),t.rotate(this._rotation),t.scale(this._scaleX,this._scaleY),t.translate(-e,-i)),(this._isMatrixDirty||this._cachedOffsetX!==e||this._cachedOffsetY!==i)&&(this._cachedOffsetX=e,this._cachedOffsetY=i,this._isMatrixDirty=!1,this._flagDescendantsAsMatrixDirty(),M.ComposeToRef(-e,-i,this._rotation,this._scaleX,this._scaleY,this.parent?this.parent._transformMatrix:null,this._transformMatrix),this._transformMatrix.invertToRef(this._invertTransformMatrix),this._currentMeasure.transformToRef(this._transformMatrix,this._evaluatedMeasure))}_renderHighlight(t){this.isHighlighted&&(t.save(),t.strokeStyle=this._highlightColor,t.lineWidth=this._highlightLineWidth,this._renderHighlightSpecific(t),t.restore())}_renderHighlightSpecific(t){t.strokeRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)}_getColor(t){return this.gradient?this.gradient.getCanvasGradient(t):this.color}_applyStates(t){this._isFontSizeInPercentage&&(this._fontSet=!0),this._host&&this._host.useSmallestIdeal&&!this._font&&(this._fontSet=!0),this._fontSet&&(this._prepareFont(),this._fontSet=!1),this._font&&(t.font=this._font),(this._color||this.gradient)&&(t.fillStyle=this._getColor(t)),u.AllowAlphaInheritance?t.globalAlpha*=this._alpha:this._alphaSet&&(t.globalAlpha=this.parent&&!this.parent.renderToIntermediateTexture?this.parent.alpha*this._alpha:this._alpha)}_layout(t,e){if(!this.isDirty&&(!this.isVisible||this.notRenderable))return!1;if(this._isDirty||!this._cachedParentMeasure.isEqualsTo(t)){this.host._numLayoutCalls++,this._currentMeasure.addAndTransformToRef(this._transformMatrix,-this._paddingLeftInPixels|0,-this._paddingTopInPixels|0,this._paddingRightInPixels|0,this._paddingBottomInPixels|0,this._prevCurrentMeasureTransformedIntoGlobalSpace),e.save(),this._applyStates(e);let i=0;do this._rebuildLayout=!1,this._processMeasures(t,e),i++;while(this._rebuildLayout&&i<3);i>=3&&Ge.Error(`Layout cycle detected in GUI (Control name=${this.name}, uniqueId=${this.uniqueId})`),e.restore(),this.invalidateRect(),this._evaluateClippingState(t)}return this._wasDirty=this._isDirty,this._isDirty=!1,!0}_processMeasures(t,e){this._tempPaddingMeasure.copyFrom(t),this.parent&&this.parent.descendantsOnlyPadding&&(this._tempPaddingMeasure.left+=this.parent.paddingLeftInPixels,this._tempPaddingMeasure.top+=this.parent.paddingTopInPixels,this._tempPaddingMeasure.width-=this.parent.paddingLeftInPixels+this.parent.paddingRightInPixels,this._tempPaddingMeasure.height-=this.parent.paddingTopInPixels+this.parent.paddingBottomInPixels),this._currentMeasure.copyFrom(this._tempPaddingMeasure),this._preMeasure(this._tempPaddingMeasure,e),this._measure(),this._computeAlignment(this._tempPaddingMeasure,e),this._currentMeasure.left=this._currentMeasure.left|0,this._currentMeasure.top=this._currentMeasure.top|0,this._currentMeasure.width=this._currentMeasure.width|0,this._currentMeasure.height=this._currentMeasure.height|0,this._additionalProcessing(this._tempPaddingMeasure,e),this._cachedParentMeasure.copyFrom(this._tempPaddingMeasure),this._currentMeasure.transformToRef(this._transformMatrix,this._evaluatedMeasure),this.onDirtyObservable.hasObservers()&&this.onDirtyObservable.notifyObservers(this)}_evaluateClippingState(t){if(this._transform(),this._currentMeasure.transformToRef(this._transformMatrix,this._evaluatedMeasure),this.parent&&this.parent.clipChildren){if(t.transformToRef(this.parent._transformMatrix,this._evaluatedParentMeasure),this._evaluatedMeasure.left>this._evaluatedParentMeasure.left+this._evaluatedParentMeasure.width){this._isClipped=!0;return}if(this._evaluatedMeasure.left+this._evaluatedMeasure.width<this._evaluatedParentMeasure.left){this._isClipped=!0;return}if(this._evaluatedMeasure.top>this._evaluatedParentMeasure.top+this._evaluatedParentMeasure.height){this._isClipped=!0;return}if(this._evaluatedMeasure.top+this._evaluatedMeasure.height<this._evaluatedParentMeasure.top){this._isClipped=!0;return}}this._isClipped=!1}_measure(){this._width.isPixel?this._currentMeasure.width=this._width.getValue(this._host):this._currentMeasure.width*=this._width.getValue(this._host),this._height.isPixel?this._currentMeasure.height=this._height.getValue(this._host):this._currentMeasure.height*=this._height.getValue(this._host),this.fixedRatio!==0&&(this._fixedRatioMasterIsWidth?this._currentMeasure.height=this._currentMeasure.width*this.fixedRatio:this._currentMeasure.width=this._currentMeasure.height*this.fixedRatio)}_computeAlignment(t,e){const i=this._currentMeasure.width,s=this._currentMeasure.height,o=t.width,r=t.height;let a=0,l=0;switch(this.horizontalAlignment){case u.HORIZONTAL_ALIGNMENT_LEFT:a=0;break;case u.HORIZONTAL_ALIGNMENT_RIGHT:a=o-i;break;case u.HORIZONTAL_ALIGNMENT_CENTER:a=(o-i)/2;break}switch(this.verticalAlignment){case u.VERTICAL_ALIGNMENT_TOP:l=0;break;case u.VERTICAL_ALIGNMENT_BOTTOM:l=r-s;break;case u.VERTICAL_ALIGNMENT_CENTER:l=(r-s)/2;break}this.descendantsOnlyPadding||(this._paddingLeft.isPixel?(this._currentMeasure.left+=this._paddingLeft.getValue(this._host),this._currentMeasure.width-=this._paddingLeft.getValue(this._host)):(this._currentMeasure.left+=o*this._paddingLeft.getValue(this._host),this._currentMeasure.width-=o*this._paddingLeft.getValue(this._host)),this._paddingRight.isPixel?this._currentMeasure.width-=this._paddingRight.getValue(this._host):this._currentMeasure.width-=o*this._paddingRight.getValue(this._host),this._paddingTop.isPixel?(this._currentMeasure.top+=this._paddingTop.getValue(this._host),this._currentMeasure.height-=this._paddingTop.getValue(this._host)):(this._currentMeasure.top+=r*this._paddingTop.getValue(this._host),this._currentMeasure.height-=r*this._paddingTop.getValue(this._host)),this._paddingBottom.isPixel?this._currentMeasure.height-=this._paddingBottom.getValue(this._host):this._currentMeasure.height-=r*this._paddingBottom.getValue(this._host)),this._left.isPixel?this._currentMeasure.left+=this._left.getValue(this._host):this._currentMeasure.left+=o*this._left.getValue(this._host),this._top.isPixel?this._currentMeasure.top+=this._top.getValue(this._host):this._currentMeasure.top+=r*this._top.getValue(this._host),this._currentMeasure.left+=a,this._currentMeasure.top+=l}_preMeasure(t,e){}_additionalProcessing(t,e){}_clipForChildren(t){}_clip(t,e){if(t.beginPath(),u._ClipMeasure.copyFrom(this._currentMeasure),e){e.transformToRef(this._invertTransformMatrix,this._tmpMeasureA);const i=new et(0,0,0,0);i.left=Math.max(this._tmpMeasureA.left,this._currentMeasure.left),i.top=Math.max(this._tmpMeasureA.top,this._currentMeasure.top),i.width=Math.min(this._tmpMeasureA.left+this._tmpMeasureA.width,this._currentMeasure.left+this._currentMeasure.width)-i.left,i.height=Math.min(this._tmpMeasureA.top+this._tmpMeasureA.height,this._currentMeasure.top+this._currentMeasure.height)-i.top,u._ClipMeasure.copyFrom(i)}if(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY){const i=this.shadowOffsetX,s=this.shadowOffsetY,o=this.shadowBlur,r=Math.min(Math.min(i,0)-o*2,0),a=Math.max(Math.max(i,0)+o*2,0),l=Math.min(Math.min(s,0)-o*2,0),h=Math.max(Math.max(s,0)+o*2,0);t.rect(u._ClipMeasure.left+r,u._ClipMeasure.top+l,u._ClipMeasure.width+a-r,u._ClipMeasure.height+h-l)}else t.rect(u._ClipMeasure.left,u._ClipMeasure.top,u._ClipMeasure.width,u._ClipMeasure.height);t.clip()}_render(t,e){return!this.isVisible||this.notRenderable||this._isClipped?(this._isDirty=!1,!1):(this.host._numRenderCalls++,t.save(),this._applyStates(t),this._transform(t),this.clipContent&&this._clip(t,e),this.onBeforeDrawObservable.hasObservers()&&this.onBeforeDrawObservable.notifyObservers(this),this.useBitmapCache&&!this._wasDirty&&this._cacheData?t.putImageData(this._cacheData,this._currentMeasure.left,this._currentMeasure.top):this._draw(t,e),this.useBitmapCache&&this._wasDirty&&(this._cacheData=t.getImageData(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._renderHighlight(t),this.onAfterDrawObservable.hasObservers()&&this.onAfterDrawObservable.notifyObservers(this),t.restore(),!0)}_draw(t,e){}contains(t,e){return this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y,t<this._currentMeasure.left||t>this._currentMeasure.left+this._currentMeasure.width||e<this._currentMeasure.top||e>this._currentMeasure.top+this._currentMeasure.height?!1:(this.isPointerBlocker&&(this._host._shouldBlockPointer=!0),!0)}_processPicking(t,e,i,s,o,r,a,l){return!this._isEnabled||!this.isHitTestVisible||!this.isVisible||this._doNotRender||!this.contains(t,e)?!1:(this._processObservables(s,t,e,i,o,r,a,l),!0)}_onPointerMove(t,e,i,s){this.onPointerMoveObservable.notifyObservers(e,-1,t,this,s)&&this.parent!=null&&!this.isPointerBlocker&&this.parent._onPointerMove(t,e,i,s)}_onPointerEnter(t,e){return!this._isEnabled||this._enterCount>0?!1:(this._enterCount===-1&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this,e)&&this.parent!=null&&!this.isPointerBlocker&&this.parent._onPointerEnter(t,e),!0)}_onPointerOut(t,e,i=!1){if(!i&&(!this._isEnabled||t===this))return;this._enterCount=0;let s=!0;t.isAscendant(this)||(s=this.onPointerOutObservable.notifyObservers(this,-1,t,this,e)),s&&this.parent!=null&&!this.isPointerBlocker&&this.parent._onPointerOut(t,e,i)}_onPointerDown(t,e,i,s,o){return this._onPointerEnter(this,o),this._downCount!==0?!1:(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new vi(e,s),-1,t,this,o)&&this.parent!=null&&!this.isPointerBlocker&&this.parent._onPointerDown(t,e,i,s,o),o&&this.uniqueId!==this._host.rootContainer.uniqueId&&this._host._capturedPointerIds.add(o.event.pointerId),!0)}_onPointerUp(t,e,i,s,o,r){if(!this._isEnabled)return;this._downCount=0,delete this._downPointerIds[i];let a=o;o&&(this._enterCount>0||this._enterCount===-1)&&(a=this.onPointerClickObservable.notifyObservers(new vi(e,s),-1,t,this,r)),this.onPointerUpObservable.notifyObservers(new vi(e,s),-1,t,this,r)&&this.parent!=null&&!this.isPointerBlocker&&this.parent._onPointerUp(t,e,i,s,a,r),r&&this.uniqueId!==this._host.rootContainer.uniqueId&&this._host._capturedPointerIds.delete(r.event.pointerId)}_forcePointerUp(t=null){if(t!==null)this._onPointerUp(this,z.Zero(),t,0,!0);else for(const e in this._downPointerIds)this._onPointerUp(this,z.Zero(),+e,0,!0)}_onWheelScroll(t,e){if(!this._isEnabled)return;this.onWheelObservable.notifyObservers(new z(t,e))&&this.parent!=null&&this.parent._onWheelScroll(t,e)}_onCanvasBlur(){}_processObservables(t,e,i,s,o,r,a,l){if(!this._isEnabled)return!1;if(this._dummyVector2.copyFromFloats(e,i),t===L.POINTERMOVE){this._onPointerMove(this,this._dummyVector2,o,s);const h=this._host._lastControlOver[o];return h&&h!==this&&h._onPointerOut(this,s),h!==this&&this._onPointerEnter(this,s),this._host._lastControlOver[o]=this,!0}return t===L.POINTERDOWN?(this._onPointerDown(this,this._dummyVector2,o,r,s),this._host._registerLastControlDown(this,o),this._host._lastPickedControl=this,!0):t===L.POINTERUP?(this._host._lastControlDown[o]&&this._host._lastControlDown[o]._onPointerUp(this,this._dummyVector2,o,r,!0,s),delete this._host._lastControlDown[o],!0):t===L.POINTERWHEEL&&this._host._lastControlOver[o]?(this._host._lastControlOver[o]._onWheelScroll(a,l),!0):!1}_prepareFont(){!this._font&&!this._fontSet||(this._style?this._font=this._style.fontStyle+" "+this._style.fontWeight+" "+this.fontSizeInPixels+"px "+this._style.fontFamily:this._font=this._fontStyle+" "+this._fontWeight+" "+this.fontSizeInPixels+"px "+this._fontFamily,this._fontOffset=u._GetFontOffset(this._font),this.getDescendants().forEach(t=>t._markAllAsDirty()))}clone(t){const e={};this.serialize(e);const i=it.Instantiate("BABYLON.GUI."+e.className),s=new i;return s.parse(e,t),s}parse(t,e){return X.Parse(()=>this,t,null),this.name=t.name,this._parseFromContent(t,e??this._host),this}serialize(t){X.Serialize(this,t),t.name=this.name,t.className=this.getClassName(),this._prepareFont(),this._font&&(t.fontFamily=this._fontFamily,t.fontSize=this.fontSize,t.fontWeight=this.fontWeight,t.fontStyle=this.fontStyle),this._gradient&&(t.gradient={},this._gradient.serialize(t.gradient)),X.AppendSerializedAnimations(this,t)}_parseFromContent(t,e){var i;if(t.fontFamily&&(this.fontFamily=t.fontFamily),t.fontSize&&(this.fontSize=t.fontSize),t.fontWeight&&(this.fontWeight=t.fontWeight),t.fontStyle&&(this.fontStyle=t.fontStyle),t.gradient){const s=it.Instantiate("BABYLON.GUI."+t.gradient.className);this._gradient=new s,(i=this._gradient)===null||i===void 0||i.parse(t.gradient)}if(t.animations){this.animations=[];for(let s=0;s<t.animations.length;s++){const o=t.animations[s],r=Gi("BABYLON.Animation");r&&this.animations.push(r.Parse(o))}t.autoAnimate&&this._host&&this._host.getScene()&&this._host.getScene().beginAnimation(this,t.autoAnimateFrom,t.autoAnimateTo,t.autoAnimateLoop,t.autoAnimateSpeed||1)}}dispose(){this.onDirtyObservable.clear(),this.onBeforeDrawObservable.clear(),this.onAfterDrawObservable.clear(),this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this.onWheelObservable.clear(),this._styleObserver&&this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this.parent&&(this.parent.removeControl(this),this.parent=null),this._host&&this._host._linkedControls.indexOf(this)>-1&&this.linkWithMesh(null),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear()}static get HORIZONTAL_ALIGNMENT_LEFT(){return u._HORIZONTAL_ALIGNMENT_LEFT}static get HORIZONTAL_ALIGNMENT_RIGHT(){return u._HORIZONTAL_ALIGNMENT_RIGHT}static get HORIZONTAL_ALIGNMENT_CENTER(){return u._HORIZONTAL_ALIGNMENT_CENTER}static get VERTICAL_ALIGNMENT_TOP(){return u._VERTICAL_ALIGNMENT_TOP}static get VERTICAL_ALIGNMENT_BOTTOM(){return u._VERTICAL_ALIGNMENT_BOTTOM}static get VERTICAL_ALIGNMENT_CENTER(){return u._VERTICAL_ALIGNMENT_CENTER}static _GetFontOffset(t){if(u._FontHeightSizes[t])return u._FontHeightSizes[t];const e=Wt.LastCreatedEngine;if(!e)throw new Error("Invalid engine. Unable to create a canvas.");const i=e.getFontOffset(t);return u._FontHeightSizes[t]=i,i}static Parse(t,e){const i=it.Instantiate("BABYLON.GUI."+t.className),s=X.Parse(()=>new i,t,null);return s.name=t.name,s._parseFromContent(t,e),s}static drawEllipse(t,e,i,s,o){o.translate(t,e),o.scale(i,s),o.beginPath(),o.arc(0,0,1,0,2*Math.PI),o.closePath(),o.scale(1/i,1/s),o.translate(-t,-e)}isReady(){return!0}}u.AllowAlphaInheritance=!1;u._ClipMeasure=new et(0,0,0,0);u._HORIZONTAL_ALIGNMENT_LEFT=0;u._HORIZONTAL_ALIGNMENT_RIGHT=1;u._HORIZONTAL_ALIGNMENT_CENTER=2;u._VERTICAL_ALIGNMENT_TOP=0;u._VERTICAL_ALIGNMENT_BOTTOM=1;u._VERTICAL_ALIGNMENT_CENTER=2;u._FontHeightSizes={};u.AddHeader=()=>{};n([_()],u.prototype,"metadata",void 0);n([_()],u.prototype,"isHitTestVisible",void 0);n([_()],u.prototype,"isPointerBlocker",void 0);n([_()],u.prototype,"isFocusInvisible",void 0);n([_()],u.prototype,"clipChildren",null);n([_()],u.prototype,"clipContent",null);n([_()],u.prototype,"useBitmapCache",void 0);n([_()],u.prototype,"shadowOffsetX",null);n([_()],u.prototype,"shadowOffsetY",null);n([_()],u.prototype,"shadowBlur",null);n([_()],u.prototype,"shadowColor",null);n([_()],u.prototype,"hoverCursor",void 0);n([_()],u.prototype,"fontOffset",null);n([_()],u.prototype,"alpha",null);n([_()],u.prototype,"scaleX",null);n([_()],u.prototype,"scaleY",null);n([_()],u.prototype,"rotation",null);n([_()],u.prototype,"transformCenterY",null);n([_()],u.prototype,"transformCenterX",null);n([_()],u.prototype,"horizontalAlignment",null);n([_()],u.prototype,"verticalAlignment",null);n([_()],u.prototype,"fixedRatio",void 0);n([_()],u.prototype,"width",null);n([_()],u.prototype,"height",null);n([_()],u.prototype,"style",null);n([_()],u.prototype,"color",null);n([_()],u.prototype,"gradient",null);n([_()],u.prototype,"zIndex",null);n([_()],u.prototype,"notRenderable",null);n([_()],u.prototype,"isVisible",null);n([_()],u.prototype,"descendantsOnlyPadding",null);n([_()],u.prototype,"paddingLeft",null);n([_()],u.prototype,"paddingRight",null);n([_()],u.prototype,"paddingTop",null);n([_()],u.prototype,"paddingBottom",null);n([_()],u.prototype,"left",null);n([_()],u.prototype,"top",null);n([_()],u.prototype,"linkOffsetX",null);n([_()],u.prototype,"linkOffsetY",null);n([_()],u.prototype,"isEnabled",null);n([_()],u.prototype,"disabledColor",null);n([_()],u.prototype,"disabledColorItem",null);n([_()],u.prototype,"overlapGroup",void 0);n([_()],u.prototype,"overlapDeltaMultiplier",void 0);N("BABYLON.GUI.Control",u);class ut extends u{get renderToIntermediateTexture(){return this._renderToIntermediateTexture}set renderToIntermediateTexture(t){this._renderToIntermediateTexture!==t&&(this._renderToIntermediateTexture=t,this._markAsDirty())}get adaptHeightToChildren(){return this._adaptHeightToChildren}set adaptHeightToChildren(t){this._adaptHeightToChildren!==t&&(this._adaptHeightToChildren=t,t&&(this.height="100%"),this._markAsDirty())}get adaptWidthToChildren(){return this._adaptWidthToChildren}set adaptWidthToChildren(t){this._adaptWidthToChildren!==t&&(this._adaptWidthToChildren=t,t&&(this.width="100%"),this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get backgroundGradient(){return this._backgroundGradient}set backgroundGradient(t){this._backgroundGradient!==t&&(this._backgroundGradient=t,this._markAsDirty())}get children(){return this._children}get isReadOnly(){return this._isReadOnly}set isReadOnly(t){this._isReadOnly=t;for(const e of this._children)e.isReadOnly=t}constructor(t){super(t),this.name=t,this._children=new Array,this._measureForChildren=et.Empty(),this._background="",this._backgroundGradient=null,this._adaptWidthToChildren=!1,this._adaptHeightToChildren=!1,this._renderToIntermediateTexture=!1,this._intermediateTexture=null,this.logLayoutCycleErrors=!1,this.maxLayoutCycle=3,this.onControlAddedObservable=new B,this.onControlRemovedObservable=new B,this._inverseTransformMatrix=M.Identity(),this._inverseMeasure=new et(0,0,0,0)}_getTypeName(){return"Container"}_flagDescendantsAsMatrixDirty(){for(const t of this.children)t._isClipped=!1,t._markMatrixAsDirty()}getChildByName(t){for(const e of this.children)if(e.name===t)return e;return null}getChildByType(t,e){for(const i of this.children)if(i.typeName===e)return i;return null}containsControl(t){return this.children.indexOf(t)!==-1}addControl(t){return t?this._children.indexOf(t)!==-1?this:(t._link(this._host),t._markAllAsDirty(),this._reOrderControl(t),this._markAsDirty(),this.onControlAddedObservable.notifyObservers(t),this):this}clearControls(){const t=this.children.slice();for(const e of t)this.removeControl(e);return this}removeControl(t){const e=this._children.indexOf(t);return e!==-1&&(this._children.splice(e,1),t.parent=null),t.linkWithMesh(null),this._host&&this._host._cleanControlAfterRemoval(t),this._markAsDirty(),this.onControlRemovedObservable.notifyObservers(t),this}_reOrderControl(t){const e=t.linkedMesh;this.removeControl(t);let i=!1;for(let s=0;s<this._children.length;s++)if(this._children[s].zIndex>t.zIndex){this._children.splice(s,0,t),i=!0;break}i||this._children.push(t),t.parent=this,e&&t.linkWithMesh(e),this._markAsDirty()}_offsetLeft(t){super._offsetLeft(t);for(const e of this._children)e._offsetLeft(t)}_offsetTop(t){super._offsetTop(t);for(const e of this._children)e._offsetTop(t)}_markAllAsDirty(){super._markAllAsDirty();for(let t=0;t<this._children.length;t++)this._children[t]._markAllAsDirty()}_getBackgroundColor(t){return this._backgroundGradient?this._backgroundGradient.getCanvasGradient(t):this._background}_localDraw(t){(this._background||this._backgroundGradient)&&(t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._getBackgroundColor(t),t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),t.restore())}_link(t){super._link(t);for(const e of this._children)e._link(t)}_beforeLayout(){}_processMeasures(t,e){(this._isDirty||!this._cachedParentMeasure.isEqualsTo(t))&&(super._processMeasures(t,e),this._evaluateClippingState(t),this._renderToIntermediateTexture&&(this._intermediateTexture&&this._host.getScene()!=this._intermediateTexture.getScene()&&(this._intermediateTexture.dispose(),this._intermediateTexture=null),this._intermediateTexture?this._intermediateTexture.scaleTo(this._currentMeasure.width,this._currentMeasure.height):(this._intermediateTexture=new Ti("",{width:this._currentMeasure.width,height:this._currentMeasure.height},this._host.getScene(),!1,S.NEAREST_SAMPLINGMODE,Lt.TEXTUREFORMAT_RGBA,!1),this._intermediateTexture.hasAlpha=!0)))}_layout(t,e){var i,s;if(!this.isDirty&&(!this.isVisible||this.notRenderable))return!1;this.host._numLayoutCalls++,this._isDirty&&this._currentMeasure.transformToRef(this._transformMatrix,this._prevCurrentMeasureTransformedIntoGlobalSpace);let o=0;e.save(),this._applyStates(e),this._beforeLayout();do{let r=-1,a=-1;if(this._rebuildLayout=!1,this._processMeasures(t,e),!this._isClipped){for(const l of this._children)l._tempParentMeasure.copyFrom(this._measureForChildren),l._layout(this._measureForChildren,e)&&l.isVisible&&!l.notRenderable&&(this.adaptWidthToChildren&&l._width.isPixel&&(r=Math.max(r,l._currentMeasure.width+l._paddingLeftInPixels+l._paddingRightInPixels)),this.adaptHeightToChildren&&l._height.isPixel&&(a=Math.max(a,l._currentMeasure.height+l._paddingTopInPixels+l._paddingBottomInPixels)));this.adaptWidthToChildren&&r>=0&&(r+=this.paddingLeftInPixels+this.paddingRightInPixels,this.width!==r+"px"&&((i=this.parent)===null||i===void 0||i._markAsDirty(),this.width=r+"px",this._width.ignoreAdaptiveScaling=!0,this._rebuildLayout=!0)),this.adaptHeightToChildren&&a>=0&&(a+=this.paddingTopInPixels+this.paddingBottomInPixels,this.height!==a+"px"&&((s=this.parent)===null||s===void 0||s._markAsDirty(),this.height=a+"px",this._height.ignoreAdaptiveScaling=!0,this._rebuildLayout=!0)),this._postMeasure()}o++}while(this._rebuildLayout&&o<this.maxLayoutCycle);return o>=3&&this.logLayoutCycleErrors&&Ge.Error(`Layout cycle detected in GUI (Container name=${this.name}, uniqueId=${this.uniqueId})`),e.restore(),this._isDirty&&(this.invalidateRect(),this._isDirty=!1),!0}_postMeasure(){}_draw(t,e){const i=this._renderToIntermediateTexture&&this._intermediateTexture,s=i?this._intermediateTexture.getContext():t;i&&(s.save(),s.translate(-this._currentMeasure.left,-this._currentMeasure.top),e?(this._transformMatrix.invertToRef(this._inverseTransformMatrix),e.transformToRef(this._inverseTransformMatrix,this._inverseMeasure),s.clearRect(this._inverseMeasure.left,this._inverseMeasure.top,this._inverseMeasure.width,this._inverseMeasure.height)):s.clearRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._localDraw(s),t.save(),this.clipChildren&&this._clipForChildren(s);for(const o of this._children)e&&!o._intersectsRect(e)||o._render(s,e);i&&(s.restore(),t.save(),t.globalAlpha=this.alpha,t.drawImage(s.canvas,this._currentMeasure.left,this._currentMeasure.top),t.restore()),t.restore()}getDescendantsToRef(t,e=!1,i){if(this.children)for(let s=0;s<this.children.length;s++){const o=this.children[s];(!i||i(o))&&t.push(o),e||o.getDescendantsToRef(t,!1,i)}}_processPicking(t,e,i,s,o,r,a,l){if(!this._isEnabled||!this.isVisible||this.notRenderable)return!1;const h=super.contains(t,e);if(!h&&this.clipChildren)return!1;for(let d=this._children.length-1;d>=0;d--){const f=this._children[d];if(f._processPicking(t,e,i,s,o,r,a,l))return f.hoverCursor&&this._host._changeCursor(f.hoverCursor),!0}return!h||!this.isHitTestVisible?!1:this._processObservables(s,t,e,i,o,r,a,l)}_additionalProcessing(t,e){super._additionalProcessing(t,e),this._measureForChildren.copyFrom(this._currentMeasure)}serialize(t){if(super.serialize(t),this.backgroundGradient&&(t.backgroundGradient={},this.backgroundGradient.serialize(t.backgroundGradient)),!!this.children.length){t.children=[];for(const e of this.children){const i={};e.serialize(i),t.children.push(i)}}}dispose(){var t;super.dispose();for(let e=this.children.length-1;e>=0;e--)this.children[e].dispose();(t=this._intermediateTexture)===null||t===void 0||t.dispose()}_parseFromContent(t,e){var i;if(super._parseFromContent(t,e),this._link(e),t.backgroundGradient){const s=it.Instantiate("BABYLON.GUI."+t.backgroundGradient.className);this._backgroundGradient=new s,(i=this._backgroundGradient)===null||i===void 0||i.parse(t.backgroundGradient)}if(t.children)for(const s of t.children)this.addControl(u.Parse(s,e))}isReady(){for(const t of this.children)if(!t.isReady())return!1;return!0}}n([_()],ut.prototype,"renderToIntermediateTexture",null);n([_()],ut.prototype,"maxLayoutCycle",void 0);n([_()],ut.prototype,"adaptHeightToChildren",null);n([_()],ut.prototype,"adaptWidthToChildren",null);n([_()],ut.prototype,"background",null);n([_()],ut.prototype,"backgroundGradient",null);N("BABYLON.GUI.Container",ut);class ft extends ut{get thickness(){return this._thickness}set thickness(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())}get cornerRadius(){return this._cornerRadius[0]}set cornerRadius(t){t<0&&(t=0),!(this._cornerRadius[0]===t&&this._cornerRadius[1]===t&&this._cornerRadius[2]===t&&this._cornerRadius[3]===t)&&(this._cornerRadius[0]=this._cornerRadius[1]=this._cornerRadius[2]=this._cornerRadius[3]=t,this._markAsDirty())}get cornerRadiusX(){return this._cornerRadius[0]}set cornerRadiusX(t){this._cornerRadius[0]!==t&&(this._cornerRadius[0]=t)}get cornerRadiusY(){return this._cornerRadius[1]}set cornerRadiusY(t){this._cornerRadius[1]!==t&&(this._cornerRadius[1]=t)}get cornerRadiusZ(){return this._cornerRadius[2]}set cornerRadiusZ(t){this._cornerRadius[2]!==t&&(this._cornerRadius[2]=t)}get cornerRadiusW(){return this._cornerRadius[3]}set cornerRadiusW(t){this._cornerRadius[3]!==t&&(this._cornerRadius[3]=t)}constructor(t){super(t),this.name=t,this._thickness=1,this._cornerRadius=[0,0,0,0],this._cachedRadius=[0,0,0,0]}_getTypeName(){return"Rectangle"}_computeAdditionnalOffsetX(){return this._cornerRadius[0]!==0||this._cornerRadius[1]!==0||this._cornerRadius[2]!==0||this._cornerRadius[3]!==0?1:0}_computeAdditionnalOffsetY(){return this._cornerRadius[0]!==0||this._cornerRadius[1]!==0||this._cornerRadius[2]!==0||this._cornerRadius[3]!==0?1:0}_getRectangleFill(t){return this._getBackgroundColor(t)}_localDraw(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),(this._background||this._backgroundGradient)&&(t.fillStyle=this._getRectangleFill(t),this._cornerRadius[0]!==0||this._cornerRadius[1]!==0||this._cornerRadius[2]!==0||this._cornerRadius[3]!==0?(this._drawRoundedRect(t,this._thickness/2),t.fill()):t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._thickness&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),(this.color||this.gradient)&&(t.strokeStyle=this.gradient?this.gradient.getCanvasGradient(t):this.color),t.lineWidth=this._thickness,this._cornerRadius[0]!==0||this._cornerRadius[1]!==0||this._cornerRadius[2]!==0||this._cornerRadius[3]!==0?(this._drawRoundedRect(t,this._thickness/2),t.stroke()):t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()}_additionalProcessing(t,e){super._additionalProcessing(t,e),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness}_drawRoundedRect(t,e=0){const i=this._currentMeasure.left+e,s=this._currentMeasure.top+e,o=this._currentMeasure.width-e*2,r=this._currentMeasure.height-e*2;for(let a=0;a<this._cornerRadius.length;a++)this._cachedRadius[a]=Math.abs(Math.min(r/2,Math.min(o/2,this._cornerRadius[a])));t.beginPath(),t.moveTo(i+this._cachedRadius[0],s),t.lineTo(i+o-this._cachedRadius[1],s),t.arc(i+o-this._cachedRadius[1],s+this._cachedRadius[1],this._cachedRadius[1],3*Math.PI/2,Math.PI*2),t.lineTo(i+o,s+r-this._cachedRadius[2]),t.arc(i+o-this._cachedRadius[2],s+r-this._cachedRadius[2],this._cachedRadius[2],0,Math.PI/2),t.lineTo(i+this._cachedRadius[3],s+r),t.arc(i+this._cachedRadius[3],s+r-this._cachedRadius[3],this._cachedRadius[3],Math.PI/2,Math.PI),t.lineTo(i,s+this._cachedRadius[0]),t.arc(i+this._cachedRadius[0],s+this._cachedRadius[0],this._cachedRadius[0],Math.PI,3*Math.PI/2),t.closePath()}_clipForChildren(t){(this._cornerRadius[0]!==0||this._cornerRadius[1]!==0||this._cornerRadius[2]!==0||this._cornerRadius[3]!==0)&&(this._drawRoundedRect(t,this._thickness),t.clip())}}n([_()],ft.prototype,"thickness",null);n([_()],ft.prototype,"cornerRadius",null);n([_()],ft.prototype,"cornerRadiusX",null);n([_()],ft.prototype,"cornerRadiusY",null);n([_()],ft.prototype,"cornerRadiusZ",null);n([_()],ft.prototype,"cornerRadiusW",null);N("BABYLON.GUI.Rectangle",ft);var Zt;(function(m){m[m.Clip=0]="Clip",m[m.WordWrap=1]="WordWrap",m[m.Ellipsis=2]="Ellipsis",m[m.WordWrapEllipsis=3]="WordWrapEllipsis"})(Zt||(Zt={}));class U extends u{get lines(){return this._lines}get resizeToFit(){return this._resizeToFit}set resizeToFit(t){this._resizeToFit!==t&&(this._resizeToFit=t,this._resizeToFit&&(this._width.ignoreAdaptiveScaling=!0,this._height.ignoreAdaptiveScaling=!0),this._markAsDirty())}get textWrapping(){return this._textWrapping}set textWrapping(t){this._textWrapping!==t&&(this._textWrapping=+t,this._markAsDirty())}get text(){return this._text}set text(t){this._text!==t&&(this._text=t+"",this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))}get textHorizontalAlignment(){return this._textHorizontalAlignment}set textHorizontalAlignment(t){this._textHorizontalAlignment!==t&&(this._textHorizontalAlignment=t,this._markAsDirty())}get textVerticalAlignment(){return this._textVerticalAlignment}set textVerticalAlignment(t){this._textVerticalAlignment!==t&&(this._textVerticalAlignment=t,this._markAsDirty())}set lineSpacing(t){this._lineSpacing.fromString(t)&&this._markAsDirty()}get lineSpacing(){return this._lineSpacing.toString(this._host)}get outlineWidth(){return this._outlineWidth}set outlineWidth(t){this._outlineWidth!==t&&(this._outlineWidth=t,this._markAsDirty())}get underline(){return this._underline}set underline(t){this._underline!==t&&(this._underline=t,this._markAsDirty())}get lineThrough(){return this._lineThrough}set lineThrough(t){this._lineThrough!==t&&(this._lineThrough=t,this._markAsDirty())}get applyOutlineToUnderline(){return this._applyOutlineToUnderline}set applyOutlineToUnderline(t){this._applyOutlineToUnderline!==t&&(this._applyOutlineToUnderline=t,this._markAsDirty())}get outlineColor(){return this._outlineColor}set outlineColor(t){this._outlineColor!==t&&(this._outlineColor=t,this._markAsDirty())}get wordDivider(){return this._wordDivider}set wordDivider(t){this._wordDivider!==t&&(this._wordDivider=t,this._markAsDirty())}get forceResizeWidth(){return this._forceResizeWidth}set forceResizeWidth(t){this._forceResizeWidth!==t&&(this._forceResizeWidth=t,this._markAsDirty())}constructor(t,e=""){super(t),this.name=t,this._text="",this._textWrapping=Zt.Clip,this._textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,this._textVerticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,this._resizeToFit=!1,this._lineSpacing=new I(0),this._outlineWidth=0,this._outlineColor="white",this._underline=!1,this._lineThrough=!1,this._wordDivider=" ",this._forceResizeWidth=!1,this._applyOutlineToUnderline=!1,this.onTextChangedObservable=new B,this.onLinesReadyObservable=new B,this._linesTemp=[],this.text=e}_getTypeName(){return"TextBlock"}_processMeasures(t,e){(!this._fontOffset||this.isDirty)&&(this._fontOffset=u._GetFontOffset(e.font)),super._processMeasures(t,e),this._lines=this._breakLines(this._currentMeasure.width,this._currentMeasure.height,e),this.onLinesReadyObservable.notifyObservers(this);let i=0;for(let s=0;s<this._lines.length;s++){const o=this._lines[s];o.width>i&&(i=o.width)}if(this._resizeToFit){if(this._textWrapping===Zt.Clip||this._forceResizeWidth){const o=Math.ceil(this._paddingLeftInPixels)+Math.ceil(this._paddingRightInPixels)+Math.ceil(i);o!==this._width.getValueInPixel(this._host,this._tempParentMeasure.width)&&(this._width.updateInPlace(o,I.UNITMODE_PIXEL),this._rebuildLayout=!0)}let s=this._paddingTopInPixels+this._paddingBottomInPixels+this._fontOffset.height*this._lines.length|0;if(this._lines.length>0&&this._lineSpacing.internalValue!==0){let o=0;this._lineSpacing.isPixel?o=this._lineSpacing.getValue(this._host):o=this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height),s+=(this._lines.length-1)*o}s!==this._height.internalValue&&(this._height.updateInPlace(s,I.UNITMODE_PIXEL),this._rebuildLayout=!0)}}_drawText(t,e,i,s){const o=this._currentMeasure.width;let r=0;switch(this._textHorizontalAlignment){case u.HORIZONTAL_ALIGNMENT_LEFT:r=0;break;case u.HORIZONTAL_ALIGNMENT_RIGHT:r=o-e;break;case u.HORIZONTAL_ALIGNMENT_CENTER:r=(o-e)/2;break}(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(s.shadowColor=this.shadowColor,s.shadowBlur=this.shadowBlur,s.shadowOffsetX=this.shadowOffsetX,s.shadowOffsetY=this.shadowOffsetY),this.outlineWidth&&s.strokeText(t,this._currentMeasure.left+r,i),s.fillText(t,this._currentMeasure.left+r,i),this._underline&&this._drawLine(this._currentMeasure.left+r,i+3,this._currentMeasure.left+r+e,i+3,s),this._lineThrough&&this._drawLine(this._currentMeasure.left+r,i-this.fontSizeInPixels/3,this._currentMeasure.left+r+e,i-this.fontSizeInPixels/3,s)}_drawLine(t,e,i,s,o){if(o.beginPath(),o.lineWidth=Math.round(this.fontSizeInPixels*.05),o.moveTo(t,e),o.lineTo(i,s),this.outlineWidth&&this.applyOutlineToUnderline)o.stroke(),o.fill();else{const r=o.strokeStyle;o.strokeStyle=o.fillStyle,o.stroke(),o.strokeStyle=r}o.closePath()}_draw(t){t.save(),this._applyStates(t),this._renderLines(t),t.restore()}_applyStates(t){super._applyStates(t),this.outlineWidth&&(t.lineWidth=this.outlineWidth,t.strokeStyle=this.outlineColor,t.lineJoin="miter",t.miterLimit=2)}_breakLines(t,e,i){this._linesTemp.length=0;const s=this.text.split(`
`);if(this._textWrapping===Zt.Ellipsis)for(const o of s)this._linesTemp.push(this._parseLineEllipsis(o,t,i));else if(this._textWrapping===Zt.WordWrap)for(const o of s)this._linesTemp.push(...this._parseLineWordWrap(o,t,i));else if(this._textWrapping===Zt.WordWrapEllipsis)for(const o of s)this._linesTemp.push(...this._parseLineWordWrapEllipsis(o,t,e,i));else for(const o of s)this._linesTemp.push(this._parseLine(o,i));return this._linesTemp}_parseLine(t="",e){return{text:t,width:this._getTextMetricsWidth(e.measureText(t))}}_getCharsToRemove(t,e,i){const s=t>e?t-e:0,o=t/i;return Math.max(Math.floor(s/o),1)}_parseLineEllipsis(t="",e,i){let s=this._getTextMetricsWidth(i.measureText(t)),o=this._getCharsToRemove(s,e,t.length);const r=Array.from&&Array.from(t);if(r)for(;r.length&&s>e;)r.splice(r.length-o,o),t=`${r.join("")}…`,s=this._getTextMetricsWidth(i.measureText(t)),o=this._getCharsToRemove(s,e,t.length);else{for(;t.length>2&&s>e;)t=t.slice(0,-o),s=this._getTextMetricsWidth(i.measureText(t+"…")),o=this._getCharsToRemove(s,e,t.length);t+="…"}return{text:t,width:s}}_getTextMetricsWidth(t){return t.actualBoundingBoxLeft!==void 0?Math.abs(t.actualBoundingBoxLeft)+Math.abs(t.actualBoundingBoxRight):t.width}_parseLineWordWrap(t="",e,i){const s=[],o=this.wordSplittingFunction?this.wordSplittingFunction(t):t.split(this._wordDivider);let r=this._getTextMetricsWidth(i.measureText(t));for(let a=0;a<o.length;a++){const l=a>0?t+this._wordDivider+o[a]:o[0],h=this._getTextMetricsWidth(i.measureText(l));h>e&&a>0?(s.push({text:t,width:r}),t=o[a],r=this._getTextMetricsWidth(i.measureText(t))):(r=h,t=l)}return s.push({text:t,width:r}),s}_parseLineWordWrapEllipsis(t="",e,i,s){const o=this._parseLineWordWrap(t,e,s);for(let r=1;r<=o.length;r++)if(this._computeHeightForLinesOf(r)>i&&r>1){const l=o[r-2],h=o[r-1];o[r-2]=this._parseLineEllipsis(l.text+this._wordDivider+h.text,e,s);const d=o.length-r+1;for(let f=0;f<d;f++)o.pop();return o}return o}_renderLines(t){if(!this._fontOffset||!this._lines)return;const e=this._currentMeasure.height;let i=0;switch(this._textVerticalAlignment){case u.VERTICAL_ALIGNMENT_TOP:i=this._fontOffset.ascent;break;case u.VERTICAL_ALIGNMENT_BOTTOM:i=e-this._fontOffset.height*(this._lines.length-1)-this._fontOffset.descent;break;case u.VERTICAL_ALIGNMENT_CENTER:i=this._fontOffset.ascent+(e-this._fontOffset.height*this._lines.length)/2;break}i+=this._currentMeasure.top;for(let s=0;s<this._lines.length;s++){const o=this._lines[s];s!==0&&this._lineSpacing.internalValue!==0&&(this._lineSpacing.isPixel?i+=this._lineSpacing.getValue(this._host):i=i+this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)),this._drawText(o.text,o.width,i,t),i+=this._fontOffset.height}}_computeHeightForLinesOf(t){let e=this._paddingTopInPixels+this._paddingBottomInPixels+this._fontOffset.height*t;if(t>0&&this._lineSpacing.internalValue!==0){let i=0;this._lineSpacing.isPixel?i=this._lineSpacing.getValue(this._host):i=this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height),e+=(t-1)*i}return e}computeExpectedHeight(){var t;if(this.text&&this.widthInPixels){const e=(t=Wt.LastCreatedEngine)===null||t===void 0?void 0:t.createCanvas(0,0).getContext("2d");if(e){this._applyStates(e),this._fontOffset||(this._fontOffset=u._GetFontOffset(e.font));const i=this._lines?this._lines:this._breakLines(this.widthInPixels-this._paddingLeftInPixels-this._paddingRightInPixels,this.heightInPixels-this._paddingTopInPixels-this._paddingBottomInPixels,e);return this._computeHeightForLinesOf(i.length)}}return 0}dispose(){super.dispose(),this.onTextChangedObservable.clear()}}n([_()],U.prototype,"resizeToFit",null);n([_()],U.prototype,"textWrapping",null);n([_()],U.prototype,"text",null);n([_()],U.prototype,"textHorizontalAlignment",null);n([_()],U.prototype,"textVerticalAlignment",null);n([_()],U.prototype,"lineSpacing",null);n([_()],U.prototype,"outlineWidth",null);n([_()],U.prototype,"underline",null);n([_()],U.prototype,"lineThrough",null);n([_()],U.prototype,"applyOutlineToUnderline",null);n([_()],U.prototype,"outlineColor",null);n([_()],U.prototype,"wordDivider",null);n([_()],U.prototype,"forceResizeWidth",null);N("BABYLON.GUI.TextBlock",U);class T extends u{get isLoaded(){return this._loaded}isReady(){return this.isLoaded}get detectPointerOnOpaqueOnly(){return this._detectPointerOnOpaqueOnly}set detectPointerOnOpaqueOnly(t){this._detectPointerOnOpaqueOnly!==t&&(this._detectPointerOnOpaqueOnly=t)}get sliceLeft(){return this._sliceLeft}set sliceLeft(t){this._sliceLeft!==t&&(this._sliceLeft=t,this._markAsDirty())}get sliceRight(){return this._sliceRight}set sliceRight(t){this._sliceRight!==t&&(this._sliceRight=t,this._markAsDirty())}get sliceTop(){return this._sliceTop}set sliceTop(t){this._sliceTop!==t&&(this._sliceTop=t,this._markAsDirty())}get sliceBottom(){return this._sliceBottom}set sliceBottom(t){this._sliceBottom!==t&&(this._sliceBottom=t,this._markAsDirty())}get sourceLeft(){return this._sourceLeft}set sourceLeft(t){this._sourceLeft!==t&&(this._sourceLeft=t,this._markAsDirty())}get sourceTop(){return this._sourceTop}set sourceTop(t){this._sourceTop!==t&&(this._sourceTop=t,this._markAsDirty())}get sourceWidth(){return this._sourceWidth}set sourceWidth(t){this._sourceWidth!==t&&(this._sourceWidth=t,this._markAsDirty())}get sourceHeight(){return this._sourceHeight}set sourceHeight(t){this._sourceHeight!==t&&(this._sourceHeight=t,this._markAsDirty())}get imageWidth(){return this._imageWidth}get imageHeight(){return this._imageHeight}get populateNinePatchSlicesFromImage(){return this._populateNinePatchSlicesFromImage}set populateNinePatchSlicesFromImage(t){this._populateNinePatchSlicesFromImage!==t&&(this._populateNinePatchSlicesFromImage=t,this._populateNinePatchSlicesFromImage&&this._loaded&&this._extractNinePatchSliceDataFromImage())}get isSVG(){return this._isSVG}get svgAttributesComputationCompleted(){return this._svgAttributesComputationCompleted}get autoScale(){return this._autoScale}set autoScale(t){this._autoScale!==t&&(this._autoScale=t,t&&this._loaded&&this.synchronizeSizeWithContent())}get stretch(){return this._stretch}set stretch(t){this._stretch!==t&&(this._stretch=t,this._markAsDirty())}_rotate90(t,e=!1){var i,s;const o=this._domImage.width,r=this._domImage.height,a=((s=(i=this._host)===null||i===void 0?void 0:i.getScene())===null||s===void 0?void 0:s.getEngine())||Wt.LastCreatedEngine;if(!a)throw new Error("Invalid engine. Unable to create a canvas.");const l=a.createCanvas(r,o),h=l.getContext("2d");h.translate(l.width/2,l.height/2),h.rotate(t*Math.PI/2),h.drawImage(this._domImage,0,0,o,r,-o/2,-r/2,o,r);const d=l.toDataURL("image/jpg"),f=new T(this.name+"rotated",d);return e&&(f._stretch=this._stretch,f._autoScale=this._autoScale,f._cellId=this._cellId,f._cellWidth=t%1?this._cellHeight:this._cellWidth,f._cellHeight=t%1?this._cellWidth:this._cellHeight),this._handleRotationForSVGImage(this,f,t),this._imageDataCache.data=null,f}_handleRotationForSVGImage(t,e,i){t._isSVG&&(t._svgAttributesComputationCompleted?(this._rotate90SourceProperties(t,e,i),this._markAsDirty()):t.onSVGAttributesComputedObservable.addOnce(()=>{this._rotate90SourceProperties(t,e,i),this._markAsDirty()}))}_rotate90SourceProperties(t,e,i){let s=t.sourceLeft,o=t.sourceTop,r=t.domImage.width,a=t.domImage.height,l=s,h=o,d=t.sourceWidth,f=t.sourceHeight;if(i!=0){const g=i<0?-1:1;i=i%4;for(let y=0;y<Math.abs(i);++y)l=-(o-a/2)*g+a/2,h=(s-r/2)*g+r/2,[d,f]=[f,d],i<0?h-=f:l-=d,s=l,o=h,[r,a]=[a,r]}e.sourceLeft=l,e.sourceTop=h,e.sourceWidth=d,e.sourceHeight=f}_extractNinePatchSliceDataFromImage(){var t,e;const i=this._domImage.width,s=this._domImage.height;if(!this._workingCanvas){const l=((e=(t=this._host)===null||t===void 0?void 0:t.getScene())===null||e===void 0?void 0:e.getEngine())||Wt.LastCreatedEngine;if(!l)throw new Error("Invalid engine. Unable to create a canvas.");this._workingCanvas=l.createCanvas(i,s)}const r=this._workingCanvas.getContext("2d");r.drawImage(this._domImage,0,0,i,s);const a=r.getImageData(0,0,i,s);this._sliceLeft=-1,this._sliceRight=-1;for(let l=0;l<i;l++){const h=a.data[l*4+3];if(h>127&&this._sliceLeft===-1){this._sliceLeft=l;continue}if(h<127&&this._sliceLeft>-1){this._sliceRight=l;break}}this._sliceTop=-1,this._sliceBottom=-1;for(let l=0;l<s;l++){const h=a.data[l*i*4+3];if(h>127&&this._sliceTop===-1){this._sliceTop=l;continue}if(h<127&&this._sliceTop>-1){this._sliceBottom=l;break}}}set domImage(t){this._domImage=t,this._loaded=!1,this._imageDataCache.data=null,this._domImage.width?this._onImageLoaded():this._domImage.onload=()=>{this._onImageLoaded()}}get domImage(){return this._domImage}_onImageLoaded(){this._imageDataCache.data=null,this._imageWidth=this._domImage.width,this._imageHeight=this._domImage.height,this._loaded=!0,this._populateNinePatchSlicesFromImage&&this._extractNinePatchSliceDataFromImage(),this._autoScale&&this.synchronizeSizeWithContent(),this.onImageLoadedObservable.notifyObservers(this),this._markAsDirty()}get source(){return this._source}static ResetImageCache(){T.SourceImgCache.clear()}_removeCacheUsage(t){const e=t&&T.SourceImgCache.get(t);e&&(e.timesUsed-=1,e.timesUsed===0&&T.SourceImgCache.delete(t))}set source(t){var e,i;if(this._source===t)return;this._removeCacheUsage(this._source),this._loaded=!1,this._source=t,this._imageDataCache.data=null,t&&(t=this._svgCheck(t));const s=((i=(e=this._host)===null||e===void 0?void 0:e.getScene())===null||i===void 0?void 0:i.getEngine())||Wt.LastCreatedEngine;if(!s)throw new Error("Invalid engine. Unable to create a canvas.");if(t&&T.SourceImgCache.has(t)){const o=T.SourceImgCache.get(t);this._domImage=o.img,o.timesUsed+=1,o.loaded?this._onImageLoaded():o.waitingForLoadCallback.push(this._onImageLoaded.bind(this));return}this._domImage=s.createCanvasImage(),t&&T.SourceImgCache.set(t,{img:this._domImage,timesUsed:1,loaded:!1,waitingForLoadCallback:[this._onImageLoaded.bind(this)]}),this._domImage.onload=()=>{if(t){const o=T.SourceImgCache.get(t);if(o){o.loaded=!0;for(const r of o.waitingForLoadCallback)r();o.waitingForLoadCallback.length=0;return}}this._onImageLoaded()},t&&(it.SetCorsBehavior(t,this._domImage),it.SetReferrerPolicyBehavior(this.referrerPolicy,this._domImage),this._domImage.src=t)}_svgCheck(t){if(window.SVGSVGElement&&t.search(/.svg#/gi)!==-1&&t.indexOf("#")===t.lastIndexOf("#")){this._isSVG=!0;const e=t.split("#")[0],i=t.split("#")[1],s=document.body.querySelector('object[data="'+e+'"]');if(s){const o=s.contentDocument;if(o&&o.documentElement){const r=o.documentElement.getAttribute("viewBox"),a=Number(o.documentElement.getAttribute("width")),l=Number(o.documentElement.getAttribute("height"));if(o.getElementById(i)&&r&&a&&l)return this._getSVGAttribs(s,i),t}s.addEventListener("load",()=>{this._getSVGAttribs(s,i)})}else{const o=document.createElement("object");o.data=e,o.type="image/svg+xml",o.width="0%",o.height="0%",document.body.appendChild(o),o.onload=()=>{const r=document.body.querySelector('object[data="'+e+'"]');r&&this._getSVGAttribs(r,i)}}return e}else return t}_getSVGAttribs(t,e){const i=t.contentDocument;if(i&&i.documentElement){const s=i.documentElement.getAttribute("viewBox"),o=Number(i.documentElement.getAttribute("width")),r=Number(i.documentElement.getAttribute("height")),a=i.getElementById(e);if(s&&o&&r&&a){const l=Number(s.split(" ")[2]),h=Number(s.split(" ")[3]),d=a.getBBox();let f=1,g=1,y=0,V=0;const yt=a.transform.baseVal.consolidate().matrix;a.transform&&a.transform.baseVal.consolidate()&&(f=yt.a,g=yt.d,y=yt.e,V=yt.f),this.sourceLeft=(f*d.x+y)*o/l,this.sourceTop=(g*d.y+V)*r/h,this.sourceWidth=d.width*f*(o/l),this.sourceHeight=d.height*g*(r/h),this._svgAttributesComputationCompleted=!0,this.onSVGAttributesComputedObservable.notifyObservers(this)}}}get cellWidth(){return this._cellWidth}set cellWidth(t){this._cellWidth!==t&&(this._cellWidth=t,this._markAsDirty())}get cellHeight(){return this._cellHeight}set cellHeight(t){this._cellHeight!==t&&(this._cellHeight=t,this._markAsDirty())}get cellId(){return this._cellId}set cellId(t){this._cellId!==t&&(this._cellId=t,this._markAsDirty())}constructor(t,e=null){super(t),this.name=t,this._workingCanvas=null,this._loaded=!1,this._stretch=T.STRETCH_FILL,this._autoScale=!1,this._sourceLeft=0,this._sourceTop=0,this._sourceWidth=0,this._sourceHeight=0,this._svgAttributesComputationCompleted=!1,this._isSVG=!1,this._cellWidth=0,this._cellHeight=0,this._cellId=-1,this._populateNinePatchSlicesFromImage=!1,this._imageDataCache={data:null,key:""},this.onImageLoadedObservable=new B,this.onSVGAttributesComputedObservable=new B,this.source=e}contains(t,e){if(!super.contains(t,e))return!1;if(!this._detectPointerOnOpaqueOnly||!this._workingCanvas)return!0;const i=this._currentMeasure.width|0,s=this._currentMeasure.height|0,o=i+"_"+s;let r=this._imageDataCache.data;if(!r||this._imageDataCache.key!==o){const h=this._workingCanvas.getContext("2d");this._imageDataCache.data=r=h.getImageData(0,0,i,s).data,this._imageDataCache.key=o}return t=t-this._currentMeasure.left|0,e=e-this._currentMeasure.top|0,r[(t+e*i)*4+3]>0}_getTypeName(){return"Image"}synchronizeSizeWithContent(){this._loaded&&(this.width=this._domImage.width+"px",this.height=this._domImage.height+"px")}_processMeasures(t,e){if(this._loaded)switch(this._stretch){case T.STRETCH_NONE:break;case T.STRETCH_FILL:break;case T.STRETCH_UNIFORM:break;case T.STRETCH_NINE_PATCH:break;case T.STRETCH_EXTEND:this._autoScale&&this.synchronizeSizeWithContent(),this.parent&&this.parent.parent&&(this.parent.adaptWidthToChildren=!0,this.parent.adaptHeightToChildren=!0);break}super._processMeasures(t,e)}_prepareWorkingCanvasForOpaqueDetection(){var t,e;if(!this._detectPointerOnOpaqueOnly)return;const i=this._currentMeasure.width,s=this._currentMeasure.height;if(!this._workingCanvas){const a=((e=(t=this._host)===null||t===void 0?void 0:t.getScene())===null||e===void 0?void 0:e.getEngine())||Wt.LastCreatedEngine;if(!a)throw new Error("Invalid engine. Unable to create a canvas.");this._workingCanvas=a.createCanvas(i,s)}this._workingCanvas.getContext("2d").clearRect(0,0,i,s)}_drawImage(t,e,i,s,o,r,a,l,h){if(t.drawImage(this._domImage,e,i,s,o,r,a,l,h),!this._detectPointerOnOpaqueOnly)return;t=this._workingCanvas.getContext("2d"),t.drawImage(this._domImage,e,i,s,o,r-this._currentMeasure.left,a-this._currentMeasure.top,l,h)}_draw(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY);let e,i,s,o;if(this.cellId==-1)e=this._sourceLeft,i=this._sourceTop,s=this._sourceWidth?this._sourceWidth:this._imageWidth,o=this._sourceHeight?this._sourceHeight:this._imageHeight;else{const r=this._domImage.naturalWidth/this.cellWidth,a=this.cellId/r>>0,l=this.cellId%r;e=this.cellWidth*l,i=this.cellHeight*a,s=this.cellWidth,o=this.cellHeight}if(this._prepareWorkingCanvasForOpaqueDetection(),this._applyStates(t),this._loaded)switch(this._stretch){case T.STRETCH_NONE:this._drawImage(t,e,i,s,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case T.STRETCH_FILL:this._drawImage(t,e,i,s,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case T.STRETCH_UNIFORM:{const r=this._currentMeasure.width/s,a=this._currentMeasure.height/o,l=Math.min(r,a),h=(this._currentMeasure.width-s*l)/2,d=(this._currentMeasure.height-o*l)/2;this._drawImage(t,e,i,s,o,this._currentMeasure.left+h,this._currentMeasure.top+d,s*l,o*l);break}case T.STRETCH_EXTEND:this._drawImage(t,e,i,s,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case T.STRETCH_NINE_PATCH:this._renderNinePatch(t);break}t.restore()}_renderNinePatch(t){const e=this._sliceLeft,i=this._sliceTop,s=this._imageHeight-this._sliceBottom,o=this._imageWidth-this._sliceRight,r=this._sliceRight-this._sliceLeft,a=this._sliceBottom-this._sliceTop,l=this._currentMeasure.width-o-e+2,h=this._currentMeasure.height-s-i+2,d=this._currentMeasure.left+e-1,f=this._currentMeasure.top+i-1,g=this._currentMeasure.left+this._currentMeasure.width-o,y=this._currentMeasure.top+this._currentMeasure.height-s;this._drawImage(t,0,0,e,i,this._currentMeasure.left,this._currentMeasure.top,e,i),t.clearRect(d,this._currentMeasure.top,l,i),this._drawImage(t,this._sliceLeft,0,r,i,d,this._currentMeasure.top,l,i),t.clearRect(g,this._currentMeasure.top,o,i),this._drawImage(t,this._sliceRight,0,o,i,g,this._currentMeasure.top,o,i),t.clearRect(this._currentMeasure.left,f,e,h),this._drawImage(t,0,this._sliceTop,e,a,this._currentMeasure.left,f,e,h),t.clearRect(d,f,l,h),this._drawImage(t,this._sliceLeft,this._sliceTop,r,a,d,f,l,h),t.clearRect(g,f,o,h),this._drawImage(t,this._sliceRight,this._sliceTop,o,a,g,f,o,h),t.clearRect(this._currentMeasure.left,y,e,s),this._drawImage(t,0,this._sliceBottom,e,s,this._currentMeasure.left,y,e,s),t.clearRect(d,y,l,s),this._drawImage(t,this.sliceLeft,this._sliceBottom,r,s,d,y,l,s),t.clearRect(g,y,o,s),this._drawImage(t,this._sliceRight,this._sliceBottom,o,s,g,y,o,s)}dispose(){super.dispose(),this.onImageLoadedObservable.clear(),this.onSVGAttributesComputedObservable.clear(),this._removeCacheUsage(this._source)}}T.SourceImgCache=new Map;T.STRETCH_NONE=0;T.STRETCH_FILL=1;T.STRETCH_UNIFORM=2;T.STRETCH_EXTEND=3;T.STRETCH_NINE_PATCH=4;n([_()],T.prototype,"detectPointerOnOpaqueOnly",null);n([_()],T.prototype,"sliceLeft",null);n([_()],T.prototype,"sliceRight",null);n([_()],T.prototype,"sliceTop",null);n([_()],T.prototype,"sliceBottom",null);n([_()],T.prototype,"sourceLeft",null);n([_()],T.prototype,"sourceTop",null);n([_()],T.prototype,"sourceWidth",null);n([_()],T.prototype,"sourceHeight",null);n([_()],T.prototype,"populateNinePatchSlicesFromImage",null);n([_()],T.prototype,"autoScale",null);n([_()],T.prototype,"stretch",null);n([_()],T.prototype,"source",null);n([_()],T.prototype,"cellWidth",null);n([_()],T.prototype,"cellHeight",null);n([_()],T.prototype,"cellId",null);N("BABYLON.GUI.Image",T);class zt extends ft{get image(){return this._image}get textBlock(){return this._textBlock}constructor(t){super(t),this.name=t,this.delegatePickingToChildren=!1,this.thickness=1,this.isPointerBlocker=!0;let e=null;this.pointerEnterAnimation=()=>{e=this.alpha,this.alpha-=.1},this.pointerOutAnimation=()=>{e!==null&&(this.alpha=e)},this.pointerDownAnimation=()=>{this.scaleX-=.05,this.scaleY-=.05},this.pointerUpAnimation=()=>{this.scaleX+=.05,this.scaleY+=.05}}_getTypeName(){return"Button"}_processPicking(t,e,i,s,o,r,a,l){if(!this._isEnabled||!this.isHitTestVisible||!this.isVisible||this.notRenderable||!super.contains(t,e))return!1;if(this.delegatePickingToChildren){let h=!1;for(let d=this._children.length-1;d>=0;d--){const f=this._children[d];if(f.isEnabled&&f.isHitTestVisible&&f.isVisible&&!f.notRenderable&&f.contains(t,e)){h=!0;break}}if(!h)return!1}return this._processObservables(s,t,e,i,o,r,a,l),!0}_onPointerEnter(t,e){return super._onPointerEnter(t,e)?(!this.isReadOnly&&this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0):!1}_onPointerOut(t,e,i=!1){!this.isReadOnly&&this.pointerOutAnimation&&this.pointerOutAnimation(),super._onPointerOut(t,e,i)}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?(!this.isReadOnly&&this.pointerDownAnimation&&this.pointerDownAnimation(),!0):!1}_getRectangleFill(t){return this.isEnabled?this._getBackgroundColor(t):this._disabledColor}_onPointerUp(t,e,i,s,o,r){!this.isReadOnly&&this.pointerUpAnimation&&this.pointerUpAnimation(),super._onPointerUp(t,e,i,s,o,r)}serialize(t){super.serialize(t),this._textBlock&&(t.textBlockName=this._textBlock.name),this._image&&(t.imageName=this._image.name)}_parseFromContent(t,e){super._parseFromContent(t,e),t.textBlockName&&(this._textBlock=this.getChildByName(t.textBlockName)),t.imageName&&(this._image=this.getChildByName(t.imageName))}static CreateImageButton(t,e,i){const s=new this(t),o=new U(t+"_button",e);o.textWrapping=!0,o.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,o.paddingLeft="20%",s.addControl(o);const r=new T(t+"_icon",i);return r.width="20%",r.stretch=T.STRETCH_UNIFORM,r.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,s.addControl(r),s._image=r,s._textBlock=o,s}static CreateImageOnlyButton(t,e){const i=new this(t),s=new T(t+"_icon",e);return s.stretch=T.STRETCH_FILL,s.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,i.addControl(s),i._image=s,i}static CreateSimpleButton(t,e){const i=new this(t),s=new U(t+"_button",e);return s.textWrapping=!0,s.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,i.addControl(s),i._textBlock=s,i}static CreateImageWithCenterTextButton(t,e,i){const s=new this(t),o=new T(t+"_icon",i);o.stretch=T.STRETCH_FILL,s.addControl(o);const r=new U(t+"_button",e);return r.textWrapping=!0,r.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,s.addControl(r),s._image=o,s._textBlock=r,s}}N("BABYLON.GUI.Button",zt);class Tt extends ut{get isVertical(){return this._isVertical}set isVertical(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())}get spacing(){return this._spacing}set spacing(t){this._spacing!==t&&(this._spacing=t,this._markAsDirty())}set width(t){this._doNotTrackManualChanges||(this._manualWidth=!0),this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()}get width(){return this._width.toString(this._host)}set height(t){this._doNotTrackManualChanges||(this._manualHeight=!0),this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()}get height(){return this._height.toString(this._host)}constructor(t){super(t),this.name=t,this._isVertical=!0,this._manualWidth=!1,this._manualHeight=!1,this._doNotTrackManualChanges=!1,this._spacing=0,this.ignoreLayoutWarnings=!1}_getTypeName(){return"StackPanel"}_preMeasure(t,e){for(const i of this._children)this._isVertical?i.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP:i.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT;super._preMeasure(t,e)}_additionalProcessing(t,e){super._additionalProcessing(t,e),this._measureForChildren.copyFrom(t),this._measureForChildren.left=this._currentMeasure.left,this._measureForChildren.top=this._currentMeasure.top,(!this.isVertical||this._manualWidth)&&(this._measureForChildren.width=this._currentMeasure.width),(this.isVertical||this._manualHeight)&&(this._measureForChildren.height=this._currentMeasure.height)}_postMeasure(){let t=0,e=0;const i=this._children.length;for(let r=0;r<i;r++){const a=this._children[r];!a.isVisible||a.notRenderable||(this._isVertical?(a.top!==e+"px"&&(a.top=e+"px",this._rebuildLayout=!0,a._top.ignoreAdaptiveScaling=!0),a._height.isPercentage&&!a._automaticSize?this.ignoreLayoutWarnings||it.Warn(`Control (Name:${a.name}, UniqueId:${a.uniqueId}) is using height in percentage mode inside a vertical StackPanel`):e+=a._currentMeasure.height+a._paddingTopInPixels+a._paddingBottomInPixels+(r<i-1?this._spacing:0)):(a.left!==t+"px"&&(a.left=t+"px",this._rebuildLayout=!0,a._left.ignoreAdaptiveScaling=!0),a._width.isPercentage&&!a._automaticSize&&a.getClassName()==="TextBlock"&&a.textWrapping!==Zt.Clip&&!a.forceResizeWidth?this.ignoreLayoutWarnings||it.Warn(`Control (Name:${a.name}, UniqueId:${a.uniqueId}) is using width in percentage mode inside a horizontal StackPanel`):t+=a._currentMeasure.width+a._paddingLeftInPixels+a._paddingRightInPixels+(r<i-1?this._spacing:0)))}t+=this._paddingLeftInPixels+this._paddingRightInPixels,e+=this._paddingTopInPixels+this._paddingBottomInPixels,this._doNotTrackManualChanges=!0;let s=!1,o=!1;if((!this._manualHeight||this.adaptHeightToChildren)&&this._isVertical){const r=this.height;this.height=e+"px",o=r!==this.height||!this._height.ignoreAdaptiveScaling}if((!this._manualWidth||this.adaptWidthToChildren)&&!this._isVertical){const r=this.width;this.width=t+"px",s=r!==this.width||!this._width.ignoreAdaptiveScaling}o&&(this._height.ignoreAdaptiveScaling=!0),s&&(this._width.ignoreAdaptiveScaling=!0),this._doNotTrackManualChanges=!1,(s||o)&&(this._rebuildLayout=!0),super._postMeasure()}serialize(t){super.serialize(t),t.manualWidth=this._manualWidth,t.manualHeight=this._manualHeight}_parseFromContent(t,e){this._manualWidth=t.manualWidth,this._manualHeight=t.manualHeight,super._parseFromContent(t,e)}}n([_()],Tt.prototype,"ignoreLayoutWarnings",void 0);n([_()],Tt.prototype,"isVertical",null);n([_()],Tt.prototype,"spacing",null);n([_()],Tt.prototype,"width",null);n([_()],Tt.prototype,"height",null);N("BABYLON.GUI.StackPanel",Tt);class _e extends u{get thickness(){return this._thickness}set thickness(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())}get checkSizeRatio(){return this._checkSizeRatio}set checkSizeRatio(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get isChecked(){return this._isChecked}set isChecked(t){this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t))}constructor(t){super(t),this.name=t,this._isChecked=!1,this._background="black",this._checkSizeRatio=.8,this._thickness=1,this.onIsCheckedChangedObservable=new B,this.isPointerBlocker=!0}_getTypeName(){return"Checkbox"}_draw(t){t.save(),this._applyStates(t);const e=this._currentMeasure.width-this._thickness,i=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,e,i),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._isChecked){t.fillStyle=this._isEnabled?this.color:this._disabledColorItem;const s=e*this._checkSizeRatio,o=i*this._checkSizeRatio;t.fillRect(this._currentMeasure.left+this._thickness/2+(e-s)/2,this._currentMeasure.top+this._thickness/2+(i-o)/2,s,o)}t.strokeStyle=this.color,t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,e,i),t.restore()}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?(this.isReadOnly||(this.isChecked=!this.isChecked),!0):!1}static AddCheckBoxWithHeader(t,e){const i=new Tt;i.isVertical=!1,i.height="30px";const s=new _e;s.width="20px",s.height="20px",s.isChecked=!0,s.color="green",s.onIsCheckedChangedObservable.add(e),i.addControl(s);const o=new U;return o.text=t,o.width="180px",o.paddingLeft="5px",o.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,o.color="white",i.addControl(o),i}}n([_()],_e.prototype,"thickness",null);n([_()],_e.prototype,"checkSizeRatio",null);n([_()],_e.prototype,"background",null);n([_()],_e.prototype,"isChecked",null);N("BABYLON.GUI.Checkbox",_e);class Pi{get text(){return this._characters?this._characters.join(""):this._text}set text(t){this._text=t,this._characters=Array.from&&Array.from(t)}get length(){return this._characters?this._characters.length:this._text.length}removePart(t,e,i){if(this._text=this._text.slice(0,t)+(i||"")+this._text.slice(e),this._characters){const s=i?Array.from(i):[];this._characters.splice(t,e-t,...s)}}charAt(t){return this._characters?this._characters[t]:this._text.charAt(t)}substr(t,e){if(this._characters){isNaN(t)?t=0:t>=0?t=Math.min(t,this._characters.length):t=this._characters.length+Math.max(t,-this._characters.length),e===void 0?e=this._characters.length-t:(isNaN(e)||e<0)&&(e=0);const i=[];for(;--e>=0;)i[e]=this._characters[t+e];return i.join("")}return this._text.substr(t,e)}substring(t,e){if(this._characters){isNaN(t)?t=0:t>this._characters.length?t=this._characters.length:t<0&&(t=0),e===void 0?e=this._characters.length:isNaN(e)?e=0:e>this._characters.length?e=this._characters.length:e<0&&(e=0);const i=[];let s=0;for(;t<e;)i[s++]=this._characters[t++];return i.join("")}return this._text.substring(t,e)}isWord(t){const e=/\w/g;return this._characters?this._characters[t].search(e)!==-1:this._text.search(e)!==-1}}class Y extends u{get maxWidth(){return this._maxWidth.toString(this._host)}get maxWidthInPixels(){return this._maxWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)}set maxWidth(t){this._maxWidth.toString(this._host)!==t&&this._maxWidth.fromString(t)&&this._markAsDirty()}get highligherOpacity(){return this._highligherOpacity}set highligherOpacity(t){this._highligherOpacity!==t&&(this._highligherOpacity=t,this._markAsDirty())}get onFocusSelectAll(){return this._onFocusSelectAll}set onFocusSelectAll(t){this._onFocusSelectAll!==t&&(this._onFocusSelectAll=t,this._markAsDirty())}get textHighlightColor(){return this._textHighlightColor}set textHighlightColor(t){this._textHighlightColor!==t&&(this._textHighlightColor=t,this._markAsDirty())}get margin(){return this._margin.toString(this._host)}get marginInPixels(){return this._margin.getValueInPixel(this._host,this._cachedParentMeasure.width)}set margin(t){this._margin.toString(this._host)!==t&&this._margin.fromString(t)&&this._markAsDirty()}get autoStretchWidth(){return this._autoStretchWidth}set autoStretchWidth(t){this._autoStretchWidth!==t&&(this._autoStretchWidth=t,this._markAsDirty())}get thickness(){return this._thickness}set thickness(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())}get focusedBackground(){return this._focusedBackground}set focusedBackground(t){this._focusedBackground!==t&&(this._focusedBackground=t,this._markAsDirty())}get focusedColor(){return this._focusedColor}set focusedColor(t){this._focusedColor!==t&&(this._focusedColor=t,this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get placeholderColor(){return this._placeholderColor}set placeholderColor(t){this._placeholderColor!==t&&(this._placeholderColor=t,this._markAsDirty())}get placeholderText(){return this._placeholderText}set placeholderText(t){this._placeholderText!==t&&(this._placeholderText=t,this._markAsDirty())}get deadKey(){return this._deadKey}set deadKey(t){this._deadKey=t}get highlightedText(){return this._highlightedText}set highlightedText(t){this._highlightedText!==t&&(this._highlightedText=t,this._markAsDirty())}get addKey(){return this._addKey}set addKey(t){this._addKey=t}get currentKey(){return this._currentKey}set currentKey(t){this._currentKey=t}get text(){return this._textWrapper.text}set text(t){const e=t.toString();this._textWrapper||(this._textWrapper=new Pi),this._textWrapper.text!==e&&(this._textWrapper.text=e,this._textHasChanged())}_textHasChanged(){this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this)}get width(){return this._width.toString(this._host)}set width(t){this._width.toString(this._host)!==t&&(this._width.fromString(t)&&this._markAsDirty(),this.autoStretchWidth=!1)}constructor(t,e=""){super(t),this.name=t,this._placeholderText="",this._background="#222222",this._focusedBackground="#000000",this._focusedColor="white",this._placeholderColor="gray",this._thickness=1,this._margin=new I(10,I.UNITMODE_PIXEL),this._autoStretchWidth=!0,this._maxWidth=new I(1,I.UNITMODE_PERCENTAGE,!1),this._isFocused=!1,this._blinkIsEven=!1,this._cursorOffset=0,this._deadKey=!1,this._addKey=!0,this._currentKey="",this._isTextHighlightOn=!1,this._textHighlightColor="#d5e0ff",this._highligherOpacity=.4,this._highlightedText="",this._startHighlightIndex=0,this._endHighlightIndex=0,this._cursorIndex=-1,this._onFocusSelectAll=!1,this._isPointerDown=!1,this.promptMessage="Please enter text:",this.disableMobilePrompt=!1,this.onTextChangedObservable=new B,this.onBeforeKeyAddObservable=new B,this.onFocusObservable=new B,this.onBlurObservable=new B,this.onTextHighlightObservable=new B,this.onTextCopyObservable=new B,this.onTextCutObservable=new B,this.onTextPasteObservable=new B,this.onKeyboardEventProcessedObservable=new B,this.text=e,this.isPointerBlocker=!0}onBlur(){this._isFocused=!1,this._scrollLeft=null,this._cursorOffset=0,clearTimeout(this._blinkTimeout),this._markAsDirty(),this.onBlurObservable.notifyObservers(this),this._host.unRegisterClipboardEvents(),this._onClipboardObserver&&this._host.onClipboardObservable.remove(this._onClipboardObserver);const t=this._host.getScene();this._onPointerDblTapObserver&&t&&t.onPointerObservable.remove(this._onPointerDblTapObserver)}onFocus(){if(!this._isEnabled)return;if(this._scrollLeft=null,this._isFocused=!0,this._blinkIsEven=!1,this._cursorOffset=0,this._markAsDirty(),this.onFocusObservable.notifyObservers(this),this._focusedBy==="touch"&&!this.disableMobilePrompt){const e=prompt(this.promptMessage);e!==null&&(this.text=e),this._host.focusedControl=null;return}this._host.registerClipboardEvents(),this._onClipboardObserver=this._host.onClipboardObservable.add(e=>{switch(e.type){case Me.COPY:this._onCopyText(e.event),this.onTextCopyObservable.notifyObservers(this);break;case Me.CUT:this._onCutText(e.event),this.onTextCutObservable.notifyObservers(this);break;case Me.PASTE:this._onPasteText(e.event),this.onTextPasteObservable.notifyObservers(this);break;default:return}});const t=this._host.getScene();t&&(this._onPointerDblTapObserver=t.onPointerObservable.add(e=>{this._isFocused&&e.type===L.POINTERDOUBLETAP&&this._processDblClick(e)})),this._onFocusSelectAll&&this._selectAllText()}focus(){this._host.moveFocusToControl(this)}blur(){this._host.focusedControl=null}_getTypeName(){return"InputText"}keepsFocusWith(){return this._connectedVirtualKeyboard?[this._connectedVirtualKeyboard]:null}processKey(t,e,i){var s;if(!this.isReadOnly&&!(i&&(i.ctrlKey||i.metaKey)&&(t===67||t===86||t===88))){if(i&&(i.ctrlKey||i.metaKey)&&t===65){this._selectAllText(),i.preventDefault();return}switch(t){case 32:e=" ";break;case 191:i&&i.preventDefault();break;case 8:if(this._textWrapper.text&&this._textWrapper.length>0){if(this.isTextHighlightOn){this._textWrapper.removePart(this._startHighlightIndex,this._endHighlightIndex),this._textHasChanged(),this.isTextHighlightOn=!1,this._cursorOffset=this._textWrapper.length-this._startHighlightIndex,this._blinkIsEven=!1,i&&i.preventDefault();return}if(this._cursorOffset===0)this.text=this._textWrapper.substr(0,this._textWrapper.length-1);else{const o=this._textWrapper.length-this._cursorOffset;o>0&&(this._textWrapper.removePart(o-1,o),this._textHasChanged())}}i&&i.preventDefault();return;case 46:if(this.isTextHighlightOn){this._textWrapper.removePart(this._startHighlightIndex,this._endHighlightIndex),this._textHasChanged(),this.isTextHighlightOn=!1,this._cursorOffset=this._textWrapper.length-this._startHighlightIndex,i&&i.preventDefault();return}if(this._textWrapper.text&&this._textWrapper.length>0&&this._cursorOffset>0){const o=this._textWrapper.length-this._cursorOffset;this._textWrapper.removePart(o,o+1),this._textHasChanged(),this._cursorOffset--}i&&i.preventDefault();return;case 13:this._host.focusedControl=null,this.isTextHighlightOn=!1;return;case 35:this._cursorOffset=0,this._blinkIsEven=!1,this.isTextHighlightOn=!1,this._markAsDirty();return;case 36:this._cursorOffset=this._textWrapper.length,this._blinkIsEven=!1,this.isTextHighlightOn=!1,this._markAsDirty();return;case 37:if(this._cursorOffset++,this._cursorOffset>this._textWrapper.length&&(this._cursorOffset=this._textWrapper.length),i&&i.shiftKey){if(this._blinkIsEven=!1,i.ctrlKey||i.metaKey){if(!this.isTextHighlightOn){if(this._textWrapper.length===this._cursorOffset)return;this._endHighlightIndex=this._textWrapper.length-this._cursorOffset+1}this._startHighlightIndex=0,this._cursorIndex=this._textWrapper.length-this._endHighlightIndex,this._cursorOffset=this._textWrapper.length,this.isTextHighlightOn=!0,this._markAsDirty();return}this.isTextHighlightOn?this._cursorIndex===-1&&(this._cursorIndex=this._textWrapper.length-this._endHighlightIndex,this._cursorOffset=this._startHighlightIndex===0?this._textWrapper.length:this._textWrapper.length-this._startHighlightIndex+1):(this.isTextHighlightOn=!0,this._cursorIndex=this._cursorOffset>=this._textWrapper.length?this._textWrapper.length:this._cursorOffset-1),this._cursorIndex<this._cursorOffset?(this._endHighlightIndex=this._textWrapper.length-this._cursorIndex,this._startHighlightIndex=this._textWrapper.length-this._cursorOffset):this._cursorIndex>this._cursorOffset?(this._endHighlightIndex=this._textWrapper.length-this._cursorOffset,this._startHighlightIndex=this._textWrapper.length-this._cursorIndex):this.isTextHighlightOn=!1,this._markAsDirty();return}this.isTextHighlightOn&&(this._cursorOffset=this._textWrapper.length-this._startHighlightIndex,this.isTextHighlightOn=!1),i&&(i.ctrlKey||i.metaKey)&&(this._cursorOffset=this._textWrapper.length,i.preventDefault()),this._blinkIsEven=!1,this.isTextHighlightOn=!1,this._cursorIndex=-1,this._markAsDirty();return;case 39:if(this._cursorOffset--,this._cursorOffset<0&&(this._cursorOffset=0),i&&i.shiftKey){if(this._blinkIsEven=!1,i.ctrlKey||i.metaKey){if(!this.isTextHighlightOn){if(this._cursorOffset===0)return;this._startHighlightIndex=this._textWrapper.length-this._cursorOffset-1}this._endHighlightIndex=this._textWrapper.length,this.isTextHighlightOn=!0,this._cursorIndex=this._textWrapper.length-this._startHighlightIndex,this._cursorOffset=0,this._markAsDirty();return}this.isTextHighlightOn?this._cursorIndex===-1&&(this._cursorIndex=this._textWrapper.length-this._startHighlightIndex,this._cursorOffset=this._textWrapper.length===this._endHighlightIndex?0:this._textWrapper.length-this._endHighlightIndex-1):(this.isTextHighlightOn=!0,this._cursorIndex=this._cursorOffset<=0?0:this._cursorOffset+1),this._cursorIndex<this._cursorOffset?(this._endHighlightIndex=this._textWrapper.length-this._cursorIndex,this._startHighlightIndex=this._textWrapper.length-this._cursorOffset):this._cursorIndex>this._cursorOffset?(this._endHighlightIndex=this._textWrapper.length-this._cursorOffset,this._startHighlightIndex=this._textWrapper.length-this._cursorIndex):this.isTextHighlightOn=!1,this._markAsDirty();return}this.isTextHighlightOn&&(this._cursorOffset=this._textWrapper.length-this._endHighlightIndex,this.isTextHighlightOn=!1),i&&(i.ctrlKey||i.metaKey)&&(this._cursorOffset=0,i.preventDefault()),this._blinkIsEven=!1,this.isTextHighlightOn=!1,this._cursorIndex=-1,this._markAsDirty();return}if(t===32&&(e=(s=i==null?void 0:i.key)!==null&&s!==void 0?s:" "),this._deadKey=e==="Dead",e&&(t===-1||t===32||t===34||t===39||t>47&&t<64||t>64&&t<91||t>159&&t<193||t>218&&t<223||t>95&&t<112)&&(this._currentKey=e,this.onBeforeKeyAddObservable.notifyObservers(this),e=this._currentKey,this._addKey&&!this._deadKey))if(this.isTextHighlightOn)this._textWrapper.removePart(this._startHighlightIndex,this._endHighlightIndex,e),this._textHasChanged(),this._cursorOffset=this._textWrapper.length-(this._startHighlightIndex+1),this.isTextHighlightOn=!1,this._blinkIsEven=!1,this._markAsDirty();else if(this._cursorOffset===0)this.text+=this._deadKey&&(i!=null&&i.key)?i.key:e;else{const o=this._textWrapper.length-this._cursorOffset;this._textWrapper.removePart(o,o,e),this._textHasChanged()}}}_updateValueFromCursorIndex(t){if(this._blinkIsEven=!1,this._cursorIndex===-1)this._cursorIndex=t;else if(this._cursorIndex<this._cursorOffset)this._endHighlightIndex=this._textWrapper.length-this._cursorIndex,this._startHighlightIndex=this._textWrapper.length-this._cursorOffset;else if(this._cursorIndex>this._cursorOffset)this._endHighlightIndex=this._textWrapper.length-this._cursorOffset,this._startHighlightIndex=this._textWrapper.length-this._cursorIndex;else{this.isTextHighlightOn=!1,this._markAsDirty();return}this.isTextHighlightOn=!0,this._markAsDirty()}_processDblClick(t){this._startHighlightIndex=this._textWrapper.length-this._cursorOffset,this._endHighlightIndex=this._startHighlightIndex;let e,i;do i=this._endHighlightIndex<this._textWrapper.length&&this._textWrapper.isWord(this._endHighlightIndex)?++this._endHighlightIndex:0,e=this._startHighlightIndex>0&&this._textWrapper.isWord(this._startHighlightIndex-1)?--this._startHighlightIndex:0;while(e||i);this._cursorOffset=this._textWrapper.length-this._startHighlightIndex,this.isTextHighlightOn=!0,this._clickedCoordinate=null,this._blinkIsEven=!0,this._cursorIndex=-1,this._markAsDirty()}_selectAllText(){this._blinkIsEven=!0,this.isTextHighlightOn=!0,this._startHighlightIndex=0,this._endHighlightIndex=this._textWrapper.length,this._cursorOffset=this._textWrapper.length,this._cursorIndex=-1,this._markAsDirty()}processKeyboard(t){this.processKey(t.keyCode,t.key,t),this.onKeyboardEventProcessedObservable.notifyObservers(t)}_onCopyText(t){this.isTextHighlightOn=!1;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch{}this._host.clipboardData=this._highlightedText}_onCutText(t){if(this._highlightedText){this._textWrapper.removePart(this._startHighlightIndex,this._endHighlightIndex),this._textHasChanged(),this.isTextHighlightOn=!1,this._cursorOffset=this._textWrapper.length-this._startHighlightIndex;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch{}this._host.clipboardData=this._highlightedText,this._highlightedText=""}}_onPasteText(t){let e="";t.clipboardData&&t.clipboardData.types.indexOf("text/plain")!==-1?e=t.clipboardData.getData("text/plain"):e=this._host.clipboardData;const i=this._textWrapper.length-this._cursorOffset;this._textWrapper.removePart(i,i,e),this._textHasChanged()}_draw(t){t.save(),this._applyStates(t),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isFocused?this._focusedBackground&&(t.fillStyle=this._isEnabled?this._focusedBackground:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)):this._background&&(t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),(!this._fontOffset||this._wasDirty)&&(this._fontOffset=u._GetFontOffset(t.font));const e=this._currentMeasure.left+this._margin.getValueInPixel(this._host,this._tempParentMeasure.width);this.color&&(t.fillStyle=this.color);let i=this._beforeRenderText(this._textWrapper);!this._isFocused&&!this._textWrapper.text&&this._placeholderText&&(i=new Pi,i.text=this._placeholderText,this._placeholderColor&&(t.fillStyle=this._placeholderColor)),this._textWidth=t.measureText(i.text).width;const s=this._margin.getValueInPixel(this._host,this._tempParentMeasure.width)*2;this._autoStretchWidth&&(this.width=Math.min(this._maxWidth.getValueInPixel(this._host,this._tempParentMeasure.width),this._textWidth+s)+"px",this._autoStretchWidth=!0);const o=this._fontOffset.ascent+(this._currentMeasure.height-this._fontOffset.height)/2,r=this._width.getValueInPixel(this._host,this._tempParentMeasure.width)-s;if(t.save(),t.beginPath(),t.rect(e,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,r+2,this._currentMeasure.height),t.clip(),this._isFocused&&this._textWidth>r){const a=e-this._textWidth+r;this._scrollLeft||(this._scrollLeft=a)}else this._scrollLeft=e;if(t.fillText(i.text,this._scrollLeft,this._currentMeasure.top+o),this._isFocused){if(this._clickedCoordinate){const l=this._scrollLeft+this._textWidth-this._clickedCoordinate;let h=0;this._cursorOffset=0;let d=0;do this._cursorOffset&&(d=Math.abs(l-h)),this._cursorOffset++,h=t.measureText(i.substr(i.length-this._cursorOffset,this._cursorOffset)).width;while(h<l&&i.length>=this._cursorOffset);Math.abs(l-h)>d&&this._cursorOffset--,this._blinkIsEven=!1,this._clickedCoordinate=null}if(!this._blinkIsEven){const a=i.substr(i.length-this._cursorOffset),l=t.measureText(a).width;let h=this._scrollLeft+this._textWidth-l;h<e?(this._scrollLeft+=e-h,h=e,this._markAsDirty()):h>e+r&&(this._scrollLeft+=e+r-h,h=e+r,this._markAsDirty()),this.isTextHighlightOn||t.fillRect(h,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,2,this._fontOffset.height)}if(clearTimeout(this._blinkTimeout),this._blinkTimeout=setTimeout(()=>{this._blinkIsEven=!this._blinkIsEven,this._markAsDirty()},500),this.isTextHighlightOn){clearTimeout(this._blinkTimeout);const a=t.measureText(i.substring(this._startHighlightIndex)).width;let l=this._scrollLeft+this._textWidth-a;this._highlightedText=i.substring(this._startHighlightIndex,this._endHighlightIndex);let h=t.measureText(i.substring(this._startHighlightIndex,this._endHighlightIndex)).width;l<e&&(h=h-(e-l),h||(h=t.measureText(i.charAt(i.length-this._cursorOffset)).width),l=e),t.globalAlpha=this._highligherOpacity,t.fillStyle=this._textHighlightColor,t.fillRect(l,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,h,this._fontOffset.height),t.globalAlpha=1}}t.restore(),this._thickness&&(this._isFocused?this.focusedColor&&(t.strokeStyle=this.focusedColor):this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?this.isReadOnly?!0:(this._clickedCoordinate=e.x,this.isTextHighlightOn=!1,this._highlightedText="",this._cursorIndex=-1,this._isPointerDown=!0,this._host._capturingControl[i]=this,this._focusedBy=o.event.pointerType,this._host.focusedControl===this?(clearTimeout(this._blinkTimeout),this._markAsDirty(),!0):this._isEnabled?(this._host.focusedControl=this,!0):!1):!1}_onPointerMove(t,e,i,s){this._host.focusedControl===this&&this._isPointerDown&&!this.isReadOnly&&(this._clickedCoordinate=e.x,this._markAsDirty(),this._updateValueFromCursorIndex(this._cursorOffset)),super._onPointerMove(t,e,i,s)}_onPointerUp(t,e,i,s,o){this._isPointerDown=!1,delete this._host._capturingControl[i],super._onPointerUp(t,e,i,s,o)}_beforeRenderText(t){return t}set isTextHighlightOn(t){this._isTextHighlightOn!==t&&(t&&this.onTextHighlightObservable.notifyObservers(this),this._isTextHighlightOn=t)}get isTextHighlightOn(){return this._isTextHighlightOn}dispose(){super.dispose(),this.onBlurObservable.clear(),this.onFocusObservable.clear(),this.onTextChangedObservable.clear(),this.onTextCopyObservable.clear(),this.onTextCutObservable.clear(),this.onTextPasteObservable.clear(),this.onTextHighlightObservable.clear(),this.onKeyboardEventProcessedObservable.clear()}}n([_()],Y.prototype,"promptMessage",void 0);n([_()],Y.prototype,"disableMobilePrompt",void 0);n([_()],Y.prototype,"maxWidth",null);n([_()],Y.prototype,"highligherOpacity",null);n([_()],Y.prototype,"onFocusSelectAll",null);n([_()],Y.prototype,"textHighlightColor",null);n([_()],Y.prototype,"margin",null);n([_()],Y.prototype,"autoStretchWidth",null);n([_()],Y.prototype,"thickness",null);n([_()],Y.prototype,"focusedBackground",null);n([_()],Y.prototype,"focusedColor",null);n([_()],Y.prototype,"background",null);n([_()],Y.prototype,"placeholderColor",null);n([_()],Y.prototype,"placeholderText",null);n([_()],Y.prototype,"deadKey",null);n([_()],Y.prototype,"text",null);n([_()],Y.prototype,"width",null);N("BABYLON.GUI.InputText",Y);class vt extends ut{set clipContent(t){this._clipContent=t;for(const e in this._cells)this._cells[e].clipContent=t}get clipContent(){return this._clipContent}set clipChildren(t){this._clipChildren=t;for(const e in this._cells)this._cells[e].clipChildren=t}get clipChildren(){return this._clipChildren}get columnCount(){return this._columnDefinitions.length}get rowCount(){return this._rowDefinitions.length}get children(){return this._childControls}get cells(){return this._cells}getRowDefinition(t){return t<0||t>=this._rowDefinitions.length?null:this._rowDefinitions[t]}getColumnDefinition(t){return t<0||t>=this._columnDefinitions.length?null:this._columnDefinitions[t]}addRowDefinition(t,e=!1){return this._rowDefinitions.push(new I(t,e?I.UNITMODE_PIXEL:I.UNITMODE_PERCENTAGE)),this._rowDefinitionObservers.push(this._rowDefinitions[this.rowCount-1].onChangedObservable.add(()=>this._markAsDirty())),this._markAsDirty(),this}addColumnDefinition(t,e=!1){return this._columnDefinitions.push(new I(t,e?I.UNITMODE_PIXEL:I.UNITMODE_PERCENTAGE)),this._columnDefinitionObservers.push(this._columnDefinitions[this.columnCount-1].onChangedObservable.add(()=>this._markAsDirty())),this._markAsDirty(),this}setRowDefinition(t,e,i=!1){if(t<0||t>=this._rowDefinitions.length)return this;const s=this._rowDefinitions[t];return s&&s.isPixel===i&&s.value===e?this:(this._rowDefinitions[t].onChangedObservable.remove(this._rowDefinitionObservers[t]),this._rowDefinitions[t]=new I(e,i?I.UNITMODE_PIXEL:I.UNITMODE_PERCENTAGE),this._rowDefinitionObservers[t]=this._rowDefinitions[t].onChangedObservable.add(()=>this._markAsDirty()),this._markAsDirty(),this)}setColumnDefinition(t,e,i=!1){if(t<0||t>=this._columnDefinitions.length)return this;const s=this._columnDefinitions[t];return s&&s.isPixel===i&&s.value===e?this:(this._columnDefinitions[t].onChangedObservable.remove(this._columnDefinitionObservers[t]),this._columnDefinitions[t]=new I(e,i?I.UNITMODE_PIXEL:I.UNITMODE_PERCENTAGE),this._columnDefinitionObservers[t]=this._columnDefinitions[t].onChangedObservable.add(()=>this._markAsDirty()),this._markAsDirty(),this)}getChildrenAt(t,e){const i=this._cells[`${t}:${e}`];return i?i.children:null}getChildCellInfo(t){return t._tag}_removeCell(t,e){if(t){super.removeControl(t);for(const i of t.children){const s=this._childControls.indexOf(i);s!==-1&&this._childControls.splice(s,1)}delete this._cells[e]}}_offsetCell(t,e){if(this._cells[e]){this._cells[t]=this._cells[e];for(const i of this._cells[t].children)i._tag=t;delete this._cells[e]}}removeColumnDefinition(t){if(t<0||t>=this._columnDefinitions.length)return this;for(let e=0;e<this._rowDefinitions.length;e++){const i=`${e}:${t}`,s=this._cells[i];this._removeCell(s,i)}for(let e=0;e<this._rowDefinitions.length;e++)for(let i=t+1;i<this._columnDefinitions.length;i++){const s=`${e}:${i-1}`,o=`${e}:${i}`;this._offsetCell(s,o)}return this._columnDefinitions[t].onChangedObservable.remove(this._columnDefinitionObservers[t]),this._columnDefinitions.splice(t,1),this._columnDefinitionObservers.splice(t,1),this._markAsDirty(),this}removeRowDefinition(t){if(t<0||t>=this._rowDefinitions.length)return this;for(let e=0;e<this._columnDefinitions.length;e++){const i=`${t}:${e}`,s=this._cells[i];this._removeCell(s,i)}for(let e=0;e<this._columnDefinitions.length;e++)for(let i=t+1;i<this._rowDefinitions.length;i++){const s=`${i-1}:${e}`,o=`${i}:${e}`;this._offsetCell(s,o)}return this._rowDefinitions[t].onChangedObservable.remove(this._rowDefinitionObservers[t]),this._rowDefinitions.splice(t,1),this._rowDefinitionObservers.splice(t,1),this._markAsDirty(),this}addControl(t,e=0,i=0){if(this._rowDefinitions.length===0&&this.addRowDefinition(1,!1),this._columnDefinitions.length===0&&this.addColumnDefinition(1,!1),this._childControls.indexOf(t)!==-1)return it.Warn(`Control (Name:${t.name}, UniqueId:${t.uniqueId}) is already associated with this grid. You must remove it before reattaching it`),this;const s=Math.min(e,this._rowDefinitions.length-1),o=Math.min(i,this._columnDefinitions.length-1),r=`${s}:${o}`;let a=this._cells[r];return a||(a=new ut(r),this._cells[r]=a,a.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,a.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,a.clipContent=this.clipContent,a.clipChildren=this.clipChildren,super.addControl(a)),a.addControl(t),this._childControls.push(t),t._tag=r,t.parent=this,this._markAsDirty(),this}removeControl(t){const e=this._childControls.indexOf(t);e!==-1&&this._childControls.splice(e,1);const i=this._cells[t._tag];return i&&(i.removeControl(t),t._tag=null),this._markAsDirty(),this}constructor(t){super(t),this.name=t,this._rowDefinitions=new Array,this._rowDefinitionObservers=[],this._columnDefinitions=new Array,this._columnDefinitionObservers=[],this._cells={},this._childControls=new Array}_getTypeName(){return"Grid"}_getGridDefinitions(t){const e=[],i=[],s=[],o=[];let r=this._currentMeasure.width,a=0,l=this._currentMeasure.height,h=0,d=0;for(const y of this._rowDefinitions){if(y.isPixel){const V=y.getValue(this._host);l-=V,i[d]=V}else h+=y.value;d++}let f=0;d=0;for(const y of this._rowDefinitions){if(o.push(f),y.isPixel)f+=y.getValue(this._host);else{const V=Math.round(y.value/h*l);f+=V,i[d]=V}d++}d=0;for(const y of this._columnDefinitions){if(y.isPixel){const V=y.getValue(this._host);r-=V,e[d]=V}else a+=y.value;d++}let g=0;d=0;for(const y of this._columnDefinitions){if(s.push(g),y.isPixel)g+=y.getValue(this._host);else{const V=Math.round(y.value/a*r);g+=V,e[d]=V}d++}t(s,o,e,i)}_additionalProcessing(t,e){this._getGridDefinitions((i,s,o,r)=>{for(const a in this._cells){if(!Object.prototype.hasOwnProperty.call(this._cells,a))continue;const l=a.split(":"),h=parseInt(l[0]),d=parseInt(l[1]),f=this._cells[a];f.leftInPixels=i[d],f.topInPixels=s[h],f.widthInPixels=o[d],f.heightInPixels=r[h],f._left.ignoreAdaptiveScaling=!0,f._top.ignoreAdaptiveScaling=!0,f._width.ignoreAdaptiveScaling=!0,f._height.ignoreAdaptiveScaling=!0}}),super._additionalProcessing(t,e)}_flagDescendantsAsMatrixDirty(){for(const t in this._cells){if(!Object.prototype.hasOwnProperty.call(this._cells,t))continue;this._cells[t]._markMatrixAsDirty()}}_renderHighlightSpecific(t){super._renderHighlightSpecific(t),this._getGridDefinitions((e,i,s,o)=>{for(let r=0;r<e.length;r++){const a=this._currentMeasure.left+e[r]+s[r];t.beginPath(),t.moveTo(a,this._currentMeasure.top),t.lineTo(a,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(let r=0;r<i.length;r++){const a=this._currentMeasure.top+i[r]+o[r];t.beginPath(),t.moveTo(this._currentMeasure.left,a),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,a),t.stroke()}}),t.restore()}dispose(){super.dispose();for(const t of this._childControls)t.dispose();for(let t=0;t<this._rowDefinitions.length;t++)this._rowDefinitions[t].onChangedObservable.remove(this._rowDefinitionObservers[t]);for(let t=0;t<this._columnDefinitions.length;t++)this._columnDefinitions[t].onChangedObservable.remove(this._columnDefinitionObservers[t]);this._rowDefinitionObservers.length=0,this._rowDefinitions.length=0,this._columnDefinitionObservers.length=0,this._columnDefinitions.length=0,this._cells={},this._childControls.length=0}serialize(t){super.serialize(t),t.columnCount=this.columnCount,t.rowCount=this.rowCount,t.columns=[],t.rows=[],t.tags=[];for(let e=0;e<this.columnCount;++e){const i=this.getColumnDefinition(e),s={value:i==null?void 0:i.getValue(this.host),unit:i==null?void 0:i.unit};t.columns.push(s)}for(let e=0;e<this.rowCount;++e){const i=this.getRowDefinition(e),s={value:i==null?void 0:i.getValue(this.host),unit:i==null?void 0:i.unit};t.rows.push(s)}this.children.forEach(e=>{t.tags.push(e._tag)})}_parseFromContent(t,e){super._parseFromContent(t,e);const i=[];this.children.forEach(s=>{i.push(s)}),this.removeRowDefinition(0),this.removeColumnDefinition(0);for(let s=0;s<t.columnCount;++s){const o=t.columns[s].value,r=t.columns[s].unit;this.addColumnDefinition(o,r===1)}for(let s=0;s<t.rowCount;++s){const o=t.rows[s].value,r=t.rows[s].unit;this.addRowDefinition(o,r===1)}for(let s=0;s<i.length;++s){const o=t.tags[s];let r=parseInt(o.substring(0,o.search(":")));isNaN(r)&&(r=0);let a=parseInt(o.substring(o.search(":")+1));isNaN(a)&&(a=0),this.addControl(i[s],r,a)}}}n([_()],vt.prototype,"clipContent",null);N("BABYLON.GUI.Grid",vt);class xt extends u{get value(){return this._value}set value(t){this._value.equals(t)||(this._value.copyFrom(t),this._value.toHSVToRef(this._tmpColor),this._h=this._tmpColor.r,this._s=Math.max(this._tmpColor.g,1e-5),this._v=Math.max(this._tmpColor.b,1e-5),this._markAsDirty(),this._value.r<=xt._Epsilon&&(this._value.r=0),this._value.g<=xt._Epsilon&&(this._value.g=0),this._value.b<=xt._Epsilon&&(this._value.b=0),this._value.r>=1-xt._Epsilon&&(this._value.r=1),this._value.g>=1-xt._Epsilon&&(this._value.g=1),this._value.b>=1-xt._Epsilon&&(this._value.b=1),this.onValueChangedObservable.notifyObservers(this._value))}get width(){return this._width.toString(this._host)}set width(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&(this._width.getValue(this._host)===0&&(t="1px",this._width.fromString(t)),this._height.fromString(t),this._markAsDirty())}get height(){return this._height.toString(this._host)}set height(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&(this._height.getValue(this._host)===0&&(t="1px",this._height.fromString(t)),this._width.fromString(t),this._markAsDirty())}get size(){return this.width}set size(t){this.width=t}constructor(t){super(t),this.name=t,this._value=w.Red(),this._tmpColor=new w,this._pointerStartedOnSquare=!1,this._pointerStartedOnWheel=!1,this._squareLeft=0,this._squareTop=0,this._squareSize=0,this._h=360,this._s=1,this._v=1,this._lastPointerDownId=-1,this.onValueChangedObservable=new B,this._pointerIsDown=!1,this.value=new w(.88,.1,.1),this.size="200px",this.isPointerBlocker=!0}_getTypeName(){return"ColorPicker"}_preMeasure(t){t.width<t.height?this._currentMeasure.height=t.width:this._currentMeasure.width=t.height}_updateSquareProps(){const t=Math.min(this._currentMeasure.width,this._currentMeasure.height)*.5,e=t*.2,s=(t-e)*2/Math.sqrt(2),o=t-s*.5;this._squareLeft=this._currentMeasure.left+o,this._squareTop=this._currentMeasure.top+o,this._squareSize=s}_drawGradientSquare(t,e,i,s,o,r){const a=r.createLinearGradient(e,i,s+e,i);a.addColorStop(0,"#fff"),a.addColorStop(1,"hsl("+t+", 100%, 50%)"),r.fillStyle=a,r.fillRect(e,i,s,o);const l=r.createLinearGradient(e,i,e,o+i);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"#000"),r.fillStyle=l,r.fillRect(e,i,s,o)}_drawCircle(t,e,i,s){s.beginPath(),s.arc(t,e,i+1,0,2*Math.PI,!1),s.lineWidth=3,s.strokeStyle="#333333",s.stroke(),s.beginPath(),s.arc(t,e,i,0,2*Math.PI,!1),s.lineWidth=3,s.strokeStyle="#ffffff",s.stroke()}_createColorWheelCanvas(t,e){const i=Wt.LastCreatedEngine;if(!i)throw new Error("Invalid engine. Unable to create a canvas.");const s=i.createCanvas(t*2,t*2),o=s.getContext("2d"),r=o.getImageData(0,0,t*2,t*2),a=r.data,l=this._tmpColor,h=t*t,d=t-e,f=d*d;for(let g=-t;g<t;g++)for(let y=-t;y<t;y++){const V=g*g+y*y;if(V>h||V<f)continue;const yt=Math.sqrt(V),le=Math.atan2(y,g);w.HSVtoRGBToRef(le*180/Math.PI+180,yt/t,1,l);const Ft=(g+t+(y+t)*2*t)*4;a[Ft]=l.r*255,a[Ft+1]=l.g*255,a[Ft+2]=l.b*255;let Gt=(yt-d)/(t-d),Nt=.2;const Ae=.2,Ze=.04,ct=50,W=150;t<ct?Nt=Ae:t>W?Nt=Ze:Nt=(Ze-Ae)*(t-ct)/(W-ct)+Ae,Gt=(yt-d)/(t-d),Gt<Nt?a[Ft+3]=255*(Gt/Nt):Gt>1-Nt?a[Ft+3]=255*(1-(Gt-(1-Nt))/Nt):a[Ft+3]=255}return o.putImageData(r,0,0),s}_draw(t){t.save(),this._applyStates(t);const e=Math.min(this._currentMeasure.width,this._currentMeasure.height)*.5,i=e*.2,s=this._currentMeasure.left,o=this._currentMeasure.top;(!this._colorWheelCanvas||this._colorWheelCanvas.width!=e*2)&&(this._colorWheelCanvas=this._createColorWheelCanvas(e,i)),this._updateSquareProps(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY,t.fillRect(this._squareLeft,this._squareTop,this._squareSize,this._squareSize)),t.drawImage(this._colorWheelCanvas,s,o),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._drawGradientSquare(this._h,this._squareLeft,this._squareTop,this._squareSize,this._squareSize,t);let r=this._squareLeft+this._squareSize*this._s,a=this._squareTop+this._squareSize*(1-this._v);this._drawCircle(r,a,e*.04,t);const l=e-i*.5;r=s+e+Math.cos((this._h-180)*Math.PI/180)*l,a=o+e+Math.sin((this._h-180)*Math.PI/180)*l,this._drawCircle(r,a,i*.35,t),t.restore()}_updateValueFromPointer(t,e){if(this._pointerStartedOnWheel){const i=Math.min(this._currentMeasure.width,this._currentMeasure.height)*.5,s=i+this._currentMeasure.left,o=i+this._currentMeasure.top;this._h=Math.atan2(e-o,t-s)*180/Math.PI+180}else this._pointerStartedOnSquare&&(this._updateSquareProps(),this._s=(t-this._squareLeft)/this._squareSize,this._v=1-(e-this._squareTop)/this._squareSize,this._s=Math.min(this._s,1),this._s=Math.max(this._s,xt._Epsilon),this._v=Math.min(this._v,1),this._v=Math.max(this._v,xt._Epsilon));w.HSVtoRGBToRef(this._h,this._s,this._v,this._tmpColor),this.value=this._tmpColor}_isPointOnSquare(t,e){this._updateSquareProps();const i=this._squareLeft,s=this._squareTop,o=this._squareSize;return t>=i&&t<=i+o&&e>=s&&e<=s+o}_isPointOnWheel(t,e){const i=Math.min(this._currentMeasure.width,this._currentMeasure.height)*.5,s=i+this._currentMeasure.left,o=i+this._currentMeasure.top,r=i*.2,a=i-r,l=i*i,h=a*a,d=t-s,f=e-o,g=d*d+f*f;return g<=l&&g>=h}_onPointerDown(t,e,i,s,o){if(!super._onPointerDown(t,e,i,s,o))return!1;if(this.isReadOnly)return!0;this._pointerIsDown=!0,this._pointerStartedOnSquare=!1,this._pointerStartedOnWheel=!1,this._invertTransformMatrix.transformCoordinates(e.x,e.y,this._transformedPosition);const r=this._transformedPosition.x,a=this._transformedPosition.y;return this._isPointOnSquare(r,a)?this._pointerStartedOnSquare=!0:this._isPointOnWheel(r,a)&&(this._pointerStartedOnWheel=!0),this._updateValueFromPointer(r,a),this._host._capturingControl[i]=this,this._lastPointerDownId=i,!0}_onPointerMove(t,e,i,s){if(i==this._lastPointerDownId){if(!this.isReadOnly){this._invertTransformMatrix.transformCoordinates(e.x,e.y,this._transformedPosition);const o=this._transformedPosition.x,r=this._transformedPosition.y;this._pointerIsDown&&this._updateValueFromPointer(o,r)}super._onPointerMove(t,e,i,s)}}_onPointerUp(t,e,i,s,o,r){this._pointerIsDown=!1,delete this._host._capturingControl[i],super._onPointerUp(t,e,i,s,o,r)}_onCanvasBlur(){this._forcePointerUp(),super._onCanvasBlur()}static ShowPickerDialogAsync(t,e){return new Promise(i=>{e.pickerWidth=e.pickerWidth||"640px",e.pickerHeight=e.pickerHeight||"400px",e.headerHeight=e.headerHeight||"35px",e.lastColor=e.lastColor||"#000000",e.swatchLimit=e.swatchLimit||20,e.numSwatchesPerLine=e.numSwatchesPerLine||10;const s=e.swatchLimit/e.numSwatchesPerLine,o=parseFloat(e.pickerWidth)/e.numSwatchesPerLine,r=Math.floor(o*.25),a=r*(e.numSwatchesPerLine+1),l=Math.floor((parseFloat(e.pickerWidth)-a)/e.numSwatchesPerLine),h=l*s+r*(s+1),d=(parseInt(e.pickerHeight)+h+Math.floor(l*.25)).toString()+"px",f="#c0c0c0",g="#535353",y="#414141",V="515151",yt="#555555",le="#454545",Ft="#404040",Gt=w.FromHexString("#dddddd"),Nt=Gt.r+Gt.g+Gt.b,Ae="#aaaaaa",Ze="#ffffff";let ct,W;const Fi=["R","G","B"],he="#454545",ce="#f0f0f0";let de,j,te=!1,Z,It,R;const Mt=new vt;if(Mt.name="Dialog Container",Mt.width=e.pickerWidth,e.savedColors){Mt.height=d;const p=parseInt(e.pickerHeight)/parseInt(d);Mt.addRowDefinition(p,!1),Mt.addRowDefinition(1-p,!1)}else Mt.height=e.pickerHeight,Mt.addRowDefinition(1,!1);if(t.addControl(Mt),e.savedColors){j=new vt,j.name="Swatch Drawer",j.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,j.background=g,j.width=e.pickerWidth;const p=e.savedColors.length/e.numSwatchesPerLine;let C;p==0?C=0:C=p+1,j.height=(l*p+C*r).toString()+"px",j.top=Math.floor(l*.25).toString()+"px";for(let b=0;b<Math.ceil(e.savedColors.length/e.numSwatchesPerLine)*2+1;b++)b%2!=0?j.addRowDefinition(l,!0):j.addRowDefinition(r,!0);for(let b=0;b<e.numSwatchesPerLine*2+1;b++)b%2!=0?j.addColumnDefinition(l,!0):j.addColumnDefinition(r,!0);Mt.addControl(j,1,0)}const ee=new vt;ee.name="Picker Panel",ee.height=e.pickerHeight;const Ei=parseInt(e.headerHeight)/parseInt(e.pickerHeight),qe=[Ei,1-Ei];ee.addRowDefinition(qe[0],!1),ee.addRowDefinition(qe[1],!1),Mt.addControl(ee,0,0);const Ut=new ft;Ut.name="Dialogue Header Bar",Ut.background="#cccccc",Ut.thickness=0,ee.addControl(Ut,0,0);const _t=zt.CreateSimpleButton("closeButton","a");_t.fontFamily="coreglyphs";const hi=w.FromHexString(Ut.background),Mi=new w(1-hi.r,1-hi.g,1-hi.b);_t.color=Mi.toHexString(),_t.fontSize=Math.floor(parseInt(e.headerHeight)*.6),_t.textBlock.textVerticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,_t.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_RIGHT,_t.height=_t.width=e.headerHeight,_t.background=Ut.background,_t.thickness=0,_t.pointerDownAnimation=()=>{},_t.pointerUpAnimation=()=>{_t.background=Ut.background},_t.pointerEnterAnimation=()=>{_t.color=Ut.background,_t.background="red"},_t.pointerOutAnimation=()=>{_t.color=Mi.toHexString(),_t.background=Ut.background},_t.onPointerClickObservable.add(()=>{fi(Et.background)}),ee.addControl(_t,0,0);const ie=new vt;ie.name="Dialogue Body",ie.background=g;const $e=[.4375,.5625];ie.addRowDefinition(1,!1),ie.addColumnDefinition($e[0],!1),ie.addColumnDefinition($e[1],!1),ee.addControl(ie,1,0);const ue=new vt;ue.name="Picker Grid",ue.addRowDefinition(.85,!1),ue.addRowDefinition(.15,!1),ie.addControl(ue,0,0);const Pt=new xt;Pt.name="GUI Color Picker",e.pickerHeight<e.pickerWidth?Pt.width=.89:Pt.height=.89,Pt.value=w.FromHexString(e.lastColor),Pt.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,Pt.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,Pt.onPointerDownObservable.add(()=>{R=Pt.name,It="",Ct(!1)}),Pt.onValueChangedObservable.add(function(p){R==Pt.name&&Dt(p,Pt.name)}),ue.addControl(Pt,0,0);const fe=new vt;fe.name="Dialogue Right Half",fe.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT;const Je=[.514,.486];fe.addRowDefinition(Je[0],!1),fe.addRowDefinition(Je[1],!1),ie.addControl(fe,1,1);const ge=new vt;ge.name="Swatches and Buttons";const ti=[.417,.583];ge.addRowDefinition(1,!1),ge.addColumnDefinition(ti[0],!1),ge.addColumnDefinition(ti[1],!1),fe.addControl(ge,0,0);const At=new vt;At.name="New and Current Swatches";const Qe=[.04,.16,.64,.16];At.addRowDefinition(Qe[0],!1),At.addRowDefinition(Qe[1],!1),At.addRowDefinition(Qe[2],!1),At.addRowDefinition(Qe[3],!1),ge.addControl(At,0,0);const me=new vt;me.name="Active Swatches",me.width=.67,me.addRowDefinition(.5,!1),me.addRowDefinition(.5,!1),At.addControl(me,2,0);const rs=Math.floor(parseInt(e.pickerWidth)*$e[1]*ti[0]*.11),as=Math.floor(parseInt(e.pickerHeight)*qe[1]*Je[0]*Qe[1]*.5);let ei;e.pickerWidth>e.pickerHeight?ei=as:ei=rs;const Ve=new U;Ve.text="new",Ve.name="New Color Label",Ve.color=f,Ve.fontSize=ei,At.addControl(Ve,1,0);const Yt=new ft;Yt.name="New Color Swatch",Yt.background=e.lastColor,Yt.thickness=0,me.addControl(Yt,0,0);const Et=zt.CreateSimpleButton("currentSwatch","");Et.background=e.lastColor,Et.thickness=0,Et.onPointerClickObservable.add(()=>{const p=w.FromHexString(Et.background);Dt(p,Et.name),Ct(!1)}),Et.pointerDownAnimation=()=>{},Et.pointerUpAnimation=()=>{},Et.pointerEnterAnimation=()=>{},Et.pointerOutAnimation=()=>{},me.addControl(Et,1,0);const Te=new ft;Te.name="Swatch Outline",Te.width=.67,Te.thickness=2,Te.color=Ft,Te.isHitTestVisible=!1,At.addControl(Te,2,0);const ze=new U;ze.name="Current Color Label",ze.text="current",ze.color=f,ze.fontSize=ei,At.addControl(ze,3,0);const Qt=new vt;Qt.name="Button Grid",Qt.height=.8;const ii=1/3;Qt.addRowDefinition(ii,!1),Qt.addRowDefinition(ii,!1),Qt.addRowDefinition(ii,!1),ge.addControl(Qt,0,1);const pe=Math.floor(parseInt(e.pickerWidth)*$e[1]*ti[1]*.67).toString()+"px",Ce=Math.floor(parseInt(e.pickerHeight)*qe[1]*Je[0]*(parseFloat(Qt.height.toString())/100)*ii*.7).toString()+"px";parseFloat(pe)>parseFloat(Ce)?ct=Math.floor(parseFloat(Ce)*.45):ct=Math.floor(parseFloat(pe)*.11);const mt=zt.CreateSimpleButton("butOK","OK");mt.width=pe,mt.height=Ce,mt.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,mt.thickness=2,mt.color=f,mt.fontSize=ct,mt.background=g,mt.onPointerEnterObservable.add(()=>{mt.background=y}),mt.onPointerOutObservable.add(()=>{mt.background=g}),mt.pointerDownAnimation=()=>{mt.background=V},mt.pointerUpAnimation=()=>{mt.background=y},mt.onPointerClickObservable.add(()=>{Ct(!1),fi(Yt.background)}),Qt.addControl(mt,0,0);const pt=zt.CreateSimpleButton("butCancel","Cancel");pt.width=pe,pt.height=Ce,pt.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,pt.thickness=2,pt.color=f,pt.fontSize=ct,pt.background=g,pt.onPointerEnterObservable.add(()=>{pt.background=y}),pt.onPointerOutObservable.add(()=>{pt.background=g}),pt.pointerDownAnimation=()=>{pt.background=V},pt.pointerUpAnimation=()=>{pt.background=y},pt.onPointerClickObservable.add(()=>{Ct(!1),fi(Et.background)}),Qt.addControl(pt,1,0),e.savedColors&&(Z=zt.CreateSimpleButton("butSave","Save"),Z.width=pe,Z.height=Ce,Z.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,Z.thickness=2,Z.fontSize=ct,e.savedColors.length<e.swatchLimit?(Z.color=f,Z.background=g):ui(Z,!0),Z.onPointerEnterObservable.add(()=>{e.savedColors&&e.savedColors.length<e.swatchLimit&&(Z.background=y)}),Z.onPointerOutObservable.add(()=>{e.savedColors&&e.savedColors.length<e.swatchLimit&&(Z.background=g)}),Z.pointerDownAnimation=()=>{e.savedColors&&e.savedColors.length<e.swatchLimit&&(Z.background=V)},Z.pointerUpAnimation=()=>{e.savedColors&&e.savedColors.length<e.swatchLimit&&(Z.background=y)},Z.onPointerClickObservable.add(()=>{e.savedColors&&(e.savedColors.length==0&&di(!0),e.savedColors.length<e.swatchLimit&&ci(Yt.background,Z),Ct(!1))}),e.savedColors.length>0&&di(!0),Qt.addControl(Z,2,0));const se=new vt;se.name="Dialog Lower Right",se.addRowDefinition(.02,!1),se.addRowDefinition(.63,!1),se.addRowDefinition(.21,!1),se.addRowDefinition(.14,!1),fe.addControl(se,1,0);const Re=w.FromHexString(e.lastColor),bt=new vt;bt.name="RGB Values",bt.width=.82,bt.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,bt.addRowDefinition(1/3,!1),bt.addRowDefinition(1/3,!1),bt.addRowDefinition(1/3,!1),bt.addColumnDefinition(.1,!1),bt.addColumnDefinition(.2,!1),bt.addColumnDefinition(.7,!1),se.addControl(bt,1,0);for(let p=0;p<Fi.length;p++){const C=new U;C.text=Fi[p],C.color=f,C.fontSize=ct,bt.addControl(C,p,0)}const ot=new Y;ot.width=.83,ot.height=.72,ot.name="rIntField",ot.fontSize=ct,ot.text=(Re.r*255).toString(),ot.color=ce,ot.background=he,ot.onFocusObservable.add(()=>{R=ot.name,It=ot.text,Ct(!1)}),ot.onBlurObservable.add(()=>{ot.text==""&&(ot.text="0"),Se(ot,"r"),R==ot.name&&(R="")}),ot.onTextChangedObservable.add(()=>{R==ot.name&&Se(ot,"r")}),bt.addControl(ot,0,1);const rt=new Y;rt.width=.83,rt.height=.72,rt.name="gIntField",rt.fontSize=ct,rt.text=(Re.g*255).toString(),rt.color=ce,rt.background=he,rt.onFocusObservable.add(()=>{R=rt.name,It=rt.text,Ct(!1)}),rt.onBlurObservable.add(()=>{rt.text==""&&(rt.text="0"),Se(rt,"g"),R==rt.name&&(R="")}),rt.onTextChangedObservable.add(()=>{R==rt.name&&Se(rt,"g")}),bt.addControl(rt,1,1);const at=new Y;at.width=.83,at.height=.72,at.name="bIntField",at.fontSize=ct,at.text=(Re.b*255).toString(),at.color=ce,at.background=he,at.onFocusObservable.add(()=>{R=at.name,It=at.text,Ct(!1)}),at.onBlurObservable.add(()=>{at.text==""&&(at.text="0"),Se(at,"b"),R==at.name&&(R="")}),at.onTextChangedObservable.add(()=>{R==at.name&&Se(at,"b")}),bt.addControl(at,2,1);const q=new Y;q.width=.95,q.height=.72,q.name="rDecField",q.fontSize=ct,q.text=Re.r.toString(),q.color=ce,q.background=he,q.onFocusObservable.add(()=>{R=q.name,It=q.text,Ct(!1)}),q.onBlurObservable.add(()=>{(parseFloat(q.text)==0||q.text=="")&&(q.text="0",we(q,"r")),R==q.name&&(R="")}),q.onTextChangedObservable.add(()=>{R==q.name&&we(q,"r")}),bt.addControl(q,0,2);const $=new Y;$.width=.95,$.height=.72,$.name="gDecField",$.fontSize=ct,$.text=Re.g.toString(),$.color=ce,$.background=he,$.onFocusObservable.add(()=>{R=$.name,It=$.text,Ct(!1)}),$.onBlurObservable.add(()=>{(parseFloat($.text)==0||$.text=="")&&($.text="0",we($,"g")),R==$.name&&(R="")}),$.onTextChangedObservable.add(()=>{R==$.name&&we($,"g")}),bt.addControl($,1,2);const J=new Y;J.width=.95,J.height=.72,J.name="bDecField",J.fontSize=ct,J.text=Re.b.toString(),J.color=ce,J.background=he,J.onFocusObservable.add(()=>{R=J.name,It=J.text,Ct(!1)}),J.onBlurObservable.add(()=>{(parseFloat(J.text)==0||J.text=="")&&(J.text="0",we(J,"b")),R==J.name&&(R="")}),J.onTextChangedObservable.add(()=>{R==J.name&&we(J,"b")}),bt.addControl(J,2,2);const oe=new vt;oe.name="Hex Value",oe.width=.82,oe.addRowDefinition(1,!1),oe.addColumnDefinition(.1,!1),oe.addColumnDefinition(.9,!1),se.addControl(oe,2,0);const si=new U;si.text="#",si.color=f,si.fontSize=ct,oe.addControl(si,0,0);const D=new Y;D.width=.96,D.height=.72,D.name="hexField",D.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,D.fontSize=ct;const ns=e.lastColor.split("#");D.text=ns[1],D.color=ce,D.background=he,D.onFocusObservable.add(()=>{R=D.name,It=D.text,Ct(!1)}),D.onBlurObservable.add(()=>{if(D.text.length==3){const p=D.text.split("");D.text=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]}D.text==""&&(D.text="000000",Dt(w.FromHexString(D.text),"b")),R==D.name&&(R="")}),D.onTextChangedObservable.add(()=>{let p=D.text;const C=/[^0-9A-F]/i.test(p);if((D.text.length>6||C)&&R==D.name)D.text=It;else{if(D.text.length<6){const b=6-D.text.length;for(let Bt=0;Bt<b;Bt++)p="0"+p}if(D.text.length==3){const b=D.text.split("");p=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]}p="#"+p,R==D.name&&(It=D.text,Dt(w.FromHexString(p),D.name))}}),oe.addControl(D,0,1),e.savedColors&&e.savedColors.length>0&&ci("",Z);function Dt(p,C){R=C;const b=p.toHexString();if(Yt.background=b,ot.name!=R&&(ot.text=Math.floor(p.r*255).toString()),rt.name!=R&&(rt.text=Math.floor(p.g*255).toString()),at.name!=R&&(at.text=Math.floor(p.b*255).toString()),q.name!=R&&(q.text=p.r.toString()),$.name!=R&&($.text=p.g.toString()),J.name!=R&&(J.text=p.b.toString()),D.name!=R){const Bt=b.split("#");D.text=Bt[1]}Pt.name!=R&&(Pt.value=p)}function Se(p,C){let b=p.text;if(/[^0-9]/g.test(b)){p.text=It;return}else b!=""&&(Math.floor(parseInt(b))<0?b="0":Math.floor(parseInt(b))>255?b="255":isNaN(parseInt(b))&&(b="0")),R==p.name&&(It=b);if(b!=""){b=parseInt(b).toString(),p.text=b;const tt=w.FromHexString(Yt.background);R==p.name&&(C=="r"?Dt(new w(parseInt(b)/255,tt.g,tt.b),p.name):C=="g"?Dt(new w(tt.r,parseInt(b)/255,tt.b),p.name):Dt(new w(tt.r,tt.g,parseInt(b)/255),p.name))}}function we(p,C){let b=p.text;if(/[^0-9.]/g.test(b)){p.text=It;return}else b!=""&&b!="."&&parseFloat(b)!=0&&(parseFloat(b)<0?b="0.0":parseFloat(b)>1?b="1.0":isNaN(parseFloat(b))&&(b="0.0")),R==p.name&&(It=b);b!=""&&b!="."&&parseFloat(b)!=0?(b=parseFloat(b).toString(),p.text=b):b="0.0";const tt=w.FromHexString(Yt.background);R==p.name&&(C=="r"?Dt(new w(parseFloat(b),tt.g,tt.b),p.name):C=="g"?Dt(new w(tt.r,parseFloat(b),tt.b),p.name):Dt(new w(tt.r,tt.g,parseFloat(b)),p.name))}function _s(p){e.savedColors&&e.savedColors.splice(p,1),e.savedColors&&e.savedColors.length==0&&(di(!1),te=!1)}function ls(){if(e.savedColors&&e.savedColors[de]){let p;te?p="b":p="";const C=zt.CreateSimpleButton("Swatch_"+de,p);C.fontFamily="coreglyphs";const b=w.FromHexString(e.savedColors[de]);b.r+b.g+b.b>Nt?C.color=Ae:C.color=Ze,C.fontSize=Math.floor(l*.7),C.textBlock.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,C.height=C.width=l.toString()+"px",C.background=e.savedColors[de],C.thickness=2;const tt=de;return C.pointerDownAnimation=()=>{C.thickness=4},C.pointerUpAnimation=()=>{C.thickness=3},C.pointerEnterAnimation=()=>{C.thickness=3},C.pointerOutAnimation=()=>{C.thickness=2},C.onPointerClickObservable.add(()=>{te?(_s(tt),ci("",Z)):e.savedColors&&Dt(w.FromHexString(e.savedColors[tt]),C.name)}),C}else return null}function Ct(p){p!==void 0&&(te=p);let C;if(te){for(let b=0;b<j.children.length;b++)C=j.children[b],C.textBlock.text="b";W!==void 0&&(W.textBlock.text="Done")}else{for(let b=0;b<j.children.length;b++)C=j.children[b],C.textBlock.text="";W!==void 0&&(W.textBlock.text="Edit")}}function ci(p,C){if(e.savedColors){p!=""&&e.savedColors.push(p),de=0,j.clearControls();const b=Math.ceil(e.savedColors.length/e.numSwatchesPerLine);let Bt;if(b==0?Bt=0:Bt=b+1,j.rowCount!=b+Bt){const tt=j.rowCount;for(let Vt=0;Vt<tt;Vt++)j.removeRowDefinition(0);for(let Vt=0;Vt<b+Bt;Vt++)Vt%2?j.addRowDefinition(l,!0):j.addRowDefinition(r,!0)}j.height=(l*b+Bt*r).toString()+"px";for(let tt=1,Vt=1;tt<b+Bt;tt+=2,Vt++){let gi;e.savedColors.length>Vt*e.numSwatchesPerLine?gi=e.numSwatchesPerLine:gi=e.savedColors.length-(Vt-1)*e.numSwatchesPerLine;const hs=Math.min(Math.max(gi,0),e.numSwatchesPerLine);for(let mi=0,Di=1;mi<hs;mi++){if(mi>e.numSwatchesPerLine)continue;const Li=ls();if(Li!=null)j.addControl(Li,tt,Di),Di+=2,de++;else continue}}e.savedColors.length>=e.swatchLimit?ui(C,!0):ui(C,!1)}}function di(p){p?(W=zt.CreateSimpleButton("butEdit","Edit"),W.width=pe,W.height=Ce,W.left=Math.floor(parseInt(pe)*.1).toString()+"px",W.top=(parseFloat(W.left)*-1).toString()+"px",W.verticalAlignment=u.VERTICAL_ALIGNMENT_BOTTOM,W.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,W.thickness=2,W.color=f,W.fontSize=ct,W.background=g,W.onPointerEnterObservable.add(()=>{W.background=y}),W.onPointerOutObservable.add(()=>{W.background=g}),W.pointerDownAnimation=()=>{W.background=V},W.pointerUpAnimation=()=>{W.background=y},W.onPointerClickObservable.add(()=>{te?te=!1:te=!0,Ct()}),ue.addControl(W,1,0)):ue.removeControl(W)}function ui(p,C){C?(p.color=yt,p.background=le):(p.color=f,p.background=g)}function fi(p){e.savedColors&&e.savedColors.length>0?i({savedColors:e.savedColors,pickedColor:p}):i({pickedColor:p}),t.removeControl(Mt)}})}}xt._Epsilon=1e-6;n([_()],xt.prototype,"value",null);n([_()],xt.prototype,"width",null);n([_()],xt.prototype,"height",null);n([_()],xt.prototype,"size",null);N("BABYLON.GUI.ColorPicker",xt);class $i extends ut{get thickness(){return this._thickness}set thickness(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())}constructor(t){super(t),this.name=t,this._thickness=1}_getTypeName(){return"Ellipse"}_localDraw(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),u.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),(this._backgroundGradient||this._background)&&(t.fillStyle=this._getBackgroundColor(t),t.fill()),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._thickness&&(this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.stroke()),t.restore()}_additionalProcessing(t,e){super._additionalProcessing(t,e),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness}_clipForChildren(t){u.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2,this._currentMeasure.height/2,t),t.clip()}_renderHighlightSpecific(t){u.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._highlightLineWidth/2,this._currentMeasure.height/2-this._highlightLineWidth/2,t),t.stroke()}}n([_()],$i.prototype,"thickness",null);N("BABYLON.GUI.Ellipse",$i);class Ds extends zt{constructor(t){super(t),this.name=t,this.focusedColor=null,this._isFocused=!1,this._unfocusedColor=null,this.onFocusObservable=new B,this.onBlurObservable=new B,this.onKeyboardEventProcessedObservable=new B,this._unfocusedColor=this.color}onBlur(){this._isFocused&&(this._isFocused=!1,this.focusedColor&&this._unfocusedColor!=null&&(this.color=this._unfocusedColor),this.onBlurObservable.notifyObservers(this))}onFocus(){this._isFocused=!0,this.focusedColor&&(this._unfocusedColor=this.color,this.color=this.focusedColor),this.onFocusObservable.notifyObservers(this)}keepsFocusWith(){return null}focus(){this._host.moveFocusToControl(this)}blur(){this._host.focusedControl=null}processKeyboard(t){this.onKeyboardEventProcessedObservable.notifyObservers(t,-1,this)}_onPointerDown(t,e,i,s,o){return this.isReadOnly||this.focus(),super._onPointerDown(t,e,i,s,o)}displose(){super.dispose(),this.onBlurObservable.clear(),this.onFocusObservable.clear(),this.onKeyboardEventProcessedObservable.clear()}}N("BABYLON.GUI.FocusableButton",Ds);class Le extends Y{get outlineWidth(){return this._outlineWidth}set outlineWidth(t){this._outlineWidth!==t&&(this._outlineWidth=t,this._markAsDirty())}get outlineColor(){return this._outlineColor}set outlineColor(t){this._outlineColor!==t&&(this._outlineColor=t,this._markAsDirty())}get autoStretchHeight(){return this._autoStretchHeight}set autoStretchHeight(t){this._autoStretchHeight!==t&&(this._autoStretchHeight=t,this._markAsDirty())}set height(t){this._fixedRatioMasterIsWidth=!1,this._height.toString(this._host)!==t&&(this._height.fromString(t)&&this._markAsDirty(),this._autoStretchHeight=!1)}get maxHeight(){return this._maxHeight.toString(this._host)}get maxHeightInPixels(){return this._maxHeight.getValueInPixel(this._host,this._cachedParentMeasure.height)}set maxHeight(t){this._maxHeight.toString(this._host)!==t&&this._maxHeight.fromString(t)&&this._markAsDirty()}constructor(t,e=""){super(t),this.name=t,this._textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._textVerticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._lineSpacing=new I(0),this._outlineWidth=0,this._outlineColor="white",this._maxHeight=new I(1,I.UNITMODE_PERCENTAGE,!1),this.onLinesReadyObservable=new B,this.text=e,this.isPointerBlocker=!0,this.onLinesReadyObservable.add(()=>this._updateCursorPosition()),this._highlightCursorInfo={initialStartIndex:-1,initialRelativeStartIndex:-1,initialLineIndex:-1},this._cursorInfo={globalStartIndex:0,globalEndIndex:0,relativeEndIndex:0,relativeStartIndex:0,currentLineIndex:0}}_getTypeName(){return"InputTextArea"}processKeyboard(t){this.alternativeProcessKey(t.code,t.key,t),this.onKeyboardEventProcessedObservable.notifyObservers(t)}alternativeProcessKey(t,e,i){if(!(i&&(i.ctrlKey||i.metaKey)&&(t==="KeyC"||t==="KeyV"||t==="KeyX"))){switch(t){case"KeyA":if(i&&(i.ctrlKey||i.metaKey)){this._selectAllText(),i.preventDefault();return}break;case"Period":i&&i.shiftKey&&i.preventDefault();break;case"Backspace":!this._isTextHighlightOn&&this._cursorInfo.globalStartIndex>0&&(this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._cursorInfo.globalStartIndex--),this._textWrapper.removePart(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex),this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,i&&i.preventDefault(),this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._textHasChanged();break;case"Delete":!this._isTextHighlightOn&&this._cursorInfo.globalEndIndex<this.text.length&&(this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex+1),this._textWrapper.removePart(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex),this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,i&&i.preventDefault(),this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._textHasChanged();break;case"Enter":this._textWrapper.removePart(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex,`
`),this._cursorInfo.globalStartIndex++,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._textHasChanged();return;case"End":this._cursorInfo.globalStartIndex=this.text.length,this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._markAsDirty();return;case"Home":this._cursorInfo.globalStartIndex=0,this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._markAsDirty();return;case"ArrowLeft":if(this._markAsDirty(),i&&i.shiftKey){(i.ctrlKey||i.metaKey)&&(this._cursorInfo.globalStartIndex-=this._cursorInfo.relativeStartIndex,this._cursorInfo.globalEndIndex=this._highlightCursorInfo.initialStartIndex),this._isTextHighlightOn?this._cursorInfo.globalEndIndex>this._highlightCursorInfo.initialStartIndex?this._cursorInfo.globalEndIndex--:this._cursorInfo.globalStartIndex--:(this._highlightCursorInfo.initialLineIndex=this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialStartIndex=this._cursorInfo.globalStartIndex,this._highlightCursorInfo.initialRelativeStartIndex=this._cursorInfo.relativeStartIndex,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._cursorInfo.globalStartIndex--,this._isTextHighlightOn=!0),this._blinkIsEven=!0,i.preventDefault();return}this._isTextHighlightOn?this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex:i&&(i.ctrlKey||i.metaKey)?(this._cursorInfo.globalStartIndex-=this._cursorInfo.relativeStartIndex,i.preventDefault()):this._cursorInfo.globalStartIndex>0&&this._cursorInfo.globalStartIndex--,this._blinkIsEven=!1,this._isTextHighlightOn=!1;return;case"ArrowRight":if(this._markAsDirty(),i&&i.shiftKey){if(i.ctrlKey||i.metaKey){const s=this._lines[this._cursorInfo.currentLineIndex].text.length-this._cursorInfo.relativeEndIndex-1;this._cursorInfo.globalEndIndex+=s,this._cursorInfo.globalStartIndex=this._highlightCursorInfo.initialStartIndex}this._isTextHighlightOn?this._cursorInfo.globalStartIndex<this._highlightCursorInfo.initialStartIndex?this._cursorInfo.globalStartIndex++:this._cursorInfo.globalEndIndex++:(this._highlightCursorInfo.initialLineIndex=this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialStartIndex=this._cursorInfo.globalStartIndex,this._highlightCursorInfo.initialRelativeStartIndex=this._cursorInfo.relativeStartIndex,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex++,this._isTextHighlightOn=!0),this._blinkIsEven=!0,i.preventDefault();return}if(this._isTextHighlightOn)this._cursorInfo.globalStartIndex=this._cursorInfo.globalEndIndex;else if(i&&(i.ctrlKey||i.metaKey)){const s=this._lines[this._cursorInfo.currentLineIndex].text.length-this._cursorInfo.relativeEndIndex;this._cursorInfo.globalStartIndex+=s}else this._cursorInfo.globalStartIndex<this.text.length&&this._cursorInfo.globalStartIndex++;this._blinkIsEven=!1,this._isTextHighlightOn=!1;return;case"ArrowUp":if(this._blinkIsEven=!1,i&&(i.shiftKey?(this._isTextHighlightOn||(this._highlightCursorInfo.initialLineIndex=this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialStartIndex=this._cursorInfo.globalStartIndex,this._highlightCursorInfo.initialRelativeStartIndex=this._cursorInfo.relativeStartIndex),this._isTextHighlightOn=!0,this._blinkIsEven=!0):this._isTextHighlightOn=!1,i.preventDefault()),this._cursorInfo.currentLineIndex===0)this._cursorInfo.globalStartIndex=0;else{const s=this._lines[this._cursorInfo.currentLineIndex],o=this._lines[this._cursorInfo.currentLineIndex-1];let r=0,a=0;!this._isTextHighlightOn||this._cursorInfo.currentLineIndex<this._highlightCursorInfo.initialLineIndex?(r=this._cursorInfo.globalStartIndex,a=this._cursorInfo.relativeStartIndex):(r=this._cursorInfo.globalEndIndex,a=this._cursorInfo.relativeEndIndex);const l=s.text.substr(0,a),h=this._contextForBreakLines.measureText(l).width;let d=0,f=0;r-=a,r-=o.text.length+o.lineEnding.length;let g=0;for(;d<h&&g<o.text.length;)r++,g++,f=Math.abs(h-d),d=this._contextForBreakLines.measureText(o.text.substr(0,g)).width;Math.abs(h-d)>f&&g>0&&r--,this._isTextHighlightOn?this._cursorInfo.currentLineIndex<=this._highlightCursorInfo.initialLineIndex?(this._cursorInfo.globalStartIndex=r,this._cursorInfo.globalEndIndex=this._highlightCursorInfo.initialStartIndex,this._cursorInfo.relativeEndIndex=this._highlightCursorInfo.initialRelativeStartIndex):this._cursorInfo.globalEndIndex=r:this._cursorInfo.globalStartIndex=r}this._markAsDirty();return;case"ArrowDown":if(this._blinkIsEven=!1,i&&(i.shiftKey?(this._isTextHighlightOn||(this._highlightCursorInfo.initialLineIndex=this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialStartIndex=this._cursorInfo.globalStartIndex,this._highlightCursorInfo.initialRelativeStartIndex=this._cursorInfo.relativeStartIndex),this._isTextHighlightOn=!0,this._blinkIsEven=!0):this._isTextHighlightOn=!1,i.preventDefault()),this._cursorInfo.currentLineIndex===this._lines.length-1)this._cursorInfo.globalStartIndex=this.text.length;else{const s=this._lines[this._cursorInfo.currentLineIndex],o=this._lines[this._cursorInfo.currentLineIndex+1];let r=0,a=0;!this._isTextHighlightOn||this._cursorInfo.currentLineIndex<this._highlightCursorInfo.initialLineIndex?(r=this._cursorInfo.globalStartIndex,a=this._cursorInfo.relativeStartIndex):(r=this._cursorInfo.globalEndIndex,a=this._cursorInfo.relativeEndIndex);const l=s.text.substr(0,a),h=this._contextForBreakLines.measureText(l).width;let d=0,f=0;r+=s.text.length-a+s.lineEnding.length;let g=0;for(;d<h&&g<o.text.length;)r++,g++,f=Math.abs(h-d),d=this._contextForBreakLines.measureText(o.text.substr(0,g)).width;Math.abs(h-d)>f&&g>0&&r--,this._isTextHighlightOn?this._cursorInfo.currentLineIndex<this._highlightCursorInfo.initialLineIndex?(this._cursorInfo.globalStartIndex=r,this._cursorInfo.globalStartIndex>this._cursorInfo.globalEndIndex&&(this._cursorInfo.globalEndIndex+=this._cursorInfo.globalStartIndex,this._cursorInfo.globalStartIndex=this._cursorInfo.globalEndIndex-this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex-=this._cursorInfo.globalStartIndex)):(this._cursorInfo.globalEndIndex=r,this._cursorInfo.globalStartIndex=this._highlightCursorInfo.initialStartIndex):this._cursorInfo.globalStartIndex=r}this._markAsDirty();return}(e==null?void 0:e.length)===1&&(i==null||i.preventDefault(),this._currentKey=e,this.onBeforeKeyAddObservable.notifyObservers(this),e=this._currentKey,this._addKey&&(this._isTextHighlightOn=!1,this._blinkIsEven=!1,this._textWrapper.removePart(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex,e),this._cursorInfo.globalStartIndex+=e.length,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._textHasChanged()))}}_parseLineWordWrap(t="",e,i){const s=[],o=t.split(" ");let r=0;for(let a=0;a<o.length;a++){const l=a>0?t+" "+o[a]:o[0],d=i.measureText(l).width;if(d>e){a>0&&(r=i.measureText(t).width,s.push({text:t,width:r,lineEnding:" "})),t=o[a];let f="";t.split("").map(g=>{i.measureText(f+g).width>e&&(s.push({text:f,width:i.measureText(f).width,lineEnding:`
`}),f=""),f+=g}),t=f,r=i.measureText(t).width}else r=d,t=l}return s.push({text:t,width:r,lineEnding:" "}),s}_breakLines(t,e){const i=[],s=this.text.split(`
`);if(this.clipContent)for(const o of s)i.push(...this._parseLineWordWrap(o,t,e));else for(const o of s)i.push(this._parseLine(o,e));return i[i.length-1].lineEnding=`
`,i}_parseLine(t="",e){return{text:t,width:e.measureText(t).width,lineEnding:" "}}_preMeasure(t,e){(!this._fontOffset||this._wasDirty)&&(this._fontOffset=u._GetFontOffset(e.font));let i=this._beforeRenderText(this._textWrapper).text;!this._isFocused&&!this.text&&this._placeholderText&&(i=this._placeholderText,this._placeholderColor&&(e.fillStyle=this._placeholderColor)),this._textWidth=e.measureText(i).width;const s=this._margin.getValueInPixel(this._host,t.width)*2;if(this._autoStretchWidth){const r=i.split(`
`).reduce((l,h)=>{const d=e.measureText(h).width,f=e.measureText(l).width;return d>f?h:l},""),a=e.measureText(r).width;this.width=Math.min(this._maxWidth.getValueInPixel(this._host,t.width),a+s)+"px",this.autoStretchWidth=!0}if(this._availableWidth=this._width.getValueInPixel(this._host,t.width)-s,this._lines=this._breakLines(this._availableWidth,e),this._contextForBreakLines=e,this._autoStretchHeight){const r=this._lines.length*this._fontOffset.height+this._margin.getValueInPixel(this._host,t.height)*2;this.height=Math.min(this._maxHeight.getValueInPixel(this._host,t.height),r)+"px",this._autoStretchHeight=!0}if(this._availableHeight=this._height.getValueInPixel(this._host,t.height)-s,this._isFocused){this._cursorInfo.currentLineIndex=0;let o=this._lines[this._cursorInfo.currentLineIndex].text.length+this._lines[this._cursorInfo.currentLineIndex].lineEnding.length,r=0;for(;r+o<=this._cursorInfo.globalStartIndex;)r+=o,this._cursorInfo.currentLineIndex<this._lines.length-1&&(this._cursorInfo.currentLineIndex++,o=this._lines[this._cursorInfo.currentLineIndex].text.length+this._lines[this._cursorInfo.currentLineIndex].lineEnding.length)}}_computeScroll(){if(this._clipTextLeft=this._currentMeasure.left+this._margin.getValueInPixel(this._host,this._cachedParentMeasure.width),this._clipTextTop=this._currentMeasure.top+this._margin.getValueInPixel(this._host,this._cachedParentMeasure.height),this._isFocused&&this._lines[this._cursorInfo.currentLineIndex].width>this._availableWidth){const t=this._clipTextLeft-this._lines[this._cursorInfo.currentLineIndex].width+this._availableWidth;this._scrollLeft||(this._scrollLeft=t)}else this._scrollLeft=this._clipTextLeft;if(this._isFocused&&!this._autoStretchHeight){const t=(this._cursorInfo.currentLineIndex+1)*this._fontOffset.height,e=this._clipTextTop-t;this._scrollTop||(this._scrollTop=e)}else this._scrollTop=this._clipTextTop}_additionalProcessing(){this.highlightedText="",this.onLinesReadyObservable.notifyObservers(this)}_drawText(t,e,i,s){const o=this._currentMeasure.width;let r=this._scrollLeft;switch(this._textHorizontalAlignment){case u.HORIZONTAL_ALIGNMENT_LEFT:r+=0;break;case u.HORIZONTAL_ALIGNMENT_RIGHT:r+=o-e;break;case u.HORIZONTAL_ALIGNMENT_CENTER:r+=(o-e)/2;break}(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(s.shadowColor=this.shadowColor,s.shadowBlur=this.shadowBlur,s.shadowOffsetX=this.shadowOffsetX,s.shadowOffsetY=this.shadowOffsetY),this.outlineWidth&&s.strokeText(t,this._currentMeasure.left+r,i),s.fillText(t,r,i)}_onCopyText(t){this._isTextHighlightOn=!1;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch{}this._host.clipboardData=this._highlightedText}_onCutText(t){if(this._highlightedText){try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch{}this._host.clipboardData=this._highlightedText,this._textWrapper.removePart(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex),this._textHasChanged()}}_onPasteText(t){let e="";t.clipboardData&&t.clipboardData.types.indexOf("text/plain")!==-1?e=t.clipboardData.getData("text/plain"):e=this._host.clipboardData,this._isTextHighlightOn=!1,this._textWrapper.removePart(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex,e);const i=e.length-(this._cursorInfo.globalEndIndex-this._cursorInfo.globalStartIndex);this._cursorInfo.globalStartIndex+=i,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._textHasChanged()}_draw(t){var e,i;this._computeScroll(),this._scrollLeft=(e=this._scrollLeft)!==null&&e!==void 0?e:0,this._scrollTop=(i=this._scrollTop)!==null&&i!==void 0?i:0,t.save(),this._applyStates(t),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isFocused?this._focusedBackground&&(t.fillStyle=this._isEnabled?this._focusedBackground:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)):this._background&&(t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this.color&&(t.fillStyle=this.color);const s=this._currentMeasure.height,o=this._currentMeasure.width;let r=0;switch(this._textVerticalAlignment){case u.VERTICAL_ALIGNMENT_TOP:r=this._fontOffset.ascent;break;case u.VERTICAL_ALIGNMENT_BOTTOM:r=s-this._fontOffset.height*(this._lines.length-1)-this._fontOffset.descent;break;case u.VERTICAL_ALIGNMENT_CENTER:r=this._fontOffset.ascent+(s-this._fontOffset.height*this._lines.length)/2;break}t.save(),t.beginPath(),t.fillStyle=this.fontStyle,t.rect(this._clipTextLeft,this._clipTextTop,this._availableWidth+2,this._availableHeight+2),t.clip(),r+=this._scrollTop;for(let a=0;a<this._lines.length;a++){const l=this._lines[a];a!==0&&this._lineSpacing.internalValue!==0&&(this._lineSpacing.isPixel?r+=this._lineSpacing.getValue(this._host):r=r+this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)),this._drawText(l.text,l.width,r,t),r+=this._fontOffset.height}if(t.restore(),this._isFocused){if(!this._blinkIsEven||this._isTextHighlightOn){let a=this._scrollLeft+t.measureText(this._lines[this._cursorInfo.currentLineIndex].text.substr(0,this._cursorInfo.relativeStartIndex)).width;a<this._clipTextLeft?(this._scrollLeft+=this._clipTextLeft-a,a=this._clipTextLeft,this._markAsDirty()):a>this._clipTextLeft+this._availableWidth&&(this._scrollLeft+=this._clipTextLeft+this._availableWidth-a,a=this._clipTextLeft+this._availableWidth,this._markAsDirty());let l=this._scrollTop+this._cursorInfo.currentLineIndex*this._fontOffset.height;l<this._clipTextTop?(this._scrollTop+=this._clipTextTop-l,l=this._clipTextTop,this._markAsDirty()):l+this._fontOffset.height>this._clipTextTop+this._availableHeight&&(this._scrollTop+=this._clipTextTop+this._availableHeight-l-this._fontOffset.height,l=this._clipTextTop+this._availableHeight-this._fontOffset.height,this._markAsDirty()),this._isTextHighlightOn||t.fillRect(a,l,2,this._fontOffset.height)}if(this._resetBlinking(),this._isTextHighlightOn){clearTimeout(this._blinkTimeout),this._highlightedText=this.text.substring(this._cursorInfo.globalStartIndex,this._cursorInfo.globalEndIndex),t.globalAlpha=this._highligherOpacity,t.fillStyle=this._textHighlightColor;const a=Math.min(this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialLineIndex),l=Math.max(this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialLineIndex);let h=this._scrollTop+a*this._fontOffset.height;for(let d=a;d<=l;d++){const f=this._lines[d];let g=this._scrollLeft;switch(this._textHorizontalAlignment){case u.HORIZONTAL_ALIGNMENT_LEFT:g+=0;break;case u.HORIZONTAL_ALIGNMENT_RIGHT:g+=o-f.width;break;case u.HORIZONTAL_ALIGNMENT_CENTER:g+=(o-f.width)/2;break}const y=d===a?this._cursorInfo.relativeStartIndex:0,V=d===l?this._cursorInfo.relativeEndIndex:f.text.length,yt=t.measureText(f.text.substr(0,y)).width,le=f.text.substring(y,V),Ft=t.measureText(le).width;t.fillRect(g+yt,h,Ft,this._fontOffset.height),h+=this._fontOffset.height}this._cursorInfo.globalEndIndex===this._cursorInfo.globalStartIndex&&this._resetBlinking()}}t.restore(),this._thickness&&(this._isFocused?this.focusedColor&&(t.strokeStyle=this.focusedColor):this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness))}_resetBlinking(){clearTimeout(this._blinkTimeout),this._blinkTimeout=setTimeout(()=>{this._blinkIsEven=!this._blinkIsEven,this._markAsDirty()},500)}_applyStates(t){super._applyStates(t),this.outlineWidth&&(t.lineWidth=this.outlineWidth,t.strokeStyle=this.outlineColor)}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?(this._clickedCoordinateX=e.x,this._clickedCoordinateY=e.y,this._isTextHighlightOn=!1,this._highlightedText="",this._isPointerDown=!0,this._host._capturingControl[i]=this,this._host.focusedControl===this?(clearTimeout(this._blinkTimeout),this._markAsDirty(),!0):this._isEnabled?(this._host.focusedControl=this,!0):!1):!1}_onPointerMove(t,e,i,s){s.event.movementX===0&&s.event.movementY===0||(this._host.focusedControl===this&&this._isPointerDown&&(this._clickedCoordinateX=e.x,this._clickedCoordinateY=e.y,this._isTextHighlightOn||(this._highlightCursorInfo.initialLineIndex=this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialStartIndex=this._cursorInfo.globalStartIndex,this._highlightCursorInfo.initialRelativeStartIndex=this._cursorInfo.relativeStartIndex,this._isTextHighlightOn=!0),this._markAsDirty()),super._onPointerMove(t,e,i,s))}_updateCursorPosition(){var t;if(this._isFocused)if(this._clickedCoordinateX&&this._clickedCoordinateY){this._isTextHighlightOn||(this._cursorInfo={globalStartIndex:0,globalEndIndex:0,relativeStartIndex:0,relativeEndIndex:0,currentLineIndex:0});let e=0,i=0;const s=this._clickedCoordinateY-this._scrollTop,o=Math.floor(s/this._fontOffset.height);this._cursorInfo.currentLineIndex=Math.min(Math.max(o,0),this._lines.length-1);let r=0;const a=this._clickedCoordinateX-((t=this._scrollLeft)!==null&&t!==void 0?t:0);let l=0;for(let h=0;h<this._cursorInfo.currentLineIndex;h++){const d=this._lines[h];e+=d.text.length+d.lineEnding.length}for(;r<a&&this._lines[this._cursorInfo.currentLineIndex].text.length>i;)i++,l=Math.abs(a-r),r=this._contextForBreakLines.measureText(this._lines[this._cursorInfo.currentLineIndex].text.substr(0,i)).width;Math.abs(a-r)>l&&i>0&&i--,e+=i,this._isTextHighlightOn?e<this._highlightCursorInfo.initialStartIndex?(this._cursorInfo.globalStartIndex=e,this._cursorInfo.relativeStartIndex=i,this._cursorInfo.globalEndIndex=this._highlightCursorInfo.initialStartIndex,this._cursorInfo.relativeEndIndex=this._highlightCursorInfo.initialRelativeStartIndex):(this._cursorInfo.globalStartIndex=this._highlightCursorInfo.initialStartIndex,this._cursorInfo.relativeStartIndex=this._highlightCursorInfo.initialRelativeStartIndex,this._cursorInfo.globalEndIndex=e,this._cursorInfo.relativeEndIndex=i):(this._cursorInfo.globalStartIndex=e,this._cursorInfo.relativeStartIndex=i,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex,this._cursorInfo.relativeEndIndex=this._cursorInfo.relativeStartIndex),this._blinkIsEven=this._isTextHighlightOn,this._clickedCoordinateX=null,this._clickedCoordinateY=null}else{this._cursorInfo.relativeStartIndex=0,this._cursorInfo.currentLineIndex=0;let e=this._lines[this._cursorInfo.currentLineIndex].text.length+this._lines[this._cursorInfo.currentLineIndex].lineEnding.length,i=0;for(;i+e<=this._cursorInfo.globalStartIndex;)i+=e,this._cursorInfo.currentLineIndex<this._lines.length-1&&(this._cursorInfo.currentLineIndex++,e=this._lines[this._cursorInfo.currentLineIndex].text.length+this._lines[this._cursorInfo.currentLineIndex].lineEnding.length);if(this._cursorInfo.relativeStartIndex=this._cursorInfo.globalStartIndex-i,this._highlightCursorInfo.initialStartIndex!==-1&&this._cursorInfo.globalStartIndex>=this._highlightCursorInfo.initialStartIndex){for(;i+e<=this._cursorInfo.globalEndIndex;)i+=e,this._cursorInfo.currentLineIndex<this._lines.length-1&&(this._cursorInfo.currentLineIndex++,e=this._lines[this._cursorInfo.currentLineIndex].text.length+this._lines[this._cursorInfo.currentLineIndex].lineEnding.length);this._cursorInfo.relativeEndIndex=this._cursorInfo.globalEndIndex-i}else this._isTextHighlightOn||(this._cursorInfo.relativeEndIndex=this._cursorInfo.relativeStartIndex,this._cursorInfo.globalEndIndex=this._cursorInfo.globalStartIndex)}}_updateValueFromCursorIndex(t){}_processDblClick(t){let e,i;do e=this._cursorInfo.globalStartIndex>0&&this._textWrapper.isWord(this._cursorInfo.globalStartIndex-1)?--this._cursorInfo.globalStartIndex:0,i=this._cursorInfo.globalEndIndex<this._textWrapper.length&&this._textWrapper.isWord(this._cursorInfo.globalEndIndex)?++this._cursorInfo.globalEndIndex:0;while(e||i);this._highlightCursorInfo.initialLineIndex=this._cursorInfo.currentLineIndex,this._highlightCursorInfo.initialStartIndex=this._cursorInfo.globalStartIndex,this.onTextHighlightObservable.notifyObservers(this),this._isTextHighlightOn=!0,this._blinkIsEven=!0,this._markAsDirty()}_selectAllText(){this._isTextHighlightOn=!0,this._blinkIsEven=!0,this._highlightCursorInfo={initialStartIndex:0,initialRelativeStartIndex:0,initialLineIndex:0},this._cursorInfo={globalStartIndex:0,globalEndIndex:this._textWrapper.length,relativeEndIndex:this._lines[this._lines.length-1].text.length,relativeStartIndex:0,currentLineIndex:this._lines.length-1},this._markAsDirty()}dipose(){super.dispose(),this.onLinesReadyObservable.clear()}}n([_()],Le.prototype,"autoStretchHeight",null);n([_()],Le.prototype,"maxHeight",null);N("BABYLON.GUI.InputTextArea",Le);class Ls extends Y{_getTypeName(){return"InputPassword"}_beforeRenderText(t){const e=new Pi;let i="";for(let s=0;s<t.length;s++)i+="•";return e.text=i,e}}N("BABYLON.GUI.InputPassword",Ls);class Pe extends u{get dash(){return this._dash}set dash(t){this._dash!==t&&(this._dash=t,this._markAsDirty())}get connectedControl(){return this._connectedControl}set connectedControl(t){this._connectedControl!==t&&(this._connectedControlDirtyObserver&&this._connectedControl&&(this._connectedControl.onDirtyObservable.remove(this._connectedControlDirtyObserver),this._connectedControlDirtyObserver=null),t&&(this._connectedControlDirtyObserver=t.onDirtyObservable.add(()=>this._markAsDirty())),this._connectedControl=t,this._markAsDirty())}get x1(){return this._x1.toString(this._host)}set x1(t){this._x1.toString(this._host)!==t&&this._x1.fromString(t)&&this._markAsDirty()}get y1(){return this._y1.toString(this._host)}set y1(t){this._y1.toString(this._host)!==t&&this._y1.fromString(t)&&this._markAsDirty()}get x2(){return this._x2.toString(this._host)}set x2(t){this._x2.toString(this._host)!==t&&this._x2.fromString(t)&&this._markAsDirty()}get y2(){return this._y2.toString(this._host)}set y2(t){this._y2.toString(this._host)!==t&&this._y2.fromString(t)&&this._markAsDirty()}get lineWidth(){return this._lineWidth}set lineWidth(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())}set horizontalAlignment(t){}set verticalAlignment(t){}get _effectiveX2(){return(this._connectedControl?this._connectedControl.centerX:0)+this._x2.getValue(this._host)}get _effectiveY2(){return(this._connectedControl?this._connectedControl.centerY:0)+this._y2.getValue(this._host)}constructor(t){super(t),this.name=t,this._lineWidth=1,this._x1=new I(0),this._y1=new I(0),this._x2=new I(0),this._y2=new I(0),this._dash=new Array,this._automaticSize=!0,this.isHitTestVisible=!1,this._horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._verticalAlignment=u.VERTICAL_ALIGNMENT_TOP}_getTypeName(){return"Line"}_draw(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._applyStates(t),t.strokeStyle=this._getColor(t),t.lineWidth=this._lineWidth,t.setLineDash(this._dash),t.beginPath(),t.moveTo(this._cachedParentMeasure.left+this._x1.getValue(this._host),this._cachedParentMeasure.top+this._y1.getValue(this._host)),t.lineTo(this._cachedParentMeasure.left+this._effectiveX2,this._cachedParentMeasure.top+this._effectiveY2),t.stroke(),t.restore()}_measure(){this._currentMeasure.width=Math.abs(this._x1.getValue(this._host)-this._effectiveX2)+this._lineWidth,this._currentMeasure.height=Math.abs(this._y1.getValue(this._host)-this._effectiveY2)+this._lineWidth}_computeAlignment(t){this._currentMeasure.left=t.left+Math.min(this._x1.getValue(this._host),this._effectiveX2)-this._lineWidth/2,this._currentMeasure.top=t.top+Math.min(this._y1.getValue(this._host),this._effectiveY2)-this._lineWidth/2}moveToVector3(t,e,i=!1){if(!this._host||this.parent!==this._host._rootContainer){it.Error("Cannot move a control to a vector3 if the control is not at root level");return}const s=this._host._getGlobalViewport(),o=c.Project(t,St.IdentityReadOnly,e.getTransformMatrix(),s);if(this._moveToProjectedPosition(o,i),o.z<0||o.z>1){this.notRenderable=!0;return}this.notRenderable=!1}_moveToProjectedPosition(t,e=!1){const i=t.x+this._linkOffsetX.getValue(this._host)+"px",s=t.y+this._linkOffsetY.getValue(this._host)+"px";e?(this.x2=i,this.y2=s,this._x2.ignoreAdaptiveScaling=!0,this._y2.ignoreAdaptiveScaling=!0):(this.x1=i,this.y1=s,this._x1.ignoreAdaptiveScaling=!0,this._y1.ignoreAdaptiveScaling=!0)}}n([_()],Pe.prototype,"dash",null);n([_()],Pe.prototype,"x1",null);n([_()],Pe.prototype,"y1",null);n([_()],Pe.prototype,"x2",null);n([_()],Pe.prototype,"y2",null);n([_()],Pe.prototype,"lineWidth",null);N("BABYLON.GUI.Line",Pe);class Qi{constructor(t){this._multiLine=t,this._x=new I(0),this._y=new I(0),this._point=new c(0,0,0)}get x(){return this._x.toString(this._multiLine._host)}set x(t){this._x.toString(this._multiLine._host)!==t&&this._x.fromString(t)&&this._multiLine._markAsDirty()}get y(){return this._y.toString(this._multiLine._host)}set y(t){this._y.toString(this._multiLine._host)!==t&&this._y.fromString(t)&&this._multiLine._markAsDirty()}get control(){return this._control}set control(t){this._control!==t&&(this._control&&this._controlObserver&&(this._control.onDirtyObservable.remove(this._controlObserver),this._controlObserver=null),this._control=t,this._control&&(this._controlObserver=this._control.onDirtyObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())}get mesh(){return this._mesh}set mesh(t){this._mesh!==t&&(this._mesh&&this._meshObserver&&this._mesh.getScene().onAfterCameraRenderObservable.remove(this._meshObserver),this._mesh=t,this._mesh&&(this._meshObserver=this._mesh.getScene().onAfterCameraRenderObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())}resetLinks(){this.control=null,this.mesh=null}translate(){return this._point=this._translatePoint(),this._point}_translatePoint(){if(this._mesh!=null)return this._multiLine._host.getProjectedPositionWithZ(this._mesh.getBoundingInfo().boundingSphere.center,this._mesh.getWorldMatrix());if(this._control!=null)return new c(this._control.centerX,this._control.centerY,1-dt);{const t=this._multiLine._host,e=this._x.getValueInPixel(t,Number(t._canvas.width)),i=this._y.getValueInPixel(t,Number(t._canvas.height));return new c(e,i,1-dt)}}dispose(){this.resetLinks()}}class Ji extends u{constructor(t){super(t),this.name=t,this._lineWidth=1,this.onPointUpdate=()=>{this._markAsDirty()},this._automaticSize=!0,this.isHitTestVisible=!1,this._horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._dash=[],this._points=[]}get dash(){return this._dash}set dash(t){this._dash!==t&&(this._dash=t,this._markAsDirty())}getAt(t){return this._points[t]||(this._points[t]=new Qi(this)),this._points[t]}add(...t){return t.map(e=>this.push(e))}push(t){const e=this.getAt(this._points.length);return t==null||(t instanceof Bi?e.mesh=t:t instanceof u?e.control=t:t.x!=null&&t.y!=null&&(e.x=t.x,e.y=t.y)),e}remove(t){let e;if(t instanceof Qi){if(e=this._points.indexOf(t),e===-1)return}else e=t;const i=this._points[e];i&&(i.dispose(),this._points.splice(e,1))}reset(){for(;this._points.length>0;)this.remove(this._points.length-1)}resetLinks(){this._points.forEach(t=>{t!=null&&t.resetLinks()})}get lineWidth(){return this._lineWidth}set lineWidth(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())}set horizontalAlignment(t){}set verticalAlignment(t){}_getTypeName(){return"MultiLine"}_draw(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._applyStates(t),t.strokeStyle=this.color,t.lineWidth=this._lineWidth,t.setLineDash(this._dash),t.beginPath();let e=!0,i;this._points.forEach(s=>{s&&(e?(t.moveTo(s._point.x,s._point.y),e=!1):s._point.z<1&&i.z<1?t.lineTo(s._point.x,s._point.y):t.moveTo(s._point.x,s._point.y),i=s._point)}),t.stroke(),t.restore()}_additionalProcessing(){this._minX=null,this._minY=null,this._maxX=null,this._maxY=null,this._points.forEach(t=>{t&&(t.translate(),(this._minX==null||t._point.x<this._minX)&&(this._minX=t._point.x),(this._minY==null||t._point.y<this._minY)&&(this._minY=t._point.y),(this._maxX==null||t._point.x>this._maxX)&&(this._maxX=t._point.x),(this._maxY==null||t._point.y>this._maxY)&&(this._maxY=t._point.y))}),this._minX==null&&(this._minX=0),this._minY==null&&(this._minY=0),this._maxX==null&&(this._maxX=0),this._maxY==null&&(this._maxY=0)}_measure(){this._minX==null||this._maxX==null||this._minY==null||this._maxY==null||(this._currentMeasure.width=Math.abs(this._maxX-this._minX)+this._lineWidth,this._currentMeasure.height=Math.abs(this._maxY-this._minY)+this._lineWidth)}_computeAlignment(){this._minX==null||this._minY==null||(this._currentMeasure.left=this._minX-this._lineWidth/2,this._currentMeasure.top=this._minY-this._lineWidth/2)}dispose(){this.reset(),super.dispose()}}n([_()],Ji.prototype,"dash",null);N("BABYLON.GUI.MultiLine",Ji);class Jt extends u{get thickness(){return this._thickness}set thickness(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())}get checkSizeRatio(){return this._checkSizeRatio}set checkSizeRatio(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get isChecked(){return this._isChecked}set isChecked(t){this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t),this._isChecked&&this._host&&this._host.executeOnAllControls(e=>{if(e===this||e.group===void 0)return;const i=e;i.group===this.group&&(i.isChecked=!1)}))}constructor(t){super(t),this.name=t,this._isChecked=!1,this._background="black",this._checkSizeRatio=.8,this._thickness=1,this.group="",this.onIsCheckedChangedObservable=new B,this.isPointerBlocker=!0}_getTypeName(){return"RadioButton"}_draw(t){t.save(),this._applyStates(t);const e=this._currentMeasure.width-this._thickness,i=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),u.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this.color,t.lineWidth=this._thickness,t.stroke(),this._isChecked){t.fillStyle=this._isEnabled?this.color:this._disabledColor;const s=e*this._checkSizeRatio,o=i*this._checkSizeRatio;u.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,s/2-this._thickness/2,o/2-this._thickness/2,t),t.fill()}t.restore()}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?(this.isReadOnly||this.isChecked||(this.isChecked=!0),!0):!1}static AddRadioButtonWithHeader(t,e,i,s){const o=new Tt;o.isVertical=!1,o.height="30px";const r=new Jt;r.width="20px",r.height="20px",r.isChecked=i,r.color="green",r.group=e,r.onIsCheckedChangedObservable.add(l=>s(r,l)),o.addControl(r);const a=new U;return a.text=t,a.width="180px",a.paddingLeft="5px",a.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,a.color="white",o.addControl(a),o}}n([_()],Jt.prototype,"thickness",null);n([_()],Jt.prototype,"group",void 0);n([_()],Jt.prototype,"checkSizeRatio",null);n([_()],Jt.prototype,"background",null);n([_()],Jt.prototype,"isChecked",null);N("BABYLON.GUI.RadioButton",Jt);class Ot extends u{get displayThumb(){return this._displayThumb}set displayThumb(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())}get step(){return this._step}set step(t){this._step!==t&&(this._step=t,this._markAsDirty())}get barOffset(){return this._barOffset.toString(this._host)}get barOffsetInPixels(){return this._barOffset.getValueInPixel(this._host,this._cachedParentMeasure.width)}set barOffset(t){this._barOffset.toString(this._host)!==t&&this._barOffset.fromString(t)&&this._markAsDirty()}get thumbWidth(){return this._thumbWidth.toString(this._host)}get thumbWidthInPixels(){return this._thumbWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)}set thumbWidth(t){this._thumbWidth.toString(this._host)!==t&&this._thumbWidth.fromString(t)&&this._markAsDirty()}get minimum(){return this._minimum}set minimum(t){this._minimum!==t&&(this._minimum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))}get maximum(){return this._maximum}set maximum(t){this._maximum!==t&&(this._maximum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))}get value(){return this._value}set value(t){t=Math.max(Math.min(t,this._maximum),this._minimum),this._value!==t&&(this._value=t,this._markAsDirty(),this.onValueChangedObservable.notifyObservers(this._value))}get isVertical(){return this._isVertical}set isVertical(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())}get isThumbClamped(){return this._isThumbClamped}set isThumbClamped(t){this._isThumbClamped!==t&&(this._isThumbClamped=t,this._markAsDirty())}constructor(t){super(t),this.name=t,this._thumbWidth=new I(20,I.UNITMODE_PIXEL,!1),this._minimum=0,this._maximum=100,this._value=50,this._isVertical=!1,this._barOffset=new I(5,I.UNITMODE_PIXEL,!1),this._isThumbClamped=!1,this._displayThumb=!0,this._step=0,this._lastPointerDownId=-1,this._effectiveBarOffset=0,this.onValueChangedObservable=new B,this._pointerIsDown=!1,this.isPointerBlocker=!0}_getTypeName(){return"BaseSlider"}_getThumbPosition(){return this.isVertical?(this.maximum-this.value)/(this.maximum-this.minimum)*this._backgroundBoxLength:(this.value-this.minimum)/(this.maximum-this.minimum)*this._backgroundBoxLength}_getThumbThickness(t){let e=0;switch(t){case"circle":this._thumbWidth.isPixel?e=Math.max(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):e=this._backgroundBoxThickness*this._thumbWidth.getValue(this._host);break;case"rectangle":this._thumbWidth.isPixel?e=Math.min(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):e=this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)}return e}_prepareRenderingData(t){if(this._effectiveBarOffset=0,this._renderLeft=this._currentMeasure.left,this._renderTop=this._currentMeasure.top,this._renderWidth=this._currentMeasure.width,this._renderHeight=this._currentMeasure.height,this._backgroundBoxLength=Math.max(this._currentMeasure.width,this._currentMeasure.height),this._backgroundBoxThickness=Math.min(this._currentMeasure.width,this._currentMeasure.height),this._effectiveThumbThickness=this._getThumbThickness(t),this.displayThumb&&(this._backgroundBoxLength-=this._effectiveThumbThickness),this.isVertical&&this._currentMeasure.height<this._currentMeasure.width){console.error("Height should be greater than width");return}this._barOffset.isPixel?this._effectiveBarOffset=Math.min(this._barOffset.getValue(this._host),this._backgroundBoxThickness):this._effectiveBarOffset=this._backgroundBoxThickness*this._barOffset.getValue(this._host),this._backgroundBoxThickness-=this._effectiveBarOffset*2,this.isVertical?(this._renderLeft+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderTop+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxLength,this._renderWidth=this._backgroundBoxThickness):(this._renderTop+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderLeft+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxThickness,this._renderWidth=this._backgroundBoxLength)}_updateValueFromPointer(t,e){this.rotation!=0&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y);let i;this._isVertical?i=this._minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this._maximum-this._minimum):i=this._minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this._maximum-this._minimum),this.value=this._step?Math.round(i/this._step)*this._step:i}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?(this.isReadOnly||(this._pointerIsDown=!0,this._updateValueFromPointer(e.x,e.y),this._host._capturingControl[i]=this,this._lastPointerDownId=i),!0):!1}_onPointerMove(t,e,i,s){i==this._lastPointerDownId&&(this._pointerIsDown&&!this.isReadOnly&&this._updateValueFromPointer(e.x,e.y),super._onPointerMove(t,e,i,s))}_onPointerUp(t,e,i,s,o){this._pointerIsDown=!1,delete this._host._capturingControl[i],super._onPointerUp(t,e,i,s,o)}_onCanvasBlur(){this._forcePointerUp(),super._onCanvasBlur()}}n([_()],Ot.prototype,"displayThumb",null);n([_()],Ot.prototype,"step",null);n([_()],Ot.prototype,"barOffset",null);n([_()],Ot.prototype,"thumbWidth",null);n([_()],Ot.prototype,"minimum",null);n([_()],Ot.prototype,"maximum",null);n([_()],Ot.prototype,"value",null);n([_()],Ot.prototype,"isVertical",null);n([_()],Ot.prototype,"isThumbClamped",null);class Be extends Ot{get displayValueBar(){return this._displayValueBar}set displayValueBar(t){this._displayValueBar!==t&&(this._displayValueBar=t,this._markAsDirty())}get borderColor(){return this._borderColor}set borderColor(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get backgroundGradient(){return this._backgroundGradient}set backgroundGradient(t){this._backgroundGradient!==t&&(this._backgroundGradient=t,this._markAsDirty())}get thumbColor(){return this._thumbColor}set thumbColor(t){this._thumbColor!==t&&(this._thumbColor=t,this._markAsDirty())}get isThumbCircle(){return this._isThumbCircle}set isThumbCircle(t){this._isThumbCircle!==t&&(this._isThumbCircle=t,this._markAsDirty())}constructor(t){super(t),this.name=t,this._background="black",this._borderColor="white",this._thumbColor="",this._isThumbCircle=!1,this._displayValueBar=!0,this._backgroundGradient=null}_getTypeName(){return"Slider"}_getBackgroundColor(t){return this._backgroundGradient?this._backgroundGradient.getCanvasGradient(t):this._background}_draw(t){t.save(),this._applyStates(t),this._prepareRenderingData(this.isThumbCircle?"circle":"rectangle");let e=this._renderLeft,i=this._renderTop;const s=this._renderWidth,o=this._renderHeight;let r=0;this.isThumbClamped&&this.isThumbCircle?(this.isVertical?i+=this._effectiveThumbThickness/2:e+=this._effectiveThumbThickness/2,r=this._backgroundBoxThickness/2):r=(this._effectiveThumbThickness-this._effectiveBarOffset)/2,(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY);const a=this._getThumbPosition();t.fillStyle=this._getBackgroundColor(t),this.isVertical?this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(e+this._backgroundBoxThickness/2,i,r,Math.PI,2*Math.PI),t.fill(),t.fillRect(e,i,s,o)):t.fillRect(e,i,s,o+this._effectiveThumbThickness):t.fillRect(e,i,s,o):this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(e+this._backgroundBoxLength,i+this._backgroundBoxThickness/2,r,0,2*Math.PI),t.fill(),t.fillRect(e,i,s,o)):t.fillRect(e,i,s+this._effectiveThumbThickness,o):t.fillRect(e,i,s,o),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.fillStyle=this._getColor(t),this._displayValueBar&&(this.isVertical?this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(e+this._backgroundBoxThickness/2,i+this._backgroundBoxLength,r,0,2*Math.PI),t.fill(),t.fillRect(e,i+a,s,o-a)):t.fillRect(e,i+a,s,o-a+this._effectiveThumbThickness):t.fillRect(e,i+a,s,o-a):(this.isThumbClamped&&this.isThumbCircle&&(t.beginPath(),t.arc(e,i+this._backgroundBoxThickness/2,r,0,2*Math.PI),t.fill()),t.fillRect(e,i,a,o))),t.fillStyle=this._thumbColor||this._getColor(t),this.displayThumb&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isThumbCircle?(t.beginPath(),this.isVertical?t.arc(e+this._backgroundBoxThickness/2,i+a,r,0,2*Math.PI):t.arc(e+a,i+this._backgroundBoxThickness/2,r,0,2*Math.PI),t.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this._borderColor,t.stroke()):(this.isVertical?t.fillRect(e-this._effectiveBarOffset,this._currentMeasure.top+a,this._currentMeasure.width,this._effectiveThumbThickness):t.fillRect(this._currentMeasure.left+a,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this._borderColor,this.isVertical?t.strokeRect(e-this._effectiveBarOffset,this._currentMeasure.top+a,this._currentMeasure.width,this._effectiveThumbThickness):t.strokeRect(this._currentMeasure.left+a,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height))),t.restore()}serialize(t){super.serialize(t),this.backgroundGradient&&(t.backgroundGradient={},this.backgroundGradient.serialize(t.backgroundGradient))}_parseFromContent(t,e){if(super._parseFromContent(t,e),t.backgroundGradient){const i=it.Instantiate("BABYLON.GUI."+t.backgroundGradient.className);this.backgroundGradient=new i,this.backgroundGradient.parse(t.backgroundGradient)}}}n([_()],Be.prototype,"displayValueBar",null);n([_()],Be.prototype,"borderColor",null);n([_()],Be.prototype,"background",null);n([_()],Be.prototype,"thumbColor",null);n([_()],Be.prototype,"isThumbCircle",null);N("BABYLON.GUI.Slider",Be);class Si{constructor(t){this.name=t,this._groupPanel=new Tt,this._selectors=new Array,this._groupPanel.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._groupPanel.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._groupHeader=this._addGroupHeader(t)}get groupPanel(){return this._groupPanel}get selectors(){return this._selectors}get header(){return this._groupHeader.text}set header(t){this._groupHeader.text!=="label"&&(this._groupHeader.text=t)}_addGroupHeader(t){const e=new U("groupHead",t);return e.width=.9,e.height="30px",e.textWrapping=!0,e.color="black",e.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,e.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,e.left="2px",this._groupPanel.addControl(e),e}_getSelector(t){if(!(t<0||t>=this._selectors.length))return this._selectors[t]}removeSelector(t){t<0||t>=this._selectors.length||(this._groupPanel.removeControl(this._selectors[t]),this._selectors.splice(t,1))}}class Jo extends Si{addCheckbox(t,e=s=>{},i=!1){i=i||!1;const s=new _e;s.width="20px",s.height="20px",s.color="#364249",s.background="#CCCCCC",s.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,s.onIsCheckedChangedObservable.add(function(r){e(r)});const o=u.AddHeader(s,t,"200px",{isHorizontal:!0,controlFirst:!0});o.height="30px",o.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,o.left="4px",this.groupPanel.addControl(o),this.selectors.push(o),s.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(s.color=this.groupPanel.parent.parent.buttonColor,s.background=this.groupPanel.parent.parent.buttonBackground)}_setSelectorLabel(t,e){this.selectors[t].children[1].text=e}_setSelectorLabelColor(t,e){this.selectors[t].children[1].color=e}_setSelectorButtonColor(t,e){this.selectors[t].children[0].color=e}_setSelectorButtonBackground(t,e){this.selectors[t].children[0].background=e}}class tr extends Si{constructor(){super(...arguments),this._selectNb=0}addRadio(t,e=s=>{},i=!1){const s=this._selectNb++,o=new Jt;o.name=t,o.width="20px",o.height="20px",o.color="#364249",o.background="#CCCCCC",o.group=this.name,o.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,o.onIsCheckedChangedObservable.add(function(a){a&&e(s)});const r=u.AddHeader(o,t,"200px",{isHorizontal:!0,controlFirst:!0});r.height="30px",r.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,r.left="4px",this.groupPanel.addControl(r),this.selectors.push(r),o.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(o.color=this.groupPanel.parent.parent.buttonColor,o.background=this.groupPanel.parent.parent.buttonBackground)}_setSelectorLabel(t,e){this.selectors[t].children[1].text=e}_setSelectorLabelColor(t,e){this.selectors[t].children[1].color=e}_setSelectorButtonColor(t,e){this.selectors[t].children[0].color=e}_setSelectorButtonBackground(t,e){this.selectors[t].children[0].background=e}}class er extends Si{addSlider(t,e=l=>{},i="Units",s=0,o=0,r=0,a=l=>l|0){const l=new Be;l.name=i,l.value=r,l.minimum=s,l.maximum=o,l.width=.9,l.height="20px",l.color="#364249",l.background="#CCCCCC",l.borderColor="black",l.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,l.left="4px",l.paddingBottom="4px",l.onValueChangedObservable.add(function(d){l.parent.children[0].text=l.parent.children[0].name+": "+a(d)+" "+l.name,e(d)});const h=u.AddHeader(l,t+": "+a(r)+" "+i,"30px",{isHorizontal:!1,controlFirst:!1});h.height="60px",h.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,h.left="4px",h.children[0].name=t,this.groupPanel.addControl(h),this.selectors.push(h),this.groupPanel.parent&&this.groupPanel.parent.parent&&(l.color=this.groupPanel.parent.parent.buttonColor,l.background=this.groupPanel.parent.parent.buttonBackground)}_setSelectorLabel(t,e){this.selectors[t].children[0].name=e,this.selectors[t].children[0].text=e+": "+this.selectors[t].children[1].value+" "+this.selectors[t].children[1].name}_setSelectorLabelColor(t,e){this.selectors[t].children[0].color=e}_setSelectorButtonColor(t,e){this.selectors[t].children[1].color=e}_setSelectorButtonBackground(t,e){this.selectors[t].children[1].background=e}}class ir extends ft{constructor(t,e=[]){if(super(t),this.name=t,this.groups=e,this._buttonColor="#364249",this._buttonBackground="#CCCCCC",this._headerColor="black",this._barColor="white",this._barHeight="2px",this._spacerHeight="20px",this._bars=new Array,this._groups=e,this.thickness=2,this._panel=new Tt,this._panel.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._panel.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._panel.top=5,this._panel.left=5,this._panel.width=.95,e.length>0){for(let i=0;i<e.length-1;i++)this._panel.addControl(e[i].groupPanel),this._addSpacer();this._panel.addControl(e[e.length-1].groupPanel)}this.addControl(this._panel)}_getTypeName(){return"SelectionPanel"}get panel(){return this._panel}get headerColor(){return this._headerColor}set headerColor(t){this._headerColor!==t&&(this._headerColor=t,this._setHeaderColor())}_setHeaderColor(){for(let t=0;t<this._groups.length;t++)this._groups[t].groupPanel.children[0].color=this._headerColor}get buttonColor(){return this._buttonColor}set buttonColor(t){this._buttonColor!==t&&(this._buttonColor=t,this._setbuttonColor())}_setbuttonColor(){for(let t=0;t<this._groups.length;t++)for(let e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonColor(e,this._buttonColor)}get labelColor(){return this._labelColor}set labelColor(t){this._labelColor!==t&&(this._labelColor=t,this._setLabelColor())}_setLabelColor(){for(let t=0;t<this._groups.length;t++)for(let e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorLabelColor(e,this._labelColor)}get buttonBackground(){return this._buttonBackground}set buttonBackground(t){this._buttonBackground!==t&&(this._buttonBackground=t,this._setButtonBackground())}_setButtonBackground(){for(let t=0;t<this._groups.length;t++)for(let e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonBackground(e,this._buttonBackground)}get barColor(){return this._barColor}set barColor(t){this._barColor!==t&&(this._barColor=t,this._setBarColor())}_setBarColor(){for(let t=0;t<this._bars.length;t++)this._bars[t].children[0].background=this._barColor}get barHeight(){return this._barHeight}set barHeight(t){this._barHeight!==t&&(this._barHeight=t,this._setBarHeight())}_setBarHeight(){for(let t=0;t<this._bars.length;t++)this._bars[t].children[0].height=this._barHeight}get spacerHeight(){return this._spacerHeight}set spacerHeight(t){this._spacerHeight!==t&&(this._spacerHeight=t,this._setSpacerHeight())}_setSpacerHeight(){for(let t=0;t<this._bars.length;t++)this._bars[t].height=this._spacerHeight}_addSpacer(){const t=new ut;t.width=1,t.height=this._spacerHeight,t.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT;const e=new ft;e.width=1,e.height=this._barHeight,e.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,e.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,e.background=this._barColor,e.color="transparent",t.addControl(e),this._panel.addControl(t),this._bars.push(t)}addGroup(t){this._groups.length>0&&this._addSpacer(),this._panel.addControl(t.groupPanel),this._groups.push(t),t.groupPanel.children[0].color=this._headerColor;for(let e=0;e<t.selectors.length;e++)t._setSelectorButtonColor(e,this._buttonColor),t._setSelectorButtonBackground(e,this._buttonBackground)}removeGroup(t){if(t<0||t>=this._groups.length)return;const e=this._groups[t];this._panel.removeControl(e.groupPanel),this._groups.splice(t,1),t<this._bars.length&&(this._panel.removeControl(this._bars[t]),this._bars.splice(t,1))}setHeaderName(t,e){if(e<0||e>=this._groups.length)return;const i=this._groups[e];i.groupPanel.children[0].text=t}relabel(t,e,i){if(e<0||e>=this._groups.length)return;const s=this._groups[e];i<0||i>=s.selectors.length||s._setSelectorLabel(i,t)}removeFromGroupSelector(t,e){if(t<0||t>=this._groups.length)return;const i=this._groups[t];e<0||e>=i.selectors.length||i.removeSelector(e)}addToGroupCheckbox(t,e,i=()=>{},s=!1){if(t<0||t>=this._groups.length)return;this._groups[t].addCheckbox(e,i,s)}addToGroupRadio(t,e,i=()=>{},s=!1){if(t<0||t>=this._groups.length)return;this._groups[t].addRadio(e,i,s)}addToGroupSlider(t,e,i=()=>{},s="Units",o=0,r=0,a=0,l=h=>h|0){if(t<0||t>=this._groups.length)return;this._groups[t].addSlider(e,i,s,o,r,a,l)}}class ks extends ut{get freezeControls(){return this._freezeControls}set freezeControls(t){if(this._freezeControls===t)return;t||this._restoreMeasures(),this._freezeControls=!1;const e=this.host.getSize(),i=e.width,s=e.height,o=this.host.getContext(),r=new et(0,0,i,s);this.host._numLayoutCalls=0,this.host._rootContainer._layout(r,o),t&&(this._updateMeasures(),this._useBuckets()&&this._makeBuckets()),this._freezeControls=t,this.host.markAsDirty()}get bucketWidth(){return this._bucketWidth}get bucketHeight(){return this._bucketHeight}setBucketSizes(t,e){this._bucketWidth=t,this._bucketHeight=e,this._useBuckets()?this._freezeControls&&this._makeBuckets():this._buckets={}}_useBuckets(){return this._bucketWidth>0&&this._bucketHeight>0}_makeBuckets(){this._buckets={},this._bucketLen=Math.ceil(this.widthInPixels/this._bucketWidth),this._dispatchInBuckets(this._children),this._oldLeft=null,this._oldTop=null}_dispatchInBuckets(t){for(let e=0;e<t.length;++e){const i=t[e],s=Math.max(0,Math.floor((i._customData._origLeft-this._customData.origLeft)/this._bucketWidth)),o=Math.floor((i._customData._origLeft-this._customData.origLeft+i._currentMeasure.width-1)/this._bucketWidth),r=Math.floor((i._customData._origTop-this._customData.origTop+i._currentMeasure.height-1)/this._bucketHeight);let a=Math.max(0,Math.floor((i._customData._origTop-this._customData.origTop)/this._bucketHeight));for(;a<=r;){for(let l=s;l<=o;++l){const h=a*this._bucketLen+l;let d=this._buckets[h];d||(d=[],this._buckets[h]=d),d.push(i)}a++}i instanceof ut&&i._children.length>0&&this._dispatchInBuckets(i._children)}}_updateMeasures(){const t=this.leftInPixels|0,e=this.topInPixels|0;this._measureForChildren.left-=t,this._measureForChildren.top-=e,this._currentMeasure.left-=t,this._currentMeasure.top-=e,this._customData.origLeftForChildren=this._measureForChildren.left,this._customData.origTopForChildren=this._measureForChildren.top,this._customData.origLeft=this._currentMeasure.left,this._customData.origTop=this._currentMeasure.top,this._updateChildrenMeasures(this._children,t,e)}_updateChildrenMeasures(t,e,i){for(let s=0;s<t.length;++s){const o=t[s];o._currentMeasure.left-=e,o._currentMeasure.top-=i,o._customData._origLeft=o._currentMeasure.left,o._customData._origTop=o._currentMeasure.top,o instanceof ut&&o._children.length>0&&this._updateChildrenMeasures(o._children,e,i)}}_restoreMeasures(){const t=this.leftInPixels|0,e=this.topInPixels|0;this._measureForChildren.left=this._customData.origLeftForChildren+t,this._measureForChildren.top=this._customData.origTopForChildren+e,this._currentMeasure.left=this._customData.origLeft+t,this._currentMeasure.top=this._customData.origTop+e}constructor(t){super(t),this._freezeControls=!1,this._bucketWidth=0,this._bucketHeight=0,this._buckets={}}_getTypeName(){return"ScrollViewerWindow"}_additionalProcessing(t,e){super._additionalProcessing(t,e),this._parentMeasure=t,this._measureForChildren.left=this._currentMeasure.left,this._measureForChildren.top=this._currentMeasure.top,this._measureForChildren.width=t.width,this._measureForChildren.height=t.height}_layout(t,e){return this._freezeControls?(this.invalidateRect(),!1):super._layout(t,e)}_scrollChildren(t,e,i){for(let s=0;s<t.length;++s){const o=t[s];o._currentMeasure.left=o._customData._origLeft+e,o._currentMeasure.top=o._customData._origTop+i,o._isClipped=!1,o instanceof ut&&o._children.length>0&&this._scrollChildren(o._children,e,i)}}_scrollChildrenWithBuckets(t,e,i,s){const o=Math.max(0,Math.floor(-t/this._bucketWidth)),r=Math.floor((-t+this._parentMeasure.width-1)/this._bucketWidth),a=Math.floor((-e+this._parentMeasure.height-1)/this._bucketHeight);let l=Math.max(0,Math.floor(-e/this._bucketHeight));for(;l<=a;){for(let h=o;h<=r;++h){const d=l*this._bucketLen+h,f=this._buckets[d];if(f)for(let g=0;g<f.length;++g){const y=f[g];y._currentMeasure.left=y._customData._origLeft+i,y._currentMeasure.top=y._customData._origTop+s,y._isClipped=!1}}l++}}_draw(t,e){if(!this._freezeControls){super._draw(t,e);return}this._localDraw(t),this.clipChildren&&this._clipForChildren(t);const i=this.leftInPixels|0,s=this.topInPixels|0;this._useBuckets()?this._oldLeft!==null&&this._oldTop!==null?(this._scrollChildrenWithBuckets(this._oldLeft,this._oldTop,i,s),this._scrollChildrenWithBuckets(i,s,i,s)):this._scrollChildren(this._children,i,s):this._scrollChildren(this._children,i,s),this._oldLeft=i,this._oldTop=s;for(const o of this._children)o._intersectsRect(this._parentMeasure)&&o._render(t,this._parentMeasure)}_postMeasure(){if(this._freezeControls){super._postMeasure();return}let t=this.parentClientWidth,e=this.parentClientHeight;for(const i of this.children)!i.isVisible||i.notRenderable||(i.horizontalAlignment===u.HORIZONTAL_ALIGNMENT_CENTER&&i._offsetLeft(this._currentMeasure.left-i._currentMeasure.left),i.verticalAlignment===u.VERTICAL_ALIGNMENT_CENTER&&i._offsetTop(this._currentMeasure.top-i._currentMeasure.top),t=Math.max(t,i._currentMeasure.left-this._currentMeasure.left+i._currentMeasure.width+i.paddingRightInPixels),e=Math.max(e,i._currentMeasure.top-this._currentMeasure.top+i._currentMeasure.height+i.paddingBottomInPixels));this._currentMeasure.width!==t&&(this._width.updateInPlace(t,I.UNITMODE_PIXEL),this._currentMeasure.width=t,this._rebuildLayout=!0,this._isDirty=!0),this._currentMeasure.height!==e&&(this._height.updateInPlace(e,I.UNITMODE_PIXEL),this._currentMeasure.height=e,this._rebuildLayout=!0,this._isDirty=!0),super._postMeasure()}}class ke extends Ot{get borderColor(){return this._borderColor}set borderColor(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get backgroundGradient(){return this._backgroundGradient}set backgroundGradient(t){this._backgroundGradient!==t&&(this._backgroundGradient=t,this._markAsDirty())}get invertScrollDirection(){return this._invertScrollDirection}set invertScrollDirection(t){this._invertScrollDirection=t}constructor(t){super(t),this.name=t,this._background="black",this._borderColor="white",this._tempMeasure=new et(0,0,0,0),this._invertScrollDirection=!1,this._backgroundGradient=null}_getTypeName(){return"Scrollbar"}_getThumbThickness(){let t=0;return this._thumbWidth.isPixel?t=this._thumbWidth.getValue(this._host):t=this._backgroundBoxThickness*this._thumbWidth.getValue(this._host),t}_getBackgroundColor(t){return this._backgroundGradient?this._backgroundGradient.getCanvasGradient(t):this._background}_draw(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");const e=this._renderLeft,i=this._getThumbPosition();t.fillStyle=this._getBackgroundColor(t),t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),t.fillStyle=this._getColor(t),this.isVertical?(this._tempMeasure.left=e-this._effectiveBarOffset,this._tempMeasure.top=this._currentMeasure.top+i,this._tempMeasure.width=this._currentMeasure.width,this._tempMeasure.height=this._effectiveThumbThickness):(this._tempMeasure.left=this._currentMeasure.left+i,this._tempMeasure.top=this._currentMeasure.top,this._tempMeasure.width=this._effectiveThumbThickness,this._tempMeasure.height=this._currentMeasure.height),t.fillRect(this._tempMeasure.left,this._tempMeasure.top,this._tempMeasure.width,this._tempMeasure.height),t.restore()}_updateValueFromPointer(t,e){this.rotation!=0&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y);const i=this._invertScrollDirection?-1:1;this._first&&(this._first=!1,this._originX=t,this._originY=e,(t<this._tempMeasure.left||t>this._tempMeasure.left+this._tempMeasure.width||e<this._tempMeasure.top||e>this._tempMeasure.top+this._tempMeasure.height)&&(this.isVertical?this.value=this.minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this.maximum-this.minimum):this.value=this.minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this.maximum-this.minimum)));let s=0;this.isVertical?s=-((e-this._originY)/(this._currentMeasure.height-this._effectiveThumbThickness)):s=(t-this._originX)/(this._currentMeasure.width-this._effectiveThumbThickness),this.value+=i*s*(this.maximum-this.minimum),this._originX=t,this._originY=e}_onPointerDown(t,e,i,s,o){return this._first=!0,super._onPointerDown(t,e,i,s,o)}serialize(t){super.serialize(t),this.backgroundGradient&&(t.backgroundGradient={},this.backgroundGradient.serialize(t.backgroundGradient))}_parseFromContent(t,e){if(super._parseFromContent(t,e),t.backgroundGradient){const i=it.Instantiate("BABYLON.GUI."+t.backgroundGradient.className);this.backgroundGradient=new i,this.backgroundGradient.parse(t.backgroundGradient)}}}n([_()],ke.prototype,"borderColor",null);n([_()],ke.prototype,"background",null);n([_()],ke.prototype,"invertScrollDirection",null);N("BABYLON.GUI.Scrollbar",ke);class ai extends Ot{get invertScrollDirection(){return this._invertScrollDirection}set invertScrollDirection(t){this._invertScrollDirection=t}get backgroundImage(){return this._backgroundBaseImage}set backgroundImage(t){this._backgroundBaseImage!==t&&(this._backgroundBaseImage=t,this.isVertical&&this.num90RotationInVerticalMode!==0?t.isLoaded?(this._backgroundImage=t._rotate90(this.num90RotationInVerticalMode,!0),this._markAsDirty()):t.onImageLoadedObservable.addOnce(()=>{const e=t._rotate90(this.num90RotationInVerticalMode,!0);this._backgroundImage=e,e.isLoaded||e.onImageLoadedObservable.addOnce(()=>{this._markAsDirty()}),this._markAsDirty()}):(this._backgroundImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(()=>{this._markAsDirty()}),this._markAsDirty()))}get thumbImage(){return this._thumbBaseImage}set thumbImage(t){this._thumbBaseImage!==t&&(this._thumbBaseImage=t,this.isVertical&&this.num90RotationInVerticalMode!==0?t.isLoaded?(this._thumbImage=t._rotate90(-this.num90RotationInVerticalMode,!0),this._markAsDirty()):t.onImageLoadedObservable.addOnce(()=>{const e=t._rotate90(-this.num90RotationInVerticalMode,!0);this._thumbImage=e,e.isLoaded||e.onImageLoadedObservable.addOnce(()=>{this._markAsDirty()}),this._markAsDirty()}):(this._thumbImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(()=>{this._markAsDirty()}),this._markAsDirty()))}get thumbLength(){return this._thumbLength}set thumbLength(t){this._thumbLength!==t&&(this._thumbLength=t,this._markAsDirty())}get thumbHeight(){return this._thumbHeight}set thumbHeight(t){this._thumbLength!==t&&(this._thumbHeight=t,this._markAsDirty())}get barImageHeight(){return this._barImageHeight}set barImageHeight(t){this._barImageHeight!==t&&(this._barImageHeight=t,this._markAsDirty())}constructor(t){super(t),this.name=t,this._thumbLength=.5,this._thumbHeight=1,this._barImageHeight=1,this._tempMeasure=new et(0,0,0,0),this._invertScrollDirection=!1,this.num90RotationInVerticalMode=1}_getTypeName(){return"ImageScrollBar"}_getThumbThickness(){let t=0;return this._thumbWidth.isPixel?t=this._thumbWidth.getValue(this._host):t=this._backgroundBoxThickness*this._thumbWidth.getValue(this._host),t}_draw(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");const e=this._getThumbPosition(),i=this._renderLeft,s=this._renderTop,o=this._renderWidth,r=this._renderHeight;this._backgroundImage&&(this._tempMeasure.copyFromFloats(i,s,o,r),this.isVertical?(this._tempMeasure.copyFromFloats(i+o*(1-this._barImageHeight)*.5,this._currentMeasure.top,o*this._barImageHeight,r),this._tempMeasure.height+=this._effectiveThumbThickness,this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure)):(this._tempMeasure.copyFromFloats(this._currentMeasure.left,s+r*(1-this._barImageHeight)*.5,o,r*this._barImageHeight),this._tempMeasure.width+=this._effectiveThumbThickness,this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure)),this._backgroundImage._draw(t)),this.isVertical?this._tempMeasure.copyFromFloats(i-this._effectiveBarOffset+this._currentMeasure.width*(1-this._thumbHeight)*.5,this._currentMeasure.top+e,this._currentMeasure.width*this._thumbHeight,this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(this._currentMeasure.left+e,this._currentMeasure.top+this._currentMeasure.height*(1-this._thumbHeight)*.5,this._effectiveThumbThickness,this._currentMeasure.height*this._thumbHeight),this._thumbImage&&(this._thumbImage._currentMeasure.copyFrom(this._tempMeasure),this._thumbImage._draw(t)),t.restore()}_updateValueFromPointer(t,e){this.rotation!=0&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y);const i=this._invertScrollDirection?-1:1;this._first&&(this._first=!1,this._originX=t,this._originY=e,(t<this._tempMeasure.left||t>this._tempMeasure.left+this._tempMeasure.width||e<this._tempMeasure.top||e>this._tempMeasure.top+this._tempMeasure.height)&&(this.isVertical?this.value=this.minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this.maximum-this.minimum):this.value=this.minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this.maximum-this.minimum)));let s=0;this.isVertical?s=-((e-this._originY)/(this._currentMeasure.height-this._effectiveThumbThickness)):s=(t-this._originX)/(this._currentMeasure.width-this._effectiveThumbThickness),this.value+=i*s*(this.maximum-this.minimum),this._originX=t,this._originY=e}_onPointerDown(t,e,i,s,o){return this._first=!0,super._onPointerDown(t,e,i,s,o)}}n([_()],ai.prototype,"num90RotationInVerticalMode",void 0);n([_()],ai.prototype,"invertScrollDirection",null);class Ne extends ft{get horizontalBar(){return this._horizontalBar}get verticalBar(){return this._verticalBar}addControl(t){return t?(this._window.addControl(t),this):this}removeControl(t){return this._window.removeControl(t),this}get children(){return this._window.children}_flagDescendantsAsMatrixDirty(){for(const t of this._children)t._markMatrixAsDirty()}get freezeControls(){return this._window.freezeControls}set freezeControls(t){this._window.freezeControls=t}get bucketWidth(){return this._window.bucketWidth}get bucketHeight(){return this._window.bucketHeight}setBucketSizes(t,e){this._window.setBucketSizes(t,e)}get forceHorizontalBar(){return this._forceHorizontalBar}set forceHorizontalBar(t){this._grid.setRowDefinition(1,t?this._barSize:0,!0),this._horizontalBar.isVisible=t,this._forceHorizontalBar=t}get forceVerticalBar(){return this._forceVerticalBar}set forceVerticalBar(t){this._grid.setColumnDefinition(1,t?this._barSize:0,!0),this._verticalBar.isVisible=t,this._forceVerticalBar=t}constructor(t,e){super(t),this._barSize=20,this._pointerIsOver=!1,this._wheelPrecision=.05,this._thumbLength=.5,this._thumbHeight=1,this._barImageHeight=1,this._horizontalBarImageHeight=1,this._verticalBarImageHeight=1,this._oldWindowContentsWidth=0,this._oldWindowContentsHeight=0,this._forceHorizontalBar=!1,this._forceVerticalBar=!1,this._useImageBar=e||!1,this.onDirtyObservable.add(()=>{this._horizontalBarSpace.color=this.color,this._verticalBarSpace.color=this.color,this._dragSpace.color=this.color}),this.onPointerEnterObservable.add(()=>{this._pointerIsOver=!0}),this.onPointerOutObservable.add(()=>{this._pointerIsOver=!1}),this._grid=new vt,this._useImageBar?(this._horizontalBar=new ai,this._verticalBar=new ai):(this._horizontalBar=new ke,this._verticalBar=new ke),this._window=new ks("scrollViewer_window"),this._window.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._window.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._grid.addColumnDefinition(1),this._grid.addColumnDefinition(0,!0),this._grid.addRowDefinition(1),this._grid.addRowDefinition(0,!0),super.addControl(this._grid),this._grid.addControl(this._window,0,0),this._verticalBarSpace=new ft,this._verticalBarSpace.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._verticalBarSpace.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._verticalBarSpace.thickness=1,this._grid.addControl(this._verticalBarSpace,0,1),this._addBar(this._verticalBar,this._verticalBarSpace,!0,Math.PI),this._horizontalBarSpace=new ft,this._horizontalBarSpace.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._horizontalBarSpace.verticalAlignment=u.VERTICAL_ALIGNMENT_TOP,this._horizontalBarSpace.thickness=1,this._grid.addControl(this._horizontalBarSpace,1,0),this._addBar(this._horizontalBar,this._horizontalBarSpace,!1,0),this._dragSpace=new ft,this._dragSpace.thickness=1,this._grid.addControl(this._dragSpace,1,1),this._useImageBar||(this.barColor="grey",this.barBackground="transparent")}resetWindow(){this._window.width="100%",this._window.height="100%"}_getTypeName(){return"ScrollViewer"}_buildClientSizes(){const t=this.host.idealRatio;this._window.parentClientWidth=this._currentMeasure.width-(this._verticalBar.isVisible||this.forceVerticalBar?this._barSize*t:0)-2*this.thickness,this._window.parentClientHeight=this._currentMeasure.height-(this._horizontalBar.isVisible||this.forceHorizontalBar?this._barSize*t:0)-2*this.thickness,this._clientWidth=this._window.parentClientWidth,this._clientHeight=this._window.parentClientHeight}_additionalProcessing(t,e){super._additionalProcessing(t,e),this._buildClientSizes()}_postMeasure(){super._postMeasure(),this._updateScroller(),this._setWindowPosition(!1)}get wheelPrecision(){return this._wheelPrecision}set wheelPrecision(t){this._wheelPrecision!==t&&(t<0&&(t=0),t>1&&(t=1),this._wheelPrecision=t)}get scrollBackground(){return this._horizontalBarSpace.background}set scrollBackground(t){this._horizontalBarSpace.background!==t&&(this._horizontalBarSpace.background=t,this._verticalBarSpace.background=t)}get barColor(){return this._barColor}set barColor(t){this._barColor!==t&&(this._barColor=t,this._horizontalBar.color=t,this._verticalBar.color=t)}get thumbImage(){return this._barImage}set thumbImage(t){if(this._barImage===t)return;this._barImage=t;const e=this._horizontalBar,i=this._verticalBar;e.thumbImage=t,i.thumbImage=t}get horizontalThumbImage(){return this._horizontalBarImage}set horizontalThumbImage(t){if(this._horizontalBarImage===t)return;this._horizontalBarImage=t;const e=this._horizontalBar;e.thumbImage=t}get verticalThumbImage(){return this._verticalBarImage}set verticalThumbImage(t){if(this._verticalBarImage===t)return;this._verticalBarImage=t;const e=this._verticalBar;e.thumbImage=t}get barSize(){return this._barSize}set barSize(t){this._barSize!==t&&(this._barSize=t,this._markAsDirty(),this._horizontalBar.isVisible&&this._grid.setRowDefinition(1,this._barSize,!0),this._verticalBar.isVisible&&this._grid.setColumnDefinition(1,this._barSize,!0))}get thumbLength(){return this._thumbLength}set thumbLength(t){if(this._thumbLength===t)return;t<=0&&(t=.1),t>1&&(t=1),this._thumbLength=t;const e=this._horizontalBar,i=this._verticalBar;e.thumbLength=t,i.thumbLength=t,this._markAsDirty()}get thumbHeight(){return this._thumbHeight}set thumbHeight(t){if(this._thumbHeight===t)return;t<=0&&(t=.1),t>1&&(t=1),this._thumbHeight=t;const e=this._horizontalBar,i=this._verticalBar;e.thumbHeight=t,i.thumbHeight=t,this._markAsDirty()}get barImageHeight(){return this._barImageHeight}set barImageHeight(t){if(this._barImageHeight===t)return;t<=0&&(t=.1),t>1&&(t=1),this._barImageHeight=t;const e=this._horizontalBar,i=this._verticalBar;e.barImageHeight=t,i.barImageHeight=t,this._markAsDirty()}get horizontalBarImageHeight(){return this._horizontalBarImageHeight}set horizontalBarImageHeight(t){if(this._horizontalBarImageHeight===t)return;t<=0&&(t=.1),t>1&&(t=1),this._horizontalBarImageHeight=t;const e=this._horizontalBar;e.barImageHeight=t,this._markAsDirty()}get verticalBarImageHeight(){return this._verticalBarImageHeight}set verticalBarImageHeight(t){if(this._verticalBarImageHeight===t)return;t<=0&&(t=.1),t>1&&(t=1),this._verticalBarImageHeight=t;const e=this._verticalBar;e.barImageHeight=t,this._markAsDirty()}get barBackground(){return this._barBackground}set barBackground(t){if(this._barBackground===t)return;this._barBackground=t;const e=this._horizontalBar,i=this._verticalBar;e.background=t,i.background=t,this._dragSpace.background=t}get barImage(){return this._barBackgroundImage}set barImage(t){this._barBackgroundImage=t;const e=this._horizontalBar,i=this._verticalBar;e.backgroundImage=t,i.backgroundImage=t}get horizontalBarImage(){return this._horizontalBarBackgroundImage}set horizontalBarImage(t){this._horizontalBarBackgroundImage=t;const e=this._horizontalBar;e.backgroundImage=t}get verticalBarImage(){return this._verticalBarBackgroundImage}set verticalBarImage(t){this._verticalBarBackgroundImage=t;const e=this._verticalBar;e.backgroundImage=t}_setWindowPosition(t=!0){const e=this.host.idealRatio,i=this._window._currentMeasure.width,s=this._window._currentMeasure.height;if(!t&&this._oldWindowContentsWidth===i&&this._oldWindowContentsHeight===s)return;this._oldWindowContentsWidth=i,this._oldWindowContentsHeight=s;const o=this._clientWidth-i,r=this._clientHeight-s,a=this._horizontalBar.value/e*o+"px",l=this._verticalBar.value/e*r+"px";a!==this._window.left&&(this._window.left=a,this.freezeControls||(this._rebuildLayout=!0)),l!==this._window.top&&(this._window.top=l,this.freezeControls||(this._rebuildLayout=!0))}_updateScroller(){const t=this._window._currentMeasure.width,e=this._window._currentMeasure.height;this._horizontalBar.isVisible&&t<=this._clientWidth&&!this.forceHorizontalBar?(this._grid.setRowDefinition(1,0,!0),this._horizontalBar.isVisible=!1,this._horizontalBar.value=0,this._rebuildLayout=!0):!this._horizontalBar.isVisible&&(t>this._clientWidth||this.forceHorizontalBar)&&(this._grid.setRowDefinition(1,this._barSize,!0),this._horizontalBar.isVisible=!0,this._rebuildLayout=!0),this._verticalBar.isVisible&&e<=this._clientHeight&&!this.forceVerticalBar?(this._grid.setColumnDefinition(1,0,!0),this._verticalBar.isVisible=!1,this._verticalBar.value=0,this._rebuildLayout=!0):!this._verticalBar.isVisible&&(e>this._clientHeight||this.forceVerticalBar)&&(this._grid.setColumnDefinition(1,this._barSize,!0),this._verticalBar.isVisible=!0,this._rebuildLayout=!0),this._buildClientSizes();const i=this.host.idealRatio;this._horizontalBar.thumbWidth=this._thumbLength*.9*(this._clientWidth/i)+"px",this._verticalBar.thumbWidth=this._thumbLength*.9*(this._clientHeight/i)+"px"}_link(t){super._link(t),this._attachWheel()}_addBar(t,e,i,s){t.paddingLeft=0,t.width="100%",t.height="100%",t.barOffset=0,t.value=0,t.maximum=1,t.horizontalAlignment=u.HORIZONTAL_ALIGNMENT_CENTER,t.verticalAlignment=u.VERTICAL_ALIGNMENT_CENTER,t.isVertical=i,t.rotation=s,t.isVisible=!1,e.addControl(t),t.onValueChangedObservable.add(()=>{this._setWindowPosition()})}_attachWheel(){!this._host||this._onWheelObserver||(this._onWheelObserver=this.onWheelObservable.add(t=>{!this._pointerIsOver||this.isReadOnly||(this._verticalBar.isVisible==!0&&(t.y<0&&this._verticalBar.value>0?this._verticalBar.value-=this._wheelPrecision:t.y>0&&this._verticalBar.value<this._verticalBar.maximum&&(this._verticalBar.value+=this._wheelPrecision)),this._horizontalBar.isVisible==!0&&(t.x<0&&this._horizontalBar.value<this._horizontalBar.maximum?this._horizontalBar.value+=this._wheelPrecision:t.x>0&&this._horizontalBar.value>0&&(this._horizontalBar.value-=this._wheelPrecision)))}))}_renderHighlightSpecific(t){this.isHighlighted&&(super._renderHighlightSpecific(t),this._grid._renderHighlightSpecific(t),t.restore())}dispose(){this.onWheelObservable.remove(this._onWheelObserver),this._onWheelObserver=null,super.dispose()}}n([_()],Ne.prototype,"wheelPrecision",null);n([_()],Ne.prototype,"scrollBackground",null);n([_()],Ne.prototype,"barColor",null);n([_()],Ne.prototype,"barSize",null);n([_()],Ne.prototype,"barBackground",null);N("BABYLON.GUI.ScrollViewer",Ne);class Ns extends ft{get group(){return this._group}set group(t){this._group!==t&&(this._group=t)}get isActive(){return this._isActive}set isActive(t){var e,i;this._isActive!==t&&(this._isActive=t,this._isActive?(e=this.toActiveAnimation)===null||e===void 0||e.call(this):(i=this.toInactiveAnimation)===null||i===void 0||i.call(this),this._markAsDirty(),this.onIsActiveChangedObservable.notifyObservers(t),this._isActive&&this._host&&this._group&&this._host.executeOnAllControls(s=>{if(s.typeName==="ToggleButton"){if(s===this)return;const o=s;o.group===this.group&&(o.isActive=!1)}}))}constructor(t,e){super(t),this.name=t,this.onIsActiveChangedObservable=new B,this.delegatePickingToChildren=!1,this._isActive=!1,this.group=e??"",this.thickness=0,this.isPointerBlocker=!0;let i=null;this.toActiveAnimation=()=>{this.thickness=1},this.toInactiveAnimation=()=>{this.thickness=0},this.pointerEnterActiveAnimation=()=>{i=this.alpha,this.alpha-=.1},this.pointerOutActiveAnimation=()=>{i!==null&&(this.alpha=i)},this.pointerDownActiveAnimation=()=>{this.scaleX-=.05,this.scaleY-=.05},this.pointerUpActiveAnimation=()=>{this.scaleX+=.05,this.scaleY+=.05},this.pointerEnterInactiveAnimation=()=>{i=this.alpha,this.alpha-=.1},this.pointerOutInactiveAnimation=()=>{i!==null&&(this.alpha=i)},this.pointerDownInactiveAnimation=()=>{this.scaleX-=.05,this.scaleY-=.05},this.pointerUpInactiveAnimation=()=>{this.scaleX+=.05,this.scaleY+=.05}}_getTypeName(){return"ToggleButton"}_processPicking(t,e,i,s,o,r,a,l){if(!this._isEnabled||!this.isHitTestVisible||!this.isVisible||this.notRenderable||!super.contains(t,e))return!1;if(this.delegatePickingToChildren){let h=!1;for(let d=this._children.length-1;d>=0;d--){const f=this._children[d];if(f.isEnabled&&f.isHitTestVisible&&f.isVisible&&!f.notRenderable&&f.contains(t,e)){h=!0;break}}if(!h)return!1}return this._processObservables(s,t,e,i,o,r,a,l),!0}_onPointerEnter(t,e){return super._onPointerEnter(t,e)?(this.isReadOnly||(this._isActive?this.pointerEnterActiveAnimation&&this.pointerEnterActiveAnimation():this.pointerEnterInactiveAnimation&&this.pointerEnterInactiveAnimation()),!0):!1}_onPointerOut(t,e,i=!1){this.isReadOnly||(this._isActive?this.pointerOutActiveAnimation&&this.pointerOutActiveAnimation():this.pointerOutInactiveAnimation&&this.pointerOutInactiveAnimation()),super._onPointerOut(t,e,i)}_onPointerDown(t,e,i,s,o){return super._onPointerDown(t,e,i,s,o)?(this.isReadOnly||(this._isActive?this.pointerDownActiveAnimation&&this.pointerDownActiveAnimation():this.pointerDownInactiveAnimation&&this.pointerDownInactiveAnimation()),!0):!1}_onPointerUp(t,e,i,s,o,r){this.isReadOnly||(this._isActive?this.pointerUpActiveAnimation&&this.pointerUpActiveAnimation():this.pointerUpInactiveAnimation&&this.pointerUpInactiveAnimation()),super._onPointerUp(t,e,i,s,o,r)}}N("BABYLON.GUI.ToggleButton",Ns);class sr{}class wi extends Tt{constructor(){super(...arguments),this.onKeyPressObservable=new B,this.defaultButtonWidth="40px",this.defaultButtonHeight="40px",this.defaultButtonPaddingLeft="2px",this.defaultButtonPaddingRight="2px",this.defaultButtonPaddingTop="2px",this.defaultButtonPaddingBottom="2px",this.defaultButtonColor="#DDD",this.defaultButtonBackground="#070707",this.shiftButtonColor="#7799FF",this.selectedShiftThickness=1,this.shiftState=0,this._currentlyConnectedInputText=null,this._connectedInputTexts=[],this._onKeyPressObserver=null}_getTypeName(){return"VirtualKeyboard"}_createKey(t,e){const i=zt.CreateSimpleButton(t,t);return i.width=e&&e.width?e.width:this.defaultButtonWidth,i.height=e&&e.height?e.height:this.defaultButtonHeight,i.color=e&&e.color?e.color:this.defaultButtonColor,i.background=e&&e.background?e.background:this.defaultButtonBackground,i.paddingLeft=e&&e.paddingLeft?e.paddingLeft:this.defaultButtonPaddingLeft,i.paddingRight=e&&e.paddingRight?e.paddingRight:this.defaultButtonPaddingRight,i.paddingTop=e&&e.paddingTop?e.paddingTop:this.defaultButtonPaddingTop,i.paddingBottom=e&&e.paddingBottom?e.paddingBottom:this.defaultButtonPaddingBottom,i.thickness=0,i.isFocusInvisible=!0,i.shadowColor=this.shadowColor,i.shadowBlur=this.shadowBlur,i.shadowOffsetX=this.shadowOffsetX,i.shadowOffsetY=this.shadowOffsetY,i.onPointerUpObservable.add(()=>{this.onKeyPressObservable.notifyObservers(t)}),i}addKeysRow(t,e){const i=new Tt;i.isVertical=!1,i.isFocusInvisible=!0;let s=null;for(let o=0;o<t.length;o++){let r=null;e&&e.length===t.length&&(r=e[o]);const a=this._createKey(t[o],r);(!s||a.heightInPixels>s.heightInPixels)&&(s=a),i.addControl(a)}i.height=s?s.height:this.defaultButtonHeight,this.addControl(i)}applyShiftState(t){if(this.children)for(let e=0;e<this.children.length;e++){const i=this.children[e];if(!i||!i.children)continue;const s=i;for(let o=0;o<s.children.length;o++){const r=s.children[o];if(!r||!r.children[0])continue;const a=r.children[0];a.text==="⇧"&&(r.color=t?this.shiftButtonColor:this.defaultButtonColor,r.thickness=t>1?this.selectedShiftThickness:0),a.text=t>0?a.text.toUpperCase():a.text.toLowerCase()}}}get connectedInputText(){return this._currentlyConnectedInputText}connect(t){if(this._connectedInputTexts.some(o=>o.input===t))return;this._onKeyPressObserver===null&&(this._onKeyPressObserver=this.onKeyPressObservable.add(o=>{if(this._currentlyConnectedInputText){switch(this._currentlyConnectedInputText._host.focusedControl=this._currentlyConnectedInputText,o){case"⇧":this.shiftState++,this.shiftState>2&&(this.shiftState=0),this.applyShiftState(this.shiftState);return;case"←":this._currentlyConnectedInputText instanceof Le?this._currentlyConnectedInputText.alternativeProcessKey("Backspace"):this._currentlyConnectedInputText.processKey(8);return;case"↵":this._currentlyConnectedInputText instanceof Le?this._currentlyConnectedInputText.alternativeProcessKey("Enter"):this._currentlyConnectedInputText.processKey(13);return}this._currentlyConnectedInputText instanceof Le?this._currentlyConnectedInputText.alternativeProcessKey("",this.shiftState?o.toUpperCase():o):this._currentlyConnectedInputText.processKey(-1,this.shiftState?o.toUpperCase():o),this.shiftState===1&&(this.shiftState=0,this.applyShiftState(this.shiftState))}})),this.isVisible=!1,this._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=this;const i=t.onFocusObservable.add(()=>{this._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=this,this.isVisible=!0}),s=t.onBlurObservable.add(()=>{t._connectedVirtualKeyboard=null,this._currentlyConnectedInputText=null,this.isVisible=!1});this._connectedInputTexts.push({input:t,onBlurObserver:s,onFocusObserver:i})}disconnect(t){if(t){const e=this._connectedInputTexts.filter(i=>i.input===t);e.length===1&&(this._removeConnectedInputObservables(e[0]),this._connectedInputTexts=this._connectedInputTexts.filter(i=>i.input!==t),this._currentlyConnectedInputText===t&&(this._currentlyConnectedInputText=null))}else this._connectedInputTexts.forEach(e=>{this._removeConnectedInputObservables(e)}),this._connectedInputTexts.length=0;this._connectedInputTexts.length===0&&(this._currentlyConnectedInputText=null,this.onKeyPressObservable.remove(this._onKeyPressObserver),this._onKeyPressObserver=null)}_removeConnectedInputObservables(t){t.input._connectedVirtualKeyboard=null,t.input.onFocusObservable.remove(t.onFocusObserver),t.input.onBlurObservable.remove(t.onBlurObserver)}dispose(){super.dispose(),this.disconnect()}static CreateDefaultLayout(t){const e=new wi(t);return e.addKeysRow(["1","2","3","4","5","6","7","8","9","0","←"]),e.addKeysRow(["q","w","e","r","t","y","u","i","o","p"]),e.addKeysRow(["a","s","d","f","g","h","j","k","l",";","'","↵"]),e.addKeysRow(["⇧","z","x","c","v","b","n","m",",",".","/"]),e.addKeysRow([" "],[{width:"200px"}]),e}_parseFromContent(t,e){super._parseFromContent(t,e);for(const i of this.children)if(i.getClassName()==="StackPanel"){const s=i;for(const o of s.children)o.getClassName()==="Button"&&o.name&&o.onPointerUpObservable.add(()=>{this.onKeyPressObservable.notifyObservers(o.name)})}}}N("BABYLON.GUI.VirtualKeyboard",wi);class kt extends u{get displayMinorLines(){return this._displayMinorLines}set displayMinorLines(t){this._displayMinorLines!==t&&(this._displayMinorLines=t,this._markAsDirty())}get displayMajorLines(){return this._displayMajorLines}set displayMajorLines(t){this._displayMajorLines!==t&&(this._displayMajorLines=t,this._markAsDirty())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this._markAsDirty())}get cellWidth(){return this._cellWidth}set cellWidth(t){this._cellWidth=t,this._markAsDirty()}get cellHeight(){return this._cellHeight}set cellHeight(t){this._cellHeight=t,this._markAsDirty()}get minorLineTickness(){return this._minorLineTickness}set minorLineTickness(t){this._minorLineTickness=t,this._markAsDirty()}get minorLineColor(){return this._minorLineColor}set minorLineColor(t){this._minorLineColor=t,this._markAsDirty()}get majorLineTickness(){return this._majorLineTickness}set majorLineTickness(t){this._majorLineTickness=t,this._markAsDirty()}get majorLineColor(){return this._majorLineColor}set majorLineColor(t){this._majorLineColor=t,this._markAsDirty()}get majorLineFrequency(){return this._majorLineFrequency}set majorLineFrequency(t){this._majorLineFrequency=t,this._markAsDirty()}constructor(t){super(t),this.name=t,this._cellWidth=20,this._cellHeight=20,this._minorLineTickness=1,this._minorLineColor="DarkGray",this._majorLineTickness=2,this._majorLineColor="White",this._majorLineFrequency=5,this._background="Black",this._displayMajorLines=!0,this._displayMinorLines=!0}_draw(t){if(t.save(),this._applyStates(t),this._isEnabled){this._background&&(t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height));const e=this._currentMeasure.width/this._cellWidth,i=this._currentMeasure.height/this._cellHeight,s=this._currentMeasure.left+this._currentMeasure.width/2,o=this._currentMeasure.top+this._currentMeasure.height/2;if(this._displayMinorLines){t.strokeStyle=this._minorLineColor,t.lineWidth=this._minorLineTickness;for(let r=-e/2+1;r<e/2;r++){const a=s+r*this.cellWidth;t.beginPath(),t.moveTo(a,this._currentMeasure.top),t.lineTo(a,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(let r=-i/2+1;r<i/2;r++){const a=o+r*this.cellHeight;t.beginPath(),t.moveTo(this._currentMeasure.left,a),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,a),t.stroke()}}if(this._displayMajorLines){t.strokeStyle=this._majorLineColor,t.lineWidth=this._majorLineTickness;for(let r=-e/2+this._majorLineFrequency;r<e/2;r+=this._majorLineFrequency){const a=s+r*this.cellWidth;t.beginPath(),t.moveTo(a,this._currentMeasure.top),t.lineTo(a,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(let r=-i/2+this._majorLineFrequency;r<i/2;r+=this._majorLineFrequency){const a=o+r*this.cellHeight;t.moveTo(this._currentMeasure.left,a),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,a),t.closePath(),t.stroke()}}}t.restore()}_getTypeName(){return"DisplayGrid"}}n([_()],kt.prototype,"displayMinorLines",null);n([_()],kt.prototype,"displayMajorLines",null);n([_()],kt.prototype,"background",null);n([_()],kt.prototype,"cellWidth",null);n([_()],kt.prototype,"cellHeight",null);n([_()],kt.prototype,"minorLineTickness",null);n([_()],kt.prototype,"minorLineColor",null);n([_()],kt.prototype,"majorLineTickness",null);n([_()],kt.prototype,"majorLineColor",null);n([_()],kt.prototype,"majorLineFrequency",null);N("BABYLON.GUI.DisplayGrid",kt);class ts extends Ot{get displayThumb(){return this._displayThumb&&this.thumbImage!=null}set displayThumb(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())}get backgroundImage(){return this._backgroundImage}set backgroundImage(t){this._backgroundImage!==t&&(this._backgroundImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(()=>this._markAsDirty()),this._markAsDirty())}get valueBarImage(){return this._valueBarImage}set valueBarImage(t){this._valueBarImage!==t&&(this._valueBarImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(()=>this._markAsDirty()),this._markAsDirty())}get thumbImage(){return this._thumbImage}set thumbImage(t){this._thumbImage!==t&&(this._thumbImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(()=>this._markAsDirty()),this._markAsDirty())}constructor(t){super(t),this.name=t,this._tempMeasure=new et(0,0,0,0)}_getTypeName(){return"ImageBasedSlider"}_draw(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");const e=this._getThumbPosition(),i=this._renderLeft,s=this._renderTop,o=this._renderWidth,r=this._renderHeight;this._backgroundImage&&(this._tempMeasure.copyFromFloats(i,s,o,r),this.isThumbClamped&&this.displayThumb&&(this.isVertical?this._tempMeasure.height+=this._effectiveThumbThickness:this._tempMeasure.width+=this._effectiveThumbThickness),this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure),this._backgroundImage._draw(t)),this._valueBarImage&&(this.isVertical?this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(i,s+e,o,r-e+this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(i,s+e,o,r-e):this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(i,s,e+this._effectiveThumbThickness/2,r):this._tempMeasure.copyFromFloats(i,s,e,r),this._valueBarImage._currentMeasure.copyFrom(this._tempMeasure),this._valueBarImage._draw(t)),this.displayThumb&&(this.isVertical?this._tempMeasure.copyFromFloats(i-this._effectiveBarOffset,this._currentMeasure.top+e,this._currentMeasure.width,this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(this._currentMeasure.left+e,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),this._thumbImage._currentMeasure.copyFrom(this._tempMeasure),this._thumbImage._draw(t)),t.restore()}serialize(t){super.serialize(t);const e={},i={},s={};this.backgroundImage.serialize(e),this.thumbImage.serialize(i),this.valueBarImage.serialize(s),t.backgroundImage=e,t.thumbImage=i,t.valueBarImage=s}_parseFromContent(t,e){super._parseFromContent(t,e),this.backgroundImage=T.Parse(t.backgroundImage,e),this.thumbImage=T.Parse(t.thumbImage,e),this.valueBarImage=T.Parse(t.valueBarImage,e)}}n([_()],ts.prototype,"displayThumb",null);N("BABYLON.GUI.ImageBasedSlider",ts);class As{constructor(t){this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new I(18,I.UNITMODE_PIXEL,!1),this.onChangedObservable=new B,this._host=t}get fontSize(){return this._fontSize.toString(this._host)}set fontSize(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&this.onChangedObservable.notifyObservers(this)}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily!==t&&(this._fontFamily=t,this.onChangedObservable.notifyObservers(this))}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle!==t&&(this._fontStyle=t,this.onChangedObservable.notifyObservers(this))}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.onChangedObservable.notifyObservers(this))}dispose(){this.onChangedObservable.clear()}}class lt extends Ti{get numLayoutCalls(){return this._numLayoutCalls}get numRenderCalls(){return this._numRenderCalls}get renderScale(){return this._renderScale}set renderScale(t){t!==this._renderScale&&(this._renderScale=t,this._onResize())}get background(){return this._background}set background(t){this._background!==t&&(this._background=t,this.markAsDirty())}get idealWidth(){return this._idealWidth}set idealWidth(t){this._idealWidth!==t&&(this._idealWidth=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())}get idealHeight(){return this._idealHeight}set idealHeight(t){this._idealHeight!==t&&(this._idealHeight=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())}get useSmallestIdeal(){return this._useSmallestIdeal}set useSmallestIdeal(t){this._useSmallestIdeal!==t&&(this._useSmallestIdeal=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())}get renderAtIdealSize(){return this._renderAtIdealSize}set renderAtIdealSize(t){this._renderAtIdealSize!==t&&(this._renderAtIdealSize=t,this._onResize())}get idealRatio(){let t=0,e=0;return this._idealWidth&&(t=this.getSize().width/this._idealWidth),this._idealHeight&&(e=this.getSize().height/this._idealHeight),this._useSmallestIdeal&&this._idealWidth&&this._idealHeight?window.innerWidth<window.innerHeight?t:e:this._idealWidth?t:this._idealHeight?e:1}get layer(){return this._layerToDispose}get rootContainer(){return this._rootContainer}getChildren(){return[this._rootContainer]}getDescendants(t,e){return this._rootContainer.getDescendants(t,e)}getControlsByType(t){return this._rootContainer.getDescendants(!1,e=>e.typeName===t)}getControlByName(t){return this._getControlByKey("name",t)}_getControlByKey(t,e){return this._rootContainer.getDescendants().find(i=>i[t]===e)||null}get focusedControl(){return this._focusedControl}set focusedControl(t){this._focusedControl!=t&&(this._focusedControl&&this._focusedControl.onBlur(),t&&t.onFocus(),this._focusedControl=t)}get isForeground(){return this.layer?!this.layer.isBackground:!0}set isForeground(t){this.layer&&this.layer.isBackground!==!t&&(this.layer.isBackground=!t)}get clipboardData(){return this._clipboardData}set clipboardData(t){this._clipboardData=t}constructor(t,e=0,i=0,s,o=!1,r=S.NEAREST_SAMPLINGMODE,a=!0){super(t,{width:e,height:i},s,o,r,Lt.TEXTUREFORMAT_RGBA,a),this.onGuiReadyObservable=new B,this._isDirty=!1,this._rootContainer=new ut("root"),this._lastControlOver={},this._lastControlDown={},this._capturingControl={},this._linkedControls=new Array,this._isFullscreen=!1,this._fullscreenViewport=new ve(0,0,1,1),this._idealWidth=0,this._idealHeight=0,this._useSmallestIdeal=!1,this._renderAtIdealSize=!1,this._blockNextFocusCheck=!1,this._renderScale=1,this._cursorChanged=!1,this._defaultMousePointerId=0,this._rootChildrenHaveChanged=!1,this._capturedPointerIds=new Set,this._numLayoutCalls=0,this._numRenderCalls=0,this._clipboardData="",this.onClipboardObservable=new B,this.onControlPickedObservable=new B,this.onBeginLayoutObservable=new B,this.onEndLayoutObservable=new B,this.onBeginRenderObservable=new B,this.onEndRenderObservable=new B,this.premulAlpha=!1,this.applyYInversionOnUpdate=!0,this.checkPointerEveryFrame=!1,this._useInvalidateRectOptimization=!0,this._invalidatedRectangle=null,this._clearMeasure=new et(0,0,0,0),this._onClipboardCopy=l=>{const h=l,d=new bi(Me.COPY,h);this.onClipboardObservable.notifyObservers(d),h.preventDefault()},this._onClipboardCut=l=>{const h=l,d=new bi(Me.CUT,h);this.onClipboardObservable.notifyObservers(d),h.preventDefault()},this._onClipboardPaste=l=>{const h=l,d=new bi(Me.PASTE,h);this.onClipboardObservable.notifyObservers(d),h.preventDefault()},this.parseContent=this.parseSerializedObject,s=this.getScene(),!(!s||!this._texture)&&(this.applyYInversionOnUpdate=a,this._rootElement=s.getEngine().getInputElement(),this._renderObserver=s.onBeforeCameraRenderObservable.add(l=>this._checkUpdate(l)),this._controlAddedObserver=this._rootContainer.onControlAddedObservable.add(l=>{l&&(this._rootChildrenHaveChanged=!0)}),this._controlRemovedObserver=this._rootContainer.onControlRemovedObservable.add(l=>{l&&(this._rootChildrenHaveChanged=!0)}),this._preKeyboardObserver=s.onPreKeyboardObservable.add(l=>{this._focusedControl&&(l.type===xs.KEYDOWN&&this._focusedControl.processKeyboard(l.event),l.skipOnPointerObservable=!0)}),this._rootContainer._link(this),this.hasAlpha=!0,(!e||!i)&&(this._resizeObserver=s.getEngine().onResizeObservable.add(()=>this._onResize()),this._onResize()),this._texture.isReady=!0)}getClassName(){return"AdvancedDynamicTexture"}executeOnAllControls(t,e){e||(e=this._rootContainer),t(e);for(const i of e.children){if(i.children){this.executeOnAllControls(t,i);continue}t(i)}}get useInvalidateRectOptimization(){return this._useInvalidateRectOptimization}set useInvalidateRectOptimization(t){this._useInvalidateRectOptimization=t}invalidateRect(t,e,i,s){if(this._useInvalidateRectOptimization)if(!this._invalidatedRectangle)this._invalidatedRectangle=new et(t,e,i-t+1,s-e+1);else{const o=Math.ceil(Math.max(this._invalidatedRectangle.left+this._invalidatedRectangle.width-1,i)),r=Math.ceil(Math.max(this._invalidatedRectangle.top+this._invalidatedRectangle.height-1,s));this._invalidatedRectangle.left=Math.floor(Math.min(this._invalidatedRectangle.left,t)),this._invalidatedRectangle.top=Math.floor(Math.min(this._invalidatedRectangle.top,e)),this._invalidatedRectangle.width=o-this._invalidatedRectangle.left+1,this._invalidatedRectangle.height=r-this._invalidatedRectangle.top+1}}markAsDirty(){this._isDirty=!0}createStyle(){return new As(this)}addControl(t){return this._rootContainer.addControl(t),this}removeControl(t){return this._rootContainer.removeControl(t),this}moveToNonOverlappedPosition(t,e=1,i=1){let s;if(Array.isArray(t))s=t;else{const o=this.getDescendants(!0);s=t===void 0?o.filter(r=>r.overlapGroup!==void 0):o.filter(r=>r.overlapGroup===t)}s.forEach(o=>{var r;let a=z.Zero();const l=new z(o.centerX,o.centerY);s.forEach(h=>{if(o!==h&&lt._Overlaps(o,h)){const d=l.subtract(new z(h.centerX,h.centerY)),f=d.length();f>0&&(a=a.add(d.normalize().scale(i/f)))}}),a.length()>0&&(a=a.normalize().scale(e*((r=o.overlapDeltaMultiplier)!==null&&r!==void 0?r:1)),o.linkOffsetXInPixels+=a.x,o.linkOffsetYInPixels+=a.y)})}dispose(){const t=this.getScene();t&&(this._rootElement=null,t.onBeforeCameraRenderObservable.remove(this._renderObserver),this._resizeObserver&&t.getEngine().onResizeObservable.remove(this._resizeObserver),this._prePointerObserver&&t.onPrePointerObservable.remove(this._prePointerObserver),this._sceneRenderObserver&&t.onBeforeRenderObservable.remove(this._sceneRenderObserver),this._pointerObserver&&t.onPointerObservable.remove(this._pointerObserver),this._preKeyboardObserver&&t.onPreKeyboardObservable.remove(this._preKeyboardObserver),this._canvasPointerOutObserver&&t.getEngine().onCanvasPointerOutObservable.remove(this._canvasPointerOutObserver),this._canvasBlurObserver&&t.getEngine().onCanvasBlurObservable.remove(this._canvasBlurObserver),this._controlAddedObserver&&this._rootContainer.onControlAddedObservable.remove(this._controlAddedObserver),this._controlRemovedObserver&&this._rootContainer.onControlRemovedObservable.remove(this._controlRemovedObserver),this._layerToDispose&&(this._layerToDispose.texture=null,this._layerToDispose.dispose(),this._layerToDispose=null),this._rootContainer.dispose(),this.onClipboardObservable.clear(),this.onControlPickedObservable.clear(),this.onBeginRenderObservable.clear(),this.onEndRenderObservable.clear(),this.onBeginLayoutObservable.clear(),this.onEndLayoutObservable.clear(),this.onGuiReadyObservable.clear(),super.dispose())}_onResize(){const t=this.getScene();if(!t)return;const e=t.getEngine(),i=this.getSize();let s=e.getRenderWidth()*this._renderScale,o=e.getRenderHeight()*this._renderScale;this._renderAtIdealSize&&(this._idealWidth?(o=o*this._idealWidth/s,s=this._idealWidth):this._idealHeight&&(s=s*this._idealHeight/o,o=this._idealHeight)),(i.width!==s||i.height!==o)&&(this.scaleTo(s,o),this.markAsDirty(),(this._idealWidth||this._idealHeight)&&this._rootContainer._markAllAsDirty()),this.invalidateRect(0,0,i.width-1,i.height-1)}_getGlobalViewport(){const t=this.getSize(),e=this._fullscreenViewport.toGlobal(t.width,t.height),i=Math.round(e.width*(1/this.rootContainer.scaleX)),s=Math.round(e.height*(1/this.rootContainer.scaleY));return e.x+=(e.width-i)/2,e.y+=(e.height-s)/2,e.width=i,e.height=s,e}getProjectedPosition(t,e){const i=this.getProjectedPositionWithZ(t,e);return new z(i.x,i.y)}getProjectedPositionWithZ(t,e){const i=this.getScene();if(!i)return c.Zero();const s=this._getGlobalViewport(),o=c.Project(t,e,i.getTransformMatrix(),s);return new c(o.x,o.y,o.z)}_checkUpdate(t,e){if(!(this._layerToDispose&&!(t.layerMask&this._layerToDispose.layerMask))){if(this._isFullscreen&&this._linkedControls.length){const i=this.getScene();if(!i)return;const s=this._getGlobalViewport();for(const o of this._linkedControls){if(!o.isVisible)continue;const r=o._linkedMesh;if(!r||r.isDisposed()){it.SetImmediate(()=>{o.linkWithMesh(null)});continue}const a=r.getBoundingInfo?r.getBoundingInfo().boundingSphere.center:c.ZeroReadOnly,l=c.Project(a,r.getWorldMatrix(),i.getTransformMatrix(),s);if(l.z<0||l.z>1){o.notRenderable=!0;continue}o.notRenderable=!1,this.useInvalidateRectOptimization&&o.invalidateRect(),o._moveToProjectedPosition(l)}}!this._isDirty&&!this._rootContainer.isDirty||(this._isDirty=!1,this._render(e),e||this.update(this.applyYInversionOnUpdate,this.premulAlpha,lt.AllowGPUOptimizations))}}_render(t){var e;const i=this.getSize(),s=i.width,o=i.height,r=this.getContext();if(r.font="18px Arial",r.strokeStyle="white",this.onGuiReadyObservable.hasObservers()&&this._checkGuiIsReady(),this._rootChildrenHaveChanged){const l=(e=this.getScene())===null||e===void 0?void 0:e.activeCamera;l&&(this._rootChildrenHaveChanged=!1,this._checkUpdate(l,!0))}this.onBeginLayoutObservable.notifyObservers(this);const a=new et(0,0,s,o);this._numLayoutCalls=0,this._rootContainer._layout(a,r),this.onEndLayoutObservable.notifyObservers(this),this._isDirty=!1,!t&&(this._invalidatedRectangle?this._clearMeasure.copyFrom(this._invalidatedRectangle):this._clearMeasure.copyFromFloats(0,0,s,o),r.clearRect(this._clearMeasure.left,this._clearMeasure.top,this._clearMeasure.width,this._clearMeasure.height),this._background&&(r.save(),r.fillStyle=this._background,r.fillRect(this._clearMeasure.left,this._clearMeasure.top,this._clearMeasure.width,this._clearMeasure.height),r.restore()),this.onBeginRenderObservable.notifyObservers(this),this._numRenderCalls=0,this._rootContainer._render(r,this._invalidatedRectangle),this.onEndRenderObservable.notifyObservers(this),this._invalidatedRectangle=null)}_changeCursor(t){this._rootElement&&(this._rootElement.style.cursor=t,this._cursorChanged=!0)}_registerLastControlDown(t,e){this._lastControlDown[e]=t,this.onControlPickedObservable.notifyObservers(t)}_doPicking(t,e,i,s,o,r,a,l){const h=this.getScene();if(!h)return;const d=h.getEngine(),f=this.getSize();if(this._isFullscreen){const g=h.cameraToUseForPointers||h.activeCamera;if(!g)return;const y=g.viewport;t=t*(f.width/(d.getRenderWidth()*y.width)),e=e*(f.height/(d.getRenderHeight()*y.height))}if(this._capturingControl[o]){this._capturingControl[o].isPointerBlocker&&(this._shouldBlockPointer=!0),this._capturingControl[o]._processObservables(s,t,e,i,o,r);return}this._cursorChanged=!1,this._rootContainer._processPicking(t,e,i,s,o,r,a,l)||(h.doNotHandleCursors||this._changeCursor(""),s===L.POINTERMOVE&&this._lastControlOver[o]&&(this._lastControlOver[o]._onPointerOut(this._lastControlOver[o],i),delete this._lastControlOver[o])),!this._cursorChanged&&!h.doNotHandleCursors&&this._changeCursor(""),this._manageFocus()}_cleanControlAfterRemovalFromList(t,e){for(const i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;t[i]===e&&delete t[i]}}_cleanControlAfterRemoval(t){this._cleanControlAfterRemovalFromList(this._lastControlDown,t),this._cleanControlAfterRemovalFromList(this._lastControlOver,t)}pick(t,e,i=null){this._isFullscreen&&this._scene&&this._translateToPicking(this._scene,new ve(0,0,0,0),i,t,e)}_translateToPicking(t,e,i,s=t.pointerX,o=t.pointerY){const r=t.cameraToUseForPointers||t.activeCamera,a=t.getEngine(),l=t.cameraToUseForPointers;if(!r)e.x=0,e.y=0,e.width=a.getRenderWidth(),e.height=a.getRenderHeight();else if(r.rigCameras.length){const f=new ve(0,0,1,1);r.rigCameras.forEach(g=>{g.viewport.toGlobalToRef(a.getRenderWidth(),a.getRenderHeight(),f);const y=s/a.getHardwareScalingLevel()-f.x,V=o/a.getHardwareScalingLevel()-(a.getRenderHeight()-f.y-f.height);y<0||V<0||s>f.width||o>f.height||(t.cameraToUseForPointers=g,e.x=f.x,e.y=f.y,e.width=f.width,e.height=f.height)})}else r.viewport.toGlobalToRef(a.getRenderWidth(),a.getRenderHeight(),e);const h=s/a.getHardwareScalingLevel()-e.x,d=o/a.getHardwareScalingLevel()-(a.getRenderHeight()-e.y-e.height);if(this._shouldBlockPointer=!1,i){const f=i.event.pointerId||this._defaultMousePointerId;this._doPicking(h,d,i,i.type,f,i.event.button,i.event.deltaX,i.event.deltaY),(this._shouldBlockPointer||this._capturingControl[f])&&(i.skipOnPointerObservable=!0)}else this._doPicking(h,d,null,L.POINTERMOVE,this._defaultMousePointerId,0);t.cameraToUseForPointers=l}attach(){const t=this.getScene();if(!t)return;const e=new ve(0,0,0,0);this._prePointerObserver=t.onPrePointerObservable.add(i=>{if(!(t.isPointerCaptured(i.event.pointerId)&&i.type===L.POINTERUP&&!this._capturedPointerIds.has(i.event.pointerId))&&!(i.type!==L.POINTERMOVE&&i.type!==L.POINTERUP&&i.type!==L.POINTERDOWN&&i.type!==L.POINTERWHEEL)){if(i.type===L.POINTERMOVE){if(t.isPointerCaptured(i.event.pointerId))return;i.event.pointerId&&(this._defaultMousePointerId=i.event.pointerId)}this._translateToPicking(t,e,i)}}),this._attachPickingToSceneRender(t,()=>this._translateToPicking(t,e,null),!1),this._attachToOnPointerOut(t),this._attachToOnBlur(t)}registerClipboardEvents(){self.addEventListener("copy",this._onClipboardCopy,!1),self.addEventListener("cut",this._onClipboardCut,!1),self.addEventListener("paste",this._onClipboardPaste,!1)}unRegisterClipboardEvents(){self.removeEventListener("copy",this._onClipboardCopy),self.removeEventListener("cut",this._onClipboardCut),self.removeEventListener("paste",this._onClipboardPaste)}_transformUvs(t){const e=this.getTextureMatrix();let i;if(e.isIdentityAs3x2())i=t;else{const s=E.Matrix[0];e.getRowToRef(0,E.Vector4[0]),e.getRowToRef(1,E.Vector4[1]),e.getRowToRef(2,E.Vector4[2]);const o=E.Vector4[0],r=E.Vector4[1],a=E.Vector4[2];s.setRowFromFloats(0,o.x,o.y,0,0),s.setRowFromFloats(1,r.x,r.y,0,0),s.setRowFromFloats(2,0,0,1,0),s.setRowFromFloats(3,a.x,a.y,0,1),i=E.Vector2[0],z.TransformToRef(t,s,i)}if((this.wrapU===S.WRAP_ADDRESSMODE||this.wrapU===S.MIRROR_ADDRESSMODE)&&i.x>1){let s=i.x-Math.trunc(i.x);this.wrapU===S.MIRROR_ADDRESSMODE&&Math.trunc(i.x)%2===1&&(s=1-s),i.x=s}if((this.wrapV===S.WRAP_ADDRESSMODE||this.wrapV===S.MIRROR_ADDRESSMODE)&&i.y>1){let s=i.y-Math.trunc(i.y);this.wrapV===S.MIRROR_ADDRESSMODE&&Math.trunc(i.x)%2===1&&(s=1-s),i.y=s}return i}attachToMesh(t,e=!0){const i=this.getScene();i&&(this._pointerObserver&&i.onPointerObservable.remove(this._pointerObserver),this._pointerObserver=i.onPointerObservable.add(s=>{if(s.type!==L.POINTERMOVE&&s.type!==L.POINTERUP&&s.type!==L.POINTERDOWN&&s.type!==L.POINTERWHEEL)return;s.type===L.POINTERMOVE&&s.event.pointerId&&(this._defaultMousePointerId=s.event.pointerId);const o=s.event.pointerId||this._defaultMousePointerId;if(s.pickInfo&&s.pickInfo.hit&&s.pickInfo.pickedMesh===t){let r=s.pickInfo.getTextureCoordinates();if(r){r=this._transformUvs(r);const a=this.getSize();this._doPicking(r.x*a.width,(this.applyYInversionOnUpdate?1-r.y:r.y)*a.height,s,s.type,o,s.event.button,s.event.deltaX,s.event.deltaY)}}else if(s.type===L.POINTERUP){if(this._lastControlDown[o]&&this._lastControlDown[o]._forcePointerUp(o),delete this._lastControlDown[o],this.focusedControl){const r=this.focusedControl.keepsFocusWith();let a=!0;if(r)for(const l of r){if(this===l._host)continue;const h=l._host;if(h._lastControlOver[o]&&h._lastControlOver[o].isAscendant(l)){a=!1;break}}a&&(this.focusedControl=null)}}else s.type===L.POINTERMOVE&&(this._lastControlOver[o]&&this._lastControlOver[o]._onPointerOut(this._lastControlOver[o],s,!0),delete this._lastControlOver[o])}),t.enablePointerMoveEvents=e,this._attachPickingToSceneRender(i,()=>{const s=this._defaultMousePointerId,o=i==null?void 0:i.pick(i.pointerX,i.pointerY);if(o&&o.hit&&o.pickedMesh===t){let r=o.getTextureCoordinates();if(r){r=this._transformUvs(r);const a=this.getSize();this._doPicking(r.x*a.width,(this.applyYInversionOnUpdate?1-r.y:r.y)*a.height,null,L.POINTERMOVE,s,0)}}else this._lastControlOver[s]&&this._lastControlOver[s]._onPointerOut(this._lastControlOver[s],null,!0),delete this._lastControlOver[s]},!0),this._attachToOnPointerOut(i),this._attachToOnBlur(i))}moveFocusToControl(t){this.focusedControl=t,this._lastPickedControl=t,this._blockNextFocusCheck=!0}_manageFocus(){if(this._blockNextFocusCheck){this._blockNextFocusCheck=!1,this._lastPickedControl=this._focusedControl;return}if(this._focusedControl&&this._focusedControl!==this._lastPickedControl){if(this._lastPickedControl.isFocusInvisible)return;this.focusedControl=null}}_attachPickingToSceneRender(t,e,i){this._sceneRenderObserver=t.onBeforeRenderObservable.add(()=>{this.checkPointerEveryFrame&&(this._linkedControls.length>0||i)&&e()})}_attachToOnPointerOut(t){this._canvasPointerOutObserver=t.getEngine().onCanvasPointerOutObservable.add(e=>{this._lastControlOver[e.pointerId]&&this._lastControlOver[e.pointerId]._onPointerOut(this._lastControlOver[e.pointerId],null),delete this._lastControlOver[e.pointerId],this._lastControlDown[e.pointerId]&&this._lastControlDown[e.pointerId]!==this._capturingControl[e.pointerId]&&(this._lastControlDown[e.pointerId]._forcePointerUp(e.pointerId),delete this._lastControlDown[e.pointerId])})}_attachToOnBlur(t){this._canvasBlurObserver=t.getEngine().onCanvasBlurObservable.add(()=>{Object.entries(this._lastControlDown).forEach(([,e])=>{e._onCanvasBlur()}),this.focusedControl=null,this._lastControlDown={}})}serializeContent(){const t=this.getSize(),e={root:{},width:t.width,height:t.height};return this._rootContainer.serialize(e.root),e}parseSerializedObject(t,e){if(this._rootContainer=u.Parse(t.root,this),e){const i=t.width,s=t.height;typeof i=="number"&&typeof s=="number"&&i>=0&&s>=0?this.scaleTo(i,s):this.scaleTo(1920,1080)}}clone(t){const e=this.getScene();if(!e)return this;const i=this.getSize(),s=this.serializeContent(),o=new lt(t??"Clone of "+this.name,i.width,i.height,e,!this.noMipmap,this.samplingMode);return o.parseSerializedObject(s),o}static async ParseFromSnippetAsync(t,e,i){const s=i??lt.CreateFullscreenUI("ADT from snippet");if(t==="_BLANK")return s;const o=await lt._LoadURLContentAsync(lt.SnippetUrl+"/"+t.replace(/#/g,"/"),!0);return s.parseSerializedObject(o,e),s}parseFromSnippetAsync(t,e){return lt.ParseFromSnippetAsync(t,e,this)}static async ParseFromFileAsync(t,e,i){const s=i??lt.CreateFullscreenUI("ADT from URL"),o=await lt._LoadURLContentAsync(t);return s.parseSerializedObject(o,e),s}parseFromURLAsync(t,e){return lt.ParseFromFileAsync(t,e,this)}static _LoadURLContentAsync(t,e=!1){return t===""?Promise.reject("No URL provided"):new Promise((i,s)=>{const o=new Hi;o.addEventListener("readystatechange",()=>{if(o.readyState==4)if(o.status==200){let r;if(e){const l=JSON.parse(JSON.parse(o.responseText).jsonPayload);r=l.encodedGui?new TextDecoder("utf-8").decode(ys(l.encodedGui)):l.gui}else r=o.responseText;const a=JSON.parse(r);i(a)}else s("Unable to load")}),o.open("GET",t),o.send()})}static _Overlaps(t,e){return!(t.centerX>e.centerX+e.widthInPixels||t.centerX+t.widthInPixels<e.centerX||t.centerY+t.heightInPixels<e.centerY||t.centerY>e.centerY+e.heightInPixels)}static CreateForMesh(t,e=1024,i=1024,s=!0,o=!1,r,a=this._CreateMaterial){const l=Is(),h=new lt(`AdvancedDynamicTexture for ${t.name} [${l}]`,e,i,t.getScene(),!0,S.TRILINEAR_SAMPLINGMODE,r);return a(t,l,h,o),h.attachToMesh(t,s),h}static _CreateMaterial(t,e,i,s){const o=Gi("BABYLON.StandardMaterial");if(!o)throw"StandardMaterial needs to be imported before as it contains a side-effect required by your code.";const r=new o(`AdvancedDynamicTextureMaterial for ${t.name} [${e}]`,t.getScene());r.backFaceCulling=!1,r.diffuseColor=w.Black(),r.specularColor=w.Black(),s?(r.diffuseTexture=i,r.emissiveTexture=i,i.hasAlpha=!0):(r.emissiveTexture=i,r.opacityTexture=i),t.material=r}static CreateForMeshTexture(t,e=1024,i=1024,s=!0,o){const r=new lt(t.name+" AdvancedDynamicTexture",e,i,t.getScene(),!0,S.TRILINEAR_SAMPLINGMODE,o);return r.attachToMesh(t,s),r}static CreateFullscreenUI(t,e=!0,i=null,s=S.BILINEAR_SAMPLINGMODE,o=!1){const r=new lt(t,0,0,i,!1,s),a=r.getScene(),l=new Ms(t+"_layer",null,a,!e);if(l.texture=r,r._layerToDispose=l,r._isFullscreen=!0,o&&a){const h=1/a.getEngine().getHardwareScalingLevel();r._rootContainer.scaleX=h,r._rootContainer.scaleY=h}return r.attach(),r}scale(t){super.scale(t),this.markAsDirty()}scaleTo(t,e){super.scaleTo(t,e),this.markAsDirty()}_checkGuiIsReady(){this.guiIsReady()&&(this.onGuiReadyObservable.notifyObservers(this),this.onGuiReadyObservable.clear())}guiIsReady(){return this._rootContainer.isReady()}}lt.SnippetUrl=Lt.SnippetUrl;lt.AllowGPUOptimizations=!0;class xi extends c{constructor(t,e=0){super(t.x,t.y,t.z),this.buttonIndex=e}}class li{get position(){return this._node?this._node.position:c.Zero()}set position(t){this._node&&(this._node.position=t)}get scaling(){return this._node?this._node.scaling:new c(1,1,1)}set scaling(t){this._node&&(this._isScaledByManager=!1,this._node.scaling=t)}get behaviors(){return this._behaviors}addBehavior(t){if(this._behaviors.indexOf(t)!==-1)return this;t.init();const i=this._host.scene;return i.isLoading?i.onDataLoadedObservable.addOnce(()=>{t.attach(this)}):t.attach(this),this._behaviors.push(t),this}removeBehavior(t){const e=this._behaviors.indexOf(t);return e===-1?this:(this._behaviors[e].detach(),this._behaviors.splice(e,1),this)}getBehaviorByName(t){for(const e of this._behaviors)if(e.name===t)return e;return null}get isVisible(){return this._isVisible}set isVisible(t){if(this._isVisible===t)return;this._isVisible=t;const e=this.mesh;e&&e.setEnabled(t)}constructor(t){this.name=t,this._downCount=0,this._enterCount=-1,this._downPointerIds={},this._isVisible=!0,this._isScaledByManager=!1,this.onPointerMoveObservable=new B,this.onPointerOutObservable=new B,this.onPointerDownObservable=new B,this.onPointerUpObservable=new B,this.onPointerClickObservable=new B,this.onPointerEnterObservable=new B,this._behaviors=new Array}get typeName(){return this._getTypeName()}getClassName(){return this._getTypeName()}_getTypeName(){return"Control3D"}get node(){return this._node}get mesh(){return this._node instanceof Bi?this._node:null}linkToTransformNode(t){return this._node&&(this._node.parent=t),this}_prepareNode(t){if(!this._node){if(this._node=this._createNode(t),!this.node)return;this._injectGUI3DReservedDataStore(this.node).control=this;const e=this.mesh;e&&(e.isPickable=!0,this._affectMaterial(e))}}_injectGUI3DReservedDataStore(t){var e,i;return t.reservedDataStore=(e=t.reservedDataStore)!==null&&e!==void 0?e:{},t.reservedDataStore.GUI3D=(i=t.reservedDataStore.GUI3D)!==null&&i!==void 0?i:{},t.reservedDataStore.GUI3D}_createNode(t){return null}_affectMaterial(t){t.material=null}_isTouchButton3D(t){return t._generatePointerEventType!==void 0}_onPointerMove(t,e){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)}_onPointerEnter(t){return this._enterCount===-1&&(this._enterCount=0),this._enterCount++,this._enterCount>1?!1:(this.onPointerEnterObservable.notifyObservers(this,-1,t,this),this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)}_onPointerOut(t){this._enterCount--,!(this._enterCount>0)&&(this._enterCount=0,this.onPointerOutObservable.notifyObservers(this,-1,t,this),this.pointerOutAnimation&&this.pointerOutAnimation())}_onPointerDown(t,e,i,s){return this._downCount++,this._downPointerIds[i]=this._downPointerIds[i]+1||1,this._downCount!==1?!1:(this.onPointerDownObservable.notifyObservers(new xi(e,s),-1,t,this),this.pointerDownAnimation&&this.pointerDownAnimation(),!0)}_onPointerUp(t,e,i,s,o){if(this._downCount--,this._downPointerIds[i]--,this._downPointerIds[i]<=0&&delete this._downPointerIds[i],this._downCount<0){this._downCount=0;return}this._downCount==0&&(o&&(this._enterCount>0||this._enterCount===-1)&&this.onPointerClickObservable.notifyObservers(new xi(e,s),-1,t,this),this.onPointerUpObservable.notifyObservers(new xi(e,s),-1,t,this),this.pointerUpAnimation&&this.pointerUpAnimation())}forcePointerUp(t=null){if(t!==null)this._onPointerUp(this,c.Zero(),t,0,!0);else{for(const e in this._downPointerIds)this._onPointerUp(this,c.Zero(),+e,0,!0);this._downCount>0&&(this._downCount=1,this._onPointerUp(this,c.Zero(),0,0,!0))}}_processObservables(t,e,i,s,o){if(this._isTouchButton3D(this)&&i&&(t=this._generatePointerEventType(t,i,this._downCount)),t===L.POINTERMOVE){this._onPointerMove(this,e);const r=this._host._lastControlOver[s];return r&&r!==this&&r._onPointerOut(this),r!==this&&this._onPointerEnter(this),this._host._lastControlOver[s]=this,!0}return t===L.POINTERDOWN?(this._onPointerDown(this,e,s,o),this._host._lastControlDown[s]=this,this._host._lastPickedControl=this,!0):t===L.POINTERUP||t===L.POINTERDOUBLETAP?(this._host._lastControlDown[s]&&this._host._lastControlDown[s]._onPointerUp(this,e,s,o,!0),delete this._host._lastControlDown[s],!0):!1}_disposeNode(){this._node&&(this._node.dispose(),this._node=null)}dispose(){this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this._disposeNode();for(const t of this._behaviors)t.detach()}}class es extends li{constructor(){super(...arguments),this._contentResolution=512,this._contentScaleRatio=2}get content(){return this._content}set content(t){this._content=t,!(!t||!this._host||!this._host.utilityLayer)&&(this._facadeTexture?this._facadeTexture.rootContainer.clearControls():(this._facadeTexture=new lt("Facade",this._contentResolution,this._contentResolution,this._host.utilityLayer.utilityLayerScene,!0,S.TRILINEAR_SAMPLINGMODE),this._setFacadeTextureScaling(),this._facadeTexture.premulAlpha=!0),this._facadeTexture.addControl(t),this._applyFacade(this._facadeTexture))}_setFacadeTextureScaling(){var t;this._facadeTexture&&(this._facadeTexture.rootContainer.scaleX=this._contentScaleRatio,this._facadeTexture.rootContainer.scaleY=(t=this._contentScaleRatioY)!==null&&t!==void 0?t:this._contentScaleRatio)}get contentResolution(){return this._contentResolution}set contentResolution(t){this._contentResolution!==t&&(this._contentResolution=t,this._resetContent())}_disposeFacadeTexture(){this._facadeTexture&&(this._facadeTexture.dispose(),this._facadeTexture=null)}_resetContent(){this._disposeFacadeTexture(),this.content=this._content}_applyFacade(t){}}class Qs extends es{constructor(t){super(t)}_getTypeName(){return"AbstractButton3D"}_createNode(t){return new ye("button"+this.name,t)}}class Oi extends Qs{constructor(t,e){super(t),this._options={width:1,height:1,depth:.08,...e},this.pointerEnterAnimation=()=>{this.mesh&&(this._currentMaterial.emissiveColor=w.Red())},this.pointerOutAnimation=()=>{this._currentMaterial.emissiveColor=w.Black()},this.pointerDownAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(.95)},this.pointerUpAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1/.95)}}_applyFacade(t){this._currentMaterial.emissiveTexture=t}_getTypeName(){return"Button3D"}_createNode(t){const e=new Array(6);for(let s=0;s<6;s++)e[s]=new nt(0,0,0,0);t.useRightHandedSystem?e[0].copyFromFloats(1,0,0,1):e[1].copyFromFloats(0,0,1,1);const i=wt(this.name+"_rootMesh",{width:this._options.width,height:this._options.height,depth:this._options.depth,faceUV:e,wrap:!0},t);return this._contentScaleRatioY=this._contentScaleRatio*this._options.width/this._options.height,this._setFacadeTextureScaling(),i}_affectMaterial(t){const e=new De(this.name+"Material",t.getScene());e.specularColor=w.Black(),t.material=e,this._currentMaterial=e,this._resetContent()}dispose(){super.dispose(),this._disposeFacadeTexture(),this._currentMaterial&&this._currentMaterial.dispose()}}class K extends li{get children(){return this._children}get blockLayout(){return this._blockLayout}set blockLayout(t){this._blockLayout!==t&&(this._blockLayout=t,this._blockLayout||this._arrangeChildren())}constructor(t){super(t),this._blockLayout=!1,this._children=new Array}updateLayout(){return this._arrangeChildren(),this}containsControl(t){return this._children.indexOf(t)!==-1}addControl(t){return this._children.indexOf(t)!==-1?this:(t.parent=this,t._host=this._host,this._children.push(t),this._host.utilityLayer&&(t._prepareNode(this._host.utilityLayer.utilityLayerScene),t.node&&(t.node.parent=this.node),this.blockLayout||this._arrangeChildren()),this)}_arrangeChildren(){}_createNode(t){return new ye("ContainerNode",t)}removeControl(t){const e=this._children.indexOf(t);return e!==-1&&(this._children.splice(e,1),t.parent=null,t._disposeNode()),this}_getTypeName(){return"Container3D"}dispose(){for(const t of this._children)t.dispose();this._children.length=0,super.dispose()}}K.UNSET_ORIENTATION=0;K.FACEORIGIN_ORIENTATION=1;K.FACEORIGINREVERSED_ORIENTATION=2;K.FACEFORWARD_ORIENTATION=3;K.FACEFORWARDREVERSED_ORIENTATION=4;class je extends K{get orientation(){return this._orientation}set orientation(t){this._orientation!==t&&(this._orientation=t,it.SetImmediate(()=>{this._arrangeChildren()}))}get columns(){return this._columns}set columns(t){this._columns!==t&&(this._columns=t,this._rowThenColum=!0,it.SetImmediate(()=>{this._arrangeChildren()}))}get rows(){return this._rows}set rows(t){this._rows!==t&&(this._rows=t,this._rowThenColum=!1,it.SetImmediate(()=>{this._arrangeChildren()}))}constructor(t){super(t),this._columns=10,this._rows=0,this._rowThenColum=!0,this._orientation=K.FACEORIGIN_ORIENTATION,this.margin=0}_arrangeChildren(){this._cellWidth=0,this._cellHeight=0;let t=0,e=0,i=0;const s=St.Invert(this.node.computeWorldMatrix(!0));for(const h of this._children){if(!h.mesh)continue;i++,h.mesh.computeWorldMatrix(!0);const d=h.mesh.getHierarchyBoundingVectors(),f=E.Vector3[0],g=E.Vector3[1];d.max.subtractToRef(d.min,g),g.scaleInPlace(.5),c.TransformNormalToRef(g,s,f),this._cellWidth=Math.max(this._cellWidth,f.x*2),this._cellHeight=Math.max(this._cellHeight,f.y*2)}this._cellWidth+=this.margin*2,this._cellHeight+=this.margin*2,this._rowThenColum?(e=this._columns,t=Math.ceil(i/this._columns)):(t=this._rows,e=Math.ceil(i/this._rows));const o=e*.5*this._cellWidth,r=t*.5*this._cellHeight,a=[];let l=0;if(this._rowThenColum)for(let h=0;h<t;h++)for(let d=0;d<e&&(a.push(new c(d*this._cellWidth-o+this._cellWidth/2,h*this._cellHeight-r+this._cellHeight/2,0)),l++,!(l>i));d++);else for(let h=0;h<e;h++)for(let d=0;d<t&&(a.push(new c(h*this._cellWidth-o+this._cellWidth/2,d*this._cellHeight-r+this._cellHeight/2,0)),l++,!(l>i));d++);l=0;for(const h of this._children)h.mesh&&(this._mapGridNode(h,a[l]),l++);this._finalProcessing()}_finalProcessing(){}}class or extends je{constructor(){super(...arguments),this._radius=5}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,it.SetImmediate(()=>{this._arrangeChildren()}))}_mapGridNode(t,e){const i=t.mesh;if(!i)return;const s=this._cylindricalMapping(e);switch(t.position=s,this.orientation){case K.FACEORIGIN_ORIENTATION:i.lookAt(new c(2*s.x,s.y,2*s.z));break;case K.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new c(-s.x,s.y,-s.z));break;case K.FACEFORWARD_ORIENTATION:break;case K.FACEFORWARDREVERSED_ORIENTATION:i.rotate(Ui.Y,Math.PI,Yi.LOCAL);break}}_cylindricalMapping(t){const e=new c(0,t.y,this._radius),i=t.x/this._radius;return St.RotationYawPitchRollToRef(i,0,0,E.Matrix[0]),c.TransformNormal(e,E.Matrix[0])}}const Vs="fluentVertexShader",zs=`precision highp float;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
uniform mat4 world;
uniform mat4 viewProjection;
varying vec2 vUV;
#ifdef BORDER
varying vec2 scaleInfo;
uniform float borderWidth;
uniform vec3 scaleFactor;
#endif
#ifdef HOVERLIGHT
varying vec3 worldPosition;
#endif
void main(void) {
vUV=uv;
#ifdef BORDER
vec3 scale=scaleFactor;
float minScale=min(min(scale.x,scale.y),scale.z);
float maxScale=max(max(scale.x,scale.y),scale.z);
float minOverMiddleScale=minScale/(scale.x+scale.y+scale.z-minScale-maxScale);
float areaYZ=scale.y*scale.z;
float areaXZ=scale.x*scale.z;
float areaXY=scale.x*scale.y;
float scaledBorderWidth=borderWidth; 
if (abs(normal.x)==1.0) 
{
scale.x=scale.y;
scale.y=scale.z;
if (areaYZ>areaXZ && areaYZ>areaXY)
{
scaledBorderWidth*=minOverMiddleScale;
}
}
else if (abs(normal.y)==1.0) 
{
scale.x=scale.z;
if (areaXZ>areaXY && areaXZ>areaYZ)
{
scaledBorderWidth*=minOverMiddleScale;
}
}
else 
{
if (areaXY>areaYZ && areaXY>areaXZ)
{
scaledBorderWidth*=minOverMiddleScale;
}
}
float scaleRatio=min(scale.x,scale.y)/max(scale.x,scale.y);
if (scale.x>scale.y)
{
scaleInfo.x=1.0-(scaledBorderWidth*scaleRatio);
scaleInfo.y=1.0-scaledBorderWidth;
}
else
{
scaleInfo.x=1.0-scaledBorderWidth;
scaleInfo.y=1.0-(scaledBorderWidth*scaleRatio);
} 
#endif 
vec4 worldPos=world*vec4(position,1.0);
#ifdef HOVERLIGHT
worldPosition=worldPos.xyz;
#endif
gl_Position=viewProjection*worldPos;
}
`;ht.ShadersStore[Vs]=zs;const Ws="fluentPixelShader",Hs=`precision highp float;
varying vec2 vUV;
uniform vec4 albedoColor;
#ifdef INNERGLOW
uniform vec4 innerGlowColor;
#endif
#ifdef BORDER
varying vec2 scaleInfo;
uniform float edgeSmoothingValue;
uniform float borderMinValue;
#endif
#ifdef HOVERLIGHT
varying vec3 worldPosition;
uniform vec3 hoverPosition;
uniform vec4 hoverColor;
uniform float hoverRadius;
#endif
#ifdef TEXTURE
uniform sampler2D albedoSampler;
uniform mat4 textureMatrix;
vec2 finalUV;
#endif
void main(void) {
vec3 albedo=albedoColor.rgb;
float alpha=albedoColor.a;
#ifdef TEXTURE
finalUV=vec2(textureMatrix*vec4(vUV,1.0,0.0));
albedo=texture2D(albedoSampler,finalUV).rgb;
#endif
#ifdef HOVERLIGHT
float pointToHover=(1.0-clamp(length(hoverPosition-worldPosition)/hoverRadius,0.,1.))*hoverColor.a;
albedo=clamp(albedo+hoverColor.rgb*pointToHover,0.,1.);
#else
float pointToHover=1.0;
#endif
#ifdef BORDER 
float borderPower=10.0;
float inverseBorderPower=1.0/borderPower;
vec3 borderColor=albedo*borderPower;
vec2 distanceToEdge;
distanceToEdge.x=abs(vUV.x-0.5)*2.0;
distanceToEdge.y=abs(vUV.y-0.5)*2.0;
float borderValue=max(smoothstep(scaleInfo.x-edgeSmoothingValue,scaleInfo.x+edgeSmoothingValue,distanceToEdge.x),
smoothstep(scaleInfo.y-edgeSmoothingValue,scaleInfo.y+edgeSmoothingValue,distanceToEdge.y));
borderColor=borderColor*borderValue*max(borderMinValue*inverseBorderPower,pointToHover); 
albedo+=borderColor;
alpha=max(alpha,borderValue);
#endif
#ifdef INNERGLOW
vec2 uvGlow=(vUV-vec2(0.5,0.5))*(innerGlowColor.a*2.0);
uvGlow=uvGlow*uvGlow;
uvGlow=uvGlow*uvGlow;
albedo+=mix(vec3(0.0,0.0,0.0),innerGlowColor.rgb,uvGlow.x+uvGlow.y); 
#endif
gl_FragColor=vec4(albedo,alpha);
}`;ht.ShadersStore[Ws]=Hs;class Gs extends $t{constructor(){super(),this.INNERGLOW=!1,this.BORDER=!1,this.HOVERLIGHT=!1,this.TEXTURE=!1,this.rebuild()}}class st extends qt{constructor(t,e){super(t,e),this.innerGlowColorIntensity=.5,this.innerGlowColor=new w(1,1,1),this.albedoColor=new w(.3,.35,.4),this.renderBorders=!1,this.borderWidth=.5,this.edgeSmoothingValue=.02,this.borderMinValue=.1,this.renderHoverLight=!1,this.hoverRadius=.01,this.hoverColor=new A(.3,.3,.3,1),this.hoverPosition=c.Zero()}needAlphaBlending(){return this.alpha!==1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new Gs);const i=this.getScene(),s=e.materialDefines;if(!this.checkReadyOnEveryCall&&e.effect&&s._renderId===i.getRenderId())return!0;if(s._areTexturesDirty)if(s.INNERGLOW=this.innerGlowColorIntensity>0,s.BORDER=this.renderBorders,s.HOVERLIGHT=this.renderHoverLight,this._albedoTexture)if(this._albedoTexture.isReadyOrNotBlocking())s.TEXTURE=!0;else return!1;else s.TEXTURE=!1;const o=i.getEngine();if(s.isDirty){s.markAsProcessed(),i.resetCachedMaterial();const r=[P.PositionKind];r.push(P.NormalKind),r.push(P.UVKind);const a="fluent",l=["world","viewProjection","innerGlowColor","albedoColor","borderWidth","edgeSmoothingValue","scaleFactor","borderMinValue","hoverColor","hoverPosition","hoverRadius","textureMatrix"],h=["albedoSampler"],d=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:l,uniformBuffersNames:d,samplers:h,defines:s,maxSimultaneousLights:4});const f=s.toString();e.setEffect(i.getEngine().createEffect(a,{attributes:r,uniformsNames:l,uniformBuffersNames:d,samplers:h,defines:f,fallbacks:null,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),s,this._materialContext)}return!e.effect||!e.effect.isReady()?!1:(s._renderId=i.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){const s=this.getScene(),o=i.materialDefines;if(!o)return;const r=i.effect;if(r){if(this._activeEffect=r,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),this._mustRebind(s,r)&&(this._activeEffect.setColor4("albedoColor",this.albedoColor,this.alpha),o.INNERGLOW&&this._activeEffect.setColor4("innerGlowColor",this.innerGlowColor,this.innerGlowColorIntensity),o.BORDER&&(this._activeEffect.setFloat("borderWidth",this.borderWidth),this._activeEffect.setFloat("edgeSmoothingValue",this.edgeSmoothingValue),this._activeEffect.setFloat("borderMinValue",this.borderMinValue),e.getBoundingInfo().boundingBox.extendSize.multiplyToRef(e.scaling,E.Vector3[0]),this._activeEffect.setVector3("scaleFactor",E.Vector3[0])),o.HOVERLIGHT&&(this._activeEffect.setDirectColor4("hoverColor",this.hoverColor),this._activeEffect.setFloat("hoverRadius",this.hoverRadius),this._activeEffect.setVector3("hoverPosition",this.hoverPosition)),o.TEXTURE&&this._albedoTexture)){this._activeEffect.setTexture("albedoSampler",this._albedoTexture);const a=this._albedoTexture.getTextureMatrix();this._activeEffect.setMatrix("textureMatrix",a)}this._afterBind(e,this._activeEffect)}}getActiveTextures(){return super.getActiveTextures()}hasTexture(t){return!!super.hasTexture(t)}dispose(t){super.dispose(t)}clone(t){return X.Clone(()=>new st(t,this.getScene()),this)}serialize(){const t=super.serialize();return t.customType="BABYLON.GUI.FluentMaterial",t}getClassName(){return"FluentMaterial"}static Parse(t,e,i){return X.Parse(()=>new st(t.name,e),t,e,i)}}n([_(),_i("_markAllSubMeshesAsTexturesDirty")],st.prototype,"innerGlowColorIntensity",void 0);n([Xi()],st.prototype,"innerGlowColor",void 0);n([Xi()],st.prototype,"albedoColor",void 0);n([_(),_i("_markAllSubMeshesAsTexturesDirty")],st.prototype,"renderBorders",void 0);n([_()],st.prototype,"borderWidth",void 0);n([_()],st.prototype,"edgeSmoothingValue",void 0);n([_()],st.prototype,"borderMinValue",void 0);n([_(),_i("_markAllSubMeshesAsTexturesDirty")],st.prototype,"renderHoverLight",void 0);n([_()],st.prototype,"hoverRadius",void 0);n([Ki()],st.prototype,"hoverColor",void 0);n([Ie()],st.prototype,"hoverPosition",void 0);n([Ps("albedoTexture")],st.prototype,"_albedoTexture",void 0);n([_i("_markAllSubMeshesAsTexturesAndMiscDirty")],st.prototype,"albedoTexture",void 0);N("BABYLON.GUI.FluentMaterial",st);class xe extends je{get backPlateMargin(){return this._backPlateMargin}set backPlateMargin(t){this._backPlateMargin=t,this._children.length>=1&&(this.children.forEach(e=>{this._updateCurrentMinMax(e.position)}),this._updateMargins())}_createNode(t){const e=new Ke(`menu_${this.name}`,t);return this._backPlate=wt("backPlate"+this.name,{size:1},t),this._backPlate.parent=e,e}_affectMaterial(t){this._backPlateMaterial=new st(this.name+"backPlateMaterial",t.getScene()),this._backPlateMaterial.albedoColor=new w(.08,.15,.55),this._backPlateMaterial.renderBorders=!0,this._backPlateMaterial.renderHoverLight=!0,this._pickedPointObserver=this._host.onPickedPointChangedObservable.add(e=>{e?(this._backPlateMaterial.hoverPosition=e,this._backPlateMaterial.hoverColor.a=1):this._backPlateMaterial.hoverColor.a=0}),this._backPlate.material=this._backPlateMaterial}_mapGridNode(t,e){t.mesh&&(t.position=e.clone(),this._updateCurrentMinMax(e))}_finalProcessing(){this._updateMargins()}_updateCurrentMinMax(t){this._currentMin||(this._currentMin=t.clone(),this._currentMax=t.clone()),this._currentMin.minimizeInPlace(t),this._currentMax.maximizeInPlace(t)}_updateMargins(){if(this._children.length>0){this._currentMin.addInPlaceFromFloats(-this._cellWidth/2,-this._cellHeight/2,0),this._currentMax.addInPlaceFromFloats(this._cellWidth/2,this._cellHeight/2,0);const t=this._currentMax.subtract(this._currentMin);this._backPlate.scaling.x=t.x+this._cellWidth*this.backPlateMargin,this._backPlate.scaling.y=t.y+this._cellHeight*this.backPlateMargin,this._backPlate.scaling.z=.001;for(let e=0;e<this._children.length;e++)this._children[e].position.subtractInPlace(this._currentMin).subtractInPlace(t.scale(.5)),this._children[e].position.z-=.01}this._currentMin=null,this._currentMax=null}constructor(t){super(t),this._backPlateMargin=1.25}addButton(t){const e=this.blockLayout;return e||(this.blockLayout=!0),super.addControl(t),t.isBackplateVisible=!1,t.scaling.scaleInPlace(xe.MENU_BUTTON_SCALE),e||(this.blockLayout=!1),this}addControl(t){return Ge.Warn("TouchHolographicMenu can only contain buttons. Please use the method `addButton` instead."),this}dispose(){super.dispose(),this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver)}}xe.MENU_BUTTON_SCALE=1;class rr extends xe{get handConstraintBehavior(){return this._handConstraintBehavior}_createNode(t){const e=super._createNode(t);return this._handConstraintBehavior.attach(e),e}constructor(t,e){super(e),this._handConstraintBehavior=new Bs,this._handConstraintBehavior.linkToXRExperience(t),this.backPlateMargin=.15,this.rows=3}dispose(){super.dispose(),this._handConstraintBehavior.detach()}}const Us="fluentBackplatePixelShader",Ys=`uniform vec3 cameraPosition;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
uniform float _Radius_;
uniform float _Line_Width_;
uniform bool _Absolute_Sizes_;
uniform float _Filter_Width_;
uniform vec4 _Base_Color_;
uniform vec4 _Line_Color_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform float _Rate_;
uniform vec4 _Highlight_Color_;
uniform float _Highlight_Width_;
uniform vec4 _Highlight_Transform_;
uniform float _Highlight_;
uniform float _Iridescence_Intensity_;
uniform float _Iridescence_Edge_Intensity_;
uniform float _Angle_;
uniform float _Fade_Out_;
uniform bool _Reflected_;
uniform float _Frequency_;
uniform float _Vertical_Offset_;
uniform sampler2D _Iridescent_Map_;
uniform bool _Use_Global_Left_Index_;
uniform bool _Use_Global_Right_Index_;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
void Round_Rect_Fragment_B31(
float Radius,
float Line_Width,
vec4 Line_Color,
float Filter_Width,
vec2 UV,
float Line_Visibility,
vec4 Rect_Parms,
vec4 Fill_Color,
out vec4 Color)
{
float d=length(max(abs(UV)-Rect_Parms.xy,0.0));
float dx=max(fwidth(d)*Filter_Width,0.00001);
float g=min(Rect_Parms.z,Rect_Parms.w);
float dgrad=max(fwidth(g)*Filter_Width,0.00001);
float Inside_Rect=clamp(g/dgrad,0.0,1.0);
float inner=clamp((d+dx*0.5-max(Radius-Line_Width,d-dx*0.5))/dx,0.0,1.0);
Color=clamp(mix(Fill_Color,Line_Color,inner),0.0,1.0)*Inside_Rect;
}
void Blob_Fragment_B71(
sampler2D Blob_Texture,
vec4 Blob_Info1,
vec4 Blob_Info2,
out vec4 Blob_Color)
{
float k1=dot(Blob_Info1.xy,Blob_Info1.xy);
float k2=dot(Blob_Info2.xy,Blob_Info2.xy);
vec3 closer=k1<k2 ? vec3(k1,Blob_Info1.z,Blob_Info1.w) : vec3(k2,Blob_Info2.z,Blob_Info2.w);
Blob_Color=closer.z*texture(Blob_Texture,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);
}
void Line_Fragment_B48(
vec4 Base_Color,
vec4 Highlight_Color,
float Highlight_Width,
vec3 Line_Vertex,
float Highlight,
out vec4 Line_Color)
{
float k2=1.0-clamp(abs(Line_Vertex.y/Highlight_Width),0.0,1.0);
Line_Color=mix(Base_Color,Highlight_Color,Highlight*k2);
}
void Scale_RGB_B54(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=vec4(Scalar,Scalar,Scalar,1)*Color;
}
void Conditional_Float_B38(
bool Which,
float If_True,
float If_False,
out float Result)
{
Result=Which ? If_True : If_False;
}
void main()
{
float R_Q72;
float G_Q72;
float B_Q72;
float A_Q72;
R_Q72=vColor.r; G_Q72=vColor.g; B_Q72=vColor.b; A_Q72=vColor.a;
vec4 Blob_Color_Q71;
#if BLOB_ENABLE
float k1=dot(vExtra2.xy,vExtra2.xy);
float k2=dot(vExtra3.xy,vExtra3.xy);
vec3 closer=k1<k2 ? vec3(k1,vExtra2.z,vExtra2.w) : vec3(k2,vExtra3.z,vExtra3.w);
Blob_Color_Q71=closer.z*texture(_Blob_Texture_,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);
#else
Blob_Color_Q71=vec4(0,0,0,0);
#endif
vec4 Line_Color_Q48;
Line_Fragment_B48(_Line_Color_,_Highlight_Color_,_Highlight_Width_,vTangent,_Highlight_,Line_Color_Q48);
float X_Q67;
float Y_Q67;
X_Q67=vUV.x;
Y_Q67=vUV.y;
vec3 Incident_Q66=normalize(vPosition-cameraPosition);
vec3 Reflected_Q60=reflect(Incident_Q66,vBinormal);
float Product_Q63=Y_Q67*_Vertical_Offset_;
float Dot_Q68=dot(Incident_Q66, Reflected_Q60);
float Dot_Q57=dot(vNormal, Incident_Q66);
float Result_Q38;
Conditional_Float_B38(_Reflected_,Dot_Q68,Dot_Q57,Result_Q38);
float Product_Q64=Result_Q38*_Frequency_;
float Sum_Q69=Product_Q64+1.0;
float Product_Q70=Sum_Q69*0.5;
float Sum_Q62=Product_Q63+Product_Q70;
float FractF_Q59=fract(Sum_Q62);
vec2 Vec2_Q65=vec2(FractF_Q59,0.5);
vec4 Color_Q58;
#if IRIDESCENT_MAP_ENABLE
Color_Q58=texture(_Iridescent_Map_,Vec2_Q65);
#else
Color_Q58=vec4(0,0,0,0);
#endif
vec4 Result_Q54;
Scale_RGB_B54(Color_Q58,_Iridescence_Edge_Intensity_,Result_Q54);
vec4 Result_Q55;
Scale_RGB_B54(Color_Q58,_Iridescence_Intensity_,Result_Q55);
vec4 Base_And_Iridescent_Q53;
Base_And_Iridescent_Q53=Line_Color_Q48+vec4(Result_Q54.rgb,0.0);
vec4 Base_And_Iridescent_Q56;
Base_And_Iridescent_Q56=_Base_Color_+vec4(Result_Q55.rgb,0.0);
vec4 Result_Q52=Base_And_Iridescent_Q53; Result_Q52.a=1.0;
vec4 Result_Q35=Blob_Color_Q71+(1.0-Blob_Color_Q71.a)*Base_And_Iridescent_Q56;
vec4 Color_Q31;
Round_Rect_Fragment_B31(R_Q72,G_Q72,Result_Q52,_Filter_Width_,vUV,1.0,vExtra1,Result_Q35,Color_Q31);
vec4 Result_Q47=_Fade_Out_*Color_Q31;
vec4 Out_Color=Result_Q47;
float Clip_Threshold=0.001;
bool To_sRGB=false;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[Us]=Ys;const Xs="fluentBackplateVertexShader",Ks=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
#ifdef TANGENT
attribute vec3 tangent;
#else
const vec3 tangent=vec3(0.);
#endif
uniform float _Radius_;
uniform float _Line_Width_;
uniform bool _Absolute_Sizes_;
uniform float _Filter_Width_;
uniform vec4 _Base_Color_;
uniform vec4 _Line_Color_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform float _Rate_;
uniform vec4 _Highlight_Color_;
uniform float _Highlight_Width_;
uniform vec4 _Highlight_Transform_;
uniform float _Highlight_;
uniform float _Iridescence_Intensity_;
uniform float _Iridescence_Edge_Intensity_;
uniform float _Angle_;
uniform float _Fade_Out_;
uniform bool _Reflected_;
uniform float _Frequency_;
uniform float _Vertical_Offset_;
uniform sampler2D _Iridescent_Map_;
uniform bool _Use_Global_Left_Index_;
uniform bool _Use_Global_Right_Index_;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
void Object_To_World_Pos_B115(
vec3 Pos_Object,
out vec3 Pos_World)
{
Pos_World=(world*vec4(Pos_Object,1.0)).xyz;
}
void PickDir_B140(
float Degrees,
vec3 DirX,
vec3 DirY,
out vec3 Dir)
{
float a=Degrees*3.14159/180.0;
Dir=cos(a)*DirX+sin(a)*DirY;
}
void Round_Rect_Vertex_B139(
vec2 UV,
float Radius,
float Margin,
float Anisotropy,
float Gradient1,
float Gradient2,
out vec2 Rect_UV,
out vec4 Rect_Parms,
out vec2 Scale_XY,
out vec2 Line_UV)
{
Scale_XY=vec2(Anisotropy,1.0);
Line_UV=(UV-vec2(0.5,0.5));
Rect_UV=Line_UV*Scale_XY;
Rect_Parms.xy=Scale_XY*0.5-vec2(Radius,Radius)-vec2(Margin,Margin);
Rect_Parms.z=Gradient1; 
Rect_Parms.w=Gradient2;
}
void Line_Vertex_B135(
vec2 Scale_XY,
vec2 UV,
float Time,
float Rate,
vec4 Highlight_Transform,
out vec3 Line_Vertex)
{
float angle2=(Rate*Time)*2.0*3.1416;
float sinAngle2=sin(angle2);
float cosAngle2=cos(angle2);
vec2 xformUV=UV*Highlight_Transform.xy+Highlight_Transform.zw;
Line_Vertex.x=0.0;
Line_Vertex.y=cosAngle2*xformUV.x-sinAngle2*xformUV.y;
Line_Vertex.z=0.0; 
}
void Blob_Vertex_B180(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
float Blob_Fade_Length,
float Blob_Pulse,
float Blob_Fade,
out vec4 Blob_Info)
{
vec3 blob=Blob_Position;
vec3 delta=blob-Position;
float dist=dot(Normal,delta);
float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;
vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);
float Fade=fadeValue*Intensity*Blob_Fade;
float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);
Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);
}
void Move_Verts_B129(
float Anisotropy,
vec3 P,
float Radius,
out vec3 New_P,
out vec2 New_UV,
out float Radial_Gradient,
out vec3 Radial_Dir)
{
vec2 UV=P.xy*2.0+0.5;
vec2 center=clamp(UV,0.0,1.0);
vec2 delta=UV-center;
vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);
New_UV=center+r2*(UV-2.0*center+0.5);
New_P=vec3(New_UV-0.5,P.z);
Radial_Gradient=1.0-length(delta)*2.0;
Radial_Dir=vec3(delta*r2,0.0);
}
void Object_To_World_Dir_B132(
vec3 Dir_Object,
out vec3 Binormal_World,
out vec3 Binormal_World_N,
out float Binormal_Length)
{
Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;
Binormal_Length=length(Binormal_World);
Binormal_World_N=Binormal_World/Binormal_Length;
}
void RelativeOrAbsoluteDetail_B147(
float Nominal_Radius,
float Nominal_LineWidth,
bool Absolute_Measurements,
float Height,
out float Radius,
out float Line_Width)
{
float scale=Absolute_Measurements ? 1.0/Height : 1.0;
Radius=Nominal_Radius*scale;
Line_Width=Nominal_LineWidth*scale;
}
void Edge_AA_Vertex_B130(
vec3 Position_World,
vec3 Position_Object,
vec3 Normal_Object,
vec3 Eye,
float Radial_Gradient,
vec3 Radial_Dir,
vec3 Tangent,
out float Gradient1,
out float Gradient2)
{
vec3 I=(Eye-Position_World);
vec3 T=(world* vec4(Tangent,0.0)).xyz;
float g=(dot(T,I)<0.0) ? 0.0 : 1.0;
if (Normal_Object.z==0.0) { 
Gradient1=Position_Object.z>0.0 ? g : 1.0;
Gradient2=Position_Object.z>0.0 ? 1.0 : g;
} else {
Gradient1=g+(1.0-g)*(Radial_Gradient);
Gradient2=1.0;
}
}
void Pick_Radius_B144(
float Radius,
float Radius_Top_Left,
float Radius_Top_Right,
float Radius_Bottom_Left,
float Radius_Bottom_Right,
vec3 Position,
out float Result)
{
bool whichY=Position.y>0.0;
Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);
Result*=Radius;
}
void main()
{
vec3 Nrm_World_Q128;
Nrm_World_Q128=normalize((world*vec4(normal,0.0)).xyz);
vec3 Tangent_World_Q131;
vec3 Tangent_World_N_Q131;
float Tangent_Length_Q131;
Tangent_World_Q131=(world*vec4(vec3(1,0,0),0.0)).xyz;
Tangent_Length_Q131=length(Tangent_World_Q131);
Tangent_World_N_Q131=Tangent_World_Q131/Tangent_Length_Q131;
vec3 Binormal_World_Q132;
vec3 Binormal_World_N_Q132;
float Binormal_Length_Q132;
Object_To_World_Dir_B132(vec3(0,1,0),Binormal_World_Q132,Binormal_World_N_Q132,Binormal_Length_Q132);
float Anisotropy_Q133=Tangent_Length_Q131/Binormal_Length_Q132;
vec3 Result_Q177;
Result_Q177=mix(_Blob_Position_,Global_Left_Index_Tip_Position.xyz,float(_Use_Global_Left_Index_));
vec3 Result_Q178;
Result_Q178=mix(_Blob_Position_2_,Global_Right_Index_Tip_Position.xyz,float(_Use_Global_Right_Index_));
float Result_Q144;
Pick_Radius_B144(_Radius_,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q144);
vec3 Dir_Q140;
PickDir_B140(_Angle_,Tangent_World_N_Q131,Binormal_World_N_Q132,Dir_Q140);
float Radius_Q147;
float Line_Width_Q147;
RelativeOrAbsoluteDetail_B147(Result_Q144,_Line_Width_,_Absolute_Sizes_,Binormal_Length_Q132,Radius_Q147,Line_Width_Q147);
vec4 Out_Color_Q145=vec4(Radius_Q147,Line_Width_Q147,0,1);
vec3 New_P_Q129;
vec2 New_UV_Q129;
float Radial_Gradient_Q129;
vec3 Radial_Dir_Q129;
Move_Verts_B129(Anisotropy_Q133,position,Radius_Q147,New_P_Q129,New_UV_Q129,Radial_Gradient_Q129,Radial_Dir_Q129);
vec3 Pos_World_Q115;
Object_To_World_Pos_B115(New_P_Q129,Pos_World_Q115);
vec4 Blob_Info_Q180;
#if BLOB_ENABLE
Blob_Vertex_B180(Pos_World_Q115,Nrm_World_Q128,Tangent_World_N_Q131,Binormal_World_N_Q132,Result_Q177,_Blob_Intensity_,_Blob_Near_Size_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_,_Blob_Fade_,Blob_Info_Q180);
#else
Blob_Info_Q180=vec4(0,0,0,0);
#endif
vec4 Blob_Info_Q181;
#if BLOB_ENABLE_2
Blob_Vertex_B180(Pos_World_Q115,Nrm_World_Q128,Tangent_World_N_Q131,Binormal_World_N_Q132,Result_Q178,_Blob_Intensity_,_Blob_Near_Size_2_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_2_,_Blob_Fade_2_,Blob_Info_Q181);
#else
Blob_Info_Q181=vec4(0,0,0,0);
#endif
float Gradient1_Q130;
float Gradient2_Q130;
#if SMOOTH_EDGES
Edge_AA_Vertex_B130(Pos_World_Q115,position,normal,cameraPosition,Radial_Gradient_Q129,Radial_Dir_Q129,tangent,Gradient1_Q130,Gradient2_Q130);
#else
Gradient1_Q130=1.0;
Gradient2_Q130=1.0;
#endif
vec2 Rect_UV_Q139;
vec4 Rect_Parms_Q139;
vec2 Scale_XY_Q139;
vec2 Line_UV_Q139;
Round_Rect_Vertex_B139(New_UV_Q129,Radius_Q147,0.0,Anisotropy_Q133,Gradient1_Q130,Gradient2_Q130,Rect_UV_Q139,Rect_Parms_Q139,Scale_XY_Q139,Line_UV_Q139);
vec3 Line_Vertex_Q135;
Line_Vertex_B135(Scale_XY_Q139,Line_UV_Q139,0.0,_Rate_,_Highlight_Transform_,Line_Vertex_Q135);
vec3 Position=Pos_World_Q115;
vec3 Normal=Dir_Q140;
vec2 UV=Rect_UV_Q139;
vec3 Tangent=Line_Vertex_Q135;
vec3 Binormal=Nrm_World_Q128;
vec4 Color=Out_Color_Q145;
vec4 Extra1=Rect_Parms_Q139;
vec4 Extra2=Blob_Info_Q180;
vec4 Extra3=Blob_Info_Q181;
gl_Position=viewProjection*vec4(Position,1);
vPosition=Position;
vNormal=Normal;
vUV=UV;
vTangent=Tangent;
vBinormal=Binormal;
vColor=Color;
vExtra1=Extra1;
vExtra2=Extra2;
vExtra3=Extra3;
}`;ht.ShadersStore[Xs]=Ks;class js extends $t{constructor(){super(),this.BLOB_ENABLE=!0,this.BLOB_ENABLE_2=!0,this.SMOOTH_EDGES=!0,this.IRIDESCENT_MAP_ENABLE=!0,this._needNormals=!0,this.rebuild()}}class k extends qt{constructor(t,e){super(t,e),this.radius=.03,this.lineWidth=.01,this.absoluteSizes=!1,this._filterWidth=1,this.baseColor=new A(.0392157,.0666667,.207843,1),this.lineColor=new A(.14902,.133333,.384314,1),this.blobIntensity=.98,this.blobFarSize=.04,this.blobNearDistance=0,this.blobFarDistance=.08,this.blobFadeLength=.08,this.blobNearSize=.22,this.blobPulse=0,this.blobFade=0,this.blobNearSize2=.22,this.blobPulse2=0,this.blobFade2=0,this._rate=.135,this.highlightColor=new A(.98,.98,.98,1),this.highlightWidth=.25,this._highlightTransform=new nt(1,1,0,0),this._highlight=1,this.iridescenceIntensity=0,this.iridescenceEdgeIntensity=1,this._angle=-45,this.fadeOut=1,this._reflected=!0,this._frequency=1,this._verticalOffset=0,this.globalLeftIndexTipPosition=c.Zero(),this._globalLeftIndexTipPosition4=nt.Zero(),this.globalRightIndexTipPosition=c.Zero(),this._globalRightIndexTipPosition4=nt.Zero(),this.alphaMode=Lt.ALPHA_DISABLE,this.backFaceCulling=!1,this._blobTexture=new S(k.BLOB_TEXTURE_URL,this.getScene(),!0,!1,S.NEAREST_SAMPLINGMODE),this._iridescentMap=new S(k.IM_TEXTURE_URL,this.getScene(),!0,!1,S.NEAREST_SAMPLINGMODE)}needAlphaBlending(){return!1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new js);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!1,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="fluentBackplate",h=i.toString(),d=["world","viewProjection","cameraPosition","_Radius_","_Line_Width_","_Absolute_Sizes_","_Filter_Width_","_Base_Color_","_Line_Color_","_Radius_Top_Left_","_Radius_Top_Right_","_Radius_Bottom_Left_","_Radius_Bottom_Right_","_Blob_Position_","_Blob_Intensity_","_Blob_Near_Size_","_Blob_Far_Size_","_Blob_Near_Distance_","_Blob_Far_Distance_","_Blob_Fade_Length_","_Blob_Pulse_","_Blob_Fade_","_Blob_Texture_","_Blob_Position_2_","_Blob_Near_Size_2_","_Blob_Pulse_2_","_Blob_Fade_2_","_Rate_","_Highlight_Color_","_Highlight_Width_","_Highlight_Transform_","_Highlight_","_Iridescence_Intensity_","_Iridescence_Edge_Intensity_","_Angle_","_Fade_Out_","_Reflected_","_Frequency_","_Vertical_Offset_","_Iridescent_Map_","_Use_Global_Left_Index_","_Use_Global_Right_Index_","Global_Left_Index_Tip_Position","Global_Right_Index_Tip_Position"],f=["_Blob_Texture_","_Iridescent_Map_"],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i,this._materialContext)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){var s,o;if(!i.materialDefines)return;const a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",this.getScene().getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",(o=(s=this.getScene().activeCamera)===null||s===void 0?void 0:s.position)!==null&&o!==void 0?o:c.ZeroReadOnly),this._activeEffect.setFloat("_Radius_",this.radius),this._activeEffect.setFloat("_Line_Width_",this.lineWidth),this._activeEffect.setFloat("_Absolute_Sizes_",this.absoluteSizes?1:0),this._activeEffect.setFloat("_Filter_Width_",this._filterWidth),this._activeEffect.setDirectColor4("_Base_Color_",this.baseColor),this._activeEffect.setDirectColor4("_Line_Color_",this.lineColor),this._activeEffect.setFloat("_Radius_Top_Left_",1),this._activeEffect.setFloat("_Radius_Top_Right_",1),this._activeEffect.setFloat("_Radius_Bottom_Left_",1),this._activeEffect.setFloat("_Radius_Bottom_Right_",1),this._activeEffect.setFloat("_Blob_Intensity_",this.blobIntensity),this._activeEffect.setFloat("_Blob_Near_Size_",this.blobNearSize),this._activeEffect.setFloat("_Blob_Far_Size_",this.blobFarSize),this._activeEffect.setFloat("_Blob_Near_Distance_",this.blobNearDistance),this._activeEffect.setFloat("_Blob_Far_Distance_",this.blobFarDistance),this._activeEffect.setFloat("_Blob_Fade_Length_",this.blobFadeLength),this._activeEffect.setFloat("_Blob_Pulse_",this.blobPulse),this._activeEffect.setFloat("_Blob_Fade_",this.blobFade),this._activeEffect.setTexture("_Blob_Texture_",this._blobTexture),this._activeEffect.setFloat("_Blob_Near_Size_2_",this.blobNearSize2),this._activeEffect.setFloat("_Blob_Pulse_2_",this.blobPulse2),this._activeEffect.setFloat("_Blob_Fade_2_",this.blobFade2),this._activeEffect.setFloat("_Rate_",this._rate),this._activeEffect.setDirectColor4("_Highlight_Color_",this.highlightColor),this._activeEffect.setFloat("_Highlight_Width_",this.highlightWidth),this._activeEffect.setVector4("_Highlight_Transform_",this._highlightTransform),this._activeEffect.setFloat("_Highlight_",this._highlight),this._activeEffect.setFloat("_Iridescence_Intensity_",this.iridescenceIntensity),this._activeEffect.setFloat("_Iridescence_Edge_Intensity_",this.iridescenceEdgeIntensity),this._activeEffect.setFloat("_Angle_",this._angle),this._activeEffect.setFloat("_Fade_Out_",this.fadeOut),this._activeEffect.setFloat("_Reflected_",this._reflected?1:0),this._activeEffect.setFloat("_Frequency_",this._frequency),this._activeEffect.setFloat("_Vertical_Offset_",this._verticalOffset),this._activeEffect.setTexture("_Iridescent_Map_",this._iridescentMap),this._activeEffect.setFloat("_Use_Global_Left_Index_",1),this._activeEffect.setFloat("_Use_Global_Right_Index_",1),this._globalLeftIndexTipPosition4.set(this.globalLeftIndexTipPosition.x,this.globalLeftIndexTipPosition.y,this.globalLeftIndexTipPosition.z,1),this._activeEffect.setVector4("Global_Left_Index_Tip_Position",this._globalLeftIndexTipPosition4),this._globalRightIndexTipPosition4.set(this.globalRightIndexTipPosition.x,this.globalRightIndexTipPosition.y,this.globalRightIndexTipPosition.z,1),this._activeEffect.setVector4("Global_Right_Index_Tip_Position",this._globalRightIndexTipPosition4),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t),this._blobTexture.dispose(),this._iridescentMap.dispose()}clone(t){return X.Clone(()=>new k(t,this.getScene()),this)}serialize(){const t=super.serialize();return t.customType="BABYLON.FluentBackplateMaterial",t}getClassName(){return"FluentBackplateMaterial"}static Parse(t,e,i){return X.Parse(()=>new k(t.name,e),t,e,i)}}k.BLOB_TEXTURE_URL="https://assets.babylonjs.com/meshes/MRTK/mrtk-fluent-backplate-blob.png";k.IM_TEXTURE_URL="https://assets.babylonjs.com/meshes/MRTK/mrtk-fluent-backplate-iridescence.png";n([_()],k.prototype,"radius",void 0);n([_()],k.prototype,"lineWidth",void 0);n([_()],k.prototype,"absoluteSizes",void 0);n([_()],k.prototype,"baseColor",void 0);n([_()],k.prototype,"lineColor",void 0);n([_()],k.prototype,"blobIntensity",void 0);n([_()],k.prototype,"blobFarSize",void 0);n([_()],k.prototype,"blobNearDistance",void 0);n([_()],k.prototype,"blobFarDistance",void 0);n([_()],k.prototype,"blobFadeLength",void 0);n([_()],k.prototype,"blobNearSize",void 0);n([_()],k.prototype,"blobPulse",void 0);n([_()],k.prototype,"blobFade",void 0);n([_()],k.prototype,"blobNearSize2",void 0);n([_()],k.prototype,"blobPulse2",void 0);n([_()],k.prototype,"blobFade2",void 0);n([_()],k.prototype,"highlightColor",void 0);n([_()],k.prototype,"highlightWidth",void 0);n([_()],k.prototype,"iridescenceIntensity",void 0);n([_()],k.prototype,"iridescenceEdgeIntensity",void 0);n([_()],k.prototype,"fadeOut",void 0);n([Ie()],k.prototype,"globalLeftIndexTipPosition",void 0);n([Ie()],k.prototype,"globalRightIndexTipPosition",void 0);N("BABYLON.GUI.FluentBackplateMaterial",k);class Ue extends li{set renderingGroupId(t){this._model.renderingGroupId=t}get renderingGroupId(){return this._model.renderingGroupId}get material(){return this._material}get shareMaterials(){return this._shareMaterials}constructor(t,e=!0){super(t),this._shareMaterials=e}_getTypeName(){return"HolographicBackplate"}_createNode(t){var e;const i=wt(((e=this.name)!==null&&e!==void 0?e:"HolographicBackplate")+"_CollisionMesh",{width:1,height:1,depth:1},t);return i.isPickable=!0,i.visibility=0,Ci.ImportMeshAsync(void 0,Ue.MODEL_BASE_URL,Ue.MODEL_FILENAME,t).then(s=>{const o=s.meshes[1];o.name=`${this.name}_frontPlate`,o.isPickable=!1,o.parent=i,this._material&&(o.material=this._material),this._model=o}),i}_createMaterial(t){this._material=new k(this.name+" Material",t.getScene())}_affectMaterial(t){this._shareMaterials?this._host._touchSharedMaterials.fluentBackplateMaterial?this._material=this._host._touchSharedMaterials.fluentBackplateMaterial:(this._createMaterial(t),this._host._touchSharedMaterials.fluentBackplateMaterial=this._material):this._createMaterial(t)}dispose(){super.dispose(),this.shareMaterials||this._material.dispose(),this._model.dispose()}}Ue.MODEL_BASE_URL="https://assets.babylonjs.com/meshes/MRTK/";Ue.MODEL_FILENAME="mrtk-fluent-backplate.glb";class ar extends Oi{_disposeTooltip(){this._tooltipFade=null,this._tooltipTextBlock&&this._tooltipTextBlock.dispose(),this._tooltipTexture&&this._tooltipTexture.dispose(),this._tooltipMesh&&this._tooltipMesh.dispose(),this.onPointerEnterObservable.remove(this._tooltipHoverObserver),this.onPointerOutObservable.remove(this._tooltipOutObserver)}set renderingGroupId(t){this._backPlate.renderingGroupId=t,this._textPlate.renderingGroupId=t,this._frontPlate.renderingGroupId=t,this._tooltipMesh&&(this._tooltipMesh.renderingGroupId=t)}get renderingGroupId(){return this._backPlate.renderingGroupId}set tooltipText(t){if(!t){this._disposeTooltip();return}if(!this._tooltipFade){const e=this._backPlate._scene.useRightHandedSystem;this._tooltipMesh=jt("",{size:1},this._backPlate._scene);const i=jt("",{size:1,sideOrientation:Ke.DOUBLESIDE},this._backPlate._scene),s=new De("",this._backPlate._scene);s.diffuseColor=w.FromHexString("#212121"),i.material=s,i.isPickable=!1,this._tooltipMesh.addChild(i),i.position=c.Forward(e).scale(.05),this._tooltipMesh.scaling.y=1/3,this._tooltipMesh.position=c.Up().scale(.7).add(c.Forward(e).scale(-.15)),this._tooltipMesh.isPickable=!1,this._tooltipMesh.parent=this._backPlate,this._tooltipTexture=lt.CreateForMesh(this._tooltipMesh),this._tooltipTextBlock=new U,this._tooltipTextBlock.scaleY=3,this._tooltipTextBlock.color="white",this._tooltipTextBlock.fontSize=130,this._tooltipTexture.addControl(this._tooltipTextBlock),this._tooltipFade=new Zi,this._tooltipFade.delay=500,this._tooltipMesh.addBehavior(this._tooltipFade),this._tooltipHoverObserver=this.onPointerEnterObservable.add(()=>{this._tooltipFade&&this._tooltipFade.fadeIn(!0)}),this._tooltipOutObserver=this.onPointerOutObservable.add(()=>{this._tooltipFade&&this._tooltipFade.fadeIn(!1)})}this._tooltipTextBlock&&(this._tooltipTextBlock.text=t)}get tooltipText(){return this._tooltipTextBlock?this._tooltipTextBlock.text:null}get text(){return this._text}set text(t){this._text!==t&&(this._text=t,this._rebuildContent())}get imageUrl(){return this._imageUrl}set imageUrl(t){this._imageUrl!==t&&(this._imageUrl=t,this._rebuildContent())}get backMaterial(){return this._backMaterial}get frontMaterial(){return this._frontMaterial}get plateMaterial(){return this._plateMaterial}get shareMaterials(){return this._shareMaterials}constructor(t,e=!0){super(t),this._shareMaterials=!0,this._shareMaterials=e,this.pointerEnterAnimation=()=>{this.mesh&&this._frontPlate.setEnabled(!0)},this.pointerOutAnimation=()=>{this.mesh&&this._frontPlate.setEnabled(!1)}}_getTypeName(){return"HolographicButton"}_rebuildContent(){this._disposeFacadeTexture();const t=new Tt;if(t.isVertical=!0,ji.IsDocumentAvailable()&&document.createElement&&this._imageUrl){const e=new T;e.source=this._imageUrl,e.paddingTop="40px",e.height="180px",e.width="100px",e.paddingBottom="40px",t.addControl(e)}if(this._text){const e=new U;e.text=this._text,e.color="white",e.height="30px",e.fontSize=24,t.addControl(e)}this._frontPlate&&(this.content=t)}_createNode(t){return this._backPlate=wt(this.name+"BackMesh",{width:1,height:1,depth:.08},t),this._frontPlate=wt(this.name+"FrontMesh",{width:1,height:1,depth:.08},t),this._frontPlate.parent=this._backPlate,this._frontPlate.position=c.Forward(t.useRightHandedSystem).scale(-.08),this._frontPlate.isPickable=!1,this._frontPlate.setEnabled(!1),this._textPlate=super._createNode(t),this._textPlate.parent=this._backPlate,this._textPlate.position=c.Forward(t.useRightHandedSystem).scale(-.08),this._textPlate.isPickable=!1,this._backPlate}_applyFacade(t){this._plateMaterial.emissiveTexture=t,this._plateMaterial.opacityTexture=t}_createBackMaterial(t){this._backMaterial=new st(this.name+"Back Material",t.getScene()),this._backMaterial.renderHoverLight=!0,this._pickedPointObserver=this._host.onPickedPointChangedObservable.add(e=>{e?(this._backMaterial.hoverPosition=e,this._backMaterial.hoverColor.a=1):this._backMaterial.hoverColor.a=0})}_createFrontMaterial(t){this._frontMaterial=new st(this.name+"Front Material",t.getScene()),this._frontMaterial.innerGlowColorIntensity=0,this._frontMaterial.alpha=.5,this._frontMaterial.renderBorders=!0}_createPlateMaterial(t){this._plateMaterial=new De(this.name+"Plate Material",t.getScene()),this._plateMaterial.specularColor=w.Black()}_affectMaterial(t){this._shareMaterials?(this._host._sharedMaterials.backFluentMaterial?this._backMaterial=this._host._sharedMaterials.backFluentMaterial:(this._createBackMaterial(t),this._host._sharedMaterials.backFluentMaterial=this._backMaterial),this._host._sharedMaterials.frontFluentMaterial?this._frontMaterial=this._host._sharedMaterials.frontFluentMaterial:(this._createFrontMaterial(t),this._host._sharedMaterials.frontFluentMaterial=this._frontMaterial)):(this._createBackMaterial(t),this._createFrontMaterial(t)),this._createPlateMaterial(t),this._backPlate.material=this._backMaterial,this._frontPlate.material=this._frontMaterial,this._textPlate.material=this._plateMaterial,this._rebuildContent()}dispose(){super.dispose(),this._disposeTooltip(),this.shareMaterials||(this._backMaterial.dispose(),this._frontMaterial.dispose(),this._plateMaterial.dispose(),this._pickedPointObserver&&(this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver),this._pickedPointObserver=null))}}const Zs="fluentButtonPixelShader",qs=`uniform vec3 cameraPosition;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
uniform float _Edge_Width_;
uniform vec4 _Edge_Color_;
uniform bool _Relative_Width_;
uniform float _Proximity_Max_Intensity_;
uniform float _Proximity_Far_Distance_;
uniform float _Proximity_Near_Radius_;
uniform float _Proximity_Anisotropy_;
uniform float _Selection_Fuzz_;
uniform float _Selected_;
uniform float _Selection_Fade_;
uniform float _Selection_Fade_Size_;
uniform float _Selected_Distance_;
uniform float _Selected_Fade_Length_;
uniform bool _Blob_Enable_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Inner_Fade_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform bool _Blob_Enable_2_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Inner_Fade_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform vec3 _Active_Face_Dir_;
uniform vec3 _Active_Face_Up_;
uniform bool Enable_Fade;
uniform float _Fade_Width_;
uniform bool _Smooth_Active_Face_;
uniform bool _Show_Frame_;
uniform bool _Use_Blob_Texture_;
uniform bool Use_Global_Left_Index;
uniform bool Use_Global_Right_Index;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
uniform vec4 Global_Left_Thumb_Tip_Position;
uniform vec4 Global_Right_Thumb_Tip_Position;
uniform float Global_Left_Index_Tip_Proximity;
uniform float Global_Right_Index_Tip_Proximity;
void Holo_Edge_Fragment_B35(
vec4 Edges,
float Edge_Width,
out float NotEdge)
{
vec2 c=vec2(min(Edges.r,Edges.g),min(Edges.b,Edges.a));
vec2 df=fwidth(c)*Edge_Width;
vec2 g=clamp(c/df,0.0,1.0);
NotEdge=g.x*g.y;
}
void Blob_Fragment_B39(
vec2 UV,
vec3 Blob_Info,
sampler2D Blob_Texture,
out vec4 Blob_Color)
{
float k=dot(UV,UV);
Blob_Color=Blob_Info.y*texture(Blob_Texture,vec2(vec2(sqrt(k),Blob_Info.x).x,1.0-vec2(sqrt(k),Blob_Info.x).y))*(1.0-clamp(k,0.0,1.0));
}
vec2 FilterStep(vec2 Edge,vec2 X)
{
vec2 dX=max(fwidth(X),vec2(0.00001,0.00001));
return clamp( (X+dX-max(Edge,X-dX))/(dX*2.0),0.0,1.0);
}
void Wireframe_Fragment_B59(
vec3 Widths,
vec2 UV,
float Proximity,
vec4 Edge_Color,
out vec4 Wireframe)
{
vec2 c=min(UV,vec2(1.0,1.0)-UV);
vec2 g=FilterStep(Widths.xy*0.5,c); 
Wireframe=(1.0-min(g.x,g.y))*Proximity*Edge_Color;
}
void Proximity_B53(
vec3 Proximity_Center,
vec3 Proximity_Center_2,
float Proximity_Max_Intensity,
float Proximity_Near_Radius,
vec3 Position,
vec3 Show_Selection,
vec4 Extra1,
float Dist_To_Face,
float Intensity,
out float Proximity)
{
vec2 delta1=Extra1.xy;
vec2 delta2=Extra1.zw;
float d2=sqrt(min(dot(delta1,delta1),dot(delta2,delta2))+Dist_To_Face*Dist_To_Face);
Proximity=Intensity*Proximity_Max_Intensity*(1.0-clamp(d2/Proximity_Near_Radius,0.0,1.0))*(1.0-Show_Selection.x)+Show_Selection.x;
}
void To_XYZ_B46(
vec3 Vec3,
out float X,
out float Y,
out float Z)
{
X=Vec3.x;
Y=Vec3.y;
Z=Vec3.z;
}
void main()
{
float NotEdge_Q35;
#if ENABLE_FADE
Holo_Edge_Fragment_B35(vColor,_Fade_Width_,NotEdge_Q35);
#else
NotEdge_Q35=1.0;
#endif
vec4 Blob_Color_Q39;
float k=dot(vUV,vUV);
vec2 blobTextureCoord=vec2(vec2(sqrt(k),vTangent.x).x,1.0-vec2(sqrt(k),vTangent.x).y);
vec4 blobColor=mix(vec4(1.0,1.0,1.0,1.0)*step(1.0-vTangent.x,clamp(sqrt(k)+0.1,0.0,1.0)),texture(_Blob_Texture_,blobTextureCoord),float(_Use_Blob_Texture_));
Blob_Color_Q39=vTangent.y*blobColor*(1.0-clamp(k,0.0,1.0));
float Is_Quad_Q24;
Is_Quad_Q24=vNormal.z;
vec3 Blob_Position_Q41= mix(_Blob_Position_,Global_Left_Index_Tip_Position.xyz,float(Use_Global_Left_Index));
vec3 Blob_Position_Q42= mix(_Blob_Position_2_,Global_Right_Index_Tip_Position.xyz,float(Use_Global_Right_Index));
float X_Q46;
float Y_Q46;
float Z_Q46;
To_XYZ_B46(vBinormal,X_Q46,Y_Q46,Z_Q46);
float Proximity_Q53;
Proximity_B53(Blob_Position_Q41,Blob_Position_Q42,_Proximity_Max_Intensity_,_Proximity_Near_Radius_,vPosition,vBinormal,vExtra1,Y_Q46,Z_Q46,Proximity_Q53);
vec4 Wireframe_Q59;
Wireframe_Fragment_B59(vNormal,vUV,Proximity_Q53,_Edge_Color_,Wireframe_Q59);
vec4 Wire_Or_Blob_Q23=mix(Wireframe_Q59,Blob_Color_Q39,Is_Quad_Q24);
vec4 Result_Q22;
Result_Q22=mix(Wire_Or_Blob_Q23,vec4(0.3,0.3,0.3,0.3),float(_Show_Frame_));
vec4 Final_Color_Q37=NotEdge_Q35*Result_Q22;
vec4 Out_Color=Final_Color_Q37;
float Clip_Threshold=0.0;
bool To_sRGB=false;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[Zs]=qs;const $s="fluentButtonVertexShader",Js=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 tangent;
attribute vec4 color;
uniform float _Edge_Width_;
uniform vec4 _Edge_Color_;
uniform float _Proximity_Max_Intensity_;
uniform float _Proximity_Far_Distance_;
uniform float _Proximity_Near_Radius_;
uniform float _Proximity_Anisotropy_;
uniform float _Selection_Fuzz_;
uniform float _Selected_;
uniform float _Selection_Fade_;
uniform float _Selection_Fade_Size_;
uniform float _Selected_Distance_;
uniform float _Selected_Fade_Length_;
uniform bool _Blob_Enable_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Inner_Fade_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform bool _Blob_Enable_2_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Inner_Fade_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform vec3 _Active_Face_Dir_;
uniform vec3 _Active_Face_Up_;
uniform bool _Enable_Fade_;
uniform float _Fade_Width_;
uniform bool _Smooth_Active_Face_;
uniform bool _Show_Frame_;
uniform bool Use_Global_Left_Index;
uniform bool Use_Global_Right_Index;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
uniform vec4 Global_Left_Thumb_Tip_Position;
uniform vec4 Global_Right_Thumb_Tip_Position;
uniform float Global_Left_Index_Tip_Proximity;
uniform float Global_Right_Index_Tip_Proximity;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
void Blob_Vertex_B47(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
vec4 Vx_Color,
vec2 UV,
vec3 Face_Center,
vec2 Face_Size,
vec2 In_UV,
float Blob_Fade_Length,
float Selection_Fade,
float Selection_Fade_Size,
float Inner_Fade,
vec3 Active_Face_Center,
float Blob_Pulse,
float Blob_Fade,
float Blob_Enabled,
out vec3 Out_Position,
out vec2 Out_UV,
out vec3 Blob_Info)
{
float blobSize,fadeIn;
vec3 Hit_Position;
Blob_Info=vec3(0.0,0.0,0.0);
float Hit_Distance=dot(Blob_Position-Face_Center,Normal);
Hit_Position=Blob_Position-Hit_Distance*Normal;
float absD=abs(Hit_Distance);
float lerpVal=clamp((absD-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
fadeIn=1.0-clamp((absD-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float innerFade=1.0-clamp(-Hit_Distance/Inner_Fade,0.0,1.0);
float farClip=clamp(1.0-step(Blob_Far_Distance+Blob_Fade_Length,absD),0.0,1.0);
float size=mix(Blob_Near_Size,Blob_Far_Size,lerpVal)*farClip;
blobSize=mix(size,Selection_Fade_Size,Selection_Fade)*innerFade*Blob_Enabled;
Blob_Info.x=lerpVal*0.5+0.5;
Blob_Info.y=fadeIn*Intensity*(1.0-Selection_Fade)*Blob_Fade;
Blob_Info.x*=(1.0-Blob_Pulse);
vec3 delta=Hit_Position-Face_Center;
vec2 blobCenterXY=vec2(dot(delta,Tangent),dot(delta,Bitangent));
vec2 quadUVin=2.0*UV-1.0; 
vec2 blobXY=blobCenterXY+quadUVin*blobSize;
vec2 blobClipped=clamp(blobXY,-Face_Size*0.5,Face_Size*0.5);
vec2 blobUV=(blobClipped-blobCenterXY)/max(blobSize,0.0001)*2.0;
vec3 blobCorner=Face_Center+blobClipped.x*Tangent+blobClipped.y*Bitangent;
Out_Position=mix(Position,blobCorner,Vx_Color.rrr);
Out_UV=mix(In_UV,blobUV,Vx_Color.rr);
}
vec2 ProjectProximity(
vec3 blobPosition,
vec3 position,
vec3 center,
vec3 dir,
vec3 xdir,
vec3 ydir,
out float vdistance
)
{
vec3 delta=blobPosition-position;
vec2 xy=vec2(dot(delta,xdir),dot(delta,ydir));
vdistance=abs(dot(delta,dir));
return xy;
}
void Proximity_Vertex_B66(
vec3 Blob_Position,
vec3 Blob_Position_2,
vec3 Active_Face_Center,
vec3 Active_Face_Dir,
vec3 Position,
float Proximity_Far_Distance,
float Relative_Scale,
float Proximity_Anisotropy,
vec3 Up,
out vec4 Extra1,
out float Distance_To_Face,
out float Intensity)
{
vec3 Active_Face_Dir_X=normalize(cross(Active_Face_Dir,Up));
vec3 Active_Face_Dir_Y=cross(Active_Face_Dir,Active_Face_Dir_X);
float distz1,distz2;
Extra1.xy=ProjectProximity(Blob_Position,Position,Active_Face_Center,Active_Face_Dir,Active_Face_Dir_X*Proximity_Anisotropy,Active_Face_Dir_Y,distz1)/Relative_Scale;
Extra1.zw=ProjectProximity(Blob_Position_2,Position,Active_Face_Center,Active_Face_Dir,Active_Face_Dir_X*Proximity_Anisotropy,Active_Face_Dir_Y,distz2)/Relative_Scale;
Distance_To_Face=dot(Active_Face_Dir,Position-Active_Face_Center);
Intensity=1.0-clamp(min(distz1,distz2)/Proximity_Far_Distance,0.0,1.0);
}
void Holo_Edge_Vertex_B44(
vec3 Incident,
vec3 Normal,
vec2 UV,
vec3 Tangent,
vec3 Bitangent,
bool Smooth_Active_Face,
float Active,
out vec4 Holo_Edges)
{
float NdotI=dot(Incident,Normal);
vec2 flip=(UV-vec2(0.5,0.5));
float udot=dot(Incident,Tangent)*flip.x*NdotI;
float uval=1.0-float(udot>0.0);
float vdot=-dot(Incident,Bitangent)*flip.y*NdotI;
float vval=1.0-float(vdot>0.0);
float Smooth_And_Active=step(1.0,float(Smooth_Active_Face && Active>0.0));
uval=mix(uval,max(1.0,uval),Smooth_And_Active); 
vval=mix(vval,max(1.0,vval),Smooth_And_Active);
Holo_Edges=vec4(1.0,1.0,1.0,1.0)-vec4(uval*UV.x,uval*(1.0-UV.x),vval*UV.y,vval*(1.0-UV.y));
}
void Object_To_World_Pos_B13(
vec3 Pos_Object,
out vec3 Pos_World)
{
Pos_World=(world*vec4(Pos_Object,1.0)).xyz;
}
void Choose_Blob_B38(
vec4 Vx_Color,
vec3 Position1,
vec3 Position2,
bool Blob_Enable_1,
bool Blob_Enable_2,
float Near_Size_1,
float Near_Size_2,
float Blob_Inner_Fade_1,
float Blob_Inner_Fade_2,
float Blob_Pulse_1,
float Blob_Pulse_2,
float Blob_Fade_1,
float Blob_Fade_2,
out vec3 Position,
out float Near_Size,
out float Inner_Fade,
out float Blob_Enable,
out float Fade,
out float Pulse)
{
Position=Position1*(1.0-Vx_Color.g)+Vx_Color.g*Position2;
float b1=float(Blob_Enable_1);
float b2=float(Blob_Enable_2);
Blob_Enable=b1+(b2-b1)*Vx_Color.g;
Pulse=Blob_Pulse_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Pulse_2;
Fade=Blob_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Fade_2;
Near_Size=Near_Size_1*(1.0-Vx_Color.g)+Vx_Color.g*Near_Size_2;
Inner_Fade=Blob_Inner_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Inner_Fade_2;
}
void Wireframe_Vertex_B51(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
float Edge_Width,
vec2 Face_Size,
out vec3 Wire_Vx_Pos,
out vec2 UV,
out vec2 Widths)
{
Widths.xy=Edge_Width/Face_Size;
float x=dot(Position,Tangent);
float y=dot(Position,Bitangent);
float dx=0.5-abs(x);
float newx=(0.5-dx*Widths.x*2.0)*sign(x);
float dy=0.5-abs(y);
float newy=(0.5-dy*Widths.y*2.0)*sign(y);
Wire_Vx_Pos=Normal*0.5+newx*Tangent+newy*Bitangent;
UV.x=dot(Wire_Vx_Pos,Tangent)+0.5;
UV.y=dot(Wire_Vx_Pos,Bitangent)+0.5;
}
vec2 ramp2(vec2 start,vec2 end,vec2 x)
{
return clamp((x-start)/(end-start),vec2(0.0,0.0),vec2(1.0,1.0));
}
float computeSelection(
vec3 blobPosition,
vec3 normal,
vec3 tangent,
vec3 bitangent,
vec3 faceCenter,
vec2 faceSize,
float selectionFuzz,
float farDistance,
float fadeLength
)
{
vec3 delta=blobPosition-faceCenter;
float absD=abs(dot(delta,normal));
float fadeIn=1.0-clamp((absD-farDistance)/fadeLength,0.0,1.0);
vec2 blobCenterXY=vec2(dot(delta,tangent),dot(delta,bitangent));
vec2 innerFace=faceSize*(1.0-selectionFuzz)*0.5;
vec2 selectPulse=ramp2(-faceSize*0.5,-innerFace,blobCenterXY)-ramp2(innerFace,faceSize*0.5,blobCenterXY);
return selectPulse.x*selectPulse.y*fadeIn;
}
void Selection_Vertex_B48(
vec3 Blob_Position,
vec3 Blob_Position_2,
vec3 Face_Center,
vec2 Face_Size,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
float Selection_Fuzz,
float Selected,
float Far_Distance,
float Fade_Length,
vec3 Active_Face_Dir,
out float Show_Selection)
{
float select1=computeSelection(Blob_Position,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);
float select2=computeSelection(Blob_Position_2,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);
float Active=max(0.0,dot(Active_Face_Dir,Normal));
Show_Selection=mix(max(select1,select2),1.0,Selected)*Active;
}
void Proximity_Visibility_B54(
float Selection,
vec3 Proximity_Center,
vec3 Proximity_Center_2,
float Input_Width,
float Proximity_Far_Distance,
float Proximity_Radius,
vec3 Active_Face_Center,
vec3 Active_Face_Dir,
out float Width)
{
vec3 boxEdges=(world*vec4(vec3(0.5,0.5,0.5),0.0)).xyz;
float boxMaxSize=length(boxEdges);
float d1=dot(Proximity_Center-Active_Face_Center,Active_Face_Dir);
vec3 blob1=Proximity_Center-d1*Active_Face_Dir;
float d2=dot(Proximity_Center_2-Active_Face_Center,Active_Face_Dir);
vec3 blob2=Proximity_Center_2-d2*Active_Face_Dir;
vec3 delta1=blob1-Active_Face_Center;
vec3 delta2=blob2-Active_Face_Center;
float dist1=dot(delta1,delta1);
float dist2=dot(delta2,delta2);
float nearestProxDist=sqrt(min(dist1,dist2));
Width=Input_Width*(1.0-step(boxMaxSize+Proximity_Radius,nearestProxDist))*(1.0-step(Proximity_Far_Distance,min(d1,d2))*(1.0-step(0.0001,Selection)));
}
void Object_To_World_Dir_B67(
vec3 Dir_Object,
out vec3 Dir_World)
{
Dir_World=(world*vec4(Dir_Object,0.0)).xyz;
}
void main()
{
vec3 Active_Face_Center_Q49;
Active_Face_Center_Q49=(world*vec4(_Active_Face_Dir_*0.5,1.0)).xyz;
vec3 Blob_Position_Q41= mix(_Blob_Position_,Global_Left_Index_Tip_Position.xyz,float(Use_Global_Left_Index));
vec3 Blob_Position_Q42= mix(_Blob_Position_2_,Global_Right_Index_Tip_Position.xyz,float(Use_Global_Right_Index));
vec3 Active_Face_Dir_Q64=normalize((world*vec4(_Active_Face_Dir_,0.0)).xyz);
float Relative_Scale_Q57;
#if RELATIVE_WIDTH
Relative_Scale_Q57=length((world*vec4(vec3(0,1,0),0.0)).xyz);
#else
Relative_Scale_Q57=1.0;
#endif
vec3 Tangent_World_Q30;
Tangent_World_Q30=(world*vec4(tangent,0.0)).xyz;
vec3 Binormal_World_Q31;
Binormal_World_Q31=(world*vec4((cross(normal,tangent)),0.0)).xyz;
vec3 Normal_World_Q60;
Normal_World_Q60=(world*vec4(normal,0.0)).xyz;
vec3 Result_Q18=0.5*normal;
vec3 Dir_World_Q67;
Object_To_World_Dir_B67(_Active_Face_Up_,Dir_World_Q67);
float Product_Q56=_Edge_Width_*Relative_Scale_Q57;
vec3 Normal_World_N_Q29=normalize(Normal_World_Q60);
vec3 Tangent_World_N_Q28=normalize(Tangent_World_Q30);
vec3 Binormal_World_N_Q32=normalize(Binormal_World_Q31);
vec3 Position_Q38;
float Near_Size_Q38;
float Inner_Fade_Q38;
float Blob_Enable_Q38;
float Fade_Q38;
float Pulse_Q38;
Choose_Blob_B38(color,Blob_Position_Q41,Blob_Position_Q42,_Blob_Enable_,_Blob_Enable_2_,_Blob_Near_Size_,_Blob_Near_Size_2_,_Blob_Inner_Fade_,_Blob_Inner_Fade_2_,_Blob_Pulse_,_Blob_Pulse_2_,_Blob_Fade_,_Blob_Fade_2_,Position_Q38,Near_Size_Q38,Inner_Fade_Q38,Blob_Enable_Q38,Fade_Q38,Pulse_Q38);
vec3 Face_Center_Q33;
Face_Center_Q33=(world*vec4(Result_Q18,1.0)).xyz;
vec2 Face_Size_Q50=vec2(length(Tangent_World_Q30),length(Binormal_World_Q31));
float Show_Selection_Q48;
Selection_Vertex_B48(Blob_Position_Q41,Blob_Position_Q42,Face_Center_Q33,Face_Size_Q50,Normal_World_N_Q29,Tangent_World_N_Q28,Binormal_World_N_Q32,_Selection_Fuzz_,_Selected_,_Selected_Distance_,_Selected_Fade_Length_,Active_Face_Dir_Q64,Show_Selection_Q48);
vec3 Normalized_Q72=normalize(Dir_World_Q67);
float Active_Q34=max(0.0,dot(Active_Face_Dir_Q64,Normal_World_N_Q29));
float Width_Q54;
Proximity_Visibility_B54(Show_Selection_Q48,Blob_Position_Q41,Blob_Position_Q42,Product_Q56,_Proximity_Far_Distance_,_Proximity_Near_Radius_,Active_Face_Center_Q49,Active_Face_Dir_Q64,Width_Q54);
vec3 Wire_Vx_Pos_Q51;
vec2 UV_Q51;
vec2 Widths_Q51;
Wireframe_Vertex_B51(position,normal,tangent,(cross(normal,tangent)),Width_Q54,Face_Size_Q50,Wire_Vx_Pos_Q51,UV_Q51,Widths_Q51);
vec3 Vec3_Q27=vec3(Widths_Q51.x,Widths_Q51.y,color.r);
vec3 Pos_World_Q13;
Object_To_World_Pos_B13(Wire_Vx_Pos_Q51,Pos_World_Q13);
vec3 Incident_Q36=normalize(Pos_World_Q13-cameraPosition);
vec3 Out_Position_Q47;
vec2 Out_UV_Q47;
vec3 Blob_Info_Q47;
Blob_Vertex_B47(Pos_World_Q13,Normal_World_N_Q29,Tangent_World_N_Q28,Binormal_World_N_Q32,Position_Q38,_Blob_Intensity_,Near_Size_Q38,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,color,uv,Face_Center_Q33,Face_Size_Q50,UV_Q51,_Blob_Fade_Length_,_Selection_Fade_,_Selection_Fade_Size_,Inner_Fade_Q38,Active_Face_Center_Q49,Pulse_Q38,Fade_Q38,Blob_Enable_Q38,Out_Position_Q47,Out_UV_Q47,Blob_Info_Q47);
vec4 Extra1_Q66;
float Distance_To_Face_Q66;
float Intensity_Q66;
Proximity_Vertex_B66(Blob_Position_Q41,Blob_Position_Q42,Active_Face_Center_Q49,Active_Face_Dir_Q64,Pos_World_Q13,_Proximity_Far_Distance_,Relative_Scale_Q57,_Proximity_Anisotropy_,Normalized_Q72,Extra1_Q66,Distance_To_Face_Q66,Intensity_Q66);
vec4 Holo_Edges_Q44;
Holo_Edge_Vertex_B44(Incident_Q36,Normal_World_N_Q29,uv,Tangent_World_Q30,Binormal_World_Q31,_Smooth_Active_Face_,Active_Q34,Holo_Edges_Q44);
vec3 Vec3_Q19=vec3(Show_Selection_Q48,Distance_To_Face_Q66,Intensity_Q66);
vec3 Position=Out_Position_Q47;
vec2 UV=Out_UV_Q47;
vec3 Tangent=Blob_Info_Q47;
vec3 Binormal=Vec3_Q19;
vec3 Normal=Vec3_Q27;
vec4 Extra1=Extra1_Q66;
vec4 Color=Holo_Edges_Q44;
gl_Position=viewProjection*vec4(Position,1);
vPosition=Position;
vNormal=Normal;
vUV=UV;
vTangent=Tangent;
vBinormal=Binormal;
vColor=Color;
vExtra1=Extra1;
}`;ht.ShadersStore[$s]=Js;class to extends $t{constructor(){super(),this.RELATIVE_WIDTH=!0,this.ENABLE_FADE=!0,this._needNormals=!0,this._needUVs=!0,this.rebuild()}}class O extends qt{constructor(t,e){super(t,e),this.edgeWidth=.04,this.edgeColor=new A(.592157,.592157,.592157,1),this.proximityMaxIntensity=.45,this.proximityFarDistance=.16,this.proximityNearRadius=1.5,this.proximityAnisotropy=1,this.selectionFuzz=.5,this.selected=0,this.selectionFade=0,this.selectionFadeSize=.3,this.selectedDistance=.08,this.selectedFadeLength=.08,this.blobIntensity=.5,this.blobFarSize=.05,this.blobNearDistance=0,this.blobFarDistance=.08,this.blobFadeLength=.08,this.leftBlobEnable=!0,this.leftBlobNearSize=.025,this.leftBlobPulse=0,this.leftBlobFade=1,this.leftBlobInnerFade=.01,this.rightBlobEnable=!0,this.rightBlobNearSize=.025,this.rightBlobPulse=0,this.rightBlobFade=1,this.rightBlobInnerFade=.01,this.activeFaceDir=new c(0,0,-1),this.activeFaceUp=new c(0,1,0),this.enableFade=!0,this.fadeWidth=1.5,this.smoothActiveFace=!0,this.showFrame=!1,this.useBlobTexture=!0,this.globalLeftIndexTipPosition=c.Zero(),this.globalRightIndexTipPosition=c.Zero(),this.alphaMode=Lt.ALPHA_ADD,this.disableDepthWrite=!0,this.backFaceCulling=!1,this._blobTexture=new S(O.BLOB_TEXTURE_URL,this.getScene(),!0,!1,S.NEAREST_SAMPLINGMODE)}needAlphaBlending(){return!0}needAlphaTesting(){return!0}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new to);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!0,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="fluentButton",h=i.toString(),d=["world","viewProjection","cameraPosition","_Edge_Width_","_Edge_Color_","_Relative_Width_","_Proximity_Max_Intensity_","_Proximity_Far_Distance_","_Proximity_Near_Radius_","_Proximity_Anisotropy_","_Selection_Fuzz_","_Selected_","_Selection_Fade_","_Selection_Fade_Size_","_Selected_Distance_","_Selected_Fade_Length_","_Blob_Enable_","_Blob_Position_","_Blob_Intensity_","_Blob_Near_Size_","_Blob_Far_Size_","_Blob_Near_Distance_","_Blob_Far_Distance_","_Blob_Fade_Length_","_Blob_Inner_Fade_","_Blob_Pulse_","_Blob_Fade_","_Blob_Texture_","_Blob_Enable_2_","_Blob_Position_2_","_Blob_Near_Size_2_","_Blob_Inner_Fade_2_","_Blob_Pulse_2_","_Blob_Fade_2_","_Active_Face_Dir_","_Active_Face_Up_","_Enable_Fade_","_Fade_Width_","_Smooth_Active_Face_","_Show_Frame_","_Use_Blob_Texture_","Use_Global_Left_Index","Use_Global_Right_Index","Global_Left_Index_Tip_Position","Global_Right_Index_Tip_Position","Global_Left_Thumb_Tip_Position","Global_Right_Thumb_Tip_Position","Global_Left_Index_Tip_Proximity","Global_Right_Index_Tip_Proximity"],f=["_Blob_Texture_"],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i,this._materialContext)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){const s=this.getScene();if(!i.materialDefines)return;const r=i.effect;r&&(this._activeEffect=r,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",s.activeCamera.position),this._activeEffect.setTexture("_Blob_Texture_",this._blobTexture),this._activeEffect.setFloat("_Edge_Width_",this.edgeWidth),this._activeEffect.setColor4("_Edge_Color_",new w(this.edgeColor.r,this.edgeColor.g,this.edgeColor.b),this.edgeColor.a),this._activeEffect.setFloat("_Proximity_Max_Intensity_",this.proximityMaxIntensity),this._activeEffect.setFloat("_Proximity_Far_Distance_",this.proximityFarDistance),this._activeEffect.setFloat("_Proximity_Near_Radius_",this.proximityNearRadius),this._activeEffect.setFloat("_Proximity_Anisotropy_",this.proximityAnisotropy),this._activeEffect.setFloat("_Selection_Fuzz_",this.selectionFuzz),this._activeEffect.setFloat("_Selected_",this.selected),this._activeEffect.setFloat("_Selection_Fade_",this.selectionFade),this._activeEffect.setFloat("_Selection_Fade_Size_",this.selectionFadeSize),this._activeEffect.setFloat("_Selected_Distance_",this.selectedDistance),this._activeEffect.setFloat("_Selected_Fade_Length_",this.selectedFadeLength),this._activeEffect.setFloat("_Blob_Enable_",this.leftBlobEnable?1:0),this._activeEffect.setFloat("_Blob_Intensity_",this.blobIntensity),this._activeEffect.setFloat("_Blob_Near_Size_",this.leftBlobNearSize),this._activeEffect.setFloat("_Blob_Far_Size_",this.blobFarSize),this._activeEffect.setFloat("_Blob_Near_Distance_",this.blobNearDistance),this._activeEffect.setFloat("_Blob_Far_Distance_",this.blobFarDistance),this._activeEffect.setFloat("_Blob_Fade_Length_",this.blobFadeLength),this._activeEffect.setFloat("_Blob_Inner_Fade_",this.leftBlobInnerFade),this._activeEffect.setFloat("_Blob_Pulse_",this.leftBlobPulse),this._activeEffect.setFloat("_Blob_Fade_",this.leftBlobFade),this._activeEffect.setFloat("_Blob_Enable_2_",this.rightBlobEnable?1:0),this._activeEffect.setFloat("_Blob_Near_Size_2_",this.rightBlobNearSize),this._activeEffect.setFloat("_Blob_Inner_Fade_2_",this.rightBlobInnerFade),this._activeEffect.setFloat("_Blob_Pulse_2_",this.rightBlobPulse),this._activeEffect.setFloat("_Blob_Fade_2_",this.rightBlobFade),this._activeEffect.setVector3("_Active_Face_Dir_",this.activeFaceDir),this._activeEffect.setVector3("_Active_Face_Up_",this.activeFaceUp),this._activeEffect.setFloat("_Fade_Width_",this.fadeWidth),this._activeEffect.setFloat("_Smooth_Active_Face_",this.smoothActiveFace?1:0),this._activeEffect.setFloat("_Show_Frame_",this.showFrame?1:0),this._activeEffect.setFloat("_Use_Blob_Texture_",this.useBlobTexture?1:0),this._activeEffect.setFloat("Use_Global_Left_Index",1),this._activeEffect.setFloat("Use_Global_Right_Index",1),this._activeEffect.setVector4("Global_Left_Index_Tip_Position",new nt(this.globalLeftIndexTipPosition.x,this.globalLeftIndexTipPosition.y,this.globalLeftIndexTipPosition.z,1)),this._activeEffect.setVector4("Global_Right_Index_Tip_Position",new nt(this.globalRightIndexTipPosition.x,this.globalRightIndexTipPosition.y,this.globalRightIndexTipPosition.z,1)),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t)}clone(t){return X.Clone(()=>new O(t,this.getScene()),this)}serialize(){const t=super.serialize();return t.customType="BABYLON.FluentButtonMaterial",t}getClassName(){return"FluentButtonMaterial"}static Parse(t,e,i){return X.Parse(()=>new O(t.name,e),t,e,i)}}O.BLOB_TEXTURE_URL="https://assets.babylonjs.com/meshes/MRTK/mrtk-fluent-button-blob.png";n([_()],O.prototype,"edgeWidth",void 0);n([Ki()],O.prototype,"edgeColor",void 0);n([_()],O.prototype,"proximityMaxIntensity",void 0);n([_()],O.prototype,"proximityFarDistance",void 0);n([_()],O.prototype,"proximityNearRadius",void 0);n([_()],O.prototype,"proximityAnisotropy",void 0);n([_()],O.prototype,"selectionFuzz",void 0);n([_()],O.prototype,"selected",void 0);n([_()],O.prototype,"selectionFade",void 0);n([_()],O.prototype,"selectionFadeSize",void 0);n([_()],O.prototype,"selectedDistance",void 0);n([_()],O.prototype,"selectedFadeLength",void 0);n([_()],O.prototype,"blobIntensity",void 0);n([_()],O.prototype,"blobFarSize",void 0);n([_()],O.prototype,"blobNearDistance",void 0);n([_()],O.prototype,"blobFarDistance",void 0);n([_()],O.prototype,"blobFadeLength",void 0);n([_()],O.prototype,"leftBlobEnable",void 0);n([_()],O.prototype,"leftBlobNearSize",void 0);n([_()],O.prototype,"leftBlobPulse",void 0);n([_()],O.prototype,"leftBlobFade",void 0);n([_()],O.prototype,"leftBlobInnerFade",void 0);n([_()],O.prototype,"rightBlobEnable",void 0);n([_()],O.prototype,"rightBlobNearSize",void 0);n([_()],O.prototype,"rightBlobPulse",void 0);n([_()],O.prototype,"rightBlobFade",void 0);n([_()],O.prototype,"rightBlobInnerFade",void 0);n([Ie()],O.prototype,"activeFaceDir",void 0);n([Ie()],O.prototype,"activeFaceUp",void 0);n([_()],O.prototype,"enableFade",void 0);n([_()],O.prototype,"fadeWidth",void 0);n([_()],O.prototype,"smoothActiveFace",void 0);n([_()],O.prototype,"showFrame",void 0);n([_()],O.prototype,"useBlobTexture",void 0);n([Ie()],O.prototype,"globalLeftIndexTipPosition",void 0);n([Ie()],O.prototype,"globalRightIndexTipPosition",void 0);N("BABYLON.GUI.FluentButtonMaterial",O);class is extends Oi{constructor(t,e){super(t),this._isNearPressed=!1,this._interactionSurfaceHeight=0,this._isToggleButton=!1,this._toggleState=!1,this._toggleButtonCallback=()=>{this._onToggle(!this._toggleState)},this.onToggleObservable=new B,this.collidableFrontDirection=c.Zero(),e&&(this.collisionMesh=e)}get isActiveNearInteraction(){return this._isNearPressed}set collidableFrontDirection(t){if(this._collidableFrontDirection=t.normalize(),this._collisionMesh){const e=E.Matrix[0];e.copyFrom(this._collisionMesh.getWorldMatrix()),e.invert(),c.TransformNormalToRef(this._collidableFrontDirection,e,this._collidableFrontDirection),this._collidableFrontDirection.normalize()}}get collidableFrontDirection(){if(this._collisionMesh){const t=E.Vector3[0];return c.TransformNormalToRef(this._collidableFrontDirection,this._collisionMesh.getWorldMatrix(),t),t.normalize()}return this._collidableFrontDirection}set collisionMesh(t){var e;this._collisionMesh&&(this._collisionMesh.isNearPickable=!1,!((e=this._collisionMesh.reservedDataStore)===null||e===void 0)&&e.GUI3D&&(this._collisionMesh.reservedDataStore.GUI3D={}),this._collisionMesh.getChildMeshes().forEach(i=>{var s;i.isNearPickable=!1,!((s=i.reservedDataStore)===null||s===void 0)&&s.GUI3D&&(i.reservedDataStore.GUI3D={})})),this._collisionMesh=t,this._injectGUI3DReservedDataStore(this._collisionMesh).control=this,this._collisionMesh.isNearPickable=!0,this._collisionMesh.getChildMeshes().forEach(i=>{this._injectGUI3DReservedDataStore(i).control=this,i.isNearPickable=!0}),this.collidableFrontDirection=t.forward}set isToggleButton(t){t!==this._isToggleButton&&(this._isToggleButton=t,t?this.onPointerUpObservable.add(this._toggleButtonCallback):(this.onPointerUpObservable.removeCallback(this._toggleButtonCallback),this._toggleState&&this._onToggle(!1)))}get isToggleButton(){return this._isToggleButton}set isToggled(t){this._isToggleButton&&this._toggleState!==t&&this._onToggle(t)}get isToggled(){return this._toggleState}_onToggle(t){this._toggleState=t,this.onToggleObservable.notifyObservers(t)}_isInteractionInFrontOfButton(t){return this._getInteractionHeight(t,this._collisionMesh.getAbsolutePosition())>0}getPressDepth(t){if(!this._isNearPressed)return 0;const e=this._getInteractionHeight(t,this._collisionMesh.getAbsolutePosition());return this._interactionSurfaceHeight-e}_getInteractionHeight(t,e){const i=this.collidableFrontDirection;if(i.length()===0)return c.Distance(t,e);const s=c.Dot(e,i);return c.Dot(t,i)-s}_generatePointerEventType(t,e,i){if(t===L.POINTERDOWN||t===L.POINTERMOVE)if(this._isInteractionInFrontOfButton(e))this._isNearPressed=!0,this._interactionSurfaceHeight=this._getInteractionHeight(e,this._collisionMesh.getAbsolutePosition());else return L.POINTERMOVE;if(t===L.POINTERUP){if(i==0)return L.POINTERMOVE;this._isNearPressed=!1}return t}_getTypeName(){return"TouchButton3D"}_createNode(t){return super._createNode(t)}dispose(){super.dispose(),this.onPointerUpObservable.removeCallback(this._toggleButtonCallback),this.onToggleObservable.clear(),this._collisionMesh&&this._collisionMesh.dispose()}}class ae extends is{_disposeTooltip(){this._tooltipFade=null,this._tooltipTextBlock&&this._tooltipTextBlock.dispose(),this._tooltipTexture&&this._tooltipTexture.dispose(),this._tooltipMesh&&this._tooltipMesh.dispose(),this.onPointerEnterObservable.remove(this._tooltipHoverObserver),this.onPointerOutObservable.remove(this._tooltipOutObserver)}set renderingGroupId(t){this._backPlate.renderingGroupId=t,this._textPlate.renderingGroupId=t,this._frontPlate.renderingGroupId=t,this._tooltipMesh&&(this._tooltipMesh.renderingGroupId=t)}get renderingGroupId(){return this._backPlate.renderingGroupId}get mesh(){return this._backPlate}set tooltipText(t){if(!t){this._disposeTooltip();return}if(!this._tooltipFade){const e=this._backPlate._scene.useRightHandedSystem;this._tooltipMesh=jt("",{size:1},this._backPlate._scene);const i=jt("",{size:1,sideOrientation:Ke.DOUBLESIDE},this._backPlate._scene),s=new De("",this._backPlate._scene);s.diffuseColor=w.FromHexString("#212121"),i.material=s,i.isPickable=!1,this._tooltipMesh.addChild(i),i.position=c.Forward(e).scale(.05),this._tooltipMesh.scaling.y=1/3,this._tooltipMesh.position=c.Up().scale(.7).add(c.Forward(e).scale(-.15)),this._tooltipMesh.isPickable=!1,this._tooltipMesh.parent=this._backPlate,this._tooltipTexture=lt.CreateForMesh(this._tooltipMesh),this._tooltipTextBlock=new U,this._tooltipTextBlock.scaleY=3,this._tooltipTextBlock.color="white",this._tooltipTextBlock.fontSize=130,this._tooltipTexture.addControl(this._tooltipTextBlock),this._tooltipFade=new Zi,this._tooltipFade.delay=500,this._tooltipMesh.addBehavior(this._tooltipFade),this._tooltipHoverObserver=this.onPointerEnterObservable.add(()=>{this._tooltipFade&&this._tooltipFade.fadeIn(!0)}),this._tooltipOutObserver=this.onPointerOutObservable.add(()=>{this._tooltipFade&&this._tooltipFade.fadeIn(!1)})}this._tooltipTextBlock&&(this._tooltipTextBlock.text=t)}get tooltipText(){return this._tooltipTextBlock?this._tooltipTextBlock.text:null}get text(){return this._text}set text(t){this._text!==t&&(this._text=t,this._rebuildContent())}get imageUrl(){return this._imageUrl}set imageUrl(t){this._imageUrl!==t&&(this._imageUrl=t,this._rebuildContent())}get backMaterial(){return this._backMaterial}get frontMaterial(){return this._frontMaterial}get plateMaterial(){return this._plateMaterial}get shareMaterials(){return this._shareMaterials}set isBackplateVisible(t){this.mesh&&this._backMaterial&&(t&&!this._isBackplateVisible?this._backPlate.visibility=1:!t&&this._isBackplateVisible&&(this._backPlate.visibility=0)),this._isBackplateVisible=t}constructor(t,e=!0){super(t),this._shareMaterials=!0,this._isBackplateVisible=!0,this._frontPlateDepth=.5,this._backPlateDepth=.04,this._backplateColor=new w(.08,.15,.55),this._backplateToggledColor=new w(.25,.4,.95),this._shareMaterials=e,this.pointerEnterAnimation=()=>{this._frontMaterial.leftBlobEnable=!0,this._frontMaterial.rightBlobEnable=!0},this.pointerOutAnimation=()=>{this._frontMaterial.leftBlobEnable=!1,this._frontMaterial.rightBlobEnable=!1},this.pointerDownAnimation=()=>{this._frontPlate&&!this.isActiveNearInteraction&&(this._frontPlate.scaling.z=this._frontPlateDepth*.2,this._frontPlate.position=c.Forward(this._frontPlate._scene.useRightHandedSystem).scale((this._frontPlateDepth-.2*this._frontPlateDepth)/2),this._textPlate.position=c.Forward(this._textPlate._scene.useRightHandedSystem).scale(-(this._backPlateDepth+.2*this._frontPlateDepth)/2))},this.pointerUpAnimation=()=>{this._frontPlate&&(this._frontPlate.scaling.z=this._frontPlateDepth,this._frontPlate.position=c.Forward(this._frontPlate._scene.useRightHandedSystem).scale((this._frontPlateDepth-this._frontPlateDepth)/2),this._textPlate.position=c.Forward(this._textPlate._scene.useRightHandedSystem).scale(-(this._backPlateDepth+this._frontPlateDepth)/2))},this.onPointerMoveObservable.add(i=>{if(this._frontPlate&&this.isActiveNearInteraction){const s=c.Zero();if(this._backPlate.getWorldMatrix().decompose(s,void 0,void 0)){let o=this._getInteractionHeight(i,this._backPlate.getAbsolutePosition())/s.z;o=He.Clamp(o-this._backPlateDepth/2,.2*this._frontPlateDepth,this._frontPlateDepth),this._frontPlate.scaling.z=o,this._frontPlate.position=c.Forward(this._frontPlate._scene.useRightHandedSystem).scale((this._frontPlateDepth-o)/2),this._textPlate.position=c.Forward(this._textPlate._scene.useRightHandedSystem).scale(-(this._backPlateDepth+o)/2)}}}),this._pointerHoverObserver=this.onPointerMoveObservable.add(i=>{this._frontMaterial.globalLeftIndexTipPosition=i})}_getTypeName(){return"TouchHolographicButton"}_rebuildContent(){this._disposeFacadeTexture();const t=new Tt;if(t.isVertical=!0,ji.IsDocumentAvailable()&&document.createElement&&this._imageUrl){const e=new T;e.source=this._imageUrl,e.paddingTop="40px",e.height="180px",e.width="100px",e.paddingBottom="40px",t.addControl(e)}if(this._text){const e=new U;e.text=this._text,e.color="white",e.height="30px",e.fontSize=24,t.addControl(e)}this.content=t}_createNode(t){var e;this.name=(e=this.name)!==null&&e!==void 0?e:"TouchHolographicButton";const i=wt(`${this.name}_collisionMesh`,{width:1,height:1,depth:this._frontPlateDepth},t);i.isPickable=!0,i.isNearPickable=!0,i.visibility=0,i.position=c.Forward(t.useRightHandedSystem).scale(-this._frontPlateDepth/2),Ci.ImportMeshAsync(void 0,ae.MODEL_BASE_URL,ae.MODEL_FILENAME,t).then(o=>{const r=wt("${this.name}_alphaMesh",{width:1,height:1,depth:1},t);r.isPickable=!1,r.material=new De("${this.name}_alphaMesh_material",t),r.material.alpha=.15;const a=o.meshes[1];a.name=`${this.name}_frontPlate`,a.isPickable=!1,a.scaling.z=this._frontPlateDepth,r.parent=a,a.parent=i,this._frontMaterial&&(a.material=this._frontMaterial),this._frontPlate=a}),this._backPlate=wt(`${this.name}_backPlate`,{width:1,height:1,depth:this._backPlateDepth},t),this._backPlate.position=c.Forward(t.useRightHandedSystem).scale(this._backPlateDepth/2),this._backPlate.isPickable=!1,this._textPlate=super._createNode(t),this._textPlate.name=`${this.name}_textPlate`,this._textPlate.isPickable=!1,this._textPlate.position=c.Forward(t.useRightHandedSystem).scale(-this._frontPlateDepth/2),this._backPlate.addChild(i),this._backPlate.addChild(this._textPlate);const s=new ye("{this.name}_root",t);return this._backPlate.setParent(s),this.collisionMesh=i,this.collidableFrontDirection=this._backPlate.forward.negate(),s}_applyFacade(t){this._plateMaterial.emissiveTexture=t,this._plateMaterial.opacityTexture=t,this._plateMaterial.diffuseColor=new w(.4,.4,.4)}_createBackMaterial(t){this._backMaterial=new st(this.name+"backPlateMaterial",t.getScene()),this._backMaterial.albedoColor=this._backplateColor,this._backMaterial.renderBorders=!0,this._backMaterial.renderHoverLight=!1}_createFrontMaterial(t){this._frontMaterial=new O(this.name+"Front Material",t.getScene())}_createPlateMaterial(t){this._plateMaterial=new De(this.name+"Plate Material",t.getScene()),this._plateMaterial.specularColor=w.Black()}_onToggle(t){this._backMaterial&&(t?this._backMaterial.albedoColor=this._backplateToggledColor:this._backMaterial.albedoColor=this._backplateColor),super._onToggle(t)}_affectMaterial(t){this._shareMaterials?(this._host._touchSharedMaterials.backFluentMaterial?this._backMaterial=this._host._touchSharedMaterials.backFluentMaterial:(this._createBackMaterial(t),this._host._touchSharedMaterials.backFluentMaterial=this._backMaterial),this._host._touchSharedMaterials.frontFluentMaterial?this._frontMaterial=this._host._touchSharedMaterials.frontFluentMaterial:(this._createFrontMaterial(t),this._host._touchSharedMaterials.frontFluentMaterial=this._frontMaterial)):(this._createBackMaterial(t),this._createFrontMaterial(t)),this._createPlateMaterial(t),this._backPlate.material=this._backMaterial,this._textPlate.material=this._plateMaterial,this._isBackplateVisible||(this._backPlate.visibility=0),this._frontPlate&&(this._frontPlate.material=this._frontMaterial),this._rebuildContent()}dispose(){super.dispose(),this._disposeTooltip(),this.onPointerMoveObservable.remove(this._pointerHoverObserver),this.shareMaterials||(this._backMaterial.dispose(),this._frontMaterial.dispose(),this._plateMaterial.dispose(),this._pickedPointObserver&&(this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver),this._pickedPointObserver=null))}}ae.MODEL_BASE_URL="https://assets.babylonjs.com/meshes/MRTK/";ae.MODEL_FILENAME="mrtk-fluent-button.glb";class ss{constructor(){this.followBehaviorEnabled=!1,this.sixDofDragBehaviorEnabled=!0,this.surfaceMagnetismBehaviorEnabled=!0,this._followBehavior=new Fs,this._sixDofDragBehavior=new Ts,this._surfaceMagnetismBehavior=new Os}get name(){return"Default"}get followBehavior(){return this._followBehavior}get sixDofDragBehavior(){return this._sixDofDragBehavior}get surfaceMagnetismBehavior(){return this._surfaceMagnetismBehavior}init(){}attach(t,e,i){this._scene=t.getScene(),this.attachedNode=t,this._addObservables(),this._followBehavior.attach(t),this._sixDofDragBehavior.attach(t),this._sixDofDragBehavior.draggableMeshes=e||null,this._sixDofDragBehavior.faceCameraOnDragStart=!0,this._surfaceMagnetismBehavior.attach(t,this._scene),i&&(this._surfaceMagnetismBehavior.meshes=i),this._surfaceMagnetismBehavior.enabled=!1}detach(){this.attachedNode=null,this._removeObservables(),this._followBehavior.detach(),this._sixDofDragBehavior.detach(),this._surfaceMagnetismBehavior.detach()}_addObservables(){this._onBeforeRenderObserver=this._scene.onBeforeRenderObservable.add(()=>{this._followBehavior._enabled=!this._sixDofDragBehavior.isMoving&&this.followBehaviorEnabled}),this._onDragObserver=this._sixDofDragBehavior.onDragObservable.add(t=>{this._sixDofDragBehavior.disableMovement=this._surfaceMagnetismBehavior.findAndUpdateTarget(t.pickInfo)})}_removeObservables(){this._scene.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._sixDofDragBehavior.onDragObservable.remove(this._onDragObserver)}}const eo="handleVertexShader",io=`precision highp float;
attribute vec3 position;
uniform vec3 positionOffset;
uniform mat4 worldViewProjection;
uniform float scale;
void main(void) {
vec4 vPos=vec4((vec3(position)+positionOffset)*scale,1.0);
gl_Position=worldViewProjection*vPos;
}`;ht.ShadersStore[eo]=io;const so="handlePixelShader",oo=`uniform vec3 color;
void main(void) {
gl_FragColor=vec4(color,1.0);
}`;ht.ShadersStore[so]=oo;class ro extends Wi{get hover(){return this._hover}set hover(t){this._hover=t,this._updateInterpolationTarget()}get drag(){return this._drag}set drag(t){this._drag=t,this._updateInterpolationTarget()}constructor(t,e){super(t,e,"handle",{attributes:["position"],uniforms:["worldViewProjection","color","scale","positionOffset"],needAlphaBlending:!1,needAlphaTesting:!1}),this._hover=!1,this._drag=!1,this._color=new w,this._scale=1,this._lastTick=-1,this.animationLength=100,this.hoverColor=new w(0,.467,.84),this.baseColor=new w(1,1,1),this.hoverScale=.75,this.baseScale=.35,this.dragScale=.55,this._positionOffset=c.Zero(),this._updateInterpolationTarget(),this._lastTick=Date.now(),this._onBeforeRender=this.getScene().onBeforeRenderObservable.add(()=>{const i=Date.now(),s=i-this._lastTick,o=this._targetScale-this._scale,r=Ni.Color3[0].copyFrom(this._targetColor).subtractToRef(this._color,Ni.Color3[0]);this._scale=this._scale+o*s/this.animationLength,r.scaleToRef(s/this.animationLength,r),this._color.addToRef(r,this._color),this.setColor3("color",this._color),this.setFloat("scale",this._scale),this.setVector3("positionOffset",this._positionOffset),this._lastTick=i})}_updateInterpolationTarget(){this.drag?(this._targetColor=this.hoverColor,this._targetScale=this.dragScale):this.hover?(this._targetColor=this.hoverColor,this._targetScale=this.hoverScale):(this._targetColor=this.baseColor,this._targetScale=this.baseScale)}dispose(){super.dispose(),this.getScene().onBeforeRenderObservable.remove(this._onBeforeRender)}}var Kt;(function(m){m[m.IDLE=0]="IDLE",m[m.HOVER=1]="HOVER",m[m.DRAG=2]="DRAG"})(Kt||(Kt={}));class os{get state(){return this._state}get gizmo(){return this._gizmo}set hover(t){t?this._state|=Kt.HOVER:this._state&=~Kt.HOVER,this._updateMaterial()}set drag(t){t?this._state|=Kt.DRAG:this._state&=~Kt.DRAG,this._updateMaterial()}constructor(t,e){this._state=Kt.IDLE,this._materials=[],this._scene=e,this._gizmo=t,this.node=this.createNode(),this.node.reservedDataStore={handle:this}}_createMaterial(t){const e=new ro("handle",this._scene);return t&&(e._positionOffset=t),e}_updateMaterial(){const t=this._state;for(const e of this._materials)e.hover=!1,e.drag=!1;if(t&Kt.DRAG)for(const e of this._materials)e.drag=!0;else if(t&Kt.HOVER)for(const e of this._materials)e.hover=!0}setDragBehavior(t,e,i){const s=new Cs;this._dragBehavior=s,this._dragStartObserver=s.onDragStartObservable.add(t),this._draggingObserver=s.onDragObservable.add(e),this._dragEndObserver=s.onDragEndObservable.add(i),this._dragBehavior.attach(this.node)}dispose(){this._dragBehavior.onDragStartObservable.remove(this._dragStartObserver),this._dragBehavior.onDragObservable.remove(this._draggingObserver),this._dragBehavior.onDragEndObservable.remove(this._dragEndObserver),this._dragBehavior.detach();for(const t of this._materials)t.dispose();this.node.dispose()}}class ao extends os{createNode(){const t=wt("sideVert",{width:1,height:10,depth:.1},this._scene),e=new ye("side",this._scene);t.parent=e;const i=this._createMaterial();return t.material=i,t.isNearGrabbable=!0,this._materials.push(i),e}}class no extends os{createNode(){const t=wt("angleHor",{width:3,height:1,depth:.1},this._scene),e=wt("angleVert",{width:1,height:3,depth:.1},this._scene),i=new ye("angle",this._scene);return t.parent=i,e.parent=i,t.material=this._createMaterial(new c(1,0,0)),e.material=this._createMaterial(new c(0,1,0)),e.isNearGrabbable=!0,t.isNearGrabbable=!0,this._materials.push(t.material),this._materials.push(e.material),i}}class _o extends Rs{set attachedSlate(t){t?(this.attachedMesh=t.mesh,this.updateBoundingBox(),this._pickedPointObserver=t._host.onPickingObservable.add(e=>{if(this._handleHovered&&(!e||e.parent!==this._handleHovered.node)&&(this._handleHovered.hover=!1,this._handleHovered=null),e&&e.parent&&e.parent.reservedDataStore&&e.parent.reservedDataStore.handle){const i=e.parent.reservedDataStore.handle;i.gizmo===this&&(this._handleHovered=i,this._handleHovered.hover=!0)}})):this._attachedSlate&&this._attachedSlate._host.onPickingObservable.remove(this._pickedPointObserver),this._attachedSlate=t}get attachedSlate(){return this._attachedSlate}constructor(t){super(t),this._boundingDimensions=new c(0,0,0),this._renderObserver=null,this._tmpQuaternion=new G,this._tmpVector=new c(0,0,0),this._corners=[],this._sides=[],this._boundingBoxGizmo={min:new c,max:new c},this._margin=.35,this._handleSize=.075,this._attachedSlate=null,this._existingSlateScale=new c,this.fixedScreenSize=!1,this.fixedScreenSizeDistanceFactor=10,this._createNode(),this.updateScale=!1,this._renderObserver=this.gizmoLayer.originalScene.onBeforeRenderObservable.add(()=>{this.attachedMesh&&!this._existingSlateScale.equals(this.attachedMesh.scaling)&&this.updateBoundingBox()})}_createNode(){this._handlesParent=new ye("handlesParent",this.gizmoLayer.utilityLayerScene),this._handlesParent.rotationQuaternion=G.Identity();const t=[{dimensions:new c(-1,-1,0),origin:new c(1,0,0)},{dimensions:new c(1,-1,0),origin:new c(0,0,0)},{dimensions:new c(1,1,0),origin:new c(0,1,0)},{dimensions:new c(-1,1,0),origin:new c(1,1,0)}];for(let e=0;e<4;e++){const i=new no(this,this.gizmoLayer.utilityLayerScene);this._corners.push(i),i.node.rotation.z=Math.PI/2*e,i.node.parent=this._handlesParent,this._assignDragBehaviorCorners(i,(s,o,r,a)=>this._moveHandle(s,o,r,a,!0),t[e])}for(let e=0;e<4;e++){const i=new ao(this,this.gizmoLayer.utilityLayerScene);this._sides.push(i),i.node.rotation.z=Math.PI/2*e,i.node.parent=this._handlesParent,this._assignDragBehaviorSides(i,e%2===0?new c(0,1,0):new c(1,0,0))}this._handlesParent.parent=this._rootMesh}_keepAspectRatio(t,e,i=!1){const s=E.Vector3[0];s.copyFromFloats(e,1,0).normalize(),i&&(s.y*=-1);const o=c.Dot(t,s);t.copyFrom(s).scaleInPlace(o)}_clampDimensions(t,e,i,s=!1){const o=E.Vector3[0];o.copyFrom(t).multiplyInPlace(i);const r=E.Vector3[1];if(r.copyFromFloats(Math.max(this._attachedSlate.minDimensions.x,o.x+e.x),Math.max(this._attachedSlate.minDimensions.y,o.y+e.y),0),s){const a=e.x/e.y;r.x=Math.max(r.x,r.y*a),r.y=Math.max(r.y,r.x/a)}o.copyFrom(r).subtractInPlace(e),t.x=Math.sign(t.x)*Math.abs(o.x),t.y=Math.sign(t.y)*Math.abs(o.y)}_moveHandle(t,e,i,s,o){if(!this._attachedSlate)return;if(o){const l=e.x/e.y;this._keepAspectRatio(i,l,s.dimensions.x*s.dimensions.y<0)}this._clampDimensions(i,e,s.dimensions,o);const r=E.Vector3[0],a=E.Vector3[1];r.copyFrom(i).multiplyInPlace(s.origin),a.copyFrom(i).multiplyInPlace(s.dimensions),this._attachedSlate.origin.copyFrom(t).addInPlace(r),this._attachedSlate.dimensions.set(e.x+a.x,e.y+a.y)}_assignDragBehaviorCorners(t,e,i){const s=new c,o=new c,r=new c,a=new St,l=new c,h=(y,V,yt,le)=>{y.subtractToRef(yt,E.Vector3[0]);const Ft=c.Dot(E.Vector3[0],V);E.Vector3[1].copyFrom(V).scaleInPlace(Ft),E.Vector3[0].subtractInPlace(E.Vector3[1]),E.Vector3[0].addToRef(yt,le)},d=y=>{this.attachedSlate&&this.attachedMesh&&(s.set(this.attachedSlate.dimensions.x,this.attachedSlate.dimensions.y,dt),o.copyFrom(this.attachedSlate.origin),r.copyFrom(y.position),a.copyFrom(this.attachedMesh.computeWorldMatrix(!0)),a.invert(),this.attachedSlate._followButton.isToggled=!1,c.TransformNormalToRef(c.Forward(),this.attachedMesh.getWorldMatrix(),l),l.normalize(),this._handleHovered&&(this._handleDragged=this._handleHovered,this._handleDragged.drag=!0))},f=y=>{this.attachedSlate&&this.attachedMesh&&(h(y.position,l,r,this._tmpVector),this._tmpVector.subtractInPlace(r),c.TransformNormalToRef(this._tmpVector,a,this._tmpVector),e(o,s,this._tmpVector,i),this.attachedSlate._positionElements(),this.updateBoundingBox())},g=()=>{this.attachedSlate&&this.attachedNode&&(this.attachedSlate._updatePivot(),this._handleDragged&&(this._handleDragged.drag=!1,this._handleDragged=null))};t.setDragBehavior(d,f,g)}_assignDragBehaviorSides(t,e){const i=new G,s=new c,o=new c,r=new c,a=new c,l=f=>{this.attachedSlate&&this.attachedMesh&&(i.copyFrom(this.attachedMesh.rotationQuaternion),s.copyFrom(f.position),r.copyFrom(this.attachedMesh.getAbsolutePivotPoint()),o.copyFrom(s).subtractInPlace(r).normalize(),this.attachedSlate._followButton.isToggled=!1,c.TransformNormalToRef(e,this.attachedMesh.getWorldMatrix(),a),a.normalize(),this._handleHovered&&(this._handleDragged=this._handleHovered,this._handleDragged.drag=!0))},h=f=>{if(this.attachedSlate&&this.attachedMesh){this._tmpVector.copyFrom(f.position),this._tmpVector.subtractInPlace(r),this._tmpVector.normalize();const g=-c.GetAngleBetweenVectorsOnPlane(this._tmpVector,o,a);G.RotationAxisToRef(e,g,this._tmpQuaternion),i.multiplyToRef(this._tmpQuaternion,this.attachedMesh.rotationQuaternion)}},d=()=>{this.attachedSlate&&this.attachedNode&&(this.attachedSlate._updatePivot(),this._handleDragged&&(this._handleDragged.drag=!1,this._handleDragged=null))};t.setDragBehavior(l,h,d)}_attachedNodeChanged(t){t&&this.updateBoundingBox()}updateBoundingBox(){if(this.attachedMesh){Ai._RemoveAndStorePivotPoint(this.attachedMesh);const t=this.attachedMesh.parent;this.attachedMesh.setParent(null),this._update(),this.attachedMesh.rotationQuaternion||(this.attachedMesh.rotationQuaternion=G.RotationYawPitchRoll(this.attachedMesh.rotation.y,this.attachedMesh.rotation.x,this.attachedMesh.rotation.z)),this._tmpQuaternion.copyFrom(this.attachedMesh.rotationQuaternion),this._tmpVector.copyFrom(this.attachedMesh.position),this.attachedMesh.rotationQuaternion.set(0,0,0,1),this.attachedMesh.position.set(0,0,0);const e=this.attachedMesh.getHierarchyBoundingVectors();e.max.subtractToRef(e.min,this._boundingDimensions),this._boundingBoxGizmo.min=e.min,this._boundingBoxGizmo.max=e.max,this._updateHandlesPosition(),this._updateHandlesScaling(),this.attachedMesh.rotationQuaternion.copyFrom(this._tmpQuaternion),this.attachedMesh.position.copyFrom(this._tmpVector),Ai._RestorePivotPoint(this.attachedMesh),this.attachedMesh.setParent(t),this.attachedMesh.computeWorldMatrix(!0),this._existingSlateScale.copyFrom(this.attachedMesh.scaling)}}_updateHandlesPosition(){const t=this._boundingBoxGizmo.min.clone(),e=this._boundingBoxGizmo.max.clone(),i=this._corners[0].node.scaling.length();t.x-=this._margin*i,t.y-=this._margin*i,e.x+=this._margin*i,e.y+=this._margin*i;const s=t.add(e).scaleInPlace(.5);this._corners[0].node.position.copyFromFloats(t.x,t.y,0),this._corners[1].node.position.copyFromFloats(e.x,t.y,0),this._corners[2].node.position.copyFromFloats(e.x,e.y,0),this._corners[3].node.position.copyFromFloats(t.x,e.y,0),this._sides[0].node.position.copyFromFloats(t.x,s.y,0),this._sides[1].node.position.copyFromFloats(s.x,t.y,0),this._sides[2].node.position.copyFromFloats(e.x,s.y,0),this._sides[3].node.position.copyFromFloats(s.x,e.y,0)}_updateHandlesScaling(){if(this._attachedSlate&&this._attachedSlate.mesh){const t=this._attachedSlate.mesh.scaling.x*this._attachedSlate.dimensions.x,e=this._attachedSlate.mesh.scaling.y*this._attachedSlate.dimensions.y,i=Math.min(t,e)*this._handleSize;for(let s=0;s<this._corners.length;s++)this._corners[s].node.scaling.setAll(i);for(let s=0;s<this._sides.length;s++)this._sides[s].node.scaling.setAll(i)}}_update(){if(super._update(),!!this.gizmoLayer.utilityLayerScene.activeCamera&&this._attachedSlate&&this._attachedSlate.mesh){if(this.fixedScreenSize){this._attachedSlate.mesh.absolutePosition.subtractToRef(this.gizmoLayer.utilityLayerScene.activeCamera.position,this._tmpVector);const t=this._handleSize*this._tmpVector.length()/this.fixedScreenSizeDistanceFactor;for(let e=0;e<this._corners.length;e++)this._corners[e].node.scaling.set(t,t,t);for(let e=0;e<this._sides.length;e++)this._sides[e].node.scaling.set(t,t,t)}this._updateHandlesPosition()}}dispose(){this.gizmoLayer.originalScene.onBeforeRenderObservable.remove(this._renderObserver),super.dispose();for(const t of this._corners)t.dispose();for(const t of this._sides)t.dispose()}}class Rt extends es{get defaultBehavior(){return this._defaultBehavior}get dimensions(){return this._dimensions}set dimensions(t){let e=1;if(t.x<this.minDimensions.x||t.y<this.minDimensions.y){const i=t.x/t.y;this.minDimensions.x/this.minDimensions.y>i?e=this.minDimensions.x/t.x:e=this.minDimensions.y/t.y}this._dimensions.copyFrom(t).scaleInPlace(e),this._updatePivot(),this._positionElements()}get titleBarHeight(){return this._titleBarHeight}set titleBarHeight(t){this._titleBarHeight=t}set renderingGroupId(t){this._titleBar.renderingGroupId=t,this._titleBarTitle.renderingGroupId=t,this._contentPlate.renderingGroupId=t,this._backPlate.renderingGroupId=t}get renderingGroupId(){return this._titleBar.renderingGroupId}set title(t){this._titleText=t,this._titleTextComponent&&(this._titleTextComponent.text=t)}get title(){return this._titleText}constructor(t){super(t),this.titleBarMargin=.005,this.origin=new c(0,0,0),this._dimensions=new z(21.875,12.5),this._titleBarHeight=.625,this._titleText="",this._contentScaleRatio=1,this.minDimensions=new z(15.625,6.25),this.defaultDimensions=this._dimensions.clone(),this._followButton=new ae("followButton"+this.name),this._followButton.isToggleButton=!0,this._closeButton=new ae("closeButton"+this.name),this._contentViewport=new ve(0,0,1,1),this._contentDragBehavior=new ri({dragPlaneNormal:new c(0,0,-1)})}_applyFacade(t){this._contentMaterial.albedoTexture=t,this._resetContentPositionAndZoom(),this._applyContentViewport(),t.attachToMesh(this._contentPlate,!0)}_addControl(t){t._host=this._host,this._host.utilityLayer&&t._prepareNode(this._host.utilityLayer.utilityLayerScene)}_getTypeName(){return"HolographicSlate"}_positionElements(){const t=this._followButton,e=this._closeButton,i=this._titleBar,s=this._titleBarTitle,o=this._contentPlate,r=this._backPlate;if(t&&e&&i){e.scaling.setAll(this.titleBarHeight),t.scaling.setAll(this.titleBarHeight),e.position.copyFromFloats(this.dimensions.x-this.titleBarHeight/2,-this.titleBarHeight/2,0).addInPlace(this.origin),t.position.copyFromFloats(this.dimensions.x-3*this.titleBarHeight/2,-this.titleBarHeight/2,0).addInPlace(this.origin);const a=this.dimensions.y-this.titleBarHeight-this.titleBarMargin,l=o.getScene().useRightHandedSystem;i.scaling.set(this.dimensions.x,this.titleBarHeight,dt),s.scaling.set(this.dimensions.x-2*this.titleBarHeight,this.titleBarHeight,dt),o.scaling.copyFromFloats(this.dimensions.x,a,dt),r.scaling.copyFromFloats(this.dimensions.x,a,dt),i.position.copyFromFloats(this.dimensions.x/2,-(this.titleBarHeight/2),0).addInPlace(this.origin),s.position.copyFromFloats(this.dimensions.x/2-this.titleBarHeight,-(this.titleBarHeight/2),l?dt:-dt).addInPlace(this.origin),o.position.copyFromFloats(this.dimensions.x/2,-(this.titleBarHeight+this.titleBarMargin+a/2),0).addInPlace(this.origin),r.position.copyFromFloats(this.dimensions.x/2,-(this.titleBarHeight+this.titleBarMargin+a/2),l?-dt:dt).addInPlace(this.origin),this._titleTextComponent.host.scaleTo(Rt._DEFAULT_TEXT_RESOLUTION_Y*s.scaling.x/s.scaling.y,Rt._DEFAULT_TEXT_RESOLUTION_Y);const h=this.dimensions.x/a;this._contentViewport.width=this._contentScaleRatio,this._contentViewport.height=this._contentScaleRatio/h,this._applyContentViewport(),this._gizmo&&this._gizmo.updateBoundingBox()}}_applyContentViewport(){var t;if(!((t=this._contentPlate)===null||t===void 0)&&t.material&&this._contentPlate.material.albedoTexture){const e=this._contentPlate.material.albedoTexture;e.uScale=this._contentScaleRatio,e.vScale=this._contentScaleRatio/this._contentViewport.width*this._contentViewport.height,e.uOffset=this._contentViewport.x,e.vOffset=this._contentViewport.y}}_resetContentPositionAndZoom(){this._contentViewport.x=0,this._contentViewport.y=1-this._contentViewport.height/this._contentViewport.width,this._contentScaleRatio=1}_updatePivot(){if(!this.mesh)return;const t=new c(this.dimensions.x*.5,-this.dimensions.y*.5,dt);t.addInPlace(this.origin),t.z=0;const e=new c(0,0,0);c.TransformCoordinatesToRef(e,this.mesh.computeWorldMatrix(!0),e),this.mesh.setPivotPoint(t);const i=new c(0,0,0);c.TransformCoordinatesToRef(i,this.mesh.computeWorldMatrix(!0),i),this.mesh.position.addInPlace(e).subtractInPlace(i)}_createNode(t){const e=new Ke("slate_"+this.name,t);this._titleBar=wt("titleBar_"+this.name,{size:1},t),this._titleBarTitle=jt("titleText_"+this.name,{size:1},t),this._titleBarTitle.parent=e,this._titleBarTitle.isPickable=!1;const i=lt.CreateForMesh(this._titleBarTitle);if(this._titleTextComponent=new U("titleText_"+this.name,this._titleText),this._titleTextComponent.textWrapping=Zt.Ellipsis,this._titleTextComponent.textHorizontalAlignment=u.HORIZONTAL_ALIGNMENT_LEFT,this._titleTextComponent.color="white",this._titleTextComponent.fontSize=Rt._DEFAULT_TEXT_RESOLUTION_Y/2,this._titleTextComponent.paddingLeft=Rt._DEFAULT_TEXT_RESOLUTION_Y/4,i.addControl(this._titleTextComponent),t.useRightHandedSystem){const r=new nt(0,0,1,1);this._contentPlate=jt("contentPlate_"+this.name,{size:1,sideOrientation:Ee.BACKSIDE,frontUVs:r},t),this._backPlate=jt("backPlate_"+this.name,{size:1,sideOrientation:Ee.FRONTSIDE},t)}else{const r=new nt(0,0,1,1);this._contentPlate=jt("contentPlate_"+this.name,{size:1,sideOrientation:Ee.FRONTSIDE,frontUVs:r},t),this._backPlate=jt("backPlate_"+this.name,{size:1,sideOrientation:Ee.BACKSIDE},t)}this._titleBar.parent=e,this._titleBar.isNearGrabbable=!0,this._contentPlate.parent=e,this._backPlate.parent=e,this._attachContentPlateBehavior(),this._addControl(this._followButton),this._addControl(this._closeButton);const s=this._followButton,o=this._closeButton;return s.node.parent=e,o.node.parent=e,this._positionElements(),this._followButton.imageUrl=Rt.ASSETS_BASE_URL+Rt.FOLLOW_ICON_FILENAME,this._closeButton.imageUrl=Rt.ASSETS_BASE_URL+Rt.CLOSE_ICON_FILENAME,this._followButton.isBackplateVisible=!1,this._closeButton.isBackplateVisible=!1,this._followButton.onToggleObservable.add(r=>{this._defaultBehavior.followBehaviorEnabled=r,this._defaultBehavior.followBehaviorEnabled&&this._defaultBehavior.followBehavior.recenter()}),this._closeButton.onPointerClickObservable.add(()=>{this.dispose()}),e.rotationQuaternion=G.Identity(),e.isVisible=!1,e}_attachContentPlateBehavior(){this._contentDragBehavior.attach(this._contentPlate),this._contentDragBehavior.moveAttached=!1,this._contentDragBehavior.useObjectOrientationForDragging=!0,this._contentDragBehavior.updateDragPlane=!1;const t=new c,e=new c,i=new c,s=new c,o=new z;let r,a;this._contentDragBehavior.onDragStartObservable.add(h=>{this.node&&(r=this._contentViewport.clone(),a=this.node.computeWorldMatrix(!0),t.copyFrom(h.dragPlanePoint),e.set(this.dimensions.x,this.dimensions.y,dt),e.y-=this.titleBarHeight+this.titleBarMargin,c.TransformNormalToRef(e,a,e),i.copyFromFloats(0,1,0),c.TransformNormalToRef(i,a,i),s.copyFromFloats(1,0,0),c.TransformNormalToRef(s,a,s),i.normalize(),i.scaleInPlace(1/c.Dot(i,e)),s.normalize(),s.scaleInPlace(1/c.Dot(s,e)))});const l=new c;this._contentDragBehavior.onDragObservable.add(h=>{l.copyFrom(h.dragPlanePoint),l.subtractInPlace(t),o.copyFromFloats(c.Dot(l,s),c.Dot(l,i)),this._contentViewport.x=He.Clamp(r.x-l.x,0,1-this._contentViewport.width*this._contentScaleRatio),this._contentViewport.y=He.Clamp(r.y-l.y,0,1-this._contentViewport.height*this._contentScaleRatio),this._applyContentViewport()})}_affectMaterial(t){this._titleBarMaterial=new k(`${this.name} plateMaterial`,t.getScene()),this._contentMaterial=new st(`${this.name} contentMaterial`,t.getScene()),this._contentMaterial.renderBorders=!0,this._backMaterial=new k(`${this.name} backPlate`,t.getScene()),this._backMaterial.lineWidth=dt,this._backMaterial.radius=.005,this._backMaterial.backFaceCulling=!0,this._titleBar.material=this._titleBarMaterial,this._contentPlate.material=this._contentMaterial,this._backPlate.material=this._backMaterial,this._resetContent(),this._applyContentViewport()}_prepareNode(t){super._prepareNode(t),this._gizmo=new _o(this._host.utilityLayer),this._gizmo.attachedSlate=this,this._defaultBehavior=new ss,this._defaultBehavior.attach(this.node,[this._titleBar]),this._defaultBehavior.sixDofDragBehavior.onDragStartObservable.add(()=>{this._followButton.isToggled=!1}),this._positionChangedObserver=this._defaultBehavior.sixDofDragBehavior.onPositionChangedObservable.add(()=>{this._gizmo.updateBoundingBox()}),this._updatePivot(),this.resetDefaultAspectAndPose(!1)}resetDefaultAspectAndPose(t=!0){if(!this._host||!this._host.utilityLayer||!this.node)return;const e=this._host.utilityLayer.utilityLayerScene,i=e.activeCamera;if(i){const s=i.getWorldMatrix(),o=c.TransformNormal(c.Backward(e.useRightHandedSystem),s);this.origin.setAll(0),this._gizmo.updateBoundingBox();const r=this.node.getAbsolutePivotPoint();this.node.position.copyFrom(i.position).subtractInPlace(o).subtractInPlace(r),this.node.rotationQuaternion=G.FromLookDirectionLH(o,new c(0,1,0)),t&&(this.dimensions=this.defaultDimensions)}}dispose(){super.dispose(),this._titleBarMaterial.dispose(),this._contentMaterial.dispose(),this._titleBar.dispose(),this._titleBarTitle.dispose(),this._contentPlate.dispose(),this._backPlate.dispose(),this._followButton.dispose(),this._closeButton.dispose(),this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver),this._defaultBehavior.sixDofDragBehavior.onPositionChangedObservable.remove(this._positionChangedObserver),this._defaultBehavior.detach(),this._gizmo.dispose(),this._contentDragBehavior.detach()}}Rt.ASSETS_BASE_URL="https://assets.babylonjs.com/meshes/MRTK/";Rt.CLOSE_ICON_FILENAME="IconClose.png";Rt.FOLLOW_ICON_FILENAME="IconFollowMe.png";Rt._DEFAULT_TEXT_RESOLUTION_Y=102.4;class nr extends Oi{constructor(t,e){super(e),this._currentMesh=t,this.pointerEnterAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1.1)},this.pointerOutAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1/1.1)},this.pointerDownAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(.95)},this.pointerUpAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1/.95)}}_getTypeName(){return"MeshButton3D"}_createNode(t){return this._currentMesh.getChildMeshes().forEach(e=>{this._injectGUI3DReservedDataStore(e).control=this}),this._currentMesh}_affectMaterial(t){}}class Ye extends xe{get defaultBehavior(){return this._defaultBehavior}get isPinned(){return this._isPinned}set isPinned(t){if(this._pinButton.isToggled!==t){this._pinButton.isToggled=t;return}this._isPinned=t,t?this._defaultBehavior.followBehaviorEnabled=!1:this._defaultBehavior.followBehaviorEnabled=!0}_createPinButton(t){const e=new ae("pin"+this.name,!1);return e.imageUrl=Ye._ASSETS_BASE_URL+Ye._PIN_ICON_FILENAME,e.parent=this,e._host=this._host,e.isToggleButton=!0,e.onToggleObservable.add(i=>{this.isPinned=i}),this._host.utilityLayer&&(e._prepareNode(this._host.utilityLayer.utilityLayerScene),e.scaling.scaleInPlace(xe.MENU_BUTTON_SCALE),e.node&&(e.node.parent=t)),e}_createNode(t){const e=super._createNode(t);return this._pinButton=this._createPinButton(e),this.isPinned=!1,this._defaultBehavior.attach(e,[this._backPlate]),this._defaultBehavior.followBehavior.ignoreCameraPitchAndRoll=!0,this._defaultBehavior.followBehavior.pitchOffset=-15,this._defaultBehavior.followBehavior.minimumDistance=.3,this._defaultBehavior.followBehavior.defaultDistance=.4,this._defaultBehavior.followBehavior.maximumDistance=.6,this._backPlate.isNearGrabbable=!0,e.isVisible=!1,e}_finalProcessing(){super._finalProcessing(),this._pinButton.position.copyFromFloats((this._backPlate.scaling.x+xe.MENU_BUTTON_SCALE)/2,this._backPlate.scaling.y/2,0)}constructor(t){super(t),this._isPinned=!1,this._defaultBehavior=new ss,this._dragObserver=this._defaultBehavior.sixDofDragBehavior.onDragObservable.add(()=>{this.isPinned=!0}),this.backPlateMargin=1}dispose(){super.dispose(),this._defaultBehavior.sixDofDragBehavior.onDragObservable.remove(this._dragObserver),this._defaultBehavior.detach()}}Ye._ASSETS_BASE_URL="https://assets.babylonjs.com/meshes/MRTK/";Ye._PIN_ICON_FILENAME="IconPin.png";class _r extends je{_mapGridNode(t,e){const i=t.mesh;if(!i)return;t.position=e.clone();const s=E.Vector3[0];switch(s.copyFrom(e),this.orientation){case K.FACEORIGIN_ORIENTATION:case K.FACEFORWARD_ORIENTATION:s.addInPlace(new c(0,0,1)),i.lookAt(s);break;case K.FACEFORWARDREVERSED_ORIENTATION:case K.FACEORIGINREVERSED_ORIENTATION:s.addInPlace(new c(0,0,-1)),i.lookAt(s);break}}}class lr extends je{constructor(){super(...arguments),this._iteration=100}get iteration(){return this._iteration}set iteration(t){this._iteration!==t&&(this._iteration=t,it.SetImmediate(()=>{this._arrangeChildren()}))}_mapGridNode(t,e){const i=t.mesh,s=this._scatterMapping(e);if(i){switch(this.orientation){case K.FACEORIGIN_ORIENTATION:case K.FACEFORWARD_ORIENTATION:i.lookAt(new c(0,0,1));break;case K.FACEFORWARDREVERSED_ORIENTATION:case K.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new c(0,0,-1));break}t.position=s}}_scatterMapping(t){return t.x=(1-Math.random()*2)*this._cellWidth,t.y=(1-Math.random()*2)*this._cellHeight,t}_finalProcessing(){const t=[];for(const e of this._children)e.mesh&&t.push(e.mesh);for(let e=0;e<this._iteration;e++){t.sort((a,l)=>{const h=a.position.lengthSquared(),d=l.position.lengthSquared();return h<d?1:h>d?-1:0});const i=Math.pow(this.margin,2),s=Math.max(this._cellWidth,this._cellHeight),o=E.Vector2[0],r=E.Vector3[0];for(let a=0;a<t.length-1;a++)for(let l=a+1;l<t.length;l++)if(a!=l){t[l].position.subtractToRef(t[a].position,r),o.x=r.x,o.y=r.y;const h=s;let d=o.lengthSquared()-i;const f=Math.min(d,i);d-=f,d<Math.pow(h,2)&&(o.normalize(),r.scaleInPlace((h-Math.sqrt(d))*.5),t[l].position.addInPlace(r),t[a].position.subtractInPlace(r))}}}}const lo="mrdlSliderBarPixelShader",ho=`uniform vec3 cameraPosition;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
uniform float _Radius_;
uniform float _Bevel_Front_;
uniform float _Bevel_Front_Stretch_;
uniform float _Bevel_Back_;
uniform float _Bevel_Back_Stretch_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform bool _Bulge_Enabled_;
uniform float _Bulge_Height_;
uniform float _Bulge_Radius_;
uniform float _Sun_Intensity_;
uniform float _Sun_Theta_;
uniform float _Sun_Phi_;
uniform float _Indirect_Diffuse_;
uniform vec4 _Albedo_;
uniform float _Specular_;
uniform float _Shininess_;
uniform float _Sharpness_;
uniform float _Subsurface_;
uniform vec4 _Left_Color_;
uniform vec4 _Right_Color_;
uniform float _Reflection_;
uniform float _Front_Reflect_;
uniform float _Edge_Reflect_;
uniform float _Power_;
uniform vec4 _Sky_Color_;
uniform vec4 _Horizon_Color_;
uniform vec4 _Ground_Color_;
uniform float _Horizon_Power_;
uniform sampler2D _Reflection_Map_;
uniform sampler2D _Indirect_Environment_;
uniform float _Width_;
uniform float _Fuzz_;
uniform float _Min_Fuzz_;
uniform float _Clip_Fade_;
uniform float _Hue_Shift_;
uniform float _Saturation_Shift_;
uniform float _Value_Shift_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform vec3 _Left_Index_Pos_;
uniform vec3 _Right_Index_Pos_;
uniform vec3 _Left_Index_Middle_Pos_;
uniform vec3 _Right_Index_Middle_Pos_;
uniform sampler2D _Decal_;
uniform vec2 _Decal_Scale_XY_;
uniform bool _Decal_Front_Only_;
uniform float _Rim_Intensity_;
uniform sampler2D _Rim_Texture_;
uniform float _Rim_Hue_Shift_;
uniform float _Rim_Saturation_Shift_;
uniform float _Rim_Value_Shift_;
uniform float _Iridescence_Intensity_;
uniform sampler2D _Iridescence_Texture_;
uniform bool Use_Global_Left_Index;
uniform bool Use_Global_Right_Index;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
uniform vec4 Global_Left_Thumb_Tip_Position;
uniform vec4 Global_Right_Thumb_Tip_Position;
uniform vec4 Global_Left_Index_Middle_Position;
uniform vec4 Global_Right_Index_Middle_Position;
uniform float Global_Left_Index_Tip_Proximity;
uniform float Global_Right_Index_Tip_Proximity;
void Blob_Fragment_B30(
sampler2D Blob_Texture,
vec4 Blob_Info1,
vec4 Blob_Info2,
out vec4 Blob_Color)
{
float k1=dot(Blob_Info1.xy,Blob_Info1.xy);
float k2=dot(Blob_Info2.xy,Blob_Info2.xy);
vec3 closer=k1<k2 ? vec3(k1,Blob_Info1.z,Blob_Info1.w) : vec3(k2,Blob_Info2.z,Blob_Info2.w);
Blob_Color=closer.z*texture(Blob_Texture,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);
}
void FastLinearTosRGB_B42(
vec4 Linear,
out vec4 sRGB)
{
sRGB.rgb=sqrt(clamp(Linear.rgb,0.0,1.0));
sRGB.a=Linear.a;
}
void Scale_RGB_B59(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=vec4(Scalar,Scalar,Scalar,1)*Color;
}
void Fragment_Main_B121(
float Sun_Intensity,
float Sun_Theta,
float Sun_Phi,
vec3 Normal,
vec4 Albedo,
float Fresnel_Reflect,
float Shininess,
vec3 Incident,
vec4 Horizon_Color,
vec4 Sky_Color,
vec4 Ground_Color,
float Indirect_Diffuse,
float Specular,
float Horizon_Power,
float Reflection,
vec4 Reflection_Sample,
vec4 Indirect_Sample,
float Sharpness,
float SSS,
float Subsurface,
vec4 Translucence,
vec4 Rim_Light,
vec4 Iridescence,
out vec4 Result)
{
float theta=Sun_Theta*2.0*3.14159;
float phi=Sun_Phi*3.14159;
vec3 lightDir= vec3(cos(phi)*cos(theta),sin(phi),cos(phi)*sin(theta));
float NdotL=max(dot(lightDir,Normal),0.0);
vec3 R=reflect(Incident,Normal);
float RdotL=max(0.0,dot(R,lightDir));
float specular=pow(RdotL,Shininess);
specular=mix(specular,smoothstep(0.495*Sharpness,1.0-0.495*Sharpness,specular),Sharpness);
vec4 gi=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);
Result=((Sun_Intensity*NdotL+Indirect_Sample*Indirect_Diffuse+Translucence)*(1.0+SSS*Subsurface))*Albedo*(1.0-Fresnel_Reflect)+(Sun_Intensity*specular*Specular+Fresnel_Reflect*Reflection*Reflection_Sample)+Fresnel_Reflect*Rim_Light+Iridescence;
}
void Bulge_B79(
bool Enabled,
vec3 Normal,
vec3 Tangent,
float Bulge_Height,
vec4 UV,
float Bulge_Radius,
vec3 ButtonN,
out vec3 New_Normal)
{
vec2 xy=clamp(UV.xy*2.0,vec2(-1,-1),vec2(1,1));
vec3 B=(cross(Normal,Tangent));
float k=-clamp(1.0-length(xy)/Bulge_Radius,0.0,1.0)*Bulge_Height;
k=sin(k*3.14159*0.5);
k*=smoothstep(0.9998,0.9999,abs(dot(ButtonN,Normal)));
New_Normal=Normal*sqrt(1.0-k*k)+(xy.x*Tangent+xy.y*B)*k;
New_Normal=Enabled ? New_Normal : Normal;
}
void SSS_B77(
vec3 ButtonN,
vec3 Normal,
vec3 Incident,
out float Result)
{
float NdotI=abs(dot(Normal,Incident));
float BdotI=abs(dot(ButtonN,Incident));
Result=(abs(NdotI-BdotI)); 
}
void FingerOcclusion_B67(
float Width,
float DistToCenter,
float Fuzz,
float Min_Fuzz,
vec3 Position,
vec3 Forward,
vec3 Nearest,
float Fade_Out,
out float NotInShadow)
{
float d=dot((Nearest-Position),Forward);
float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);
NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);
}
void FingerOcclusion_B68(
float Width,
float DistToCenter,
float Fuzz,
float Min_Fuzz,
vec3 Position,
vec3 Forward,
vec3 Nearest,
float Fade_Out,
out float NotInShadow)
{
float d=dot((Nearest-Position),Forward);
float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);
NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);
}
void Scale_Color_B91(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=Scalar*Color;
}
void From_HSV_B73(
float Hue,
float Saturation,
float Value,
float Alpha,
out vec4 Color)
{
vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);
vec3 p=abs(fract(vec3(Hue,Hue,Hue)+K.xyz)*6.0-K.www);
Color.rgb=Value*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),Saturation);
Color.a=Alpha;
}
void Fast_Fresnel_B122(
float Front_Reflect,
float Edge_Reflect,
float Power,
vec3 Normal,
vec3 Incident,
out float Transmit,
out float Reflect)
{
float d=max(-dot(Incident,Normal),0.0);
Reflect=Front_Reflect+(Edge_Reflect-Front_Reflect)*pow(.01-d,Power);
Transmit=1.0-Reflect;
}
void Mapped_Environment_B51(
sampler2D Reflected_Environment,
sampler2D Indirect_Environment,
vec3 Dir,
out vec4 Reflected_Color,
out vec4 Indirect_Diffuse)
{
Reflected_Color=texture(Reflected_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));
Indirect_Diffuse=texture(Indirect_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));
}
vec4 SampleEnv_Bid50(vec3 D,vec4 S,vec4 H,vec4 G,float exponent)
{
float k=pow(abs(D.y),exponent);
vec4 C;
if (D.y>0.0) {
C=mix(H,S,k);
} else {
C=mix(H,G,k); 
}
return C;
}
void Sky_Environment_B50(
vec3 Normal,
vec3 Reflected,
vec4 Sky_Color,
vec4 Horizon_Color,
vec4 Ground_Color,
float Horizon_Power,
out vec4 Reflected_Color,
out vec4 Indirect_Color)
{
Reflected_Color=SampleEnv_Bid50(Reflected,Sky_Color,Horizon_Color,Ground_Color,Horizon_Power);
Indirect_Color=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);
}
void Min_Segment_Distance_B65(
vec3 P0,
vec3 P1,
vec3 Q0,
vec3 Q1,
out vec3 NearP,
out vec3 NearQ,
out float Distance)
{
vec3 u=P1-P0;
vec3 v=Q1-Q0;
vec3 w=P0-Q0;
float a=dot(u,u);
float b=dot(u,v);
float c=dot(v,v);
float d=dot(u,w);
float e=dot(v,w);
float D=a*c-b*b;
float sD=D;
float tD=D;
float sc,sN,tc,tN;
if (D<0.00001) {
sN=0.0;
sD=1.0;
tN=e;
tD=c;
} else {
sN=(b*e-c*d);
tN=(a*e-b*d);
if (sN<0.0) {
sN=0.0;
tN=e;
tD=c;
} else if (sN>sD) {
sN=sD;
tN=e+b;
tD=c;
}
}
if (tN<0.0) {
tN=0.0;
if (-d<0.0) {
sN=0.0;
} else if (-d>a) {
sN=sD;
} else {
sN=-d;
sD=a;
}
} else if (tN>tD) {
tN=tD;
if ((-d+b)<0.0) {
sN=0.0;
} else if ((-d+b)>a) {
sN=sD;
} else {
sN=(-d+b);
sD=a;
}
}
sc=abs(sN)<0.000001 ? 0.0 : sN/sD;
tc=abs(tN)<0.000001 ? 0.0 : tN/tD;
NearP=P0+sc*u;
NearQ=Q0+tc*v;
Distance=distance(NearP,NearQ);
}
void To_XYZ_B74(
vec3 Vec3,
out float X,
out float Y,
out float Z)
{
X=Vec3.x;
Y=Vec3.y;
Z=Vec3.z;
}
void Finger_Positions_B64(
vec3 Left_Index_Pos,
vec3 Right_Index_Pos,
vec3 Left_Index_Middle_Pos,
vec3 Right_Index_Middle_Pos,
out vec3 Left_Index,
out vec3 Right_Index,
out vec3 Left_Index_Middle,
out vec3 Right_Index_Middle)
{
Left_Index= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Left_Index_Pos);
Right_Index= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Right_Index_Pos);
Left_Index_Middle= (Use_Global_Left_Index ? Global_Left_Index_Middle_Position.xyz : Left_Index_Middle_Pos);
Right_Index_Middle= (Use_Global_Right_Index ? Global_Right_Index_Middle_Position.xyz : Right_Index_Middle_Pos);
}
void VaryHSV_B108(
vec3 HSV_In,
float Hue_Shift,
float Saturation_Shift,
float Value_Shift,
out vec3 HSV_Out)
{
HSV_Out=vec3(fract(HSV_In.x+Hue_Shift),clamp(HSV_In.y+Saturation_Shift,0.0,1.0),clamp(HSV_In.z+Value_Shift,0.0,1.0));
}
void Remap_Range_B114(
float In_Min,
float In_Max,
float Out_Min,
float Out_Max,
float In,
out float Out)
{
Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));
}
void To_HSV_B75(
vec4 Color,
out float Hue,
out float Saturation,
out float Value,
out float Alpha,
out vec3 HSV)
{
vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);
vec4 p=Color.g<Color.b ? vec4(Color.bg,K.wz) : vec4(Color.gb,K.xy);
vec4 q=Color.r<p.x ? vec4(p.xyw,Color.r) : vec4(Color.r,p.yzx);
float d=q.x-min(q.w,q.y);
float e=1.0e-10;
Hue=abs(q.z+(q.w-q.y)/(6.0*d+e));
Saturation=d/(q.x+e);
Value=q.x;
Alpha=Color.a;
HSV=vec3(Hue,Saturation,Value);
}
void Code_B110(
float X,
out float Result)
{
Result=(acos(X)/3.14159-0.5)*2.0;
}
void Rim_Light_B132(
vec3 Front,
vec3 Normal,
vec3 Incident,
float Rim_Intensity,
sampler2D Texture,
out vec4 Result)
{
vec3 R=reflect(Incident,Normal);
float RdotF=dot(R,Front);
float RdotL=sqrt(1.0-RdotF*RdotF);
vec2 UV=vec2(R.y*0.5+0.5,0.5);
vec4 Color=texture(Texture,UV);
Result=Color;
}
void main()
{
vec4 Blob_Color_Q30;
#if BLOB_ENABLE
Blob_Fragment_B30(_Blob_Texture_,vExtra2,vExtra3,Blob_Color_Q30);
#else
Blob_Color_Q30=vec4(0,0,0,0);
#endif
vec3 Incident_Q39=normalize(vPosition-cameraPosition);
vec3 Normalized_Q38=normalize(vNormal);
vec3 Normalized_Q71=normalize(vTangent);
vec4 Color_Q83;
#if DECAL_ENABLE
Color_Q83=texture(_Decal_,vUV);
#else
Color_Q83=vec4(0,0,0,0);
#endif
float X_Q90;
float Y_Q90;
float Z_Q90;
float W_Q90;
X_Q90=vExtra1.x;
Y_Q90=vExtra1.y;
Z_Q90=vExtra1.z;
W_Q90=vExtra1.w;
vec4 Linear_Q43;
Linear_Q43.rgb=clamp(_Sky_Color_.rgb*_Sky_Color_.rgb,0.0,1.0);
Linear_Q43.a=_Sky_Color_.a;
vec4 Linear_Q44;
Linear_Q44.rgb=clamp(_Horizon_Color_.rgb*_Horizon_Color_.rgb,0.0,1.0);
Linear_Q44.a=_Horizon_Color_.a;
vec4 Linear_Q45;
Linear_Q45.rgb=clamp(_Ground_Color_.rgb*_Ground_Color_.rgb,0.0,1.0);
Linear_Q45.a=_Ground_Color_.a;
vec3 Left_Index_Q64;
vec3 Right_Index_Q64;
vec3 Left_Index_Middle_Q64;
vec3 Right_Index_Middle_Q64;
Finger_Positions_B64(_Left_Index_Pos_,_Right_Index_Pos_,_Left_Index_Middle_Pos_,_Right_Index_Middle_Pos_,Left_Index_Q64,Right_Index_Q64,Left_Index_Middle_Q64,Right_Index_Middle_Q64);
vec4 Linear_Q46;
Linear_Q46.rgb=clamp(_Albedo_.rgb*_Albedo_.rgb,0.0,1.0);
Linear_Q46.a=_Albedo_.a;
vec3 Normalized_Q107=normalize(vBinormal);
vec3 Incident_Q70=normalize(vPosition-cameraPosition);
vec3 New_Normal_Q79;
Bulge_B79(_Bulge_Enabled_,Normalized_Q38,Normalized_Q71,_Bulge_Height_,vColor,_Bulge_Radius_,vBinormal,New_Normal_Q79);
float Result_Q77;
SSS_B77(vBinormal,New_Normal_Q79,Incident_Q39,Result_Q77);
vec4 Result_Q91;
Scale_Color_B91(Color_Q83,X_Q90,Result_Q91);
float Transmit_Q122;
float Reflect_Q122;
Fast_Fresnel_B122(_Front_Reflect_,_Edge_Reflect_,_Power_,New_Normal_Q79,Incident_Q39,Transmit_Q122,Reflect_Q122);
float Product_Q125=Y_Q90*Y_Q90;
vec3 NearP_Q65;
vec3 NearQ_Q65;
float Distance_Q65;
Min_Segment_Distance_B65(Left_Index_Q64,Left_Index_Middle_Q64,vPosition,cameraPosition,NearP_Q65,NearQ_Q65,Distance_Q65);
vec3 NearP_Q63;
vec3 NearQ_Q63;
float Distance_Q63;
Min_Segment_Distance_B65(Right_Index_Q64,Right_Index_Middle_Q64,vPosition,cameraPosition,NearP_Q63,NearQ_Q63,Distance_Q63);
vec3 Reflected_Q47=reflect(Incident_Q39,New_Normal_Q79);
vec4 Product_Q103=Linear_Q46*vec4(1,1,1,1);
vec4 Result_Q132;
Rim_Light_B132(Normalized_Q107,Normalized_Q38,Incident_Q70,_Rim_Intensity_,_Rim_Texture_,Result_Q132);
float Dot_Q72=dot(Incident_Q70, Normalized_Q71);
float MaxAB_Q123=max(Reflect_Q122,Product_Q125);
float NotInShadow_Q67;
#if OCCLUSION_ENABLED
FingerOcclusion_B67(_Width_,Distance_Q65,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q65,_Clip_Fade_,NotInShadow_Q67);
#else
NotInShadow_Q67=1.0;
#endif
float NotInShadow_Q68;
#if OCCLUSION_ENABLED
FingerOcclusion_B68(_Width_,Distance_Q63,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q63,_Clip_Fade_,NotInShadow_Q68);
#else
NotInShadow_Q68=1.0;
#endif
vec4 Reflected_Color_Q51;
vec4 Indirect_Diffuse_Q51;
#if ENV_ENABLE
Mapped_Environment_B51(_Reflection_Map_,_Indirect_Environment_,Reflected_Q47,Reflected_Color_Q51,Indirect_Diffuse_Q51);
#else
Reflected_Color_Q51=vec4(0,0,0,1);
Indirect_Diffuse_Q51=vec4(0,0,0,1);
#endif
vec4 Reflected_Color_Q50;
vec4 Indirect_Color_Q50;
#if SKY_ENABLED
Sky_Environment_B50(New_Normal_Q79,Reflected_Q47,Linear_Q43,Linear_Q44,Linear_Q45,_Horizon_Power_,Reflected_Color_Q50,Indirect_Color_Q50);
#else
Reflected_Color_Q50=vec4(0,0,0,1);
Indirect_Color_Q50=vec4(0,0,0,1);
#endif
float Hue_Q75;
float Saturation_Q75;
float Value_Q75;
float Alpha_Q75;
vec3 HSV_Q75;
To_HSV_B75(Product_Q103,Hue_Q75,Saturation_Q75,Value_Q75,Alpha_Q75,HSV_Q75);
float Hue_Q127;
float Saturation_Q127;
float Value_Q127;
float Alpha_Q127;
vec3 HSV_Q127;
To_HSV_B75(Result_Q132,Hue_Q127,Saturation_Q127,Value_Q127,Alpha_Q127,HSV_Q127);
float Result_Q110;
Code_B110(Dot_Q72,Result_Q110);
float AbsA_Q76=abs(Result_Q110);
float MinAB_Q58=min(NotInShadow_Q67,NotInShadow_Q68);
vec4 Sum_Q48=Reflected_Color_Q51+Reflected_Color_Q50;
vec4 Sum_Q49=Indirect_Diffuse_Q51+Indirect_Color_Q50;
vec3 HSV_Out_Q126;
VaryHSV_B108(HSV_Q127,_Rim_Hue_Shift_,_Rim_Saturation_Shift_,_Rim_Value_Shift_,HSV_Out_Q126);
float Out_Q114;
Remap_Range_B114(-1.0,1.0,0.0,1.0,Result_Q110,Out_Q114);
float Product_Q106;
Product_Q106=AbsA_Q76*_Hue_Shift_;
float X_Q128;
float Y_Q128;
float Z_Q128;
To_XYZ_B74(HSV_Out_Q126,X_Q128,Y_Q128,Z_Q128);
vec2 Vec2_Q112=vec2(Out_Q114,0.5);
vec3 HSV_Out_Q108;
VaryHSV_B108(HSV_Q75,Product_Q106,_Saturation_Shift_,_Value_Shift_,HSV_Out_Q108);
vec4 Color_Q129;
From_HSV_B73(X_Q128,Y_Q128,Z_Q128,0.0,Color_Q129);
vec4 Color_Q111;
#if IRIDESCENCE_ENABLED
Color_Q111=texture(_Iridescence_Texture_,Vec2_Q112);
#else
Color_Q111=vec4(0,0,0,0);
#endif
float X_Q74;
float Y_Q74;
float Z_Q74;
To_XYZ_B74(HSV_Out_Q108,X_Q74,Y_Q74,Z_Q74);
vec4 Result_Q131=_Rim_Intensity_*Color_Q129;
vec4 Result_Q113=_Iridescence_Intensity_*Color_Q111;
vec4 Color_Q73;
From_HSV_B73(X_Q74,Y_Q74,Z_Q74,0.0,Color_Q73);
vec4 Result_Q84=Result_Q91+(1.0-Result_Q91.a)*Color_Q73;
vec4 Result_Q121;
Fragment_Main_B121(_Sun_Intensity_,_Sun_Theta_,_Sun_Phi_,New_Normal_Q79,Result_Q84,MaxAB_Q123,_Shininess_,Incident_Q39,_Horizon_Color_,_Sky_Color_,_Ground_Color_,_Indirect_Diffuse_,_Specular_,_Horizon_Power_,_Reflection_,Sum_Q48,Sum_Q49,_Sharpness_,Result_Q77,_Subsurface_,vec4(0,0,0,0),Result_Q131,Result_Q113,Result_Q121);
vec4 Result_Q59;
Scale_RGB_B59(Result_Q121,MinAB_Q58,Result_Q59);
vec4 sRGB_Q42;
FastLinearTosRGB_B42(Result_Q59,sRGB_Q42);
vec4 Result_Q31=Blob_Color_Q30+(1.0-Blob_Color_Q30.a)*sRGB_Q42;
vec4 Result_Q40=Result_Q31; Result_Q40.a=1.0;
vec4 Out_Color=Result_Q40;
float Clip_Threshold=0.001;
bool To_sRGB=false;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[lo]=ho;const co="mrdlSliderBarVertexShader",uo=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
#ifdef TANGENT
attribute vec3 tangent;
#else
const vec3 tangent=vec3(0.);
#endif
uniform float _Radius_;
uniform float _Bevel_Front_;
uniform float _Bevel_Front_Stretch_;
uniform float _Bevel_Back_;
uniform float _Bevel_Back_Stretch_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform bool _Bulge_Enabled_;
uniform float _Bulge_Height_;
uniform float _Bulge_Radius_;
uniform float _Sun_Intensity_;
uniform float _Sun_Theta_;
uniform float _Sun_Phi_;
uniform float _Indirect_Diffuse_;
uniform vec4 _Albedo_;
uniform float _Specular_;
uniform float _Shininess_;
uniform float _Sharpness_;
uniform float _Subsurface_;
uniform vec4 _Left_Color_;
uniform vec4 _Right_Color_;
uniform float _Reflection_;
uniform float _Front_Reflect_;
uniform float _Edge_Reflect_;
uniform float _Power_;
uniform vec4 _Sky_Color_;
uniform vec4 _Horizon_Color_;
uniform vec4 _Ground_Color_;
uniform float _Horizon_Power_;
uniform sampler2D _Reflection_Map_;
uniform sampler2D _Indirect_Environment_;
uniform float _Width_;
uniform float _Fuzz_;
uniform float _Min_Fuzz_;
uniform float _Clip_Fade_;
uniform float _Hue_Shift_;
uniform float _Saturation_Shift_;
uniform float _Value_Shift_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform vec3 _Left_Index_Pos_;
uniform vec3 _Right_Index_Pos_;
uniform vec3 _Left_Index_Middle_Pos_;
uniform vec3 _Right_Index_Middle_Pos_;
uniform sampler2D _Decal_;
uniform vec2 _Decal_Scale_XY_;
uniform bool _Decal_Front_Only_;
uniform float _Rim_Intensity_;
uniform sampler2D _Rim_Texture_;
uniform float _Rim_Hue_Shift_;
uniform float _Rim_Saturation_Shift_;
uniform float _Rim_Value_Shift_;
uniform float _Iridescence_Intensity_;
uniform sampler2D _Iridescence_Texture_;
uniform bool Use_Global_Left_Index;
uniform bool Use_Global_Right_Index;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
uniform vec4 Global_Left_Thumb_Tip_Position;
uniform vec4 Global_Right_Thumb_Tip_Position;
uniform float Global_Left_Index_Tip_Proximity;
uniform float Global_Right_Index_Tip_Proximity;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
void Object_To_World_Pos_B12(
vec3 Pos_Object,
out vec3 Pos_World)
{
Pos_World=(world*vec4(Pos_Object,1.0)).xyz;
}
void Object_To_World_Normal_B32(
vec3 Nrm_Object,
out vec3 Nrm_World)
{
Nrm_World=(vec4(Nrm_Object,0.0)).xyz;
}
void Blob_Vertex_B23(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
float Blob_Fade_Length,
float Blob_Pulse,
float Blob_Fade,
out vec4 Blob_Info)
{
vec3 blob= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Blob_Position);
vec3 delta=blob-Position;
float dist=dot(Normal,delta);
float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;
vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);
float Fade=fadeValue*Intensity*Blob_Fade;
float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);
Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);
}
void Blob_Vertex_B24(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
float Blob_Fade_Length,
float Blob_Pulse,
float Blob_Fade,
out vec4 Blob_Info)
{
vec3 blob= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Blob_Position);
vec3 delta=blob-Position;
float dist=dot(Normal,delta);
float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;
vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);
float Fade=fadeValue*Intensity*Blob_Fade;
float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);
Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);
}
void Move_Verts_B130(
float Anisotropy,
vec3 P,
float Radius,
float Bevel,
vec3 Normal_Object,
float ScaleZ,
float Stretch,
out vec3 New_P,
out vec2 New_UV,
out float Radial_Gradient,
out vec3 Radial_Dir,
out vec3 New_Normal)
{
vec2 UV=P.xy*2.0+0.5;
vec2 center=clamp(UV,0.0,1.0);
vec2 delta=UV-center;
float deltad=(length(delta)*2.0);
float f=(Bevel+(Radius-Bevel)*Stretch)/Radius;
float innerd=clamp(deltad*2.0,0.0,1.0);
float outerd=clamp(deltad*2.0-1.0,0.0,1.0);
float bevelAngle=outerd*3.14159*0.5;
float sinb=sin(bevelAngle);
float cosb=cos(bevelAngle);
float beveld=(1.0-f)*innerd+f*sinb;
float br=outerd;
vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);
float dir=P.z<0.0001 ? 1.0 : -1.0;
New_UV=center+r2*((0.5-center)+normalize(delta+vec2(0.0,0.000001))*beveld*0.5);
New_P=vec3(New_UV-0.5,P.z+dir*(1.0-cosb)*Bevel*ScaleZ);
Radial_Gradient=clamp((deltad-0.5)*2.0,0.0,1.0);
Radial_Dir=vec3(delta*r2,0.0);
vec3 beveledNormal=cosb*Normal_Object+sinb*vec3(delta.x,delta.y,0.0);
New_Normal=Normal_Object.z==0.0 ? Normal_Object : beveledNormal;
}
void Object_To_World_Dir_B60(
vec3 Dir_Object,
out vec3 Normal_World,
out vec3 Normal_World_N,
out float Normal_Length)
{
Normal_World=(world*vec4(Dir_Object,0.0)).xyz;
Normal_Length=length(Normal_World);
Normal_World_N=Normal_World/Normal_Length;
}
void To_XYZ_B78(
vec3 Vec3,
out float X,
out float Y,
out float Z)
{
X=Vec3.x;
Y=Vec3.y;
Z=Vec3.z;
}
void Conditional_Float_B93(
bool Which,
float If_True,
float If_False,
out float Result)
{
Result=Which ? If_True : If_False;
}
void Object_To_World_Dir_B28(
vec3 Dir_Object,
out vec3 Binormal_World,
out vec3 Binormal_World_N,
out float Binormal_Length)
{
Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;
Binormal_Length=length(Binormal_World);
Binormal_World_N=Binormal_World/Binormal_Length;
}
void Pick_Radius_B69(
float Radius,
float Radius_Top_Left,
float Radius_Top_Right,
float Radius_Bottom_Left,
float Radius_Bottom_Right,
vec3 Position,
out float Result)
{
bool whichY=Position.y>0.0;
Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);
Result*=Radius;
}
void Conditional_Float_B36(
bool Which,
float If_True,
float If_False,
out float Result)
{
Result=Which ? If_True : If_False;
}
void Greater_Than_B37(
float Left,
float Right,
out bool Not_Greater_Than,
out bool Greater_Than)
{
Greater_Than=Left>Right;
Not_Greater_Than=!Greater_Than;
}
void Remap_Range_B105(
float In_Min,
float In_Max,
float Out_Min,
float Out_Max,
float In,
out float Out)
{
Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));
}
void main()
{
vec2 XY_Q85;
XY_Q85=(uv-vec2(0.5,0.5))*_Decal_Scale_XY_+vec2(0.5,0.5);
vec3 Tangent_World_Q27;
vec3 Tangent_World_N_Q27;
float Tangent_Length_Q27;
Tangent_World_Q27=(world*vec4(vec3(1,0,0),0.0)).xyz;
Tangent_Length_Q27=length(Tangent_World_Q27);
Tangent_World_N_Q27=Tangent_World_Q27/Tangent_Length_Q27;
vec3 Normal_World_Q60;
vec3 Normal_World_N_Q60;
float Normal_Length_Q60;
Object_To_World_Dir_B60(vec3(0,0,1),Normal_World_Q60,Normal_World_N_Q60,Normal_Length_Q60);
float X_Q78;
float Y_Q78;
float Z_Q78;
To_XYZ_B78(position,X_Q78,Y_Q78,Z_Q78);
vec3 Nrm_World_Q26;
Nrm_World_Q26=normalize((world*vec4(normal,0.0)).xyz);
vec3 Binormal_World_Q28;
vec3 Binormal_World_N_Q28;
float Binormal_Length_Q28;
Object_To_World_Dir_B28(vec3(0,1,0),Binormal_World_Q28,Binormal_World_N_Q28,Binormal_Length_Q28);
float Anisotropy_Q29=Tangent_Length_Q27/Binormal_Length_Q28;
float Result_Q69;
Pick_Radius_B69(_Radius_,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q69);
float Anisotropy_Q53=Binormal_Length_Q28/Normal_Length_Q60;
bool Not_Greater_Than_Q37;
bool Greater_Than_Q37;
Greater_Than_B37(Z_Q78,0.0,Not_Greater_Than_Q37,Greater_Than_Q37);
vec4 Linear_Q101;
Linear_Q101.rgb=clamp(_Left_Color_.rgb*_Left_Color_.rgb,0.0,1.0);
Linear_Q101.a=_Left_Color_.a;
vec4 Linear_Q102;
Linear_Q102.rgb=clamp(_Right_Color_.rgb*_Right_Color_.rgb,0.0,1.0);
Linear_Q102.a=_Right_Color_.a;
vec3 Difference_Q61=vec3(0,0,0)-Normal_World_N_Q60;
vec4 Out_Color_Q34=vec4(X_Q78,Y_Q78,Z_Q78,1);
float Result_Q36;
Conditional_Float_B36(Greater_Than_Q37,_Bevel_Back_,_Bevel_Front_,Result_Q36);
float Result_Q94;
Conditional_Float_B36(Greater_Than_Q37,_Bevel_Back_Stretch_,_Bevel_Front_Stretch_,Result_Q94);
vec3 New_P_Q130;
vec2 New_UV_Q130;
float Radial_Gradient_Q130;
vec3 Radial_Dir_Q130;
vec3 New_Normal_Q130;
Move_Verts_B130(Anisotropy_Q29,position,Result_Q69,Result_Q36,normal,Anisotropy_Q53,Result_Q94,New_P_Q130,New_UV_Q130,Radial_Gradient_Q130,Radial_Dir_Q130,New_Normal_Q130);
float X_Q98;
float Y_Q98;
X_Q98=New_UV_Q130.x;
Y_Q98=New_UV_Q130.y;
vec3 Pos_World_Q12;
Object_To_World_Pos_B12(New_P_Q130,Pos_World_Q12);
vec3 Nrm_World_Q32;
Object_To_World_Normal_B32(New_Normal_Q130,Nrm_World_Q32);
vec4 Blob_Info_Q23;
#if BLOB_ENABLE
Blob_Vertex_B23(Pos_World_Q12,Nrm_World_Q26,Tangent_World_N_Q27,Binormal_World_N_Q28,_Blob_Position_,_Blob_Intensity_,_Blob_Near_Size_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_,_Blob_Fade_,Blob_Info_Q23);
#else
Blob_Info_Q23=vec4(0,0,0,0);
#endif
vec4 Blob_Info_Q24;
#if BLOB_ENABLE_2
Blob_Vertex_B24(Pos_World_Q12,Nrm_World_Q26,Tangent_World_N_Q27,Binormal_World_N_Q28,_Blob_Position_2_,_Blob_Intensity_,_Blob_Near_Size_2_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_2_,_Blob_Fade_2_,Blob_Info_Q24);
#else
Blob_Info_Q24=vec4(0,0,0,0);
#endif
float Out_Q105;
Remap_Range_B105(0.0,1.0,0.0,1.0,X_Q98,Out_Q105);
float X_Q86;
float Y_Q86;
float Z_Q86;
To_XYZ_B78(Nrm_World_Q32,X_Q86,Y_Q86,Z_Q86);
vec4 Color_At_T_Q97=mix(Linear_Q101,Linear_Q102,Out_Q105);
float Minus_F_Q87=-Z_Q86;
float R_Q99;
float G_Q99;
float B_Q99;
float A_Q99;
R_Q99=Color_At_T_Q97.r; G_Q99=Color_At_T_Q97.g; B_Q99=Color_At_T_Q97.b; A_Q99=Color_At_T_Q97.a;
float ClampF_Q88=clamp(0.0,Minus_F_Q87,1.0);
float Result_Q93;
Conditional_Float_B93(_Decal_Front_Only_,ClampF_Q88,1.0,Result_Q93);
vec4 Vec4_Q89=vec4(Result_Q93,Radial_Gradient_Q130,G_Q99,B_Q99);
vec3 Position=Pos_World_Q12;
vec3 Normal=Nrm_World_Q32;
vec2 UV=XY_Q85;
vec3 Tangent=Tangent_World_N_Q27;
vec3 Binormal=Difference_Q61;
vec4 Color=Out_Color_Q34;
vec4 Extra1=Vec4_Q89;
vec4 Extra2=Blob_Info_Q23;
vec4 Extra3=Blob_Info_Q24;
gl_Position=viewProjection*vec4(Position,1);
vPosition=Position;
vNormal=Normal;
vUV=UV;
vTangent=Tangent;
vBinormal=Binormal;
vColor=Color;
vExtra1=Extra1;
vExtra2=Extra2;
vExtra3=Extra3;
}`;ht.ShadersStore[co]=uo;class fo extends $t{constructor(){super(),this.SKY_ENABLED=!0,this.BLOB_ENABLE_2=!0,this.IRIDESCENCE_ENABLED=!0,this._needNormals=!0,this._needUVs=!0,this.rebuild()}}class v extends qt{constructor(t,e){super(t,e),this.radius=.6,this.bevelFront=.6,this.bevelFrontStretch=.077,this.bevelBack=0,this.bevelBackStretch=0,this.radiusTopLeft=1,this.radiusTopRight=1,this.radiusBottomLeft=1,this.radiusBottomRight=1,this.bulgeEnabled=!1,this.bulgeHeight=-.323,this.bulgeRadius=.73,this.sunIntensity=1.102,this.sunTheta=.76,this.sunPhi=.526,this.indirectDiffuse=.658,this.albedo=new A(.0117647,.505882,.996078,1),this.specular=0,this.shininess=10,this.sharpness=0,this.subsurface=0,this.leftGradientColor=new A(.0117647,.505882,.996078,1),this.rightGradientColor=new A(.0117647,.505882,.996078,1),this.reflection=.749,this.frontReflect=0,this.edgeReflect=.09,this.power=8.13,this.skyColor=new A(.0117647,.964706,.996078,1),this.horizonColor=new A(.0117647,.333333,.996078,1),this.groundColor=new A(0,.254902,.996078,1),this.horizonPower=1,this.width=.02,this.fuzz=.5,this.minFuzz=.001,this.clipFade=.01,this.hueShift=0,this.saturationShift=0,this.valueShift=0,this.blobPosition=new c(0,0,.1),this.blobIntensity=.5,this.blobNearSize=.01,this.blobFarSize=.03,this.blobNearDistance=0,this.blobFarDistance=.08,this.blobFadeLength=.576,this.blobPulse=0,this.blobFade=1,this.blobPosition2=new c(.2,0,.1),this.blobNearSize2=.01,this.blobPulse2=0,this.blobFade2=1,this.blobTexture=new S("",this.getScene()),this.leftIndexPosition=new c(0,0,1),this.rightIndexPosition=new c(-1,-1,-1),this.leftIndexMiddlePosition=new c(0,0,0),this.rightIndexMiddlePosition=new c(0,0,0),this.decalScaleXY=new z(1.5,1.5),this.decalFrontOnly=!0,this.rimIntensity=.287,this.rimHueShift=0,this.rimSaturationShift=0,this.rimValueShift=-1,this.iridescenceIntensity=0,this.useGlobalLeftIndex=1,this.useGlobalRightIndex=1,this.globalLeftIndexTipProximity=0,this.globalRightIndexTipProximity=0,this.globalLeftIndexTipPosition=new nt(.5,0,-.55,1),this.globaRightIndexTipPosition=new nt(0,0,0,1),this.globalLeftThumbTipPosition=new nt(.5,0,-.55,1),this.globalRightThumbTipPosition=new nt(0,0,0,1),this.globalLeftIndexMiddlePosition=new nt(.5,0,-.55,1),this.globalRightIndexMiddlePosition=new nt(0,0,0,1),this.alphaMode=Lt.ALPHA_DISABLE,this.backFaceCulling=!1,this._blueGradientTexture=new S(v.BLUE_GRADIENT_TEXTURE_URL,this.getScene(),!0,!1,S.NEAREST_SAMPLINGMODE),this._decalTexture=new S("",this.getScene()),this._reflectionMapTexture=new S("",this.getScene()),this._indirectEnvTexture=new S("",this.getScene())}needAlphaBlending(){return!1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new fo);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!1,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="mrdlSliderBar",h=i.toString(),d=["world","viewProjection","cameraPosition","_Radius_","_Bevel_Front_","_Bevel_Front_Stretch_","_Bevel_Back_","_Bevel_Back_Stretch_","_Radius_Top_Left_","_Radius_Top_Right_","_Radius_Bottom_Left_","_Radius_Bottom_Right_","_Bulge_Enabled_","_Bulge_Height_","_Bulge_Radius_","_Sun_Intensity_","_Sun_Theta_","_Sun_Phi_","_Indirect_Diffuse_","_Albedo_","_Specular_","_Shininess_","_Sharpness_","_Subsurface_","_Left_Color_","_Right_Color_","_Reflection_","_Front_Reflect_","_Edge_Reflect_","_Power_","_Sky_Color_","_Horizon_Color_","_Ground_Color_","_Horizon_Power_","_Reflection_Map_","_Indirect_Environment_","_Width_","_Fuzz_","_Min_Fuzz_","_Clip_Fade_","_Hue_Shift_","_Saturation_Shift_","_Value_Shift_","_Blob_Position_","_Blob_Intensity_","_Blob_Near_Size_","_Blob_Far_Size_","_Blob_Near_Distance_","_Blob_Far_Distance_","_Blob_Fade_Length_","_Blob_Pulse_","_Blob_Fade_","_Blob_Texture_","_Blob_Position_2_","_Blob_Near_Size_2_","_Blob_Pulse_2_","_Blob_Fade_2_","_Left_Index_Pos_","_Right_Index_Pos_","_Left_Index_Middle_Pos_","_Right_Index_Middle_Pos_","_Decal_","_Decal_Scale_XY_","_Decal_Front_Only_","_Rim_Intensity_","_Rim_Texture_","_Rim_Hue_Shift_","_Rim_Saturation_Shift_","_Rim_Value_Shift_","_Iridescence_Intensity_","_Iridescence_Texture_","Use_Global_Left_Index","Use_Global_Right_Index","Global_Left_Index_Tip_Position","Global_Right_Index_Tip_Position","Global_Left_Thumb_Tip_Position","Global_Right_Thumb_Tip_Position","Global_Left_Index_Middle_Position;","Global_Right_Index_Middle_Position","Global_Left_Index_Tip_Proximity","Global_Right_Index_Tip_Proximity"],f=["_Rim_Texture_","_Iridescence_Texture_"],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i,this._materialContext)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){if(!i.materialDefines)return;const o=i.effect;o&&(this._activeEffect=o,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",this.getScene().getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",this.getScene().activeCamera.position),this._activeEffect.setFloat("_Radius_",this.radius),this._activeEffect.setFloat("_Bevel_Front_",this.bevelFront),this._activeEffect.setFloat("_Bevel_Front_Stretch_",this.bevelFrontStretch),this._activeEffect.setFloat("_Bevel_Back_",this.bevelBack),this._activeEffect.setFloat("_Bevel_Back_Stretch_",this.bevelBackStretch),this._activeEffect.setFloat("_Radius_Top_Left_",this.radiusTopLeft),this._activeEffect.setFloat("_Radius_Top_Right_",this.radiusTopRight),this._activeEffect.setFloat("_Radius_Bottom_Left_",this.radiusBottomLeft),this._activeEffect.setFloat("_Radius_Bottom_Right_",this.radiusBottomRight),this._activeEffect.setFloat("_Bulge_Enabled_",this.bulgeEnabled?1:0),this._activeEffect.setFloat("_Bulge_Height_",this.bulgeHeight),this._activeEffect.setFloat("_Bulge_Radius_",this.bulgeRadius),this._activeEffect.setFloat("_Sun_Intensity_",this.sunIntensity),this._activeEffect.setFloat("_Sun_Theta_",this.sunTheta),this._activeEffect.setFloat("_Sun_Phi_",this.sunPhi),this._activeEffect.setFloat("_Indirect_Diffuse_",this.indirectDiffuse),this._activeEffect.setDirectColor4("_Albedo_",this.albedo),this._activeEffect.setFloat("_Specular_",this.specular),this._activeEffect.setFloat("_Shininess_",this.shininess),this._activeEffect.setFloat("_Sharpness_",this.sharpness),this._activeEffect.setFloat("_Subsurface_",this.subsurface),this._activeEffect.setDirectColor4("_Left_Color_",this.leftGradientColor),this._activeEffect.setDirectColor4("_Right_Color_",this.rightGradientColor),this._activeEffect.setFloat("_Reflection_",this.reflection),this._activeEffect.setFloat("_Front_Reflect_",this.frontReflect),this._activeEffect.setFloat("_Edge_Reflect_",this.edgeReflect),this._activeEffect.setFloat("_Power_",this.power),this._activeEffect.setDirectColor4("_Sky_Color_",this.skyColor),this._activeEffect.setDirectColor4("_Horizon_Color_",this.horizonColor),this._activeEffect.setDirectColor4("_Ground_Color_",this.groundColor),this._activeEffect.setFloat("_Horizon_Power_",this.horizonPower),this._activeEffect.setTexture("_Reflection_Map_",this._reflectionMapTexture),this._activeEffect.setTexture("_Indirect_Environment_",this._indirectEnvTexture),this._activeEffect.setFloat("_Width_",this.width),this._activeEffect.setFloat("_Fuzz_",this.fuzz),this._activeEffect.setFloat("_Min_Fuzz_",this.minFuzz),this._activeEffect.setFloat("_Clip_Fade_",this.clipFade),this._activeEffect.setFloat("_Hue_Shift_",this.hueShift),this._activeEffect.setFloat("_Saturation_Shift_",this.saturationShift),this._activeEffect.setFloat("_Value_Shift_",this.valueShift),this._activeEffect.setVector3("_Blob_Position_",this.blobPosition),this._activeEffect.setFloat("_Blob_Intensity_",this.blobIntensity),this._activeEffect.setFloat("_Blob_Near_Size_",this.blobNearSize),this._activeEffect.setFloat("_Blob_Far_Size_",this.blobFarSize),this._activeEffect.setFloat("_Blob_Near_Distance_",this.blobNearDistance),this._activeEffect.setFloat("_Blob_Far_Distance_",this.blobFarDistance),this._activeEffect.setFloat("_Blob_Fade_Length_",this.blobFadeLength),this._activeEffect.setFloat("_Blob_Pulse_",this.blobPulse),this._activeEffect.setFloat("_Blob_Fade_",this.blobFade),this._activeEffect.setTexture("_Blob_Texture_",this.blobTexture),this._activeEffect.setVector3("_Blob_Position_2_",this.blobPosition2),this._activeEffect.setFloat("_Blob_Near_Size_2_",this.blobNearSize2),this._activeEffect.setFloat("_Blob_Pulse_2_",this.blobPulse2),this._activeEffect.setFloat("_Blob_Fade_2_",this.blobFade2),this._activeEffect.setVector3("_Left_Index_Pos_",this.leftIndexPosition),this._activeEffect.setVector3("_Right_Index_Pos_",this.rightIndexPosition),this._activeEffect.setVector3("_Left_Index_Middle_Pos_",this.leftIndexMiddlePosition),this._activeEffect.setVector3("_Right_Index_Middle_Pos_",this.rightIndexMiddlePosition),this._activeEffect.setTexture("_Decal_",this._decalTexture),this._activeEffect.setVector2("_Decal_Scale_XY_",this.decalScaleXY),this._activeEffect.setFloat("_Decal_Front_Only_",this.decalFrontOnly?1:0),this._activeEffect.setFloat("_Rim_Intensity_",this.rimIntensity),this._activeEffect.setTexture("_Rim_Texture_",this._blueGradientTexture),this._activeEffect.setFloat("_Rim_Hue_Shift_",this.rimHueShift),this._activeEffect.setFloat("_Rim_Saturation_Shift_",this.rimSaturationShift),this._activeEffect.setFloat("_Rim_Value_Shift_",this.rimValueShift),this._activeEffect.setFloat("_Iridescence_Intensity_",this.iridescenceIntensity),this._activeEffect.setTexture("_Iridescence_Texture_",this._blueGradientTexture),this._activeEffect.setFloat("Use_Global_Left_Index",this.useGlobalLeftIndex),this._activeEffect.setFloat("Use_Global_Right_Index",this.useGlobalRightIndex),this._activeEffect.setVector4("Global_Left_Index_Tip_Position",this.globalLeftIndexTipPosition),this._activeEffect.setVector4("Global_Right_Index_Tip_Position",this.globaRightIndexTipPosition),this._activeEffect.setVector4("Global_Left_Thumb_Tip_Position",this.globalLeftThumbTipPosition),this._activeEffect.setVector4("Global_Right_Thumb_Tip_Position",this.globalRightThumbTipPosition),this._activeEffect.setVector4("Global_Left_Index_Middle_Position",this.globalLeftIndexMiddlePosition),this._activeEffect.setVector4("Global_Right_Index_Middle_Position",this.globalRightIndexMiddlePosition),this._activeEffect.setFloat("Global_Left_Index_Tip_Proximity",this.globalLeftIndexTipProximity),this._activeEffect.setFloat("Global_Right_Index_Tip_Proximity",this.globalRightIndexTipProximity),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t),this._reflectionMapTexture.dispose(),this._indirectEnvTexture.dispose(),this._blueGradientTexture.dispose(),this._decalTexture.dispose()}clone(t){return X.Clone(()=>new v(t,this.getScene()),this)}serialize(){const t=super.serialize();return t.customType="BABYLON.MRDLSliderBarMaterial",t}getClassName(){return"MRDLSliderBarMaterial"}static Parse(t,e,i){return X.Parse(()=>new v(t.name,e),t,e,i)}}v.BLUE_GRADIENT_TEXTURE_URL="https://assets.babylonjs.com/meshes/MRTK/MRDL/mrtk-mrdl-blue-gradient.png";n([_()],v.prototype,"radius",void 0);n([_()],v.prototype,"bevelFront",void 0);n([_()],v.prototype,"bevelFrontStretch",void 0);n([_()],v.prototype,"bevelBack",void 0);n([_()],v.prototype,"bevelBackStretch",void 0);n([_()],v.prototype,"radiusTopLeft",void 0);n([_()],v.prototype,"radiusTopRight",void 0);n([_()],v.prototype,"radiusBottomLeft",void 0);n([_()],v.prototype,"radiusBottomRight",void 0);n([_()],v.prototype,"bulgeEnabled",void 0);n([_()],v.prototype,"bulgeHeight",void 0);n([_()],v.prototype,"bulgeRadius",void 0);n([_()],v.prototype,"sunIntensity",void 0);n([_()],v.prototype,"sunTheta",void 0);n([_()],v.prototype,"sunPhi",void 0);n([_()],v.prototype,"indirectDiffuse",void 0);n([_()],v.prototype,"albedo",void 0);n([_()],v.prototype,"specular",void 0);n([_()],v.prototype,"shininess",void 0);n([_()],v.prototype,"sharpness",void 0);n([_()],v.prototype,"subsurface",void 0);n([_()],v.prototype,"leftGradientColor",void 0);n([_()],v.prototype,"rightGradientColor",void 0);n([_()],v.prototype,"reflection",void 0);n([_()],v.prototype,"frontReflect",void 0);n([_()],v.prototype,"edgeReflect",void 0);n([_()],v.prototype,"power",void 0);n([_()],v.prototype,"skyColor",void 0);n([_()],v.prototype,"horizonColor",void 0);n([_()],v.prototype,"groundColor",void 0);n([_()],v.prototype,"horizonPower",void 0);n([_()],v.prototype,"width",void 0);n([_()],v.prototype,"fuzz",void 0);n([_()],v.prototype,"minFuzz",void 0);n([_()],v.prototype,"clipFade",void 0);n([_()],v.prototype,"hueShift",void 0);n([_()],v.prototype,"saturationShift",void 0);n([_()],v.prototype,"valueShift",void 0);n([_()],v.prototype,"blobPosition",void 0);n([_()],v.prototype,"blobIntensity",void 0);n([_()],v.prototype,"blobNearSize",void 0);n([_()],v.prototype,"blobFarSize",void 0);n([_()],v.prototype,"blobNearDistance",void 0);n([_()],v.prototype,"blobFarDistance",void 0);n([_()],v.prototype,"blobFadeLength",void 0);n([_()],v.prototype,"blobPulse",void 0);n([_()],v.prototype,"blobFade",void 0);n([_()],v.prototype,"blobPosition2",void 0);n([_()],v.prototype,"blobNearSize2",void 0);n([_()],v.prototype,"blobPulse2",void 0);n([_()],v.prototype,"blobFade2",void 0);n([_()],v.prototype,"blobTexture",void 0);n([_()],v.prototype,"leftIndexPosition",void 0);n([_()],v.prototype,"rightIndexPosition",void 0);n([_()],v.prototype,"leftIndexMiddlePosition",void 0);n([_()],v.prototype,"rightIndexMiddlePosition",void 0);n([_()],v.prototype,"decalScaleXY",void 0);n([_()],v.prototype,"decalFrontOnly",void 0);n([_()],v.prototype,"rimIntensity",void 0);n([_()],v.prototype,"rimHueShift",void 0);n([_()],v.prototype,"rimSaturationShift",void 0);n([_()],v.prototype,"rimValueShift",void 0);n([_()],v.prototype,"iridescenceIntensity",void 0);N("BABYLON.GUI.MRDLSliderBarMaterial",v);const go="mrdlSliderThumbPixelShader",mo=`uniform vec3 cameraPosition;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
uniform float _Radius_;
uniform float _Bevel_Front_;
uniform float _Bevel_Front_Stretch_;
uniform float _Bevel_Back_;
uniform float _Bevel_Back_Stretch_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform bool _Bulge_Enabled_;
uniform float _Bulge_Height_;
uniform float _Bulge_Radius_;
uniform float _Sun_Intensity_;
uniform float _Sun_Theta_;
uniform float _Sun_Phi_;
uniform float _Indirect_Diffuse_;
uniform vec4 _Albedo_;
uniform float _Specular_;
uniform float _Shininess_;
uniform float _Sharpness_;
uniform float _Subsurface_;
uniform vec4 _Left_Color_;
uniform vec4 _Right_Color_;
uniform float _Reflection_;
uniform float _Front_Reflect_;
uniform float _Edge_Reflect_;
uniform float _Power_;
uniform vec4 _Sky_Color_;
uniform vec4 _Horizon_Color_;
uniform vec4 _Ground_Color_;
uniform float _Horizon_Power_;
uniform sampler2D _Reflection_Map_;
uniform sampler2D _Indirect_Environment_;
uniform float _Width_;
uniform float _Fuzz_;
uniform float _Min_Fuzz_;
uniform float _Clip_Fade_;
uniform float _Hue_Shift_;
uniform float _Saturation_Shift_;
uniform float _Value_Shift_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform vec3 _Left_Index_Pos_;
uniform vec3 _Right_Index_Pos_;
uniform vec3 _Left_Index_Middle_Pos_;
uniform vec3 _Right_Index_Middle_Pos_;
uniform sampler2D _Decal_;
uniform vec2 _Decal_Scale_XY_;
uniform bool _Decal_Front_Only_;
uniform float _Rim_Intensity_;
uniform sampler2D _Rim_Texture_;
uniform float _Rim_Hue_Shift_;
uniform float _Rim_Saturation_Shift_;
uniform float _Rim_Value_Shift_;
uniform float _Iridescence_Intensity_;
uniform sampler2D _Iridescence_Texture_;
uniform bool Use_Global_Left_Index;
uniform bool Use_Global_Right_Index;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
uniform vec4 Global_Left_Thumb_Tip_Position;
uniform vec4 Global_Right_Thumb_Tip_Position;
uniform vec4 Global_Left_Index_Middle_Position;
uniform vec4 Global_Right_Index_Middle_Position;
uniform float Global_Left_Index_Tip_Proximity;
uniform float Global_Right_Index_Tip_Proximity;
void Blob_Fragment_B180(
sampler2D Blob_Texture,
vec4 Blob_Info1,
vec4 Blob_Info2,
out vec4 Blob_Color)
{
float k1=dot(Blob_Info1.xy,Blob_Info1.xy);
float k2=dot(Blob_Info2.xy,Blob_Info2.xy);
vec3 closer=k1<k2 ? vec3(k1,Blob_Info1.z,Blob_Info1.w) : vec3(k2,Blob_Info2.z,Blob_Info2.w);
Blob_Color=closer.z*texture(Blob_Texture,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);
}
void FastLinearTosRGB_B192(
vec4 Linear,
out vec4 sRGB)
{
sRGB.rgb=sqrt(clamp(Linear.rgb,0.0,1.0));
sRGB.a=Linear.a;
}
void Scale_RGB_B209(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=vec4(Scalar,Scalar,Scalar,1)*Color;
}
void Fragment_Main_B271(
float Sun_Intensity,
float Sun_Theta,
float Sun_Phi,
vec3 Normal,
vec4 Albedo,
float Fresnel_Reflect,
float Shininess,
vec3 Incident,
vec4 Horizon_Color,
vec4 Sky_Color,
vec4 Ground_Color,
float Indirect_Diffuse,
float Specular,
float Horizon_Power,
float Reflection,
vec4 Reflection_Sample,
vec4 Indirect_Sample,
float Sharpness,
float SSS,
float Subsurface,
vec4 Translucence,
vec4 Rim_Light,
vec4 Iridescence,
out vec4 Result)
{
float theta=Sun_Theta*2.0*3.14159;
float phi=Sun_Phi*3.14159;
vec3 lightDir= vec3(cos(phi)*cos(theta),sin(phi),cos(phi)*sin(theta));
float NdotL=max(dot(lightDir,Normal),0.0);
vec3 R=reflect(Incident,Normal);
float RdotL=max(0.0,dot(R,lightDir));
float specular=pow(RdotL,Shininess);
specular=mix(specular,smoothstep(0.495*Sharpness,1.0-0.495*Sharpness,specular),Sharpness);
vec4 gi=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);
Result=((Sun_Intensity*NdotL+Indirect_Sample*Indirect_Diffuse+Translucence)*(1.0+SSS*Subsurface))*Albedo*(1.0-Fresnel_Reflect)+(Sun_Intensity*specular*Specular+Fresnel_Reflect*Reflection*Reflection_Sample)+Fresnel_Reflect*Rim_Light+Iridescence;
}
void Bulge_B229(
bool Enabled,
vec3 Normal,
vec3 Tangent,
float Bulge_Height,
vec4 UV,
float Bulge_Radius,
vec3 ButtonN,
out vec3 New_Normal)
{
vec2 xy=clamp(UV.xy*2.0,vec2(-1,-1),vec2(1,1));
vec3 B=(cross(Normal,Tangent));
float k=-clamp(1.0-length(xy)/Bulge_Radius,0.0,1.0)*Bulge_Height;
k=sin(k*3.14159*0.5);
k*=smoothstep(0.9998,0.9999,abs(dot(ButtonN,Normal)));
New_Normal=Normal*sqrt(1.0-k*k)+(xy.x*Tangent+xy.y*B)*k;
New_Normal=Enabled ? New_Normal : Normal;
}
void SSS_B227(
vec3 ButtonN,
vec3 Normal,
vec3 Incident,
out float Result)
{
float NdotI=abs(dot(Normal,Incident));
float BdotI=abs(dot(ButtonN,Incident));
Result=(abs(NdotI-BdotI)); 
}
void FingerOcclusion_B217(
float Width,
float DistToCenter,
float Fuzz,
float Min_Fuzz,
vec3 Position,
vec3 Forward,
vec3 Nearest,
float Fade_Out,
out float NotInShadow)
{
float d=dot((Nearest-Position),Forward);
float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);
NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);
}
void FingerOcclusion_B218(
float Width,
float DistToCenter,
float Fuzz,
float Min_Fuzz,
vec3 Position,
vec3 Forward,
vec3 Nearest,
float Fade_Out,
out float NotInShadow)
{
float d=dot((Nearest-Position),Forward);
float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);
NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);
}
void Scale_Color_B241(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=Scalar*Color;
}
void From_HSV_B223(
float Hue,
float Saturation,
float Value,
float Alpha,
out vec4 Color)
{
vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);
vec3 p=abs(fract(vec3(Hue,Hue,Hue)+K.xyz)*6.0-K.www);
Color.rgb=Value*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),Saturation);
Color.a=Alpha;
}
void Fast_Fresnel_B272(
float Front_Reflect,
float Edge_Reflect,
float Power,
vec3 Normal,
vec3 Incident,
out float Transmit,
out float Reflect)
{
float d=max(-dot(Incident,Normal),0.0);
Reflect=Front_Reflect+(Edge_Reflect-Front_Reflect)*pow(1.0-d,Power);
Transmit=1.0-Reflect;
}
void Mapped_Environment_B201(
sampler2D Reflected_Environment,
sampler2D Indirect_Environment,
vec3 Dir,
out vec4 Reflected_Color,
out vec4 Indirect_Diffuse)
{
Reflected_Color=texture(Reflected_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));
Indirect_Diffuse=texture(Indirect_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));
}
vec4 SampleEnv_Bid200(vec3 D,vec4 S,vec4 H,vec4 G,float exponent)
{
float k=pow(abs(D.y),exponent);
vec4 C;
if (D.y>0.0) {
C=mix(H,S,k);
} else {
C=mix(H,G,k); 
}
return C;
}
void Sky_Environment_B200(
vec3 Normal,
vec3 Reflected,
vec4 Sky_Color,
vec4 Horizon_Color,
vec4 Ground_Color,
float Horizon_Power,
out vec4 Reflected_Color,
out vec4 Indirect_Color)
{
Reflected_Color=SampleEnv_Bid200(Reflected,Sky_Color,Horizon_Color,Ground_Color,Horizon_Power);
Indirect_Color=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);
}
void Min_Segment_Distance_B215(
vec3 P0,
vec3 P1,
vec3 Q0,
vec3 Q1,
out vec3 NearP,
out vec3 NearQ,
out float Distance)
{
vec3 u=P1-P0;
vec3 v=Q1-Q0;
vec3 w=P0-Q0;
float a=dot(u,u);
float b=dot(u,v);
float c=dot(v,v);
float d=dot(u,w);
float e=dot(v,w);
float D=a*c-b*b;
float sD=D;
float tD=D;
float sc,sN,tc,tN;
if (D<0.00001) {
sN=0.0;
sD=1.0;
tN=e;
tD=c;
} else {
sN=(b*e-c*d);
tN=(a*e-b*d);
if (sN<0.0) {
sN=0.0;
tN=e;
tD=c;
} else if (sN>sD) {
sN=sD;
tN=e+b;
tD=c;
}
}
if (tN<0.0) {
tN=0.0;
if (-d<0.0) {
sN=0.0;
} else if (-d>a) {
sN=sD;
} else {
sN=-d;
sD=a;
}
} else if (tN>tD) {
tN=tD;
if ((-d+b)<0.0) {
sN=0.0;
} else if ((-d+b)>a) {
sN=sD;
} else {
sN=(-d+b);
sD=a;
}
}
sc=abs(sN)<0.000001 ? 0.0 : sN/sD;
tc=abs(tN)<0.000001 ? 0.0 : tN/tD;
NearP=P0+sc*u;
NearQ=Q0+tc*v;
Distance=distance(NearP,NearQ);
}
void To_XYZ_B224(
vec3 Vec3,
out float X,
out float Y,
out float Z)
{
X=Vec3.x;
Y=Vec3.y;
Z=Vec3.z;
}
void Finger_Positions_B214(
vec3 Left_Index_Pos,
vec3 Right_Index_Pos,
vec3 Left_Index_Middle_Pos,
vec3 Right_Index_Middle_Pos,
out vec3 Left_Index,
out vec3 Right_Index,
out vec3 Left_Index_Middle,
out vec3 Right_Index_Middle)
{
Left_Index= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Left_Index_Pos);
Right_Index= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Right_Index_Pos);
Left_Index_Middle= (Use_Global_Left_Index ? Global_Left_Index_Middle_Position.xyz : Left_Index_Middle_Pos);
Right_Index_Middle= (Use_Global_Right_Index ? Global_Right_Index_Middle_Position.xyz : Right_Index_Middle_Pos);
}
void VaryHSV_B258(
vec3 HSV_In,
float Hue_Shift,
float Saturation_Shift,
float Value_Shift,
out vec3 HSV_Out)
{
HSV_Out=vec3(fract(HSV_In.x+Hue_Shift),clamp(HSV_In.y+Saturation_Shift,0.0,1.0),clamp(HSV_In.z+Value_Shift,0.0,1.0));
}
void Remap_Range_B264(
float In_Min,
float In_Max,
float Out_Min,
float Out_Max,
float In,
out float Out)
{
Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));
}
void To_HSV_B225(
vec4 Color,
out float Hue,
out float Saturation,
out float Value,
out float Alpha,
out vec3 HSV)
{
vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);
vec4 p=Color.g<Color.b ? vec4(Color.bg,K.wz) : vec4(Color.gb,K.xy);
vec4 q=Color.r<p.x ? vec4(p.xyw,Color.r) : vec4(Color.r,p.yzx);
float d=q.x-min(q.w,q.y);
float e=1.0e-10;
Hue=abs(q.z+(q.w-q.y)/(6.0*d+e));
Saturation=d/(q.x+e);
Value=q.x;
Alpha=Color.a;
HSV=vec3(Hue,Saturation,Value);
}
void Code_B260(
float X,
out float Result)
{
Result=(acos(X)/3.14159-0.5)*2.0;
}
void Rim_Light_B282(
vec3 Front,
vec3 Normal,
vec3 Incident,
float Rim_Intensity,
sampler2D Texture,
out vec4 Result)
{
vec3 R=reflect(Incident,Normal);
float RdotF=dot(R,Front);
float RdotL=sqrt(1.0-RdotF*RdotF);
vec2 UV=vec2(R.y*0.5+0.5,0.5);
vec4 Color=texture(Texture,UV);
Result=Color;
}
void main()
{
vec4 Blob_Color_Q180;
#if BLOB_ENABLE
Blob_Fragment_B180(_Blob_Texture_,vExtra2,vExtra3,Blob_Color_Q180);
#else
Blob_Color_Q180=vec4(0,0,0,0);
#endif
vec3 Incident_Q189=normalize(vPosition-cameraPosition);
vec3 Normalized_Q188=normalize(vNormal);
vec3 Normalized_Q221=normalize(vTangent);
vec4 Color_Q233;
#if DECAL_ENABLE
Color_Q233=texture(_Decal_,vUV);
#else
Color_Q233=vec4(0,0,0,0);
#endif
float X_Q240;
float Y_Q240;
float Z_Q240;
float W_Q240;
X_Q240=vExtra1.x;
Y_Q240=vExtra1.y;
Z_Q240=vExtra1.z;
W_Q240=vExtra1.w;
vec4 Linear_Q193;
Linear_Q193.rgb=clamp(_Sky_Color_.rgb*_Sky_Color_.rgb,0.0,1.0);
Linear_Q193.a=_Sky_Color_.a;
vec4 Linear_Q194;
Linear_Q194.rgb=clamp(_Horizon_Color_.rgb*_Horizon_Color_.rgb,0.0,1.0);
Linear_Q194.a=_Horizon_Color_.a;
vec4 Linear_Q195;
Linear_Q195.rgb=clamp(_Ground_Color_.rgb*_Ground_Color_.rgb,0.0,1.0);
Linear_Q195.a=_Ground_Color_.a;
vec3 Left_Index_Q214;
vec3 Right_Index_Q214;
vec3 Left_Index_Middle_Q214;
vec3 Right_Index_Middle_Q214;
Finger_Positions_B214(_Left_Index_Pos_,_Right_Index_Pos_,_Left_Index_Middle_Pos_,_Right_Index_Middle_Pos_,Left_Index_Q214,Right_Index_Q214,Left_Index_Middle_Q214,Right_Index_Middle_Q214);
vec4 Linear_Q196;
Linear_Q196.rgb=clamp(_Albedo_.rgb*_Albedo_.rgb,0.0,1.0);
Linear_Q196.a=_Albedo_.a;
vec3 Normalized_Q257=normalize(vBinormal);
vec3 Incident_Q220=normalize(vPosition-cameraPosition);
vec3 New_Normal_Q229;
Bulge_B229(_Bulge_Enabled_,Normalized_Q188,Normalized_Q221,_Bulge_Height_,vColor,_Bulge_Radius_,vBinormal,New_Normal_Q229);
float Result_Q227;
SSS_B227(vBinormal,New_Normal_Q229,Incident_Q189,Result_Q227);
vec4 Result_Q241;
Scale_Color_B241(Color_Q233,X_Q240,Result_Q241);
float Transmit_Q272;
float Reflect_Q272;
Fast_Fresnel_B272(_Front_Reflect_,_Edge_Reflect_,_Power_,New_Normal_Q229,Incident_Q189,Transmit_Q272,Reflect_Q272);
float Product_Q275=Y_Q240*Y_Q240;
vec3 NearP_Q215;
vec3 NearQ_Q215;
float Distance_Q215;
Min_Segment_Distance_B215(Left_Index_Q214,Left_Index_Middle_Q214,vPosition,cameraPosition,NearP_Q215,NearQ_Q215,Distance_Q215);
vec3 NearP_Q213;
vec3 NearQ_Q213;
float Distance_Q213;
Min_Segment_Distance_B215(Right_Index_Q214,Right_Index_Middle_Q214,vPosition,cameraPosition,NearP_Q213,NearQ_Q213,Distance_Q213);
vec3 Reflected_Q197=reflect(Incident_Q189,New_Normal_Q229);
vec4 Product_Q253=Linear_Q196*vec4(1,1,1,1);
vec4 Result_Q282;
Rim_Light_B282(Normalized_Q257,Normalized_Q188,Incident_Q220,_Rim_Intensity_,_Rim_Texture_,Result_Q282);
float Dot_Q222=dot(Incident_Q220, Normalized_Q221);
float MaxAB_Q273=max(Reflect_Q272,Product_Q275);
float NotInShadow_Q217;
#if OCCLUSION_ENABLED
FingerOcclusion_B217(_Width_,Distance_Q215,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q215,_Clip_Fade_,NotInShadow_Q217);
#else
NotInShadow_Q217=1.0;
#endif
float NotInShadow_Q218;
#if OCCLUSION_ENABLED
FingerOcclusion_B218(_Width_,Distance_Q213,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q213,_Clip_Fade_,NotInShadow_Q218);
#else
NotInShadow_Q218=1.0;
#endif
vec4 Reflected_Color_Q201;
vec4 Indirect_Diffuse_Q201;
#if ENV_ENABLE
Mapped_Environment_B201(_Reflection_Map_,_Indirect_Environment_,Reflected_Q197,Reflected_Color_Q201,Indirect_Diffuse_Q201);
#else
Reflected_Color_Q201=vec4(0,0,0,1);
Indirect_Diffuse_Q201=vec4(0,0,0,1);
#endif
vec4 Reflected_Color_Q200;
vec4 Indirect_Color_Q200;
#if SKY_ENABLED
Sky_Environment_B200(New_Normal_Q229,Reflected_Q197,Linear_Q193,Linear_Q194,Linear_Q195,_Horizon_Power_,Reflected_Color_Q200,Indirect_Color_Q200);
#else
Reflected_Color_Q200=vec4(0,0,0,1);
Indirect_Color_Q200=vec4(0,0,0,1);
#endif
float Hue_Q225;
float Saturation_Q225;
float Value_Q225;
float Alpha_Q225;
vec3 HSV_Q225;
To_HSV_B225(Product_Q253,Hue_Q225,Saturation_Q225,Value_Q225,Alpha_Q225,HSV_Q225);
float Hue_Q277;
float Saturation_Q277;
float Value_Q277;
float Alpha_Q277;
vec3 HSV_Q277;
To_HSV_B225(Result_Q282,Hue_Q277,Saturation_Q277,Value_Q277,Alpha_Q277,HSV_Q277);
float Result_Q260;
Code_B260(Dot_Q222,Result_Q260);
float AbsA_Q226=abs(Result_Q260);
float MinAB_Q208=min(NotInShadow_Q217,NotInShadow_Q218);
vec4 Sum_Q198=Reflected_Color_Q201+Reflected_Color_Q200;
vec4 Sum_Q199=Indirect_Diffuse_Q201+Indirect_Color_Q200;
vec3 HSV_Out_Q276;
VaryHSV_B258(HSV_Q277,_Rim_Hue_Shift_,_Rim_Saturation_Shift_,_Rim_Value_Shift_,HSV_Out_Q276);
float Out_Q264;
Remap_Range_B264(-1.0,1.0,0.0,1.0,Result_Q260,Out_Q264);
float Product_Q256;
Product_Q256=AbsA_Q226*_Hue_Shift_;
float X_Q278;
float Y_Q278;
float Z_Q278;
To_XYZ_B224(HSV_Out_Q276,X_Q278,Y_Q278,Z_Q278);
vec2 Vec2_Q262=vec2(Out_Q264,0.5);
vec3 HSV_Out_Q258;
VaryHSV_B258(HSV_Q225,Product_Q256,_Saturation_Shift_,_Value_Shift_,HSV_Out_Q258);
vec4 Color_Q279;
From_HSV_B223(X_Q278,Y_Q278,Z_Q278,0.0,Color_Q279);
vec4 Color_Q261;
#if IRIDESCENCE_ENABLED
Color_Q261=texture(_Iridescence_Texture_,Vec2_Q262);
#else
Color_Q261=vec4(0,0,0,0);
#endif
float X_Q224;
float Y_Q224;
float Z_Q224;
To_XYZ_B224(HSV_Out_Q258,X_Q224,Y_Q224,Z_Q224);
vec4 Result_Q281=_Rim_Intensity_*Color_Q279;
vec4 Result_Q263=_Iridescence_Intensity_*Color_Q261;
vec4 Color_Q223;
From_HSV_B223(X_Q224,Y_Q224,Z_Q224,0.0,Color_Q223);
vec4 Result_Q234=Result_Q241+(1.0-Result_Q241.a)*Color_Q223;
vec4 Result_Q271;
Fragment_Main_B271(_Sun_Intensity_,_Sun_Theta_,_Sun_Phi_,New_Normal_Q229,Result_Q234,MaxAB_Q273,_Shininess_,Incident_Q189,_Horizon_Color_,_Sky_Color_,_Ground_Color_,_Indirect_Diffuse_,_Specular_,_Horizon_Power_,_Reflection_,Sum_Q198,Sum_Q199,_Sharpness_,Result_Q227,_Subsurface_,vec4(0,0,0,0),Result_Q281,Result_Q263,Result_Q271);
vec4 Result_Q209;
Scale_RGB_B209(Result_Q271,MinAB_Q208,Result_Q209);
vec4 sRGB_Q192;
FastLinearTosRGB_B192(Result_Q209,sRGB_Q192);
vec4 Result_Q181=Blob_Color_Q180+(1.0-Blob_Color_Q180.a)*sRGB_Q192;
vec4 Result_Q190=Result_Q181; Result_Q190.a=1.0;
vec4 Out_Color=Result_Q190;
float Clip_Threshold=0.001;
bool To_sRGB=false;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[go]=mo;const po="mrdlSliderThumbVertexShader",bo=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
#ifdef TANGENT
attribute vec3 tangent;
#else
const vec3 tangent=vec3(0.);
#endif
uniform float _Radius_;
uniform float _Bevel_Front_;
uniform float _Bevel_Front_Stretch_;
uniform float _Bevel_Back_;
uniform float _Bevel_Back_Stretch_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform bool _Bulge_Enabled_;
uniform float _Bulge_Height_;
uniform float _Bulge_Radius_;
uniform float _Sun_Intensity_;
uniform float _Sun_Theta_;
uniform float _Sun_Phi_;
uniform float _Indirect_Diffuse_;
uniform vec4 _Albedo_;
uniform float _Specular_;
uniform float _Shininess_;
uniform float _Sharpness_;
uniform float _Subsurface_;
uniform vec4 _Left_Color_;
uniform vec4 _Right_Color_;
uniform float _Reflection_;
uniform float _Front_Reflect_;
uniform float _Edge_Reflect_;
uniform float _Power_;
uniform vec4 _Sky_Color_;
uniform vec4 _Horizon_Color_;
uniform vec4 _Ground_Color_;
uniform float _Horizon_Power_;
uniform sampler2D _Reflection_Map_;
uniform sampler2D _Indirect_Environment_;
uniform float _Width_;
uniform float _Fuzz_;
uniform float _Min_Fuzz_;
uniform float _Clip_Fade_;
uniform float _Hue_Shift_;
uniform float _Saturation_Shift_;
uniform float _Value_Shift_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform sampler2D _Blob_Texture_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform vec3 _Left_Index_Pos_;
uniform vec3 _Right_Index_Pos_;
uniform vec3 _Left_Index_Middle_Pos_;
uniform vec3 _Right_Index_Middle_Pos_;
uniform sampler2D _Decal_;
uniform vec2 _Decal_Scale_XY_;
uniform bool _Decal_Front_Only_;
uniform float _Rim_Intensity_;
uniform sampler2D _Rim_Texture_;
uniform float _Rim_Hue_Shift_;
uniform float _Rim_Saturation_Shift_;
uniform float _Rim_Value_Shift_;
uniform float _Iridescence_Intensity_;
uniform sampler2D _Iridescence_Texture_;
uniform bool Use_Global_Left_Index;
uniform bool Use_Global_Right_Index;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
uniform vec4 Global_Left_Thumb_Tip_Position;
uniform vec4 Global_Right_Thumb_Tip_Position;
uniform float Global_Left_Index_Tip_Proximity;
uniform float Global_Right_Index_Tip_Proximity;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vColor;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
void Object_To_World_Pos_B162(
vec3 Pos_Object,
out vec3 Pos_World)
{
Pos_World=(world*vec4(Pos_Object,1.0)).xyz;
}
void Object_To_World_Normal_B182(
vec3 Nrm_Object,
out vec3 Nrm_World)
{
Nrm_World=(vec4(Nrm_Object,0.0)).xyz;
}
void Blob_Vertex_B173(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
float Blob_Fade_Length,
float Blob_Pulse,
float Blob_Fade,
out vec4 Blob_Info)
{
vec3 blob= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Blob_Position);
vec3 delta=blob-Position;
float dist=dot(Normal,delta);
float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;
vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);
float Fade=fadeValue*Intensity*Blob_Fade;
float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);
Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);
}
void Blob_Vertex_B174(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
float Blob_Fade_Length,
float Blob_Pulse,
float Blob_Fade,
out vec4 Blob_Info)
{
vec3 blob= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Blob_Position);
vec3 delta=blob-Position;
float dist=dot(Normal,delta);
float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;
vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);
float Fade=fadeValue*Intensity*Blob_Fade;
float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);
Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);
}
void Move_Verts_B280(
float Anisotropy,
vec3 P,
float Radius,
float Bevel,
vec3 Normal_Object,
float ScaleZ,
float Stretch,
out vec3 New_P,
out vec2 New_UV,
out float Radial_Gradient,
out vec3 Radial_Dir,
out vec3 New_Normal)
{
vec2 UV=P.xy*2.0+0.5;
vec2 center=clamp(UV,0.0,1.0);
vec2 delta=UV-center;
float deltad=(length(delta)*2.0);
float f=(Bevel+(Radius-Bevel)*Stretch)/Radius;
float innerd=clamp(deltad*2.0,0.0,1.0);
float outerd=clamp(deltad*2.0-1.0,0.0,1.0);
float bevelAngle=outerd*3.14159*0.5;
float sinb=sin(bevelAngle);
float cosb=cos(bevelAngle);
float beveld=(1.0-f)*innerd+f*sinb;
float br=outerd;
vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);
float dir=P.z<0.0001 ? 1.0 : -1.0;
New_UV=center+r2*((0.5-center)+normalize(delta+vec2(0.0,0.000001))*beveld*0.5);
New_P=vec3(New_UV-0.5,P.z+dir*(1.0-cosb)*Bevel*ScaleZ);
Radial_Gradient=clamp((deltad-0.5)*2.0,0.0,1.0);
Radial_Dir=vec3(delta*r2,0.0);
vec3 beveledNormal=cosb*Normal_Object+sinb*vec3(delta.x,delta.y,0.0);
New_Normal=Normal_Object.z==0.0 ? Normal_Object : beveledNormal;
}
void Object_To_World_Dir_B210(
vec3 Dir_Object,
out vec3 Normal_World,
out vec3 Normal_World_N,
out float Normal_Length)
{
Normal_World=(world*vec4(Dir_Object,0.0)).xyz;
Normal_Length=length(Normal_World);
Normal_World_N=Normal_World/Normal_Length;
}
void To_XYZ_B228(
vec3 Vec3,
out float X,
out float Y,
out float Z)
{
X=Vec3.x;
Y=Vec3.y;
Z=Vec3.z;
}
void Conditional_Float_B243(
bool Which,
float If_True,
float If_False,
out float Result)
{
Result=Which ? If_True : If_False;
}
void Object_To_World_Dir_B178(
vec3 Dir_Object,
out vec3 Binormal_World,
out vec3 Binormal_World_N,
out float Binormal_Length)
{
Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;
Binormal_Length=length(Binormal_World);
Binormal_World_N=Binormal_World/Binormal_Length;
}
void Pick_Radius_B219(
float Radius,
float Radius_Top_Left,
float Radius_Top_Right,
float Radius_Bottom_Left,
float Radius_Bottom_Right,
vec3 Position,
out float Result)
{
bool whichY=Position.y>0.0;
Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);
Result*=Radius;
}
void Conditional_Float_B186(
bool Which,
float If_True,
float If_False,
out float Result)
{
Result=Which ? If_True : If_False;
}
void Greater_Than_B187(
float Left,
float Right,
out bool Not_Greater_Than,
out bool Greater_Than)
{
Greater_Than=Left>Right;
Not_Greater_Than=!Greater_Than;
}
void Remap_Range_B255(
float In_Min,
float In_Max,
float Out_Min,
float Out_Max,
float In,
out float Out)
{
Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));
}
void main()
{
vec2 XY_Q235;
XY_Q235=(uv-vec2(0.5,0.5))*_Decal_Scale_XY_+vec2(0.5,0.5);
vec3 Tangent_World_Q177;
vec3 Tangent_World_N_Q177;
float Tangent_Length_Q177;
Tangent_World_Q177=(world*vec4(vec3(1,0,0),0.0)).xyz;
Tangent_Length_Q177=length(Tangent_World_Q177);
Tangent_World_N_Q177=Tangent_World_Q177/Tangent_Length_Q177;
vec3 Normal_World_Q210;
vec3 Normal_World_N_Q210;
float Normal_Length_Q210;
Object_To_World_Dir_B210(vec3(0,0,1),Normal_World_Q210,Normal_World_N_Q210,Normal_Length_Q210);
float X_Q228;
float Y_Q228;
float Z_Q228;
To_XYZ_B228(position,X_Q228,Y_Q228,Z_Q228);
vec3 Nrm_World_Q176;
Nrm_World_Q176=normalize((world*vec4(normal,0.0)).xyz);
vec3 Binormal_World_Q178;
vec3 Binormal_World_N_Q178;
float Binormal_Length_Q178;
Object_To_World_Dir_B178(vec3(0,1,0),Binormal_World_Q178,Binormal_World_N_Q178,Binormal_Length_Q178);
float Anisotropy_Q179=Tangent_Length_Q177/Binormal_Length_Q178;
float Result_Q219;
Pick_Radius_B219(_Radius_,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q219);
float Anisotropy_Q203=Binormal_Length_Q178/Normal_Length_Q210;
bool Not_Greater_Than_Q187;
bool Greater_Than_Q187;
Greater_Than_B187(Z_Q228,0.0,Not_Greater_Than_Q187,Greater_Than_Q187);
vec4 Linear_Q251;
Linear_Q251.rgb=clamp(_Left_Color_.rgb*_Left_Color_.rgb,0.0,1.0);
Linear_Q251.a=_Left_Color_.a;
vec4 Linear_Q252;
Linear_Q252.rgb=clamp(_Right_Color_.rgb*_Right_Color_.rgb,0.0,1.0);
Linear_Q252.a=_Right_Color_.a;
vec3 Difference_Q211=vec3(0,0,0)-Normal_World_N_Q210;
vec4 Out_Color_Q184=vec4(X_Q228,Y_Q228,Z_Q228,1);
float Result_Q186;
Conditional_Float_B186(Greater_Than_Q187,_Bevel_Back_,_Bevel_Front_,Result_Q186);
float Result_Q244;
Conditional_Float_B186(Greater_Than_Q187,_Bevel_Back_Stretch_,_Bevel_Front_Stretch_,Result_Q244);
vec3 New_P_Q280;
vec2 New_UV_Q280;
float Radial_Gradient_Q280;
vec3 Radial_Dir_Q280;
vec3 New_Normal_Q280;
Move_Verts_B280(Anisotropy_Q179,position,Result_Q219,Result_Q186,normal,Anisotropy_Q203,Result_Q244,New_P_Q280,New_UV_Q280,Radial_Gradient_Q280,Radial_Dir_Q280,New_Normal_Q280);
float X_Q248;
float Y_Q248;
X_Q248=New_UV_Q280.x;
Y_Q248=New_UV_Q280.y;
vec3 Pos_World_Q162;
Object_To_World_Pos_B162(New_P_Q280,Pos_World_Q162);
vec3 Nrm_World_Q182;
Object_To_World_Normal_B182(New_Normal_Q280,Nrm_World_Q182);
vec4 Blob_Info_Q173;
#if BLOB_ENABLE
Blob_Vertex_B173(Pos_World_Q162,Nrm_World_Q176,Tangent_World_N_Q177,Binormal_World_N_Q178,_Blob_Position_,_Blob_Intensity_,_Blob_Near_Size_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_,_Blob_Fade_,Blob_Info_Q173);
#else
Blob_Info_Q173=vec4(0,0,0,0);
#endif
vec4 Blob_Info_Q174;
#if BLOB_ENABLE_2
Blob_Vertex_B174(Pos_World_Q162,Nrm_World_Q176,Tangent_World_N_Q177,Binormal_World_N_Q178,_Blob_Position_2_,_Blob_Intensity_,_Blob_Near_Size_2_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_2_,_Blob_Fade_2_,Blob_Info_Q174);
#else
Blob_Info_Q174=vec4(0,0,0,0);
#endif
float Out_Q255;
Remap_Range_B255(0.0,1.0,0.0,1.0,X_Q248,Out_Q255);
float X_Q236;
float Y_Q236;
float Z_Q236;
To_XYZ_B228(Nrm_World_Q182,X_Q236,Y_Q236,Z_Q236);
vec4 Color_At_T_Q247=mix(Linear_Q251,Linear_Q252,Out_Q255);
float Minus_F_Q237=-Z_Q236;
float R_Q249;
float G_Q249;
float B_Q249;
float A_Q249;
R_Q249=Color_At_T_Q247.r; G_Q249=Color_At_T_Q247.g; B_Q249=Color_At_T_Q247.b; A_Q249=Color_At_T_Q247.a;
float ClampF_Q238=clamp(0.0,Minus_F_Q237,1.0);
float Result_Q243;
Conditional_Float_B243(_Decal_Front_Only_,ClampF_Q238,1.0,Result_Q243);
vec4 Vec4_Q239=vec4(Result_Q243,Radial_Gradient_Q280,G_Q249,B_Q249);
vec3 Position=Pos_World_Q162;
vec3 Normal=Nrm_World_Q182;
vec2 UV=XY_Q235;
vec3 Tangent=Tangent_World_N_Q177;
vec3 Binormal=Difference_Q211;
vec4 Color=Out_Color_Q184;
vec4 Extra1=Vec4_Q239;
vec4 Extra2=Blob_Info_Q173;
vec4 Extra3=Blob_Info_Q174;
gl_Position=viewProjection*vec4(Position,1);
vPosition=Position;
vNormal=Normal;
vUV=UV;
vTangent=Tangent;
vBinormal=Binormal;
vColor=Color;
vExtra1=Extra1;
vExtra2=Extra2;
vExtra3=Extra3;
}`;ht.ShadersStore[po]=bo;class vo extends $t{constructor(){super(),this.SKY_ENABLED=!0,this.BLOB_ENABLE_2=!0,this.IRIDESCENCE_ENABLED=!0,this._needNormals=!0,this._needUVs=!0,this.rebuild()}}class x extends qt{constructor(t,e){super(t,e),this.radius=.157,this.bevelFront=.065,this.bevelFrontStretch=.077,this.bevelBack=.031,this.bevelBackStretch=0,this.radiusTopLeft=1,this.radiusTopRight=1,this.radiusBottomLeft=1,this.radiusBottomRight=1,this.bulgeEnabled=!1,this.bulgeHeight=-.323,this.bulgeRadius=.73,this.sunIntensity=2,this.sunTheta=.937,this.sunPhi=.555,this.indirectDiffuse=1,this.albedo=new A(.0117647,.505882,.996078,1),this.specular=0,this.shininess=10,this.sharpness=0,this.subsurface=.31,this.leftGradientColor=new A(.0117647,.505882,.996078,1),this.rightGradientColor=new A(.0117647,.505882,.996078,1),this.reflection=.749,this.frontReflect=0,this.edgeReflect=.09,this.power=8.1,this.skyColor=new A(.0117647,.960784,.996078,1),this.horizonColor=new A(.0117647,.333333,.996078,1),this.groundColor=new A(0,.254902,.996078,1),this.horizonPower=1,this.width=.02,this.fuzz=.5,this.minFuzz=.001,this.clipFade=.01,this.hueShift=0,this.saturationShift=0,this.valueShift=0,this.blobPosition=new c(0,0,.1),this.blobIntensity=.5,this.blobNearSize=.01,this.blobFarSize=.03,this.blobNearDistance=0,this.blobFarDistance=.08,this.blobFadeLength=.576,this.blobPulse=0,this.blobFade=1,this.blobPosition2=new c(.2,0,.1),this.blobNearSize2=.01,this.blobPulse2=0,this.blobFade2=1,this.blobTexture=new S("",this.getScene()),this.leftIndexPosition=new c(0,0,1),this.rightIndexPosition=new c(-1,-1,-1),this.leftIndexMiddlePosition=new c(0,0,0),this.rightIndexMiddlePosition=new c(0,0,0),this.decalScaleXY=new z(1.5,1.5),this.decalFrontOnly=!0,this.rimIntensity=.287,this.rimHueShift=0,this.rimSaturationShift=0,this.rimValueShift=-1,this.iridescenceIntensity=0,this.useGlobalLeftIndex=1,this.useGlobalRightIndex=1,this.globalLeftIndexTipProximity=0,this.globalRightIndexTipProximity=0,this.globalLeftIndexTipPosition=new nt(.5,0,-.55,1),this.globaRightIndexTipPosition=new nt(0,0,0,1),this.globalLeftThumbTipPosition=new nt(.5,0,-.55,1),this.globalRightThumbTipPosition=new nt(0,0,0,1),this.globalLeftIndexMiddlePosition=new nt(.5,0,-.55,1),this.globalRightIndexMiddlePosition=new nt(0,0,0,1),this.alphaMode=Lt.ALPHA_DISABLE,this.backFaceCulling=!1,this._blueGradientTexture=new S(x.BLUE_GRADIENT_TEXTURE_URL,e,!0,!1,S.NEAREST_SAMPLINGMODE),this._decalTexture=new S("",this.getScene()),this._reflectionMapTexture=new S("",this.getScene()),this._indirectEnvTexture=new S("",this.getScene())}needAlphaBlending(){return!1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new vo);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!1,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="mrdlSliderThumb",h=i.toString(),d=["world","viewProjection","cameraPosition","_Radius_","_Bevel_Front_","_Bevel_Front_Stretch_","_Bevel_Back_","_Bevel_Back_Stretch_","_Radius_Top_Left_","_Radius_Top_Right_","_Radius_Bottom_Left_","_Radius_Bottom_Right_","_Bulge_Enabled_","_Bulge_Height_","_Bulge_Radius_","_Sun_Intensity_","_Sun_Theta_","_Sun_Phi_","_Indirect_Diffuse_","_Albedo_","_Specular_","_Shininess_","_Sharpness_","_Subsurface_","_Left_Color_","_Right_Color_","_Reflection_","_Front_Reflect_","_Edge_Reflect_","_Power_","_Sky_Color_","_Horizon_Color_","_Ground_Color_","_Horizon_Power_","_Reflection_Map_","_Indirect_Environment_","_Width_","_Fuzz_","_Min_Fuzz_","_Clip_Fade_","_Hue_Shift_","_Saturation_Shift_","_Value_Shift_","_Blob_Position_","_Blob_Intensity_","_Blob_Near_Size_","_Blob_Far_Size_","_Blob_Near_Distance_","_Blob_Far_Distance_","_Blob_Fade_Length_","_Blob_Pulse_","_Blob_Fade_","_Blob_Texture_","_Blob_Position_2_","_Blob_Near_Size_2_","_Blob_Pulse_2_","_Blob_Fade_2_","_Left_Index_Pos_","_Right_Index_Pos_","_Left_Index_Middle_Pos_","_Right_Index_Middle_Pos_","_Decal_","_Decal_Scale_XY_","_Decal_Front_Only_","_Rim_Intensity_","_Rim_Texture_","_Rim_Hue_Shift_","_Rim_Saturation_Shift_","_Rim_Value_Shift_","_Iridescence_Intensity_","_Iridescence_Texture_","Use_Global_Left_Index","Use_Global_Right_Index","Global_Left_Index_Tip_Position","Global_Right_Index_Tip_Position","Global_Left_Thumb_Tip_Position","Global_Right_Thumb_Tip_Position","Global_Left_Index_Middle_Position;","Global_Right_Index_Middle_Position","Global_Left_Index_Tip_Proximity","Global_Right_Index_Tip_Proximity"],f=["_Rim_Texture_","_Iridescence_Texture_"],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){if(!i.materialDefines)return;const o=i.effect;o&&(this._activeEffect=o,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",this.getScene().getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",this.getScene().activeCamera.position),this._activeEffect.setFloat("_Radius_",this.radius),this._activeEffect.setFloat("_Bevel_Front_",this.bevelFront),this._activeEffect.setFloat("_Bevel_Front_Stretch_",this.bevelFrontStretch),this._activeEffect.setFloat("_Bevel_Back_",this.bevelBack),this._activeEffect.setFloat("_Bevel_Back_Stretch_",this.bevelBackStretch),this._activeEffect.setFloat("_Radius_Top_Left_",this.radiusTopLeft),this._activeEffect.setFloat("_Radius_Top_Right_",this.radiusTopRight),this._activeEffect.setFloat("_Radius_Bottom_Left_",this.radiusBottomLeft),this._activeEffect.setFloat("_Radius_Bottom_Right_",this.radiusBottomRight),this._activeEffect.setFloat("_Bulge_Enabled_",this.bulgeEnabled?1:0),this._activeEffect.setFloat("_Bulge_Height_",this.bulgeHeight),this._activeEffect.setFloat("_Bulge_Radius_",this.bulgeRadius),this._activeEffect.setFloat("_Sun_Intensity_",this.sunIntensity),this._activeEffect.setFloat("_Sun_Theta_",this.sunTheta),this._activeEffect.setFloat("_Sun_Phi_",this.sunPhi),this._activeEffect.setFloat("_Indirect_Diffuse_",this.indirectDiffuse),this._activeEffect.setDirectColor4("_Albedo_",this.albedo),this._activeEffect.setFloat("_Specular_",this.specular),this._activeEffect.setFloat("_Shininess_",this.shininess),this._activeEffect.setFloat("_Sharpness_",this.sharpness),this._activeEffect.setFloat("_Subsurface_",this.subsurface),this._activeEffect.setDirectColor4("_Left_Color_",this.leftGradientColor),this._activeEffect.setDirectColor4("_Right_Color_",this.rightGradientColor),this._activeEffect.setFloat("_Reflection_",this.reflection),this._activeEffect.setFloat("_Front_Reflect_",this.frontReflect),this._activeEffect.setFloat("_Edge_Reflect_",this.edgeReflect),this._activeEffect.setFloat("_Power_",this.power),this._activeEffect.setDirectColor4("_Sky_Color_",this.skyColor),this._activeEffect.setDirectColor4("_Horizon_Color_",this.horizonColor),this._activeEffect.setDirectColor4("_Ground_Color_",this.groundColor),this._activeEffect.setFloat("_Horizon_Power_",this.horizonPower),this._activeEffect.setTexture("_Reflection_Map_",this._reflectionMapTexture),this._activeEffect.setTexture("_Indirect_Environment_",this._indirectEnvTexture),this._activeEffect.setFloat("_Width_",this.width),this._activeEffect.setFloat("_Fuzz_",this.fuzz),this._activeEffect.setFloat("_Min_Fuzz_",this.minFuzz),this._activeEffect.setFloat("_Clip_Fade_",this.clipFade),this._activeEffect.setFloat("_Hue_Shift_",this.hueShift),this._activeEffect.setFloat("_Saturation_Shift_",this.saturationShift),this._activeEffect.setFloat("_Value_Shift_",this.valueShift),this._activeEffect.setVector3("_Blob_Position_",this.blobPosition),this._activeEffect.setFloat("_Blob_Intensity_",this.blobIntensity),this._activeEffect.setFloat("_Blob_Near_Size_",this.blobNearSize),this._activeEffect.setFloat("_Blob_Far_Size_",this.blobFarSize),this._activeEffect.setFloat("_Blob_Near_Distance_",this.blobNearDistance),this._activeEffect.setFloat("_Blob_Far_Distance_",this.blobFarDistance),this._activeEffect.setFloat("_Blob_Fade_Length_",this.blobFadeLength),this._activeEffect.setFloat("_Blob_Pulse_",this.blobPulse),this._activeEffect.setFloat("_Blob_Fade_",this.blobFade),this._activeEffect.setTexture("_Blob_Texture_",this.blobTexture),this._activeEffect.setVector3("_Blob_Position_2_",this.blobPosition2),this._activeEffect.setFloat("_Blob_Near_Size_2_",this.blobNearSize2),this._activeEffect.setFloat("_Blob_Pulse_2_",this.blobPulse2),this._activeEffect.setFloat("_Blob_Fade_2_",this.blobFade2),this._activeEffect.setVector3("_Left_Index_Pos_",this.leftIndexPosition),this._activeEffect.setVector3("_Right_Index_Pos_",this.rightIndexPosition),this._activeEffect.setVector3("_Left_Index_Middle_Pos_",this.leftIndexMiddlePosition),this._activeEffect.setVector3("_Right_Index_Middle_Pos_",this.rightIndexMiddlePosition),this._activeEffect.setTexture("_Decal_",this._decalTexture),this._activeEffect.setVector2("_Decal_Scale_XY_",this.decalScaleXY),this._activeEffect.setFloat("_Decal_Front_Only_",this.decalFrontOnly?1:0),this._activeEffect.setFloat("_Rim_Intensity_",this.rimIntensity),this._activeEffect.setTexture("_Rim_Texture_",this._blueGradientTexture),this._activeEffect.setFloat("_Rim_Hue_Shift_",this.rimHueShift),this._activeEffect.setFloat("_Rim_Saturation_Shift_",this.rimSaturationShift),this._activeEffect.setFloat("_Rim_Value_Shift_",this.rimValueShift),this._activeEffect.setFloat("_Iridescence_Intensity_",this.iridescenceIntensity),this._activeEffect.setTexture("_Iridescence_Texture_",this._blueGradientTexture),this._activeEffect.setFloat("Use_Global_Left_Index",this.useGlobalLeftIndex),this._activeEffect.setFloat("Use_Global_Right_Index",this.useGlobalRightIndex),this._activeEffect.setVector4("Global_Left_Index_Tip_Position",this.globalLeftIndexTipPosition),this._activeEffect.setVector4("Global_Right_Index_Tip_Position",this.globaRightIndexTipPosition),this._activeEffect.setVector4("Global_Left_Thumb_Tip_Position",this.globalLeftThumbTipPosition),this._activeEffect.setVector4("Global_Right_Thumb_Tip_Position",this.globalRightThumbTipPosition),this._activeEffect.setVector4("Global_Left_Index_Middle_Position",this.globalLeftIndexMiddlePosition),this._activeEffect.setVector4("Global_Right_Index_Middle_Position",this.globalRightIndexMiddlePosition),this._activeEffect.setFloat("Global_Left_Index_Tip_Proximity",this.globalLeftIndexTipProximity),this._activeEffect.setFloat("Global_Right_Index_Tip_Proximity",this.globalRightIndexTipProximity),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t),this._reflectionMapTexture.dispose(),this._indirectEnvTexture.dispose(),this._blueGradientTexture.dispose(),this._decalTexture.dispose()}clone(t){return X.Clone(()=>new x(t,this.getScene()),this)}serialize(){const t=super.serialize();return t.customType="BABYLON.MRDLSliderThumbMaterial",t}getClassName(){return"MRDLSliderThumbMaterial"}static Parse(t,e,i){return X.Parse(()=>new x(t.name,e),t,e,i)}}x.BLUE_GRADIENT_TEXTURE_URL="https://assets.babylonjs.com/meshes/MRTK/MRDL/mrtk-mrdl-blue-gradient.png";n([_()],x.prototype,"radius",void 0);n([_()],x.prototype,"bevelFront",void 0);n([_()],x.prototype,"bevelFrontStretch",void 0);n([_()],x.prototype,"bevelBack",void 0);n([_()],x.prototype,"bevelBackStretch",void 0);n([_()],x.prototype,"radiusTopLeft",void 0);n([_()],x.prototype,"radiusTopRight",void 0);n([_()],x.prototype,"radiusBottomLeft",void 0);n([_()],x.prototype,"radiusBottomRight",void 0);n([_()],x.prototype,"bulgeEnabled",void 0);n([_()],x.prototype,"bulgeHeight",void 0);n([_()],x.prototype,"bulgeRadius",void 0);n([_()],x.prototype,"sunIntensity",void 0);n([_()],x.prototype,"sunTheta",void 0);n([_()],x.prototype,"sunPhi",void 0);n([_()],x.prototype,"indirectDiffuse",void 0);n([_()],x.prototype,"albedo",void 0);n([_()],x.prototype,"specular",void 0);n([_()],x.prototype,"shininess",void 0);n([_()],x.prototype,"sharpness",void 0);n([_()],x.prototype,"subsurface",void 0);n([_()],x.prototype,"leftGradientColor",void 0);n([_()],x.prototype,"rightGradientColor",void 0);n([_()],x.prototype,"reflection",void 0);n([_()],x.prototype,"frontReflect",void 0);n([_()],x.prototype,"edgeReflect",void 0);n([_()],x.prototype,"power",void 0);n([_()],x.prototype,"skyColor",void 0);n([_()],x.prototype,"horizonColor",void 0);n([_()],x.prototype,"groundColor",void 0);n([_()],x.prototype,"horizonPower",void 0);n([_()],x.prototype,"width",void 0);n([_()],x.prototype,"fuzz",void 0);n([_()],x.prototype,"minFuzz",void 0);n([_()],x.prototype,"clipFade",void 0);n([_()],x.prototype,"hueShift",void 0);n([_()],x.prototype,"saturationShift",void 0);n([_()],x.prototype,"valueShift",void 0);n([_()],x.prototype,"blobPosition",void 0);n([_()],x.prototype,"blobIntensity",void 0);n([_()],x.prototype,"blobNearSize",void 0);n([_()],x.prototype,"blobFarSize",void 0);n([_()],x.prototype,"blobNearDistance",void 0);n([_()],x.prototype,"blobFarDistance",void 0);n([_()],x.prototype,"blobFadeLength",void 0);n([_()],x.prototype,"blobPulse",void 0);n([_()],x.prototype,"blobFade",void 0);n([_()],x.prototype,"blobPosition2",void 0);n([_()],x.prototype,"blobNearSize2",void 0);n([_()],x.prototype,"blobPulse2",void 0);n([_()],x.prototype,"blobFade2",void 0);n([_()],x.prototype,"blobTexture",void 0);n([_()],x.prototype,"leftIndexPosition",void 0);n([_()],x.prototype,"rightIndexPosition",void 0);n([_()],x.prototype,"leftIndexMiddlePosition",void 0);n([_()],x.prototype,"rightIndexMiddlePosition",void 0);n([_()],x.prototype,"decalScaleXY",void 0);n([_()],x.prototype,"decalFrontOnly",void 0);n([_()],x.prototype,"rimIntensity",void 0);n([_()],x.prototype,"rimHueShift",void 0);n([_()],x.prototype,"rimSaturationShift",void 0);n([_()],x.prototype,"rimValueShift",void 0);n([_()],x.prototype,"iridescenceIntensity",void 0);N("BABYLON.GUI.MRDLSliderThumbMaterial",x);const xo="mrdlBackplatePixelShader",yo=`uniform vec3 cameraPosition;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vExtra1;
varying vec4 vExtra2;
uniform float _Radius_;
uniform float _Line_Width_;
uniform bool _Absolute_Sizes_;
uniform float _Filter_Width_;
uniform vec4 _Base_Color_;
uniform vec4 _Line_Color_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform float _Rate_;
uniform vec4 _Highlight_Color_;
uniform float _Highlight_Width_;
uniform vec4 _Highlight_Transform_;
uniform float _Highlight_;
uniform float _Iridescence_Intensity_;
uniform float _Iridescence_Edge_Intensity_;
uniform vec4 _Iridescence_Tint_;
uniform sampler2D _Iridescent_Map_;
uniform float _Angle_;
uniform bool _Reflected_;
uniform float _Frequency_;
uniform float _Vertical_Offset_;
uniform vec4 _Gradient_Color_;
uniform vec4 _Top_Left_;
uniform vec4 _Top_Right_;
uniform vec4 _Bottom_Left_;
uniform vec4 _Bottom_Right_;
uniform float _Edge_Width_;
uniform float _Edge_Power_;
uniform float _Line_Gradient_Blend_;
uniform float _Fade_Out_;
void FastLinearTosRGB_B353(
vec4 Linear,
out vec4 sRGB)
{
sRGB.rgb=sqrt(clamp(Linear.rgb,0.0,1.0));
sRGB.a=Linear.a;
}
void Round_Rect_Fragment_B332(
float Radius,
float Line_Width,
vec4 Line_Color,
float Filter_Width,
vec2 UV,
float Line_Visibility,
vec4 Rect_Parms,
vec4 Fill_Color,
out vec4 Color)
{
float d=length(max(abs(UV)-Rect_Parms.xy,0.0));
float dx=max(fwidth(d)*Filter_Width,0.00001);
float g=min(Rect_Parms.z,Rect_Parms.w);
float dgrad=max(fwidth(g)*Filter_Width,0.00001);
float Inside_Rect=clamp(g/dgrad,0.0,1.0);
float inner=clamp((d+dx*0.5-max(Radius-Line_Width,d-dx*0.5))/dx,0.0,1.0);
Color=clamp(mix(Fill_Color,Line_Color,inner),0.0,1.0)*Inside_Rect;
}
void Iridescence_B343(
vec3 Position,
vec3 Normal,
vec2 UV,
vec3 Axis,
vec3 Eye,
vec4 Tint,
sampler2D Texture,
bool Reflected,
float Frequency,
float Vertical_Offset,
out vec4 Color)
{
vec3 i=normalize(Position-Eye);
vec3 r=reflect(i,Normal);
float idota=dot(i,Axis);
float idotr=dot(i,r);
float x=Reflected ? idotr : idota;
vec2 xy;
xy.x=fract((x*Frequency+1.0)*0.5+UV.y*Vertical_Offset);
xy.y=0.5;
Color=texture(Texture,xy);
Color.rgb*=Tint.rgb;
}
void Scale_RGB_B346(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=vec4(Scalar,Scalar,Scalar,1)*Color;
}
void Scale_RGB_B344(
float Scalar,
vec4 Color,
out vec4 Result)
{
Result=vec4(Scalar,Scalar,Scalar,1)*Color;
}
void Line_Fragment_B362(
vec4 Base_Color,
vec4 Highlight_Color,
float Highlight_Width,
vec3 Line_Vertex,
float Highlight,
out vec4 Line_Color)
{
float k2=1.0-clamp(abs(Line_Vertex.y/Highlight_Width),0.0,1.0);
Line_Color=mix(Base_Color,Highlight_Color,Highlight*k2);
}
void Edge_B356(
vec4 RectParms,
float Radius,
float Line_Width,
vec2 UV,
float Edge_Width,
float Edge_Power,
out float Result)
{
float d=length(max(abs(UV)-RectParms.xy,0.0));
float edge=1.0-clamp((1.0-d/(Radius-Line_Width))/Edge_Width,0.0,1.0);
Result=pow(edge,Edge_Power);
}
void Gradient_B355(
vec4 Gradient_Color,
vec4 Top_Left,
vec4 Top_Right,
vec4 Bottom_Left,
vec4 Bottom_Right,
vec2 UV,
out vec4 Result)
{
vec3 top=Top_Left.rgb+(Top_Right.rgb-Top_Left.rgb)*UV.x;
vec3 bottom=Bottom_Left.rgb+(Bottom_Right.rgb-Bottom_Left.rgb)*UV.x;
Result.rgb=Gradient_Color.rgb*(bottom+(top-bottom)*UV.y);
Result.a=1.0;
}
void main()
{
float X_Q338;
float Y_Q338;
float Z_Q338;
float W_Q338;
X_Q338=vExtra2.x;
Y_Q338=vExtra2.y;
Z_Q338=vExtra2.z;
W_Q338=vExtra2.w;
vec4 Color_Q343;
#if IRIDESCENCE_ENABLE
Iridescence_B343(vPosition,vNormal,vUV,vBinormal,cameraPosition,_Iridescence_Tint_,_Iridescent_Map_,_Reflected_,_Frequency_,_Vertical_Offset_,Color_Q343);
#else
Color_Q343=vec4(0,0,0,0);
#endif
vec4 Result_Q344;
Scale_RGB_B344(_Iridescence_Intensity_,Color_Q343,Result_Q344);
vec4 Line_Color_Q362;
Line_Fragment_B362(_Line_Color_,_Highlight_Color_,_Highlight_Width_,vTangent,_Highlight_,Line_Color_Q362);
float Result_Q356;
#if EDGE_ONLY
Edge_B356(vExtra1,Z_Q338,W_Q338,vUV,_Edge_Width_,_Edge_Power_,Result_Q356);
#else
Result_Q356=1.0;
#endif
vec2 Vec2_Q339=vec2(X_Q338,Y_Q338);
vec4 Result_Q355;
Gradient_B355(_Gradient_Color_,_Top_Left_,_Top_Right_,_Bottom_Left_,_Bottom_Right_,Vec2_Q339,Result_Q355);
vec4 Linear_Q348;
Linear_Q348.rgb=clamp(Result_Q355.rgb*Result_Q355.rgb,0.0,1.0);
Linear_Q348.a=Result_Q355.a;
vec4 Result_Q346;
Scale_RGB_B346(Linear_Q348,Result_Q356,Result_Q346);
vec4 Sum_Q345=Result_Q346+Result_Q344;
vec4 Color_At_T_Q347=mix(Line_Color_Q362,Result_Q346,_Line_Gradient_Blend_);
vec4 Base_And_Iridescent_Q350;
Base_And_Iridescent_Q350=_Base_Color_+vec4(Sum_Q345.rgb,0.0);
vec4 Sum_Q349=Color_At_T_Q347+_Iridescence_Edge_Intensity_*Color_Q343;
vec4 Result_Q351=Sum_Q349; Result_Q351.a=1.0;
vec4 Color_Q332;
Round_Rect_Fragment_B332(Z_Q338,W_Q338,Result_Q351,_Filter_Width_,vUV,1.0,vExtra1,Base_And_Iridescent_Q350,Color_Q332);
vec4 Result_Q354=_Fade_Out_*Color_Q332;
vec4 sRGB_Q353;
FastLinearTosRGB_B353(Result_Q354,sRGB_Q353);
vec4 Out_Color=sRGB_Q353;
float Clip_Threshold=0.001;
bool To_sRGB=false;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[xo]=yo;const Io="mrdlBackplateVertexShader",Po=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec3 tangent;
uniform float _Radius_;
uniform float _Line_Width_;
uniform bool _Absolute_Sizes_;
uniform float _Filter_Width_;
uniform vec4 _Base_Color_;
uniform vec4 _Line_Color_;
uniform float _Radius_Top_Left_;
uniform float _Radius_Top_Right_;
uniform float _Radius_Bottom_Left_;
uniform float _Radius_Bottom_Right_;
uniform float _Rate_;
uniform vec4 _Highlight_Color_;
uniform float _Highlight_Width_;
uniform vec4 _Highlight_Transform_;
uniform float _Highlight_;
uniform float _Iridescence_Intensity_;
uniform float _Iridescence_Edge_Intensity_;
uniform vec4 _Iridescence_Tint_;
uniform sampler2D _Iridescent_Map_;
uniform float _Angle_;
uniform bool _Reflected_;
uniform float _Frequency_;
uniform float _Vertical_Offset_;
uniform vec4 _Gradient_Color_;
uniform vec4 _Top_Left_;
uniform vec4 _Top_Right_;
uniform vec4 _Bottom_Left_;
uniform vec4 _Bottom_Right_;
uniform float _Edge_Width_;
uniform float _Edge_Power_;
uniform float _Line_Gradient_Blend_;
uniform float _Fade_Out_;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec4 vExtra1;
varying vec4 vExtra2;
void Object_To_World_Pos_B314(
vec3 Pos_Object,
out vec3 Pos_World)
{
Pos_World=(world*vec4(Pos_Object,1.0)).xyz;
}
void Round_Rect_Vertex_B357(
vec2 UV,
float Radius,
float Margin,
float Anisotropy,
float Gradient1,
float Gradient2,
vec3 Normal,
vec4 Color_Scale_Translate,
out vec2 Rect_UV,
out vec4 Rect_Parms,
out vec2 Scale_XY,
out vec2 Line_UV,
out vec2 Color_UV_Info)
{
Scale_XY=vec2(Anisotropy,1.0);
Line_UV=(UV-vec2(0.5,0.5));
Rect_UV=Line_UV*Scale_XY;
Rect_Parms.xy=Scale_XY*0.5-vec2(Radius,Radius)-vec2(Margin,Margin);
Rect_Parms.z=Gradient1; 
Rect_Parms.w=Gradient2;
Color_UV_Info=(Line_UV+vec2(0.5,0.5))*Color_Scale_Translate.xy+Color_Scale_Translate.zw;
}
void Line_Vertex_B333(
vec2 Scale_XY,
vec2 UV,
float Time,
float Rate,
vec4 Highlight_Transform,
out vec3 Line_Vertex)
{
float angle2=(Rate*Time)*2.0*3.1416;
float sinAngle2=sin(angle2);
float cosAngle2=cos(angle2);
vec2 xformUV=UV*Highlight_Transform.xy+Highlight_Transform.zw;
Line_Vertex.x=0.0;
Line_Vertex.y=cosAngle2*xformUV.x-sinAngle2*xformUV.y;
Line_Vertex.z=0.0; 
}
void PickDir_B334(
float Degrees,
vec3 DirX,
vec3 DirY,
out vec3 Dir)
{
float a=Degrees*3.14159/180.0;
Dir=cos(a)*DirX+sin(a)*DirY;
}
void Move_Verts_B327(
float Anisotropy,
vec3 P,
float Radius,
out vec3 New_P,
out vec2 New_UV,
out float Radial_Gradient,
out vec3 Radial_Dir)
{
vec2 UV=P.xy*2.0+0.5;
vec2 center=clamp(UV,0.0,1.0);
vec2 delta=UV-center;
vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);
New_UV=center+r2*(UV-2.0*center+0.5);
New_P=vec3(New_UV-0.5,P.z);
Radial_Gradient=1.0-length(delta)*2.0;
Radial_Dir=vec3(delta*r2,0.0);
}
void Pick_Radius_B336(
float Radius,
float Radius_Top_Left,
float Radius_Top_Right,
float Radius_Bottom_Left,
float Radius_Bottom_Right,
vec3 Position,
out float Result)
{
bool whichY=Position.y>0.0;
Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);
Result*=Radius;
}
void Edge_AA_Vertex_B328(
vec3 Position_World,
vec3 Position_Object,
vec3 Normal_Object,
vec3 Eye,
float Radial_Gradient,
vec3 Radial_Dir,
vec3 Tangent,
out float Gradient1,
out float Gradient2)
{
vec3 I=(Eye-Position_World);
vec3 T=(vec4(Tangent,0.0)).xyz;
float g=(dot(T,I)<0.0) ? 0.0 : 1.0;
if (Normal_Object.z==0.0) { 
Gradient1=Position_Object.z>0.0 ? g : 1.0;
Gradient2=Position_Object.z>0.0 ? 1.0 : g;
} else {
Gradient1=g+(1.0-g)*(Radial_Gradient);
Gradient2=1.0;
}
}
void Object_To_World_Dir_B330(
vec3 Dir_Object,
out vec3 Binormal_World,
out vec3 Binormal_World_N,
out float Binormal_Length)
{
Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;
Binormal_Length=length(Binormal_World);
Binormal_World_N=Binormal_World/Binormal_Length;
}
void RelativeOrAbsoluteDetail_B341(
float Nominal_Radius,
float Nominal_LineWidth,
bool Absolute_Measurements,
float Height,
out float Radius,
out float Line_Width)
{
float scale=Absolute_Measurements ? 1.0/Height : 1.0;
Radius=Nominal_Radius*scale;
Line_Width=Nominal_LineWidth*scale;
}
void main()
{
vec3 Nrm_World_Q326;
Nrm_World_Q326=normalize((world*vec4(normal,0.0)).xyz);
vec3 Tangent_World_Q329;
vec3 Tangent_World_N_Q329;
float Tangent_Length_Q329;
Tangent_World_Q329=(world*vec4(vec3(1,0,0),0.0)).xyz;
Tangent_Length_Q329=length(Tangent_World_Q329);
Tangent_World_N_Q329=Tangent_World_Q329/Tangent_Length_Q329;
vec3 Binormal_World_Q330;
vec3 Binormal_World_N_Q330;
float Binormal_Length_Q330;
Object_To_World_Dir_B330(vec3(0,1,0),Binormal_World_Q330,Binormal_World_N_Q330,Binormal_Length_Q330);
float Radius_Q341;
float Line_Width_Q341;
RelativeOrAbsoluteDetail_B341(_Radius_,_Line_Width_,_Absolute_Sizes_,Binormal_Length_Q330,Radius_Q341,Line_Width_Q341);
vec3 Dir_Q334;
PickDir_B334(_Angle_,Tangent_World_N_Q329,Binormal_World_N_Q330,Dir_Q334);
float Result_Q336;
Pick_Radius_B336(Radius_Q341,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q336);
float Anisotropy_Q331=Tangent_Length_Q329/Binormal_Length_Q330;
vec4 Out_Color_Q337=vec4(Result_Q336,Line_Width_Q341,0,1);
vec3 New_P_Q327;
vec2 New_UV_Q327;
float Radial_Gradient_Q327;
vec3 Radial_Dir_Q327;
Move_Verts_B327(Anisotropy_Q331,position,Result_Q336,New_P_Q327,New_UV_Q327,Radial_Gradient_Q327,Radial_Dir_Q327);
vec3 Pos_World_Q314;
Object_To_World_Pos_B314(New_P_Q327,Pos_World_Q314);
float Gradient1_Q328;
float Gradient2_Q328;
#if SMOOTH_EDGES
Edge_AA_Vertex_B328(Pos_World_Q314,position,normal,cameraPosition,Radial_Gradient_Q327,Radial_Dir_Q327,tangent,Gradient1_Q328,Gradient2_Q328);
#else
Gradient1_Q328=1.0;
Gradient2_Q328=1.0;
#endif
vec2 Rect_UV_Q357;
vec4 Rect_Parms_Q357;
vec2 Scale_XY_Q357;
vec2 Line_UV_Q357;
vec2 Color_UV_Info_Q357;
Round_Rect_Vertex_B357(New_UV_Q327,Result_Q336,0.0,Anisotropy_Q331,Gradient1_Q328,Gradient2_Q328,normal,vec4(1,1,0,0),Rect_UV_Q357,Rect_Parms_Q357,Scale_XY_Q357,Line_UV_Q357,Color_UV_Info_Q357);
vec3 Line_Vertex_Q333;
Line_Vertex_B333(Scale_XY_Q357,Line_UV_Q357,(20.0),_Rate_,_Highlight_Transform_,Line_Vertex_Q333);
float X_Q359;
float Y_Q359;
X_Q359=Color_UV_Info_Q357.x;
Y_Q359=Color_UV_Info_Q357.y;
vec4 Vec4_Q358=vec4(X_Q359,Y_Q359,Result_Q336,Line_Width_Q341);
vec3 Position=Pos_World_Q314;
vec3 Normal=Nrm_World_Q326;
vec2 UV=Rect_UV_Q357;
vec3 Tangent=Line_Vertex_Q333;
vec3 Binormal=Dir_Q334;
vec4 Color=Out_Color_Q337;
vec4 Extra1=Rect_Parms_Q357;
vec4 Extra2=Vec4_Q358;
vec4 Extra3=vec4(0,0,0,0);
gl_Position=viewProjection*vec4(Position,1);
vPosition=Position;
vNormal=Normal;
vUV=UV;
vTangent=Tangent;
vBinormal=Binormal;
vExtra1=Extra1;
vExtra2=Extra2;
}`;ht.ShadersStore[Io]=Po;class Bo extends $t{constructor(){super(),this.IRIDESCENCE_ENABLE=!0,this.SMOOTH_EDGES=!0,this._needNormals=!0,this.rebuild()}}class H extends qt{constructor(t,e){super(t,e),this.radius=.3,this.lineWidth=.003,this.absoluteSizes=!1,this._filterWidth=1,this.baseColor=new A(0,0,0,1),this.lineColor=new A(.2,.262745,.4,1),this.radiusTopLeft=1,this.radiusTopRight=1,this.radiusBottomLeft=1,this.radiusBottomRight=1,this._rate=0,this.highlightColor=new A(.239216,.435294,.827451,1),this.highlightWidth=0,this._highlightTransform=new nt(1,1,0,0),this._highlight=1,this.iridescenceIntensity=.45,this.iridescenceEdgeIntensity=1,this.iridescenceTint=new A(1,1,1,1),this._angle=-45,this.fadeOut=1,this._reflected=!0,this._frequency=1,this._verticalOffset=0,this.gradientColor=new A(.74902,.74902,.74902,1),this.topLeftGradientColor=new A(.00784314,.294118,.580392,1),this.topRightGradientColor=new A(.305882,0,1,1),this.bottomLeftGradientColor=new A(.133333,.258824,.992157,1),this.bottomRightGradientColor=new A(.176471,.176471,.619608,1),this.edgeWidth=.5,this.edgePower=1,this.edgeLineGradientBlend=.5,this.alphaMode=Lt.ALPHA_DISABLE,this.backFaceCulling=!1,this._iridescentMapTexture=new S(H.IRIDESCENT_MAP_TEXTURE_URL,this.getScene(),!0,!1,S.NEAREST_SAMPLINGMODE)}needAlphaBlending(){return!1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new Bo);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!1,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="mrdlBackplate",h=i.toString(),d=["world","viewProjection","cameraPosition","_Radius_","_Line_Width_","_Absolute_Sizes_","_Filter_Width_","_Base_Color_","_Line_Color_","_Radius_Top_Left_","_Radius_Top_Right_","_Radius_Bottom_Left_","_Radius_Bottom_Right_","_Rate_","_Highlight_Color_","_Highlight_Width_","_Highlight_Transform_","_Highlight_","_Iridescence_Intensity_","_Iridescence_Edge_Intensity_","_Iridescence_Tint_","_Iridescent_Map_","_Angle_","_Reflected_","_Frequency_","_Vertical_Offset_","_Gradient_Color_","_Top_Left_","_Top_Right_","_Bottom_Left_","_Bottom_Right_","_Edge_Width_","_Edge_Power_","_Line_Gradient_Blend_","_Fade_Out_"],f=["_Iridescent_Map_"],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){if(!i.materialDefines)return;const o=i.effect;o&&(this._activeEffect=o,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",this.getScene().getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",this.getScene().activeCamera.position),this._activeEffect.setFloat("_Radius_",this.radius),this._activeEffect.setFloat("_Line_Width_",this.lineWidth),this._activeEffect.setFloat("_Absolute_Sizes_",this.absoluteSizes?1:0),this._activeEffect.setFloat("_Filter_Width_",this._filterWidth),this._activeEffect.setDirectColor4("_Base_Color_",this.baseColor),this._activeEffect.setDirectColor4("_Line_Color_",this.lineColor),this._activeEffect.setFloat("_Radius_Top_Left_",this.radiusTopLeft),this._activeEffect.setFloat("_Radius_Top_Right_",this.radiusTopRight),this._activeEffect.setFloat("_Radius_Bottom_Left_",this.radiusBottomLeft),this._activeEffect.setFloat("_Radius_Bottom_Right_",this.radiusBottomRight),this._activeEffect.setFloat("_Rate_",this._rate),this._activeEffect.setDirectColor4("_Highlight_Color_",this.highlightColor),this._activeEffect.setFloat("_Highlight_Width_",this.highlightWidth),this._activeEffect.setVector4("_Highlight_Transform_",this._highlightTransform),this._activeEffect.setFloat("_Highlight_",this._highlight),this._activeEffect.setFloat("_Iridescence_Intensity_",this.iridescenceIntensity),this._activeEffect.setFloat("_Iridescence_Edge_Intensity_",this.iridescenceEdgeIntensity),this._activeEffect.setDirectColor4("_Iridescence_Tint_",this.iridescenceTint),this._activeEffect.setTexture("_Iridescent_Map_",this._iridescentMapTexture),this._activeEffect.setFloat("_Angle_",this._angle),this._activeEffect.setFloat("_Reflected_",this._reflected?1:0),this._activeEffect.setFloat("_Frequency_",this._frequency),this._activeEffect.setFloat("_Vertical_Offset_",this._verticalOffset),this._activeEffect.setDirectColor4("_Gradient_Color_",this.gradientColor),this._activeEffect.setDirectColor4("_Top_Left_",this.topLeftGradientColor),this._activeEffect.setDirectColor4("_Top_Right_",this.topRightGradientColor),this._activeEffect.setDirectColor4("_Bottom_Left_",this.bottomLeftGradientColor),this._activeEffect.setDirectColor4("_Bottom_Right_",this.bottomRightGradientColor),this._activeEffect.setFloat("_Edge_Width_",this.edgeWidth),this._activeEffect.setFloat("_Edge_Power_",this.edgePower),this._activeEffect.setFloat("_Line_Gradient_Blend_",this.edgeLineGradientBlend),this._activeEffect.setFloat("_Fade_Out_",this.fadeOut),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t)}clone(t){return X.Clone(()=>new H(t,this.getScene()),this)}serialize(){const t=super.serialize();return t.customType="BABYLON.MRDLBackplateMaterial",t}getClassName(){return"MRDLBackplateMaterial"}static Parse(t,e,i){return X.Parse(()=>new H(t.name,e),t,e,i)}}H.IRIDESCENT_MAP_TEXTURE_URL="https://assets.babylonjs.com/meshes/MRTK/MRDL/mrtk-mrdl-backplate-iridescence.png";n([_()],H.prototype,"radius",void 0);n([_()],H.prototype,"lineWidth",void 0);n([_()],H.prototype,"absoluteSizes",void 0);n([_()],H.prototype,"baseColor",void 0);n([_()],H.prototype,"lineColor",void 0);n([_()],H.prototype,"radiusTopLeft",void 0);n([_()],H.prototype,"radiusTopRight",void 0);n([_()],H.prototype,"radiusBottomLeft",void 0);n([_()],H.prototype,"radiusBottomRight",void 0);n([_()],H.prototype,"highlightColor",void 0);n([_()],H.prototype,"highlightWidth",void 0);n([_()],H.prototype,"iridescenceIntensity",void 0);n([_()],H.prototype,"iridescenceEdgeIntensity",void 0);n([_()],H.prototype,"iridescenceTint",void 0);n([_()],H.prototype,"fadeOut",void 0);n([_()],H.prototype,"gradientColor",void 0);n([_()],H.prototype,"topLeftGradientColor",void 0);n([_()],H.prototype,"topRightGradientColor",void 0);n([_()],H.prototype,"bottomLeftGradientColor",void 0);n([_()],H.prototype,"bottomRightGradientColor",void 0);n([_()],H.prototype,"edgeWidth",void 0);n([_()],H.prototype,"edgePower",void 0);n([_()],H.prototype,"edgeLineGradientBlend",void 0);N("BABYLON.GUI.MRDLBackplateMaterial",H);const Vi=0,To=100,Co=50,zi=0,yi=1,Ro=.2;class Xe extends li{constructor(t,e){super(t),this.onValueChangedObservable=new B,this._sliderBackplateVisible=e||!1,this._minimum=Vi,this._maximum=To,this._step=zi,this._value=Co}get mesh(){return this.node?this._sliderThumb:null}get minimum(){return this._minimum}set minimum(t){this._minimum!==t&&(this._minimum=Math.max(t,Vi),this._value=Math.max(Math.min(this._value,this._maximum),this._minimum))}get maximum(){return this._maximum}set maximum(t){this._maximum!==t&&(this._maximum=Math.max(t,this._minimum),this._value=Math.max(Math.min(this._value,this._maximum),this._minimum))}get step(){return this._step}set step(t){this._step!==t&&(this._step=Math.max(Math.min(t,this._maximum-this._minimum),zi))}get value(){return this._value}set value(t){this._value!==t&&(this._value=Math.max(Math.min(t,this._maximum),this._minimum),this._sliderThumb&&(this._sliderThumb.position.x=this._convertToPosition(this.value)),this.onValueChangedObservable.notifyObservers(this._value))}get start(){return this.node?this._sliderBar.position.x-this._sliderBar.scaling.x/2:-yi/2}get end(){return this.node?this._sliderBar.position.x+this._sliderBar.scaling.x/2:yi/2}get sliderBarMaterial(){return this._sliderBarMaterial}get sliderThumbMaterial(){return this._sliderThumbMaterial}get sliderBackplateMaterial(){return this._sliderBackplateMaterial}set isVisible(t){var e;this._isVisible!==t&&(this._isVisible=t,(e=this.node)===null||e===void 0||e.setEnabled(t))}_createNode(t){const e=wt(`${this.name}_sliderbackplate`,{width:1,height:1,depth:1},t);return e.isPickable=!1,e.visibility=0,e.scaling=new c(1,.5,.8),Ci.ImportMeshAsync(void 0,Xe.MODEL_BASE_URL,Xe.MODEL_FILENAME,t).then(i=>{i.meshes.forEach(a=>{a.isPickable=!1});const s=i.meshes[1],o=i.meshes[1].clone(`${this.name}_sliderbar`,e),r=i.meshes[1].clone(`${this.name}_sliderthumb`,e);s.visibility=0,this._sliderBackplateVisible&&(s.visibility=1,s.name=`${this.name}_sliderbackplate`,s.scaling.x=1,s.scaling.z=.2,s.parent=e,this._sliderBackplateMaterial&&(s.material=this._sliderBackplateMaterial),this._sliderBackplate=s),o&&(o.parent=e,o.position.z=-.1,o.scaling=new c(yi-Ro,.04,.3),this._sliderBarMaterial&&(o.material=this._sliderBarMaterial),this._sliderBar=o),r&&(r.parent=e,r.isPickable=!0,r.position.z=-.115,r.scaling=new c(.025,.3,.6),r.position.x=this._convertToPosition(this.value),r.addBehavior(this._createBehavior()),this._sliderThumbMaterial&&(r.material=this._sliderThumbMaterial),this._sliderThumb=r),this._injectGUI3DReservedDataStore(e).control=this,e.getChildMeshes().forEach(a=>{this._injectGUI3DReservedDataStore(a).control=this})}),this._affectMaterial(e),e}_affectMaterial(t){var e,i,s;this._sliderBackplateMaterial=(e=this._sliderBackplateMaterial)!==null&&e!==void 0?e:new H(`${this.name}_sliderbackplate_material`,t.getScene()),this._sliderBarMaterial=(i=this._sliderBarMaterial)!==null&&i!==void 0?i:new v(`${this.name}_sliderbar_material`,t.getScene()),this._sliderThumbMaterial=(s=this._sliderThumbMaterial)!==null&&s!==void 0?s:new x(`${this.name}_sliderthumb_material`,t.getScene())}_createBehavior(){const t=new ri({dragAxis:c.Right()});return t.moveAttached=!1,t.onDragStartObservable.add(()=>{this._draggedPosition=this._sliderThumb.position.x}),t.onDragObservable.add(e=>{this._draggedPosition+=e.dragDistance/this.scaling.x,this.value=this._convertToValue(this._draggedPosition)}),t}_convertToPosition(t){const e=(t-this.minimum)/(this.maximum-this.minimum)*(this.end-this.start)+this.start;return Math.min(Math.max(e,this.start),this.end)}_convertToValue(t){let e=(t-this.start)/(this.end-this.start)*(this.maximum-this.minimum);return e=this.step?Math.round(e/this.step)*this.step:e,Math.max(Math.min(this.minimum+e,this._maximum),this._minimum)}dispose(){var t,e,i,s,o,r;super.dispose(),(t=this._sliderBar)===null||t===void 0||t.dispose(),(e=this._sliderThumb)===null||e===void 0||e.dispose(),(i=this._sliderBarMaterial)===null||i===void 0||i.dispose(),(s=this._sliderThumbMaterial)===null||s===void 0||s.dispose(),(o=this._sliderBackplate)===null||o===void 0||o.dispose(),(r=this._sliderBackplateMaterial)===null||r===void 0||r.dispose()}}Xe.MODEL_BASE_URL="https://assets.babylonjs.com/meshes/MRTK/";Xe.MODEL_FILENAME="mrtk-fluent-backplate.glb";class hr extends je{constructor(){super(...arguments),this._radius=5}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,it.SetImmediate(()=>{this._arrangeChildren()}))}_mapGridNode(t,e){const i=t.mesh;if(!i)return;const s=this._sphericalMapping(e);switch(t.position=s,this.orientation){case K.FACEORIGIN_ORIENTATION:i.lookAt(new c(2*s.x,2*s.y,2*s.z));break;case K.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new c(-s.x,-s.y,-s.z));break;case K.FACEFORWARD_ORIENTATION:break;case K.FACEFORWARDREVERSED_ORIENTATION:i.rotate(Ui.Y,Math.PI,Yi.LOCAL);break}}_sphericalMapping(t){const e=new c(0,0,this._radius),i=t.y/this._radius,s=-(t.x/this._radius);return St.RotationYawPitchRollToRef(s,i,0,E.Matrix[0]),c.TransformNormal(e,E.Matrix[0])}}class cr extends K{get isVertical(){return this._isVertical}set isVertical(t){this._isVertical!==t&&(this._isVertical=t,it.SetImmediate(()=>{this._arrangeChildren()}))}constructor(t=!1){super(),this._isVertical=!1,this.margin=.1,this._isVertical=t}_arrangeChildren(){let t=0,e=0,i=0;const s=[],o=St.Invert(this.node.computeWorldMatrix(!0));for(const l of this._children){if(!l.mesh)continue;i++,l.mesh.computeWorldMatrix(!0),l.mesh.getWorldMatrix().multiplyToRef(o,E.Matrix[0]);const h=l.mesh.getBoundingInfo().boundingBox,d=c.TransformNormal(h.extendSize,E.Matrix[0]);s.push(d),this._isVertical?e+=d.y:t+=d.x}this._isVertical?e+=(i-1)*this.margin/2:t+=(i-1)*this.margin/2;let r;this._isVertical?r=-e:r=-t;let a=0;for(const l of this._children){if(!l.mesh)continue;i--;const h=s[a++];this._isVertical?(l.position.y=r+h.y,l.position.x=0,r+=h.y*2):(l.position.x=r+h.x,l.position.y=0,r+=h.x*2),r+=i>0?this.margin:0}}}class dr extends is{constructor(t,e){super(e,t),this._currentMesh=t,this.pointerEnterAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1.1)},this.pointerOutAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1/1.1)},this.pointerDownAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(.95)},this.pointerUpAnimation=()=>{this.mesh&&this.mesh.scaling.scaleInPlace(1/.95)}}_getTypeName(){return"TouchMeshButton3D"}_createNode(){return this._currentMesh.getChildMeshes().forEach(t=>{this._injectGUI3DReservedDataStore(t).control=this}),this._currentMesh}_affectMaterial(t){}}const So="mrdlBackglowPixelShader",wo=`uniform vec3 cameraPosition;
varying vec3 vNormal;
varying vec2 vUV;
uniform float _Bevel_Radius_;
uniform float _Line_Width_;
uniform bool _Absolute_Sizes_;
uniform float _Tuning_Motion_;
uniform float _Motion_;
uniform float _Max_Intensity_;
uniform float _Intensity_Fade_In_Exponent_;
uniform float _Outer_Fuzz_Start_;
uniform float _Outer_Fuzz_End_;
uniform vec4 _Color_;
uniform vec4 _Inner_Color_;
uniform float _Blend_Exponent_;
uniform float _Falloff_;
uniform float _Bias_;
float BiasFunc(float b,float v) {
return pow(v,log(clamp(b,0.001,0.999))/log(0.5));
}
void Fuzzy_Round_Rect_B33(
float Size_X,
float Size_Y,
float Radius_X,
float Radius_Y,
float Line_Width,
vec2 UV,
float Outer_Fuzz,
float Max_Outer_Fuzz,
out float Rect_Distance,
out float Inner_Distance)
{
vec2 halfSize=vec2(Size_X,Size_Y)*0.5;
vec2 r=max(min(vec2(Radius_X,Radius_Y),halfSize),vec2(0.001,0.001));
float radius=min(r.x,r.y)-Max_Outer_Fuzz;
vec2 v=abs(UV);
vec2 nearestp=min(v,halfSize-r);
float d=distance(nearestp,v);
Inner_Distance=clamp(1.0-(radius-d)/Line_Width,0.0,1.0);
Rect_Distance=clamp(1.0-(d-radius)/Outer_Fuzz,0.0,1.0)*Inner_Distance;
}
void main()
{
float X_Q42;
float Y_Q42;
X_Q42=vNormal.x;
Y_Q42=vNormal.y;
float MaxAB_Q24=max(_Tuning_Motion_,_Motion_);
float Sqrt_F_Q27=sqrt(MaxAB_Q24);
float Power_Q43=pow(MaxAB_Q24,_Intensity_Fade_In_Exponent_);
float Value_At_T_Q26=mix(_Outer_Fuzz_Start_,_Outer_Fuzz_End_,Sqrt_F_Q27);
float Product_Q23=_Max_Intensity_*Power_Q43;
float Rect_Distance_Q33;
float Inner_Distance_Q33;
Fuzzy_Round_Rect_B33(X_Q42,Y_Q42,_Bevel_Radius_,_Bevel_Radius_,_Line_Width_,vUV,Value_At_T_Q26,_Outer_Fuzz_Start_,Rect_Distance_Q33,Inner_Distance_Q33);
float Power_Q44=pow(Inner_Distance_Q33,_Blend_Exponent_);
float Result_Q45=pow(BiasFunc(_Bias_,Rect_Distance_Q33),_Falloff_);
vec4 Color_At_T_Q25=mix(_Inner_Color_,_Color_,Power_Q44);
float Product_Q22=Result_Q45*Product_Q23;
vec4 Result_Q28=Product_Q22*Color_At_T_Q25;
vec4 Out_Color=Result_Q28;
float Clip_Threshold=0.0;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[So]=wo;const Oo="mrdlBackglowVertexShader",Fo=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 tangent;
uniform float _Bevel_Radius_;
uniform float _Line_Width_;
uniform bool _Absolute_Sizes_;
uniform float _Tuning_Motion_;
uniform float _Motion_;
uniform float _Max_Intensity_;
uniform float _Intensity_Fade_In_Exponent_;
uniform float _Outer_Fuzz_Start_;
uniform float _Outer_Fuzz_End_;
uniform vec4 _Color_;
uniform vec4 _Inner_Color_;
uniform float _Blend_Exponent_;
uniform float _Falloff_;
uniform float _Bias_;
varying vec3 vNormal;
varying vec2 vUV;
void main()
{
vec3 Dir_World_Q41=(world*vec4(tangent,0.0)).xyz;
vec3 Dir_World_Q40=(world*vec4((cross(normal,tangent)),0.0)).xyz;
float MaxAB_Q24=max(_Tuning_Motion_,_Motion_);
float Length_Q16=length(Dir_World_Q41);
float Length_Q17=length(Dir_World_Q40);
bool Greater_Than_Q37=MaxAB_Q24>0.0;
vec3 Sizes_Q35;
vec2 XY_Q35;
Sizes_Q35=(_Absolute_Sizes_ ? vec3(Length_Q16,Length_Q17,0) : vec3(Length_Q16/Length_Q17,1,0));
XY_Q35=(uv-vec2(0.5,0.5))*Sizes_Q35.xy;
vec3 Result_Q38=Greater_Than_Q37 ? position : vec3(0,0,0);
vec3 Pos_World_Q39=(world*vec4(Result_Q38,1.0)).xyz;
vec3 Position=Pos_World_Q39;
vec3 Normal=Sizes_Q35;
vec2 UV=XY_Q35;
vec3 Tangent=vec3(0,0,0);
vec3 Binormal=vec3(0,0,0);
vec4 Color=vec4(1,1,1,1);
gl_Position=viewProjection*vec4(Position,1);
vNormal=Normal;
vUV=UV;
}`;ht.ShadersStore[Oo]=Fo;class Eo extends $t{constructor(){super(),this._needNormals=!0,this._needUVs=!0,this.rebuild()}}class gt extends qt{constructor(t,e){super(t,e),this.bevelRadius=.16,this.lineWidth=.16,this.absoluteSizes=!1,this.tuningMotion=0,this.motion=1,this.maxIntensity=.7,this.intensityFadeInExponent=2,this.outerFuzzStart=.04,this.outerFuzzEnd=.04,this.color=new A(.682353,.698039,1,1),this.innerColor=new A(.356863,.392157,.796078,1),this.blendExponent=1.5,this.falloff=2,this.bias=.5,this.alphaMode=Lt.ALPHA_ADD,this.disableDepthWrite=!0,this.backFaceCulling=!1}needAlphaBlending(){return!0}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new Eo);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!1,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="mrdlBackglow",h=i.toString(),d=["world","worldView","worldViewProjection","view","projection","viewProjection","cameraPosition","_Bevel_Radius_","_Line_Width_","_Absolute_Sizes_","_Tuning_Motion_","_Motion_","_Max_Intensity_","_Intensity_Fade_In_Exponent_","_Outer_Fuzz_Start_","_Outer_Fuzz_End_","_Color_","_Inner_Color_","_Blend_Exponent_","_Falloff_","_Bias_"],f=[],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){const s=this.getScene();if(!i.materialDefines)return;const r=i.effect;r&&(this._activeEffect=r,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",s.activeCamera.position),this._activeEffect.setFloat("_Bevel_Radius_",this.bevelRadius),this._activeEffect.setFloat("_Line_Width_",this.lineWidth),this._activeEffect.setFloat("_Absolute_Sizes_",this.absoluteSizes?1:0),this._activeEffect.setFloat("_Tuning_Motion_",this.tuningMotion),this._activeEffect.setFloat("_Motion_",this.motion),this._activeEffect.setFloat("_Max_Intensity_",this.maxIntensity),this._activeEffect.setFloat("_Intensity_Fade_In_Exponent_",this.intensityFadeInExponent),this._activeEffect.setFloat("_Outer_Fuzz_Start_",this.outerFuzzStart),this._activeEffect.setFloat("_Outer_Fuzz_End_",this.outerFuzzEnd),this._activeEffect.setDirectColor4("_Color_",this.color),this._activeEffect.setDirectColor4("_Inner_Color_",this.innerColor),this._activeEffect.setFloat("_Blend_Exponent_",this.blendExponent),this._activeEffect.setFloat("_Falloff_",this.falloff),this._activeEffect.setFloat("_Bias_",this.bias),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t)}clone(t){return X.Clone(()=>new gt(t,this.getScene()),this)}serialize(){const t=X.Serialize(this);return t.customType="BABYLON.MRDLBackglowMaterial",t}getClassName(){return"MRDLBackglowMaterial"}static Parse(t,e,i){return X.Parse(()=>new gt(t.name,e),t,e,i)}}n([_()],gt.prototype,"bevelRadius",void 0);n([_()],gt.prototype,"lineWidth",void 0);n([_()],gt.prototype,"absoluteSizes",void 0);n([_()],gt.prototype,"tuningMotion",void 0);n([_()],gt.prototype,"motion",void 0);n([_()],gt.prototype,"maxIntensity",void 0);n([_()],gt.prototype,"intensityFadeInExponent",void 0);n([_()],gt.prototype,"outerFuzzStart",void 0);n([_()],gt.prototype,"outerFuzzEnd",void 0);n([_()],gt.prototype,"color",void 0);n([_()],gt.prototype,"innerColor",void 0);n([_()],gt.prototype,"blendExponent",void 0);n([_()],gt.prototype,"falloff",void 0);n([_()],gt.prototype,"bias",void 0);N("BABYLON.GUI.MRDLBackglowMaterial",gt);const Mo="mrdlFrontplatePixelShader",Do=`uniform vec3 cameraPosition;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
uniform float _Radius_;
uniform float _Line_Width_;
uniform bool _Relative_To_Height_;
uniform float _Filter_Width_;
uniform vec4 _Edge_Color_;
uniform float _Fade_Out_;
uniform bool _Smooth_Edges_;
uniform bool _Blob_Enable_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Inner_Fade_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform float _Blob_Pulse_Max_Size_;
uniform bool _Blob_Enable_2_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Inner_Fade_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform float _Gaze_Intensity_;
uniform float _Gaze_Focus_;
uniform sampler2D _Blob_Texture_;
uniform float _Selection_Fuzz_;
uniform float _Selected_;
uniform float _Selection_Fade_;
uniform float _Selection_Fade_Size_;
uniform float _Selected_Distance_;
uniform float _Selected_Fade_Length_;
uniform float _Proximity_Max_Intensity_;
uniform float _Proximity_Far_Distance_;
uniform float _Proximity_Near_Radius_;
uniform float _Proximity_Anisotropy_;
uniform bool _Use_Global_Left_Index_;
uniform bool _Use_Global_Right_Index_;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
void Scale_Color_B54(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=Scalar*Color;
}
void Scale_RGB_B50(
vec4 Color,
float Scalar,
out vec4 Result)
{
Result=vec4(Scalar,Scalar,Scalar,1)*Color;
}
void Proximity_Fragment_B51(
float Proximity_Max_Intensity,
float Proximity_Near_Radius,
vec4 Deltas,
float Show_Selection,
float Distance_Fade1,
float Distance_Fade2,
float Strength,
out float Proximity)
{
float proximity1=(1.0-clamp(length(Deltas.xy)/Proximity_Near_Radius,0.0,1.0))*Distance_Fade1;
float proximity2=(1.0-clamp(length(Deltas.zw)/Proximity_Near_Radius,0.0,1.0))*Distance_Fade2;
Proximity=Strength*(Proximity_Max_Intensity*max(proximity1,proximity2) *(1.0-Show_Selection)+Show_Selection);
}
void Blob_Fragment_B56(
vec2 UV,
vec3 Blob_Info,
sampler2D Blob_Texture,
out vec4 Blob_Color)
{
float k=dot(UV,UV);
Blob_Color=Blob_Info.y*texture(Blob_Texture,vec2(vec2(sqrt(k),Blob_Info.x).x,1.0-vec2(sqrt(k),Blob_Info.x).y))*(1.0-clamp(k,0.0,1.0));
}
void Round_Rect_Fragment_B61(
float Radius,
vec4 Line_Color,
float Filter_Width,
float Line_Visibility,
vec4 Fill_Color,
bool Smooth_Edges,
vec4 Rect_Parms,
out float Inside_Rect)
{
float d=length(max(abs(Rect_Parms.zw)-Rect_Parms.xy,0.0));
float dx=max(fwidth(d)*Filter_Width,0.00001);
Inside_Rect=Smooth_Edges ? clamp((Radius-d)/dx,0.0,1.0) : 1.0-step(Radius,d);
}
void main()
{
float Is_Quad_Q53;
Is_Quad_Q53=vNormal.z;
vec4 Blob_Color_Q56;
Blob_Fragment_B56(vUV,vTangent,_Blob_Texture_,Blob_Color_Q56);
float X_Q52;
float Y_Q52;
float Z_Q52;
float W_Q52;
X_Q52=vExtra3.x;
Y_Q52=vExtra3.y;
Z_Q52=vExtra3.z;
W_Q52=vExtra3.w;
float Proximity_Q51;
Proximity_Fragment_B51(_Proximity_Max_Intensity_,_Proximity_Near_Radius_,vExtra2,X_Q52,Y_Q52,Z_Q52,1.0,Proximity_Q51);
float Inside_Rect_Q61;
Round_Rect_Fragment_B61(W_Q52,vec4(1,1,1,1),_Filter_Width_,1.0,vec4(0,0,0,0),_Smooth_Edges_,vExtra1,Inside_Rect_Q61);
vec4 Result_Q50;
Scale_RGB_B50(_Edge_Color_,Proximity_Q51,Result_Q50);
vec4 Result_Q47=Inside_Rect_Q61*Blob_Color_Q56;
vec4 Color_At_T_Q48=mix(Result_Q50,Result_Q47,Is_Quad_Q53);
vec4 Result_Q54;
Scale_Color_B54(Color_At_T_Q48,_Fade_Out_,Result_Q54);
vec4 Out_Color=Result_Q54;
float Clip_Threshold=0.001;
bool To_sRGB=false;
gl_FragColor=Out_Color;
}`;ht.ShadersStore[Mo]=Do;const Lo="mrdlFrontplateVertexShader",ko=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 tangent;
attribute vec4 color;
uniform float _Radius_;
uniform float _Line_Width_;
uniform bool _Relative_To_Height_;
uniform float _Filter_Width_;
uniform vec4 _Edge_Color_;
uniform float _Fade_Out_;
uniform bool _Smooth_Edges_;
uniform bool _Blob_Enable_;
uniform vec3 _Blob_Position_;
uniform float _Blob_Intensity_;
uniform float _Blob_Near_Size_;
uniform float _Blob_Far_Size_;
uniform float _Blob_Near_Distance_;
uniform float _Blob_Far_Distance_;
uniform float _Blob_Fade_Length_;
uniform float _Blob_Inner_Fade_;
uniform float _Blob_Pulse_;
uniform float _Blob_Fade_;
uniform float _Blob_Pulse_Max_Size_;
uniform bool _Blob_Enable_2_;
uniform vec3 _Blob_Position_2_;
uniform float _Blob_Near_Size_2_;
uniform float _Blob_Inner_Fade_2_;
uniform float _Blob_Pulse_2_;
uniform float _Blob_Fade_2_;
uniform float _Gaze_Intensity_;
uniform float _Gaze_Focus_;
uniform sampler2D _Blob_Texture_;
uniform float _Selection_Fuzz_;
uniform float _Selected_;
uniform float _Selection_Fade_;
uniform float _Selection_Fade_Size_;
uniform float _Selected_Distance_;
uniform float _Selected_Fade_Length_;
uniform float _Proximity_Max_Intensity_;
uniform float _Proximity_Far_Distance_;
uniform float _Proximity_Near_Radius_;
uniform float _Proximity_Anisotropy_;
uniform bool _Use_Global_Left_Index_;
uniform bool _Use_Global_Right_Index_;
uniform vec4 Global_Left_Index_Tip_Position;
uniform vec4 Global_Right_Index_Tip_Position;
varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vTangent;
varying vec4 vExtra1;
varying vec4 vExtra2;
varying vec4 vExtra3;
void Blob_Vertex_B40(
vec3 Position,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
vec3 Blob_Position,
float Intensity,
float Blob_Near_Size,
float Blob_Far_Size,
float Blob_Near_Distance,
float Blob_Far_Distance,
vec4 Vx_Color,
vec2 UV,
vec3 Face_Center,
vec2 Face_Size,
vec2 In_UV,
float Blob_Fade_Length,
float Selection_Fade,
float Selection_Fade_Size,
float Inner_Fade,
float Blob_Pulse,
float Blob_Fade,
float Blob_Enabled,
float DistanceOffset,
out vec3 Out_Position,
out vec2 Out_UV,
out vec3 Blob_Info,
out vec2 Blob_Relative_UV)
{
float blobSize,fadeIn;
vec3 Hit_Position;
Blob_Info=vec3(0.0,0.0,0.0);
float Hit_Distance=dot(Blob_Position-Face_Center,Normal)+DistanceOffset*Blob_Far_Distance;
Hit_Position=Blob_Position-Hit_Distance*Normal;
float absD=abs(Hit_Distance);
float lerpVal=clamp((absD-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);
fadeIn=1.0-clamp((absD-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);
float innerFade=1.0-clamp(-Hit_Distance/Inner_Fade,0.0,1.0);
float farClip=clamp(1.0-step(Blob_Far_Distance+Blob_Fade_Length,absD),0.0,1.0);
float size=mix(Blob_Near_Size,Blob_Far_Size,lerpVal)*farClip;
blobSize=mix(size,Selection_Fade_Size,Selection_Fade)*innerFade*Blob_Enabled;
Blob_Info.x=lerpVal*0.5+0.5;
Blob_Info.y=fadeIn*Intensity*(1.0-Selection_Fade)*Blob_Fade;
Blob_Info.x*=(1.0-Blob_Pulse);
vec3 delta=Hit_Position-Face_Center;
vec2 blobCenterXY=vec2(dot(delta,Tangent),dot(delta,Bitangent));
vec2 quadUVin=2.0*UV-1.0; 
vec2 blobXY=blobCenterXY+quadUVin*blobSize;
vec2 blobClipped=clamp(blobXY,-Face_Size*0.5,Face_Size*0.5);
vec2 blobUV=(blobClipped-blobCenterXY)/max(blobSize,0.0001)*2.0;
vec3 blobCorner=Face_Center+blobClipped.x*Tangent+blobClipped.y*Bitangent;
Out_Position=mix(Position,blobCorner,Vx_Color.rrr);
Out_UV=mix(In_UV,blobUV,Vx_Color.rr);
Blob_Relative_UV=blobClipped/Face_Size.y;
}
void Round_Rect_Vertex_B36(
vec2 UV,
vec3 Tangent,
vec3 Binormal,
float Radius,
float Anisotropy,
vec2 Blob_Center_UV,
out vec2 Rect_UV,
out vec2 Scale_XY,
out vec4 Rect_Parms)
{
Scale_XY=vec2(Anisotropy,1.0);
Rect_UV=(UV-vec2(0.5,0.5))*Scale_XY;
Rect_Parms.xy=Scale_XY*0.5-vec2(Radius,Radius);
Rect_Parms.zw=Blob_Center_UV;
}
vec2 ProjectProximity(
vec3 blobPosition,
vec3 position,
vec3 center,
vec3 dir,
vec3 xdir,
vec3 ydir,
out float vdistance
)
{
vec3 delta=blobPosition-position;
vec2 xy=vec2(dot(delta,xdir),dot(delta,ydir));
vdistance=abs(dot(delta,dir));
return xy;
}
void Proximity_Vertex_B33(
vec3 Blob_Position,
vec3 Blob_Position_2,
vec3 Face_Center,
vec3 Position,
float Proximity_Far_Distance,
float Relative_Scale,
float Proximity_Anisotropy,
vec3 Normal,
vec3 Tangent,
vec3 Binormal,
out vec4 Extra,
out float Distance_To_Face,
out float Distance_Fade1,
out float Distance_Fade2)
{
float distz1,distz2;
Extra.xy=ProjectProximity(Blob_Position,Position,Face_Center,Normal,Tangent*Proximity_Anisotropy,Binormal,distz1)/Relative_Scale;
Extra.zw=ProjectProximity(Blob_Position_2,Position,Face_Center,Normal,Tangent*Proximity_Anisotropy,Binormal,distz2)/Relative_Scale;
Distance_To_Face=dot(Normal,Position-Face_Center);
Distance_Fade1=1.0-clamp(distz1/Proximity_Far_Distance,0.0,1.0);
Distance_Fade2=1.0-clamp(distz2/Proximity_Far_Distance,0.0,1.0);
}
void Object_To_World_Pos_B12(
vec3 Pos_Object,
out vec3 Pos_World)
{
Pos_World=(world*vec4(Pos_Object,1.0)).xyz;
}
void Choose_Blob_B27(
vec4 Vx_Color,
vec3 Position1,
vec3 Position2,
bool Blob_Enable_1,
bool Blob_Enable_2,
float Near_Size_1,
float Near_Size_2,
float Blob_Inner_Fade_1,
float Blob_Inner_Fade_2,
float Blob_Pulse_1,
float Blob_Pulse_2,
float Blob_Fade_1,
float Blob_Fade_2,
out vec3 Position,
out float Near_Size,
out float Inner_Fade,
out float Blob_Enable,
out float Fade,
out float Pulse)
{
Position=Position1*(1.0-Vx_Color.g)+Vx_Color.g*Position2;
float b1=Blob_Enable_1 ? 1.0 : 0.0;
float b2=Blob_Enable_2 ? 1.0 : 0.0;
Blob_Enable=b1+(b2-b1)*Vx_Color.g;
Pulse=Blob_Pulse_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Pulse_2;
Fade=Blob_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Fade_2;
Near_Size=Near_Size_1*(1.0-Vx_Color.g)+Vx_Color.g*Near_Size_2;
Inner_Fade=Blob_Inner_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Inner_Fade_2;
}
void Move_Verts_B32(
vec2 UV,
float Radius,
float Anisotropy,
float Line_Width,
float Visible,
out vec3 New_P,
out vec2 New_UV)
{
vec2 xy=2.0*UV-vec2(0.5,0.5);
vec2 center=clamp(xy,0.0,1.0);
vec2 delta=2.0*(xy-center);
float deltaLength=length(delta);
vec2 aniso=vec2(1.0/Anisotropy,1.0);
center=(center-vec2(0.5,0.5))*(1.0-2.0*Radius*aniso);
New_UV=vec2((2.0-2.0*deltaLength)*Visible,0.0);
float deltaRadius= (Radius-Line_Width*New_UV.x);
New_P.xy=(center+deltaRadius/deltaLength *aniso*delta);
New_P.z=0.0;
}
void Object_To_World_Dir_B14(
vec3 Dir_Object,
out vec3 Binormal_World)
{
Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;
}
void Proximity_Visibility_B55(
float Selection,
vec3 Proximity_Center,
vec3 Proximity_Center_2,
float Proximity_Far_Distance,
float Proximity_Radius,
vec3 Face_Center,
vec3 Normal,
vec2 Face_Size,
float Gaze,
out float Width)
{
float boxMaxSize=length(Face_Size)*0.5;
float d1=dot(Proximity_Center-Face_Center,Normal);
vec3 blob1=Proximity_Center-d1*Normal;
float d2=dot(Proximity_Center_2-Face_Center,Normal);
vec3 blob2=Proximity_Center_2-d2*Normal;
vec3 delta1=blob1-Face_Center;
vec3 delta2=blob2-Face_Center;
float dist1=dot(delta1,delta1);
float dist2=dot(delta2,delta2);
float nearestProxDist=sqrt(min(dist1,dist2));
Width=(1.0-step(boxMaxSize+Proximity_Radius,nearestProxDist))*(1.0-step(Proximity_Far_Distance,min(d1,d2))*(1.0-step(0.0001,Selection)));
Width=max(Gaze,Width);
}
vec2 ramp2(vec2 start,vec2 end,vec2 x)
{
return clamp((x-start)/(end-start),vec2(0.0,0.0),vec2(1.0,1.0));
}
float computeSelection(
vec3 blobPosition,
vec3 normal,
vec3 tangent,
vec3 bitangent,
vec3 faceCenter,
vec2 faceSize,
float selectionFuzz,
float farDistance,
float fadeLength
)
{
vec3 delta=blobPosition-faceCenter;
float absD=abs(dot(delta,normal));
float fadeIn=1.0-clamp((absD-farDistance)/fadeLength,0.0,1.0);
vec2 blobCenterXY=vec2(dot(delta,tangent),dot(delta,bitangent));
vec2 innerFace=faceSize*(1.0-selectionFuzz)*0.5;
vec2 selectPulse=ramp2(-faceSize*0.5,-innerFace,blobCenterXY)-ramp2(innerFace,faceSize*0.5,blobCenterXY);
return selectPulse.x*selectPulse.y*fadeIn;
}
void Selection_Vertex_B31(
vec3 Blob_Position,
vec3 Blob_Position_2,
vec3 Face_Center,
vec2 Face_Size,
vec3 Normal,
vec3 Tangent,
vec3 Bitangent,
float Selection_Fuzz,
float Selected,
float Far_Distance,
float Fade_Length,
vec3 Active_Face_Dir,
out float Show_Selection)
{
float select1=computeSelection(Blob_Position,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);
float select2=computeSelection(Blob_Position_2,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);
Show_Selection=mix(max(select1,select2),1.0,Selected);
}
void main()
{
vec3 Vec3_Q29=vec3(vec2(0,0).x,vec2(0,0).y,color.r);
vec3 Nrm_World_Q24;
Nrm_World_Q24=normalize((world*vec4(normal,0.0)).xyz);
vec3 Face_Center_Q30;
Face_Center_Q30=(world*vec4(vec3(0,0,0),1.0)).xyz;
vec3 Tangent_World_Q13;
Tangent_World_Q13=(world*vec4(tangent,0.0)).xyz;
vec3 Result_Q42;
Result_Q42=_Use_Global_Left_Index_ ? Global_Left_Index_Tip_Position.xyz : _Blob_Position_;
vec3 Result_Q43;
Result_Q43=_Use_Global_Right_Index_ ? Global_Right_Index_Tip_Position.xyz : _Blob_Position_2_;
float Value_At_T_Q58=mix(_Blob_Near_Size_,_Blob_Pulse_Max_Size_,_Blob_Pulse_);
float Value_At_T_Q59=mix(_Blob_Near_Size_2_,_Blob_Pulse_Max_Size_,_Blob_Pulse_2_);
vec3 Cross_Q70=cross(normal,tangent);
float Product_Q45=_Gaze_Intensity_*_Gaze_Focus_;
float Step_Q46=step(0.0001,Product_Q45);
vec3 Tangent_World_N_Q15=normalize(Tangent_World_Q13);
vec3 Position_Q27;
float Near_Size_Q27;
float Inner_Fade_Q27;
float Blob_Enable_Q27;
float Fade_Q27;
float Pulse_Q27;
Choose_Blob_B27(color,Result_Q42,Result_Q43,_Blob_Enable_,_Blob_Enable_2_,Value_At_T_Q58,Value_At_T_Q59,_Blob_Inner_Fade_,_Blob_Inner_Fade_2_,_Blob_Pulse_,_Blob_Pulse_2_,_Blob_Fade_,_Blob_Fade_2_,Position_Q27,Near_Size_Q27,Inner_Fade_Q27,Blob_Enable_Q27,Fade_Q27,Pulse_Q27);
vec3 Binormal_World_Q14;
Object_To_World_Dir_B14(Cross_Q70,Binormal_World_Q14);
float Anisotropy_Q21=length(Tangent_World_Q13)/length(Binormal_World_Q14);
vec3 Binormal_World_N_Q16=normalize(Binormal_World_Q14);
vec2 Face_Size_Q35;
float ScaleY_Q35;
Face_Size_Q35=vec2(length(Tangent_World_Q13),length(Binormal_World_Q14));
ScaleY_Q35=Face_Size_Q35.y;
float Out_Radius_Q38;
float Out_Line_Width_Q38;
Out_Radius_Q38=_Relative_To_Height_ ? _Radius_ : _Radius_/ScaleY_Q35;
Out_Line_Width_Q38=_Relative_To_Height_ ? _Line_Width_ : _Line_Width_/ScaleY_Q35;
float Show_Selection_Q31;
Selection_Vertex_B31(Result_Q42,Result_Q43,Face_Center_Q30,Face_Size_Q35,Nrm_World_Q24,Tangent_World_N_Q15,Binormal_World_N_Q16,_Selection_Fuzz_,_Selected_,_Selected_Distance_,_Selected_Fade_Length_,vec3(0,0,-1),Show_Selection_Q31);
float MaxAB_Q41=max(Show_Selection_Q31,Product_Q45);
float Width_Q55;
Proximity_Visibility_B55(Show_Selection_Q31,Result_Q42,Result_Q43,_Proximity_Far_Distance_,_Proximity_Near_Radius_,Face_Center_Q30,Nrm_World_Q24,Face_Size_Q35,Step_Q46,Width_Q55);
vec3 New_P_Q32;
vec2 New_UV_Q32;
Move_Verts_B32(uv,Out_Radius_Q38,Anisotropy_Q21,Out_Line_Width_Q38,Width_Q55,New_P_Q32,New_UV_Q32);
vec3 Pos_World_Q12;
Object_To_World_Pos_B12(New_P_Q32,Pos_World_Q12);
vec3 Out_Position_Q40;
vec2 Out_UV_Q40;
vec3 Blob_Info_Q40;
vec2 Blob_Relative_UV_Q40;
Blob_Vertex_B40(Pos_World_Q12,Nrm_World_Q24,Tangent_World_N_Q15,Binormal_World_N_Q16,Position_Q27,_Blob_Intensity_,Near_Size_Q27,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,color,uv,Face_Center_Q30,Face_Size_Q35,New_UV_Q32,_Blob_Fade_Length_,_Selection_Fade_,_Selection_Fade_Size_,Inner_Fade_Q27,Pulse_Q27,Fade_Q27,Blob_Enable_Q27,0.0,Out_Position_Q40,Out_UV_Q40,Blob_Info_Q40,Blob_Relative_UV_Q40);
vec2 Rect_UV_Q36;
vec2 Scale_XY_Q36;
vec4 Rect_Parms_Q36;
Round_Rect_Vertex_B36(New_UV_Q32,Tangent_World_Q13,Binormal_World_Q14,Out_Radius_Q38,Anisotropy_Q21,Blob_Relative_UV_Q40,Rect_UV_Q36,Scale_XY_Q36,Rect_Parms_Q36);
vec4 Extra_Q33;
float Distance_To_Face_Q33;
float Distance_Fade1_Q33;
float Distance_Fade2_Q33;
Proximity_Vertex_B33(Result_Q42,Result_Q43,Face_Center_Q30,Pos_World_Q12,_Proximity_Far_Distance_,1.0,_Proximity_Anisotropy_,Nrm_World_Q24,Tangent_World_N_Q15,Binormal_World_N_Q16,Extra_Q33,Distance_To_Face_Q33,Distance_Fade1_Q33,Distance_Fade2_Q33);
vec4 Vec4_Q37=vec4(MaxAB_Q41,Distance_Fade1_Q33,Distance_Fade2_Q33,Out_Radius_Q38);
vec3 Position=Out_Position_Q40;
vec3 Normal=Vec3_Q29;
vec2 UV=Out_UV_Q40;
vec3 Tangent=Blob_Info_Q40;
vec3 Binormal=vec3(0,0,0);
vec4 Color=vec4(1,1,1,1);
vec4 Extra1=Rect_Parms_Q36;
vec4 Extra2=Extra_Q33;
vec4 Extra3=Vec4_Q37;
gl_Position=viewProjection*vec4(Position,1);
vNormal=Normal;
vUV=UV;
vTangent=Tangent;
vExtra1=Extra1;
vExtra2=Extra2;
vExtra3=Extra3;
}`;ht.ShadersStore[Lo]=ko;class No extends $t{constructor(){super(),this.SMOOTH_EDGES=!0,this._needNormals=!0,this._needUVs=!0,this.rebuild()}}class F extends qt{constructor(t,e){super(t,e),this.radius=.12,this.lineWidth=.01,this.relativeToHeight=!1,this._filterWidth=1,this.edgeColor=new A(.53,.53,.53,1),this.blobEnable=!0,this.blobPosition=new c(100,100,100),this.blobIntensity=.5,this.blobNearSize=.032,this.blobFarSize=.048,this.blobNearDistance=.008,this.blobFarDistance=.064,this.blobFadeLength=.04,this.blobInnerFade=.01,this.blobPulse=0,this.blobFade=1,this.blobPulseMaxSize=.05,this.blobEnable2=!0,this.blobPosition2=new c(10,10.1,-.6),this.blobNearSize2=.008,this.blobInnerFade2=.1,this.blobPulse2=0,this.blobFade2=1,this.gazeIntensity=.8,this.gazeFocus=0,this.selectionFuzz=.5,this.selected=1,this.selectionFade=.2,this.selectionFadeSize=0,this.selectedDistance=.08,this.selectedFadeLength=.08,this.proximityMaxIntensity=.45,this.proximityFarDistance=.16,this.proximityNearRadius=.016,this.proximityAnisotropy=1,this.useGlobalLeftIndex=!0,this.useGlobalRightIndex=!0,this.fadeOut=1,this.alphaMode=Lt.ALPHA_ADD,this.disableDepthWrite=!0,this.backFaceCulling=!1,this._blobTexture=new S(F.BLOB_TEXTURE_URL,e,!0,!1,S.NEAREST_SAMPLINGMODE)}needAlphaBlending(){return!0}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new No);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!1,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="mrdlFrontplate",h=i.toString(),d=["world","worldView","worldViewProjection","view","projection","viewProjection","cameraPosition","_Radius_","_Line_Width_","_Relative_To_Height_","_Filter_Width_","_Edge_Color_","_Fade_Out_","_Smooth_Edges_","_Blob_Enable_","_Blob_Position_","_Blob_Intensity_","_Blob_Near_Size_","_Blob_Far_Size_","_Blob_Near_Distance_","_Blob_Far_Distance_","_Blob_Fade_Length_","_Blob_Inner_Fade_","_Blob_Pulse_","_Blob_Fade_","_Blob_Pulse_Max_Size_","_Blob_Enable_2_","_Blob_Position_2_","_Blob_Near_Size_2_","_Blob_Inner_Fade_2_","_Blob_Pulse_2_","_Blob_Fade_2_","_Gaze_Intensity_","_Gaze_Focus_","_Blob_Texture_","_Selection_Fuzz_","_Selected_","_Selection_Fade_","_Selection_Fade_Size_","_Selected_Distance_","_Selected_Fade_Length_","_Proximity_Max_Intensity_","_Proximity_Far_Distance_","_Proximity_Near_Radius_","_Proximity_Anisotropy_","Global_Left_Index_Tip_Position","Global_Right_Index_Tip_Position","_Use_Global_Left_Index_","_Use_Global_Right_Index_"],f=[],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){const s=this.getScene();if(!i.materialDefines)return;const r=i.effect;r&&(this._activeEffect=r,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",s.activeCamera.position),this._activeEffect.setFloat("_Radius_",this.radius),this._activeEffect.setFloat("_Line_Width_",this.lineWidth),this._activeEffect.setFloat("_Relative_To_Height_",this.relativeToHeight?1:0),this._activeEffect.setFloat("_Filter_Width_",this._filterWidth),this._activeEffect.setDirectColor4("_Edge_Color_",this.edgeColor),this._activeEffect.setFloat("_Fade_Out_",this.fadeOut),this._activeEffect.setFloat("_Blob_Enable_",this.blobEnable?1:0),this._activeEffect.setVector3("_Blob_Position_",this.blobPosition),this._activeEffect.setFloat("_Blob_Intensity_",this.blobIntensity),this._activeEffect.setFloat("_Blob_Near_Size_",this.blobNearSize),this._activeEffect.setFloat("_Blob_Far_Size_",this.blobFarSize),this._activeEffect.setFloat("_Blob_Near_Distance_",this.blobNearDistance),this._activeEffect.setFloat("_Blob_Far_Distance_",this.blobFarDistance),this._activeEffect.setFloat("_Blob_Fade_Length_",this.blobFadeLength),this._activeEffect.setFloat("_Blob_Inner_Fade_",this.blobInnerFade),this._activeEffect.setFloat("_Blob_Pulse_",this.blobPulse),this._activeEffect.setFloat("_Blob_Fade_",this.blobFade),this._activeEffect.setFloat("_Blob_Pulse_Max_Size_",this.blobPulseMaxSize),this._activeEffect.setFloat("_Blob_Enable_2_",this.blobEnable2?1:0),this._activeEffect.setVector3("_Blob_Position_2_",this.blobPosition2),this._activeEffect.setFloat("_Blob_Near_Size_2_",this.blobNearSize2),this._activeEffect.setFloat("_Blob_Inner_Fade_2_",this.blobInnerFade2),this._activeEffect.setFloat("_Blob_Pulse_2_",this.blobPulse2),this._activeEffect.setFloat("_Blob_Fade_2_",this.blobFade2),this._activeEffect.setFloat("_Gaze_Intensity_",this.gazeIntensity),this._activeEffect.setFloat("_Gaze_Focus_",this.gazeFocus),this._activeEffect.setTexture("_Blob_Texture_",this._blobTexture),this._activeEffect.setFloat("_Selection_Fuzz_",this.selectionFuzz),this._activeEffect.setFloat("_Selected_",this.selected),this._activeEffect.setFloat("_Selection_Fade_",this.selectionFade),this._activeEffect.setFloat("_Selection_Fade_Size_",this.selectionFadeSize),this._activeEffect.setFloat("_Selected_Distance_",this.selectedDistance),this._activeEffect.setFloat("_Selected_Fade_Length_",this.selectedFadeLength),this._activeEffect.setFloat("_Proximity_Max_Intensity_",this.proximityMaxIntensity),this._activeEffect.setFloat("_Proximity_Far_Distance_",this.proximityFarDistance),this._activeEffect.setFloat("_Proximity_Near_Radius_",this.proximityNearRadius),this._activeEffect.setFloat("_Proximity_Anisotropy_",this.proximityAnisotropy),this._activeEffect.setFloat("_Use_Global_Left_Index_",this.useGlobalLeftIndex?1:0),this._activeEffect.setFloat("_Use_Global_Right_Index_",this.useGlobalRightIndex?1:0),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t)}clone(t){return X.Clone(()=>new F(t,this.getScene()),this)}serialize(){const t=X.Serialize(this);return t.customType="BABYLON.MRDLFrontplateMaterial",t}getClassName(){return"MRDLFrontplateMaterial"}static Parse(t,e,i){return X.Parse(()=>new F(t.name,e),t,e,i)}}F.BLOB_TEXTURE_URL="";n([_()],F.prototype,"radius",void 0);n([_()],F.prototype,"lineWidth",void 0);n([_()],F.prototype,"relativeToHeight",void 0);n([_()],F.prototype,"edgeColor",void 0);n([_()],F.prototype,"blobEnable",void 0);n([_()],F.prototype,"blobPosition",void 0);n([_()],F.prototype,"blobIntensity",void 0);n([_()],F.prototype,"blobNearSize",void 0);n([_()],F.prototype,"blobFarSize",void 0);n([_()],F.prototype,"blobNearDistance",void 0);n([_()],F.prototype,"blobFarDistance",void 0);n([_()],F.prototype,"blobFadeLength",void 0);n([_()],F.prototype,"blobInnerFade",void 0);n([_()],F.prototype,"blobPulse",void 0);n([_()],F.prototype,"blobFade",void 0);n([_()],F.prototype,"blobPulseMaxSize",void 0);n([_()],F.prototype,"blobEnable2",void 0);n([_()],F.prototype,"blobPosition2",void 0);n([_()],F.prototype,"blobNearSize2",void 0);n([_()],F.prototype,"blobInnerFade2",void 0);n([_()],F.prototype,"blobPulse2",void 0);n([_()],F.prototype,"blobFade2",void 0);n([_()],F.prototype,"gazeIntensity",void 0);n([_()],F.prototype,"gazeFocus",void 0);n([_()],F.prototype,"selectionFuzz",void 0);n([_()],F.prototype,"selected",void 0);n([_()],F.prototype,"selectionFade",void 0);n([_()],F.prototype,"selectionFadeSize",void 0);n([_()],F.prototype,"selectedDistance",void 0);n([_()],F.prototype,"selectedFadeLength",void 0);n([_()],F.prototype,"proximityMaxIntensity",void 0);n([_()],F.prototype,"proximityFarDistance",void 0);n([_()],F.prototype,"proximityNearRadius",void 0);n([_()],F.prototype,"proximityAnisotropy",void 0);n([_()],F.prototype,"useGlobalLeftIndex",void 0);n([_()],F.prototype,"useGlobalRightIndex",void 0);N("BABYLON.GUI.MRDLFrontplateMaterial",F);const Ao="mrdlInnerquadPixelShader",Qo=`uniform vec3 cameraPosition;
varying vec2 vUV;
varying vec3 vTangent;
uniform vec4 _Color_;
uniform float _Radius_;
uniform bool _Fixed_Radius_;
uniform float _Filter_Width_;
uniform float _Glow_Fraction_;
uniform float _Glow_Max_;
uniform float _Glow_Falloff_;
float FilterStep_Bid194(float edge,float x,float filterWidth)
{
float dx=max(1.0E-5,fwidth(x)*filterWidth);
return max((x+dx*0.5-max(edge,x-dx*0.5))/dx,0.0);
}
void Round_Rect_B194(
float Size_X,
float Size_Y,
float Radius,
vec4 Rect_Color,
float Filter_Width,
vec2 UV,
float Glow_Fraction,
float Glow_Max,
float Glow_Falloff,
out vec4 Color)
{
vec2 halfSize=vec2(Size_X,Size_Y)*0.5;
vec2 r=max(min(vec2(Radius,Radius),halfSize),vec2(0.01,0.01));
vec2 v=abs(UV);
vec2 nearestp=min(v,halfSize-r);
vec2 delta=(v-nearestp)/max(vec2(0.01,0.01),r);
float Distance=length(delta);
float insideRect=1.0-FilterStep_Bid194(1.0-Glow_Fraction,Distance,Filter_Width);
float glow=clamp((1.0-Distance)/Glow_Fraction,0.0,1.0);
glow=pow(glow,Glow_Falloff);
Color=Rect_Color*max(insideRect,glow*Glow_Max);
}
void main()
{
float X_Q192;
float Y_Q192;
float Z_Q192;
X_Q192=vTangent.x;
Y_Q192=vTangent.y;
Z_Q192=vTangent.z;
vec4 Color_Q194;
Round_Rect_B194(X_Q192,1.0,Y_Q192,_Color_,_Filter_Width_,vUV,_Glow_Fraction_,_Glow_Max_,_Glow_Falloff_,Color_Q194);
vec4 Out_Color=Color_Q194;
float Clip_Threshold=0.0;
gl_FragColor=Out_Color;
}
`;ht.ShadersStore[Ao]=Qo;const Vo="mrdlInnerquadVertexShader",zo=`uniform mat4 world;
uniform mat4 viewProjection;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 tangent;
attribute vec4 color;
uniform vec4 _Color_;
uniform float _Radius_;
uniform bool _Fixed_Radius_;
uniform float _Filter_Width_;
uniform float _Glow_Fraction_;
uniform float _Glow_Max_;
uniform float _Glow_Falloff_;
varying vec2 vUV;
varying vec3 vTangent;
void main()
{
vec3 Pos_World_Q189;
Pos_World_Q189=(world*vec4(position,1.0)).xyz;
vec3 Dir_World_Q190;
Dir_World_Q190=(world*vec4(tangent,0.0)).xyz;
vec3 Dir_World_Q191;
Dir_World_Q191=(world*vec4((cross(normal,tangent)),0.0)).xyz;
float Length_Q180=length(Dir_World_Q190);
float Length_Q181=length(Dir_World_Q191);
float Quotient_Q184=Length_Q180/Length_Q181;
float Quotient_Q195=_Radius_/Length_Q181;
vec2 Result_Q193;
Result_Q193=vec2((uv.x-0.5)*Length_Q180/Length_Q181,(uv.y-0.5));
float Result_Q198=_Fixed_Radius_ ? Quotient_Q195 : _Radius_;
vec3 Vec3_Q183=vec3(Quotient_Q184,Result_Q198,0);
vec3 Position=Pos_World_Q189;
vec3 Normal=vec3(0,0,0);
vec2 UV=Result_Q193;
vec3 Tangent=Vec3_Q183;
vec3 Binormal=vec3(0,0,0);
vec4 Color=color;
gl_Position=viewProjection*vec4(Position,1);
vUV=UV;
vTangent=Tangent;
}
`;ht.ShadersStore[Vo]=zo;class Wo extends $t{constructor(){super(),this._needNormals=!0,this._needUVs=!0,this.rebuild()}}class Ht extends qt{constructor(t,e){super(t,e),this.color=new A(1,1,1,.05),this.radius=.12,this.fixedRadius=!0,this._filterWidth=1,this.glowFraction=0,this.glowMax=.5,this.glowFalloff=2,this.alphaMode=Lt.ALPHA_COMBINE,this.backFaceCulling=!1}needAlphaBlending(){return!0}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(t,e){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e.materialDefines||(e.materialDefines=new Wo);const i=e.materialDefines,s=this.getScene();if(this._isReadyForSubMesh(e))return!0;const o=s.getEngine();if(Q.PrepareDefinesForAttributes(t,i,!0,!1),i.isDirty){i.markAsProcessed(),s.resetCachedMaterial();const r=new ne;i.FOG&&r.addFallback(1,"FOG"),Q.HandleFallbacksForShadows(i,r),i.IMAGEPROCESSINGPOSTPROCESS=s.imageProcessingConfiguration.applyByPostProcess;const a=[P.PositionKind];i.NORMAL&&a.push(P.NormalKind),i.UV1&&a.push(P.UVKind),i.UV2&&a.push(P.UV2Kind),i.VERTEXCOLOR&&a.push(P.ColorKind),i.TANGENT&&a.push(P.TangentKind),Q.PrepareAttributesForInstances(a,i);const l="mrdlInnerquad",h=i.toString(),d=["world","worldView","worldViewProjection","view","projection","viewProjection","cameraPosition","_Color_","_Radius_","_Fixed_Radius_","_Filter_Width_","_Glow_Fraction_","_Glow_Max_","_Glow_Falloff_"],f=[],g=new Array;Q.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:i,maxSimultaneousLights:4}),e.setEffect(s.getEngine().createEffect(l,{attributes:a,uniformsNames:d,uniformBuffersNames:g,samplers:f,defines:h,fallbacks:r,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),i)}return!e.effect||!e.effect.isReady()?!1:(i._renderId=s.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(t,e,i){const s=this.getScene();if(!i.materialDefines)return;const r=i.effect;r&&(this._activeEffect=r,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),this._activeEffect.setVector3("cameraPosition",s.activeCamera.position),this._activeEffect.setDirectColor4("_Color_",this.color),this._activeEffect.setFloat("_Radius_",this.radius),this._activeEffect.setFloat("_Fixed_Radius_",this.fixedRadius?1:0),this._activeEffect.setFloat("_Filter_Width_",this._filterWidth),this._activeEffect.setFloat("_Glow_Fraction_",this.glowFraction),this._activeEffect.setFloat("_Glow_Max_",this.glowMax),this._activeEffect.setFloat("_Glow_Falloff_",this.glowFalloff),this._afterBind(e,this._activeEffect))}getAnimatables(){return[]}dispose(t){super.dispose(t)}clone(t){return X.Clone(()=>new Ht(t,this.getScene()),this)}serialize(){const t=X.Serialize(this);return t.customType="BABYLON.MRDLInnerquadMaterial",t}getClassName(){return"MRDLInnerquadMaterial"}static Parse(t,e,i){return X.Parse(()=>new Ht(t.name,e),t,e,i)}}n([_()],Ht.prototype,"color",void 0);n([_()],Ht.prototype,"radius",void 0);n([_()],Ht.prototype,"fixedRadius",void 0);n([_()],Ht.prototype,"glowFraction",void 0);n([_()],Ht.prototype,"glowMax",void 0);n([_()],Ht.prototype,"glowFalloff",void 0);N("BABYLON.GUI.MRDLInnerquadMaterial",Ht);class ni{get scene(){return this._scene}get utilityLayer(){return this._utilityLayer}get controlScaling(){return this._customControlScaling}set controlScaling(t){if(this._customControlScaling!==t&&t>0){const e=t/this._customControlScaling;this._customControlScaling=t,this._rootContainer.children.forEach(i=>{i.scaling.scaleInPlace(e),t!==1&&(i._isScaledByManager=!0)})}}get useRealisticScaling(){return this.controlScaling===ni.MRTK_REALISTIC_SCALING}set useRealisticScaling(t){this.controlScaling=t?ni.MRTK_REALISTIC_SCALING:1}constructor(t){this._customControlScaling=1,this._lastControlOver={},this._lastControlDown={},this.onPickedPointChangedObservable=new B,this.onPickingObservable=new B,this._sharedMaterials={},this._touchSharedMaterials={},this._scene=t||Wt.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(()=>{this._sceneDisposeObserver=null,this._utilityLayer=null,this.dispose()}),this._utilityLayer=Ss._CreateDefaultUtilityLayerFromScene(this._scene),this._utilityLayer.onlyCheckPointerDownEvents=!1,this._utilityLayer.pickUtilitySceneFirst=!1,this._utilityLayer.mainSceneTrackerPredicate=i=>{var s,o,r;return i&&((r=(o=(s=i.reservedDataStore)===null||s===void 0?void 0:s.GUI3D)===null||o===void 0?void 0:o.control)===null||r===void 0?void 0:r._node)},this._rootContainer=new K("RootContainer"),this._rootContainer._host=this;const e=this._utilityLayer.utilityLayerScene;this._pointerOutObserver=this._utilityLayer.onPointerOutObservable.add(i=>{this._handlePointerOut(i,!0)}),this._pointerObserver=e.onPointerObservable.add(i=>{this._doPicking(i)}),this._utilityLayer.utilityLayerScene.autoClear=!1,this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil=!1,new ws("hemi",c.Up(),this._utilityLayer.utilityLayerScene)}_handlePointerOut(t,e){const i=this._lastControlOver[t];i&&(i._onPointerOut(i),delete this._lastControlOver[t]),e&&this._lastControlDown[t]&&(this._lastControlDown[t].forcePointerUp(),delete this._lastControlDown[t]),this.onPickedPointChangedObservable.notifyObservers(null)}_doPicking(t){var e,i,s;if(!this._utilityLayer||!this._utilityLayer.shouldRender||!this._utilityLayer.utilityLayerScene.activeCamera)return!1;const o=t.event,r=o.pointerId||0,a=o.button,l=t.pickInfo;if(l&&this.onPickingObservable.notifyObservers(l.pickedMesh),!l||!l.hit)return this._handlePointerOut(r,t.type===L.POINTERUP),!1;l.pickedPoint&&this.onPickedPointChangedObservable.notifyObservers(l.pickedPoint);const h=(i=(e=l.pickedMesh.reservedDataStore)===null||e===void 0?void 0:e.GUI3D)===null||i===void 0?void 0:i.control;return h&&!h._processObservables(t.type,l.pickedPoint,((s=l.originMesh)===null||s===void 0?void 0:s.position)||null,r,a)&&t.type===L.POINTERMOVE&&(this._lastControlOver[r]&&this._lastControlOver[r]._onPointerOut(this._lastControlOver[r]),delete this._lastControlOver[r]),t.type===L.POINTERUP&&(this._lastControlDown[o.pointerId]&&(this._lastControlDown[o.pointerId].forcePointerUp(),delete this._lastControlDown[o.pointerId]),(o.pointerType==="touch"||o.pointerType==="xr"&&this._scene.getEngine().hostInformation.isMobile)&&this._handlePointerOut(r,!1)),!0}get rootContainer(){return this._rootContainer}containsControl(t){return this._rootContainer.containsControl(t)}addControl(t){return this._rootContainer.addControl(t),this._customControlScaling!==1&&(t.scaling.scaleInPlace(this._customControlScaling),t._isScaledByManager=!0),this}removeControl(t){return this._rootContainer.removeControl(t),t._isScaledByManager&&(t.scaling.scaleInPlace(1/this._customControlScaling),t._isScaledByManager=!1),this}dispose(){this._rootContainer.dispose();for(const e in this._sharedMaterials)Object.prototype.hasOwnProperty.call(this._sharedMaterials,e)&&this._sharedMaterials[e].dispose();this._sharedMaterials={};for(const e in this._touchSharedMaterials)Object.prototype.hasOwnProperty.call(this._touchSharedMaterials,e)&&this._touchSharedMaterials[e].dispose();this._touchSharedMaterials={},this._pointerOutObserver&&this._utilityLayer&&(this._utilityLayer.onPointerOutObservable.remove(this._pointerOutObserver),this._pointerOutObserver=null),this.onPickedPointChangedObservable.clear(),this.onPickingObservable.clear();const t=this._utilityLayer?this._utilityLayer.utilityLayerScene:null;t&&this._pointerObserver&&(t.onPointerObservable.remove(this._pointerObserver),this._pointerObserver=null),this._scene&&this._sceneDisposeObserver&&(this._scene.onDisposeObservable.remove(this._sceneDisposeObserver),this._sceneDisposeObserver=null),this._utilityLayer&&this._utilityLayer.dispose()}}ni.MRTK_REALISTIC_SCALING=.032;export{K as $,lt as A,zt as B,u as C,ss as D,$i as E,Zi as F,ni as G,ro as H,T as I,Ls as J,Pe as K,Ms as L,Uo as M,Ji as N,Xo as O,Jt as P,Ot as Q,ft as R,Os as S,U as T,ke as U,wi as V,ai as W,Be as X,ts as Y,kt as Z,ks as _,I as a,je as a0,or as a1,xe as a2,ae as a3,rr as a4,Ye as a5,_r as a6,lr as a7,hr as a8,cr as a9,et as aA,Qi as aB,tr as aC,Si as aD,ao as aE,er as aF,As as aG,Pi as aH,Zt as aI,vi as aJ,xi as aK,es as aa,Qs as ab,Oi as ac,is as ad,dr as ae,ar as af,nr as ag,Rt as ah,Ue as ai,Xe as aj,Ko as ak,qi as al,jo as am,Zo as an,$o as ao,qo as ap,_o as aq,Es as ar,Jo as as,no as at,Gs as au,os as av,Kt as aw,sr as ax,Ri as ay,M as az,Go as b,Fs as c,li as d,Ii as e,Yo as f,st as g,O as h,k as i,v as j,x as k,H as l,gt as m,F as n,Ht as o,ut as p,Ds as q,ir as r,Ne as s,Ns as t,Tt as u,vt as v,_e as w,xt as x,Y as y,Le as z};
//# sourceMappingURL=gui3DManager-0cfa6e39.js.map
