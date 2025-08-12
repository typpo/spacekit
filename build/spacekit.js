var Spacekit=(()=>{var Pv=Object.create;var Ma=Object.defineProperty,Iv=Object.defineProperties,Uv=Object.getOwnPropertyDescriptor,Lv=Object.getOwnPropertyDescriptors,Bv=Object.getOwnPropertyNames,zf=Object.getOwnPropertySymbols,Ov=Object.getPrototypeOf,kf=Object.prototype.hasOwnProperty,Nv=Object.prototype.propertyIsEnumerable,rn=Math.pow,Gf=(r,e,t)=>e in r?Ma(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Rh=(r,e)=>{for(var t in e||(e={}))kf.call(e,t)&&Gf(r,t,e[t]);if(zf)for(var t of zf(e))Nv.call(e,t)&&Gf(r,t,e[t]);return r},Vf=(r,e)=>Iv(r,Lv(e)),Wf=r=>Ma(r,"__esModule",{value:!0});var Fv=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Xf=(r,e)=>{Wf(r);for(var t in e)Ma(r,t,{get:e[t],enumerable:!0})},Hv=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Bv(e))!kf.call(r,i)&&i!=="default"&&Ma(r,i,{get:()=>e[i],enumerable:!(t=Uv(e,i))||t.enumerable});return r},Yf=r=>Hv(Wf(Ma(r!=null?Pv(Ov(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var ui=(r,e,t)=>new Promise((i,n)=>{var s=l=>{try{o(t.next(l))}catch(c){n(c)}},a=l=>{try{o(t.throw(l))}catch(c){n(c)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,a);o((t=t.apply(r,e)).next())});var Mf=Fv((Ib,ya)=>{ya.exports=wE;ya.exports.toDate=CE;ya.exports.toJulianDay=qg;ya.exports.toMillisecondsInJulianDay=Zg;ya.exports.fromJulianDayAndMilliseconds=RE;var _a=864e5,Yg=_a/2,jg=24405875e-1,TE=2440587;function wE(r){return(qg(r)+Zg(r)/_a).toFixed(6)}function CE(r){return new Date((Number(r)-jg)*_a)}function qg(r){return~~((+r+Yg)/_a)+TE}function Zg(r){return(+r+Yg)%_a}function RE(r,e){return(r-jg)*_a+e}});var sb={};Xf(sb,{DEFAULT_PLANET_TEXTURE_URL:()=>Ri,Ephem:()=>jt,EphemPresets:()=>Vi,EphemerisTable:()=>Ci,GM:()=>Jr,KeplerParticles:()=>or,NaturalSatellites:()=>vh,Orbit:()=>Hn,OrbitType:()=>It,RotatingObject:()=>Sa,ShapeObject:()=>Sh,Simulation:()=>Mv,Skybox:()=>Eh,SkyboxPresets:()=>$M,SpaceObject:()=>Aa,SpaceObjectPresets:()=>KM,SphereObject:()=>Mh,Stars:()=>sl,StaticParticles:()=>bh,THREE:()=>rb});var mf={};Xf(mf,{ACESFilmicToneMapping:()=>iu,AddEquation:()=>_n,AddOperation:()=>Jh,AdditiveAnimationBlendMode:()=>El,AdditiveBlending:()=>sn,AgXToneMapping:()=>ru,AlphaFormat:()=>vl,AlwaysCompare:()=>vu,AlwaysDepth:()=>Ca,AlwaysStencilFunc:()=>bl,AmbientLight:()=>da,AnimationAction:()=>eh,AnimationClip:()=>Hr,AnimationLoader:()=>_d,AnimationMixer:()=>Bd,AnimationObjectGroup:()=>Ld,AnimationUtils:()=>Cm,ArcCurve:()=>pc,ArrayCamera:()=>Qc,ArrowHelper:()=>sf,AttachedBindMode:()=>dl,Audio:()=>Jc,AudioAnalyser:()=>Pd,AudioContext:()=>Ko,AudioListener:()=>Rd,AudioLoader:()=>wd,AxesHelper:()=>$o,BackSide:()=>At,BasicDepthPacking:()=>Bi,BasicShadowMap:()=>qf,BatchedMesh:()=>sc,Bone:()=>Do,BooleanKeyframeTrack:()=>Bn,Box2:()=>Wd,Box3:()=>Ht,Box3Helper:()=>tf,BoxGeometry:()=>Dn,BoxHelper:()=>ef,BufferAttribute:()=>Ce,BufferGeometry:()=>we,BufferGeometryLoader:()=>qc,ByteType:()=>pl,Cache:()=>pn,Camera:()=>Kn,CameraHelper:()=>$d,CanvasTexture:()=>ld,CapsuleGeometry:()=>Ks,CatmullRomCurve3:()=>gc,CineonToneMapping:()=>tu,CircleGeometry:()=>Js,ClampToEdgeWrapping:()=>yi,Clock:()=>Kc,Color:()=>re,ColorKeyframeTrack:()=>qo,ColorManagement:()=>et,CompressedArrayTexture:()=>ad,CompressedCubeTexture:()=>od,CompressedTexture:()=>Zs,CompressedTextureLoader:()=>yd,ConeGeometry:()=>$s,ConstantAlphaFactor:()=>Zh,ConstantColorFactor:()=>jh,Controls:()=>el,CubeCamera:()=>Yl,CubeReflectionMapping:()=>on,CubeRefractionMapping:()=>yn,CubeTexture:()=>Sr,CubeTextureLoader:()=>Ad,CubeUVReflectionMapping:()=>hr,CubicBezierCurve:()=>No,CubicBezierCurve3:()=>vc,CubicInterpolant:()=>Nc,CullFaceBack:()=>ll,CullFaceFront:()=>Ph,CullFaceFrontBack:()=>jf,CullFaceNone:()=>Dh,Curve:()=>Mi,CurvePath:()=>yc,CustomBlending:()=>Uh,CustomToneMapping:()=>nu,CylinderGeometry:()=>tr,Cylindrical:()=>Vd,Data3DTexture:()=>Ts,DataArrayTexture:()=>vr,DataTexture:()=>Hi,DataTextureLoader:()=>Sd,DataUtils:()=>Xp,DecrementStencilOp:()=>lp,DecrementWrapStencilOp:()=>hp,DefaultLoadingManager:()=>xd,DepthFormat:()=>Gn,DepthStencilFormat:()=>cn,DepthTexture:()=>Cr,DetachedBindMode:()=>au,DirectionalLight:()=>Vc,DirectionalLightHelper:()=>Jd,DiscreteInterpolant:()=>Fc,DodecahedronGeometry:()=>ea,DoubleSide:()=>Nt,DstAlphaFactor:()=>Gh,DstColorFactor:()=>Wh,DynamicCopyUsage:()=>Mp,DynamicDrawUsage:()=>vo,DynamicReadUsage:()=>Ap,EdgesGeometry:()=>Mc,EllipseCurve:()=>Qs,EqualCompare:()=>fu,EqualDepth:()=>Da,EqualStencilFunc:()=>pp,EquirectangularReflectionMapping:()=>ss,EquirectangularRefractionMapping:()=>as,Euler:()=>oi,EventDispatcher:()=>Wt,ExtrudeGeometry:()=>ia,FileLoader:()=>Ti,Float16BufferAttribute:()=>Xu,Float32BufferAttribute:()=>me,FloatType:()=>Kt,Fog:()=>ks,FogExp2:()=>zs,FramebufferTexture:()=>sd,FrontSide:()=>Ui,Frustum:()=>br,GLBufferAttribute:()=>zd,GLSL1:()=>Tp,GLSL3:()=>wl,GreaterCompare:()=>pu,GreaterDepth:()=>Ia,GreaterEqualCompare:()=>gu,GreaterEqualDepth:()=>Pa,GreaterEqualStencilFunc:()=>xp,GreaterStencilFunc:()=>gp,GridHelper:()=>jr,Group:()=>un,HalfFloatType:()=>fr,HemisphereLight:()=>zc,HemisphereLightHelper:()=>Qd,IcosahedronGeometry:()=>na,ImageBitmapLoader:()=>Td,ImageLoader:()=>kr,ImageUtils:()=>Rl,IncrementStencilOp:()=>op,IncrementWrapStencilOp:()=>cp,InstancedBufferAttribute:()=>er,InstancedBufferGeometry:()=>jc,InstancedInterleavedBuffer:()=>Hd,InstancedMesh:()=>tc,Int16BufferAttribute:()=>Vu,Int32BufferAttribute:()=>Wu,Int8BufferAttribute:()=>zu,IntType:()=>Ba,InterleavedBuffer:()=>Gs,InterleavedBufferAttribute:()=>In,Interpolant:()=>Br,InterpolateDiscrete:()=>gs,InterpolateLinear:()=>po,InterpolateSmooth:()=>mo,InvertStencilOp:()=>up,KeepStencilOp:()=>Xn,KeyframeTrack:()=>bi,LOD:()=>Er,LatheGeometry:()=>Dr,Layers:()=>Ps,LessCompare:()=>du,LessDepth:()=>Ra,LessEqualCompare:()=>Tl,LessEqualDepth:()=>kn,LessEqualStencilFunc:()=>mp,LessStencilFunc:()=>fp,Light:()=>mn,LightProbe:()=>Yc,Line:()=>mi,Line3:()=>Xd,LineBasicMaterial:()=>_t,LineCurve:()=>Fo,LineCurve3:()=>xc,LineDashedMaterial:()=>Oc,LineLoop:()=>hc,LineSegments:()=>Zt,LinearFilter:()=>xt,LinearInterpolant:()=>jo,LinearMipMapLinearFilter:()=>Jf,LinearMipMapNearestFilter:()=>Kf,LinearMipmapLinearFilter:()=>Zi,LinearMipmapNearestFilter:()=>cs,LinearSRGBColorSpace:()=>Oi,LinearToneMapping:()=>$h,LinearTransfer:()=>xs,Loader:()=>Yt,LoaderUtils:()=>Qo,LoadingManager:()=>zr,LoopOnce:()=>ou,LoopPingPong:()=>cu,LoopRepeat:()=>lu,LuminanceAlphaFormat:()=>yl,LuminanceFormat:()=>_l,MOUSE:()=>_i,Material:()=>St,MaterialLoader:()=>fa,MathUtils:()=>Cl,Matrix2:()=>Jo,Matrix3:()=>ze,Matrix4:()=>Le,MaxEquation:()=>Nh,Mesh:()=>tt,MeshBasicMaterial:()=>li,MeshDepthMaterial:()=>Xo,MeshDistanceMaterial:()=>Yo,MeshLambertMaterial:()=>Lc,MeshMatcapMaterial:()=>Bc,MeshNormalMaterial:()=>Uc,MeshPhongMaterial:()=>ca,MeshPhysicalMaterial:()=>Pc,MeshStandardMaterial:()=>Ur,MeshToonMaterial:()=>Ic,MinEquation:()=>Oh,MirroredRepeatWrapping:()=>ls,MixOperation:()=>Kh,MultiplyBlending:()=>ul,MultiplyOperation:()=>rs,NearestFilter:()=>Vt,NearestMipMapLinearFilter:()=>Qf,NearestMipMapNearestFilter:()=>Zf,NearestMipmapLinearFilter:()=>ur,NearestMipmapNearestFilter:()=>fl,NeutralToneMapping:()=>su,NeverCompare:()=>uu,NeverDepth:()=>wa,NeverStencilFunc:()=>dp,NoBlending:()=>Dt,NoColorSpace:()=>di,NoToneMapping:()=>an,NormalAnimationBlendMode:()=>go,NormalBlending:()=>zn,NotEqualCompare:()=>mu,NotEqualDepth:()=>Ua,NotEqualStencilFunc:()=>vp,NumberKeyframeTrack:()=>Or,Object3D:()=>Xe,ObjectLoader:()=>bd,ObjectSpaceNormalMap:()=>hu,OctahedronGeometry:()=>Ir,OneFactor:()=>Hh,OneMinusConstantAlphaFactor:()=>Qh,OneMinusConstantColorFactor:()=>qh,OneMinusDstAlphaFactor:()=>Vh,OneMinusDstColorFactor:()=>Xh,OneMinusSrcAlphaFactor:()=>Ta,OneMinusSrcColorFactor:()=>kh,OrthographicCamera:()=>ua,PCFShadowMap:()=>cl,PCFSoftShadowMap:()=>Ih,PMREMGenerator:()=>ch,Path:()=>Rr,PerspectiveCamera:()=>Tt,Plane:()=>zi,PlaneGeometry:()=>ir,PlaneHelper:()=>nf,PointLight:()=>ha,PointLightHelper:()=>Zd,Points:()=>gi,PointsMaterial:()=>dn,PolarGridHelper:()=>Kd,PolyhedronGeometry:()=>fn,PositionalAudio:()=>Dd,PropertyBinding:()=>it,PropertyMixer:()=>$c,QuadraticBezierCurve:()=>Ho,QuadraticBezierCurve3:()=>zo,Quaternion:()=>Ft,QuaternionKeyframeTrack:()=>Nr,QuaternionLinearInterpolant:()=>Hc,RED_GREEN_RGTC2_Format:()=>uo,RED_RGTC1_Format:()=>Sl,REVISION:()=>ji,RGBADepthPacking:()=>Ml,RGBAFormat:()=>Jt,RGBAIntegerFormat:()=>za,RGBA_ASTC_10x10_Format:()=>so,RGBA_ASTC_10x5_Format:()=>io,RGBA_ASTC_10x6_Format:()=>no,RGBA_ASTC_10x8_Format:()=>ro,RGBA_ASTC_12x10_Format:()=>ao,RGBA_ASTC_12x12_Format:()=>oo,RGBA_ASTC_4x4_Format:()=>qa,RGBA_ASTC_5x4_Format:()=>Za,RGBA_ASTC_5x5_Format:()=>Qa,RGBA_ASTC_6x5_Format:()=>Ka,RGBA_ASTC_6x6_Format:()=>Ja,RGBA_ASTC_8x5_Format:()=>$a,RGBA_ASTC_8x6_Format:()=>eo,RGBA_ASTC_8x8_Format:()=>to,RGBA_BPTC_Format:()=>ms,RGBA_ETC2_EAC_Format:()=>ja,RGBA_PVRTC_2BPPV1_Format:()=>Wa,RGBA_PVRTC_4BPPV1_Format:()=>Va,RGBA_S3TC_DXT1_Format:()=>ds,RGBA_S3TC_DXT3_Format:()=>fs,RGBA_S3TC_DXT5_Format:()=>ps,RGBDepthPacking:()=>np,RGBFormat:()=>xl,RGBIntegerFormat:()=>$f,RGB_BPTC_SIGNED_Format:()=>lo,RGB_BPTC_UNSIGNED_Format:()=>co,RGB_ETC1_Format:()=>Xa,RGB_ETC2_Format:()=>Ya,RGB_PVRTC_2BPPV1_Format:()=>Ga,RGB_PVRTC_4BPPV1_Format:()=>ka,RGB_S3TC_DXT1_Format:()=>us,RGDepthPacking:()=>rp,RGFormat:()=>Al,RGIntegerFormat:()=>Ha,RawShaderMaterial:()=>Dc,Ray:()=>hn,Raycaster:()=>kd,RectAreaLight:()=>Wc,RedFormat:()=>Fa,RedIntegerFormat:()=>hs,ReinhardToneMapping:()=>eu,RenderTarget:()=>bs,RenderTarget3D:()=>Od,RenderTargetArray:()=>Nd,RepeatWrapping:()=>os,ReplaceStencilOp:()=>ap,ReverseSubtractEquation:()=>Bh,RingGeometry:()=>nr,SIGNED_RED_GREEN_RGTC2_Format:()=>fo,SIGNED_RED_RGTC1_Format:()=>ho,SRGBColorSpace:()=>Oe,SRGBTransfer:()=>dt,Scene:()=>Pn,ShaderChunk:()=>je,ShaderLib:()=>$i,ShaderMaterial:()=>Ke,ShadowMaterial:()=>Rc,Shape:()=>Ln,ShapeGeometry:()=>ra,ShapePath:()=>af,ShapeUtils:()=>ki,ShortType:()=>ml,Skeleton:()=>js,SkeletonHelper:()=>qd,SkinnedMesh:()=>$l,Source:()=>En,Sphere:()=>Bt,SphereGeometry:()=>Gi,Spherical:()=>pa,SphericalHarmonics3:()=>Xc,SplineCurve:()=>ko,SpotLight:()=>Gc,SpotLightHelper:()=>Yd,Sprite:()=>$n,SpriteMaterial:()=>Un,SrcAlphaFactor:()=>ba,SrcAlphaSaturateFactor:()=>Yh,SrcColorFactor:()=>zh,StaticCopyUsage:()=>Ep,StaticDrawUsage:()=>_s,StaticReadUsage:()=>yp,StereoCamera:()=>Cd,StreamCopyUsage:()=>bp,StreamDrawUsage:()=>_p,StreamReadUsage:()=>Sp,StringKeyframeTrack:()=>On,SubtractEquation:()=>Lh,SubtractiveBlending:()=>hl,TOUCH:()=>Ii,TangentSpaceNormalMap:()=>An,TetrahedronGeometry:()=>sa,Texture:()=>pt,TextureLoader:()=>wi,TextureUtils:()=>tg,TimestampQuery:()=>wp,TorusGeometry:()=>aa,TorusKnotGeometry:()=>oa,Triangle:()=>ei,TriangleFanDrawMode:()=>ip,TriangleStripDrawMode:()=>tp,TrianglesDrawMode:()=>ep,TubeGeometry:()=>la,UVMapping:()=>La,Uint16BufferAttribute:()=>Eo,Uint32BufferAttribute:()=>Mo,Uint8BufferAttribute:()=>ku,Uint8ClampedBufferAttribute:()=>Gu,Uniform:()=>Ze,UniformsGroup:()=>Fd,UniformsLib:()=>le,UniformsUtils:()=>To,UnsignedByteType:()=>bt,UnsignedInt248Type:()=>ln,UnsignedInt5999Type:()=>gl,UnsignedIntType:()=>Li,UnsignedShort4444Type:()=>Oa,UnsignedShort5551Type:()=>Na,UnsignedShortType:()=>dr,VSMShadowMap:()=>qi,Vector2:()=>z,Vector3:()=>b,Vector4:()=>Qe,VectorKeyframeTrack:()=>Fr,VideoFrameTexture:()=>rd,VideoTexture:()=>fc,WebGL3DRenderTarget:()=>Mu,WebGLArrayRenderTarget:()=>Eu,WebGLCoordinateSystem:()=>Ni,WebGLCubeRenderTarget:()=>jl,WebGLRenderTarget:()=>mt,WebGLRenderer:()=>fh,WebGLUtils:()=>Bg,WebGPUCoordinateSystem:()=>ys,WebXRController:()=>Hs,WireframeGeometry:()=>Cc,WrapAroundEnding:()=>vs,ZeroCurvatureEnding:()=>Vn,ZeroFactor:()=>Fh,ZeroSlopeEnding:()=>Wn,ZeroStencilOp:()=>sp,createCanvasElement:()=>Au});var ji="173",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dh=0,ll=1,Ph=2,jf=3,qf=0,cl=1,Ih=2,qi=3,Ui=0,At=1,Nt=2,Dt=0,zn=1,sn=2,hl=3,ul=4,Uh=5,_n=100,Lh=101,Bh=102,Oh=103,Nh=104,Fh=200,Hh=201,zh=202,kh=203,ba=204,Ta=205,Gh=206,Vh=207,Wh=208,Xh=209,Yh=210,jh=211,qh=212,Zh=213,Qh=214,wa=0,Ca=1,Ra=2,kn=3,Da=4,Pa=5,Ia=6,Ua=7,rs=0,Kh=1,Jh=2,an=0,$h=1,eu=2,tu=3,iu=4,nu=5,ru=6,su=7,dl="attached",au="detached",La=300,on=301,yn=302,ss=303,as=304,hr=306,os=1e3,yi=1001,ls=1002,Vt=1003,fl=1004,Zf=1004,ur=1005,Qf=1005,xt=1006,cs=1007,Kf=1007,Zi=1008,Jf=1008,bt=1009,pl=1010,ml=1011,dr=1012,Ba=1013,Li=1014,Kt=1015,fr=1016,Oa=1017,Na=1018,ln=1020,gl=35902,vl=1021,xl=1022,Jt=1023,_l=1024,yl=1025,Gn=1026,cn=1027,Fa=1028,hs=1029,Al=1030,Ha=1031,$f=1032,za=1033,us=33776,ds=33777,fs=33778,ps=33779,ka=35840,Ga=35841,Va=35842,Wa=35843,Xa=36196,Ya=37492,ja=37496,qa=37808,Za=37809,Qa=37810,Ka=37811,Ja=37812,$a=37813,eo=37814,to=37815,io=37816,no=37817,ro=37818,so=37819,ao=37820,oo=37821,ms=36492,lo=36494,co=36495,Sl=36283,ho=36284,uo=36285,fo=36286,ou=2200,lu=2201,cu=2202,gs=2300,po=2301,mo=2302,Vn=2400,Wn=2401,vs=2402,go=2500,El=2501,ep=0,tp=1,ip=2,Bi=3200,Ml=3201,np=3202,rp=3203,An=0,hu=1,di="",Oe="srgb",Oi="srgb-linear",xs="linear",dt="srgb",sp=0,Xn=7680,ap=7681,op=7682,lp=7683,cp=34055,hp=34056,up=5386,dp=512,fp=513,pp=514,mp=515,gp=516,vp=517,xp=518,bl=519,uu=512,du=513,fu=514,Tl=515,pu=516,mu=517,gu=518,vu=519,_s=35044,vo=35048,_p=35040,yp=35045,Ap=35049,Sp=35041,Ep=35046,Mp=35050,bp=35042,Tp="100",wl="300 es",Ni=2e3,ys=2001,wp={COMPUTE:"compute",RENDER:"render"},Wt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cp=1234567,pr=Math.PI/180,mr=180/Math.PI;function Ai(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ge(r,e,t){return Math.max(e,Math.min(t,r))}function xu(r,e){return(r%e+e)%e}function zv(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function kv(r,e,t){return r!==e?(t-r)/(e-r):0}function xo(r,e,t){return(1-t)*r+t*e}function Gv(r,e,t,i){return xo(r,e,1-Math.exp(-t*i))}function Vv(r,e=1){return e-Math.abs(xu(r,e*2)-e)}function Wv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Xv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Yv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jv(r,e){return r+Math.random()*(e-r)}function qv(r){return r*(.5-Math.random())}function Zv(r){r!==void 0&&(Cp=r);let e=Cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qv(r){return r*pr}function Kv(r){return r*mr}function Jv(r){return(r&r-1)==0&&r!==0}function $v(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function e0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function t0(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function We(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Cl={DEG2RAD:pr,RAD2DEG:mr,generateUUID:Ai,clamp:Ge,euclideanModulo:xu,mapLinear:zv,inverseLerp:kv,lerp:xo,damp:Gv,pingpong:Vv,smoothstep:Wv,smootherstep:Xv,randInt:Yv,randFloat:jv,randFloatSpread:qv,seededRandom:Zv,degToRad:Qv,radToDeg:Kv,isPowerOfTwo:Jv,ceilPowerOfTwo:$v,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:We,denormalize:ai},z=class{constructor(e=0,t=0){z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class{constructor(e,t,i,n,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=n[0],g=n[3],p=n[6],y=n[1],x=n[4],_=n[7],D=n[2],T=n[5],R=n[8];return s[0]=a*v+o*y+l*D,s[3]=a*g+o*x+l*T,s[6]=a*p+o*_+l*R,s[1]=c*v+h*y+u*D,s[4]=c*g+h*x+u*T,s[7]=c*p+h*_+u*R,s[2]=d*v+f*y+m*D,s[5]=d*g+f*x+m*T,s[8]=d*p+f*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_u.makeScale(e,t)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,t){return this.premultiply(_u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_u=new ze;function yu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}var i0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function As(r,e){return new i0[r](e)}function Ss(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Au(){let r=Ss("canvas");return r.style.display="block",r}var Rp={};function gr(r){r in Rp||(Rp[r]=!0,console.warn(r))}function Dp(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Pp(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ip(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Up=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n0(){let r={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(n.r=Sn(n.r),n.g=Sn(n.g),n.b=Sn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(n.r=Es(n.r),n.g=Es(n.g),n.b=Es(n.b))),n},fromWorkingColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},toWorkingColorSpace:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===di?xs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Oi]:{primaries:e,whitePoint:i,transfer:xs,toXYZ:Up,fromXYZ:Lp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Up,fromXYZ:Lp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),r}var et=n0();function Sn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ms,Rl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=Ss("canvas")),Ms.width=e.width,Ms.height=e.height;let i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Sn(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sn(t[i]/255)*255):t[i]=Sn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,En=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Su(n[a].image)):s.push(Su(n[a]))}else s=Su(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Su(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Rl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var s0=0,pt=class extends Wt{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,i=yi,n=yi,s=xt,a=Zi,o=Jt,l=bt,c=pt.DEFAULT_ANISOTROPY,h=di){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ai(),this.name="",this.source=new En(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==La)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=La;pt.DEFAULT_ANISOTROPY=1;var Qe=class{constructor(e=0,t=0,i=0,n=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,a=.01,o=.1,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<a&&Math.abs(u-v)<a&&Math.abs(m-g)<a){if(Math.abs(h+d)<o&&Math.abs(u+v)<o&&Math.abs(m+g)<o&&Math.abs(c+f+p-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(f+1)/2,D=(p+1)/2,T=(h+d)/4,R=(u+v)/4,P=(m+g)/4;return x>_&&x>D?x<a?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=T/i,s=R/i):_>D?_<a?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=T/n,s=P/n):D<a?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(D),i=R/s,n=P/s),this.set(i,n,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bs=class extends Wt{constructor(e=1,t=1,i={}){super();this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new pt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new En(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mt=class extends bs{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}},vr=class extends pt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Eu=class extends mt{constructor(e=1,t=1,i=1,n={}){super(e,t,n);this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new vr(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Ts=class extends pt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mu=class extends mt{constructor(e=1,t=1,i=1,n={}){super(e,t,n);this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Ts(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Ft=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-o,p=l*d+c*f+h*m+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let D=Math.sqrt(x),T=Math.atan2(D,p*y);g=Math.sin(g*T)/D,o=Math.sin(o*T)/D}let _=o*y;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+v*_,g===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bu=new b,Bp=new Ft,Ht=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qi):Qi.fromBufferAttribute(s,a),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Pl.subVectors(this.max,_o),ws.subVectors(e.a,_o),Cs.subVectors(e.b,_o),Rs.subVectors(e.c,_o),Yn.subVectors(Cs,ws),jn.subVectors(Rs,Cs),xr.subVectors(ws,Rs);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-xr.z,xr.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,xr.z,0,-xr.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-xr.y,xr.x,0];return!Tu(t,ws,Cs,Rs,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,ws,Cs,Rs,Pl))?!1:(Il.crossVectors(Yn,jn),t=[Il.x,Il.y,Il.z],Tu(t,ws,Cs,Rs,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mn=[new b,new b,new b,new b,new b,new b,new b,new b],Qi=new b,Dl=new Ht,ws=new b,Cs=new b,Rs=new b,Yn=new b,jn=new b,xr=new b,_o=new b,Pl=new b,Il=new b,_r=new b;function Tu(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){_r.fromArray(r,s);let o=n.x*Math.abs(_r.x)+n.y*Math.abs(_r.y)+n.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),h=i.dot(_r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var a0=new Ht,yo=new b,wu=new b,Bt=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):a0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(yo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(wu)),this.expandByPoint(yo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new b,Cu=new b,Ul=new b,qn=new b,Ru=new b,Ll=new b,Du=new b,hn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Cu.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Cu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ul),o=qn.dot(this.direction),l=-qn.dot(Ul),c=qn.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Cu).addScaledVector(Ul,d),f}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let i=bn.dot(this.direction),n=bn.dot(bn)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,n,s){Ru.subVectors(t,e),Ll.subVectors(i,e),Du.crossVectors(Ru,Ll);let a=this.direction.dot(Du),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let l=o*this.direction.dot(Ll.crossVectors(qn,Ll));if(l<0)return null;let c=o*this.direction.dot(Ru.cross(qn));if(c<0||l+c>a)return null;let h=-o*qn.dot(Du);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class{constructor(e,t,i,n,s,a,o,l,c,h,u,d,f,m,v,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,f,m,v,g)}set(e,t,i,n,s,a,o,l,c,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,l0)}lookAt(e,t,i){let n=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Zn.crossVectors(i,Si),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Zn.crossVectors(i,Si)),Zn.normalize(),Bl.crossVectors(Si,Zn),n[0]=Zn.x,n[4]=Bl.x,n[8]=Si.x,n[1]=Zn.y,n[5]=Bl.y,n[9]=Si.y,n[2]=Zn.z,n[6]=Bl.z,n[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],y=i[3],x=i[7],_=i[11],D=i[15],T=n[0],R=n[4],P=n[8],M=n[12],A=n[1],I=n[5],k=n[9],N=n[13],G=n[2],Z=n[6],V=n[10],ne=n[14],W=n[3],ce=n[7],ve=n[11],Me=n[15];return s[0]=a*T+o*A+l*G+c*W,s[4]=a*R+o*I+l*Z+c*ce,s[8]=a*P+o*k+l*V+c*ve,s[12]=a*M+o*N+l*ne+c*Me,s[1]=h*T+u*A+d*G+f*W,s[5]=h*R+u*I+d*Z+f*ce,s[9]=h*P+u*k+d*V+f*ve,s[13]=h*M+u*N+d*ne+f*Me,s[2]=m*T+v*A+g*G+p*W,s[6]=m*R+v*I+g*Z+p*ce,s[10]=m*P+v*k+g*V+p*ve,s[14]=m*M+v*N+g*ne+p*Me,s[3]=y*T+x*A+_*G+D*W,s[7]=y*R+x*I+_*Z+D*ce,s[11]=y*P+x*k+_*V+D*ve,s[15]=y*M+x*N+_*ne+D*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+v*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=u*g*c-v*d*c+v*l*f-o*g*f-u*l*p+o*d*p,x=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,_=h*v*c-m*u*c+m*o*f-a*v*f-h*o*p+a*u*p,D=m*u*l-h*v*l-m*o*d+a*v*d+h*o*g-a*u*g,T=t*y+i*x+n*_+s*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=y*R,e[1]=(v*d*s-u*g*s-v*n*f+i*g*f+u*n*p-i*d*p)*R,e[2]=(o*g*s-v*l*s+v*n*c-i*g*c-o*n*p+i*l*p)*R,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*R,e[4]=x*R,e[5]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*R,e[6]=(m*l*s-a*g*s-m*n*c+t*g*c+a*n*p-t*l*p)*R,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*R,e[8]=_*R,e[9]=(m*u*s-h*v*s-m*i*f+t*v*f+h*i*p-t*u*p)*R,e[10]=(a*v*s-m*o*s+m*i*c-t*v*c-a*i*p+t*o*p)*R,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*R,e[12]=D*R,e[13]=(h*v*n-m*u*n+m*i*d-t*v*d-h*i*g+t*u*g)*R,e[14]=(m*o*n-a*v*n-m*i*l+t*v*l+a*i*g-t*o*g)*R,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,v=a*h,g=a*u,p=o*u,y=l*c,x=l*h,_=l*u,D=i.x,T=i.y,R=i.z;return n[0]=(1-(v+p))*D,n[1]=(f+_)*D,n[2]=(m-x)*D,n[3]=0,n[4]=(f-_)*T,n[5]=(1-(d+p))*T,n[6]=(g+y)*T,n[7]=0,n[8]=(m+x)*R,n[9]=(g-y)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Ds.set(n[0],n[1],n[2]).length(),a=Ds.set(n[4],n[5],n[6]).length(),o=Ds.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ki.copy(this);let c=1/s,h=1/a,u=1/o;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=h,Ki.elements[5]*=h,Ki.elements[6]*=h,Ki.elements[8]*=u,Ki.elements[9]*=u,Ki.elements[10]*=u,t.setFromRotationMatrix(Ki),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=Ni){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),f,m;if(o===Ni)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===ys)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Ni){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,f=(i+n)*h,m,v;if(o===Ni)m=(a+s)*u,v=-2*u;else if(o===ys)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ds=new b,Ki=new Le,o0=new b(0,0,0),l0=new b(1,1,1),Zn=new b,Bl=new b,Si=new b,Op=new Le,Np=new Ft,oi=class{constructor(e=0,t=0,i=0,n=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},c0=0,Fp=new b,Is=new Ft,Tn=new Le,Ol=new b,Ao=new b,h0=new b,u0=new Ft,Hp=new b(1,0,0),zp=new b(0,1,0),kp=new b(0,0,1),Gp={type:"added"},d0={type:"removed"},Us={type:"childadded",child:null},Pu={type:"childremoved",child:null},Xe=class extends Wt{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();let e=new b,t=new oi,i=new Ft,n=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new ze}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(kp,e)}translateOnAxis(e,t){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ol.copy(e):Ol.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ao,Ol,this.up):Tn.lookAt(Ol,Ao,this.up),this.quaternion.setFromRotationMatrix(Tn),n&&(Tn.extractRotation(n.matrixWorld),Is.setFromRotationMatrix(Tn),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Xe.DEFAULT_UP=new b(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=new b,wn=new b,Iu=new b,Cn=new b,Ls=new b,Bs=new b,Vp=new b,Uu=new b,Lu=new b,Bu=new b,Ou=new Qe,Nu=new Qe,Fu=new Qe,ei=class{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ji.subVectors(e,t),n.cross(Ji);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ji.subVectors(n,t),wn.subVectors(i,t),Iu.subVectors(e,t);let a=Ji.dot(Ji),o=Ji.dot(wn),l=Ji.dot(Iu),c=wn.dot(wn),h=wn.dot(Iu),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Ou.setScalar(0),Nu.setScalar(0),Fu.setScalar(0),Ou.fromBufferAttribute(e,t),Nu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ou,s.x),a.addScaledVector(Nu,s.y),a.addScaledVector(Fu,s.z),a}static isFrontFacing(e,t,i,n){return Ji.subVectors(i,t),wn.subVectors(e,t),Ji.cross(wn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Ji.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Ls.subVectors(n,i),Bs.subVectors(s,i),Uu.subVectors(e,i);let l=Ls.dot(Uu),c=Bs.dot(Uu);if(l<=0&&c<=0)return t.copy(i);Lu.subVectors(e,n);let h=Ls.dot(Lu),u=Bs.dot(Lu);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ls,a);Bu.subVectors(e,s);let f=Ls.dot(Bu),m=Bs.dot(Bu);if(m>=0&&f<=m)return t.copy(s);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Bs,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Vp.subVectors(s,n),o=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Vp,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Ls,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function Hu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=et.workingColorSpace){if(e=xu(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oe){let i=Wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return et.fromWorkingColorSpace(ti.copy(this),e),Math.round(Ge(ti.r*255,0,255))*65536+Math.round(Ge(ti.g*255,0,255))*256+Math.round(Ge(ti.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(ti.copy(this),t);let i=ti.r,n=ti.g,s=ti.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Oe){et.fromWorkingColorSpace(ti.copy(this),e);let t=ti.r,i=ti.g,n=ti.b;return e!==Oe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Nl);let i=xo(Qn.h,Nl.h,t),n=xo(Qn.s,Nl.s,t),s=xo(Qn.l,Nl.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new re;re.NAMES=Wp;var f0=0,St=class extends Wt{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=zn,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ta,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ba&&(i.blendSrc=this.blendSrc),this.blendDst!==Ta&&(i.blendDst=this.blendDst),this.blendEquation!==_n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},li=class extends St{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rn=p0();function p0(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)==0;)c<<=1,h-=8388608;c&=~8388608,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function fi(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ge(r,-65504,65504),Rn.floatView[0]=r;let e=Rn.uint32View[0],t=e>>23&511;return Rn.baseTable[t]+((e&8388607)>>Rn.shiftTable[t])}function So(r){let e=r>>10;return Rn.uint32View[0]=Rn.mantissaTable[Rn.offsetTable[e]+(r&1023)]+Rn.exponentTable[e],Rn.floatView[0]}var Xp={toHalfFloat:fi,fromHalfFloat:So},Ot=new b,Fl=new z,m0=0,Ce=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_s,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=We(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_s&&(e.usage=this.usage),e}},zu=class extends Ce{constructor(e,t,i){super(new Int8Array(e),t,i)}},ku=class extends Ce{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Gu=class extends Ce{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Vu=class extends Ce{constructor(e,t,i){super(new Int16Array(e),t,i)}},Eo=class extends Ce{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Wu=class extends Ce{constructor(e,t,i){super(new Int32Array(e),t,i)}},Mo=class extends Ce{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Xu=class extends Ce{constructor(e,t,i){super(new Uint16Array(e),t,i);this.isFloat16BufferAttribute=!0}getX(e){let t=So(this.array[e*this.itemSize]);return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=fi(t),this}getY(e){let t=So(this.array[e*this.itemSize+1]);return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=fi(t),this}getZ(e){let t=So(this.array[e*this.itemSize+2]);return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=fi(t),this}getW(e){let t=So(this.array[e*this.itemSize+3]);return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=fi(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array)),this.array[e+0]=fi(t),this.array[e+1]=fi(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array)),this.array[e+0]=fi(t),this.array[e+1]=fi(i),this.array[e+2]=fi(n),this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[e+0]=fi(t),this.array[e+1]=fi(i),this.array[e+2]=fi(n),this.array[e+3]=fi(s),this}},me=class extends Ce{constructor(e,t,i){super(new Float32Array(e),t,i)}},g0=0,Fi=new Le,Yu=new Xe,Os=new b,Ei=new Ht,bo=new Ht,Xt=new b,we=class extends Wt{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Mo:Eo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];bo.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Ei.min,bo.min),Ei.expandByPoint(Xt),Xt.addVectors(Ei.max,bo.max),Ei.expandByPoint(Xt)):(Ei.expandByPoint(bo.min),Ei.expandByPoint(bo.max))}Ei.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(e,c),Xt.add(Os)),n=Math.max(n,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new b,l[P]=new b;let c=new b,h=new b,u=new b,d=new z,f=new z,m=new z,v=new b,g=new b;function p(P,M,A){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,A),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);!isFinite(I)||(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[P].add(v),o[M].add(v),o[A].add(v),l[P].add(g),l[M].add(g),l[A].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,M=y.length;P<M;++P){let A=y[P],I=A.start,k=A.count;for(let N=I,G=I+k;N<G;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let x=new b,_=new b,D=new b,T=new b;function R(P){D.fromBufferAttribute(n,P),T.copy(D);let M=o[P];x.copy(M),x.sub(D.multiplyScalar(D.dot(M))).normalize(),_.crossVectors(T,M);let I=_.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,M=y.length;P<M;++P){let A=y[P],I=A.start,k=A.count;for(let N=I,G=I+k;N<G;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new we,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yp=new Le,yr=new hn,Hl=new Bt,jp=new b,zl=new b,kl=new b,Gl=new b,ju=new b,Vl=new b,qp=new b,Wl=new b,tt=class extends Xe{constructor(e=new we,t=new li){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ju.fromBufferAttribute(u,e),a?Vl.addScaledVector(ju,h):Vl.addScaledVector(ju.sub(t),h))}t.add(Vl)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Hl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Hl,jp)===null||yr.origin.distanceToSquared(jp)>rn(e.far-e.near,2)))&&(Yp.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Yp),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,D=x;_<D;_+=3){let T=o.getX(_),R=o.getX(_+1),P=o.getX(_+2);n=Xl(this,p,e,i,c,h,u,T,R,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);n=Xl(this,a,e,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,D=x;_<D;_+=3){let T=_,R=_+1,P=_+2;n=Xl(this,p,e,i,c,h,u,T,R,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=g,x=g+1,_=g+2;n=Xl(this,a,e,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}};function v0(r,e,t,i,n,s,a,o){let l;if(e.side===At?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Ui,o),l===null)return null;Wl.copy(o),Wl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Wl);return c<t.near||c>t.far?null:{distance:c,point:Wl.clone(),object:r}}function Xl(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,zl),r.getVertexPosition(l,kl),r.getVertexPosition(c,Gl);let h=v0(r,e,t,i,zl,kl,Gl,qp);if(h){let u=new b;ei.getBarycoord(qp,zl,kl,Gl,u),n&&(h.uv=ei.getInterpolatedAttribute(n,o,l,c,u,new z)),s&&(h.uv1=ei.getInterpolatedAttribute(s,o,l,c,u,new z)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new b,materialIndex:0};ei.getNormal(zl,kl,Gl,d.normal),h.face=d,h.barycoord=u}return h}var Dn=class extends we{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function m(v,g,p,y,x,_,D,T,R,P,M){let A=_/R,I=D/P,k=_/2,N=D/2,G=T/2,Z=R+1,V=P+1,ne=0,W=0,ce=new b;for(let ve=0;ve<V;ve++){let Me=ve*I-N;for(let Ve=0;Ve<Z;Ve++){let ct=Ve*A-k;ce[v]=ct*y,ce[g]=Me*x,ce[p]=G,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[g]=0,ce[p]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Ve/R),u.push(1-ve/P),ne+=1}}for(let ve=0;ve<P;ve++)for(let Me=0;Me<R;Me++){let Ve=d+Me+Z*ve,ct=d+Me+Z*(ve+1),q=d+(Me+1)+Z*(ve+1),ae=d+(Me+1)+Z*ve;l.push(Ve,ct,ae),l.push(ct,q,ae),W+=6}o.addGroup(f,W,M),f+=W,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ii(r){let e={};for(let t=0;t<r.length;t++){let i=Ar(r[t]);for(let n in i)e[n]=i[n]}return e}function x0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qu(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var To={clone:Ar,merge:ii},_0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends St{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=x0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Kn=class extends Xe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jn=new b,Zp=new z,Qp=new z,Tt=class extends Kn{constructor(e=50,t=1,i=.1,n=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Zp,Qp),t.subVectors(Qp,Zp)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Fs=1,Yl=class extends Xe{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Tt(Ns,Fs,e,t);n.layers=this.layers,this.add(n);let s=new Tt(Ns,Fs,e,t);s.layers=this.layers,this.add(s);let a=new Tt(Ns,Fs,e,t);a.layers=this.layers,this.add(a);let o=new Tt(Ns,Fs,e,t);o.layers=this.layers,this.add(o);let l=new Tt(Ns,Fs,e,t);l.layers=this.layers,this.add(l);let c=new Tt(Ns,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Sr=class extends pt{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:on;super(e,t,i,n,s,a,o,l,c,h);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jl=class extends mt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Sr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Dn(5,5,5),s=new Ke({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:Dt});s.uniforms.tEquirect.value=t;let a=new tt(n,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=xt),new Yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},un=class extends Xe{constructor(){super();this.isGroup=!0,this.type="Group"}},A0={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zs=class{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new zs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ks=class{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(e),this.near=t,this.far=i}clone(){return new ks(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pn=class extends Xe{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_s,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ci=new b,In=class{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),i=We(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array),s=We(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Ce(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new In(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Un=class extends St{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,wo=new b,Ws=new b,Xs=new b,Ys=new z,Co=new z,Kp=new Le,ql=new b,Ro=new b,Zl=new b,Jp=new z,Zu=new z,$p=new z,$n=class extends Xe{constructor(e=new Un){super();if(this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new we;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gs(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new In(i,3,0,!1)),Vs.setAttribute("uv",new In(i,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Kp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Ql(ql.set(-.5,-.5,0),Xs,a,Ws,n,s),Ql(Ro.set(.5,-.5,0),Xs,a,Ws,n,s),Ql(Zl.set(.5,.5,0),Xs,a,Ws,n,s),Jp.set(0,0),Zu.set(1,0),$p.set(1,1);let o=e.ray.intersectTriangle(ql,Ro,Zl,!1,wo);if(o===null&&(Ql(Ro.set(-.5,.5,0),Xs,a,Ws,n,s),Zu.set(0,1),o=e.ray.intersectTriangle(ql,Zl,Ro,!1,wo),o===null))return;let l=e.ray.origin.distanceTo(wo);l<e.near||l>e.far||t.push({distance:l,point:wo.clone(),uv:ei.getInterpolation(wo,ql,Ro,Zl,Jp,Zu,$p,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ql(r,e,t,i,n,s){Ys.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Co.x=s*Ys.x-n*Ys.y,Co.y=n*Ys.x+s*Ys.y):Co.copy(Ys),r.copy(e),r.x+=Co.x,r.y+=Co.y,r.applyMatrix4(Kp)}var Kl=new b,em=new b,Er=class extends Xe{constructor(){super();this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,n=t.length;i<n;i++){let s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let n=this.levels,s;for(s=0;s<n.length&&!(t<n[s].distance);s++);return n.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Kl.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo(Kl);this.getObjectForDistance(n).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Kl.setFromMatrixPosition(e.matrixWorld),em.setFromMatrixPosition(this.matrixWorld);let i=Kl.distanceTo(em)/e.zoom;t[0].object.visible=!0;let n,s;for(n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),i>=a)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let n=0,s=i.length;n<s;n++){let a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},tm=new b,im=new Qe,nm=new Qe,S0=new b,rm=new Le,Jl=new b,Qu=new Bt,sm=new Le,Ku=new hn,$l=class extends tt{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dl,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ht),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qu.copy(this.boundingSphere),Qu.applyMatrix4(n),e.ray.intersectsSphere(Qu)!==!1&&(sm.copy(n).invert(),Ku.copy(e.ray).applyMatrix4(sm),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===au?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;im.fromBufferAttribute(n.attributes.skinIndex,e),nm.fromBufferAttribute(n.attributes.skinWeight,e),tm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=nm.getComponent(s);if(a!==0){let o=im.getComponent(s);rm.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(S0.copy(tm).applyMatrix4(rm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Do=class extends Xe{constructor(){super();this.isBone=!0,this.type="Bone"}},Hi=class extends pt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Vt,h=Vt,u,d){super(null,a,o,l,c,h,n,s,u,d);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},am=new Le,E0=new Le,js=class{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:E0;am.multiplyMatrices(o,t[s]),am.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new js(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Hi(t,e,e,Jt,Kt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Do),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},er=class extends Ce{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new Le,om=new Le,ec=[],lm=new Ht,M0=new Le,Po=new tt,Io=new Bt,tc=class extends tt{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,M0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),lm.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(lm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Io.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,qs),om.multiplyMatrices(i,qs),Po.matrixWorld=om,Po.raycast(e,ec);for(let a=0,o=ec.length;a<o;a++){let l=ec[a];l.instanceId=s,l.object=this,t.push(l)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(n*this.count),n,this.count,Fa,Kt));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ju=new b,b0=new b,T0=new ze,zi=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ju.subVectors(i,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ju),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||T0.getNormalMatrix(e),n=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mr=new Bt,ic=new b,br=class{constructor(e=new zi,t=new zi,i=new zi,n=new zi,s=new zi,a=new zi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],m=n[9],v=n[10],g=n[11],p=n[12],y=n[13],x=n[14],_=n[15];if(i[0].setComponents(l-s,d-c,g-f,_-p).normalize(),i[1].setComponents(l+s,d+c,g+f,_+p).normalize(),i[2].setComponents(l+a,d+h,g+m,_+y).normalize(),i[3].setComponents(l-a,d-h,g-m,_-y).normalize(),i[4].setComponents(l-o,d-u,g-v,_-x).normalize(),t===Ni)i[5].setComponents(l+o,d+u,g+v,_+x).normalize();else if(t===ys)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ic.x=n.normal.x>0?e.max.x:e.min.x,ic.y=n.normal.y>0?e.max.y:e.min.y,ic.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(r,e){return r-e}function w0(r,e){return r.z-e.z}function C0(r,e){return e.z-r.z}var cm=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},pi=new Le,R0=new re(1,1,1),ed=new br,nc=new Ht,Tr=new Bt,Uo=new b,hm=new b,D0=new b,td=new cm,ni=new tt,rc=[];function P0(r,e,t=0){let i=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){let n=r.count;for(let s=0;s<n;s++)for(let a=0;a<i;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*i);e.needsUpdate=!0}function wr(r,e){if(r.constructor!==e.constructor){let t=Math.min(r.length,e.length);for(let i=0;i<t;i++)e[i]=r[i]}else{let t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}var sc=class extends tt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,i=t*2,n){super(new we,n);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new Hi(t,e,e,Jt,Kt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new Hi(t,e,e,hs,Li);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new Hi(t,e,e,Jt,Kt);i.colorSpace=et.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in e.attributes){let a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),u=new Ce(h,l,c);t.setAttribute(s,u)}if(e.getIndex()!==null){let s=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new Ce(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(Boolean(e.getIndex())!==Boolean(t.getIndex()))throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let n=e.getAttribute(i),s=t.getAttribute(i);if(n.itemSize!==s.itemSize||n.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let s=t[i].geometryIndex;this.getMatrixAt(i,pi),this.getBoundingBoxAt(s,nc).applyMatrix4(pi),e.union(nc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let s=t[i].geometryIndex;this.getMatrixAt(i,pi),this.getBoundingSphereAt(s,Tr).applyMatrix4(pi),e.union(Tr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort($u),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));let s=this._matricesTexture;pi.identity().toArray(s.image.data,n*16),s.needsUpdate=!0;let a=this._colorsTexture;return a&&(R0.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort($u),l=this._availableGeometryIds.shift(),s[l]=n):(l=this._geometryCount,this._geometryCount++,s.push(n)),this.setGeometryAt(l,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,n=i.getIndex()!==null,s=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in i.attributes){let u=t.getAttribute(h),d=i.getAttribute(h);P0(u,d,l);let f=u.itemSize;for(let m=u.count,v=c;m<v;m++){let g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(n){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)s.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)s.setX(h+d,l);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let n=0,s=i.length;n<s;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),s=this.geometry;for(let a=0,o=i.length;a<o;a++){let l=n[a],c=i[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=s.index,m=f.array,v=e-u;for(let g=h;g<h+d;g++)m[g]=m[g]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=c,d=s.attributes;for(let f in d){let m=d[f],{array:v,itemSize:g}=m;v.copyWithin(e*g,h*g,(h+u)*g),m.addUpdateRange(e*g,u*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){let s=new Ht,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),s.expandByPoint(Uo.fromBufferAttribute(o,h))}n.boundingBox=s}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){let s=new Bt;this.getBoundingBoxAt(e,nc),nc.getCenter(s.center);let a=i.index,o=i.attributes.position,l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Uo.fromBufferAttribute(o,u),l=Math.max(l,s.center.distanceToSquared(Uo))}s.radius=Math.sqrt(l),n.boundingSphere=s}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort($u);t[t.length-1]===i.length;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let n=new Int32Array(e),s=new Int32Array(e);wr(this._multiDrawCounts,n),wr(this._multiDrawStarts,s),this._multiDrawCounts=n,this._multiDrawStarts=s,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),wr(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),wr(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),wr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new we,this._initializeGeometry(s));let a=this.geometry;s.index&&wr(s.index.array,a.index.array);for(let o in s.attributes)wr(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){let i=this._instanceInfo,n=this._geometryInfo,s=this.matrixWorld,a=this.geometry;ni.material=this.material,ni.geometry.index=a.index,ni.geometry.attributes=a.attributes,ni.geometry.boundingBox===null&&(ni.geometry.boundingBox=new Ht),ni.geometry.boundingSphere===null&&(ni.geometry.boundingSphere=new Bt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;let c=i[o].geometryIndex,h=n[c];ni.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,ni.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,ni.geometry.boundingBox),this.getBoundingSphereAt(c,ni.geometry.boundingSphere),ni.raycast(e,rc);for(let u=0,d=rc.length;u<d;u++){let f=rc[u];f.object=this,f.batchId=o,t.push(f)}rc.length=0}ni.material=null,ni.geometry.index=null,ni.geometry.attributes={},ni.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>Vf(Rh({},t),{boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>Rh({},t)),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,n,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=n.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;d&&(pi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),ed.setFromProjectionMatrix(pi,e.coordinateSystem));let v=0;if(this.sortObjects){pi.copy(this.matrixWorld).invert(),Uo.setFromMatrixPosition(i.matrixWorld).applyMatrix4(pi),hm.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(pi);for(let y=0,x=l.length;y<x;y++)if(l[y].visible&&l[y].active){let _=l[y].geometryIndex;this.getMatrixAt(y,pi),this.getBoundingSphereAt(_,Tr).applyMatrix4(pi);let D=!1;if(d&&(D=!ed.intersectsSphere(Tr)),!D){let T=u[_],R=D0.subVectors(Tr.center,Uo).dot(hm);td.push(T.start,T.count,R,y)}}let g=td.list,p=this.customSort;p===null?g.sort(s.transparent?C0:w0):p.call(this,g,i);for(let y=0,x=g.length;y<x;y++){let _=g[y];c[v]=_.start*o,h[v]=_.count,m[v]=_.index,v++}td.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){let y=l[g].geometryIndex,x=!1;if(d&&(this.getMatrixAt(g,pi),this.getBoundingSphereAt(y,Tr).applyMatrix4(pi),x=!ed.intersectsSphere(Tr)),!x){let _=u[y];c[v]=_.start*o,h[v]=_.count,m[v]=g,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,s,a){this.onBeforeRender(e,null,n,s,a)}},_t=class extends St{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ac=new b,oc=new b,um=new Le,Lo=new hn,lc=new Bt,id=new b,dm=new b,mi=class extends Xe{constructor(e=new we,t=new _t){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)ac.fromBufferAttribute(t,n-1),oc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(n),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;um.copy(n).invert(),Lo.copy(e.ray).applyMatrix4(um);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=h.getX(v),y=h.getX(v+1),x=cc(this,e,Lo,l,p,y,v);x&&t.push(x)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=cc(this,e,Lo,l,v,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=cc(this,e,Lo,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=cc(this,e,Lo,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function cc(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(ac.fromBufferAttribute(o,n),oc.fromBufferAttribute(o,s),t.distanceSqToSegment(ac,oc,id,dm)>i)return;id.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(id);if(!(c<e.near||c>e.far))return{distance:c,point:dm.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var fm=new b,pm=new b,Zt=class extends mi{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)fm.fromBufferAttribute(t,n),pm.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+fm.distanceTo(pm);e.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hc=class extends mi{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}},dn=class extends St{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mm=new Le,nd=new hn,uc=new Bt,dc=new b,gi=class extends Xe{constructor(e=new we,t=new dn){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(n),uc.radius+=s,e.ray.intersectsSphere(uc)===!1)return;mm.copy(n).invert(),nd.copy(e.ray).applyMatrix4(mm);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let g=c.getX(m);dc.fromBufferAttribute(u,g),gm(dc,g,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)dc.fromBufferAttribute(u,m),gm(dc,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function gm(r,e,t,i,n,s,a){let o=nd.distanceSqToPoint(r);if(o<t){let l=new b;nd.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fc=class extends pt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c);this.isVideoTexture=!0,this.minFilter=a!==void 0?a:xt,this.magFilter=s!==void 0?s:xt,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},rd=class extends fc{constructor(e,t,i,n,s,a,o,l){super({},e,t,i,n,s,a,o,l);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},sd=class extends pt{constructor(e,t){super({width:e,height:t});this.isFramebufferTexture=!0,this.magFilter=Vt,this.minFilter=Vt,this.generateMipmaps=!1,this.needsUpdate=!0}},Zs=class extends pt{constructor(e,t,i,n,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,s,u,d);this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},ad=class extends Zs{constructor(e,t,i,n,s,a){super(e,t,i,s,a);this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=yi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},od=class extends Zs{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,on);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},ld=class extends pt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c);this.isCanvasTexture=!0,this.needsUpdate=!0}},Cr=class extends pt{constructor(e,t,i,n,s,a,o,l,c,h=Gn){if(h!==Gn&&h!==cn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Gn&&(i=Li),i===void 0&&h===cn&&(i=ln);super(null,n,s,a,o,l,h,i,c);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(e,t){let i=1e-4,n=e-i,s=e+i;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new z:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,n=[],s=[],a=[],o=new b,l=new Le;for(let f=0;f<=e;f++){let m=f/e;n[f]=this.getTangentAt(m,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ge(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(Ge(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(n[m],f*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qs=class extends Mi{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new z){let i=t,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pc=class extends Qs{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a);this.isArcCurve=!0,this.type="ArcCurve"}};function cd(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+i*o}}}var mc=new b,hd=new cd,ud=new cd,dd=new cd,gc=class extends Mi{constructor(e=[],t=!1,i="centripetal",n=.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new b){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(mc.subVectors(n[0],n[1]).add(n[0]),c=mc);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(mc.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=mc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),hd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),ud.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),dd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ud.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),dd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(hd.calc(l),ud.calc(l),dd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new b().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vm(r,e,t,i,n){let s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function I0(r,e){let t=1-r;return t*t*e}function U0(r,e){return 2*(1-r)*r*e}function L0(r,e){return r*r*e}function Bo(r,e,t,i){return I0(r,e)+U0(r,t)+L0(r,i)}function B0(r,e){let t=1-r;return t*t*t*e}function O0(r,e){let t=1-r;return 3*t*t*r*e}function N0(r,e){return 3*(1-r)*r*r*e}function F0(r,e){return r*r*r*e}function Oo(r,e,t,i,n){return B0(r,e)+O0(r,t)+N0(r,i)+F0(r,n)}var No=class extends Mi{constructor(e=new z,t=new z,i=new z,n=new z){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new z){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Oo(e,n.x,s.x,a.x,o.x),Oo(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vc=class extends Mi{constructor(e=new b,t=new b,i=new b,n=new b){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new b){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Oo(e,n.x,s.x,a.x,o.x),Oo(e,n.y,s.y,a.y,o.y),Oo(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends Mi{constructor(e=new z,t=new z){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends Mi{constructor(e=new b,t=new b){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Mi{constructor(e=new z,t=new z,i=new z){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Bo(e,n.x,s.x,a.x),Bo(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Mi{constructor(e=new b,t=new b,i=new b){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Bo(e,n.x,s.x,a.x),Bo(e,n.y,s.y,a.y),Bo(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Mi{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new z){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(vm(o,l.x,c.x,h.x,u.x),vm(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},_c=Object.freeze({__proto__:null,ArcCurve:pc,CatmullRomCurve3:gc,CubicBezierCurve:No,CubicBezierCurve3:vc,EllipseCurve:Qs,LineCurve:Fo,LineCurve3:xc,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:zo,SplineCurve:ko}),yc=class extends Mi{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new _c[n.type]().fromJSON(n))}return this}},Rr=class extends yc{constructor(e){super();this.type="Path",this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Fo(this.currentPoint.clone(),new z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Ho(this.currentPoint.clone(),new z(e,t),new z(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new No(this.currentPoint.clone(),new z(e,t),new z(i,n),new z(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new Qs(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dr=class extends we{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ge(n,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new b,d=new z,f=new b,m=new b,v=new b,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=t;y++){let x=i+y*h*n,_=Math.sin(x),D=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*D,a.push(u.x,u.y,u.z),d.x=y/t,d.y=T/(e.length-1),o.push(d.x,d.y);let R=l[3*T+0]*_,P=l[3*T+1],M=l[3*T+0]*D;c.push(R,P,M)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let _=x+y*e.length,D=_,T=_+e.length,R=_+e.length+1,P=_+1;s.push(D,T,P),s.push(R,P,T)}this.setIndex(s),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.points,e.segments,e.phiStart,e.phiLength)}},Ks=class extends Dr{constructor(e=1,t=1,i=4,n=8){let s=new Rr;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5);super(s.getPoints(i),n);this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Ks(e.radius,e.length,e.capSegments,e.radialSegments)}},Js=class extends we{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new b,h=new z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.segments,e.thetaStart,e.thetaLength)}},tr=class extends we{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,v=[],g=i/2,p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function y(){let _=new b,D=new b,T=0,R=(t-e)/i;for(let P=0;P<=s;P++){let M=[],A=P/s,I=A*(t-e)+e;for(let k=0;k<=n;k++){let N=k/n,G=N*l+o,Z=Math.sin(G),V=Math.cos(G);D.x=I*Z,D.y=-A*i+g,D.z=I*V,u.push(D.x,D.y,D.z),_.set(Z,R,V).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-A),M.push(m++)}v.push(M)}for(let P=0;P<n;P++)for(let M=0;M<s;M++){let A=v[M][P],I=v[M+1][P],k=v[M+1][P+1],N=v[M][P+1];(e>0||M!==0)&&(h.push(A,I,N),T+=3),(t>0||M!==s-1)&&(h.push(I,k,N),T+=3)}c.addGroup(p,T,0),p+=T}function x(_){let D=m,T=new z,R=new b,P=0,M=_===!0?e:t,A=_===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),m++;let I=m;for(let k=0;k<=n;k++){let G=k/n*l+o,Z=Math.cos(G),V=Math.sin(G);R.x=M*V,R.y=g*A,R.z=M*Z,u.push(R.x,R.y,R.z),d.push(0,A,0),T.x=Z*.5+.5,T.y=V*.5*A+.5,f.push(T.x,T.y),m++}for(let k=0;k<n;k++){let N=D+k,G=I+k;_===!0?h.push(G,G+1,N):h.push(G+1,G,N),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$s=class extends tr{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fn=class extends we{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(s.slice(),3)),this.setAttribute("uv",new me(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new b,_=new b,D=new b;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],_),f(t[T+2],D),l(x,_,D,y)}function l(y,x,_,D){let T=D+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let M=y.clone().lerp(_,P/T),A=x.clone().lerp(_,P/T),I=T-P;for(let k=0;k<=I;k++)k===0&&P===T?R[P][k]=M:R[P][k]=M.clone().lerp(A,k/I)}for(let P=0;P<T;P++)for(let M=0;M<2*(T-P)-1;M++){let A=Math.floor(M/2);M%2==0?(d(R[P][A+1]),d(R[P+1][A]),d(R[P][A])):(d(R[P][A+1]),d(R[P+1][A+1]),d(R[P+1][A]))}}function c(y){let x=new b;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){let y=new b;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let _=g(y)/2/Math.PI+.5,D=p(y)/Math.PI+.5;a.push(_,1-D)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],D=a[y+4],T=Math.max(x,_,D),R=Math.min(x,_,D);T>.9&&R<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),D<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){let _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function m(){let y=new b,x=new b,_=new b,D=new b,T=new z,R=new z,P=new z;for(let M=0,A=0;M<s.length;M+=9,A+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),T.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),P.set(a[A+4],a[A+5]),D.copy(y).add(x).add(_).divideScalar(3);let I=g(D);v(T,A+0,y,I),v(R,A+2,x,I),v(P,A+4,_,I)}}function v(y,x,_,D){D<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=D/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.vertices,e.indices,e.radius,e.details)}},ea=class extends fn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ea(e.radius,e.detail)}},Ac=new b,Sc=new b,fd=new b,Ec=new ei,Mc=class extends we{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(pr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:g,c:p}=Ec;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ec.getNormal(fd),u[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let x=(y+1)%3,_=u[y],D=u[x],T=Ec[h[y]],R=Ec[h[x]],P=`${_}_${D}`,M=`${D}_${_}`;M in d&&d[M]?(fd.dot(d[M].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),d[M]=null):P in d||(d[P]={index0:c[y],index1:c[x],normal:fd.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:g}=d[m];Ac.fromBufferAttribute(o,v),Sc.fromBufferAttribute(o,g),f.push(Ac.x,Ac.y,Ac.z),f.push(Sc.x,Sc.y,Sc.z)}this.setAttribute("position",new me(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ln=class extends Rr{constructor(e){super(e);this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Rr().fromJSON(n))}return this}},H0={triangulate:function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=xm(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=W0(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<n;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Go(s,a,t,o,l,f,0),a}};function xm(r,e,t,i,n){let s,a;if(n===tx(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Am(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Am(s,r[s],r[s+1],a);return a&&bc(a,a.next)&&(Wo(a),a=a.next),a}function Pr(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(bc(t,t.next)||wt(t.prev,t,t.next)===0)){if(Wo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Go(r,e,t,i,n,s,a){if(!r)return;!a&&s&&Z0(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?k0(r,i,n,s):z0(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Wo(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=G0(Pr(r),e,t),Go(r,e,t,i,n,s,2)):a===2&&V0(r,e,t,i,n,s):Go(Pr(r),e,t,i,n,s,1);break}}}function z0(r){let e=r.prev,t=r,i=r.next;if(wt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ta(n,o,s,l,a,c,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function k0(r,e,t,i){let n=r.prev,s=r,a=r.next;if(wt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=pd(f,m,e,t,i),y=pd(v,g,e,t,i),x=r.prevZ,_=r.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==n&&x!==a&&ta(o,h,l,u,c,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==n&&_!==a&&ta(o,h,l,u,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==n&&x!==a&&ta(o,h,l,u,c,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==n&&_!==a&&ta(o,h,l,u,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function G0(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!bc(n,s)&&_m(n,i,i.next,s)&&Vo(n,s)&&Vo(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Wo(i),Wo(i.next),i=r=s),i=i.next}while(i!==r);return Pr(i)}function V0(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J0(a,o)){let l=ym(a,o);a=Pr(a,a.next),l=Pr(l,l.next),Go(a,e,t,i,n,s,0),Go(l,e,t,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function W0(r,e,t,i){let n=[],s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:r.length,c=xm(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(K0(c));for(n.sort(X0),s=0;s<n.length;s++)t=Y0(n[s],t);return t}function X0(r,e){return r.x-e.x}function Y0(r,e){let t=j0(r,e);if(!t)return e;let i=ym(t,r);return Pr(i,i.next),Pr(t,t.next)}function j0(r,e){let t=e,i=-1/0,n,s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,n=t.x<t.next.x?t:t.next,d===s))return n}t=t.next}while(t!==e);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;t=n;do s>=t.x&&t.x>=l&&s!==t.x&&ta(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Vo(t,r)&&(u<h||u===h&&(t.x>n.x||t.x===n.x&&q0(n,t)))&&(n=t,h=u)),t=t.next;while(t!==o);return n}function q0(r,e){return wt(r.prev,r,e.prev)<0&&wt(e.next,r,r.next)<0}function Z0(r,e,t,i){let n=r;do n.z===0&&(n.z=pd(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Q0(n)}function Q0(r){let e,t,i,n,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;t=i}s.nextZ=null,c*=2}while(a>1);return r}function pd(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function K0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ta(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function J0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!$0(r,e)&&(Vo(r,e)&&Vo(e,r)&&ex(r,e)&&(wt(r.prev,r,e.prev)||wt(r,e.prev,e))||bc(r,e)&&wt(r.prev,r,r.next)>0&&wt(e.prev,e,e.next)>0)}function wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function bc(r,e){return r.x===e.x&&r.y===e.y}function _m(r,e,t,i){let n=wc(wt(r,e,t)),s=wc(wt(r,e,i)),a=wc(wt(t,i,r)),o=wc(wt(t,i,e));return!!(n!==s&&a!==o||n===0&&Tc(r,t,e)||s===0&&Tc(r,i,e)||a===0&&Tc(t,r,i)||o===0&&Tc(t,e,i))}function Tc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function wc(r){return r>0?1:r<0?-1:0}function $0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&_m(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Vo(r,e){return wt(r.prev,r,r.next)<0?wt(r,e,r.next)>=0&&wt(r,r.prev,e)>=0:wt(r,e,r.prev)<0||wt(r,r.next,e)<0}function ex(r,e){let t=r,i=!1,n=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&n<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function ym(r,e){let t=new md(r.i,r.x,r.y),i=new md(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Am(r,e,t,i){let n=new md(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Wo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function md(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tx(r,e,t,i){let n=0;for(let s=e,a=t-i;s<t;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var ki=class{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5}static isClockWise(e){return ki.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Sm(e),Em(i,e);let a=e.length;t.forEach(Sm);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Em(i,t[l]);let o=H0.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Sm(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Em(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var ia=class extends we{constructor(e=new Ln([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new me(n,3)),this.setAttribute("uv",new me(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ix,x,_=!1,D,T,R,P;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new b,R=new b,P=new b),d||(g=0,f=0,m=0,v=0);let M=o.extractPoints(c),A=M.shape,I=M.holes;if(!ki.isClockWise(A)){A=A.reverse();for(let $=0,J=I.length;$<J;$++){let C=I[$];ki.isClockWise(C)&&(I[$]=C.reverse())}}let N=ki.triangulateShape(A,I),G=A;for(let $=0,J=I.length;$<J;$++){let C=I[$];A=A.concat(C)}function Z($,J,C){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(J,C)}let V=A.length,ne=N.length;function W($,J,C){let Re,ee,_e,se=$.x-J.x,Ne=$.y-J.y,fe=C.x-$.x,w=C.y-$.y,S=se*se+Ne*Ne,O=se*w-Ne*fe;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(S),K=Math.sqrt(fe*fe+w*w),j=J.x-Ne/Y,Te=J.y+se/Y,he=C.x-w/K,xe=C.y+fe/K,Je=((he-j)*w-(xe-Te)*fe)/(se*w-Ne*fe);Re=j+se*Je-$.x,ee=Te+Ne*Je-$.y;let ie=Re*Re+ee*ee;if(ie<=2)return new z(Re,ee);_e=Math.sqrt(ie/2)}else{let Y=!1;se>Number.EPSILON?fe>Number.EPSILON&&(Y=!0):se<-Number.EPSILON?fe<-Number.EPSILON&&(Y=!0):Math.sign(Ne)===Math.sign(w)&&(Y=!0),Y?(Re=-Ne,ee=se,_e=Math.sqrt(S)):(Re=se,ee=Ne,_e=Math.sqrt(S/2))}return new z(Re/_e,ee/_e)}let ce=[];for(let $=0,J=G.length,C=J-1,Re=$+1;$<J;$++,C++,Re++)C===J&&(C=0),Re===J&&(Re=0),ce[$]=W(G[$],G[C],G[Re]);let ve=[],Me,Ve=ce.concat();for(let $=0,J=I.length;$<J;$++){let C=I[$];Me=[];for(let Re=0,ee=C.length,_e=ee-1,se=Re+1;Re<ee;Re++,_e++,se++)_e===ee&&(_e=0),se===ee&&(se=0),Me[Re]=W(C[Re],C[_e],C[se]);ve.push(Me),Ve=Ve.concat(Me)}for(let $=0;$<g;$++){let J=$/g,C=f*Math.cos(J*Math.PI/2),Re=m*Math.sin(J*Math.PI/2)+v;for(let ee=0,_e=G.length;ee<_e;ee++){let se=Z(G[ee],ce[ee],Re);oe(se.x,se.y,-C)}for(let ee=0,_e=I.length;ee<_e;ee++){let se=I[ee];Me=ve[ee];for(let Ne=0,fe=se.length;Ne<fe;Ne++){let w=Z(se[Ne],Me[Ne],Re);oe(w.x,w.y,-C)}}}let ct=m+v;for(let $=0;$<V;$++){let J=d?Z(A[$],Ve[$],ct):A[$];_?(R.copy(D.normals[0]).multiplyScalar(J.x),T.copy(D.binormals[0]).multiplyScalar(J.y),P.copy(x[0]).add(R).add(T),oe(P.x,P.y,P.z)):oe(J.x,J.y,0)}for(let $=1;$<=h;$++)for(let J=0;J<V;J++){let C=d?Z(A[J],Ve[J],ct):A[J];_?(R.copy(D.normals[$]).multiplyScalar(C.x),T.copy(D.binormals[$]).multiplyScalar(C.y),P.copy(x[$]).add(R).add(T),oe(P.x,P.y,P.z)):oe(C.x,C.y,u/h*$)}for(let $=g-1;$>=0;$--){let J=$/g,C=f*Math.cos(J*Math.PI/2),Re=m*Math.sin(J*Math.PI/2)+v;for(let ee=0,_e=G.length;ee<_e;ee++){let se=Z(G[ee],ce[ee],Re);oe(se.x,se.y,u+C)}for(let ee=0,_e=I.length;ee<_e;ee++){let se=I[ee];Me=ve[ee];for(let Ne=0,fe=se.length;Ne<fe;Ne++){let w=Z(se[Ne],Me[Ne],Re);_?oe(w.x,w.y+x[h-1].y,x[h-1].x+C):oe(w.x,w.y,u+C)}}}q(),ae();function q(){let $=n.length/3;if(d){let J=0,C=V*J;for(let Re=0;Re<ne;Re++){let ee=N[Re];Pe(ee[2]+C,ee[1]+C,ee[0]+C)}J=h+g*2,C=V*J;for(let Re=0;Re<ne;Re++){let ee=N[Re];Pe(ee[0]+C,ee[1]+C,ee[2]+C)}}else{for(let J=0;J<ne;J++){let C=N[J];Pe(C[2],C[1],C[0])}for(let J=0;J<ne;J++){let C=N[J];Pe(C[0]+V*h,C[1]+V*h,C[2]+V*h)}}i.addGroup($,n.length/3-$,0)}function ae(){let $=n.length/3,J=0;be(G,J),J+=G.length;for(let C=0,Re=I.length;C<Re;C++){let ee=I[C];be(ee,J),J+=ee.length}i.addGroup($,n.length/3-$,1)}function be($,J){let C=$.length;for(;--C>=0;){let Re=C,ee=C-1;ee<0&&(ee=$.length-1);for(let _e=0,se=h+g*2;_e<se;_e++){let Ne=V*_e,fe=V*(_e+1),w=J+Re+Ne,S=J+ee+Ne,O=J+ee+fe,Y=J+Re+fe;rt(w,S,O,Y)}}}function oe($,J,C){l.push($),l.push(J),l.push(C)}function Pe($,J,C){De($),De(J),De(C);let Re=n.length/3,ee=y.generateTopUV(i,n,Re-3,Re-2,Re-1);lt(ee[0]),lt(ee[1]),lt(ee[2])}function rt($,J,C,Re){De($),De(J),De(Re),De(J),De(C),De(Re);let ee=n.length/3,_e=y.generateSideWallUV(i,n,ee-6,ee-3,ee-2,ee-1);lt(_e[0]),lt(_e[1]),lt(_e[3]),lt(_e[1]),lt(_e[2]),lt(_e[3])}function De($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function lt($){s.push($.x),s.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return nx(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new _c[n.type]().fromJSON(n)),new ia(i,e.options)}},ix={generateTopUV:function(r,e,t,i,n){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new z(s,a),new z(o,l),new z(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],m=e[n*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new z(a,1-l),new z(c,1-u),new z(d,1-m),new z(v,1-p)]:[new z(o,1-l),new z(h,1-u),new z(f,1-m),new z(g,1-p)]}};function nx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var na=class extends fn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new na(e.radius,e.detail)}},Ir=class extends fn{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t);this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ir(e.radius,e.detail)}},ir=class extends we{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<c;x++){let _=x*u-s;m.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,_=y+c*(p+1),D=y+1+c*(p+1),T=y+1+c*p;f.push(x,_,T),f.push(_,D,T)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}},nr=class extends we{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new b,m=new z;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){let p=s+g/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<n;v++){let g=v*(i+1);for(let p=0;p<i;p++){let y=p+g,x=y,_=y+i+1,D=y+i+2,T=y+1;o.push(x,_,T),o.push(_,D,T)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ra=class extends we{constructor(e=new Ln([new z(0,.5),new z(-.5,-.5),new z(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new me(n,3)),this.setAttribute("normal",new me(s,3)),this.setAttribute("uv",new me(a,2));function c(h){let u=n.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;ki.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];ki.isClockWise(y)===!0&&(m[g]=y.reverse())}let v=ki.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];n.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){let y=v[g],x=y[0]+u,_=y[1]+u,D=y[2]+u;i.push(x,_,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rx(t,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new ra(i,e.curveSegments)}};function rx(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){let n=r[t];e.shapes.push(n.uuid)}else e.shapes.push(r.uuid);return e}var Gi=class extends we{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new b,d=new b,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){let y=[],x=p/i,_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let D=0;D<=t;D++){let T=D/t;u.x=-e*Math.cos(n+T*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(n+T*s)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+_,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let x=h[p][y+1],_=h[p][y],D=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(x,_,T),(p!==i-1||l<Math.PI)&&f.push(_,D,T)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sa=class extends fn{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t);this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sa(e.radius,e.detail)}},aa=class extends we{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let m=0;m<=n;m++){let v=m/n*s,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=n;m++){let v=(n+1)*f+m-1,g=(n+1)*(f-1)+m-1,p=(n+1)*(f-1)+m,y=(n+1)*f+m;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},oa=class extends we{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super();this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new b,d=new b,f=new b,m=new b,v=new b,g=new b,p=new b;for(let x=0;x<=i;++x){let _=x/i*s*Math.PI*2;y(_,s,a,e,f),y(_+.01,s,a,e,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let D=0;D<=n;++D){let T=D/n*Math.PI*2,R=-t*Math.cos(T),P=t*Math.sin(T);u.x=f.x+(R*p.x+P*v.x),u.y=f.y+(R*p.y+P*v.y),u.z=f.z+(R*p.z+P*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/i),h.push(D/n)}}for(let x=1;x<=i;x++)for(let _=1;_<=n;_++){let D=(n+1)*(x-1)+(_-1),T=(n+1)*x+(_-1),R=(n+1)*x+_,P=(n+1)*(x-1)+_;o.push(D,T,P),o.push(T,R,P)}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2));function y(x,_,D,T,R){let P=Math.cos(x),M=Math.sin(x),A=D/_*x,I=Math.cos(A);R.x=T*(2+I)*.5*P,R.y=T*(2+I)*M*.5,R.z=T*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},la=class extends we{constructor(e=new zo(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,n=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new z,h=new b,u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function v(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),y(),p()}function g(x){h=e.getPointAt(x/t,h);let _=a.normals[x],D=a.binormals[x];for(let T=0;T<=n;T++){let R=T/n*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);l.x=M*_.x+P*D.x,l.y=M*_.y+P*D.y,l.z=M*_.z+P*D.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=n;_++){let D=(n+1)*(x-1)+(_-1),T=(n+1)*x+(_-1),R=(n+1)*x+_,P=(n+1)*(x-1)+_;m.push(D,T,P),m.push(T,R,P)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=n;_++)c.x=x/t,c.y=_/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new la(new _c[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Cc=class extends we{constructor(e=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let m=d,v=d+f;m<v;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),y=o.getX(m+(g+1)%3);n.fromBufferAttribute(a,p),s.fromBufferAttribute(a,y),Mm(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Mm(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Mm(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}var bm=Object.freeze({__proto__:null,BoxGeometry:Dn,CapsuleGeometry:Ks,CircleGeometry:Js,ConeGeometry:$s,CylinderGeometry:tr,DodecahedronGeometry:ea,EdgesGeometry:Mc,ExtrudeGeometry:ia,IcosahedronGeometry:na,LatheGeometry:Dr,OctahedronGeometry:Ir,PlaneGeometry:ir,PolyhedronGeometry:fn,RingGeometry:nr,ShapeGeometry:ra,SphereGeometry:Gi,TetrahedronGeometry:sa,TorusGeometry:aa,TorusKnotGeometry:oa,TubeGeometry:la,WireframeGeometry:Cc}),Rc=class extends St{constructor(e){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Dc=class extends Ke{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ur=class extends St{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=An,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pc=class extends Ur{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ca=class extends St{constructor(e){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=An,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ic=class extends St{constructor(e){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=An,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uc=class extends St{constructor(e){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=An,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Lc=class extends St{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=An,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xo=class extends St{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yo=class extends St{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Bc=class extends St{constructor(e){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=An,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oc=class extends _t{constructor(e){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Lr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Tm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wm(r){function e(n,s){return r[n]-r[s]}let t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function gd(r,e,t){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function vd(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}function sx(r,e,t,i,n=30){let s=r.clone();s.name=e;let a=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*n;if(!(m<t||m>=i)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=Lr(u,c.times.constructor),c.values=Lr(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function ax(r,e=0,t=r,i=30){i<=0&&(i=30);let n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=o.times.length-1,v;if(s<=o.times[0]){let p=h,y=u-h;v=o.values.slice(p,y)}else if(s>=o.times[m]){let p=m*u+h,y=p+u-h;v=o.values.slice(p,y)}else{let p=o.createInterpolant(),y=h,x=u-h;p.evaluate(s),v=p.resultBuffer.slice(y,x)}l==="quaternion"&&new Ft().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let p=0;p<g;++p){let y=p*f+d;if(l==="quaternion")Ft.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{let x=f-d*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return r.blendMode=El,r}var Cm={convertArray:Lr,isTypedArray:Tm,getKeyframeOrder:wm,sortedArray:gd,flattenJSON:vd,subclip:sx,makeClipAdditive:ax},Br=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nc=class extends Br{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vn,endingEnd:Vn}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wn:s=e,o=2*t-i;break;case vs:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wn:a=e,l=2*i-t;break;case vs:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let D=0;D!==o;++D)s[D]=p*a[h+D]+y*a[c+D]+x*a[l+D]+_*a[u+D];return s}},jo=class extends Br{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Fc=class extends Br{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Tm(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===mo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=po;var Bn=class extends bi{constructor(e,t,i){super(e,t,i)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=gs;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends bi{};qo.prototype.ValueTypeName="color";var Or=class extends bi{};Or.prototype.ValueTypeName="number";var Hc=class extends Br{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(s,0,a,c-o,a,c,l);return s}},Nr=class extends bi{InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends bi{constructor(e,t,i){super(e,t,i)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=gs;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends bi{};Fr.prototype.ValueTypeName="vector";var Hr=class{constructor(e="",t=-1,i=[],n=go){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(lx(i[a]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(bi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=wm(l);l=gd(l,1,h),c=gd(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Or(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,m,v){if(f.length!==0){let g=[],p=[];vd(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let x=d[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}n.push(new Or(".morphTargetInfluence["+v+"]",g,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";i(Fr,f+".position",d,"pos",n),i(Nr,f+".quaternion",d,"rot",n),i(Fr,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ox(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Or;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return qo;case"quaternion":return Nr;case"bool":case"boolean":return Bn;case"string":return On}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ox(r.type);if(r.times===void 0){let t=[],i=[];vd(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var pn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},zr=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},xd=new zr,Yt=class{constructor(e){this.manager=e!==void 0?e:xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nn={},Rm=class extends Error{constructor(e,t){super(e);this.response=t}},Ti=class extends Yt{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=pn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:i,onError:n});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Nn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;let D=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let T=0,R=h.length;T<R;T++){let P=h[T];P.onProgress&&P.onProgress(D)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new Rm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{pn.add(e,c);let h=Nn[e];delete Nn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Nn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Nn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},_d=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Ti(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t=[];for(let i=0;i<e.length;i++){let n=Hr.parse(e[i]);t.push(n)}return t}},yd=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=[],o=new Zs,l=new Ti(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(e[u],function(d){let f=s.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=xt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){let d=s.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=xt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}},kr=class extends Yt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=pn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Ss("img");function l(){h(),pn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}},Ad=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=new Sr;s.colorSpace=Oe;let a=new kr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}},Sd=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Hi,o=new Ti(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(n!==void 0)n(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:yi,a.wrapT=c.wrapT!==void 0?c.wrapT:yi,a.magFilter=c.magFilter!==void 0?c.magFilter:xt,a.minFilter=c.minFilter!==void 0?c.minFilter:xt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Zi),c.mipmapCount===1&&(a.minFilter=xt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}},wi=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=new pt,a=new kr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},mn=class extends Xe{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zc=class extends mn{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ed=new Le,Dm=new b,Pm=new b,kc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Pm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pm),t.updateMatrixWorld(),Ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Im=class extends kc{constructor(){super(new Tt(50,1,.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=mr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Gc=class extends mn{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Im}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Um=new Le,Zo=new b,Md=new b,Lm=class extends kc{constructor(){super(new Tt(90,1,.5,500));this.isPointLightShadow=!0,this._frameExtents=new z(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),Md.copy(i.position),Md.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Md),i.updateMatrixWorld(),n.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Um.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Um)}},ha=class extends mn{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ua=class extends Kn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bm=class extends kc{constructor(){super(new ua(-5,5,5,-5,.5,500));this.isDirectionalLightShadow=!0}},Vc=class extends mn{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Bm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},da=class extends mn{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}},Wc=class extends mn{constructor(e,t,i=10,n=10){super(e,t);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Xc=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(i*s)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){let i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}},Yc=class extends mn{constructor(e=new Xc,t=1){super(void 0,t);this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},fa=class extends Yt{constructor(e){super(e);this.textures={}}load(e,t,i,n){let s=this,a=new Ti(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let n=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(n.dispersion=e.dispersion),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(n.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(n.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(n.depthFunc=e.depthFunc),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(n.blendSrc=e.blendSrc),e.blendDst!==void 0&&(n.blendDst=e.blendDst),e.blendEquation!==void 0&&(n.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(n.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(n.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(n.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&n.blendColor!==void 0&&n.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(n.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==void 0&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(n.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let a=e.uniforms[s];switch(n.uniforms[s]={},a.type){case"t":n.uniforms[s].value=i(a.value);break;case"c":n.uniforms[s].value=new re().setHex(a.value);break;case"v2":n.uniforms[s].value=new z().fromArray(a.value);break;case"v3":n.uniforms[s].value=new b().fromArray(a.value);break;case"v4":n.uniforms[s].value=new Qe().fromArray(a.value);break;case"m3":n.uniforms[s].value=new ze().fromArray(a.value);break;case"m4":n.uniforms[s].value=new Le().fromArray(a.value);break;default:n.uniforms[s].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)n.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(n.lights=e.lights),e.clipping!==void 0&&(n.clipping=e.clipping),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new z().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapRotation!==void 0&&n.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(n.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return fa.createMaterialFromType(e)}static createMaterialFromType(e){let t={ShadowMaterial:Rc,SpriteMaterial:Un,RawShaderMaterial:Dc,ShaderMaterial:Ke,PointsMaterial:dn,MeshPhysicalMaterial:Pc,MeshStandardMaterial:Ur,MeshPhongMaterial:ca,MeshToonMaterial:Ic,MeshNormalMaterial:Uc,MeshLambertMaterial:Lc,MeshDepthMaterial:Xo,MeshDistanceMaterial:Yo,MeshBasicMaterial:li,MeshMatcapMaterial:Bc,LineDashedMaterial:Oc,LineBasicMaterial:_t,Material:St};return new t[e]}},Qo=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch(i){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},jc=class extends we{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},qc=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Ti(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t={},i={};function n(f,m){if(t[m]!==void 0)return t[m];let g=f.interleavedBuffers[m],p=s(f,g.buffer),y=As(g.type,p),x=new Gs(y,g.stride);return x.uuid=g.uuid,t[m]=x,x}function s(f,m){if(i[m]!==void 0)return i[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return i[m]=p,p}let a=e.isInstancedBufferGeometry?new jc:new we,o=e.data.index;if(o!==void 0){let f=As(o.type,o.array);a.setIndex(new Ce(f,1))}let l=e.data.attributes;for(let f in l){let m=l[f],v;if(m.isInterleavedBufferAttribute){let g=n(e.data,m.data);v=new In(g,m.itemSize,m.offset,m.normalized)}else{let g=As(m.type,m.array),p=m.isInstancedBufferAttribute?er:Ce;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(f,v)}let c=e.data.morphAttributes;if(c)for(let f in c){let m=c[f],v=[];for(let g=0,p=m.length;g<p;g++){let y=m[g],x;if(y.isInterleavedBufferAttribute){let _=n(e.data,y.data);x=new In(_,y.itemSize,y.offset,y.normalized)}else{let _=As(y.type,y.array);x=new Ce(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){let v=u[f];a.addGroup(v.start,v.count,v.materialIndex)}let d=e.data.boundingSphere;if(d!==void 0){let f=new b;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new Bt(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},bd=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=this.path===""?Qo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Ti(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){n!==void 0&&n(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},i,n)}loadAsync(e,t){return ui(this,null,function*(){let i=this,n=this.path===""?Qo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;let s=new Ti(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let a=yield s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return yield i.parseAsync(o)})}parse(e,t){let i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}parseAsync(e){return ui(this,null,function*(){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),s=yield this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l})}parseShapes(e){let t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){let s=new Ln().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){let i={},n={};if(t.traverse(function(s){s.isBone&&(n[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){let o=new js().fromJSON(e[s],n);i[o.uuid]=o}return i}parseGeometries(e,t){let i={};if(e!==void 0){let n=new qc;for(let s=0,a=e.length;s<a;s++){let o,l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in bm?o=bm[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){let i={},n={};if(e!==void 0){let s=new fa;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let n=e[i],s=Hr.parse(n);t[s.uuid]=s}return t}parseImages(e,t){let i=this,n={},s;function a(l){return i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:As(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new zr(t);s=new kr(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let u=e[c],d=u.url;if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Hi(p.data,p.width,p.height)))}n[u.uuid]=new En(f)}else{let f=o(u.url);n[u.uuid]=new En(f)}}}return n}parseImagesAsync(e){return ui(this,null,function*(){let t=this,i={},n;function s(a){return ui(this,null,function*(){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return yield n.loadAsync(l)}else return a.data?{data:As(a.type,a.data),width:a.width,height:a.height}:null})}if(e!==void 0&&e.length>0){n=new kr(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=yield s(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Hi(m.data,m.width,m.height)))}i[l.uuid]=new En(h)}else{let h=yield s(l.url);i[l.uuid]=new En(h)}}}return i})}parseTextures(e,t){function i(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}let n={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){let o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new Sr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Hi:h=new pt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,cx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],Om),h.wrapT=i(o.wrap[1],Om)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,Nm)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,Nm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(e,t,i,n,s){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m];i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(i[g])}return f}return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),i[d]}}function c(d){return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),n[d]}let h,u;switch(e.type){case"Scene":a=new Pn,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new re(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new ks(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new zs(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Tt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ua(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new da(e.color,e.intensity);break;case"DirectionalLight":a=new Vc(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new ha(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Wc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Gc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new zc(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Yc().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new $l(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new tt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);let d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new tc(h,u,d),a.instanceMatrix=new er(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new er(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new sc(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{let g=new Ht;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);let p=new Bt;return p.radius=v.sphereRadius,p.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:p}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Er;break;case"Line":a=new mi(o(e.geometry),l(e.material));break;case"LineLoop":a=new hc(o(e.geometry),l(e.material));break;case"LineSegments":a=new Zt(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new gi(o(e.geometry),l(e.material));break;case"Sprite":a=new $n(l(e.material));break;case"Group":a=new un;break;case"Bone":a=new Do;break;default:a=new Xe}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,i,n,s))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let m=d[f];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let m=d[f],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let n=t[i.skeleton];n===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new Xe}})}},cx={UVMapping:La,CubeReflectionMapping:on,CubeRefractionMapping:yn,EquirectangularReflectionMapping:ss,EquirectangularRefractionMapping:as,CubeUVReflectionMapping:hr},Om={RepeatWrapping:os,ClampToEdgeWrapping:yi,MirroredRepeatWrapping:ls},Nm={NearestFilter:Vt,NearestMipmapNearestFilter:fl,NearestMipmapLinearFilter:ur,LinearFilter:xt,LinearMipmapNearestFilter:cs,LinearMipmapLinearFilter:Zi},Td=class extends Yt{constructor(e){super(e);this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=pn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return pn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),pn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});pn.add(e,l),s.manager.itemStart(e)}},Zc,Ko=class{static getContext(){return Zc===void 0&&(Zc=new(window.AudioContext||window.webkitAudioContext)),Zc}static setContext(e){Zc=e}},wd=class extends Yt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Ti(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0);Ko.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),s.manager.itemError(e)}}},Fm=new Le,Hm=new Le,Gr=new Le,Cd=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Tt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Tt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Gr.copy(e.projectionMatrix);let n=t.eyeSep/2,s=n*t.near/t.focus,a=t.near*Math.tan(pr*t.fov*.5)/t.zoom,o,l;Hm.elements[12]=-n,Fm.elements[12]=n,o=-a*t.aspect+s,l=a*t.aspect+s,Gr.elements[0]=2*t.near/(l-o),Gr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Gr),o=-a*t.aspect-s,l=a*t.aspect-s,Gr.elements[0]=2*t.near/(l-o),Gr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Gr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Hm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Fm)}},Qc=class extends Tt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e,this.index=0}},Kc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zm(){return performance.now()}var Vr=new b,km=new Ft,hx=new b,Wr=new b,Rd=class extends Xe{constructor(){super();this.type="AudioListener",this.context=Ko.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Kc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Vr,km,hx),Wr.set(0,0,-1).applyQuaternion(km),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Vr.x,n),t.positionY.linearRampToValueAtTime(Vr.y,n),t.positionZ.linearRampToValueAtTime(Vr.z,n),t.forwardX.linearRampToValueAtTime(Wr.x,n),t.forwardY.linearRampToValueAtTime(Wr.y,n),t.forwardZ.linearRampToValueAtTime(Wr.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(Vr.x,Vr.y,Vr.z),t.setOrientation(Wr.x,Wr.y,Wr.z,i.x,i.y,i.z)}},Jc=class extends Xe{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Xr=new b,Gm=new Ft,ux=new b,Yr=new b,Dd=class extends Jc{constructor(e){super(e);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Xr,Gm,ux),Yr.set(0,0,1).applyQuaternion(Gm);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Xr.x,i),t.positionY.linearRampToValueAtTime(Xr.y,i),t.positionZ.linearRampToValueAtTime(Xr.z,i),t.orientationX.linearRampToValueAtTime(Yr.x,i),t.orientationY.linearRampToValueAtTime(Yr.y,i),t.orientationZ.linearRampToValueAtTime(Yr.z,i)}else t.setPosition(Xr.x,Xr.y,Xr.z),t.setOrientation(Yr.x,Yr.y,Yr.z)}},Pd=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},$c=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Ft.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,i),Ft.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){let a=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},Id="\\[\\]\\.:\\/",dx=new RegExp("["+Id+"]","g"),Ud="[^"+Id+"]",fx="[^"+Id.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",Ud),mx=/(WCOD+)?/.source.replace("WCOD",fx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ud),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ud),xx=new RegExp("^"+px+mx+gx+vx+"$"),_x=["material","materials","bones","map"],Vm=class{constructor(e,t,i){let n=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},it=class{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(e){let t=xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);_x.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Vm;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ld=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ai(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let v=0,g=a;v!==g;++v)s[v].push(new it(d,i[v],n[v]))}else if(m<c){o=e[m];let v=--c,g=e[v];t[g.uuid]=m,e[m]=g,t[f]=v,e[v]=d;for(let p=0,y=a;p!==y;++p){let x=s[p],_=x[v],D=x[m];x[m]=_,D===void 0&&(D=new it(d,i[p],n[p])),x[v]=D}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){let u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,m=n;f!==m;++f){let v=i[f],g=v[u],p=v[h];v[h]=g,v[u]=p}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let d=--s,f=e[d],m=--a,v=e[m];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,p=n;g!==p;++g){let y=i[g],x=y[d],_=y[m];y[u]=x,y[d]=_,y.pop()}}else{let d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,v=n;m!==v;++m){let g=i[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,n=i[e],s=this._bindings;if(n!==void 0)return s[n];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);n=s.length,i[e]=n,a.push(e),o.push(t),s.push(u);for(let d=h,f=l.length;d!==f;++d){let m=l[d];u[d]=new it(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let n=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=i,a[i]=l,a.pop(),s[i]=s[o],s.pop(),n[i]=n[o],n.pop()}}},eh=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Vn,endingEnd:Vn};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case El:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case go:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,a=i===cu;if(e===0)return s===-1?n:a&&(s&1)==1?t-n:n;if(i===ou){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(s&1)==1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=Wn,n.endingEnd=Wn):(e?n.endingStart=this.zeroSlopeAtStart?Wn:Vn:n.endingStart=vs,t?n.endingEnd=this.zeroSlopeAtEnd?Wn:Vn:n.endingEnd=vs)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}},yx=new Float32Array(1),Bd=class extends Wt{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=n[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new $c(it.create(i,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new jo(new Float32Array(2),new Float32Array(2),1,yx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,a=typeof e=="string"?Hr.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=go),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new eh(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?Hr.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},Od=class extends bs{constructor(e=1,t=1,i=1,n={}){super(e,t,n);this.isRenderTarget3D=!0,this.depth=i,this.texture=new Ts(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Nd=class extends bs{constructor(e=1,t=1,i=1,n={}){super(e,t,n);this.isRenderTargetArray=!0,this.depth=i,this.texture=new vr(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Ze=class{constructor(e){this.value=e}clone(){return new Ze(this.value.clone===void 0?this.value:this.value.clone())}},Ax=0,Fd=class extends Wt{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ax++}),this.name="",this.usage=_s,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){let s=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}},Hd=class extends Gs{constructor(e,t,i=1){super(e,t);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},zd=class{constructor(e,t,i,n,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Wm=new Le,kd=class{constructor(e,t,i=0,n=1/0){this.ray=new hn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wm),this}intersectObject(e,t=!0,i=[]){return Gd(e,this,i,t),i.sort(Xm),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Gd(e[n],this,i,t);return i.sort(Xm),i}};function Xm(r,e){return r.distance-e.distance}function Gd(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Gd(s[a],e,t,!0)}}var pa=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Ge(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Vd=class{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},Jo=class{constructor(e,t,i,n){Jo.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}},Ym=new z,Wd=class{constructor(e=new z(1/0,1/0),t=new z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ym.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ym).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},jm=new b,th=new b,Xd=class{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){jm.subVectors(e,this.start),th.subVectors(this.end,this.start);let i=th.dot(th),s=th.dot(jm)/i;return t&&(s=Ge(s,0,1)),s}closestPointToPoint(e,t,i){let n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},qm=new b,Yd=class extends Xe{constructor(e,t){super();this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new we,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new me(n,3));let s=new _t({fog:!1,toneMapped:!1});this.cone=new Zt(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),qm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(qm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},rr=new b,ih=new Le,jd=new Le,qd=class extends Zt{constructor(e){let t=Zm(e),i=new we,n=[],s=[],a=new re(0,0,1),o=new re(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}i.setAttribute("position",new me(n,3)),i.setAttribute("color",new me(s,3));let l=new _t({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,n=i.getAttribute("position");jd.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){let o=t[s];o.parent&&o.parent.isBone&&(ih.multiplyMatrices(jd,o.matrixWorld),rr.setFromMatrixPosition(ih),n.setXYZ(a,rr.x,rr.y,rr.z),ih.multiplyMatrices(jd,o.parent.matrixWorld),rr.setFromMatrixPosition(ih),n.setXYZ(a+1,rr.x,rr.y,rr.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Zm(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Zm(r.children[t]));return e}var Zd=class extends tt{constructor(e,t,i){let n=new Gi(t,4,2),s=new li({wireframe:!0,fog:!1,toneMapped:!1});super(n,s);this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},Sx=new b,Qm=new re,Km=new re,Qd=class extends Xe{constructor(e,t,i){super();this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let n=new Ir(t);n.rotateY(Math.PI*.5),this.material=new li({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=n.getAttribute("position"),a=new Float32Array(s.count*3);n.setAttribute("color",new Ce(a,3)),this.add(new tt(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Qm.copy(this.light.color),Km.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){let s=i<n/2?Qm:Km;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Sx.setFromMatrixPosition(this.light.matrixWorld).negate())}},jr=class extends Zt{constructor(e=10,t=10,i=4473924,n=8947848){i=new re(i),n=new re(n);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let v=d===s?i:n;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let h=new we;h.setAttribute("position",new me(l,3)),h.setAttribute("color",new me(c,3));let u=new _t({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Kd=class extends Zt{constructor(e=10,t=16,i=8,n=64,s=4473924,a=8947848){s=new re(s),a=new re(a);let o=[],l=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);let v=u&1?s:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<i;u++){let d=u&1?s:a,f=e-e/i*u;for(let m=0;m<n;m++){let v=m/n*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f;o.push(g,0,p),l.push(d.r,d.g,d.b),v=(m+1)/n*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f,o.push(g,0,p),l.push(d.r,d.g,d.b)}}let c=new we;c.setAttribute("position",new me(o,3)),c.setAttribute("color",new me(l,3));let h=new _t({vertexColors:!0,toneMapped:!1});super(c,h);this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Jm=new b,nh=new b,$m=new b,Jd=class extends Xe{constructor(e,t,i){super();this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new we;n.setAttribute("position",new me([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new _t({fog:!1,toneMapped:!1});this.lightPlane=new mi(n,s),this.add(this.lightPlane),n=new we,n.setAttribute("position",new me([0,0,0,0,0,1],3)),this.targetLine=new mi(n,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Jm.setFromMatrixPosition(this.light.matrixWorld),nh.setFromMatrixPosition(this.light.target.matrixWorld),$m.subVectors(nh,Jm),this.lightPlane.lookAt(nh),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(nh),this.targetLine.scale.z=$m.length()}},rh=new b,Pt=new Kn,$d=class extends Zt{constructor(e){let t=new we,i=new _t({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){l(m),l(v)}function l(m){n.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(n.length/3-1)}t.setAttribute("position",new me(n,3)),t.setAttribute("color",new me(s,3));super(t,i);this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new re(16755200),h=new re(16711680),u=new re(43775),d=new re(16777215),f=new re(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,i,n,s){let o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,i=1,n=1;Pt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);let s=this.camera.coordinateSystem===Ni?-1:0;Ut("c",t,e,Pt,0,0,s),Ut("t",t,e,Pt,0,0,1),Ut("n1",t,e,Pt,-i,-n,s),Ut("n2",t,e,Pt,i,-n,s),Ut("n3",t,e,Pt,-i,n,s),Ut("n4",t,e,Pt,i,n,s),Ut("f1",t,e,Pt,-i,-n,1),Ut("f2",t,e,Pt,i,-n,1),Ut("f3",t,e,Pt,-i,n,1),Ut("f4",t,e,Pt,i,n,1),Ut("u1",t,e,Pt,i*.7,n*1.1,s),Ut("u2",t,e,Pt,-i*.7,n*1.1,s),Ut("u3",t,e,Pt,0,n*2,s),Ut("cf1",t,e,Pt,-i,0,1),Ut("cf2",t,e,Pt,i,0,1),Ut("cf3",t,e,Pt,0,-n,1),Ut("cf4",t,e,Pt,0,n,1),Ut("cn1",t,e,Pt,-i,0,s),Ut("cn2",t,e,Pt,i,0,s),Ut("cn3",t,e,Pt,0,-n,s),Ut("cn4",t,e,Pt,0,n,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ut(r,e,t,i,n,s,a){rh.set(n,s,a).unproject(i);let o=e[r];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],rh.x,rh.y,rh.z)}}var sh=new Ht,ef=class extends Zt{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(8*3),s=new we;s.setIndex(new Ce(i,1)),s.setAttribute("position",new Ce(n,3));super(s,new _t({color:t,toneMapped:!1}));this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&sh.setFromObject(this.object),sh.isEmpty())return;let t=sh.min,i=sh.max,n=this.geometry.attributes.position,s=n.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},tf=class extends Zt{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new we;s.setIndex(new Ce(i,1)),s.setAttribute("position",new me(n,3));super(s,new _t({color:t,toneMapped:!1}));this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},nf=class extends mi{constructor(e,t=1,i=16776960){let n=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new we;a.setAttribute("position",new me(s,3)),a.computeBoundingSphere();super(a,new _t({color:n,toneMapped:!1}));this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new we;l.setAttribute("position",new me(o,3)),l.computeBoundingSphere(),this.add(new tt(l,new li({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},eg=new b,ah,rf,sf=class extends Xe{constructor(e=new b(0,0,1),t=new b(0,0,0),i=1,n=16776960,s=i*.2,a=s*.2){super();this.type="ArrowHelper",ah===void 0&&(ah=new we,ah.setAttribute("position",new me([0,0,0,0,1,0],3)),rf=new tr(0,.5,1,5,1),rf.translate(0,-.5,0)),this.position.copy(t),this.line=new mi(ah,new _t({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new tt(rf,new li({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{eg.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(eg,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},$o=class extends Zt{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new we;n.setAttribute("position",new me(t,3)),n.setAttribute("color",new me(i,3));let s=new _t({vertexColors:!0,toneMapped:!1});super(n,s);this.type="AxesHelper"}setColors(e,t,i){let n=new re,s=this.geometry.attributes.color.array;return n.set(e),n.toArray(s,0),n.toArray(s,3),n.set(t),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},af=class{constructor(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Rr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,s,a){return this.currentPath.bezierCurveTo(e,t,i,n,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let y=[];for(let x=0,_=p.length;x<_;x++){let D=p[x],T=new Ln;T.curves=D.curves,y.push(T)}return y}function i(p,y){let x=y.length,_=!1;for(let D=x-1,T=0;T<x;D=T++){let R=y[D],P=y[T],M=P.x-R.x,A=P.y-R.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(R=y[T],M=-M,P=y[D],A=-A),p.y<R.y||p.y>P.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let I=A*(p.x-R.x)-M*(p.y-R.y);if(I===0)return!0;if(I<0)continue;_=!_}}else{if(p.y!==R.y)continue;if(P.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=P.x)return!0}}return _}let n=ki.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l,c=[];if(s.length===1)return o=s[0],l=new Ln,l.curves=o.curves,c.push(l),c;let h=!n(s[0].getPoints());h=e?!h:h;let u=[],d=[],f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,y=s.length;p<y;p++)o=s[p],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new Ln,p:v},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:v[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,y=0;for(let x=0,_=d.length;x<_;x++)u[x]=[];for(let x=0,_=d.length;x<_;x++){let D=f[x];for(let T=0;T<D.length;T++){let R=D[T],P=!0;for(let M=0;M<d.length;M++)i(R.p,d[M].p)&&(x!==M&&y++,P?(P=!1,u[M].push(R)):p=!0);P&&u[x].push(R)}}y>0&&p===!1&&(f=u)}let g;for(let p=0,y=d.length;p<y;p++){l=d[p].s,c.push(l),g=f[p];for(let x=0,_=g.length;x<_;x++)l.holes.push(g[x].h)}return c}},el=class extends Wt{constructor(e,t=null){super();this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Ex(r,e){let t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function Mx(r,e){let t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function bx(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function oh(r,e,t,i){let n=Tx(i);switch(t){case vl:return r*e;case _l:return r*e;case yl:return r*e*2;case Fa:return r*e/n.components*n.byteLength;case hs:return r*e/n.components*n.byteLength;case Al:return r*e*2/n.components*n.byteLength;case Ha:return r*e*2/n.components*n.byteLength;case xl:return r*e*3/n.components*n.byteLength;case Jt:return r*e*4/n.components*n.byteLength;case za:return r*e*4/n.components*n.byteLength;case us:case ds:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fs:case ps:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Wa:return Math.max(r,16)*Math.max(e,8)/4;case ka:case Va:return Math.max(r,8)*Math.max(e,8)/2;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ms:case lo:case co:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sl:case ho:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uo:case fo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tx(r){switch(r){case bt:case pl:return{byteLength:1,components:1};case dr:case ml:case fr:return{byteLength:2,components:1};case Oa:case Na:return{byteLength:2,components:4};case Li:case Ba:case Kt:return{byteLength:4,components:1};case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}var tg={contain:Ex,cover:Mx,fill:bx,getByteLength:oh};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ji}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ji);function ig(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function wx(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
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
#endif`,Bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,y_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ay=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cy=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`#include <common>
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
}`,Ly=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,By=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,zy=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Vy=`#define LAMBERT
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
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xy=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,jy=`#define NORMAL
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
}`,qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zy=`#define PHONG
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
}`,Qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ky=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,$y=`#define TOON
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
}`,eA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tA=`uniform float size;
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
}`,iA=`uniform vec3 diffuse;
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
}`,nA=`#include <common>
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
}`,rA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sA=`uniform float rotation;
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
}`,aA=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Cx,alphahash_pars_fragment:Rx,alphamap_fragment:Dx,alphamap_pars_fragment:Px,alphatest_fragment:Ix,alphatest_pars_fragment:Ux,aomap_fragment:Lx,aomap_pars_fragment:Bx,batching_pars_vertex:Ox,batching_vertex:Nx,begin_vertex:Fx,beginnormal_vertex:Hx,bsdfs:zx,iridescence_fragment:kx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:Yx,color_fragment:jx,color_pars_fragment:qx,color_pars_vertex:Zx,color_vertex:Qx,common:Kx,cube_uv_reflection_fragment:Jx,defaultnormal_vertex:$x,displacementmap_pars_vertex:e_,displacementmap_vertex:t_,emissivemap_fragment:i_,emissivemap_pars_fragment:n_,colorspace_fragment:r_,colorspace_pars_fragment:s_,envmap_fragment:a_,envmap_common_pars_fragment:o_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:y_,envmap_vertex:h_,fog_vertex:u_,fog_pars_vertex:d_,fog_fragment:f_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:x_,lights_pars_begin:__,lights_toon_fragment:A_,lights_toon_pars_fragment:S_,lights_phong_fragment:E_,lights_phong_pars_fragment:M_,lights_physical_fragment:b_,lights_physical_pars_fragment:T_,lights_fragment_begin:w_,lights_fragment_maps:C_,lights_fragment_end:R_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:U_,map_fragment:L_,map_pars_fragment:B_,map_particle_fragment:O_,map_particle_pars_fragment:N_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:H_,morphinstance_vertex:z_,morphcolor_vertex:k_,morphnormal_vertex:G_,morphtarget_pars_vertex:V_,morphtarget_vertex:W_,normal_fragment_begin:X_,normal_fragment_maps:Y_,normal_pars_fragment:j_,normal_pars_vertex:q_,normal_vertex:Z_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:iy,premultiplied_alpha_fragment:ny,project_vertex:ry,dithering_fragment:sy,dithering_pars_fragment:ay,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:hy,shadowmap_vertex:uy,shadowmask_pars_fragment:dy,skinbase_vertex:fy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:vy,specularmap_pars_fragment:xy,tonemapping_fragment:_y,tonemapping_pars_fragment:yy,transmission_fragment:Ay,transmission_pars_fragment:Sy,uv_pars_fragment:Ey,uv_pars_vertex:My,uv_vertex:by,worldpos_vertex:Ty,background_vert:wy,background_frag:Cy,backgroundCube_vert:Ry,backgroundCube_frag:Dy,cube_vert:Py,cube_frag:Iy,depth_vert:Uy,depth_frag:Ly,distanceRGBA_vert:By,distanceRGBA_frag:Oy,equirect_vert:Ny,equirect_frag:Fy,linedashed_vert:Hy,linedashed_frag:zy,meshbasic_vert:ky,meshbasic_frag:Gy,meshlambert_vert:Vy,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:Yy,meshnormal_vert:jy,meshnormal_frag:qy,meshphong_vert:Zy,meshphong_frag:Qy,meshphysical_vert:Ky,meshphysical_frag:Jy,meshtoon_vert:$y,meshtoon_frag:eA,points_vert:tA,points_frag:iA,shadow_vert:nA,shadow_frag:rA,sprite_vert:sA,sprite_frag:aA},le={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},$i={basic:{uniforms:ii([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:ii([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new re(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:ii([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:ii([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:ii([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new re(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:ii([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:ii([le.points,le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:ii([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:ii([le.common,le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:ii([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:ii([le.sprite,le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:ii([le.common,le.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:ii([le.lights,le.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};$i.physical={uniforms:ii([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var lh={r:0,b:0,g:0},qr=new oi,oA=new Le;function lA(r,e,t,i,n,s,a){let o=new re(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1,D=m(x);D===null?p(o,l):D&&D.isColor&&(p(D,1),_=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,_){let D=m(_);D&&(D.isCubeTexture||D.mapping===hr)?(h===void 0&&(h=new tt(new Dn(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Ar($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),qr.copy(_.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(qr)),h.material.toneMapped=et.getTransfer(D.colorSpace)!==dt,(u!==D||d!==D.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=D,d=D.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new tt(new ir(2,2),new Ke({name:"BackgroundMaterial",uniforms:Ar($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(D.colorSpace)!==dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=D,d=D.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(lh,qu(r)),i.buffers.color.setClear(lh.r,lh.g,lh.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:g,dispose:y}}function cA(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(A,I,k,N,G){let Z=!1,V=u(N,k,I);s!==V&&(s=V,c(s.object)),Z=f(A,N,k,G),Z&&m(A,N,k,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(A,I,k,N),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(A){return r.bindVertexArray(A)}function h(A){return r.deleteVertexArray(A)}function u(A,I,k){let N=k.wireframe===!0,G=i[A.id];G===void 0&&(G={},i[A.id]=G);let Z=G[I.id];Z===void 0&&(Z={},G[I.id]=Z);let V=Z[N];return V===void 0&&(V=d(l()),Z[N]=V),V}function d(A){let I=[],k=[],N=[];for(let G=0;G<t;G++)I[G]=0,k[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:N,object:A,attributes:{},index:null}}function f(A,I,k,N){let G=s.attributes,Z=I.attributes,V=0,ne=k.getAttributes();for(let W in ne)if(ne[W].location>=0){let ve=G[W],Me=Z[W];if(Me===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function m(A,I,k,N){let G={},Z=I.attributes,V=0,ne=k.getAttributes();for(let W in ne)if(ne[W].location>=0){let ve=Z[W];ve===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor));let Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),G[W]=Me,V++}s.attributes=G,s.attributesNum=V,s.index=N}function v(){let A=s.newAttributes;for(let I=0,k=A.length;I<k;I++)A[I]=0}function g(A){p(A,0)}function p(A,I){let k=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;k[A]=1,N[A]===0&&(r.enableVertexAttribArray(A),N[A]=1),G[A]!==I&&(r.vertexAttribDivisor(A,I),G[A]=I)}function y(){let A=s.newAttributes,I=s.enabledAttributes;for(let k=0,N=I.length;k<N;k++)I[k]!==A[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function x(A,I,k,N,G,Z,V){V===!0?r.vertexAttribIPointer(A,I,k,G,Z):r.vertexAttribPointer(A,I,k,N,G,Z)}function _(A,I,k,N){v();let G=N.attributes,Z=k.getAttributes(),V=I.defaultAttributeValues;for(let ne in Z){let W=Z[ne];if(W.location>=0){let ce=G[ne];if(ce===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){let ve=ce.normalized,Me=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let ct=Ve.buffer,q=Ve.type,ae=Ve.bytesPerElement,be=q===r.INT||q===r.UNSIGNED_INT||ce.gpuType===Ba;if(ce.isInterleavedBufferAttribute){let oe=ce.data,Pe=oe.stride,rt=ce.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<W.locationSize;De++)p(W.location+De,oe.meshPerAttribute);A.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<W.locationSize;De++)g(W.location+De);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let De=0;De<W.locationSize;De++)x(W.location+De,Me/W.locationSize,q,ve,Pe*ae,(rt+Me/W.locationSize*De)*ae,be)}else{if(ce.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<W.locationSize;oe++)g(W.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let oe=0;oe<W.locationSize;oe++)x(W.location+oe,Me/W.locationSize,q,ve,Me*ae,Me/W.locationSize*oe*ae,be)}}else if(V!==void 0){let ve=V[ne];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(W.location,ve);break;case 3:r.vertexAttrib3fv(W.location,ve);break;case 4:r.vertexAttrib4fv(W.location,ve);break;default:r.vertexAttrib1fv(W.location,ve)}}}}y()}function D(){P();for(let A in i){let I=i[A];for(let k in I){let N=I[k];for(let G in N)h(N[G].object),delete N[G];delete I[k]}delete i[A]}}function T(A){if(i[A.id]===void 0)return;let I=i[A.id];for(let k in I){let N=I[k];for(let G in N)h(N[G].object),delete N[G];delete I[k]}delete i[A.id]}function R(A){for(let I in i){let k=i[I];if(k[A.id]===void 0)continue;let N=k[A.id];for(let G in N)h(N[G].object),delete N[G];delete k[A.id]}}function P(){M(),a=!0,s!==n&&(s=n,c(s.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function hA(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function uA(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==Jt&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let P=R===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bt&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kt&&!P)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:D,maxSamples:T}}function dA(r){let e=this,t=null,i=0,n=!1,s=!1,a=new zi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{let y=s?0:i,x=y*4,_=p.clippingState||null;l.value=_,_=h(m,d,x,f);for(let D=0;D!==x;++D)_[D]=t[D];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function fA(r){let e=new WeakMap;function t(a,o){return o===ss?a.mapping=on:o===as&&(a.mapping=yn),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ss||o===as)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new jl(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ma=4,ng=[.125,.215,.35,.446,.526,.582],Zr=20,of=new ua,rg=new re,lf=null,cf=0,hf=0,uf=!1,Qr=(1+Math.sqrt(5))/2,ga=1/Qr,sg=[new b(-Qr,ga,0),new b(Qr,ga,0),new b(-ga,0,Qr),new b(ga,0,Qr),new b(0,Qr,-ga),new b(0,Qr,ga),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],ch=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,hf),this._renderer.xr.enabled=uf,e.scissorTest=!1,hh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===on||e.mapping===yn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:fr,format:Jt,colorSpace:Oi,depthBuffer:!1},n=ag(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(s)),this._blurMaterial=mA(s,e,t)}return n}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,of)}_sceneToCubeUV(e,t,i,n){let s=90,a=1,o=new Tt(s,a,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rg),h.toneMapping=an,h.autoClear=!1;let f=new li({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),m=new tt(new Dn,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(rg),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;hh(n,y*x,p>2?x:0,x,x),h.setRenderTarget(n),v&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===on||e.mapping===yn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;hh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,of)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sg[(n-s-1)%sg.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new tt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zr-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):Zr;g>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zr}`);let p=[],y=0;for(let R=0;R<Zr;++R){let P=R/v,M=Math.exp(-P*P/2);p.push(M),R===0?y+=M:R<g&&(y+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;let _=this._sizeLods[n],D=3*_*(n>x-ma?n-x+ma:0),T=4*(this._cubeSize-_);hh(t,D,T,3*_,2*_),l.setRenderTarget(t),l.render(u,of)}};function pA(r){let e=[],t=[],i=[],n=r,s=r-ma+1+ng.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);t.push(o);let l=1/o;a>r-ma?l=ng[a-r+ma-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),x=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,P=T>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(M,v*m*T),x.set(d,g*m*T);let A=[T,T,T,T,T,T];_.set(A,p*m*T)}let D=new we;D.setAttribute("position",new Ce(y,v)),D.setAttribute("uv",new Ce(x,g)),D.setAttribute("faceIndex",new Ce(_,p)),e.push(D),n>ma&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ag(r,e,t){let i=new mt(r,e,t);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hh(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function mA(r,e,t){let i=new Float32Array(Zr),n=new b(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function og(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function lg(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gA(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ss||l===as,h=l===on||l===yn;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ch(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new ch(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function vA(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function xA(r,e,t,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){let D=y[x+0],T=y[x+1],R=y[x+2];d.push(D,T,T,R,R,D)}}else if(m!==void 0){let y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let D=x+0,T=x+1,R=x+2;d.push(D,T,T,R,R,D)}}else return;let g=new(yu(d)?Mo:Eo)(d,1);g.version=v;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function _A(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(i,f,s,d*a,m),t.update(f,i,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function u(d,f,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yA(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function AA(r,e,t){let i=new WeakMap,n=new Qe;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;f===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,D=1;_>e.maxTextureSize&&(D=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*D*4*u),R=new vr(T,_,D,u);R.type=Kt,R.needsUpdate=!0;let P=x*4;for(let A=0;A<u;A++){let I=g[A],k=p[A],N=y[A],G=_*D*4*A;for(let Z=0;Z<I.count;Z++){let V=Z*P;f===!0&&(n.fromBufferAttribute(I,Z),T[G+V+0]=n.x,T[G+V+1]=n.y,T[G+V+2]=n.z,T[G+V+3]=0),m===!0&&(n.fromBufferAttribute(k,Z),T[G+V+4]=n.x,T[G+V+5]=n.y,T[G+V+6]=n.z,T[G+V+7]=0),v===!0&&(n.fromBufferAttribute(N,Z),T[G+V+8]=n.x,T[G+V+9]=n.y,T[G+V+10]=n.z,T[G+V+11]=N.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new z(_,D)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function SA(r,e,t,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var cg=new pt,hg=new Cr(1,1),ug=new vr,dg=new Ts,fg=new Sr,pg=[],mg=[],gg=new Float32Array(16),vg=new Float32Array(9),xg=new Float32Array(4);function va(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=pg[n];if(s===void 0&&(s=new Float32Array(n),pg[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function uh(r,e){let t=mg[e];t===void 0&&(t=new Int32Array(e),mg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function EA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function MA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function bA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function TA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function wA(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;xg.set(i),r.uniformMatrix2fv(this.addr,!1,xg),kt(t,i)}}function CA(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;vg.set(i),r.uniformMatrix3fv(this.addr,!1,vg),kt(t,i)}}function RA(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;gg.set(i),r.uniformMatrix4fv(this.addr,!1,gg),kt(t,i)}}function DA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function PA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function IA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function UA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function LA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function BA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function OA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function NA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function FA(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(hg.compareFunction=Tl,s=hg):s=cg,t.setTexture2D(e||s,n)}function HA(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||dg,n)}function zA(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||fg,n)}function kA(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||ug,n)}function GA(r){switch(r){case 5126:return EA;case 35664:return MA;case 35665:return bA;case 35666:return TA;case 35674:return wA;case 35675:return CA;case 35676:return RA;case 5124:case 35670:return DA;case 35667:case 35671:return PA;case 35668:case 35672:return IA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return BA;case 36295:return OA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return kA}}function VA(r,e){r.uniform1fv(this.addr,e)}function WA(r,e){let t=va(e,this.size,2);r.uniform2fv(this.addr,t)}function XA(r,e){let t=va(e,this.size,3);r.uniform3fv(this.addr,t)}function YA(r,e){let t=va(e,this.size,4);r.uniform4fv(this.addr,t)}function jA(r,e){let t=va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qA(r,e){let t=va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ZA(r,e){let t=va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function QA(r,e){r.uniform1iv(this.addr,e)}function KA(r,e){r.uniform2iv(this.addr,e)}function JA(r,e){r.uniform3iv(this.addr,e)}function $A(r,e){r.uniform4iv(this.addr,e)}function eS(r,e){r.uniform1uiv(this.addr,e)}function tS(r,e){r.uniform2uiv(this.addr,e)}function iS(r,e){r.uniform3uiv(this.addr,e)}function nS(r,e){r.uniform4uiv(this.addr,e)}function rS(r,e,t){let i=this.cache,n=e.length,s=uh(t,n);zt(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||cg,s[a])}function sS(r,e,t){let i=this.cache,n=e.length,s=uh(t,n);zt(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||dg,s[a])}function aS(r,e,t){let i=this.cache,n=e.length,s=uh(t,n);zt(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||fg,s[a])}function oS(r,e,t){let i=this.cache,n=e.length,s=uh(t,n);zt(i,s)||(r.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||ug,s[a])}function lS(r){switch(r){case 5126:return VA;case 35664:return WA;case 35665:return XA;case 35666:return YA;case 35674:return jA;case 35675:return qA;case 35676:return ZA;case 5124:case 35670:return QA;case 35667:case 35671:return KA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return eS;case 36294:return tS;case 36295:return iS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return oS}}var _g=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GA(t.type)}},yg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}},Ag=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},ff=/(\w+)(\])?(\[|\.)?/g;function Sg(r,e){r.seq.push(e),r.map[e.id]=e}function cS(r,e,t){let i=r.name,n=i.length;for(ff.lastIndex=0;;){let s=ff.exec(i),a=ff.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Sg(t,c===void 0?new _g(o,r,e):new yg(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Ag(o),Sg(t,u)),t=u}}}var tl=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);cS(s,a,this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Eg(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var hS=37297,uS=0;function dS(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Mg=new ze;function fS(r){et._getMatrix(Mg,et.workingColorSpace,r);let e=`mat3( ${Mg.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case xs:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bg(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+dS(r.getShaderSource(e),a)}else return n}function pS(r,e){let t=fS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mS(r,e){let t;switch(e){case $h:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case iu:t="ACESFilmic";break;case ru:t="AgX";break;case su:t="Neutral";break;case nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dh=new b;function gS(){et.getLuminanceCoefficients(dh);let r=dh.x.toFixed(4),e=dh.y.toFixed(4),t=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function xS(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _S(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function il(r){return r!==""}function Tg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(r){return r.replace(yS,SS)}var AS=new Map;function SS(r,e){let t=je[e];if(t===void 0){let i=AS.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pf(t)}var ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(r){return r.replace(ES,MS)}function MS(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Rg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function TS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case on:case yn:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yn:e="ENVMAP_MODE_REFRACTION";break}return e}function CS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rs:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case Jh:e="ENVMAP_BLENDING_ADD";break}return e}function RS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DS(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=bS(t),c=TS(t),h=wS(t),u=CS(t),d=RS(t),f=vS(t),m=xS(s),v=n.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(il).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(il).join(`
`),p.length>0&&(p+=`
`)):(g=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),p=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?je.tonemapping_pars_fragment:"",t.toneMapping!==an?mS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),a=pf(a),a=Tg(a,t),a=wg(a,t),o=pf(o),o=Tg(o,t),o=wg(o,t),a=Cg(a),o=Cg(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+g+a,_=y+p+o,D=Eg(n,n.VERTEX_SHADER,x),T=Eg(n,n.FRAGMENT_SHADER,_);n.attachShader(v,D),n.attachShader(v,T),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(I){if(r.debug.checkShaderErrors){let k=n.getProgramInfoLog(v).trim(),N=n.getShaderInfoLog(D).trim(),G=n.getShaderInfoLog(T).trim(),Z=!0,V=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,D,T);else{let ne=bg(n,D,"vertex"),W=bg(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ne+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||G==="")&&(V=!1);V&&(I.diagnostics={runnable:Z,programLog:k,vertexShader:{log:N,prefix:g},fragmentShader:{log:G,prefix:p}})}n.deleteShader(D),n.deleteShader(T),P=new tl(n,v),M=_S(n,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(v,hS)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=T,this}var PS=0,Dg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pg(e),t.set(e,i)),i}},Pg=class{constructor(e){this.id=PS++,this.code=e,this.usedTimes=0}};function IS(r,e,t,i,n,s,a){let o=new Ps,l=new Dg,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,A,I,k,N){let G=k.fog,Z=N.geometry,V=M.isMeshStandardMaterial?k.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),W=!!ne&&ne.mapping===hr?ne.image.height:null,ce=m[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=ve!==void 0?ve.length:0,Ve=0;Z.morphAttributes.position!==void 0&&(Ve=1),Z.morphAttributes.normal!==void 0&&(Ve=2),Z.morphAttributes.color!==void 0&&(Ve=3);let ct,q,ae,be;if(ce){let ft=$i[ce];ct=ft.vertexShader,q=ft.fragmentShader}else ct=M.vertexShader,q=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);let oe=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),rt=N.isInstancedMesh===!0,De=N.isBatchedMesh===!0,lt=!!M.map,$=!!M.matcap,J=!!ne,C=!!M.aoMap,Re=!!M.lightMap,ee=!!M.bumpMap,_e=!!M.normalMap,se=!!M.displacementMap,Ne=!!M.emissiveMap,fe=!!M.metalnessMap,w=!!M.roughnessMap,S=M.anisotropy>0,O=M.clearcoat>0,Y=M.dispersion>0,K=M.iridescence>0,j=M.sheen>0,Te=M.transmission>0,he=S&&!!M.anisotropyMap,xe=O&&!!M.clearcoatMap,Je=O&&!!M.clearcoatNormalMap,ie=O&&!!M.clearcoatRoughnessMap,Ae=K&&!!M.iridescenceMap,Be=K&&!!M.iridescenceThicknessMap,Fe=j&&!!M.sheenColorMap,Se=j&&!!M.sheenRoughnessMap,nt=!!M.specularMap,qe=!!M.specularColorMap,vt=!!M.specularIntensityMap,U=Te&&!!M.transmissionMap,ue=Te&&!!M.thicknessMap,X=!!M.gradientMap,Q=!!M.alphaMap,ge=M.alphaTest>0,pe=!!M.alphaHash,Ye=!!M.extensions,Ct=an;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ct=r.toneMapping);let Qt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:ct,fragmentShader:q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:De,batchingColor:De&&N._colorsTexture!==null,instancing:rt,instancingColor:rt&&N.instanceColor!==null,instancingMorph:rt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Oi,alphaToCoverage:!!M.alphaToCoverage,map:lt,matcap:$,envMap:J,envMapMode:J&&ne.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:Re,bumpMap:ee,normalMap:_e,displacementMap:d&&se,emissiveMap:Ne,normalMapObjectSpace:_e&&M.normalMapType===hu,normalMapTangentSpace:_e&&M.normalMapType===An,metalnessMap:fe,roughnessMap:w,anisotropy:S,anisotropyMap:he,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:Je,clearcoatRoughnessMap:ie,dispersion:Y,iridescence:K,iridescenceMap:Ae,iridescenceThicknessMap:Be,sheen:j,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:nt,specularColorMap:qe,specularIntensityMap:vt,transmission:Te,transmissionMap:U,thicknessMap:ue,gradientMap:X,opaque:M.transparent===!1&&M.blending===zn&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:ge,alphaHash:pe,combine:M.combine,mapUv:lt&&v(M.map.channel),aoMapUv:C&&v(M.aoMap.channel),lightMapUv:Re&&v(M.lightMap.channel),bumpMapUv:ee&&v(M.bumpMap.channel),normalMapUv:_e&&v(M.normalMap.channel),displacementMapUv:se&&v(M.displacementMap.channel),emissiveMapUv:Ne&&v(M.emissiveMap.channel),metalnessMapUv:fe&&v(M.metalnessMap.channel),roughnessMapUv:w&&v(M.roughnessMap.channel),anisotropyMapUv:he&&v(M.anisotropyMap.channel),clearcoatMapUv:xe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(M.sheenRoughnessMap.channel),specularMapUv:nt&&v(M.specularMap.channel),specularColorMapUv:qe&&v(M.specularColorMap.channel),specularIntensityMapUv:vt&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:ue&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(_e||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(lt||Q),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ct,decodeVideoTexture:lt&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:Ne&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nt,flipSided:M.side===At,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function p(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(A,M),x(A,M),A.push(r.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){let A=m[M.type],I;if(A){let k=$i[A];I=To.clone(k.uniforms)}else I=M.uniforms;return I}function D(M,A){let I;for(let k=0,N=h.length;k<N;k++){let G=h[k];if(G.cacheKey===A){I=G,++I.usedTimes;break}}return I===void 0&&(I=new DS(r,A,M,s),h.push(I)),I}function T(M){if(--M.usedTimes==0){let A=h.indexOf(M);h[A]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function US(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function LS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ug(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,m,v,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,m,v,g){let p=a(u,d,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,m,v,g){let p=a(u,d,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||LS),i.length>1&&i.sort(d||Ig),n.length>1&&n.sort(d||Ig)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function BS(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new Ug,r.set(i,[a])):n>=s.length?(a=new Ug,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function OS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new re};break;case"SpotLight":t={position:new b,direction:new b,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new b,halfWidth:new b,halfHeight:new b};break}return r[e.id]=t,t}}}function NS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var FS=0;function HS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zS(r){let e=new OS,t=NS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let n=new b,s=new Le,a=new Le;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,D=0,T=0,R=0;c.sort(HS);for(let M=0,A=c.length;M<A;M++){let I=c[M],k=I.color,N=I.intensity,G=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],N);R++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,W=t.get(I);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=V,f++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(k).multiplyScalar(N),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[v]=V;let ne=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,ne.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[v]=ne.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=Z,_++}v++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(k).multiplyScalar(N),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=V,g++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let ne=I.shadow,W=t.get(I);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=I.shadow.matrix,x++}i.point[m]=V,m++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(N),V.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[p]=V,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==D||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+D-T,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=D,P.numLightProbes=R,i.version=FS++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let x=c[p];if(x.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),u++}else if(x.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let _=i.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Lg(r){let e=new zS(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function kS(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Lg(r),e.set(n,[o])):s>=a.length?(o=new Lg(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WS(r,e,t){let i=new br,n=new z,s=new z,a=new Qe,o=new Xo({depthPacking:Ml}),l=new Yo,c={},h=t.maxTextureSize,u={[Ui]:At,[At]:Ui,[Nt]:Nt},d=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:GS,fragmentShader:VS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new we;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new tt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let p=this.type;this.render=function(T,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Dt),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==qi&&this.type===qi,G=p===qi&&this.type!==qi;for(let Z=0,V=T.length;Z<V;Z++){let ne=T[Z],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let ce=W.getFrameExtents();if(n.multiply(ce),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ce.x),n.x=s.x*ce.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ce.y),n.y=s.y*ce.y,W.mapSize.y=s.y)),W.map===null||N===!0||G===!0){let Me=this.type!==qi?{minFilter:Vt,magFilter:Vt}:{};W.map!==null&&W.map.dispose(),W.map=new mt(n.x,n.y,Me),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let ve=W.getViewportCount();for(let Me=0;Me<ve;Me++){let Ve=W.getViewport(Me);a.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),k.viewport(a),W.updateMatrices(ne,Me),i=W.getFrustum(),_(R,P,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&y(W,P),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,A,I)};function y(T,R){let P=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mt(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,P,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,P,f,v,null)}function x(T,R,P,M){let A=null,I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)A=I;else if(A=P.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=A.uuid,N=R.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let Z=G[N];Z===void 0&&(Z=A.clone(),G[N]=Z,R.addEventListener("dispose",D)),A=Z}if(A.visible=R.visible,A.wireframe=R.wireframe,M===qi?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=r.properties.get(A);k.light=P}return A}function _(T,R,P,M,A){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===qi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=e.update(T),G=T.material;if(Array.isArray(G)){let Z=N.groups;for(let V=0,ne=Z.length;V<ne;V++){let W=Z[V],ce=G[W.materialIndex];if(ce&&ce.visible){let ve=x(T,ce,M,A);T.onBeforeShadow(r,T,R,P,N,ve,W),r.renderBufferDirect(P,null,N,ve,T,W),T.onAfterShadow(r,T,R,P,N,ve,W)}}}else if(G.visible){let Z=x(T,G,M,A);T.onBeforeShadow(r,T,R,P,N,Z,null),r.renderBufferDirect(P,null,N,Z,T,null),T.onAfterShadow(r,T,R,P,N,Z,null)}}let k=T.children;for(let N=0,G=k.length;N<G;N++)_(k[N],R,P,M,A)}function D(T){T.target.removeEventListener("dispose",D);for(let P in c){let M=c[P],A=T.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}var XS={[wa]:Ca,[Ra]:Ia,[Da]:Ua,[kn]:Pa,[Ca]:wa,[Ia]:Ra,[Ua]:Da,[Pa]:kn};function YS(r,e){function t(){let U=!1,ue=new Qe,X=null,Q=new Qe(0,0,0,0);return{setMask:function(ge){X!==ge&&!U&&(r.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){U=ge},setClear:function(ge,pe,Ye,Ct,Qt){Qt===!0&&(ge*=Ct,pe*=Ct,Ye*=Ct),ue.set(ge,pe,Ye,Ct),Q.equals(ue)===!1&&(r.clearColor(ge,pe,Ye,Ct),Q.copy(ue))},reset:function(){U=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,X=null,Q=null,ge=null;return{setReversed:function(pe){if(ue!==pe){let Ye=e.get("EXT_clip_control");ue?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let Ct=ge;ge=null,this.setClear(Ct)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?oe(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(pe){X!==pe&&!U&&(r.depthMask(pe),X=pe)},setFunc:function(pe){if(ue&&(pe=XS[pe]),Q!==pe){switch(pe){case wa:r.depthFunc(r.NEVER);break;case Ca:r.depthFunc(r.ALWAYS);break;case Ra:r.depthFunc(r.LESS);break;case kn:r.depthFunc(r.LEQUAL);break;case Da:r.depthFunc(r.EQUAL);break;case Pa:r.depthFunc(r.GEQUAL);break;case Ia:r.depthFunc(r.GREATER);break;case Ua:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=pe}},setLocked:function(pe){U=pe},setClear:function(pe){ge!==pe&&(ue&&(pe=1-pe),r.clearDepth(pe),ge=pe)},reset:function(){U=!1,X=null,Q=null,ge=null,ue=!1}}}function n(){let U=!1,ue=null,X=null,Q=null,ge=null,pe=null,Ye=null,Ct=null,Qt=null;return{setTest:function(ft){U||(ft?oe(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(ft){ue!==ft&&!U&&(r.stencilMask(ft),ue=ft)},setFunc:function(ft,Xi,xn){(X!==ft||Q!==Xi||ge!==xn)&&(r.stencilFunc(ft,Xi,xn),X=ft,Q=Xi,ge=xn)},setOp:function(ft,Xi,xn){(pe!==ft||Ye!==Xi||Ct!==xn)&&(r.stencilOp(ft,Xi,xn),pe=ft,Ye=Xi,Ct=xn)},setLocked:function(ft){U=ft},setClear:function(ft){Qt!==ft&&(r.clearStencil(ft),Qt=ft)},reset:function(){U=!1,ue=null,X=null,Q=null,ge=null,pe=null,Ye=null,Ct=null,Qt=null}}}let s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,D=null,T=null,R=new re(0,0,0),P=0,M=!1,A=null,I=null,k=null,N=null,G=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=ne>=2);let ce=null,ve={},Me=r.getParameter(r.SCISSOR_BOX),Ve=r.getParameter(r.VIEWPORT),ct=new Qe().fromArray(Me),q=new Qe().fromArray(Ve);function ae(U,ue,X,Q){let ge=new Uint8Array(4),pe=r.createTexture();r.bindTexture(U,pe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<X;Ye++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(ue+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return pe}let be={};be[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),a.setFunc(kn),ee(!1),_e(ll),oe(r.CULL_FACE),C(Dt);function oe(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Pe(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function rt(U,ue){return u[U]!==ue?(r.bindFramebuffer(U,ue),u[U]=ue,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(U,ue){let X=f,Q=!1;if(U){X=d.get(ue),X===void 0&&(X=[],d.set(ue,X));let ge=U.textures;if(X.length!==ge.length||X[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ye=ge.length;pe<Ye;pe++)X[pe]=r.COLOR_ATTACHMENT0+pe;X.length=ge.length,Q=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Q=!0);Q&&r.drawBuffers(X)}function lt(U){return m!==U?(r.useProgram(U),m=U,!0):!1}let $={[_n]:r.FUNC_ADD,[Lh]:r.FUNC_SUBTRACT,[Bh]:r.FUNC_REVERSE_SUBTRACT};$[Oh]=r.MIN,$[Nh]=r.MAX;let J={[Fh]:r.ZERO,[Hh]:r.ONE,[zh]:r.SRC_COLOR,[ba]:r.SRC_ALPHA,[Yh]:r.SRC_ALPHA_SATURATE,[Wh]:r.DST_COLOR,[Gh]:r.DST_ALPHA,[kh]:r.ONE_MINUS_SRC_COLOR,[Ta]:r.ONE_MINUS_SRC_ALPHA,[Xh]:r.ONE_MINUS_DST_COLOR,[Vh]:r.ONE_MINUS_DST_ALPHA,[jh]:r.CONSTANT_COLOR,[qh]:r.ONE_MINUS_CONSTANT_COLOR,[Zh]:r.CONSTANT_ALPHA,[Qh]:r.ONE_MINUS_CONSTANT_ALPHA};function C(U,ue,X,Q,ge,pe,Ye,Ct,Qt,ft){if(U===Dt){v===!0&&(Pe(r.BLEND),v=!1);return}if(v===!1&&(oe(r.BLEND),v=!0),U!==Uh){if(U!==g||ft!==M){if((p!==_n||_!==_n)&&(r.blendEquation(r.FUNC_ADD),p=_n,_=_n),ft)switch(U){case zn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sn:r.blendFunc(r.ONE,r.ONE);break;case hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ul:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ul:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,D=null,T=null,R.set(0,0,0),P=0,g=U,M=ft}return}ge=ge||ue,pe=pe||X,Ye=Ye||Q,(ue!==p||ge!==_)&&(r.blendEquationSeparate($[ue],$[ge]),p=ue,_=ge),(X!==y||Q!==x||pe!==D||Ye!==T)&&(r.blendFuncSeparate(J[X],J[Q],J[pe],J[Ye]),y=X,x=Q,D=pe,T=Ye),(Ct.equals(R)===!1||Qt!==P)&&(r.blendColor(Ct.r,Ct.g,Ct.b,Qt),R.copy(Ct),P=Qt),g=U,M=!1}function Re(U,ue){U.side===Nt?Pe(r.CULL_FACE):oe(r.CULL_FACE);let X=U.side===At;ue&&(X=!X),ee(X),U.blending===zn&&U.transparent===!1?C(Dt):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){A!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),A=U)}function _e(U){U!==Dh?(oe(r.CULL_FACE),U!==I&&(U===ll?r.cullFace(r.BACK):U===Ph?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),I=U}function se(U){U!==k&&(V&&r.lineWidth(U),k=U)}function Ne(U,ue,X){U?(oe(r.POLYGON_OFFSET_FILL),(N!==ue||G!==X)&&(r.polygonOffset(ue,X),N=ue,G=X)):Pe(r.POLYGON_OFFSET_FILL)}function fe(U){U?oe(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function w(U){U===void 0&&(U=r.TEXTURE0+Z-1),ce!==U&&(r.activeTexture(U),ce=U)}function S(U,ue,X){X===void 0&&(ce===null?X=r.TEXTURE0+Z-1:X=ce);let Q=ve[X];Q===void 0&&(Q={type:void 0,texture:void 0},ve[X]=Q),(Q.type!==U||Q.texture!==ue)&&(ce!==X&&(r.activeTexture(X),ce=X),r.bindTexture(U,ue||be[U]),Q.type=U,Q.texture=ue)}function O(){let U=ve[ce];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){ct.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function Se(U){q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function nt(U,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let Q=X.get(U);Q===void 0&&(Q=r.getUniformBlockIndex(ue,U.name),X.set(U,Q))}function qe(U,ue){let Q=c.get(ue).get(U);l.get(ue)!==Q&&(r.uniformBlockBinding(ue,Q,U.__bindingPointIndex),l.set(ue,Q))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ce=null,ve={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,D=null,T=null,R=new re(0,0,0),P=0,M=!1,A=null,I=null,k=null,N=null,G=null,ct.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Pe,bindFramebuffer:rt,drawBuffers:De,useProgram:lt,setBlending:C,setMaterial:Re,setFlipSided:ee,setCullFace:_e,setLineWidth:se,setPolygonOffset:Ne,setScissorTest:fe,activeTexture:w,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:Ae,texImage3D:Be,updateUBOMapping:nt,uniformBlockBinding:qe,texStorage2D:Je,texStorage3D:ie,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Fe,viewport:Se,reset:vt}}function jS(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new z,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function m(w,S){return f?new OffscreenCanvas(w,S):Ss("canvas")}function v(w,S,O){let Y=1,K=fe(w);if((K.width>O||K.height>O)&&(Y=O/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let j=Math.floor(Y*K.width),Te=Math.floor(Y*K.height);u===void 0&&(u=m(j,Te));let he=S?m(j,Te):u;return he.width=j,he.height=Te,he.getContext("2d").drawImage(w,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Te+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(w,S,O,Y,K=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=S;if(S===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),S===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RG8UI),O===r.UNSIGNED_SHORT&&(j=r.RG16UI),O===r.UNSIGNED_INT&&(j=r.RG32UI),O===r.BYTE&&(j=r.RG8I),O===r.SHORT&&(j=r.RG16I),O===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGB8UI),O===r.UNSIGNED_SHORT&&(j=r.RGB16UI),O===r.UNSIGNED_INT&&(j=r.RGB32UI),O===r.BYTE&&(j=r.RGB8I),O===r.SHORT&&(j=r.RGB16I),O===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),O===r.UNSIGNED_INT&&(j=r.RGBA32UI),O===r.BYTE&&(j=r.RGBA8I),O===r.SHORT&&(j=r.RGBA16I),O===r.INT&&(j=r.RGBA32I)),S===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),S===r.RGBA){let Te=K?xs:et.getTransfer(Y);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=Te===dt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(w,S){let O;return w?S===null||S===Li||S===ln?O=r.DEPTH24_STENCIL8:S===Kt?O=r.DEPTH32F_STENCIL8:S===dr&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===ln?O=r.DEPTH_COMPONENT24:S===Kt?O=r.DEPTH_COMPONENT32F:S===dr&&(O=r.DEPTH_COMPONENT16),O}function D(w,S){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Vt&&w.minFilter!==xt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){let S=w.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function R(w){let S=w.target;S.removeEventListener("dispose",R),A(S)}function P(w){let S=i.get(w);if(S.__webglInit===void 0)return;let O=w.source,Y=d.get(O);if(Y){let K=Y[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(w),Object.keys(Y).length===0&&d.delete(O)}i.remove(w)}function M(w){let S=i.get(w);r.deleteTexture(S.__webglTexture);let O=w.source,Y=d.get(O);delete Y[S.__cacheKey],a.memory.textures--}function A(w){let S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let K=0;K<S.__webglFramebuffer[Y].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[Y][K]);else r.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)r.deleteFramebuffer(S.__webglFramebuffer[Y]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=w.textures;for(let Y=0,K=O.length;Y<K;Y++){let j=i.get(O[Y]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(w)}let I=0;function k(){I=0}function N(){let w=I;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),I+=1,w}function G(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function Z(w,S){let O=i.get(w);if(w.isVideoTexture&&se(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,w,S);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function V(w,S){let O=i.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function ne(w,S){let O=i.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function W(w,S){let O=i.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}let ce={[os]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[ls]:r.MIRRORED_REPEAT},ve={[Vt]:r.NEAREST,[fl]:r.NEAREST_MIPMAP_NEAREST,[ur]:r.NEAREST_MIPMAP_LINEAR,[xt]:r.LINEAR,[cs]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},Me={[uu]:r.NEVER,[vu]:r.ALWAYS,[du]:r.LESS,[Tl]:r.LEQUAL,[fu]:r.EQUAL,[gu]:r.GEQUAL,[pu]:r.GREATER,[mu]:r.NOTEQUAL};function Ve(w,S){if(S.type===Kt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===xt||S.magFilter===cs||S.magFilter===ur||S.magFilter===Zi||S.minFilter===xt||S.minFilter===cs||S.minFilter===ur||S.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ce[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ce[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ce[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ve[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==ur&&S.minFilter!==Zi||S.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ct(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));let Y=S.source,K=d.get(Y);K===void 0&&(K={},d.set(Y,K));let j=G(S);if(j!==w.__cacheKey){K[j]===void 0&&(K[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[j].usedTimes++;let Te=K[w.__cacheKey];Te!==void 0&&(K[w.__cacheKey].usedTimes--,Te.usedTimes===0&&M(S)),w.__cacheKey=j,w.__webglTexture=K[j].texture}return O}function q(w,S,O){let Y=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=r.TEXTURE_3D);let K=ct(w,S),j=S.source;t.bindTexture(Y,w.__webglTexture,r.TEXTURE0+O);let Te=i.get(j);if(j.version!==Te.__version||K===!0){t.activeTexture(r.TEXTURE0+O);let he=et.getPrimaries(et.workingColorSpace),xe=S.colorSpace===di?null:et.getPrimaries(S.colorSpace),Je=S.colorSpace===di||he===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ie=v(S.image,!1,n.maxTextureSize);ie=Ne(S,ie);let Ae=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),Fe=x(S.internalFormat,Ae,Be,S.colorSpace,S.isVideoTexture);Ve(Y,S);let Se,nt=S.mipmaps,qe=S.isVideoTexture!==!0,vt=Te.__version===void 0||K===!0,U=j.dataReady,ue=D(S,ie);if(S.isDepthTexture)Fe=_(S.format===cn,S.type),vt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,Fe,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Ae,Be,null));else if(S.isDataTexture)if(nt.length>0){qe&&vt&&t.texStorage2D(r.TEXTURE_2D,ue,Fe,nt[0].width,nt[0].height);for(let X=0,Q=nt.length;X<Q;X++)Se=nt[X],qe?U&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,Se.width,Se.height,Ae,Be,Se.data):t.texImage2D(r.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Ae,Be,Se.data);S.generateMipmaps=!1}else qe?(vt&&t.texStorage2D(r.TEXTURE_2D,ue,Fe,ie.width,ie.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,Ae,Be,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Ae,Be,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Fe,nt[0].width,nt[0].height,ie.depth);for(let X=0,Q=nt.length;X<Q;X++)if(Se=nt[X],S.format!==Jt)if(Ae!==null)if(qe){if(U)if(S.layerUpdates.size>0){let ge=oh(Se.width,Se.height,S.format,S.type);for(let pe of S.layerUpdates){let Ye=Se.data.subarray(pe*ge/Se.data.BYTES_PER_ELEMENT,(pe+1)*ge/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,pe,Se.width,Se.height,1,Ae,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,ie.depth,Ae,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Fe,Se.width,Se.height,ie.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,ie.depth,Ae,Be,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Fe,Se.width,Se.height,ie.depth,0,Ae,Be,Se.data)}else{qe&&vt&&t.texStorage2D(r.TEXTURE_2D,ue,Fe,nt[0].width,nt[0].height);for(let X=0,Q=nt.length;X<Q;X++)Se=nt[X],S.format!==Jt?Ae!==null?qe?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?U&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,Se.width,Se.height,Ae,Be,Se.data):t.texImage2D(r.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Ae,Be,Se.data)}else if(S.isDataArrayTexture)if(qe){if(vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Fe,ie.width,ie.height,ie.depth),U)if(S.layerUpdates.size>0){let X=oh(ie.width,ie.height,S.format,S.type);for(let Q of S.layerUpdates){let ge=ie.data.subarray(Q*X/ie.data.BYTES_PER_ELEMENT,(Q+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,Ae,Be,ge)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ae,Be,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,Ae,Be,ie.data);else if(S.isData3DTexture)qe?(vt&&t.texStorage3D(r.TEXTURE_3D,ue,Fe,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ae,Be,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,Ae,Be,ie.data);else if(S.isFramebufferTexture){if(vt)if(qe)t.texStorage2D(r.TEXTURE_2D,ue,Fe,ie.width,ie.height);else{let X=ie.width,Q=ie.height;for(let ge=0;ge<ue;ge++)t.texImage2D(r.TEXTURE_2D,ge,Fe,X,Q,0,Ae,Be,null),X>>=1,Q>>=1}}else if(nt.length>0){if(qe&&vt){let X=fe(nt[0]);t.texStorage2D(r.TEXTURE_2D,ue,Fe,X.width,X.height)}for(let X=0,Q=nt.length;X<Q;X++)Se=nt[X],qe?U&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,Ae,Be,Se):t.texImage2D(r.TEXTURE_2D,X,Fe,Ae,Be,Se);S.generateMipmaps=!1}else if(qe){if(vt){let X=fe(ie);t.texStorage2D(r.TEXTURE_2D,ue,Fe,X.width,X.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Be,ie)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Ae,Be,ie);g(S)&&p(Y),Te.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ae(w,S,O){if(S.image.length!==6)return;let Y=ct(w,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);let j=i.get(K);if(K.version!==j.__version||Y===!0){t.activeTexture(r.TEXTURE0+O);let Te=et.getPrimaries(et.workingColorSpace),he=S.colorSpace===di?null:et.getPrimaries(S.colorSpace),xe=S.colorSpace===di||Te===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Je=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let Q=0;Q<6;Q++)!Je&&!ie?Ae[Q]=v(S.image[Q],!0,n.maxCubemapSize):Ae[Q]=ie?S.image[Q].image:S.image[Q],Ae[Q]=Ne(S,Ae[Q]);let Be=Ae[0],Fe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),nt=x(S.internalFormat,Fe,Se,S.colorSpace),qe=S.isVideoTexture!==!0,vt=j.__version===void 0||Y===!0,U=K.dataReady,ue=D(S,Be);Ve(r.TEXTURE_CUBE_MAP,S);let X;if(Je){qe&&vt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,nt,Be.width,Be.height);for(let Q=0;Q<6;Q++){X=Ae[Q].mipmaps;for(let ge=0;ge<X.length;ge++){let pe=X[ge];S.format!==Jt?Fe!==null?qe?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Fe,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,nt,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Fe,Se,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,nt,pe.width,pe.height,0,Fe,Se,pe.data)}}}else{if(X=S.mipmaps,qe&&vt){X.length>0&&ue++;let Q=fe(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){qe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae[Q].width,Ae[Q].height,Fe,Se,Ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Ae[Q].width,Ae[Q].height,0,Fe,Se,Ae[Q].data);for(let ge=0;ge<X.length;ge++){let Ye=X[ge].image[Q].image;qe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Ye.width,Ye.height,Fe,Se,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,nt,Ye.width,Ye.height,0,Fe,Se,Ye.data)}}else{qe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,Se,Ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Fe,Se,Ae[Q]);for(let ge=0;ge<X.length;ge++){let pe=X[ge];qe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Fe,Se,pe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,nt,Fe,Se,pe.image[Q])}}}g(S)&&p(r.TEXTURE_CUBE_MAP),j.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function be(w,S,O,Y,K,j){let Te=s.convert(O.format,O.colorSpace),he=s.convert(O.type),xe=x(O.internalFormat,Te,he,O.colorSpace),Je=i.get(S),ie=i.get(O);if(ie.__renderTarget=S,!Je.__hasExternalTextures){let Ae=Math.max(1,S.width>>j),Be=Math.max(1,S.height>>j);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,j,xe,Ae,Be,S.depth,0,Te,he,null):t.texImage2D(K,j,xe,Ae,Be,0,Te,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,K,ie.__webglTexture,0,ee(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,K,ie.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(w,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){let Y=S.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,j=_(S.stencilBuffer,K),Te=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=ee(S);_e(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,j,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,w)}else{let Y=S.textures;for(let K=0;K<Y.length;K++){let j=Y[K],Te=s.convert(j.format,j.colorSpace),he=s.convert(j.type),xe=x(j.internalFormat,Te,he,j.colorSpace),Je=ee(S);O&&_e(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,xe,S.width,S.height):_e(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,xe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,xe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let K=Y.__webglTexture,j=ee(S);if(S.depthTexture.format===Gn)_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(S.depthTexture.format===cn)_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function rt(w){let S=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=Y}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=r.createRenderbuffer(),oe(S.__webglDepthbuffer[Y],w,!1);else{let K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),oe(S.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(w,S,O){let Y=i.get(w);S!==void 0&&be(Y.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&rt(w)}function lt(w){let S=w.texture,O=i.get(w),Y=i.get(S);w.addEventListener("dispose",R);let K=w.textures,j=w.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=S.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let xe=0;xe<S.mipmaps.length;xe++)O.__webglFramebuffer[he][xe]=r.createFramebuffer()}else O.__webglFramebuffer[he]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[he]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Te)for(let he=0,xe=K.length;he<xe;he++){let Je=i.get(K[he]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&_e(w)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){let xe=K[he];O.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[he]);let Je=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),Ae=x(xe.internalFormat,Je,ie,xe.colorSpace,w.isXRRenderTarget===!0),Be=ee(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ae,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,O.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ve(r.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)be(O.__webglFramebuffer[he][xe],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else be(O.__webglFramebuffer[he],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,xe=K.length;he<xe;he++){let Je=K[he],ie=i.get(Je);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Ve(r.TEXTURE_2D,Je),be(O.__webglFramebuffer,w,Je,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),g(Je)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),Ve(he,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)be(O.__webglFramebuffer[xe],w,S,r.COLOR_ATTACHMENT0,he,xe);else be(O.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,he,0);g(S)&&p(he),t.unbindTexture()}w.depthBuffer&&rt(w)}function $(w){let S=w.textures;for(let O=0,Y=S.length;O<Y;O++){let K=S[O];if(g(K)){let j=y(w),Te=i.get(K).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}let J=[],C=[];function Re(w){if(w.samples>0){if(_e(w)===!1){let S=w.textures,O=w.width,Y=w.height,K=r.COLOR_BUFFER_BIT,j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=i.get(w),he=S.length>1;if(he)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let Je=i.get(S[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Je,0)}r.blitFramebuffer(0,0,O,Y,0,0,O,Y,K,r.NEAREST),l===!0&&(J.length=0,C.length=0,J.push(r.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(j),C.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,C)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let Je=i.get(S[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ee(w){return Math.min(n.maxSamples,w.samples)}function _e(w){let S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(w){let S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Ne(w,S){let O=w.colorSpace,Y=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Oi&&O!==di&&(et.getTransfer(O)===dt?(Y!==Jt||K!==bt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function fe(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=W,this.rebindTextures=De,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=_e}function Bg(r,e){function t(i,n=di){let s,a=et.getTransfer(n);if(i===bt)return r.UNSIGNED_BYTE;if(i===Oa)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return r.UNSIGNED_SHORT_5_5_5_1;if(i===gl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===pl)return r.BYTE;if(i===ml)return r.SHORT;if(i===dr)return r.UNSIGNED_SHORT;if(i===Ba)return r.INT;if(i===Li)return r.UNSIGNED_INT;if(i===Kt)return r.FLOAT;if(i===fr)return r.HALF_FLOAT;if(i===vl)return r.ALPHA;if(i===xl)return r.RGB;if(i===Jt)return r.RGBA;if(i===_l)return r.LUMINANCE;if(i===yl)return r.LUMINANCE_ALPHA;if(i===Gn)return r.DEPTH_COMPONENT;if(i===cn)return r.DEPTH_STENCIL;if(i===Fa)return r.RED;if(i===hs)return r.RED_INTEGER;if(i===Al)return r.RG;if(i===Ha)return r.RG_INTEGER;if(i===za)return r.RGBA_INTEGER;if(i===us||i===ds||i===fs||i===ps)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Ga||i===Va||i===Wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xa||i===Ya||i===ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xa||i===Ya)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ja)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qa||i===Za||i===Qa||i===Ka||i===Ja||i===$a||i===eo||i===to||i===io||i===no||i===ro||i===so||i===ao||i===oo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ka)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===to)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===no)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ms||i===lo||i===co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ms)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===ho||i===uo||i===fo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ms)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ln?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZS=`
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

}`,Og=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new pt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ke({vertexShader:qS,fragmentShader:ZS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ng=class extends Wt{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=new Og,g=t.getContextAttributes(),p=null,y=null,x=[],_=[],D=new z,T=null,R=new Tt;R.viewport=new Qe;let P=new Tt;P.viewport=new Qe;let M=[R,P],A=new Qc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=x[q];return ae===void 0&&(ae=new Hs,x[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=x[q];return ae===void 0&&(ae=new Hs,x[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=x[q];return ae===void 0&&(ae=new Hs,x[q]=ae),ae.getHandSpace()};function N(q){let ae=_.indexOf(q.inputSource);if(ae===-1)return;let be=x[ae];be!==void 0&&(be.update(q.inputSource,q.frame,c||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){let ae=_[q];ae!==null&&(_[q]=null,x[q].disconnect(ae))}I=null,k=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,n=null,y=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=function(q){return ui(this,null,function*(){if(n=q,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",G),n.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&(yield t.makeXRCompatible()),T=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,oe=null,Pe=null;g.depth&&(Pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=g.stencil?cn:Gn,oe=g.stencil?ln:Li);let rt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(rt),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new mt(d.textureWidth,d.textureHeight,{format:Jt,type:bt,depthTexture:new Cr(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,be),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new mt(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:bt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),ct.setContext(n),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(q){for(let ae=0;ae<q.removed.length;ae++){let be=q.removed[ae],oe=_.indexOf(be);oe>=0&&(_[oe]=null,x[oe].disconnect(be))}for(let ae=0;ae<q.added.length;ae++){let be=q.added[ae],oe=_.indexOf(be);if(oe===-1){for(let rt=0;rt<x.length;rt++)if(rt>=_.length){_.push(be),oe=rt;break}else if(_[rt]===null){_[rt]=be,oe=rt;break}if(oe===-1)break}let Pe=x[oe];Pe&&Pe.connect(be)}}let V=new b,ne=new b;function W(q,ae,be){V.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);let oe=V.distanceTo(ne),Pe=ae.projectionMatrix.elements,rt=be.projectionMatrix.elements,De=Pe[14]/(Pe[10]-1),lt=Pe[14]/(Pe[10]+1),$=(Pe[9]+1)/Pe[5],J=(Pe[9]-1)/Pe[5],C=(Pe[8]-1)/Pe[0],Re=(rt[8]+1)/rt[0],ee=De*C,_e=De*Re,se=oe/(-C+Re),Ne=se*-C;if(ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let fe=De+se,w=lt+se,S=ee-Ne,O=_e+(oe-Ne),Y=$*lt/w*fe,K=J*lt/w*fe;q.projectionMatrix.makePerspective(S,O,Y,K,fe,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let ae=q.near,be=q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(be=v.depthFar)),A.near=P.near=R.near=ae,A.far=P.far=R.far=be,(I!==A.near||k!==A.far)&&(n.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,k=A.far),R.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,A.layers.mask=R.layers.mask|P.layers.mask;let oe=q.parent,Pe=A.cameras;ce(A,oe);for(let rt=0;rt<Pe.length;rt++)ce(Pe[rt],oe);Pe.length===2?W(A,R,P):A.projectionMatrix.copy(R.projectionMatrix),ve(q,A,oe)};function ve(q,ae,be){be===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=mr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(A)};let Me=null;function Ve(q,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;be.length!==A.cameras.length&&(A.cameras.length=0,oe=!0);for(let De=0;De<be.length;De++){let lt=be[De],$=null;if(f!==null)$=f.getViewport(lt);else{let C=u.getViewSubImage(d,lt);$=C.viewport,De===0&&(e.setRenderTargetTextures(y,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(y))}let J=M[De];J===void 0&&(J=new Tt,J.layers.enable(De),J.viewport=new Qe,M[De]=J),J.matrix.fromArray(lt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(lt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($.x,$.y,$.width,$.height),De===0&&(A.matrix.copy(J.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),oe===!0&&A.cameras.push(J)}let Pe=n.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){let De=u.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&v.init(e,De,n.renderState)}}for(let be=0;be<x.length;be++){let oe=_[be],Pe=x[be];oe!==null&&Pe!==void 0&&Pe.update(oe,ae,c||a)}Me&&Me(q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}let ct=new ig;ct.setAnimationLoop(Ve),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}},Kr=new oi,QS=new Le;function KS(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,qu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===At&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===At&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Kr.copy(_),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(Kr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===At&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function JS(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=n[y.id];_===void 0&&(m(y),_=h(y),n[y.id]=_,y.addEventListener("dispose",g));let D=x.program;i.updateUBOMapping(y,D);let T=e.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let _=r.createBuffer(),D=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,D,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=n[y.id],_=y.uniforms,D=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,R=_.length;T<R;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,A=P.length;M<A;M++){let I=P[M];if(f(I,T,M,D)===!0){let k=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],G=0;for(let Z=0;Z<N.length;Z++){let V=N[Z],ne=v(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,k+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,_,D){let T=y.value,R=x+"_"+_;if(D[R]===void 0)return typeof T=="number"||typeof T=="boolean"?D[R]=T:D[R]=T.clone(),!0;{let P=D[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(y){let x=y.uniforms,_=0,D=16;for(let R=0,P=x.length;R<P;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let A=0,I=M.length;A<I;A++){let k=M[A],N=Array.isArray(k.value)?k.value:[k.value];for(let G=0,Z=N.length;G<Z;G++){let V=N[G],ne=v(V),W=_%D,ce=W%ne.boundary,ve=W+ce;_+=ce,ve!==0&&D-ve<ne.storage&&(_+=D-ve),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=ne.storage}}}let T=_%D;return T>0&&(_+=D-T),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}var fh=class{constructor(e={}){let{canvas:t=Au(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=an,this.toneMappingExposure=1;let _=this,D=!1,T=0,R=0,P=null,M=-1,A=null,I=new Qe,k=new Qe,N=null,G=new re(0),Z=0,V=t.width,ne=t.height,W=1,ce=null,ve=null,Me=new Qe(0,0,V,ne),Ve=new Qe(0,0,V,ne),ct=!1,q=new br,ae=!1,be=!1;this.transmissionResolutionScale=1;let oe=new Le,Pe=new Le,rt=new b,De=new Qe,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function J(){return P===null?W:1}let C=i;function Re(E,L){return t.getContext(E,L)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ji}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),C===null){let L="webgl2";if(C=Re(L,E),C===null)throw Re(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,_e,se,Ne,fe,w,S,O,Y,K,j,Te,he,xe,Je,ie,Ae,Be,Fe,Se,nt,qe,vt,U;function ue(){ee=new vA(C),ee.init(),qe=new Bg(C,ee),_e=new uA(C,ee,e,qe),se=new YS(C,ee),_e.reverseDepthBuffer&&d&&se.buffers.depth.setReversed(!0),Ne=new yA(C),fe=new US,w=new jS(C,ee,se,fe,_e,qe,Ne),S=new fA(_),O=new gA(_),Y=new wx(C),vt=new cA(C,Y),K=new xA(C,Y,Ne,vt),j=new SA(C,K,Y,Ne),Fe=new AA(C,_e,w),ie=new dA(fe),Te=new IS(_,S,O,ee,_e,vt,ie),he=new KS(_,fe),xe=new BS,Je=new kS(ee),Be=new lA(_,S,O,se,j,f,l),Ae=new WS(_,j,_e),U=new JS(C,Ne,_e,se),Se=new hA(C,ee,Ne),nt=new _A(C,ee,Ne),Ne.programs=Te.programs,_.capabilities=_e,_.extensions=ee,_.properties=fe,_.renderLists=xe,_.shadowMap=Ae,_.state=se,_.info=Ne}ue();let X=new Ng(_,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(V,ne,!1))},this.getSize=function(E){return E.set(V,ne)},this.setSize=function(E,L,F=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,ne=L,t.width=Math.floor(E*W),t.height=Math.floor(L*W),F===!0&&(t.style.width=E+"px",t.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(V*W,ne*W).floor()},this.setDrawingBufferSize=function(E,L,F){V=E,ne=L,W=F,t.width=Math.floor(E*F),t.height=Math.floor(L*F),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Me)},this.setViewport=function(E,L,F,H){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,L,F,H),se.viewport(I.copy(Me).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,L,F,H){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,L,F,H),se.scissor(k.copy(Ve).multiplyScalar(W).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(E){se.setScissorTest(ct=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(E=!0,L=!0,F=!0){let H=0;if(E){let B=!1;if(P!==null){let te=P.texture.format;B=te===za||te===Ha||te===hs}if(B){let te=P.texture.type,de=te===bt||te===Li||te===dr||te===ln||te===Oa||te===Na,ye=Be.getClearColor(),Ee=Be.getClearAlpha(),He=ye.r,ke=ye.g,Ie=ye.b;de?(m[0]=He,m[1]=ke,m[2]=Ie,m[3]=Ee,C.clearBufferuiv(C.COLOR,0,m)):(v[0]=He,v[1]=ke,v[2]=Ie,v[3]=Ee,C.clearBufferiv(C.COLOR,0,v))}else H|=C.COLOR_BUFFER_BIT}L&&(H|=C.DEPTH_BUFFER_BIT),F&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Be.dispose(),xe.dispose(),Je.dispose(),fe.dispose(),S.dispose(),O.dispose(),j.dispose(),vt.dispose(),U.dispose(),Te.dispose(),X.dispose(),X.removeEventListener("sessionstart",Uf),X.removeEventListener("sessionend",Lf),lr.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=Ne.autoReset,L=Ae.enabled,F=Ae.autoUpdate,H=Ae.needsUpdate,B=Ae.type;ue(),Ne.autoReset=E,Ae.enabled=L,Ae.autoUpdate=F,Ae.needsUpdate=H,Ae.type=B}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ye(E){let L=E.target;L.removeEventListener("dispose",Ye),Ct(L)}function Ct(E){Qt(E),fe.remove(E)}function Qt(E){let L=fe.get(E).programs;L!==void 0&&(L.forEach(function(F){Te.releaseProgram(F)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,F,H,B,te){L===null&&(L=lt);let de=B.isMesh&&B.matrixWorld.determinant()<0,ye=bv(E,L,F,H,B);se.setMaterial(H,de);let Ee=F.index,He=1;if(H.wireframe===!0){if(Ee=K.getWireframeAttribute(F),Ee===void 0)return;He=2}let ke=F.drawRange,Ie=F.attributes.position,st=ke.start*He,ht=(ke.start+ke.count)*He;te!==null&&(st=Math.max(st,te.start*He),ht=Math.min(ht,(te.start+te.count)*He)),Ee!==null?(st=Math.max(st,0),ht=Math.min(ht,Ee.count)):Ie!=null&&(st=Math.max(st,0),ht=Math.min(ht,Ie.count));let Lt=ht-st;if(Lt<0||Lt===1/0)return;vt.setup(B,H,ye,F,Ee);let Rt,at=Se;if(Ee!==null&&(Rt=Y.get(Ee),at=nt,at.setIndex(Rt)),B.isMesh)H.wireframe===!0?(se.setLineWidth(H.wireframeLinewidth*J()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(B.isLine){let Ue=H.linewidth;Ue===void 0&&(Ue=1),se.setLineWidth(Ue*J()),B.isLineSegments?at.setMode(C.LINES):B.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else B.isPoints?at.setMode(C.POINTS):B.isSprite&&at.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ue=B._multiDrawStarts,qt=B._multiDrawCounts,ut=B._multiDrawCount,Yi=Ee?Y.get(Ee).bytesPerElement:1,ns=fe.get(H).currentProgram.getUniforms();for(let xi=0;xi<ut;xi++)ns.setValue(C,"_gl_DrawID",xi),at.render(Ue[xi]/Yi,qt[xi])}else if(B.isInstancedMesh)at.renderInstances(st,Lt,B.count);else if(F.isInstancedBufferGeometry){let Ue=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,qt=Math.min(F.instanceCount,Ue);at.renderInstances(st,Lt,qt)}else at.render(st,Lt)};function ft(E,L,F){E.transparent===!0&&E.side===Nt&&E.forceSinglePass===!1?(E.side=At,E.needsUpdate=!0,ol(E,L,F),E.side=Ui,E.needsUpdate=!0,ol(E,L,F),E.side=Nt):ol(E,L,F)}this.compile=function(E,L,F=null){F===null&&(F=E),p=Je.get(F),p.init(L),x.push(p),F.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==F&&E.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let H=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let te=B.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){let ye=te[de];ft(ye,F,B),H.add(ye)}else ft(te,F,B),H.add(te)}),x.pop(),p=null,H},this.compileAsync=function(E,L,F=null){let H=this.compile(E,L,F);return new Promise(B=>{function te(){if(H.forEach(function(de){fe.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){B(E);return}setTimeout(te,10)}ee.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Xi=null;function xn(E){Xi&&Xi(E)}function Uf(){lr.stop()}function Lf(){lr.start()}let lr=new ig;lr.setAnimationLoop(xn),typeof self!="undefined"&&lr.setContext(self),this.setAnimationLoop=function(E){Xi=E,X.setAnimationLoop(E),E===null?lr.stop():lr.start()},X.addEventListener("sessionstart",Uf),X.addEventListener("sessionend",Lf),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,L,P),p=Je.get(E,x.length),p.init(L),x.push(p),Pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Pe),be=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,be),g=xe.get(E,y.length),g.init(),y.push(g),X.enabled===!0&&X.isPresenting===!0){let te=_.xr.getDepthSensingMesh();te!==null&&wh(te,L,-1/0,_.sortObjects)}wh(E,L,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ce,ve),$=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$&&Be.addToRenderList(g,E),this.info.render.frame++,ae===!0&&ie.beginShadows();let F=p.state.shadowsArray;Ae.render(F,E,L),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,B=g.transmissive;if(p.setupLights(),L.isArrayCamera){let te=L.cameras;if(B.length>0)for(let de=0,ye=te.length;de<ye;de++){let Ee=te[de];Of(H,B,E,Ee)}$&&Be.render(E);for(let de=0,ye=te.length;de<ye;de++){let Ee=te[de];Bf(g,E,Ee,Ee.viewport)}}else B.length>0&&Of(H,B,E,L),$&&Be.render(E),Bf(g,E,L);P!==null&&R===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,L),vt.resetDefaultState(),M=-1,A=null,x.pop(),x.length>0?(p=x[x.length-1],ae===!0&&ie.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function wh(E,L,F,H){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){H&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);let de=j.update(E),ye=E.material;ye.visible&&g.push(E,de,ye,F,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let de=j.update(E),ye=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),De.copy(de.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(ye)){let Ee=de.groups;for(let He=0,ke=Ee.length;He<ke;He++){let Ie=Ee[He],st=ye[Ie.materialIndex];st&&st.visible&&g.push(E,de,st,F,De.z,Ie)}}else ye.visible&&g.push(E,de,ye,F,De.z,null)}}let te=E.children;for(let de=0,ye=te.length;de<ye;de++)wh(te[de],L,F,H)}function Bf(E,L,F,H){let B=E.opaque,te=E.transmissive,de=E.transparent;p.setupLightsView(F),ae===!0&&ie.setGlobalState(_.clippingPlanes,F),H&&se.viewport(I.copy(H)),B.length>0&&al(B,L,F),te.length>0&&al(te,L,F),de.length>0&&al(de,L,F),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Of(E,L,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new mt(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?fr:bt,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let te=p.state.transmissionRenderTarget[H.id],de=H.viewport||I;te.setSize(de.z*_.transmissionResolutionScale,de.w*_.transmissionResolutionScale);let ye=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(G),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),$&&Be.render(F);let Ee=_.toneMapping;_.toneMapping=an;let He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ae===!0&&ie.setGlobalState(_.clippingPlanes,H),al(E,F,H),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,st=L.length;Ie<st;Ie++){let ht=L[Ie],Lt=ht.object,Rt=ht.geometry,at=ht.material,Ue=ht.group;if(at.side===Nt&&Lt.layers.test(H.layers)){let qt=at.side;at.side=At,at.needsUpdate=!0,Nf(Lt,F,H,Rt,at,Ue),at.side=qt,at.needsUpdate=!0,ke=!0}}ke===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}_.setRenderTarget(ye),_.setClearColor(G,Z),He!==void 0&&(H.viewport=He),_.toneMapping=Ee}function al(E,L,F){let H=L.isScene===!0?L.overrideMaterial:null;for(let B=0,te=E.length;B<te;B++){let de=E[B],ye=de.object,Ee=de.geometry,He=H===null?de.material:H,ke=de.group;ye.layers.test(F.layers)&&Nf(ye,L,F,Ee,He,ke)}}function Nf(E,L,F,H,B,te){E.onBeforeRender(_,L,F,H,B,te),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,L,F,H,E,te),B.transparent===!0&&B.side===Nt&&B.forceSinglePass===!1?(B.side=At,B.needsUpdate=!0,_.renderBufferDirect(F,L,H,B,E,te),B.side=Ui,B.needsUpdate=!0,_.renderBufferDirect(F,L,H,B,E,te),B.side=Nt):_.renderBufferDirect(F,L,H,B,E,te),E.onAfterRender(_,L,F,H,B,te)}function ol(E,L,F){L.isScene!==!0&&(L=lt);let H=fe.get(E),B=p.state.lights,te=p.state.shadowsArray,de=B.state.version,ye=Te.getParameters(E,B.state,te,L,F),Ee=Te.getProgramCacheKey(ye),He=H.programs;H.environment=E.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Ye),He=new Map,H.programs=He);let ke=He.get(Ee);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===de)return Hf(E,ye),ke}else ye.uniforms=Te.getUniforms(E),E.onBeforeCompile(ye,_),ke=Te.acquireProgram(ye,Ee),He.set(Ee,ke),H.uniforms=ye.uniforms;let Ie=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=ie.uniform),Hf(E,ye),H.needsLights=wv(E),H.lightsStateVersion=de,H.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function Ff(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Hf(E,L){let F=fe.get(E);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function bv(E,L,F,H,B){L.isScene!==!0&&(L=lt),w.resetTextureUnits();let te=L.fog,de=H.isMeshStandardMaterial?L.environment:null,ye=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Oi,Ee=(H.isMeshStandardMaterial?O:S).get(H.envMap||de),He=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ke=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!F.morphAttributes.position,st=!!F.morphAttributes.normal,ht=!!F.morphAttributes.color,Lt=an;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=_.toneMapping);let Rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,at=Rt!==void 0?Rt.length:0,Ue=fe.get(H),qt=p.state.lights;if(ae===!0&&(be===!0||E!==A)){let si=E===A&&H.id===M;ie.setState(H,E,si)}let ut=!1;H.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==qt.state.version||Ue.outputColorSpace!==ye||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==Ee||H.fog===!0&&Ue.fog!==te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ie.numPlanes||Ue.numIntersection!==ie.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==ke||Ue.morphTargets!==Ie||Ue.morphNormals!==st||Ue.morphColors!==ht||Ue.toneMapping!==Lt||Ue.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Ue.__version=H.version);let Yi=Ue.currentProgram;ut===!0&&(Yi=ol(H,L,B));let ns=!1,xi=!1,Ea=!1,Mt=Yi.getUniforms(),Di=Ue.uniforms;if(se.useProgram(Yi.program)&&(ns=!0,xi=!0,Ea=!0),H.id!==M&&(M=H.id,xi=!0),ns||A!==E){se.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),Pp(oe),Ip(oe),Mt.setValue(C,"projectionMatrix",oe)):Mt.setValue(C,"projectionMatrix",E.projectionMatrix),Mt.setValue(C,"viewMatrix",E.matrixWorldInverse);let hi=Mt.map.cameraPosition;hi!==void 0&&hi.setValue(C,rt.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&Mt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,xi=!0,Ea=!0)}if(B.isSkinnedMesh){Mt.setOptional(C,B,"bindMatrix"),Mt.setOptional(C,B,"bindMatrixInverse");let si=B.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),Mt.setValue(C,"boneTexture",si.boneTexture,w))}B.isBatchedMesh&&(Mt.setOptional(C,B,"batchingTexture"),Mt.setValue(C,"batchingTexture",B._matricesTexture,w),Mt.setOptional(C,B,"batchingIdTexture"),Mt.setValue(C,"batchingIdTexture",B._indirectTexture,w),Mt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Mt.setValue(C,"batchingColorTexture",B._colorsTexture,w));let Pi=F.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Fe.update(B,F,Yi),(xi||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,Mt.setValue(C,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Di.envMap.value=Ee,Di.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(Di.envMapIntensity.value=L.environmentIntensity),xi&&(Mt.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Tv(Di,Ea),te&&H.fog===!0&&he.refreshFogUniforms(Di,te),he.refreshMaterialUniforms(Di,H,W,ne,p.state.transmissionRenderTarget[E.id]),tl.upload(C,Ff(Ue),Di,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tl.upload(C,Ff(Ue),Di,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(C,"center",B.center),Mt.setValue(C,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(C,"normalMatrix",B.normalMatrix),Mt.setValue(C,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let si=H.uniformsGroups;for(let hi=0,Ch=si.length;hi<Ch;hi++){let cr=si[hi];U.update(cr,Yi),U.bind(cr,Yi)}}return Yi}function Tv(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function wv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,L,F){fe.get(E.texture).__webglTexture=L,fe.get(E.depthTexture).__webglTexture=F;let H=fe.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=F===void 0,H.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){let F=fe.get(E);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0};let Cv=C.createFramebuffer();this.setRenderTarget=function(E,L=0,F=0){P=E,T=L,R=F;let H=!0,B=null,te=!1,de=!1;if(E){let Ee=fe.get(E);if(Ee.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Ee.__hasExternalTextures)w.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ie=E.depthTexture;if(Ee.__boundDepthTexture!==Ie){if(Ie!==null&&fe.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}let He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(de=!0);let ke=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[L])?B=ke[L][F]:B=ke[L],te=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?B=fe.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[F]:B=ke,I.copy(E.viewport),k.copy(E.scissor),N=E.scissorTest}else I.copy(Me).multiplyScalar(W).floor(),k.copy(Ve).multiplyScalar(W).floor(),N=ct;if(F!==0&&(B=Cv),se.bindFramebuffer(C.FRAMEBUFFER,B)&&H&&se.drawBuffers(E,B),se.viewport(I),se.scissor(k),se.setScissorTest(N),te){let Ee=fe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ee.__webglTexture,F)}else if(de){let Ee=fe.get(E.texture),He=L;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.__webglTexture,F,He)}else if(E!==null&&F!==0){let Ee=fe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ee.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(E,L,F,H,B,te,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){se.bindFramebuffer(C.FRAMEBUFFER,ye);try{let Ee=E.texture,He=Ee.format,ke=Ee.type;if(!_e.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-H&&F>=0&&F<=E.height-B&&C.readPixels(L,F,H,B,qe.convert(He),qe.convert(ke),te)}finally{let Ee=P!==null?fe.get(P).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=function(E,L,F,H,B,te,de){return ui(this,null,function*(){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){let Ee=E.texture,He=Ee.format,ke=Ee.type;if(!_e.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-H&&F>=0&&F<=E.height-B){se.bindFramebuffer(C.FRAMEBUFFER,ye);let Ie=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ie),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),C.readPixels(L,F,H,B,qe.convert(He),qe.convert(ke),0);let st=P!==null?fe.get(P).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,st);let ht=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield Dp(C,ht,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ie),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te),C.deleteBuffer(Ie),C.deleteSync(ht),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(E,L=null,F=0){E.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-F),B=Math.floor(E.image.width*H),te=Math.floor(E.image.height*H),de=L!==null?L.x:0,ye=L!==null?L.y:0;w.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,de,ye,B,te),se.unbindTexture()};let Rv=C.createFramebuffer(),Dv=C.createFramebuffer();this.copyTextureToTexture=function(E,L,F=null,H=null,B=0,te=null){E.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],L=arguments[2],te=arguments[3]||0,F=null),te===null&&(B!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=B,B=0):te=0);let de,ye,Ee,He,ke,Ie,st,ht,Lt,Rt=E.isCompressedTexture?E.mipmaps[te]:E.image;if(F!==null)de=F.max.x-F.min.x,ye=F.max.y-F.min.y,Ee=F.isBox3?F.max.z-F.min.z:1,He=F.min.x,ke=F.min.y,Ie=F.isBox3?F.min.z:0;else{let Pi=Math.pow(2,-B);de=Math.floor(Rt.width*Pi),ye=Math.floor(Rt.height*Pi),E.isDataArrayTexture?Ee=Rt.depth:E.isData3DTexture?Ee=Math.floor(Rt.depth*Pi):Ee=1,He=0,ke=0,Ie=0}H!==null?(st=H.x,ht=H.y,Lt=H.z):(st=0,ht=0,Lt=0);let at=qe.convert(L.format),Ue=qe.convert(L.type),qt;L.isData3DTexture?(w.setTexture3D(L,0),qt=C.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),qt=C.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),qt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let ut=C.getParameter(C.UNPACK_ROW_LENGTH),Yi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ns=C.getParameter(C.UNPACK_SKIP_PIXELS),xi=C.getParameter(C.UNPACK_SKIP_ROWS),Ea=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,He),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie);let Mt=E.isDataArrayTexture||E.isData3DTexture,Di=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){let Pi=fe.get(E),si=fe.get(L),hi=fe.get(Pi.__renderTarget),Ch=fe.get(si.__renderTarget);se.bindFramebuffer(C.READ_FRAMEBUFFER,hi.__webglFramebuffer),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ch.__webglFramebuffer);for(let cr=0;cr<Ee;cr++)Mt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fe.get(E).__webglTexture,B,Ie+cr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fe.get(L).__webglTexture,te,Lt+cr)),C.blitFramebuffer(He,ke,de,ye,st,ht,de,ye,C.DEPTH_BUFFER_BIT,C.NEAREST);se.bindFramebuffer(C.READ_FRAMEBUFFER,null),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||fe.has(E)){let Pi=fe.get(E),si=fe.get(L);se.bindFramebuffer(C.READ_FRAMEBUFFER,Rv),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Dv);for(let hi=0;hi<Ee;hi++)Mt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pi.__webglTexture,B,Ie+hi):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pi.__webglTexture,B),Di?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,si.__webglTexture,te,Lt+hi):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,si.__webglTexture,te),B!==0?C.blitFramebuffer(He,ke,de,ye,st,ht,de,ye,C.COLOR_BUFFER_BIT,C.NEAREST):Di?C.copyTexSubImage3D(qt,te,st,ht,Lt+hi,He,ke,de,ye):C.copyTexSubImage2D(qt,te,st,ht,He,ke,de,ye);se.bindFramebuffer(C.READ_FRAMEBUFFER,null),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Di?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(qt,te,st,ht,Lt,de,ye,Ee,at,Ue,Rt.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(qt,te,st,ht,Lt,de,ye,Ee,at,Rt.data):C.texSubImage3D(qt,te,st,ht,Lt,de,ye,Ee,at,Ue,Rt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,te,st,ht,de,ye,at,Ue,Rt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,te,st,ht,Rt.width,Rt.height,at,Rt.data):C.texSubImage2D(C.TEXTURE_2D,te,st,ht,de,ye,at,Ue,Rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Yi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ns),C.pixelStorei(C.UNPACK_SKIP_ROWS,xi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ea),te===0&&L.generateMipmaps&&C.generateMipmap(qt),se.unbindTexture()},this.copyTextureToTexture3D=function(E,L,F=null,H=null,B=0){return E.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,H=arguments[1]||null,E=arguments[2],L=arguments[3],B=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,F,H,B)},this.initRenderTarget=function(E){fe.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,se.reset(),vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Fg={type:"change"},gf={type:"start"},Hg={type:"end"},ph=new hn,zg=new zi,$S=Math.cos(70*Cl.DEG2RAD),Gt=new b,vi=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vf=1e-6,xf=class extends el{constructor(e,t=null){super(e,t);this.state=gt.NONE,this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new Ft,this._lastTargetPosition=new b,this._quat=new Ft().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pa,this._sphericalDelta=new pa,this._scale=1,this._panOffset=new b,this._rotateStart=new z,this._rotateEnd=new z,this._rotateDelta=new z,this._panStart=new z,this._panEnd=new z,this._panDelta=new z,this._dollyStart=new z,this._dollyEnd=new z,this._dollyDelta=new z,this._dollyDirection=new b,this._mouse=new z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tE.bind(this),this._onPointerDown=eE.bind(this),this._onPointerUp=iE.bind(this),this._onContextMenu=cE.bind(this),this._onMouseWheel=sE.bind(this),this._onKeyDown=aE.bind(this),this._onTouchStart=oE.bind(this),this._onTouchMove=lE.bind(this),this._onMouseDown=nE.bind(this),this._onMouseMove=rE.bind(this),this._interceptControlDown=hE.bind(this),this._interceptControlUp=uE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fg),this.update(),this.state=gt.NONE}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=vi:i>Math.PI&&(i-=vi),n<-Math.PI?n+=vi:n>Math.PI&&(n-=vi),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Gt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new b(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new b(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ph.origin.copy(this.object.position),ph.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ph.direction))<$S?this.object.lookAt(this.target):(zg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ph.intersectPlane(zg,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vf||this._lastTargetPosition.distanceToSquared(this.target)>vf?(this.dispatchEvent(Fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vi/60*this.autoRotateSpeed*e:vi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Gt.copy(n).sub(this.target);let s=Gt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(n,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function eE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function tE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function iE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hg),this.state=gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=gt.DOLLY;break;case _i.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=gt.ROTATE}break;case _i.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(gf)}function rE(r){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sE(r){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(r.preventDefault(),this.dispatchEvent(gf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Hg))}function aE(r){this.enabled!==!1&&this._handleKeyDown(r)}function oE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=gt.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=gt.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(gf)}function lE(r){switch(this._trackPointer(r),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=gt.NONE}}function cE(r){this.enabled!==!1&&r.preventDefault()}function hE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gn=1;function kg(r){gn=r}function _f(){return gn}function en(r){return[r[0]*gn,r[1]*gn,r[2]*gn]}function yf(r,e,t){return[r*gn,e*gn,t*gn]}function Af(r){return r.multiplyScalar(gn)}function tn(r){return gn*r}var mh=class{constructor(e){this.context=e,this.followMesh=void 0;let t=this.context.container.width,i=this.context.container.height,n=new Tt(50,t/i,tn(1e-5),tn(2e3));this.camera=n;let s=this.context.simulation.getRenderer(),a=new xf(this.camera,s.domElement);a.enableDamping=!0,a.dampingFactor=.05,a.enablePan=!0,a.zoomSpeed=1.5,a.panSpeed=2,a.rotateSpeed=2,a.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},a.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_ROTATE},this.cameraControls=a}followObject(e,t){let i=e.get3jsObjects()[0];this.cameraControls.enablePan=!1;let n=en(t);this.camera.position.add(new b(n[0],n[1],n[2])),this.cameraControls.update(),this.followMesh=i}stopFollowingObject(){this.followMesh&&(this.followMesh.remove(this.camera),this.followMesh=void 0,this.cameraControls.enablePan=!0)}isFollowingObject(){return!!this.followMesh}get3jsCamera(){return this.camera}get3jsCameraControls(){return this.cameraControls}update(){if(this.isFollowingObject()){let e=this.followMesh.position.clone(),t=e.clone().sub(this.cameraControls.target);this.camera.position.add(t),this.cameraControls.target.set(e.x,e.y,e.z)}this.cameraControls.update(),this.camera.updateMatrixWorld()}};var yt=class{static rad(e){return e*Math.PI/180}static deg(e){return e*180/Math.PI}static hoursToDeg(e){return e*15}static sexagesimalToDecimalRa(e,t,i){return e*15+t/4+i/240}static sexagesimalToDecimalDec(e,t,i,n=!1){let s=n?-1:1;return e+t/60+s*i/3600}static valToSexagesimalRa(e){let t=Math.trunc(e/15),i=Math.trunc((e-t*15)*4),n=(e-t*15-i/4)*240;return[t,i,n]}static decimalToSexagesimalDec(e,t=!1){let i=t?-1:1,n=Math.trunc(e),s=Math.trunc((e-i*n)*60*i),a=(e-i*n-i*s/60)*3600*i;return[n,s,a]}static kmToAu(e){return e/1495978707e-1}static auToKm(e){return e*1495978707e-1}};var Sf=2451545,xa=class{static sphericalToCartesian(e,t,i){return[i*Math.cos(e)*Math.cos(t),i*Math.sin(e)*Math.cos(t),i*Math.sin(t)]}static equatorialToEcliptic_Cartesian(e,t,i,n){return[e,Math.cos(n)*t+Math.sin(n)*i,-Math.sin(n)*t+Math.cos(n)*i]}static eclipticToEquatorial_Cartesian(e,t,i,n){return[e,Math.cos(n)*t+-Math.sin(n)*i,Math.sin(n)*t+Math.cos(n)*i]}static getNutationAndObliquity(e=Sf){let t=(e-Sf)/36525,i=yt.rad(125.04452-1934.136261*t+.0020708*t*t+(t*t+t)/45e4),n=yt.rad(280.4665+36000.7698*t),s=yt.rad(218.3165+481267.8813*t),a=-17.2/3600*Math.sin(i)- -1.32/3600*Math.sin(2*n)-.23/3600*Math.sin(2*s)+yt.deg(.21/3600*Math.sin(2*i)),o=23+26/60+21.448/3600-46.815/3600*t-59e-5/3600*t*t+.001813/3600*t*t*t,l=9.2/3600*Math.cos(i)+.57/3600*Math.cos(2*n)+.1/3600*Math.cos(2*s)-.09/3600*Math.cos(2*i),c=o+l;return{nutation:yt.rad(a),obliquity:yt.rad(c)}}static getObliquity(e=Sf){return this.getNutationAndObliquity(e).obliquity}};var dE=149597870700,fE=86400,pE=new Set(["a","e","i","q","epoch","period","tp","ma","n","L","om","w","wBar","GM"]),mE=new Set(["i","ma","n","L","om","w","wBar"]),Jr={SUN:13271244004193939e4,MERCURY:2203178000000002e-2,VENUS:32485859200000006e-2,EARTH_MOON:4035032355022598e-1,MARS:4282837521400002e-2,JUPITER:126712764800000210,SATURN:379405852e8,URANUS:5794548600000008,NEPTUNE:6836527100580024,PLUTO_CHARON:9770000000000007e-4};function Et(r){return typeof r!="undefined"&&Number.isFinite(r)}var jt=class{constructor(e,t="rad",i=!1){this.attrs={},this.locked=!1;for(let n in e)if(e.hasOwnProperty(n)){let s=mE.has(n)?t:null;this.set(n,e[n],s)}typeof this.attrs.GM=="undefined"&&(this.attrs.GM=Jr.SUN),this.fill(),this.get("e")>=.999&&typeof this.getUnsafe("tp")=="undefined"&&console.warn('You must specify "tp" (time of perihelion) for highly eccentric orbits'),this.locked=i}set(e,t,i="rad"){if(this.locked)throw new Error("Attempted to modify locked (immutable) Ephem object");return pE.has(e)?(i==="deg"?this.attrs[e]=t*Math.PI/180:this.attrs[e]=t,!0):(console.warn(`Invalid ephem attr: ${e}`),!1)}getUnsafe(e,t="rad"){if(t==="deg"){let i=this.attrs[e];return typeof i=="undefined"?void 0:i*180/Math.PI}return this.attrs[e]}get(e,t="rad"){let i=this.getUnsafe(e,t);if(typeof i=="undefined")throw console.info(this.attrs),new Error(`Attempted to get ephemeris value '${e}' but it was undefined`);return i}fill(){let e=this.getUnsafe("e");if(!Et(e))throw console.info(this.attrs),new Error('Must define eccentricity "e" in an orbit');let t=this.getUnsafe("a"),i=this.getUnsafe("q");if(Et(t)){if(!Et(i)){if(e>=1)throw new Error('Must provide perihelion distance "q" if eccentricity "e" is greater than 1');i=t*(1-e),this.set("q",i)}}else if(Et(i))t=i/(1-e),this.set("a",t);else throw new Error('Must define semimajor axis "a" or perihelion distance "q" in an orbit');let n=this.getUnsafe("w"),s=this.getUnsafe("wBar"),a=this.getUnsafe("om");Et(n)&&Et(a)&&!Et(s)?(s=n+a,this.set("wBar",s)):Et(s)&&Et(a)&&!Et(n)?(n=s-a,this.set("w",n)):Et(n)&&Et(s)&&!Et(a)&&(a=s-n,this.set("om",a));let o=t*dE,l=this.getUnsafe("n"),c=this.getUnsafe("GM"),h=this.getUnsafe("period");if(!Et(h)&&Et(t)){if(!Et(c))throw new Error("Expected ephemeris attribute GM to be set");h=2*Math.PI*Math.sqrt(o*o*o/c)/fE,this.set("period",h)}if(e<1)if(Et(h)&&!Et(l)){let f=2*Math.PI/h;this.set("n",f)}else Et(l)&&!Et(h)&&this.set("period",2*Math.PI/l);let u=this.getUnsafe("ma"),d=this.getUnsafe("L");!Et(d)&&Et(a)&&Et(n)&&Et(u)&&(d=a+n+u,this.set("L",d)),Et(u)||this.set("ma",d-s)}lock(){this.locked=!0}copy(){return new jt({GM:this.getUnsafe("GM"),epoch:this.getUnsafe("epoch"),a:this.getUnsafe("a"),e:this.getUnsafe("e"),i:this.getUnsafe("i"),om:this.getUnsafe("om"),ma:this.getUnsafe("ma"),w:this.getUnsafe("w"),period:this.getUnsafe("period")},"rad")}};function gh(r,e,t,i,n,s){if(r===void 0)throw"data object is undefined";if(!Array.isArray(r))throw"data object must be an array";if(t>=i)throw"first row must be greater than last row";if(t<0)throw"first row must be greater than zero";if(i>r.length-1)throw"last row must be ";if(!Array.isArray(r[t]))throw"data in rows must be array data";let a=r[0].length-1;if(n<0||n>a)throw`xIndex has to be between 0 and ${a}: ${n}`;if(s<0||s>a)throw`yIndex has to be between 0 and ${a}: ${s}`;let o=0;for(let l=t;l<=i;l++){let c=1;for(let h=t;h<=i;h++)h!==l&&(c*=(e-r[h][n])/(r[l][n]-r[h][n]));o+=c*r[l][s]}return o}var gE=(r,e)=>r-e,vE="{{assets}}/sprites/fuzzyparticle.png";function nl(r,e){return r.replace("{{assets}}",`${e}/assets`).replace("{{data}}",`${e}/data`)}function $r(r,e){return nl(r||vE,e)}function Gg(r,e){let t=$r(r,e),i=new wi().load(t);return i.colorSpace=Oe,i}function Vg(){return window.location.href.indexOf("localhost")>-1?"/src/":"https://typpo.github.io/spacekit/src"}function Wg(r,e,t=gE){if(r===void 0)throw"data object is undefined";if(!Array.isArray(r))throw"data object must be an array";if(e===void 0)throw"value object must be defined";if(t===void 0)throw"comparer must be defined";let i=0,n=r.length;for(;i<=n;){let s=Math.floor((i+n)/2);if(s===r.length)return s;let a=t(r[s],e);if(a<0)i=s+1;else if(a>0)n=s-1;else return s}return~i}var Xg=20,xE=(r,e)=>r[0]-e,Ef={distance:"au",time:"day"},_E="cartesianposvel",yE="lagrange",AE=5,SE=new Set(["km","au"]),EE=new Set(["cartesianposvel"]),ME=new Set(["lagrange"]),bE=new Set(["day","sec"]),Ci=class{constructor(e){if(this.units=JSON.parse(JSON.stringify(Ef)),this.ephemType=_E,this.interpolationType=yE,this.interpolationOrder=AE,!e)throw new Error("EphemerisTable must be initialized with an ephemeris data structure");if(!e.data||!Array.isArray(e.data)||e.data.length===0||!Array.isArray(e.data[0]))throw new Error("EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data");if(this.data=JSON.parse(JSON.stringify(e.data)),e.distanceUnits){if(!SE.has(e.distanceUnits))throw new Error(`Unknown distance units: ${e.distanceUnits}`);this.units.distance=e.distanceUnits}if(e.timeUnits){if(!bE.has(e.timeUnits))throw new Error(`Unknown time units: ${e.timeUnits}`);this.units.time=e.timeUnits}if(e.ephemerisType){if(!EE.has(e.ephemerisType))throw new Error(`Unknown ephemeris type: ${e.ephemerisType}`);this.ephemType=e.ephemerisType}if(e.interpolationType){if(!ME.has(e.interpolationType))throw new Error(`Unknown interpolation type: ${e.interpolationType}`);this.interpolationType=e.interpolationType}if(e.interpolationOrder!==void 0){if(e.interpolationOrder<1||e.interpolationOrder>Xg)throw new Error(`Interpolation order must be >0 and <${Xg}: ${e.interpolationOrder}`);this.interpolationOrder=e.interpolationOrder}if(this.units.distance!==Ef.distance||this.units.time!==Ef.time){let t=this.calcDistanceMultiplier(this.units.distance),i=this.calcTimeMultiplier(this.units.time);this.data.forEach(n=>{n[1]*=t,n[2]*=t,n[3]*=t,n[4]*=t*i,n[5]*=t*i,n[6]*=t*i})}}getStartJd(){return this.data[0][0]}getStopJd(){return this.data[this.data.length-1][0]}getPositionAtTime(e){if(e<=this.data[0][0])return[this.data[0][1],this.data[0][2],this.data[0][3]];let t=this.data[this.data.length-1];if(e>=t[0])return[t[1],t[2],t[3]];let{startIndex:i,stopIndex:n}=this.calcBoundingIndices(e),s=gh(this.data,e,i,n,0,1),a=gh(this.data,e,i,n,0,2),o=gh(this.data,e,i,n,0,3);return[s,a,o]}getPositions(e,t,i){if(e>t)throw new Error("Requested start needs to be after requested stop");if(i<=0)throw new Error("Step days needs to be greater than zero");let n=[];for(let s=e;s<=t;s+=i)n.push(this.getPositionAtTime(s));return n}calcDistanceMultiplier(e){switch(e){case"au":return 1;case"km":return yt.kmToAu(1);default:throw new Error("Unknown distance unit type: "+e)}}calcTimeMultiplier(e){switch(e){case"day":return 1;case"sec":return 1/86400;default:throw new Error("Unknown time unit type: "+e)}}calcBoundingIndices(e){let t=Math.floor(this.interpolationOrder/2),i=Wg(this.data,e,xE);i<0&&(i=~i-1);let n=i-t;n<0&&(n=0);let s=n+Number(this.interpolationOrder);return s>=this.data.length&&(s=this.data.length-1,this.data.length>t&&(n=s-t)),{startIndex:n,stopIndex:s}}};var Vi={MERCURY:new jt({epoch:24584265e-1,a:.3870968969437096,e:.2056515875393916,i:7.003891682749818,om:48.30774804443502,w:29.17940253442659,ma:256.190975209273,period:87.969257},"deg",!0),VENUS:new jt({epoch:24584265e-1,a:.7233458663591554,e:.006762510759617694,i:3.394567787211735,om:76.62534150657346,w:54.74567447560867,ma:275.6687596099721,period:224.70079922},"deg",!0),EARTH:new jt({epoch:2451545,a:1.00000261,e:.01671123,i:-1531e-8,om:0,wBar:102.93768193,L:100.46457166,period:365.256363004},"deg",!0),MOON:new jt({GM:Jr.EARTH_MOON,epoch:24586215e-1,a:.002582517063772124,e:.04582543645168888,i:5.102060246928811,om:108.5916732144811,w:61.80561793729225,ma:50.53270083636792,period:27.321582},"deg",!0),MARS:new jt({epoch:24584265e-1,a:1.52371401537107,e:.09336741335309606,i:1.848141099825311,om:49.50420572080223,w:286.6965847685386,ma:25.38237617924876,period:686.98},"deg",!0),JUPITER:new jt({epoch:24584265e-1,a:5.20180355911023,e:.0489912558249006,i:1.303560894624275,om:100.5203828847816,w:273.736301845404,ma:231.939544389401,period:4332.589},"deg",!0),SATURN:new jt({epoch:24584265e-1,a:9.577177295536776,e:.05101889921719987,i:2.482782449972317,om:113.6154964073247,w:339.4422648650336,ma:187.0970898012944,period:10755.698},"deg",!0),URANUS:new jt({epoch:24584265e-1,a:19.14496966635462,e:.04832662948112808,i:.7697511134483724,om:74.14239045667875,w:99.42704504702185,ma:220.2603033874267,period:30685.4},"deg",!0),NEPTUNE:new jt({epoch:24584265e-1,a:30.0962226342805,e:.00736257118719377,i:1.774569249829094,om:131.8695882492132,w:258.6226409499831,ma:315.2804988924479,period:60189},"deg",!0),PLUTO:new jt({epoch:24540005e-1,a:39.4450697257,e:.250248713478,i:17.0890009196,om:110.376957955,w:112.597141677,ma:25.2471897122},"deg",!0)},vh=class{constructor(e){this._simulation=e,this._context=e.getContext(),this._satellitesByPlanet={};let t=nl("{{data}}/processed/natural-satellites.json",this._context.options.basePath);this._readyPromise=new Promise((i,n)=>{fetch(t).then(s=>s.json()).then(s=>{s.forEach(a=>{let o=a.Planet.toLowerCase();this._satellitesByPlanet[o]||(this._satellitesByPlanet[o]=[]);let l;switch(a["Element Type"]){case"Ecliptic":break;case"Equatorial":l="equatorial";break;case"Laplace":l="equatorial";break;default:console.warn(`Ephemeris type not yet implemented: ${l}`);return}let c;switch(a.Planet){case"Earth":c=Jr.EARTH_MOON;break;case"Pluto":c=Jr.PLUTO_CHARON;break;default:c=Jr[a.Planet.toUpperCase()]}c||console.error(`Could not look up GM for ${a.Planet}`);let h=new jt({GM:c,epoch:Number(a["Epoch JD"]),a:yt.kmToAu(Number(a.a)),e:Number(a.e),i:Number(a.i),w:Number(a.w),om:Number(a.node),ma:Number(a.M)},"deg",!0);this._satellitesByPlanet[o].push({name:a["Sat."],elementType:a["Element Type"],tags:new Set(a.tags.split(",")),ephem:h})}),console.info("Loaded",s.length,"natural satellites"),i(this)}).catch(s=>{n(s)})})}getSatellitesForPlanet(e){return this._satellitesByPlanet[e.toLowerCase()]}load(){return this._readyPromise}};var Qg=Yf(Mf());var It;(function(s){s[s.UNKNOWN=0]="UNKNOWN",s[s.PARABOLIC=1]="PARABOLIC",s[s.HYPERBOLIC=2]="HYPERBOLIC",s[s.ELLIPTICAL=3]="ELLIPTICAL",s[s.TABLE=4]="TABLE"})(It||(It={}));var{sin:es,cos:Fn,sqrt:sr}=Math,Kg=10,DE=360,PE=1,Jg=!1,IE={leadDurationYears:Kg,trailDurationYears:Kg,numberSamplePoints:DE,eclipticLineSparsity:PE,drawHeliocentric:Jg};function xh(r){return Math.exp(Math.log(r)/3)}var Hn=class{constructor(e,t){var i;this.ephem=e,this.options=t||{},this.options.orbitPathSettings=Object.assign({},IE,(i=this.options.orbitPathSettings)!=null?i:{}),this.orbitPoints=void 0,this.eclipticDropLines=void 0,this.orbitShape=void 0,this.orbitStart=0,this.orbitStop=0,this.orbitType=Hn.getOrbitType(this.ephem)}isHeliocentric(){var e,t;return(t=(e=this.options.orbitPathSettings)==null?void 0:e.drawHeliocentric)!=null?t:Jg}getPositionAtTime(e,t=!1){switch(this.orbitType){case 1:return this.getPositionAtTimeNearParabolic(e,t);case 2:return this.getPositionAtTimeHyperbolic(e,t);case 3:return this.getPositionAtTimeElliptical(e,t);case 4:return this.getPositionAtTimeTable(e,t);default:throw new Error("No handler for this type of orbit")}}getPositionAtTimeParabolic(e,t=!1){let i=this.ephem;if(i instanceof Ci)throw new Error("Attempted to compute coordinates from ephemeris table");let n=.01720209895,s=i.get("q"),o=(e-i.get("tp"))*(n/sr(2))/sr(s*s*s),l=1.5*o,c=sr(1+l*l),h=xh(c+l)-xh(c-l),u=2*Math.atan(h),d=s*(1+h*h);return this.vectorToHeliocentric(u,d)}getPositionAtTimeNearParabolic(e,t=!1){let i=this.ephem;if(i instanceof Ci)throw new Error("Attempted to compute coordinates from ephemeris table");let n=.01720209895,s=i.get("e"),a=i.get("q"),o=e-i.get("tp"),l=.75*o*n*sr((1+s)/(a*a*a)),c=sr(1+l*l),h=xh(c+l)-xh(c-l),u=(1-s)/(1+s),d=2/3+2/5*h*h,f=7/5+33/35*h*h+37/175*rn(h,4),m=h*h*(432/175+956/1125*h*h+84/1575*rn(h,4)),v=h*h/(1+h*h),g=u*v*v,p=h*(1+u*v*(d+f*g+m*g*g)),y=2*Math.atan(p),x=a*(1+p*p)/(1+p*p*u);return this.vectorToHeliocentric(y,x)}getPositionAtTimeHyperbolic(e,t=!1){let i=this.ephem;if(i instanceof Ci)throw new Error("Attempted to compute coordinates from ephemeris table");let n=i.get("e"),s=i.get("a"),a=i.get("ma"),o=i.get("n","rad"),l=i.get("epoch"),c=e-l,h=a+o*c,u=h;for(let v=0;v<100;v++){let g=(h+n*(u*Math.cosh(u)-Math.sinh(u)))/(n*Math.cosh(u)-1),p=Math.abs(g-u);if(u=g,p<1e-7)break}let d=u,f=2*Math.atan(sr((n+1)/(n-1)))*Math.tanh(d/2),m=s*(1-n*n)/(1+n*Fn(f));return this.vectorToHeliocentric(f,m)}getPositionAtTimeElliptical(e,t=!1){let i=this.ephem;if(i instanceof Ci)throw new Error("Attempted to compute coordinates from ephemeris table");let n=i.get("e"),s=i.get("ma","rad"),a=i.get("n","rad"),o=i.get("epoch"),l=e-o,c=s+a*l;t&&(console.info("period=",i.get("period")),console.info("n=",a),console.info("ma=",s),console.info("d=",l),console.info("M=",c));let h=c;for(let v=0;v<100;v++){let g=c+n*es(h),p=Math.abs(g-h);if(h=g,p<1e-7)break}let u=h,d=2*Math.atan(sr((1+n)/(1-n))*Math.tan(u/2)),m=i.get("a")*(1-n*n)/(1+n*Fn(d));return this.vectorToHeliocentric(d,m)}getPositionAtTimeTable(e,t=!1){if(this.ephem instanceof Ci){let i=this.ephem.getPositionAtTime(e);return yf(i[0],i[1],i[2])}throw new Error("Attempted to read ephemeris table of non-table data")}vectorToHeliocentric(e,t){let i=this.ephem;if(i instanceof Ci)throw new Error("Attempted to compute coordinates from ephemeris table");let n=i.get("i","rad"),s=i.get("om","rad"),a=i.get("wBar","rad"),o=t*(Fn(s)*Fn(e+a-s)-es(s)*es(e+a-s)*Fn(n)),l=t*(es(s)*Fn(e+a-s)+Fn(s)*es(e+a-s)*Fn(n)),c=t*(es(e+a-s)*es(n));return yf(o,l,c)}needsUpdateForTime(e){return this.orbitType===4?e<this.orbitStart||e>this.orbitStop:!1}getOrbitShape(e,t=!1,i){var s,a,o,l,c;if(t&&(this.orbitShape&&(this.orbitShape.geometry.dispose(),this.orbitShape.material.dispose()),this.orbitShape=void 0,this.orbitPoints=void 0,this.eclipticDropLines&&(this.eclipticDropLines.geometry.dispose(),this.eclipticDropLines.material.dispose()),this.eclipticDropLines=void 0),this.orbitShape)return this.orbitShape;if(this.orbitType===4&&this.ephem instanceof Ci)this.orbitStart=this.ephem.getStartJd(),this.orbitStop=this.ephem.getStopJd();else if(this.orbitType!==4&&!(this.ephem instanceof Ci)){let h=(s=e!=null?e:this.ephem.getUnsafe("tp"))!=null?s:Qg.default.toJulianDay(new Date);this.orbitStart=h-this.options.orbitPathSettings.trailDurationYears*365.25,this.orbitStop=h+this.options.orbitPathSettings.leadDurationYears*365.25}else throw new Error("if this.orbitType == OrbitType.TABLE, then this.ephem needs to be an instance of EphemerisTable and vice versa");let n=(this.orbitStop-this.orbitStart)/this.options.orbitPathSettings.numberSamplePoints;switch(this.orbitType){case 3:return((a=this.options.orbitPathSettings)==null?void 0:a.drawHeliocentric)&&i?this.getEllipseAround(this.orbitStart,this.orbitStop,n,i):this.getEllipse();case 2:return this.getLine(this.getPositionAtTimeHyperbolic.bind(this),this.orbitStart,this.orbitStop,n,((o=this.options.orbitPathSettings)==null?void 0:o.drawHeliocentric)?i:void 0);case 1:return this.getLine(this.getPositionAtTimeNearParabolic.bind(this),this.orbitStart,this.orbitStop,n,((l=this.options.orbitPathSettings)==null?void 0:l.drawHeliocentric)?i:void 0);case 4:return this.getTableOrbit(this.orbitStart,this.orbitStop,n,((c=this.options.orbitPathSettings)==null?void 0:c.drawHeliocentric)?i:void 0);default:throw new Error("Unknown orbit shape")}}getLine(e,t,i,n,s){let a=[];for(let o=t;o<=i;o+=n){let l=e(o);if(s){let c=s.getPosition(o);l[0]+=c[0],l[1]+=c[1],l[2]+=c[2]}a.push(new b(l[0],l[1],l[2]))}return this.generateAndCacheOrbitShape(a)}getTableOrbit(e,t,i,n){if(this.ephem instanceof jt)throw new Error("Attempted to compute table orbit on non-table ephemeris");let a=this.ephem.getPositions(e,t,i).map(o=>en(o)).map(o=>new b(o[0],o[1],o[2]));return n&&a.forEach((o,l)=>{let c=n.getPosition(e+l*i);o.x+=c[0],o.y+=c[1],o.z+=c[2]}),this.generateAndCacheOrbitShape(a)}getEllipse(){let e=this.getEllipsePoints();return this.generateAndCacheOrbitShape(e)}getEllipseAround(e,t,i,n){let s=[];for(let a=e;a<=t;a+=i){let o=n.getPosition(a),l=this.getPositionAtTimeElliptical(a,!1);s.push(new b(o[0]+l[0],o[1]+l[1],o[2]+l[2]))}return this.generateAndCacheOrbitShape(s)}getEllipsePoints(){let e=this.ephem;if(e instanceof Ci)throw new Error("Attempted to compute coordinates from ephemeris table");let t=e.get("a"),i=e.get("e"),n=Math.PI*2,s=n/this.options.orbitPathSettings.numberSamplePoints,a=[];for(let o=0;o<n;o+=s){let l=2*Math.atan(sr((1+i)/(1-i))*Math.tan(o/2)),c=t*(1-i*i)/(1+i*Fn(l)),h=this.vectorToHeliocentric(l,c);(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))&&(console.error("NaN position value - you may have bad or incomplete data in the following ephemeris:"),console.error(e)),a.push(new b(h[0],h[1],h[2]))}return a.push(a[0]),a}generateAndCacheOrbitShape(e){return this.orbitShape&&(this.orbitShape.geometry.dispose(),this.orbitShape.material.dispose()),this.orbitPoints=e,this.orbitShape=new mi(new we().setFromPoints(e),new _t({color:new re(this.options.color||4473924)})),this.orbitShape}getLinesToEcliptic(){if(this.eclipticDropLines)return this.eclipticDropLines;this.orbitPoints||this.getOrbitShape();let e=this.orbitPoints||[],t=[];e.forEach((n,s)=>{var a,o;s===e.length-1&&this.orbitType===3||s%((o=(a=this.options.orbitPathSettings)==null?void 0:a.eclipticLineSparsity)!=null?o:1)!=0||(t.push(n),t.push(new b(n.x,n.y,0)))});let i=new we().setFromPoints(t);return this.eclipticDropLines=new Zt(i,new _t({color:this.options.eclipticLineColor||3355443,blending:sn})),this.eclipticDropLines}getHexColor(){return this.getOrbitShape().material.color.getHex()}setHexColor(e){this.getOrbitShape().material.color=new re(e)}getVisibility(){return this.getOrbitShape().visible}setVisibility(e){this.getOrbitShape().visible=e,this.getLinesToEcliptic().visible=e}removalCleanup(){this.orbitShape&&(this.orbitShape.geometry.dispose(),this.orbitShape.material.dispose()),this.eclipticDropLines&&(this.eclipticDropLines.geometry.dispose(),this.eclipticDropLines.material.dispose())}static getOrbitType(e){if(e instanceof Ci)return 4;let t=e.get("e");return t>=.999&&t<1.2?1:t>1.2?2:3}};var Th=Yf(Mf());var rl=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";r=h}var n=(performance||Date).now(),s=n,a=0,o=t(new rl.Panel("FPS","#0ff","#002")),l=t(new rl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new rl.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){n=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-n,200),h>=s+1e3&&(o.update(a*1e3/(h-s),100),s=h,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:i}};rl.Panel=function(r,e,t){var i=1/0,n=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,d=15*a,f=74*a,m=30*a,v=document.createElement("canvas");v.width=o,v.height=l,v.style.cssText="width:80px;height:48px";var g=v.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=t,g.fillRect(0,0,o,l),g.fillStyle=e,g.fillText(r,c,h),g.fillRect(u,d,f,m),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(u,d,f,m),{dom:v,update:function(p,y){i=Math.min(i,p),n=Math.max(n,p),g.fillStyle=t,g.globalAlpha=1,g.fillRect(0,0,o,d),g.fillStyle=e,g.fillText(s(p)+" "+r+" ("+s(i)+"-"+s(n)+")",c,h),g.drawImage(v,u+a,d,f-a,m,u,d,f-a,m),g.fillRect(u+f-a,d,a,m),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(u+f-a,d,a,s((1-p/y)*m))}}};var $g=rl;var bf=1/1e3,UE=1e3,LE=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document!="undefined"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*bf}get fixedDelta(){return this._fixedDelta*bf}set fixedDelta(r){this._fixedDelta=r*UE}get elapsed(){return this._elapsed*bf}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},BE=(()=>{let r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new we;return t.setAttribute("position",new Ce(r,3)),t.setAttribute("uv",new Ce(e,2)),t})(),nn=class Tf{static get fullscreenGeometry(){return BE}constructor(e="Pass",t=new Pn,i=new Kn){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new tt(Tf.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Pn),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Bi){}render(e,t,i,n,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof mt||t instanceof St||t instanceof pt||t instanceof Tf)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},OE=class extends nn{constructor(){super("ClearMaskPass",null,null);this.needsSwap=!1}render(r,e,t,i,n){let s=r.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},NE=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,ev="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",tv=class extends Ke{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Ze(null),opacity:new Ze(1)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:NE,vertexShader:ev})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},FE=class extends nn{constructor(r,e=!0){super("CopyPass");this.fullscreenMaterial=new tv,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new mt(1,1,{minFilter:xt,magFilter:xt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,i,n){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==bt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===Oe&&(this.renderTarget.texture.colorSpace=Oe))}},iv=new re,nv=class extends nn{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null);this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,i,n){let s=this.overrideClearColor,a=this.overrideClearAlpha,o=r.getClearAlpha(),l=s!==null,c=a>=0;l?(r.getClearColor(iv),r.setClearColor(s,c?a:o)):c&&r.setClearAlpha(a),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),l?r.setClearColor(iv,o):c&&r.setClearAlpha(o)}},HE=class extends nn{constructor(r,e){super("MaskPass",r,e);this.needsSwap=!1,this.clearPass=new nv(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,i,n){let s=r.getContext(),a=r.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(r,null):(c.render(r,e),c.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(o,l)):(r.setRenderTarget(e),r.render(o,l),r.setRenderTarget(t),r.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},rv=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:n}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,n,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new FE,this.depthTexture=null,this.passes=[],this.timer=new LE,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){let e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){let e=r.getSize(new z),t=r.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===bt&&r.outputColorSpace===Oe&&(this.inputBuffer.texture.colorSpace=Oe,this.outputBuffer.texture.colorSpace=Oe,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(let n of this.passes)n.initialize(r,t,i)}}replaceRenderer(r,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(r),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(r.domElement)),t}createDepthTexture(){let r=this.depthTexture=new Cr;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=cn,r.type=ln):r.type=Li,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,i){let n=this.renderer,s=n===null?new z:n.getDrawingBufferSize(new z),a={minFilter:xt,magFilter:xt,stencilBuffer:e,depthBuffer:r,type:t},o=new mt(s.width,s.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),t===bt&&n!==null&&n.outputColorSpace===Oe&&(o.texture.colorSpace=Oe),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(r){for(let e of this.passes)e.mainScene=r}setMainCamera(r){for(let e of this.passes)e.mainCamera=r}addPass(r,e){let t=this.passes,i=this.renderer,n=i.getDrawingBufferSize(new z),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(r.setRenderer(i),r.setSize(n.width,n.height),r.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let o=this.createDepthTexture();for(r of t)r.setDepthTexture(o)}else r.setDepthTexture(this.depthTexture)}removePass(r){let e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){let s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,n=this.outputBuffer,s=!1,a,o,l;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(let c of this.passes)c.enabled&&(c.render(e,i,n,r,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,n,r,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=n,n=l),c instanceof HE?s=!0:c instanceof OE&&(s=!1))}setSize(r,e,t){let i=this.renderer,n=i.getSize(new z);(r===void 0||e===void 0)&&(r=n.width,e=n.height),(n.width!==r||n.height!==e)&&i.setSize(r,e,t);let s=i.getDrawingBufferSize(new z);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(let a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),nn.fullscreenGeometry.dispose()}},ts={NONE:0,DEPTH:1,CONVOLUTION:2},ot={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},zE=class{constructor(){this.shaderParts=new Map([[ot.FRAGMENT_HEAD,null],[ot.FRAGMENT_MAIN_UV,null],[ot.FRAGMENT_MAIN_IMAGE,null],[ot.VERTEX_HEAD,null],[ot.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ts.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Oi}};var wf=!1,sv=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Nt:t=this.materialsFlatShadedDoubleSide;break;case At:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Nt:t=this.materialsDoubleSide;break;case At:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof Ke))return r.clone();let e=r.uniforms,t=new Map;for(let n in e){let s=e[n].value;s.isRenderTargetTexture&&(e[n].value=null,t.set(n,s))}let i=r.clone();for(let n of t)e[n[0]].value=n[1],i.uniforms[n[0]].value=n[1];return i}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){let e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(let t of e)t.uniforms=Object.assign({},r.uniforms),t.side=Ui;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=At,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=Nt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=At,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=Nt,i})}}render(r,e,t){let i=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,wf){let n=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(let s of n)s[0].material=s[1];this.meshCount!==n.size&&n.clear()}else{let n=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=n}r.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return wf}static set workaroundEnabled(r){wf=r}};var ar=-1,vn=class extends Wt{constructor(r,e=ar,t=ar,i=1){super();this.resizable=r,this.baseSize=new z(1,1),this.preferredSize=new z(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new z,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let r=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==ar?t.width=e.width:e.height!==ar?t.width=Math.round(e.height*(r.width/Math.max(r.height,1))):t.width=Math.round(r.width*i),e.height!==ar?t.height=e.height:e.width!==ar?t.height=Math.round(e.width/Math.max(r.width/Math.max(r.height,1),1)):t.height=Math.round(r.height*i)}get width(){return this.effectiveSize.width}set width(r){this.preferredWidth=r}get height(){return this.effectiveSize.height}set height(r){this.preferredHeight=r}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(r){this.s!==r&&(this.s=r,this.preferredSize.setScalar(ar),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(r){this.scale=r}get baseWidth(){return this.baseSize.width}set baseWidth(r){this.baseSize.width!==r&&(this.baseSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(r){this.baseWidth=r}get baseHeight(){return this.baseSize.height}set baseHeight(r){this.baseSize.height!==r&&(this.baseSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(r){this.baseHeight=r}setBaseSize(r,e){(this.baseSize.width!==r||this.baseSize.height!==e)&&(this.baseSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(r){this.preferredSize.width!==r&&(this.preferredSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(r){this.preferredWidth=r}get preferredHeight(){return this.preferredSize.height}set preferredHeight(r){this.preferredSize.height!==r&&(this.preferredSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(r){this.preferredHeight=r}setPreferredSize(r,e){(this.preferredSize.width!==r||this.preferredSize.height!==e)&&(this.preferredSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(r){this.s=r.scale,this.baseSize.set(r.baseWidth,r.baseHeight),this.preferredSize.set(r.preferredWidth,r.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return ar}};var $e={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},kE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",GE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",VE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",WE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",XE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",YE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",jE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",qE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",ZE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",QE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",KE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",JE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",$E="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",eM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",tM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",iM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",nM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",rM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",sM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",aM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",oM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",lM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",cM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",hM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",uM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",dM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",fM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",pM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",mM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",gM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",vM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",xM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",_M=new Map([[$e.ADD,kE],[$e.ALPHA,GE],[$e.AVERAGE,VE],[$e.COLOR,WE],[$e.COLOR_BURN,XE],[$e.COLOR_DODGE,YE],[$e.DARKEN,jE],[$e.DIFFERENCE,qE],[$e.DIVIDE,ZE],[$e.DST,null],[$e.EXCLUSION,QE],[$e.HARD_LIGHT,KE],[$e.HARD_MIX,JE],[$e.HUE,$E],[$e.INVERT,eM],[$e.INVERT_RGB,tM],[$e.LIGHTEN,iM],[$e.LINEAR_BURN,nM],[$e.LINEAR_DODGE,rM],[$e.LINEAR_LIGHT,sM],[$e.LUMINOSITY,aM],[$e.MULTIPLY,oM],[$e.NEGATION,lM],[$e.NORMAL,cM],[$e.OVERLAY,hM],[$e.PIN_LIGHT,uM],[$e.REFLECT,dM],[$e.SATURATION,fM],[$e.SCREEN,pM],[$e.SOFT_LIGHT,mM],[$e.SRC,gM],[$e.SUBTRACT,vM],[$e.VIVID_LIGHT,xM]]),yM=class extends Wt{constructor(r,e=1){super();this._blendFunction=r,this.opacity=new Ze(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return _M.get(this.blendFunction)}},Cf={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},AM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,SM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",EM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],MM=class extends Ke{constructor(r=new Qe){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ze(null),texelSize:new Ze(new Qe),scale:new Ze(1),kernel:new Ze(0)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:AM,vertexShader:SM});this.setTexelSize(r.x,r.y),this.kernelSize=Cf.MEDIUM}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.inputBuffer=r}get kernelSequence(){return EM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(r){this.uniforms.scale.value=r}getScale(){return this.uniforms.scale.value}setScale(r){this.uniforms.scale.value=r}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(r){this.uniforms.kernel.value=r}setKernel(r){this.kernel=r}setTexelSize(r,e){this.uniforms.texelSize.value.set(r,e,r*.5,e*.5)}setSize(r,e){let t=1/r,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},bM=class extends nn{constructor({kernelSize:r=Cf.MEDIUM,resolutionScale:e=.5,width:t=vn.AUTO_SIZE,height:i=vn.AUTO_SIZE,resolutionX:n=t,resolutionY:s=i}={}){super("KawaseBlurPass");this.renderTargetA=new mt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new vn(this,n,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new MM,this._blurMaterial.kernelSize=r,this.copyMaterial=new tv}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(r){this._blurMaterial=r}get dithering(){return this.copyMaterial.dithering}set dithering(r){this.copyMaterial.dithering=r}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(r){this.blurMaterial.kernelSize=r}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get scale(){return this.blurMaterial.scale}set scale(r){this.blurMaterial.scale=r}getScale(){return this.blurMaterial.scale}setScale(r){this.blurMaterial.scale=r}getKernelSize(){return this.kernelSize}setKernelSize(r){this.kernelSize=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}render(r,e,t,i,n){let s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence,u=e;this.fullscreenMaterial=c;for(let d=0,f=h.length;d<f;++d){let m=(d&1)==0?o:l;c.kernel=h[d],c.inputBuffer=u.texture,r.setRenderTarget(m),r.render(s,a),u=m}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,r.setRenderTarget(this.renderToScreen?null:t),r.render(s,a)}setSize(r,e){let t=this.resolution;t.setBaseSize(r,e);let i=t.width,n=t.height;this.renderTargetA.setSize(i,n),this.renderTargetB.setSize(i,n),this.blurMaterial.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==bt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):r!==null&&r.outputColorSpace===Oe&&(this.renderTargetA.texture.colorSpace=Oe,this.renderTargetB.texture.colorSpace=Oe))}static get AUTO_SIZE(){return vn.AUTO_SIZE}},TM=`#include <common>
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
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,wM=class extends Ke{constructor(r=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ji.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ze(null),threshold:new Ze(0),smoothing:new Ze(1),range:new Ze(null)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:TM,vertexShader:ev});this.colorOutput=r,this.luminanceRange=e}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get threshold(){return this.uniforms.threshold.value}set threshold(r){this.smoothing>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=r}getThreshold(){return this.threshold}setThreshold(r){this.threshold=r}get smoothing(){return this.uniforms.smoothing.value}set smoothing(r){this.threshold>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=r}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(r){this.smoothing=r}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(r){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(r){r?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(r){return this.colorOutput}setColorOutputEnabled(r){this.colorOutput=r}get useRange(){return this.luminanceRange!==null}set useRange(r){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(r){r!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=r,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(r){this.luminanceRange=r}},CM=class extends nn{constructor({renderTarget:r,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:n=vn.AUTO_SIZE,height:s=vn.AUTO_SIZE,resolutionX:a=n,resolutionY:o=s}={}){super("LuminancePass");this.fullscreenMaterial=new wM(t,e),this.needsSwap=!1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new vn(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(r,e,t,i,n){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){let t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height)}initialize(r,e,t){t!==void 0&&t!==bt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},RM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,DM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",PM=class extends Ke{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ze(null),texelSize:new Ze(new z)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:RM,vertexShader:DM})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},IM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,UM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",LM=class extends Ke{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ze(null),supportBuffer:new Ze(null),texelSize:new Ze(new z),radius:new Ze(.85)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:IM,vertexShader:UM})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}set supportBuffer(r){this.uniforms.supportBuffer.value=r}get radius(){return this.uniforms.radius.value}set radius(r){this.uniforms.radius.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},BM=class extends nn{constructor(){super("MipmapBlurPass");this.needsSwap=!1,this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new PM,this.upsamplingMaterial=new LM,this.resolution=new z}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(r){if(this.levels!==r){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<r;++t){let i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=r-1;t<i;++t){let n=e.clone();n.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(n)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(r){this.upsamplingMaterial.radius=r}render(r,e,t,i,n){let{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this,u=e;this.fullscreenMaterial=o;for(let d=0,f=c.length;d<f;++d){let m=c[d];o.setSize(u.width,u.height),o.inputBuffer=u.texture,r.setRenderTarget(m),r.render(s,a),u=m}this.fullscreenMaterial=l;for(let d=h.length-1;d>=0;--d){let f=h[d];l.setSize(u.width,u.height),l.inputBuffer=u.texture,l.supportBuffer=c[d].texture,r.setRenderTarget(f),r.render(s,a),u=f}}setSize(r,e){let t=this.resolution;t.set(r,e);let i=t.width,n=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),n=Math.round(n*.5),this.downsamplingMipmaps[s].setSize(i,n),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,n)}initialize(r,e,t){if(t!==void 0){let i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let n of i)n.texture.type=t;if(t!==bt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(r!==null&&r.outputColorSpace===Oe)for(let n of i)n.texture.colorSpace=Oe}}dispose(){super.dispose();for(let r of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))r.dispose()}},OM=class extends Wt{constructor(r,e,{attributes:t=ts.NONE,blendFunction:i=$e.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super();this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new yM(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Oi,this._outputColorSpace=di}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=Bi){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(let r of Object.keys(this)){let e=this[r];(e instanceof mt||e instanceof St||e instanceof pt||e instanceof nn)&&this[r].dispose()}}},NM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,av=class extends OM{constructor({blendFunction:r=$e.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:i=!1,intensity:n=1,radius:s=.85,levels:a=8,kernelSize:o=Cf.LARGE,resolutionScale:l=.5,width:c=vn.AUTO_SIZE,height:h=vn.AUTO_SIZE,resolutionX:u=c,resolutionY:d=h}={}){super("BloomEffect",NM,{blendFunction:r,uniforms:new Map([["map",new Ze(null)],["intensity",new Ze(n)]])});this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new bM({kernelSize:o}),this.luminancePass=new CM({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new BM,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;let f=this.resolution=new vn(this,u,d,l);f.addEventListener("change",m=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get dithering(){return this.blurPass.dithering}set dithering(r){this.blurPass.dithering=r}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(r){this.blurPass.kernelSize=r}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(r){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(r){this.uniforms.get("intensity").value=r}getIntensity(){return this.intensity}setIntensity(r){this.intensity=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}update(r,e,t){let i=this.renderTarget,n=this.luminancePass;n.enabled?(n.render(r,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,n.renderTarget):this.blurPass.render(r,n.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,e):this.blurPass.render(r,e,i)}setSize(r,e){let t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(r,e),this.mipmapBlurPass.setSize(r,e)}initialize(r,e,t){this.blurPass.initialize(r,e,t),this.luminancePass.initialize(r,e,t),this.mipmapBlurPass.initialize(r,e,t),t!==void 0&&(this.renderTarget.texture.type=t,r!==null&&r.outputColorSpace===Oe&&(this.renderTarget.texture.colorSpace=Oe))}};var ov=class extends nn{constructor(r,e,t=null){super("RenderPass",r,e);this.needsSwap=!1,this.clearPass=new nv,this.overrideMaterialManager=t===null?null:new sv(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){let r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){let e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new sv(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,i,n){let s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,h=r.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,s,a):r.render(s,a),a.layers.mask=l,s.background=c,r.shadowMap.autoUpdate=h}};var nT=Math.PI*.5;var FM=`#include <common>
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
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
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
}`,HM="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",zM=class extends Ke{constructor(r,e,t,i,n=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ji.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ze(null),depthBuffer:new Ze(null),resolution:new Ze(new z),texelSize:new Ze(new z),cameraNear:new Ze(.3),cameraFar:new Ze(1e3),aspect:new Ze(1),time:new Ze(0)},blending:Dt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:n});r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=Bi){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=FM.replace(ot.FRAGMENT_HEAD,r.get(ot.FRAGMENT_HEAD)||"").replace(ot.FRAGMENT_MAIN_UV,r.get(ot.FRAGMENT_MAIN_UV)||"").replace(ot.FRAGMENT_MAIN_IMAGE,r.get(ot.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=HM.replace(ot.VERTEX_HEAD,r.get(ot.VERTEX_HEAD)||"").replace(ot.VERTEX_MAIN_SUPPORT,r.get(ot.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(let e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(let e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(let e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof Tt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){let t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return ot}};var aT=Number(ji.replace(/\D+/g,"")),is=255/256,oT=new Float32Array([is/rn(256,3),is/rn(256,2),is/256,is]),lT=new Float32Array([is,is/256,is/rn(256,2),1/rn(256,3)]);function lv(r,e,t){for(let i of e){let n="$1"+r+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,n))}}function kM(r,e,t){let i=e.getFragmentShader(),n=e.getVertexShader(),s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&ts.CONVOLUTION)!=0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,c=l.get(ot.FRAGMENT_HEAD)||"",h=l.get(ot.FRAGMENT_MAIN_UV)||"",u=l.get(ot.FRAGMENT_MAIN_IMAGE)||"",d=l.get(ot.VERTEX_HEAD)||"",f=l.get(ot.VERTEX_MAIN_SUPPORT)||"",m=new Set,v=new Set;if(a&&(h+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),n!==null&&/mainSupport/.test(n)){let y=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n);f+=`	${r}MainSupport(`,f+=y?`vUv);
`:`);
`;for(let x of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let _ of x[1].split(/\s*,\s*/))t.varyings.add(_),m.add(_),v.add(_);for(let x of n.matchAll(o))v.add(x[1])}for(let y of i.matchAll(o))v.add(y[1]);for(let y of e.defines.keys())v.add(y.replace(/\([\w\s,]*\)/g,""));for(let y of e.uniforms.keys())v.add(y);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((y,x)=>t.uniforms.set(r+x.charAt(0).toUpperCase()+x.slice(1),y)),e.defines.forEach((y,x)=>t.defines.set(r+x.charAt(0).toUpperCase()+x.slice(1),y));let g=new Map([["fragment",i],["vertex",n]]);lv(r,v,t.defines),lv(r,v,g),i=g.get("fragment"),n=g.get("vertex");let p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===Oe?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==di?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let y=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${r}MainImage(color0, UV, `,(t.attributes&ts.DEPTH)!=0&&y.test(i)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;let x=r+"BlendOpacity";t.uniforms.set(x,p.opacity),u+=`color0 = blend${p.blendFunction}(color0, color1, ${x});

	`,c+=`uniform float ${x};

`}if(c+=i+`
`,n!==null&&(d+=n+`
`),l.set(ot.FRAGMENT_HEAD,c),l.set(ot.FRAGMENT_MAIN_UV,h),l.set(ot.FRAGMENT_MAIN_IMAGE,u),l.set(ot.VERTEX_HEAD,d),l.set(ot.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(let y of e.extensions)t.extensions.add(y)}}var cv=class extends nn{constructor(r,...e){super("EffectPass");this.fullscreenMaterial=new zM(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(let e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(let e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){let e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let r=new zE,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===$e.DST)r.attributes|=a.getAttributes()&ts.DEPTH;else{if((r.attributes&a.getAttributes()&ts.CONVOLUTION)!=0)throw new Error(`Convolution effects cannot be merged (${a.name})`);kM("e"+e++,a,r)}let t=r.shaderParts.get(ot.FRAGMENT_HEAD),i=r.shaderParts.get(ot.FRAGMENT_MAIN_IMAGE),n=r.shaderParts.get(ot.FRAGMENT_MAIN_UV),s=/\bblend\b/g;for(let a of r.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(r.attributes&ts.DEPTH)!=0?(r.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===Oe&&(i+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(n=`vec2 transformedUv = vUv;
`+n,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(ot.FRAGMENT_HEAD,t),r.shaderParts.set(ot.FRAGMENT_MAIN_IMAGE,i),r.shaderParts.set(ot.FRAGMENT_MAIN_UV,n);for(let[a,o]of r.shaderParts)o!==null&&r.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=Bi){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,i,n){for(let s of this.effects)s.update(r,e,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(let t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(let i of this.effects)i.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==bt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){switch(r.type){case"change":this.recompile();break}}};var hT=[new Float32Array(3),new Float32Array(3)],uT=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],dT=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var fT=[new Float32Array(2),new Float32Array(2)];var pT=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),mT=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],gT=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],vT=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var xT=new Map([[ri(0,0,0,0),new Float32Array([0,0,0,0])],[ri(0,0,0,1),new Float32Array([0,0,0,1])],[ri(0,0,1,0),new Float32Array([0,0,1,0])],[ri(0,0,1,1),new Float32Array([0,0,1,1])],[ri(0,1,0,0),new Float32Array([0,1,0,0])],[ri(0,1,0,1),new Float32Array([0,1,0,1])],[ri(0,1,1,0),new Float32Array([0,1,1,0])],[ri(0,1,1,1),new Float32Array([0,1,1,1])],[ri(1,0,0,0),new Float32Array([1,0,0,0])],[ri(1,0,0,1),new Float32Array([1,0,0,1])],[ri(1,0,1,0),new Float32Array([1,0,1,0])],[ri(1,0,1,1),new Float32Array([1,0,1,1])],[ri(1,1,0,0),new Float32Array([1,1,0,0])],[ri(1,1,0,1),new Float32Array([1,1,0,1])],[ri(1,1,1,0),new Float32Array([1,1,1,0])],[ri(1,1,1,1),new Float32Array([1,1,1,1])]]);function Rf(r,e,t){return r+(e-r)*t}function ri(r,e,t,i){let n=Rf(r,e,1-.25),s=Rf(t,i,1-.25);return Rf(n,s,1-.125)}function hv(){return`
    uniform sampler2D tex;

    in vec3 vColor;

    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture(tex, gl_PointCoord);
    }
  `}function uv(){return`
    in vec3 fuzzColor;
    in vec3 origin;
    
    in float visible;
    in float size;

    in float a;
    in float e;
    in float i;
    in float om;
    in float wBar;
    in float M;

    // Perihelion distance
    in float q;

    // CPU-computed term for parabolic orbits
    in float a0;

    out vec3 vColor;

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

      float v = 2.0 * atan(sqrt((e + 1.0) / (e - 1.0))) * tanh(F / 2.0);
      float r = ${_f().toFixed(1)} * (a * (1.0 - e * e)) / (1.0 + e * cos(v));

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
      float r = ${_f().toFixed(1)} * a * (1.0 - e * e) / (1.0 + e * cos(v));

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
      gl_PointSize = visible > 0.5 ? size : 0.0;
      gl_Position = projectionMatrix * mvPosition;
    }
  `}var _h=`
    in vec3 vColor;
  
    void main() {
      float a = 1.0 - 2.0 * length(gl_PointCoord - vec2(0.5, 0.5));
      gl_FragColor = vec4(vColor, a);
    }
`,yh=`
    in float size;
    out vec3 vColor;

    void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size;
        gl_Position = projectionMatrix * mvPosition;
    }
`;var dv=`
  uniform vec3 lightPos;

  out vec2 vUv;
  out vec3 vecPos;
  out vec3 vecNormal;
  //varying vec3 vNormal;

  out vec3 vViewLightPos;

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
`,fv=`
  uniform float c;
  uniform float p;
  uniform vec3 color;

  in vec2 vUv;
  in vec3 vecPos;
  in vec3 vecNormal;
  in vec3 vViewLightPos;

  void main() {
    float intensity = pow(c - dot(vecNormal, vec3(0.0, 0.0, 1.0)), p);

    vec4 addedLights = vec4(0.0, 0.0, 0.0, 1.0);
    vec3 lightDirection = normalize(vecPos - vViewLightPos);
    addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0)
                       * 1.0 /* intensity */;
                       // * pointLights[i].color

    gl_FragColor = vec4(color, 1.0) * intensity * addedLights;
  }
`,pv=`
  uniform vec3 lightPos;

  out vec2 vUv;
  out vec3 vNormal;
  out vec3 vViewPosition;
  out vec3 vViewLightPos;

  void main() {
    vUv = uv;
    vec4 vViewPosition4 = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = vViewPosition4.xyz;
    vViewLightPos = (viewMatrix * vec4(lightPos, 1.0)).xyz;
    vNormal = normalMatrix * normal;

    gl_Position = projectionMatrix * vViewPosition4;
  }
`,mv=`
  uniform sampler2D sphereTex;

  in vec2 vUv;
  in vec3 vNormal;
  in vec3 vViewPosition;
  in vec3 vViewLightPos;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vViewLightPos - vViewPosition);
    float lambertian = max(dot(normal, lightDir), 0.0);
    gl_FragColor = texture(sphereTex, vUv) * vec4(vec3(1.0) * lambertian, 1.0);
  }
`,gv=`
  out vec3 vPos;
  out vec3 vWorldPosition;
  out vec3 vNormal;

  void main() {
    vPos = position;
    vec4 worldPosition = (modelMatrix * vec4(position, 1.));
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition.xyz, 1.);

    vNormal = normalMatrix * normal;
    vWorldPosition = worldPosition.xyz;
  }
`,vv=`
  uniform sampler2D ringTex;
  uniform float innerRadius;
  uniform float outerRadius;
  uniform vec3 lightPos;

  in vec3 vNormal;
  in vec3 vPos;
  in vec3 vWorldPosition;

  vec4 color() {
    vec2 uv = vec2(0);
    uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
    if (uv.x < 0.0 || uv.x > 1.0) {
      discard;
    }

    vec4 pixel = texture(ringTex, uv);
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
  }
`;var GM=4096;function xv(r,e){let t=e-r.get("epoch");return r.get("ma")+r.get("n")*t}var VM=.01720209895;function _v(r,e){let t=r.get("tp"),i=r.get("e"),n=r.get("q"),s=e-t;return .75*s*VM*Math.sqrt((1+i)/(n*n*n))}var or=class{constructor(e,t){if(this.options=e,this.id=`KeplerParticles__${or.instanceCount}`,or.instanceCount++,this.simulation=t,this.context=t.getContext(),this.addedToScene=!1,this.particleCount=0,!this.options.textureUrl)throw new Error("ParticleSystem requires textureUrl to be set");let i=Gg(this.options.textureUrl,this.context.options.basePath);this.uniforms={tex:{value:i}};let n=this.options.maxNumParticles||GM;this.elements=[],this.attributes={visible:new Ce(new Float32Array(n),1),size:new Ce(new Float32Array(n),1),origin:new Ce(new Float32Array(n*3),3),position:new Ce(new Float32Array(n*3),3),fuzzColor:new Ce(new Float32Array(n*3),3),a:new Ce(new Float32Array(n),1),e:new Ce(new Float32Array(n),1),i:new Ce(new Float32Array(n),1),om:new Ce(new Float32Array(n),1),ma:new Ce(new Float32Array(n),1),n:new Ce(new Float32Array(n),1),w:new Ce(new Float32Array(n),1),wBar:new Ce(new Float32Array(n),1),q:new Ce(new Float32Array(n),1),M:new Ce(new Float32Array(n),1),a0:new Ce(new Float32Array(n),1)},this.attributes.M.setUsage(vo),this.attributes.a0.setUsage(vo);let s=new we;s.setDrawRange(0,0),Object.keys(this.attributes).forEach(o=>{let l=this.attributes[o];s.setAttribute(o,l)}),s.boundingSphere=new Bt(new b(0,0,0),1/0);let a=new Ke({uniforms:this.uniforms,vertexShader:uv(),fragmentShader:hv(),depthTest:!0,depthWrite:!1,transparent:!0});this.shaderMaterial=a,this.geometry=s,this.particleSystem=new gi(s,a),this.particleSystem.name=this.id}addParticle(e,t={}){this.elements.push(e);let i=this.attributes,n=this.particleCount++;i.visible.set([1],n),i.size.set([t.particleSize||this.options.defaultSize||15],n);let s=new re(t.color||16777215);i.fuzzColor.set([s.r,s.g,s.b],n*3),i.origin.set([0,0,0],n*3),i.a.set([e.get("a")],n),i.e.set([e.get("e")],n),i.i.set([e.get("i","rad")],n),i.om.set([e.get("om","rad")],n),i.wBar.set([e.get("wBar","rad")],n),i.q.set([e.get("q")],n),Hn.getOrbitType(e)===It.PARABOLIC?i.a0.set([_v(e,this.options.jd||0)],n):i.M.set([xv(e,this.options.jd||0)],n);for(let a in i)i.hasOwnProperty(a)&&(i[a].needsUpdate=!0);return this.geometry.setDrawRange(0,this.particleCount),!this.addedToScene&&this.simulation&&(this.simulation.addObject(this),this.addedToScene=!0),n}hideParticle(e){this.setParticleVisibility(!1,e)}showParticle(e){this.setParticleVisibility(!0,e)}isParticleVisible(e){return e>=0&&e<this.particleCount&&this.attributes.visible.array[e]>.5}setParticleVisibility(e,t){let i=this.attributes;i.visible.set([e?1:0],t);for(let n in i)i.hasOwnProperty(n)&&(i[n].needsUpdate=!0)}isVisible(){return this.particleCount>0&&this.particleSystem.visible&&this.attributes.visible.array.slice(0,this.particleCount).some(e=>e>.5)}setVisibility(e){this.particleSystem.visible=e}setParticleSize(e,t){let i=this.attributes;i.size.set([e],t);for(let n in i)i.hasOwnProperty(n)&&(i[n].needsUpdate=!0)}setParticleColor(e,t){let i=this.attributes,{r:n,g:s,b:a}=new re(e);i.fuzzColor.set([n,s,a],t*3);for(let o in i)i.hasOwnProperty(o)&&(i[o].needsUpdate=!0)}setParticleOrigin(e,t){this.attributes.origin.set(t,e*3),this.attributes.origin.needsUpdate=!0}update(e){let t=[],i=[],n=0;for(let s=0;s<this.elements.length;s++){let a=this.elements[s],o,l;Hn.getOrbitType(a)===It.PARABOLIC?(l=_v(a,e),o=0):(l=0,o=xv(a,e)),t.push(o),i.push(l),n=Math.max(n,a.get("q")*(1+a.get("e")))}this.attributes.M.set(t),this.attributes.M.needsUpdate=!0,this.attributes.a0.set(i),this.attributes.a0.needsUpdate=!0}get3jsObjects(){return[this.particleSystem]}getId(){return this.id}removalCleanup(){this.geometry.dispose(),this.shaderMaterial.dispose(),this.uniforms.tex.value.dispose()}};or.instanceCount=0;var WM=/^[og]\s*(.+)?/,XM=/^mtllib /,YM=/^usemtl /,jM=/^usemap /,yv=/\s+/,Av=new b,Df=new b,Sv=new b,Ev=new b,Wi=new b,Ah=new re;function qM(){let r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,s){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let n=this.vertices,s=this.object.geometry.vertices;s.push(n[e+0],n[e+1],n[e+2]),s.push(n[t+0],n[t+1],n[t+2]),s.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let n=this.normals,s=this.object.geometry.normals;s.push(n[e+0],n[e+1],n[e+2]),s.push(n[t+0],n[t+1],n[t+2]),s.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){let n=this.vertices,s=this.object.geometry.normals;Av.fromArray(n,e),Df.fromArray(n,t),Sv.fromArray(n,i),Wi.subVectors(Sv,Df),Ev.subVectors(Av,Df),Wi.cross(Ev),Wi.normalize(),s.push(Wi.x,Wi.y,Wi.z),s.push(Wi.x,Wi.y,Wi.z),s.push(Wi.x,Wi.y,Wi.z)},addColor:function(e,t,i){let n=this.colors,s=this.object.geometry.colors;n[e]!==void 0&&s.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&s.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&s.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){let n=this.uvs,s=this.object.geometry.uvs;s.push(n[e+0],n[e+1]),s.push(n[t+0],n[t+1]),s.push(n[i+0],n[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,s,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let m=this.normals.length;u=this.parseNormalIndex(o,m),d=this.parseNormalIndex(l,m),f=this.parseNormalIndex(c,m),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let m=this.uvs.length;u=this.parseUVIndex(n,m),d=this.parseUVIndex(s,m),f=this.parseUVIndex(a,m),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){let s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],n))}};return r.startObject("",!1),r}var Pf=class extends Yt{constructor(e){super(e);this.materials=null}load(e,t,i,n){let s=this,a=new Ti(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){let t=new qM;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(yv);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Ah.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Oe),t.colors.push(Ah.r,Ah.g,Ah.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(yv),f=[];for(let v=0,g=d.length;v<g;v++){let p=d[v];if(p.length>0){let y=p.split("/");f.push(y)}}let m=f[0];for(let v=1,g=f.length-1;v<g;v++){let p=f[v],y=f[v+1];t.addFace(m[0],p[0],y[0],m[1],p[1],y[1],m[2],p[2],y[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let m=0,v=u.length;m<v;m++){let g=u[m].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}t.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((n=WM.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);t.startObject(u)}else if(YM.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(XM.test(c))t.materialLibraries.push(c.substring(7).trim());else if(jM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let s=new un;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",m=!1;if(h.vertices.length===0)continue;let v=new we;v.setAttribute("position",new me(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new me(h.normals,3)),h.colors.length>0&&(m=!0,v.setAttribute("color",new me(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new me(h.uvs,2));let g=[];for(let y=0,x=u.length;y<x;y++){let _=u[y],D=_.name+"_"+_.smooth+"_"+m,T=t.materials[D];if(this.materials!==null){if(T=this.materials.create(_.name),d&&T&&!(T instanceof _t)){let R=new _t;St.prototype.copy.call(R,T),R.color.copy(T.color),T=R}else if(f&&T&&!(T instanceof dn)){let R=new dn({size:10,sizeAttenuation:!1});St.prototype.copy.call(R,T),R.color.copy(T.color),R.map=T.map,T=R}}T===void 0&&(d?T=new _t:f?T=new dn({size:1,sizeAttenuation:!1}):T=new ca,T.name=_.name,T.flatShading=!_.smooth,T.vertexColors=m,t.materials[D]=T),g.push(T)}let p;if(g.length>1){for(let y=0,x=u.length;y<x;y++){let _=u[y];v.addGroup(_.groupStart,_.groupCount,y)}d?p=new Zt(v,g):f?p=new gi(v,g):p=new tt(v,g)}else d?p=new Zt(v,g[0]):f?p=new gi(v,g[0]):p=new tt(v,g[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){let o=new dn({size:1,sizeAttenuation:!1}),l=new we;l.setAttribute("position",new me(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new me(t.colors,3)),o.vertexColors=!0);let c=new gi(l,o);s.add(c)}return s}};var ZM=30;function QM(r,e,t){let i=new b(r[0],r[1],r[2]);return i.project(e),{x:(i.x+1)*t.clientWidth/2,y:(-i.y+1)*t.clientHeight/2}}var Aa=class{constructor(e,t,i,n=!0){this._id=e,this._options=t||{},this._object3js=void 0,this._useEphemTable=this._options.ephemTable!==void 0,this._isStaticObject=!this._options.ephem&&!this._useEphemTable,this._simulation=i,this._context=i.getContext(),this._materials=[],this._geometries=[],this._textures=[],this._label=void 0,this._showLabel=!1,this._lastLabelUpdate=0,this._position=en(this._options.position||[0,0,0]),this._orbitAround=void 0,this._scale=this._options.scale||[1,1,1],this._renderMethod=void 0,this._particleIndex=void 0,this._initialized=!1,n&&!this.init()&&console.warn(`SpaceObject ${e}: failed to initialize`)}init(){if(this.renderObject(),this._options.labelText){let e=this.createLabel();this._simulation.getSimulationElement().appendChild(e),this._label=e,this._showLabel=!0}return this._orbitPath=void 0,this._eclipticLines=void 0,this.update(this._simulation.getJd(),!0),this._initialized=!0,!0}renderObject(){let e=!0;this.isStaticObject()||(this._orbit=this.createOrbit()),this._renderMethod||(this.isStaticObject()?(this._object3js=this.createSprite(),this._object3js.name=`${this._id}-sprite`,this._renderMethod="SPRITE"):this._useEphemTable?(this._object3js=this.createSprite(),this._object3js.name=`${this._id}-sprite`,this._renderMethod="SPRITE"):(this.addParticle(),this._renderMethod="PARTICLESYSTEM",e=!1)),e&&this._simulation.getObject(this._id)===void 0&&this._simulation.addObject(this,!1)}addParticle(){if(!this._options.ephem)throw new Error("Attempting to create a particle system, but ephemeris are not available.");this._particleIndex=this._context.objects.particles.addParticle(this._options.ephem,{particleSize:this._options.particleSize,color:this.getColor()})}createLabel(){let e=document.createElement("div");e.className="spacekit__object-label";let{labelText:t,labelUrl:i}=this._options;return this._options.labelUrl?e.innerHTML=`<div><a target="_blank" href="${i}">${t}</a></div>`:e.innerHTML=`<div>${t}</div>`,e.style.fontFamily="Arial",e.style.fontSize="12px",e.style.color="#fff",e.style.position="absolute",e.style.backgroundColor="#0009",e.style.outline="1px solid #5f5f5f",e}updateLabelPosition(e){if(!this._label)throw new Error("Attempted to update label position without a label");let t=this._label,i=this._simulation.getSimulationElement(),n=QM(e,this._simulation.getViewer().get3jsCamera(),i),s={left:n.x,top:n.y,right:n.x+t.clientWidth,bottom:n.y+t.clientHeight};s.left-30>0&&s.right+20<i.clientWidth&&s.top-25>0&&s.bottom<i.clientHeight?(t.style.left=`${s.left-t.clientWidth/2}px`,t.style.top=`${s.top-t.clientHeight-8}px`,t.style.visibility="visible"):t.style.visibility="hidden"}createSprite(){var a,o,l,c,h;if(!this._options.textureUrl)throw new Error("Cannot create sprite without a textureUrl");let e=$r(this._options.textureUrl,this._context.options.basePath),t=new wi().load(e);t.colorSpace=Oe,this._textures.push(t);let i=new Un({map:t,blending:sn,depthWrite:!1,color:(l=(o=this._options.color)!=null?o:(a=this._options.theme)==null?void 0:a.color)!=null?l:16777215,sizeAttenuation:this._options.radius!==void 0});this._materials.push(i);let n=new $n(i);if(this._options.radius!==void 0){let u=this._options.radius*2,d=en(this._scale);n.scale.set(d[0]*u,d[1]*u,d[2]*u)}else{let u=((h=(c=this._options.particleSize)!=null?c:this._context.options.particleDefaultSize)!=null?h:15)/15*.02;n.scale.set(u,u,u)}let s=this.getPosition(this._simulation.getJd());return n.position.set(s[0],s[1],s[2]),this.isStaticObject()&&(n.updateMatrix(),n.matrixAutoUpdate=!1),n}createOrbit(){var t,i;if(this._orbit)return this._orbit;let e=this._useEphemTable?this._options.ephemTable:this._options.ephem;if(!e)throw new Error("Cannot create orbit without Ephem or EphemerisTable");return new Hn(e,{orbitPathSettings:this._options.orbitPathSettings,color:(t=this._options.theme)==null?void 0:t.orbitColor,eclipticLineColor:(i=this._options.ecliptic)==null?void 0:i.lineColor})}shouldUpdateObjectPosition(e){return!0}setPositionedObject(e){this._object3js=e}getScale(){return this._scale}orbitAround(e){this._orbitAround=e,this._orbitPath&&this._simulation.getScene().remove(this._orbitPath),this._orbitPath=void 0,this.update(this._simulation.getJd(),!0)}setPosition(e,t,i){this._position[0]=tn(e),this._position[1]=tn(t),this._position[2]=tn(i)}getPosition(e){let t=this._position;if(!this._orbit)return t;let i=this._orbit.getPositionAtTime(e);if(this._orbitAround){let n=this._orbitAround.getPosition(e);return[t[0]+i[0]+n[0],t[1]+i[1]+n[1],t[2]+i[2]+n[2]]}return[t[0]+i[0],t[1]+i[1],t[2]+i[2]]}update(e,t=!1){var o,l,c,h,u;let i;if(this._label){let d=+new Date-this._lastLabelUpdate>ZM;(t||this._showLabel&&d)&&(i||(i=this.getPosition(e)),this.updateLabelPosition(i),this._lastLabelUpdate=+new Date)}if(this.isStaticObject()&&!t)return;let n=!1;(this._object3js||this._label)&&(n=t||this.shouldUpdateObjectPosition(e)),this._object3js&&n&&(i=this.getPosition(e),this._object3js.position.set(i[0],i[1],i[2]));let s=!this._orbitPath||((o=this._orbit)==null?void 0:o.needsUpdateForTime(e));this._orbit&&!this._options.hideOrbit&&s&&(this._orbitPath&&this._simulation.getScene().remove(this._orbitPath),this._orbitPath=this._orbit.getOrbitShape(e,!0,this._orbitAround),this._orbitPath.name=`${this._id}-orbit`,this._simulation.getScene().add(this._orbitPath));let a=!this._eclipticLines||s;if(this._orbit&&this._options.ecliptic&&this._options.ecliptic.displayLines&&a&&(this._eclipticLines&&this._simulation.getScene().remove(this._eclipticLines),this._eclipticLines=this._orbit.getLinesToEcliptic(),this._eclipticLines.name=`${this._id}-orbit-ec-lines`,this._simulation.getScene().add(this._eclipticLines)),this._orbitAround){let d=this._orbitAround.getPosition(e);this._particleIndex!==void 0&&((l=this._context.objects.particles)==null||l.setParticleOrigin(this._particleIndex,d)),!this._options.hideOrbit&&!((c=this._orbit)==null?void 0:c.isHeliocentric())&&((h=this._orbitPath)==null||h.position.set(d[0],d[1],d[2]),(u=this._eclipticLines)==null||u.position.set(d[0],d[1],d[2]))}}get3jsObjects(){let e=[];return this._object3js&&e.push(this._object3js),this._orbit&&(this._orbitPath&&e.push(this._orbitPath),this._eclipticLines&&e.push(this._eclipticLines)),e}getBoundingObject(){return ui(this,null,function*(){return Promise.resolve(this.get3jsObjects()[0])})}getColor(){return this._options.theme&&this._options.theme.color||16777215}getOrbit(){return this._orbit}getLabelVisibility(){return this._showLabel}getLabelElement(){return this._label}setLabelVisibility(e){if(!this._label)throw new Error("Attempted to set label visibility without a label");e?(this._showLabel=!0,this._label.style.display="block"):(this._showLabel=!1,this._label.style.display="none")}getId(){return this._id}isStaticObject(){return this._isStaticObject}isReady(){return this._initialized}setVisibility(e){var t;this.get3jsObjects().forEach(i=>{i.visible=e}),this._particleIndex!==void 0&&((t=this._context)==null||t.objects.particles.setParticleVisibility(e,this._particleIndex)),this.setLabelVisibility(e)}isVisible(){var t;let e=this.get3jsObjects().some(i=>i.visible);return this._particleIndex!==void 0&&(e=e||((t=this._context)==null?void 0:t.objects.particles.isParticleVisible(this._particleIndex))),e=e||this._showLabel,e}removalCleanup(){var e,t,i,n;this._label&&(this._simulation.getSimulationElement().removeChild(this._label),this._label=void 0),this._particleIndex!==void 0&&((e=this._context)==null||e.objects.particles.hideParticle(this._particleIndex),((t=this._context)==null?void 0:t.objects.particles.isVisible())||this._simulation.removeObject((i=this._context)==null?void 0:i.objects.particles)),(n=this._orbit)==null||n.removalCleanup(),this._geometries.forEach(s=>{s.dispose()}),this._materials.forEach(s=>{s.dispose()}),this._textures.forEach(s=>{s.dispose()})}},Ri="{{assets}}/sprites/smallparticle.png",KM={SUN:{textureUrl:"{{assets}}/sprites/lensflare0.png",position:[0,0,0],radius:.5},MERCURY:{textureUrl:Ri,theme:{color:9518318},ephem:Vi.MERCURY},VENUS:{textureUrl:Ri,theme:{color:16742195},ephem:Vi.VENUS},EARTH:{textureUrl:Ri,theme:{color:39629},ephem:Vi.EARTH},MOON:{textureUrl:Ri,theme:{color:16766720},ephem:Vi.MOON,particleSize:6},MARS:{textureUrl:Ri,theme:{color:10893882},ephem:Vi.MARS},JUPITER:{textureUrl:Ri,theme:{color:16759055},ephem:Vi.JUPITER},SATURN:{textureUrl:Ri,theme:{color:3368499},ephem:Vi.SATURN},URANUS:{textureUrl:Ri,theme:{color:39423},ephem:Vi.URANUS},NEPTUNE:{textureUrl:Ri,theme:{color:3355647},ephem:Vi.NEPTUNE},PLUTO:{textureUrl:Ri,theme:{color:13418672},ephem:Vi.PLUTO}};function If(r,e,t){let i=new _t({linewidth:3,color:t}),n=new we().setFromPoints([Af(r).clone(),Af(e).clone()]),s=new mi(n,i);return s.computeLineDistances(),s}function JM(){return[If(new b(0,0,0),new b(3,0,0),16711680),If(new b(0,0,0),new b(0,3,0),65280),If(new b(0,0,0),new b(0,0,3),255)]}var Sa=class extends Aa{constructor(e,t,i,n=!0){super(e,t,i,!1);this._obj=new Xe,this._obj.name=`${this._id}-rot-obj`,this._renderMethod="ROTATING_OBJECT",super.setPositionedObject(this._obj),this._objectIsRotatable=!!this._options.rotation,this._axisOfRotation=void 0,n&&this.init()}init(){if(this._objectIsRotatable&&this.initRotation(),this._options.debug&&(this._options.debug.showAxes&&JM().forEach(e=>{this._materials.push(e.material),this._geometries.push(e.geometry),this._obj.add(e)}),this._options.debug.showGrid)){let e=new jr(3,3,16711680,16772846);e.geometry.rotateX(Math.PI/2),this._materials.push(e.material),this._geometries.push(e.geometry),this._obj.add(e)}return super.init()}initRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");let{rotation:e}=this._options;if(typeof e.jd0=="undefined")return;let t=yt.rad(e.lambdaDeg||0),i=yt.rad(e.betaDeg||0),n=this._simulation.getJd(),s=this._z_rotation(n);typeof s!="undefined"&&(this._obj.rotateZ(Math.PI/2+t),this._obj.rotateX(Math.PI/2-i),this._obj.rotateZ(s))}_z_rotation(e){if(typeof this._options.rotation=="undefined")return;let{period:t,yorp:i,phi0:n,jd0:s}=this._options.rotation;if(typeof s!="undefined")return(yt.rad(n||0)+2*Math.PI/t*(e-s)+1/2*(i||0)*Math.pow(e-s,2))%(2*Math.PI)}update(e,t=!1){if(this._obj&&this._objectIsRotatable&&this._options.rotation&&this._options.rotation.enable)if(this._axisOfRotation,this._options.rotation.speed)this._obj.rotateZ(yt.rad(this._options.rotation.speed));else{let i=this._z_rotation(e);typeof i!="undefined"&&(this._obj.rotation.z=i)}super.update(e,t)}get3jsObjects(){return super.get3jsObjects()}startRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");this._options.rotation.enable=!0}stopRotation(){if(!this._options.rotation)throw new Error("Must specify `rotation` option when creating a RotatingObject");this._options.rotation.enable=!1}};var Sh=class extends Sa{constructor(e,t,i){super(e,t,i,!1);var s;if(!t.shape)throw new Error("ShapeObject requires an options.shape object");if(!((s=t.shape)==null?void 0:s.shapeUrl))throw new Error("Must specify shape.shapeUrl when creating a ShapeObject");this.shapeObj=void 0;let n=new zr;n.onProgress=(a,o,l)=>{console.info(this._id,a,"loading progress:",o,"/",l)},this.loadingPromise=new Promise(a=>{new Pf(n).load(t.shape.shapeUrl,l=>{l.traverse(c=>{if(c instanceof tt){let h=new Ur({color:this._options.shape.color||13421772});c.material=h,c.geometry.scale(.05,.05,.05),this._geometries.push(c.geometry),this._materials.push(h),h.map&&this._textures.push(h.map)}}),l.name=`${this._id}-shape-obj`,this.shapeObj=l,this._obj.add(l),this._simulation&&this._simulation.addObject(this,!1),this._initialized=!0,a(this.shapeObj)})}),super.init()}getBoundingObject(){return ui(this,null,function*(){return this.loadingPromise})}};var Eh=class{constructor(e,t){this.options=e,this.id=`__skybox_${new Date().getTime()}`,this.simulation=t,this.context=t.getContext(),this.mesh=void 0,this.init()}init(){let e=new Gi(1e10,32,32),t=$r(this.options.textureUrl,this.context.options.basePath),i=new wi().load(t);i.colorSpace=Oe;let n=new li({map:i,side:At}),s=new tt(e,n);s.name=this.id,s.rotation.x=0,s.rotation.y=-1/12*Math.PI,s.rotation.z=8/5*Math.PI,s.scale.set(-1,1,1),this.mesh=s,this.simulation&&this.simulation.addObject(this,!0)}get3jsObjects(){return this.mesh?[this.mesh]:[]}getId(){return this.id}update(){}isVisible(){var e,t;return(t=(e=this.mesh)==null?void 0:e.visible)!=null?t:!1}setVisibility(e){this.mesh&&(this.mesh.visible=e)}removalCleanup(){var e;this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose(),(e=this.mesh.material.map)==null||e.dispose())}},$M={ESO_GIGAGALAXY:{textureUrl:"{{assets}}/skybox/eso_milkyway.jpg"},ESO_LITE:{textureUrl:"{{assets}}/skybox/eso_lite.png"},NASA_TYCHO:{textureUrl:"{{assets}}/skybox/nasa_tycho.jpg"}};var Mh=class extends Sa{constructor(e,t,i){super(e,t,i,!1);this.init()}init(){var a,o,l,c,h,u;let e=null;this._options.textureUrl&&(e=new wi().load(this._options.textureUrl),e.colorSpace=Oe,this._textures.push(e));let t=(l=(o=this._options.color)!=null?o:(a=this._options.theme)==null?void 0:a.color)!=null?l:12303291,i=new Er,n=this._options.levelsOfDetail||[{radii:0,segments:64}],s=this.getScaledRadius();for(let d=0;d<n.length;d+=1){let f=n[d],m;if(f.segments>0){let v=new Gi(s,f.segments,f.segments);this._geometries.push(v);let g;if(this._simulation.isUsingLightSources()){e===null&&console.warn(`SphereObject ${this._id} requires a texture when using a light source.`);let p={sphereTex:{value:e},lightPos:{value:new b}};p.lightPos.value.copy(this._simulation.getLightPosition()),g=new Ke({uniforms:p,vertexShader:pv,fragmentShader:mv,transparent:!0})}else g=new li({map:e,color:t});this._materials.push(g),m=new tt(v,g),m.receiveShadow=!0,m.castShadow=!0,m.rotation.x=Math.PI/2}else{let v=$r(Ri,this._context.options.basePath),g=new wi().load(v);g.colorSpace=Oe,this._textures.push(g);let p=new Un({map:g,color:t,blending:sn,depthWrite:!1,sizeAttenuation:!1});this._materials.push(p);let y=((h=(c=this._options.particleSize)!=null?c:this._context.options.particleDefaultSize)!=null?h:15)/15*.02;m=new $n(p),m.scale.set(y,y,y)}i.addLevel(m,s*f.radii)}if(i.name=`${this._id}-detailed`,this._obj.add(i),this._options.atmosphere&&this._options.atmosphere.enable){let d=this.renderFullAtmosphere();d&&this._obj.add(d)}return this._options.axialTilt&&((u=this._options.rotation)==null?void 0:u.lambdaDeg)===void 0&&(this._obj.rotation.y+=yt.rad(this._options.axialTilt)),this._renderMethod="SPHERE",super.init()}getScaledRadius(){return tn(this._options.radius||1)}renderFullAtmosphere(){var o,l,c,h,u,d,f,m,v;if(!this._simulation.isUsingLightSources())return console.warn("Cannot render atmosphere without a light source"),null;let e=this.getScaledRadius(),t=new re((c=(l=(o=this._options)==null?void 0:o.atmosphere)==null?void 0:l.color)!=null?c:16777215),i=e*((d=(u=(h=this._options)==null?void 0:h.atmosphere)==null?void 0:u.innerSizeRatio)!=null?d:.025),n=e*((v=(m=(f=this._options)==null?void 0:f.atmosphere)==null?void 0:m.outerSizeRatio)!=null?v:.15),s=new Xe;s.add(this.renderAtmosphereComponent(e,i,.8,2,t)),s.add(this.renderAtmosphereComponent(e,n,.5,4,t));let a=new Er;return a.addLevel(s,0),a.addLevel(new Xe,e*24),a.name=`${this._id}-atm`,a}renderAtmosphereComponent(e,t,i,n,s){let a=new Gi(e+t,32,32),o={c:{value:i},p:{value:n},color:{value:s},lightPos:{value:new b}},l=this._simulation.getLightPosition();l&&o.lightPos.value.copy(l);let c=new Ke({uniforms:o,vertexShader:dv,fragmentShader:fv,side:At,transparent:!0,depthWrite:!1});return this._geometries.push(a),this._materials.push(c),new tt(a,c)}addRings(e,t,i,n=128){let s=tn(yt.kmToAu(e)),a=tn(yt.kmToAu(t)),o=new nr(s,a,n,5,0,Math.PI*2);this._geometries.push(o);let l=new wi().load(i);l.colorSpace=Oe,this._textures.push(l);let c;if(this._simulation.isUsingLightSources()){let u=To.merge([le.lights,{ringTex:{value:null},innerRadius:{value:s},outerRadius:{value:a},lightPos:{value:new b}}]);u.ringTex.value=l,u.lightPos.value.copy(this._simulation.getLightPosition()),c=new Ke({uniforms:u,lights:!0,vertexShader:gv,fragmentShader:vv,transparent:!0,alphaTest:.1,side:Nt})}else c=new li({map:l,side:Nt,transparent:!0,alphaTest:.1,opacity:.8});this._materials.push(c);let h=new tt(o,c);h.receiveShadow=!0,h.castShadow=!0,h.name=`${this._id}-ring`,this._obj.add(h)}};var eb=4,tb=16777215,bh=class{constructor(e,t,i,n){this.options=i,this.id=e,this.simulation=n,this.points=t,this.pointObject=void 0,this.init(),this.simulation.addObject(this,!0)}init(){let e=new Float32Array(this.points.length*3),t=new Float32Array(this.points.length*3),i=new Float32Array(this.points.length),n=new re(tb);this.options.defaultColor&&(n=new re(this.options.defaultColor));let s=eb;this.options.size&&(s=this.options.size);for(let l=0,c=this.points.length;l<c;l++){let h=this.points[l];e.set(h,l*3),n.toArray(t,l*3),i[l]=s}let a=new we;a.setAttribute("position",new Ce(e,3)),a.setAttribute("color",new Ce(t,3)),a.setAttribute("size",new Ce(i,1));let o=new Ke({vertexColors:!0,vertexShader:yh,fragmentShader:_h,transparent:!0});this.pointObject=new gi(a,o),this.pointObject.name=`${this.id}-point-obj`}get3jsObjects(){return this.pointObject?[this.pointObject]:[]}getId(){return this.id}update(){}isVisible(){var e,t;return(t=(e=this.pointObject)==null?void 0:e.visible)!=null?t:!1}setVisibility(e){this.pointObject&&(this.pointObject.visible=e)}removalCleanup(){var e;this.pointObject&&(this.pointObject.geometry.dispose(),this.pointObject.material.dispose(),(e=this.pointObject.material.map)==null||e.dispose())}};function ib(r){return r>=3e4?9614847:r>=1e4?10666239:r>=7500?14016767:r>=6e3?16381439:r>=5200?16772579:r>=3700?16767669:(r>=2400,16758124)}function nb(r,e){return r<2?e*4:r<4?e*2:r<6?e:1}var sl=class{constructor(e,t){this._options=e,this._id=`__stars_${new Date().getTime()}`,this._simulation=t,this._context=t.getContext(),this._stars=void 0,this.init()}init(){let e=nl("{{data}}/processed/bsc.json",this._context.options.basePath);fetch(e).then(t=>t.json()).then(t=>{let i=t.length,n=new we,s=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i);n.setAttribute("position",new Ce(s,3)),n.setAttribute("color",new Ce(a,3)),n.setAttribute("size",new Ce(o,1)),t.forEach((c,h)=>{let[u,d,f,m]=c,v=yt.rad(yt.hoursToDeg(u)),g=yt.rad(d),p=xa.sphericalToCartesian(v,g,1e9),y=xa.equatorialToEcliptic_Cartesian(p[0],p[1],p[2],xa.getObliquity());s.set(y,h*3);let x=new re(ib(f));a.set(x.toArray(),h*3),o[h]=nb(m,this._options.minSize||3)});let l=new Ke({uniforms:{},vertexColors:!0,vertexShader:yh,fragmentShader:_h,transparent:!0});this._stars=new gi(n,l),this._stars.name=this._id,this._simulation&&this._simulation.addObject(this,!0)})}get3jsObjects(){return this._stars?[this._stars]:[]}getId(){return this._id}update(){}isVisible(){var e,t;return(t=(e=this._stars)==null?void 0:e.visible)!=null?t:!1}setVisibility(e){this._stars&&(this._stars.visible=e)}removalCleanup(){var e;this._stars&&(this._stars.geometry.dispose(),this._stars.material.dispose(),(e=this._stars.material.map)==null||e.dispose())}};var Mv=class{constructor(e,t){this.simulationElt=e,this.options=t||{},this.options.basePath=this.options.basePath||Vg(),this.jd=typeof this.options.jd=="undefined"?Number((0,Th.default)(this.options.startDate||new Date)):this.options.jd,this.jdDelta=this.options.jdDelta,this.jdPerSecond=this.options.jdPerSecond||100,this.isPaused=t.startPaused||!1,this.onTick=void 0,this.enableCameraDrift=!1,this.cameraDefaultPos=en([0,-10,5]),this.options.camera&&(this.enableCameraDrift=!!this.options.camera.enableDrift,this.options.camera.initialPosition&&(this.cameraDefaultPos=en(this.options.camera.initialPosition))),this.useLightSources=!1,this.lightPosition=void 0,this.subscribedObjects={},this.neverUpdatedObjects=new Set,Xe.DEFAULT_UP=new b(0,0,1),this.options.unitsPerAu&&kg(this.options.unitsPerAu),this.stats=void 0,this.fps=1,this.lastUpdatedTime=Date.now(),this.lastStaticCameraUpdateTime=Date.now(),this.lastResizeUpdateTime=Date.now(),this.renderEnabled=!0,this.initialRenderComplete=!1,this.animate=this.animate.bind(this),this.renderer=this.initRenderer(),this.scene=new Pn,this.camera=new mh(this.getContext()),this.composer=void 0,this.particles=new or({textureUrl:this.options.particleTextureUrl||"{{assets}}/sprites/smallparticle.png",jd:this.jd,maxNumParticles:this.options.maxNumParticles,defaultSize:this.options.particleDefaultSize},this),this.init(),this.animate()}init(){if(this.camera.get3jsCamera().position.set(this.cameraDefaultPos[0],this.cameraDefaultPos[1],this.cameraDefaultPos[2]),this.simulationElt.onmousedown=this.simulationElt.ontouchstart=()=>{this.enableCameraDrift=!1},(()=>{let e=!1;this.camera.get3jsCameraControls().addEventListener("change",()=>{e&&this.staticForcedUpdate()}),setTimeout(()=>{this.staticForcedUpdate(),e=!0,this.initialRenderComplete=!0},0)})(),this.simulationElt.addEventListener("resize",()=>{this.resizeUpdate()}),window.addEventListener("resize",()=>{this.resizeUpdate()}),this.options.debug){if(this.options.debug.showGrid){let e=new jr(void 0,void 0);e.geometry.rotateX(Math.PI/2),this.scene.add(e)}this.options.debug.showAxes&&this.scene.add(new $o(.5)),this.options.debug.showStats&&(this.stats=new $g,this.stats.showPanel(0),this.simulationElt.appendChild(this.stats.dom))}this.initPasses()}initRenderer(){let e=new fh({antialias:!0});console.info("Max texture resolution:",e.capabilities.maxTextureSize);let t=e.capabilities.getMaxPrecision("highp");return t!=="highp"&&console.warn(`Shader maximum precision is "${t}", GPU rendering may not be accurate.`),e.setPixelRatio(window.devicePixelRatio),e.setSize(this.simulationElt.offsetWidth,this.simulationElt.offsetHeight),this.simulationElt.appendChild(e.domElement),e}initPasses(){let e=this.camera.get3jsCamera(),t=new av({width:240,height:240,luminanceThreshold:.2});t.blendMode.opacity.value=2.3;let i=new ov(this.scene,e);i.renderToScreen=!1;let n=new cv(e,t);n.renderToScreen=!0;let s=new rv(this.renderer);s.addPass(i),s.addPass(n),this.composer=s}update(e=!1){for(let t in this.subscribedObjects)if(this.subscribedObjects.hasOwnProperty(t)&&!this.neverUpdatedObjects.has(t)){let i=this.subscribedObjects[t];i.isVisible()&&i.update(this.jd,e)}}staticForcedUpdate(){if(this.isPaused){let e=Date.now();e-this.lastStaticCameraUpdateTime>30&&(this.update(!0),this.lastStaticCameraUpdateTime=e)}}resizeUpdate(){let e=Date.now();if(e-this.lastResizeUpdateTime>30){let n=this.simulationElt.offsetWidth,s=this.simulationElt.offsetHeight;if(n===0&&s===0)return;let a=this.camera.get3jsCamera();a.aspect=n/s,a.updateProjectionMatrix(),this.renderer.setSize(n,s),this.staticForcedUpdate(),this.lastResizeUpdateTime=e}}doCameraDrift(){let e=1e-4*Date.now(),t=this.cameraDefaultPos,i=this.camera.get3jsCamera();i.position.x=t[0]+t[0]*(Math.cos(e)+1)/3,i.position.z=t[2]+t[2]*(Math.sin(e)+1)/3}animate(){if(!(!this.renderEnabled&&this.initialRenderComplete)){if(window.requestAnimationFrame(this.animate),this.stats&&this.stats.begin(),!this.isPaused){this.jdDelta?this.jd+=this.jdDelta:this.jd+=this.jdPerSecond/this.fps;let e=(Date.now()-this.lastUpdatedTime)/1e3;this.lastUpdatedTime=Date.now(),this.fps=1/e||1,this.update()}this.enableCameraDrift&&this.doCameraDrift(),this.camera.update(),this.renderer.render(this.scene,this.camera.get3jsCamera()),this.onTick&&this.onTick(),this.stats&&this.stats.end()}}addObject(e,t=!1){e.get3jsObjects().map(n=>{this.scene.add(n)});let i=e.getId();this.subscribedObjects[i]&&console.error(`Object id is not unique: "${i}". This could prevent objects from updating correctly.`),this.subscribedObjects[i]=e,t&&this.neverUpdatedObjects.add(e.getId())}getObject(e){return this.subscribedObjects[e]}removeObject(e){!this.subscribedObjects[e.getId()]||(e.get3jsObjects().map(t=>{this.scene.remove(t)}),typeof e.removalCleanup=="function"&&e.removalCleanup(),delete this.subscribedObjects[e.getId()],this.neverUpdatedObjects.delete(e.getId()))}removalCleanup(){this.renderEnabled=!1;for(let t in this.subscribedObjects)this.subscribedObjects.hasOwnProperty(t)&&this.removeObject(this.subscribedObjects[t]);let e=this.getRenderer();e.dispose(),e.domElement.remove(),this.scene.clear(),e.forceContextLoss()}createObject(...e){return new Aa(...e,this)}createShape(...e){return new Sh(...e,this)}createSphere(...e){return new Mh(...e,this)}createStaticParticles(...e){return new bh(...e,this)}createSkybox(...e){return new Eh(...e,this)}createStars(...e){return e.length?new sl(...e,this):new sl({},this)}createAmbientLight(e=3355443){let t=new da(e);t.name="ambient-light",this.scene.add(t),this.useLightSources=!0}createLight(e=void 0,t=16777215){this.lightPosition&&console.warn("Spacekit doesn't support more than one light source for SphereObjects"),this.lightPosition=new b;let i=new ha;if(typeof e=="undefined")this.camera.get3jsCameraControls().addEventListener("change",()=>{this.lightPosition.copy(this.camera.get3jsCamera().position),i.position.copy(this.camera.get3jsCamera().position)});else{let n=en(e);this.lightPosition.set(n[0],n[1],n[2]),i.position.set(n[0],n[1],n[2])}i.name="point-light",this.scene.add(i),this.useLightSources=!0}getLightPosition(){return this.lightPosition}isUsingLightSources(){return this.useLightSources}loadNaturalSatellites(){return new vh(this).load()}renderOnlyInViewport(){let e=!0,t=()=>{let i=this.simulationElt.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,a=i.top<=n&&i.top+i.height>=0,o=i.left<=s&&i.left+i.width>=0;return a&&o};window.addEventListener("scroll",()=>{let i=t();e&&!i?(this.renderEnabled=!1,e=!1):!e&&i&&(this.renderEnabled=!0,window.requestAnimationFrame(this.animate),e=!0)}),t()||(this.renderEnabled=!1,e=!1)}zoomToFit(e,t=3){return ui(this,null,function*(){let i=e.getOrbit(),n=i?i.getOrbitShape():yield e.getBoundingObject();return n?(this.doZoomToFit(n,t),!0):!1})}doZoomToFit(e,t){let i=new Ht;i.setFromObject(e);let n=new b;i.getCenter(n);let s=new b;i.getSize(s);let a=this.camera.get3jsCamera(),o=Math.max(s.x,s.y,s.z),l=a.fov*(Math.PI/180),c=Math.abs(o/2*Math.tan(l*2))*t,h=new b;e.getWorldPosition(h);let f=a.position.sub(h).normalize().multiplyScalar(c);a.position.x=f.x,a.position.y=f.y,a.position.z=f.z,a.updateProjectionMatrix(),this.cameraDefaultPos=[f.x,f.y,f.z]}start(){this.lastUpdatedTime=Date.now(),this.isPaused=!1}stop(){this.isPaused=!0}getJd(){return this.jd}setJd(e){this.jd=e,this.update(!0)}getDate(){return Th.default.toDate(this.jd)}setDate(e){this.setJd(Number((0,Th.default)(e)))}getJdDelta(){return this.jdDelta?this.jdDelta:this.jdPerSecond/this.fps}setJdDelta(e){this.jdDelta=e}getJdPerSecond(){if(!this.jdDelta)return this.jdPerSecond}setJdPerSecond(e){this.jdDelta=void 0,this.jdPerSecond=e}getContext(){return{simulation:this,options:this.options,objects:{particles:this.particles,camera:this.camera,scene:this.scene,renderer:this.renderer,composer:this.composer},container:{width:this.simulationElt.offsetWidth,height:this.simulationElt.offsetHeight}}}getSimulationElement(){return this.simulationElt}getViewer(){return this.camera}getScene(){return this.scene}getRenderer(){return this.renderer}setCameraDrift(e){this.enableCameraDrift=e}};var rb=mf;return sb;})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * postprocessing v6.36.7 build Thu Feb 06 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */
//# sourceMappingURL=spacekit.js.map
