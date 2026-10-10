var Jv=Object.create;var Ic=Object.defineProperty,$v=Object.defineProperties,ex=Object.getOwnPropertyDescriptor,tx=Object.getOwnPropertyDescriptors,ix=Object.getOwnPropertyNames,Jp=Object.getOwnPropertySymbols,nx=Object.getPrototypeOf,$p=Object.prototype.hasOwnProperty,sx=Object.prototype.propertyIsEnumerable;var bi=Math.pow,Sd=(n,e,t)=>e in n?Ic(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Is=(n,e)=>{for(var t in e||(e={}))$p.call(e,t)&&Sd(n,t,e[t]);if(Jp)for(var t of Jp(e))sx.call(e,t)&&Sd(n,t,e[t]);return n},Uc=(n,e)=>$v(n,tx(e));var rx=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},ax=(n,e)=>{for(var t in e)Ic(n,t,{get:e[t],enumerable:!0})},ox=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ix(e))!$p.call(n,s)&&s!==t&&Ic(n,s,{get:()=>e[s],enumerable:!(i=ex(e,s))||i.enumerable});return n};var em=(n,e,t)=>(t=n!=null?Jv(nx(n)):{},ox(e||!n||!n.__esModule?Ic(t,"default",{value:n,enumerable:!0}):t,n));var W=(n,e,t)=>Sd(n,typeof e!="symbol"?e+"":e,t);var Ai=(n,e,t)=>new Promise((i,s)=>{var r=l=>{try{o(t.next(l))}catch(c){s(c)}},a=l=>{try{o(t.throw(l))}catch(c){s(c)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,a);o((t=t.apply(n,e)).next())});var Ip=rx((zw,Xa)=>{"use strict";Xa.exports=RM;Xa.exports.toDate=DM;Xa.exports.toJulianDay=av;Xa.exports.toMillisecondsInJulianDay=ov;Xa.exports.fromJulianDayAndMilliseconds=PM;var Wa=864e5,sv=Wa/2,rv=24405875e-1,CM=2440587;function RM(n){return(av(n)+ov(n)/Wa).toFixed(6)}function DM(n){return new Date((Number(n)-rv)*Wa)}function av(n){return~~((+n+sv)/Wa)+CM}function ov(n){return(+n+sv)%Wa}function PM(n,e){return(n-rv)*Wa+e}});var ei={};ax(ei,{ACESFilmicToneMapping:()=>Lh,AddEquation:()=>fn,AddOperation:()=>Bf,AdditiveAnimationBlendMode:()=>Xh,AdditiveBlending:()=>Un,AgXToneMapping:()=>Nh,AlphaFormat:()=>Vh,AlwaysCompare:()=>qf,AlwaysDepth:()=>Ys,AlwaysStencilFunc:()=>zf,AmbientLight:()=>ur,AnimationAction:()=>Ml,AnimationClip:()=>bs,AnimationLoader:()=>Xu,AnimationMixer:()=>nh,AnimationObjectGroup:()=>ih,AnimationUtils:()=>Wu,ArcCurve:()=>Fo,ArrayCamera:()=>Sl,ArrowHelper:()=>bh,AttachedBindMode:()=>bu,Audio:()=>bl,AudioAnalyser:()=>th,AudioContext:()=>Ea,AudioListener:()=>$u,AudioLoader:()=>Qu,AxesHelper:()=>ba,BackSide:()=>Ot,BasicDepthPacking:()=>xn,BasicShadowMap:()=>fg,BatchedMesh:()=>Do,BezierInterpolant:()=>ul,Bone:()=>na,BooleanKeyframeTrack:()=>Dn,Box2:()=>Tl,Box3:()=>Wt,Box3Helper:()=>Sh,BoxGeometry:()=>_s,BoxHelper:()=>yh,BufferAttribute:()=>He,BufferGeometry:()=>Ie,BufferGeometryLoader:()=>_l,ByteType:()=>Hh,Cache:()=>rn,Camera:()=>Qn,CameraHelper:()=>_h,CanvasTexture:()=>zu,CapsuleGeometry:()=>Lo,CatmullRomCurve3:()=>Ho,CineonToneMapping:()=>Uh,CircleGeometry:()=>Bo,ClampToEdgeWrapping:()=>gi,Clock:()=>ch,Color:()=>oe,ColorKeyframeTrack:()=>xa,ColorManagement:()=>rt,Compatibility:()=>e0,CompressedArrayTexture:()=>Hu,CompressedCubeTexture:()=>ku,CompressedTexture:()=>tr,CompressedTextureLoader:()=>Yu,ConeGeometry:()=>aa,ConstantAlphaFactor:()=>If,ConstantColorFactor:()=>Df,Controls:()=>Aa,CubeCamera:()=>yl,CubeDepthTexture:()=>Uo,CubeReflectionMapping:()=>pn,CubeRefractionMapping:()=>Jn,CubeTexture:()=>xs,CubeTextureLoader:()=>qu,CubeUVReflectionMapping:()=>fr,CubicBezierCurve:()=>oa,CubicBezierCurve3:()=>ko,CubicInterpolant:()=>ll,CullFaceBack:()=>wh,CullFaceFront:()=>xf,CullFaceFrontBack:()=>dg,CullFaceNone:()=>vf,Curve:()=>Di,CurvePath:()=>Go,CustomBlending:()=>Ta,CustomToneMapping:()=>Bh,CylinderGeometry:()=>ra,Cylindrical:()=>uh,Data3DTexture:()=>Ks,DataArrayTexture:()=>Zs,DataTexture:()=>vi,DataTextureLoader:()=>ju,DataUtils:()=>Cu,DecrementStencilOp:()=>Ig,DecrementWrapStencilOp:()=>Lg,DefaultLoadingManager:()=>Jf,DepthFormat:()=>an,DepthStencilFormat:()=>gn,DepthTexture:()=>yi,DetachedBindMode:()=>Nf,DirectionalLight:()=>pl,DirectionalLightHelper:()=>xh,DiscreteInterpolant:()=>cl,DodecahedronGeometry:()=>No,DoubleSide:()=>Qt,DstAlphaFactor:()=>Tf,DstColorFactor:()=>wf,DynamicCopyUsage:()=>jg,DynamicDrawUsage:()=>gc,DynamicReadUsage:()=>Xg,EdgesGeometry:()=>Oo,EllipseCurve:()=>ir,EqualCompare:()=>Wf,EqualDepth:()=>_o,EqualStencilFunc:()=>Fg,EquirectangularReflectionMapping:()=>Ra,EquirectangularRefractionMapping:()=>Da,Euler:()=>Xi,EventDispatcher:()=>Zt,ExternalTexture:()=>sa,ExtrudeGeometry:()=>Yo,FileLoader:()=>Pi,Float16BufferAttribute:()=>Lu,Float32BufferAttribute:()=>_e,FloatType:()=>jt,Fog:()=>Mo,FogExp2:()=>Ao,FramebufferTexture:()=>Fu,FrontSide:()=>hn,Frustum:()=>Rn,FrustumArray:()=>Ro,GLBufferAttribute:()=>oh,GLSL1:()=>Kg,GLSL3:()=>Yh,GreaterCompare:()=>Xf,GreaterDepth:()=>qs,GreaterEqualCompare:()=>pc,GreaterEqualDepth:()=>yo,GreaterEqualStencilFunc:()=>Gg,GreaterStencilFunc:()=>kg,GridHelper:()=>Ts,Group:()=>sn,HTMLTexture:()=>Gu,HalfFloatType:()=>ji,HemisphereLight:()=>dl,HemisphereLightHelper:()=>gh,IcosahedronGeometry:()=>qo,ImageBitmapLoader:()=>Ku,ImageLoader:()=>Ms,ImageUtils:()=>bo,IncrementStencilOp:()=>Pg,IncrementWrapStencilOp:()=>Ug,InstancedBufferAttribute:()=>jn,InstancedBufferGeometry:()=>xl,InstancedInterleavedBuffer:()=>ah,InstancedMesh:()=>Co,Int16BufferAttribute:()=>Iu,Int32BufferAttribute:()=>Uu,Int8BufferAttribute:()=>Ru,IntType:()=>Dl,InterleavedBuffer:()=>$s,InterleavedBufferAttribute:()=>ms,Interpolant:()=>Kn,InterpolateBezier:()=>Au,InterpolateDiscrete:()=>Zr,InterpolateLinear:()=>Eo,InterpolateSmooth:()=>uo,InterpolationSamplingMode:()=>$g,InterpolationSamplingType:()=>Jg,InvertStencilOp:()=>Bg,KeepStencilOp:()=>ho,KeyframeTrack:()=>Si,LOD:()=>vs,LatheGeometry:()=>jo,Layers:()=>Qs,LessCompare:()=>Vf,LessDepth:()=>xo,LessEqualCompare:()=>fc,LessEqualDepth:()=>qn,LessEqualStencilFunc:()=>Hg,LessStencilFunc:()=>Og,Light:()=>un,LightProbe:()=>gl,LightShadow:()=>lr,Line:()=>xi,Line3:()=>dh,LineBasicMaterial:()=>Rt,LineCurve:()=>la,LineCurve3:()=>zo,LineDashedMaterial:()=>ol,LineLoop:()=>Po,LineSegments:()=>ni,LinearFilter:()=>mt,LinearInterpolant:()=>va,LinearMipMapLinearFilter:()=>xg,LinearMipMapNearestFilter:()=>vg,LinearMipmapLinearFilter:()=>mn,LinearMipmapNearestFilter:()=>Pa,LinearSRGBColorSpace:()=>Cn,LinearToneMapping:()=>Ph,LinearTransfer:()=>Qr,Loader:()=>Kt,LoaderUtils:()=>Sa,LoadingManager:()=>As,LoopOnce:()=>Of,LoopPingPong:()=>Hf,LoopRepeat:()=>Ff,MOUSE:()=>Hi,Material:()=>Ct,MaterialBlending:()=>pg,MaterialLoader:()=>vl,MathUtils:()=>qh,Matrix2:()=>hh,Matrix3:()=>Ze,Matrix4:()=>Ce,MaxEquation:()=>bf,Mesh:()=>et,MeshBasicMaterial:()=>ci,MeshDepthMaterial:()=>ma,MeshDistanceMaterial:()=>ga,MeshLambertMaterial:()=>rl,MeshMatcapMaterial:()=>al,MeshNormalMaterial:()=>sl,MeshPhongMaterial:()=>rr,MeshPhysicalMaterial:()=>il,MeshStandardMaterial:()=>Es,MeshToonMaterial:()=>nl,MinEquation:()=>Ef,MirroredRepeatWrapping:()=>jr,MixOperation:()=>Lf,MultiplyBlending:()=>Rh,MultiplyOperation:()=>Ca,NearestFilter:()=>Nt,NearestMipMapLinearFilter:()=>gg,NearestMipMapNearestFilter:()=>mg,NearestMipmapLinearFilter:()=>pr,NearestMipmapNearestFilter:()=>Fh,NeutralToneMapping:()=>Oh,NeverCompare:()=>Gf,NeverDepth:()=>vo,NeverStencilFunc:()=>Ng,NoBlending:()=>Dt,NoColorSpace:()=>Ii,NoNormalPacking:()=>Tg,NoToneMapping:()=>qi,NormalAnimationBlendMode:()=>dc,NormalBlending:()=>dn,NormalGAPacking:()=>Cg,NormalRGPacking:()=>wg,NotEqualCompare:()=>Yf,NotEqualDepth:()=>So,NotEqualStencilFunc:()=>zg,NumberKeyframeTrack:()=>ar,Object3D:()=>st,ObjectLoader:()=>Zu,ObjectSpaceNormalMap:()=>kf,OctahedronGeometry:()=>fa,OneFactor:()=>Cs,OneMinusConstantAlphaFactor:()=>Uf,OneMinusConstantColorFactor:()=>Pf,OneMinusDstAlphaFactor:()=>Cl,OneMinusDstColorFactor:()=>Cf,OneMinusSrcAlphaFactor:()=>Dh,OneMinusSrcColorFactor:()=>Mf,OrthographicCamera:()=>In,PCFShadowMap:()=>Ma,PCFSoftShadowMap:()=>_f,PMREMGenerator:()=>Sc,Path:()=>ys,PerspectiveCamera:()=>Ut,Plane:()=>wi,PlaneGeometry:()=>Oi,PlaneHelper:()=>Eh,PointLight:()=>cr,PointLightHelper:()=>mh,Points:()=>_i,PointsMaterial:()=>ln,PolarGridHelper:()=>vh,PolyhedronGeometry:()=>Zn,PositionalAudio:()=>eh,PropertyBinding:()=>Et,PropertyMixer:()=>Al,QuadraticBezierCurve:()=>ca,QuadraticBezierCurve3:()=>ua,Quaternion:()=>kt,QuaternionKeyframeTrack:()=>or,QuaternionLinearInterpolant:()=>hl,R11_EAC_Format:()=>Vl,RED_GREEN_RGTC2_Format:()=>Fa,RED_RGTC1_Format:()=>cc,REVISION:()=>ws,RG11_EAC_Format:()=>Oa,RGBADepthPacking:()=>bg,RGBAFormat:()=>li,RGBAIntegerFormat:()=>Bl,RGBA_ASTC_10x10_Format:()=>nc,RGBA_ASTC_10x5_Format:()=>ec,RGBA_ASTC_10x6_Format:()=>tc,RGBA_ASTC_10x8_Format:()=>ic,RGBA_ASTC_12x10_Format:()=>sc,RGBA_ASTC_12x12_Format:()=>rc,RGBA_ASTC_4x4_Format:()=>Yl,RGBA_ASTC_5x4_Format:()=>ql,RGBA_ASTC_5x5_Format:()=>jl,RGBA_ASTC_6x5_Format:()=>Zl,RGBA_ASTC_6x6_Format:()=>Kl,RGBA_ASTC_8x5_Format:()=>Ql,RGBA_ASTC_8x6_Format:()=>Jl,RGBA_ASTC_8x8_Format:()=>$l,RGBA_BPTC_Format:()=>ac,RGBA_ETC2_EAC_Format:()=>Gl,RGBA_PVRTC_2BPPV1_Format:()=>Hl,RGBA_PVRTC_4BPPV1_Format:()=>Fl,RGBA_S3TC_DXT1_Format:()=>La,RGBA_S3TC_DXT3_Format:()=>Ba,RGBA_S3TC_DXT5_Format:()=>Na,RGBDepthPacking:()=>Ag,RGBFormat:()=>Wh,RGBIntegerFormat:()=>_g,RGB_BPTC_SIGNED_Format:()=>oc,RGB_BPTC_UNSIGNED_Format:()=>lc,RGB_ETC1_Format:()=>kl,RGB_ETC2_Format:()=>zl,RGB_PVRTC_2BPPV1_Format:()=>Ol,RGB_PVRTC_4BPPV1_Format:()=>Nl,RGB_S3TC_DXT1_Format:()=>Ua,RGDepthPacking:()=>Mg,RGFormat:()=>vn,RGIntegerFormat:()=>Ll,RawShaderMaterial:()=>pa,Ray:()=>on,Raycaster:()=>lh,RectAreaLight:()=>ml,RedFormat:()=>Ul,RedIntegerFormat:()=>Ia,ReinhardToneMapping:()=>Ih,RenderObjectRefreshType:()=>t0,RenderTarget:()=>ea,RenderTarget3D:()=>sh,RepeatWrapping:()=>qr,ReplaceStencilOp:()=>Dg,ReverseSubtractEquation:()=>Sf,RingGeometry:()=>sr,SIGNED_R11_EAC_Format:()=>Wl,SIGNED_RED_GREEN_RGTC2_Format:()=>hc,SIGNED_RED_RGTC1_Format:()=>uc,SIGNED_RG11_EAC_Format:()=>Xl,SRGBColorSpace:()=>je,SRGBTransfer:()=>xt,Scene:()=>Ri,ShaderChunk:()=>it,ShaderLib:()=>_n,ShaderMaterial:()=>Ke,ShadowMaterial:()=>tl,Shape:()=>Ss,ShapeGeometry:()=>Zo,ShapePath:()=>Ah,ShapeUtils:()=>Wi,ShortType:()=>kh,Skeleton:()=>wo,SkeletonHelper:()=>ph,SkinnedMesh:()=>To,Source:()=>Mu,Sphere:()=>qt,SphereGeometry:()=>cn,Spherical:()=>hr,SphericalHarmonics3:()=>ya,SplineCurve:()=>ha,SpotLight:()=>fl,SpotLightHelper:()=>fh,Sprite:()=>er,SpriteMaterial:()=>gs,SrcAlphaFactor:()=>wa,SrcAlphaSaturateFactor:()=>Rf,SrcColorFactor:()=>Af,StaticCopyUsage:()=>qg,StaticDrawUsage:()=>mc,StaticReadUsage:()=>Wg,StereoCamera:()=>Ju,StreamCopyUsage:()=>Zg,StreamDrawUsage:()=>Vg,StreamReadUsage:()=>Yg,StringKeyframeTrack:()=>Pn,SubtractEquation:()=>yf,SubtractiveBlending:()=>Ch,TOUCH:()=>Yi,TangentSpaceNormalMap:()=>Ln,TetrahedronGeometry:()=>Ko,Texture:()=>Lt,TextureLoader:()=>Fi,TextureSource:()=>Vi,TextureUtils:()=>Mh,Timer:()=>El,TimestampQuery:()=>Qg,TorusGeometry:()=>Qo,TorusKnotGeometry:()=>Jo,Triangle:()=>nn,TriangleFanDrawMode:()=>Eg,TriangleStripDrawMode:()=>Sg,TrianglesDrawMode:()=>yg,TubeGeometry:()=>$o,UVMapping:()=>Rl,Uint16BufferAttribute:()=>ta,Uint32BufferAttribute:()=>ia,Uint8BufferAttribute:()=>Du,Uint8ClampedBufferAttribute:()=>Pu,Uniform:()=>tt,UniformsGroup:()=>rh,UniformsLib:()=>pe,UniformsUtils:()=>vc,UnsignedByteType:()=>At,UnsignedInt101111Type:()=>Gh,UnsignedInt248Type:()=>$n,UnsignedInt5999Type:()=>zh,UnsignedIntType:()=>Ei,UnsignedShort4444Type:()=>Pl,UnsignedShort5551Type:()=>Il,UnsignedShortType:()=>mr,VSMShadowMap:()=>dr,Vector2:()=>X,Vector3:()=>w,Vector4:()=>ut,VectorKeyframeTrack:()=>_a,VideoFrameTexture:()=>Ou,VideoTexture:()=>Io,WebGL3DRenderTarget:()=>wu,WebGLArrayRenderTarget:()=>Tu,WebGLCoordinateSystem:()=>Ci,WebGLCubeRenderTarget:()=>Ec,WebGLRenderTarget:()=>at,WebGLRenderer:()=>bc,WebGLUtils:()=>X0,WebGPUCoordinateSystem:()=>fs,WebXRController:()=>Js,WireframeGeometry:()=>el,WrapAroundEnding:()=>Kr,ZeroCurvatureEnding:()=>hs,ZeroFactor:()=>wl,ZeroSlopeEnding:()=>ds,ZeroStencilOp:()=>Rg,createCanvasElement:()=>jf,error:()=>Le,getConsoleFunction:()=>s0,log:()=>$r,setConsoleFunction:()=>n0,warn:()=>fe,warnOnce:()=>wn});var ws="186",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,wh=1,xf=2,dg=3,fg=0,Ma=1,_f=2,dr=3,hn=0,Ot=1,Qt=2,Dt=0,dn=1,Un=2,Ch=3,Rh=4,Ta=5,pg=6,fn=100,yf=101,Sf=102,Ef=103,bf=104,wl=200,Cs=201,Af=202,Mf=203,wa=204,Dh=205,Tf=206,Cl=207,wf=208,Cf=209,Rf=210,Df=211,Pf=212,If=213,Uf=214,vo=0,Ys=1,xo=2,qn=3,_o=4,yo=5,qs=6,So=7,Ca=0,Lf=1,Bf=2,qi=0,Ph=1,Ih=2,Uh=3,Lh=4,Bh=5,Nh=6,Oh=7,bu="attached",Nf="detached",Rl=300,pn=301,Jn=302,Ra=303,Da=304,fr=306,qr=1e3,gi=1001,jr=1002,Nt=1003,Fh=1004,mg=1004,pr=1005,gg=1005,mt=1006,Pa=1007,vg=1007,mn=1008,xg=1008,At=1009,Hh=1010,kh=1011,mr=1012,Dl=1013,Ei=1014,jt=1015,ji=1016,Pl=1017,Il=1018,$n=1020,zh=35902,Gh=35899,Vh=1021,Wh=1022,li=1023,an=1026,gn=1027,Ul=1028,Ia=1029,vn=1030,Ll=1031,_g=1032,Bl=1033,Ua=33776,La=33777,Ba=33778,Na=33779,Nl=35840,Ol=35841,Fl=35842,Hl=35843,kl=36196,zl=37492,Gl=37496,Vl=37488,Wl=37489,Oa=37490,Xl=37491,Yl=37808,ql=37809,jl=37810,Zl=37811,Kl=37812,Ql=37813,Jl=37814,$l=37815,ec=37816,tc=37817,ic=37818,nc=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,uc=36284,Fa=36285,hc=36286,Of=2200,Ff=2201,Hf=2202,Zr=2300,Eo=2301,uo=2302,Au=2303,hs=2400,ds=2401,Kr=2402,dc=2500,Xh=2501,yg=0,Sg=1,Eg=2,xn=3200,bg=3201,Ag=3202,Mg=3203,Ln=0,kf=1,Ii="",je="srgb",Cn="srgb-linear",Qr="linear",xt="srgb",Tg="",wg="rg",Cg="ga",Rg=0,ho=7680,Dg=7681,Pg=7682,Ig=7683,Ug=34055,Lg=34056,Bg=5386,Ng=512,Og=513,Fg=514,Hg=515,kg=516,zg=517,Gg=518,zf=519,Gf=512,Vf=513,Wf=514,fc=515,Xf=516,Yf=517,pc=518,qf=519,mc=35044,gc=35048,Vg=35040,Wg=35045,Xg=35049,Yg=35041,qg=35046,jg=35050,Zg=35042,Kg="100",Yh="300 es",Ci=2e3,fs=2001,Qg={COMPUTE:"compute",RENDER:"render"},Jg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},$g={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},e0={TEXTURE_COMPARE:"depthTextureCompare"},t0={NONE:0,SHARED:1,FULL:2};function lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}var cx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xr(n,e){return new cx[n](e)}function i0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jf(){let n=Jr("canvas");return n.style.display="block",n}var tm={},ps=null;function n0(n){ps=n}function s0(){return ps}function $r(...n){let e="THREE."+n.shift();ps?ps("log",e,...n):console.log(e,...n)}function r0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function fe(...n){n=r0(n);let e="THREE."+n.shift();if(ps)ps("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Le(...n){n=r0(n);let e="THREE."+n.shift();if(ps)ps("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function wn(...n){let e=n.join(" ");e in tm||(tm[e]=!0,fe(...n))}function a0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var o0={[vo]:Ys,[xo]:qs,[_o]:So,[qn]:yo,[Ys]:vo,[qs]:xo,[So]:_o,[yo]:qn},Zt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],im=1234567,Xs=Math.PI/180,js=180/Math.PI;function Ni(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Zf(n,e){return(n%e+e)%e}function ux(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hx(n,e,t){return n!==e?(t-n)/(e-n):0}function fo(n,e,t){return(1-t)*n+t*e}function dx(n,e,t,i){return fo(n,e,1-Math.exp(-t*i))}function fx(n,e=1){return e-Math.abs(Zf(n,e*2)-e)}function px(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vx(n,e){return n+Math.random()*(e-n)}function xx(n){return n*(.5-Math.random())}function _x(n){n!==void 0&&(im=n);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yx(n){return n*Xs}function Sx(n){return n*js}function Ex(n){return n>0&&Number.isInteger(n)&&bi(2,Math.round(Math.log2(n)))===n}function bx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ax(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mx(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*p,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*p,o*c);break;case"ZYZ":n.set(l*p,l*f,o*u,o*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qh={DEG2RAD:Xs,RAD2DEG:js,generateUUID:Ni,clamp:Xe,euclideanModulo:Zf,mapLinear:ux,inverseLerp:hx,lerp:fo,damp:dx,pingpong:fx,smoothstep:px,smootherstep:mx,randInt:gx,randFloat:vx,randFloatSpread:xx,seededRandom:_x,degToRad:yx,radToDeg:Sx,isPowerOfTwo:Ex,ceilPowerOfTwo:bx,floorPowerOfTwo:Ax,setQuaternionFromProperEuler:Mx,normalize:$e,denormalize:mi},tp=class tp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;var X=tp,kt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(h!==v||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,o=Math.sin(o*_)/b,l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+v*o}else{l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+v*o;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ip=class ip{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ip.prototype.isVector3=!0;var w=ip,Ed=new w,nm=new kt,np=class np{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=s[0],m=s[3],g=s[6],_=s[1],b=s[4],x=s[7],A=s[2],E=s[5],C=s[8];return r[0]=a*v+o*_+l*A,r[3]=a*m+o*b+l*E,r[6]=a*g+o*x+l*C,r[1]=c*v+u*_+h*A,r[4]=c*m+u*b+h*E,r[7]=c*g+u*x+h*C,r[2]=d*v+f*_+p*A,r[5]=d*m+f*b+p*E,r[8]=d*g+f*x+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return wn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return wn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return wn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;var Ze=np,bd=new Ze,sm=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){let n={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cn]:{primaries:e,whitePoint:i,transfer:Qr,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}var rt=Tx();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mr,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=Jr("canvas")),Mr.width=e.width,Mr.height=e.height;let s=Mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wx=0,Vi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ad(s[a].image)):r.push(Ad(s[a]))}else r=Ad(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ad(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var Mu=class extends Vi{constructor(e=null){wn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},Cx=0,Md=new w,Lt=class n extends Zt{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=gi,s=gi,r=mt,a=mn,o=li,l=At,c=n.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ni(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Rl;Lt.DEFAULT_ANISOTROPY=1;var sp=class sp{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,A=(g+1)/2,E=(u+d)/4,C=(h+v)/4,y=(p+m)/4;return b>x&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=C/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=y/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sp.prototype.isVector4=!0;var ut=sp,ea=class extends Zt{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Lt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},at=class extends ea{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zs=class extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Tu=class extends at{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Zs(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Ks=class extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wu=class extends at{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Ks(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Th=class Th{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,p,v,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Th().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Dx)}lookAt(e,t,i){let s=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),rs.crossVectors(i,Li),rs.lengthSq()===0&&(Math.abs(i.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),rs.crossVectors(i,Li)),rs.normalize(),Lc.crossVectors(Li,rs),s[0]=rs.x,s[4]=Lc.x,s[8]=Li.x,s[1]=rs.y,s[5]=Lc.y,s[9]=Li.y,s[2]=rs.z,s[6]=Lc.z,s[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],_=i[3],b=i[7],x=i[11],A=i[15],E=s[0],C=s[4],y=s[8],T=s[12],D=s[1],P=s[5],I=s[9],H=s[13],N=s[2],F=s[6],Z=s[10],V=s[14],re=s[3],q=s[7],J=s[11],ee=s[15];return r[0]=a*E+o*D+l*N+c*re,r[4]=a*C+o*P+l*F+c*q,r[8]=a*y+o*I+l*Z+c*J,r[12]=a*T+o*H+l*V+c*ee,r[1]=u*E+h*D+d*N+f*re,r[5]=u*C+h*P+d*F+f*q,r[9]=u*y+h*I+d*Z+f*J,r[13]=u*T+h*H+d*V+f*ee,r[2]=p*E+v*D+m*N+g*re,r[6]=p*C+v*P+m*F+g*q,r[10]=p*y+v*I+m*Z+g*J,r[14]=p*T+v*H+m*V+g*ee,r[3]=_*E+b*D+x*N+A*re,r[7]=_*C+b*P+x*F+A*q,r[11]=_*y+b*I+x*Z+A*J,r[15]=_*T+b*H+x*V+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],_=l*f-c*d,b=o*f-c*h,x=o*d-l*h,A=a*f-c*u,E=a*d-l*u,C=a*h-o*u;return t*(v*_-m*b+g*x)-i*(p*_-m*A+g*E)+s*(p*b-v*A+g*C)-r*(p*x-v*E+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],_=t*o-i*a,b=t*l-s*a,x=t*c-r*a,A=i*l-s*o,E=i*c-r*o,C=s*c-r*l,y=u*v-h*p,T=u*m-d*p,D=u*g-f*p,P=h*m-d*v,I=h*g-f*v,H=d*g-f*m,N=_*H-b*I+x*P+A*D-E*T+C*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/N;return e[0]=(o*H-l*I+c*P)*F,e[1]=(s*I-i*H-r*P)*F,e[2]=(v*C-m*E+g*A)*F,e[3]=(d*E-h*C-f*A)*F,e[4]=(l*D-a*H-c*T)*F,e[5]=(t*H-s*D+r*T)*F,e[6]=(m*x-p*C-g*b)*F,e[7]=(u*C-d*x+f*b)*F,e[8]=(a*I-o*D+c*y)*F,e[9]=(i*D-t*I-r*y)*F,e[10]=(p*E-v*x+g*_)*F,e[11]=(h*x-u*E-f*_)*F,e[12]=(o*T-a*P-l*y)*F,e[13]=(t*P-i*T+s*y)*F,e[14]=(v*b-p*A-m*_)*F,e[15]=(u*A-h*b+d*_)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,p=r*h,v=a*u,m=a*h,g=o*h,_=l*c,b=l*u,x=l*h,A=i.x,E=i.y,C=i.z;return s[0]=(1-(v+g))*A,s[1]=(f+x)*A,s[2]=(p-b)*A,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+g))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(p+b)*C,s[9]=(m-_)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Tr.set(s[0],s[1],s[2]).length(),o=Tr.set(s[4],s[5],s[6]).length(),l=Tr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ji.copy(this);let c=1/a,u=1/o,h=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=u,Ji.elements[5]*=u,Ji.elements[6]*=u,Ji.elements[8]*=h,Ji.elements[9]*=h,Ji.elements[10]*=h,t.setFromRotationMatrix(Ji),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ci,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Ci)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fs)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ci,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Ci)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===fs)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Th.prototype.isMatrix4=!0;var Ce=Th,Tr=new w,Ji=new Ce,Rx=new w(0,0,0),Dx=new w(1,1,1),rs=new w,Lc=new w,Li=new w,am=new Ce,om=new kt,Xi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Px=0,lm=new w,wr=new kt,Hn=new Ce,Bc=new w,Ka=new w,Ix=new w,Ux=new kt,cm=new w(1,0,0),um=new w(0,1,0),hm=new w(0,0,1),dm={type:"added"},Lx={type:"removed"},Cr={type:"childadded",child:null},Td={type:"childremoved",child:null},st=class n extends Zt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Xi,i=new kt,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ze}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,t){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bc.copy(e):Bc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ka,Bc,this.up):Hn.lookAt(Bc,Ka,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(Hn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lx),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,Ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>Uc(Is({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>Is({},o)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};st.DEFAULT_UP=new w(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bx={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Zf(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=wd(a,r,e+1/3),this.g=wd(a,r,e),this.b=wd(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=je){function i(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let i=l0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return rt.workingToColorSpace(ai.copy(this),e),Math.round(Xe(ai.r*255,0,255))*65536+Math.round(Xe(ai.g*255,0,255))*256+Math.round(Xe(ai.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(ai.copy(this),t);let i=ai.r,s=ai.g,r=ai.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(ai.copy(this),t),e.r=ai.r,e.g=ai.g,e.b=ai.b,e}getStyle(e=je){rt.workingToColorSpace(ai.copy(this),e);let t=ai.r,i=ai.g,s=ai.b;return e!==je?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Nc);let i=fo(as.h,Nc.h,t),s=fo(as.s,Nc.s,t),r=fo(as.l,Nc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ai=new oe;oe.NAMES=l0;var Ao=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Mo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ri=class extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=new w,kn=new w,Cd=new w,zn=new w,Rr=new w,Dr=new w,fm=new w,Rd=new w,Dd=new w,Pd=new w,Id=new ut,Ud=new ut,Ld=new ut,nn=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$i.subVectors(e,t),s.cross($i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$i.subVectors(s,t),kn.subVectors(i,t),Cd.subVectors(e,t);let a=$i.dot($i),o=$i.dot(kn),l=$i.dot(Cd),c=kn.dot(kn),u=kn.dot(Cd),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Id.setScalar(0),Ud.setScalar(0),Ld.setScalar(0),Id.fromBufferAttribute(e,t),Ud.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Id,r.x),a.addScaledVector(Ud,r.y),a.addScaledVector(Ld,r.z),a}static isFrontFacing(e,t,i,s){return $i.subVectors(i,t),kn.subVectors(e,t),$i.cross(kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),$i.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Rr.subVectors(s,i),Dr.subVectors(r,i),Rd.subVectors(e,i);let l=Rr.dot(Rd),c=Dr.dot(Rd);if(l<=0&&c<=0)return t.copy(i);Dd.subVectors(e,s);let u=Rr.dot(Dd),h=Dr.dot(Dd);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Rr,a);Pd.subVectors(e,r);let f=Rr.dot(Pd),p=Dr.dot(Pd);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Dr,o);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return fm.subVectors(r,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(fm,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(i).addScaledVector(Rr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oc.copy(i.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Fc.subVectors(this.max,Qa),Pr.subVectors(e.a,Qa),Ir.subVectors(e.b,Qa),Ur.subVectors(e.c,Qa),os.subVectors(Ir,Pr),ls.subVectors(Ur,Ir),Us.subVectors(Pr,Ur);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Us.z,Us.y,os.z,0,-os.x,ls.z,0,-ls.x,Us.z,0,-Us.x,-os.y,os.x,0,-ls.y,ls.x,0,-Us.y,Us.x,0];return!Bd(t,Pr,Ir,Ur,Fc)||(t=[1,0,0,0,1,0,0,0,1],!Bd(t,Pr,Ir,Ur,Fc))?!1:(Hc.crossVectors(os,ls),t=[Hc.x,Hc.y,Hc.z],Bd(t,Pr,Ir,Ur,Fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new w,new w,new w,new w,new w,new w,new w,new w],en=new w,Oc=new Wt,Pr=new w,Ir=new w,Ur=new w,os=new w,ls=new w,Us=new w,Qa=new w,Fc=new w,Hc=new w,Ls=new w;function Bd(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ls.fromArray(n,r);let o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=i.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Xn=Nx();function Nx(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ti(n){Math.abs(n)>65504&&fe("DataUtils.toHalfFloat(): Value out of range."),n=Xe(n,-65504,65504),Xn.floatView[0]=n;let e=Xn.uint32View[0],t=e>>23&511;return Xn.baseTable[t]+((e&8388607)>>Xn.shiftTable[t])}function lo(n){let e=n>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[e]+(n&1023)]+Xn.exponentTable[e],Xn.floatView[0]}var Cu=class{static toHalfFloat(e){return Ti(e)}static fromHalfFloat(e){return lo(e)}},Yt=new w,kc=new X,Ox=0,He=class extends Zt{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ox++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mc,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Ru=class extends He{constructor(e,t,i){super(new Int8Array(e),t,i)}},Du=class extends He{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Pu=class extends He{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Iu=class extends He{constructor(e,t,i){super(new Int16Array(e),t,i)}},ta=class extends He{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Uu=class extends He{constructor(e,t,i){super(new Int32Array(e),t,i)}},ia=class extends He{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Lu=class extends He{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=lo(this.array[e*this.itemSize]);return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=Ti(t),this}getY(e){let t=lo(this.array[e*this.itemSize+1]);return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=Ti(t),this}getZ(e){let t=lo(this.array[e*this.itemSize+2]);return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=Ti(t),this}getW(e){let t=lo(this.array[e*this.itemSize+3]);return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=Ti(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=Ti(t),this.array[e+1]=Ti(i),this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[e+0]=Ti(t),this.array[e+1]=Ti(i),this.array[e+2]=Ti(s),this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[e+0]=Ti(t),this.array[e+1]=Ti(i),this.array[e+2]=Ti(s),this.array[e+3]=Ti(r),this}},_e=class extends He{constructor(e,t,i){super(new Float32Array(e),t,i)}},Fx=new Wt,Ja=new w,Nd=new w,qt=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);let t=Ja.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ja,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Nd)),this.expandByPoint(Ja.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hx=0,Gi=new Ce,Od=new st,Lr=new w,Bi=new Wt,$a=new Wt,ii=new w,Ie=class n extends Zt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?ia:ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,i){return Gi.makeTranslation(e,t,i),this.applyMatrix4(Gi),this}scale(e,t,i){return Gi.makeScale(e,t,i),this.applyMatrix4(Gi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];$a.setFromBufferAttribute(o),this.morphTargetsRelative?(ii.addVectors(Bi.min,$a.min),Bi.expandByPoint(ii),ii.addVectors(Bi.max,$a.max),Bi.expandByPoint(ii)):(Bi.expandByPoint($a.min),Bi.expandByPoint($a.max))}Bi.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ii.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ii));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ii.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),ii.add(Lr)),s=Math.max(s,i.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new w,l[y]=new w;let c=new w,u=new w,h=new w,d=new X,f=new X,p=new X,v=new w,m=new w;function g(y,T,D){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,D),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,D),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),o[y].add(v),o[T].add(v),o[D].add(v),l[y].add(m),l[T].add(m),l[D].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,T=_.length;y<T;++y){let D=_[y],P=D.start,I=D.count;for(let H=P,N=P+I;H<N;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let b=new w,x=new w,A=new w,E=new w;function C(y){A.fromBufferAttribute(s,y),E.copy(A);let T=o[y];b.copy(T),b.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(E,T);let P=x.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,P)}for(let y=0,T=_.length;y<T;++y){let D=_[y],P=D.start,I=D.count;for(let H=P,N=P+I;H<N;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ii.fromBufferAttribute(e,t),ii.normalize(),e.setXYZ(t,ii.x,ii.y,ii.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new He(d,u,h)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$s=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pi=new w,ms=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fd=new w,kx=new w,zx=new Ze,wi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Fd.subVectors(i,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Fd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zx.getNormalMatrix(e),s=this.coplanarPoint(Fd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gx=0,Ct=class extends Zt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=dn,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Dh,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new wi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new X().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gs=class extends Ct{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,eo=new w,Nr=new w,Or=new w,Fr=new X,to=new X,c0=new Ce,zc=new w,io=new w,Gc=new w,pm=new X,Hd=new X,mm=new X,er=class extends st{constructor(e=new gs){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Ie;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $s(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new ms(i,3,0,!1)),Br.setAttribute("uv",new ms(i,2,3,!1))}this.geometry=Br,this.material=e,this.center=new X(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),c0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Vc(zc.set(-.5,-.5,0),Or,a,Nr,s,r),Vc(io.set(.5,-.5,0),Or,a,Nr,s,r),Vc(Gc.set(.5,.5,0),Or,a,Nr,s,r),pm.set(0,0),Hd.set(1,0),mm.set(1,1);let o=e.ray.intersectTriangle(zc,io,Gc,!1,eo);if(o===null&&(Vc(io.set(-.5,.5,0),Or,a,Nr,s,r),Hd.set(0,1),o=e.ray.intersectTriangle(zc,Gc,io,!1,eo),o===null))return;let l=e.ray.origin.distanceTo(eo);l<e.near||l>e.far||t.push({distance:l,point:eo.clone(),uv:nn.getInterpolation(eo,zc,io,Gc,pm,Hd,mm,new X),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vc(n,e,t,i,s,r){Fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(to.x=r*Fr.x-s*Fr.y,to.y=s*Fr.x+r*Fr.y):to.copy(Fr),n.copy(e),n.x+=to.x,n.y+=to.y,n.applyMatrix4(c0)}var Wc=new w,gm=new w,vs=class extends st{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,s=t.length;i<s;i++){let r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let s=t.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,s;for(i=1,s=t.length;i<s;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Wc.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Wc);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Wc.setFromMatrixPosition(e.matrixWorld),gm.setFromMatrixPosition(this.matrixWorld);let i=Wc.distanceTo(gm)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),i>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let i=this.levels;for(let s=0,r=i.length;s<r;s++){let a=i[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},Vn=new w,kd=new w,Xc=new w,Yc=new w,on=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kd.copy(e).add(t).multiplyScalar(.5),Xc.copy(t).sub(e).normalize(),Yc.copy(this.origin).sub(kd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xc),o=Yc.dot(this.direction),l=-Yc.dot(Xc),c=Yc.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(kd).addScaledVector(Xc,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);let i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,v=t.y-a.y,m=t.z-a.z,g=i.x-a.x,_=i.y-a.y,b=i.z-a.z,x=Math.abs(l),A=Math.abs(c),E=Math.abs(u),C,y,T,D,P,I,H,N,F,Z,V,re;if(x>=A&&x>=E?(T=l,I=h,F=p,re=g,l>=0?(C=c,y=u,D=d,P=f,H=v,N=m,Z=_,V=b):(C=u,y=c,D=f,P=d,H=m,N=v,Z=b,V=_)):A>=E?(T=c,I=d,F=v,re=_,c>=0?(C=u,y=l,D=f,P=h,H=m,N=p,Z=b,V=g):(C=l,y=u,D=h,P=f,H=p,N=m,Z=g,V=b)):(T=u,I=f,F=m,re=b,u>=0?(C=l,y=c,D=h,P=d,H=p,N=v,Z=g,V=_):(C=c,y=l,D=d,P=h,H=v,N=p,Z=_,V=g)),T===0)return null;let q=C/T,J=y/T,ee=1/T,Ne=D-q*I,Re=P-J*I,vt=H-q*F,ot=N-J*F,ft=Z-q*re,Q=V-J*re,ie=ft*ot-Q*vt,Se=Ne*Q-Re*ft,We=vt*Re-ot*Ne;if(s){if(ie<0||Se<0||We<0)return null}else if((ie<0||Se<0||We<0)&&(ie>0||Se>0||We>0))return null;let Me=ie+Se+We;if(Me===0)return null;let Ye=ee*(ie*I+Se*F+We*re);return(Me>0?Ye<0:Ye>0)?null:this.at(Ye/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends Ct{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vm=new Ce,Bs=new on,qc=new qt,xm=new w,jc=new w,Zc=new w,Kc=new w,zd=new w,Qc=new w,_m=new w,Jc=new w,et=class extends st{constructor(e=new Ie,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(zd.fromBufferAttribute(h,e),a?Qc.addScaledVector(zd,u):Qc.addScaledVector(zd.sub(t),u))}t.add(Qc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(qc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(qc,xm)===null||Bs.origin.distanceToSquared(xm)>bi(e.far-e.near,2)))&&(vm.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(vm),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=b;x<A;x+=3){let E=o.getX(x),C=o.getX(x+1),y=o.getX(x+2);s=$c(this,g,e,i,c,u,h,E,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let _=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=$c(this,a,e,i,c,u,h,_,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=b;x<A;x+=3){let E=x,C=x+1,y=x+2;s=$c(this,g,e,i,c,u,h,E,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let _=m,b=m+1,x=m+2;s=$c(this,a,e,i,c,u,h,_,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Vx(n,e,t,i,s,r,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===hn,o),l===null)return null;Jc.copy(o),Jc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Jc);return c<t.near||c>t.far?null:{distance:c,point:Jc.clone(),object:n}}function $c(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,jc),n.getVertexPosition(l,Zc),n.getVertexPosition(c,Kc);let u=Vx(n,e,t,i,jc,Zc,Kc,_m);if(u){let h=new w;nn.getBarycoord(_m,jc,Zc,Kc,h),s&&(u.uv=nn.getInterpolatedAttribute(s,o,l,c,h,new X)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,l,c,h,new X)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,l,c,h,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new w,materialIndex:0};nn.getNormal(jc,Zc,Kc,d.normal),u.face=d,u.barycoord=h}return u}var no=new ut,ym=new ut,Sm=new ut,Wx=new ut,Em=new Ce,eu=new w,Gd=new qt,bm=new Ce,Vd=new on,To=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bu,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eu),this.boundingBox.expandByPoint(eu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eu),this.boundingSphere.expandByPoint(eu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gd.copy(this.boundingSphere),Gd.applyMatrix4(s),e.ray.intersectsSphere(Gd)!==!1&&(bm.copy(s).invert(),Vd.copy(e.ray).applyMatrix4(bm),!(this.boundingBox!==null&&Vd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;ym.fromBufferAttribute(s.attributes.skinIndex,e),Sm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(no.copy(t),t.set(0,0,0,0)):(no.set(...t,1),t.set(0,0,0)),no.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Sm.getComponent(r);if(a!==0){let o=ym.getComponent(r);Em.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Wx.copy(no).applyMatrix4(Em),a)}}return t.isVector4&&(t.w=no.w),t.applyMatrix4(this.bindMatrixInverse)}},na=class extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}},vi=class extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Nt,u=Nt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Am=new Ce,Xx=new Ce,wo=class n{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Xx;Am.multiplyMatrices(o,t[r]),Am.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new vi(t,e,e,li,jt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(fe("Skeleton: No bone found with UUID:",r),a=new na),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},jn=class extends He{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hr=new Ce,Mm=new Ce,tu=[],Tm=new Wt,Yx=new Ce,so=new et,ro=new qt,Co=class extends et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Tm.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Tm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),ro.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),e.ray.intersectsSphere(ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),Mm.multiplyMatrices(i,Hr),so.matrixWorld=Mm,so.raycast(e,tu);for(let a=0,o=tu.length;a<o;a++){let l=tu[a];l.instanceId=r,l.object=this,t.push(l)}tu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,Ul,jt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new qt,qx=new X(.5,.5),iu=new w,Rn=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],_=r[12],b=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,g-p,A-_).normalize(),s[1].setComponents(c+a,f+u,g+p,A+_).normalize(),s[2].setComponents(c+o,f+h,g+v,A+b).normalize(),s[3].setComponents(c-o,f-h,g-v,A-b).normalize(),i)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,g-m,A-x).normalize();else if(s[4].setComponents(c-l,f-d,g-m,A-x).normalize(),t===Ci)s[5].setComponents(c+l,f+d,g+m,A+x).normalize();else if(t===fs)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=qx.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(iu.x=s.normal.x>0?e.max.x:e.min.x,iu.y=s.normal.y>0?e.max.y:e.min.y,iu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wm=new Ce,Ro=class n{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];wm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Rn),i[s].setFromProjectionMatrix(wm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Rn),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};function Wd(n,e){return n-e}function jx(n,e){return n.z-e.z}function Zx(n,e){return e.z-n.z}var rf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}},Mi=new Ce,Kx=new oe(1,1,1),Qx=new Rn,Jx=new Ro,nu=new Wt,Os=new qt,ao=new w,Cm=new w,$x=new w,Xd=new rf,oi=new et,su=[];function e_(n,e,t=0){let i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){let s=n.count;for(let r=0;r<s;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,n.getComponent(r,a))}else e.array.set(n.array,t*i);e.needsUpdate=!0}function Fs(n,e){if(n.constructor!==e.constructor){let t=Math.min(n.length,e.length);for(let i=0;i<t;i++)e[i]=n[i]}else{let t=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,t))}}var Do=class extends et{constructor(e,t,i=t*2,s){super(new Ie,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new vi(t,e,e,li,jt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new vi(t,e,e,Ia,Ei);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new vi(t,e,e,li,jt);i.colorSpace=rt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(i*l),h=new He(u,l,c);t.setAttribute(r,h)}if(e.getIndex()!==null){let r=i>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new He(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let s=e.getAttribute(i),r=t.getAttribute(i);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,Mi),this.getBoundingBoxAt(r,nu).applyMatrix4(Mi),e.union(nu)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,Mi),this.getBoundingSphereAt(r,Os).applyMatrix4(Mi),e.union(Os)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Wd),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=i):(s=this._instanceInfo.length,this._instanceInfo.push(i));let r=this._matricesTexture;Mi.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Kx.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=i===-1?a.count:i),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Wd),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,s=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let u in i.attributes){let h=t.getAttribute(u),d=i.getAttribute(u);e_(h,d,l);let f=h.itemSize;for(let p=h.count,v=c;p<v;p++){let m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){let u=o.indexStart,h=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(u+d,l+a.getX(d));for(let d=a.count,f=h;d<f;d++)r.setX(u+d,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let s=0,r=i.length;s<r;s++)i[s].active&&i[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,s=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){let l=s[a],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=r.index,p=f.array,v=e-h;for(let m=u;m<u+d;m++)p[m]=p[m]+v;f.array.copyWithin(t,u,u+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:u,reservedVertexCount:h}=c,d=r.attributes;for(let f in d){let p=d[f],{array:v,itemSize:m}=p;v.copyWithin(e*m,u*m,(u+h)*m),p.addUpdateRange(e*m,h*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Wt,a=i.index,o=i.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(ao.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new qt;this.getBoundingBoxAt(e,nu),nu.getCenter(r.center);let a=i.index,o=i.attributes.position,l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let h=c;a&&(h=a.getX(h)),ao.fromBufferAttribute(o,h),l=Math.max(l,r.center.distanceToSquared(ao))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Wd);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);Fs(this._multiDrawCounts,s),Fs(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Fs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Fs(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Fs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ie,this._initializeGeometry(r));let a=this.geometry;r.index&&Fs(r.index.array,a.index.array);for(let o in r.attributes)Fs(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let i=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;oi.material=this.material,oi.geometry.index=a.index,oi.geometry.attributes=a.attributes,oi.geometry.boundingBox===null&&(oi.geometry.boundingBox=new Wt),oi.geometry.boundingSphere===null&&(oi.geometry.boundingSphere=new qt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;let c=i[o].geometryIndex,u=s[c];oi.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,oi.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,oi.geometry.boundingBox),this.getBoundingSphereAt(c,oi.geometry.boundingSphere),oi.raycast(e,su);for(let h=0,d=su.length;h<d;h++){let f=su[h];f.object=this,f.batchId=o,t.push(f)}su.length=0}oi.material=null,oi.geometry.index=null,oi.geometry.attributes={},oi.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>Uc(Is({},t),{boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>Is({},t)),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);let c=this._instanceInfo,u=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,m=i.isArrayCamera?Jx:Qx;f&&(i.isArrayCamera?m.setFromArrayCamera(i):(Mi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(Mi,i.coordinateSystem,i.reversedDepth)));let g=0;if(this.sortObjects){Mi.copy(this.matrixWorld).invert(),ao.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Mi),Cm.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Mi);for(let x=0,A=c.length;x<A;x++)if(c[x].visible&&c[x].active){let E=c[x].geometryIndex;this.getMatrixAt(x,Mi),this.getBoundingSphereAt(E,Os).applyMatrix4(Mi);let C=!1;if(f&&(C=!m.intersectsSphere(Os)),!C){let y=d[E],T=$x.subVectors(Os.center,ao).dot(Cm);Xd.push(y.start,y.count,T,x)}}let _=Xd.list,b=this.customSort;b===null?_.sort(r.transparent?Zx:jx):b.call(this,_,i);for(let x=0,A=_.length;x<A;x++){let E=_[x];u[g]=E.start*o*l,h[g]=E.count*l,v[g]=E.index,g++}Xd.reset()}else for(let _=0,b=c.length;_<b;_++)if(c[_].visible&&c[_].active){let x=c[_].geometryIndex,A=!1;if(f&&(this.getMatrixAt(_,Mi),this.getBoundingSphereAt(x,Os).applyMatrix4(Mi),A=!m.intersectsSphere(Os)),!A){let E=d[x];u[g]=E.start*o*l,h[g]=E.count*l,v[g]=_,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,i,s,r,a){this.onBeforeRender(e,null,s,r,a)}},Rt=class extends Ct{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bu=new w,Nu=new w,Rm=new Ce,oo=new on,ru=new qt,Yd=new w,Dm=new w,xi=class extends st{constructor(e=new Ie,t=new Rt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bu.fromBufferAttribute(t,s-1),Nu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bu.distanceTo(Nu);e.setAttribute("lineDistance",new _e(i,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ru.copy(i.boundingSphere),ru.applyMatrix4(s),ru.radius+=r,e.ray.intersectsSphere(ru)===!1)return;Rm.copy(s).invert(),oo.copy(e.ray).applyMatrix4(Rm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=u.getX(v),_=u.getX(v+1),b=au(this,e,oo,l,g,_,v);b&&t.push(b)}if(this.isLineLoop){let v=u.getX(p-1),m=u.getX(f),g=au(this,e,oo,l,v,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=au(this,e,oo,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=au(this,e,oo,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function au(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Bu.fromBufferAttribute(o,s),Nu.fromBufferAttribute(o,r),t.distanceSqToSegment(Bu,Nu,Yd,Dm)>i)return;Yd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Yd);if(!(c<e.near||c>e.far))return{distance:c,point:Dm.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Pm=new w,Im=new w,ni=class extends xi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pm.fromBufferAttribute(t,s),Im.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pm.distanceTo(Im);e.setAttribute("lineDistance",new _e(i,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends xi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ln=class extends Ct{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Um=new Ce,af=new on,ou=new qt,lu=new w,_i=class extends st{constructor(e=new Ie,t=new ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ou.copy(i.boundingSphere),ou.applyMatrix4(s),ou.radius+=r,e.ray.intersectsSphere(ou)===!1)return;Um.copy(s).invert(),af.copy(e.ray).applyMatrix4(Um);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let m=c.getX(p);lu.fromBufferAttribute(h,m),Lm(lu,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,v=f;p<v;p++)lu.fromBufferAttribute(h,p),Lm(lu,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lm(n,e,t,i,s,r,a){let o=af.distanceSqToPoint(n);if(o<t){let l=new w;af.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Io=class extends Lt{constructor(e,t,i,s,r=mt,a=mt,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Ou=class extends Io{constructor(e,t,i,s,r,a,o,l){super({},e,t,i,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Fu=class extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Nt,this.minFilter=Nt,this.generateMipmaps=!1,this.needsUpdate=!0}},tr=class extends Lt{constructor(e,t,i,s,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Hu=class extends tr{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=gi,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ku=class extends tr{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,pn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},xs=class extends Lt{constructor(e=[],t=pn,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zu=class extends Lt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gu=class extends Lt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},yi=class extends Lt{constructor(e,t,i=Ei,s,r,a,o=Nt,l=Nt,c,u=an,h=1){if(u!==an&&u!==gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Uo=class extends yi{constructor(e,t=Ei,i=pn,s,r,a=Nt,o=Nt,l,c=an){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_s=class n extends Ie{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function p(v,m,g,_,b,x,A,E,C,y,T){let D=x/C,P=A/y,I=x/2,H=A/2,N=E/2,F=C+1,Z=y+1,V=0,re=0,q=new w;for(let J=0;J<Z;J++){let ee=J*P-H;for(let Ne=0;Ne<F;Ne++){let Re=Ne*D-I;q[v]=Re*_,q[m]=ee*b,q[g]=N,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=E>0?1:-1,u.push(q.x,q.y,q.z),h.push(Ne/C),h.push(1-J/y),V+=1}}for(let J=0;J<y;J++)for(let ee=0;ee<C;ee++){let Ne=d+ee+F*J,Re=d+ee+F*(J+1),vt=d+(ee+1)+F*(J+1),ot=d+(ee+1)+F*J;l.push(Ne,Re,ot),l.push(Re,vt,ot),re+=6}o.addGroup(f,re,T),f+=re,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Lo=class n extends Ie{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=i*2+r,v=s+1,m=new w,g=new w;for(let _=0;_<=p;_++){let b=0,x=0,A=0,E=0;if(_<=i){let T=_/i,D=T*Math.PI/2;x=-u-e*Math.cos(D),A=e*Math.sin(D),E=-e*Math.cos(D),b=T*h}else if(_<=i+r){let T=(_-i)/r;x=-u+T*t,A=e,E=0,b=h+T*d}else{let T=(_-i-r)/i,D=T*Math.PI/2;x=u+e*Math.sin(D),A=e*Math.cos(D),E=e*Math.sin(D),b=h+d+T*h}let C=Math.max(0,Math.min(1,b/f)),y=0;_===0?y=.5/s:_===p&&(y=-.5/s);for(let T=0;T<=s;T++){let D=T/s,P=D*Math.PI*2,I=Math.sin(P),H=Math.cos(P);g.x=-A*H,g.y=x,g.z=A*I,o.push(g.x,g.y,g.z),m.set(-A*H,E,A*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+y,C)}if(_>0){let T=(_-1)*v;for(let D=0;D<s;D++){let P=T+D,I=T+D+1,H=_*v+D,N=_*v+D+1;a.push(P,I,H),a.push(I,N,H)}}}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Bo=class n extends Ie{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new w,u=new X;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ra=class n extends Ie{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,v=[],m=i/2,g=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function _(){let x=new w,A=new w,E=0,C=(t-e)/i;for(let y=0;y<=r;y++){let T=[],D=y/r,P=D*(t-e)+e;for(let I=0;I<=s;I++){let H=I/s,N=H*l+o,F=Math.sin(N),Z=Math.cos(N);A.x=P*F,A.y=-D*i+m,A.z=P*Z,h.push(A.x,A.y,A.z),x.set(F,C,Z).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-D),T.push(p++)}v.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let D=v[T][y],P=v[T+1][y],I=v[T+1][y+1],H=v[T][y+1];(e>0||T!==0)&&(u.push(D,P,H),E+=3),(t>0||T!==r-1)&&(u.push(P,I,H),E+=3)}c.addGroup(g,E,0),g+=E}function b(x){let A=p,E=new X,C=new w,y=0,T=x===!0?e:t,D=x===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*D,0),d.push(0,D,0),f.push(.5,.5),p++;let P=p;for(let I=0;I<=s;I++){let N=I/s*l+o,F=Math.cos(N),Z=Math.sin(N);C.x=T*Z,C.y=m*D,C.z=T*F,h.push(C.x,C.y,C.z),d.push(0,D,0),E.x=F*.5+.5,E.y=Z*.5*D+.5,f.push(E.x,E.y),p++}for(let I=0;I<s;I++){let H=A+I,N=P+I;x===!0?u.push(N,N+1,H):u.push(N+1,N,H),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},aa=class n extends ra{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zn=class n extends Ie{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new w,x=new w,A=new w;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],x),f(t[E+2],A),l(b,x,A,_)}function l(_,b,x,A){let E=A+1,C=[];for(let y=0;y<=E;y++){C[y]=[];let T=_.clone().lerp(x,y/E),D=b.clone().lerp(x,y/E),P=E-y;for(let I=0;I<=P;I++)I===0&&y===E?C[y][I]=T:C[y][I]=T.clone().lerp(D,I/P)}for(let y=0;y<E;y++)for(let T=0;T<2*(E-y)-1;T++){let D=Math.floor(T/2);T%2===0?(d(C[y][D+1]),d(C[y+1][D]),d(C[y][D])):(d(C[y][D+1]),d(C[y+1][D+1]),d(C[y+1][D]))}}function c(_){let b=new w;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(_),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){let _=new w;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let x=m(_)/2/Math.PI+.5,A=g(_)/Math.PI+.5;a.push(x,1-A)}p(),h()}function h(){for(let _=0;_<a.length;_+=6){let b=a[_+0],x=a[_+2],A=a[_+4],E=Math.max(b,x,A),C=Math.min(b,x,A);E>.9&&C<.1&&(b<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let x=_*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function p(){let _=new w,b=new w,x=new w,A=new w,E=new X,C=new X,y=new X;for(let T=0,D=0;T<r.length;T+=9,D+=6){_.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),E.set(a[D+0],a[D+1]),C.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),A.copy(_).add(b).add(x).divideScalar(3);let P=m(A);v(E,D+0,_,P),v(C,D+2,b,P),v(y,D+4,x,P)}}function v(_,b,x,A){A<0&&_.x===1&&(a[b]=_.x-1),x.x===0&&x.z===0&&(a[b]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},No=class n extends Zn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},cu=new w,uu=new w,qd=new w,hu=new nn,Oo=class extends Ie{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Xs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:v,b:m,c:g}=hu;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),hu.getNormal(qd),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){let b=(_+1)%3,x=h[_],A=h[b],E=hu[u[_]],C=hu[u[b]],y=`${x}_${A}`,T=`${A}_${x}`;T in d&&d[T]?(qd.dot(d[T].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(C.x,C.y,C.z)),d[T]=null):y in d||(d[y]={index0:c[_],index1:c[b],normal:qd.clone()})}}for(let p in d)if(d[p]){let{index0:v,index1:m}=d[p];cu.fromBufferAttribute(o,v),uu.fromBufferAttribute(o,m),f.push(cu.x,cu.y,cu.z),f.push(uu.x,uu.y,uu.z)}this.setAttribute("position",new _e(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new X:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,s=[],r=[],a=[],o=new w,l=new Ce;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ir=class extends Di{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new X){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fo=class extends ir{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kf(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Bm=new w,Nm=new w,jd=new Kf,Zd=new Kf,Kd=new Kf,Ho=class extends Di{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Nm.subVectors(s[0],s[1]).add(s[0]),c=Nm);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Bm.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Bm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),jd.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,m),Zd.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,m),Kd.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(jd.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Zd.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Kd.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(jd.calc(l),Zd.calc(l),Kd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Om(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function t_(n,e){let t=1-n;return t*t*e}function i_(n,e){return 2*(1-n)*n*e}function n_(n,e){return n*n*e}function po(n,e,t,i){return t_(n,e)+i_(n,t)+n_(n,i)}function s_(n,e){let t=1-n;return t*t*t*e}function r_(n,e){let t=1-n;return 3*t*t*n*e}function a_(n,e){return 3*(1-n)*n*n*e}function o_(n,e){return n*n*n*e}function mo(n,e,t,i,s){return s_(n,e)+r_(n,t)+a_(n,i)+o_(n,s)}var oa=class extends Di{constructor(e=new X,t=new X,i=new X,s=new X){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new X){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(mo(e,s.x,r.x,a.x,o.x),mo(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends Di{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(mo(e,s.x,r.x,a.x,o.x),mo(e,s.y,r.y,a.y,o.y),mo(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends Di{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Di{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Di{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(po(e,s.x,r.x,a.x),po(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Di{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(po(e,s.x,r.x,a.x),po(e,s.y,r.y,a.y),po(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new X){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Om(o,l.x,c.x,u.x,h.x),Om(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new X().fromArray(s))}return this}},Vu=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Ho,CubicBezierCurve:oa,CubicBezierCurve3:ko,EllipseCurve:ir,LineCurve:la,LineCurve3:zo,QuadraticBezierCurve:ca,QuadraticBezierCurve3:ua,SplineCurve:ha}),Go=class extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Vu[s.type]().fromJSON(s))}return this}},ys=class extends Go{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new la(this.currentPoint.clone(),new X(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ca(this.currentPoint.clone(),new X(e,t),new X(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new oa(this.currentPoint.clone(),new X(e,t),new X(i,s),new X(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ha(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ir(e,t,i,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ss=class extends ys{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ys().fromJSON(s))}return this}};function l_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=u0(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=f_(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Vo(r,a,t,o,l,c,0),a}function u0(n,e,t,i,s){let r;if(s===A_(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Fm(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Fm(a/i|0,n[a],n[a+1],r);return r&&da(r,r.next)&&(Xo(r),r=r.next),r}function nr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(da(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Vo(n,e,t,i,s,r,a){if(!n)return;!a&&r&&x_(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?u_(n,i,s,r):c_(n)){e.push(l.i,n.i,c.i),Xo(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=h_(nr(n),e),Vo(n,e,t,i,s,r,2)):a===2&&d_(n,e,t,i,s,r):Vo(nr(n),e,t,i,s,r,1);break}}}function c_(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&co(s,o,r,l,a,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u_(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ht(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(u,h,d),v=Math.max(o,l,c),m=Math.max(u,h,d),g=of(f,p,e,t,i),_=of(v,m,e,t,i),b=n.prevZ,x=n.nextZ;for(;b&&b.z>=g&&x&&x.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&co(o,u,l,h,c,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&co(o,u,l,h,c,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&co(o,u,l,h,c,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&co(o,u,l,h,c,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function h_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!da(i,s)&&d0(i,t,t.next,s)&&Wo(i,s)&&Wo(s,i)&&(e.push(i.i,t.i,s.i),Xo(t),Xo(t.next),t=n=s),t=t.next}while(t!==n);return nr(t)}function d_(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S_(a,o)){let l=f0(a,o);a=nr(a,a.next),l=nr(l,l.next),Vo(a,e,t,i,s,r,0),Vo(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function f_(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=u0(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(y_(c))}s.sort(p_);for(let r=0;r<s.length;r++)t=m_(s[r],t);return t}function p_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function m_(n,e){let t=g_(n,e);if(!t)return e;let i=f0(t,n);return nr(i,i.next),nr(t,t.next)}function g_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(da(n,t))return t;do{if(da(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&h0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);Wo(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&v_(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function v_(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function x_(n,e,t,i){let s=n;do s.z===0&&(s.z=of(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,__(s)}function __(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function of(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function y_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function h0(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function co(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&h0(n,e,t,i,s,r,a,o)}function S_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!E_(n,e)&&(Wo(n,e)&&Wo(e,n)&&b_(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||da(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function da(n,e){return n.x===e.x&&n.y===e.y}function d0(n,e,t,i){let s=fu(Ht(n,e,t)),r=fu(Ht(n,e,i)),a=fu(Ht(t,i,n)),o=fu(Ht(t,i,e));return!!(s!==r&&a!==o||s===0&&du(n,t,e)||r===0&&du(n,i,e)||a===0&&du(t,n,i)||o===0&&du(t,e,i))}function du(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function fu(n){return n>0?1:n<0?-1:0}function E_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&d0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wo(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function b_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function f0(n,e){let t=lf(n.i,n.x,n.y),i=lf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Fm(n,e,t,i){let s=lf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A_(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var cf=class{static triangulate(e,t,i=2){return l_(e,t,i)}},Wi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Hm(e),km(i,e);let a=e.length;t.forEach(Hm);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,km(i,t[l]);let o=cf.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Hm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function km(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Yo=class n extends Ie{constructor(e=new Ss([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:M_,b,x=!1,A,E,C,y;if(g){b=g.getSpacedPoints(u),x=!0,d=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(u,ne),E=new w,C=new w,y=new w}d||(m=0,f=0,p=0,v=0);let T=o.extractPoints(c),D=T.shape,P=T.holes;if(!Wi.isClockWise(D)){D=D.reverse();for(let ne=0,ae=P.length;ne<ae;ne++){let le=P[ne];Wi.isClockWise(le)&&(P[ne]=le.reverse())}}function H(ne){let le=10000000000000001e-36,ce=ne[0];for(let de=1;de<=ne.length;de++){let Ge=de%ne.length,ze=ne[Ge],qe=ze.x-ce.x,Qe=ze.y-ce.y,U=qe*qe+Qe*Qe,_t=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ce.x),Math.abs(ce.y)),lt=le*_t*_t;if(U<=lt){ne.splice(Ge,1),de--;continue}ce=ze}}H(D),P.forEach(H);let N=P.length,F=D;for(let ne=0;ne<N;ne++){let ae=P[ne];D=D.concat(ae)}function Z(ne,ae,le){return ae||Le("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ae,le)}let V=D.length;function re(ne,ae,le){let ce,de,Ge,ze=ne.x-ae.x,qe=ne.y-ae.y,Qe=le.x-ne.x,U=le.y-ne.y,_t=ze*ze+qe*qe,lt=ze*U-qe*Qe;if(Math.abs(lt)>Number.EPSILON){let R=Math.sqrt(_t),S=Math.sqrt(Qe*Qe+U*U),O=ae.x-qe/R,G=ae.y+ze/R,j=le.x-U/S,ue=le.y+Qe/S,he=((j-O)*U-(ue-G)*Qe)/(ze*U-qe*Qe);ce=O+ze*he-ne.x,de=G+qe*he-ne.y;let K=ce*ce+de*de;if(K<=2)return new X(ce,de);Ge=Math.sqrt(K/2)}else{let R=!1;ze>Number.EPSILON?Qe>Number.EPSILON&&(R=!0):ze<-Number.EPSILON?Qe<-Number.EPSILON&&(R=!0):Math.sign(qe)===Math.sign(U)&&(R=!0),R?(ce=-qe,de=ze,Ge=Math.sqrt(_t)):(ce=ze,de=qe,Ge=Math.sqrt(_t/2))}return new X(ce/Ge,de/Ge)}let q=[];for(let ne=0,ae=F.length,le=ae-1,ce=ne+1;ne<ae;ne++,le++,ce++)le===ae&&(le=0),ce===ae&&(ce=0),q[ne]=re(F[ne],F[le],F[ce]);let J=[],ee,Ne=q.concat();for(let ne=0,ae=N;ne<ae;ne++){let le=P[ne];ee=[];for(let ce=0,de=le.length,Ge=de-1,ze=ce+1;ce<de;ce++,Ge++,ze++)Ge===de&&(Ge=0),ze===de&&(ze=0),ee[ce]=re(le[ce],le[Ge],le[ze]);J.push(ee),Ne=Ne.concat(ee)}let Re;if(m===0)Re=Wi.triangulateShape(F,P);else{let ne=[],ae=[];for(let le=0;le<m;le++){let ce=le/m,de=f*Math.cos(ce*Math.PI/2),Ge=p*Math.sin(ce*Math.PI/2)+v;for(let ze=0,qe=F.length;ze<qe;ze++){let Qe=Z(F[ze],q[ze],Ge);Se(Qe.x,Qe.y,-de),ce===0&&ne.push(Qe)}for(let ze=0,qe=N;ze<qe;ze++){let Qe=P[ze];ee=J[ze];let U=[];for(let _t=0,lt=Qe.length;_t<lt;_t++){let R=Z(Qe[_t],ee[_t],Ge);Se(R.x,R.y,-de),ce===0&&U.push(R)}ce===0&&ae.push(U)}}Re=Wi.triangulateShape(ne,ae)}let vt=Re.length,ot=p+v;for(let ne=0;ne<V;ne++){let ae=d?Z(D[ne],Ne[ne],ot):D[ne];x?(C.copy(A.normals[0]).multiplyScalar(ae.x),E.copy(A.binormals[0]).multiplyScalar(ae.y),y.copy(b[0]).add(C).add(E),Se(y.x,y.y,y.z)):Se(ae.x,ae.y,0)}for(let ne=1;ne<=u;ne++)for(let ae=0;ae<V;ae++){let le=d?Z(D[ae],Ne[ae],ot):D[ae];x?(C.copy(A.normals[ne]).multiplyScalar(le.x),E.copy(A.binormals[ne]).multiplyScalar(le.y),y.copy(b[ne]).add(C).add(E),Se(y.x,y.y,y.z)):Se(le.x,le.y,h/u*ne)}for(let ne=m-1;ne>=0;ne--){let ae=ne/m,le=f*Math.cos(ae*Math.PI/2),ce=p*Math.sin(ae*Math.PI/2)+v;for(let de=0,Ge=F.length;de<Ge;de++){let ze=Z(F[de],q[de],ce);Se(ze.x,ze.y,h+le)}for(let de=0,Ge=P.length;de<Ge;de++){let ze=P[de];ee=J[de];for(let qe=0,Qe=ze.length;qe<Qe;qe++){let U=Z(ze[qe],ee[qe],ce);x?Se(U.x,U.y+b[u-1].y,b[u-1].x+le):Se(U.x,U.y,h+le)}}}ft(),Q();function ft(){let ne=s.length/3;if(d){let ae=0,le=V*ae;for(let ce=0;ce<vt;ce++){let de=Re[ce];We(de[2]+le,de[1]+le,de[0]+le)}ae=u+m*2,le=V*ae;for(let ce=0;ce<vt;ce++){let de=Re[ce];We(de[0]+le,de[1]+le,de[2]+le)}}else{for(let ae=0;ae<vt;ae++){let le=Re[ae];We(le[2],le[1],le[0])}for(let ae=0;ae<vt;ae++){let le=Re[ae];We(le[0]+V*u,le[1]+V*u,le[2]+V*u)}}i.addGroup(ne,s.length/3-ne,0)}function Q(){let ne=s.length/3,ae=0;ie(F,ae),ae+=F.length;for(let le=0,ce=P.length;le<ce;le++){let de=P[le];ie(de,ae),ae+=de.length}i.addGroup(ne,s.length/3-ne,1)}function ie(ne,ae){let le=ne.length;for(;--le>=0;){let ce=le,de=le-1;de<0&&(de=ne.length-1);for(let Ge=0,ze=u+m*2;Ge<ze;Ge++){let qe=V*Ge,Qe=V*(Ge+1),U=ae+ce+qe,_t=ae+de+qe,lt=ae+de+Qe,R=ae+ce+Qe;Me(U,_t,lt,R)}}}function Se(ne,ae,le){l.push(ne),l.push(ae),l.push(le)}function We(ne,ae,le){Ye(ne),Ye(ae),Ye(le);let ce=s.length/3,de=_.generateTopUV(i,s,ce-3,ce-2,ce-1);bt(de[0]),bt(de[1]),bt(de[2])}function Me(ne,ae,le,ce){Ye(ne),Ye(ae),Ye(ce),Ye(ae),Ye(le),Ye(ce);let de=s.length/3,Ge=_.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);bt(Ge[0]),bt(Ge[1]),bt(Ge[3]),bt(Ge[1]),bt(Ge[2]),bt(Ge[3])}function Ye(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function bt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return T_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vu[s.type]().fromJSON(s)),new n(i,e.options)}},M_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new X(r,a),new X(o,l),new X(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new X(a,1-l),new X(c,1-h),new X(d,1-p),new X(v,1-g)]:[new X(o,1-l),new X(u,1-h),new X(f,1-p),new X(m,1-g)]}};function T_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qo=class n extends Zn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},jo=class n extends Ie{constructor(e=[new X(0,-.5),new X(.5,0),new X(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Xe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new w,d=new X,f=new w,p=new w,v=new w,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){let b=i+_*u*s,x=Math.sin(b),A=Math.cos(b);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*x,h.y=e[E].y,h.z=e[E].x*A,a.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);let C=l[3*E+0]*x,y=l[3*E+1],T=l[3*E+0]*A;c.push(C,y,T)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let x=b+_*e.length,A=x,E=x+e.length,C=x+e.length+1,y=x+1;r.push(A,E,y),r.push(C,y,E)}this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},fa=class n extends Zn{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oi=class n extends Ie{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){let _=g*d-a;for(let b=0;b<c;b++){let x=b*h-r;p.push(x,-_,0),v.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let b=_+c*g,x=_+c*(g+1),A=_+1+c*(g+1),E=_+1+c*g;f.push(b,x,E),f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},sr=class n extends Ie{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new w,p=new X;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let g=r+m/i*a;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<s;v++){let m=v*(i+1);for(let g=0;g<i;g++){let _=g+m,b=_,x=_+i+1,A=_+i+2,E=_+1;o.push(b,x,E),o.push(x,A,E)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Zo=class n extends Ie{constructor(e=new Ss([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(a,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;Wi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Wi.isClockWise(_)===!0&&(p[m]=_.reverse())}let v=Wi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=v.length;m<g;m++){let _=v[m],b=_[0]+h,x=_[1]+h,A=_[2]+h;i.push(b,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return w_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function w_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var cn=class n extends Ie{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new w,d=new w,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){let _=[],b=g/i,x=a+b*o,A=e*Math.cos(x),E=Math.sqrt(e*e-A*A),C=0;g===0&&a===0?C=.5/t:g===i&&l===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){let T=y/t,D=s+T*r;h.x=-E*Math.cos(D),h.y=A,h.z=E*Math.sin(D),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(T+C,1-b),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let b=u[g][_+1],x=u[g][_],A=u[g+1][_],E=u[g+1][_+1];(g!==0||a>0)&&f.push(b,x,E),(g!==i-1||l<Math.PI)&&f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ko=class n extends Zn{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Qo=class n extends Ie{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new w,f=new w,p=new w;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let g=0;g<=s;g++){let _=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(g/s),h.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,b=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(g,_,x),l.push(_,b,x)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Jo=class n extends Ie{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],u=[],h=new w,d=new w,f=new w,p=new w,v=new w,m=new w,g=new w;for(let b=0;b<=i;++b){let x=b/i*r*Math.PI*2;_(x,r,a,e,f),_(x+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let A=0;A<=s;++A){let E=A/s*Math.PI*2,C=-t*Math.cos(E),y=t*Math.sin(E);h.x=f.x+(C*g.x+y*v.x),h.y=f.y+(C*g.y+y*v.y),h.z=f.z+(C*g.z+y*v.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(b/i),u.push(A/s)}}for(let b=1;b<=i;b++)for(let x=1;x<=s;x++){let A=(s+1)*(b-1)+(x-1),E=(s+1)*b+(x-1),C=(s+1)*b+x,y=(s+1)*(b-1)+x;o.push(A,E,y),o.push(E,C,y)}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2));function _(b,x,A,E,C){let y=Math.cos(b),T=Math.sin(b),D=A/x*b,P=Math.cos(D);C.x=E*(2+P)*.5*y,C.y=E*(2+P)*T*.5,C.z=E*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},$o=class n extends Ie{constructor(e=new ua(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new X,u=new w,h=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function v(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),g()}function m(b){u=e.getPointAt(b/t,u);let x=a.normals[b],A=a.binormals[b];for(let E=0;E<=s;E++){let C=E/s*Math.PI*2,y=Math.sin(C),T=-Math.cos(C);l.x=T*x.x+y*A.x,l.y=T*x.y+y*A.y,l.z=T*x.z+y*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let x=1;x<=s;x++){let A=(s+1)*(b-1)+(x-1),E=(s+1)*b+(x-1),C=(s+1)*b+x,y=(s+1)*(b-1)+x;p.push(A,E,y),p.push(E,C,y)}}function _(){for(let b=0;b<=t;b++)for(let x=0;x<=s;x++)c.x=b/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Vu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},el=class extends Ie{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new w,r=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let p=d,v=d+f;p<v;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),_=o.getX(p+(m+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,_),zm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),zm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new _e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Gm=Object.freeze({__proto__:null,BoxGeometry:_s,CapsuleGeometry:Lo,CircleGeometry:Bo,ConeGeometry:aa,CylinderGeometry:ra,DodecahedronGeometry:No,EdgesGeometry:Oo,ExtrudeGeometry:Yo,IcosahedronGeometry:qo,LatheGeometry:jo,OctahedronGeometry:fa,PlaneGeometry:Oi,PolyhedronGeometry:Zn,RingGeometry:sr,ShapeGeometry:Zo,SphereGeometry:cn,TetrahedronGeometry:Ko,TorusGeometry:Qo,TorusKnotGeometry:Jo,TubeGeometry:$o,WireframeGeometry:el}),tl=class extends Ct{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Vm(s))s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Vm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ui(n){let e={};for(let t=0;t<n.length;t++){let i=gr(n[t]);for(let s in i)e[s]=i[s]}return e}function Vm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function C_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var vc={clone:gr,merge:ui},R_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends Ct{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=C_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new X().fromArray(s.value);break;case"v3":this.uniforms[i].value=new w().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pa=class extends Ke{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Es=class extends Ct{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},il=class extends Es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},rr=class extends Ct{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nl=class extends Ct{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sl=class extends Ct{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},rl=class extends Ct{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ma=class extends Ct{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ga=class extends Ct{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},al=class extends Ct{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},ol=class extends Rt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function tn(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function p0(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function uf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function m0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}function P_(n,e,t,i,s=30){let r=n.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*s;if(!(p<t||p>=i)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=tn(h,c.times.constructor),c.values=tn(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function I_(n,e=0,t=n,i=30){i<=0&&(i=30);let s=t.tracks.length,r=e/i;for(let a=0;a<s;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=n.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0,h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=o.times.length-1,v;if(r<=o.times[0]){let g=u,_=h-u;v=o.values.slice(g,_)}else if(r>=o.times[p]){let g=p*h+u,_=g+h-u;v=o.values.slice(g,_)}else{let g=o.createInterpolant(),_=u,b=h-u;g.evaluate(r),v=g.resultBuffer.slice(_,b)}l==="quaternion"&&new kt().fromArray(v).normalize().conjugate().toArray(v);let m=c.times.length;for(let g=0;g<m;++g){let _=g*f+d;if(l==="quaternion")kt.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{let b=f-d*2;for(let x=0;x<b;++x)c.values[_+x]-=v[x]}}}return n.blendMode=Xh,n}var Wu=class{static convertArray(e,t){return tn(e,t)}static isTypedArray(e){return i0(e)}static hasTangents(e){return go(e)}static getKeyframeOrder(e){return p0(e)}static sortedArray(e,t,i){return uf(e,t,i)}static flattenJSON(e,t,i,s){m0(e,t,i,s)}static subclip(e,t,i,s,r=30){return P_(e,t,i,s,r)}static makeClipAdditive(e,t=0,i=e,s=30){return I_(e,t,i,s)}},Kn=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends Kn{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hs,endingEnd:hs}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ds:r=e,o=2*t-i;break;case Kr:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ds:a=e,l=2*i-t;break;case Kr:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*v+.5*p,x=f*m-f*v;for(let A=0;A!==o;++A)r[A]=g*a[u+A]+_*a[c+A]+b*a[l+A]+x*a[h+A];return r}},va=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},cl=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ul=class extends Kn{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(s-t),v=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let v=a[c+p],m=a[l+p],g=f*d+p*2,_=h[g],b=h[g+1],x=e*d+p*2,A=u[x],E=u[x+1],C=L_(i,t,_,A,s);r[p]=g0(C,v,b,E,m)}return r}};function g0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function U_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function L_(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=g0(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=U_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tn(t,this.TimeBufferType),this.values=tn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:tn(e.times,Array),values:tn(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),go(e.settings)&&(i.settings={inTangents:tn(e.settings.inTangents,Array),outTangents:tn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break;case Au:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;go(this.settings)&&(Wm(this.settings.inTangents,e),Wm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&i0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let v=t[h+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Eo;var Dn=class extends Si{constructor(e,t,i){super(e,t,i)}};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Zr;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}};xa.prototype.ValueTypeName="color";var ar=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}};ar.prototype.ValueTypeName="number";var hl=class extends Kn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)kt.slerpFlat(r,0,a,c-o,a,c,l);return r}},or=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends Si{constructor(e,t,i){super(e,t,i)}};Pn.prototype.ValueTypeName="string";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Zr;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}};_a.prototype.ValueTypeName="vector";var bs=class{constructor(e="",t=-1,i=[],s=dc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(N_(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=p0(l);l=uf(l,1,u),c=uf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ar(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function B_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return _a;case"color":return xa;case"quaternion":return or;case"bool":case"boolean":return Dn;case"string":return Pn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function N_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=B_(n.type);if(n.times===void 0){let i=[],s=[];m0(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),go(n.settings)&&(t.settings={inTangents:tn(n.settings.inTangents,Float32Array),outTangents:tn(n.settings.outTangents,Float32Array)}),t}var rn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Xm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Xm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Xm(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}var As=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new As,Kt=class{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},hf=class extends Error{constructor(e,t){super(e),this.response=t}},Pi=class extends Kt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=rn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:i,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Wn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,m=new ReadableStream({start(g){_();function _(){h.read().then(({done:b,value:x})=>{if(b)g.close();else{v+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,C=u.length;E<C;E++){let y=u[E];y.onProgress&&y.onProgress(A)}g.enqueue(x),_()}},b=>{g.error(b)})}}});return new Response(m)}else throw new hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{rn.add(`file:${e}`,c);let u=Wn[e];delete Wn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xu=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Le(l),r.manager.itemError(e)}},i,s)}parse(e){let t=[];for(let i=0;i<e.length;i++){let s=bs.parse(e[i]);t.push(s)}return t}},Yu=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=this,a=[],o=new tr,l=new Pi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(e[h],function(d){let f=r.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=mt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},i,s)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){let d=r.parse(h,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=mt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},i,s);return o}},kr=new WeakMap,Ms=class extends Kt{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=kr.get(a);h===void 0&&(h=[],kr.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Jr("img");function l(){u(),t&&t(this);let h=kr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}kr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),rn.remove(`image:${e}`);let d=kr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),rn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},qu=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=new xs;r.colorSpace=je;let a=new Ms(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}},ju=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new vi,o=new Pi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):Le(u);return}r._applyTexData(a,c),t&&t(a,c)},i,s),a}createDataTexture(e){let t=new vi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:gi,e.wrapT=t.wrapT!==void 0?t.wrapT:gi,e.magFilter=t.magFilter!==void 0?t.magFilter:mt,e.minFilter=t.minFilter!==void 0?t.minFilter:mt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=mn),t.mipmapCount===1&&(e.minFilter=mt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Fi=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=new Lt,a=new Ms(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},un=class extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},dl=class extends un{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qd=new Ce,Ym=new w,qm=new w,lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=At,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rn,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ym),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Qd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Qd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pu=new w,mu=new kt,Tn=new w,Qn=class extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pu,mu,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(pu,mu,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new w,jm=new X,Zm=new X,Ut=class extends Qn{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,jm,Zm),t.subVectors(Zm,jm)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},df=class extends lr{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fl=class extends un{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new df}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ff=class extends lr{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},cr=class extends un{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},In=class extends Qn{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pf=class extends lr{constructor(){super(new In(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pl=class extends un{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new pf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ur=class extends un{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ml=class extends un{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},ya=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(i*r)),t.addScaledVector(a[8],.546274*(i*i-s*s)),t}getIrradianceAt(e,t){let i=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*i*r),t.addScaledVector(a[8],.429043*(i*i-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let s=0;s<9;s++)i[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let s=0;s<9;s++)i[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){let i=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-s*s)}},gl=class extends un{constructor(e=new ya,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Km={},vl=class n extends Kt{constructor(e){super(e),this.textures={}}load(e,t,i,s){let r=this,a=new Pi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Le(l),r.manager.itemError(e)}},i,s)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return n.createMaterialFromType(e)}static createMaterialFromType(e){let i=Is({ShadowMaterial:tl,SpriteMaterial:gs,RawShaderMaterial:pa,ShaderMaterial:Ke,PointsMaterial:ln,MeshPhysicalMaterial:il,MeshStandardMaterial:Es,MeshPhongMaterial:rr,MeshToonMaterial:nl,MeshNormalMaterial:sl,MeshLambertMaterial:rl,MeshDepthMaterial:ma,MeshDistanceMaterial:ga,MeshBasicMaterial:ci,MeshMatcapMaterial:al,LineDashedMaterial:ol,LineBasicMaterial:Rt,Material:Ct},Km)[e],s;return i===void 0?(wn(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new Ct):s=new i,s}static registerMaterial(e,t){Km[e]=t}},Sa=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xl=class extends Ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},_l=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Pi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Le(l),r.manager.itemError(e)}},i,s)}parse(e){let t={},i={};function s(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),_=Xr(m.type,g),b=new $s(_,m.stride);return b.uuid=m.uuid,m.usage!==void 0&&b.setUsage(m.usage),t[p]=b,b}function r(f,p){if(i[p]!==void 0)return i[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return i[p]=g,g}let a=e.isInstancedBufferGeometry?new xl:new Ie,o=e.data.index;if(o!==void 0){let f=Xr(o.type,o.array);a.setIndex(new He(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],v;if(p.isInterleavedBufferAttribute){let m=s(e.data,p.data);v=new ms(m,p.itemSize,p.offset,p.normalized)}else{let m=Xr(p.type,p.array),g=p.isInstancedBufferAttribute?jn:He;v=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),p.gpuType!==void 0&&(v.gpuType=p.gpuType),a.setAttribute(f,v)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],v=[];for(let m=0,g=p.length;m<g;m++){let _=p[m],b;if(_.isInterleavedBufferAttribute){let x=s(e.data,_.data);b=new ms(x,_.itemSize,_.offset,_.normalized)}else{let x=Xr(_.type,_.array);b=new He(x,_.itemSize,_.normalized)}_.name!==void 0&&(b.name=_.name),_.usage!==void 0&&b.setUsage(_.usage),_.gpuType!==void 0&&(b.gpuType=_.gpuType),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){let v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}let d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new qt().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Jd={},Zu=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=this,a=this.path===""?Sa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Pi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){s!==void 0&&s(h),Le("ObjectLoader: Can't parse "+e+".",h.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),Le("ObjectLoader: Can't load "+e);return}r.parse(c,t)},i,s)}loadAsync(e,t){return Ai(this,null,function*(){let i=this,s=this.path===""?Sa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let r=new Pi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=yield r.loadAsync(e,t),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return yield i.parseAsync(o)})}parse(e,t){let i=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,i),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}parseAsync(e){return Ai(this,null,function*(){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),r=yield this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l})}static registerGeometry(e,t){Jd[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let i=0,s=e.length;i<s;i++){let r=new Ss().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){let i={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new wo().fromJSON(e[r],s);i[o.uuid]=o}return i}parseGeometries(e,t){let i={};if(e!==void 0){let s=new _l;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Gm?o=Gm[l.type].fromJSON(l,t):l.type in Jd?o=Jd[l.type].fromJSON(l,t):fe(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){let i={},s={};if(e!==void 0){let r=new vl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),s[l.uuid]=i[l.uuid]}}return s}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let s=e[i],r=bs.parse(s);t[r.uuid]=r}return t}parseImages(e,t){let i=this,s={},r;function a(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),r.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(u)}else return l.data?{data:Xr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new As(t);r=new Ms(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){let h=e[c],d=h.url;if(Array.isArray(d)){let f=[];for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new vi(g.data,g.width,g.height)))}s[h.uuid]=new Vi(f)}else{let f=o(h.url);s[h.uuid]=new Vi(f)}}}return s}parseImagesAsync(e){return Ai(this,null,function*(){let t=this,i={},s;function r(a){return Ai(this,null,function*(){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return yield s.loadAsync(l)}else return a.data?{data:Xr(a.type,a.data),width:a.width,height:a.height}:null})}if(e!==void 0&&e.length>0){s=new Ms(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=yield r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new vi(p.data,p.width,p.height)))}i[l.uuid]=new Vi(u)}else{let u=yield r(l.url);i[l.uuid]=new Vi(u)}}}return i})}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(fe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&fe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&fe("ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,u;Array.isArray(c)?(u=new xs,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new vi:u=new Lt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=i(o.mapping,O_)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=i(o.wrap[0],Qm),u.wrapT=i(o.wrap[1],Qm)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=i(o.minFilter,Jm)),o.magFilter!==void 0&&(u.magFilter=i(o.magFilter,Jm)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,i,s,r){let a;function o(d){return t[d]===void 0&&fe("ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let p=0,v=d.length;p<v;p++){let m=d[p];i[m]===void 0&&fe("ObjectLoader: Undefined material",m),f.push(i[m])}return f}return i[d]===void 0&&fe("ObjectLoader: Undefined material",d),i[d]}}function c(d){return s[d]===void 0&&fe("ObjectLoader: Undefined texture",d),s[d]}let u,h;switch(e.type){case"Scene":a=new Ri,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new oe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Mo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ao(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Ut(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new In(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ur(e.color,e.intensity);break;case"DirectionalLight":a=new pl(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new cr(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ml(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new fl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new dl(e.color,e.groundColor,e.intensity);break;case"LightProbe":let d=new ya().fromArray(e.sh);a=new gl(d,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),h=l(e.material),a=new To(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=l(e.material),a=new et(u,h);break;case"InstancedMesh":u=o(e.geometry),h=l(e.material);let f=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new Co(u,h,f),a.instanceMatrix=new jn(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new jn(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=l(e.material),a=new Do(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new Wt().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new qt().fromJSON(m.boundingSphere)),Uc(Is({},m),{boundingBox:g,boundingSphere:_})}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new qt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Wt().fromJSON(e.boundingBox));break;case"LOD":a=new vs;break;case"Line":a=new xi(o(e.geometry),l(e.material));break;case"LineLoop":a=new Po(o(e.geometry),l(e.material));break;case"LineSegments":a=new ni(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new _i(o(e.geometry),l(e.material));break;case"Sprite":a=new er(l(e.material));break;case"Group":a=new sn;break;case"Bone":a=new na;break;default:a=new st}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new w().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,i,s,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let p=d[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let s=t[i.skeleton];s===void 0?fe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(s,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,s=e.getObjectByProperty("uuid",i);s!==void 0?t.target=s:t.target=new st}})}},O_={UVMapping:Rl,CubeReflectionMapping:pn,CubeRefractionMapping:Jn,EquirectangularReflectionMapping:Ra,EquirectangularRefractionMapping:Da,CubeUVReflectionMapping:fr},Qm={RepeatWrapping:qr,ClampToEdgeWrapping:gi,MirroredRepeatWrapping:jr},Jm={NearestFilter:Nt,NearestMipmapNearestFilter:Fh,NearestMipmapLinearFilter:pr,LinearFilter:mt,LinearMipmapNearestFilter:Pa,LinearMipmapLinearFilter:mn},$d=new WeakMap,Ku=class extends Kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{$d.has(a)===!0?(s&&s($d.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),$d.set(l,c),rn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},gu,Ea=class{static getContext(){return gu===void 0&&(gu=new(window.AudioContext||window.webkitAudioContext)),gu}static setContext(e){gu=e}},Qu=class extends Kt{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Pi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0),u=Ea.getContext(),h=e+"#decode";r.manager.itemStart(h),u.decodeAudioData(c,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){o(d),r.manager.itemEnd(h)})}catch(c){o(c)}},i,s);function o(l){s?s(l):Le(l),r.manager.itemError(e)}}},$m=new Ce,eg=new Ce,Hs=new Ce,Ju=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ut,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ut,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Hs.copy(e.projectionMatrix);let s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(Xs*t.fov*.5)/t.zoom,o,l;eg.elements[12]=-s,$m.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,Hs.elements[0]=2*t.near/(l-o),Hs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Hs),o=-a*t.aspect-r,l=a*t.aspect-r,Hs.elements[0]=2*t.near/(l-o),Hs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Hs)}this.cameraL.matrix.copy(e.matrixWorld).multiply(eg),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply($m),this.cameraR.matrixWorldNeedsUpdate=!0}},zr=-90,Gr=1,yl=class extends st{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(zr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new Ut(zr,Gr,e,t);r.layers=this.layers,this.add(r);let a=new Ut(zr,Gr,e,t);a.layers=this.layers,this.add(a);let o=new Ut(zr,Gr,e,t);o.layers=this.layers,this.add(o);let l=new Ut(zr,Gr,e,t);l.layers=this.layers,this.add(l);let c=new Ut(zr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Sl=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},El=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=F_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function F_(){this._document.hidden===!1&&this.reset()}var ks=new w,ef=new kt,H_=new w,zs=new w,Gs=new w,$u=class extends st{constructor(){super(),this.type="AudioListener",this.context=Ea.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new El}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ks,ef,H_),zs.set(0,0,-1).applyQuaternion(ef),Gs.set(0,1,0).applyQuaternion(ef),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ks.x,i),t.positionY.linearRampToValueAtTime(ks.y,i),t.positionZ.linearRampToValueAtTime(ks.z,i),t.forwardX.linearRampToValueAtTime(zs.x,i),t.forwardY.linearRampToValueAtTime(zs.y,i),t.forwardZ.linearRampToValueAtTime(zs.z,i),t.upX.linearRampToValueAtTime(Gs.x,i),t.upY.linearRampToValueAtTime(Gs.y,i),t.upZ.linearRampToValueAtTime(Gs.z,i)}else t.setPosition(ks.x,ks.y,ks.z),t.setOrientation(zs.x,zs.y,zs.z,Gs.x,Gs.y,Gs.z)}},bl=class extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){fe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(fe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(fe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Vs=new w,tg=new kt,k_=new w,Ws=new w,eh=class extends bl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Vs,tg,k_),Ws.set(0,0,1).applyQuaternion(tg);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Vs.x,i),t.positionY.linearRampToValueAtTime(Vs.y,i),t.positionZ.linearRampToValueAtTime(Vs.z,i),t.orientationX.linearRampToValueAtTime(Ws.x,i),t.orientationY.linearRampToValueAtTime(Ws.y,i),t.orientationZ.linearRampToValueAtTime(Ws.z,i)}else t.setPosition(Vs.x,Vs.y,Vs.z),t.setOrientation(Ws.x,Ws.y,Ws.z)}},th=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Al=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){kt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let a=this._workIndex*r;kt.multiplyQuaternionsFlat(e,a,e,t,e,i),kt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},$f="\\[\\]\\.:\\/",z_=new RegExp("["+$f+"]","g"),ep="[^"+$f+"]",G_="[^"+$f.replace("\\.","")+"]",V_=/((?:WC+[\/:])*)/.source.replace("WC",ep),W_=/(WCOD+)?/.source.replace("WCOD",G_),X_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),q_=new RegExp("^"+V_+W_+X_+Y_+"$"),j_=["material","materials","bones","map"],mf=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z_,"")}static parseTrackName(e){let t=q_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);j_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=mf;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ih=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ni(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,s=arguments.length;i!==s;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],f=d.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,m=a;v!==m;++v)r[v].push(new Et(d,i[v],s[v]))}else if(p<c){o=e[p];let v=--c,m=e[v];t[m.uuid]=p,e[p]=m,t[f]=v,e[v]=d;for(let g=0,_=a;g!==_;++g){let b=r[g],x=b[v],A=b[p];b[p]=x,A===void 0&&(A=new Et(d,i[g],s[g])),b[v]=A}}else e[p]!==o&&Le("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,s=i.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){let h=r++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=s;f!==p;++f){let v=i[f],m=v[h],g=v[u];v[u]=m,v[h]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,s=i.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<r){let d=--r,f=e[d],p=--a,v=e[p];h!==d&&(t[f.uuid]=h),e[h]=f,d!==p&&(t[v.uuid]=d),e[d]=v,e.pop();for(let m=0,g=s;m!==g;++m){let _=i[m],b=_[d],x=_[p];_[h]=b,_[d]=x,_.pop()}}else{let d=--a,f=e[d];h!==d&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,v=s;p!==v;++p){let m=i[p];m[h]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let i=this._bindingsIndicesByPath,s=i[e],r=this._bindings;if(s!==void 0)return r[s];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);s=r.length,i[e]=s,a.push(e),o.push(t),r.push(h);for(let d=u,f=l.length;d!==f;++d){let p=l[d];h[d]=new Et(p,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=s[o];t[c]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),s[i]=s[o],s.pop()}}},Ml=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:hs,endingEnd:hs};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ff,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case dc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,a=i===Hf;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===Of){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=ds,s.endingEnd=ds):(e?s.endingStart=this.zeroSlopeAtStart?ds:hs:s.endingStart=Kr,t?s.endingEnd=this.zeroSlopeAtEnd?ds:hs:s.endingEnd=Kr)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},Z_=new Float32Array(1),nh=class extends Zt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;p=new Al(Et.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[h]=p}o[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new va(new Float32Array(2),new Float32Array(2),1,Z_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,a=typeof e=="string"?bs.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=dc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Ml(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?bs.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},sh=class extends ea{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=i;for(let r=0;r<this.textures.length;r++){let a=new Ks(null,e,t,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(s)}},tt=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},K_=0,rh=class extends Zt{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.usage=mc,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,s=t.length;i<s;i++){let r=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},ah=class extends $s{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},oh=class{constructor(e,t,i,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ig=new Ce,lh=class{constructor(e,t,i=0,s=1/0){this.ray=new on(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ig.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ig),this}intersectObject(e,t=!0,i=[]){return gf(e,this,i,t),i.sort(ng),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gf(e[s],this,i,t);return i.sort(ng),i}};function ng(n,e){return n.distance-e.distance}function gf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)gf(r[a],e,t,!0)}}var ch=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},hr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},uh=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},rp=class rp{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};rp.prototype.isMatrix2=!0;var hh=rp,sg=new X,Tl=class{constructor(e=new X(1/0,1/0),t=new X(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=sg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rg=new w,vu=new w,Vr=new w,Wr=new w,tf=new w,Q_=new w,J_=new w,dh=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){rg.subVectors(e,this.start),vu.subVectors(this.end,this.start);let i=vu.dot(vu);if(i===0)return 0;let r=vu.dot(rg)/i;return t&&(r=Xe(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Q_,i=J_){let s=10000000000000001e-32,r,a,o=this.start,l=e.start,c=this.end,u=e.end;Vr.subVectors(c,o),Wr.subVectors(u,l),tf.subVectors(o,l);let h=Vr.dot(Vr),d=Wr.dot(Wr),f=Wr.dot(tf);if(h<=s&&d<=s)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(h<=s)r=0,a=f/d,a=Xe(a,0,1);else{let p=Vr.dot(tf);if(d<=s)a=0,r=Xe(-p/h,0,1);else{let v=Vr.dot(Wr),m=h*d-v*v;m!==0?r=Xe((v*f-p*d)/m,0,1):r=0,a=(v*r+f)/d,a<0?(a=0,r=Xe(-p/h,0,1)):a>1&&(a=1,r=Xe((v-p)/h,0,1))}}return t.copy(o).addScaledVector(Vr,r),i.copy(l).addScaledVector(Wr,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},ag=new w,fh=class extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new Ie,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new _e(s,3));let r=new Rt({fog:!1,toneMapped:!1});this.cone=new ni(i,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ag.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ag),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},us=new w,xu=new Ce,nf=new Ce,ph=class extends ni{constructor(e){let t=v0(e),i=new Ie,s=[],r=[];for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new _e(s,3)),i.setAttribute("color",new _e(r,3));let a=new Rt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new oe(255),l=new oe(65280);this.setColors(o,l)}updateMatrixWorld(e){let t=this.bones,i=this.geometry,s=i.getAttribute("position");nf.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(xu.multiplyMatrices(nf,o.matrixWorld),us.setFromMatrixPosition(xu),s.setXYZ(a,us.x,us.y,us.z),xu.multiplyMatrices(nf,o.parent.matrixWorld),us.setFromMatrixPosition(xu),s.setXYZ(a+1,us.x,us.y,us.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function v0(n){let e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push(...v0(n.children[t]));return e}var mh=class extends et{constructor(e,t,i){let s=new cn(t,4,2),r=new ci({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},$_=new w,og=new oe,lg=new oe,gh=class extends st{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let s=new fa(t);s.rotateY(Math.PI*.5),this.material=new ci({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new He(a,3)),this.add(new et(s,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");og.copy(this.light.color),lg.copy(this.light.groundColor);for(let i=0,s=t.count;i<s;i++){let r=i<s/2?og:lg;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt($_.setFromMatrixPosition(this.light.matrixWorld).negate())}},Ts=class extends ni{constructor(e=10,t=10,i=4473924,s=8947848){i=new oe(i),s=new oe(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let v=d===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let u=new Ie;u.setAttribute("position",new _e(l,3)),u.setAttribute("color",new _e(c,3));let h=new Rt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},vh=class extends ni{constructor(e=10,t=16,i=8,s=64,r=4473924,a=8947848){r=new oe(r),a=new oe(a);let o=[],l=[];if(t>1)for(let h=0;h<t;h++){let d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);let v=h&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<i;h++){let d=h&1?r:a,f=e-e/i*h;for(let p=0;p<s;p++){let v=p/s*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f;o.push(m,0,g),l.push(d.r,d.g,d.b),v=(p+1)/s*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f,o.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Ie;c.setAttribute("position",new _e(o,3)),c.setAttribute("color",new _e(l,3));let u=new Rt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},cg=new w,_u=new w,ug=new w,xh=class extends st{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new Ie;s.setAttribute("position",new _e([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Rt({fog:!1,toneMapped:!1});this.lightPlane=new xi(s,r),this.add(this.lightPlane),s=new Ie,s.setAttribute("position",new _e([0,0,0,0,0,1],3)),this.targetLine=new xi(s,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),cg.setFromMatrixPosition(this.light.matrixWorld),_u.setFromMatrixPosition(this.light.target.matrixWorld),ug.subVectors(_u,cg),this.lightPlane.lookAt(_u),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_u),this.targetLine.scale.z=ug.length()}},yu=new w,zt=new Qn,_h=class extends ni{constructor(e){let t=new Ie,i=new Rt({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new _e(s,3)),t.setAttribute("color",new _e(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new oe(16755200),u=new oe(16711680),h=new oe(43775),d=new oe(16777215),f=new oe(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,i,s,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,i=1,s=1,r,a;if(zt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Ci)r=-1,a=1;else if(this.camera.coordinateSystem===fs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Vt("c",t,e,zt,0,0,r),Vt("t",t,e,zt,0,0,a),Vt("n1",t,e,zt,-i,-s,r),Vt("n2",t,e,zt,i,-s,r),Vt("n3",t,e,zt,-i,s,r),Vt("n4",t,e,zt,i,s,r),Vt("f1",t,e,zt,-i,-s,a),Vt("f2",t,e,zt,i,-s,a),Vt("f3",t,e,zt,-i,s,a),Vt("f4",t,e,zt,i,s,a),Vt("u1",t,e,zt,i*.7,s*1.1,r),Vt("u2",t,e,zt,-i*.7,s*1.1,r),Vt("u3",t,e,zt,0,s*2,r),Vt("cf1",t,e,zt,-i,0,a),Vt("cf2",t,e,zt,i,0,a),Vt("cf3",t,e,zt,0,-s,a),Vt("cf4",t,e,zt,0,s,a),Vt("cn1",t,e,zt,-i,0,r),Vt("cn2",t,e,zt,i,0,r),Vt("cn3",t,e,zt,0,-s,r),Vt("cn4",t,e,zt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Vt(n,e,t,i,s,r,a){yu.set(s,r,a).unproject(i);let o=e[n];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],yu.x,yu.y,yu.z)}}var Su=new Wt,yh=class extends ni{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new Ie;r.setIndex(new He(i,1)),r.setAttribute("position",new He(s,3)),super(r,new Rt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Su.setFromObject(this.object),Su.isEmpty())return;let e=Su.min,t=Su.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Sh=class extends ni{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ie;r.setIndex(new He(i,1)),r.setAttribute("position",new _e(s,3)),super(r,new Rt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Eh=class extends xi{constructor(e,t=1,i=16776960){let s=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ie;a.setAttribute("position",new _e(r,3)),a.computeBoundingSphere(),super(a,new Rt({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ie;l.setAttribute("position",new _e(o,3)),l.computeBoundingSphere(),this.add(new et(l,new ci({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},hg=new w,Eu,sf,bh=class extends st{constructor(e=new w(0,0,1),t=new w(0,0,0),i=1,s=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",Eu===void 0&&(Eu=new Ie,Eu.setAttribute("position",new _e([0,0,0,0,1,0],3)),sf=new aa(.5,1,5,1),sf.translate(0,-.5,0)),this.position.copy(t),this.line=new xi(Eu,new Rt({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new et(sf,new ci({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{hg.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(hg,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},ba=class extends ni{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ie;s.setAttribute("position",new _e(t,3)),s.setAttribute("color",new _e(i,3));let r=new Rt({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){let s=new oe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ah=class{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new ys,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,a){return this.currentPath.bezierCurveTo(e,t,i,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,h=c.length;for(let d=0,f=h-1;d<h;f=d++){let p=c[d],v=c[f];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new X);if(e(u,l))return u;let h=u.y,d=[],f=l.length;for(let p=0;p<f;p++){let v=l[p],m=l[(p+1)%f];if(v.y>h!=m.y>h){let g=v.x+(h-v.y)*(m.x-v.x)/(m.y-v.y);d.push(g)}}return d.length>1&&(d.sort((p,v)=>p-v),u.x=(d[0]+d[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(fe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let s=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=Wi.area(c);if(u===0)continue;let h=new Tl;for(let d=0;d<c.length;d++)h.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:h,interiorPoint:t(c,h),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],u=0;for(let h=l-1;h>=0;h--){let d=r[h];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,u=d.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Ss;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new ys;u.curves=l.subPath.curves,c.holes.push(u)}return a}},Aa=class extends Zt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ey(n,e){let t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function ty(n,e){let t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function iy(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function jh(n,e,t,i){let s=ny(i);switch(t){case Vh:return n*e;case Ul:return n*e/s.components*s.byteLength;case Ia:return n*e/s.components*s.byteLength;case vn:return n*e*2/s.components*s.byteLength;case Ll:return n*e*2/s.components*s.byteLength;case Wh:return n*e*3/s.components*s.byteLength;case li:return n*e*4/s.components*s.byteLength;case Bl:return n*e*4/s.components*s.byteLength;case Ua:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Hl:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case Fl:return Math.max(n,8)*Math.max(e,8)/2;case kl:case zl:case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Oa:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fa:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(n){switch(n){case At:case Hh:return{byteLength:1,components:1};case mr:case kh:case ji:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case Ei:case Dl:case jt:return{byteLength:4,components:1};case zh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Mh=class{static contain(e,t){return ey(e,t)}static cover(e,t){return ty(e,t)}static fill(e){return iy(e)}static getByteLength(e,t,i,s){return jh(e,t,i,s)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function H0(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sy(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,US=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:ry,alphahash_pars_fragment:ay,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:dy,batching_pars_vertex:fy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:vy,iridescence_fragment:xy,bumpmap_pars_fragment:_y,clipping_planes_fragment:yy,clipping_planes_pars_fragment:Sy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:by,color_fragment:Ay,color_pars_fragment:My,color_pars_vertex:Ty,color_vertex:wy,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Py,displacementmap_vertex:Iy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ly,colorspace_fragment:By,colorspace_pars_fragment:Ny,envmap_fragment:Oy,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Hy,envmap_pars_vertex:ky,envmap_physical_pars_fragment:Qy,envmap_vertex:zy,fog_vertex:Gy,fog_pars_vertex:Vy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:qy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Zy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:$y,lights_phong_fragment:eS,lights_phong_pars_fragment:tS,lights_physical_fragment:iS,lights_physical_pars_fragment:nS,lights_fragment_begin:sS,lights_fragment_maps:rS,lights_fragment_end:aS,lightprobes_pars_fragment:oS,logdepthbuf_fragment:lS,logdepthbuf_pars_fragment:cS,logdepthbuf_pars_vertex:uS,logdepthbuf_vertex:hS,map_fragment:dS,map_pars_fragment:fS,map_particle_fragment:pS,map_particle_pars_fragment:mS,metalnessmap_fragment:gS,metalnessmap_pars_fragment:vS,morphinstance_vertex:xS,morphcolor_vertex:_S,morphnormal_vertex:yS,morphtarget_pars_vertex:SS,morphtarget_vertex:ES,normal_fragment_begin:bS,normal_fragment_maps:AS,normal_pars_fragment:MS,normal_pars_vertex:TS,normal_vertex:wS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:RS,clearcoat_normal_fragment_maps:DS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:IS,opaque_fragment:US,packing:LS,premultiplied_alpha_fragment:BS,project_vertex:NS,dithering_fragment:OS,dithering_pars_fragment:FS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:zS,shadowmap_pars_vertex:GS,shadowmap_vertex:VS,shadowmask_pars_fragment:WS,skinbase_vertex:XS,skinning_pars_vertex:YS,skinning_vertex:qS,skinnormal_vertex:jS,specularmap_fragment:ZS,specularmap_pars_fragment:KS,tonemapping_fragment:QS,tonemapping_pars_fragment:JS,transmission_fragment:$S,transmission_pars_fragment:eE,uv_pars_fragment:tE,uv_pars_vertex:iE,uv_vertex:nE,worldpos_vertex:sE,background_vert:rE,background_frag:aE,backgroundCube_vert:oE,backgroundCube_frag:lE,cube_vert:cE,cube_frag:uE,depth_vert:hE,depth_frag:dE,distance_vert:fE,distance_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:vE,linedashed_frag:xE,meshbasic_vert:_E,meshbasic_frag:yE,meshlambert_vert:SE,meshlambert_frag:EE,meshmatcap_vert:bE,meshmatcap_frag:AE,meshnormal_vert:ME,meshnormal_frag:TE,meshphong_vert:wE,meshphong_frag:CE,meshphysical_vert:RE,meshphysical_frag:DE,meshtoon_vert:PE,meshtoon_frag:IE,points_vert:UE,points_frag:LE,shadow_vert:BE,shadow_frag:NE,sprite_vert:OE,sprite_frag:FE},pe={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_n={basic:{uniforms:ui([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ui([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ui([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ui([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ui([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new oe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ui([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ui([pe.points,pe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ui([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ui([pe.common,pe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ui([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ui([pe.sprite,pe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:ui([pe.common,pe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:ui([pe.lights,pe.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};_n.physical={uniforms:ui([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Zh={r:0,b:0,g:0},HE=new Ce,k0=new Ze;k0.set(-1,0,0,0,1,0,0,0,1);function kE(n,e,t,i,s,r){let a=new oe(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let x=_.backgroundBlurriness>0;b=e.get(b,x)}return b}function p(_){let b=!1,x=f(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),b=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===fr)?(c===void 0&&(c=new et(new _s(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:gr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(k0),c.material.toneMapped=rt.getTransfer(x.colorSpace)!==xt,(u!==x||h!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new et(new Oi(2,2),new Ke({name:"BackgroundMaterial",uniforms:gr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=rt.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Zh,Qf(n)),t.buffers.color.setClear(Zh.r,Zh.g,Zh.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:v,dispose:g}}function zE(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(P,I,H,N,F){let Z=!1,V=h(P,N,H,I);r!==V&&(r=V,c(r.object)),Z=f(P,N,H,F),Z&&p(P,N,H,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(P,I,H,N),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function h(P,I,H,N){let F=N.wireframe===!0,Z=i[I.id];Z===void 0&&(Z={},i[I.id]=Z);let V=P.isInstancedMesh===!0?P.id:0,re=Z[V];re===void 0&&(re={},Z[V]=re);let q=re[H.id];q===void 0&&(q={},re[H.id]=q);let J=q[F];return J===void 0&&(J=d(l()),q[F]=J),J}function d(P){let I=[],H=[],N=[];for(let F=0;F<t;F++)I[F]=0,H[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,I,H,N){let F=r.attributes,Z=I.attributes,V=0,re=H.getAttributes();for(let q in re)if(re[q].location>=0){let ee=F[q],Ne=Z[q];if(Ne===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Ne=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Ne=P.instanceColor)),ee===void 0||ee.attribute!==Ne||Ne&&ee.data!==Ne.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function p(P,I,H,N){let F={},Z=I.attributes,V=0,re=H.getAttributes();for(let q in re)if(re[q].location>=0){let ee=Z[q];ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let Ne={};Ne.attribute=ee,ee&&ee.data&&(Ne.data=ee.data),F[q]=Ne,V++}r.attributes=F,r.attributesNum=V,r.index=N}function v(){let P=r.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function m(P){g(P,0)}function g(P,I){let H=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;H[P]=1,N[P]===0&&(n.enableVertexAttribArray(P),N[P]=1),F[P]!==I&&(n.vertexAttribDivisor(P,I),F[P]=I)}function _(){let P=r.newAttributes,I=r.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==P[H]&&(n.disableVertexAttribArray(H),I[H]=0)}function b(P,I,H,N,F,Z,V){V===!0?n.vertexAttribIPointer(P,I,H,F,Z):n.vertexAttribPointer(P,I,H,N,F,Z)}function x(P,I,H,N){v();let F=N.attributes,Z=H.getAttributes(),V=I.defaultAttributeValues;for(let re in Z){let q=Z[re];if(q.location>=0){let J=F[re];if(J===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let ee=J.normalized,Ne=J.itemSize,Re=e.get(J);if(Re===void 0)continue;let vt=Re.buffer,ot=Re.type,ft=Re.bytesPerElement,Q=ot===n.INT||ot===n.UNSIGNED_INT||J.gpuType===Dl;if(J.isInterleavedBufferAttribute){let ie=J.data,Se=ie.stride,We=J.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<q.locationSize;Me++)g(q.location+Me,ie.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<q.locationSize;Me++)m(q.location+Me);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Me=0;Me<q.locationSize;Me++)b(q.location+Me,Ne/q.locationSize,ot,ee,Se*ft,(We+Ne/q.locationSize*Me)*ft,Q)}else{if(J.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)g(q.location+ie,J.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let ie=0;ie<q.locationSize;ie++)b(q.location+ie,Ne/q.locationSize,ot,ee,Ne*ft,Ne/q.locationSize*ie*ft,Q)}}else if(V!==void 0){let ee=V[re];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(q.location,ee);break;case 3:n.vertexAttrib3fv(q.location,ee);break;case 4:n.vertexAttrib4fv(q.location,ee);break;default:n.vertexAttrib1fv(q.location,ee)}}}}_()}function A(){T();for(let P in i){let I=i[P];for(let H in I){let N=I[H];for(let F in N){let Z=N[F];for(let V in Z)u(Z[V].object),delete Z[V];delete N[F]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let I=i[P.id];for(let H in I){let N=I[H];for(let F in N){let Z=N[F];for(let V in Z)u(Z[V].object),delete Z[V];delete N[F]}}delete i[P.id]}function C(P){for(let I in i){let H=i[I];for(let N in H){let F=H[N];if(F[P.id]===void 0)continue;let Z=F[P.id];for(let V in Z)u(Z[V].object),delete Z[V];delete F[P.id]}}}function y(P){for(let I in i){let H=i[I],N=P.isInstancedMesh===!0?P.id:0,F=H[N];if(F!==void 0){for(let Z in F){let V=F[Z];for(let re in V)u(V[re].object),delete V[re];delete F[Z]}delete H[N],Object.keys(H).length===0&&delete i[I]}}}function T(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function GE(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function VE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==li&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==At&&C!==jt&&!y&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,maxSamples:A,samples:E}}function WE(n){let e=this,t=null,i=0,s=!1,r=!1,a=new wi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,x=g.clippingState||null;l.value=x,x=u(p,d,b,f);for(let A=0;A!==b;++A)x[A]=t[A];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,x=f;b!==v;++b,x+=4)a.copy(h[b]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var ka=4,XE=6,YE=20,qE=256,xc=new In,x0=new oe,ap=null,op=0,lp=0,cp=!1,jE=new w,vr=new w,Sc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=jE}=r;ap=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ap,op,lp),this._renderer.xr.enabled=cp,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pn||e.mapping===Jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ap=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:ji,format:li,colorSpace:Cn,depthBuffer:!1},s=_0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ZE(r)),this._blurMaterial=QE(r,e,t),this._ggxMaterial=KE(r,e,t)}return s}_compileMaterial(e){let t=new et(new Ie,e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,i,s,r){let l=new Ut(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(x0),h.toneMapping=qi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new _s,new ci({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(x0),g=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let A=this._cubeSize;Ha(s,x*A,b>2?A:0,A,A),h.setRenderTarget(s),g&&h.render(v,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===pn||e.mapping===Jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=S0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-ka?i-p+ka:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ha(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(o,xc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ha(e,m,g,3*v,2*v),s.setRenderTarget(e),s.render(o,xc)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ka?s-this._lodMax+ka:0),d=4*(this._cubeSize-u);Ha(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,xc)}};function ZE(n){let e=[],t=[],i=n,s=n-ka+1+XE;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),v=new Float32Array(f*d*h);for(let g=0;g<h;g++){let _=g%3*2/3-1,b=g>2?0:-1,x=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];p.set(x,f*d*g);for(let A=0;A<d;A++){let E=u[A*2]*2-1,C=u[A*2+1]*2-1;g===0?vr.set(1,C,E):g===1?vr.set(-E,1,-C):g===2?vr.set(-E,C,1):g===3?vr.set(-1,C,-E):g===4?vr.set(-E,-1,C):vr.set(E,C,-1),vr.toArray(v,(g*d+A)*f)}}let m=new Ie;m.setAttribute("position",new He(p,f)),m.setAttribute("outputDirection",new He(v,f)),t.push(new et(m,null)),i>ka&&i--}return{lodMeshes:t,sizeLods:e}}function _0(n,e,t){let i=new at(n,e,t);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function KE(n,e,t){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function QE(n,e,t){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:YE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function y0(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function S0(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function Qh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _s(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Dt});r.uniforms.tEquirect.value=t;let a=new et(s,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=mt),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function JE(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ra||f===Da)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new Ec(p.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===Ra||f===Da,v=f===pn||f===Jn;if(p||v){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Sc(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new Sc(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Ra?d.mapping=pn:f===Da&&(d.mapping=Jn),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function $E(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&wn("WebGLRenderer: "+i+" extension not supported."),s}}}function eb(n,e,t,i){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,v=0;if(p===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let b=0,x=_.length;b<x;b+=3){let A=_[b+0],E=_[b+1],C=_[b+2];d.push(A,E,E,C,C,A)}}else{let _=p.array;v=p.version;for(let b=0,x=_.length/3-1;b<x;b+=3){let A=b+0,E=b+1,C=b+2;d.push(A,E,E,C,C,A)}}let m=new(p.count>=65535?ia:ta)(d,1);m.version=v;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function tb(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ib(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function nb(n,e,t){let i=new WeakMap,s=new ut;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let D=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var f=D;d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],x=0;p===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let C=new Float32Array(A*E*4*h),y=new Zs(C,A,E,h);y.type=jt,y.needsUpdate=!0;let T=x*4;for(let P=0;P<h;P++){let I=g[P],H=_[P],N=b[P],F=A*E*4*P;for(let Z=0;Z<I.count;Z++){let V=Z*T;p===!0&&(s.fromBufferAttribute(I,Z),C[F+V+0]=s.x,C[F+V+1]=s.y,C[F+V+2]=s.z,C[F+V+3]=0),v===!0&&(s.fromBufferAttribute(H,Z),C[F+V+4]=s.x,C[F+V+5]=s.y,C[F+V+6]=s.z,C[F+V+7]=0),m===!0&&(s.fromBufferAttribute(N,Z),C[F+V+8]=s.x,C[F+V+9]=s.y,C[F+V+10]=s.z,C[F+V+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:y,size:new X(A,E)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function sb(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var rb={[Ph]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Lh]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};function ab(n,e,t,i,s,r){let a=new at(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ie;c.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _e([0,2,0,0,2,0],2));let u=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new et(c,u),d=new In(-1,1,1,-1,0,1),f=null,p=null,v=!1,m,g=null,_=[],b=!1;this.setSize=function(x,A){a.setSize(x,A),o!==null&&o.setSize(x,A),l!==null&&l.setSize(x,A);for(let E=0;E<_.length;E++){let C=_[E];C.setSize&&C.setSize(x,A)}},this.setEffects=function(x){_=x,b=_.length>0&&_[0].isRenderPass===!0;let A=a.width,E=a.height;_.length>0&&o===null&&(o=new at(A,E,{type:ji,depthBuffer:!1,stencilBuffer:!1}),l=new at(A,E,{type:ji,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let y=_[C];y.setSize&&y.setSize(A,E)}},this.begin=function(x,A){if(v||x.toneMapping===qi&&_.length===0)return!1;if(g=A,A!==null){let E=A.width,C=A.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return b===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=qi,!0},this.hasRenderPass=function(){return b},this.end=function(x,A){x.toneMapping=m,v=!0;let E=a,C=o;for(let y=0;y<_.length;y++){let T=_[y];T.enabled!==!1&&(T.render(x,C,E,A),T.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,u.defines={},rt.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let y=rb[p];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(g),x.render(h,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var z0=new Lt,dp=new yi(1,1),G0=new Zs,V0=new Ks,W0=new xs,E0=[],b0=[],A0=new Float32Array(16),M0=new Float32Array(9),T0=new Float32Array(4);function Ga(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=E0[s];if(r===void 0&&(r=new Float32Array(s),E0[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jh(n,e){let t=b0[e];t===void 0&&(t=new Int32Array(e),b0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ob(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function cb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function hb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,i))return;T0.set(i),n.uniformMatrix2fv(this.addr,!1,T0),$t(t,i)}}function db(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,i))return;M0.set(i),n.uniformMatrix3fv(this.addr,!1,M0),$t(t,i)}}function fb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,i))return;A0.set(i),n.uniformMatrix4fv(this.addr,!1,A0),$t(t,i)}}function pb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function gb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function vb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function xb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function Sb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function Eb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dp.compareFunction=t.isReversedDepthBuffer()?pc:fc,r=dp):r=z0,t.setTexture2D(e||r,s)}function bb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||V0,s)}function Ab(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||W0,s)}function Mb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||G0,s)}function Tb(n){switch(n){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return hb;case 35675:return db;case 35676:return fb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return _b;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Mb}}function wb(n,e){n.uniform1fv(this.addr,e)}function Cb(n,e){let t=Ga(e,this.size,2);n.uniform2fv(this.addr,t)}function Rb(n,e){let t=Ga(e,this.size,3);n.uniform3fv(this.addr,t)}function Db(n,e){let t=Ga(e,this.size,4);n.uniform4fv(this.addr,t)}function Pb(n,e){let t=Ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ib(n,e){let t=Ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ub(n,e){let t=Ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lb(n,e){n.uniform1iv(this.addr,e)}function Bb(n,e){n.uniform2iv(this.addr,e)}function Nb(n,e){n.uniform3iv(this.addr,e)}function Ob(n,e){n.uniform4iv(this.addr,e)}function Fb(n,e){n.uniform1uiv(this.addr,e)}function Hb(n,e){n.uniform2uiv(this.addr,e)}function kb(n,e){n.uniform3uiv(this.addr,e)}function zb(n,e){n.uniform4uiv(this.addr,e)}function Gb(n,e,t){let i=this.cache,s=e.length,r=Jh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=dp:a=z0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Vb(n,e,t){let i=this.cache,s=e.length,r=Jh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||V0,r[a])}function Wb(n,e,t){let i=this.cache,s=e.length,r=Jh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||W0,r[a])}function Xb(n,e,t){let i=this.cache,s=e.length,r=Jh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||G0,r[a])}function Yb(n){switch(n){case 5126:return wb;case 35664:return Cb;case 35665:return Rb;case 35666:return Db;case 35674:return Pb;case 35675:return Ib;case 35676:return Ub;case 5124:case 35670:return Lb;case 35667:case 35671:return Bb;case 35668:case 35672:return Nb;case 35669:case 35673:return Ob;case 5125:return Fb;case 36294:return Hb;case 36295:return kb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Xb}}var fp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tb(t.type)}},pp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yb(t.type)}},mp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},up=/(\w+)(\])?(\[|\.)?/g;function w0(n,e){n.seq.push(e),n.map[e.id]=e}function qb(n,e,t){let i=n.name,s=i.length;for(up.lastIndex=0;;){let r=up.exec(i),a=up.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){w0(t,c===void 0?new fp(o,n,e):new pp(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new mp(o),w0(t,h)),t=h}}}var za=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qb(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function C0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var jb=37297,Zb=0;function Kb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var R0=new Ze;function Qb(n){rt._getMatrix(R0,rt.workingColorSpace,n);let e=`mat3( ${R0.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Qr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function D0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kb(n.getShaderSource(e),o)}else return r}function Jb(n,e){let t=Qb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $b={[Ph]:"Linear",[Ih]:"Reinhard",[Uh]:"Cineon",[Lh]:"ACESFilmic",[Nh]:"AgX",[Oh]:"Neutral",[Bh]:"Custom"};function eA(n,e){let t=$b[e];return t===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kh=new w;function tA(){rt.getLuminanceCoefficients(Kh);let n=Kh.x.toFixed(4),e=Kh.y.toFixed(4),t=Kh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yc).join(`
`)}function nA(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sA(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function yc(n){return n!==""}function P0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(n){return n.replace(rA,oA)}var aA=new Map;function oA(n,e){let t=it[e];if(t===void 0){let i=aA.get(e);if(i!==void 0)t=it[i],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gp(t)}var lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(n){return n.replace(lA,cA)}function cA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function L0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var uA={[Ma]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function hA(n){return uA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dA={[pn]:"ENVMAP_TYPE_CUBE",[Jn]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE_UV"};function fA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var pA={[Jn]:"ENVMAP_MODE_REFRACTION"};function mA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pA[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gA={[Ca]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function vA(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gA[n.combine]||"ENVMAP_BLENDING_NONE"}function xA(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _A(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=hA(t),c=fA(t),u=mA(t),h=vA(t),d=xA(t),f=iA(t),p=nA(r),v=s.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yc).join(`
`),g.length>0&&(g+=`
`)):(m=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yc).join(`
`),g=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?it.tonemapping_pars_fragment:"",t.toneMapping!==qi?eA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Jb("linearToOutputTexel",t.outputColorSpace),tA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yc).join(`
`)),a=gp(a),a=P0(a,t),a=I0(a,t),o=gp(o),o=P0(o,t),o=I0(o,t),a=U0(a),o=U0(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=_+m+a,x=_+g+o,A=C0(s,s.VERTEX_SHADER,b),E=C0(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(A)||"",N=s.getShaderInfoLog(E)||"",F=I.trim(),Z=H.trim(),V=N.trim(),re=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,E);else{let J=D0(s,A,"vertex"),ee=D0(s,E,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+J+`
`+ee)}else F!==""?fe("WebGLProgram: Program Info Log:",F):(Z===""||V==="")&&(q=!1);q&&(P.diagnostics={runnable:re,programLog:F,vertexShader:{log:Z,prefix:m},fragmentShader:{log:V,prefix:g}})}s.deleteShader(A),s.deleteShader(E),y=new za(s,v),T=sA(s,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,jb)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var yA=0,vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xp(e),t.set(e,i)),i}},xp=class{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}};function SA(n){return n===vn||n===Oa||n===Fa}function EA(n,e,t,i,s,r){let a=new Qs,o=new vp,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,D,P,I,H){let N=P.fog,F=I.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||Z,V),q=re&&re.mapping===fr?re.image.height:null,J=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&fe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ne=ee!==void 0?ee.length:0,Re=0;F.morphAttributes.position!==void 0&&(Re=1),F.morphAttributes.normal!==void 0&&(Re=2),F.morphAttributes.color!==void 0&&(Re=3);let vt,ot,ft,Q;if(J){let Pt=_n[J];vt=Pt.vertexShader,ot=Pt.fragmentShader}else{vt=y.vertexShader,ot=y.fragmentShader;let Pt=o.getVertexShaderStage(y),yt=o.getFragmentShaderStage(y);o.update(y,Pt,yt),ft=Pt.id,Q=yt.id}let ie=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),We=I.isInstancedMesh===!0,Me=I.isBatchedMesh===!0,Ye=!!y.map,bt=!!y.matcap,ne=!!re,ae=!!y.aoMap,le=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,de=!!y.normalMap,Ge=!!y.displacementMap,ze=!!y.emissiveMap,qe=!!y.metalnessMap,Qe=!!y.roughnessMap,U=y.anisotropy>0,_t=y.clearcoat>0,lt=y.dispersion>0,R=y.retroreflectivity>0,S=y.iridescence>0,O=y.sheen>0,G=y.transmission>0,j=U&&!!y.anisotropyMap,ue=_t&&!!y.clearcoatMap,he=_t&&!!y.clearcoatNormalMap,K=_t&&!!y.clearcoatRoughnessMap,te=S&&!!y.iridescenceMap,me=S&&!!y.iridescenceThicknessMap,Oe=O&&!!y.sheenColorMap,ye=O&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Fe=!!y.specularColorMap,Ve=!!y.specularIntensityMap,Je=G&&!!y.transmissionMap,B=G&&!!y.thicknessMap,ve=!!y.gradientMap,$=!!y.alphaMap,xe=y.alphaTest>0,Ae=!!y.alphaHash,se=!!y.extensions,ke=qi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ke=n.toneMapping);let Ue={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:vt,fragmentShader:ot,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Me,batchingColor:Me&&I._colorsTexture!==null,instancing:We,instancingColor:We&&I.instanceColor!==null,instancingMorph:We&&I.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:bt,envMap:ne,envMapMode:ne&&re.mapping,envMapCubeUVHeight:q,aoMap:ae,lightMap:le,bumpMap:ce,normalMap:de,displacementMap:Ge,emissiveMap:ze,normalMapObjectSpace:de&&y.normalMapType===kf,normalMapTangentSpace:de&&y.normalMapType===Ln,packedNormalMap:de&&y.normalMapType===Ln&&SA(y.normalMap.format),metalnessMap:qe,roughnessMap:Qe,anisotropy:U,anisotropyMap:j,clearcoat:_t,clearcoatMap:ue,clearcoatNormalMap:he,clearcoatRoughnessMap:K,dispersion:lt,retroreflection:R,iridescence:S,iridescenceMap:te,iridescenceThicknessMap:me,sheen:O,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:ge,specularColorMap:Fe,specularIntensityMap:Ve,transmission:G,transmissionMap:Je,thicknessMap:B,gradientMap:ve,opaque:y.transparent===!1&&y.blending===dn&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:xe,alphaHash:Ae,combine:y.combine,mapUv:Ye&&p(y.map.channel),aoMapUv:ae&&p(y.aoMap.channel),lightMapUv:le&&p(y.lightMap.channel),bumpMapUv:ce&&p(y.bumpMap.channel),normalMapUv:de&&p(y.normalMap.channel),displacementMapUv:Ge&&p(y.displacementMap.channel),emissiveMapUv:ze&&p(y.emissiveMap.channel),metalnessMapUv:qe&&p(y.metalnessMap.channel),roughnessMapUv:Qe&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:ue&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(y.sheenRoughnessMap.channel),specularMapUv:ge&&p(y.specularMap.channel),specularColorMapUv:Fe&&p(y.specularColorMap.channel),specularIntensityMapUv:Ve&&p(y.specularIntensityMap.channel),transmissionMapUv:Je&&p(y.transmissionMap.channel),thicknessMapUv:B&&p(y.thicknessMap.channel),alphaMapUv:$&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(de||U),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ye||$),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&de===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(T,y),_(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let T=f[y.type],D;if(T){let P=_n[T];D=vc.clone(P.uniforms)}else D=y.uniforms;return D}function x(y,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new _A(n,T,y,s),c.push(D),u.set(T,D)),D}function A(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:C}}function bA(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function AA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function B0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function N0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,v,m,g){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function l(d,f,p,v,m,g,_){_.reversedDepth===!0&&(m=-m);let b=o(d,f,p,v,m,g);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(d,f,p,v,m,g){let _=o(d,f,p,v,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(d,f){t.length>1&&t.sort(d||AA),i.length>1&&i.sort(f||B0),s.length>1&&s.sort(f||B0)}function h(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function MA(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new N0,n.set(i,[a])):s>=r.length?(a=new N0,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function TA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new oe};break;case"SpotLight":t={position:new w,direction:new w,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function wA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var CA=0;function RA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DA(n){let e=new TA,t=wA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new Ce,a=new Ce;function o(c){let u=0,h=0,d=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,b=0,x=0,A=0,E=0,C=0,y=0,T=0,D=0;c.sort(RA);for(let I=0,H=c.length;I<H;I++){let N=c[I],F=N.color,Z=N.intensity,V=N.distance,re=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===vn?re=N.shadow.map.texture:re=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=F.r*Z,h+=F.g*Z,d+=F.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],Z);D++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=ee,i.sunShadowMap[p]=re;let Ne=J.getViewportCount();for(let Re=0;Re<Ne;Re++)i.sunShadowMatrix[v+Re]=J.getMatrix(Re),i.sunShadowCascade[v+Re]=J._cascadeData[Re];v+=Ne,p++}i.sun[f]=q,f++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=N.shadow.matrix,A++}i.directional[m]=q,m++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(F).multiplyScalar(Z),q.distance=V,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[_]=q;let J=N.shadow;if(N.map&&(i.spotLightMap[y]=N.map,y++,J.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[_]=J.matrix,N.castShadow){let ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=re,C++}_++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(F).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=q,b++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=re,i.pointShadowMatrix[g]=N.shadow.matrix,E++}i.point[g]=q,g++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[x]=q,x++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==x||P.numSunShadows!==p||P.numDirectionalShadows!==A||P.numPointShadows!==E||P.numSpotShadows!==C||P.numSpotMaps!==y||P.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=x,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=x,P.numSunShadows=p,P.numDirectionalShadows=A,P.numPointShadows=E,P.numSpotShadows=C,P.numSpotMaps=y,P.numLightProbes=D,i.version=CA++)}function l(c,u){let h=0,d=0,f=0,p=0,v=0,m=0,g=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let x=c[_];if(x.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(g),h++}else if(x.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(x.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function O0(n){let e=new DA(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function PA(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new O0(n),e.set(s,[o])):r>=a.length?(o=new O0(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LA=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],BA=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],F0=new Ce,_c=new w,hp=new w;function NA(n,e,t){let i=new Rn,s=new X,r=new X,a=new ut,o=new ma,l=new ga,c={},u=t.maxTextureSize,h={[hn]:Ot,[Ot]:hn,[Qt]:Qt},d=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:IA,fragmentShader:UA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ie;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new et(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let g=this.type;this.render=function(E,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===_f&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ma);let T=n.getRenderTarget(),D=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Dt),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=g!==this.type;H&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=E.length;N<F;N++){let Z=E[N],V=Z.shadow;if(V===void 0){fe("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let re=V.getFrameExtents();s.multiply(re),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,V.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===dr){if(Z.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new at(s.x,s.y,{format:vn,type:ji,minFilter:mt,magFilter:mt,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new yi(s.x,s.y,jt),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=an,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt}else Z.isPointLight?(V.map=new Ec(s.x),V.map.depthTexture=new Uo(s.x,Ei)):(V.map=new at(s.x,s.y),V.map.depthTexture=new yi(s.x,s.y,Ei)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=an,this.type===Ma?(V.map.depthTexture.compareFunction=q?pc:fc,V.map.depthTexture.minFilter=mt,V.map.depthTexture.magFilter=mt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let J=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,y);for(let ee=0;ee<J;ee++){let Ne=V.getCamera(ee);if(Z.isPointLight){let Re=V.camera,vt=V.matrix,ot=Z.distance||Re.far;ot!==Re.far&&(Re.far=ot,Re.updateProjectionMatrix()),_c.setFromMatrixPosition(Z.matrixWorld),Re.position.copy(_c),hp.copy(Re.position),hp.add(LA[ee]),Re.up.copy(BA[ee]),Re.lookAt(hp),Re.updateMatrixWorld(),vt.makeTranslation(-_c.x,-_c.y,-_c.z),F0.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(F0,Re.coordinateSystem,Re.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(V.map),n.clear());let Re=V.getViewport(ee);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),I.viewport(a)}i=V.getFrustum(ee),x(C,y,Ne,Z,this.type)}V.isPointLightShadow!==!0&&this.type===dr&&_(V,y),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,D,P)};function _(E,C){let y=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new at(s.x,s.y,{format:vn,type:ji}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,y,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,y,f,v,null)}function b(E,C,y,T){let D=null,P=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)D=P;else if(D=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let I=D.uuid,H=C.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let F=N[H];F===void 0&&(F=D.clone(),N[H]=F,C.addEventListener("dispose",A)),D=F}if(D.visible=C.visible,D.wireframe=C.wireframe,T===dr?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:h[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let I=n.properties.get(D);I.light=y}return D}function x(E,C,y,T,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===dr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let H=e.update(E),N=E.material;if(Array.isArray(N)){let F=H.groups;for(let Z=0,V=F.length;Z<V;Z++){let re=F[Z],q=N[re.materialIndex];if(q&&q.visible){let J=b(E,q,T,D);E.onBeforeShadow(n,E,C,y,H,J,re),n.renderBufferDirect(y,null,H,J,E,re),E.onAfterShadow(n,E,C,y,H,J,re)}}}else if(N.visible){let F=b(E,N,T,D);E.onBeforeShadow(n,E,C,y,H,F,null),n.renderBufferDirect(y,null,H,F,E,null),E.onAfterShadow(n,E,C,y,H,F,null)}}let I=E.children;for(let H=0,N=I.length;H<N;H++)x(I[H],C,y,T,D)}function A(E){E.target.removeEventListener("dispose",A);for(let y in c){let T=c[y],D=E.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function OA(n,e){function t(){let B=!1,ve=new ut,$=null,xe=new ut(0,0,0,0);return{setMask:function(Ae){$!==Ae&&!B&&(n.colorMask(Ae,Ae,Ae,Ae),$=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,se,ke,Ue,Pt){Pt===!0&&(Ae*=Ue,se*=Ue,ke*=Ue),ve.set(Ae,se,ke,Ue),xe.equals(ve)===!1&&(n.clearColor(Ae,se,ke,Ue),xe.copy(ve))},reset:function(){B=!1,$=null,xe.set(-1,0,0,0)}}}function i(){let B=!1,ve=!1,$=null,xe=null,Ae=null;return{setReversed:function(se){if(ve!==se){let ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Ue=Ae;Ae=null,this.setClear(Ue)}},getReversed:function(){return ve},setTest:function(se){se?ie(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(se){$!==se&&!B&&(n.depthMask(se),$=se)},setFunc:function(se){if(ve&&(se=o0[se]),xe!==se){switch(se){case vo:n.depthFunc(n.NEVER);break;case Ys:n.depthFunc(n.ALWAYS);break;case xo:n.depthFunc(n.LESS);break;case qn:n.depthFunc(n.LEQUAL);break;case _o:n.depthFunc(n.EQUAL);break;case yo:n.depthFunc(n.GEQUAL);break;case qs:n.depthFunc(n.GREATER);break;case So:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=se}},setLocked:function(se){B=se},setClear:function(se){Ae!==se&&(Ae=se,ve&&(se=1-se),n.clearDepth(se))},reset:function(){B=!1,$=null,xe=null,Ae=null,ve=!1}}}function s(){let B=!1,ve=null,$=null,xe=null,Ae=null,se=null,ke=null,Ue=null,Pt=null;return{setTest:function(yt){B||(yt?ie(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(yt){ve!==yt&&!B&&(n.stencilMask(yt),ve=yt)},setFunc:function(yt,Qi,An){($!==yt||xe!==Qi||Ae!==An)&&(n.stencilFunc(yt,Qi,An),$=yt,xe=Qi,Ae=An)},setOp:function(yt,Qi,An){(se!==yt||ke!==Qi||Ue!==An)&&(n.stencilOp(yt,Qi,An),se=yt,ke=Qi,Ue=An)},setLocked:function(yt){B=yt},setClear:function(yt){Pt!==yt&&(n.clearStencil(yt),Pt=yt)},reset:function(){B=!1,ve=null,$=null,xe=null,Ae=null,se=null,ke=null,Ue=null,Pt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,b=null,x=null,A=null,E=null,C=null,y=new oe(0,0,0),T=0,D=!1,P=null,I=null,H=null,N=null,F=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,re=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=re>=2);let J=null,ee={},Ne=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),vt=new ut().fromArray(Ne),ot=new ut().fromArray(Re);function ft(B,ve,$,xe){let Ae=new Uint8Array(4),se=n.createTexture();n.bindTexture(B,se),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<$;ke++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ve+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return se}let Q={};Q[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(qn),ce(!1),de(wh),ie(n.CULL_FACE),ae(Dt);function ie(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Se(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function We(B,ve){return d[B]!==ve?(n.bindFramebuffer(B,ve),d[B]=ve,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ve),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Me(B,ve){let $=p,xe=!1;if(B){$=f.get(ve),$===void 0&&($=[],f.set(ve,$));let Ae=B.textures;if($.length!==Ae.length||$[0]!==n.COLOR_ATTACHMENT0){for(let se=0,ke=Ae.length;se<ke;se++)$[se]=n.COLOR_ATTACHMENT0+se;$.length=Ae.length,xe=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,xe=!0);xe&&n.drawBuffers($)}function Ye(B){return v!==B?(n.useProgram(B),v=B,!0):!1}let bt={[fn]:n.FUNC_ADD,[yf]:n.FUNC_SUBTRACT,[Sf]:n.FUNC_REVERSE_SUBTRACT};bt[Ef]=n.MIN,bt[bf]=n.MAX;let ne={[wl]:n.ZERO,[Cs]:n.ONE,[Af]:n.SRC_COLOR,[wa]:n.SRC_ALPHA,[Rf]:n.SRC_ALPHA_SATURATE,[wf]:n.DST_COLOR,[Tf]:n.DST_ALPHA,[Mf]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[Cf]:n.ONE_MINUS_DST_COLOR,[Cl]:n.ONE_MINUS_DST_ALPHA,[Df]:n.CONSTANT_COLOR,[Pf]:n.ONE_MINUS_CONSTANT_COLOR,[If]:n.CONSTANT_ALPHA,[Uf]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(B,ve,$,xe,Ae,se,ke,Ue,Pt,yt){if(B===Dt){m===!0&&(Se(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),B!==Ta){if(B!==g||yt!==D){if((_!==fn||A!==fn)&&(n.blendEquation(n.FUNC_ADD),_=fn,A=fn),yt)switch(B){case dn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Un:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Le("WebGLState: Invalid blending: ",B);break}else switch(B){case dn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Un:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",B);break}b=null,x=null,E=null,C=null,y.set(0,0,0),T=0,g=B,D=yt}return}Ae=Ae||ve,se=se||$,ke=ke||xe,(ve!==_||Ae!==A)&&(n.blendEquationSeparate(bt[ve],bt[Ae]),_=ve,A=Ae),($!==b||xe!==x||se!==E||ke!==C)&&(n.blendFuncSeparate(ne[$],ne[xe],ne[se],ne[ke]),b=$,x=xe,E=se,C=ke),(Ue.equals(y)===!1||Pt!==T)&&(n.blendColor(Ue.r,Ue.g,Ue.b,Pt),y.copy(Ue),T=Pt),g=B,D=!1}function le(B,ve){B.side===Qt?Se(n.CULL_FACE):ie(n.CULL_FACE);let $=B.side===Ot;ve&&($=!$),ce($),B.blending===dn&&B.transparent===!1?ae(Dt):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let xe=B.stencilWrite;o.setTest(xe),xe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(B){P!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),P=B)}function de(B){B!==vf?(ie(n.CULL_FACE),B!==I&&(B===wh?n.cullFace(n.BACK):B===xf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),I=B}function Ge(B){B!==H&&(V&&n.lineWidth(B),H=B)}function ze(B,ve,$){B?(ie(n.POLYGON_OFFSET_FILL),(N!==ve||F!==$)&&(N=ve,F=$,a.getReversed()&&(ve=-ve),n.polygonOffset(ve,$))):Se(n.POLYGON_OFFSET_FILL)}function qe(B){B?ie(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Qe(B){B===void 0&&(B=n.TEXTURE0+Z-1),J!==B&&(n.activeTexture(B),J=B)}function U(B,ve,$){$===void 0&&(J===null?$=n.TEXTURE0+Z-1:$=J);let xe=ee[$];xe===void 0&&(xe={type:void 0,texture:void 0},ee[$]=xe),(xe.type!==B||xe.texture!==ve)&&(J!==$&&(n.activeTexture($),J=$),n.bindTexture(B,ve||Q[B]),xe.type=B,xe.texture=ve)}function _t(){let B=ee[J];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function lt(){try{n.compressedTexImage2D(...arguments)}catch(B){Le("WebGLState:",B)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(B){Le("WebGLState:",B)}}function S(){try{n.texSubImage2D(...arguments)}catch(B){Le("WebGLState:",B)}}function O(){try{n.texSubImage3D(...arguments)}catch(B){Le("WebGLState:",B)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Le("WebGLState:",B)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Le("WebGLState:",B)}}function ue(){try{n.texStorage2D(...arguments)}catch(B){Le("WebGLState:",B)}}function he(){try{n.texStorage3D(...arguments)}catch(B){Le("WebGLState:",B)}}function K(){try{n.texImage2D(...arguments)}catch(B){Le("WebGLState:",B)}}function te(){try{n.texImage3D(...arguments)}catch(B){Le("WebGLState:",B)}}function me(B){return h[B]!==void 0?h[B]:n.getParameter(B)}function Oe(B,ve){h[B]!==ve&&(n.pixelStorei(B,ve),h[B]=ve)}function ye(B){vt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),vt.copy(B))}function ge(B){ot.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ot.copy(B))}function Fe(B,ve){let $=c.get(ve);$===void 0&&($=new WeakMap,c.set(ve,$));let xe=$.get(B);xe===void 0&&(xe=n.getUniformBlockIndex(ve,B.name),$.set(B,xe))}function Ve(B,ve){let xe=c.get(ve).get(B);l.get(ve)!==xe&&(n.uniformBlockBinding(ve,xe,B.__bindingPointIndex),l.set(ve,xe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,ee={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,b=null,x=null,A=null,E=null,C=null,y=new oe(0,0,0),T=0,D=!1,P=null,I=null,H=null,N=null,F=null,vt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Se,bindFramebuffer:We,drawBuffers:Me,useProgram:Ye,setBlending:ae,setMaterial:le,setFlipSided:ce,setCullFace:de,setLineWidth:Ge,setPolygonOffset:ze,setScissorTest:qe,activeTexture:Qe,bindTexture:U,unbindTexture:_t,compressedTexImage2D:lt,compressedTexImage3D:R,texImage2D:K,texImage3D:te,pixelStorei:Oe,getParameter:me,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:ue,texStorage3D:he,texSubImage2D:S,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:ye,viewport:ge,reset:Je}}function FA(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new X,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function v(R,S){return p?new OffscreenCanvas(R,S):Jr("canvas")}function m(R,S,O){let G=1,j=lt(R);if((j.width>O||j.height>O)&&(G=O/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let ue=Math.floor(G*j.width),he=Math.floor(G*j.height);d===void 0&&(d=v(ue,he));let K=S?v(ue,he):d;return K.width=ue,K.height=he,K.getContext("2d").drawImage(R,0,0,ue,he),fe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+he+")."),K}else return"data"in R&&fe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function g(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,S,O,G,j,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8),O===n.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),O===n.SHORT&&he&&(K=he.R16_SNORM_EXT)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),S===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8),O===n.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),O===n.SHORT&&he&&(K=he.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(O===n.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),O===n.SHORT&&he&&(K=he.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){let te=ue?Qr:rt.getTransfer(j);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=te===xt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),O===n.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(R,S){let O;return R?S===null||S===Ei||S===$n?O=n.DEPTH24_STENCIL8:S===jt?O=n.DEPTH32F_STENCIL8:S===mr&&(O=n.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===$n?O=n.DEPTH_COMPONENT24:S===jt?O=n.DEPTH_COMPONENT32F:S===mr&&(O=n.DEPTH_COMPONENT16),O}function E(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==mt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){let S=R.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function y(R){let S=R.target;S.removeEventListener("dispose",y),P(S)}function T(R){let S=i.get(R);if(S.__webglInit===void 0)return;let O=R.source,G=f.get(O);if(G){let j=G[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(R),Object.keys(G).length===0&&f.delete(O)}i.remove(R)}function D(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let O=R.source,G=f.get(O);delete G[S.__cacheKey],a.memory.textures--}function P(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let j=0;j<S.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[G][j]);else n.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)n.deleteFramebuffer(S.__webglFramebuffer[G]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=R.textures;for(let G=0,j=O.length;G<j;G++){let ue=i.get(O[G]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(R)}let I=0;function H(){I=0}function N(){return I}function F(R){I=R}function Z(){let R=I;return R>=s.maxTextures&&fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function V(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function re(R,S){let O=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){let G=R.image;if(G===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,R,S);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function q(R,S){let O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Se(O,R,S);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function J(R,S){let O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Se(O,R,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function ee(R,S){let O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){We(O,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}let Ne={[qr]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[jr]:n.MIRRORED_REPEAT},Re={[Nt]:n.NEAREST,[Fh]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[mt]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[mn]:n.LINEAR_MIPMAP_LINEAR},vt={[Gf]:n.NEVER,[qf]:n.ALWAYS,[Vf]:n.LESS,[fc]:n.LEQUAL,[Wf]:n.EQUAL,[pc]:n.GEQUAL,[Xf]:n.GREATER,[Yf]:n.NOTEQUAL};function ot(R,S){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mt||S.magFilter===Pa||S.magFilter===pr||S.magFilter===mn||S.minFilter===mt||S.minFilter===Pa||S.minFilter===pr||S.minFilter===mn)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ne[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ne[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ne[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Re[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Re[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nt||S.minFilter!==pr&&S.minFilter!==mn||S.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ft(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));let G=S.source,j=f.get(G);j===void 0&&(j={},f.set(G,j));let ue=V(S);if(ue!==R.__cacheKey){j[ue]===void 0&&(j[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[ue].usedTimes++;let he=j[R.__cacheKey];he!==void 0&&(j[R.__cacheKey].usedTimes--,he.usedTimes===0&&D(S)),R.__cacheKey=ue,R.__webglTexture=j[ue].texture}return O}function Q(R,S,O){return Math.floor(Math.floor(R/O)/S)}function ie(R,S,O,G){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,O,G,S.data);else{ue.sort((Oe,ye)=>Oe.start-ye.start);let he=0;for(let Oe=1;Oe<ue.length;Oe++){let ye=ue[he],ge=ue[Oe],Fe=ye.start+ye.count,Ve=Q(ge.start,S.width,4),Je=Q(ye.start,S.width,4);ge.start<=Fe+1&&Ve===Je&&Q(ge.start+ge.count-1,S.width,4)===Ve?ye.count=Math.max(ye.count,ge.start+ge.count-ye.start):(++he,ue[he]=ge)}ue.length=he+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Oe=0,ye=ue.length;Oe<ye;Oe++){let ge=ue[Oe],Fe=Math.floor(ge.start/4),Ve=Math.ceil(ge.count/4),Je=Fe%S.width,B=Math.floor(Fe/S.width),ve=Ve,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Je,B,ve,$,O,G,S.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Se(R,S,O){let G=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=n.TEXTURE_3D);let j=ft(R,S),ue=S.source;t.bindTexture(G,R.__webglTexture,n.TEXTURE0+O);let he=i.get(ue);if(ue.version!==he.__version||j===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let $=rt.getPrimaries(rt.workingColorSpace),xe=S.colorSpace===Ii?null:rt.getPrimaries(S.colorSpace),Ae=S.colorSpace===Ii||$===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let te=m(S.image,!1,s.maxTextureSize);te=_t(S,te);let me=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),ye=x(S.internalFormat,me,Oe,S.normalized,S.colorSpace,S.isVideoTexture);ot(G,S);let ge,Fe=S.mipmaps,Ve=S.isVideoTexture!==!0,Je=he.__version===void 0||j===!0,B=ue.dataReady,ve=E(S,te);if(S.isDepthTexture)ye=A(S.format===gn,S.type),Je&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,me,Oe,null));else if(S.isDataTexture)if(Fe.length>0){Ve&&Je&&t.texStorage2D(n.TEXTURE_2D,ve,ye,Fe[0].width,Fe[0].height);for(let $=0,xe=Fe.length;$<xe;$++)ge=Fe[$],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ge.width,ge.height,me,Oe,ge.data):t.texImage2D(n.TEXTURE_2D,$,ye,ge.width,ge.height,0,me,Oe,ge.data);S.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(n.TEXTURE_2D,ve,ye,te.width,te.height),B&&ie(S,te,me,Oe)):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,me,Oe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ye,Fe[0].width,Fe[0].height,te.depth);for(let $=0,xe=Fe.length;$<xe;$++)if(ge=Fe[$],S.format!==li)if(me!==null)if(Ve){if(B)if(S.layerUpdates.size>0){let Ae=jh(ge.width,ge.height,S.format,S.type);for(let se of S.layerUpdates){let ke=ge.data.subarray(se*Ae/ge.data.BYTES_PER_ELEMENT,(se+1)*Ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,se,ge.width,ge.height,1,me,ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ye,ge.width,ge.height,te.depth,0,ge.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,te.depth,me,Oe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ye,ge.width,ge.height,te.depth,0,me,Oe,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ve&&Je&&t.texStorage2D(n.TEXTURE_2D,ve,ye,Fe[0].width,Fe[0].height);for(let $=0,xe=Fe.length;$<xe;$++)ge=Fe[$],S.format!==li?me!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ye,ge.width,ge.height,0,ge.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ge.width,ge.height,me,Oe,ge.data):t.texImage2D(n.TEXTURE_2D,$,ye,ge.width,ge.height,0,me,Oe,ge.data)}else if(S.isDataArrayTexture)if(Ve){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ye,te.width,te.height,te.depth),B)if(S.layerUpdates.size>0){let $=jh(te.width,te.height,S.format,S.type);for(let xe of S.layerUpdates){let Ae=te.data.subarray(xe*$/te.data.BYTES_PER_ELEMENT,(xe+1)*$/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,te.width,te.height,1,me,Oe,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Oe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,me,Oe,te.data);else if(S.isData3DTexture)Ve?(Je&&t.texStorage3D(n.TEXTURE_3D,ve,ye,te.width,te.height,te.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Oe,te.data)):t.texImage3D(n.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,me,Oe,te.data);else if(S.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(n.TEXTURE_2D,ve,ye,te.width,te.height);else{let $=te.width,xe=te.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,ye,$,xe,0,me,Oe,null),$>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),te.parentNode!==$){$.appendChild(te),h.add(S),$.onpaint=xe=>{let Ae=xe.changedElements;for(let se of h)Ae.includes(se.image)&&(se.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let Ae=n.RGBA,se=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,se,ke,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ve&&Je){let $=lt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ve,ye,$.width,$.height)}for(let $=0,xe=Fe.length;$<xe;$++)ge=Fe[$],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,me,Oe,ge):t.texImage2D(n.TEXTURE_2D,$,ye,me,Oe,ge);S.generateMipmaps=!1}else if(Ve){if(Je){let $=lt(te);t.texStorage2D(n.TEXTURE_2D,ve,ye,$.width,$.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Oe,te)}else t.texImage2D(n.TEXTURE_2D,0,ye,me,Oe,te);g(S)&&_(G),he.__version=ue.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function We(R,S,O){if(S.image.length!==6)return;let G=ft(R,S),j=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);let ue=i.get(j);if(j.version!==ue.__version||G===!0){t.activeTexture(n.TEXTURE0+O);let he=rt.getPrimaries(rt.workingColorSpace),K=S.colorSpace===Ii?null:rt.getPrimaries(S.colorSpace),te=S.colorSpace===Ii||he===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!me&&!Oe?ye[se]=m(S.image[se],!0,s.maxCubemapSize):ye[se]=Oe?S.image[se].image:S.image[se],ye[se]=_t(S,ye[se]);let ge=ye[0],Fe=r.convert(S.format,S.colorSpace),Ve=r.convert(S.type),Je=x(S.internalFormat,Fe,Ve,S.normalized,S.colorSpace),B=S.isVideoTexture!==!0,ve=ue.__version===void 0||G===!0,$=j.dataReady,xe=E(S,ge);ot(n.TEXTURE_CUBE_MAP,S);let Ae;if(me){B&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,ge.width,ge.height);for(let se=0;se<6;se++){Ae=ye[se].mipmaps;for(let ke=0;ke<Ae.length;ke++){let Ue=Ae[ke];S.format!==li?Fe!==null?B?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Je,Ue.width,Ue.height,0,Ue.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ue.width,Ue.height,Fe,Ve,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Je,Ue.width,Ue.height,0,Fe,Ve,Ue.data)}}}else{if(Ae=S.mipmaps,B&&ve){Ae.length>0&&xe++;let se=lt(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,se.width,se.height)}for(let se=0;se<6;se++)if(Oe){B?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Fe,Ve,ye[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,ye[se].width,ye[se].height,0,Fe,Ve,ye[se].data);for(let ke=0;ke<Ae.length;ke++){let Pt=Ae[ke].image[se].image;B?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Pt.width,Pt.height,Fe,Ve,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Je,Pt.width,Pt.height,0,Fe,Ve,Pt.data)}}else{B?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Ve,ye[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Fe,Ve,ye[se]);for(let ke=0;ke<Ae.length;ke++){let Ue=Ae[ke];B?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Fe,Ve,Ue.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Je,Fe,Ve,Ue.image[se])}}}g(S)&&_(n.TEXTURE_CUBE_MAP),ue.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Me(R,S,O,G,j,ue){let he=r.convert(O.format,O.colorSpace),K=r.convert(O.type),te=x(O.internalFormat,he,K,O.normalized,O.colorSpace),me=i.get(S),Oe=i.get(O);if(Oe.__renderTarget=S,!me.__hasExternalTextures){let ye=Math.max(1,S.width>>ue),ge=Math.max(1,S.height>>ue);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ue,te,ye,ge,S.depth,0,he,K,null):t.texImage2D(j,ue,te,ye,ge,0,he,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Qe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,Oe.__webglTexture,0,qe(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,Oe.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(R,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let G=S.depthTexture,j=G&&G.isDepthTexture?G.type:null,ue=A(S.stencilBuffer,j),he=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(S),ue,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(S),ue,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ue,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,R)}else{let G=S.textures;for(let j=0;j<G.length;j++){let ue=G[j],he=r.convert(ue.format,ue.colorSpace),K=r.convert(ue.type),te=x(ue.internalFormat,he,K,ue.normalized,ue.colorSpace);Qe(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(S),te,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(S),te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,te,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(R,S,O){let G=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ot(n.TEXTURE_CUBE_MAP,S.depthTexture);let me=r.convert(S.depthTexture.format),Oe=r.convert(S.depthTexture.type),ye;S.depthTexture.format===an?ye=n.DEPTH_COMPONENT24:S.depthTexture.format===gn&&(ye=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,S.width,S.height,0,me,Oe,null)}}else re(S.depthTexture,0);let ue=j.__webglTexture,he=qe(S),K=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,te=S.depthTexture.format===gn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===an)Qe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,K,ue,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,te,K,ue,0);else if(S.depthTexture.format===gn)Qe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,K,ue,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,te,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let S=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=G}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)bt(S.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?bt(S.__webglFramebuffer[0],R,0):bt(S.__webglFramebuffer,R,0)}else if(O){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=n.createRenderbuffer(),Ye(S.__webglDepthbuffer[G],R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ue)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ye(S.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(R,S,O){let G=i.get(R);S!==void 0&&Me(G.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ne(R)}function le(R){let S=R.texture,O=i.get(R),G=i.get(S);R.addEventListener("dispose",y);let j=R.textures,ue=R.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=S.version,a.memory.textures++),ue){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let te=0;te<S.mipmaps.length;te++)O.__webglFramebuffer[K][te]=n.createFramebuffer()}else O.__webglFramebuffer[K]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)O.__webglFramebuffer[K]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(he)for(let K=0,te=j.length;K<te;K++){let me=i.get(j[K]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Qe(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let te=j[K];O.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let me=r.convert(te.format,te.colorSpace),Oe=r.convert(te.type),ye=x(te.internalFormat,me,Oe,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),ge=qe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ye,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,O.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ot(n.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)Me(O.__webglFramebuffer[K][te],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,te);else Me(O.__webglFramebuffer[K],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(S)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let K=0,te=j.length;K<te;K++){let me=j[K],Oe=i.get(me),ye=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,Oe.__webglTexture),ot(ye,me),Me(O.__webglFramebuffer,R,me,n.COLOR_ATTACHMENT0+K,ye,0),g(me)&&_(ye)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),ot(K,S),S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)Me(O.__webglFramebuffer[te],R,S,n.COLOR_ATTACHMENT0,K,te);else Me(O.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,K,0);g(S)&&_(K),t.unbindTexture()}R.depthBuffer&&ne(R)}function ce(R){let S=R.textures;for(let O=0,G=S.length;O<G;O++){let j=S[O];if(g(j)){let ue=b(R),he=i.get(j).__webglTexture;t.bindTexture(ue,he),_(ue),t.unbindTexture()}}}let de=[],Ge=[];function ze(R){if(R.samples>0){if(Qe(R)===!1){let S=R.textures,O=R.width,G=R.height,j=n.COLOR_BUFFER_BIT,ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),K=S.length>1;if(K)for(let me=0;me<S.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<S.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);let Oe=i.get(S[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,O,G,0,0,O,G,j,n.NEAREST),l===!0&&(de.length=0,Ge.length=0,de.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(ue),Ge.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let me=0;me<S.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);let Oe=i.get(S[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function qe(R){return Math.min(s.maxSamples,R.samples)}function Qe(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function _t(R,S){let O=R.colorSpace,G=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Cn&&O!==Ii&&(rt.getTransfer(O)===xt?(G!==li||j!==At)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",O)),S}function lt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=F,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X0(n,e){function t(i,s=Ii){let r,a=rt.getTransfer(s);if(i===At)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===kh)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===Dl)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===jt)return n.FLOAT;if(i===ji)return n.HALF_FLOAT;if(i===Vh)return n.ALPHA;if(i===Wh)return n.RGB;if(i===li)return n.RGBA;if(i===an)return n.DEPTH_COMPONENT;if(i===gn)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Ia)return n.RED_INTEGER;if(i===vn)return n.RG;if(i===Ll)return n.RG_INTEGER;if(i===Bl)return n.RGBA_INTEGER;if(i===Ua||i===La||i===Ba||i===Na)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ol||i===Fl||i===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Gl||i===Vl||i===Wl||i===Oa||i===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kl||i===zl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return r.COMPRESSED_RG11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yl||i===ql||i===jl||i===Zl||i===Kl||i===Ql||i===Jl||i===$l||i===ec||i===tc||i===ic||i===nc||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===oc||i===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===uc||i===Fa||i===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$n?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_p=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ke({vertexShader:HA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yp=class extends Zt{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,v=typeof XRWebGLBinding!="undefined",m=new _p,g={},_=t.getContextAttributes(),b=null,x=null,A=[],E=[],C=new X,y=null,T=null,D=new Ut;D.viewport=new ut;let P=new Ut;P.viewport=new ut;let I=[D,P],H=new Sl,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=A[Q];return ie===void 0&&(ie=new Js,A[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=A[Q];return ie===void 0&&(ie=new Js,A[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=A[Q];return ie===void 0&&(ie=new Js,A[Q]=ie),ie.getHandSpace()};function Z(Q){let ie=E.indexOf(Q.inputSource);if(ie===-1)return;let Se=A[ie];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,c||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<A.length;Q++){let ie=E[Q];ie!==null&&(E[Q]=null,A[Q].disconnect(ie))}N=null,F=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(b),f=null,d=null,h=null,s=null,x=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=function(Q){return Ai(this,null,function*(){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&(yield t.makeXRCompatible()),y=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,We=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?gn:an,We=_.stencil?$n:Ei);let Ye={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new at(d.textureWidth,d.textureHeight,{format:li,type:At,depthTexture:new yi(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new at(f.framebufferWidth,f.framebufferHeight,{format:li,type:At,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let ie=0;ie<Q.removed.length;ie++){let Se=Q.removed[ie],We=E.indexOf(Se);We>=0&&(E[We]=null,A[We].disconnect(Se))}for(let ie=0;ie<Q.added.length;ie++){let Se=Q.added[ie],We=E.indexOf(Se);if(We===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=E.length){E.push(Se),We=Ye;break}else if(E[Ye]===null){E[Ye]=Se,We=Ye;break}if(We===-1)break}let Me=A[We];Me&&Me.connect(Se)}}let q=new w,J=new w;function ee(Q,ie,Se){q.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);let We=q.distanceTo(J),Me=ie.projectionMatrix.elements,Ye=Se.projectionMatrix.elements,bt=Me[14]/(Me[10]-1),ne=Me[14]/(Me[10]+1),ae=(Me[9]+1)/Me[5],le=(Me[9]-1)/Me[5],ce=(Me[8]-1)/Me[0],de=(Ye[8]+1)/Ye[0],Ge=bt*ce,ze=bt*de,qe=We/(-ce+de),Qe=qe*-ce;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qe),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let U=bt+qe,_t=ne+qe,lt=Ge-Qe,R=ze+(We-Qe),S=ae*ne/_t*U,O=le*ne/_t*U;Q.projectionMatrix.makePerspective(lt,R,S,O,U,_t),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ne(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,Se=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),H.near=P.near=D.near=ie,H.far=P.far=D.far=Se,(N!==H.near||F!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,F=H.far),H.layers.mask=Q.layers.mask|6,D.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let We=Q.parent,Me=H.cameras;Ne(H,We);for(let Ye=0;Ye<Me.length;Ye++)Ne(Me[Ye],We);Me.length===2?ee(H,D,P):H.projectionMatrix.copy(D.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),Re(Q,H,We)};function Re(Q,ie,Se){Se===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=js*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Q){return g[Q]};let vt=null;function ot(Q,ie){if(u=ie.getViewerPose(c||a),p=ie,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let We=!1;Se.length!==H.cameras.length&&(H.cameras.length=0,We=!0);for(let ne=0;ne<Se.length;ne++){let ae=Se[ne],le=null;if(f!==null)le=f.getViewport(ae);else{let de=h.getViewSubImage(d,ae);le=de.viewport,ne===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let ce=I[ne];ce===void 0&&(ce=new Ut,ce.layers.enable(ne),ce.viewport=new ut,I[ne]=ce),ce.matrix.fromArray(ae.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ae.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),ne===0&&(H.matrix.copy(ce.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),We===!0&&H.cameras.push(ce)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let ne=h.getDepthInformation(Se[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let ne=0;ne<Se.length;ne++){let ae=Se[ne].camera;if(ae){let le=g[ae];le||(le=new sa,g[ae]=le);let ce=h.getCameraImage(ae);le.sourceTexture=ce}}}}for(let Se=0;Se<A.length;Se++){let We=E[Se],Me=A[Se];We!==null&&Me!==void 0&&Me.update(We,ie,c||a)}vt&&vt(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let ft=new H0;ft.setAnimationLoop(ot),this.setAnimationLoop=function(Q){vt=Q},this.dispose=function(){}}},zA=new Ce,Y0=new Ze;Y0.set(-1,0,0,0,1,0,0,0,1);function GA(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Qf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,b,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ot&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ot&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,x=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Y0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ot&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VA(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){let E=A.program;i.uniformBlockBinding(x,E)}function c(x,A){let E=s[x.id];E===void 0&&(m(x),E=u(x),s[x.id]=E,x.addEventListener("dispose",_));let C=A.program;i.updateUBOMapping(x,C);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function u(x){let A=h();x.__bindingPointIndex=A;let E=n.createBuffer(),C=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let A=s[x.id],E=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let y=0,T=E.length;y<T;y++){let D=E[y];if(Array.isArray(D))for(let P=0,I=D.length;P<I;P++)f(D[P],y,P,C);else f(D,y,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,A,E,C){if(v(x,A,E,C)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let D=0;for(let P=0;P<T.length;P++){let I=T[P],H=g(I);p(I,x.__data,D),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function p(x,A,E){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,E)}function v(x,A,E,C){let y=x.value,T=A+"_"+E;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let D=C[T];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(x){let A=x.uniforms,E=0,C=16;for(let T=0,D=A.length;T<D;T++){let P=Array.isArray(A[T])?A[T]:[A[T]];for(let I=0,H=P.length;I<H;I++){let N=P[I],F=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,V=F.length;Z<V;Z++){let re=F[Z],q=g(re),J=E%C,ee=J%q.boundary,Ne=J+ee;E+=ee,Ne!==0&&C-Ne<q.storage&&(E+=C-Ne),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}let y=E%C;return y>0&&(E+=C-y),x.__size=E,x.__cache={},this}function g(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",x),A}function _(x){let A=x.target;A.removeEventListener("dispose",_);let E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function b(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var WA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function XA(){return Bn===null&&(Bn=new vi(WA,16,16,vn,ji),Bn.name="DFG_LUT",Bn.minFilter=mt,Bn.magFilter=mt,Bn.wrapS=gi,Bn.wrapT=gi,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var bc=class{constructor(e={}){let{canvas:t=jf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=At}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=f,m=new Set([Bl,Ll,Ia]),g=new Set([At,Ei,mr,$n,Pl,Il]),_=new Uint32Array(4),b=new Int32Array(4),x=new w,A=null,E=null,C=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,P=!1,I=null,H=null,N=null,F=null;this._outputColorSpace=je;let Z=0,V=0,re=null,q=-1,J=null,ee=new ut,Ne=new ut,Re=null,vt=new oe(0),ot=0,ft=t.width,Q=t.height,ie=1,Se=null,We=null,Me=new ut(0,0,ft,Q),Ye=new ut(0,0,ft,Q),bt=!1,ne=new Rn,ae=!1,le=!1,ce=new Ce,de=new w,Ge=new ut,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Qe(){return re===null?ie:1}let U=i;function _t(M,L){return t.getContext(M,L)}let lt,R,S,O,G,j,ue,he,K,te,me,Oe,ye,ge,Fe,Ve,Je,B,ve,$,xe,Ae,se;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Qi,!1),U===null){let L="webgl2";if(U=_t(L,M),U===null)throw _t(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(M){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Qi,!1),Le("WebGLRenderer: "+M.message),M}function ke(){lt=new $E(U),lt.init(),xe=new X0(U,lt),R=new VE(U,lt,e,xe),S=new OA(U,lt),R.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),H=U.createFramebuffer(),N=U.createFramebuffer(),F=U.createFramebuffer(),O=new ib(U),G=new bA,j=new FA(U,lt,S,G,R,xe,O),ue=new JE(D),he=new sy(U),Ae=new zE(U,he),K=new eb(U,he,O,Ae),te=new sb(U,K,he,Ae,O),B=new nb(U,R,j),Fe=new WE(G),me=new EA(D,ue,lt,R,Ae,Fe),Oe=new GA(D,G),ye=new MA,ge=new PA(lt),Je=new kE(D,ue,S,te,p,l),Ve=new NA(D,te,R),se=new VA(U,O,R,S),ve=new GE(U,lt,O),$=new tb(U,lt,O),O.programs=me.programs,D.capabilities=R,D.extensions=lt,D.properties=G,D.renderLists=ye,D.shadowMap=Ve,D.state=S,D.info=O}v!==At&&(T=new ab(v,t.width,t.height,o,s,r));let Ue=new yp(D,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=lt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=lt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(ft,Q,!1))},this.getSize=function(M){return M.set(ft,Q)},this.setSize=function(M,L,Y=!0){if(Ue.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=M,Q=L,t.width=Math.floor(M*ie),t.height=Math.floor(L*ie),Y===!0&&(t.style.width=M+"px",t.style.height=L+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(ft*ie,Q*ie).floor()},this.setDrawingBufferSize=function(M,L,Y){ft=M,Q=L,ie=Y,t.width=Math.floor(M*Y),t.height=Math.floor(L*Y),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(v===At){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ee)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,L,Y,k){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,L,Y,k),S.viewport(ee.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,L,Y,k){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,L,Y,k),S.scissor(Ne.copy(Ye).multiplyScalar(ie).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(M){S.setScissorTest(bt=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){We=M},this.getClearColor=function(M){return M.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,Y=!0){let k=0;if(M){let z=!1;if(re!==null){let be=re.texture.format;z=m.has(be)}if(z){let be=re.texture.type,we=g.has(be),Ee=Je.getClearColor(),De=Je.getClearAlpha(),Be=Ee.r,nt=Ee.g,ct=Ee.b;we?(_[0]=Be,_[1]=nt,_[2]=ct,_[3]=De,U.clearBufferuiv(U.COLOR,0,_)):(b[0]=Be,b[1]=nt,b[2]=ct,b[3]=De,U.clearBufferiv(U.COLOR,0,b))}else k|=U.COLOR_BUFFER_BIT}L&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Qi,!1),Je.dispose(),ye.dispose(),ge.dispose(),G.dispose(),ue.dispose(),te.dispose(),Ae.dispose(),se.dispose(),me.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Vp),Ue.removeEventListener("sessionend",Wp),Ps.stop()};function Pt(M){M.preventDefault(),$r("WebGLRenderer: Context Lost."),P=!0}function yt(){$r("WebGLRenderer: Context Restored."),P=!1;let M=O.autoReset,L=Ve.enabled,Y=Ve.autoUpdate,k=Ve.needsUpdate,z=Ve.type;ke(),O.autoReset=M,Ve.enabled=L,Ve.autoUpdate=Y,Ve.needsUpdate=k,Ve.type=z}function Qi(M){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function An(M){let L=M.target;L.removeEventListener("dispose",An),Xv(L)}function Xv(M){Yv(M),G.remove(M)}function Yv(M){let L=G.get(M).programs;L!==void 0&&(L.forEach(function(Y){me.releaseProgram(Y)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,Y,k,z,be){L===null&&(L=ze);let we=z.isMesh&&z.matrixWorld.determinantAffine()<0,Ee=Zv(M,L,Y,k,z);S.setMaterial(k,we);let De=Y.index,Be=1;if(k.wireframe===!0){if(De=K.getWireframeAttribute(Y),De===void 0)return;Be=2}let nt=Y.drawRange,ct=Y.attributes.position,Pe=nt.start*Be,St=(nt.start+nt.count)*Be;be!==null&&(Pe=Math.max(Pe,be.start*Be),St=Math.min(St,(be.start+be.count)*Be)),De!==null?(Pe=Math.max(Pe,0),St=Math.min(St,De.count)):ct!=null&&(Pe=Math.max(Pe,0),St=Math.min(St,ct.count));let Xt=St-Pe;if(Xt<0||Xt===1/0)return;Ae.setup(z,k,Ee,Y,De);let Bt,wt=ve;if(De!==null&&(Bt=he.get(De),wt=$,wt.setIndex(Bt)),z.isMesh)k.wireframe===!0?(S.setLineWidth(k.wireframeLinewidth*Qe()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(z.isLine){let si=k.linewidth;si===void 0&&(si=1),S.setLineWidth(si*Qe()),z.isLineSegments?wt.setMode(U.LINES):z.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else z.isPoints?wt.setMode(U.POINTS):z.isSprite&&wt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))wt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let si=z._multiDrawStarts,Te=z._multiDrawCounts,fi=z._multiDrawCount,pt=De?he.get(De).bytesPerElement:1,zi=G.get(k).currentProgram.getUniforms();for(let Mn=0;Mn<fi;Mn++)zi.setValue(U,"_gl_DrawID",Mn),wt.render(si[Mn]/pt,Te[Mn])}else if(z.isInstancedMesh)wt.renderInstances(Pe,Xt,z.count);else if(Y.isInstancedBufferGeometry){let si=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,si);wt.renderInstances(Pe,Xt,Te)}else wt.render(Pe,Xt)};function Gp(M,L,Y,k){I!==null&&M.isNodeMaterial&&I.setObject(k,M),ae===!0&&Fe.setState(M,Y,!1),M.transparent===!0&&M.side===Qt&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,Pc(M,L,k),M.side=hn,M.needsUpdate=!0,Pc(M,L,k),M.side=Qt):Pc(M,L,k)}this.compile=function(M,L,Y=null){Y===null&&(Y=M),I!==null&&I.renderStart(M,L,Y),E=ge.get(Y),E.init(L),y.push(E),Y.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),M!==Y&&M.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),le=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,le),ae===!0&&Fe.setGlobalState(this.clippingPlanes,L),I!==null&&Ve.render(E.state.shadowsArray,Y,L);let k=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let be=z.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){let Ee=be[we];Gp(Ee,Y,L,z),k.add(Ee)}else Gp(be,Y,L,z),k.add(be)}),E=y.pop(),I!==null&&I.renderEnd(),k},this.compileAsync=function(M,L,Y=null){let k=this.compile(M,L,Y);return new Promise(z=>{function be(){if(k.forEach(function(we){let De=G.get(we).currentProgram;(De===void 0||De.isReady())&&k.delete(we)}),k.size===0){z(M);return}setTimeout(be,10)}lt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let _d=null;function qv(M){_d&&_d(M)}function Vp(){Ps.stop()}function Wp(){Ps.start()}let Ps=new H0;Ps.setAnimationLoop(qv),typeof self!="undefined"&&Ps.setContext(self),this.setAnimationLoop=function(M){_d=M,Ue.setAnimationLoop(M),M===null?Ps.stop():Ps.start()},Ue.addEventListener("sessionstart",Vp),Ue.addEventListener("sessionend",Wp),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(M,L);let Y=Ue.enabled===!0&&Ue.isPresenting===!0,k=T!==null&&(re===null||Y)&&T.begin(D,re);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(L),L=Ue.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,L,re),E=ge.get(M,y.length),E.init(L),E.state.textureUnits=j.getTextureUnits(),y.push(E),ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ne.setFromProjectionMatrix(ce,Ci,L.reversedDepth),le=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,le),A=ye.get(M,C.length),A.init(),C.push(A),Ue.enabled===!0&&Ue.isPresenting===!0){let we=D.xr.getDepthSensingMesh();we!==null&&yd(we,L,-1/0,D.sortObjects)}yd(M,L,0,D.sortObjects),A.finish(),I!==null&&I.updateLights(E.state.lightsArray),D.sortObjects===!0&&A.sort(Se,We),qe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,qe&&Je.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Fe.beginShadows();let z=E.state.shadowsArray;if(Ve.render(z,M,L),ae===!0&&Fe.endShadows(),(k&&T.hasRenderPass())===!1){let we=A.opaque,Ee=A.transmissive;if(E.setupLights(),L.isArrayCamera){let De=L.cameras;if(Ee.length>0)for(let Be=0,nt=De.length;Be<nt;Be++){let ct=De[Be];Yp(we,Ee,M,ct)}qe&&Je.render(M);for(let Be=0,nt=De.length;Be<nt;Be++){let ct=De[Be];Xp(A,M,ct,ct.viewport)}}else Ee.length>0&&Yp(we,Ee,M,L),qe&&Je.render(M),Xp(A,M,L)}re!==null&&V===0&&(j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re)),k&&T.end(D),M.isScene===!0&&M.onAfterRender(D,M,L),Ae.resetDefaultState(),q=-1,J=null,y.pop(),y.length>0?(E=y[y.length-1],j.setTextureUnits(E.state.textureUnits),ae===!0&&Fe.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,I!==null&&I.renderEnd()};function yd(M,L,Y,k){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ne)){k&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);let we=te.update(M),Ee=M.material;Ee.visible&&A.push(M,we,Ee,Y,Ge.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ne))){let we=te.update(M),Ee=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(Ee)){let De=we.groups;for(let Be=0,nt=De.length;Be<nt;Be++){let ct=De[Be],Pe=Ee[ct.materialIndex];Pe&&Pe.visible&&A.push(M,we,Pe,Y,Ge.z,ct,L)}}else Ee.visible&&A.push(M,we,Ee,Y,Ge.z,null,L)}}let be=M.children;for(let we=0,Ee=be.length;we<Ee;we++)yd(be[we],L,Y,k)}function Xp(M,L,Y,k){let{opaque:z,transmissive:be,transparent:we}=M;E.setupLightsView(Y),ae===!0&&Fe.setGlobalState(D.clippingPlanes,Y),k&&S.viewport(ee.copy(k)),z.length>0&&Dc(z,L,Y),be.length>0&&Dc(be,L,Y),we.length>0&&Dc(we,L,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Yp(M,L,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Pe=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new at(1,1,{generateMipmaps:!0,type:Pe?ji:At,minFilter:mn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let be=E.state.transmissionRenderTarget[k.id],we=k.viewport||ee;be.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);let Ee=D.getRenderTarget(),De=D.getActiveCubeFace(),Be=D.getActiveMipmapLevel();D.setRenderTarget(be),D.getClearColor(vt),ot=D.getClearAlpha(),ot<1&&D.setClearColor(16777215,.5),D.clear(),qe&&Je.render(Y);let nt=D.toneMapping;D.toneMapping=qi;let ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ae===!0&&Fe.setGlobalState(D.clippingPlanes,k),Dc(M,Y,k),j.updateMultisampleRenderTarget(be),j.updateRenderTargetMipmap(be),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let St=0,Xt=L.length;St<Xt;St++){let Bt=L[St],{object:wt,geometry:si,material:Te,group:fi}=Bt;if(Te.side===Qt&&wt.layers.test(k.layers)){let pt=Te.side;Te.side=Ot,Te.needsUpdate=!0,qp(wt,Y,k,si,Te,fi),Te.side=pt,Te.needsUpdate=!0,Pe=!0}}Pe===!0&&(j.updateMultisampleRenderTarget(be),j.updateRenderTargetMipmap(be))}D.setRenderTarget(Ee,De,Be),D.setClearColor(vt,ot),ct!==void 0&&(k.viewport=ct),D.toneMapping=nt}function Dc(M,L,Y){let k=L.isScene===!0?L.overrideMaterial:null;for(let z=0,be=M.length;z<be;z++){let we=M[z],{object:Ee,geometry:De,group:Be}=we,nt=we.material;nt.allowOverride===!0&&k!==null&&(nt=k),Ee.layers.test(Y.layers)&&qp(Ee,L,Y,De,nt,Be)}}function qp(M,L,Y,k,z,be){I!==null&&z.isNodeMaterial&&I.setObject(M,z),M.onBeforeRender(D,L,Y,k,z,be),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(D,L,Y,k,M,be),z.transparent===!0&&z.side===Qt&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,D.renderBufferDirect(Y,L,k,z,M,be),z.side=hn,z.needsUpdate=!0,D.renderBufferDirect(Y,L,k,z,M,be),z.side=Qt):D.renderBufferDirect(Y,L,k,z,M,be),M.onAfterRender(D,L,Y,k,z,be)}function Pc(M,L,Y){L.isScene!==!0&&(L=ze);let k=G.get(M),z=E.state.lights,be=E.state.shadowsArray,we=z.state.version,Ee=me.getParameters(M,z.state,be,L,Y,E.state.lightProbeGridArray),De=me.getProgramCacheKey(Ee),Be=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=ue.get(M.envMap||k.environment,nt),k.envMapRotation=k.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",An),Be=new Map,k.programs=Be);let ct=Be.get(De);if(ct!==void 0){if(k.currentProgram===ct&&k.lightsStateVersion===we)return Zp(M,Ee),ct}else Ee.uniforms=me.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,Y,Ee),M.onBeforeCompile(Ee,D),ct=me.acquireProgram(Ee,De),Be.set(De,ct),k.uniforms=Ee.uniforms;let Pe=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=Fe.uniform),Zp(M,Ee),k.needsLights=Qv(M),k.lightsStateVersion=we,k.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.sunLights.value=z.state.sun,Pe.sunLightShadows.value=z.state.sunShadow,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.sunShadowMatrix.value=z.state.sunShadowMatrix,Pe.sunShadowCascade.value=z.state.sunShadowCascade,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=ct,k.uniformsList=null,ct}function jp(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=za.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Zp(M,L){let Y=G.get(M);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function jv(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(L.matrixWorld);for(let Y=0,k=M.length;Y<k;Y++){let z=M[Y];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function Zv(M,L,Y,k,z){L.isScene!==!0&&(L=ze),j.resetTextureUnits();let be=L.fog,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,Ee=re===null?D.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:rt.workingColorSpace,De=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Be=ue.get(k.envMap||we,De),nt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ct=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color,Bt=qi;k.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Bt=D.toneMapping);let wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,si=wt!==void 0?wt.length:0,Te=G.get(k),fi=E.state.lights;if(ae===!0&&(le===!0||M!==J)){let It=M===J&&k.id===q;Fe.setState(k,M,It)}let pt=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==fi.state.version||Te.outputColorSpace!==Ee||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Be||k.fog===!0&&Te.fog!==be||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==nt||Te.vertexTangents!==ct||Te.morphTargets!==Pe||Te.morphNormals!==St||Te.morphColors!==Xt||Te.toneMapping!==Bt||Te.morphTargetsCount!==si||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Te.__version=k.version);let zi=Te.currentProgram;pt===!0&&(zi=Pc(k,L,z),I&&k.isNodeMaterial&&I.onUpdateProgram(k,zi,Te));let Mn=!1,is=!1,br=!1,Tt=zi.getUniforms(),Gt=Te.uniforms;if(S.useProgram(zi.program)&&(Mn=!0,is=!0,br=!0),k.id!==q&&(q=k.id,is=!0),Te.needsLights){let It=jv(E.state.lightProbeGridArray,z);Te.lightProbeGrid!==It&&(Te.lightProbeGrid=It,is=!0)}if(Mn||J!==M){S.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",M.projectionMatrix),Tt.setValue(U,"viewMatrix",M.matrixWorldInverse);let ss=Tt.map.cameraPosition;ss!==void 0&&ss.setValue(U,de.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,is=!0,br=!0)}if(Te.needsLights&&(fi.state.sunShadowMap.length>0&&Tt.setValue(U,"sunShadowMap",fi.state.sunShadowMap,j),fi.state.directionalShadowMap.length>0&&Tt.setValue(U,"directionalShadowMap",fi.state.directionalShadowMap,j),fi.state.spotShadowMap.length>0&&Tt.setValue(U,"spotShadowMap",fi.state.spotShadowMap,j),fi.state.pointShadowMap.length>0&&Tt.setValue(U,"pointShadowMap",fi.state.pointShadowMap,j)),z.isSkinnedMesh){Tt.setOptional(U,z,"bindMatrix"),Tt.setOptional(U,z,"bindMatrixInverse");let It=z.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Tt.setValue(U,"boneTexture",It.boneTexture,j))}z.isBatchedMesh&&(Tt.setOptional(U,z,"batchingTexture"),Tt.setValue(U,"batchingTexture",z._matricesTexture,j),Tt.setOptional(U,z,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",z._indirectTexture,j),Tt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",z._colorsTexture,j));let ns=Y.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&B.update(z,Y,zi),(is||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Tt.setValue(U,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Gt.envMapIntensity.value=L.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=XA()),is){if(Tt.setValue(U,"toneMappingExposure",D.toneMappingExposure),Te.needsLights&&Kv(Gt,br),be&&k.fog===!0&&Oe.refreshFogUniforms(Gt,be),Oe.refreshMaterialUniforms(Gt,k,ie,Q,E.state.transmissionRenderTarget[M.id]),Te.needsLights&&Te.lightProbeGrid){let It=Te.lightProbeGrid;Gt.probesSH.value=It.texture,Gt.probesMin.value.copy(It.boundingBox.min),Gt.probesMax.value.copy(It.boundingBox.max),Gt.probesResolution.value.copy(It.resolution)}za.upload(U,jp(Te),Gt,j)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(za.upload(U,jp(Te),Gt,j),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(U,"center",z.center),Tt.setValue(U,"modelViewMatrix",z.modelViewMatrix),Tt.setValue(U,"normalMatrix",z.normalMatrix),Tt.setValue(U,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let It=k.uniformsGroups;for(let ss=0,Ar=It.length;ss<Ar;ss++){let Qp=It[ss];se.update(Qp,zi),se.bind(Qp,zi)}}return zi}function Kv(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Qv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(M,L,Y){let k=G.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=L,G.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let Y=G.get(M);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,Y=0){re=M,Z=L,V=Y;let k=null,z=!1,be=!1;if(M){let Ee=G.get(M);if(Ee.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),ee.copy(M.viewport),Ne.copy(M.scissor),Re=M.scissorTest,S.viewport(ee),S.scissor(Ne),S.setScissorTest(Re),q=-1;return}else if(Ee.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(Ee.__hasExternalTextures)j.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let nt=M.depthTexture;if(Ee.__boundDepthTexture!==nt){if(nt!==null&&G.has(nt)&&(M.width!==nt.image.width||M.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}let De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(be=!0);let Be=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[L])?k=Be[L][Y]:k=Be[L],z=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?k=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[Y]:k=Be,ee.copy(M.viewport),Ne.copy(M.scissor),Re=M.scissorTest}else ee.copy(Me).multiplyScalar(ie).floor(),Ne.copy(Ye).multiplyScalar(ie).floor(),Re=bt;if(Y!==0&&(k=H),S.bindFramebuffer(U.FRAMEBUFFER,k)&&S.drawBuffers(M,k),S.viewport(ee),S.scissor(Ne),S.setScissorTest(Re),z){let Ee=G.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ee.__webglTexture,Y)}else if(be){let Ee=L;for(let De=0;De<M.textures.length;De++){let Be=G.get(M.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,Be.__webglTexture,Y,Ee)}}else if(M!==null&&Y!==0){let Ee=G.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,Y)}q=-1};function Kp(M){let L=G.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=R.textureFormatReadable(M.format),L.__typeReadable=R.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,Y,k,z,be,we,Ee=0){if(!(M&&M.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){S.bindFramebuffer(U.FRAMEBUFFER,De);try{let Be=M.textures[Ee],nt=Be.format,ct=Be.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);let Pe=Kp(Be);if(Pe.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-k&&Y>=0&&Y<=M.height-z&&U.readPixels(L,Y,k,z,xe.convert(nt),xe.convert(ct),be)}finally{let Be=re!==null?G.get(re).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=function(M,L,Y,k,z,be,we,Ee=0){return Ai(this,null,function*(){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(L>=0&&L<=M.width-k&&Y>=0&&Y<=M.height-z){S.bindFramebuffer(U.FRAMEBUFFER,De);let Be=M.textures[Ee],nt=Be.format,ct=Be.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);let Pe=Kp(Be);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(L,Y,k,z,xe.convert(nt),xe.convert(ct),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Xt=re!==null?G.get(re).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Xt);let Bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),yield a0(U,Bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(St),U.deleteSync(Bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(M,L=null,Y=0){let k=Math.pow(2,-Y),z=Math.floor(M.image.width*k),be=Math.floor(M.image.height*k),we=L!==null?L.x:0,Ee=L!==null?L.y:0;j.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,we,Ee,z,be),S.unbindTexture()},this.copyTextureToTexture=function(M,L,Y=null,k=null,z=0,be=0){let we,Ee,De,Be,nt,ct,Pe,St,Xt,Bt=M.isCompressedTexture?M.mipmaps[be]:M.image;if(Y!==null)we=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,nt=Y.min.y,ct=Y.isBox3?Y.min.z:0;else{let Gt=Math.pow(2,-z);we=Math.floor(Bt.width*Gt),Ee=Math.floor(Bt.height*Gt),M.isDataArrayTexture?De=Bt.depth:M.isData3DTexture?De=Math.floor(Bt.depth*Gt):De=1,Be=0,nt=0,ct=0}k!==null?(Pe=k.x,St=k.y,Xt=k.z):(Pe=0,St=0,Xt=0);let wt=xe.convert(L.format),si=xe.convert(L.type),Te;L.isData3DTexture?(j.setTexture3D(L,0),Te=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(j.setTexture2DArray(L,0),Te=U.TEXTURE_2D_ARRAY):(j.setTexture2D(L,0),Te=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let fi=S.getParameter(U.UNPACK_ROW_LENGTH),pt=S.getParameter(U.UNPACK_IMAGE_HEIGHT),zi=S.getParameter(U.UNPACK_SKIP_PIXELS),Mn=S.getParameter(U.UNPACK_SKIP_ROWS),is=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Bt.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(U.UNPACK_SKIP_ROWS,nt),S.pixelStorei(U.UNPACK_SKIP_IMAGES,ct);let br=M.isDataArrayTexture||M.isData3DTexture,Tt=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Gt=G.get(M),ns=G.get(L),It=G.get(Gt.__renderTarget),ss=G.get(ns.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Ar=0;Ar<De;Ar++)br&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(M).__webglTexture,z,ct+Ar),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(L).__webglTexture,be,Xt+Ar)),U.blitFramebuffer(Be,nt,we,Ee,Pe,St,we,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||G.has(M)){let Gt=G.get(M),ns=G.get(L);S.bindFramebuffer(U.READ_FRAMEBUFFER,N),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let It=0;It<De;It++)br?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.__webglTexture,z,ct+It):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gt.__webglTexture,z),Tt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ns.__webglTexture,be,Xt+It):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ns.__webglTexture,be),z!==0?U.blitFramebuffer(Be,nt,we,Ee,Pe,St,we,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):Tt?U.copyTexSubImage3D(Te,be,Pe,St,Xt+It,Be,nt,we,Ee):U.copyTexSubImage2D(Te,be,Pe,St,Be,nt,we,Ee);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Te,be,Pe,St,Xt,we,Ee,De,wt,si,Bt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,be,Pe,St,Xt,we,Ee,De,wt,Bt.data):U.texSubImage3D(Te,be,Pe,St,Xt,we,Ee,De,wt,si,Bt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,be,Pe,St,we,Ee,wt,si,Bt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,be,Pe,St,Bt.width,Bt.height,wt,Bt.data):U.texSubImage2D(U.TEXTURE_2D,be,Pe,St,we,Ee,wt,si,Bt);S.pixelStorei(U.UNPACK_ROW_LENGTH,fi),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),S.pixelStorei(U.UNPACK_SKIP_PIXELS,zi),S.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),S.pixelStorei(U.UNPACK_SKIP_IMAGES,is),be===0&&L.generateMipmaps&&U.generateMipmap(Te),S.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),S.unbindTexture()},this.resetState=function(){Z=0,V=0,re=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var q0={type:"change"},Ep={type:"start"},Z0={type:"end"},$h=new on,j0=new wi,YA=Math.cos(70*qh.DEG2RAD),ti=new w,Ui=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sp=1e-6,ed=class extends Aa{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new kt,this._lastTargetPosition=new w,this._quat=new kt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new w,this._rotateStart=new X,this._rotateEnd=new X,this._rotateDelta=new X,this._panStart=new X,this._panEnd=new X,this._panDelta=new X,this._dollyStart=new X,this._dollyEnd=new X,this._dollyDelta=new X,this._dollyDirection=new w,this._mouse=new X,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jA.bind(this),this._onPointerDown=qA.bind(this),this._onPointerUp=ZA.bind(this),this._onContextMenu=iM.bind(this),this._onMouseWheel=JA.bind(this),this._onKeyDown=$A.bind(this),this._onTouchStart=eM.bind(this),this._onTouchMove=tM.bind(this),this._onMouseDown=KA.bind(this),this._onMouseMove=QA.bind(this),this._interceptControlDown=nM.bind(this),this._interceptControlUp=sM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(q0),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ti.copy(t).sub(this.target),ti.applyQuaternion(this._quat),this._spherical.setFromVector3(ti),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ui:i>Math.PI&&(i-=Ui),s<-Math.PI?s+=Ui:s>Math.PI&&(s-=Ui),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ti.setFromSpherical(this._spherical),ti.applyQuaternion(this._quatInverse),t.copy(this.target).add(ti),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ti.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ti.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($h.origin.copy(this.object.position),$h.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($h.direction))<YA?this.object.lookAt(this.target):(j0.setFromNormalAndCoplanarPoint(this.object.up,this.target),$h.intersectPlane(j0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sp||this._lastTargetPosition.distanceToSquared(this.target)>Sp?(this.dispatchEvent(q0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ui/60*this.autoRotateSpeed*e:Ui/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ti.setFromMatrixColumn(t,0),ti.multiplyScalar(-e),this._panOffset.add(ti)}_panUp(e,t){this.screenSpacePanning===!0?ti.setFromMatrixColumn(t,1):(ti.setFromMatrixColumn(t,0),ti.crossVectors(this.object.up,ti)),ti.multiplyScalar(e),this._panOffset.add(ti)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ti.copy(s).sub(this.target);let r=ti.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new X,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function qA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ZA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Z0),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function KA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Hi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Hi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ep)}function QA(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function JA(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Ep),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Z0))}function $A(n){this.enabled!==!1&&this._handleKeyDown(n)}function eM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ep)}function tM(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function iM(n){this.enabled!==!1&&n.preventDefault()}function nM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nn=1;function K0(n){Nn=n}function bp(){return Nn}function yn(n){return[n[0]*Nn,n[1]*Nn,n[2]*Nn]}function Ap(n,e,t){return[n*Nn,e*Nn,t*Nn]}function Mp(n){return n.multiplyScalar(Nn)}function Sn(n){return Nn*n}var Ac=class{constructor(e){W(this,"context");W(this,"camera");W(this,"cameraControls");W(this,"followMesh");this.context=e,this.followMesh=void 0;let t=this.context.container.width,i=this.context.container.height,s=new Ut(50,t/i,Sn(1e-5),Sn(2e3));this.camera=s;let r=this.context.simulation.getRenderer(),a=new ed(this.camera,r.domElement);a.enableDamping=!0,a.dampingFactor=.05,a.enablePan=!0,a.zoomSpeed=1.5,a.panSpeed=2,a.rotateSpeed=2,a.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},a.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_ROTATE},this.cameraControls=a}followObject(e,t){let i=e.get3jsObjects()[0];this.cameraControls.enablePan=!1;let s=yn(t);this.camera.position.add(new w(s[0],s[1],s[2])),this.cameraControls.update(),this.followMesh=i}stopFollowingObject(){this.followMesh&&(this.followMesh.remove(this.camera),this.followMesh=void 0,this.cameraControls.enablePan=!0)}isFollowingObject(){return!!this.followMesh}get3jsCamera(){return this.camera}get3jsCameraControls(){return this.cameraControls}update(){if(this.isFollowingObject()){let e=this.followMesh.position.clone(),t=e.clone().sub(this.cameraControls.target);this.camera.position.add(t),this.cameraControls.target.set(e.x,e.y,e.z)}this.cameraControls.update(),this.camera.updateMatrixWorld()}};var ht=class{static rad(e){return e*Math.PI/180}static deg(e){return e*180/Math.PI}static hoursToDeg(e){return e*15}static sexagesimalToDecimalRa(e,t,i){return e*15+t/4+i/240}static sexagesimalToDecimalDec(e,t,i,s=!1){let r=e<0||Object.is(e,-0)?-1:1,a=Math.abs(e)+t/60+i/3600;return r*a}static valToSexagesimalRa(e){let t=Math.trunc(e/15),i=Math.trunc((e-t*15)*4),s=(e-t*15-i/4)*240;return[t,i,s]}static decimalToSexagesimalDec(e,t=!1){let i=e<0||Object.is(e,-0)?-1:1,s=Math.abs(e),r=i*Math.trunc(s),a=Math.trunc((s-Math.trunc(s))*60),o=((s-Math.trunc(s))*60-a)*60;return[r,a,o]}static kmToAu(e){return e/1495978707e-1}static auToKm(e){return e*1495978707e-1}};var Tp=2451545,ki=class{static sphericalToCartesian(e,t,i){return[i*Math.cos(e)*Math.cos(t),i*Math.sin(e)*Math.cos(t),i*Math.sin(t)]}static equatorialToEcliptic_Cartesian(e,t,i,s){return[e,Math.cos(s)*t+Math.sin(s)*i,-Math.sin(s)*t+Math.cos(s)*i]}static eclipticToEquatorial_Cartesian(e,t,i,s){return[e,Math.cos(s)*t+-Math.sin(s)*i,Math.sin(s)*t+Math.cos(s)*i]}static getNutationAndObliquity(e=Tp){let t=(e-Tp)/36525,i=ht.rad(125.04452-1934.136261*t+.0020708*t*t+t*t*t/45e4),s=ht.rad(280.4665+36000.7698*t),r=ht.rad(218.3165+481267.8813*t),a=-17.2/3600*Math.sin(i)-1.32/3600*Math.sin(2*s)-.23/3600*Math.sin(2*r)+.21/3600*Math.sin(2*i),o=23+26/60+21.448/3600-46.815/3600*t-59e-5/3600*t*t+.001813/3600*t*t*t,l=9.2/3600*Math.cos(i)+.57/3600*Math.cos(2*s)+.1/3600*Math.cos(2*r)-.09/3600*Math.cos(2*i),c=o+l;return{nutation:ht.rad(a),obliquity:ht.rad(c)}}static getObliquity(e=Tp){return this.getNutationAndObliquity(e).obliquity}};var rM=new Set(["a","e","i","q","epoch","period","tp","ma","n","L","om","w","wBar","GM"]),aM=new Set(["i","ma","n","L","om","w","wBar"]),Va={SUN:13271244004193939e4,MERCURY:2203178000000002e-2,VENUS:32485859200000006e-2,EARTH_MOON:4035032355022598e-1,MARS:4282837521400002e-2,JUPITER:0x1c22c96966960d0,SATURN:379405852e8,URANUS:5794548600000008,NEPTUNE:6836527100580024,PLUTO_CHARON:9770000000000007e-4};function Ft(n){return typeof n!="undefined"&&Number.isFinite(n)}var hi=class n{constructor(e,t="rad",i=!1){W(this,"attrs");W(this,"locked");this.attrs={},this.locked=!1;for(let s in e)if(e.hasOwnProperty(s)){let r=aM.has(s)?t:null;this.set(s,e[s],r)}typeof this.attrs.GM=="undefined"&&(this.attrs.GM=Va.SUN),this.fill(),this.get("e")>=.999&&typeof this.getUnsafe("tp")=="undefined"&&console.warn('You must specify "tp" (time of perihelion) for highly eccentric orbits'),this.locked=i}set(e,t,i="rad"){if(this.locked)throw new Error("Attempted to modify locked (immutable) Ephem object");return rM.has(e)?(i==="deg"?this.attrs[e]=t*Math.PI/180:this.attrs[e]=t,!0):(console.warn(`Invalid ephem attr: ${e}`),!1)}getUnsafe(e,t="rad"){if(t==="deg"){let i=this.attrs[e];return typeof i=="undefined"?void 0:i*180/Math.PI}return this.attrs[e]}get(e,t="rad"){let i=this.getUnsafe(e,t);if(typeof i=="undefined")throw console.info(this.attrs),new Error(`Attempted to get ephemeris value '${e}' but it was undefined`);return i}fill(){let e=this.getUnsafe("e");if(!Ft(e))throw console.info(this.attrs),new Error('Must define eccentricity "e" in an orbit');let t=this.getUnsafe("a"),i=this.getUnsafe("q");if(Ft(t)){if(!Ft(i)){if(e>=1)throw new Error('Must provide perihelion distance "q" if eccentricity "e" is greater than 1');i=t*(1-e),this.set("q",i)}}else if(Ft(i))t=i/(1-e),this.set("a",t);else throw new Error('Must define semimajor axis "a" or perihelion distance "q" in an orbit');let s=this.getUnsafe("w"),r=this.getUnsafe("wBar"),a=this.getUnsafe("om");Ft(s)&&Ft(a)&&!Ft(r)?(r=s+a,this.set("wBar",r)):Ft(r)&&Ft(a)&&!Ft(s)?(s=r-a,this.set("w",s)):Ft(s)&&Ft(r)&&!Ft(a)&&(a=r-s,this.set("om",a));let o=t*149597870700,l=this.getUnsafe("n"),c=this.getUnsafe("GM"),u=this.getUnsafe("period");if(e<1){if(!Ft(u)&&Ft(t)){if(!Ft(c))throw new Error("Expected ephemeris attribute GM to be set");u=2*Math.PI*Math.sqrt(o*o*o/c)/86400,this.set("period",u)}if(Ft(u)&&!Ft(l)){let f=2*Math.PI/u;this.set("n",f)}else Ft(l)&&!Ft(u)&&this.set("period",2*Math.PI/l)}let h=this.getUnsafe("ma"),d=this.getUnsafe("L");!Ft(d)&&Ft(a)&&Ft(s)&&Ft(h)&&(d=a+s+h,this.set("L",d)),Ft(h)||this.set("ma",d-r)}lock(){this.locked=!0}copy(){return new n({GM:this.getUnsafe("GM"),epoch:this.getUnsafe("epoch"),a:this.getUnsafe("a"),e:this.getUnsafe("e"),i:this.getUnsafe("i"),om:this.getUnsafe("om"),ma:this.getUnsafe("ma"),w:this.getUnsafe("w")},"rad")}};function td(n,e,t,i,s,r){if(n===void 0)throw"data object is undefined";if(!Array.isArray(n))throw"data object must be an array";if(t>=i)throw"first row must be greater than last row";if(t<0)throw"first row must be greater than zero";if(i>n.length-1)throw"last row must be ";if(!Array.isArray(n[t]))throw"data in rows must be array data";let a=n[0].length-1;if(s<0||s>a)throw`xIndex has to be between 0 and ${a}: ${s}`;if(r<0||r>a)throw`yIndex has to be between 0 and ${a}: ${r}`;let o=0;for(let l=t;l<=i;l++){let c=1;for(let u=t;u<=i;u++)u!==l&&(c*=(e-n[u][s])/(n[l][s]-n[u][s]));o+=c*n[l][r]}return o}var lM=(n,e)=>n-e,cM="{{assets}}/sprites/fuzzyparticle.png";function Mc(n,e){return n.replace("{{assets}}",`${e}/assets`).replace("{{data}}",`${e}/data`)}function Tc(n,e){return Mc(n||cM,e)}function Q0(n,e){let t=Tc(n,e),i=new Fi().load(t);return i.colorSpace=je,i}function J0(){return window.location.href.indexOf("localhost")>-1?"/src/":"https://typpo.github.io/spacekit/src"}function $0(n,e,t=lM){if(n===void 0)throw"data object is undefined";if(!Array.isArray(n))throw"data object must be an array";if(e===void 0)throw"value object must be defined";if(t===void 0)throw"comparer must be defined";let i=0,s=n.length;for(;i<=s;){let r=Math.floor((i+s)/2);if(r===n.length)return r;let a=t(n[r],e);if(a<0)i=r+1;else if(a>0)s=r-1;else return r}return~i}var ev=20,hM=(n,e)=>n[0]-e,wp={distance:"au",time:"day"},dM="cartesianposvel",fM="lagrange",pM=5,mM=new Set(["km","au"]),gM=new Set(["cartesianposvel"]),vM=new Set(["lagrange"]),xM=new Set(["day","sec"]),Zi=class{constructor(e){W(this,"units");W(this,"ephemType");W(this,"interpolationType");W(this,"interpolationOrder");W(this,"data");if(this.units=JSON.parse(JSON.stringify(wp)),this.ephemType=dM,this.interpolationType=fM,this.interpolationOrder=pM,!e)throw new Error("EphemerisTable must be initialized with an ephemeris data structure");if(!e.data||!Array.isArray(e.data)||e.data.length===0||!Array.isArray(e.data[0]))throw new Error("EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data");if(this.data=JSON.parse(JSON.stringify(e.data)),e.distanceUnits){if(!mM.has(e.distanceUnits))throw new Error(`Unknown distance units: ${e.distanceUnits}`);this.units.distance=e.distanceUnits}if(e.timeUnits){if(!xM.has(e.timeUnits))throw new Error(`Unknown time units: ${e.timeUnits}`);this.units.time=e.timeUnits}if(e.ephemerisType){if(!gM.has(e.ephemerisType))throw new Error(`Unknown ephemeris type: ${e.ephemerisType}`);this.ephemType=e.ephemerisType}if(e.interpolationType){if(!vM.has(e.interpolationType))throw new Error(`Unknown interpolation type: ${e.interpolationType}`);this.interpolationType=e.interpolationType}if(e.interpolationOrder!==void 0){if(e.interpolationOrder<1||e.interpolationOrder>ev)throw new Error(`Interpolation order must be >0 and <${ev}: ${e.interpolationOrder}`);this.interpolationOrder=e.interpolationOrder}if(this.units.distance!==wp.distance||this.units.time!==wp.time){let t=this.calcDistanceMultiplier(this.units.distance),i=this.calcTimeMultiplier(this.units.time);this.data.forEach(s=>{s[1]*=t,s[2]*=t,s[3]*=t,s[4]*=t*i,s[5]*=t*i,s[6]*=t*i})}}getPositionAtTime(e){if(e<=this.data[0][0])return[this.data[0][1],this.data[0][2],this.data[0][3]];let t=this.data[this.data.length-1];if(e>=t[0])return[t[1],t[2],t[3]];let{startIndex:i,stopIndex:s}=this.calcBoundingIndices(e),r=td(this.data,e,i,s,0,1),a=td(this.data,e,i,s,0,2),o=td(this.data,e,i,s,0,3);return[r,a,o]}getPositions(e,t,i){if(e>t)throw new Error("Requested start needs to be after requested stop");if(i<=0)throw new Error("Step days needs to be greater than zero");let s=[];for(let r=e;r<=t;r+=i)s.push(this.getPositionAtTime(r));return s}calcDistanceMultiplier(e){switch(e){case"au":return 1;case"km":return ht.kmToAu(1);default:throw new Error("Unknown distance unit type: "+e)}}calcTimeMultiplier(e){switch(e){case"day":return 1;case"sec":return 1/86400;default:throw new Error("Unknown time unit type: "+e)}}calcBoundingIndices(e){let t=Math.floor(this.interpolationOrder/2),i=$0(this.data,e,hM);i<0&&(i=~i-1);let s=i-t;s<0&&(s=0);let r=s+Number(this.interpolationOrder);return r>=this.data.length&&(r=this.data.length-1,this.data.length>this.interpolationOrder?s=r-this.interpolationOrder:s=0),{startIndex:s,stopIndex:r}}};var En={MERCURY:new hi({epoch:24584265e-1,a:.3870968969437096,e:.2056515875393916,i:7.003891682749818,om:48.30774804443502,w:29.17940253442659,ma:256.190975209273},"deg",!0),VENUS:new hi({epoch:24584265e-1,a:.7233458663591554,e:.006762510759617694,i:3.394567787211735,om:76.62534150657346,w:54.74567447560867,ma:275.6687596099721},"deg",!0),EARTH:new hi({epoch:2451545,a:1.00000261,e:.01671123,i:-1531e-8,om:0,wBar:102.93768193,L:100.46457166},"deg",!0),MOON:new hi({GM:Va.EARTH_MOON,epoch:24586215e-1,a:.002582517063772124,e:.04582543645168888,i:5.102060246928811,om:108.5916732144811,w:61.80561793729225,ma:50.53270083636792},"deg",!0),MARS:new hi({epoch:24584265e-1,a:1.52371401537107,e:.09336741335309606,i:1.848141099825311,om:49.50420572080223,w:286.6965847685386,ma:25.38237617924876},"deg",!0),JUPITER:new hi({epoch:24584265e-1,a:5.20180355911023,e:.0489912558249006,i:1.303560894624275,om:100.5203828847816,w:273.736301845404,ma:231.939544389401},"deg",!0),SATURN:new hi({epoch:24584265e-1,a:9.577177295536776,e:.05101889921719987,i:2.482782449972317,om:113.6154964073247,w:339.4422648650336,ma:187.0970898012944},"deg",!0),URANUS:new hi({epoch:24584265e-1,a:19.14496966635462,e:.04832662948112808,i:.7697511134483724,om:74.14239045667875,w:99.42704504702185,ma:220.2603033874267},"deg",!0),NEPTUNE:new hi({epoch:24584265e-1,a:30.0962226342805,e:.00736257118719377,i:1.774569249829094,om:131.8695882492132,w:258.6226409499831,ma:315.2804988924479},"deg",!0),PLUTO:new hi({epoch:24540005e-1,a:39.4450697257,e:.250248713478,i:17.0890009196,om:110.376957955,w:112.597141677,ma:25.2471897122},"deg",!0)},_M={Pluto:{ra:132.993,dec:-6.163},Uranus:{ra:257.311,dec:-15.175}},yM=ki.getObliquity(),SM=[0,0,1],Dp=1e-12;function EM(n,e,t){return Math.min(Math.max(n,e),t)}function tv(n){let e=n%360;return e<0?e+360:e}function Cp(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Rp(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Pp(n){return Math.sqrt(Cp(n,n))}function xr(n){let e=Pp(n);if(e<Dp)throw new Error("Cannot normalize zero-length vector");return n.map(t=>t/e)}function iv(n,e){return[e[0][0]*n[0]+e[1][0]*n[1]+e[2][0]*n[2],e[0][1]*n[0]+e[1][1]*n[1]+e[2][1]*n[2],e[0][2]*n[0]+e[1][2]*n[1]+e[2][2]*n[2]]}function nv(n){return ki.equatorialToEcliptic_Cartesian(n[0],n[1],n[2],yM)}function bM(n){switch(n["Element Type"]){case"Laplace":{let e=Number(n.RA),t=Number(n.Dec);return Number.isFinite(e)&&Number.isFinite(t)?{ra:e,dec:t}:void 0}case"Equatorial":return _M[n.Planet];default:return}}function AM(n){let e=xr(ki.sphericalToCartesian(ht.rad(n.ra),ht.rad(n.dec),1)),t=Rp(SM,e);Pp(t)<Dp&&(t=[1,0,0]),t=xr(t);let i=xr(Rp(e,t));return[t,i,e]}function MM(n,e,t){let i=ht.rad(n),s=ht.rad(e),r=ht.rad(t);return[Math.cos(s)*Math.cos(r)-Math.sin(s)*Math.sin(r)*Math.cos(i),Math.sin(s)*Math.cos(r)+Math.cos(s)*Math.sin(r)*Math.cos(i),Math.sin(r)*Math.sin(i)]}function TM(n,e){let t=ht.rad(n),i=ht.rad(e);return[Math.sin(i)*Math.sin(t),-Math.cos(i)*Math.sin(t),Math.cos(t)]}function wM(n){if(n["Element Type"]==="Ecliptic")return{i:Number(n.i),om:Number(n.node),w:Number(n.w)};let e=bM(n);if(!e)throw new Error(`Missing reference plane pole for ${n.Planet} ${n["Sat."]} (${n["Element Type"]})`);let t=AM(e),i=MM(Number(n.i),Number(n.node),Number(n.w)),s=TM(Number(n.i),Number(n.node)),r=xr(nv(iv(i,t))),a=xr(nv(iv(s,t))),o=Math.acos(EM(a[2],-1,1)),l=[-a[1],a[0],0],c=Pp(l),u=0,h=0;if(c<Dp)h=Math.atan2(r[1],r[0]);else{let d=xr(l),f=xr(Rp(a,d));u=Math.atan2(d[1],d[0]),h=Math.atan2(Cp(r,f),Cp(r,d))}return{i:ht.deg(o),om:tv(ht.deg(u)),w:tv(ht.deg(h))}}var id=class{constructor(e){W(this,"_simulation");W(this,"_context");W(this,"_satellitesByPlanet");W(this,"_readyPromise");this._simulation=e,this._context=e.getContext(),this._satellitesByPlanet={};let t=Mc("{{data}}/processed/natural-satellites.json",this._context.options.basePath);this._readyPromise=new Promise((i,s)=>{fetch(t).then(r=>r.json()).then(r=>{r.forEach(a=>{let o=a.Planet.toLowerCase();switch(this._satellitesByPlanet[o]||(this._satellitesByPlanet[o]=[]),a["Element Type"]){case"Ecliptic":case"Equatorial":case"Laplace":break;default:console.warn(`Ephemeris type not yet implemented: ${a["Element Type"]}`);return}let l=wM(a),c;switch(a.Planet){case"Earth":c=Va.EARTH_MOON;break;case"Pluto":c=Va.PLUTO_CHARON;break;default:c=Va[a.Planet.toUpperCase()]}c||console.error(`Could not look up GM for ${a.Planet}`);let u=new hi({GM:c,epoch:Number(a["Epoch JD"]),a:ht.kmToAu(Number(a.a)),e:Number(a.e),i:l.i,w:l.w,om:l.om,ma:Number(a.M)},"deg",!0);this._satellitesByPlanet[o].push({name:a["Sat."],elementType:a["Element Type"],tags:new Set(a.tags.split(",")),ephem:u})}),console.info("Loaded",r.length,"natural satellites"),i(this)}).catch(r=>{s(r)})})}getSatellitesForPlanet(e){return this._satellitesByPlanet[e.toLowerCase()]}load(){return this._readyPromise}};var lv=em(Ip());var cv=(r=>(r[r.UNKNOWN=0]="UNKNOWN",r[r.PARABOLIC=1]="PARABOLIC",r[r.HYPERBOLIC=2]="HYPERBOLIC",r[r.ELLIPTICAL=3]="ELLIPTICAL",r[r.TABLE=4]="TABLE",r))(cv||{}),{sin:_r,cos:es,sqrt:Rs}=Math,sd=10,uv=360,IM={leadDurationYears:sd,trailDurationYears:sd,numberSamplePoints:uv};function nd(n){return Math.exp(Math.log(n)/3)}var yr=class n{constructor(e,t){W(this,"ephem");W(this,"options");W(this,"orbitPoints");W(this,"eclipticDropLines");W(this,"orbitShape");W(this,"orbitStart");W(this,"orbitStop");W(this,"orbitType");var i,s,r;this.ephem=e,this.options=t||{},this.options.orbitPathSettings||(this.options.orbitPathSettings=JSON.parse(JSON.stringify(IM))),(i=this.options.orbitPathSettings)!=null&&i.leadDurationYears||(this.options.orbitPathSettings.leadDurationYears=sd),(s=this.options.orbitPathSettings)!=null&&s.trailDurationYears||(this.options.orbitPathSettings.trailDurationYears=sd),(r=this.options.orbitPathSettings)!=null&&r.numberSamplePoints||(this.options.orbitPathSettings.numberSamplePoints=uv),this.orbitPoints=void 0,this.eclipticDropLines=void 0,this.orbitShape=void 0,this.orbitStart=0,this.orbitStop=0,this.orbitType=n.getOrbitType(this.ephem)}getPositionAtTime(e,t=!1){switch(this.orbitType){case 1:return this.getPositionAtTimeNearParabolic(e,t);case 2:return this.getPositionAtTimeHyperbolic(e,t);case 3:return this.getPositionAtTimeElliptical(e,t);case 4:return this.getPositionAtTimeTable(e,t);default:throw new Error("No handler for this type of orbit")}}getPositionAtTimeParabolic(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let s=.01720209895,r=i.get("q"),l=1.5*((e-i.get("tp"))*(s/Rs(2))/Rs(r*r*r)),c=Rs(1+l*l),u=nd(c+l)-nd(c-l),h=2*Math.atan(u),d=r*(1+u*u);return this.vectorToHeliocentric(h,d)}getPositionAtTimeNearParabolic(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let s=.01720209895,r=i.get("e"),a=i.get("q"),l=.75*(e-i.get("tp"))*s*Rs((1+r)/(a*a*a)),c=Rs(1+l*l),u=nd(c+l)-nd(c-l),h=(1-r)/(1+r),d=2/3+2/5*u*u,f=7/5+33/35*u*u+37/175*bi(u,4),p=u*u*(432/175+956/1125*u*u+84/1575*bi(u,4)),v=u*u/(1+u*u),m=h*v*v,g=u*(1+h*v*(d+f*m+p*m*m)),_=2*Math.atan(g),b=a*(1+g*g)/(1+g*g*h);return this.vectorToHeliocentric(_,b)}getPositionAtTimeHyperbolic(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let s=i.get("e"),r=i.get("a"),a=i.get("ma"),o=i.get("n","rad"),l=i.get("epoch"),c=e-l,u=a+o*c,h=u;for(let v=0;v<100;v++){let m=(u+s*(h*Math.cosh(h)-Math.sinh(h)))/(s*Math.cosh(h)-1),g=Math.abs(m-h);if(h=m,g<1e-7)break}let d=h,f=2*Math.atan(Rs((s+1)/(s-1))*Math.tanh(d/2)),p=r*(1-s*s)/(1+s*es(f));return this.vectorToHeliocentric(f,p)}getPositionAtTimeElliptical(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let s=i.get("e"),r=i.get("ma","rad"),a=i.get("n","rad"),o=i.get("epoch"),l=e-o,c=r+a*l;t&&(console.info("period=",i.get("period")),console.info("n=",a),console.info("ma=",r),console.info("d=",l),console.info("M=",c));let u=c;for(let v=0;v<100;v++){let m=c+s*_r(u),g=Math.abs(m-u);if(u=m,g<1e-7)break}let h=u,d=2*Math.atan(Rs((1+s)/(1-s))*Math.tan(h/2)),p=i.get("a")*(1-s*s)/(1+s*es(d));return this.vectorToHeliocentric(d,p)}getPositionAtTimeTable(e,t=!1){if(this.ephem instanceof Zi){let i=this.ephem.getPositionAtTime(e);return Ap(i[0],i[1],i[2])}throw new Error("Attempted to read ephemeris table of non-table data")}vectorToHeliocentric(e,t){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let s=i.get("i","rad"),r=i.get("om","rad"),a=i.get("wBar","rad"),o=t*(es(r)*es(e+a-r)-_r(r)*_r(e+a-r)*es(s)),l=t*(_r(r)*es(e+a-r)+es(r)*_r(e+a-r)*es(s)),c=t*(_r(e+a-r)*_r(s));return Ap(o,l,c)}needsUpdateForTime(e){return this.orbitType===4?e<this.orbitStart||e>this.orbitStop:!1}getOrbitShape(e,t=!1){if(t&&(this.orbitShape&&(this.orbitShape.geometry.dispose(),this.orbitShape.material.dispose()),this.orbitShape=void 0,this.orbitPoints=void 0,this.eclipticDropLines&&(this.eclipticDropLines.geometry.dispose(),this.eclipticDropLines.material.dispose()),this.eclipticDropLines=void 0),this.orbitShape)return this.orbitShape;if(this.orbitType===3)return this.getEllipse();let i;this.ephem instanceof Zi?i=e:i=this.ephem.getUnsafe("tp");let s=i||lv.default.toJulianDay(new Date),r=s-this.options.orbitPathSettings.trailDurationYears*365.25,a=s+this.options.orbitPathSettings.leadDurationYears*365.25,o=(a-r)/this.options.orbitPathSettings.numberSamplePoints;switch(this.orbitStart=r,this.orbitStop=a,this.orbitType){case 2:return this.getLine(this.getPositionAtTimeHyperbolic.bind(this),r,a,o);case 1:return this.getLine(this.getPositionAtTimeNearParabolic.bind(this),r,a,o);case 4:return this.getTableOrbit(r,a,o);default:throw new Error("Unknown orbit shape")}}getLine(e,t,i,s){let r=[];for(let a=t;a<=i;a+=s){let o=e(a);r.push(new w(o[0],o[1],o[2]))}return this.generateAndCacheOrbitShape(r)}getTableOrbit(e,t,i){if(this.ephem instanceof hi)throw new Error("Attempted to compute table orbit on non-table ephemeris");let r=this.ephem.getPositions(e,t,i).map(a=>yn(a)).map(a=>new w(a[0],a[1],a[2]));return this.generateAndCacheOrbitShape(r)}getEllipse(){let e=this.getEllipsePoints();return this.generateAndCacheOrbitShape(e)}getEllipsePoints(){let e=this.ephem;if(e instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let t=e.get("a"),i=e.get("e"),s=Math.PI*2,r=s/90;i>.9&&(r=s/360);let a=[];for(let o=0;o<s;o+=r){let l=2*Math.atan(Rs((1+i)/(1-i))*Math.tan(o/2)),c=t*(1-i*i)/(1+i*es(l)),u=this.vectorToHeliocentric(l,c);(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))&&(console.error("NaN position value - you may have bad or incomplete data in the following ephemeris:"),console.error(e)),a.push(new w(u[0],u[1],u[2]))}return a.push(a[0]),a}generateAndCacheOrbitShape(e){return this.orbitPoints=e,this.orbitShape=new xi(new Ie().setFromPoints(e),new Rt({color:new oe(this.options.color||4473924)})),this.orbitShape}getLinesToEcliptic(){if(this.eclipticDropLines)return this.eclipticDropLines;this.orbitPoints||this.getOrbitShape();let e=this.orbitPoints||[],t=[];e.forEach((s,r)=>{r===e.length-1&&this.orbitType===3||(t.push(s),t.push(new w(s.x,s.y,0)))});let i=new Ie().setFromPoints(t);return this.eclipticDropLines=new ni(i,new Rt({color:this.options.eclipticLineColor||3355443,blending:Un})),this.eclipticDropLines}getHexColor(){return this.getOrbitShape().material.color.getHex()}setHexColor(e){this.getOrbitShape().material.color=new oe(e)}getVisibility(){return this.getOrbitShape().visible}setVisibility(e){this.getOrbitShape().visible=e}static getOrbitType(e){if(e instanceof Zi)return 4;let t=e.get("e");return t>=.999&&t<1.2?1:t>1.2?2:3}};var xd=em(Ip());var wc=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";n=u}var s=(performance||Date).now(),r=s,a=0,o=t(new wc.Panel("FPS","#0ff","#002")),l=t(new wc.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new wc.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){s=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-s,200),u>=r+1e3&&(o.update(a*1e3/(u-r),100),r=u,a=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){s=this.end()},domElement:e,setMode:i}};wc.Panel=function(n,e,t){var i=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,u=2*a,h=3*a,d=15*a,f=74*a,p=30*a,v=document.createElement("canvas");v.width=o,v.height=l,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(n,c,u),m.fillRect(h,d,f,p),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h,d,f,p),{dom:v,update:function(g,_){i=Math.min(i,g),s=Math.max(s,g),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=e,m.fillText(r(g)+" "+n+" ("+r(i)+"-"+r(s)+")",c,u),m.drawImage(v,h+a,d,f-a,p,h,d,f-a,p),m.fillRect(h+f-a,d,a,p),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h+f-a,d,a,r((1-g/_)*p))}}};var hv=wc;var UM=(()=>{let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Ie;return t.setAttribute("position",new He(n,3)),t.setAttribute("uv",new He(e,2)),t})(),bn=class Np{static get fullscreenGeometry(){return UM}constructor(e="Pass",t=new Ri,i=new In){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new et(Np.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ri),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=xn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof at||t instanceof Ct||t instanceof Lt||t instanceof Np)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},LM=class extends bn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){let r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},BM=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,mv="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",gv=class extends Ke{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new tt(null),depthBuffer:new tt(null),channelWeights:new tt(null),opacity:new tt(1)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:BM,vertexShader:mv}),this.depthFunc=Ys}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){let e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){let e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},NM=class extends bn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new gv,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new at(1,1,{minFilter:mt,magFilter:mt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==At?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===je&&(this.renderTarget.texture.colorSpace=je))}},dv=new oe,vv=class extends bn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(dv),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(dv,o):c&&n.setClearAlpha(o)}},OM=class extends bn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new vv(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){let r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function FM(n,e){let t=n.getContext();if(e<=0||typeof t.renderbufferStorageMultisample!="function")return 0;let i=t.getParameter(t.MAX_SAMPLES),s=Math.min(e,i);if(s<=0)return 0;let r=t.getParameter(t.RENDERBUFFER_BINDING),a=t.createRenderbuffer();try{return t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorageMultisample(t.RENDERBUFFER,s,t.RGBA8,1,1),s}catch(o){return 0}finally{t.bindRenderbuffer(t.RENDERBUFFER,r),t.deleteRenderbuffer(a)}}var Up=1/1e3,HM=1e3,kM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document!="undefined"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Up}get fixedDelta(){return this._fixedDelta*Up}set fixedDelta(n){this._fixedDelta=n*HM}get elapsed(){return this._elapsed*Up}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},xv=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s=At}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new NM,this.depthRenderTarget=null,this.passes=[],this.timer=new kM,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){let e=this.renderer===null?n:FM(this.renderer,n);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new X),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===At&&n.outputColorSpace===je&&(this.inputBuffer.texture.colorSpace=je,this.outputBuffer.texture.colorSpace=je,this.inputBuffer.dispose(),this.outputBuffer.dispose());let s=this.multisampling;this.multisampling=s,n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){let n=new yi;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=gn,n.type=$n):n.type=jt;let e=new yi;e.format=n.format,e.type=n.type,e.name="EffectComposer.OutputDepth";let t=new yi;t.format=n.format,t.type=n.type,t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new at(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){let e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);let r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let n=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){let s=this.renderer,r=s===null?new X:s.getDrawingBufferSize(new X),a=new at(r.width,r.height,{minFilter:mt,magFilter:mt,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===At&&s!==null&&s.outputColorSpace===je&&(a.texture.colorSpace=je),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(n){for(let e of this.passes)e.mainScene=n}setMainCamera(n){for(let e of this.passes)e.mainCamera=n}addPass(n,e){let t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new X),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of t)o.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(n.getDepthTexture()===r&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof OM?a=!0:o instanceof LM&&(a=!1)}}setSize(n,e,t){let i=this.renderer,s=i.getSize(new X);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);let r=i.getDrawingBufferSize(new X);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],bn.fullscreenGeometry.dispose()}},Er={NONE:0,DEPTH:1,CONVOLUTION:2},gt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},zM=class{constructor(){this.shaderParts=new Map([[gt.FRAGMENT_HEAD,null],[gt.FRAGMENT_MAIN_UV,null],[gt.FRAGMENT_MAIN_IMAGE,null],[gt.VERTEX_HEAD,null],[gt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Er.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Cn}};var Lp=!1,fv=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Qt:t=this.materialsFlatShadedDoubleSide;break;case Ot:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Qt:t=this.materialsDoubleSide;break;case Ot:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Ke))return n.clone();let e=n.uniforms,t=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}let i=n.clone();for(let s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=hn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ot,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Qt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ot,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Qt,i})}}render(n,e,t){let i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Lp){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Lp}static set workaroundEnabled(n){Lp=n}};var Ds=-1,On=class extends Zt{constructor(n=null,e=Ds,t=Ds,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new X(1,1),this.preferredSize=new X(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new X,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Ds?t.width=e.width:e.height!==Ds?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Ds?t.height=e.height:e.width!==Ds?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Ds),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Ds}};var dt={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},GM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",WM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",hT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",xT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_T="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yT=new Map([[dt.ADD,GM],[dt.ALPHA,VM],[dt.AVERAGE,WM],[dt.COLOR,XM],[dt.COLOR_BURN,YM],[dt.COLOR_DODGE,qM],[dt.DARKEN,jM],[dt.DIFFERENCE,ZM],[dt.DIVIDE,KM],[dt.DST,null],[dt.EXCLUSION,QM],[dt.HARD_LIGHT,JM],[dt.HARD_MIX,$M],[dt.HUE,eT],[dt.INVERT,tT],[dt.INVERT_RGB,iT],[dt.LIGHTEN,nT],[dt.LINEAR_BURN,sT],[dt.LINEAR_DODGE,rT],[dt.LINEAR_LIGHT,aT],[dt.LUMINOSITY,oT],[dt.MULTIPLY,lT],[dt.NEGATION,cT],[dt.NORMAL,uT],[dt.OVERLAY,hT],[dt.PIN_LIGHT,dT],[dt.REFLECT,fT],[dt.SATURATION,pT],[dt.SCREEN,mT],[dt.SOFT_LIGHT,gT],[dt.SRC,vT],[dt.SUBTRACT,xT],[dt.VIVID_LIGHT,_T]]),ST=class extends Zt{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new tt(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return yT.get(this.blendFunction)}};var ET=class extends Zt{constructor(n,e,{attributes:t=Er.NONE,blendFunction:i=dt.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new ST(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Cn,this._outputColorSpace=Ii}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=xn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];(e instanceof at||e instanceof Ct||e instanceof Lt||e instanceof bn)&&this[n].dispose()}}};var Op={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},bT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,AT="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",MT=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],TT=class extends Ke{constructor(n=new ut){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new tt(null),texelSize:new tt(new ut),scale:new tt(1),kernel:new tt(0)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bT,vertexShader:AT}),this.setTexelSize(n.x,n.y),this.kernelSize=Op.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return MT[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){let t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},wT=class extends bn{constructor({kernelSize:n=Op.MEDIUM,resolutionScale:e=.5,width:t=On.AUTO_SIZE,height:i=On.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new at(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new On(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new TT,this._blurMaterial.kernelSize=n,this.copyMaterial=new gv}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence,h=e;this.fullscreenMaterial=c;for(let d=0,f=u.length;d<f;++d){let p=(d&1)===0?o:l;c.kernel=u[d],c.inputBuffer=h.texture,n.setRenderTarget(p),n.render(r,a),h=p}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==At?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===je&&(this.renderTargetA.texture.colorSpace=je,this.renderTargetB.texture.colorSpace=je))}static get AUTO_SIZE(){return On.AUTO_SIZE}},CT=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,RT=class extends Ke{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,"")},uniforms:{inputBuffer:new tt(null),threshold:new tt(0),smoothing:new tt(1),range:new tt(null)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:CT,vertexShader:mv}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},DT=class extends bn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=On.AUTO_SIZE,height:r=On.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new RT(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new On(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==At&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},PT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,IT="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",UT=class extends Ke{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new tt(null),texelSize:new tt(new X)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:PT,vertexShader:IT})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},LT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,BT="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",NT=class extends Ke{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new tt(null),supportBuffer:new tt(null),texelSize:new tt(new X),radius:new tt(.85)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:LT,vertexShader:BT})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},OT=class extends bn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new UT,this.upsamplingMaterial=new NT,this.resolution=new X}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){let i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){let s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){let{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this,h=e;this.fullscreenMaterial=o;for(let d=0,f=c.length;d<f;++d){let p=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,n.setRenderTarget(p),n.render(r,a),h=p}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){let f=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,n.setRenderTarget(f),n.render(r,a),h=f}}setSize(n,e){let t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){let i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let s of i)s.texture.type=t;if(t!==At)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===je)for(let s of i)s.texture.colorSpace=je}}dispose(){super.dispose();for(let n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},FT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,_v=class extends ET{constructor({blendFunction:n=dt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Op.LARGE,resolutionScale:l=.5,width:c=On.AUTO_SIZE,height:u=On.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",FT,{blendFunction:n,uniforms:new Map([["map",new tt(null)],["intensity",new tt(s)]])}),this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new wT({kernelSize:o}),this.luminancePass=new DT({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new OT,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;let f=this.resolution=new On(this,h,d,l);f.addEventListener("change",p=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===je&&(this.renderTarget.texture.colorSpace=je))}};var yv=class extends bn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new vv,this.overrideMaterialManager=t===null?null:new fv(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new fv(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=u}};var d1=Math.PI*.5;var HT=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,kT="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",zT=class extends Ke{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new tt(null),depthBuffer:new tt(null),resolution:new tt(new X),texelSize:new tt(new X),cameraNear:new tt(.3),cameraFar:new tt(1e3),aspect:new tt(1),time:new tt(0)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=xn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=HT.replace(gt.FRAGMENT_HEAD,n.get(gt.FRAGMENT_HEAD)||"").replace(gt.FRAGMENT_MAIN_UV,n.get(gt.FRAGMENT_MAIN_UV)||"").replace(gt.FRAGMENT_MAIN_IMAGE,n.get(gt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=kT.replace(gt.VERTEX_HEAD,n.get(gt.VERTEX_HEAD)||"").replace(gt.VERTEX_MAIN_SUPPORT,n.get(gt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Ut?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return gt}};var p1=Number("186".replace(/\D+/g,"")),Sr=255/256,m1=new Float32Array([Sr/bi(256,3),Sr/bi(256,2),Sr/256,Sr]),g1=new Float32Array([Sr,Sr/256,Sr/bi(256,2),1/bi(256,3)]);function pv(n,e,t){for(let i of e){let s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function GT(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Er.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,c=l.get(gt.FRAGMENT_HEAD)||"",u=l.get(gt.FRAGMENT_MAIN_UV)||"",h=l.get(gt.FRAGMENT_MAIN_IMAGE)||"",d=l.get(gt.VERTEX_HEAD)||"",f=l.get(gt.VERTEX_MAIN_SUPPORT)||"",p=new Set,v=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let _=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${n}MainSupport(`,f+=_?`vUv);
`:`);
`;for(let b of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let x of b[1].split(/\s*,\s*/))t.varyings.add(x),p.add(x),v.add(x);for(let b of s.matchAll(o))v.add(b[1])}for(let _ of i.matchAll(o))v.add(_[1]);for(let _ of e.defines.keys())v.add(_.replace(/\([\w\s,]*\)/g,""));for(let _ of e.uniforms.keys())v.add(_);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((_,b)=>t.uniforms.set(n+b.charAt(0).toUpperCase()+b.slice(1),_)),e.defines.forEach((_,b)=>t.defines.set(n+b.charAt(0).toUpperCase()+b.slice(1),_));let m=new Map([["fragment",i],["vertex",s]]);pv(n,v,t.defines),pv(n,v,m),i=m.get("fragment"),s=m.get("vertex");let g=e.blendMode;if(t.blendModes.set(g.blendFunction,g),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===je?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ii?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let _=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,(t.attributes&Er.DEPTH)!==0&&_.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;let b=n+"BlendOpacity";t.uniforms.set(b,g.opacity),h+=`color0 = blend${g.blendFunction}(color0, color1, ${b});

	`,c+=`uniform float ${b};

`}if(c+=i+`
`,s!==null&&(d+=s+`
`),l.set(gt.FRAGMENT_HEAD,c),l.set(gt.FRAGMENT_MAIN_UV,u),l.set(gt.FRAGMENT_MAIN_IMAGE,h),l.set(gt.VERTEX_HEAD,d),l.set(gt.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(let _ of e.extensions)t.extensions.add(_)}}var Sv=class extends bn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new zT(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(let e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(let e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let n=new zM,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===dt.DST)n.attributes|=a.getAttributes()&Er.DEPTH;else{if((n.attributes&a.getAttributes()&Er.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);GT("e"+e++,a,n)}let t=n.shaderParts.get(gt.FRAGMENT_HEAD),i=n.shaderParts.get(gt.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(gt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Er.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===je&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(gt.FRAGMENT_HEAD,t),n.shaderParts.set(gt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(gt.FRAGMENT_MAIN_UV,s);for(let[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=xn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(let r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==At&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){n.type==="change"&&this.recompile()}};var x1=[new Float32Array(3),new Float32Array(3)],_1=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],y1=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var S1=[new Float32Array(2),new Float32Array(2)];var E1=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),b1=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],A1=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],M1=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var T1=new Map([[di(0,0,0,0),new Float32Array([0,0,0,0])],[di(0,0,0,1),new Float32Array([0,0,0,1])],[di(0,0,1,0),new Float32Array([0,0,1,0])],[di(0,0,1,1),new Float32Array([0,0,1,1])],[di(0,1,0,0),new Float32Array([0,1,0,0])],[di(0,1,0,1),new Float32Array([0,1,0,1])],[di(0,1,1,0),new Float32Array([0,1,1,0])],[di(0,1,1,1),new Float32Array([0,1,1,1])],[di(1,0,0,0),new Float32Array([1,0,0,0])],[di(1,0,0,1),new Float32Array([1,0,0,1])],[di(1,0,1,0),new Float32Array([1,0,1,0])],[di(1,0,1,1),new Float32Array([1,0,1,1])],[di(1,1,0,0),new Float32Array([1,1,0,0])],[di(1,1,0,1),new Float32Array([1,1,0,1])],[di(1,1,1,0),new Float32Array([1,1,1,0])],[di(1,1,1,1),new Float32Array([1,1,1,1])]]);function Bp(n,e,t){return n+(e-n)*t}function di(n,e,t,i){let s=Bp(n,e,.75),r=Bp(t,i,1-.25);return Bp(s,r,1-.125)}var Ev=299792458,VT=13271244e13,rd=149597870700,bv=3*Math.sqrt(3)/2;function Fp(n){if(!Number.isFinite(n)||n<=0)throw new Error("Black hole massSolar must be finite and positive");return 2*VT*n/bi(299792458,2)/rd}function J1(n,e){let t=Fp(n)*rd;if(!Number.isFinite(e)||e<3)throw new Error("Stable circular orbits require radius >= 3 Schwarzschild radii");return 2*Math.PI*t/299792458*Math.sqrt(2*bi(e,3))}function $1(n,e,t){let i=l=>1.5*l*l-l,s=i(n),r=i(n+t*e/2),a=i(n+t*(e+t*s/2)/2),o=i(n+t*(e+t*r/2));return[n+t*(e+2*(e+t*s/2)+2*(e+t*r/2)+(e+t*a))/6,e+t*(s+2*r+2*a+o)/6]}var Av=`
varying vec2 screenPosition;
void main() {
  screenPosition = position.xy;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Mv=`
precision highp float;
varying vec2 screenPosition;
uniform mat4 inverseProjection;
uniform mat4 cameraWorld;
uniform mat4 viewProjection;
uniform vec3 center;
uniform mat3 worldToDisk;
uniform mat3 diskToWorld;
uniform float horizonRadius;
uniform float diskInner;
uniform float diskOuter;
uniform bool diskEnabled;
uniform float temperature;
uniform float diskOpticalDepth;
uniform float diskAspectRatio;
uniform float diskTurbulence;
uniform float exposure;
uniform float timeSeconds;
uniform float lightCrossingSeconds;
uniform bool hasBackground;
uniform sampler2D backgroundTexture;
#ifdef SCENE_LENSING
const bool lensScene = true;
uniform bool sceneDepthHierarchy;
uniform sampler2D sceneBoundsFine;
uniform sampler2D sceneBoundsCoarse;
uniform sampler2D transparentBoundsFine;
uniform sampler2D transparentBoundsCoarse;
uniform sampler2D surfaceBoundsFine;
uniform sampler2D surfaceBoundsCoarse;
uniform sampler2D sceneColor;
uniform sampler2D sceneDepth;
uniform sampler2D sceneTransparent;
uniform sampler2D sceneTransparentDepth;
uniform bool sceneHasTransparent;
uniform sampler2D sceneSurfaces;
uniform sampler2D sceneSurfaceDepth;
uniform bool sceneHasSurfaces;
uniform mat4 sceneViewProjection;
uniform vec2 sceneSize;
uniform vec2 sceneDepthRange;
uniform sampler2D sceneForeground;
#else
const bool lensScene = false;
#endif
uniform vec3 sceneClearColor;
const float PI = 3.141592653589793;
bool sampledSky;
vec2 skyUv;
vec3 escapedWorldDirection;
vec3 escapedWorldOrigin;
vec3 emittedLight;
float transmission;
float firstDiskDistance;
bool captured;

float hash(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float noise(vec3 p) {
  vec3 cell = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(cell), hash(cell + vec3(1,0,0)), f.x),
        mix(hash(cell + vec3(0,1,0)), hash(cell + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(cell + vec3(0,0,1)), hash(cell + vec3(1,0,1)), f.x),
        mix(hash(cell + vec3(0,1,1)), hash(cell + vec3(1,1,1)), f.x), f.y), f.z);
}

// Long orbital lanes with smaller knots, coherent through the vertical column.
// The density pattern is advected by the local orbital rate, so it shears.
// Cylindrical coordinates keep the texture seamless at the azimuth boundary.
float gasPattern(float radius, float angle, float generation) {
  vec3 p = vec3(cos(angle) * 2.5, sin(angle) * 2.5, radius * 3.2);
  p += hash(vec3(mod(generation, 1024.0), 7.1, 0.0)) * vec3(17.3, 59.1, 31.7);
  float lanes = 0.55 * noise(p) + 0.30 * noise(p * 2.03) + 0.15 * noise(p * 4.07);
  return exp(4.0 * (lanes - 0.5));
}

float gasDensity(float radius, float angle, float omega) {
  if (diskTurbulence == 0.0) return 1.0;
  // Replace turbulent structures smoothly after half an inner orbit. Advecting
  // one fixed texture forever winds it into subpixel rings at artistic speeds.
  // Both generations follow the local orbital rate during their lifetimes.
  float lifetime = PI * sqrt(2.0 * diskInner * diskInner * diskInner);
  float cycle = timeSeconds / (lightCrossingSeconds * lifetime);
  float generation = floor(cycle);
  float age = fract(cycle);
  float current = gasPattern(radius, angle - omega * age * lifetime, generation);
  float previous = gasPattern(radius, angle - omega * (age + 1.0) * lifetime, generation - 1.0);
  return mix(1.0, mix(previous, current, smoothstep(0.0, 1.0, age)), diskTurbulence);
}

vec2 derivative(vec2 state) {
  return vec2(state.y, 1.5 * state.x * state.x - state.x);
}
vec2 advanceRay(vec2 state, float h) {
  vec2 a = derivative(state);
  vec2 b = derivative(state + 0.5 * h * a);
  vec2 c = derivative(state + 0.5 * h * b);
  vec2 d = derivative(state + h * c);
  return state + h * (a + 2.0 * b + 2.0 * c + d) / 6.0;
}

// Planck radiance at representative RGB wavelengths, relative to 6500 K.
// This is a three-band display approximation, not a spectral camera model.
vec3 thermalColor(float kelvin) {
  vec3 exponent = vec3(22135.0, 26160.0, 31973.0);
  return (exp(exponent / 6500.0) - 1.0) /
    (exp(min(exponent / max(kelvin, 100.0), vec3(80.0))) - 1.0);
}

// Integrate emission and absorption over a proper path length in the static
// Schwarzschild frame. A prescribed n=3 polytropic atmosphere has density
// proportional to (1 - z^2/(9H^2))^3 and temperature to (1 - z^2/(9H^2)).
// Its rms density height is H, and its surface is at |z|=3H.
void sampleGas(vec3 point, float pathLength, vec3 origin, float lapse, float angularMomentumZ) {
  float radius = length(point.xy);
  if (!diskEnabled || radius <= diskInner || radius >= diskOuter) return;
  float scaleHeight = diskAspectRatio * radius;
  float height = point.z / scaleHeight;
  if (abs(height) >= 3.0) return;
  float verticalTemperature = 1.0 - height * height / 9.0;
  float sphericalRadius = length(point);
  float metric = 1.0 - 1.0 / sphericalRadius;
  float omega = inversesqrt(2.0 * radius * radius * radius);
  // Off the midplane this is a prescribed rotating atmosphere, not a circular
  // geodesic. Normalize its four-velocity using the local Schwarzschild metric.
  float shift = sqrt(metric - omega * omega * radius * radius) /
    (lapse * (1.0 + omega * angularMomentumZ));
  float density = gasDensity(radius, atan(point.y, point.x), omega);
  float edge = 1.0 - smoothstep(mix(diskInner, diskOuter, 0.55), diskOuter, radius);
  float ratio = diskInner / radius;
  float flux = pow(ratio, 3.0) * (1.0 - sqrt(ratio)) / 0.05665278;
  float observedTemperature = temperature * pow(max(flux * density, 0.0), 0.25) * verticalTemperature * shift;
  // Integral of (1-z^2/(9H^2))^3 over [-3H, 3H] is 96H/35.
  float extinction = diskOpticalDepth * density * edge * edge * edge *
    pow(verticalTemperature, 3.0) * 35.0 / (96.0 * scaleHeight);
  // Convert the static-frame path length to the co-moving gas frame.
  float gasPathLength = pathLength * sqrt(metric) / (shift * lapse);
  float opacity = 1.0 - exp(-extinction * gasPathLength);
  emittedLight += transmission * opacity * thermalColor(observedTemperature);
  transmission *= 1.0 - opacity;
  if (transmission < 0.999 && firstDiskDistance < 0.0) firstDiskDistance = length(point - origin);
}

void writeDepth(vec3 ray, float distanceInRadii) {
  vec3 apparentPosition = cameraPosition + ray * distanceInRadii * horizonRadius;
  vec4 clip = viewProjection * vec4(apparentPosition, 1.0);
  float depth = clip.z / clip.w * 0.5 + 0.5;
  if (clip.w <= 0.0 || depth < 0.0 || depth > 1.0) discard;
  gl_FragDepth = depth;
}

void escaped(vec3 direction, vec3 closestPoint) {
  if (!hasBackground && !lensScene) {
    if (firstDiskDistance < 0.0) discard;
    return;
  }
  vec3 worldDirection = normalize(diskToWorld * direction);
  escapedWorldDirection = worldDirection;
  escapedWorldOrigin = center + horizonRadius * (diskToWorld * closestPoint);
  skyUv = vec2(atan(worldDirection.y, worldDirection.x) / (2.0 * PI) + 0.5,
                asin(clamp(worldDirection.z, -1.0, 1.0)) / PI + 0.5);
  sampledSky = true;
  gl_FragDepth = 1.0;
}

void traceRay() {
  vec4 cameraRay = inverseProjection * vec4(screenPosition, 1.0, 1.0);
  vec3 worldRay = normalize((cameraWorld * vec4(cameraRay.xyz, 0.0)).xyz);
  vec3 origin = worldToDisk * (cameraPosition - center) / horizonRadius;
  vec3 ray = worldToDisk * worldRay;
  float observerRadius = length(origin);
  // A static observer cannot exist on or inside the horizon.
  if (observerRadius <= 1.00001) {
    captured = true;
    gl_FragDepth = 0.0;
    return;
  }
  vec3 radial = origin / observerRadius;
  float radialCosine = clamp(dot(radial, ray), -1.0, 1.0);
  vec3 tangent = ray - radialCosine * radial;
  float sine = length(tangent);
  float lapse = sqrt(1.0 - 1.0 / observerRadius);
  float impact = observerRadius * sine / lapse;
  // Without a sky to lens, skip rays that cannot enter the emitting region.
  float bound = diskEnabled ? diskOuter * sqrt(1.0 + 9.0 * diskAspectRatio * diskAspectRatio) : 3.0;
  if (!hasBackground && !lensScene && observerRadius > bound &&
      (radialCosine >= 0.0 || impact > bound / sqrt(1.0 - 1.0 / bound))) discard;
  if (sine < 0.000001) {
    // The angular coordinate degenerates on radial rays. Integrate these in
    // radius instead, including the gas in front of an exactly edge-on observer.
    if (diskEnabled) {
      float direction = radialCosine < 0.0 ? -1.0 : 1.0;
      float radius = direction < 0.0 ? min(observerRadius, bound) : max(observerRadius, diskInner);
      for (int j = 0; j < RAY_STEPS; j++) {
        if ((direction < 0.0 && radius <= diskInner) || (direction > 0.0 && radius >= bound)) break;
        float dr = min(diskAspectRatio * 0.5, VOLUME_STEP) * radius;
        dr = min(dr, direction < 0.0 ? radius - diskInner : bound - radius);
        for (int sampleIndex = 0; sampleIndex < VOLUME_SAMPLES; sampleIndex++) {
          float midpoint = radius + direction * dr * (float(sampleIndex) + 0.5) / float(VOLUME_SAMPLES);
          sampleGas(radial * midpoint, dr / (float(VOLUME_SAMPLES) * sqrt(1.0 - 1.0 / midpoint)), origin, lapse, 0.0);
        }
        radius += direction * dr;
        if (transmission < 0.001) {
          writeDepth(worldRay, firstDiskDistance);
          return;
        }
      }
    }
    if (radialCosine < 0.0) {
      captured = true;
      writeDepth(worldRay, firstDiskDistance >= 0.0 ? firstDiskDistance : observerRadius - 1.0);
    } else {
      escaped(ray, vec3(0.0));
      if (firstDiskDistance >= 0.0) writeDepth(worldRay, firstDiskDistance);
    }
    return;
  }
  tangent /= sine;
  float angularMomentumZ = impact * cross(radial, tangent).z;
  vec2 state = vec2(1.0 / observerRadius, -radialCosine / impact);
  float phi = 0.0;
  for (int i = 0; i < RAY_STEPS; i++) {
    float h = RAY_STEP;
    // Resolve a nearby capture/escape without stepping far past u=0 or u=1.
    h = min(h, 0.1 / max(abs(state.y), 1.0));
    if (diskEnabled) {
      if (state.x < 1.0 / bound && state.y > 0.0) {
        // Land at the enclosing volume before reducing the spatial step size.
        h = min(h, (1.0 / bound - state.x) / state.y + 0.00001);
      } else if (state.x >= 1.0 / bound && state.x < 1.0 / diskInner) {
        // Bound the proper distance per step, so shallow and radial rays cannot
        // skip the atmosphere. H/R is a world-space size, independent of pixels.
        float speed = sqrt(1.0 + pow(state.y / state.x, 2.0) / (1.0 - state.x));
        h = min(h, min(diskAspectRatio * 0.5, VOLUME_STEP) / speed);
      }
    }
    vec2 next = advanceRay(state, h);
    if (next.x <= 0.0) {
      // Refine the asymptote rather than using the overshot step angle.
      float escapePhi = phi + h * state.x / (state.x - next.x);
      escaped(radial * cos(escapePhi) + tangent * sin(escapePhi),
        impact * (radial * sin(escapePhi) - tangent * cos(escapePhi)));
      if (firstDiskDistance >= 0.0) writeDepth(worldRay, firstDiskDistance);
      return;
    }
    if (diskEnabled && max(state.x, next.x) >= 1.0 / bound && min(state.x, next.x) < 1.0 / diskInner) {
      // Geodesic accuracy alone does not resolve narrow density lanes. Integrate
      // emission at several positions along the curved segment to avoid a
      // regular comb pattern where single midpoint samples skip between lanes.
      for (int sampleIndex = 0; sampleIndex < VOLUME_SAMPLES; sampleIndex++) {
        float offset = h * (float(sampleIndex) + 0.5) / float(VOLUME_SAMPLES);
        vec2 midpoint = advanceRay(state, offset);
        float midPhi = phi + offset;
        float midRadius = 1.0 / midpoint.x;
        vec3 point = (radial * cos(midPhi) + tangent * sin(midPhi)) * midRadius;
        float pathLength = h * midRadius * sqrt(1.0 + pow(midpoint.y / midpoint.x, 2.0) / max(1.0 - midpoint.x, 0.00001)) / float(VOLUME_SAMPLES);
        sampleGas(point, pathLength, origin, lapse, angularMomentumZ);
      }
      if (transmission < 0.001) {
        writeDepth(worldRay, firstDiskDistance);
        return;
      }
    }
    phi += h;
    state = next;
    if (state.x >= 1.0) {
      captured = true;
      writeDepth(worldRay, firstDiskDistance >= 0.0 ? firstDiskDistance : observerRadius - 1.0);
      return;
    }
  }
  // Unresolved near-critical rays remain dark instead of leaking background.
  captured = true;
  writeDepth(worldRay, firstDiskDistance >= 0.0 ? firstDiskDistance : observerRadius);
}

#ifdef SCENE_LENSING
// Return the last original sample in a tile only when its entire depth range
// cannot intersect this ray. Keep both endpoint samples: the final sample seeds
// the existing continuous-surface crossing test at the next tile boundary.
float skipDepthTile(sampler2D boundsTexture, float tileSize, vec3 first, vec3 delta,
    vec2 uv, vec2 inverseDelta, float lo, float stride, float steps, float index) {
  vec2 tile = floor(uv * sceneSize / tileSize);
  vec2 edge = (tile + step(vec2(0.0), delta.xy)) * tileSize / sceneSize;
  vec2 exitAlong = (edge - first.xy) * inverseDelta;
  float end = min(steps - 1.0, floor((min(exitAlong.x, exitAlong.y) - lo) / stride - 0.5 - 0.001));
  if (end <= index + 1.0) return index;
  vec2 bounds = texelFetch(boundsTexture, ivec2(tile), 0).rg;
  float rayNear = first.z + delta.z * (lo + (index + 0.5) * stride);
  float rayFar = first.z + delta.z * (lo + (end + 0.5) * stride);
  float margin = delta.z * (stride * 0.5 + 0.0000002);
  if (bounds.x == 1.0 || rayFar < bounds.x - margin || rayNear > bounds.y + margin) return end;
  return index;
}

// Follow the outgoing asymptote through the camera's depth image. Screen x/y
// and hardware depth are linear in the same projected-line parameter, so each
// one-pixel interval can be intersected without an arbitrary world thickness.
vec4 sceneSample(sampler2D colors, sampler2D depths, sampler2D fineBounds, sampler2D coarseBounds, vec4 start, vec4 direction,
    bool transparent, float limit, vec4 surface, float surfaceHit, out float firstHit) {
  firstHit = -1.0;
  vec4 light = vec4(0.0);
  if (direction.w <= 0.0) return surface;
  float offset = max(0.0, (sceneDepthRange.x - start.w) / direction.w);
  start += direction * offset;
  vec3 first = start.xyz / start.w * 0.5 + 0.5;
  vec3 last = direction.xyz / direction.w * 0.5 + 0.5;
  vec3 delta = last - first;
  vec2 inverseDelta = mix(vec2(-1.0), vec2(1.0), step(vec2(0.0), delta.xy)) /
    max(abs(delta.xy), vec2(0.00000001));
  vec2 a = -first.xy * inverseDelta;
  vec2 b = (1.0 - first.xy) * inverseDelta;
  vec2 entry = min(a, b), exitPoint = max(a, b);
  float lo = max(0.0, max(entry.x, entry.y));
  // Keep pixel intervals fixed as occluders enter or leave the ray.
  float hi = min(1.0, min(exitPoint.x, exitPoint.y));
  if (lo > hi || lo > limit || delta.z <= 0.0) return surface;
  vec2 pixelSpan = abs(delta.xy) * sceneSize;
  float steps = clamp(ceil(max(pixelSpan.x, pixelSpan.y) * (hi - lo)), 1.0, 1024.0);
  float stride = (hi - lo) / steps;
  float previousDifference = 0.0;
  float previousDepth = 1.0;
  float previousHit = -1.0;
  bool previousSurface = false;
  float index = 0.0;
  for (int i = 0; i < 1024; i++) {
    if (index >= steps) break;
    float along = lo + (index + 0.5) * stride;
    if (along - stride * 0.5 > limit) break;
    vec2 uv = first.xy + delta.xy * along;
    // Sample color and depth at the same texel, including one-pixel orbits.
    uv = (floor(uv * sceneSize) + 0.5) / sceneSize;
    float depth = texture2D(depths, uv).x;
    float hit = (depth - first.z) / delta.z;
    float difference = along - hit;
    // Curved/sloping surfaces can cross the ray between sampled texels even
    // when neither texel's constant-depth slab contains the intersection.
    bool continuous = abs(depth - previousDepth) <= max(0.001, 4.0 * stride * delta.z);
    bool crossed = previousSurface && continuous && previousDifference < 0.0 && difference >= 0.0;
    if (depth < 1.0 && hit <= limit && (previousHit < 0.0 || hit > previousHit + stride) &&
        (crossed || abs(difference) <= stride * 0.5 + 0.0000002)) {
      // Insert the mesh layer at its own distance while marching particles
      // once. A single batch may contain light on both sides of a ring.
      if (surfaceHit >= 0.0 && hit > surfaceHit) {
        light += (1.0 - light.a) * surface;
        surface = vec4(0.0);
        surfaceHit = -1.0;
        if (light.a >= 0.999) return light;
      }
      // Capture targets have no mipmaps. Accumulate premultiplied light from
      // front to back, continuing through additive halos and translucency.
      vec4 source = texture2D(colors, uv);
      light += (1.0 - light.a) * source;
      if (firstHit < 0.0) firstHit = hit;
      if (!transparent || light.a >= 0.999) return light;
      previousHit = hit;
    }
    previousDifference = difference;
    previousDepth = depth;
    previousSurface = depth < 1.0;
    float next = index;
    if (sceneDepthHierarchy) {
      next = skipDepthTile(coarseBounds, 64.0, first, delta, uv, inverseDelta, lo, stride, steps, index);
      if (next == index) next = skipDepthTile(fineBounds, 8.0, first, delta, uv, inverseDelta, lo, stride, steps, index);
    }
    index = max(index + 1.0, next);
  }
  return light + (1.0 - light.a) * surface;
}
#endif

void main() {
  sampledSky = false;
  skyUv = vec2(0.0);
  escapedWorldDirection = vec3(0.0);
  escapedWorldOrigin = vec3(0.0);
  emittedLight = vec3(0.0);
  transmission = 1.0;
  firstDiskDistance = -1.0;
  captured = false;
  traceRay();
  // Compute texture derivatives after the variable-length integration loop.
  // Sampling inside that loop makes implicit mip selection undefined.
  vec3 sky = hasBackground ? texture2D(backgroundTexture, skyUv).rgb : sceneClearColor;
#ifdef SCENE_LENSING
  {
    vec2 originalUv = screenPosition * 0.5 + 0.5;
    vec4 foreground = texture2D(sceneForeground, originalUv);
    vec4 rayOrigin = sceneViewProjection * vec4(escapedWorldOrigin, 1.0);
    vec4 sourceClip = sceneViewProjection * vec4(escapedWorldDirection, 0.0);
    vec2 sourceUv = sourceClip.xy / max(sourceClip.w, 0.00001) * 0.5 + 0.5;
    float opaqueHit = -1.0;
    vec4 source = vec4(0.0);
    vec4 transparentSource = vec4(0.0);
    if (sampledSky) {
      source = sceneSample(sceneColor, sceneDepth, sceneBoundsFine, sceneBoundsCoarse, rayOrigin, sourceClip, false, 1.0, vec4(0.0), -1.0, opaqueHit);
      float limit = opaqueHit < 0.0 ? 1.0 : opaqueHit;
      float surfaceHit = -1.0;
      if (sceneHasSurfaces) {
        transparentSource = sceneSample(sceneSurfaces, sceneSurfaceDepth, surfaceBoundsFine, surfaceBoundsCoarse, rayOrigin,
          sourceClip, true, limit, vec4(0.0), -1.0, surfaceHit);
      }
      if (sceneHasTransparent) {
        float transparentHit;
        transparentSource = sceneSample(sceneTransparent, sceneTransparentDepth, transparentBoundsFine, transparentBoundsCoarse, rayOrigin,
          sourceClip, true, limit, transparentSource, surfaceHit, transparentHit);
      }
    }
    bool inFrame = sourceClip.w > 0.0 && all(greaterThanEqual(sourceUv, vec2(0.0))) &&
      all(lessThanEqual(sourceUv, vec2(1.0)));
    // Do not repeat/clamp the edge of the camera image or bend a foreground
    // object into the background. The sky fills unavailable image samples.
    if (sampledSky && inFrame && texture2D(sceneDepth, sourceUv).x == 1.0) {
      vec4 distant = texture2D(sceneColor, sourceUv);
      sky = distant.rgb + (1.0 - distant.a) * sky;
    }
    if (opaqueHit >= 0.0) sky = source.rgb + (1.0 - source.a) * sky;
    sky = transparentSource.rgb + (1.0 - transparentSource.a) * sky;
    vec3 color = 1.0 - exp(-exposure * emittedLight);
    if (sampledSky) color += transmission * max(sky, vec3(0.0));
    color = clamp(color, 0.0, 1.0);
    // Each capture contains only its side of the lens plane, so transparent
    // foregrounds do not bring an unwarped copy of the background with them.
    color = foreground.rgb + (1.0 - foreground.a) * color;
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
    return;
  }
#endif
  float alpha = captured || sampledSky ? 1.0 : 1.0 - transmission;
  if (alpha < 0.0001) discard;
  vec3 color = 1.0 - exp(-exposure * emittedLight / alpha);
  if (sampledSky) color += transmission * sky;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), alpha);
  #include <colorspace_fragment>
}
`;function Tv(){return new at(1,1,{format:vn,type:jt,minFilter:Nt,magFilter:Nt,depthBuffer:!1,stencilBuffer:!1})}var Ya=class{constructor(){W(this,"fine",Tv());W(this,"coarse",Tv());W(this,"scene",new Ri);W(this,"camera",new Qn);W(this,"quad",new et(new Oi(2,2),new Ke({uniforms:{source:{value:null},sourceSize:{value:new X},sourceIsBounds:{value:!1}},vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D source;
        uniform vec2 sourceSize;
        uniform bool sourceIsBounds;
        void main() {
          ivec2 origin = ivec2(gl_FragCoord.xy) * 8;
          vec2 bounds = vec2(1.0, 0.0);
          for (int y = 0; y < 8; y++) {
            for (int x = 0; x < 8; x++) {
              ivec2 pixel = origin + ivec2(x, y);
              if (any(greaterThanEqual(pixel, ivec2(sourceSize)))) continue;
              vec2 value = texelFetch(source, pixel, 0).rg;
              if (!sourceIsBounds) value.y = value.x < 1.0 ? value.x : 0.0;
              bounds.x = min(bounds.x, value.x);
              bounds.y = max(bounds.y, value.y);
            }
          }
          gl_FragColor = vec4(bounds, 0.0, 1.0);
        }`,depthTest:!1,depthWrite:!1,blending:Dt,toneMapped:!1})));this.quad.frustumCulled=!1,this.scene.add(this.quad),this.fine.texture.name="black-hole-depth-fine",this.coarse.texture.name="black-hole-depth-coarse"}render(e,t,i,s){let r=this.quad.material.uniforms;r.source.value=t,r.sourceIsBounds.value=!1;for(let a of[this.fine,this.coarse])r.sourceSize.value.set(i,s),i=Math.ceil(i/8),s=Math.ceil(s/8),(a.width!==i||a.height!==s)&&a.setSize(i,s),e.setRenderTarget(a),e.render(this.scene,this.camera),r.source.value=a.texture,r.sourceIsBounds.value=!0}dispose(){this.fine.dispose(),this.coarse.dispose(),this.quad.geometry.dispose(),this.quad.material.dispose()}};var WT=2,XT=8;function ad(){let n=new at(1,1);return n.depthTexture=new yi(1,1,Ei),n}var od=class{constructor(){W(this,"background",ad());W(this,"transparent",ad());W(this,"surfaces",ad());W(this,"foreground",ad());W(this,"clearColor",new oe);W(this,"viewProjection",new Ce);W(this,"depthRange",new X);W(this,"size",new X);W(this,"backgroundBounds",new Ya);W(this,"transparentBounds",new Ya);W(this,"surfaceBounds",new Ya);W(this,"depthHierarchyEnabled",!0);W(this,"hasDepthHierarchy",!1);W(this,"hasTransparent",!1);W(this,"hasSurfaces",!1);W(this,"camera",new Ut);W(this,"viewport",new ut);W(this,"compositeScene",new Ri);W(this,"composite",new et(new Oi(2,2),new Ke({uniforms:{color:{value:this.foreground.texture},depth:{value:this.foreground.depthTexture},smoothingStep:{value:new X}},vertexShader:`varying vec2 sampleUv;
        void main() { sampleUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`varying vec2 sampleUv;
        uniform sampler2D color;
        uniform sampler2D depth;
        uniform vec2 smoothingStep;
        float light(vec4 sampleColor) {
          return max(max(sampleColor.r, sampleColor.g), max(sampleColor.b, sampleColor.a));
        }
        void main() {
          vec4 sampleColor = texture2D(color, sampleUv);
          float weight = light(sampleColor);
          // Additive black padding contributes neither light nor coverage.
          if (weight == 0.0) discard;
          gl_FragColor = sampleColor;
          float sampleDepth = texture2D(depth, sampleUv).x;
          if (smoothingStep.x > 0.0 && sampleDepth < 1.0) {
            // Smooth overlapping sprite depths along eight directions to avoid
            // lensing each square separately. Stop at each sampled gap so
            // separate sprites keep their own depths.
            float weightedDepth = weight * sampleDepth;
            for (int x = -1; x <= 1; x++) {
              for (int y = -1; y <= 1; y++) {
                if (x == 0 && y == 0) continue;
                // Whole-pixel steps stay on texel centers.
                vec2 offset = vec2(float(x), float(y)) * smoothingStep;
                for (int i = 1; i <= ${XT}; i++) {
                  vec2 uv = sampleUv + offset * float(i);
                  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) break;
                  float neighborDepth = texture2D(depth, uv).x;
                  float neighborWeight = neighborDepth < 1.0 ? light(texture2D(color, uv)) : 0.0;
                  if (neighborWeight == 0.0) break;
                  weight += neighborWeight;
                  weightedDepth += neighborWeight * neighborDepth;
                }
              }
            }
            sampleDepth = weightedDepth / weight;
          }
          gl_FragDepth = sampleDepth;
        }`,transparent:!0,premultipliedAlpha:!0,toneMapped:!1})));this.camera.matrixAutoUpdate=!1,this.composite.frustumCulled=!1,this.compositeScene.add(this.composite)}clipCamera(e,t,i){this.camera.copy(e,!1),this.camera.matrixAutoUpdate=!1,this.camera.near=t,this.camera.far=i;let s=this.camera.projectionMatrix;s.elements[10]=-(i+t)/(i-t),s.elements[14]=-2*i*t/(i-t),this.camera.projectionMatrixInverse.copy(s).invert()}render(e,t,i,s){if(!i.isPerspectiveCamera)throw new Error("Black hole scene lensing requires a perspective camera");this.hasDepthHierarchy=this.depthHierarchyEnabled&&e.extensions.has("EXT_color_buffer_float");let r=i,a=e.getRenderTarget(),o=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),c=e.autoClear,u=e.getClearAlpha(),h=e.xr.enabled,d=e.shadowMap.autoUpdate,f=t.background;e.getClearColor(this.clearColor),e.getCurrentViewport(this.viewport),this.size.set(Math.max(1,this.viewport.z),Math.max(1,this.viewport.w));for(let A of[this.background,this.transparent,this.foreground])(A.width!==this.size.x||A.height!==this.size.y)&&A.setSize(this.size.x,this.size.y);let p=Math.max(r.near,s>0?s:r.far),v=Math.max(r.far,1e11,p*1e5);this.depthRange.set(p,v);let m=[],g=new w,_=new Map,b=[],x=A=>{e.setRenderTarget(A),e.setClearColor(0,0),e.state.buffers.color.setMask(!0),e.state.buffers.depth.setMask(!0),e.clear()};try{t.traverse(E=>{E.userData.spacekitBlackHole&&E.visible&&(b.push(E),E.visible=!1)}),t.traverseVisible(E=>{var P;let C=E;if(!C.material)return;let y=t.overrideMaterial?[t.overrideMaterial]:Array.isArray(C.material)?C.material:[C.material],T=E.parent;for(;T&&!T.isGroup;)T=T.parent;let D=!t.overrideMaterial&&E.userData.spacekitBackground===!0;m.push({object:C,sources:y,mask:E.layers.mask,background:D,surface:E.isMesh===!0,transparent:!D&&y.some(I=>I.transparent||!I.depthWrite||!I.depthTest),z:g.setFromMatrixPosition(E.matrixWorld).applyMatrix4(i.matrixWorldInverse).z,groupOrder:(P=T==null?void 0:T.renderOrder)!=null?P:0}),y.forEach(I=>{_.has(I)||(_.set(I,{depthWrite:I.depthWrite,depthTest:I.depthTest,colorWrite:I.colorWrite,blending:I.blending,blendSrc:I.blendSrc,blendDst:I.blendDst,blendEquation:I.blendEquation,blendSrcAlpha:I.blendSrcAlpha,blendDstAlpha:I.blendDstAlpha,blendEquationAlpha:I.blendEquationAlpha}),I.blending===Un&&(I.blending=Ta,I.blendSrc=I.premultipliedAlpha?Cs:wa,I.blendDst=Cs,I.blendEquation=fn,I.blendSrcAlpha=wl,I.blendDstAlpha=Cs,I.blendEquationAlpha=fn))})}),e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.autoClear=!1,this.clipCamera(r,p,v),this.composite.layers.mask=i.layers.mask,this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),m.forEach(({object:E,mask:C,transparent:y})=>{E.layers.mask=y?0:C}),x(this.background),e.render(t,this.camera),t.background=null,x(this.transparent);let A=m.filter(E=>E.transparent&&(E.mask&i.layers.mask)!==0);this.hasTransparent=A.some(E=>!E.surface),this.hasSurfaces=A.some(E=>E.surface),this.hasSurfaces&&((this.surfaces.width!==this.size.x||this.surfaces.height!==this.size.y)&&this.surfaces.setSize(this.size.x,this.size.y),x(this.surfaces)),A.sort((E,C)=>E.groupOrder-C.groupOrder||E.object.renderOrder-C.object.renderOrder||E.z-C.z||E.object.id-C.object.id),m.forEach(({object:E})=>{E.layers.mask=0});for(let E of A){E.object.layers.mask=E.mask,x(this.foreground),e.render(t,this.camera),E.sources.forEach(T=>{T.depthWrite=T.depthTest=!0,T.colorWrite=!1}),e.render(t,this.camera),E.sources.forEach(T=>{let D=_.get(T);T.depthWrite=D.depthWrite,T.depthTest=D.depthTest,T.colorWrite=D.colorWrite}),E.object.layers.mask=0,e.setRenderTarget(E.surface?this.surfaces:this.transparent);let C=this.composite.material,y=E.object.isPoints?WT:0;C.uniforms.smoothingStep.value.set(y/this.size.x,y/this.size.y),C.depthFunc=qn,C.depthWrite=!0,C.blending=dn,e.render(this.compositeScene,this.camera),C.depthFunc=qs,C.depthWrite=!1,C.blending=Ta,C.blendSrc=Cl,C.blendDst=Cs,e.render(this.compositeScene,this.camera)}m.forEach(({object:E,mask:C,background:y})=>{E.layers.mask=y?0:C}),x(this.foreground),p>r.near&&(this.clipCamera(r,r.near,Math.min(p,r.far)),e.render(t,this.camera)),this.hasDepthHierarchy&&(this.backgroundBounds.render(e,this.background.depthTexture,this.size.x,this.size.y),this.hasTransparent&&this.transparentBounds.render(e,this.transparent.depthTexture,this.size.x,this.size.y),this.hasSurfaces&&this.surfaceBounds.render(e,this.surfaces.depthTexture,this.size.x,this.size.y))}finally{_.forEach((A,E)=>Object.assign(E,A)),m.forEach(({object:A,mask:E})=>{A.layers.mask=E}),b.forEach(A=>{A.visible=!0}),t.background=f,e.setRenderTarget(a,o,l),e.setClearColor(this.clearColor,u),e.autoClear=c,e.xr.enabled=h,e.shadowMap.autoUpdate=d}}dispose(){this.backgroundBounds.dispose(),this.transparentBounds.dispose(),this.surfaceBounds.dispose();for(let e of[this.background,this.transparent,this.surfaces,this.foreground])e.dispose();this.composite.geometry.dispose(),this.composite.material.dispose()}};var qa=new WeakMap;function ts(n,e){if(!Number.isFinite(e)||e<=0)throw new Error(`Black hole ${n} must be finite and positive`);return e}function Hp(n,e){if(e.length!==3||!e.every(Number.isFinite))throw new Error(`Black hole ${n} must contain three finite coordinates`);return new w(e[0],e[1],e[2])}function wv(n){if(!Number.isFinite(n)||n<0)throw new Error("Black hole disk rotationSpeed must be finite and nonnegative");return n}function Cv(n){if(!Number.isFinite(n)||n<.02||n>.3)throw new Error("Black hole disk aspectRatio must be between 0.02 and 0.3");return n}var ld=class{constructor(e,t,i){W(this,"id");W(this,"simulation");W(this,"unitsPerAu");W(this,"radiusAu");W(this,"epochJd");W(this,"animationSpeed");W(this,"animationOffsetSeconds",0);W(this,"mesh");W(this,"disposed",!1);W(this,"sceneCapture");var x,A,E,C,y,T,D,P,I,H,N,F,Z;this.id=e,this.simulation=i,this.radiusAu=Fp(t.massSolar);let s=i.getContext();this.unitsPerAu=ts("unitsPerAu",(x=s.options.unitsPerAu)!=null?x:1),this.epochJd=i.getJd();let r=Hp("position",(A=t.position)!=null?A:[0,0,0]),a=Hp("diskNormal",(E=t.diskNormal)!=null?E:[0,0,1]);ts("diskNormal length",a.length()),a.normalize();let o=t.accretionDisk||{};this.animationSpeed=wv((C=o.rotationSpeed)!=null?C:1);let l=ts("disk innerRadius",(y=o.innerRadius)!=null?y:3),c=ts("disk outerRadius",(T=o.outerRadius)!=null?T:12);if(l<3||c<=l)throw new Error("Black hole disk requires 3 <= innerRadius < outerRadius");let u=ts("disk temperature",(D=o.temperature)!=null?D:6500),h=ts("disk opticalDepth",(P=o.opticalDepth)!=null?P:2),d=Cv((I=o.aspectRatio)!=null?I:.025),f=(H=o.turbulence)!=null?H:.65;if(!Number.isFinite(f)||f<0||f>1)throw new Error("Black hole disk turbulence must be between 0 and 1");let p=ts("exposure",(N=t.exposure)!=null?N:1);if(t.lensScene&&this.assertSceneLensingAvailable(),t.quality!==void 0&&["low","high"].indexOf(t.quality)<0)throw new Error("Black hole quality must be low or high");if(s.objects.renderer.capabilities.getMaxPrecision("highp")!=="highp")throw new Error("Black holes require highp fragment precision");let m=new Ce().makeRotationFromQuaternion(new kt().setFromUnitVectors(new w(0,0,1),a)),g=new Ze().setFromMatrix4(m),_=new Ke({vertexShader:Av,fragmentShader:Mv,defines:{RAY_STEPS:t.quality==="low"?768:1024,RAY_STEP:t.quality==="low"?"0.04":"0.02",VOLUME_STEP:t.quality==="low"?"0.05":"0.025",VOLUME_SAMPLES:t.quality==="low"?2:4},uniforms:{inverseProjection:{value:new Ce},cameraWorld:{value:new Ce},viewProjection:{value:new Ce},center:{value:new w},worldToDisk:{value:g.clone().transpose()},diskToWorld:{value:g},horizonRadius:{value:ts("scaled horizon radius",this.radiusAu*this.unitsPerAu)},diskInner:{value:l},diskOuter:{value:c},diskEnabled:{value:t.accretionDisk!==!1},temperature:{value:u},diskOpticalDepth:{value:h},diskAspectRatio:{value:d},diskTurbulence:{value:f},exposure:{value:p},timeSeconds:{value:0},lightCrossingSeconds:{value:this.radiusAu*rd/299792458},hasBackground:{value:!!t.backgroundTexture},backgroundTexture:{value:(F=t.backgroundTexture)!=null?F:null},lensScene:{value:!1},sceneDepthHierarchy:{value:!1},sceneBoundsFine:{value:null},sceneBoundsCoarse:{value:null},transparentBoundsFine:{value:null},transparentBoundsCoarse:{value:null},surfaceBoundsFine:{value:null},surfaceBoundsCoarse:{value:null},sceneColor:{value:null},sceneDepth:{value:null},sceneTransparent:{value:null},sceneTransparentDepth:{value:null},sceneHasTransparent:{value:!1},sceneSurfaces:{value:null},sceneSurfaceDepth:{value:null},sceneHasSurfaces:{value:!1},sceneViewProjection:{value:new Ce},sceneSize:{value:new X},sceneDepthRange:{value:new X},sceneForeground:{value:null},sceneClearColor:{value:new oe}},transparent:!0,depthTest:!0,depthWrite:!0,toneMapped:!1});this.mesh=new et(new Oi(2,2),_),this.mesh.name=e,this.mesh.userData.spacekitBlackHole=!0,this.mesh.position.copy(r.multiplyScalar(this.unitsPerAu)),this.mesh.frustumCulled=!1;let b=new ut;this.mesh.onBeforeRender=(V,re,q)=>{let J=_.uniforms;if(J.inverseProjection.value.copy(q.projectionMatrix).invert(),J.cameraWorld.value.copy(q.matrixWorld),J.viewProjection.value.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),this.mesh.getWorldPosition(J.center.value),J.lensScene.value&&this.sceneCapture){let ee=J.center.value;b.set(ee.x,ee.y,ee.z,1).applyMatrix4(J.viewProjection.value),this.sceneCapture.render(V,re,q,b.w),J.sceneDepthHierarchy.value=this.sceneCapture.hasDepthHierarchy,J.sceneClearColor.value.copy(this.sceneCapture.clearColor),J.sceneHasTransparent.value=this.sceneCapture.hasTransparent,J.sceneHasSurfaces.value=this.sceneCapture.hasSurfaces}},this.setSceneLensingEnabled((Z=t.lensScene)!=null?Z:!1),i.addObject(this)}getId(){return this.id}get3jsObjects(){return[this.mesh]}getPhysicalRadii(){return{eventHorizonAu:this.radiusAu,photonSphereAu:1.5*this.radiusAu,iscoAu:3*this.radiusAu,shadowImpactParameterAu:bv*this.radiusAu}}setPosition(e){this.mesh.position.copy(Hp("position",e).multiplyScalar(this.unitsPerAu))}update(e){this.mesh.material.uniforms.timeSeconds.value=(e-this.epochJd)*86400*this.animationSpeed+this.animationOffsetSeconds}setRotationSpeed(e){let t=wv(e),i=(this.simulation.getJd()-this.epochJd)*86400;this.animationOffsetSeconds+=i*(this.animationSpeed-t),this.animationSpeed=t,this.update(this.simulation.getJd())}setDiskOuterRadius(e){let t=ts("disk outerRadius",e),i=this.mesh.material.uniforms;if(t<=i.diskInner.value)throw new Error("Black hole disk outerRadius must exceed innerRadius");i.diskOuter.value=t}setDiskAspectRatio(e){this.mesh.material.uniforms.diskAspectRatio.value=Cv(e)}setDiskEnabled(e){this.mesh.material.uniforms.diskEnabled.value=e}setSceneLensingEnabled(e){if(this.disposed)return;let t=this.mesh.material;e?(this.assertSceneLensingAvailable(),this.sceneCapture||(this.sceneCapture=new od),t.uniforms.sceneBoundsFine.value=this.sceneCapture.backgroundBounds.fine.texture,t.uniforms.sceneBoundsCoarse.value=this.sceneCapture.backgroundBounds.coarse.texture,t.uniforms.transparentBoundsFine.value=this.sceneCapture.transparentBounds.fine.texture,t.uniforms.transparentBoundsCoarse.value=this.sceneCapture.transparentBounds.coarse.texture,t.uniforms.surfaceBoundsFine.value=this.sceneCapture.surfaceBounds.fine.texture,t.uniforms.surfaceBoundsCoarse.value=this.sceneCapture.surfaceBounds.coarse.texture,t.uniforms.sceneColor.value=this.sceneCapture.background.texture,t.uniforms.sceneDepth.value=this.sceneCapture.background.depthTexture,t.uniforms.sceneTransparent.value=this.sceneCapture.transparent.texture,t.uniforms.sceneTransparentDepth.value=this.sceneCapture.transparent.depthTexture,t.uniforms.sceneSurfaces.value=this.sceneCapture.surfaces.texture,t.uniforms.sceneSurfaceDepth.value=this.sceneCapture.surfaces.depthTexture,t.uniforms.sceneViewProjection.value=this.sceneCapture.viewProjection,t.uniforms.sceneSize.value=this.sceneCapture.size,t.uniforms.sceneDepthRange.value=this.sceneCapture.depthRange,t.uniforms.sceneForeground.value=this.sceneCapture.foreground.texture,qa.set(this.simulation,this)):qa.get(this.simulation)===this&&qa.delete(this.simulation),t.uniforms.lensScene.value!==e&&(e?t.defines.SCENE_LENSING=1:delete t.defines.SCENE_LENSING,t.needsUpdate=!0),t.uniforms.lensScene.value=e,t.depthTest=!e,t.depthWrite=!e,t.blending=e?Dt:dn,this.mesh.renderOrder=e?Number.MAX_SAFE_INTEGER:t.uniforms.hasBackground.value?-1:1e3}assertSceneLensingAvailable(){if(!this.simulation.getContext().objects.renderer.capabilities.isWebGL2)throw new Error("Black hole scene lensing requires WebGL 2");let e=qa.get(this.simulation);if(e&&e!==this)throw new Error("Only one black hole can lens the scene per simulation")}removalCleanup(){var e;this.disposed||(this.disposed=!0,qa.get(this.simulation)===this&&qa.delete(this.simulation),(e=this.sceneCapture)==null||e.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose())}dispose(){this.simulation.removeObject(this)}};function Rv(){return`
    varying vec3 vColor;
    uniform sampler2D particleTexture;

    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture2D(particleTexture, gl_PointCoord);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}function Dv(){return`
    attribute vec3 fuzzColor;
    attribute vec3 origin;
    varying vec3 vColor;

    attribute float size;

    attribute float a;
    attribute float e;
    attribute float i;
    attribute float om;
    attribute float wBar;
    attribute float M;

    // Perihelion distance
    attribute float q;

    // CPU-computed term for parabolic orbits
    attribute float a0;

    // Cube root helper that assumes param is positive
    float cbrt(float x) {
      return exp(log(x) / 3.0);
    }

    vec3 getPosNearParabolic() {
      // See https://stjarnhimlen.se/comp/ppcomp.html#17
      float b = sqrt(1.0 + a0 * a0);
      float W = cbrt(b + a0) - cbrt(b - a0);
      float f = (1.0 - e) / (1.0 + e);

      float a1 = 2.0 / 3.0 + (2.0 / 5.0) * W * W;
      float a2 = 7.0 / 5.0 + (33.0 / 35.0) * W * W + (37.0 / 175.0) * pow(W, 4.0);
      float a3 =
        W * W * (432.0 / 175.0 + (956.0 / 1125.0) * W * W + (84.0 / 1575.0) * pow(W, 4.0));

      float C = (W * W) / (1.0 + W * W);
      float g = f * C * C;
      float w = W * (1.0 + f * C * (a1 + a2 * g + a3 * g * g));

      // True anomaly
      float v = 2.0 * atan(w);
      // Heliocentric distance
      float r = (q * (1.0 + w * w)) / (1.0 + w * w * f);

      // Compute heliocentric coords.
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getPosHyperbolic() {
      float F0 = M;
      for (int count = 0; count < 100; count++) {
        float F1 = (M + e * (F0 * cosh(F0) - sinh(F0))) / (e * cosh(F0) - 1.0);
        float lastdiff = abs(F1 - F0);
        F0 = F1;

        if (lastdiff < 0.0000001) {
          break;
        }
      }
      float F = F0;

      float v = 2.0 * atan(sqrt((e + 1.0) / (e - 1.0)) * tanh(F / 2.0));
      float r = ${bp().toFixed(1)} * (a * (1.0 - e * e)) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getPosEllipsoid() {
      float i_rad = i;
      float o_rad = om;
      float p_rad = wBar;

      // Estimate eccentric and true anom using iterative approximation (this
      // is normally an intergral).
      float E0 = M;
      float E1 = M + e * sin(E0);
      float lastdiff = abs(E1-E0);
      E0 = E1;

      for (int count = 0; count < 100; count++) {
        E1 = M + e * sin(E0);
        lastdiff = abs(E1-E0);
        E0 = E1;
        if (lastdiff < 0.0000001) {
          break;
        }
      }

      float E = E0;
      float v = 2.0 * atan(sqrt((1.0+e)/(1.0-e)) * tan(E/2.0));

      // Compute radius vector.
      float r = ${bp().toFixed(1)} * a * (1.0 - e * e) / (1.0 + e * cos(v));

      // Compute heliocentric coords.
      float X = r * (cos(o_rad) * cos(v + p_rad - o_rad) - sin(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Y = r * (sin(o_rad) * cos(v + p_rad - o_rad) + cos(o_rad) * sin(v + p_rad - o_rad) * cos(i_rad));
      float Z = r * (sin(v + p_rad - o_rad) * sin(i_rad));
      return vec3(X, Y, Z);
    }

    vec3 getPos() {
      if (e > 0.9 && e < 1.2) {
        return getPosNearParabolic();
      } else if (e > 1.2) {
        return getPosHyperbolic();
      }
      return getPosEllipsoid();
    }

    void main() {
      vColor = fuzzColor;

      vec3 newpos = getPos() + origin;
      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size;
    }
  `}var cd=`
    varying vec3 vColor;

    void main() {
      float a = 1.0 - 2.0 * length(gl_PointCoord - vec2(0.5, 0.5));
      gl_FragColor = vec4(vColor, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
`,ud=`
    attribute float size;
    varying vec3 vColor;

    void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size;
        gl_Position = projectionMatrix * mvPosition;
        #ifdef SPACEKIT_BACKGROUND
        // Keep the distant sky exactly at the far plane. At stellar distances,
        // rounding ordinary projected depth makes stars blink as the view moves.
        gl_Position.z = gl_Position.w;
        #endif
    }
`;var Pv=`
  uniform vec3 lightPos;

  varying vec2 vUv;
  varying vec3 vecPos;
  varying vec3 vecNormal;
  //varying vec3 vNormal;

  varying vec3 vViewLightPos;

  void main() {
    //vNormal = normalize(normalMatrix * normal);
    //gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
    // Since the light is in camera coordinates,
    // I'll need the vertex position in camera coords too
    vecPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    // That's NOT exacly how you should transform your
    // normals but this will work fine, since my model
    // matrix is pretty basic
    vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz;
    vViewLightPos = (viewMatrix * vec4(lightPos, 1.0)).xyz;
    gl_Position = projectionMatrix * vec4(vecPos, 1.0);
  }
`,Iv=`
  uniform float c;
  uniform float p;
  uniform vec3 color;

  varying vec2 vUv;
  varying vec3 vecPos;
  varying vec3 vecNormal;
  varying vec3  vViewLightPos;

  void main() {
    float intensity = pow(c - dot(vecNormal, vec3(0.0, 0.0, 1.0)), p);

    vec4 addedLights = vec4(0.0, 0.0, 0.0, 1.0);
    vec3 lightDirection = normalize(vecPos - vViewLightPos);
    addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0)
                       * 1.0 /* intensity */;
                       // * pointLights[i].color

    gl_FragColor = vec4(color, 1.0) * intensity * addedLights;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Uv=`
  uniform vec3 lightPos;

  varying vec2 vUv;
  varying vec3 vViewPosition;
  varying vec3 vViewLightPos;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vec4 vViewPosition4 = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = vViewPosition4.xyz;
    vViewLightPos = (viewMatrix * vec4(lightPos, 1.0)).xyz;
    vNormal = normalMatrix * normal;

    gl_Position = projectionMatrix * vViewPosition4;
  }
`,Lv=`
  uniform sampler2D sphereTexture;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vViewLightPos;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vViewLightPos - vViewPosition);
    float lambertian = max(dot(normal, lightDir), 0.0);
    gl_FragColor = texture2D(sphereTexture, vUv) * vec4(vec3(1.0) * lambertian, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Bv=`
  varying vec3 vPos;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;

  void main() {
    vPos = position;
    vec4 worldPosition = (modelMatrix * vec4(position, 1.));
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition.xyz, 1.);

    vNormal = normalMatrix * normal;
    vWorldPosition = worldPosition.xyz;
  }
`,Nv=`
  uniform sampler2D ringTexture;
  uniform float innerRadius;
  uniform float outerRadius;
  uniform vec3 lightPos;

  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vWorldPosition;

  vec4 color() {
    vec2 uv = vec2(0);
    uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
    if (uv.x < 0.0 || uv.x > 1.0) {
      discard;
    }

    vec4 pixel = texture2D(ringTexture, uv);
    return pixel;
  }

  vec3 shadow() {
    vec3 lightDir = normalize(vPos - lightPos);
    vec3 planetPos = vec3(0);

    vec3 ringPos = vPos - planetPos;
    float posDotLightDir = dot(ringPos, lightDir);
    float posDotLightDir2 = posDotLightDir * posDotLightDir;

    // TODO(ian): Generalize this line.
    float radius = 0.0389259903; // radius of saturn in coordinate system
    float radius2 = radius * radius;

    if (posDotLightDir > 0.0 && dot(ringPos, ringPos) - posDotLightDir2 < radius2) {
      return vec3(0.0);
    }
    return vec3(1.0);
  }

  vec3 lights() {
    vec3 lightDirection = normalize(vWorldPosition - lightPos);
    float c = 0.35 + max(0.0, dot(vNormal, lightDirection)) * 0.4;

    return vec3(c);
  }

  void main() {
    // NOTE: The order of multiplication matters here. color() may call
    // discard, which would cause problems on some Windows graphics drivers if
    // it is a left operand.
    // https://github.com/typpo/spacekit/issues/22
    gl_FragColor = vec4(lights() * shadow(), 1.0) * color();
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;var YT=4096;function Ov(n,e){let t=e-n.get("epoch");return n.get("ma")+n.get("n")*t}var qT=.01720209895;function Fv(n,e){let t=n.get("tp"),i=n.get("e"),s=n.get("q");return .75*(e-t)*qT*Math.sqrt((1+i)/(s*s*s))}var hd=class hd{constructor(e,t){W(this,"id");W(this,"options");W(this,"simulation");W(this,"context");W(this,"addedToScene");W(this,"particleCount");W(this,"elements");W(this,"uniforms");W(this,"geometry");W(this,"shaderMaterial");W(this,"particleSystem");W(this,"attributes");if(this.options=e,this.id=`KeplerParticles__${hd.instanceCount}`,this.simulation=t,this.context=t.getContext(),this.addedToScene=!1,this.particleCount=0,!this.options.textureUrl)throw new Error("ParticleSystem requires textureUrl to be set");let i=Q0(this.options.textureUrl,this.context.options.basePath);this.uniforms={particleTexture:{value:i}};let s=this.options.maxNumParticles||YT;this.elements=[],this.attributes={size:new He(new Float32Array(s),1),origin:new He(new Float32Array(s*3),3),position:new He(new Float32Array(s*3),3),fuzzColor:new He(new Float32Array(s*3),3),a:new He(new Float32Array(s),1),e:new He(new Float32Array(s),1),i:new He(new Float32Array(s),1),om:new He(new Float32Array(s),1),ma:new He(new Float32Array(s),1),n:new He(new Float32Array(s),1),w:new He(new Float32Array(s),1),wBar:new He(new Float32Array(s),1),q:new He(new Float32Array(s),1),M:new He(new Float32Array(s),1),a0:new He(new Float32Array(s),1)},this.attributes.M.setUsage(gc),this.attributes.a0.setUsage(gc);let r=new Ie;r.setDrawRange(0,0),Object.keys(this.attributes).forEach(o=>{let l=this.attributes[o];r.setAttribute(o,l)});let a=new Ke({uniforms:this.uniforms,vertexShader:Dv(),fragmentShader:Rv(),depthTest:!0,depthWrite:!1,transparent:!0});this.shaderMaterial=a,this.geometry=r,this.particleSystem=new _i(r,a),this.particleSystem.frustumCulled=!1}addParticle(e,t={}){this.elements.push(e);let i=this.attributes,s=this.particleCount++;i.size.set([t.particleSize||this.options.defaultSize||15],s);let r=new oe(t.color||16777215);i.fuzzColor.set([r.r,r.g,r.b],s*3),i.origin.set([0,0,0],s*3),i.a.set([e.get("a")],s),i.e.set([e.get("e")],s),i.i.set([e.get("i","rad")],s),i.om.set([e.get("om","rad")],s),i.wBar.set([e.get("wBar","rad")],s),i.q.set([e.get("q")],s),yr.getOrbitType(e)===1?i.a0.set([Fv(e,this.options.jd||0)],s):i.M.set([Ov(e,this.options.jd||0)],s);for(let a in i)i.hasOwnProperty(a)&&(i[a].needsUpdate=!0);return this.geometry.setDrawRange(0,this.particleCount),!this.addedToScene&&this.simulation&&(this.simulation.addObject(this),this.addedToScene=!0),s}hideParticle(e){let t=this.attributes;t.size.set([0],e);for(let i in t)t.hasOwnProperty(i)&&(t[i].needsUpdate=!0)}setParticleSize(e,t){let i=this.attributes;i.size.set([e],t);for(let s in i)i.hasOwnProperty(s)&&(i[s].needsUpdate=!0)}setParticleColor(e,t){let i=this.attributes,{r:s,g:r,b:a}=new oe(e);i.fuzzColor.set([s,r,a],t*3);for(let o in i)i.hasOwnProperty(o)&&(i[o].needsUpdate=!0)}setParticleOrigin(e,t){this.attributes.origin.set(t,e*3),this.attributes.origin.needsUpdate=!0}update(e){let t=[],i=[];for(let s=0;s<this.elements.length;s++){let r=this.elements[s],a,o;yr.getOrbitType(r)===1?(o=Fv(r,e),a=0):(o=0,a=Ov(r,e)),t.push(a),i.push(o)}this.attributes.M.set(t),this.attributes.M.needsUpdate=!0,this.attributes.a0.set(i),this.attributes.a0.needsUpdate=!0}get3jsObjects(){return[this.particleSystem]}getId(){return this.id}};W(hd,"instanceCount");var Cc=hd;Cc.instanceCount=0;var jT=/^[og]\s*(.+)?/,ZT=/^mtllib /,KT=/^usemtl /,QT=/^usemap /,Hv=/\s+/,kv=new w,kp=new w,zv=new w,Gv=new w,Ki=new w,dd=new oe;function JT(){let n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){let s=this.vertices,r=this.object.geometry.normals;kv.fromArray(s,e),kp.fromArray(s,t),zv.fromArray(s,i),Ki.subVectors(zv,kp),Gv.subVectors(kv,kp),Ki.cross(Gv),Ki.normalize(),r.push(Ki.x,Ki.y,Ki.z),r.push(Ki.x,Ki.y,Ki.z),r.push(Ki.x,Ki.y,Ki.z)},addColor:function(e,t,i){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,c){let u=this.vertices.length,h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),f=this.parseVertexIndex(i,u);if(this.addVertex(h,d,f),this.addColor(h,d,f),o!==void 0&&o!==""){let p=this.normals.length;h=this.parseNormalIndex(o,p),d=this.parseNormalIndex(l,p),f=this.parseNormalIndex(c,p),this.addNormal(h,d,f)}else this.addFaceNormal(h,d,f);if(s!==void 0&&s!==""){let p=this.uvs.length;h=this.parseUVIndex(s,p),d=this.parseUVIndex(r,p),f=this.parseUVIndex(a,p),this.addUV(h,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){let r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}var fd=class extends Kt{constructor(e){super(e),this.materials=null}load(e,t,i,s){let r=this,a=new Pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new JT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),s=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let u=c.charAt(0);if(u!=="#")if(u==="v"){let h=c.split(Hv);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(dd.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),je),t.colors.push(dd.r,dd.g,dd.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){let d=c.slice(1).trim().split(Hv),f=[];for(let v=0,m=d.length;v<m;v++){let g=d[v];if(g.length>0){let _=g.split("/");f.push(_)}}let p=f[0];for(let v=1,m=f.length-1;v<m;v++){let g=f[v],_=f[v+1];t.addFace(p[0],g[0],_[0],p[1],g[1],_[1],p[2],g[2],_[2])}}else if(u==="l"){let h=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=h;else for(let p=0,v=h.length;p<v;p++){let m=h[p].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(u==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=jT.exec(c))!==null){let h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(KT.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(ZT.test(c))t.materialLibraries.push(c.substring(7).trim());else if(QT.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){let d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new sn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],u=c.geometry,h=c.materials,d=u.type==="Line",f=u.type==="Points",p=!1;if(u.vertices.length===0)continue;let v=new Ie;v.setAttribute("position",new _e(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new _e(u.normals,3)),u.colors.length>0&&(p=!0,v.setAttribute("color",new _e(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new _e(u.uvs,2));let m=[];for(let _=0,b=h.length;_<b;_++){let x=h[_],A=x.name+"_"+x.smooth+"_"+p,E=t.materials[A];if(this.materials!==null){if(E=this.materials.create(x.name),d&&E&&!(E instanceof Rt)){let C=new Rt;Ct.prototype.copy.call(C,E),C.color.copy(E.color),E=C}else if(f&&E&&!(E instanceof ln)){let C=new ln({size:10,sizeAttenuation:!1});Ct.prototype.copy.call(C,E),C.color.copy(E.color),C.map=E.map,E=C}}E===void 0&&(d?E=new Rt:f?E=new ln({size:1,sizeAttenuation:!1}):E=new rr,E.name=x.name,E.flatShading=!x.smooth,E.vertexColors=p,t.materials[A]=E),m.push(E)}let g;if(m.length>1){for(let _=0,b=h.length;_<b;_++){let x=h[_];v.addGroup(x.groupStart,x.groupCount,_)}d?g=new ni(v,m):f?g=new _i(v,m):g=new et(v,m)}else d?g=new ni(v,m[0]):f?g=new _i(v,m[0]):g=new et(v,m[0]);g.name=c.name,r.add(g)}else if(t.vertices.length>0){let o=new ln({size:1,sizeAttenuation:!1}),l=new Ie;l.setAttribute("position",new _e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new _e(t.colors,3)),o.vertexColors=!0);let c=new _i(l,o);r.add(c)}return r}};var $T=30;function ew(n,e,t){let i=new w(n[0],n[1],n[2]);return i.project(e),{x:(i.x+1)*t.clientWidth/2,y:(-i.y+1)*t.clientHeight/2}}var ja=class{constructor(e,t,i,s=!0){W(this,"_id");W(this,"_options");W(this,"_simulation");W(this,"_context");W(this,"_renderMethod");W(this,"_initialized");W(this,"_object3js");W(this,"_useEphemTable");W(this,"_isStaticObject");W(this,"_label");W(this,"_showLabel");W(this,"_lastLabelUpdate");W(this,"_position");W(this,"_orbitAround");W(this,"_scale");W(this,"_particleIndex");W(this,"_orbitPath");W(this,"_eclipticLines");W(this,"_orbit");this._id=e,this._options=t||{},this._object3js=void 0,this._useEphemTable=this._options.ephemTable!==void 0,this._isStaticObject=!this._options.ephem&&!this._useEphemTable,this._simulation=i,this._context=i.getContext(),this._label=void 0,this._showLabel=!1,this._lastLabelUpdate=0,this._position=yn(this._options.position||[0,0,0]),this._orbitAround=void 0,this._scale=this._options.scale||[1,1,1],this._renderMethod=void 0,this._particleIndex=void 0,this._initialized=!1,s&&!this.init()&&console.warn(`SpaceObject ${e}: failed to initialize`)}init(){if(this.renderObject(),this._options.labelText){let e=this.createLabel();this._simulation.getSimulationElement().appendChild(e),this._label=e,this._showLabel=!0}return this._orbitPath=void 0,this._eclipticLines=void 0,this.update(this._simulation.getJd(),!0),this._initialized=!0,!0}setPositionedObject(e){this._object3js=e}renderObject(){if(this.isStaticObject())this._renderMethod||(this._object3js=this.createSprite(),this._simulation&&this._simulation.addObject(this,!1),this._renderMethod="SPRITE");else if(this._orbit=this.createOrbit(),!this._options.hideOrbit&&this._simulation&&this._simulation.addObject(this,!1),this._useEphemTable&&(this._renderMethod||(this._object3js=this.createSprite(),this._simulation&&this._simulation.addObject(this,!0),this._renderMethod="SPRITE")),!this._renderMethod){if(!this._options.ephem)throw new Error("Attempting to create a particle system, but ephemeris are not available.");this._particleIndex=this._context.objects.particles.addParticle(this._options.ephem,{particleSize:this._options.particleSize,color:this.getColor()}),this._renderMethod="PARTICLESYSTEM"}}createLabel(){let e=document.createElement("div");e.className="spacekit__object-label";let{labelText:t,labelUrl:i}=this._options;return this._options.labelUrl?e.innerHTML=`<div><a target="_blank" href="${i}">${t}</a></div>`:e.innerHTML=`<div>${t}</div>`,e.style.fontFamily="Arial",e.style.fontSize="12px",e.style.color="#fff",e.style.position="absolute",e.style.backgroundColor="#0009",e.style.outline="1px solid #5f5f5f",e}updateLabelPosition(e){if(!this._label)throw new Error("Attempted to update label position without a label");let t=this._label,i=this._simulation.getSimulationElement(),s=ew(e,this._simulation.getViewer().get3jsCamera(),i),r={left:s.x,top:s.y,right:s.x+t.clientWidth,bottom:s.y+t.clientHeight};r.left-30>0&&r.right+20<i.clientWidth&&r.top-25>0&&r.bottom<i.clientHeight?(t.style.left=`${r.left-t.clientWidth/2}px`,t.style.top=`${r.top-t.clientHeight-8}px`,t.style.visibility="visible"):t.style.visibility="hidden"}createSprite(){if(!this._options.textureUrl)throw new Error("Cannot create sprite without a textureUrl");let e=Tc(this._options.textureUrl,this._context.options.basePath),t=new Fi().load(e);t.colorSpace=je;let i=new er(new gs({map:t,blending:Un,depthWrite:!1,color:this._options.theme?this._options.theme.color:16777215})),s=yn(this._scale);i.scale.set(s[0],s[1],s[2]);let r=this.getPosition(this._simulation.getJd());return i.position.set(r[0],r[1],r[2]),this.isStaticObject()&&(i.updateMatrix(),i.matrixAutoUpdate=!1),i}createOrbit(){if(this._orbit)return this._orbit;let e=this._useEphemTable?this._options.ephemTable:this._options.ephem;if(!e)throw new Error("Cannot create orbit without Ephem or EphemerisTable");return new yr(e,{orbitPathSettings:this._options.orbitPathSettings,color:this._options.theme?this._options.theme.orbitColor:void 0,eclipticLineColor:this._options.ecliptic?this._options.ecliptic.lineColor:void 0})}shouldUpdateObjectPosition(e){return!0}orbitAround(e){this._orbitAround=e}setPosition(e,t,i){this._position[0]=Sn(e),this._position[1]=Sn(t),this._position[2]=Sn(i)}getPosition(e){let t=this._position;if(!this._orbit)return t;let i=this._orbit.getPositionAtTime(e);if(this._orbitAround){let s=this._orbitAround.getPosition(e);return[t[0]+i[0]+s[0],t[1]+i[1]+s[1],t[2]+i[2]+s[2]]}return[t[0]+i[0],t[1]+i[1],t[2]+i[2]]}update(e,t=!1){var o,l,c;let i;if(this._label){let u=+new Date-this._lastLabelUpdate>$T;(t||this._showLabel&&u)&&(i||(i=this.getPosition(e)),this.updateLabelPosition(i),this._lastLabelUpdate=+new Date)}if(this.isStaticObject()&&!t)return;let s=!1;(this._object3js||this._label)&&(s=t||this.shouldUpdateObjectPosition(e)),this._object3js&&s&&(i=this.getPosition(e),this._object3js.position.set(i[0],i[1],i[2]));let r=!this._orbitPath||((o=this._orbit)==null?void 0:o.needsUpdateForTime(e));this._orbit&&!this._options.hideOrbit&&r&&(this._orbitPath&&this._simulation.getScene().remove(this._orbitPath),this._orbitPath=this._orbit.getOrbitShape(e,!0),this._simulation.getScene().add(this._orbitPath));let a=!this._eclipticLines||r;if(this._orbit&&this._options.ecliptic&&this._options.ecliptic.displayLines&&a&&(this._eclipticLines&&this._simulation.getScene().remove(this._eclipticLines),this._eclipticLines=this._orbit.getLinesToEcliptic(),this._simulation.getScene().add(this._eclipticLines)),this._orbitAround){let u=this._orbitAround.getPosition(e);this._renderMethod==="PARTICLESYSTEM"&&((l=this._context.objects.particles)==null||l.setParticleOrigin(this._particleIndex,u)),this._options.hideOrbit||(c=this._orbitPath)==null||c.position.set(u[0],u[1],u[2]),i||(i=this.getPosition(e))}}get3jsObjects(){let e=[];return this._object3js&&e.push(this._object3js),this._orbit&&(this._orbitPath&&e.push(this._orbitPath),this._eclipticLines&&e.push(this._eclipticLines)),e}getBoundingObject(){return Ai(this,null,function*(){return Promise.resolve(this.get3jsObjects()[0])})}getColor(){return this._options.theme&&this._options.theme.color||16777215}getOrbit(){return this._orbit}getLabelVisibility(){return this._showLabel}setLabelVisibility(e){if(!this._label)throw new Error("Attempted to set label visibility without a label");e?(this._showLabel=!0,this._label.style.display="block"):(this._showLabel=!1,this._label.style.display="none")}getId(){return this._id}isStaticObject(){return this._isStaticObject}isReady(){return this._initialized}removalCleanup(){var e;this._label&&(this._simulation.getSimulationElement().removeChild(this._label),this._label=void 0),this._particleIndex!==void 0&&((e=this._context)==null||e.objects.particles.hideParticle(this._particleIndex))}},Fn="{{assets}}/sprites/smallparticle.png",TC={SUN:{textureUrl:"{{assets}}/sprites/lensflare0.png",position:[0,0,0]},MERCURY:{textureUrl:Fn,theme:{color:9518318},ephem:En.MERCURY},VENUS:{textureUrl:Fn,theme:{color:16742195},ephem:En.VENUS},EARTH:{textureUrl:Fn,theme:{color:39629},ephem:En.EARTH},MOON:{textureUrl:Fn,theme:{color:16766720},ephem:En.MOON,particleSize:6},MARS:{textureUrl:Fn,theme:{color:10893882},ephem:En.MARS},JUPITER:{textureUrl:Fn,theme:{color:16759055},ephem:En.JUPITER},SATURN:{textureUrl:Fn,theme:{color:3368499},ephem:En.SATURN},URANUS:{textureUrl:Fn,theme:{color:39423},ephem:En.URANUS},NEPTUNE:{textureUrl:Fn,theme:{color:3355647},ephem:En.NEPTUNE},PLUTO:{textureUrl:Fn,theme:{color:13418672},ephem:En.PLUTO}};function zp(n,e,t){let i=new Rt({linewidth:3,color:t}),s=new Ie().setFromPoints([Mp(n).clone(),Mp(e).clone()]),r=new xi(s,i);return r.computeLineDistances(),r}function tw(){return[zp(new w(0,0,0),new w(3,0,0),16711680),zp(new w(0,0,0),new w(0,3,0),65280),zp(new w(0,0,0),new w(0,0,3),255)]}var Za=class extends ja{constructor(t,i,s,r=!0){super(t,i,s,!1);W(this,"_obj");W(this,"_materials");W(this,"_objectIsRotatable");W(this,"_axisOfRotation");this._obj=new st,this._renderMethod="ROTATING_OBJECT",super.setPositionedObject(this._obj),this._objectIsRotatable=!1,this._options.rotation&&(this._objectIsRotatable=!0),this._axisOfRotation=void 0,this._materials=[],r&&this.init()}init(){if(this._objectIsRotatable&&this.initRotation(),this._options.debug&&(this._options.debug.showAxes&&tw().forEach(t=>this._obj.add(t)),this._options.debug.showGrid)){let t=new Ts(3,3,16711680,16772846);t.geometry.rotateX(Math.PI/2),this._obj.add(t)}return super.init()}initRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");let{rotation:t}=this._options;if(typeof t.jd0=="undefined")return;let{PI:i}=Math,s=ht.rad(t.lambdaDeg||0),r=ht.rad(t.betaDeg||0),a=t.period,o=t.yorp||0,l=ht.rad(t.phi0||0),c=this._simulation.getJd(),u=t.jd0,h=l+2*i/a*(c-u)+1/2*o*Math.pow(c-u,2);this._obj.rotateY(-(i/2-r)),this._obj.rotateZ(-s),this._obj.rotateZ(h)}update(t,i=!1){if(this._obj&&this._objectIsRotatable&&this._options.rotation&&this._options.rotation.enable){let s=this._options.rotation.speed||.5;this._obj.rotation.z+=s*(Math.PI/180),this._obj.rotation.z%=360}this._axisOfRotation,super.update(t,i)}get3jsObjects(){let t=super.get3jsObjects();return t.unshift(this._obj),t}startRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");this._options.rotation.enable=!0}stopRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");this._options.rotation.enable=!1}};var pd=class extends Za{constructor(t,i,s){var a;super(t,i,s,!1);W(this,"shapeObj");W(this,"loadingPromise");if(!i.shape)throw new Error("ShapeObject requires an options.shape object");if(!((a=i.shape)!=null&&a.shapeUrl))throw new Error("Must specify shape.shapeUrl when creating a ShapeObject");this.shapeObj=void 0;let r=new As;r.onProgress=(o,l,c)=>{console.info(this._id,o,"loading progress:",l,"/",c)},this.loadingPromise=new Promise(o=>{new fd(r).load(i.shape.shapeUrl,c=>{c.traverse(u=>{if(u instanceof et){let h=new Es({color:this._options.shape.color||13421772});u.material=h,u.geometry.scale(.05,.05,.05),this._materials.push(h)}}),this.shapeObj=c,this._obj.add(c),this._simulation&&this._simulation.addObject(this,!1),this._initialized=!0,o(this.shapeObj)})}),super.init()}getBoundingObject(){return Ai(this,null,function*(){return this.loadingPromise})}};var iw=[[-.0548755604,-.8734370902,-.4838350155],[.4941094279,-.44482963,.7469822445],[-.867666149,-.1980763734,.4559837762]];function nw(n){return[[n[0][0],n[1][0],n[2][0]],[n[0][1],n[1][1],n[2][1]],[n[0][2],n[1][2],n[2][2]]]}function sw(n){return new Ce().set(n[0][0],n[0][1],n[0][2],0,n[1][0],n[1][1],n[1][2],0,n[2][0],n[2][1],n[2][2],0,0,0,0,1)}function rw(n){return new Ce().set(1,0,0,0,0,Math.cos(n),Math.sin(n),0,0,-Math.sin(n),Math.cos(n),0,0,0,0,1)}var aw=nw(iw);function Vv(n=ki.getObliquity()){return rw(n).multiply(sw(aw))}function ow(){return new Ce().makeRotationX(Math.PI/2).multiply(new Ce().makeRotationY(Math.PI))}function lw(n,e){let t=new Ce;return n.longitudeOffsetDeg&&t.multiply(new Ce().makeRotationZ(ht.rad(n.longitudeOffsetDeg))),n.mirrorLongitude&&t.multiply(new Ce().makeScale(1,-1,1)),Vv(e).multiply(t).multiply(ow())}var md=class{constructor(e,t){W(this,"simulation");W(this,"context");W(this,"id");W(this,"options");W(this,"mesh");this.options=e,this.id=`__skybox_${new Date().getTime()}`,this.simulation=t,this.context=t.getContext(),this.mesh=void 0,this.init()}init(){let e=new cn(1e10,32,32),t=Tc(this.options.textureUrl,this.context.options.basePath),i=new Fi().load(t);i.colorSpace=je;let s=new ci({map:i,side:Ot,transparent:(this.options.opacity||1)<1,opacity:this.options.opacity||1,depthWrite:!1}),r=new et(e,s);r.applyMatrix4(lw(this.options)),r.userData.spacekitBackground=!0,r.renderOrder=-1,this.mesh=r,this.simulation&&this.simulation.addObject(this,!0)}get3jsObjects(){return this.mesh?[this.mesh]:[]}getId(){return this.id}update(){}},WC={ESO_GIGAGALAXY:{textureUrl:"{{assets}}/skybox/eso_milkyway.jpg",longitudeOffsetDeg:180,mirrorLongitude:!0},ESO_LITE:{textureUrl:"{{assets}}/skybox/eso_lite.png",longitudeOffsetDeg:180,mirrorLongitude:!0},NASA_TYCHO:{textureUrl:"{{assets}}/skybox/nasa_tycho.jpg",longitudeOffsetDeg:180,mirrorLongitude:!0}};var gd=class extends Za{constructor(e,t,i){super(e,t,i,!1),this.init()}init(){var r;let e=null;this._options.textureUrl&&(e=new Fi().load(this._options.textureUrl),e.colorSpace=je);let t=new vs,i=this._options.levelsOfDetail||[{radii:0,segments:64}],s=this.getScaledRadius();for(let a=0;a<i.length;a+=1){let o=i[a],l=new cn(s,o.segments,o.segments),c;if(this._simulation.isUsingLightSources()){console.warn(`SphereObject ${this._id} requires a texture when using a light source.`);let h={sphereTexture:{value:void 0},lightPos:{value:new w}};h.sphereTexture.value=e,h.lightPos.value.copy(this._simulation.getLightPosition()),c=new Ke({uniforms:h,vertexShader:Uv,fragmentShader:Lv,transparent:!0})}else{let h=(r=this._options.color)!=null?r:12303291;c=new ci({map:e,color:h})}let u=new et(l,c);u.receiveShadow=!0,u.castShadow=!0,u.rotation.x=Math.PI/2,t.addLevel(u,s*o.radii)}if(this._obj.add(t),this._options.atmosphere&&this._options.atmosphere.enable){let a=this.renderFullAtmosphere();a&&this._obj.add(a)}return this._options.axialTilt&&(this._obj.rotation.y+=ht.rad(this._options.axialTilt)),this._renderMethod="SPHERE",this._simulation&&this._simulation.addObject(this,!1),super.init()}getScaledRadius(){return Sn(this._options.radius||1)}renderFullAtmosphere(){var o,l,c,u,h,d,f,p,v;if(!this._simulation.isUsingLightSources())return console.warn("Cannot render atmosphere without a light source"),null;let e=this.getScaledRadius(),t=new oe((c=(l=(o=this._options)==null?void 0:o.atmosphere)==null?void 0:l.color)!=null?c:16777215),i=e*((d=(h=(u=this._options)==null?void 0:u.atmosphere)==null?void 0:h.innerSizeRatio)!=null?d:.025),s=e*((v=(p=(f=this._options)==null?void 0:f.atmosphere)==null?void 0:p.outerSizeRatio)!=null?v:.15),r=new st;r.add(this.renderAtmosphereComponent(e,i,.8,2,t)),r.add(this.renderAtmosphereComponent(e,s,.5,4,t));let a=new vs;return a.addLevel(r,0),a.addLevel(new st,e*24),a}renderAtmosphereComponent(e,t,i,s,r){let a=new cn(e+t,32,32),o={c:{value:i},p:{value:s},color:{value:r},lightPos:{value:new w}},l=this._simulation.getLightPosition();l&&o.lightPos.value.copy(l);let c=new Ke({uniforms:o,vertexShader:Pv,fragmentShader:Iv,side:Ot,transparent:!0,depthWrite:!1});return new et(a,c)}addRings(e,t,i,s=128){let r=Sn(ht.kmToAu(e)),a=Sn(ht.kmToAu(t)),o=new sr(r,a,s,5,0,Math.PI*2),l=new Fi().load(i);l.colorSpace=je;let c;if(this._simulation.isUsingLightSources()){let h=vc.merge([pe.lights,{ringTexture:{value:null},innerRadius:{value:r},outerRadius:{value:a},lightPos:{value:new w}}]);h.ringTexture.value=l,h.lightPos.value.copy(this._simulation.getLightPosition()),c=new Ke({uniforms:h,lights:!0,vertexShader:Bv,fragmentShader:Nv,transparent:!0,alphaTest:.1,side:Qt})}else c=new ci({map:l,side:Qt,transparent:!0,alphaTest:.1,opacity:.8});let u=new et(o,c);u.receiveShadow=!0,u.castShadow=!0,this._obj.add(u)}};var cw=4,uw=16777215,vd=class{constructor(e,t,i,s){W(this,"id");W(this,"options");W(this,"simulation");W(this,"points");W(this,"pointObject");this.options=i,this.id=e,this.simulation=s,this.points=t,this.pointObject=void 0,this.init(),this.simulation.addObject(this,!0)}init(){let e=new Float32Array(this.points.length*3),t=new Float32Array(this.points.length*3),i=new Float32Array(this.points.length),s=new oe(uw);this.options.defaultColor&&(s=new oe(this.options.defaultColor));let r=cw;this.options.size&&(r=this.options.size);for(let l=0,c=this.points.length;l<c;l++){let u=this.points[l];e.set(u,l*3),s.toArray(t,l*3),i[l]=r}let a=new Ie;a.setAttribute("position",new He(e,3)),a.setAttribute("color",new He(t,3)),a.setAttribute("size",new He(i,1));let o=new Ke({vertexColors:!0,vertexShader:ud,fragmentShader:cd,transparent:!0});this.pointObject=new _i(a,o)}get3jsObjects(){return this.pointObject?[this.pointObject]:[]}getId(){return this.id}update(){}};function hw(n){return n>=3e4?9614847:n>=1e4?10666239:n>=7500?14016767:n>=6e3?16381439:n>=5200?16772579:n>=3700?16767669:(n>=2400,16758124)}function dw(n,e){return n<2?e*4:n<4?e*2:n<6?e:1}var Rc=class{constructor(e,t){W(this,"_id");W(this,"_options");W(this,"_simulation");W(this,"_context");W(this,"_stars");this._options=e,this._id=`__stars_${new Date().getTime()}`,this._simulation=t,this._context=t.getContext(),this._stars=void 0,this.init()}init(){let e=Mc("{{data}}/processed/bsc.json",this._context.options.basePath);fetch(e).then(t=>t.json()).then(t=>{let i=t.length,s=new Ie,r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i);s.setAttribute("position",new He(r,3)),s.setAttribute("color",new He(a,3)),s.setAttribute("size",new He(o,1)),t.forEach((c,u)=>{let[h,d,f,p]=c,v=ht.rad(ht.hoursToDeg(h)),m=ht.rad(d),g=ki.sphericalToCartesian(v,m,1e9),_=ki.equatorialToEcliptic_Cartesian(g[0],g[1],g[2],ki.getObliquity());r.set(_,u*3);let b=new oe(hw(f));a.set(b.toArray(),u*3),o[u]=dw(p,this._options.minSize||3)});let l=new Ke({defines:{SPACEKIT_BACKGROUND:!0},uniforms:{},vertexColors:!0,vertexShader:ud,fragmentShader:cd,transparent:!0,depthWrite:!1});this._stars=new _i(s,l),this._stars.userData.spacekitBackground=!0,this._stars.renderOrder=-1,this._simulation&&this._simulation.addObject(this,!0)})}get3jsObjects(){return this._stars?[this._stars]:[]}getId(){return this._id}update(){}};var Wv=class{constructor(e,t){W(this,"onTick");W(this,"simulationElt");W(this,"options");W(this,"jd");W(this,"jdDelta");W(this,"jdPerSecond");W(this,"isPaused");W(this,"enableCameraDrift");W(this,"cameraDefaultPos");W(this,"camera");W(this,"useLightSources");W(this,"lightPosition");W(this,"subscribedObjects");W(this,"particles");W(this,"stats");W(this,"fps");W(this,"lastUpdatedTime");W(this,"lastStaticCameraUpdateTime");W(this,"lastResizeUpdateTime");W(this,"renderEnabled");W(this,"initialRenderComplete");W(this,"scene");W(this,"renderer");W(this,"composer");this.simulationElt=e,this.options=t||{},this.options.basePath=this.options.basePath||J0(),this.jd=typeof this.options.jd=="undefined"?Number((0,xd.default)(this.options.startDate||new Date)):this.options.jd,this.jdDelta=this.options.jdDelta,this.jdPerSecond=this.options.jdPerSecond||100,this.isPaused=t.startPaused||!1,this.onTick=void 0,this.enableCameraDrift=!1,this.cameraDefaultPos=yn([0,-10,5]),this.options.camera&&(this.enableCameraDrift=!!this.options.camera.enableDrift,this.options.camera.initialPosition&&(this.cameraDefaultPos=yn(this.options.camera.initialPosition))),this.useLightSources=!1,this.lightPosition=void 0,this.subscribedObjects={},st.DEFAULT_UP.set(0,0,1),this.options.unitsPerAu&&K0(this.options.unitsPerAu),this.stats=void 0,this.fps=1,this.lastUpdatedTime=Date.now(),this.lastStaticCameraUpdateTime=Date.now(),this.lastResizeUpdateTime=Date.now(),this.renderEnabled=!0,this.initialRenderComplete=!1,this.animate=this.animate.bind(this),this.renderer=this.initRenderer(),this.scene=new Ri,this.camera=new Ac(this.getContext()),this.composer=void 0,this.particles=new Cc({textureUrl:this.options.particleTextureUrl||"{{assets}}/sprites/smallparticle.png",jd:this.jd,maxNumParticles:this.options.maxNumParticles,defaultSize:this.options.particleDefaultSize},this),this.init(),this.animate()}init(){if(this.camera.get3jsCamera().position.set(this.cameraDefaultPos[0],this.cameraDefaultPos[1],this.cameraDefaultPos[2]),this.simulationElt.onmousedown=this.simulationElt.ontouchstart=()=>{this.enableCameraDrift=!1},(()=>{let e=!1;this.camera.get3jsCameraControls().addEventListener("change",()=>{e&&this.staticForcedUpdate()}),setTimeout(()=>{this.staticForcedUpdate(),e=!0,this.initialRenderComplete=!0},0)})(),this.simulationElt.addEventListener("resize",()=>{this.resizeUpdate()}),window.addEventListener("resize",()=>{this.resizeUpdate()}),this.options.debug){if(this.options.debug.showGrid){let e=new Ts(void 0,void 0);e.geometry.rotateX(Math.PI/2),this.scene.add(e)}this.options.debug.showAxes&&this.scene.add(new ba(.5)),this.options.debug.showStats&&(this.stats=new hv,this.stats.showPanel(0),this.simulationElt.appendChild(this.stats.dom))}this.initPasses()}initRenderer(){let e=document.createElement("canvas"),t=e.getContext("webgl2",{antialias:!0,alpha:!1});if(!t)throw new Error("Spacekit requires a browser and GPU with WebGL 2 support.");let i=new bc({canvas:e,context:t,antialias:!0});console.info("Max texture resolution:",i.capabilities.maxTextureSize);let s=i.capabilities.getMaxPrecision("highp");return s!=="highp"&&console.warn(`Shader maximum precision is "${s}", GPU rendering may not be accurate.`),i.setPixelRatio(window.devicePixelRatio),i.setSize(this.simulationElt.offsetWidth,this.simulationElt.offsetHeight),this.simulationElt.appendChild(i.domElement),i}initPasses(){let e=this.camera.get3jsCamera(),t=new _v({width:240,height:240,luminanceThreshold:.2});t.blendMode.opacity.value=2.3;let i=new yv(this.scene,e);i.renderToScreen=!1;let s=new Sv(e,t);s.renderToScreen=!0;let r=new xv(this.renderer);r.addPass(i),r.addPass(s),this.composer=r}update(e=!1){for(let t in this.subscribedObjects)this.subscribedObjects.hasOwnProperty(t)&&this.subscribedObjects[t].update(this.jd,e)}staticForcedUpdate(){if(this.isPaused){let e=Date.now();e-this.lastStaticCameraUpdateTime>30&&(this.update(!0),this.lastStaticCameraUpdateTime=e)}}resizeUpdate(){let e=Date.now();if(e-this.lastResizeUpdateTime>30){let s=this.simulationElt.offsetWidth,r=this.simulationElt.offsetHeight;if(s===0&&r===0)return;let a=this.camera.get3jsCamera();a.aspect=s/r,a.updateProjectionMatrix(),this.renderer.setSize(s,r),this.staticForcedUpdate(),this.lastResizeUpdateTime=e}}doCameraDrift(){let e=1e-4*Date.now(),t=this.cameraDefaultPos,i=this.camera.get3jsCamera();i.position.x=t[0]+t[0]*(Math.cos(e)+1)/3,i.position.z=t[2]+t[2]*(Math.sin(e)+1)/3}animate(){if(!(!this.renderEnabled&&this.initialRenderComplete)){if(window.requestAnimationFrame(this.animate),this.stats&&this.stats.begin(),!this.isPaused){this.jdDelta?this.jd+=this.jdDelta:this.jd+=this.jdPerSecond/this.fps;let e=(Date.now()-this.lastUpdatedTime)/1e3;this.lastUpdatedTime=Date.now(),this.fps=1/e||1,this.update()}this.enableCameraDrift&&this.doCameraDrift(),this.camera.update(),this.renderer.clear(),this.renderer.render(this.scene,this.camera.get3jsCamera()),this.onTick&&this.onTick(),this.stats&&this.stats.end()}}addObject(e,t=!1){if(e.get3jsObjects().map(i=>{this.scene.add(i)}),!t){let i=e.getId();this.subscribedObjects[i]&&console.error(`Object id is not unique: "${i}". This could prevent objects from updating correctly.`),this.subscribedObjects[i]=e}}removeObject(e){e.get3jsObjects().map(t=>{this.scene.remove(t)}),typeof e.removalCleanup=="function"&&e.removalCleanup(),delete this.subscribedObjects[e.getId()]}createObject(...e){return new ja(...e,this)}createShape(...e){return new pd(...e,this)}createSphere(...e){return new gd(...e,this)}createBlackHole(e,t){return new ld(e,t,this)}createStaticParticles(...e){return new vd(...e,this)}createSkybox(...e){return new md(...e,this)}createStars(...e){return e.length?new Rc(...e,this):new Rc({},this)}createAmbientLight(e=3355443){this.scene.add(new ur(e,Math.PI)),this.useLightSources=!0}createLight(e=void 0,t=16777215){this.lightPosition&&console.warn("Spacekit doesn't support more than one light source for SphereObjects"),this.lightPosition=new w;let i=new cr(t,Math.PI,0,0);if(typeof e=="undefined")this.camera.get3jsCameraControls().addEventListener("change",()=>{this.lightPosition.copy(this.camera.get3jsCamera().position),i.position.copy(this.camera.get3jsCamera().position)});else{let s=yn(e);this.lightPosition.set(s[0],s[1],s[2]),i.position.set(s[0],s[1],s[2])}this.scene.add(i),this.useLightSources=!0}getLightPosition(){return this.lightPosition}isUsingLightSources(){return this.useLightSources}loadNaturalSatellites(){return new id(this).load()}renderOnlyInViewport(){let e=!0,t=()=>{let i=this.simulationElt.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth,a=i.top<=s&&i.top+i.height>=0,o=i.left<=r&&i.left+i.width>=0;return a&&o};window.addEventListener("scroll",()=>{let i=t();e&&!i?(this.renderEnabled=!1,e=!1):!e&&i&&(this.renderEnabled=!0,window.requestAnimationFrame(this.animate),e=!0)}),t()||(this.renderEnabled=!1,e=!1)}zoomToFit(e,t=3){return Ai(this,null,function*(){let i=e.getOrbit(),s=i?i.getOrbitShape():yield e.getBoundingObject();return s?(this.doZoomToFit(s,t),!0):!1})}doZoomToFit(e,t){let i=new Wt;i.setFromObject(e);let s=new w;i.getCenter(s);let r=new w;i.getSize(r);let a=this.camera.get3jsCamera(),o=Math.max(r.x,r.y,r.z),l=a.fov*(Math.PI/180),c=Math.abs(o/2*Math.tan(l*2))*t,u=new w;e.getWorldPosition(u);let f=a.position.sub(u).normalize().multiplyScalar(c);a.position.x=f.x,a.position.y=f.y,a.position.z=f.z,a.updateProjectionMatrix(),this.cameraDefaultPos=[f.x,f.y,f.z]}start(){this.lastUpdatedTime=Date.now(),this.isPaused=!1}stop(){this.isPaused=!0}getJd(){return this.jd}setJd(e){this.jd=e,this.update(!0)}getDate(){return xd.default.toDate(this.jd)}setDate(e){this.setJd(Number((0,xd.default)(e)))}getJdDelta(){return this.jdDelta?this.jdDelta:this.jdPerSecond/this.fps}setJdDelta(e){this.jdDelta=e}getJdPerSecond(){if(!this.jdDelta)return this.jdPerSecond}setJdPerSecond(e){this.jdDelta=void 0,this.jdPerSecond=e}getContext(){return{simulation:this,options:this.options,objects:{particles:this.particles,camera:this.camera,scene:this.scene,renderer:this.renderer,composer:this.composer},container:{width:this.simulationElt.offsetWidth,height:this.simulationElt.offsetHeight}}}getSimulationElement(){return this.simulationElt}getViewer(){return this.camera}getScene(){return this.scene}getRenderer(){return this.renderer}setCameraDrift(e){this.enableCameraDrift=e}};var AR=ei;export{ld as BlackHole,hi as Ephem,En as EphemPresets,Zi as EphemerisTable,Va as GM,Cc as KeplerParticles,rd as METERS_PER_AU,id as NaturalSatellites,yr as Orbit,cv as OrbitType,Za as RotatingObject,bv as SCHWARZSCHILD_CRITICAL_IMPACT,VT as SOLAR_GM,Ev as SPEED_OF_LIGHT,pd as ShapeObject,Wv as Simulation,md as Skybox,WC as SkyboxPresets,ja as SpaceObject,TC as SpaceObjectPresets,gd as SphereObject,Rc as Stars,vd as StaticParticles,AR as THREE,lw as getSkyboxOrientationTransform,J1 as schwarzschildOrbitalPeriodSeconds,Fp as schwarzschildRadiusAu,$1 as stepSchwarzschildRay};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.39.5 build Wed Sep 09 2026
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2026 Raoul van Rüschen
   * @license Zlib
   *)
*/
//# sourceMappingURL=spacekit.esm.js.map
