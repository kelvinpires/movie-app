var pe=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var Q=(t,n,r)=>n in t?pe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,P=(t,n)=>{for(var r in n||(n={}))ve.call(n,r)&&Q(t,r,n[r]);if(Y)for(var r of Y(n))xe.call(n,r)&&Q(t,r,n[r]);return t},O=(t,n)=>ye(t,be(n));import{j as a,a as e,L as b,d as Z,b as we,c as ee,r as c,F as M,e as j,f as E,C as Se,s as i,u as te,g as _e,h as $e,i as ke,k as Ne,B as Le,R as Me,l as T,m as ze,n as Ce}from"./vendor.ac8308db.js";const Fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};Fe();const De=({setSearch:t,search:n})=>a("header",{className:"header-menu",children:[e(b,{onClick:()=>t(""),to:"/",style:{textDecoration:"none"},children:a("div",{className:"logo-content",children:[e(Z,{className:"logo",style:{fontSize:"40px",color:"#FFF"}}),e("h1",{className:"logo-title",children:"What is that movie"})]})}),e(b,{style:{color:"white",fontSize:"1.8rem",textDecoration:"none",fontFamily:"Inter"},to:"/movies",children:"Filmes"}),e(b,{style:{color:"white",fontSize:"1.8rem",textDecoration:"none",fontFamily:"Inter"},to:"/series",children:"S\xE9ries"}),e(b,{style:{color:"white",fontSize:"1.8rem",textDecoration:"none",fontFamily:"Inter"},to:"/my-list",children:"Minha lista"}),a("div",{className:"input-search-content",children:[e(we,{style:{fontSize:"2.4rem",color:"white"}}),e("input",{className:"input-search",value:n,onChange:r=>{r.preventDefault(),t(r.target.value)},type:"search",placeholder:"Search a movie"})]})]}),z="518e7f0f7d540796b4aed902d41c42c9",N=t=>`https://www.themoviedb.org/t/p/original${t}`,C=ee.create({baseURL:"https://api.themoviedb.org/3"});function Ie(){const[t,n]=c.exports.useState([]),r=navigator.language,l=()=>{C.get(`trending/all/day?api_key=${z}&language=${r}`).then(({data:h})=>{n(h.results.slice(0,6))}).catch(h=>{console.warn(h)})};c.exports.useEffect(()=>{l()},[]);const o=c.exports.useRef();let s=0;const f=()=>{o.current.scrollLeft-=o.current.offsetWidth,s--,s<0&&(o.current.scrollLeft=o.current.offsetWidth*t.length,s=t.length-1)},v=()=>{o.current.scrollLeft+=o.current.offsetWidth,s++,s==t.length&&(o.current.scrollLeft=0,s=0)};return a(M,{children:[e("div",{className:"handle-slide",style:{left:".1rem"},onClick:f,children:e(j,{style:{fontSize:"3rem"},color:"primary"})}),e("div",{className:"banner-container",ref:o,children:e("ul",{className:"banner-carousel",children:t.map(h=>{const u=h.overview.length>250?h.overview.slice(0,250)+"...":h.overview;return a("li",{className:"banner-slider",children:[a("div",{className:"slider-content",children:[e(b,{to:`/${h.media_type}/${h.id}`,children:e("h1",{className:"slider-content-title",children:h.title||h.name})}),e("p",{className:"slider-content-description",children:u}),e(b,{className:"button-more",to:`/${h.media_type}/${h.id}`,children:"Saiba mais"})]}),e(b,{to:`/${h.media_type}/${h.id}`,children:e("img",{className:"slider-img",src:N(h.backdrop_path),alt:h.title||h.name})})]},h.id)})})}),e("div",{className:"handle-slide",style:{right:".1rem"},onClick:v,children:e(E,{style:{fontSize:"3rem"},color:"primary"})})]})}function W(){return a("div",{style:{display:"flex",flexDirection:"column",gap:"4rem",alignItems:"center",justifyContent:"center",backgroundColor:"#030b17",position:"fixed",zIndex:999,bottom:0,top:0,left:0,right:0},children:[e(Z,{style:{fontSize:"8rem",color:"#fff"}}),e(Se,{style:{color:"#fff"}})]})}function A({Type:t,Genre:n,GenreName:r}){const[l,o]=c.exports.useState([]),[s,f]=c.exports.useState(!0),v=navigator.language;c.exports.useEffect(()=>{h()},[]);const h=()=>{C.get(`${t}/${n}?api_key=${z}&language=${v}&page=1`).then(({data:g})=>o(g.results)).finally(()=>f(!1))},u=c.exports.useRef();let p=0;const $=()=>{u.current.scrollLeft-=u.current.offsetWidth,p--,p<0&&(u.current.scrollLeft=u.current.offsetWidth*l.length,p=3)},_=()=>{u.current.scrollLeft+=u.current.offsetWidth,p++,p==4&&(u.current.scrollLeft=0,p=0)};return e(M,{children:s?e(W,{}):a("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:r}),a("ul",{className:"slide-carousel",ref:u,children:[e("button",{className:"slide-button",style:{left:0},onClick:$,children:e(j,{style:{color:"#FFF",fontSize:"4rem"}})}),l.map(g=>e("li",{className:"slide-item",children:e(b,{to:`/${t}/${g.id}`,children:e("img",{className:"slide-img",src:N(g.poster_path),alt:g.title||g.name})})},g.id)),e("button",{className:"slide-button",style:{right:0},onClick:_,children:e(E,{style:{color:"#FFF",fontSize:"4rem"}})})]})]})})}function Te(){return a(M,{children:[e(Ie,{}),e(A,{Type:"movie",Genre:"popular",GenreName:"Filmes populares"}),e(A,{Type:"tv",Genre:"popular",GenreName:"S\xE9rie populares"}),e(A,{Type:"movie",Genre:"top_rated",GenreName:"Cl\xE1ssicos"}),e(A,{Type:"movie",Genre:"now_playing",GenreName:"Em cartaz"})]})}var Re=(t,n)=>{switch(n.type){case"ADD_MOVIE_TO_WATCHLIST":return O(P({},t),{watchlist:[n.payload,...t.watchlist]});default:return t}};const re={watchlist:localStorage.watchlist?JSON.parse(localStorage.watchlist):[]},B=c.exports.createContext(re),je=t=>{const[n,r]=c.exports.useReducer(Re,re);c.exports.useEffect(()=>{localStorage.setItem("watchlist",JSON.stringify(n.watchlist))},[n]);const l=o=>{r({type:"ADD_MOVIE_TO_WATCHLIST",payload:o})};return e(B.Provider,{value:{watchlist:n.watchlist,addMovieToWatchList:l},children:t.children})},Ee=i.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ae=i.div`
  width: 100%;
  height: 60%;
  display: flex;
  padding: 2rem 4rem;
`,Ge=i.div`
  background: url("${({bg:t})=>t}");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`,Pe=i.div`
  height: 55rem;
  width: 45%;
  border-radius: 0.5rem;
  z-index: 2;
`,Oe=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`,We=i.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  margin: auto 6rem;
  margin-right: 1rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  /* background-color: #ccc; */
`,Be=i.h1`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-shadow: 0.2rem 0.1rem 0.3rem #1a1a1a;
`,He=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
`,Ve=i.div`
  min-width: 3rem;
  height: 3rem;
  max-width: max-content;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  border: 0.2rem solid ${({certificationColor:t})=>t};
  background-color: ${({certificationColor:t})=>`${t}80`};
  border-radius: 0.3rem;
`,Ue=i.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,ie=i.span`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  color: #fff;
  opacity: 0.8;
  word-spacing: -0.2rem;
`;i.div`
  display: flex;
  align-items: center;
`;i.p`
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  color: white;
`;const qe=i.div`
  display: flex;
  max-width: 100%;
  gap: 1rem;
  margin: 1rem 0;
`,Je=i(ie)`
  font-size: 2rem;
`,Ke=i.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 4rem;
`,Xe=i(b)`
  border-radius: 0.5rem;
  background: #09203f;
  color: #f5f5f5;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    filter: brightness(1.2);
  }
`,Ye=i.h3`
  opacity: 0.8;
  font-size: 1.8rem;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
`,ne=i.h2`
  font-size: 2.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: white;
`,oe=i.p`
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;

  color: white;
  opacity: 0.9;
  line-height: 1.5;
  text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
`;i(ne)``;i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;i(oe)`
  font-size: 1.4rem;
  text-align: center;
`;const Qe=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`,Ze=i.h3`
  font-size: 2rem;
  color: #f5f5f5;
  font-family: "Inter", sans-serif;
`;i.div`
  height: 40%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
`;i.div`
  width: 20rem;
  height: 25rem;
`;const et=i.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  padding: 0.5rem;

  ${({bgColor:t})=>t}/* background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%); */
`,tt=i.div`
  width: 100%;
  height: 100%;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 2.6rem;
  font-weight: 600;
  padding: 0.4rem;
  border-radius: 50%;
  background: #15202b;
  display: flex;
  align-items: center;
  justify-content: center;
`,rt=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  width: max-content;
  padding: 0.8rem 1rem 0.8rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #f03a47;
  box-shadow: 0 0.1rem 0.3rem #1a1a1a;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,it=i.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  background-size: cover;
  max-width: 100%;
`,nt=i.h2`
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  margin-left: 5rem;
  color: #f5f5f5;
`,ot=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 2rem 4rem;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`,st=i.div`
  min-width: 20rem;
  border-radius: 0.8rem;
  &:hover {
    opacity: 0.7;
  }
`,lt=i.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 0.8rem 0.8rem 0 0;
`,se=i.button`
  width: 5rem;
  height: 30rem;
  position: absolute;
  z-index: 2;
  background: #1a1a1a80;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #1a1a1a90;
  }
`;function at({cast:t}){te();const n=c.exports.useRef();let r=0;const l=()=>{n.current.scrollLeft-=n.current.offsetWidth,r--,r<0&&(n.current.scrollLeft=n.current.offsetWidth*t.length,r=t.length-1)},o=()=>{n.current.scrollLeft+=n.current.offsetWidth,r++,r==t.length&&(n.current.scrollLeft=0,r=0)};return a(it,{children:[e(nt,{children:"Elenco principal"}),a(ot,{className:"carousel",ref:n,children:[e(se,{style:{left:0},onClick:l,children:e(j,{style:{color:"#FFF",fontSize:"4rem"}})}),t==null?void 0:t.map(s=>{const f=s.profile_path!==null?N(s.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT05fi8hhDM3K386lZ1X5ohWlolSJV71FgMPySBO4XC9dcm5jD2AVAdd8gtRbgOQ-FdM&usqp=CAU";return a(st,{children:[e(lt,{src:f}),a("div",{style:{width:"100%",height:"100%",textAlign:"center",background:"#f4f4f4",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:".5rem 0"},children:[e("p",{style:{fontSize:"1.4rem",fontWeight:"700",fontFamily:"Inter",flex:1,lineHeight:2},children:s.name}),e("p",{style:{fontSize:"1.4rem",fontFamily:"Roboto"},children:s.character})]})]},s.name)}),e(se,{style:{right:0},onClick:o,children:e(E,{style:{color:"#FFF",fontSize:"4rem"}})})]})]})}const ct=i.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  background-color: #00000090;
  &::-webkit-scrollbar {
    display: none;
  }
`,dt=i.div`
  width: 97rem;
  height: 57rem;
  background: #030b17;
  position: relative;
  z-index: 999;
  margin-top: 0.5rem;
`,ft=i.h2`
  font-size: 2.6rem;
  color: #fff;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  margin: 1rem 2rem;
`,mt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 2rem 2rem 0;
`,ht=i.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  &:hover {
    background: #030b17;
    filter: brightness(1.8);
  }
`,gt=i.iframe``;function ut({displayTrailer:t,displayHandler:n,movieTitle:r,haveTrailer:l}){const o=t=="flex";return e(ct,{style:{display:t},children:a(dt,{children:[a(mt,{children:[e(ft,{children:r}),e(ht,{children:e(_e,{onClick:n,style:{cursor:"pointer",fontSize:"3rem",color:"#fff"}})})]}),l&&o?e(M,{children:e(gt,{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${l.key||l[0].key}`,title:l.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{border:"none"}})}):""]})})}const pt=i.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  background-size: cover;
`,yt=i.h2`
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  margin-left: 5rem;
  color: white;
`,bt=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 2rem 4rem;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`,vt=i.div`
  min-width: 20rem;

  &:hover {
    opacity: 0.7;
  }
`,xt=i.img`
  width: 100%;
  height: 30rem;
  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: animate 0.4s ease-in-out;

  object-fit: cover;
`,le=i.button`
  width: 5rem;
  height: 30rem;
  position: absolute;
  z-index: 2;
  background: #1a1a1a80;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #1a1a1a90;
  }
`;function wt({type:t,recommendationsContent:n}){let r=0;c.exports.useEffect(()=>{r=0,l.current.scrollLeft=0},[n]);const l=c.exports.useRef(),o=t=="movie"?"Filmes":"S\xE9ries",s=()=>{l.current.scrollLeft-=l.current.offsetWidth,r--,r<=0&&(l.current.scrollLeft=l.current.offsetWidth*n.length,r=3)},f=()=>{l.current.scrollLeft+=l.current.offsetWidth,r++,r==4&&(l.current.scrollLeft=0,r=0)};return a(pt,{children:[e(yt,{children:`${o} semelhantes`}),a(bt,{className:"carousel",ref:l,children:[e(le,{className:"slide-btn",style:{left:0},onClick:s,children:e(j,{style:{color:"#FFF",fontSize:"4rem"}})}),n.map(v=>e(b,{to:`/${t}/${v.id}`,children:e(vt,{className:"slide-item",children:e(xt,{className:"slide-img",src:N(v.poster_path)})})},v.id)),e(le,{className:"slide-btn",style:{right:0},onClick:f,children:e(E,{style:{color:"#FFF",fontSize:"4rem"}})})]})]})}function St(){var U,q;const[t,n]=c.exports.useState([]),[r,l]=c.exports.useState([]),[o,s]=c.exports.useState(!0),[f,v]=c.exports.useState([]),[h,u]=c.exports.useState("none"),p=navigator.language;let $,_,g,y,k,L,m,S;const{type:x,id:w}=te(),de=()=>{ee.get(`https://api.themoviedb.org/3/${x}/${w}?api_key=${z}&append_to_response=videos,images,release_dates,content_ratings,recommendations,credits&include_image_language=${p},null&include_video_language=${p},en&language=${p}`).then(({data:d})=>{n(d),v(d.videos.results),d.release_dates&&l(d.release_dates.results)}).catch(d=>{console.warn(d)}).finally(()=>{s(!1)})};c.exports.useEffect(()=>{de(),window.scrollTo(1,0)},[w]);const H=r==null?void 0:r.filter(d=>d.iso_3166_1==p.slice(3)),fe=r==null?void 0:r.filter(d=>d.iso_3166_1=="US");switch(t.content_ratings&&(L=t.content_ratings.results.filter(d=>d.iso_3166_1==p.slice(3)),m=t.content_ratings.results.filter(d=>d.iso_3166_1=="US"),L!=!1?k=L==null?void 0:L[0].rating:L!=!1&&m?k=m==null?void 0:m[0].rating:k=null),t.content_ratings||(k=H!=!1?(U=H[0])==null?void 0:U.release_dates[0].certification:(q=fe[0])==null?void 0:q.release_dates[0].certification),k){case"L":y="#20bf55";break;case"10":y="#009ffd";break;case"12":y="#fbd72b";break;case"14":y="#ef5734";break;case"16":y="#a40606";break;case"18":y="#28313b";break;default:y="#9795ef";break}S=t.vote_average>=5?`background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);`:`background-color: #feae96;
background-image: linear-gradient(315deg, #feae96 0%, #fe0944 74%);;
`,t.vote_average==0&&(S=`background-color: #b8c6db;
background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);`);const me=d=>{const J=d/60,K=Math.floor(J),I=(J-K)*60;let X=I.toFixed()>0&&I.toFixed()<=9?`0${I.toFixed()}m`:`${I.toFixed()}m`;I==0&&(X="");let G=`${K}h ${X}`;return G.startsWith("NaN")&&(G="Em breve"),G},F=f.filter(d=>d.type=="Trailer"&&d.iso_3166_1==p.slice(3)),D=f.filter(d=>d.type=="Trailer"&&d.official&&d.name.toLowerCase().includes("dub")),R=f.filter(d=>d.type=="Trailer"&&d.iso_3166_1=="US");F.length>1?g=F[F.length-1]:g=F,D!=!1&&(D.length>1&&(g=D[D.length-1]),g=D),F.length==0&&(g=R.length>1?R[R.length-1]:R),x=="tv"?(_=t.episode_run_time,typeof _=="object"&&(_=_[0]),$=new Date(t.first_air_date).toLocaleDateString()):(_=t.runtime,$=new Date(t.release_date).toLocaleDateString());const V=()=>{h=="none"?u("flex"):u("none")},{addMovieToWatchList:he,watchlist:ge}=c.exports.useContext(B),ue=!!ge.find(d=>d.id===t.id);return e(M,{children:o?e(W,{}):a(Ee,{children:[a(Ae,{className:"moviepage-details",children:[e(Ge,{bg:N(t.backdrop_path)}),e(Pe,{className:"movie-imgdiv",children:e(Oe,{src:N(t.poster_path)})}),a(We,{children:[e(Be,{className:"movie-title",children:t.title||t.name}),a(He,{children:[a(Ue,{children:[k&&e(Ve,{certificationColor:y,children:k}),e($e,{style:{color:"#fff",opacity:.8,fontSize:"2rem",marginLeft:"1rem"}}),e(ie,{children:me(_)})]}),e(Je,{children:$}),g!=!1&&a(Qe,{onClick:V,children:[e(ke,{style:{color:"#fff",fontSize:"3rem"}}),e(Ze,{children:"Reproduzir Trailer"})]})]}),a(qe,{children:[e(et,{bgColor:S,children:e(tt,{children:t.vote_average!==0?t.vote_average:"SN"})}),e(Ke,{children:t.genres.map(d=>e(Xe,{to:`/movies/?gen=${d.id}`,children:d.name},d.id))})]}),a(rt,{disabled:ue,onClick:()=>he(O(P({},t),{type:x})),children:[e(Ne,{style:{fontSize:"2.5rem"}}),"Adicionar \xE0 lista"]}),e(Ye,{children:t.tagline}),e(ne,{children:"Sinopse"}),e(oe,{children:t.overview})]})]}),a("div",{style:{backgroundColor:"#030b17",width:"100%",height:"100%"},children:[e(at,{cast:t.credits.cast}),t.recommendations.results!=!1&&e(wt,{type:x,recommendationsContent:t.recommendations.results})]}),e(ut,{displayTrailer:h,displayHandler:V,movieTitle:t.title||t.name,haveTrailer:g})]})})}function _t({search:t,setSearch:n}){const[r,l]=c.exports.useState([]),o=navigator.language;c.exports.useEffect(()=>{setTimeout(()=>{s()},1e3)},[t]);const s=()=>{C.get(`search/multi?api_key=${z}&language=${o}&query=${t}&page=1&include_adult=false`).then(({data:f})=>l(f.results))};return a("section",{className:"search-container",children:[a("h1",{className:"search-title",children:['Resultados da busca: "',t,'"']}),e("div",{className:"movies-group",children:r.map(f=>e(M,{children:f.poster_path?e("div",{className:"item",children:e(b,{onClick:()=>n(""),to:`/${f.media_type}/${f.id}`,children:e("img",{className:"item-img",src:N(f.poster_path),alt:f.title||f.name})},f.id)}):""}))})]})}const $t=i.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
`,kt=i.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
`,Nt=i.li`
  width: 40rem;
  height: 28rem;

  display: flex;
  gap: 1rem;
  margin: 2rem 1rem;
`,Lt=i.img`
  width: 18rem;

  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`,Mt=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  gap: 0.5rem;
`,ae=i.h3`
  font-size: 2.2rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  color: white;
`,zt=i.p`
  font-family: "Poppins", sans-serif;
  color: #ffffff80;
  font-style: italic;
  font-size: 1.4rem;
`,Ct=i.button`
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: #f03a47;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`,Ft=()=>{const{watchlist:t}=c.exports.useContext(B);console.log(t);const n=r=>{let l=t;const o=t.indexOf(r);l.splice(o,1),l=JSON.stringify(l),localStorage.setItem("watchlist",l),location.reload()};return a($t,{children:[e(ae,{style:{fontSize:"3rem"},as:"h2",children:"Minha Lista"}),e(kt,{children:t.map(r=>a(Nt,{children:[e(b,{to:`/${r.type}/${r.id}`,children:e(Lt,{src:N(r.poster_path),alt:r.title||r.name})},r.id),a(Mt,{children:[a("div",{children:[e(ae,{children:r.title||r.name}),e(zt,{children:r.release_date?new Date(r.release_date).getFullYear():new Date(r.first_air_date).getFullYear()})]}),e(Ct,{style:{height:"4rem",width:"max-content"},onClick:()=>n(r),children:"Remover filme"})]})]},r.id))})]})};const ce=({type:t})=>{const[n,r]=c.exports.useState(!0),[l,o]=c.exports.useState([]),[s,f]=c.exports.useState([]),[v,h]=c.exports.useState(""),[u,p]=c.exports.useState([]),[$,_]=c.exports.useState(1),g=v.toString(),y=navigator.language;c.exports.useEffect(()=>{C.get(`genre/${t}/list?api_key=${z}&language=pt-BR`).then(({data:m})=>o(m.genres)).finally(()=>r(!1))},[t]),c.exports.useEffect(()=>{C.get(`discover/${t}?api_key=${z}&language=${y}&region=${y.slice(3)}&sort_by=popularity.desc&include_adult=false&page=${$}&with_genres=${g}&with_watch_monetization_types=flatrate`).then(({data:m})=>{const S=u.map(w=>w.id),x=m.results.filter(w=>!S.includes(w.id));p(w=>[...w,...x])})},[$]),c.exports.useEffect(()=>{C.get(`discover/${t}?api_key=${z}&language=${y}&region=${y.slice(3)}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${g}&with_watch_monetization_types=flatrate`).then(({data:m})=>{p(m.results)})},[v||t]);const k=()=>{_($+1)},L=(m,S)=>{m.preventDefault();const x=S.map(w=>w.toLocaleString().replace(".",""));h(x)};return e(M,{children:n?e(W,{}):a("section",{className:"search-container",style:{padding:"2rem 0",backgroundColor:"#030b17"},children:[e("div",{className:"genres-container",children:l.map(m=>e("a",{className:"genre-link",onClick:S=>{if(S.preventDefault(),S.target.classList.toggle("active"),S.target.classList.contains("active")&&f(x=>[...x,m.id]),s.includes(m.id)){let x=s.indexOf(m.id);s.splice(x,1),f(w=>[...w])}s==[]&&f("")},href:`/${m.id}`,children:m.name},m.id))}),e("div",{className:"genre-search-container",children:e("a",{className:"genre-search-item",onClick:m=>L(m,s),children:"Procurar"})}),a("div",{className:"movies-group",style:{display:"flex",justifyContent:"center",margin:0},children:[u.map(m=>e("div",{className:"item",style:{width:"18rem",height:"28rem"},children:e(b,{to:`/${t}/${m.id}`,children:e("img",{className:"item-img",src:N(m.poster_path),alt:m.title||m.name})})},m.id)),e("div",{className:"button-container",children:e("button",{className:"load-button",onClick:k,children:"Carregar mais"})})]})]})})};function Dt(){const[t,n]=c.exports.useState("");return a(Le,{children:[e(De,{setSearch:n,search:t}),t.length>1?e(_t,{search:t,setSearch:n}):e(M,{children:a(Me,{children:[e(T,{path:"/",element:e(Te,{})}),e(T,{path:"/:type/:id",element:e(St,{})}),e(T,{path:"/my-list",element:e(Ft,{})}),e(T,{path:"/movies",element:e(ce,{type:"movie"})}),e(T,{path:"/series",element:e(ce,{type:"tv"})})]})})]})}ze.render(e(Ce.StrictMode,{children:e(je,{children:e(Dt,{})})}),document.getElementById("root"));
