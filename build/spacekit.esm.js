var qv=Object.create;var Ic=Object.defineProperty,jv=Object.defineProperties,Zv=Object.getOwnPropertyDescriptor,Kv=Object.getOwnPropertyDescriptors,Qv=Object.getOwnPropertyNames,Zp=Object.getOwnPropertySymbols,Jv=Object.getPrototypeOf,Kp=Object.prototype.hasOwnProperty,$v=Object.prototype.propertyIsEnumerable;var Ei=Math.pow,_d=(s,e,t)=>e in s?Ic(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Cs=(s,e)=>{for(var t in e||(e={}))Kp.call(e,t)&&_d(s,t,e[t]);if(Zp)for(var t of Zp(e))$v.call(e,t)&&_d(s,t,e[t]);return s},Uc=(s,e)=>jv(s,Kv(e));var ex=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},tx=(s,e)=>{for(var t in e)Ic(s,t,{get:e[t],enumerable:!0})},ix=(s,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Qv(e))!Kp.call(s,n)&&n!==t&&Ic(s,n,{get:()=>e[n],enumerable:!(i=Zv(e,n))||i.enumerable});return s};var Qp=(s,e,t)=>(t=s!=null?qv(Jv(s)):{},ix(e||!s||!s.__esModule?Ic(t,"default",{value:s,enumerable:!0}):t,s));var V=(s,e,t)=>_d(s,typeof e!="symbol"?e+"":e,t);var Ai=(s,e,t)=>new Promise((i,n)=>{var r=l=>{try{o(t.next(l))}catch(c){n(c)}},a=l=>{try{o(t.throw(l))}catch(c){n(c)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,a);o((t=t.apply(s,e)).next())});var Dp=ex((_w,Wa)=>{"use strict";Wa.exports=AM;Wa.exports.toDate=MM;Wa.exports.toJulianDay=nv;Wa.exports.toMillisecondsInJulianDay=sv;Wa.exports.fromJulianDayAndMilliseconds=TM;var Va=864e5,tv=Va/2,iv=24405875e-1,EM=2440587;function AM(s){return(nv(s)+sv(s)/Va).toFixed(6)}function MM(s){return new Date((Number(s)-iv)*Va)}function nv(s){return~~((+s+tv)/Va)+EM}function sv(s){return(+s+tv)%Va}function TM(s,e){return(s-iv)*Va+e}});var Qt={};tx(Qt,{ACESFilmicToneMapping:()=>Lu,AddEquation:()=>fn,AddOperation:()=>Uf,AdditiveAnimationBlendMode:()=>Xu,AdditiveBlending:()=>Rn,AgXToneMapping:()=>Nu,AlphaFormat:()=>Vu,AlwaysCompare:()=>Xf,AlwaysDepth:()=>Gs,AlwaysStencilFunc:()=>Hf,AmbientLight:()=>ar,AnimationAction:()=>Ml,AnimationClip:()=>Ss,AnimationLoader:()=>Xh,AnimationMixer:()=>nu,AnimationObjectGroup:()=>iu,AnimationUtils:()=>Wh,ArcCurve:()=>Fo,ArrayCamera:()=>Sl,ArrowHelper:()=>Eu,AttachedBindMode:()=>Eh,Audio:()=>El,AudioAnalyser:()=>tu,AudioContext:()=>_a,AudioListener:()=>$h,AudioLoader:()=>Qh,AxesHelper:()=>ya,BackSide:()=>Ut,BasicDepthPacking:()=>Kn,BasicShadowMap:()=>hg,BatchedMesh:()=>Do,BezierInterpolant:()=>hl,Bone:()=>ea,BooleanKeyframeTrack:()=>Tn,Box2:()=>Tl,Box3:()=>Gt,Box3Helper:()=>Su,BoxGeometry:()=>vs,BoxHelper:()=>yu,BufferAttribute:()=>He,BufferGeometry:()=>Ie,BufferGeometryLoader:()=>_l,ByteType:()=>Hu,Cache:()=>rn,Camera:()=>Yn,CameraHelper:()=>_u,CanvasTexture:()=>zh,CapsuleGeometry:()=>Lo,CatmullRomCurve3:()=>Ho,CineonToneMapping:()=>Uu,CircleGeometry:()=>Bo,ClampToEdgeWrapping:()=>gi,Clock:()=>cu,Color:()=>oe,ColorKeyframeTrack:()=>ma,ColorManagement:()=>nt,Compatibility:()=>Qg,CompressedArrayTexture:()=>Hh,CompressedCubeTexture:()=>kh,CompressedTexture:()=>Qs,CompressedTextureLoader:()=>Yh,ConeGeometry:()=>na,ConstantAlphaFactor:()=>Df,ConstantColorFactor:()=>Cf,Controls:()=>Sa,CubeCamera:()=>yl,CubeDepthTexture:()=>Uo,CubeReflectionMapping:()=>pn,CubeRefractionMapping:()=>qn,CubeTexture:()=>gs,CubeTextureLoader:()=>qh,CubeUVReflectionMapping:()=>cr,CubicBezierCurve:()=>sa,CubicBezierCurve3:()=>ko,CubicInterpolant:()=>ll,CullFaceBack:()=>wu,CullFaceFront:()=>gf,CullFaceFrontBack:()=>cg,CullFaceNone:()=>mf,Curve:()=>Di,CurvePath:()=>Go,CustomBlending:()=>Aa,CustomToneMapping:()=>Bu,CylinderGeometry:()=>ia,Cylindrical:()=>hu,Data3DTexture:()=>Ys,DataArrayTexture:()=>Xs,DataTexture:()=>vi,DataTextureLoader:()=>jh,DataUtils:()=>Ch,DecrementStencilOp:()=>Rg,DecrementWrapStencilOp:()=>Pg,DefaultLoadingManager:()=>Kf,DepthFormat:()=>an,DepthStencilFormat:()=>gn,DepthTexture:()=>Si,DetachedBindMode:()=>Lf,DirectionalLight:()=>pl,DirectionalLightHelper:()=>xu,DiscreteInterpolant:()=>cl,DodecahedronGeometry:()=>No,DoubleSide:()=>qt,DstAlphaFactor:()=>Af,DstColorFactor:()=>Mf,DynamicCopyUsage:()=>Xg,DynamicDrawUsage:()=>mc,DynamicReadUsage:()=>Gg,EdgesGeometry:()=>Oo,EllipseCurve:()=>Js,EqualCompare:()=>Gf,EqualDepth:()=>_o,EqualStencilFunc:()=>Bg,EquirectangularReflectionMapping:()=>wa,EquirectangularRefractionMapping:()=>Ca,Euler:()=>Wi,EventDispatcher:()=>Ri,ExternalTexture:()=>ta,ExtrudeGeometry:()=>Yo,FileLoader:()=>Pi,Float16BufferAttribute:()=>Lh,Float32BufferAttribute:()=>_e,FloatType:()=>ei,Fog:()=>Mo,FogExp2:()=>Ao,FramebufferTexture:()=>Fh,FrontSide:()=>un,Frustum:()=>Mn,FrustumArray:()=>Ro,GLBufferAttribute:()=>ou,GLSL1:()=>qg,GLSL3:()=>Oa,GreaterCompare:()=>Vf,GreaterDepth:()=>Vs,GreaterEqualCompare:()=>fc,GreaterEqualDepth:()=>yo,GreaterEqualStencilFunc:()=>Hg,GreaterStencilFunc:()=>Og,GridHelper:()=>As,Group:()=>sn,HTMLTexture:()=>Gh,HalfFloatType:()=>qi,HemisphereLight:()=>dl,HemisphereLightHelper:()=>gu,IcosahedronGeometry:()=>qo,ImageBitmapLoader:()=>Kh,ImageLoader:()=>Es,ImageUtils:()=>Eo,IncrementStencilOp:()=>Cg,IncrementWrapStencilOp:()=>Dg,InstancedBufferAttribute:()=>Vn,InstancedBufferGeometry:()=>xl,InstancedInterleavedBuffer:()=>au,InstancedMesh:()=>Co,Int16BufferAttribute:()=>Ih,Int32BufferAttribute:()=>Uh,Int8BufferAttribute:()=>Rh,IntType:()=>Dl,InterleavedBuffer:()=>Zs,InterleavedBufferAttribute:()=>fs,Interpolant:()=>Xn,InterpolateBezier:()=>Ah,InterpolateDiscrete:()=>Yr,InterpolateLinear:()=>bo,InterpolateSmooth:()=>ho,InterpolationSamplingMode:()=>Kg,InterpolationSamplingType:()=>Zg,InvertStencilOp:()=>Ig,KeepStencilOp:()=>uo,KeyframeTrack:()=>bi,LOD:()=>ms,LatheGeometry:()=>jo,Layers:()=>qs,LessCompare:()=>zf,LessDepth:()=>xo,LessEqualCompare:()=>dc,LessEqualDepth:()=>Gn,LessEqualStencilFunc:()=>Ng,LessStencilFunc:()=>Lg,Light:()=>hn,LightProbe:()=>gl,LightShadow:()=>sr,Line:()=>_i,Line3:()=>du,LineBasicMaterial:()=>Tt,LineCurve:()=>ra,LineCurve3:()=>zo,LineDashedMaterial:()=>ol,LineLoop:()=>Po,LineSegments:()=>ti,LinearFilter:()=>ft,LinearInterpolant:()=>pa,LinearMipMapLinearFilter:()=>mg,LinearMipMapNearestFilter:()=>pg,LinearMipmapLinearFilter:()=>mn,LinearMipmapNearestFilter:()=>Ra,LinearSRGBColorSpace:()=>hs,LinearToneMapping:()=>Pu,LinearTransfer:()=>jr,Loader:()=>Yt,LoaderUtils:()=>xa,LoadingManager:()=>bs,LoopOnce:()=>Bf,LoopPingPong:()=>Of,LoopRepeat:()=>Nf,MOUSE:()=>Fi,Material:()=>It,MaterialBlending:()=>ug,MaterialLoader:()=>vl,MathUtils:()=>Yu,Matrix2:()=>uu,Matrix3:()=>je,Matrix4:()=>Ce,MaxEquation:()=>Sf,Mesh:()=>Je,MeshBasicMaterial:()=>ci,MeshDepthMaterial:()=>da,MeshDistanceMaterial:()=>fa,MeshLambertMaterial:()=>rl,MeshMatcapMaterial:()=>al,MeshNormalMaterial:()=>sl,MeshPhongMaterial:()=>tr,MeshPhysicalMaterial:()=>il,MeshStandardMaterial:()=>ys,MeshToonMaterial:()=>nl,MinEquation:()=>yf,MirroredRepeatWrapping:()=>Xr,MixOperation:()=>If,MultiplyBlending:()=>Ru,MultiplyOperation:()=>Ta,NearestFilter:()=>Pt,NearestMipMapLinearFilter:()=>fg,NearestMipMapNearestFilter:()=>dg,NearestMipmapLinearFilter:()=>hr,NearestMipmapNearestFilter:()=>Fu,NeutralToneMapping:()=>Ou,NeverCompare:()=>kf,NeverDepth:()=>vo,NeverStencilFunc:()=>Ug,NoBlending:()=>jt,NoColorSpace:()=>ji,NoNormalPacking:()=>Eg,NoToneMapping:()=>Yi,NormalAnimationBlendMode:()=>uc,NormalBlending:()=>dn,NormalGAPacking:()=>Mg,NormalRGPacking:()=>Ag,NotEqualCompare:()=>Wf,NotEqualDepth:()=>So,NotEqualStencilFunc:()=>Fg,NumberKeyframeTrack:()=>ir,Object3D:()=>it,ObjectLoader:()=>Zh,ObjectSpaceNormalMap:()=>Ff,OctahedronGeometry:()=>ha,OneFactor:()=>Ms,OneMinusConstantAlphaFactor:()=>Pf,OneMinusConstantColorFactor:()=>Rf,OneMinusDstAlphaFactor:()=>Cl,OneMinusDstColorFactor:()=>Tf,OneMinusSrcAlphaFactor:()=>Du,OneMinusSrcColorFactor:()=>Ef,OrthographicCamera:()=>Cn,PCFShadowMap:()=>Ea,PCFSoftShadowMap:()=>vf,PMREMGenerator:()=>yc,Path:()=>xs,PerspectiveCamera:()=>Rt,Plane:()=>wi,PlaneGeometry:()=>Ni,PlaneHelper:()=>bu,PointLight:()=>rr,PointLightHelper:()=>mu,Points:()=>yi,PointsMaterial:()=>ln,PolarGridHelper:()=>vu,PolyhedronGeometry:()=>Wn,PositionalAudio:()=>eu,PropertyBinding:()=>yt,PropertyMixer:()=>Al,QuadraticBezierCurve:()=>aa,QuadraticBezierCurve3:()=>oa,Quaternion:()=>Ot,QuaternionKeyframeTrack:()=>nr,QuaternionLinearInterpolant:()=>ul,R11_EAC_Format:()=>Gl,RED_GREEN_RGTC2_Format:()=>Na,RED_RGTC1_Format:()=>lc,REVISION:()=>ba,RG11_EAC_Format:()=>Ba,RGBADepthPacking:()=>yg,RGBAFormat:()=>li,RGBAIntegerFormat:()=>Ll,RGBA_ASTC_10x10_Format:()=>ic,RGBA_ASTC_10x5_Format:()=>$l,RGBA_ASTC_10x6_Format:()=>ec,RGBA_ASTC_10x8_Format:()=>tc,RGBA_ASTC_12x10_Format:()=>nc,RGBA_ASTC_12x12_Format:()=>sc,RGBA_ASTC_4x4_Format:()=>Xl,RGBA_ASTC_5x4_Format:()=>Yl,RGBA_ASTC_5x5_Format:()=>ql,RGBA_ASTC_6x5_Format:()=>jl,RGBA_ASTC_6x6_Format:()=>Zl,RGBA_ASTC_8x5_Format:()=>Kl,RGBA_ASTC_8x6_Format:()=>Ql,RGBA_ASTC_8x8_Format:()=>Jl,RGBA_BPTC_Format:()=>rc,RGBA_ETC2_EAC_Format:()=>zl,RGBA_PVRTC_2BPPV1_Format:()=>Fl,RGBA_PVRTC_4BPPV1_Format:()=>Ol,RGBA_S3TC_DXT1_Format:()=>Ia,RGBA_S3TC_DXT3_Format:()=>Ua,RGBA_S3TC_DXT5_Format:()=>La,RGBDepthPacking:()=>Sg,RGBFormat:()=>Wu,RGBIntegerFormat:()=>gg,RGB_BPTC_SIGNED_Format:()=>ac,RGB_BPTC_UNSIGNED_Format:()=>oc,RGB_ETC1_Format:()=>Hl,RGB_ETC2_Format:()=>kl,RGB_PVRTC_2BPPV1_Format:()=>Nl,RGB_PVRTC_4BPPV1_Format:()=>Bl,RGB_S3TC_DXT1_Format:()=>Pa,RGDepthPacking:()=>bg,RGFormat:()=>Zn,RGIntegerFormat:()=>dr,RawShaderMaterial:()=>ua,Ray:()=>on,Raycaster:()=>lu,RectAreaLight:()=>ml,RedFormat:()=>Ul,RedIntegerFormat:()=>Da,ReinhardToneMapping:()=>Iu,RenderObjectRefreshType:()=>Jg,RenderTarget:()=>Qr,RenderTarget3D:()=>su,RepeatWrapping:()=>Wr,ReplaceStencilOp:()=>wg,ReverseSubtractEquation:()=>_f,RingGeometry:()=>er,SIGNED_R11_EAC_Format:()=>Vl,SIGNED_RED_GREEN_RGTC2_Format:()=>hc,SIGNED_RED_RGTC1_Format:()=>cc,SIGNED_RG11_EAC_Format:()=>Wl,SRGBColorSpace:()=>tt,SRGBTransfer:()=>gt,Scene:()=>xi,ShaderChunk:()=>$e,ShaderLib:()=>vn,ShaderMaterial:()=>ot,ShadowMaterial:()=>tl,Shape:()=>_s,ShapeGeometry:()=>Zo,ShapePath:()=>Au,ShapeUtils:()=>Vi,ShortType:()=>ku,Skeleton:()=>wo,SkeletonHelper:()=>pu,SkinnedMesh:()=>To,Source:()=>Mh,Sphere:()=>Xt,SphereGeometry:()=>cn,Spherical:()=>or,SphericalHarmonics3:()=>va,SplineCurve:()=>la,SpotLight:()=>fl,SpotLightHelper:()=>fu,Sprite:()=>Ks,SpriteMaterial:()=>ps,SrcAlphaFactor:()=>Ma,SrcAlphaSaturateFactor:()=>wf,SrcColorFactor:()=>bf,StaticCopyUsage:()=>Wg,StaticDrawUsage:()=>pc,StaticReadUsage:()=>zg,StereoCamera:()=>Jh,StreamCopyUsage:()=>Yg,StreamDrawUsage:()=>kg,StreamReadUsage:()=>Vg,StringKeyframeTrack:()=>wn,SubtractEquation:()=>xf,SubtractiveBlending:()=>Cu,TOUCH:()=>Xi,TangentSpaceNormalMap:()=>Dn,TetrahedronGeometry:()=>Ko,Texture:()=>Bt,TextureLoader:()=>Oi,TextureSource:()=>Gi,TextureUtils:()=>Mu,Timer:()=>bl,TimestampQuery:()=>jg,TorusGeometry:()=>Qo,TorusKnotGeometry:()=>Jo,Triangle:()=>nn,TriangleFanDrawMode:()=>_g,TriangleStripDrawMode:()=>xg,TrianglesDrawMode:()=>vg,TubeGeometry:()=>$o,UVMapping:()=>Rl,Uint16BufferAttribute:()=>Jr,Uint32BufferAttribute:()=>$r,Uint8BufferAttribute:()=>Dh,Uint8ClampedBufferAttribute:()=>Ph,Uniform:()=>ii,UniformsGroup:()=>ru,UniformsLib:()=>pe,UniformsUtils:()=>gc,UnsignedByteType:()=>Ft,UnsignedInt101111Type:()=>Gu,UnsignedInt248Type:()=>jn,UnsignedInt5999Type:()=>zu,UnsignedIntType:()=>ni,UnsignedShort4444Type:()=>Pl,UnsignedShort5551Type:()=>Il,UnsignedShortType:()=>ur,VSMShadowMap:()=>lr,Vector2:()=>q,Vector3:()=>C,Vector4:()=>ct,VectorKeyframeTrack:()=>ga,VideoFrameTexture:()=>Oh,VideoTexture:()=>Io,WebGL3DRenderTarget:()=>wh,WebGLArrayRenderTarget:()=>Th,WebGLCoordinateSystem:()=>Ci,WebGLCubeRenderTarget:()=>Sc,WebGLRenderTarget:()=>At,WebGLRenderer:()=>bc,WebGLUtils:()=>G0,WebGPUCoordinateSystem:()=>us,WebXRController:()=>js,WireframeGeometry:()=>el,WrapAroundEnding:()=>qr,ZeroCurvatureEnding:()=>ls,ZeroFactor:()=>wl,ZeroSlopeEnding:()=>cs,ZeroStencilOp:()=>Tg,createCanvasElement:()=>Yf,error:()=>Le,getConsoleFunction:()=>t0,log:()=>Kr,setConsoleFunction:()=>e0,warn:()=>fe,warnOnce:()=>An});var ba="186",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mf=0,wu=1,gf=2,cg=3,hg=0,Ea=1,vf=2,lr=3,un=0,Ut=1,qt=2,jt=0,dn=1,Rn=2,Cu=3,Ru=4,Aa=5,ug=6,fn=100,xf=101,_f=102,yf=103,Sf=104,wl=200,Ms=201,bf=202,Ef=203,Ma=204,Du=205,Af=206,Cl=207,Mf=208,Tf=209,wf=210,Cf=211,Rf=212,Df=213,Pf=214,vo=0,Gs=1,xo=2,Gn=3,_o=4,yo=5,Vs=6,So=7,Ta=0,If=1,Uf=2,Yi=0,Pu=1,Iu=2,Uu=3,Lu=4,Bu=5,Nu=6,Ou=7,Eh="attached",Lf="detached",Rl=300,pn=301,qn=302,wa=303,Ca=304,cr=306,Wr=1e3,gi=1001,Xr=1002,Pt=1003,Fu=1004,dg=1004,hr=1005,fg=1005,ft=1006,Ra=1007,pg=1007,mn=1008,mg=1008,Ft=1009,Hu=1010,ku=1011,ur=1012,Dl=1013,ni=1014,ei=1015,qi=1016,Pl=1017,Il=1018,jn=1020,zu=35902,Gu=35899,Vu=1021,Wu=1022,li=1023,an=1026,gn=1027,Ul=1028,Da=1029,Zn=1030,dr=1031,gg=1032,Ll=1033,Pa=33776,Ia=33777,Ua=33778,La=33779,Bl=35840,Nl=35841,Ol=35842,Fl=35843,Hl=36196,kl=37492,zl=37496,Gl=37488,Vl=37489,Ba=37490,Wl=37491,Xl=37808,Yl=37809,ql=37810,jl=37811,Zl=37812,Kl=37813,Ql=37814,Jl=37815,$l=37816,ec=37817,tc=37818,ic=37819,nc=37820,sc=37821,rc=36492,ac=36494,oc=36495,lc=36283,cc=36284,Na=36285,hc=36286,Bf=2200,Nf=2201,Of=2202,Yr=2300,bo=2301,ho=2302,Ah=2303,ls=2400,cs=2401,qr=2402,uc=2500,Xu=2501,vg=0,xg=1,_g=2,Kn=3200,yg=3201,Sg=3202,bg=3203,Dn=0,Ff=1,ji="",tt="srgb",hs="srgb-linear",jr="linear",gt="srgb",Eg="",Ag="rg",Mg="ga",Tg=0,uo=7680,wg=7681,Cg=7682,Rg=7683,Dg=34055,Pg=34056,Ig=5386,Ug=512,Lg=513,Bg=514,Ng=515,Og=516,Fg=517,Hg=518,Hf=519,kf=512,zf=513,Gf=514,dc=515,Vf=516,Wf=517,fc=518,Xf=519,pc=35044,mc=35048,kg=35040,zg=35045,Gg=35049,Vg=35041,Wg=35046,Xg=35050,Yg=35042,qg="100",Oa="300 es",Ci=2e3,us=2001,jg={COMPUTE:"compute",RENDER:"render"},Zg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Kg={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Qg={TEXTURE_COMPARE:"depthTextureCompare"},Jg={NONE:0,SHARED:1,FULL:2};function nx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var sx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Gr(s,e){return new sx[s](e)}function $g(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yf(){let s=Zr("canvas");return s.style.display="block",s}var Jp={},ds=null;function e0(s){ds=s}function t0(){return ds}function Kr(...s){let e="THREE."+s.shift();ds?ds("log",e,...s):console.log(e,...s)}function i0(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function fe(...s){s=i0(s);let e="THREE."+s.shift();if(ds)ds("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Le(...s){s=i0(s);let e="THREE."+s.shift();if(ds)ds("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function An(...s){let e=s.join(" ");e in Jp||(Jp[e]=!0,fe(...s))}function n0(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var s0={[vo]:Gs,[xo]:Vs,[_o]:So,[Gn]:yo,[Gs]:vo,[Vs]:xo,[So]:_o,[yo]:Gn},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$p=1234567,zs=Math.PI/180,Ws=180/Math.PI;function Bi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[s&255]+ri[s>>8&255]+ri[s>>16&255]+ri[s>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function qf(s,e){return(s%e+e)%e}function rx(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function ax(s,e,t){return s!==e?(t-s)/(e-s):0}function fo(s,e,t){return(1-t)*s+t*e}function ox(s,e,t,i){return fo(s,e,1-Math.exp(-t*i))}function lx(s,e=1){return e-Math.abs(qf(s,e*2)-e)}function cx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ux(s,e){return s+Math.floor(Math.random()*(e-s+1))}function dx(s,e){return s+Math.random()*(e-s)}function fx(s){return s*(.5-Math.random())}function px(s){s!==void 0&&($p=s);let e=$p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mx(s){return s*zs}function gx(s){return s*Ws}function vx(s){return s>0&&Number.isInteger(s)&&Ei(2,Math.round(Math.log2(s)))===s}function xx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _x(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yx(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yu={DEG2RAD:zs,RAD2DEG:Ws,generateUUID:Bi,clamp:Xe,euclideanModulo:qf,mapLinear:rx,inverseLerp:ax,lerp:fo,damp:ox,pingpong:lx,smoothstep:cx,smootherstep:hx,randInt:ux,randFloat:dx,randFloatSpread:fx,seededRandom:px,degToRad:mx,radToDeg:gx,isPowerOfTwo:vx,ceilPowerOfTwo:xx,floorPowerOfTwo:_x,setQuaternionFromProperEuler:yx,normalize:Qe,denormalize:mi},$f=class $f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;var q=$f,Ot=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,o=Math.sin(o*_)/b,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+v*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ep=class ep{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(em.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ep.prototype.isVector3=!0;var C=ep,yd=new C,em=new Ot,tp=class tp{constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],v=n[0],m=n[3],g=n[6],_=n[1],b=n[4],x=n[7],A=n[2],E=n[5],T=n[8];return r[0]=a*v+o*_+l*A,r[3]=a*m+o*b+l*E,r[6]=a*g+o*x+l*T,r[1]=c*v+h*_+u*A,r[4]=c*m+h*b+u*E,r[7]=c*g+h*x+u*T,r[2]=d*v+f*_+p*A,r[5]=d*m+f*b+p*E,r[8]=d*g+f*x+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return An("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,t)),this}rotate(e){return An("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,t){return An("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tp.prototype.isMatrix3=!0;var je=tp,Sd=new je,tm=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sx(){let s={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(n.r=Vr(n.r),n.g=Vr(n.g),n.b=Vr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ji?jr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return An("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return An("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[hs]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:tm,fromXYZ:im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:tm,fromXYZ:im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),s}var nt=Sx();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var br,Eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=Zr("canvas")),br.width=e.width,br.height=e.height;let n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bx=0,Gi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(bd(n[a].image)):r.push(bd(n[a]))}else r=bd(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function bd(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Eo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var Mh=class extends Gi{constructor(e=null){An('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},Ex=0,Ed=new C,Bt=class s extends Ri{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=gi,n=gi,r=ft,a=mn,o=li,l=Ft,c=s.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Bi(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){fe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Rl;Bt.DEFAULT_ANISOTROPY=1;var ip=class ip{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,A=(g+1)/2,E=(h+d)/4,T=(u+v)/4,y=(p+m)/4;return b>x&&b>A?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=E/i,r=T/i):x>A?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=E/n,r=y/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=T/r,n=y/r),this.set(i,n,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;var ct=ip,Qr=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},r=new Bt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},At=class extends Qr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xs=class extends Bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Th=class extends At{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Xs(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},Ys=class extends Bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wh=class extends At{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Ys(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},Tu=class Tu{constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,p,v,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Mx)}lookAt(e,t,i){let n=this.elements;return Ui.subVectors(e,t),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),is.crossVectors(i,Ui),is.lengthSq()===0&&(Math.abs(i.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),is.crossVectors(i,Ui)),is.normalize(),Lc.crossVectors(Ui,is),n[0]=is.x,n[4]=Lc.x,n[8]=Ui.x,n[1]=is.y,n[5]=Lc.y,n[9]=Ui.y,n[2]=is.z,n[6]=Lc.z,n[10]=Ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],_=i[3],b=i[7],x=i[11],A=i[15],E=n[0],T=n[4],y=n[8],w=n[12],D=n[1],P=n[5],N=n[9],O=n[13],B=n[2],H=n[6],Z=n[10],W=n[14],re=n[3],Y=n[7],J=n[11],ee=n[15];return r[0]=a*E+o*D+l*B+c*re,r[4]=a*T+o*P+l*H+c*Y,r[8]=a*y+o*N+l*Z+c*J,r[12]=a*w+o*O+l*W+c*ee,r[1]=h*E+u*D+d*B+f*re,r[5]=h*T+u*P+d*H+f*Y,r[9]=h*y+u*N+d*Z+f*J,r[13]=h*w+u*O+d*W+f*ee,r[2]=p*E+v*D+m*B+g*re,r[6]=p*T+v*P+m*H+g*Y,r[10]=p*y+v*N+m*Z+g*J,r[14]=p*w+v*O+m*W+g*ee,r[3]=_*E+b*D+x*B+A*re,r[7]=_*T+b*P+x*H+A*Y,r[11]=_*y+b*N+x*Z+A*J,r[15]=_*w+b*O+x*W+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],_=l*f-c*d,b=o*f-c*u,x=o*d-l*u,A=a*f-c*h,E=a*d-l*h,T=a*u-o*h;return t*(v*_-m*b+g*x)-i*(p*_-m*A+g*E)+n*(p*b-v*A+g*T)-r*(p*x-v*E+m*T)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],_=t*o-i*a,b=t*l-n*a,x=t*c-r*a,A=i*l-n*o,E=i*c-r*o,T=n*c-r*l,y=h*v-u*p,w=h*m-d*p,D=h*g-f*p,P=u*m-d*v,N=u*g-f*v,O=d*g-f*m,B=_*O-b*N+x*P+A*D-E*w+T*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/B;return e[0]=(o*O-l*N+c*P)*H,e[1]=(n*N-i*O-r*P)*H,e[2]=(v*T-m*E+g*A)*H,e[3]=(d*E-u*T-f*A)*H,e[4]=(l*D-a*O-c*w)*H,e[5]=(t*O-n*D+r*w)*H,e[6]=(m*x-p*T-g*b)*H,e[7]=(h*T-d*x+f*b)*H,e[8]=(a*N-o*D+c*y)*H,e[9]=(i*D-t*N-r*y)*H,e[10]=(p*E-v*x+g*_)*H,e[11]=(u*x-h*E-f*_)*H,e[12]=(o*w-a*P-l*y)*H,e[13]=(t*P-i*w+n*y)*H,e[14]=(v*b-p*A-m*_)*H,e[15]=(h*A-u*b+d*_)*H,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,v=a*h,m=a*u,g=o*u,_=l*c,b=l*h,x=l*u,A=i.x,E=i.y,T=i.z;return n[0]=(1-(v+g))*A,n[1]=(f+x)*A,n[2]=(p-b)*A,n[3]=0,n[4]=(f-x)*E,n[5]=(1-(d+g))*E,n[6]=(m+_)*E,n[7]=0,n[8]=(p+b)*T,n[9]=(m-_)*T,n[10]=(1-(d+v))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Er.set(n[0],n[1],n[2]).length(),o=Er.set(n[4],n[5],n[6]).length(),l=Er.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ji.copy(this);let c=1/a,h=1/o,u=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=u,Ji.elements[9]*=u,Ji.elements[10]*=u,t.setFromRotationMatrix(Ji),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=Ci,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Ci)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===us)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Ci,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Ci)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===us)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Tu.prototype.isMatrix4=!0;var Ce=Tu,Er=new C,Ji=new Ce,Ax=new C(0,0,0),Mx=new C(1,1,1),is=new C,Lc=new C,Ui=new C,nm=new Ce,sm=new Ot,Wi=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tx=0,rm=new C,Ar=new Ot,Ln=new Ce,Bc=new C,Ka=new C,wx=new C,Cx=new Ot,am=new C(1,0,0),om=new C(0,1,0),lm=new C(0,0,1),cm={type:"added"},Rx={type:"removed"},Mr={type:"childadded",child:null},Ad={type:"childremoved",child:null},it=class s extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new Wi,i=new Ot,n=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new je}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,t){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bc.copy(e):Bc.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ka,Bc,this.up):Ln.lookAt(Bc,Ka,this.up),this.quaternion.setFromRotationMatrix(Ln),n&&(Ln.extractRotation(n.matrixWorld),Ar.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rx),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,Cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>Uc(Cs({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>Cs({},o)),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};it.DEFAULT_UP=new C(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Md(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=nt.workingColorSpace){if(e=qf(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Md(a,r,e+1/3),this.g=Md(a,r,e),this.b=Md(a,r,e-1/3)}return nt.colorSpaceToWorking(this,n),this}setStyle(e,t=tt){function i(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:fe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let i=r0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return nt.workingToColorSpace(ai.copy(this),e),Math.round(Xe(ai.r*255,0,255))*65536+Math.round(Xe(ai.g*255,0,255))*256+Math.round(Xe(ai.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(ai.copy(this),t);let i=ai.r,n=ai.g,r=ai.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(ai.copy(this),t),e.r=ai.r,e.g=ai.g,e.b=ai.b,e}getStyle(e=tt){nt.workingToColorSpace(ai.copy(this),e);let t=ai.r,i=ai.g,n=ai.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Nc);let i=fo(ns.h,Nc.h,t),n=fo(ns.s,Nc.s,t),r=fo(ns.l,Nc.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ai=new oe;oe.NAMES=r0;var Ao=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Mo=class s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xi=class extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=new C,Bn=new C,Td=new C,Nn=new C,Tr=new C,wr=new C,hm=new C,wd=new C,Cd=new C,Rd=new C,Dd=new ct,Pd=new ct,Id=new ct,nn=class s{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),$i.subVectors(e,t),n.cross($i);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){$i.subVectors(n,t),Bn.subVectors(i,t),Td.subVectors(e,t);let a=$i.dot($i),o=$i.dot(Bn),l=$i.dot(Td),c=Bn.dot(Bn),h=Bn.dot(Td),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Dd.setScalar(0),Pd.setScalar(0),Id.setScalar(0),Dd.fromBufferAttribute(e,t),Pd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Dd,r.x),a.addScaledVector(Pd,r.y),a.addScaledVector(Id,r.z),a}static isFrontFacing(e,t,i,n){return $i.subVectors(i,t),Bn.subVectors(e,t),$i.cross(Bn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),$i.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Tr.subVectors(n,i),wr.subVectors(r,i),wd.subVectors(e,i);let l=Tr.dot(wd),c=wr.dot(wd);if(l<=0&&c<=0)return t.copy(i);Cd.subVectors(e,n);let h=Tr.dot(Cd),u=wr.dot(Cd);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Tr,a);Rd.subVectors(e,r);let f=Tr.dot(Rd),p=wr.dot(Rd);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(wr,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return hm.subVectors(r,n),o=(u-h)/(u-h+(f-p)),t.copy(n).addScaledVector(hm,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(i).addScaledVector(Tr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oc.copy(i.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Fc.subVectors(this.max,Qa),Cr.subVectors(e.a,Qa),Rr.subVectors(e.b,Qa),Dr.subVectors(e.c,Qa),ss.subVectors(Rr,Cr),rs.subVectors(Dr,Rr),Rs.subVectors(Cr,Dr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Rs.z,Rs.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Rs.z,0,-Rs.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Rs.y,Rs.x,0];return!Ud(t,Cr,Rr,Dr,Fc)||(t=[1,0,0,0,1,0,0,0,1],!Ud(t,Cr,Rr,Dr,Fc))?!1:(Hc.crossVectors(ss,rs),t=[Hc.x,Hc.y,Hc.z],Ud(t,Cr,Rr,Dr,Fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},On=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,Oc=new Gt,Cr=new C,Rr=new C,Dr=new C,ss=new C,rs=new C,Rs=new C,Qa=new C,Fc=new C,Hc=new C,Ds=new C;function Ud(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ds.fromArray(s,r);let o=n.x*Math.abs(Ds.x)+n.y*Math.abs(Ds.y)+n.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kn=Px();function Px(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ti(s){Math.abs(s)>65504&&fe("DataUtils.toHalfFloat(): Value out of range."),s=Xe(s,-65504,65504),kn.floatView[0]=s;let e=kn.uint32View[0],t=e>>23&511;return kn.baseTable[t]+((e&8388607)>>kn.shiftTable[t])}function lo(s){let e=s>>10;return kn.uint32View[0]=kn.mantissaTable[kn.offsetTable[e]+(s&1023)]+kn.exponentTable[e],kn.floatView[0]}var Ch=class{static toHalfFloat(e){return Ti(e)}static fromHalfFloat(e){return lo(e)}},Wt=new C,kc=new q,Ix=0,He=class extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Rh=class extends He{constructor(e,t,i){super(new Int8Array(e),t,i)}},Dh=class extends He{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Ph=class extends He{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Ih=class extends He{constructor(e,t,i){super(new Int16Array(e),t,i)}},Jr=class extends He{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Uh=class extends He{constructor(e,t,i){super(new Int32Array(e),t,i)}},$r=class extends He{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Lh=class extends He{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=lo(this.array[e*this.itemSize]);return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=Ti(t),this}getY(e){let t=lo(this.array[e*this.itemSize+1]);return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=Ti(t),this}getZ(e){let t=lo(this.array[e*this.itemSize+2]);return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=Ti(t),this}getW(e){let t=lo(this.array[e*this.itemSize+3]);return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=Ti(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=Ti(t),this.array[e+1]=Ti(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.array[e+0]=Ti(t),this.array[e+1]=Ti(i),this.array[e+2]=Ti(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=Ti(t),this.array[e+1]=Ti(i),this.array[e+2]=Ti(n),this.array[e+3]=Ti(r),this}},_e=class extends He{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ux=new Gt,Ja=new C,Ld=new C,Xt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ux.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);let t=Ja.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ja,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Ld)),this.expandByPoint(Ja.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lx=0,zi=new Ce,Bd=new it,Pr=new C,Li=new Gt,$a=new Gt,$t=new C,Ie=class s extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nx(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Li.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];$a.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Li.min,$a.min),Li.expandByPoint($t),$t.addVectors(Li.max,$a.max),Li.expandByPoint($t)):(Li.expandByPoint($a.min),Li.expandByPoint($a.max))}Li.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),$t.add(Pr)),n=Math.max(n,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new C,l[y]=new C;let c=new C,h=new C,u=new C,d=new q,f=new q,p=new q,v=new C,m=new C;function g(y,w,D){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,D),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,D),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),o[y].add(v),o[w].add(v),o[D].add(v),l[y].add(m),l[w].add(m),l[D].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let D=_[y],P=D.start,N=D.count;for(let O=P,B=P+N;O<B;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let b=new C,x=new C,A=new C,E=new C;function T(y){A.fromBufferAttribute(n,y),E.copy(A);let w=o[y];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(E,w);let P=x.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,P)}for(let y=0,w=_.length;y<w;++y){let D=_[y],P=D.start,N=D.count;for(let O=P,B=P+N;O<B;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new He(d,h,u)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pi=new C,fs=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nd=new C,Bx=new C,Nx=new je,wi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Nd.subVectors(i,t).cross(Bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Nd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nx.getNormalMatrix(e),n=this.coplanarPoint(Nd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ox=0,It=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=dn,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Du,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){fe(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new wi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new q().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ps=class extends It{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir,eo=new C,Ur=new C,Lr=new C,Br=new q,to=new q,a0=new Ce,zc=new C,io=new C,Gc=new C,um=new q,Od=new q,dm=new q,Ks=class extends it{constructor(e=new ps){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new Ie;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zs(t,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new fs(i,3,0,!1)),Ir.setAttribute("uv",new fs(i,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new q(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),a0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Lr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;Vc(zc.set(-.5,-.5,0),Lr,a,Ur,n,r),Vc(io.set(.5,-.5,0),Lr,a,Ur,n,r),Vc(Gc.set(.5,.5,0),Lr,a,Ur,n,r),um.set(0,0),Od.set(1,0),dm.set(1,1);let o=e.ray.intersectTriangle(zc,io,Gc,!1,eo);if(o===null&&(Vc(io.set(-.5,.5,0),Lr,a,Ur,n,r),Od.set(0,1),o=e.ray.intersectTriangle(zc,Gc,io,!1,eo),o===null))return;let l=e.ray.origin.distanceTo(eo);l<e.near||l>e.far||t.push({distance:l,point:eo.clone(),uv:nn.getInterpolation(eo,zc,io,Gc,um,Od,dm,new q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vc(s,e,t,i,n,r){Br.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(to.x=r*Br.x-n*Br.y,to.y=n*Br.x+r*Br.y):to.copy(Br),s.copy(e),s.x+=to.x,s.y+=to.y,s.applyMatrix4(a0)}var Wc=new C,fm=new C,ms=class extends it{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,n=t.length;i<n;i++){let r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let n=this.levels,r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Wc.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo(Wc);this.getObjectForDistance(n).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Wc.setFromMatrixPosition(e.matrixWorld),fm.setFromMatrixPosition(this.matrixWorld);let i=Wc.distanceTo(fm)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),i>=a)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let i=this.levels;for(let n=0,r=i.length;n<r;n++){let a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},Fn=new C,Fd=new C,Xc=new C,Yc=new C,on=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Fd.copy(e).add(t).multiplyScalar(.5),Xc.copy(t).sub(e).normalize(),Yc.copy(this.origin).sub(Fd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xc),o=Yc.dot(this.direction),l=-Yc.dot(Xc),c=Yc.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Fd).addScaledVector(Xc,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);let i=Fn.dot(this.direction),n=Fn.dot(Fn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,v=t.y-a.y,m=t.z-a.z,g=i.x-a.x,_=i.y-a.y,b=i.z-a.z,x=Math.abs(l),A=Math.abs(c),E=Math.abs(h),T,y,w,D,P,N,O,B,H,Z,W,re;if(x>=A&&x>=E?(w=l,N=u,H=p,re=g,l>=0?(T=c,y=h,D=d,P=f,O=v,B=m,Z=_,W=b):(T=h,y=c,D=f,P=d,O=m,B=v,Z=b,W=_)):A>=E?(w=c,N=d,H=v,re=_,c>=0?(T=h,y=l,D=f,P=u,O=m,B=p,Z=b,W=g):(T=l,y=h,D=u,P=f,O=p,B=m,Z=g,W=b)):(w=h,N=f,H=m,re=b,h>=0?(T=l,y=c,D=u,P=d,O=p,B=v,Z=g,W=_):(T=c,y=l,D=d,P=u,O=v,B=p,Z=_,W=g)),w===0)return null;let Y=T/w,J=y/w,ee=1/w,Ne=D-Y*N,Re=P-J*N,mt=O-Y*H,st=B-J*H,ut=Z-Y*re,Q=W-J*re,ie=ut*st-Q*mt,Se=Ne*Q-Re*ut,We=mt*Re-st*Ne;if(n){if(ie<0||Se<0||We<0)return null}else if((ie<0||Se<0||We<0)&&(ie>0||Se>0||We>0))return null;let Me=ie+Se+We;if(Me===0)return null;let Ye=ee*(ie*N+Se*H+We*re);return(Me>0?Ye<0:Ye>0)?null:this.at(Ye/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends It{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pm=new Ce,Ps=new on,qc=new Xt,mm=new C,jc=new C,Zc=new C,Kc=new C,Hd=new C,Qc=new C,gm=new C,Jc=new C,Je=class extends it{constructor(e=new Ie,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Qc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Hd.fromBufferAttribute(u,e),a?Qc.addScaledVector(Hd,h):Qc.addScaledVector(Hd.sub(t),h))}t.add(Qc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(qc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(qc,mm)===null||Ps.origin.distanceToSquared(mm)>Ei(e.far-e.near,2)))&&(pm.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(pm),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=b;x<A;x+=3){let E=o.getX(x),T=o.getX(x+1),y=o.getX(x+2);n=$c(this,g,e,i,c,h,u,E,T,y),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let _=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);n=$c(this,a,e,i,c,h,u,_,b,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=b;x<A;x+=3){let E=x,T=x+1,y=x+2;n=$c(this,g,e,i,c,h,u,E,T,y),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let _=m,b=m+1,x=m+2;n=$c(this,a,e,i,c,h,u,_,b,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Fx(s,e,t,i,n,r,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===un,o),l===null)return null;Jc.copy(o),Jc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Jc);return c<t.near||c>t.far?null:{distance:c,point:Jc.clone(),object:s}}function $c(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,jc),s.getVertexPosition(l,Zc),s.getVertexPosition(c,Kc);let h=Fx(s,e,t,i,jc,Zc,Kc,gm);if(h){let u=new C;nn.getBarycoord(gm,jc,Zc,Kc,u),n&&(h.uv=nn.getInterpolatedAttribute(n,o,l,c,u,new q)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,u,new q)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(jc,Zc,Kc,d.normal),h.face=d,h.barycoord=u}return h}var no=new ct,vm=new ct,xm=new ct,Hx=new ct,_m=new Ce,eh=new C,kd=new Xt,ym=new Ce,zd=new on,To=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eh),this.boundingBox.expandByPoint(eh)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eh),this.boundingSphere.expandByPoint(eh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kd.copy(this.boundingSphere),kd.applyMatrix4(n),e.ray.intersectsSphere(kd)!==!1&&(ym.copy(n).invert(),zd.copy(e.ray).applyMatrix4(ym),!(this.boundingBox!==null&&zd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;vm.fromBufferAttribute(n.attributes.skinIndex,e),xm.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(no.copy(t),t.set(0,0,0,0)):(no.set(...t,1),t.set(0,0,0)),no.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=xm.getComponent(r);if(a!==0){let o=vm.getComponent(r);_m.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Hx.copy(no).applyMatrix4(_m),a)}}return t.isVector4&&(t.w=no.w),t.applyMatrix4(this.bindMatrixInverse)}},ea=class extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}},vi=class extends Bt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Pt,h=Pt,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sm=new Ce,kx=new Ce,wo=class s{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:kx;Sm.multiplyMatrices(o,t[r]),Sm.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new vi(t,e,e,li,ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(fe("Skeleton: No bone found with UUID:",r),a=new ea),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},Vn=class extends He{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Nr=new Ce,bm=new Ce,th=[],Em=new Gt,zx=new Ce,so=new Je,ro=new Xt,Co=class extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,zx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nr),Em.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Em)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nr),ro.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),e.ray.intersectsSphere(ro)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Nr),bm.multiplyMatrices(i,Nr),so.matrixWorld=bm,so.raycast(e,th);for(let a=0,o=th.length;a<o;a++){let l=th[a];l.instanceId=r,l.object=this,t.push(l)}th.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(n*this.count),n,this.count,Ul,ei));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Is=new Xt,Gx=new q(.5,.5),ih=new C,Mn=class{constructor(e=new wi,t=new wi,i=new wi,n=new wi,r=new wi,a=new wi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],_=r[12],b=r[13],x=r[14],A=r[15];if(n[0].setComponents(c-a,f-h,g-p,A-_).normalize(),n[1].setComponents(c+a,f+h,g+p,A+_).normalize(),n[2].setComponents(c+o,f+u,g+v,A+b).normalize(),n[3].setComponents(c-o,f-u,g-v,A-b).normalize(),i)n[4].setComponents(l,d,m,x).normalize(),n[5].setComponents(c-l,f-d,g-m,A-x).normalize();else if(n[4].setComponents(c-l,f-d,g-m,A-x).normalize(),t===Ci)n[5].setComponents(c+l,f+d,g+m,A+x).normalize();else if(t===us)n[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);let t=Gx.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ih.x=n.normal.x>0?e.max.x:e.min.x,ih.y=n.normal.y>0?e.max.y:e.min.y,ih.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ih)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Am=new Ce,Ro=class s{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];Am.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Mn),i[n].setFromProjectionMatrix(Am,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Mn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};function Gd(s,e){return s-e}function Vx(s,e){return s.z-e.z}function Wx(s,e){return e.z-s.z}var nf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Mi=new Ce,Xx=new oe(1,1,1),Yx=new Mn,qx=new Ro,nh=new Gt,Us=new Xt,ao=new C,Mm=new C,jx=new C,Vd=new nf,oi=new Je,sh=[];function Zx(s,e,t=0){let i=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let n=s.count;for(let r=0;r<n;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*i);e.needsUpdate=!0}function Ls(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let i=0;i<t;i++)e[i]=s[i]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var Do=class extends Je{constructor(e,t,i=t*2,n){super(new Ie,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new vi(t,e,e,li,ei);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new vi(t,e,e,Da,ni);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new vi(t,e,e,li,ei);i.colorSpace=nt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),u=new He(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new He(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,Mi),this.getBoundingBoxAt(r,nh).applyMatrix4(Mi),e.union(nh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,Mi),this.getBoundingSphereAt(r,Us).applyMatrix4(Mi),e.union(Us)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Gd),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));let r=this._matricesTexture;Mi.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Xx.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Gd),l=this._availableGeometryIds.shift(),r[l]=n):(l=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(l,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in i.attributes){let u=t.getAttribute(h),d=i.getAttribute(h);Zx(u,d,l);let f=u.itemSize;for(let p=u.count,v=c;p<v;p++){let m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(n){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){let l=n[a],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,v=e-u;for(let m=h;m<h+d;m++)p[m]=p[m]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let p=d[f],{array:v,itemSize:m}=p;v.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){let r=new Gt,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(ao.fromBufferAttribute(o,h))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){let r=new Xt;this.getBoundingBoxAt(e,nh),nh.getCenter(r.center);let a=i.index,o=i.attributes.position,l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let u=c;a&&(u=a.getX(u)),ao.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(ao))}r.radius=Math.sqrt(l),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Gd);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let n=new Int32Array(e),r=new Int32Array(e);Ls(this._multiDrawCounts,n),Ls(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Ls(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Ls(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ls(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ie,this._initializeGeometry(r));let a=this.geometry;r.index&&Ls(r.index.array,a.index.array);for(let o in r.attributes)Ls(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,a=this.geometry;oi.material=this.material,oi.geometry.index=a.index,oi.geometry.attributes=a.attributes,oi.geometry.boundingBox===null&&(oi.geometry.boundingBox=new Gt),oi.geometry.boundingSphere===null&&(oi.geometry.boundingSphere=new Xt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;let c=i[o].geometryIndex,h=n[c];oi.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,oi.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,oi.geometry.boundingBox),this.getBoundingSphereAt(c,oi.geometry.boundingSphere),oi.raycast(e,sh);for(let u=0,d=sh.length;u<d;u++){let f=sh[u];f.object=this,f.batchId=o,t.push(f)}sh.length=0}oi.material=null,oi.geometry.index=null,oi.geometry.attributes={},oi.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>Uc(Cs({},t),{boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>Cs({},t)),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=n.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=n.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,m=i.isArrayCamera?qx:Yx;f&&(i.isArrayCamera?m.setFromArrayCamera(i):(Mi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(Mi,i.coordinateSystem,i.reversedDepth)));let g=0;if(this.sortObjects){Mi.copy(this.matrixWorld).invert(),ao.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Mi),Mm.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Mi);for(let x=0,A=c.length;x<A;x++)if(c[x].visible&&c[x].active){let E=c[x].geometryIndex;this.getMatrixAt(x,Mi),this.getBoundingSphereAt(E,Us).applyMatrix4(Mi);let T=!1;if(f&&(T=!m.intersectsSphere(Us)),!T){let y=d[E],w=jx.subVectors(Us.center,ao).dot(Mm);Vd.push(y.start,y.count,w,x)}}let _=Vd.list,b=this.customSort;b===null?_.sort(r.transparent?Wx:Vx):b.call(this,_,i);for(let x=0,A=_.length;x<A;x++){let E=_[x];h[g]=E.start*o*l,u[g]=E.count*l,v[g]=E.index,g++}Vd.reset()}else for(let _=0,b=c.length;_<b;_++)if(c[_].visible&&c[_].active){let x=c[_].geometryIndex,A=!1;if(f&&(this.getMatrixAt(_,Mi),this.getBoundingSphereAt(x,Us).applyMatrix4(Mi),A=!m.intersectsSphere(Us)),!A){let E=d[x];h[g]=E.start*o*l,u[g]=E.count*l,v[g]=_,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,a){this.onBeforeRender(e,null,n,r,a)}},Tt=class extends It{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bh=new C,Nh=new C,Tm=new Ce,oo=new on,rh=new Xt,Wd=new C,wm=new C,_i=class extends it{constructor(e=new Ie,t=new Tt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Bh.fromBufferAttribute(t,n-1),Nh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Bh.distanceTo(Nh);e.setAttribute("lineDistance",new _e(i,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rh.copy(i.boundingSphere),rh.applyMatrix4(n),rh.radius+=r,e.ray.intersectsSphere(rh)===!1)return;Tm.copy(n).invert(),oo.copy(e.ray).applyMatrix4(Tm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=h.getX(v),_=h.getX(v+1),b=ah(this,e,oo,l,g,_,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=ah(this,e,oo,l,v,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=ah(this,e,oo,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=ah(this,e,oo,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ah(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(Bh.fromBufferAttribute(o,n),Nh.fromBufferAttribute(o,r),t.distanceSqToSegment(Bh,Nh,Wd,wm)>i)return;Wd.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Wd);if(!(c<e.near||c>e.far))return{distance:c,point:wm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Cm=new C,Rm=new C,ti=class extends _i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Cm.fromBufferAttribute(t,n),Rm.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Cm.distanceTo(Rm);e.setAttribute("lineDistance",new _e(i,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends _i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ln=class extends It{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dm=new Ce,sf=new on,oh=new Xt,lh=new C,yi=class extends it{constructor(e=new Ie,t=new ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oh.copy(i.boundingSphere),oh.applyMatrix4(n),oh.radius+=r,e.ray.intersectsSphere(oh)===!1)return;Dm.copy(n).invert(),sf.copy(e.ray).applyMatrix4(Dm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let m=c.getX(p);lh.fromBufferAttribute(u,m),Pm(lh,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)lh.fromBufferAttribute(u,p),Pm(lh,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pm(s,e,t,i,n,r,a){let o=sf.distanceSqToPoint(s);if(o<t){let l=new C;sf.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Io=class extends Bt{constructor(e,t,i,n,r=ft,a=ft,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Oh=class extends Io{constructor(e,t,i,n,r,a,o,l){super({},e,t,i,n,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Fh=class extends Bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}},Qs=class extends Bt{constructor(e,t,i,n,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Hh=class extends Qs{constructor(e,t,i,n,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=gi,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},kh=class extends Qs{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,pn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},gs=class extends Bt{constructor(e=[],t=pn,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zh=class extends Bt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gh=class extends Bt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Si=class extends Bt{constructor(e,t,i=ni,n,r,a,o=Pt,l=Pt,c,h=an,u=1){if(h!==an&&h!==gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Uo=class extends Si{constructor(e,t=ni,i=pn,n,r,a=Pt,o=Pt,l,c=an){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vs=class s extends Ie{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function p(v,m,g,_,b,x,A,E,T,y,w){let D=x/T,P=A/y,N=x/2,O=A/2,B=E/2,H=T+1,Z=y+1,W=0,re=0,Y=new C;for(let J=0;J<Z;J++){let ee=J*P-O;for(let Ne=0;Ne<H;Ne++){let Re=Ne*D-N;Y[v]=Re*_,Y[m]=ee*b,Y[g]=B,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[g]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Ne/T),u.push(1-J/y),W+=1}}for(let J=0;J<y;J++)for(let ee=0;ee<T;ee++){let Ne=d+ee+H*J,Re=d+ee+H*(J+1),mt=d+(ee+1)+H*(J+1),st=d+(ee+1)+H*J;l.push(Ne,Re,st),l.push(Re,mt,st),re+=6}o.addGroup(f,re,w),f+=re,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Lo=class s extends Ie{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,v=n+1,m=new C,g=new C;for(let _=0;_<=p;_++){let b=0,x=0,A=0,E=0;if(_<=i){let w=_/i,D=w*Math.PI/2;x=-h-e*Math.cos(D),A=e*Math.sin(D),E=-e*Math.cos(D),b=w*u}else if(_<=i+r){let w=(_-i)/r;x=-h+w*t,A=e,E=0,b=u+w*d}else{let w=(_-i-r)/i,D=w*Math.PI/2;x=h+e*Math.sin(D),A=e*Math.cos(D),E=e*Math.sin(D),b=u+d+w*u}let T=Math.max(0,Math.min(1,b/f)),y=0;_===0?y=.5/n:_===p&&(y=-.5/n);for(let w=0;w<=n;w++){let D=w/n,P=D*Math.PI*2,N=Math.sin(P),O=Math.cos(P);g.x=-A*O,g.y=x,g.z=A*N,o.push(g.x,g.y,g.z),m.set(-A*O,E,A*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+y,T)}if(_>0){let w=(_-1)*v;for(let D=0;D<n;D++){let P=w+D,N=w+D+1,O=_*v+D,B=_*v+D+1;a.push(P,N,O),a.push(N,B,O)}}}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Bo=class s extends Ie{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ia=class s extends Ie{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=i/2,g=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function _(){let x=new C,A=new C,E=0,T=(t-e)/i;for(let y=0;y<=r;y++){let w=[],D=y/r,P=D*(t-e)+e;for(let N=0;N<=n;N++){let O=N/n,B=O*l+o,H=Math.sin(B),Z=Math.cos(B);A.x=P*H,A.y=-D*i+m,A.z=P*Z,u.push(A.x,A.y,A.z),x.set(H,T,Z).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-D),w.push(p++)}v.push(w)}for(let y=0;y<n;y++)for(let w=0;w<r;w++){let D=v[w][y],P=v[w+1][y],N=v[w+1][y+1],O=v[w][y+1];(e>0||w!==0)&&(h.push(D,P,O),E+=3),(t>0||w!==r-1)&&(h.push(P,N,O),E+=3)}c.addGroup(g,E,0),g+=E}function b(x){let A=p,E=new q,T=new C,y=0,w=x===!0?e:t,D=x===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*D,0),d.push(0,D,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=n;N++){let B=N/n*l+o,H=Math.cos(B),Z=Math.sin(B);T.x=w*Z,T.y=m*D,T.z=w*H,u.push(T.x,T.y,T.z),d.push(0,D,0),E.x=H*.5+.5,E.y=Z*.5*D+.5,f.push(E.x,E.y),p++}for(let N=0;N<n;N++){let O=A+N,B=P+N;x===!0?h.push(B,B+1,O):h.push(B+1,B,O),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},na=class s extends ia{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wn=class s extends Ie{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new C,x=new C,A=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],x),f(t[E+2],A),l(b,x,A,_)}function l(_,b,x,A){let E=A+1,T=[];for(let y=0;y<=E;y++){T[y]=[];let w=_.clone().lerp(x,y/E),D=b.clone().lerp(x,y/E),P=E-y;for(let N=0;N<=P;N++)N===0&&y===E?T[y][N]=w:T[y][N]=w.clone().lerp(D,N/P)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){let D=Math.floor(w/2);w%2===0?(d(T[y][D+1]),d(T[y+1][D]),d(T[y][D])):(d(T[y][D+1]),d(T[y+1][D+1]),d(T[y+1][D]))}}function c(_){let b=new C;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(_),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let _=new C;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let x=m(_)/2/Math.PI+.5,A=g(_)/Math.PI+.5;a.push(x,1-A)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){let b=a[_+0],x=a[_+2],A=a[_+4],E=Math.max(b,x,A),T=Math.min(b,x,A);E>.9&&T<.1&&(b<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let x=_*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function p(){let _=new C,b=new C,x=new C,A=new C,E=new q,T=new q,y=new q;for(let w=0,D=0;w<r.length;w+=9,D+=6){_.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),E.set(a[D+0],a[D+1]),T.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),A.copy(_).add(b).add(x).divideScalar(3);let P=m(A);v(E,D+0,_,P),v(T,D+2,b,P),v(y,D+4,x,P)}}function v(_,b,x,A){A<0&&_.x===1&&(a[b]=_.x-1),x.x===0&&x.z===0&&(a[b]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},No=class s extends Wn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ch=new C,hh=new C,Xd=new C,uh=new nn,Oo=class extends Ie{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(zs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:v,b:m,c:g}=uh;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),uh.getNormal(Xd),u[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let b=(_+1)%3,x=u[_],A=u[b],E=uh[h[_]],T=uh[h[b]],y=`${x}_${A}`,w=`${A}_${x}`;w in d&&d[w]?(Xd.dot(d[w].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(T.x,T.y,T.z)),d[w]=null):y in d||(d[y]={index0:c[_],index1:c[b],normal:Xd.clone()})}}for(let p in d)if(d[p]){let{index0:v,index1:m}=d[p];ch.fromBufferAttribute(o,v),hh.fromBufferAttribute(o,m),f.push(ch.x,ch.y,ch.z),f.push(hh.x,hh.y,hh.z)}this.setAttribute("position",new _e(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new q:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,n=[],r=[],a=[],o=new C,l=new Ce;for(let f=0;f<=e;f++){let p=f/e;n[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Xe(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Js=class extends Di{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new q){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fo=class extends Js{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jf(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+i*o}}}var Im=new C,Um=new C,Yd=new jf,qd=new jf,jd=new jf,Ho=class extends Di{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Um.subVectors(n[0],n[1]).add(n[0]),c=Um);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Im.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Im),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Yd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,m),qd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,m),jd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Yd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),jd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Yd.calc(l),qd.calc(l),jd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lm(s,e,t,i,n){let r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function Kx(s,e){let t=1-s;return t*t*e}function Qx(s,e){return 2*(1-s)*s*e}function Jx(s,e){return s*s*e}function po(s,e,t,i){return Kx(s,e)+Qx(s,t)+Jx(s,i)}function $x(s,e){let t=1-s;return t*t*t*e}function e_(s,e){let t=1-s;return 3*t*t*s*e}function t_(s,e){return 3*(1-s)*s*s*e}function i_(s,e){return s*s*s*e}function mo(s,e,t,i,n){return $x(s,e)+e_(s,t)+t_(s,i)+i_(s,n)}var sa=class extends Di{constructor(e=new q,t=new q,i=new q,n=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new q){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(mo(e,n.x,r.x,a.x,o.x),mo(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends Di{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(mo(e,n.x,r.x,a.x,o.x),mo(e,n.y,r.y,a.y,o.y),mo(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Di{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Di{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Di{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(po(e,n.x,r.x,a.x),po(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Di{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(po(e,n.x,r.x,a.x),po(e,n.y,r.y,a.y),po(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new q){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Lm(o,l.x,c.x,h.x,u.x),Lm(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this}},Vh=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Ho,CubicBezierCurve:sa,CubicBezierCurve3:ko,EllipseCurve:Js,LineCurve:ra,LineCurve3:zo,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oa,SplineCurve:la}),Go=class extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Vh[n.type]().fromJSON(n))}return this}},xs=class extends Go{constructor(e){super(),this.type="Path",this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ra(this.currentPoint.clone(),new q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new aa(this.currentPoint.clone(),new q(e,t),new q(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new sa(this.currentPoint.clone(),new q(e,t),new q(i,n),new q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new la(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let c=new Js(e,t,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_s=class extends xs{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new xs().fromJSON(n))}return this}};function n_(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=o0(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=l_(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let d=t;d<n;d+=t){let f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Vo(r,a,t,o,l,c,0),a}function o0(s,e,t,i,n){let r;if(n===__(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=Bm(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Bm(a/i|0,s[a],s[a+1],r);return r&&ca(r,r.next)&&(Xo(r),r=r.next),r}function $s(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(ca(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Vo(s,e,t,i,n,r,a){if(!s)return;!a&&r&&f_(s,i,n,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?r_(s,i,n,r):s_(s)){e.push(l.i,s.i,c.i),Xo(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=a_($s(s),e),Vo(s,e,t,i,n,r,2)):a===2&&o_(s,e,t,i,n,r):Vo($s(s),e,t,i,n,r,1);break}}}function s_(s){let e=s.prev,t=s,i=s.next;if(Nt(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,r,a),u=Math.min(o,l,c),d=Math.max(n,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&co(n,o,r,l,a,c,p.x,p.y)&&Nt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function r_(s,e,t,i){let n=s.prev,r=s,a=s.next;if(Nt(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),g=rf(f,p,e,t,i),_=rf(v,m,e,t,i),b=s.prevZ,x=s.nextZ;for(;b&&b.z>=g&&x&&x.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&co(o,h,l,u,c,d,b.x,b.y)&&Nt(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&co(o,h,l,u,c,d,x.x,x.y)&&Nt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&co(o,h,l,u,c,d,b.x,b.y)&&Nt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&co(o,h,l,u,c,d,x.x,x.y)&&Nt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a_(s,e){let t=s;do{let i=t.prev,n=t.next.next;!ca(i,n)&&c0(i,t,t.next,n)&&Wo(i,n)&&Wo(n,i)&&(e.push(i.i,t.i,n.i),Xo(t),Xo(t.next),t=s=n),t=t.next}while(t!==s);return $s(t)}function o_(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&g_(a,o)){let l=h0(a,o);a=$s(a,a.next),l=$s(l,l.next),Vo(a,e,t,i,n,r,0),Vo(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function l_(s,e,t,i){let n=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=o0(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(m_(c))}n.sort(c_);for(let r=0;r<n.length;r++)t=h_(n[r],t);return t}function c_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function h_(s,e){let t=u_(s,e);if(!t)return e;let i=h0(t,s);return $s(i,i.next),$s(t,t.next)}function u_(s,e){let t=e,i=s.x,n=s.y,r=-1/0,a;if(ca(s,t))return t;do{if(ca(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&l0(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){let u=Math.abs(n-t.y)/(i-t.x);Wo(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&d_(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function d_(s,e){return Nt(s.prev,s,e.prev)<0&&Nt(e.next,s,s.next)<0}function f_(s,e,t,i){let n=s;do n.z===0&&(n.z=rf(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,p_(n)}function p_(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,t*=2}while(e>1);return s}function rf(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function m_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function l0(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function co(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&l0(s,e,t,i,n,r,a,o)}function g_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!v_(s,e)&&(Wo(s,e)&&Wo(e,s)&&x_(s,e)&&(Nt(s.prev,s,e.prev)||Nt(s,e.prev,e))||ca(s,e)&&Nt(s.prev,s,s.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ca(s,e){return s.x===e.x&&s.y===e.y}function c0(s,e,t,i){let n=fh(Nt(s,e,t)),r=fh(Nt(s,e,i)),a=fh(Nt(t,i,s)),o=fh(Nt(t,i,e));return!!(n!==r&&a!==o||n===0&&dh(s,t,e)||r===0&&dh(s,i,e)||a===0&&dh(t,s,i)||o===0&&dh(t,e,i))}function dh(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function fh(s){return s>0?1:s<0?-1:0}function v_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&c0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Wo(s,e){return Nt(s.prev,s,s.next)<0?Nt(s,e,s.next)>=0&&Nt(s,s.prev,e)>=0:Nt(s,e,s.prev)<0||Nt(s,s.next,e)<0}function x_(s,e){let t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function h0(s,e){let t=af(s.i,s.x,s.y),i=af(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Bm(s,e,t,i){let n=af(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Xo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function af(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function __(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var of=class{static triangulate(e,t,i=2){return n_(e,t,i)}},Vi=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Nm(e),Om(i,e);let a=e.length;t.forEach(Nm);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Om(i,t[l]);let o=of.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nm(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Om(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Yo=class s extends Ie{constructor(e=new _s([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _e(n,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:y_,b,x=!1,A,E,T,y;if(g){b=g.getSpacedPoints(h),x=!0,d=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,ne),E=new C,T=new C,y=new C}d||(m=0,f=0,p=0,v=0);let w=o.extractPoints(c),D=w.shape,P=w.holes;if(!Vi.isClockWise(D)){D=D.reverse();for(let ne=0,ae=P.length;ne<ae;ne++){let le=P[ne];Vi.isClockWise(le)&&(P[ne]=le.reverse())}}function O(ne){let le=10000000000000001e-36,ce=ne[0];for(let de=1;de<=ne.length;de++){let Ge=de%ne.length,ze=ne[Ge],qe=ze.x-ce.x,Ze=ze.y-ce.y,I=qe*qe+Ze*Ze,vt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ce.x),Math.abs(ce.y)),rt=le*vt*vt;if(I<=rt){ne.splice(Ge,1),de--;continue}ce=ze}}O(D),P.forEach(O);let B=P.length,H=D;for(let ne=0;ne<B;ne++){let ae=P[ne];D=D.concat(ae)}function Z(ne,ae,le){return ae||Le("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ae,le)}let W=D.length;function re(ne,ae,le){let ce,de,Ge,ze=ne.x-ae.x,qe=ne.y-ae.y,Ze=le.x-ne.x,I=le.y-ne.y,vt=ze*ze+qe*qe,rt=ze*I-qe*Ze;if(Math.abs(rt)>Number.EPSILON){let R=Math.sqrt(vt),S=Math.sqrt(Ze*Ze+I*I),F=ae.x-qe/R,G=ae.y+ze/R,j=le.x-I/S,he=le.y+Ze/S,ue=((j-F)*I-(he-G)*Ze)/(ze*I-qe*Ze);ce=F+ze*ue-ne.x,de=G+qe*ue-ne.y;let K=ce*ce+de*de;if(K<=2)return new q(ce,de);Ge=Math.sqrt(K/2)}else{let R=!1;ze>Number.EPSILON?Ze>Number.EPSILON&&(R=!0):ze<-Number.EPSILON?Ze<-Number.EPSILON&&(R=!0):Math.sign(qe)===Math.sign(I)&&(R=!0),R?(ce=-qe,de=ze,Ge=Math.sqrt(vt)):(ce=ze,de=qe,Ge=Math.sqrt(vt/2))}return new q(ce/Ge,de/Ge)}let Y=[];for(let ne=0,ae=H.length,le=ae-1,ce=ne+1;ne<ae;ne++,le++,ce++)le===ae&&(le=0),ce===ae&&(ce=0),Y[ne]=re(H[ne],H[le],H[ce]);let J=[],ee,Ne=Y.concat();for(let ne=0,ae=B;ne<ae;ne++){let le=P[ne];ee=[];for(let ce=0,de=le.length,Ge=de-1,ze=ce+1;ce<de;ce++,Ge++,ze++)Ge===de&&(Ge=0),ze===de&&(ze=0),ee[ce]=re(le[ce],le[Ge],le[ze]);J.push(ee),Ne=Ne.concat(ee)}let Re;if(m===0)Re=Vi.triangulateShape(H,P);else{let ne=[],ae=[];for(let le=0;le<m;le++){let ce=le/m,de=f*Math.cos(ce*Math.PI/2),Ge=p*Math.sin(ce*Math.PI/2)+v;for(let ze=0,qe=H.length;ze<qe;ze++){let Ze=Z(H[ze],Y[ze],Ge);Se(Ze.x,Ze.y,-de),ce===0&&ne.push(Ze)}for(let ze=0,qe=B;ze<qe;ze++){let Ze=P[ze];ee=J[ze];let I=[];for(let vt=0,rt=Ze.length;vt<rt;vt++){let R=Z(Ze[vt],ee[vt],Ge);Se(R.x,R.y,-de),ce===0&&I.push(R)}ce===0&&ae.push(I)}}Re=Vi.triangulateShape(ne,ae)}let mt=Re.length,st=p+v;for(let ne=0;ne<W;ne++){let ae=d?Z(D[ne],Ne[ne],st):D[ne];x?(T.copy(A.normals[0]).multiplyScalar(ae.x),E.copy(A.binormals[0]).multiplyScalar(ae.y),y.copy(b[0]).add(T).add(E),Se(y.x,y.y,y.z)):Se(ae.x,ae.y,0)}for(let ne=1;ne<=h;ne++)for(let ae=0;ae<W;ae++){let le=d?Z(D[ae],Ne[ae],st):D[ae];x?(T.copy(A.normals[ne]).multiplyScalar(le.x),E.copy(A.binormals[ne]).multiplyScalar(le.y),y.copy(b[ne]).add(T).add(E),Se(y.x,y.y,y.z)):Se(le.x,le.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let ae=ne/m,le=f*Math.cos(ae*Math.PI/2),ce=p*Math.sin(ae*Math.PI/2)+v;for(let de=0,Ge=H.length;de<Ge;de++){let ze=Z(H[de],Y[de],ce);Se(ze.x,ze.y,u+le)}for(let de=0,Ge=P.length;de<Ge;de++){let ze=P[de];ee=J[de];for(let qe=0,Ze=ze.length;qe<Ze;qe++){let I=Z(ze[qe],ee[qe],ce);x?Se(I.x,I.y+b[h-1].y,b[h-1].x+le):Se(I.x,I.y,u+le)}}}ut(),Q();function ut(){let ne=n.length/3;if(d){let ae=0,le=W*ae;for(let ce=0;ce<mt;ce++){let de=Re[ce];We(de[2]+le,de[1]+le,de[0]+le)}ae=h+m*2,le=W*ae;for(let ce=0;ce<mt;ce++){let de=Re[ce];We(de[0]+le,de[1]+le,de[2]+le)}}else{for(let ae=0;ae<mt;ae++){let le=Re[ae];We(le[2],le[1],le[0])}for(let ae=0;ae<mt;ae++){let le=Re[ae];We(le[0]+W*h,le[1]+W*h,le[2]+W*h)}}i.addGroup(ne,n.length/3-ne,0)}function Q(){let ne=n.length/3,ae=0;ie(H,ae),ae+=H.length;for(let le=0,ce=P.length;le<ce;le++){let de=P[le];ie(de,ae),ae+=de.length}i.addGroup(ne,n.length/3-ne,1)}function ie(ne,ae){let le=ne.length;for(;--le>=0;){let ce=le,de=le-1;de<0&&(de=ne.length-1);for(let Ge=0,ze=h+m*2;Ge<ze;Ge++){let qe=W*Ge,Ze=W*(Ge+1),I=ae+ce+qe,vt=ae+de+qe,rt=ae+de+Ze,R=ae+ce+Ze;Me(I,vt,rt,R)}}}function Se(ne,ae,le){l.push(ne),l.push(ae),l.push(le)}function We(ne,ae,le){Ye(ne),Ye(ae),Ye(le);let ce=n.length/3,de=_.generateTopUV(i,n,ce-3,ce-2,ce-1);St(de[0]),St(de[1]),St(de[2])}function Me(ne,ae,le,ce){Ye(ne),Ye(ae),Ye(ce),Ye(ae),Ye(le),Ye(ce);let de=n.length/3,Ge=_.generateSideWallUV(i,n,de-6,de-3,de-2,de-1);St(Ge[0]),St(Ge[1]),St(Ge[3]),St(Ge[1]),St(Ge[2]),St(Ge[3])}function Ye(ne){n.push(l[ne*3+0]),n.push(l[ne*3+1]),n.push(l[ne*3+2])}function St(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return S_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Vh[n.type]().fromJSON(n)),new s(i,e.options)}},y_={generateTopUV:function(s,e,t,i,n){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new q(r,a),new q(o,l),new q(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],p=e[n*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new q(a,1-l),new q(c,1-u),new q(d,1-p),new q(v,1-g)]:[new q(o,1-l),new q(h,1-u),new q(f,1-p),new q(m,1-g)]}};function S_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qo=class s extends Wn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},jo=class s extends Ie{constructor(e=[new q(0,-.5),new q(.5,0),new q(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Xe(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new q,f=new C,p=new C,v=new C,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){let b=i+_*h*n,x=Math.sin(b),A=Math.cos(b);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*A,a.push(u.x,u.y,u.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);let T=l[3*E+0]*x,y=l[3*E+1],w=l[3*E+0]*A;c.push(T,y,w)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let x=b+_*e.length,A=x,E=x+e.length,T=x+e.length+1,y=x+1;r.push(A,E,y),r.push(T,y,E)}this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ha=class s extends Wn{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ni=class s extends Ie{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let _=g*d-a;for(let b=0;b<c;b++){let x=b*u-r;p.push(x,-_,0),v.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let b=_+c*g,x=_+c*(g+1),A=_+1+c*(g+1),E=_+1+c*g;f.push(b,x,E),f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},er=class s extends Ie{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new C,p=new q;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){let g=r+m/i*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<n;v++){let m=v*(i+1);for(let g=0;g<i;g++){let _=g+m,b=_,x=_+i+1,A=_+i+2,E=_+1;o.push(b,x,E),o.push(x,A,E)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Zo=class s extends Ie{constructor(e=new _s([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new _e(n,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(a,2));function c(h){let u=n.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Vi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Vi.isClockWise(_)===!0&&(p[m]=_.reverse())}let v=Vi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){let _=f[m];n.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=v.length;m<g;m++){let _=v[m],b=_[0]+u,x=_[1]+u,A=_[2]+u;i.push(b,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return b_(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}};function b_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){let n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}var cn=class s extends Ie{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){let _=[],b=g/i,x=a+b*o,A=e*Math.cos(x),E=Math.sqrt(e*e-A*A),T=0;g===0&&a===0?T=.5/t:g===i&&l===Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){let w=y/t,D=n+w*r;u.x=-E*Math.cos(D),u.y=A,u.z=E*Math.sin(D),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+T,1-b),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let b=h[g][_+1],x=h[g][_],A=h[g+1][_],E=h[g+1][_+1];(g!==0||a>0)&&f.push(b,x,E),(g!==i-1||l<Math.PI)&&f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ko=class s extends Wn{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Qo=class s extends Ie{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new C,f=new C,p=new C;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let g=0;g<=n;g++){let _=g/n*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/n),u.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=n;m++){let g=(n+1)*v+m-1,_=(n+1)*(v-1)+m-1,b=(n+1)*(v-1)+m,x=(n+1)*v+m;l.push(g,_,x),l.push(_,b,x)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Jo=class s extends Ie{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new C,d=new C,f=new C,p=new C,v=new C,m=new C,g=new C;for(let b=0;b<=i;++b){let x=b/i*r*Math.PI*2;_(x,r,a,e,f),_(x+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let A=0;A<=n;++A){let E=A/n*Math.PI*2,T=-t*Math.cos(E),y=t*Math.sin(E);u.x=f.x+(T*g.x+y*v.x),u.y=f.y+(T*g.y+y*v.y),u.z=f.z+(T*g.z+y*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(b/i),h.push(A/n)}}for(let b=1;b<=i;b++)for(let x=1;x<=n;x++){let A=(n+1)*(b-1)+(x-1),E=(n+1)*b+(x-1),T=(n+1)*b+x,y=(n+1)*(b-1)+x;o.push(A,E,y),o.push(E,T,y)}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2));function _(b,x,A,E,T){let y=Math.cos(b),w=Math.sin(b),D=A/x*b,P=Math.cos(D);T.x=E*(2+P)*.5*y,T.y=E*(2+P)*w*.5,T.z=E*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},$o=class s extends Ie{constructor(e=new oa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new q,h=new C,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function v(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),g()}function m(b){h=e.getPointAt(b/t,h);let x=a.normals[b],A=a.binormals[b];for(let E=0;E<=n;E++){let T=E/n*Math.PI*2,y=Math.sin(T),w=-Math.cos(T);l.x=w*x.x+y*A.x,l.y=w*x.y+y*A.y,l.z=w*x.z+y*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let x=1;x<=n;x++){let A=(n+1)*(b-1)+(x-1),E=(n+1)*b+(x-1),T=(n+1)*b+x,y=(n+1)*(b-1)+x;p.push(A,E,y),p.push(E,T,y)}}function _(){for(let b=0;b<=t;b++)for(let x=0;x<=n;x++)c.x=b/t,c.y=x/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Vh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},el=class extends Ie{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new C,r=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,v=d+f;p<v;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),_=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,g),r.fromBufferAttribute(a,_),Fm(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Fm(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new _e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fm(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}var Hm=Object.freeze({__proto__:null,BoxGeometry:vs,CapsuleGeometry:Lo,CircleGeometry:Bo,ConeGeometry:na,CylinderGeometry:ia,DodecahedronGeometry:No,EdgesGeometry:Oo,ExtrudeGeometry:Yo,IcosahedronGeometry:qo,LatheGeometry:jo,OctahedronGeometry:ha,PlaneGeometry:Ni,PolyhedronGeometry:Wn,RingGeometry:er,ShapeGeometry:Zo,SphereGeometry:cn,TetrahedronGeometry:Ko,TorusGeometry:Qo,TorusKnotGeometry:Jo,TubeGeometry:$o,WireframeGeometry:el}),tl=class extends It{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function fr(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(km(n))n.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(km(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function hi(s){let e={};for(let t=0;t<s.length;t++){let i=fr(s[t]);for(let n in i)e[n]=i[n]}return e}function km(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function E_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var gc={clone:fr,merge:hi},A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ot=class extends It{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=E_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new oe().setHex(n.value);break;case"v2":this.uniforms[i].value=new q().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(n.value);break;case"m3":this.uniforms[i].value=new je().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ua=class extends ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ys=class extends It{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},il=class extends ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},tr=class extends It{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nl=class extends It{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sl=class extends It{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},rl=class extends It{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},da=class extends It{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fa=class extends It{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},al=class extends It{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},ol=class extends Tt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function tn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function go(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function u0(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function lf(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function d0(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}function T_(s,e,t,i,n=30){let r=s.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*n;if(!(p<t||p>=i)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=tn(u,c.times.constructor),c.values=tn(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function w_(s,e=0,t=s,i=30){i<=0&&(i=30);let n=t.tracks.length,r=e/i;for(let a=0;a<n;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=o.times.length-1,v;if(r<=o.times[0]){let g=h,_=u-h;v=o.values.slice(g,_)}else if(r>=o.times[p]){let g=p*u+h,_=g+u-h;v=o.values.slice(g,_)}else{let g=o.createInterpolant(),_=h,b=u-h;g.evaluate(r),v=g.resultBuffer.slice(_,b)}l==="quaternion"&&new Ot().fromArray(v).normalize().conjugate().toArray(v);let m=c.times.length;for(let g=0;g<m;++g){let _=g*f+d;if(l==="quaternion")Ot.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{let b=f-d*2;for(let x=0;x<b;++x)c.values[_+x]-=v[x]}}}return s.blendMode=Xu,s}var Wh=class{static convertArray(e,t){return tn(e,t)}static isTypedArray(e){return $g(e)}static hasTangents(e){return go(e)}static getKeyframeOrder(e){return u0(e)}static sortedArray(e,t,i){return lf(e,t,i)}static flattenJSON(e,t,i,n){d0(e,t,i,n)}static subclip(e,t,i,n,r=30){return T_(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return w_(e,t,i,n)}},Xn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends Xn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ls,endingEnd:ls}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case cs:r=e,o=2*t-i;break;case qr:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cs:a=e,l=2*i-t;break;case qr:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*v+.5*p,x=f*m-f*v;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+_*a[c+A]+b*a[l+A]+x*a[u+A];return r}},pa=class extends Xn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},cl=class extends Xn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},hl=class extends Xn{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(n-t),v=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let v=a[c+p],m=a[l+p],g=f*d+p*2,_=u[g],b=u[g+1],x=e*d+p*2,A=h[x],E=h[x+1],T=R_(i,t,_,A,n);r[p]=f0(T,v,b,E,m)}return r}};function f0(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function C_(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function R_(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=f0(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=C_(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tn(t,this.TimeBufferType),this.values=tn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:tn(e.times,Array),values:tn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),go(e.settings)&&(i.settings={inTangents:tn(e.settings.inTangents,Array),outTangents:tn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case bo:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case Ah:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;go(this.settings)&&(zm(this.settings.inTangents,e),zm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&$g(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,go(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function zm(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=bo;var Tn=class extends bi{constructor(e,t,i){super(e,t,i)}};Tn.prototype.ValueTypeName="bool";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=Yr;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};ma.prototype.ValueTypeName="color";var ir=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};ir.prototype.ValueTypeName="number";var ul=class extends Xn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},nr=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends bi{constructor(e,t,i){super(e,t,i)}};wn.prototype.ValueTypeName="string";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=Yr;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};ga.prototype.ValueTypeName="vector";var Ss=class{constructor(e="",t=-1,i=[],n=uc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(P_(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(bi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=u0(l);l=lf(l,1,h),c=lf(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ir(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function D_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return ga;case"color":return ma;case"quaternion":return nr;case"bool":case"boolean":return Tn;case"string":return wn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function P_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=D_(s.type);if(s.times===void 0){let i=[],n=[];d0(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),go(s.settings)&&(t.settings={inTangents:tn(s.settings.inTangents,Float32Array),outTangents:tn(s.settings.outTangents,Float32Array)}),t}var rn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Gm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Gm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Gm(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}var bs=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kf=new bs,Yt=class{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hn={},cf=class extends Error{constructor(e,t){super(e),this.response=t}},Pi=class extends Yt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=rn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:i,onError:n});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Hn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:b,value:x})=>{if(b)g.close();else{v+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,T=h.length;E<T;E++){let y=h[E];y.onProgress&&y.onProgress(A)}g.enqueue(x),_()}},b=>{g.error(b)})}}});return new Response(m)}else throw new cf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{rn.add(`file:${e}`,c);let h=Hn[e];delete Hn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Hn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xh=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=this,a=new Pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):Le(l),r.manager.itemError(e)}},i,n)}parse(e){let t=[];for(let i=0;i<e.length;i++){let n=Ss.parse(e[i]);t.push(n)}return t}},Yh=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=this,a=[],o=new Qs,l=new Pi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){let f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=ft),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=ft),o.format=d.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}},Or=new WeakMap,Es=class extends Yt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Or.get(a);u===void 0&&(u=[],Or.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=Zr("img");function l(){h(),t&&t(this);let u=Or.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Or.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),rn.remove(`image:${e}`);let d=Or.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),rn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},qh=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=new gs;r.colorSpace=tt;let a=new Es(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}},jh=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=this,a=new vi,o=new Pi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){n!==void 0?n(h):Le(h);return}r._applyTexData(a,c),t&&t(a,c)},i,n),a}createDataTexture(e){let t=new vi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:gi,e.wrapT=t.wrapT!==void 0?t.wrapT:gi,e.magFilter=t.magFilter!==void 0?t.magFilter:ft,e.minFilter=t.minFilter!==void 0?t.minFilter:ft,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=mn),t.mipmapCount===1&&(e.minFilter=ft),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Oi=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=new Bt,a=new Es(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},hn=class extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},dl=class extends hn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zd=new Ce,Vm=new C,Wm=new C,sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mn,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vm),Wm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Zd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=new C,mh=new Ot,En=new C,Yn=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ph,mh,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ph,mh,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ph,mh,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ph,mh,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new C,Xm=new q,Ym=new q,Rt=class extends Yn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,Ym),t.subVectors(Ym,Xm)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hf=class extends sr{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ws*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fl=class extends hn{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new hf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uf=class extends sr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},rr=class extends hn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Cn=class extends Yn{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},df=class extends sr{constructor(){super(new Cn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pl=class extends hn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ar=class extends hn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ml=class extends hn{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},va=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(i*r)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){let i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*i*r),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){let i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}},gl=class extends hn{constructor(e=new va,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},qm={},vl=class s extends Yt{constructor(e){super(e),this.textures={}}load(e,t,i,n){let r=this,a=new Pi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):Le(l),r.manager.itemError(e)}},i,n)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return s.createMaterialFromType(e)}static createMaterialFromType(e){let i=Cs({ShadowMaterial:tl,SpriteMaterial:ps,RawShaderMaterial:ua,ShaderMaterial:ot,PointsMaterial:ln,MeshPhysicalMaterial:il,MeshStandardMaterial:ys,MeshPhongMaterial:tr,MeshToonMaterial:nl,MeshNormalMaterial:sl,MeshLambertMaterial:rl,MeshDepthMaterial:da,MeshDistanceMaterial:fa,MeshBasicMaterial:ci,MeshMatcapMaterial:al,LineDashedMaterial:ol,LineBasicMaterial:Tt,Material:It},qm)[e],n;return i===void 0?(An(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),n=new It):n=new i,n}static registerMaterial(e,t){qm[e]=t}},xa=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xl=class extends Ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},_l=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=this,a=new Pi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):Le(l),r.manager.itemError(e)}},i,n)}parse(e){let t={},i={};function n(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),_=Gr(m.type,g),b=new Zs(_,m.stride);return b.uuid=m.uuid,m.usage!==void 0&&b.setUsage(m.usage),t[p]=b,b}function r(f,p){if(i[p]!==void 0)return i[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return i[p]=g,g}let a=e.isInstancedBufferGeometry?new xl:new Ie,o=e.data.index;if(o!==void 0){let f=Gr(o.type,o.array);a.setIndex(new He(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],v;if(p.isInterleavedBufferAttribute){let m=n(e.data,p.data);v=new fs(m,p.itemSize,p.offset,p.normalized)}else{let m=Gr(p.type,p.array),g=p.isInstancedBufferAttribute?Vn:He;v=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),p.gpuType!==void 0&&(v.gpuType=p.gpuType),a.setAttribute(f,v)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],v=[];for(let m=0,g=p.length;m<g;m++){let _=p[m],b;if(_.isInterleavedBufferAttribute){let x=n(e.data,_.data);b=new fs(x,_.itemSize,_.offset,_.normalized)}else{let x=Gr(_.type,_.array);b=new He(x,_.itemSize,_.normalized)}_.name!==void 0&&(b.name=_.name),_.usage!==void 0&&b.setUsage(_.usage),_.gpuType!==void 0&&(b.gpuType=_.gpuType),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){let v=u[f];a.addGroup(v.start,v.count,v.materialIndex)}let d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Xt().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Kd={},Zh=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=this,a=this.path===""?xa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Pi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){n!==void 0&&n(u),Le("ObjectLoader: Can't parse "+e+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),Le("ObjectLoader: Can't load "+e);return}r.parse(c,t)},i,n)}loadAsync(e,t){return Ai(this,null,function*(){let i=this,n=this.path===""?xa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;let r=new Pi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=yield r.loadAsync(e,t),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return yield i.parseAsync(o)})}parse(e,t){let i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}parseAsync(e){return Ai(this,null,function*(){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=yield this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l})}static registerGeometry(e,t){Kd[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){let r=new _s().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){let i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new wo().fromJSON(e[r],n);i[o.uuid]=o}return i}parseGeometries(e,t){let i={};if(e!==void 0){let n=new _l;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in Hm?o=Hm[l.type].fromJSON(l,t):l.type in Kd?o=Kd[l.type].fromJSON(l,t):fe(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){let i={},n={};if(e!==void 0){let r=new vl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let n=e[i],r=Ss.parse(n);t[r.uuid]=r}return t}parseImages(e,t){let i=this,n={},r;function a(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),r.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:Gr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new bs(t);r=new Es(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let u=e[c],d=u.url;if(Array.isArray(d)){let f=[];for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new vi(g.data,g.width,g.height)))}n[u.uuid]=new Gi(f)}else{let f=o(u.url);n[u.uuid]=new Gi(f)}}}return n}parseImagesAsync(e){return Ai(this,null,function*(){let t=this,i={},n;function r(a){return Ai(this,null,function*(){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return yield n.loadAsync(l)}else return a.data?{data:Gr(a.type,a.data),width:a.width,height:a.height}:null})}if(e!==void 0&&e.length>0){n=new Es(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=yield r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new vi(p.data,p.width,p.height)))}i[l.uuid]=new Gi(h)}else{let h=yield r(l.url);i[l.uuid]=new Gi(h)}}}return i})}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(fe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let n={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&fe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&fe("ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new gs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new vi:h=new Bt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,I_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],jm),h.wrapT=i(o.wrap[1],jm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,Zm)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,Zm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(e,t,i,n,r){let a;function o(d){return t[d]===void 0&&fe("ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let p=0,v=d.length;p<v;p++){let m=d[p];i[m]===void 0&&fe("ObjectLoader: Undefined material",m),f.push(i[m])}return f}return i[d]===void 0&&fe("ObjectLoader: Undefined material",d),i[d]}}function c(d){return n[d]===void 0&&fe("ObjectLoader: Undefined texture",d),n[d]}let h,u;switch(e.type){case"Scene":a=new xi,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new oe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Mo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ao(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Rt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Cn(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ar(e.color,e.intensity);break;case"DirectionalLight":a=new pl(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new rr(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ml(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new fl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new dl(e.color,e.groundColor,e.intensity);break;case"LightProbe":let d=new va().fromArray(e.sh);a=new gl(d,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new To(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Je(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);let f=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new Co(h,u,f),a.instanceMatrix=new Vn(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new Vn(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Do(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,_=null;return m.boundingBox!==void 0&&(g=new Gt().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(_=new Xt().fromJSON(m.boundingSphere)),Uc(Cs({},m),{boundingBox:g,boundingSphere:_})}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Xt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Gt().fromJSON(e.boundingBox));break;case"LOD":a=new ms;break;case"Line":a=new _i(o(e.geometry),l(e.material));break;case"LineLoop":a=new Po(o(e.geometry),l(e.material));break;case"LineSegments":a=new ti(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new yi(o(e.geometry),l(e.material));break;case"Sprite":a=new Ks(l(e.material));break;case"Group":a=new sn;break;case"Bone":a=new ea;break;default:a=new it}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new C().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,i,n,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let p=d[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let n=t[i.skeleton];n===void 0?fe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new it}})}},I_={UVMapping:Rl,CubeReflectionMapping:pn,CubeRefractionMapping:qn,EquirectangularReflectionMapping:wa,EquirectangularRefractionMapping:Ca,CubeUVReflectionMapping:cr},jm={RepeatWrapping:Wr,ClampToEdgeWrapping:gi,MirroredRepeatWrapping:Xr},Zm={NearestFilter:Pt,NearestMipmapNearestFilter:Fu,NearestMipmapLinearFilter:hr,LinearFilter:ft,LinearMipmapNearestFilter:Ra,LinearMipmapLinearFilter:mn},Qd=new WeakMap,Kh=class extends Yt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Qd.has(a)===!0?(n&&n(Qd.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Qd.set(l,c),rn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},gh,_a=class{static getContext(){return gh===void 0&&(gh=new(window.AudioContext||window.webkitAudioContext)),gh}static setContext(e){gh=e}},Qh=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let r=this,a=new Pi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0),h=_a.getContext(),u=e+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){t(d),r.manager.itemEnd(u)}).catch(function(d){o(d),r.manager.itemEnd(u)})}catch(c){o(c)}},i,n);function o(l){n?n(l):Le(l),r.manager.itemError(e)}}},Km=new Ce,Qm=new Ce,Bs=new Ce,Jh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Rt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Rt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Bs.copy(e.projectionMatrix);let n=t.eyeSep/2,r=n*t.near/t.focus,a=t.near*Math.tan(zs*t.fov*.5)/t.zoom,o,l;Qm.elements[12]=-n,Km.elements[12]=n,o=-a*t.aspect+r,l=a*t.aspect+r,Bs.elements[0]=2*t.near/(l-o),Bs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Bs),o=-a*t.aspect-r,l=a*t.aspect-r,Bs.elements[0]=2*t.near/(l-o),Bs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Bs)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Qm),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Km),this.cameraR.matrixWorldNeedsUpdate=!0}},Fr=-90,Hr=1,yl=class extends it{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Rt(Fr,Hr,e,t);n.layers=this.layers,this.add(n);let r=new Rt(Fr,Hr,e,t);r.layers=this.layers,this.add(r);let a=new Rt(Fr,Hr,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Fr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new Rt(Fr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Fr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Sl=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},bl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=U_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function U_(){this._document.hidden===!1&&this.reset()}var Ns=new C,Jd=new Ot,L_=new C,Os=new C,Fs=new C,$h=class extends it{constructor(){super(),this.type="AudioListener",this.context=_a.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new bl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ns,Jd,L_),Os.set(0,0,-1).applyQuaternion(Jd),Fs.set(0,1,0).applyQuaternion(Jd),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ns.x,i),t.positionY.linearRampToValueAtTime(Ns.y,i),t.positionZ.linearRampToValueAtTime(Ns.z,i),t.forwardX.linearRampToValueAtTime(Os.x,i),t.forwardY.linearRampToValueAtTime(Os.y,i),t.forwardZ.linearRampToValueAtTime(Os.z,i),t.upX.linearRampToValueAtTime(Fs.x,i),t.upY.linearRampToValueAtTime(Fs.y,i),t.upZ.linearRampToValueAtTime(Fs.z,i)}else t.setPosition(Ns.x,Ns.y,Ns.z),t.setOrientation(Os.x,Os.y,Os.z,Fs.x,Fs.y,Fs.z)}},El=class extends it{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){fe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(fe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(fe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Hs=new C,Jm=new Ot,B_=new C,ks=new C,eu=class extends El{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Hs,Jm,B_),ks.set(0,0,1).applyQuaternion(Jm);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Hs.x,i),t.positionY.linearRampToValueAtTime(Hs.y,i),t.positionZ.linearRampToValueAtTime(Hs.z,i),t.orientationX.linearRampToValueAtTime(ks.x,i),t.orientationY.linearRampToValueAtTime(ks.y,i),t.orientationZ.linearRampToValueAtTime(ks.z,i)}else t.setPosition(Hs.x,Hs.y,Hs.z),t.setOrientation(ks.x,ks.y,ks.z)}},tu=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Al=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,r=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Ot.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){let a=this._workIndex*r;Ot.multiplyQuaternionsFlat(e,a,e,t,e,i),Ot.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){let a=1-n;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},Qf="\\[\\]\\.:\\/",N_=new RegExp("["+Qf+"]","g"),Jf="[^"+Qf+"]",O_="[^"+Qf.replace("\\.","")+"]",F_=/((?:WC+[\/:])*)/.source.replace("WC",Jf),H_=/(WCOD+)?/.source.replace("WCOD",O_),k_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jf),z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jf),G_=new RegExp("^"+F_+H_+k_+z_+"$"),V_=["material","materials","bones","map"],ff=class{constructor(e,t,i){let n=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){let t=G_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);V_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=ff;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Bi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,m=a;v!==m;++v)r[v].push(new yt(d,i[v],n[v]))}else if(p<c){o=e[p];let v=--c,m=e[v];t[m.uuid]=p,e[p]=m,t[f]=v,e[v]=d;for(let g=0,_=a;g!==_;++g){let b=r[g],x=b[v],A=b[p];b[p]=x,A===void 0&&(A=new yt(d,i[g],n[g])),b[v]=A}}else e[p]!==o&&Le("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,p=n;f!==p;++f){let v=i[f],m=v[u],g=v[h];v[h]=m,v[u]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){let d=--r,f=e[d],p=--a,v=e[p];u!==d&&(t[f.uuid]=u),e[u]=f,d!==p&&(t[v.uuid]=d),e[d]=v,e.pop();for(let m=0,g=n;m!==g;++m){let _=i[m],b=_[d],x=_[p];_[u]=b,_[d]=x,_.pop()}}else{let d=--a,f=e[d];u!==d&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,v=n;p!==v;++p){let m=i[p];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let i=this._bindingsIndicesByPath,n=i[e],r=this._bindings;if(n!==void 0)return r[n];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);n=r.length,i[e]=n,a.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){let p=l[d];u[d]=new yt(p,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let n=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=n[o];t[c]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),n[i]=n[o],n.pop()}}},Ml=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ls,endingEnd:ls};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,r=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case uc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,r=this._loopCount,a=i===Of;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===Bf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=cs,n.endingEnd=cs):(e?n.endingStart=this.zeroSlopeAtStart?cs:ls:n.endingStart=qr,t?n.endingEnd=this.zeroSlopeAtEnd?cs:ls:n.endingEnd=qr)}_scheduleFading(e,t,i){let n=this._mixer,r=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},W_=new Float32Array(1),nu=class extends Ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=n[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new Al(yt.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,r=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new pa(new Float32Array(2),new Float32Array(2),1,W_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let n=t||this._root,r=n.uuid,a=typeof e=="string"?Ss.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=uc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Ml(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,n=i.uuid,r=typeof e=="string"?Ss.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},su=class extends Qr{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i;for(let r=0;r<this.textures.length;r++){let a=new Ys(null,e,t,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(n)}},ii=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},X_=0,ru=class extends Ri{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.usage=pc,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){let r=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},au=class extends Zs{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},ou=class{constructor(e,t,i,n,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},$m=new Ce,lu=class{constructor(e,t,i=0,n=1/0){this.ray=new on(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $m.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($m),this}intersectObject(e,t=!0,i=[]){return pf(e,this,i,t),i.sort(eg),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)pf(e[n],this,i,t);return i.sort(eg),i}};function eg(s,e){return s.distance-e.distance}function pf(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)pf(r[a],e,t,!0)}}var cu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},or=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},hu=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},np=class np{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};np.prototype.isMatrix2=!0;var uu=np,tg=new q,Tl=class{constructor(e=new q(1/0,1/0),t=new q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=tg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ig=new C,vh=new C,kr=new C,zr=new C,$d=new C,Y_=new C,q_=new C,du=class{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ig.subVectors(e,this.start),vh.subVectors(this.end,this.start);let i=vh.dot(vh);if(i===0)return 0;let r=vh.dot(ig)/i;return t&&(r=Xe(r,0,1)),r}closestPointToPoint(e,t,i){let n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=Y_,i=q_){let n=10000000000000001e-32,r,a,o=this.start,l=e.start,c=this.end,h=e.end;kr.subVectors(c,o),zr.subVectors(h,l),$d.subVectors(o,l);let u=kr.dot(kr),d=zr.dot(zr),f=zr.dot($d);if(u<=n&&d<=n)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(u<=n)r=0,a=f/d,a=Xe(a,0,1);else{let p=kr.dot($d);if(d<=n)a=0,r=Xe(-p/u,0,1);else{let v=kr.dot(zr),m=u*d-v*v;m!==0?r=Xe((v*f-p*d)/m,0,1):r=0,a=(v*r+f)/d,a<0?(a=0,r=Xe(-p/u,0,1)):a>1&&(a=1,r=Xe((v-p)/u,0,1))}}return t.copy(o).addScaledVector(kr,r),i.copy(l).addScaledVector(zr,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},ng=new C,fu=class extends it{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new Ie,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new _e(n,3));let r=new Tt({fog:!1,toneMapped:!1});this.cone=new ti(i,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ng.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ng),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},os=new C,xh=new Ce,ef=new Ce,pu=class extends ti{constructor(e){let t=p0(e),i=new Ie,n=[],r=[];for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new _e(n,3)),i.setAttribute("color",new _e(r,3));let a=new Tt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new oe(255),l=new oe(65280);this.setColors(o,l)}updateMatrixWorld(e){let t=this.bones,i=this.geometry,n=i.getAttribute("position");ef.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(xh.multiplyMatrices(ef,o.matrixWorld),os.setFromMatrixPosition(xh),n.setXYZ(a,os.x,os.y,os.z),xh.multiplyMatrices(ef,o.parent.matrixWorld),os.setFromMatrixPosition(xh),n.setXYZ(a+1,os.x,os.y,os.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let n=this.geometry.getAttribute("color");for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function p0(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...p0(s.children[t]));return e}var mu=class extends Je{constructor(e,t,i){let n=new cn(t,4,2),r=new ci({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},j_=new C,sg=new oe,rg=new oe,gu=class extends it{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let n=new ha(t);n.rotateY(Math.PI*.5),this.material=new ci({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.setAttribute("color",new He(a,3)),this.add(new Je(n,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");sg.copy(this.light.color),rg.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){let r=i<n/2?sg:rg;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(j_.setFromMatrixPosition(this.light.matrixWorld).negate())}},As=class extends ti{constructor(e=10,t=10,i=4473924,n=8947848){i=new oe(i),n=new oe(n);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let v=d===r?i:n;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let h=new Ie;h.setAttribute("position",new _e(l,3)),h.setAttribute("color",new _e(c,3));let u=new Tt({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},vu=class extends ti{constructor(e=10,t=16,i=8,n=64,r=4473924,a=8947848){r=new oe(r),a=new oe(a);let o=[],l=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);let v=u&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<i;u++){let d=u&1?r:a,f=e-e/i*u;for(let p=0;p<n;p++){let v=p/n*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f;o.push(m,0,g),l.push(d.r,d.g,d.b),v=(p+1)/n*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f,o.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Ie;c.setAttribute("position",new _e(o,3)),c.setAttribute("color",new _e(l,3));let h=new Tt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},ag=new C,_h=new C,og=new C,xu=class extends it{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ie;n.setAttribute("position",new _e([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Tt({fog:!1,toneMapped:!1});this.lightPlane=new _i(n,r),this.add(this.lightPlane),n=new Ie,n.setAttribute("position",new _e([0,0,0,0,0,1],3)),this.targetLine=new _i(n,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ag.setFromMatrixPosition(this.light.matrixWorld),_h.setFromMatrixPosition(this.light.target.matrixWorld),og.subVectors(_h,ag),this.lightPlane.lookAt(_h),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_h),this.targetLine.scale.z=og.length()}},yh=new C,Ht=new Yn,_u=class extends ti{constructor(e){let t=new Ie,i=new Tt({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){n.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}t.setAttribute("position",new _e(n,3)),t.setAttribute("color",new _e(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new oe(16755200),h=new oe(16711680),u=new oe(43775),d=new oe(16777215),f=new oe(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,i,n,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,i=1,n=1,r,a;if(Ht.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Ci)r=-1,a=1;else if(this.camera.coordinateSystem===us)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);zt("c",t,e,Ht,0,0,r),zt("t",t,e,Ht,0,0,a),zt("n1",t,e,Ht,-i,-n,r),zt("n2",t,e,Ht,i,-n,r),zt("n3",t,e,Ht,-i,n,r),zt("n4",t,e,Ht,i,n,r),zt("f1",t,e,Ht,-i,-n,a),zt("f2",t,e,Ht,i,-n,a),zt("f3",t,e,Ht,-i,n,a),zt("f4",t,e,Ht,i,n,a),zt("u1",t,e,Ht,i*.7,n*1.1,r),zt("u2",t,e,Ht,-i*.7,n*1.1,r),zt("u3",t,e,Ht,0,n*2,r),zt("cf1",t,e,Ht,-i,0,a),zt("cf2",t,e,Ht,i,0,a),zt("cf3",t,e,Ht,0,-n,a),zt("cf4",t,e,Ht,0,n,a),zt("cn1",t,e,Ht,-i,0,r),zt("cn2",t,e,Ht,i,0,r),zt("cn3",t,e,Ht,0,-n,r),zt("cn4",t,e,Ht,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function zt(s,e,t,i,n,r,a){yh.set(n,r,a).unproject(i);let o=e[s];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],yh.x,yh.y,yh.z)}}var Sh=new Gt,yu=class extends ti{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Ie;r.setIndex(new He(i,1)),r.setAttribute("position",new He(n,3)),super(r,new Tt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Sh.setFromObject(this.object),Sh.isEmpty())return;let e=Sh.min,t=Sh.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Su=class extends ti{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ie;r.setIndex(new He(i,1)),r.setAttribute("position",new _e(n,3)),super(r,new Tt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},bu=class extends _i{constructor(e,t=1,i=16776960){let n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ie;a.setAttribute("position",new _e(r,3)),a.computeBoundingSphere(),super(a,new Tt({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ie;l.setAttribute("position",new _e(o,3)),l.computeBoundingSphere(),this.add(new Je(l,new ci({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},lg=new C,bh,tf,Eu=class extends it{constructor(e=new C(0,0,1),t=new C(0,0,0),i=1,n=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",bh===void 0&&(bh=new Ie,bh.setAttribute("position",new _e([0,0,0,0,1,0],3)),tf=new na(.5,1,5,1),tf.translate(0,-.5,0)),this.position.copy(t),this.line=new _i(bh,new Tt({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Je(tf,new ci({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{lg.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(lg,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},ya=class extends ti{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ie;n.setAttribute("position",new _e(t,3)),n.setAttribute("color",new _e(i,3));let r=new Tt({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){let n=new oe,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Au=class{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new xs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,u=c.length;for(let d=0,f=u-1;d<u;f=d++){let p=c[d],v=c[f];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new q);if(e(h,l))return h;let u=h.y,d=[],f=l.length;for(let p=0;p<f;p++){let v=l[p],m=l[(p+1)%f];if(v.y>u!=m.y>u){let g=v.x+(u-v.y)*(m.x-v.x)/(m.y-v.y);d.push(g)}}return d.length>1&&(d.sort((p,v)=>p-v),h.x=(d[0]+d[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(fe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Vi.area(c);if(h===0)continue;let u=new Tl;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:t(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new _s;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new xs;h.curves=l.subPath.curves,c.holes.push(h)}return a}},Sa=class extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Z_(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function K_(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Q_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function qu(s,e,t,i){let n=J_(i);switch(t){case Vu:return s*e;case Ul:return s*e/n.components*n.byteLength;case Da:return s*e/n.components*n.byteLength;case Zn:return s*e*2/n.components*n.byteLength;case dr:return s*e*2/n.components*n.byteLength;case Wu:return s*e*3/n.components*n.byteLength;case li:return s*e*4/n.components*n.byteLength;case Ll:return s*e*4/n.components*n.byteLength;case Pa:case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ua:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Fl:return Math.max(s,16)*Math.max(e,8)/4;case Bl:case Ol:return Math.max(s,8)*Math.max(e,8)/2;case Hl:case kl:case Gl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Ba:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rc:case ac:case oc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lc:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Na:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(s){switch(s){case Ft:case Hu:return{byteLength:1,components:1};case ur:case ku:case qi:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case ni:case Dl:case ei:return{byteLength:4,components:1};case zu:case Gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Mu=class{static contain(e,t){return Z_(e,t)}static cover(e,t){return K_(e,t)}static fill(e){return Q_(e)}static getByteLength(e,t,i,n){return qu(e,t,i,n)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function N0(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ay=`#ifdef USE_AOMAP
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
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
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
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fy=`#ifdef USE_IRIDESCENCE
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
#endif`,py=`#ifdef USE_BUMPMAP
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ey=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,My=`vec3 transformedNormal = objectNormal;
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
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zy=`#ifdef USE_GRADIENTMAP
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
}`,Gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yy=`#ifdef USE_ENVMAP
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
#endif`,qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
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
#endif`,Jy=`uniform sampler2D dfgLUT;
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
}`,$y=`
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hS=`#if defined( USE_POINTS_UV )
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
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
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
#endif`,AS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,US=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HS=`float getShadowMask() {
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
}`,fb=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,vb=`#define LAMBERT
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
}`,xb=`#define MATCAP
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
}`,_b=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define NORMAL
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
}`,bb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,Ab=`#define STANDARD
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
}`,Mb=`#define STANDARD
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
}`,Tb=`#define TOON
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
}`,wb=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,Ib=`uniform float rotation;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:iy,alphamap_pars_fragment:ny,alphatest_fragment:sy,alphatest_pars_fragment:ry,aomap_fragment:ay,aomap_pars_fragment:oy,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:hy,beginnormal_vertex:uy,bsdfs:dy,iridescence_fragment:fy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:vy,clipping_planes_vertex:xy,color_fragment:_y,color_pars_fragment:yy,color_pars_vertex:Sy,color_vertex:by,common:Ey,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:My,displacementmap_pars_vertex:Ty,displacementmap_vertex:wy,emissivemap_fragment:Cy,emissivemap_pars_fragment:Ry,colorspace_fragment:Dy,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Ly,envmap_pars_vertex:By,envmap_physical_pars_fragment:Yy,envmap_vertex:Ny,fog_vertex:Oy,fog_pars_vertex:Fy,fog_fragment:Hy,fog_pars_fragment:ky,gradientmap_pars_fragment:zy,lightmap_pars_fragment:Gy,lights_lambert_fragment:Vy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:qy,lights_toon_pars_fragment:jy,lights_phong_fragment:Zy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Qy,lights_physical_pars_fragment:Jy,lights_fragment_begin:$y,lights_fragment_maps:eS,lights_fragment_end:tS,lightprobes_pars_fragment:iS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:aS,map_fragment:oS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:hS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:dS,morphinstance_vertex:fS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:vS,normal_fragment_begin:xS,normal_fragment_maps:_S,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:bS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:AS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:wS,opaque_fragment:CS,packing:RS,premultiplied_alpha_fragment:DS,project_vertex:PS,dithering_fragment:IS,dithering_pars_fragment:US,roughnessmap_fragment:LS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:OS,shadowmap_vertex:FS,shadowmask_pars_fragment:HS,skinbase_vertex:kS,skinning_pars_vertex:zS,skinning_vertex:GS,skinnormal_vertex:VS,specularmap_fragment:WS,specularmap_pars_fragment:XS,tonemapping_fragment:YS,tonemapping_pars_fragment:qS,transmission_fragment:jS,transmission_pars_fragment:ZS,uv_pars_fragment:KS,uv_pars_vertex:QS,uv_vertex:JS,worldpos_vertex:$S,background_vert:eb,background_frag:tb,backgroundCube_vert:ib,backgroundCube_frag:nb,cube_vert:sb,cube_frag:rb,depth_vert:ab,depth_frag:ob,distance_vert:lb,distance_frag:cb,equirect_vert:hb,equirect_frag:ub,linedashed_vert:db,linedashed_frag:fb,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:vb,meshmatcap_vert:xb,meshmatcap_frag:_b,meshnormal_vert:yb,meshnormal_frag:Sb,meshphong_vert:bb,meshphong_frag:Eb,meshphysical_vert:Ab,meshphysical_frag:Mb,meshtoon_vert:Tb,meshtoon_frag:wb,points_vert:Cb,points_frag:Rb,shadow_vert:Db,shadow_frag:Pb,sprite_vert:Ib,sprite_frag:Ub},pe={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},vn={basic:{uniforms:hi([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:hi([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:hi([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:hi([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:hi([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new oe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:hi([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:hi([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:hi([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:hi([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:hi([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:hi([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:hi([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:hi([pe.lights,pe.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};vn.physical={uniforms:hi([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var ju={r:0,b:0,g:0},Lb=new Ce,O0=new je;O0.set(-1,0,0,0,1,0,0,0,1);function Bb(s,e,t,i,n,r){let a=new oe(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let x=_.backgroundBlurriness>0;b=e.get(b,x)}return b}function p(_){let b=!1,x=f(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),b=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(_,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===cr)?(c===void 0&&(c=new Je(new vs(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:fr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(O0),c.material.toneMapped=nt.getTransfer(x.colorSpace)!==gt,(h!==x||u!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Je(new Ni(2,2),new ot({name:"BackgroundMaterial",uniforms:fr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(ju,Zf(s)),t.buffers.color.setClear(ju.r,ju.g,ju.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:v,dispose:g}}function Nb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(P,N,O,B,H){let Z=!1,W=u(P,B,O,N);r!==W&&(r=W,c(r.object)),Z=f(P,B,O,H),Z&&p(P,B,O,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(P,N,O,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function u(P,N,O,B){let H=B.wireframe===!0,Z=i[N.id];Z===void 0&&(Z={},i[N.id]=Z);let W=P.isInstancedMesh===!0?P.id:0,re=Z[W];re===void 0&&(re={},Z[W]=re);let Y=re[O.id];Y===void 0&&(Y={},re[O.id]=Y);let J=Y[H];return J===void 0&&(J=d(l()),Y[H]=J),J}function d(P){let N=[],O=[],B=[];for(let H=0;H<t;H++)N[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:B,object:P,attributes:{},index:null}}function f(P,N,O,B){let H=r.attributes,Z=N.attributes,W=0,re=O.getAttributes();for(let Y in re)if(re[Y].location>=0){let ee=H[Y],Ne=Z[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Ne=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Ne=P.instanceColor)),ee===void 0||ee.attribute!==Ne||Ne&&ee.data!==Ne.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function p(P,N,O,B){let H={},Z=N.attributes,W=0,re=O.getAttributes();for(let Y in re)if(re[Y].location>=0){let ee=Z[Y];ee===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let Ne={};Ne.attribute=ee,ee&&ee.data&&(Ne.data=ee.data),H[Y]=Ne,W++}r.attributes=H,r.attributesNum=W,r.index=B}function v(){let P=r.newAttributes;for(let N=0,O=P.length;N<O;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let O=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;O[P]=1,B[P]===0&&(s.enableVertexAttribArray(P),B[P]=1),H[P]!==N&&(s.vertexAttribDivisor(P,N),H[P]=N)}function _(){let P=r.newAttributes,N=r.enabledAttributes;for(let O=0,B=N.length;O<B;O++)N[O]!==P[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function b(P,N,O,B,H,Z,W){W===!0?s.vertexAttribIPointer(P,N,O,H,Z):s.vertexAttribPointer(P,N,O,B,H,Z)}function x(P,N,O,B){v();let H=B.attributes,Z=O.getAttributes(),W=N.defaultAttributeValues;for(let re in Z){let Y=Z[re];if(Y.location>=0){let J=H[re];if(J===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let ee=J.normalized,Ne=J.itemSize,Re=e.get(J);if(Re===void 0)continue;let mt=Re.buffer,st=Re.type,ut=Re.bytesPerElement,Q=st===s.INT||st===s.UNSIGNED_INT||J.gpuType===Dl;if(J.isInterleavedBufferAttribute){let ie=J.data,Se=ie.stride,We=J.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)g(Y.location+Me,ie.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Me=0;Me<Y.locationSize;Me++)b(Y.location+Me,Ne/Y.locationSize,st,ee,Se*ut,(We+Ne/Y.locationSize*Me)*ut,Q)}else{if(J.isInstancedBufferAttribute){for(let ie=0;ie<Y.locationSize;ie++)g(Y.location+ie,J.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<Y.locationSize;ie++)m(Y.location+ie);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let ie=0;ie<Y.locationSize;ie++)b(Y.location+ie,Ne/Y.locationSize,st,ee,Ne*ut,Ne/Y.locationSize*ie*ut,Q)}}else if(W!==void 0){let ee=W[re];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(Y.location,ee);break;case 3:s.vertexAttrib3fv(Y.location,ee);break;case 4:s.vertexAttrib4fv(Y.location,ee);break;default:s.vertexAttrib1fv(Y.location,ee)}}}}_()}function A(){w();for(let P in i){let N=i[P];for(let O in N){let B=N[O];for(let H in B){let Z=B[H];for(let W in Z)h(Z[W].object),delete Z[W];delete B[H]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let N=i[P.id];for(let O in N){let B=N[O];for(let H in B){let Z=B[H];for(let W in Z)h(Z[W].object),delete Z[W];delete B[H]}}delete i[P.id]}function T(P){for(let N in i){let O=i[N];for(let B in O){let H=O[B];if(H[P.id]===void 0)continue;let Z=H[P.id];for(let W in Z)h(Z[W].object),delete Z[W];delete H[P.id]}}}function y(P){for(let N in i){let O=i[N],B=P.isInstancedMesh===!0?P.id:0,H=O[B];if(H!==void 0){for(let Z in H){let W=H[Z];for(let re in W)h(W[re].object),delete W[re];delete H[Z]}delete O[B],Object.keys(O).length===0&&delete i[N]}}}function w(){D(),a=!0,r!==n&&(r=n,c(r.object))}function D(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Ob(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fb(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==li&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let y=T===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ft&&T!==ei&&!y&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,maxSamples:A,samples:E}}function Hb(s){let e=this,t=null,i=0,n=!1,r=!1,a=new wi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,b=_*4,x=g.clippingState||null;l.value=x,x=h(p,d,b,f);for(let A=0;A!==b;++A)x[A]=t[A];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,x=f;b!==v;++b,x+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Ha=4,kb=6,zb=20,Gb=256,vc=new Cn,m0=new oe,sp=null,rp=0,ap=0,op=!1,Vb=new C,pr=new C,yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=Vb}=r;sp=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sp,rp,ap),this._renderer.xr.enabled=op,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sp=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:qi,format:li,colorSpace:hs,depthBuffer:!1},n=g0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wb(r)),this._blurMaterial=Yb(r,e,t),this._ggxMaterial=Xb(r,e,t)}return n}_compileMaterial(e){let t=new Je(new Ie,e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,i,n,r){let l=new Rt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(m0),u.toneMapping=Yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new vs,new ci({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(m0),g=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;Fa(n,x*A,b>2?A:0,A,A),u.setRenderTarget(n),g&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===pn||e.mapping===qn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Fa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-Ha?i-p+Ha:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Fa(r,m,g,3*v,2*v),n.setRenderTarget(r),n.render(o,vc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Fa(e,m,g,3*v,2*v),n.setRenderTarget(e),n.render(o,vc)}_blur(e,t,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,n,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-Ha?n-this._lodMax+Ha:0),d=4*(this._cubeSize-h);Fa(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,vc)}};function Wb(s){let e=[],t=[],i=s,n=s-Ha+1+kb;for(let r=0;r<n;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let g=0;g<u;g++){let _=g%3*2/3-1,b=g>2?0:-1,x=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];p.set(x,f*d*g);for(let A=0;A<d;A++){let E=h[A*2]*2-1,T=h[A*2+1]*2-1;g===0?pr.set(1,T,E):g===1?pr.set(-E,1,-T):g===2?pr.set(-E,T,1):g===3?pr.set(-1,T,-E):g===4?pr.set(-E,-1,T):pr.set(E,T,-1),pr.toArray(v,(g*d+A)*f)}}let m=new Ie;m.setAttribute("position",new He(p,f)),m.setAttribute("outputDirection",new He(v,f)),t.push(new Je(m,null)),i>Ha&&i--}return{lodMeshes:t,sizeLods:e}}function g0(s,e,t){let i=new At(s,e,t);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Xb(s,e,t){return new ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Yb(s,e,t){return new ot({name:"SphericalGaussianBlur",defines:{SAMPLES:zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function v0(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function x0(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sc=class extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new gs(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new vs(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:jt});r.uniforms.tEquirect.value=t;let a=new Je(n,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=ft),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}};function qb(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wa||f===Ca)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new Sc(p.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===wa||f===Ca,v=f===pn||f===qn;if(p||v){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new yc(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new yc(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===wa?d.mapping=pn:f===Ca&&(d.mapping=qn),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function jb(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&An("WebGLRenderer: "+i+" extension not supported."),n}}}function Zb(s,e,t,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let b=0,x=_.length;b<x;b+=3){let A=_[b+0],E=_[b+1],T=_[b+2];d.push(A,E,E,T,T,A)}}else{let _=p.array;v=p.version;for(let b=0,x=_.length/3-1;b<x;b+=3){let A=b+0,E=b+1,T=b+2;d.push(A,E,E,T,T,A)}}let m=new(p.count>=65535?$r:Jr)(d,1);m.version=v;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Kb(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Jb(s,e,t){let i=new WeakMap,n=new ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let D=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var f=D;d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],x=0;p===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let T=new Float32Array(A*E*4*u),y=new Xs(T,A,E,u);y.type=ei,y.needsUpdate=!0;let w=x*4;for(let P=0;P<u;P++){let N=g[P],O=_[P],B=b[P],H=A*E*4*P;for(let Z=0;Z<N.count;Z++){let W=Z*w;p===!0&&(n.fromBufferAttribute(N,Z),T[H+W+0]=n.x,T[H+W+1]=n.y,T[H+W+2]=n.z,T[H+W+3]=0),v===!0&&(n.fromBufferAttribute(O,Z),T[H+W+4]=n.x,T[H+W+5]=n.y,T[H+W+6]=n.z,T[H+W+7]=0),m===!0&&(n.fromBufferAttribute(B,Z),T[H+W+8]=n.x,T[H+W+9]=n.y,T[H+W+10]=n.z,T[H+W+11]=B.itemSize===4?n.w:1)}}d={count:u,texture:y,size:new q(A,E)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function $b(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var eE={[Pu]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Uu]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function tE(s,e,t,i,n,r){let a=new At(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ie;c.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Je(c,h),d=new Cn(-1,1,1,-1,0,1),f=null,p=null,v=!1,m,g=null,_=[],b=!1;this.setSize=function(x,A){a.setSize(x,A),o!==null&&o.setSize(x,A),l!==null&&l.setSize(x,A);for(let E=0;E<_.length;E++){let T=_[E];T.setSize&&T.setSize(x,A)}},this.setEffects=function(x){_=x,b=_.length>0&&_[0].isRenderPass===!0;let A=a.width,E=a.height;_.length>0&&o===null&&(o=new At(A,E,{type:qi,depthBuffer:!1,stencilBuffer:!1}),l=new At(A,E,{type:qi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let y=_[T];y.setSize&&y.setSize(A,E)}},this.begin=function(x,A){if(v||x.toneMapping===Yi&&_.length===0)return!1;if(g=A,A!==null){let E=A.width,T=A.height;(a.width!==E||a.height!==T)&&this.setSize(E,T)}return b===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Yi,!0},this.hasRenderPass=function(){return b},this.end=function(x,A){x.toneMapping=m,v=!0;let E=a,T=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(x,T,E,A),w.needsSwap!==!1&&(E=T,T=T===o?l:o))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},nt.getTransfer(f)===gt&&(h.defines.SRGB_TRANSFER="");let y=eE[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(g),x.render(u,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var F0=new Bt,hp=new Si(1,1),H0=new Xs,k0=new Ys,z0=new gs,_0=[],y0=[],S0=new Float32Array(16),b0=new Float32Array(9),E0=new Float32Array(4);function za(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=_0[n];if(r===void 0&&(r=new Float32Array(n),_0[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Qu(s,e){let t=y0[e];t===void 0&&(t=new Int32Array(e),y0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function iE(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function sE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function rE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function aE(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;E0.set(i),s.uniformMatrix2fv(this.addr,!1,E0),Kt(t,i)}}function oE(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;b0.set(i),s.uniformMatrix3fv(this.addr,!1,b0),Kt(t,i)}}function lE(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;S0.set(i),s.uniformMatrix4fv(this.addr,!1,S0),Kt(t,i)}}function cE(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function uE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function dE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function fE(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function pE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function mE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function gE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function vE(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(hp.compareFunction=t.isReversedDepthBuffer()?fc:dc,r=hp):r=F0,t.setTexture2D(e||r,n)}function xE(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||k0,n)}function _E(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||z0,n)}function yE(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||H0,n)}function SE(s){switch(s){case 5126:return iE;case 35664:return nE;case 35665:return sE;case 35666:return rE;case 35674:return aE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return cE;case 35667:case 35671:return hE;case 35668:case 35672:return uE;case 35669:case 35673:return dE;case 5125:return fE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return yE}}function bE(s,e){s.uniform1fv(this.addr,e)}function EE(s,e){let t=za(e,this.size,2);s.uniform2fv(this.addr,t)}function AE(s,e){let t=za(e,this.size,3);s.uniform3fv(this.addr,t)}function ME(s,e){let t=za(e,this.size,4);s.uniform4fv(this.addr,t)}function TE(s,e){let t=za(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wE(s,e){let t=za(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function CE(s,e){let t=za(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function RE(s,e){s.uniform1iv(this.addr,e)}function DE(s,e){s.uniform2iv(this.addr,e)}function PE(s,e){s.uniform3iv(this.addr,e)}function IE(s,e){s.uniform4iv(this.addr,e)}function UE(s,e){s.uniform1uiv(this.addr,e)}function LE(s,e){s.uniform2uiv(this.addr,e)}function BE(s,e){s.uniform3uiv(this.addr,e)}function NE(s,e){s.uniform4uiv(this.addr,e)}function OE(s,e,t){let i=this.cache,n=e.length,r=Qu(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),Kt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=hp:a=F0;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function FE(s,e,t){let i=this.cache,n=e.length,r=Qu(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||k0,r[a])}function HE(s,e,t){let i=this.cache,n=e.length,r=Qu(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||z0,r[a])}function kE(s,e,t){let i=this.cache,n=e.length,r=Qu(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||H0,r[a])}function zE(s){switch(s){case 5126:return bE;case 35664:return EE;case 35665:return AE;case 35666:return ME;case 35674:return TE;case 35675:return wE;case 35676:return CE;case 5124:case 35670:return RE;case 35667:case 35671:return DE;case 35668:case 35672:return PE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return LE;case 36295:return BE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return kE}}var up=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SE(t.type)}},dp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zE(t.type)}},fp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},lp=/(\w+)(\])?(\[|\.)?/g;function A0(s,e){s.seq.push(e),s.map[e.id]=e}function GE(s,e,t){let i=s.name,n=i.length;for(lp.lastIndex=0;;){let r=lp.exec(i),a=lp.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){A0(t,c===void 0?new up(o,s,e):new dp(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new fp(o),A0(t,u)),t=u}}}var ka=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);GE(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function M0(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var VE=37297,WE=0;function XE(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var T0=new je;function YE(s){nt._getMatrix(T0,nt.workingColorSpace,s);let e=`mat3( ${T0.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case jr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function w0(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+XE(s.getShaderSource(e),o)}else return r}function qE(s,e){let t=YE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jE={[Pu]:"Linear",[Iu]:"Reinhard",[Uu]:"Cineon",[Lu]:"ACESFilmic",[Nu]:"AgX",[Ou]:"Neutral",[Bu]:"Custom"};function ZE(s,e){let t=jE[e];return t===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zu=new C;function KE(){nt.getLuminanceCoefficients(Zu);let s=Zu.x.toFixed(4),e=Zu.y.toFixed(4),t=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_c).join(`
`)}function JE(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $E(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function _c(s){return s!==""}function C0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(s){return s.replace(eA,iA)}var tA=new Map;function iA(s,e){let t=$e[e];if(t===void 0){let i=tA.get(e);if(i!==void 0)t=$e[i],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pp(t)}var nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(s){return s.replace(nA,sA)}function sA(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function P0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var rA={[Ea]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function aA(s){return rA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oA={[pn]:"ENVMAP_TYPE_CUBE",[qn]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE_UV"};function lA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":oA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var cA={[qn]:"ENVMAP_MODE_REFRACTION"};function hA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uA={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function dA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uA[s.combine]||"ENVMAP_BLENDING_NONE"}function fA(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pA(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=aA(t),c=lA(t),h=hA(t),u=dA(t),d=fA(t),f=QE(t),p=JE(r),v=n.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_c).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_c).join(`
`),g.length>0&&(g+=`
`)):(m=[P0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_c).join(`
`),g=[P0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Yi?ZE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),KE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_c).join(`
`)),a=pp(a),a=C0(a,t),a=R0(a,t),o=pp(o),o=C0(o,t),o=R0(o,t),a=D0(a),o=D0(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=_+m+a,x=_+g+o,A=M0(n,n.VERTEX_SHADER,b),E=M0(n,n.FRAGMENT_SHADER,x);n.attachShader(v,A),n.attachShader(v,E),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(P){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(v)||"",O=n.getShaderInfoLog(A)||"",B=n.getShaderInfoLog(E)||"",H=N.trim(),Z=O.trim(),W=B.trim(),re=!0,Y=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,A,E);else{let J=w0(n,A,"vertex"),ee=w0(n,E,"fragment");Le("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+J+`
`+ee)}else H!==""?fe("WebGLProgram: Program Info Log:",H):(Z===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:re,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:W,prefix:g}})}n.deleteShader(A),n.deleteShader(E),y=new ka(n,v),w=$E(n,v)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(v,VE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var mA=0,mp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gp(e),t.set(e,i)),i}},gp=class{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}};function gA(s){return s===Zn||s===Ba||s===Na}function vA(s,e,t,i,n,r){let a=new qs,o=new mp,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,w,D,P,N,O){let B=P.fog,H=N.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||Z,W),Y=re&&re.mapping===cr?re.image.height:null,J=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&fe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ne=ee!==void 0?ee.length:0,Re=0;H.morphAttributes.position!==void 0&&(Re=1),H.morphAttributes.normal!==void 0&&(Re=2),H.morphAttributes.color!==void 0&&(Re=3);let mt,st,ut,Q;if(J){let wt=vn[J];mt=wt.vertexShader,st=wt.fragmentShader}else{mt=y.vertexShader,st=y.fragmentShader;let wt=o.getVertexShaderStage(y),xt=o.getFragmentShaderStage(y);o.update(y,wt,xt),ut=wt.id,Q=xt.id}let ie=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),We=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,Ye=!!y.map,St=!!y.matcap,ne=!!re,ae=!!y.aoMap,le=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,de=!!y.normalMap,Ge=!!y.displacementMap,ze=!!y.emissiveMap,qe=!!y.metalnessMap,Ze=!!y.roughnessMap,I=y.anisotropy>0,vt=y.clearcoat>0,rt=y.dispersion>0,R=y.retroreflectivity>0,S=y.iridescence>0,F=y.sheen>0,G=y.transmission>0,j=I&&!!y.anisotropyMap,he=vt&&!!y.clearcoatMap,ue=vt&&!!y.clearcoatNormalMap,K=vt&&!!y.clearcoatRoughnessMap,te=S&&!!y.iridescenceMap,me=S&&!!y.iridescenceThicknessMap,Oe=F&&!!y.sheenColorMap,ye=F&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Fe=!!y.specularColorMap,Ve=!!y.specularIntensityMap,Ke=G&&!!y.transmissionMap,L=G&&!!y.thicknessMap,ve=!!y.gradientMap,$=!!y.alphaMap,xe=y.alphaTest>0,Ae=!!y.alphaHash,se=!!y.extensions,ke=Yi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ke=s.toneMapping);let Ue={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:mt,fragmentShader:st,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:We,instancingColor:We&&N.instanceColor!==null,instancingMorph:We&&N.morphTexture!==null,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:St,envMap:ne,envMapMode:ne&&re.mapping,envMapCubeUVHeight:Y,aoMap:ae,lightMap:le,bumpMap:ce,normalMap:de,displacementMap:Ge,emissiveMap:ze,normalMapObjectSpace:de&&y.normalMapType===Ff,normalMapTangentSpace:de&&y.normalMapType===Dn,packedNormalMap:de&&y.normalMapType===Dn&&gA(y.normalMap.format),metalnessMap:qe,roughnessMap:Ze,anisotropy:I,anisotropyMap:j,clearcoat:vt,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:K,dispersion:rt,retroreflection:R,iridescence:S,iridescenceMap:te,iridescenceThicknessMap:me,sheen:F,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:ge,specularColorMap:Fe,specularIntensityMap:Ve,transmission:G,transmissionMap:Ke,thicknessMap:L,gradientMap:ve,opaque:y.transparent===!1&&y.blending===dn&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:xe,alphaHash:Ae,combine:y.combine,mapUv:Ye&&p(y.map.channel),aoMapUv:ae&&p(y.aoMap.channel),lightMapUv:le&&p(y.lightMap.channel),bumpMapUv:ce&&p(y.bumpMap.channel),normalMapUv:de&&p(y.normalMap.channel),displacementMapUv:Ge&&p(y.displacementMap.channel),emissiveMapUv:ze&&p(y.emissiveMap.channel),metalnessMapUv:qe&&p(y.metalnessMap.channel),roughnessMapUv:Ze&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:he&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(y.sheenRoughnessMap.channel),specularMapUv:ge&&p(y.specularMap.channel),specularColorMapUv:Fe&&p(y.specularColorMap.channel),specularIntensityMapUv:Ve&&p(y.specularIntensityMap.channel),transmissionMapUv:Ke&&p(y.transmissionMap.channel),thicknessMapUv:L&&p(y.thicknessMap.channel),alphaMapUv:$&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(de||I),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ye||$),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&de===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Re,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)w.push(D),w.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(w,y),_(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let w=f[y.type],D;if(w){let P=vn[w];D=gc.clone(P.uniforms)}else D=y.uniforms;return D}function x(y,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new pA(s,w,y,n),c.push(D),h.set(w,D)),D}function A(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:T}}function xA(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function _A(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function I0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function U0(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,v,m,g){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function l(d,f,p,v,m,g,_){_.reversedDepth===!0&&(m=-m);let b=o(d,f,p,v,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):t.push(b)}function c(d,f,p,v,m,g){let _=o(d,f,p,v,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||_A),i.length>1&&i.sort(f||I0),n.length>1&&n.sort(f||I0)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function yA(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new U0,s.set(i,[a])):n>=r.length?(a=new U0,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function SA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new oe};break;case"SpotLight":t={position:new C,direction:new C,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function bA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var EA=0;function AA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function MA(s){let e=new SA,t=bA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let n=new C,r=new Ce,a=new Ce;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,b=0,x=0,A=0,E=0,T=0,y=0,w=0,D=0;c.sort(AA);for(let N=0,O=c.length;N<O;N++){let B=c[N],H=B.color,Z=B.intensity,W=B.distance,re=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Zn?re=B.shadow.map.texture:re=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=H.r*Z,u+=H.g*Z,d+=H.b*Z;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(B.sh.coefficients[Y],Z);D++}else if(B.isSunLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let J=B.shadow,ee=t.get(B);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=ee,i.sunShadowMap[p]=re;let Ne=J.getViewportCount();for(let Re=0;Re<Ne;Re++)i.sunShadowMatrix[v+Re]=J.getMatrix(Re),i.sunShadowCascade[v+Re]=J._cascadeData[Re];v+=Ne,p++}i.sun[f]=Y,f++}else if(B.isDirectionalLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let J=B.shadow,ee=t.get(B);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=B.shadow.matrix,A++}i.directional[m]=Y,m++}else if(B.isSpotLight){let Y=e.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(H).multiplyScalar(Z),Y.distance=W,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,i.spot[_]=Y;let J=B.shadow;if(B.map&&(i.spotLightMap[y]=B.map,y++,J.updateMatrices(B),B.castShadow&&w++),i.spotLightMatrix[_]=J.matrix,B.castShadow){let ee=t.get(B);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=re,T++}_++}else if(B.isRectAreaLight){let Y=e.get(B);Y.color.copy(H).multiplyScalar(Z),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),i.rectArea[b]=Y,b++}else if(B.isPointLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){let J=B.shadow,ee=t.get(B);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=re,i.pointShadowMatrix[g]=B.shadow.matrix,E++}i.point[g]=Y,g++}else if(B.isHemisphereLight){let Y=e.get(B);Y.skyColor.copy(B.color).multiplyScalar(Z),Y.groundColor.copy(B.groundColor).multiplyScalar(Z),i.hemi[x]=Y,x++}}b>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==x||P.numSunShadows!==p||P.numDirectionalShadows!==A||P.numPointShadows!==E||P.numSpotShadows!==T||P.numSpotMaps!==y||P.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=x,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=x,P.numSunShadows=p,P.numDirectionalShadows=A,P.numPointShadows=E,P.numSpotShadows=T,P.numSpotMaps=y,P.numLightProbes=D,i.version=EA++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let x=c[_];if(x.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(g),d++}else if(x.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function L0(s){let e=new MA(s),t=[],i=[],n=[];function r(d){u.camera=d,t.length=0,i.length=0,n.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function TA(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new L0(s),e.set(n,[o])):r>=a.length?(o=new L0(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`,RA=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],DA=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],B0=new Ce,xc=new C,cp=new C;function PA(s,e,t){let i=new Mn,n=new q,r=new q,a=new ct,o=new da,l=new fa,c={},h=t.maxTextureSize,u={[un]:Ut,[Ut]:un,[qt]:qt},d=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:wA,fragmentShader:CA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ie;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let g=this.type;this.render=function(E,T,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===vf&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);let w=s.getRenderTarget(),D=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(jt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=g!==this.type;O&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(H=>H.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,H=E.length;B<H;B++){let Z=E[B],W=Z.shadow;if(W===void 0){fe("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let re=W.getFrameExtents();n.multiply(re),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/re.x),n.x=r.x*re.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/re.y),n.y=r.y*re.y,W.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===lr){if(Z.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new At(n.x,n.y,{format:Zn,type:qi,minFilter:ft,magFilter:ft,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new Si(n.x,n.y,ei),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=an,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt}else Z.isPointLight?(W.map=new Sc(n.x),W.map.depthTexture=new Uo(n.x,ni)):(W.map=new At(n.x,n.y),W.map.depthTexture=new Si(n.x,n.y,ni)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=an,this.type===Ea?(W.map.depthTexture.compareFunction=Y?fc:dc,W.map.depthTexture.minFilter=ft,W.map.depthTexture.magFilter=ft):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,y);for(let ee=0;ee<J;ee++){let Ne=W.getCamera(ee);if(Z.isPointLight){let Re=W.camera,mt=W.matrix,st=Z.distance||Re.far;st!==Re.far&&(Re.far=st,Re.updateProjectionMatrix()),xc.setFromMatrixPosition(Z.matrixWorld),Re.position.copy(xc),cp.copy(Re.position),cp.add(RA[ee]),Re.up.copy(DA[ee]),Re.lookAt(cp),Re.updateMatrixWorld(),mt.makeTranslation(-xc.x,-xc.y,-xc.z),B0.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),W._frustum.setFromProjectionMatrix(B0,Re.coordinateSystem,Re.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,ee),s.clear();else{ee===0&&(s.setRenderTarget(W.map),s.clear());let Re=W.getViewport(ee);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),N.viewport(a)}i=W.getFrustum(ee),x(T,y,Ne,Z,this.type)}W.isPointLightShadow!==!0&&this.type===lr&&_(W,y),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(w,D,P)};function _(E,T){let y=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new At(n.x,n.y,{format:Zn,type:qi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,y,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,y,f,v,null)}function b(E,T,y,w){let D=null,P=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)D=P;else if(D=y.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=D.uuid,O=T.uuid,B=c[N];B===void 0&&(B={},c[N]=B);let H=B[O];H===void 0&&(H=D.clone(),B[O]=H,T.addEventListener("dispose",A)),D=H}if(D.visible=T.visible,D.wireframe=T.wireframe,w===lr?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:u[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let N=s.properties.get(D);N.light=y}return D}function x(E,T,y,w,D){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===lr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let O=e.update(E),B=E.material;if(Array.isArray(B)){let H=O.groups;for(let Z=0,W=H.length;Z<W;Z++){let re=H[Z],Y=B[re.materialIndex];if(Y&&Y.visible){let J=b(E,Y,w,D);E.onBeforeShadow(s,E,T,y,O,J,re),s.renderBufferDirect(y,null,O,J,E,re),E.onAfterShadow(s,E,T,y,O,J,re)}}}else if(B.visible){let H=b(E,B,w,D);E.onBeforeShadow(s,E,T,y,O,H,null),s.renderBufferDirect(y,null,O,H,E,null),E.onAfterShadow(s,E,T,y,O,H,null)}}let N=E.children;for(let O=0,B=N.length;O<B;O++)x(N[O],T,y,w,D)}function A(E){E.target.removeEventListener("dispose",A);for(let y in c){let w=c[y],D=E.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function IA(s,e){function t(){let L=!1,ve=new ct,$=null,xe=new ct(0,0,0,0);return{setMask:function(Ae){$!==Ae&&!L&&(s.colorMask(Ae,Ae,Ae,Ae),$=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,se,ke,Ue,wt){wt===!0&&(Ae*=Ue,se*=Ue,ke*=Ue),ve.set(Ae,se,ke,Ue),xe.equals(ve)===!1&&(s.clearColor(Ae,se,ke,Ue),xe.copy(ve))},reset:function(){L=!1,$=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,ve=!1,$=null,xe=null,Ae=null;return{setReversed:function(se){if(ve!==se){let ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Ue=Ae;Ae=null,this.setClear(Ue)}},getReversed:function(){return ve},setTest:function(se){se?ie(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(se){$!==se&&!L&&(s.depthMask(se),$=se)},setFunc:function(se){if(ve&&(se=s0[se]),xe!==se){switch(se){case vo:s.depthFunc(s.NEVER);break;case Gs:s.depthFunc(s.ALWAYS);break;case xo:s.depthFunc(s.LESS);break;case Gn:s.depthFunc(s.LEQUAL);break;case _o:s.depthFunc(s.EQUAL);break;case yo:s.depthFunc(s.GEQUAL);break;case Vs:s.depthFunc(s.GREATER);break;case So:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=se}},setLocked:function(se){L=se},setClear:function(se){Ae!==se&&(Ae=se,ve&&(se=1-se),s.clearDepth(se))},reset:function(){L=!1,$=null,xe=null,Ae=null,ve=!1}}}function n(){let L=!1,ve=null,$=null,xe=null,Ae=null,se=null,ke=null,Ue=null,wt=null;return{setTest:function(xt){L||(xt?ie(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(xt){ve!==xt&&!L&&(s.stencilMask(xt),ve=xt)},setFunc:function(xt,Qi,Sn){($!==xt||xe!==Qi||Ae!==Sn)&&(s.stencilFunc(xt,Qi,Sn),$=xt,xe=Qi,Ae=Sn)},setOp:function(xt,Qi,Sn){(se!==xt||ke!==Qi||Ue!==Sn)&&(s.stencilOp(xt,Qi,Sn),se=xt,ke=Qi,Ue=Sn)},setLocked:function(xt){L=xt},setClear:function(xt){wt!==xt&&(s.clearStencil(xt),wt=xt)},reset:function(){L=!1,ve=null,$=null,xe=null,Ae=null,se=null,ke=null,Ue=null,wt=null}}}let r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,b=null,x=null,A=null,E=null,T=null,y=new oe(0,0,0),w=0,D=!1,P=null,N=null,O=null,B=null,H=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=re>=2);let J=null,ee={},Ne=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),mt=new ct().fromArray(Ne),st=new ct().fromArray(Re);function ut(L,ve,$,xe){let Ae=new Uint8Array(4),se=s.createTexture();s.bindTexture(L,se),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<$;ke++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ve+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return se}let Q={};Q[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),a.setFunc(Gn),ce(!1),de(wu),ie(s.CULL_FACE),ae(jt);function ie(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function We(L,ve){return d[L]!==ve?(s.bindFramebuffer(L,ve),d[L]=ve,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ve),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function Me(L,ve){let $=p,xe=!1;if(L){$=f.get(ve),$===void 0&&($=[],f.set(ve,$));let Ae=L.textures;if($.length!==Ae.length||$[0]!==s.COLOR_ATTACHMENT0){for(let se=0,ke=Ae.length;se<ke;se++)$[se]=s.COLOR_ATTACHMENT0+se;$.length=Ae.length,xe=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,xe=!0);xe&&s.drawBuffers($)}function Ye(L){return v!==L?(s.useProgram(L),v=L,!0):!1}let St={[fn]:s.FUNC_ADD,[xf]:s.FUNC_SUBTRACT,[_f]:s.FUNC_REVERSE_SUBTRACT};St[yf]=s.MIN,St[Sf]=s.MAX;let ne={[wl]:s.ZERO,[Ms]:s.ONE,[bf]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[wf]:s.SRC_ALPHA_SATURATE,[Mf]:s.DST_COLOR,[Af]:s.DST_ALPHA,[Ef]:s.ONE_MINUS_SRC_COLOR,[Du]:s.ONE_MINUS_SRC_ALPHA,[Tf]:s.ONE_MINUS_DST_COLOR,[Cl]:s.ONE_MINUS_DST_ALPHA,[Cf]:s.CONSTANT_COLOR,[Rf]:s.ONE_MINUS_CONSTANT_COLOR,[Df]:s.CONSTANT_ALPHA,[Pf]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(L,ve,$,xe,Ae,se,ke,Ue,wt,xt){if(L===jt){m===!0&&(Se(s.BLEND),m=!1);return}if(m===!1&&(ie(s.BLEND),m=!0),L!==Aa){if(L!==g||xt!==D){if((_!==fn||A!==fn)&&(s.blendEquation(s.FUNC_ADD),_=fn,A=fn),xt)switch(L){case dn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.ONE,s.ONE);break;case Cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ru:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Le("WebGLState: Invalid blending: ",L);break}else switch(L){case dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cu:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",L);break}b=null,x=null,E=null,T=null,y.set(0,0,0),w=0,g=L,D=xt}return}Ae=Ae||ve,se=se||$,ke=ke||xe,(ve!==_||Ae!==A)&&(s.blendEquationSeparate(St[ve],St[Ae]),_=ve,A=Ae),($!==b||xe!==x||se!==E||ke!==T)&&(s.blendFuncSeparate(ne[$],ne[xe],ne[se],ne[ke]),b=$,x=xe,E=se,T=ke),(Ue.equals(y)===!1||wt!==w)&&(s.blendColor(Ue.r,Ue.g,Ue.b,wt),y.copy(Ue),w=wt),g=L,D=!1}function le(L,ve){L.side===qt?Se(s.CULL_FACE):ie(s.CULL_FACE);let $=L.side===Ut;ve&&($=!$),ce($),L.blending===dn&&L.transparent===!1?ae(jt):ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){P!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),P=L)}function de(L){L!==mf?(ie(s.CULL_FACE),L!==N&&(L===wu?s.cullFace(s.BACK):L===gf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),N=L}function Ge(L){L!==O&&(W&&s.lineWidth(L),O=L)}function ze(L,ve,$){L?(ie(s.POLYGON_OFFSET_FILL),(B!==ve||H!==$)&&(B=ve,H=$,a.getReversed()&&(ve=-ve),s.polygonOffset(ve,$))):Se(s.POLYGON_OFFSET_FILL)}function qe(L){L?ie(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=s.TEXTURE0+Z-1),J!==L&&(s.activeTexture(L),J=L)}function I(L,ve,$){$===void 0&&(J===null?$=s.TEXTURE0+Z-1:$=J);let xe=ee[$];xe===void 0&&(xe={type:void 0,texture:void 0},ee[$]=xe),(xe.type!==L||xe.texture!==ve)&&(J!==$&&(s.activeTexture($),J=$),s.bindTexture(L,ve||Q[L]),xe.type=L,xe.texture=ve)}function vt(){let L=ee[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function S(){try{s.texSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function F(){try{s.texSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function he(){try{s.texStorage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function ue(){try{s.texStorage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function K(){try{s.texImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function te(){try{s.texImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function me(L){return u[L]!==void 0?u[L]:s.getParameter(L)}function Oe(L,ve){u[L]!==ve&&(s.pixelStorei(L,ve),u[L]=ve)}function ye(L){mt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function ge(L){st.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Fe(L,ve){let $=c.get(ve);$===void 0&&($=new WeakMap,c.set(ve,$));let xe=$.get(L);xe===void 0&&(xe=s.getUniformBlockIndex(ve,L.name),$.set(L,xe))}function Ve(L,ve){let xe=c.get(ve).get(L);l.get(ve)!==xe&&(s.uniformBlockBinding(ve,xe,L.__bindingPointIndex),l.set(ve,xe))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,ee={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,b=null,x=null,A=null,E=null,T=null,y=new oe(0,0,0),w=0,D=!1,P=null,N=null,O=null,B=null,H=null,mt.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Se,bindFramebuffer:We,drawBuffers:Me,useProgram:Ye,setBlending:ae,setMaterial:le,setFlipSided:ce,setCullFace:de,setLineWidth:Ge,setPolygonOffset:ze,setScissorTest:qe,activeTexture:Ze,bindTexture:I,unbindTexture:vt,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:K,texImage3D:te,pixelStorei:Oe,getParameter:me,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:he,texStorage3D:ue,texSubImage2D:S,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:ye,viewport:ge,reset:Ke}}function UA(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new q,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function v(R,S){return p?new OffscreenCanvas(R,S):Zr("canvas")}function m(R,S,F){let G=1,j=rt(R);if((j.width>F||j.height>F)&&(G=F/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let he=Math.floor(G*j.width),ue=Math.floor(G*j.height);d===void 0&&(d=v(he,ue));let K=S?v(he,ue):d;return K.width=he,K.height=ue,K.getContext("2d").drawImage(R,0,0,he,ue),fe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+he+"x"+ue+")."),K}else return"data"in R&&fe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function g(R){return R.generateMipmaps}function _(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,S,F,G,j,he=!1){if(R!==null){if(s[R]!==void 0)return s[R];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8),F===s.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),F===s.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),S===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8),F===s.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),F===s.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),S===s.RGB&&(F===s.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),F===s.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),S===s.RGBA){let te=he?jr:nt.getTransfer(j);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=te===gt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),F===s.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(R,S){let F;return R?S===null||S===ni||S===jn?F=s.DEPTH24_STENCIL8:S===ei?F=s.DEPTH32F_STENCIL8:S===ur&&(F=s.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ni||S===jn?F=s.DEPTH_COMPONENT24:S===ei?F=s.DEPTH_COMPONENT32F:S===ur&&(F=s.DEPTH_COMPONENT16),F}function E(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pt&&R.minFilter!==ft?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){let S=R.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function y(R){let S=R.target;S.removeEventListener("dispose",y),P(S)}function w(R){let S=i.get(R);if(S.__webglInit===void 0)return;let F=R.source,G=f.get(F);if(G){let j=G[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(R),Object.keys(G).length===0&&f.delete(F)}i.remove(R)}function D(R){let S=i.get(R);s.deleteTexture(S.__webglTexture);let F=R.source,G=f.get(F);delete G[S.__cacheKey],a.memory.textures--}function P(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let j=0;j<S.__webglFramebuffer[G].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[G][j]);else s.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)s.deleteFramebuffer(S.__webglFramebuffer[G]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=R.textures;for(let G=0,j=F.length;G<j;G++){let he=i.get(F[G]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(R)}let N=0;function O(){N=0}function B(){return N}function H(R){N=R}function Z(){let R=N;return R>=n.maxTextures&&fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),N+=1,R}function W(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function re(R,S){let F=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){let G=R.image;if(G===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,R,S);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function Y(R,S){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Se(F,R,S);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function J(R,S){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Se(F,R,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function ee(R,S){let F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){We(F,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}let Ne={[Wr]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},Re={[Pt]:s.NEAREST,[Fu]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[ft]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[mn]:s.LINEAR_MIPMAP_LINEAR},mt={[kf]:s.NEVER,[Xf]:s.ALWAYS,[zf]:s.LESS,[dc]:s.LEQUAL,[Gf]:s.EQUAL,[fc]:s.GEQUAL,[Vf]:s.GREATER,[Wf]:s.NOTEQUAL};function st(R,S){if(S.type===ei&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ft||S.magFilter===Ra||S.magFilter===hr||S.magFilter===mn||S.minFilter===ft||S.minFilter===Ra||S.minFilter===hr||S.minFilter===mn)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ne[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ne[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ne[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Re[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Re[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pt||S.minFilter!==hr&&S.minFilter!==mn||S.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ut(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));let G=S.source,j=f.get(G);j===void 0&&(j={},f.set(G,j));let he=W(S);if(he!==R.__cacheKey){j[he]===void 0&&(j[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[he].usedTimes++;let ue=j[R.__cacheKey];ue!==void 0&&(j[R.__cacheKey].usedTimes--,ue.usedTimes===0&&D(S)),R.__cacheKey=he,R.__webglTexture=j[he].texture}return F}function Q(R,S,F){return Math.floor(Math.floor(R/F)/S)}function ie(R,S,F,G){let he=R.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,F,G,S.data);else{he.sort((Oe,ye)=>Oe.start-ye.start);let ue=0;for(let Oe=1;Oe<he.length;Oe++){let ye=he[ue],ge=he[Oe],Fe=ye.start+ye.count,Ve=Q(ge.start,S.width,4),Ke=Q(ye.start,S.width,4);ge.start<=Fe+1&&Ve===Ke&&Q(ge.start+ge.count-1,S.width,4)===Ve?ye.count=Math.max(ye.count,ge.start+ge.count-ye.start):(++ue,he[ue]=ge)}he.length=ue+1;let K=t.getParameter(s.UNPACK_ROW_LENGTH),te=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Oe=0,ye=he.length;Oe<ye;Oe++){let ge=he[Oe],Fe=Math.floor(ge.start/4),Ve=Math.ceil(ge.count/4),Ke=Fe%S.width,L=Math.floor(Fe/S.width),ve=Ve,$=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ke,L,ve,$,F,G,S.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function Se(R,S,F){let G=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=s.TEXTURE_3D);let j=ut(R,S),he=S.source;t.bindTexture(G,R.__webglTexture,s.TEXTURE0+F);let ue=i.get(he);if(he.version!==ue.__version||j===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let $=nt.getPrimaries(nt.workingColorSpace),xe=S.colorSpace===ji?null:nt.getPrimaries(S.colorSpace),Ae=S.colorSpace===ji||$===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let te=m(S.image,!1,n.maxTextureSize);te=vt(S,te);let me=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),ye=x(S.internalFormat,me,Oe,S.normalized,S.colorSpace,S.isVideoTexture);st(G,S);let ge,Fe=S.mipmaps,Ve=S.isVideoTexture!==!0,Ke=ue.__version===void 0||j===!0,L=he.dataReady,ve=E(S,te);if(S.isDepthTexture)ye=A(S.format===gn,S.type),Ke&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,ye,te.width,te.height,0,me,Oe,null));else if(S.isDataTexture)if(Fe.length>0){Ve&&Ke&&t.texStorage2D(s.TEXTURE_2D,ve,ye,Fe[0].width,Fe[0].height);for(let $=0,xe=Fe.length;$<xe;$++)ge=Fe[$],Ve?L&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ge.width,ge.height,me,Oe,ge.data):t.texImage2D(s.TEXTURE_2D,$,ye,ge.width,ge.height,0,me,Oe,ge.data);S.generateMipmaps=!1}else Ve?(Ke&&t.texStorage2D(s.TEXTURE_2D,ve,ye,te.width,te.height),L&&ie(S,te,me,Oe)):t.texImage2D(s.TEXTURE_2D,0,ye,te.width,te.height,0,me,Oe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,ye,Fe[0].width,Fe[0].height,te.depth);for(let $=0,xe=Fe.length;$<xe;$++)if(ge=Fe[$],S.format!==li)if(me!==null)if(Ve){if(L)if(S.layerUpdates.size>0){let Ae=qu(ge.width,ge.height,S.format,S.type);for(let se of S.layerUpdates){let ke=ge.data.subarray(se*Ae/ge.data.BYTES_PER_ELEMENT,(se+1)*Ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,se,ge.width,ge.height,1,me,ke)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,ye,ge.width,ge.height,te.depth,0,ge.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,te.depth,me,Oe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,ye,ge.width,ge.height,te.depth,0,me,Oe,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ve&&Ke&&t.texStorage2D(s.TEXTURE_2D,ve,ye,Fe[0].width,Fe[0].height);for(let $=0,xe=Fe.length;$<xe;$++)ge=Fe[$],S.format!==li?me!==null?Ve?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,$,ye,ge.width,ge.height,0,ge.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ge.width,ge.height,me,Oe,ge.data):t.texImage2D(s.TEXTURE_2D,$,ye,ge.width,ge.height,0,me,Oe,ge.data)}else if(S.isDataArrayTexture)if(Ve){if(Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,ye,te.width,te.height,te.depth),L)if(S.layerUpdates.size>0){let $=qu(te.width,te.height,S.format,S.type);for(let xe of S.layerUpdates){let Ae=te.data.subarray(xe*$/te.data.BYTES_PER_ELEMENT,(xe+1)*$/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,te.width,te.height,1,me,Oe,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Oe,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,me,Oe,te.data);else if(S.isData3DTexture)Ve?(Ke&&t.texStorage3D(s.TEXTURE_3D,ve,ye,te.width,te.height,te.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Oe,te.data)):t.texImage3D(s.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,me,Oe,te.data);else if(S.isFramebufferTexture){if(Ke)if(Ve)t.texStorage2D(s.TEXTURE_2D,ve,ye,te.width,te.height);else{let $=te.width,xe=te.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,ye,$,xe,0,me,Oe,null),$>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let $=s.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),te.parentNode!==$){$.appendChild(te),u.add(S),$.onpaint=xe=>{let Ae=xe.changedElements;for(let se of u)Ae.includes(se.image)&&(se.needsUpdate=!0)},$.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,te);else{let Ae=s.RGBA,se=s.RGBA,ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ae,se,ke,te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ve&&Ke){let $=rt(Fe[0]);t.texStorage2D(s.TEXTURE_2D,ve,ye,$.width,$.height)}for(let $=0,xe=Fe.length;$<xe;$++)ge=Fe[$],Ve?L&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,me,Oe,ge):t.texImage2D(s.TEXTURE_2D,$,ye,me,Oe,ge);S.generateMipmaps=!1}else if(Ve){if(Ke){let $=rt(te);t.texStorage2D(s.TEXTURE_2D,ve,ye,$.width,$.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Oe,te)}else t.texImage2D(s.TEXTURE_2D,0,ye,me,Oe,te);g(S)&&_(G),ue.__version=he.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function We(R,S,F){if(S.image.length!==6)return;let G=ut(R,S),j=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+F);let he=i.get(j);if(j.version!==he.__version||G===!0){t.activeTexture(s.TEXTURE0+F);let ue=nt.getPrimaries(nt.workingColorSpace),K=S.colorSpace===ji?null:nt.getPrimaries(S.colorSpace),te=S.colorSpace===ji||ue===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!me&&!Oe?ye[se]=m(S.image[se],!0,n.maxCubemapSize):ye[se]=Oe?S.image[se].image:S.image[se],ye[se]=vt(S,ye[se]);let ge=ye[0],Fe=r.convert(S.format,S.colorSpace),Ve=r.convert(S.type),Ke=x(S.internalFormat,Fe,Ve,S.normalized,S.colorSpace),L=S.isVideoTexture!==!0,ve=he.__version===void 0||G===!0,$=j.dataReady,xe=E(S,ge);st(s.TEXTURE_CUBE_MAP,S);let Ae;if(me){L&&ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ke,ge.width,ge.height);for(let se=0;se<6;se++){Ae=ye[se].mipmaps;for(let ke=0;ke<Ae.length;ke++){let Ue=Ae[ke];S.format!==li?Fe!==null?L?$&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Ke,Ue.width,Ue.height,0,Ue.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ue.width,Ue.height,Fe,Ve,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Ke,Ue.width,Ue.height,0,Fe,Ve,Ue.data)}}}else{if(Ae=S.mipmaps,L&&ve){Ae.length>0&&xe++;let se=rt(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ke,se.width,se.height)}for(let se=0;se<6;se++)if(Oe){L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Fe,Ve,ye[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,ye[se].width,ye[se].height,0,Fe,Ve,ye[se].data);for(let ke=0;ke<Ae.length;ke++){let wt=Ae[ke].image[se].image;L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,wt.width,wt.height,Fe,Ve,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Ke,wt.width,wt.height,0,Fe,Ve,wt.data)}}else{L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Ve,ye[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,Fe,Ve,ye[se]);for(let ke=0;ke<Ae.length;ke++){let Ue=Ae[ke];L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Fe,Ve,Ue.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Ke,Fe,Ve,Ue.image[se])}}}g(S)&&_(s.TEXTURE_CUBE_MAP),he.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Me(R,S,F,G,j,he){let ue=r.convert(F.format,F.colorSpace),K=r.convert(F.type),te=x(F.internalFormat,ue,K,F.normalized,F.colorSpace),me=i.get(S),Oe=i.get(F);if(Oe.__renderTarget=S,!me.__hasExternalTextures){let ye=Math.max(1,S.width>>he),ge=Math.max(1,S.height>>he);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,he,te,ye,ge,S.depth,0,ue,K,null):t.texImage2D(j,he,te,ye,ge,0,ue,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ze(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,j,Oe.__webglTexture,0,qe(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,j,Oe.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(R,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let G=S.depthTexture,j=G&&G.isDepthTexture?G.type:null,he=A(S.stencilBuffer,j),ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),he,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),he,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,he,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,R)}else{let G=S.textures;for(let j=0;j<G.length;j++){let he=G[j],ue=r.convert(he.format,he.colorSpace),K=r.convert(he.type),te=x(he.internalFormat,ue,K,he.normalized,he.colorSpace);Ze(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),te,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,te,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(R,S,F){let G=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),st(s.TEXTURE_CUBE_MAP,S.depthTexture);let me=r.convert(S.depthTexture.format),Oe=r.convert(S.depthTexture.type),ye;S.depthTexture.format===an?ye=s.DEPTH_COMPONENT24:S.depthTexture.format===gn&&(ye=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,S.width,S.height,0,me,Oe,null)}}else re(S.depthTexture,0);let he=j.__webglTexture,ue=qe(S),K=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,te=S.depthTexture.format===gn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===an)Ze(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,K,he,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,te,K,he,0);else if(S.depthTexture.format===gn)Ze(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,K,he,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,te,K,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let S=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=G}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)St(S.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?St(S.__webglFramebuffer[0],R,0):St(S.__webglFramebuffer,R,0)}else if(F){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=s.createRenderbuffer(),Ye(S.__webglDepthbuffer[G],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,he)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ye(S.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,he)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(R,S,F){let G=i.get(R);S!==void 0&&Me(G.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&ne(R)}function le(R){let S=R.texture,F=i.get(R),G=i.get(S);R.addEventListener("dispose",y);let j=R.textures,he=R.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=S.version,a.memory.textures++),he){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let te=0;te<S.mipmaps.length;te++)F.__webglFramebuffer[K][te]=s.createFramebuffer()}else F.__webglFramebuffer[K]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)F.__webglFramebuffer[K]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ue)for(let K=0,te=j.length;K<te;K++){let me=i.get(j[K]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Ze(R)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let te=j[K];F.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let me=r.convert(te.format,te.colorSpace),Oe=r.convert(te.type),ye=x(te.internalFormat,me,Oe,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),ge=qe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ye,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,F.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),st(s.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)Me(F.__webglFramebuffer[K][te],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,te);else Me(F.__webglFramebuffer[K],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(S)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let K=0,te=j.length;K<te;K++){let me=j[K],Oe=i.get(me),ye=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,Oe.__webglTexture),st(ye,me),Me(F.__webglFramebuffer,R,me,s.COLOR_ATTACHMENT0+K,ye,0),g(me)&&_(ye)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),st(K,S),S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)Me(F.__webglFramebuffer[te],R,S,s.COLOR_ATTACHMENT0,K,te);else Me(F.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,K,0);g(S)&&_(K),t.unbindTexture()}R.depthBuffer&&ne(R)}function ce(R){let S=R.textures;for(let F=0,G=S.length;F<G;F++){let j=S[F];if(g(j)){let he=b(R),ue=i.get(j).__webglTexture;t.bindTexture(he,ue),_(he),t.unbindTexture()}}}let de=[],Ge=[];function ze(R){if(R.samples>0){if(Ze(R)===!1){let S=R.textures,F=R.width,G=R.height,j=s.COLOR_BUFFER_BIT,he=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=i.get(R),K=S.length>1;if(K)for(let me=0;me<S.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let me=0;me<S.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let Oe=i.get(S[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Oe,0)}s.blitFramebuffer(0,0,F,G,0,0,F,G,j,s.NEAREST),l===!0&&(de.length=0,Ge.length=0,de.push(s.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(he),Ge.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let me=0;me<S.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let Oe=i.get(S[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function qe(R){return Math.min(n.maxSamples,R.samples)}function Ze(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function I(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function vt(R,S){let F=R.colorSpace,G=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==hs&&F!==ji&&(nt.getTransfer(F)===gt?(G!==li||j!==Ft)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",F)),S}function rt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=O,this.getTextureUnits=B,this.setTextureUnits=H,this.setTexture2D=re,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function G0(s,e){function t(i,n=ji){let r,a=nt.getTransfer(n);if(i===Ft)return s.UNSIGNED_BYTE;if(i===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return s.UNSIGNED_SHORT_5_5_5_1;if(i===zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Gu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hu)return s.BYTE;if(i===ku)return s.SHORT;if(i===ur)return s.UNSIGNED_SHORT;if(i===Dl)return s.INT;if(i===ni)return s.UNSIGNED_INT;if(i===ei)return s.FLOAT;if(i===qi)return s.HALF_FLOAT;if(i===Vu)return s.ALPHA;if(i===Wu)return s.RGB;if(i===li)return s.RGBA;if(i===an)return s.DEPTH_COMPONENT;if(i===gn)return s.DEPTH_STENCIL;if(i===Ul)return s.RED;if(i===Da)return s.RED_INTEGER;if(i===Zn)return s.RG;if(i===dr)return s.RG_INTEGER;if(i===Ll)return s.RGBA_INTEGER;if(i===Pa||i===Ia||i===Ua||i===La)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===Nl||i===Ol||i===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===kl||i===zl||i===Gl||i===Vl||i===Ba||i===Wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===kl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gl)return r.COMPRESSED_R11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ba)return r.COMPRESSED_RG11_EAC;if(i===Wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xl||i===Yl||i===ql||i===jl||i===Zl||i===Kl||i===Ql||i===Jl||i===$l||i===ec||i===tc||i===ic||i===nc||i===sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ql)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===ac||i===oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rc)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===cc||i===Na||i===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
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

}`,vp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ot({vertexShader:LA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xp=class extends Ri{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding!="undefined",m=new vp,g={},_=t.getContextAttributes(),b=null,x=null,A=[],E=[],T=new q,y=null,w=null,D=new Rt;D.viewport=new ct;let P=new Rt;P.viewport=new ct;let N=[D,P],O=new Sl,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=A[Q];return ie===void 0&&(ie=new js,A[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=A[Q];return ie===void 0&&(ie=new js,A[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=A[Q];return ie===void 0&&(ie=new js,A[Q]=ie),ie.getHandSpace()};function Z(Q){let ie=E.indexOf(Q.inputSource);if(ie===-1)return;let Se=A[ie];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,c||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",re);for(let Q=0;Q<A.length;Q++){let ie=E[Q];ie!==null&&(E[Q]=null,A[Q].disconnect(ie))}B=null,H=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(b),f=null,d=null,u=null,n=null,x=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),w!==null){let Q=w.camera;Q.fov=w.fov,Q.zoom=w.zoom,Q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=function(Q){return Ai(this,null,function*(){if(n=Q,n!==null){if(b=e.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",W),n.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&(yield t.makeXRCompatible()),y=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,We=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?gn:an,We=_.stencil?jn:ni);let Ye={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new At(d.textureWidth,d.textureHeight,{format:li,type:Ft,depthTexture:new Si(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Se),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new At(f.framebufferWidth,f.framebufferHeight,{format:li,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),ut.setContext(n),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let ie=0;ie<Q.removed.length;ie++){let Se=Q.removed[ie],We=E.indexOf(Se);We>=0&&(E[We]=null,A[We].disconnect(Se))}for(let ie=0;ie<Q.added.length;ie++){let Se=Q.added[ie],We=E.indexOf(Se);if(We===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=E.length){E.push(Se),We=Ye;break}else if(E[Ye]===null){E[Ye]=Se,We=Ye;break}if(We===-1)break}let Me=A[We];Me&&Me.connect(Se)}}let Y=new C,J=new C;function ee(Q,ie,Se){Y.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);let We=Y.distanceTo(J),Me=ie.projectionMatrix.elements,Ye=Se.projectionMatrix.elements,St=Me[14]/(Me[10]-1),ne=Me[14]/(Me[10]+1),ae=(Me[9]+1)/Me[5],le=(Me[9]-1)/Me[5],ce=(Me[8]-1)/Me[0],de=(Ye[8]+1)/Ye[0],Ge=St*ce,ze=St*de,qe=We/(-ce+de),Ze=qe*-ce;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ze),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let I=St+qe,vt=ne+qe,rt=Ge-Ze,R=ze+(We-Ze),S=ae*ne/vt*I,F=le*ne/vt*I;Q.projectionMatrix.makePerspective(rt,R,S,F,I,vt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ne(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let ie=Q.near,Se=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),O.near=P.near=D.near=ie,O.far=P.far=D.far=Se,(B!==O.near||H!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,H=O.far),O.layers.mask=Q.layers.mask|6,D.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let We=Q.parent,Me=O.cameras;Ne(O,We);for(let Ye=0;Ye<Me.length;Ye++)Ne(Me[Ye],We);Me.length===2?ee(O,D,P):O.projectionMatrix.copy(D.projectionMatrix),w===null&&Q.isPerspectiveCamera&&(w={camera:Q,fov:Q.fov,zoom:Q.zoom}),Re(Q,O,We)};function Re(Q,ie,Se){Se===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ws*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return g[Q]};let mt=null;function st(Q,ie){if(h=ie.getViewerPose(c||a),p=ie,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let We=!1;Se.length!==O.cameras.length&&(O.cameras.length=0,We=!0);for(let ne=0;ne<Se.length;ne++){let ae=Se[ne],le=null;if(f!==null)le=f.getViewport(ae);else{let de=u.getViewSubImage(d,ae);le=de.viewport,ne===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let ce=N[ne];ce===void 0&&(ce=new Rt,ce.layers.enable(ne),ce.viewport=new ct,N[ne]=ce),ce.matrix.fromArray(ae.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ae.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),ne===0&&(O.matrix.copy(ce.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),We===!0&&O.cameras.push(ce)}let Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let ne=u.getDepthInformation(Se[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,n.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let ne=0;ne<Se.length;ne++){let ae=Se[ne].camera;if(ae){let le=g[ae];le||(le=new ta,g[ae]=le);let ce=u.getCameraImage(ae);le.sourceTexture=ce}}}}for(let Se=0;Se<A.length;Se++){let We=E[Se],Me=A[Se];We!==null&&Me!==void 0&&Me.update(We,ie,c||a)}mt&&mt(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let ut=new N0;ut.setAnimationLoop(st),this.setAnimationLoop=function(Q){mt=Q},this.dispose=function(){}}},NA=new Ce,V0=new je;V0.set(-1,0,0,0,1,0,0,0,1);function OA(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Zf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,b,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,x=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(V0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ut&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function FA(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){let E=A.program;i.uniformBlockBinding(x,E)}function c(x,A){let E=n[x.id];E===void 0&&(m(x),E=h(x),n[x.id]=E,x.addEventListener("dispose",_));let T=A.program;i.updateUBOMapping(x,T);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let A=u();x.__bindingPointIndex=A;let E=s.createBuffer(),T=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,T,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,E),E}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let A=n[x.id],E=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let y=0,w=E.length;y<w;y++){let D=E[y];if(Array.isArray(D))for(let P=0,N=D.length;P<N;P++)f(D[P],y,P,T);else f(D,y,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,A,E,T){if(v(x,A,E,T)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let D=0;for(let P=0;P<w.length;P++){let N=w[P],O=g(N);p(N,x.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function p(x,A,E){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,E)}function v(x,A,E,T){let y=x.value,w=A+"_"+E;if(T[w]===void 0)return typeof y=="number"||typeof y=="boolean"?T[w]=y:ArrayBuffer.isView(y)?T[w]=y.slice():T[w]=y.clone(),!0;{let D=T[w];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return T[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(x){let A=x.uniforms,E=0,T=16;for(let w=0,D=A.length;w<D;w++){let P=Array.isArray(A[w])?A[w]:[A[w]];for(let N=0,O=P.length;N<O;N++){let B=P[N],H=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,W=H.length;Z<W;Z++){let re=H[Z],Y=g(re),J=E%T,ee=J%Y.boundary,Ne=J+ee;E+=ee,Ne!==0&&T-Ne<Y.storage&&(E+=T-Ne),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=Y.storage}}}let y=E%T;return y>0&&(E+=T-y),x.__size=E,x.__cache={},this}function g(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",x),A}function _(x){let A=x.target;A.removeEventListener("dispose",_);let E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(n[A.id]),delete n[A.id],delete r[A.id]}function b(){for(let x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:l,update:c,dispose:b}}var HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function kA(){return Pn===null&&(Pn=new vi(HA,16,16,Zn,qi),Pn.name="DFG_LUT",Pn.minFilter=ft,Pn.magFilter=ft,Pn.wrapS=gi,Pn.wrapT=gi,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var bc=class{constructor(e={}){let{canvas:t=Yf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ft}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=f,m=new Set([Ll,dr,Da]),g=new Set([Ft,ni,ur,jn,Pl,Il]),_=new Uint32Array(4),b=new Int32Array(4),x=new C,A=null,E=null,T=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,P=!1,N=null,O=null,B=null,H=null;this._outputColorSpace=tt;let Z=0,W=0,re=null,Y=-1,J=null,ee=new ct,Ne=new ct,Re=null,mt=new oe(0),st=0,ut=t.width,Q=t.height,ie=1,Se=null,We=null,Me=new ct(0,0,ut,Q),Ye=new ct(0,0,ut,Q),St=!1,ne=new Mn,ae=!1,le=!1,ce=new Ce,de=new C,Ge=new ct,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Ze(){return re===null?ie:1}let I=i;function vt(M,U){return t.getContext(M,U)}let rt,R,S,F,G,j,he,ue,K,te,me,Oe,ye,ge,Fe,Ve,Ke,L,ve,$,xe,Ae,se;try{let M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Qi,!1),I===null){let U="webgl2";if(I=vt(U,M),I===null)throw vt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(M){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Qi,!1),Le("WebGLRenderer: "+M.message),M}function ke(){rt=new jb(I),rt.init(),xe=new G0(I,rt),R=new Fb(I,rt,e,xe),S=new IA(I,rt),R.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),O=I.createFramebuffer(),B=I.createFramebuffer(),H=I.createFramebuffer(),F=new Qb(I),G=new xA,j=new UA(I,rt,S,G,R,xe,F),he=new qb(D),ue=new $_(I),Ae=new Nb(I,ue),K=new Zb(I,ue,F,Ae),te=new $b(I,K,ue,Ae,F),L=new Jb(I,R,j),Fe=new Hb(G),me=new vA(D,he,rt,R,Ae,Fe),Oe=new OA(D,G),ye=new yA,ge=new TA(rt),Ke=new Bb(D,he,S,te,p,l),Ve=new PA(D,te,R),se=new FA(I,F,R,S),ve=new Ob(I,rt,F),$=new Kb(I,rt,F),F.programs=me.programs,D.capabilities=R,D.extensions=rt,D.properties=G,D.renderLists=ye,D.shadowMap=Ve,D.state=S,D.info=F}v!==Ft&&(w=new tE(v,t.width,t.height,o,n,r));let Ue=new xp(D,I);this.xr=Ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(ut,Q,!1))},this.getSize=function(M){return M.set(ut,Q)},this.setSize=function(M,U,X=!0){if(Ue.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=M,Q=U,t.width=Math.floor(M*ie),t.height=Math.floor(U*ie),X===!0&&(t.style.width=M+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ut*ie,Q*ie).floor()},this.setDrawingBufferSize=function(M,U,X){ut=M,Q=U,ie=X,t.width=Math.floor(M*X),t.height=Math.floor(U*X),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===Ft){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ee)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,U,X,k){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,U,X,k),S.viewport(ee.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,U,X,k){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,U,X,k),S.scissor(Ne.copy(Ye).multiplyScalar(ie).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(M){S.setScissorTest(St=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){We=M},this.getClearColor=function(M){return M.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,X=!0){let k=0;if(M){let z=!1;if(re!==null){let Ee=re.texture.format;z=m.has(Ee)}if(z){let Ee=re.texture.type,we=g.has(Ee),be=Ke.getClearColor(),De=Ke.getClearAlpha(),Be=be.r,et=be.g,at=be.b;we?(_[0]=Be,_[1]=et,_[2]=at,_[3]=De,I.clearBufferuiv(I.COLOR,0,_)):(b[0]=Be,b[1]=et,b[2]=at,b[3]=De,I.clearBufferiv(I.COLOR,0,b))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Qi,!1),Ke.dispose(),ye.dispose(),ge.dispose(),G.dispose(),he.dispose(),te.dispose(),Ae.dispose(),se.dispose(),me.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",kp),Ue.removeEventListener("sessionend",zp),ws.stop()};function wt(M){M.preventDefault(),Kr("WebGLRenderer: Context Lost."),P=!0}function xt(){Kr("WebGLRenderer: Context Restored."),P=!1;let M=F.autoReset,U=Ve.enabled,X=Ve.autoUpdate,k=Ve.needsUpdate,z=Ve.type;ke(),F.autoReset=M,Ve.enabled=U,Ve.autoUpdate=X,Ve.needsUpdate=k,Ve.type=z}function Qi(M){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Sn(M){let U=M.target;U.removeEventListener("dispose",Sn),kv(U)}function kv(M){zv(M),G.remove(M)}function zv(M){let U=G.get(M).programs;U!==void 0&&(U.forEach(function(X){me.releaseProgram(X)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,X,k,z,Ee){U===null&&(U=ze);let we=z.isMesh&&z.matrixWorld.determinantAffine()<0,be=Wv(M,U,X,k,z);S.setMaterial(k,we);let De=X.index,Be=1;if(k.wireframe===!0){if(De=K.getWireframeAttribute(X),De===void 0)return;Be=2}let et=X.drawRange,at=X.attributes.position,Pe=et.start*Be,_t=(et.start+et.count)*Be;Ee!==null&&(Pe=Math.max(Pe,Ee.start*Be),_t=Math.min(_t,(Ee.start+Ee.count)*Be)),De!==null?(Pe=Math.max(Pe,0),_t=Math.min(_t,De.count)):at!=null&&(Pe=Math.max(Pe,0),_t=Math.min(_t,at.count));let Vt=_t-Pe;if(Vt<0||Vt===1/0)return;Ae.setup(z,k,be,X,De);let Dt,Mt=ve;if(De!==null&&(Dt=ue.get(De),Mt=$,Mt.setIndex(Dt)),z.isMesh)k.wireframe===!0?(S.setLineWidth(k.wireframeLinewidth*Ze()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(z.isLine){let si=k.linewidth;si===void 0&&(si=1),S.setLineWidth(si*Ze()),z.isLineSegments?Mt.setMode(I.LINES):z.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else z.isPoints?Mt.setMode(I.POINTS):z.isSprite&&Mt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let si=z._multiDrawStarts,Te=z._multiDrawCounts,fi=z._multiDrawCount,dt=De?ue.get(De).bytesPerElement:1,ki=G.get(k).currentProgram.getUniforms();for(let bn=0;bn<fi;bn++)ki.setValue(I,"_gl_DrawID",bn),Mt.render(si[bn]/dt,Te[bn])}else if(z.isInstancedMesh)Mt.renderInstances(Pe,Vt,z.count);else if(X.isInstancedBufferGeometry){let si=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,si);Mt.renderInstances(Pe,Vt,Te)}else Mt.render(Pe,Vt)};function Hp(M,U,X,k){N!==null&&M.isNodeMaterial&&N.setObject(k,M),ae===!0&&Fe.setState(M,X,!1),M.transparent===!0&&M.side===qt&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,Pc(M,U,k),M.side=un,M.needsUpdate=!0,Pc(M,U,k),M.side=qt):Pc(M,U,k)}this.compile=function(M,U,X=null){X===null&&(X=M),N!==null&&N.renderStart(M,U,X),E=ge.get(X),E.init(U),y.push(E),X.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),M!==X&&M.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),le=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,le),ae===!0&&Fe.setGlobalState(this.clippingPlanes,U),N!==null&&Ve.render(E.state.shadowsArray,X,U);let k=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let Ee=z.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){let be=Ee[we];Hp(be,X,U,z),k.add(be)}else Hp(Ee,X,U,z),k.add(Ee)}),E=y.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(M,U,X=null){let k=this.compile(M,U,X);return new Promise(z=>{function Ee(){if(k.forEach(function(we){let De=G.get(we).currentProgram;(De===void 0||De.isReady())&&k.delete(we)}),k.size===0){z(M);return}setTimeout(Ee,10)}rt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let vd=null;function Gv(M){vd&&vd(M)}function kp(){ws.stop()}function zp(){ws.start()}let ws=new N0;ws.setAnimationLoop(Gv),typeof self!="undefined"&&ws.setContext(self),this.setAnimationLoop=function(M){vd=M,Ue.setAnimationLoop(M),M===null?ws.stop():ws.start()},Ue.addEventListener("sessionstart",kp),Ue.addEventListener("sessionend",zp),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(M,U);let X=Ue.enabled===!0&&Ue.isPresenting===!0,k=w!==null&&(re===null||X)&&w.begin(D,re);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(U),U=Ue.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,U,re),E=ge.get(M,y.length),E.init(U),E.state.textureUnits=j.getTextureUnits(),y.push(E),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(ce,Ci,U.reversedDepth),le=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,le),A=ye.get(M,T.length),A.init(),T.push(A),Ue.enabled===!0&&Ue.isPresenting===!0){let we=D.xr.getDepthSensingMesh();we!==null&&xd(we,U,-1/0,D.sortObjects)}xd(M,U,0,D.sortObjects),A.finish(),N!==null&&N.updateLights(E.state.lightsArray),D.sortObjects===!0&&A.sort(Se,We),qe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,qe&&Ke.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Fe.beginShadows();let z=E.state.shadowsArray;if(Ve.render(z,M,U),ae===!0&&Fe.endShadows(),(k&&w.hasRenderPass())===!1){let we=A.opaque,be=A.transmissive;if(E.setupLights(),U.isArrayCamera){let De=U.cameras;if(be.length>0)for(let Be=0,et=De.length;Be<et;Be++){let at=De[Be];Vp(we,be,M,at)}qe&&Ke.render(M);for(let Be=0,et=De.length;Be<et;Be++){let at=De[Be];Gp(A,M,at,at.viewport)}}else be.length>0&&Vp(we,be,M,U),qe&&Ke.render(M),Gp(A,M,U)}re!==null&&W===0&&(j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re)),k&&w.end(D),M.isScene===!0&&M.onAfterRender(D,M,U),Ae.resetDefaultState(),Y=-1,J=null,y.pop(),y.length>0?(E=y[y.length-1],j.setTextureUnits(E.state.textureUnits),ae===!0&&Fe.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?A=T[T.length-1]:A=null,N!==null&&N.renderEnd()};function xd(M,U,X,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ne)){k&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);let we=te.update(M),be=M.material;be.visible&&A.push(M,we,be,X,Ge.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ne))){let we=te.update(M),be=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(be)){let De=we.groups;for(let Be=0,et=De.length;Be<et;Be++){let at=De[Be],Pe=be[at.materialIndex];Pe&&Pe.visible&&A.push(M,we,Pe,X,Ge.z,at,U)}}else be.visible&&A.push(M,we,be,X,Ge.z,null,U)}}let Ee=M.children;for(let we=0,be=Ee.length;we<be;we++)xd(Ee[we],U,X,k)}function Gp(M,U,X,k){let{opaque:z,transmissive:Ee,transparent:we}=M;E.setupLightsView(X),ae===!0&&Fe.setGlobalState(D.clippingPlanes,X),k&&S.viewport(ee.copy(k)),z.length>0&&Dc(z,U,X),Ee.length>0&&Dc(Ee,U,X),we.length>0&&Dc(we,U,X),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Vp(M,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Pe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new At(1,1,{generateMipmaps:!0,type:Pe?qi:Ft,minFilter:mn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[k.id],we=k.viewport||ee;Ee.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);let be=D.getRenderTarget(),De=D.getActiveCubeFace(),Be=D.getActiveMipmapLevel();D.setRenderTarget(Ee),D.getClearColor(mt),st=D.getClearAlpha(),st<1&&D.setClearColor(16777215,.5),D.clear(),qe&&Ke.render(X);let et=D.toneMapping;D.toneMapping=Yi;let at=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ae===!0&&Fe.setGlobalState(D.clippingPlanes,k),Dc(M,X,k),j.updateMultisampleRenderTarget(Ee),j.updateRenderTargetMipmap(Ee),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let _t=0,Vt=U.length;_t<Vt;_t++){let Dt=U[_t],{object:Mt,geometry:si,material:Te,group:fi}=Dt;if(Te.side===qt&&Mt.layers.test(k.layers)){let dt=Te.side;Te.side=Ut,Te.needsUpdate=!0,Wp(Mt,X,k,si,Te,fi),Te.side=dt,Te.needsUpdate=!0,Pe=!0}}Pe===!0&&(j.updateMultisampleRenderTarget(Ee),j.updateRenderTargetMipmap(Ee))}D.setRenderTarget(be,De,Be),D.setClearColor(mt,st),at!==void 0&&(k.viewport=at),D.toneMapping=et}function Dc(M,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let z=0,Ee=M.length;z<Ee;z++){let we=M[z],{object:be,geometry:De,group:Be}=we,et=we.material;et.allowOverride===!0&&k!==null&&(et=k),be.layers.test(X.layers)&&Wp(be,U,X,De,et,Be)}}function Wp(M,U,X,k,z,Ee){N!==null&&z.isNodeMaterial&&N.setObject(M,z),M.onBeforeRender(D,U,X,k,z,Ee),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(D,U,X,k,M,Ee),z.transparent===!0&&z.side===qt&&z.forceSinglePass===!1?(z.side=Ut,z.needsUpdate=!0,D.renderBufferDirect(X,U,k,z,M,Ee),z.side=un,z.needsUpdate=!0,D.renderBufferDirect(X,U,k,z,M,Ee),z.side=qt):D.renderBufferDirect(X,U,k,z,M,Ee),M.onAfterRender(D,U,X,k,z,Ee)}function Pc(M,U,X){U.isScene!==!0&&(U=ze);let k=G.get(M),z=E.state.lights,Ee=E.state.shadowsArray,we=z.state.version,be=me.getParameters(M,z.state,Ee,U,X,E.state.lightProbeGridArray),De=me.getProgramCacheKey(be),Be=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=he.get(M.envMap||k.environment,et),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Sn),Be=new Map,k.programs=Be);let at=Be.get(De);if(at!==void 0){if(k.currentProgram===at&&k.lightsStateVersion===we)return Yp(M,be),at}else be.uniforms=me.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,X,be),M.onBeforeCompile(be,D),at=me.acquireProgram(be,De),Be.set(De,at),k.uniforms=be.uniforms;let Pe=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=Fe.uniform),Yp(M,be),k.needsLights=Yv(M),k.lightsStateVersion=we,k.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.sunLights.value=z.state.sun,Pe.sunLightShadows.value=z.state.sunShadow,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.sunShadowMatrix.value=z.state.sunShadowMatrix,Pe.sunShadowCascade.value=z.state.sunShadowCascade,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=at,k.uniformsList=null,at}function Xp(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ka.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Yp(M,U){let X=G.get(M);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Vv(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let X=0,k=M.length;X<k;X++){let z=M[X];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function Wv(M,U,X,k,z){U.isScene!==!0&&(U=ze),j.resetTextureUnits();let Ee=U.fog,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,be=re===null?D.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:nt.workingColorSpace,De=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Be=he.get(k.envMap||we,De),et=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,at=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!X.morphAttributes.position,_t=!!X.morphAttributes.normal,Vt=!!X.morphAttributes.color,Dt=Yi;k.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Dt=D.toneMapping);let Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,si=Mt!==void 0?Mt.length:0,Te=G.get(k),fi=E.state.lights;if(ae===!0&&(le===!0||M!==J)){let Ct=M===J&&k.id===Y;Fe.setState(k,M,Ct)}let dt=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==fi.state.version||Te.outputColorSpace!==be||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Be||k.fog===!0&&Te.fog!==Ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==et||Te.vertexTangents!==at||Te.morphTargets!==Pe||Te.morphNormals!==_t||Te.morphColors!==Vt||Te.toneMapping!==Dt||Te.morphTargetsCount!==si||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Te.__version=k.version);let ki=Te.currentProgram;dt===!0&&(ki=Pc(k,U,z),N&&k.isNodeMaterial&&N.onUpdateProgram(k,ki,Te));let bn=!1,$n=!1,yr=!1,Et=ki.getUniforms(),kt=Te.uniforms;if(S.useProgram(ki.program)&&(bn=!0,$n=!0,yr=!0),k.id!==Y&&(Y=k.id,$n=!0),Te.needsLights){let Ct=Vv(E.state.lightProbeGridArray,z);Te.lightProbeGrid!==Ct&&(Te.lightProbeGrid=Ct,$n=!0)}if(bn||J!==M){S.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",M.projectionMatrix),Et.setValue(I,"viewMatrix",M.matrixWorldInverse);let ts=Et.map.cameraPosition;ts!==void 0&&ts.setValue(I,de.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,$n=!0,yr=!0)}if(Te.needsLights&&(fi.state.sunShadowMap.length>0&&Et.setValue(I,"sunShadowMap",fi.state.sunShadowMap,j),fi.state.directionalShadowMap.length>0&&Et.setValue(I,"directionalShadowMap",fi.state.directionalShadowMap,j),fi.state.spotShadowMap.length>0&&Et.setValue(I,"spotShadowMap",fi.state.spotShadowMap,j),fi.state.pointShadowMap.length>0&&Et.setValue(I,"pointShadowMap",fi.state.pointShadowMap,j)),z.isSkinnedMesh){Et.setOptional(I,z,"bindMatrix"),Et.setOptional(I,z,"bindMatrixInverse");let Ct=z.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(I,"boneTexture",Ct.boneTexture,j))}z.isBatchedMesh&&(Et.setOptional(I,z,"batchingTexture"),Et.setValue(I,"batchingTexture",z._matricesTexture,j),Et.setOptional(I,z,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",z._indirectTexture,j),Et.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",z._colorsTexture,j));let es=X.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&L.update(z,X,ki),($n||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Et.setValue(I,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(kt.envMapIntensity.value=U.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=kA()),$n){if(Et.setValue(I,"toneMappingExposure",D.toneMappingExposure),Te.needsLights&&Xv(kt,yr),Ee&&k.fog===!0&&Oe.refreshFogUniforms(kt,Ee),Oe.refreshMaterialUniforms(kt,k,ie,Q,E.state.transmissionRenderTarget[M.id]),Te.needsLights&&Te.lightProbeGrid){let Ct=Te.lightProbeGrid;kt.probesSH.value=Ct.texture,kt.probesMin.value.copy(Ct.boundingBox.min),kt.probesMax.value.copy(Ct.boundingBox.max),kt.probesResolution.value.copy(Ct.resolution)}ka.upload(I,Xp(Te),kt,j)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ka.upload(I,Xp(Te),kt,j),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(I,"center",z.center),Et.setValue(I,"modelViewMatrix",z.modelViewMatrix),Et.setValue(I,"normalMatrix",z.normalMatrix),Et.setValue(I,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let Ct=k.uniformsGroups;for(let ts=0,Sr=Ct.length;ts<Sr;ts++){let jp=Ct[ts];se.update(jp,ki),se.bind(jp,ki)}}return ki}function Xv(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Yv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(M,U,X){let k=G.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=U,G.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let X=G.get(M);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,X=0){re=M,Z=U,W=X;let k=null,z=!1,Ee=!1;if(M){let be=G.get(M);if(be.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(I.FRAMEBUFFER,be.__webglFramebuffer),ee.copy(M.viewport),Ne.copy(M.scissor),Re=M.scissorTest,S.viewport(ee),S.scissor(Ne),S.setScissorTest(Re),Y=-1;return}else if(be.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(be.__hasExternalTextures)j.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let et=M.depthTexture;if(be.__boundDepthTexture!==et){if(et!==null&&G.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}let De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);let Be=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?k=Be[U][X]:k=Be[U],z=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?k=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[X]:k=Be,ee.copy(M.viewport),Ne.copy(M.scissor),Re=M.scissorTest}else ee.copy(Me).multiplyScalar(ie).floor(),Ne.copy(Ye).multiplyScalar(ie).floor(),Re=St;if(X!==0&&(k=O),S.bindFramebuffer(I.FRAMEBUFFER,k)&&S.drawBuffers(M,k),S.viewport(ee),S.scissor(Ne),S.setScissorTest(Re),z){let be=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,X)}else if(Ee){let be=U;for(let De=0;De<M.textures.length;De++){let Be=G.get(M.textures[De]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+De,Be.__webglTexture,X,be)}}else if(M!==null&&X!==0){let be=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,X)}Y=-1};function qp(M){let U=G.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=R.textureFormatReadable(M.format),U.__typeReadable=R.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,X,k,z,Ee,we,be=0){if(!(M&&M.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){S.bindFramebuffer(I.FRAMEBUFFER,De);try{let Be=M.textures[be],et=Be.format,at=Be.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be);let Pe=qp(Be);if(Pe.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&X>=0&&X<=M.height-z&&I.readPixels(U,X,k,z,xe.convert(et),xe.convert(at),Ee)}finally{let Be=re!==null?G.get(re).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=function(M,U,X,k,z,Ee,we,be=0){return Ai(this,null,function*(){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(U>=0&&U<=M.width-k&&X>=0&&X<=M.height-z){S.bindFramebuffer(I.FRAMEBUFFER,De);let Be=M.textures[be],et=Be.format,at=Be.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be);let Pe=qp(Be);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.bufferData(I.PIXEL_PACK_BUFFER,Ee.byteLength,I.STREAM_READ),I.readPixels(U,X,k,z,xe.convert(et),xe.convert(at),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Vt=re!==null?G.get(re).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Vt);let Dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield n0(I,Dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ee),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(_t),I.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(M,U=null,X=0){let k=Math.pow(2,-X),z=Math.floor(M.image.width*k),Ee=Math.floor(M.image.height*k),we=U!==null?U.x:0,be=U!==null?U.y:0;j.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,we,be,z,Ee),S.unbindTexture()},this.copyTextureToTexture=function(M,U,X=null,k=null,z=0,Ee=0){let we,be,De,Be,et,at,Pe,_t,Vt,Dt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(X!==null)we=X.max.x-X.min.x,be=X.max.y-X.min.y,De=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,et=X.min.y,at=X.isBox3?X.min.z:0;else{let kt=Math.pow(2,-z);we=Math.floor(Dt.width*kt),be=Math.floor(Dt.height*kt),M.isDataArrayTexture?De=Dt.depth:M.isData3DTexture?De=Math.floor(Dt.depth*kt):De=1,Be=0,et=0,at=0}k!==null?(Pe=k.x,_t=k.y,Vt=k.z):(Pe=0,_t=0,Vt=0);let Mt=xe.convert(U.format),si=xe.convert(U.type),Te;U.isData3DTexture?(j.setTexture3D(U,0),Te=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(j.setTexture2DArray(U,0),Te=I.TEXTURE_2D_ARRAY):(j.setTexture2D(U,0),Te=I.TEXTURE_2D),S.activeTexture(I.TEXTURE0),S.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),S.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),S.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let fi=S.getParameter(I.UNPACK_ROW_LENGTH),dt=S.getParameter(I.UNPACK_IMAGE_HEIGHT),ki=S.getParameter(I.UNPACK_SKIP_PIXELS),bn=S.getParameter(I.UNPACK_SKIP_ROWS),$n=S.getParameter(I.UNPACK_SKIP_IMAGES);S.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),S.pixelStorei(I.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(I.UNPACK_SKIP_ROWS,et),S.pixelStorei(I.UNPACK_SKIP_IMAGES,at);let yr=M.isDataArrayTexture||M.isData3DTexture,Et=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let kt=G.get(M),es=G.get(U),Ct=G.get(kt.__renderTarget),ts=G.get(es.__renderTarget);S.bindFramebuffer(I.READ_FRAMEBUFFER,Ct.__webglFramebuffer),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Sr=0;Sr<De;Sr++)yr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(M).__webglTexture,z,at+Sr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(U).__webglTexture,Ee,Vt+Sr)),I.blitFramebuffer(Be,et,we,be,Pe,_t,we,be,I.DEPTH_BUFFER_BIT,I.NEAREST);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||G.has(M)){let kt=G.get(M),es=G.get(U);S.bindFramebuffer(I.READ_FRAMEBUFFER,B),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,H);for(let Ct=0;Ct<De;Ct++)yr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,z,at+Ct):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,z),Et?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,es.__webglTexture,Ee,Vt+Ct):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,es.__webglTexture,Ee),z!==0?I.blitFramebuffer(Be,et,we,be,Pe,_t,we,be,I.COLOR_BUFFER_BIT,I.NEAREST):Et?I.copyTexSubImage3D(Te,Ee,Pe,_t,Vt+Ct,Be,et,we,be):I.copyTexSubImage2D(Te,Ee,Pe,_t,Be,et,we,be);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Et?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Te,Ee,Pe,_t,Vt,we,be,De,Mt,si,Dt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,Ee,Pe,_t,Vt,we,be,De,Mt,Dt.data):I.texSubImage3D(Te,Ee,Pe,_t,Vt,we,be,De,Mt,si,Dt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ee,Pe,_t,we,be,Mt,si,Dt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ee,Pe,_t,Dt.width,Dt.height,Mt,Dt.data):I.texSubImage2D(I.TEXTURE_2D,Ee,Pe,_t,we,be,Mt,si,Dt);S.pixelStorei(I.UNPACK_ROW_LENGTH,fi),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),S.pixelStorei(I.UNPACK_SKIP_PIXELS,ki),S.pixelStorei(I.UNPACK_SKIP_ROWS,bn),S.pixelStorei(I.UNPACK_SKIP_IMAGES,$n),Ee===0&&U.generateMipmaps&&I.generateMipmap(Te),S.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),S.unbindTexture()},this.resetState=function(){Z=0,W=0,re=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var W0={type:"change"},yp={type:"start"},Y0={type:"end"},Ju=new on,X0=new wi,zA=Math.cos(70*Yu.DEG2RAD),Jt=new C,Ii=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_p=1e-6,$u=class extends Sa{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ot,this._lastTargetPosition=new C,this._quat=new Ot().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new C,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new C,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=WA.bind(this),this._onContextMenu=QA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=jA.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=KA.bind(this),this._onMouseDown=XA.bind(this),this._onMouseMove=YA.bind(this),this._interceptControlDown=JA.bind(this),this._interceptControlUp=$A.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W0),this.update(),this.state=bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Ii:i>Math.PI&&(i-=Ii),n<-Math.PI?n+=Ii:n>Math.PI&&(n-=Ii),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Jt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ju.origin.copy(this.object.position),Ju.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ju.direction))<zA?this.object.lookAt(this.target):(X0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ju.intersectPlane(X0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_p||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_p||this._lastTargetPosition.distanceToSquared(this.target)>_p?(this.dispatchEvent(W0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ii/60*this.autoRotateSpeed*e:Ii/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Jt.copy(n).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function GA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function WA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Y0),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function XA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Fi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Fi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(yp)}function YA(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function qA(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Y0))}function jA(s){this.enabled!==!1&&this._handleKeyDown(s)}function ZA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(yp)}function KA(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function QA(s){this.enabled!==!1&&s.preventDefault()}function JA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $A(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var In=1;function q0(s){In=s}function Sp(){return In}function xn(s){return[s[0]*In,s[1]*In,s[2]*In]}function bp(s,e,t){return[s*In,e*In,t*In]}function Ep(s){return s.multiplyScalar(In)}function _n(s){return In*s}var Ec=class{constructor(e){V(this,"context");V(this,"camera");V(this,"cameraControls");V(this,"followMesh");this.context=e,this.followMesh=void 0;let t=this.context.container.width,i=this.context.container.height,n=new Rt(50,t/i,_n(1e-5),_n(2e3));this.camera=n;let r=this.context.simulation.getRenderer(),a=new $u(this.camera,r.domElement);a.enableDamping=!0,a.dampingFactor=.05,a.enablePan=!0,a.zoomSpeed=1.5,a.panSpeed=2,a.rotateSpeed=2,a.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},a.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_ROTATE},this.cameraControls=a}followObject(e,t){let i=e.get3jsObjects()[0];this.cameraControls.enablePan=!1;let n=xn(t);this.camera.position.add(new C(n[0],n[1],n[2])),this.cameraControls.update(),this.followMesh=i}stopFollowingObject(){this.followMesh&&(this.followMesh.remove(this.camera),this.followMesh=void 0,this.cameraControls.enablePan=!0)}isFollowingObject(){return!!this.followMesh}get3jsCamera(){return this.camera}get3jsCameraControls(){return this.cameraControls}update(){if(this.isFollowingObject()){let e=this.followMesh.position.clone(),t=e.clone().sub(this.cameraControls.target);this.camera.position.add(t),this.cameraControls.target.set(e.x,e.y,e.z)}this.cameraControls.update(),this.camera.updateMatrixWorld()}};var lt=class{static rad(e){return e*Math.PI/180}static deg(e){return e*180/Math.PI}static hoursToDeg(e){return e*15}static sexagesimalToDecimalRa(e,t,i){return e*15+t/4+i/240}static sexagesimalToDecimalDec(e,t,i,n=!1){let r=e<0||Object.is(e,-0)?-1:1,a=Math.abs(e)+t/60+i/3600;return r*a}static valToSexagesimalRa(e){let t=Math.trunc(e/15),i=Math.trunc((e-t*15)*4),n=(e-t*15-i/4)*240;return[t,i,n]}static decimalToSexagesimalDec(e,t=!1){let i=e<0||Object.is(e,-0)?-1:1,n=Math.abs(e),r=i*Math.trunc(n),a=Math.trunc((n-Math.trunc(n))*60),o=((n-Math.trunc(n))*60-a)*60;return[r,a,o]}static kmToAu(e){return e/1495978707e-1}static auToKm(e){return e*1495978707e-1}};var Ap=2451545,Hi=class{static sphericalToCartesian(e,t,i){return[i*Math.cos(e)*Math.cos(t),i*Math.sin(e)*Math.cos(t),i*Math.sin(t)]}static equatorialToEcliptic_Cartesian(e,t,i,n){return[e,Math.cos(n)*t+Math.sin(n)*i,-Math.sin(n)*t+Math.cos(n)*i]}static eclipticToEquatorial_Cartesian(e,t,i,n){return[e,Math.cos(n)*t+-Math.sin(n)*i,Math.sin(n)*t+Math.cos(n)*i]}static getNutationAndObliquity(e=Ap){let t=(e-Ap)/36525,i=lt.rad(125.04452-1934.136261*t+.0020708*t*t+t*t*t/45e4),n=lt.rad(280.4665+36000.7698*t),r=lt.rad(218.3165+481267.8813*t),a=-17.2/3600*Math.sin(i)-1.32/3600*Math.sin(2*n)-.23/3600*Math.sin(2*r)+.21/3600*Math.sin(2*i),o=23+26/60+21.448/3600-46.815/3600*t-59e-5/3600*t*t+.001813/3600*t*t*t,l=9.2/3600*Math.cos(i)+.57/3600*Math.cos(2*n)+.1/3600*Math.cos(2*r)-.09/3600*Math.cos(2*i),c=o+l;return{nutation:lt.rad(a),obliquity:lt.rad(c)}}static getObliquity(e=Ap){return this.getNutationAndObliquity(e).obliquity}};var eM=new Set(["a","e","i","q","epoch","period","tp","ma","n","L","om","w","wBar","GM"]),tM=new Set(["i","ma","n","L","om","w","wBar"]),Ga={SUN:13271244004193939e4,MERCURY:2203178000000002e-2,VENUS:32485859200000006e-2,EARTH_MOON:4035032355022598e-1,MARS:4282837521400002e-2,JUPITER:0x1c22c96966960d0,SATURN:379405852e8,URANUS:5794548600000008,NEPTUNE:6836527100580024,PLUTO_CHARON:9770000000000007e-4};function Lt(s){return typeof s!="undefined"&&Number.isFinite(s)}var ui=class s{constructor(e,t="rad",i=!1){V(this,"attrs");V(this,"locked");this.attrs={},this.locked=!1;for(let n in e)if(e.hasOwnProperty(n)){let r=tM.has(n)?t:null;this.set(n,e[n],r)}typeof this.attrs.GM=="undefined"&&(this.attrs.GM=Ga.SUN),this.fill(),this.get("e")>=.999&&typeof this.getUnsafe("tp")=="undefined"&&console.warn('You must specify "tp" (time of perihelion) for highly eccentric orbits'),this.locked=i}set(e,t,i="rad"){if(this.locked)throw new Error("Attempted to modify locked (immutable) Ephem object");return eM.has(e)?(i==="deg"?this.attrs[e]=t*Math.PI/180:this.attrs[e]=t,!0):(console.warn(`Invalid ephem attr: ${e}`),!1)}getUnsafe(e,t="rad"){if(t==="deg"){let i=this.attrs[e];return typeof i=="undefined"?void 0:i*180/Math.PI}return this.attrs[e]}get(e,t="rad"){let i=this.getUnsafe(e,t);if(typeof i=="undefined")throw console.info(this.attrs),new Error(`Attempted to get ephemeris value '${e}' but it was undefined`);return i}fill(){let e=this.getUnsafe("e");if(!Lt(e))throw console.info(this.attrs),new Error('Must define eccentricity "e" in an orbit');let t=this.getUnsafe("a"),i=this.getUnsafe("q");if(Lt(t)){if(!Lt(i)){if(e>=1)throw new Error('Must provide perihelion distance "q" if eccentricity "e" is greater than 1');i=t*(1-e),this.set("q",i)}}else if(Lt(i))t=i/(1-e),this.set("a",t);else throw new Error('Must define semimajor axis "a" or perihelion distance "q" in an orbit');let n=this.getUnsafe("w"),r=this.getUnsafe("wBar"),a=this.getUnsafe("om");Lt(n)&&Lt(a)&&!Lt(r)?(r=n+a,this.set("wBar",r)):Lt(r)&&Lt(a)&&!Lt(n)?(n=r-a,this.set("w",n)):Lt(n)&&Lt(r)&&!Lt(a)&&(a=r-n,this.set("om",a));let o=t*149597870700,l=this.getUnsafe("n"),c=this.getUnsafe("GM"),h=this.getUnsafe("period");if(e<1){if(!Lt(h)&&Lt(t)){if(!Lt(c))throw new Error("Expected ephemeris attribute GM to be set");h=2*Math.PI*Math.sqrt(o*o*o/c)/86400,this.set("period",h)}if(Lt(h)&&!Lt(l)){let f=2*Math.PI/h;this.set("n",f)}else Lt(l)&&!Lt(h)&&this.set("period",2*Math.PI/l)}let u=this.getUnsafe("ma"),d=this.getUnsafe("L");!Lt(d)&&Lt(a)&&Lt(n)&&Lt(u)&&(d=a+n+u,this.set("L",d)),Lt(u)||this.set("ma",d-r)}lock(){this.locked=!0}copy(){return new s({GM:this.getUnsafe("GM"),epoch:this.getUnsafe("epoch"),a:this.getUnsafe("a"),e:this.getUnsafe("e"),i:this.getUnsafe("i"),om:this.getUnsafe("om"),ma:this.getUnsafe("ma"),w:this.getUnsafe("w")},"rad")}};function ed(s,e,t,i,n,r){if(s===void 0)throw"data object is undefined";if(!Array.isArray(s))throw"data object must be an array";if(t>=i)throw"first row must be greater than last row";if(t<0)throw"first row must be greater than zero";if(i>s.length-1)throw"last row must be ";if(!Array.isArray(s[t]))throw"data in rows must be array data";let a=s[0].length-1;if(n<0||n>a)throw`xIndex has to be between 0 and ${a}: ${n}`;if(r<0||r>a)throw`yIndex has to be between 0 and ${a}: ${r}`;let o=0;for(let l=t;l<=i;l++){let c=1;for(let h=t;h<=i;h++)h!==l&&(c*=(e-s[h][n])/(s[l][n]-s[h][n]));o+=c*s[l][r]}return o}var nM=(s,e)=>s-e,sM="{{assets}}/sprites/fuzzyparticle.png";function Ac(s,e){return s.replace("{{assets}}",`${e}/assets`).replace("{{data}}",`${e}/data`)}function Mc(s,e){return Ac(s||sM,e)}function j0(s,e){let t=Mc(s,e),i=new Oi().load(t);return i.colorSpace=tt,i}function Z0(){return window.location.href.indexOf("localhost")>-1?"/src/":"https://typpo.github.io/spacekit/src"}function K0(s,e,t=nM){if(s===void 0)throw"data object is undefined";if(!Array.isArray(s))throw"data object must be an array";if(e===void 0)throw"value object must be defined";if(t===void 0)throw"comparer must be defined";let i=0,n=s.length;for(;i<=n;){let r=Math.floor((i+n)/2);if(r===s.length)return r;let a=t(s[r],e);if(a<0)i=r+1;else if(a>0)n=r-1;else return r}return~i}var Q0=20,aM=(s,e)=>s[0]-e,Mp={distance:"au",time:"day"},oM="cartesianposvel",lM="lagrange",cM=5,hM=new Set(["km","au"]),uM=new Set(["cartesianposvel"]),dM=new Set(["lagrange"]),fM=new Set(["day","sec"]),Zi=class{constructor(e){V(this,"units");V(this,"ephemType");V(this,"interpolationType");V(this,"interpolationOrder");V(this,"data");if(this.units=JSON.parse(JSON.stringify(Mp)),this.ephemType=oM,this.interpolationType=lM,this.interpolationOrder=cM,!e)throw new Error("EphemerisTable must be initialized with an ephemeris data structure");if(!e.data||!Array.isArray(e.data)||e.data.length===0||!Array.isArray(e.data[0]))throw new Error("EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data");if(this.data=JSON.parse(JSON.stringify(e.data)),e.distanceUnits){if(!hM.has(e.distanceUnits))throw new Error(`Unknown distance units: ${e.distanceUnits}`);this.units.distance=e.distanceUnits}if(e.timeUnits){if(!fM.has(e.timeUnits))throw new Error(`Unknown time units: ${e.timeUnits}`);this.units.time=e.timeUnits}if(e.ephemerisType){if(!uM.has(e.ephemerisType))throw new Error(`Unknown ephemeris type: ${e.ephemerisType}`);this.ephemType=e.ephemerisType}if(e.interpolationType){if(!dM.has(e.interpolationType))throw new Error(`Unknown interpolation type: ${e.interpolationType}`);this.interpolationType=e.interpolationType}if(e.interpolationOrder!==void 0){if(e.interpolationOrder<1||e.interpolationOrder>Q0)throw new Error(`Interpolation order must be >0 and <${Q0}: ${e.interpolationOrder}`);this.interpolationOrder=e.interpolationOrder}if(this.units.distance!==Mp.distance||this.units.time!==Mp.time){let t=this.calcDistanceMultiplier(this.units.distance),i=this.calcTimeMultiplier(this.units.time);this.data.forEach(n=>{n[1]*=t,n[2]*=t,n[3]*=t,n[4]*=t*i,n[5]*=t*i,n[6]*=t*i})}}getPositionAtTime(e){if(e<=this.data[0][0])return[this.data[0][1],this.data[0][2],this.data[0][3]];let t=this.data[this.data.length-1];if(e>=t[0])return[t[1],t[2],t[3]];let{startIndex:i,stopIndex:n}=this.calcBoundingIndices(e),r=ed(this.data,e,i,n,0,1),a=ed(this.data,e,i,n,0,2),o=ed(this.data,e,i,n,0,3);return[r,a,o]}getPositions(e,t,i){if(e>t)throw new Error("Requested start needs to be after requested stop");if(i<=0)throw new Error("Step days needs to be greater than zero");let n=[];for(let r=e;r<=t;r+=i)n.push(this.getPositionAtTime(r));return n}calcDistanceMultiplier(e){switch(e){case"au":return 1;case"km":return lt.kmToAu(1);default:throw new Error("Unknown distance unit type: "+e)}}calcTimeMultiplier(e){switch(e){case"day":return 1;case"sec":return 1/86400;default:throw new Error("Unknown time unit type: "+e)}}calcBoundingIndices(e){let t=Math.floor(this.interpolationOrder/2),i=K0(this.data,e,aM);i<0&&(i=~i-1);let n=i-t;n<0&&(n=0);let r=n+Number(this.interpolationOrder);return r>=this.data.length&&(r=this.data.length-1,this.data.length>this.interpolationOrder?n=r-this.interpolationOrder:n=0),{startIndex:n,stopIndex:r}}};var yn={MERCURY:new ui({epoch:24584265e-1,a:.3870968969437096,e:.2056515875393916,i:7.003891682749818,om:48.30774804443502,w:29.17940253442659,ma:256.190975209273},"deg",!0),VENUS:new ui({epoch:24584265e-1,a:.7233458663591554,e:.006762510759617694,i:3.394567787211735,om:76.62534150657346,w:54.74567447560867,ma:275.6687596099721},"deg",!0),EARTH:new ui({epoch:2451545,a:1.00000261,e:.01671123,i:-1531e-8,om:0,wBar:102.93768193,L:100.46457166},"deg",!0),MOON:new ui({GM:Ga.EARTH_MOON,epoch:24586215e-1,a:.002582517063772124,e:.04582543645168888,i:5.102060246928811,om:108.5916732144811,w:61.80561793729225,ma:50.53270083636792},"deg",!0),MARS:new ui({epoch:24584265e-1,a:1.52371401537107,e:.09336741335309606,i:1.848141099825311,om:49.50420572080223,w:286.6965847685386,ma:25.38237617924876},"deg",!0),JUPITER:new ui({epoch:24584265e-1,a:5.20180355911023,e:.0489912558249006,i:1.303560894624275,om:100.5203828847816,w:273.736301845404,ma:231.939544389401},"deg",!0),SATURN:new ui({epoch:24584265e-1,a:9.577177295536776,e:.05101889921719987,i:2.482782449972317,om:113.6154964073247,w:339.4422648650336,ma:187.0970898012944},"deg",!0),URANUS:new ui({epoch:24584265e-1,a:19.14496966635462,e:.04832662948112808,i:.7697511134483724,om:74.14239045667875,w:99.42704504702185,ma:220.2603033874267},"deg",!0),NEPTUNE:new ui({epoch:24584265e-1,a:30.0962226342805,e:.00736257118719377,i:1.774569249829094,om:131.8695882492132,w:258.6226409499831,ma:315.2804988924479},"deg",!0),PLUTO:new ui({epoch:24540005e-1,a:39.4450697257,e:.250248713478,i:17.0890009196,om:110.376957955,w:112.597141677,ma:25.2471897122},"deg",!0)},pM={Pluto:{ra:132.993,dec:-6.163},Uranus:{ra:257.311,dec:-15.175}},mM=Hi.getObliquity(),gM=[0,0,1],Cp=1e-12;function vM(s,e,t){return Math.min(Math.max(s,e),t)}function J0(s){let e=s%360;return e<0?e+360:e}function Tp(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}function wp(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}function Rp(s){return Math.sqrt(Tp(s,s))}function mr(s){let e=Rp(s);if(e<Cp)throw new Error("Cannot normalize zero-length vector");return s.map(t=>t/e)}function $0(s,e){return[e[0][0]*s[0]+e[1][0]*s[1]+e[2][0]*s[2],e[0][1]*s[0]+e[1][1]*s[1]+e[2][1]*s[2],e[0][2]*s[0]+e[1][2]*s[1]+e[2][2]*s[2]]}function ev(s){return Hi.equatorialToEcliptic_Cartesian(s[0],s[1],s[2],mM)}function xM(s){switch(s["Element Type"]){case"Laplace":{let e=Number(s.RA),t=Number(s.Dec);return Number.isFinite(e)&&Number.isFinite(t)?{ra:e,dec:t}:void 0}case"Equatorial":return pM[s.Planet];default:return}}function _M(s){let e=mr(Hi.sphericalToCartesian(lt.rad(s.ra),lt.rad(s.dec),1)),t=wp(gM,e);Rp(t)<Cp&&(t=[1,0,0]),t=mr(t);let i=mr(wp(e,t));return[t,i,e]}function yM(s,e,t){let i=lt.rad(s),n=lt.rad(e),r=lt.rad(t);return[Math.cos(n)*Math.cos(r)-Math.sin(n)*Math.sin(r)*Math.cos(i),Math.sin(n)*Math.cos(r)+Math.cos(n)*Math.sin(r)*Math.cos(i),Math.sin(r)*Math.sin(i)]}function SM(s,e){let t=lt.rad(s),i=lt.rad(e);return[Math.sin(i)*Math.sin(t),-Math.cos(i)*Math.sin(t),Math.cos(t)]}function bM(s){if(s["Element Type"]==="Ecliptic")return{i:Number(s.i),om:Number(s.node),w:Number(s.w)};let e=xM(s);if(!e)throw new Error(`Missing reference plane pole for ${s.Planet} ${s["Sat."]} (${s["Element Type"]})`);let t=_M(e),i=yM(Number(s.i),Number(s.node),Number(s.w)),n=SM(Number(s.i),Number(s.node)),r=mr(ev($0(i,t))),a=mr(ev($0(n,t))),o=Math.acos(vM(a[2],-1,1)),l=[-a[1],a[0],0],c=Rp(l),h=0,u=0;if(c<Cp)u=Math.atan2(r[1],r[0]);else{let d=mr(l),f=mr(wp(a,d));h=Math.atan2(d[1],d[0]),u=Math.atan2(Tp(r,f),Tp(r,d))}return{i:lt.deg(o),om:J0(lt.deg(h)),w:J0(lt.deg(u))}}var td=class{constructor(e){V(this,"_simulation");V(this,"_context");V(this,"_satellitesByPlanet");V(this,"_readyPromise");this._simulation=e,this._context=e.getContext(),this._satellitesByPlanet={};let t=Ac("{{data}}/processed/natural-satellites.json",this._context.options.basePath);this._readyPromise=new Promise((i,n)=>{fetch(t).then(r=>r.json()).then(r=>{r.forEach(a=>{let o=a.Planet.toLowerCase();switch(this._satellitesByPlanet[o]||(this._satellitesByPlanet[o]=[]),a["Element Type"]){case"Ecliptic":case"Equatorial":case"Laplace":break;default:console.warn(`Ephemeris type not yet implemented: ${a["Element Type"]}`);return}let l=bM(a),c;switch(a.Planet){case"Earth":c=Ga.EARTH_MOON;break;case"Pluto":c=Ga.PLUTO_CHARON;break;default:c=Ga[a.Planet.toUpperCase()]}c||console.error(`Could not look up GM for ${a.Planet}`);let h=new ui({GM:c,epoch:Number(a["Epoch JD"]),a:lt.kmToAu(Number(a.a)),e:Number(a.e),i:l.i,w:l.w,om:l.om,ma:Number(a.M)},"deg",!0);this._satellitesByPlanet[o].push({name:a["Sat."],elementType:a["Element Type"],tags:new Set(a.tags.split(",")),ephem:h})}),console.info("Loaded",r.length,"natural satellites"),i(this)}).catch(r=>{n(r)})})}getSatellitesForPlanet(e){return this._satellitesByPlanet[e.toLowerCase()]}load(){return this._readyPromise}};var rv=Qp(Dp());var av=(r=>(r[r.UNKNOWN=0]="UNKNOWN",r[r.PARABOLIC=1]="PARABOLIC",r[r.HYPERBOLIC=2]="HYPERBOLIC",r[r.ELLIPTICAL=3]="ELLIPTICAL",r[r.TABLE=4]="TABLE",r))(av||{}),{sin:gr,cos:Qn,sqrt:Ts}=Math,nd=10,ov=360,wM={leadDurationYears:nd,trailDurationYears:nd,numberSamplePoints:ov};function id(s){return Math.exp(Math.log(s)/3)}var vr=class s{constructor(e,t){V(this,"ephem");V(this,"options");V(this,"orbitPoints");V(this,"eclipticDropLines");V(this,"orbitShape");V(this,"orbitStart");V(this,"orbitStop");V(this,"orbitType");var i,n,r;this.ephem=e,this.options=t||{},this.options.orbitPathSettings||(this.options.orbitPathSettings=JSON.parse(JSON.stringify(wM))),(i=this.options.orbitPathSettings)!=null&&i.leadDurationYears||(this.options.orbitPathSettings.leadDurationYears=nd),(n=this.options.orbitPathSettings)!=null&&n.trailDurationYears||(this.options.orbitPathSettings.trailDurationYears=nd),(r=this.options.orbitPathSettings)!=null&&r.numberSamplePoints||(this.options.orbitPathSettings.numberSamplePoints=ov),this.orbitPoints=void 0,this.eclipticDropLines=void 0,this.orbitShape=void 0,this.orbitStart=0,this.orbitStop=0,this.orbitType=s.getOrbitType(this.ephem)}getPositionAtTime(e,t=!1){switch(this.orbitType){case 1:return this.getPositionAtTimeNearParabolic(e,t);case 2:return this.getPositionAtTimeHyperbolic(e,t);case 3:return this.getPositionAtTimeElliptical(e,t);case 4:return this.getPositionAtTimeTable(e,t);default:throw new Error("No handler for this type of orbit")}}getPositionAtTimeParabolic(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let n=.01720209895,r=i.get("q"),l=1.5*((e-i.get("tp"))*(n/Ts(2))/Ts(r*r*r)),c=Ts(1+l*l),h=id(c+l)-id(c-l),u=2*Math.atan(h),d=r*(1+h*h);return this.vectorToHeliocentric(u,d)}getPositionAtTimeNearParabolic(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let n=.01720209895,r=i.get("e"),a=i.get("q"),l=.75*(e-i.get("tp"))*n*Ts((1+r)/(a*a*a)),c=Ts(1+l*l),h=id(c+l)-id(c-l),u=(1-r)/(1+r),d=2/3+2/5*h*h,f=7/5+33/35*h*h+37/175*Ei(h,4),p=h*h*(432/175+956/1125*h*h+84/1575*Ei(h,4)),v=h*h/(1+h*h),m=u*v*v,g=h*(1+u*v*(d+f*m+p*m*m)),_=2*Math.atan(g),b=a*(1+g*g)/(1+g*g*u);return this.vectorToHeliocentric(_,b)}getPositionAtTimeHyperbolic(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let n=i.get("e"),r=i.get("a"),a=i.get("ma"),o=i.get("n","rad"),l=i.get("epoch"),c=e-l,h=a+o*c,u=h;for(let v=0;v<100;v++){let m=(h+n*(u*Math.cosh(u)-Math.sinh(u)))/(n*Math.cosh(u)-1),g=Math.abs(m-u);if(u=m,g<1e-7)break}let d=u,f=2*Math.atan(Ts((n+1)/(n-1))*Math.tanh(d/2)),p=r*(1-n*n)/(1+n*Qn(f));return this.vectorToHeliocentric(f,p)}getPositionAtTimeElliptical(e,t=!1){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let n=i.get("e"),r=i.get("ma","rad"),a=i.get("n","rad"),o=i.get("epoch"),l=e-o,c=r+a*l;t&&(console.info("period=",i.get("period")),console.info("n=",a),console.info("ma=",r),console.info("d=",l),console.info("M=",c));let h=c;for(let v=0;v<100;v++){let m=c+n*gr(h),g=Math.abs(m-h);if(h=m,g<1e-7)break}let u=h,d=2*Math.atan(Ts((1+n)/(1-n))*Math.tan(u/2)),p=i.get("a")*(1-n*n)/(1+n*Qn(d));return this.vectorToHeliocentric(d,p)}getPositionAtTimeTable(e,t=!1){if(this.ephem instanceof Zi){let i=this.ephem.getPositionAtTime(e);return bp(i[0],i[1],i[2])}throw new Error("Attempted to read ephemeris table of non-table data")}vectorToHeliocentric(e,t){let i=this.ephem;if(i instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let n=i.get("i","rad"),r=i.get("om","rad"),a=i.get("wBar","rad"),o=t*(Qn(r)*Qn(e+a-r)-gr(r)*gr(e+a-r)*Qn(n)),l=t*(gr(r)*Qn(e+a-r)+Qn(r)*gr(e+a-r)*Qn(n)),c=t*(gr(e+a-r)*gr(n));return bp(o,l,c)}needsUpdateForTime(e){return this.orbitType===4?e<this.orbitStart||e>this.orbitStop:!1}getOrbitShape(e,t=!1){if(t&&(this.orbitShape&&(this.orbitShape.geometry.dispose(),this.orbitShape.material.dispose()),this.orbitShape=void 0,this.orbitPoints=void 0,this.eclipticDropLines&&(this.eclipticDropLines.geometry.dispose(),this.eclipticDropLines.material.dispose()),this.eclipticDropLines=void 0),this.orbitShape)return this.orbitShape;if(this.orbitType===3)return this.getEllipse();let i;this.ephem instanceof Zi?i=e:i=this.ephem.getUnsafe("tp");let n=i||rv.default.toJulianDay(new Date),r=n-this.options.orbitPathSettings.trailDurationYears*365.25,a=n+this.options.orbitPathSettings.leadDurationYears*365.25,o=(a-r)/this.options.orbitPathSettings.numberSamplePoints;switch(this.orbitStart=r,this.orbitStop=a,this.orbitType){case 2:return this.getLine(this.getPositionAtTimeHyperbolic.bind(this),r,a,o);case 1:return this.getLine(this.getPositionAtTimeNearParabolic.bind(this),r,a,o);case 4:return this.getTableOrbit(r,a,o);default:throw new Error("Unknown orbit shape")}}getLine(e,t,i,n){let r=[];for(let a=t;a<=i;a+=n){let o=e(a);r.push(new C(o[0],o[1],o[2]))}return this.generateAndCacheOrbitShape(r)}getTableOrbit(e,t,i){if(this.ephem instanceof ui)throw new Error("Attempted to compute table orbit on non-table ephemeris");let r=this.ephem.getPositions(e,t,i).map(a=>xn(a)).map(a=>new C(a[0],a[1],a[2]));return this.generateAndCacheOrbitShape(r)}getEllipse(){let e=this.getEllipsePoints();return this.generateAndCacheOrbitShape(e)}getEllipsePoints(){let e=this.ephem;if(e instanceof Zi)throw new Error("Attempted to compute coordinates from ephemeris table");let t=e.get("a"),i=e.get("e"),n=Math.PI*2,r=n/90;i>.9&&(r=n/360);let a=[];for(let o=0;o<n;o+=r){let l=2*Math.atan(Ts((1+i)/(1-i))*Math.tan(o/2)),c=t*(1-i*i)/(1+i*Qn(l)),h=this.vectorToHeliocentric(l,c);(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))&&(console.error("NaN position value - you may have bad or incomplete data in the following ephemeris:"),console.error(e)),a.push(new C(h[0],h[1],h[2]))}return a.push(a[0]),a}generateAndCacheOrbitShape(e){return this.orbitPoints=e,this.orbitShape=new _i(new Ie().setFromPoints(e),new Tt({color:new oe(this.options.color||4473924)})),this.orbitShape}getLinesToEcliptic(){if(this.eclipticDropLines)return this.eclipticDropLines;this.orbitPoints||this.getOrbitShape();let e=this.orbitPoints||[],t=[];e.forEach((n,r)=>{r===e.length-1&&this.orbitType===3||(t.push(n),t.push(new C(n.x,n.y,0)))});let i=new Ie().setFromPoints(t);return this.eclipticDropLines=new ti(i,new Tt({color:this.options.eclipticLineColor||3355443,blending:Rn})),this.eclipticDropLines}getHexColor(){return this.getOrbitShape().material.color.getHex()}setHexColor(e){this.getOrbitShape().material.color=new oe(e)}getVisibility(){return this.getOrbitShape().visible}setVisibility(e){this.getOrbitShape().visible=e}static getOrbitType(e){if(e instanceof Zi)return 4;let t=e.get("e");return t>=.999&&t<1.2?1:t>1.2?2:3}};var gd=Qp(Dp());var Tc=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";s=h}var n=(performance||Date).now(),r=n,a=0,o=t(new Tc.Panel("FPS","#0ff","#002")),l=t(new Tc.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Tc.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){n=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-n,200),h>=r+1e3&&(o.update(a*1e3/(h-r),100),r=h,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:i}};Tc.Panel=function(s,e,t){var i=1/0,n=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,d=15*a,f=74*a,p=30*a,v=document.createElement("canvas");v.width=o,v.height=l,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(s,c,h),m.fillRect(u,d,f,p),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,d,f,p),{dom:v,update:function(g,_){i=Math.min(i,g),n=Math.max(n,g),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=e,m.fillText(r(g)+" "+s+" ("+r(i)+"-"+r(n)+")",c,h),m.drawImage(v,u+a,d,f-a,p,u,d,f-a,p),m.fillRect(u+f-a,d,a,p),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+f-a,d,a,r((1-g/_)*p))}}};var lv=Tc;var CM=(()=>{let s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Ie;return t.setAttribute("position",new He(s,3)),t.setAttribute("uv",new He(e,2)),t})(),_r=class Lp{static get fullscreenGeometry(){return CM}constructor(e="Pass",t=new xi,i=new Cn){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Je(Lp.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new xi),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Kn){}render(e,t,i,n,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof At||t instanceof It||t instanceof Bt||t instanceof Lp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},RM=class extends _r{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,e,t,i,n){let r=s.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},DM=`#ifdef COLOR_WRITE
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
}`,PM="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",IM=class extends ot{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new ii(null),depthBuffer:new ii(null),channelWeights:new ii(null),opacity:new ii(1)},blending:jt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:DM,vertexShader:PM}),this.depthFunc=Gs}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(s){let e=s!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){let e=s!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=s}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(s){this.colorSpaceConversion!==s&&(s?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(s){s!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=s):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},UM=class extends _r{constructor(s,e=!0){super("CopyPass"),this.fullscreenMaterial=new IM,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new At(1,1,{minFilter:ft,magFilter:ft,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,e,t,i,n){this.fullscreenMaterial.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e)}initialize(s,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Ft?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===tt&&(this.renderTarget.texture.colorSpace=tt))}},cv=new oe,dv=class extends _r{constructor(s=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,e,t){this.color=s,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,e,t,i,n){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=s.getClearAlpha(),l=r!==null,c=a>=0;l?(s.getClearColor(cv),s.setClearColor(r,c?a:o)):c&&s.setClearAlpha(a),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),l?s.setClearColor(cv,o):c&&s.setClearAlpha(o)}},LM=class extends _r{constructor(s,e){super("MaskPass",s,e),this.needsSwap=!1,this.clearPass=new dv(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,e,t,i,n){let r=s.getContext(),a=s.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(s,null):(c.render(s,e),c.render(s,t))),this.renderToScreen?(s.setRenderTarget(null),s.render(o,l)):(s.setRenderTarget(e),s.render(o,l),s.setRenderTarget(t),s.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function BM(s,e){let t=s.getContext();if(e<=0||typeof t.renderbufferStorageMultisample!="function")return 0;let i=t.getParameter(t.MAX_SAMPLES),n=Math.min(e,i);if(n<=0)return 0;let r=t.getParameter(t.RENDERBUFFER_BINDING),a=t.createRenderbuffer();try{return t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorageMultisample(t.RENDERBUFFER,n,t.RGBA8,1,1),n}catch(o){return 0}finally{t.bindRenderbuffer(t.RENDERBUFFER,r),t.deleteRenderbuffer(a)}}var Pp=1/1e3,NM=1e3,OM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document!="undefined"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*Pp}get fixedDelta(){return this._fixedDelta*Pp}set fixedDelta(s){this._fixedDelta=s*NM}get elapsed(){return this._elapsed*Pp}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},fv=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:n=Ft}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,n,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new UM,this.depthRenderTarget=null,this.passes=[],this.timer=new OM,this.autoRenderToScreen=!0,this.setRenderer(s)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(s){let e=this.renderer===null?s:BM(this.renderer,s);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){let e=s.getSize(new q),t=s.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ft&&s.outputColorSpace===tt&&(this.inputBuffer.texture.colorSpace=tt,this.outputBuffer.texture.colorSpace=tt,this.inputBuffer.dispose(),this.outputBuffer.dispose());let n=this.multisampling;this.multisampling=n,s.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(s,t,i)}}replaceRenderer(s,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(s),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(s.domElement)),t}createDepthTexture(){let s=new Si;s.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(s.format=gn,s.type=jn):s.type=ei;let e=new Si;e.format=s.format,e.type=s.type,e.name="EffectComposer.OutputDepth";let t=new Si;t.format=s.format,t.type=s.type,t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=s,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:n}=this.inputBuffer;this.depthRenderTarget=new At(i,n,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(s){let e=this.renderer,t=this.depthRenderTarget,i=e.properties,n=e.getContext();e.setRenderTarget(t);let r=i.get(s).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=s.stencilBuffer?n.DEPTH_BUFFER_BIT|n.STENCIL_BUFFER_BIT:n.DEPTH_BUFFER_BIT;n.bindFramebuffer(n.READ_FRAMEBUFFER,r),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,a),n.blitFramebuffer(0,0,s.width,s.height,0,0,t.width,t.height,o,n.NEAREST),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let s=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===s&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(s,e,t,i){let n=this.renderer,r=n===null?new q:n.getDrawingBufferSize(new q),a=new At(r.width,r.height,{minFilter:ft,magFilter:ft,samples:i,stencilBuffer:e,depthBuffer:s,type:t});return t===Ft&&n!==null&&n.outputColorSpace===tt&&(a.texture.colorSpace=tt),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(s){for(let e of this.passes)e.mainScene=s}setMainCamera(s){for(let e of this.passes)e.mainCamera=s}addPass(s,e){let t=this.passes,i=this.renderer,n=i.getDrawingBufferSize(new q),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(s.renderer=i,s.setSize(n.width,n.height),s.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,s):t.push(s),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of t)o.setDepthTexture(this.stableDepthTexture)}else s.setDepthTexture(this.stableDepthTexture)}removePass(s){let e=this.passes,t=e.indexOf(s);if(t!==-1&&e.splice(t,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(s.getDepthTexture()===r&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(s.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,n=this.outputBuffer,r,a=!1;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,n,s,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,n,s,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=n,n=r}o instanceof LM?a=!0:o instanceof RM&&(a=!1)}}setSize(s,e,t){let i=this.renderer,n=i.getSize(new q);(s===void 0||e===void 0)&&(s=n.width,e=n.height),(n.width!==s||n.height!==e)&&i.setSize(s,e,t);let r=i.getDrawingBufferSize(new q);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let s of this.passes)s.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],_r.fullscreenGeometry.dispose()}},Xa={NONE:0,DEPTH:1,CONVOLUTION:2},pt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},FM=class{constructor(){this.shaderParts=new Map([[pt.FRAGMENT_HEAD,null],[pt.FRAGMENT_MAIN_UV,null],[pt.FRAGMENT_MAIN_IMAGE,null],[pt.VERTEX_HEAD,null],[pt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Xa.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=hs}};var Ip=!1,hv=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case qt:t=this.materialsFlatShadedDoubleSide;break;case Ut:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case qt:t=this.materialsDoubleSide;break;case Ut:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof ot))return s.clone();let e=s.uniforms,t=new Map;for(let n in e){let r=e[n].value;r.isRenderTargetTexture&&(e[n].value=null,t.set(n,r))}let i=s.clone();for(let n of t)e[n[0]].value=n[1],i.uniforms[n[0]].value=n[1];return i}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){let e=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(let t of e)t.uniforms=Object.assign({},s.uniforms),t.side=un;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},s.uniforms),i.side=Ut,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},s.uniforms),i.side=qt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},s.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},s.uniforms),i.flatShading=!0,i.side=Ut,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},s.uniforms),i.flatShading=!0,i.side=qt,i})}}render(s,e,t){let i=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,Ip){let n=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),s.render(e,t);for(let r of n)r[0].material=r[1];this.meshCount!==n.size&&n.clear()}else{let n=e.overrideMaterial;e.overrideMaterial=this.material,s.render(e,t),e.overrideMaterial=n}s.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of s)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ip}static set workaroundEnabled(s){Ip=s}};var ht={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},HM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",zM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",lT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",mT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gT="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uw=new Map([[ht.ADD,HM],[ht.ALPHA,kM],[ht.AVERAGE,zM],[ht.COLOR,GM],[ht.COLOR_BURN,VM],[ht.COLOR_DODGE,WM],[ht.DARKEN,XM],[ht.DIFFERENCE,YM],[ht.DIVIDE,qM],[ht.DST,null],[ht.EXCLUSION,jM],[ht.HARD_LIGHT,ZM],[ht.HARD_MIX,KM],[ht.HUE,QM],[ht.INVERT,JM],[ht.INVERT_RGB,$M],[ht.LIGHTEN,eT],[ht.LINEAR_BURN,tT],[ht.LINEAR_DODGE,iT],[ht.LINEAR_LIGHT,nT],[ht.LUMINOSITY,sT],[ht.MULTIPLY,rT],[ht.NEGATION,aT],[ht.NORMAL,oT],[ht.OVERLAY,lT],[ht.PIN_LIGHT,cT],[ht.REFLECT,hT],[ht.SATURATION,uT],[ht.SCREEN,dT],[ht.SOFT_LIGHT,fT],[ht.SRC,pT],[ht.SUBTRACT,mT],[ht.VIVID_LIGHT,gT]]);var Lw=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])];var pv=class extends _r{constructor(s,e,t=null){super("RenderPass",s,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new dv,this.overrideMaterialManager=t===null?null:new hv(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){let s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){let e=this.overrideMaterialManager;s!==null?e!==null?e.setMaterial(s):this.overrideMaterialManager=new hv(s):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,e,t,i,n){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=s.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(s,e),s.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,r,a):s.render(r,a),a.layers.mask=l,r.background=c,s.shadowMap.autoUpdate=h}};var Bw=Math.PI*.5;var vT=`#include <common>
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
}`,xT="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",_T=class extends ot{constructor(s,e,t,i,n=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ii(null),depthBuffer:new ii(null),resolution:new ii(new q),texelSize:new ii(new q),cameraNear:new ii(.3),cameraFar:new ii(1e3),aspect:new ii(1),time:new ii(0)},blending:jt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:n}),s&&this.setShaderParts(s),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,e=Kn){this.depthBuffer=s,this.depthPacking=e}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=vT.replace(pt.FRAGMENT_HEAD,s.get(pt.FRAGMENT_HEAD)||"").replace(pt.FRAGMENT_MAIN_UV,s.get(pt.FRAGMENT_MAIN_UV)||"").replace(pt.FRAGMENT_MAIN_IMAGE,s.get(pt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=xT.replace(pt.VERTEX_HEAD,s.get(pt.VERTEX_HEAD)||"").replace(pt.VERTEX_MAIN_SUPPORT,s.get(pt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(let e of s.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(s){for(let e of s.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(s){this.extensions={};for(let e of s)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof Rt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,e){let t=this.uniforms;t.resolution.value.set(s,e),t.texelSize.value.set(1/s,1/e),t.aspect.value=s/e}static get Section(){return pt}};var Ow=Number("186".replace(/\D+/g,"")),xr=255/256,Fw=new Float32Array([xr/Ei(256,3),xr/Ei(256,2),xr/256,xr]),Hw=new Float32Array([xr,xr/256,xr/Ei(256,2),1/Ei(256,3)]);function uv(s,e,t){for(let i of e){let n="$1"+s+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,n))}}function yT(s,e,t){let i=e.getFragmentShader(),n=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Xa.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,c=l.get(pt.FRAGMENT_HEAD)||"",h=l.get(pt.FRAGMENT_MAIN_UV)||"",u=l.get(pt.FRAGMENT_MAIN_IMAGE)||"",d=l.get(pt.VERTEX_HEAD)||"",f=l.get(pt.VERTEX_MAIN_SUPPORT)||"",p=new Set,v=new Set;if(a&&(h+=`	${s}MainUv(UV);
`,t.uvTransformation=!0),n!==null&&/mainSupport/.test(n)){let _=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n);f+=`	${s}MainSupport(`,f+=_?`vUv);
`:`);
`;for(let b of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let x of b[1].split(/\s*,\s*/))t.varyings.add(x),p.add(x),v.add(x);for(let b of n.matchAll(o))v.add(b[1])}for(let _ of i.matchAll(o))v.add(_[1]);for(let _ of e.defines.keys())v.add(_.replace(/\([\w\s,]*\)/g,""));for(let _ of e.uniforms.keys())v.add(_);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((_,b)=>t.uniforms.set(s+b.charAt(0).toUpperCase()+b.slice(1),_)),e.defines.forEach((_,b)=>t.defines.set(s+b.charAt(0).toUpperCase()+b.slice(1),_));let m=new Map([["fragment",i],["vertex",n]]);uv(s,v,t.defines),uv(s,v,m),i=m.get("fragment"),n=m.get("vertex");let g=e.blendMode;if(t.blendModes.set(g.blendFunction,g),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===tt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ji?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let _=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${s}MainImage(color0, UV, `,(t.attributes&Xa.DEPTH)!==0&&_.test(i)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;let b=s+"BlendOpacity";t.uniforms.set(b,g.opacity),u+=`color0 = blend${g.blendFunction}(color0, color1, ${b});

	`,c+=`uniform float ${b};

`}if(c+=i+`
`,n!==null&&(d+=n+`
`),l.set(pt.FRAGMENT_HEAD,c),l.set(pt.FRAGMENT_MAIN_UV,h),l.set(pt.FRAGMENT_MAIN_IMAGE,u),l.set(pt.VERTEX_HEAD,d),l.set(pt.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(let _ of e.extensions)t.extensions.add(_)}}var mv=class extends _r{constructor(s,...e){super("EffectPass"),this.fullscreenMaterial=new _T(null,null,null,s),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(let e of this.effects)e.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(let e of this.effects)e.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){let e=this.fullscreenMaterial;e.dithering=s,e.needsUpdate=!0}setEffects(s){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=s.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let s=new FM,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===ht.DST)s.attributes|=a.getAttributes()&Xa.DEPTH;else{if((s.attributes&a.getAttributes()&Xa.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);yT("e"+e++,a,s)}let t=s.shaderParts.get(pt.FRAGMENT_HEAD),i=s.shaderParts.get(pt.FRAGMENT_MAIN_IMAGE),n=s.shaderParts.get(pt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of s.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(s.attributes&Xa.DEPTH)!==0?(s.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===tt&&(i+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(n=`vec2 transformedUv = vUv;
`+n,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(pt.FRAGMENT_HEAD,t),s.shaderParts.set(pt.FRAGMENT_MAIN_IMAGE,i),s.shaderParts.set(pt.FRAGMENT_MAIN_UV,n);for(let[a,o]of s.shaderParts)o!==null&&s.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,e=Kn){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(s,e)}render(s,e,t,i,n){for(let r of this.effects)r.update(s,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,s.setRenderTarget(this.renderToScreen?null:t),s.render(this.scene,this.camera)}}setSize(s,e){this.fullscreenMaterial.setSize(s,e);for(let t of this.effects)t.setSize(s,e)}initialize(s,e,t){this.renderer=s;for(let i of this.effects)i.initialize(s,e,t);this.updateMaterial(),t!==void 0&&t!==Ft&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){s.type==="change"&&this.recompile()}};var zw=[new Float32Array(3),new Float32Array(3)],Gw=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Vw=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var Ww=[new Float32Array(2),new Float32Array(2)];var Xw=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),Yw=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],qw=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],jw=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var Zw=new Map([[di(0,0,0,0),new Float32Array([0,0,0,0])],[di(0,0,0,1),new Float32Array([0,0,0,1])],[di(0,0,1,0),new Float32Array([0,0,1,0])],[di(0,0,1,1),new Float32Array([0,0,1,1])],[di(0,1,0,0),new Float32Array([0,1,0,0])],[di(0,1,0,1),new Float32Array([0,1,0,1])],[di(0,1,1,0),new Float32Array([0,1,1,0])],[di(0,1,1,1),new Float32Array([0,1,1,1])],[di(1,0,0,0),new Float32Array([1,0,0,0])],[di(1,0,0,1),new Float32Array([1,0,0,1])],[di(1,0,1,0),new Float32Array([1,0,1,0])],[di(1,0,1,1),new Float32Array([1,0,1,1])],[di(1,1,0,0),new Float32Array([1,1,0,0])],[di(1,1,0,1),new Float32Array([1,1,0,1])],[di(1,1,1,0),new Float32Array([1,1,1,0])],[di(1,1,1,1),new Float32Array([1,1,1,1])]]);function Up(s,e,t){return s+(e-s)*t}function di(s,e,t,i){let n=Up(s,e,.75),r=Up(t,i,1-.25);return Up(n,r,1-.125)}var gv=299792458,ST=13271244e13,sd=149597870700,vv=3*Math.sqrt(3)/2;function Bp(s){if(!Number.isFinite(s)||s<=0)throw new Error("Black hole massSolar must be finite and positive");return 2*ST*s/Ei(299792458,2)/sd}function h1(s,e){let t=Bp(s)*sd;if(!Number.isFinite(e)||e<3)throw new Error("Stable circular orbits require radius >= 3 Schwarzschild radii");return 2*Math.PI*t/299792458*Math.sqrt(2*Ei(e,3))}function u1(s,e,t){let i=l=>1.5*l*l-l,n=i(s),r=i(s+t*e/2),a=i(s+t*(e+t*n/2)/2),o=i(s+t*(e+t*r/2));return[s+t*(e+2*(e+t*n/2)+2*(e+t*r/2)+(e+t*a))/6,e+t*(n+2*r+2*a+o)/6]}var xv=`
varying vec2 screenPosition;
void main() {
  screenPosition = position.xy;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,_v=`
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
uniform highp usampler2D sceneBoundsFine;
uniform highp usampler2D sceneBoundsCoarse;
uniform highp usampler2D transparentBoundsFine;
uniform highp usampler2D transparentBoundsCoarse;
uniform highp usampler2D surfaceBoundsFine;
uniform highp usampler2D surfaceBoundsCoarse;
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
float sceneTexelAngle;
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
bool unrepresentableDepth;

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
  // Discarded after the trace: scene lensing takes screen-space derivatives,
  // which need every pixel of each 2x2 quad.
  if (clip.w <= 0.0 || depth < 0.0 || depth > 1.0) unrepresentableDepth = true;
  else gl_FragDepth = depth;
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
// Rays from radially adjacent pixels bend in one plane through the camera, so
// their outgoing asymptotes project onto the same screen line. Up to
// LENS_RAYS sub-rays spread across a pixel's radial footprint therefore share
// one path, and every texel fetch along it.
#define LENS_RAYS 4
struct LensPath {
  vec2 start;      // texel coordinates of the first column's center
  vec2 step;       // texel offset between consecutive columns
  vec2 rowStep;    // offset to the second texel of a column: (0, 1) or (1, 0)
  float columns;   // index of the last column, or -1 when nothing is in view
  float tolerance; // depth change over four ray steps between columns
  int rays;
  // Hardware depth of the ray at column zero and its increase per column,
  // then the change of each per pixel of radial offset across the footprint.
  vec4 depth;
  vec4 bounds;     // smallest and largest depth, then slope, of all sub-rays
};

// Sub-ray offsets in pixels, evenly spaced across the pixel.
float rayOffset(int ray, int rays) {
  return (float(ray) + 0.5) / float(rays) - 0.5;
}

// Screen x/y and hardware depth are linear in the same projected-line
// parameter, so the asymptote is a line through the camera's depth image.
bool projectRay(vec4 origin, vec4 direction, out vec3 first, out vec3 delta) {
  first = vec3(0.0);
  delta = vec3(0.0);
  if (direction.w <= 0.0) return false;
  origin += direction * max(0.0, (sceneDepthRange.x - origin.w) / direction.w);
  first = origin.xyz / origin.w * 0.5 + 0.5;
  delta = direction.xyz / direction.w * 0.5 + 0.5 - first;
  return delta.z > 0.0;
}

// A projected ray's depth at the path's first column and its increase per
// column, measured along the path's major axis.
vec2 depthAlong(LensPath path, vec3 first, vec3 delta) {
  bool xMajor = path.rowStep.y > 0.0;
  float size = xMajor ? sceneSize.x : sceneSize.y;
  float along = xMajor ? delta.x : delta.y;
  along = along < 0.0 ? min(along, -0.00000001) : max(along, 0.00000001);
  return vec2(
    first.z + delta.z * ((xMajor ? path.start.x : path.start.y) / size - (xMajor ? first.x : first.y)) / along,
    delta.z * (xMajor ? path.step.x : path.step.y) / size / along);
}

// Adjacent texels show one continuous surface when their depths differ by
// less than four ray steps, or by less than a surface up to about 87 degrees
// from the line of sight changes across one cell. Hardware depth differences
// are relative distance differences scaled by 1 - depth.
const float SURFACE_SLOPE = 20.0;
float continuity(LensPath path, float depth) {
  return max(path.tolerance, (1.0 - depth) * sceneTexelAngle * SURFACE_SLOPE);
}

// The smallest texel depth continuous with a surface at the given depth.
float shallowest(LensPath path, float depth) {
  float slope = sceneTexelAngle * SURFACE_SLOPE;
  return min(depth - path.tolerance, (depth - slope) / (1.0 - slope));
}

// The smallest and largest depth of any sub-ray at a column.
vec2 rayDepths(LensPath path, float column) {
  return path.bounds.xy + column * (column < 0.0 ? path.bounds.wz : path.bounds.zw);
}

LensPath lensPath(vec4 origin, vec4 direction, vec4 originX, vec4 originY,
    vec4 directionX, vec4 directionY, bool differentiable, out vec4 directionRadial) {
  LensPath path;
  path.start = vec2(0.0);
  path.step = vec2(1.0, 0.0);
  path.rowStep = vec2(0.0, 1.0);
  path.columns = -1.0;
  path.tolerance = 0.0;
  path.rays = 1;
  path.depth = vec4(2.0, 1.0, 0.0, 0.0);
  path.bounds = vec4(2.0, 2.0, 1.0, 1.0);
  directionRadial = vec4(0.0);
  vec3 first, delta;
  if (!projectRay(origin, direction, first, delta)) return path;
  vec2 inverseDelta = mix(vec2(-1.0), vec2(1.0), step(vec2(0.0), delta.xy)) /
    max(abs(delta.xy), vec2(0.00000001));
  vec2 a = -first.xy * inverseDelta;
  vec2 b = (1.0 - first.xy) * inverseDelta;
  vec2 entry = min(a, b), exitPoint = max(a, b);
  float lo = max(0.0, max(entry.x, entry.y));
  float hi = min(1.0, min(exitPoint.x, exitPoint.y));
  if (lo > hi) return path;
  vec2 p0 = (first.xy + delta.xy * lo) * sceneSize;
  vec2 span = (first.xy + delta.xy * hi) * sceneSize - p0;
  bool xMajor = abs(span.x) >= abs(span.y);
  float major0 = xMajor ? p0.x : p0.y;
  float extent = xMajor ? span.x : span.y;
  float sense = extent < 0.0 ? -1.0 : 1.0;
  // Columns are texel centers along the major axis. Each holds the two
  // texels straddling the path, for linear interpolation across it.
  vec2 perTexel = abs(extent) > 0.000001 ? span / abs(extent) :
    (xMajor ? vec2(sense, 0.0) : vec2(0.0, sense));
  float count = abs(floor(major0 + extent) - floor(major0)) + 1.0;
  // Longer paths sample every k-th column to stay within the step budget.
  float stride = ceil(count / 1023.0);
  path.columns = floor((count - 1.0) / stride);
  path.start = p0 + perTexel * ((floor(major0) + 0.5 - major0) * sense);
  path.step = perTexel * stride;
  path.rowStep = xMajor ? vec2(0.0, 1.0) : vec2(1.0, 0.0);
  path.depth.xy = depthAlong(path, first, delta);
  path.tolerance = 4.0 * path.depth.y;
  // Sub-rays across the radial footprint, where it spans more than one texel
  // of the source image at either end of the path's depth range.
  vec2 radial = normalize(perTexel);
  vec4 originRadial = originX * radial.x + originY * radial.y;
  directionRadial = directionX * radial.x + directionY * radial.y;
  vec3 firstA, deltaA, firstB, deltaB;
  if (differentiable &&
      projectRay(origin - 0.5 * originRadial, direction - 0.5 * directionRadial, firstA, deltaA) &&
      projectRay(origin + 0.5 * originRadial, direction + 0.5 * directionRadial, firstB, deltaB)) {
    vec2 depths = vec2(first.z + delta.z * lo, first.z + delta.z * hi);
    vec2 tA = clamp((depths - firstA.z) / deltaA.z, 0.0, 1.0);
    vec2 tB = clamp((depths - firstB.z) / deltaB.z, 0.0, 1.0);
    float width = max(
      distance((firstA.xy + deltaA.xy * tA.x) * sceneSize, (firstB.xy + deltaB.xy * tB.x) * sceneSize),
      distance((firstA.xy + deltaA.xy * tA.y) * sceneSize, (firstB.xy + deltaB.xy * tB.y) * sceneSize));
    vec4 edges = vec4(depthAlong(path, firstA, deltaA), depthAlong(path, firstB, deltaB));
    // Sub-rays sample the source image at most one texel apart. Each keeps
    // the path, with its own depth along it, which must increase.
    vec2 perOffset = edges.zw - edges.xy;
    if (path.depth.y > 0.5 * abs(perOffset.y)) {
      path.rays = int(clamp(ceil(width - 0.05), 1.0, float(LENS_RAYS)));
      if (path.rays > 1) path.depth.zw = perOffset;
    }
  }
  path.bounds = vec4(path.depth.x - 0.5 * abs(path.depth.z), path.depth.x + 0.5 * abs(path.depth.z),
    path.depth.y - 0.5 * abs(path.depth.w), path.depth.y + 0.5 * abs(path.depth.w));
  return path;
}

// The two texels straddling the path at column n, with their linear weights.
void readColumn(sampler2D depths, LensPath path, float n, out vec2 depth, out vec2 weight, out ivec2 texel) {
  vec2 center = path.start + path.step * n;
  float across = dot(center, path.rowStep);
  float row = floor(across - 0.5);
  texel = ivec2(floor(center) * (1.0 - path.rowStep) + row * path.rowStep);
  ivec2 next = texel + ivec2(path.rowStep);
  ivec2 size = ivec2(sceneSize);
  depth = vec2(1.0);
  weight = vec2(row + 1.5 - across, across - 0.5 - row);
  if (all(greaterThanEqual(texel, ivec2(0))) && all(lessThan(texel, size))) {
    depth.x = texelFetch(depths, texel, 0).x;
  }
  if (weight.y > 0.0 && all(greaterThanEqual(next, ivec2(0))) && all(lessThan(next, size))) {
    depth.y = texelFetch(depths, next, 0).x;
  }
}

vec2 tileBounds(highp usampler2D bounds, vec2 tile) {
  ivec2 index = ivec2(tile);
  if (any(lessThan(index, ivec2(0))) || any(greaterThanEqual(index, textureSize(bounds, 0)))) {
    return vec2(1.0, 0.0);
  }
  return uintBitsToFloat(texelFetch(bounds, index, 0).rg);
}

// The last column in the tile at column n, and the depth bounds of the texels
// those columns read. The second texel of a column can lie in the next tile
// across the path.
vec3 tileAt(highp usampler2D bounds, float tileSize, LensPath path, float n) {
  vec2 center = path.start + path.step * n;
  vec2 tile = floor(center / tileSize);
  vec2 lower = tile * tileSize;
  vec2 exits = vec2(1e9);
  if (path.step.x != 0.0) exits.x = (lower.x + (path.step.x > 0.0 ? tileSize : 0.0) - center.x) / path.step.x;
  if (path.step.y != 0.0) exits.y = (lower.y + (path.step.y > 0.0 ? tileSize : 0.0) - center.y) / path.step.y;
  float last = clamp(n + ceil(min(exits.x, exits.y)) - 1.0, n, path.columns);
  float acrossFirst = dot(center, path.rowStep);
  float acrossLast = dot(path.start + path.step * last, path.rowStep);
  float tileLow = dot(lower, path.rowStep);
  vec2 range = tileBounds(bounds, tile);
  if (floor(min(acrossFirst, acrossLast) - 0.5) < tileLow) {
    vec2 below = tileBounds(bounds, tile - path.rowStep);
    range = vec2(min(range.x, below.x), max(range.y, below.y));
  }
  if (floor(max(acrossFirst, acrossLast) - 0.5) + 1.0 >= tileLow + tileSize) {
    vec2 above = tileBounds(bounds, tile + path.rowStep);
    range = vec2(min(range.x, above.x), max(range.y, above.y));
  }
  return vec3(last, range);
}

// The first column from which the rest of a tile entered at column n can be
// skipped. A surface crosses the rays in a cell only where one of its texels
// is deeper than the rays and another, continuous with it, is not. Neither
// remains once every texel of the tile is deeper than the rays at its last
// column, or once the rays pass its deepest texel.
float skipFrom(LensPath path, float n, vec3 tile) {
  if (tile.y == 1.0 || tile.y > rayDepths(path, tile.x).y) return n;
  return floor((tile.z - path.bounds.x) / path.bounds.z) + 2.0;
}

// Whether the previous column's texels can contribute to the next cell. A
// crossing from them, in either direction, needs them within the continuity
// tolerance of the rays.
bool previousIdle(LensPath path, float n, vec2 previousDepth) {
  float near = shallowest(path, rayDepths(path, n - 1.0).x);
  float far = rayDepths(path, n).y + continuity(path, rayDepths(path, n - 1.0).x);
  return all(bvec2(
    previousDepth.x >= 1.0 || previousDepth.x < near || previousDepth.x > far,
    previousDepth.y >= 1.0 || previousDepth.y < near || previousDepth.y > far));
}

// Infinitely distant captured light (stars, skybox) along an escaped
// direction: linear interpolation among texels without finite depth, so
// nearby geometry never leaks into the sky. Geometry hides the sky behind it.
vec4 distantSky(vec2 uv) {
  vec2 position = uv * sceneSize - 0.5;
  vec2 cell = floor(position);
  vec2 f = position - cell;
  vec4 weight = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y), (1.0 - f.x) * f.y, f.x * f.y);
  vec4 sky = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    ivec2 texel = ivec2(cell) + ivec2(i % 2, i / 2);
    if (all(greaterThanEqual(texel, ivec2(0))) && all(lessThan(texel, ivec2(sceneSize)))) {
      sky[i] = texelFetch(sceneDepth, texel, 0).x == 1.0 ? 1.0 : 0.0;
    }
  }
  if (sky == vec4(1.0)) return textureLod(sceneColor, uv, 0.0);
  weight *= sky;
  float total = dot(weight, vec4(1.0));
  if (total <= 0.0) return vec4(0.0);
  vec4 color = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    if (weight[i] > 0.0) color += weight[i] * texelFetch(sceneColor, ivec2(cell) + ivec2(i % 2, i / 2), 0);
  }
  return color / total;
}

// Reconstruct one captured layer along the path, for every sub-ray. Between
// two columns, each surface is interpolated linearly in depth and color,
// across and along the path, then composited front to back. Edges and thin
// lines receive partial coverage instead of a binary hit. Light from another
// layer is inserted at its nearest depth. firstHit returns the nearest depth
// of all light, and opaqueAt where every sub-ray became opaque.
void sceneSample(sampler2D colors, sampler2D depths, highp usampler2D fineBounds,
    highp usampler2D coarseBounds, LensPath path, bool transparent, float limit,
    vec4 inserted[LENS_RAYS], float insertedAt,
    out vec4 light[LENS_RAYS], out float firstHit, out float opaqueAt) {
  bool pending[LENS_RAYS];
  for (int s = 0; s < LENS_RAYS; s++) {
    light[s] = vec4(0.0);
    pending[s] = insertedAt >= 0.0;
  }
  firstHit = -1.0;
  opaqueAt = 2.0;
  int remaining = path.rays;
  // Cells starting deeper than the limit cannot contribute.
  float lastColumn = min(path.columns, floor((min(limit, 1.0) - path.bounds.x) / path.bounds.z) + 1.0);
  ivec2 rowStep = ivec2(path.rowStep);
  vec2 previousDepth = vec2(1.0), previousWeight = vec2(0.0);
  ivec2 previousTexel = ivec2(0);
  float n = 0.0;
  // Per tile: last column, depth bounds, and the column it can be skipped from.
  vec4 coarse = vec4(-1.0), fine = vec4(-1.0);
  float coarseEntry = -1.0, fineEntry = -1.0;
  for (int i = 0; i < 1024; i++) {
    if (n > lastColumn) break;
    // Skip the rest of a tile whose depth bounds cannot meet the rays,
    // including once they pass its deepest texel. Keep the tile's last
    // column to seed the cell after it.
    if (n > coarse.x) {
      coarse.xyz = tileAt(coarseBounds, 64.0, path, n);
      coarse.w = skipFrom(path, n, coarse.xyz);
      coarseEntry = n;
    }
    float skipTo = -1.0, entry = coarseEntry;
    if (n >= coarse.w && n < coarse.x) skipTo = coarse.x;
    else {
      if (n > fine.x) {
        fine.xyz = tileAt(fineBounds, 8.0, path, n);
        fine.w = skipFrom(path, n, fine.xyz);
        fineEntry = n;
      }
      if (n >= fine.w && n < fine.x) skipTo = fine.x;
      entry = fineEntry;
    }
    // Within a tile, the previous column's texels are part of its bounds.
    if (skipTo > n && (n > entry || previousIdle(path, n, previousDepth))) {
      readColumn(depths, path, skipTo, previousDepth, previousWeight, previousTexel);
      n = skipTo + 1.0;
      continue;
    }
    vec2 currentDepth, currentWeight;
    ivec2 currentTexel;
    readColumn(depths, path, n, currentDepth, currentWeight, currentTexel);
    vec4 depth = vec4(previousDepth, currentDepth);
    vec4 weight = vec4(previousWeight, currentWeight);
    vec4 present = vec4(lessThan(depth, vec4(1.0)));
    if (present != vec4(0.0)) {
      // A surface can meet a ray in this cell only through a texel between
      // the rays' depths here, or one continuous with such a texel.
      vec4 open = present * step(shallowest(path, rayDepths(path, n - 1.0).x), depth) *
        step(depth, vec4(rayDepths(path, n).y));
      vec4 assigned = vec4(0.0);
      // Visit the cell's surfaces nearest first. Texels continuous with the
      // nearest remaining one belong to the same surface.
      for (int c = 0; c < 4; c++) {
        open *= 1.0 - assigned;
        if (open == vec4(0.0)) break;
        vec4 candidates = mix(vec4(2.0), depth, open);
        float seed = min(min(candidates.x, candidates.y), min(candidates.z, candidates.w));
        float tolerance = continuity(path, seed);
        vec4 own = present * (1.0 - assigned) * step(abs(depth - seed), vec4(tolerance));
        assigned = max(assigned, own);
        vec4 ownWeight = own * weight;
        vec2 coverage = vec2(ownWeight.x + ownWeight.y, ownWeight.z + ownWeight.w);
        if (coverage.x + coverage.y <= 0.0) continue;
        vec4 nearer = present * (1.0 - step(seed - tolerance, depth)) * weight;
        vec2 occluded = vec2(nearer.x + nearer.y, nearer.z + nearer.w);
        vec2 surface = vec2(dot(ownWeight.xy, depth.xy), dot(ownWeight.zw, depth.zw)) /
          max(coverage, vec2(0.000001));
        bool fetched = false;
        vec4 previousColor = vec4(0.0), currentColor = vec4(0.0);
        for (int s = 0; s < LENS_RAYS; s++) {
          if (s >= path.rays) break;
          if (light[s].a >= 0.999) continue;
          float offset = rayOffset(s, path.rays);
          float slope = path.depth.y + offset * path.depth.w;
          float rayDepth = path.depth.x + offset * path.depth.z + slope * (n - 1.0);
          float t;
          if (coverage.x > 0.0 && coverage.y > 0.0) {
            // A continuous surface: intersect its depth, interpolated between
            // the columns, where the ray passes through it in either
            // direction. A steep or double-sided surface can recede faster
            // than the ray and cross it from behind.
            float front = surface.x - rayDepth;
            float back = surface.y - rayDepth - slope;
            if (!(front > 0.0 && back <= 0.0) && !(front < 0.0 && back >= 0.0)) continue;
            t = front / (front - back);
          } else {
            // An edge or isolated texel, at its own depth.
            t = ((coverage.x > 0.0 ? surface.x : surface.y) - rayDepth) / slope;
            if (t < 0.0 || t >= 1.0) continue;
          }
          float hitDepth = rayDepth + slope * t;
          if (hitDepth > limit) continue;
          if (!fetched) {
            fetched = true;
            if (ownWeight.x > 0.0) previousColor += ownWeight.x * texelFetch(colors, previousTexel, 0);
            if (ownWeight.y > 0.0) previousColor += ownWeight.y * texelFetch(colors, previousTexel + rowStep, 0);
            if (ownWeight.z > 0.0) currentColor += ownWeight.z * texelFetch(colors, currentTexel, 0);
            if (ownWeight.w > 0.0) currentColor += ownWeight.w * texelFetch(colors, currentTexel + rowStep, 0);
          }
          // Premultiplied light with its coverage of the interpolation cell.
          vec4 source = mix(previousColor, currentColor, t);
          // An opaque surface continues behind nearer occluders. Its coverage
          // counts only the texels where it could have been visible.
          if (!transparent) {
            source /= max(max(1.0 - mix(occluded.x, occluded.y, t), source.a), 0.000001);
          }
          if (pending[s] && hitDepth > insertedAt) {
            light[s] += (1.0 - light[s].a) * inserted[s];
            pending[s] = false;
          }
          light[s] += (1.0 - light[s].a) * source;
          firstHit = firstHit < 0.0 ? hitDepth : min(firstHit, hitDepth);
          if (light[s].a >= 0.999) {
            remaining--;
            if (remaining == 0) opaqueAt = hitDepth;
          }
        }
      }
    }
    previousDepth = currentDepth;
    previousWeight = currentWeight;
    previousTexel = currentTexel;
    if (remaining == 0) break;
    n += 1.0;
  }
  for (int s = 0; s < LENS_RAYS; s++) {
    if (pending[s]) light[s] += (1.0 - light[s].a) * inserted[s];
  }
  if (insertedAt >= 0.0) firstHit = firstHit < 0.0 ? insertedAt : min(firstHit, insertedAt);
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
  unrepresentableDepth = false;
  traceRay();
  // Compute texture derivatives after the variable-length integration loop.
  // Sampling inside that loop makes implicit mip selection undefined.
  vec3 sky = hasBackground ? texture2D(backgroundTexture, skyUv).rgb : sceneClearColor;
#ifdef SCENE_LENSING
  // Clipping the capture camera changes only its depth mapping.
  sceneTexelAngle = 2.0 * inverseProjection[1][1] / sceneSize.y;
  vec2 originalUv = screenPosition * 0.5 + 0.5;
  vec4 foreground = texture2D(sceneForeground, originalUv);
  vec4 rayOrigin = sceneViewProjection * vec4(escapedWorldOrigin, 1.0);
  vec4 rayDirection = sceneViewProjection * vec4(escapedWorldDirection, 0.0);
  // Ray differentials of the outgoing asymptote, taken while every pixel of
  // the 2x2 quad is still running. They hold only if all four escaped.
  vec4 originX = dFdx(rayOrigin), originY = dFdy(rayOrigin);
  vec4 directionX = dFdx(rayDirection), directionY = dFdy(rayDirection);
  bool differentiable = fwidth(sampledSky ? 1.0 : 0.0) == 0.0;
  if (unrepresentableDepth) discard;
  if (sampledSky) {
    vec4 directionRadial;
    LensPath path = lensPath(rayOrigin, rayDirection, originX, originY, directionX, directionY,
      differentiable, directionRadial);
    vec4 light[LENS_RAYS];
    for (int s = 0; s < LENS_RAYS; s++) light[s] = vec4(0.0);
    if (path.columns >= 0.0) {
      // Opaque surfaces first: where they become fully opaque bounds the
      // translucent layers. Each translucent layer then inserts the light
      // composited so far at its nearest distance.
      float firstHit = -1.0, opaqueAt = 2.0, unused;
      sceneSample(sceneColor, sceneDepth, sceneBoundsFine, sceneBoundsCoarse, path, false,
        2.0, light, -1.0, light, firstHit, opaqueAt);
      if (sceneHasSurfaces) {
        sceneSample(sceneSurfaces, sceneSurfaceDepth, surfaceBoundsFine, surfaceBoundsCoarse, path, true,
          opaqueAt, light, firstHit, light, firstHit, unused);
      }
      if (sceneHasTransparent) {
        sceneSample(sceneTransparent, sceneTransparentDepth, transparentBoundsFine, transparentBoundsCoarse, path, true,
          opaqueAt, light, firstHit, light, firstHit, unused);
      }
    }
    vec3 lensed = vec3(0.0);
    for (int s = 0; s < LENS_RAYS; s++) {
      if (s >= path.rays) break;
      // Do not repeat/clamp the edge of the camera image or bend a foreground
      // object into the background. The sky fills unavailable image samples.
      vec3 behind = sky;
      vec4 direction = rayDirection + rayOffset(s, path.rays) * directionRadial;
      vec2 uv = direction.xy / max(direction.w, 0.00001) * 0.5 + 0.5;
      if (direction.w > 0.0 && all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0)))) {
        vec4 distant = distantSky(uv);
        behind = distant.rgb + (1.0 - distant.a) * behind;
      }
      lensed += light[s].rgb + (1.0 - light[s].a) * behind;
    }
    sky = lensed / float(path.rays);
  }
  vec3 color = 1.0 - exp(-exposure * emittedLight);
  if (sampledSky) color += transmission * max(sky, vec3(0.0));
  color = clamp(color, 0.0, 1.0);
  // Each capture contains only its side of the lens plane, so transparent
  // foregrounds do not bring an unwarped copy of the background with them.
  color = foreground.rgb + (1.0 - foreground.a) * color;
  gl_FragColor = vec4(color, 1.0);
#else
  if (unrepresentableDepth) discard;
  float alpha = captured || sampledSky ? 1.0 : 1.0 - transmission;
  if (alpha < 0.0001) discard;
  vec3 color = 1.0 - exp(-exposure * emittedLight / alpha);
  if (sampledSky) color += transmission * sky;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), alpha);
#endif
  #include <colorspace_fragment>
}
`;function yv(s){let e=new At(1,1,{format:dr,type:ni,internalFormat:"RG32UI",minFilter:Pt,magFilter:Pt,depthBuffer:!1,stencilBuffer:!1});return e.texture.name=s,e}function Sv(s,e){return new ot({glslVersion:Oa,uniforms:{source:{value:null},sourceSize:{value:new q}},vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform highp ${s} source;
      uniform vec2 sourceSize;
      layout(location = 0) out highp uvec4 bounds;
      void main() {
        ivec2 origin = ivec2(gl_FragCoord.xy) * 8;
        uvec2 range = uvec2(floatBitsToUint(1.0), 0u);
        for (int y = 0; y < 8; y++) {
          for (int x = 0; x < 8; x++) {
            ivec2 pixel = origin + ivec2(x, y);
            if (any(greaterThanEqual(pixel, ivec2(sourceSize)))) continue;
            ${e}
            range = uvec2(min(range.x, value.x), max(range.y, value.y));
          }
        }
        bounds = uvec4(range, 0u, 0u);
      }`,depthTest:!1,depthWrite:!1,blending:jt,toneMapped:!1})}var Ya=class{constructor(){V(this,"fine",yv("black-hole-depth-fine"));V(this,"coarse",yv("black-hole-depth-coarse"));V(this,"scene",new xi);V(this,"camera",new Yn);V(this,"fromDepth",Sv("sampler2D",`float depth = texelFetch(source, pixel, 0).x;
            uvec2 value = uvec2(floatBitsToUint(depth), depth < 1.0 ? floatBitsToUint(depth) : 0u);`));V(this,"fromBounds",Sv("usampler2D","uvec2 value = texelFetch(source, pixel, 0).rg;"));V(this,"quad",new Je(new Ni(2,2),this.fromDepth));this.quad.frustumCulled=!1,this.scene.add(this.quad)}allocate(e){e.initRenderTarget(this.fine),e.initRenderTarget(this.coarse)}render(e,t){let{width:i,height:n}=t,r=t.depthTexture;for(let a of[this.fine,this.coarse]){let o=a===this.fine?this.fromDepth:this.fromBounds;o.uniforms.source.value=r,o.uniforms.sourceSize.value.set(i,n),i=Math.ceil(i/8),n=Math.ceil(n/8),a.setSize(i,n),this.quad.material=o,e.setRenderTarget(a),e.render(this.scene,this.camera),r=a.texture}}dispose(){this.fine.dispose(),this.coarse.dispose(),this.quad.geometry.dispose(),this.fromDepth.dispose(),this.fromBounds.dispose()}};var bT=2,ET=8;function wc(s=0){let e=new At(1,1,{samples:s,resolveDepthBuffer:!1});return e.texture.colorSpace=tt,s||(e.depthTexture=new Si(1,1,ni)),e}var rd=class{constructor(){V(this,"background",wc());V(this,"transparent",wc());V(this,"surfaces",wc());V(this,"foreground",wc(4));V(this,"scratch",wc());V(this,"emptyScene",new xi);V(this,"clearColor",new oe);V(this,"viewProjection",new Ce);V(this,"depthRange",new q);V(this,"size",new q);V(this,"backgroundBounds",new Ya);V(this,"transparentBounds",new Ya);V(this,"surfaceBounds",new Ya);V(this,"hasTransparent",!1);V(this,"hasSurfaces",!1);V(this,"camera",new Rt);V(this,"viewport",new ct);V(this,"compositeScene",new xi);V(this,"composite",new Je(new Ni(2,2),new ot({uniforms:{color:{value:this.foreground.texture},depth:{value:this.scratch.depthTexture},smoothingStep:{value:new q}},vertexShader:`varying vec2 sampleUv;
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
          // Multisampling covers edge pixels whose centers the single-sample
          // depth pass missed. They belong to the nearest adjacent surface.
          if (sampleDepth == 1.0) {
            vec2 texelSize = 1.0 / vec2(textureSize(depth, 0));
            for (int x = -1; x <= 1; x++) {
              for (int y = -1; y <= 1; y++) {
                sampleDepth = min(sampleDepth,
                  texture2D(depth, sampleUv + vec2(float(x), float(y)) * texelSize).x);
              }
            }
          }
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
                for (int i = 1; i <= ${ET}; i++) {
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
        }`,transparent:!0,premultipliedAlpha:!0,toneMapped:!1})));this.camera.matrixAutoUpdate=!1,this.composite.frustumCulled=!1,this.compositeScene.add(this.composite)}clipCamera(e,t,i){this.camera.copy(e,!1),this.camera.matrixAutoUpdate=!1,this.camera.near=t,this.camera.far=i;let n=this.camera.projectionMatrix;n.elements[10]=-(i+t)/(i-t),n.elements[14]=-2*i*t/(i-t),this.camera.projectionMatrixInverse.copy(n).invert()}compositeLayer(e,t,i,n,r){let a=this.composite.material;a.uniforms.color.value=t.texture,e.setRenderTarget(i),a.uniforms.smoothingStep.value.set(n/this.size.x,n/this.size.y),a.depthFunc=Gn,a.depthWrite=!0,a.blending=dn,e.render(this.compositeScene,this.camera),r&&(a.depthFunc=Vs,a.depthWrite=!1,a.blending=Aa,a.blendSrc=Cl,a.blendDst=Ms,e.render(this.compositeScene,this.camera))}render(e,t,i,n){if(!i.isPerspectiveCamera)throw new Error("Black hole scene lensing requires a perspective camera");for(let A of[this.backgroundBounds,this.transparentBounds,this.surfaceBounds])A.allocate(e);let r=i,a=e.getRenderTarget(),o=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),c=e.autoClear,h=e.getClearAlpha(),u=e.xr.enabled,d=e.shadowMap.autoUpdate,f=t.background;e.getClearColor(this.clearColor),e.getCurrentViewport(this.viewport),this.size.set(Math.max(1,this.viewport.z),Math.max(1,this.viewport.w));for(let A of[this.background,this.transparent,this.foreground,this.scratch])(A.width!==this.size.x||A.height!==this.size.y)&&A.setSize(this.size.x,this.size.y);let p=Math.max(r.near,n>0?n:r.far),v=Math.max(r.far,1e11,p*1e5);this.depthRange.set(p,v);let m=[],g=new C,_=new Map,b=[],x=A=>{e.setRenderTarget(A),e.setClearColor(0,0),e.state.buffers.color.setMask(!0),e.state.buffers.depth.setMask(!0),e.clear()};try{t.traverse(T=>{T.userData.spacekitBlackHole&&T.visible&&(b.push(T),T.visible=!1)}),t.traverseVisible(T=>{var N;let y=T;if(!y.material)return;let w=t.overrideMaterial?[t.overrideMaterial]:Array.isArray(y.material)?y.material:[y.material],D=T.parent;for(;D&&!D.isGroup;)D=D.parent;let P=!t.overrideMaterial&&T.userData.spacekitBackground===!0;m.push({object:y,sources:w,mask:T.layers.mask,background:P,surface:T.isMesh===!0,transparent:!P&&w.some(O=>O.transparent||!O.depthWrite||!O.depthTest),z:g.setFromMatrixPosition(T.matrixWorld).applyMatrix4(i.matrixWorldInverse).z,groupOrder:(N=D==null?void 0:D.renderOrder)!=null?N:0}),w.forEach(O=>{_.has(O)||(_.set(O,{depthWrite:O.depthWrite,depthTest:O.depthTest,colorWrite:O.colorWrite,blending:O.blending,blendSrc:O.blendSrc,blendDst:O.blendDst,blendEquation:O.blendEquation,blendSrcAlpha:O.blendSrcAlpha,blendDstAlpha:O.blendDstAlpha,blendEquationAlpha:O.blendEquationAlpha}),O.blending===Rn&&(O.blending=Aa,O.blendSrc=O.premultipliedAlpha?Ms:Ma,O.blendDst=Ms,O.blendEquation=fn,O.blendSrcAlpha=wl,O.blendDstAlpha=Ms,O.blendEquationAlpha=fn))})}),e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.autoClear=!1,this.clipCamera(r,p,v),this.composite.layers.mask=i.layers.mask,this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),m.forEach(({object:T,mask:y,transparent:w})=>{T.layers.mask=w?0:y}),x(this.foreground),e.render(t,this.camera),t.background=null;let A=[];m.forEach(({object:T,sources:y,background:w,transparent:D})=>{w?T.layers.mask=0:D||A.push(...y)}),A.forEach(T=>{T.colorWrite=!1}),x(this.scratch),e.render(t,this.camera),A.forEach(T=>{T.colorWrite=_.get(T).colorWrite}),x(this.background),this.compositeLayer(e,this.foreground,this.background,0,!1),x(this.transparent);let E=m.filter(T=>T.transparent&&(T.mask&i.layers.mask)!==0);this.hasTransparent=E.some(T=>!T.surface),this.hasSurfaces=E.some(T=>T.surface),this.hasSurfaces&&((this.surfaces.width!==this.size.x||this.surfaces.height!==this.size.y)&&this.surfaces.setSize(this.size.x,this.size.y),x(this.surfaces)),E.sort((T,y)=>T.groupOrder-y.groupOrder||T.object.renderOrder-y.object.renderOrder||T.z-y.z||T.object.id-y.object.id),m.forEach(({object:T})=>{T.layers.mask=0});for(let T of E){T.object.layers.mask=T.mask;let y=T.object.isPoints||T.object.isSprite,w=y?this.scratch:this.foreground;x(w),e.render(t,this.camera),T.sources.forEach(D=>{D.depthWrite=D.depthTest=!0,D.colorWrite=!1}),y||x(this.scratch),e.render(t,this.camera),T.sources.forEach(D=>{let P=_.get(D);D.depthWrite=P.depthWrite,D.depthTest=P.depthTest,D.colorWrite=P.colorWrite}),T.object.layers.mask=0,this.compositeLayer(e,w,T.surface?this.surfaces:this.transparent,T.object.isPoints?bT:0,!0)}m.forEach(({object:T,mask:y,background:w})=>{T.layers.mask=w?0:y}),x(this.foreground),p>r.near?(this.clipCamera(r,r.near,Math.min(p,r.far)),e.render(t,this.camera)):e.render(this.emptyScene,this.camera),this.backgroundBounds.render(e,this.background),this.hasTransparent&&this.transparentBounds.render(e,this.transparent),this.hasSurfaces&&this.surfaceBounds.render(e,this.surfaces)}finally{_.forEach((A,E)=>Object.assign(E,A)),m.forEach(({object:A,mask:E})=>{A.layers.mask=E}),b.forEach(A=>{A.visible=!0}),t.background=f,e.setRenderTarget(a,o,l),e.setClearColor(this.clearColor,h),e.autoClear=c,e.xr.enabled=u,e.shadowMap.autoUpdate=d}}dispose(){this.backgroundBounds.dispose(),this.transparentBounds.dispose(),this.surfaceBounds.dispose();for(let e of[this.background,this.transparent,this.surfaces,this.foreground,this.scratch])e.dispose();this.composite.geometry.dispose(),this.composite.material.dispose()}};var qa=new WeakMap;function Jn(s,e){if(!Number.isFinite(e)||e<=0)throw new Error(`Black hole ${s} must be finite and positive`);return e}function Np(s,e){if(e.length!==3||!e.every(Number.isFinite))throw new Error(`Black hole ${s} must contain three finite coordinates`);return new C(e[0],e[1],e[2])}function bv(s){if(!Number.isFinite(s)||s<0)throw new Error("Black hole disk rotationSpeed must be finite and nonnegative");return s}function Ev(s){if(!Number.isFinite(s)||s<.02||s>.3)throw new Error("Black hole disk aspectRatio must be between 0.02 and 0.3");return s}var ad=class{constructor(e,t,i){V(this,"id");V(this,"simulation");V(this,"unitsPerAu");V(this,"radiusAu");V(this,"epochJd");V(this,"animationSpeed");V(this,"animationOffsetSeconds",0);V(this,"mesh");V(this,"disposed",!1);V(this,"sceneCapture");var x,A,E,T,y,w,D,P,N,O,B,H,Z;this.id=e,this.simulation=i,this.radiusAu=Bp(t.massSolar);let n=i.getContext();this.unitsPerAu=Jn("unitsPerAu",(x=n.options.unitsPerAu)!=null?x:1),this.epochJd=i.getJd();let r=Np("position",(A=t.position)!=null?A:[0,0,0]),a=Np("diskNormal",(E=t.diskNormal)!=null?E:[0,0,1]);Jn("diskNormal length",a.length()),a.normalize();let o=t.accretionDisk||{};this.animationSpeed=bv((T=o.rotationSpeed)!=null?T:1);let l=Jn("disk innerRadius",(y=o.innerRadius)!=null?y:3),c=Jn("disk outerRadius",(w=o.outerRadius)!=null?w:12);if(l<3||c<=l)throw new Error("Black hole disk requires 3 <= innerRadius < outerRadius");let h=Jn("disk temperature",(D=o.temperature)!=null?D:6500),u=Jn("disk opticalDepth",(P=o.opticalDepth)!=null?P:2),d=Ev((N=o.aspectRatio)!=null?N:.025),f=(O=o.turbulence)!=null?O:.65;if(!Number.isFinite(f)||f<0||f>1)throw new Error("Black hole disk turbulence must be between 0 and 1");let p=Jn("exposure",(B=t.exposure)!=null?B:1);if(t.lensScene&&this.assertSceneLensingAvailable(),t.quality!==void 0&&["low","high"].indexOf(t.quality)<0)throw new Error("Black hole quality must be low or high");if(n.objects.renderer.capabilities.getMaxPrecision("highp")!=="highp")throw new Error("Black holes require highp fragment precision");let m=new Ce().makeRotationFromQuaternion(new Ot().setFromUnitVectors(new C(0,0,1),a)),g=new je().setFromMatrix4(m),_=new ot({vertexShader:xv,fragmentShader:_v,defines:{RAY_STEPS:t.quality==="low"?768:1024,RAY_STEP:t.quality==="low"?"0.04":"0.02",VOLUME_STEP:t.quality==="low"?"0.05":"0.025",VOLUME_SAMPLES:t.quality==="low"?2:4},uniforms:{inverseProjection:{value:new Ce},cameraWorld:{value:new Ce},viewProjection:{value:new Ce},center:{value:new C},worldToDisk:{value:g.clone().transpose()},diskToWorld:{value:g},horizonRadius:{value:Jn("scaled horizon radius",this.radiusAu*this.unitsPerAu)},diskInner:{value:l},diskOuter:{value:c},diskEnabled:{value:t.accretionDisk!==!1},temperature:{value:h},diskOpticalDepth:{value:u},diskAspectRatio:{value:d},diskTurbulence:{value:f},exposure:{value:p},timeSeconds:{value:0},lightCrossingSeconds:{value:this.radiusAu*sd/299792458},hasBackground:{value:!!t.backgroundTexture},backgroundTexture:{value:(H=t.backgroundTexture)!=null?H:null},sceneBoundsFine:{value:null},sceneBoundsCoarse:{value:null},transparentBoundsFine:{value:null},transparentBoundsCoarse:{value:null},surfaceBoundsFine:{value:null},surfaceBoundsCoarse:{value:null},sceneColor:{value:null},sceneDepth:{value:null},sceneTransparent:{value:null},sceneTransparentDepth:{value:null},sceneHasTransparent:{value:!1},sceneSurfaces:{value:null},sceneSurfaceDepth:{value:null},sceneHasSurfaces:{value:!1},sceneViewProjection:{value:new Ce},sceneSize:{value:new q},sceneDepthRange:{value:new q},sceneForeground:{value:null},sceneClearColor:{value:new oe}},transparent:!0,depthTest:!0,depthWrite:!0,toneMapped:!1});this.mesh=new Je(new Ni(2,2),_),this.mesh.name=e,this.mesh.userData.spacekitBlackHole=!0,this.mesh.position.copy(r.multiplyScalar(this.unitsPerAu)),this.mesh.frustumCulled=!1;let b=new ct;this.mesh.onBeforeRender=(W,re,Y)=>{let J=_.uniforms;if(J.inverseProjection.value.copy(Y.projectionMatrix).invert(),J.cameraWorld.value.copy(Y.matrixWorld),J.viewProjection.value.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),this.mesh.getWorldPosition(J.center.value),_.defines.SCENE_LENSING&&this.sceneCapture){let ee=J.center.value;b.set(ee.x,ee.y,ee.z,1).applyMatrix4(J.viewProjection.value),this.sceneCapture.render(W,re,Y,b.w),J.sceneClearColor.value.copy(this.sceneCapture.clearColor),J.sceneHasTransparent.value=this.sceneCapture.hasTransparent,J.sceneHasSurfaces.value=this.sceneCapture.hasSurfaces}},this.setSceneLensingEnabled((Z=t.lensScene)!=null?Z:!1),i.addObject(this)}getId(){return this.id}get3jsObjects(){return[this.mesh]}getPhysicalRadii(){return{eventHorizonAu:this.radiusAu,photonSphereAu:1.5*this.radiusAu,iscoAu:3*this.radiusAu,shadowImpactParameterAu:vv*this.radiusAu}}setPosition(e){this.mesh.position.copy(Np("position",e).multiplyScalar(this.unitsPerAu))}update(e){this.mesh.material.uniforms.timeSeconds.value=(e-this.epochJd)*86400*this.animationSpeed+this.animationOffsetSeconds}setRotationSpeed(e){let t=bv(e),i=(this.simulation.getJd()-this.epochJd)*86400;this.animationOffsetSeconds+=i*(this.animationSpeed-t),this.animationSpeed=t,this.update(this.simulation.getJd())}setDiskOuterRadius(e){let t=Jn("disk outerRadius",e),i=this.mesh.material.uniforms;if(t<=i.diskInner.value)throw new Error("Black hole disk outerRadius must exceed innerRadius");i.diskOuter.value=t}setDiskAspectRatio(e){this.mesh.material.uniforms.diskAspectRatio.value=Ev(e)}setDiskEnabled(e){this.mesh.material.uniforms.diskEnabled.value=e}setSceneLensingEnabled(e){if(this.disposed)return;let t=this.mesh.material;e?(this.assertSceneLensingAvailable(),this.sceneCapture||(this.sceneCapture=new rd),t.uniforms.sceneBoundsFine.value=this.sceneCapture.backgroundBounds.fine.texture,t.uniforms.sceneBoundsCoarse.value=this.sceneCapture.backgroundBounds.coarse.texture,t.uniforms.transparentBoundsFine.value=this.sceneCapture.transparentBounds.fine.texture,t.uniforms.transparentBoundsCoarse.value=this.sceneCapture.transparentBounds.coarse.texture,t.uniforms.surfaceBoundsFine.value=this.sceneCapture.surfaceBounds.fine.texture,t.uniforms.surfaceBoundsCoarse.value=this.sceneCapture.surfaceBounds.coarse.texture,t.uniforms.sceneColor.value=this.sceneCapture.background.texture,t.uniforms.sceneDepth.value=this.sceneCapture.background.depthTexture,t.uniforms.sceneTransparent.value=this.sceneCapture.transparent.texture,t.uniforms.sceneTransparentDepth.value=this.sceneCapture.transparent.depthTexture,t.uniforms.sceneSurfaces.value=this.sceneCapture.surfaces.texture,t.uniforms.sceneSurfaceDepth.value=this.sceneCapture.surfaces.depthTexture,t.uniforms.sceneViewProjection.value=this.sceneCapture.viewProjection,t.uniforms.sceneSize.value=this.sceneCapture.size,t.uniforms.sceneDepthRange.value=this.sceneCapture.depthRange,t.uniforms.sceneForeground.value=this.sceneCapture.foreground.texture,qa.set(this.simulation,this)):qa.get(this.simulation)===this&&qa.delete(this.simulation),!!t.defines.SCENE_LENSING!==e&&(e?t.defines.SCENE_LENSING=1:delete t.defines.SCENE_LENSING,t.needsUpdate=!0),t.depthTest=!e,t.depthWrite=!e,t.blending=e?jt:dn,this.mesh.renderOrder=e?Number.MAX_SAFE_INTEGER:t.uniforms.hasBackground.value?-1:1e3}assertSceneLensingAvailable(){let e=qa.get(this.simulation);if(e&&e!==this)throw new Error("Only one black hole can lens the scene per simulation")}removalCleanup(){var e;this.disposed||(this.disposed=!0,qa.get(this.simulation)===this&&qa.delete(this.simulation),(e=this.sceneCapture)==null||e.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose())}dispose(){this.simulation.removeObject(this)}};function Av(){return`
    varying vec3 vColor;
    uniform sampler2D particleTexture;

    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture2D(particleTexture, gl_PointCoord);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}function Mv(){return`
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
      float r = ${Sp().toFixed(1)} * (a * (1.0 - e * e)) / (1.0 + e * cos(v));

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
      float r = ${Sp().toFixed(1)} * a * (1.0 - e * e) / (1.0 + e * cos(v));

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
  `}var od=`
    varying vec3 vColor;

    void main() {
      float a = pow(max(0.0, 1.0 - 2.0 * length(gl_PointCoord - vec2(0.5, 0.5))), 2.2);
      gl_FragColor = vec4(vColor, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
`,ld=`
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
`,Tv=`
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
`,wv=`
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
`,Cv=`
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
`,Rv=`
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
`,Dv=`
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
`,Pv=`
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
`;var AT=4096;function Iv(s,e){let t=e-s.get("epoch");return s.get("ma")+s.get("n")*t}var MT=.01720209895;function Uv(s,e){let t=s.get("tp"),i=s.get("e"),n=s.get("q");return .75*(e-t)*MT*Math.sqrt((1+i)/(n*n*n))}var cd=class cd{constructor(e,t){V(this,"id");V(this,"options");V(this,"simulation");V(this,"context");V(this,"addedToScene");V(this,"particleCount");V(this,"elements");V(this,"uniforms");V(this,"geometry");V(this,"shaderMaterial");V(this,"particleSystem");V(this,"attributes");if(this.options=e,this.id=`KeplerParticles__${cd.instanceCount}`,this.simulation=t,this.context=t.getContext(),this.addedToScene=!1,this.particleCount=0,!this.options.textureUrl)throw new Error("ParticleSystem requires textureUrl to be set");let i=j0(this.options.textureUrl,this.context.options.basePath);this.uniforms={particleTexture:{value:i}};let n=this.options.maxNumParticles||AT;this.elements=[],this.attributes={size:new He(new Float32Array(n),1),origin:new He(new Float32Array(n*3),3),position:new He(new Float32Array(n*3),3),fuzzColor:new He(new Float32Array(n*3),3),a:new He(new Float32Array(n),1),e:new He(new Float32Array(n),1),i:new He(new Float32Array(n),1),om:new He(new Float32Array(n),1),ma:new He(new Float32Array(n),1),n:new He(new Float32Array(n),1),w:new He(new Float32Array(n),1),wBar:new He(new Float32Array(n),1),q:new He(new Float32Array(n),1),M:new He(new Float32Array(n),1),a0:new He(new Float32Array(n),1)},this.attributes.M.setUsage(mc),this.attributes.a0.setUsage(mc);let r=new Ie;r.setDrawRange(0,0),Object.keys(this.attributes).forEach(o=>{let l=this.attributes[o];r.setAttribute(o,l)});let a=new ot({uniforms:this.uniforms,vertexShader:Mv(),fragmentShader:Av(),depthTest:!0,depthWrite:!1,transparent:!0});this.shaderMaterial=a,this.geometry=r,this.particleSystem=new yi(r,a),this.particleSystem.frustumCulled=!1}addParticle(e,t={}){this.elements.push(e);let i=this.attributes,n=this.particleCount++;i.size.set([t.particleSize||this.options.defaultSize||15],n);let r=new oe(t.color||16777215);i.fuzzColor.set([r.r,r.g,r.b],n*3),i.origin.set([0,0,0],n*3),i.a.set([e.get("a")],n),i.e.set([e.get("e")],n),i.i.set([e.get("i","rad")],n),i.om.set([e.get("om","rad")],n),i.wBar.set([e.get("wBar","rad")],n),i.q.set([e.get("q")],n),vr.getOrbitType(e)===1?i.a0.set([Uv(e,this.options.jd||0)],n):i.M.set([Iv(e,this.options.jd||0)],n);for(let a in i)i.hasOwnProperty(a)&&(i[a].needsUpdate=!0);return this.geometry.setDrawRange(0,this.particleCount),!this.addedToScene&&this.simulation&&(this.simulation.addObject(this),this.addedToScene=!0),n}hideParticle(e){let t=this.attributes;t.size.set([0],e);for(let i in t)t.hasOwnProperty(i)&&(t[i].needsUpdate=!0)}setParticleSize(e,t){let i=this.attributes;i.size.set([e],t);for(let n in i)i.hasOwnProperty(n)&&(i[n].needsUpdate=!0)}setParticleColor(e,t){let i=this.attributes,{r:n,g:r,b:a}=new oe(e);i.fuzzColor.set([n,r,a],t*3);for(let o in i)i.hasOwnProperty(o)&&(i[o].needsUpdate=!0)}setParticleOrigin(e,t){this.attributes.origin.set(t,e*3),this.attributes.origin.needsUpdate=!0}update(e){let t=[],i=[];for(let n=0;n<this.elements.length;n++){let r=this.elements[n],a,o;vr.getOrbitType(r)===1?(o=Uv(r,e),a=0):(o=0,a=Iv(r,e)),t.push(a),i.push(o)}this.attributes.M.set(t),this.attributes.M.needsUpdate=!0,this.attributes.a0.set(i),this.attributes.a0.needsUpdate=!0}get3jsObjects(){return[this.particleSystem]}getId(){return this.id}};V(cd,"instanceCount");var Cc=cd;Cc.instanceCount=0;var TT=/^[og]\s*(.+)?/,wT=/^mtllib /,CT=/^usemtl /,RT=/^usemap /,Lv=/\s+/,Bv=new C,Op=new C,Nv=new C,Ov=new C,Ki=new C,hd=new oe;function DT(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let n=this.vertices,r=this.object.geometry.vertices;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let n=this.normals,r=this.object.geometry.normals;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){let n=this.vertices,r=this.object.geometry.normals;Bv.fromArray(n,e),Op.fromArray(n,t),Nv.fromArray(n,i),Ki.subVectors(Nv,Op),Ov.subVectors(Bv,Op),Ki.cross(Ov),Ki.normalize(),r.push(Ki.x,Ki.y,Ki.z),r.push(Ki.x,Ki.y,Ki.z),r.push(Ki.x,Ki.y,Ki.z)},addColor:function(e,t,i){let n=this.colors,r=this.object.geometry.colors;n[e]!==void 0&&r.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&r.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&r.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){let n=this.uvs,r=this.object.geometry.uvs;r.push(n[e+0],n[e+1]),r.push(n[t+0],n[t+1]),r.push(n[i+0],n[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,r,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let p=this.normals.length;u=this.parseNormalIndex(o,p),d=this.parseNormalIndex(l,p),f=this.parseNormalIndex(c,p),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let p=this.uvs.length;u=this.parseUVIndex(n,p),d=this.parseUVIndex(r,p),f=this.parseUVIndex(a,p),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){let r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],n))}};return s.startObject("",!1),s}var ud=class extends Yt{constructor(e){super(e),this.materials=null}load(e,t,i,n){let r=this,a=new Pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){let t=new DT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(Lv);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(hd.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),tt),t.colors.push(hd.r,hd.g,hd.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(Lv),f=[];for(let v=0,m=d.length;v<m;v++){let g=d[v];if(g.length>0){let _=g.split("/");f.push(_)}}let p=f[0];for(let v=1,m=f.length-1;v<m;v++){let g=f[v],_=f[v+1];t.addFace(p[0],g[0],_[0],p[1],g[1],_[1],p[2],g[2],_[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let p=0,v=u.length;p<v;p++){let m=u[p].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((n=TT.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);t.startObject(u)}else if(CT.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(wT.test(c))t.materialLibraries.push(c.substring(7).trim());else if(RT.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new sn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",p=!1;if(h.vertices.length===0)continue;let v=new Ie;v.setAttribute("position",new _e(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new _e(h.normals,3)),h.colors.length>0&&(p=!0,v.setAttribute("color",new _e(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new _e(h.uvs,2));let m=[];for(let _=0,b=u.length;_<b;_++){let x=u[_],A=x.name+"_"+x.smooth+"_"+p,E=t.materials[A];if(this.materials!==null){if(E=this.materials.create(x.name),d&&E&&!(E instanceof Tt)){let T=new Tt;It.prototype.copy.call(T,E),T.color.copy(E.color),E=T}else if(f&&E&&!(E instanceof ln)){let T=new ln({size:10,sizeAttenuation:!1});It.prototype.copy.call(T,E),T.color.copy(E.color),T.map=E.map,E=T}}E===void 0&&(d?E=new Tt:f?E=new ln({size:1,sizeAttenuation:!1}):E=new tr,E.name=x.name,E.flatShading=!x.smooth,E.vertexColors=p,t.materials[A]=E),m.push(E)}let g;if(m.length>1){for(let _=0,b=u.length;_<b;_++){let x=u[_];v.addGroup(x.groupStart,x.groupCount,_)}d?g=new ti(v,m):f?g=new yi(v,m):g=new Je(v,m)}else d?g=new ti(v,m[0]):f?g=new yi(v,m[0]):g=new Je(v,m[0]);g.name=c.name,r.add(g)}else if(t.vertices.length>0){let o=new ln({size:1,sizeAttenuation:!1}),l=new Ie;l.setAttribute("position",new _e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new _e(t.colors,3)),o.vertexColors=!0);let c=new yi(l,o);r.add(c)}return r}};var PT=30;function IT(s,e,t){let i=new C(s[0],s[1],s[2]);return i.project(e),{x:(i.x+1)*t.clientWidth/2,y:(-i.y+1)*t.clientHeight/2}}var ja=class{constructor(e,t,i,n=!0){V(this,"_id");V(this,"_options");V(this,"_simulation");V(this,"_context");V(this,"_renderMethod");V(this,"_initialized");V(this,"_object3js");V(this,"_useEphemTable");V(this,"_isStaticObject");V(this,"_label");V(this,"_showLabel");V(this,"_lastLabelUpdate");V(this,"_position");V(this,"_orbitAround");V(this,"_scale");V(this,"_particleIndex");V(this,"_orbitPath");V(this,"_eclipticLines");V(this,"_orbit");this._id=e,this._options=t||{},this._object3js=void 0,this._useEphemTable=this._options.ephemTable!==void 0,this._isStaticObject=!this._options.ephem&&!this._useEphemTable,this._simulation=i,this._context=i.getContext(),this._label=void 0,this._showLabel=!1,this._lastLabelUpdate=0,this._position=xn(this._options.position||[0,0,0]),this._orbitAround=void 0,this._scale=this._options.scale||[1,1,1],this._renderMethod=void 0,this._particleIndex=void 0,this._initialized=!1,n&&!this.init()&&console.warn(`SpaceObject ${e}: failed to initialize`)}init(){if(this.renderObject(),this._options.labelText){let e=this.createLabel();this._simulation.getSimulationElement().appendChild(e),this._label=e,this._showLabel=!0}return this._orbitPath=void 0,this._eclipticLines=void 0,this.update(this._simulation.getJd(),!0),this._initialized=!0,!0}setPositionedObject(e){this._object3js=e}renderObject(){if(this.isStaticObject())this._renderMethod||(this._object3js=this.createSprite(),this._simulation&&this._simulation.addObject(this,!1),this._renderMethod="SPRITE");else if(this._orbit=this.createOrbit(),!this._options.hideOrbit&&this._simulation&&this._simulation.addObject(this,!1),this._useEphemTable&&(this._renderMethod||(this._object3js=this.createSprite(),this._simulation&&this._simulation.addObject(this,!0),this._renderMethod="SPRITE")),!this._renderMethod){if(!this._options.ephem)throw new Error("Attempting to create a particle system, but ephemeris are not available.");this._particleIndex=this._context.objects.particles.addParticle(this._options.ephem,{particleSize:this._options.particleSize,color:this.getColor()}),this._renderMethod="PARTICLESYSTEM"}}createLabel(){let e=document.createElement("div");e.className="spacekit__object-label";let{labelText:t,labelUrl:i}=this._options;return this._options.labelUrl?e.innerHTML=`<div><a target="_blank" href="${i}">${t}</a></div>`:e.innerHTML=`<div>${t}</div>`,e.style.fontFamily="Arial",e.style.fontSize="12px",e.style.color="#fff",e.style.position="absolute",e.style.backgroundColor="#0009",e.style.outline="1px solid #5f5f5f",e}updateLabelPosition(e){if(!this._label)throw new Error("Attempted to update label position without a label");let t=this._label,i=this._simulation.getSimulationElement(),n=IT(e,this._simulation.getViewer().get3jsCamera(),i),r={left:n.x,top:n.y,right:n.x+t.clientWidth,bottom:n.y+t.clientHeight};r.left-30>0&&r.right+20<i.clientWidth&&r.top-25>0&&r.bottom<i.clientHeight?(t.style.left=`${r.left-t.clientWidth/2}px`,t.style.top=`${r.top-t.clientHeight-8}px`,t.style.visibility="visible"):t.style.visibility="hidden"}createSprite(){if(!this._options.textureUrl)throw new Error("Cannot create sprite without a textureUrl");let e=Mc(this._options.textureUrl,this._context.options.basePath),t=new Oi().load(e);t.colorSpace=tt;let i=new Ks(new ps({map:t,blending:Rn,depthWrite:!1,color:this._options.theme?this._options.theme.color:16777215})),n=xn(this._scale);i.scale.set(n[0],n[1],n[2]);let r=this.getPosition(this._simulation.getJd());return i.position.set(r[0],r[1],r[2]),this.isStaticObject()&&(i.updateMatrix(),i.matrixAutoUpdate=!1),i}createOrbit(){if(this._orbit)return this._orbit;let e=this._useEphemTable?this._options.ephemTable:this._options.ephem;if(!e)throw new Error("Cannot create orbit without Ephem or EphemerisTable");return new vr(e,{orbitPathSettings:this._options.orbitPathSettings,color:this._options.theme?this._options.theme.orbitColor:void 0,eclipticLineColor:this._options.ecliptic?this._options.ecliptic.lineColor:void 0})}shouldUpdateObjectPosition(e){return!0}orbitAround(e){this._orbitAround=e}setPosition(e,t,i){this._position[0]=_n(e),this._position[1]=_n(t),this._position[2]=_n(i)}getPosition(e){let t=this._position;if(!this._orbit)return t;let i=this._orbit.getPositionAtTime(e);if(this._orbitAround){let n=this._orbitAround.getPosition(e);return[t[0]+i[0]+n[0],t[1]+i[1]+n[1],t[2]+i[2]+n[2]]}return[t[0]+i[0],t[1]+i[1],t[2]+i[2]]}update(e,t=!1){var o,l,c;let i;if(this._label){let h=+new Date-this._lastLabelUpdate>PT;(t||this._showLabel&&h)&&(i||(i=this.getPosition(e)),this.updateLabelPosition(i),this._lastLabelUpdate=+new Date)}if(this.isStaticObject()&&!t)return;let n=!1;(this._object3js||this._label)&&(n=t||this.shouldUpdateObjectPosition(e)),this._object3js&&n&&(i=this.getPosition(e),this._object3js.position.set(i[0],i[1],i[2]));let r=!this._orbitPath||((o=this._orbit)==null?void 0:o.needsUpdateForTime(e));this._orbit&&!this._options.hideOrbit&&r&&(this._orbitPath&&this._simulation.getScene().remove(this._orbitPath),this._orbitPath=this._orbit.getOrbitShape(e,!0),this._simulation.getScene().add(this._orbitPath));let a=!this._eclipticLines||r;if(this._orbit&&this._options.ecliptic&&this._options.ecliptic.displayLines&&a&&(this._eclipticLines&&this._simulation.getScene().remove(this._eclipticLines),this._eclipticLines=this._orbit.getLinesToEcliptic(),this._simulation.getScene().add(this._eclipticLines)),this._orbitAround){let h=this._orbitAround.getPosition(e);this._renderMethod==="PARTICLESYSTEM"&&((l=this._context.objects.particles)==null||l.setParticleOrigin(this._particleIndex,h)),this._options.hideOrbit||(c=this._orbitPath)==null||c.position.set(h[0],h[1],h[2]),i||(i=this.getPosition(e))}}get3jsObjects(){let e=[];return this._object3js&&e.push(this._object3js),this._orbit&&(this._orbitPath&&e.push(this._orbitPath),this._eclipticLines&&e.push(this._eclipticLines)),e}getBoundingObject(){return Ai(this,null,function*(){return Promise.resolve(this.get3jsObjects()[0])})}getColor(){return this._options.theme&&this._options.theme.color||16777215}getOrbit(){return this._orbit}getLabelVisibility(){return this._showLabel}setLabelVisibility(e){if(!this._label)throw new Error("Attempted to set label visibility without a label");e?(this._showLabel=!0,this._label.style.display="block"):(this._showLabel=!1,this._label.style.display="none")}getId(){return this._id}isStaticObject(){return this._isStaticObject}isReady(){return this._initialized}removalCleanup(){var e;this._label&&(this._simulation.getSimulationElement().removeChild(this._label),this._label=void 0),this._particleIndex!==void 0&&((e=this._context)==null||e.objects.particles.hideParticle(this._particleIndex))}},Un="{{assets}}/sprites/smallparticle.png",F1={SUN:{textureUrl:"{{assets}}/sprites/lensflare0.png",position:[0,0,0]},MERCURY:{textureUrl:Un,theme:{color:9518318},ephem:yn.MERCURY},VENUS:{textureUrl:Un,theme:{color:16742195},ephem:yn.VENUS},EARTH:{textureUrl:Un,theme:{color:39629},ephem:yn.EARTH},MOON:{textureUrl:Un,theme:{color:16766720},ephem:yn.MOON,particleSize:6},MARS:{textureUrl:Un,theme:{color:10893882},ephem:yn.MARS},JUPITER:{textureUrl:Un,theme:{color:16759055},ephem:yn.JUPITER},SATURN:{textureUrl:Un,theme:{color:3368499},ephem:yn.SATURN},URANUS:{textureUrl:Un,theme:{color:39423},ephem:yn.URANUS},NEPTUNE:{textureUrl:Un,theme:{color:3355647},ephem:yn.NEPTUNE},PLUTO:{textureUrl:Un,theme:{color:13418672},ephem:yn.PLUTO}};function Fp(s,e,t){let i=new Tt({linewidth:3,color:t}),n=new Ie().setFromPoints([Ep(s).clone(),Ep(e).clone()]),r=new _i(n,i);return r.computeLineDistances(),r}function UT(){return[Fp(new C(0,0,0),new C(3,0,0),16711680),Fp(new C(0,0,0),new C(0,3,0),65280),Fp(new C(0,0,0),new C(0,0,3),255)]}var Za=class extends ja{constructor(t,i,n,r=!0){super(t,i,n,!1);V(this,"_obj");V(this,"_materials");V(this,"_objectIsRotatable");V(this,"_axisOfRotation");this._obj=new it,this._renderMethod="ROTATING_OBJECT",super.setPositionedObject(this._obj),this._objectIsRotatable=!1,this._options.rotation&&(this._objectIsRotatable=!0),this._axisOfRotation=void 0,this._materials=[],r&&this.init()}init(){if(this._objectIsRotatable&&this.initRotation(),this._options.debug&&(this._options.debug.showAxes&&UT().forEach(t=>this._obj.add(t)),this._options.debug.showGrid)){let t=new As(3,3,16711680,16772846);t.geometry.rotateX(Math.PI/2),this._obj.add(t)}return super.init()}initRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");let{rotation:t}=this._options;if(typeof t.jd0=="undefined")return;let{PI:i}=Math,n=lt.rad(t.lambdaDeg||0),r=lt.rad(t.betaDeg||0),a=t.period,o=t.yorp||0,l=lt.rad(t.phi0||0),c=this._simulation.getJd(),h=t.jd0,u=l+2*i/a*(c-h)+1/2*o*Math.pow(c-h,2);this._obj.rotateY(-(i/2-r)),this._obj.rotateZ(-n),this._obj.rotateZ(u)}update(t,i=!1){if(this._obj&&this._objectIsRotatable&&this._options.rotation&&this._options.rotation.enable){let n=this._options.rotation.speed||.5;this._obj.rotation.z+=n*(Math.PI/180),this._obj.rotation.z%=360}this._axisOfRotation,super.update(t,i)}get3jsObjects(){let t=super.get3jsObjects();return t.unshift(this._obj),t}startRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");this._options.rotation.enable=!0}stopRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");this._options.rotation.enable=!1}};var dd=class extends Za{constructor(t,i,n){var a;super(t,i,n,!1);V(this,"shapeObj");V(this,"loadingPromise");if(!i.shape)throw new Error("ShapeObject requires an options.shape object");if(!((a=i.shape)!=null&&a.shapeUrl))throw new Error("Must specify shape.shapeUrl when creating a ShapeObject");this.shapeObj=void 0;let r=new bs;r.onProgress=(o,l,c)=>{console.info(this._id,o,"loading progress:",l,"/",c)},this.loadingPromise=new Promise(o=>{new ud(r).load(i.shape.shapeUrl,c=>{c.traverse(h=>{if(h instanceof Je){let u=new ys({color:this._options.shape.color||13421772});h.material=u,h.geometry.scale(.05,.05,.05),this._materials.push(u)}}),this.shapeObj=c,this._obj.add(c),this._simulation&&this._simulation.addObject(this,!1),this._initialized=!0,o(this.shapeObj)})}),super.init()}getBoundingObject(){return Ai(this,null,function*(){return this.loadingPromise})}};var LT=[[-.0548755604,-.8734370902,-.4838350155],[.4941094279,-.44482963,.7469822445],[-.867666149,-.1980763734,.4559837762]];function BT(s){return[[s[0][0],s[1][0],s[2][0]],[s[0][1],s[1][1],s[2][1]],[s[0][2],s[1][2],s[2][2]]]}function NT(s){return new Ce().set(s[0][0],s[0][1],s[0][2],0,s[1][0],s[1][1],s[1][2],0,s[2][0],s[2][1],s[2][2],0,0,0,0,1)}function OT(s){return new Ce().set(1,0,0,0,0,Math.cos(s),Math.sin(s),0,0,-Math.sin(s),Math.cos(s),0,0,0,0,1)}var FT=BT(LT);function Fv(s=Hi.getObliquity()){return OT(s).multiply(NT(FT))}function HT(){return new Ce().makeRotationX(Math.PI/2).multiply(new Ce().makeRotationY(Math.PI))}function kT(s,e){let t=new Ce;return s.longitudeOffsetDeg&&t.multiply(new Ce().makeRotationZ(lt.rad(s.longitudeOffsetDeg))),s.mirrorLongitude&&t.multiply(new Ce().makeScale(1,-1,1)),Fv(e).multiply(t).multiply(HT())}var fd=class{constructor(e,t){V(this,"simulation");V(this,"context");V(this,"id");V(this,"options");V(this,"mesh");this.options=e,this.id=`__skybox_${new Date().getTime()}`,this.simulation=t,this.context=t.getContext(),this.mesh=void 0,this.init()}init(){let e=new cn(1e10,32,32),t=Mc(this.options.textureUrl,this.context.options.basePath),i=new Oi().load(t);i.colorSpace=tt;let n=new ci({map:i,side:Ut,transparent:(this.options.opacity||1)<1,opacity:this.options.opacity||1,depthWrite:!1}),r=new Je(e,n);r.applyMatrix4(kT(this.options)),r.userData.spacekitBackground=!0,r.renderOrder=-1,this.mesh=r,this.simulation&&this.simulation.addObject(this,!0)}get3jsObjects(){return this.mesh?[this.mesh]:[]}getId(){return this.id}update(){}},iC={ESO_GIGAGALAXY:{textureUrl:"{{assets}}/skybox/eso_milkyway.jpg",longitudeOffsetDeg:180,mirrorLongitude:!0},ESO_LITE:{textureUrl:"{{assets}}/skybox/eso_lite.png",longitudeOffsetDeg:180,mirrorLongitude:!0},NASA_TYCHO:{textureUrl:"{{assets}}/skybox/nasa_tycho.jpg",longitudeOffsetDeg:180,mirrorLongitude:!0}};var pd=class extends Za{constructor(e,t,i){super(e,t,i,!1),this.init()}init(){var r;let e=null;this._options.textureUrl&&(e=new Oi().load(this._options.textureUrl),e.colorSpace=tt);let t=new ms,i=this._options.levelsOfDetail||[{radii:0,segments:64}],n=this.getScaledRadius();for(let a=0;a<i.length;a+=1){let o=i[a],l=new cn(n,o.segments,o.segments),c;if(this._simulation.isUsingLightSources()){console.warn(`SphereObject ${this._id} requires a texture when using a light source.`);let u={sphereTexture:{value:void 0},lightPos:{value:new C}};u.sphereTexture.value=e,u.lightPos.value.copy(this._simulation.getLightPosition()),c=new ot({uniforms:u,vertexShader:Cv,fragmentShader:Rv,transparent:!0})}else{let u=(r=this._options.color)!=null?r:12303291;c=new ci({map:e,color:u})}let h=new Je(l,c);h.receiveShadow=!0,h.castShadow=!0,h.rotation.x=Math.PI/2,t.addLevel(h,n*o.radii)}if(this._obj.add(t),this._options.atmosphere&&this._options.atmosphere.enable){let a=this.renderFullAtmosphere();a&&this._obj.add(a)}return this._options.axialTilt&&(this._obj.rotation.y+=lt.rad(this._options.axialTilt)),this._renderMethod="SPHERE",this._simulation&&this._simulation.addObject(this,!1),super.init()}getScaledRadius(){return _n(this._options.radius||1)}renderFullAtmosphere(){var o,l,c,h,u,d,f,p,v;if(!this._simulation.isUsingLightSources())return console.warn("Cannot render atmosphere without a light source"),null;let e=this.getScaledRadius(),t=new oe((c=(l=(o=this._options)==null?void 0:o.atmosphere)==null?void 0:l.color)!=null?c:16777215),i=e*((d=(u=(h=this._options)==null?void 0:h.atmosphere)==null?void 0:u.innerSizeRatio)!=null?d:.025),n=e*((v=(p=(f=this._options)==null?void 0:f.atmosphere)==null?void 0:p.outerSizeRatio)!=null?v:.15),r=new it;r.add(this.renderAtmosphereComponent(e,i,.8,2,t)),r.add(this.renderAtmosphereComponent(e,n,.5,4,t));let a=new ms;return a.addLevel(r,0),a.addLevel(new it,e*24),a}renderAtmosphereComponent(e,t,i,n,r){let a=new cn(e+t,32,32),o={c:{value:i},p:{value:n},color:{value:r},lightPos:{value:new C}},l=this._simulation.getLightPosition();l&&o.lightPos.value.copy(l);let c=new ot({uniforms:o,vertexShader:Tv,fragmentShader:wv,side:Ut,transparent:!0,depthWrite:!1});return new Je(a,c)}addRings(e,t,i,n=128){let r=_n(lt.kmToAu(e)),a=_n(lt.kmToAu(t)),o=new er(r,a,n,5,0,Math.PI*2),l=new Oi().load(i);l.colorSpace=tt;let c;if(this._simulation.isUsingLightSources()){let u=gc.merge([pe.lights,{ringTexture:{value:null},innerRadius:{value:r},outerRadius:{value:a},lightPos:{value:new C}}]);u.ringTexture.value=l,u.lightPos.value.copy(this._simulation.getLightPosition()),c=new ot({uniforms:u,lights:!0,vertexShader:Dv,fragmentShader:Pv,transparent:!0,alphaTest:.1,side:qt})}else c=new ci({map:l,side:qt,transparent:!0,alphaTest:.1,opacity:.8});let h=new Je(o,c);h.receiveShadow=!0,h.castShadow=!0,this._obj.add(h)}};var zT=4,GT=16777215,md=class{constructor(e,t,i,n){V(this,"id");V(this,"options");V(this,"simulation");V(this,"points");V(this,"pointObject");this.options=i,this.id=e,this.simulation=n,this.points=t,this.pointObject=void 0,this.init(),this.simulation.addObject(this,!0)}init(){let e=new Float32Array(this.points.length*3),t=new Float32Array(this.points.length*3),i=new Float32Array(this.points.length),n=new oe(GT);this.options.defaultColor&&(n=new oe(this.options.defaultColor));let r=zT;this.options.size&&(r=this.options.size);for(let l=0,c=this.points.length;l<c;l++){let h=this.points[l];e.set(h,l*3),n.toArray(t,l*3),i[l]=r}let a=new Ie;a.setAttribute("position",new He(e,3)),a.setAttribute("color",new He(t,3)),a.setAttribute("size",new He(i,1));let o=new ot({vertexColors:!0,vertexShader:ld,fragmentShader:od,transparent:!0});this.pointObject=new yi(a,o)}get3jsObjects(){return this.pointObject?[this.pointObject]:[]}getId(){return this.id}update(){}};function VT(s){return s>=3e4?9614847:s>=1e4?10666239:s>=7500?14016767:s>=6e3?16381439:s>=5200?16772579:s>=3700?16767669:(s>=2400,16758124)}function WT(s,e){return s<2?e*4:s<4?e*2:s<6?e:1}var Rc=class{constructor(e,t){V(this,"_id");V(this,"_options");V(this,"_simulation");V(this,"_context");V(this,"_stars");this._options=e,this._id=`__stars_${new Date().getTime()}`,this._simulation=t,this._context=t.getContext(),this._stars=void 0,this.init()}init(){let e=Ac("{{data}}/processed/bsc.json",this._context.options.basePath);fetch(e).then(t=>t.json()).then(t=>{let i=t.length,n=new Ie,r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i);n.setAttribute("position",new He(r,3)),n.setAttribute("color",new He(a,3)),n.setAttribute("size",new He(o,1)),t.forEach((c,h)=>{let[u,d,f,p]=c,v=lt.rad(lt.hoursToDeg(u)),m=lt.rad(d),g=Hi.sphericalToCartesian(v,m,1e9),_=Hi.equatorialToEcliptic_Cartesian(g[0],g[1],g[2],Hi.getObliquity());r.set(_,h*3);let b=new oe(VT(f));a.set(b.toArray(),h*3),o[h]=WT(p,this._options.minSize||3)});let l=new ot({defines:{SPACEKIT_BACKGROUND:!0},uniforms:{},vertexColors:!0,vertexShader:ld,fragmentShader:od,transparent:!0,depthWrite:!1});this._stars=new yi(n,l),this._stars.userData.spacekitBackground=!0,this._stars.renderOrder=-1,this._simulation&&this._simulation.addObject(this,!0)})}get3jsObjects(){return this._stars?[this._stars]:[]}getId(){return this._id}update(){}};var Hv=class{constructor(e,t){V(this,"onTick");V(this,"simulationElt");V(this,"options");V(this,"jd");V(this,"jdDelta");V(this,"jdPerSecond");V(this,"isPaused");V(this,"enableCameraDrift");V(this,"cameraDefaultPos");V(this,"camera");V(this,"useLightSources");V(this,"lightPosition");V(this,"subscribedObjects");V(this,"particles");V(this,"stats");V(this,"fps");V(this,"lastUpdatedTime");V(this,"lastStaticCameraUpdateTime");V(this,"lastResizeUpdateTime");V(this,"renderEnabled");V(this,"initialRenderComplete");V(this,"scene");V(this,"renderer");V(this,"composer");this.simulationElt=e,this.options=t||{},this.options.basePath=this.options.basePath||Z0(),this.jd=typeof this.options.jd=="undefined"?Number((0,gd.default)(this.options.startDate||new Date)):this.options.jd,this.jdDelta=this.options.jdDelta,this.jdPerSecond=this.options.jdPerSecond||100,this.isPaused=t.startPaused||!1,this.onTick=void 0,this.enableCameraDrift=!1,this.cameraDefaultPos=xn([0,-10,5]),this.options.camera&&(this.enableCameraDrift=!!this.options.camera.enableDrift,this.options.camera.initialPosition&&(this.cameraDefaultPos=xn(this.options.camera.initialPosition))),this.useLightSources=!1,this.lightPosition=void 0,this.subscribedObjects={},it.DEFAULT_UP.set(0,0,1),this.options.unitsPerAu&&q0(this.options.unitsPerAu),this.stats=void 0,this.fps=1,this.lastUpdatedTime=Date.now(),this.lastStaticCameraUpdateTime=Date.now(),this.lastResizeUpdateTime=Date.now(),this.renderEnabled=!0,this.initialRenderComplete=!1,this.animate=this.animate.bind(this),this.renderer=this.initRenderer(),this.scene=new xi,this.composer=this.initComposer(),this.camera=new Ec(this.getContext()),this.composer.setMainCamera(this.camera.get3jsCamera()),this.particles=new Cc({textureUrl:this.options.particleTextureUrl||"{{assets}}/sprites/smallparticle.png",jd:this.jd,maxNumParticles:this.options.maxNumParticles,defaultSize:this.options.particleDefaultSize},this),this.init(),this.animate()}init(){if(this.camera.get3jsCamera().position.set(this.cameraDefaultPos[0],this.cameraDefaultPos[1],this.cameraDefaultPos[2]),this.simulationElt.onmousedown=this.simulationElt.ontouchstart=()=>{this.enableCameraDrift=!1},(()=>{let e=!1;this.camera.get3jsCameraControls().addEventListener("change",()=>{e&&this.staticForcedUpdate()}),setTimeout(()=>{this.staticForcedUpdate(),e=!0,this.initialRenderComplete=!0},0)})(),this.simulationElt.addEventListener("resize",()=>{this.resizeUpdate()}),window.addEventListener("resize",()=>{this.resizeUpdate()}),this.options.debug){if(this.options.debug.showGrid){let e=new As(void 0,void 0);e.geometry.rotateX(Math.PI/2),this.scene.add(e)}this.options.debug.showAxes&&this.scene.add(new ya(.5)),this.options.debug.showStats&&(this.stats=new lv,this.stats.showPanel(0),this.simulationElt.appendChild(this.stats.dom))}}initRenderer(){let e=document.createElement("canvas"),t=e.getContext("webgl2",{antialias:!1,alpha:!1});if(!t)throw new Error("Spacekit requires a browser and GPU with WebGL 2 support.");let i=new bc({canvas:e,context:t});console.info("Max texture resolution:",i.capabilities.maxTextureSize);let n=i.capabilities.getMaxPrecision("highp");return n!=="highp"&&console.warn(`Shader maximum precision is "${n}", GPU rendering may not be accurate.`),i.setPixelRatio(window.devicePixelRatio),i.setSize(this.simulationElt.offsetWidth,this.simulationElt.offsetHeight),this.simulationElt.appendChild(i.domElement),i}initComposer(){let e=new fv(this.renderer,{multisampling:4});return e.addPass(new pv(this.scene)),e.addPass(new mv),e}update(e=!1){for(let t in this.subscribedObjects)this.subscribedObjects.hasOwnProperty(t)&&this.subscribedObjects[t].update(this.jd,e)}staticForcedUpdate(){if(this.isPaused){let e=Date.now();e-this.lastStaticCameraUpdateTime>30&&(this.update(!0),this.lastStaticCameraUpdateTime=e)}}resizeUpdate(){let e=Date.now();if(e-this.lastResizeUpdateTime>30){let n=this.simulationElt.offsetWidth,r=this.simulationElt.offsetHeight;if(n===0&&r===0)return;let a=this.camera.get3jsCamera();a.aspect=n/r,a.updateProjectionMatrix(),this.composer.setSize(n,r),this.staticForcedUpdate(),this.lastResizeUpdateTime=e}}doCameraDrift(){let e=1e-4*Date.now(),t=this.cameraDefaultPos,i=this.camera.get3jsCamera();i.position.x=t[0]+t[0]*(Math.cos(e)+1)/3,i.position.z=t[2]+t[2]*(Math.sin(e)+1)/3}animate(){if(!(!this.renderEnabled&&this.initialRenderComplete)){if(window.requestAnimationFrame(this.animate),this.stats&&this.stats.begin(),!this.isPaused){this.jdDelta?this.jd+=this.jdDelta:this.jd+=this.jdPerSecond/this.fps;let e=(Date.now()-this.lastUpdatedTime)/1e3;this.lastUpdatedTime=Date.now(),this.fps=1/e||1,this.update()}this.enableCameraDrift&&this.doCameraDrift(),this.camera.update(),this.composer.render(),this.onTick&&this.onTick(),this.stats&&this.stats.end()}}addObject(e,t=!1){if(e.get3jsObjects().map(i=>{this.scene.add(i)}),!t){let i=e.getId();this.subscribedObjects[i]&&console.error(`Object id is not unique: "${i}". This could prevent objects from updating correctly.`),this.subscribedObjects[i]=e}}removeObject(e){e.get3jsObjects().map(t=>{this.scene.remove(t)}),typeof e.removalCleanup=="function"&&e.removalCleanup(),delete this.subscribedObjects[e.getId()]}createObject(...e){return new ja(...e,this)}createShape(...e){return new dd(...e,this)}createSphere(...e){return new pd(...e,this)}createBlackHole(e,t){return new ad(e,t,this)}createStaticParticles(...e){return new md(...e,this)}createSkybox(...e){return new fd(...e,this)}createStars(...e){return e.length?new Rc(...e,this):new Rc({},this)}createAmbientLight(e=3355443){this.scene.add(new ar(e,Math.PI)),this.useLightSources=!0}createLight(e=void 0,t=16777215){this.lightPosition&&console.warn("Spacekit doesn't support more than one light source for SphereObjects"),this.lightPosition=new C;let i=new rr(t,Math.PI,0,0);if(typeof e=="undefined")this.camera.get3jsCameraControls().addEventListener("change",()=>{this.lightPosition.copy(this.camera.get3jsCamera().position),i.position.copy(this.camera.get3jsCamera().position)});else{let n=xn(e);this.lightPosition.set(n[0],n[1],n[2]),i.position.set(n[0],n[1],n[2])}this.scene.add(i),this.useLightSources=!0}getLightPosition(){return this.lightPosition}isUsingLightSources(){return this.useLightSources}loadNaturalSatellites(){return new td(this).load()}renderOnlyInViewport(){let e=!0,t=()=>{let i=this.simulationElt.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth,a=i.top<=n&&i.top+i.height>=0,o=i.left<=r&&i.left+i.width>=0;return a&&o};window.addEventListener("scroll",()=>{let i=t();e&&!i?(this.renderEnabled=!1,e=!1):!e&&i&&(this.renderEnabled=!0,window.requestAnimationFrame(this.animate),e=!0)}),t()||(this.renderEnabled=!1,e=!1)}zoomToFit(e,t=3){return Ai(this,null,function*(){let i=e.getOrbit(),n=i?i.getOrbitShape():yield e.getBoundingObject();return n?(this.doZoomToFit(n,t),!0):!1})}doZoomToFit(e,t){let i=new Gt;i.setFromObject(e);let n=new C;i.getCenter(n);let r=new C;i.getSize(r);let a=this.camera.get3jsCamera(),o=Math.max(r.x,r.y,r.z),l=a.fov*(Math.PI/180),c=Math.abs(o/2*Math.tan(l*2))*t,h=new C;e.getWorldPosition(h);let f=a.position.sub(h).normalize().multiplyScalar(c);a.position.x=f.x,a.position.y=f.y,a.position.z=f.z,a.updateProjectionMatrix(),this.cameraDefaultPos=[f.x,f.y,f.z]}start(){this.lastUpdatedTime=Date.now(),this.isPaused=!1}stop(){this.isPaused=!0}getJd(){return this.jd}setJd(e){this.jd=e,this.update(!0)}getDate(){return gd.default.toDate(this.jd)}setDate(e){this.setJd(Number((0,gd.default)(e)))}getJdDelta(){return this.jdDelta?this.jdDelta:this.jdPerSecond/this.fps}setJdDelta(e){this.jdDelta=e}getJdPerSecond(){if(!this.jdDelta)return this.jdPerSecond}setJdPerSecond(e){this.jdDelta=void 0,this.jdPerSecond=e}getContext(){return{simulation:this,options:this.options,objects:{particles:this.particles,camera:this.camera,scene:this.scene,renderer:this.renderer,composer:this.composer},container:{width:this.simulationElt.offsetWidth,height:this.simulationElt.offsetHeight}}}getSimulationElement(){return this.simulationElt}getViewer(){return this.camera}getScene(){return this.scene}getRenderer(){return this.renderer}setCameraDrift(e){this.enableCameraDrift=e}};var NC=Qt;export{ad as BlackHole,ui as Ephem,yn as EphemPresets,Zi as EphemerisTable,Ga as GM,Cc as KeplerParticles,sd as METERS_PER_AU,td as NaturalSatellites,vr as Orbit,av as OrbitType,Za as RotatingObject,vv as SCHWARZSCHILD_CRITICAL_IMPACT,ST as SOLAR_GM,gv as SPEED_OF_LIGHT,dd as ShapeObject,Hv as Simulation,fd as Skybox,iC as SkyboxPresets,ja as SpaceObject,F1 as SpaceObjectPresets,pd as SphereObject,Rc as Stars,md as StaticParticles,NC as THREE,kT as getSkyboxOrientationTransform,h1 as schwarzschildOrbitalPeriodSeconds,Bp as schwarzschildRadiusAu,u1 as stepSchwarzschildRay};
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
