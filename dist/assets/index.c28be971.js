var ue=Object.defineProperty,pe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var Y=(t,n,r)=>n in t?ue(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,G=(t,n)=>{for(var r in n||(n={}))be.call(n,r)&&Y(t,r,n[r]);if(X)for(var r of X(n))ve.call(n,r)&&Y(t,r,n[r]);return t},P=(t,n)=>pe(t,ye(n));import{j as s,a as e,L as _,d as Q,b as xe,c as Z,r as m,F as L,e as R,f as j,C as we,s as i,u as ee,g as Se,h as _e,i as $e,k as ke,B as Ne,R as Le,l as D,m as Me,n as ze}from"./vendor.ac5b4116.js";const Ce=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};Ce();const Fe=({setSearch:t,search:n})=>s("header",{className:"header-menu",children:[e(_,{onClick:()=>t(""),to:"/",style:{textDecoration:"none"},children:s("div",{className:"logo-content",children:[e(Q,{className:"logo",style:{fontSize:"40px",color:"#FFF"}}),e("h1",{className:"logo-title",children:"What is that movie"})]})}),e("a",{style:{color:"white",fontSize:"1.8rem",textDecoration:"none",fontFamily:"Inter"},href:"/movies",children:"Filmes"}),e("a",{style:{color:"white",fontSize:"1.8rem",textDecoration:"none",fontFamily:"Inter"},href:"/series",children:"S\xE9ries"}),e(_,{style:{color:"white",fontSize:"1.8rem",textDecoration:"none",fontFamily:"Inter"},to:"/my-list",children:"Minha lista"}),s("div",{className:"input-search-content",children:[e(xe,{style:{fontSize:"2.4rem",color:"white"}}),e("input",{className:"input-search",value:n,onChange:r=>{r.preventDefault(),t(r.target.value)},type:"search",placeholder:"Search a movie"})]})]}),N="518e7f0f7d540796b4aed902d41c42c9",k=t=>`https://www.themoviedb.org/t/p/original${t}`,M=Z.create({baseURL:"https://api.themoviedb.org/3"});function De(){const[t,n]=m.exports.useState([]),r=navigator.language,l=()=>{M.get(`trending/all/day?api_key=${N}&language=${r}`).then(({data:c})=>{n(c.results.slice(0,6))}).catch(c=>{console.warn(c)})};m.exports.useEffect(()=>{l()},[]);const o=m.exports.useRef();let a=0;const h=()=>{o.current.scrollLeft-=o.current.offsetWidth,a--,a<0&&(o.current.scrollLeft=o.current.offsetWidth*t.length,a=t.length-1)},g=()=>{o.current.scrollLeft+=o.current.offsetWidth,a++,a==t.length&&(o.current.scrollLeft=0,a=0)};return s(L,{children:[e("div",{className:"handle-slide",style:{left:".1rem"},onClick:h,children:e(R,{style:{fontSize:"3rem"},color:"primary"})}),e("div",{className:"banner-container",ref:o,children:e("ul",{className:"banner-carousel",children:t.map(c=>{const x=c.overview.length>250?c.overview.slice(0,250)+"...":c.overview;return s("li",{className:"banner-slider",children:[s("div",{className:"slider-content",children:[e(_,{to:`/${c.media_type}/${c.id}`,children:e("h1",{className:"slider-content-title",children:c.title||c.name})}),e("p",{className:"slider-content-description",children:x}),e(_,{className:"button-more",to:`/${c.media_type}/${c.id}`,children:"Saiba mais"})]}),e(_,{to:`/${c.media_type}/${c.id}`,children:e("img",{className:"slider-img",src:k(c.backdrop_path),alt:c.title||c.name})})]},c.id)})})}),e("div",{className:"handle-slide",style:{right:".1rem"},onClick:g,children:e(j,{style:{fontSize:"3rem"},color:"primary"})})]})}function E({Type:t,Genre:n,GenreName:r}){const[l,o]=m.exports.useState([]),a=navigator.language;m.exports.useEffect(()=>{h()},[]);const h=()=>{M.get(`${t}/${n}?api_key=${N}&language=${a}&page=1`).then(({data:u})=>o(u.results))},g=m.exports.useRef();let c=0;const x=()=>{g.current.scrollLeft-=g.current.offsetWidth,c--,c<0&&(g.current.scrollLeft=g.current.offsetWidth*l.length,c=3)},w=()=>{g.current.scrollLeft+=g.current.offsetWidth,c++,c==4&&(g.current.scrollLeft=0,c=0)};return s("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:r}),s("ul",{className:"slide-carousel",ref:g,children:[e("button",{className:"slide-button",style:{left:0},onClick:x,children:e(R,{style:{color:"#FFF",fontSize:"4rem"}})}),l.map(u=>e("li",{className:"slide-item",children:e(_,{to:`/${t}/${u.id}`,children:e("img",{className:"slide-img",src:k(u.poster_path),alt:u.title||u.name})})},u.id)),e("button",{className:"slide-button",style:{right:0},onClick:w,children:e(j,{style:{color:"#FFF",fontSize:"4rem"}})})]})]})}function Ie(){return s(L,{children:[e(De,{}),e(E,{Type:"movie",Genre:"popular",GenreName:"Filmes populares"}),e(E,{Type:"tv",Genre:"popular",GenreName:"S\xE9rie populares"}),e(E,{Type:"movie",Genre:"top_rated",GenreName:"Cl\xE1ssicos"}),e(E,{Type:"movie",Genre:"now_playing",GenreName:"Em cartaz"})]})}var Te=(t,n)=>{switch(n.type){case"ADD_MOVIE_TO_WATCHLIST":return P(G({},t),{watchlist:[n.payload,...t.watchlist]});default:return t}};const te={watchlist:localStorage.watchlist?JSON.parse(localStorage.watchlist):[]},O=m.exports.createContext(te),Re=t=>{const[n,r]=m.exports.useReducer(Te,te);m.exports.useEffect(()=>{localStorage.setItem("watchlist",JSON.stringify(n.watchlist))},[n]);const l=o=>{r({type:"ADD_MOVIE_TO_WATCHLIST",payload:o})};return e(O.Provider,{value:{watchlist:n.watchlist,addMovieToWatchList:l},children:t.children})};function je(){return s("div",{style:{display:"flex",flexDirection:"column",gap:"4rem",alignItems:"center",justifyContent:"center",backgroundColor:"#030b17",position:"fixed",zIndex:999,bottom:0,top:0,left:0,right:0},children:[e(Q,{style:{fontSize:"8rem",color:"#fff"}}),e(we,{style:{color:"#fff"}})]})}const Ee=i.div`
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
`,re=i.span`
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
`,Je=i(re)`
  font-size: 2rem;
`,Ke=i.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 4rem;
`,Xe=i(_)`
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
`,ie=i.h2`
  font-size: 2.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: white;
`,ne=i.p`
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;

  color: white;
  opacity: 0.9;
  line-height: 1.5;
  text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
`;i(ie)``;i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;i(ne)`
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
`,at=i.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 0.8rem 0.8rem 0 0;
`,oe=i.button`
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
`;function lt({cast:t}){ee();const n=m.exports.useRef();let r=0;const l=()=>{n.current.scrollLeft-=n.current.offsetWidth,r--,r<0&&(n.current.scrollLeft=n.current.offsetWidth*t.length,r=t.length-1)},o=()=>{n.current.scrollLeft+=n.current.offsetWidth,r++,r==t.length&&(n.current.scrollLeft=0,r=0)};return s(it,{children:[e(nt,{children:"Elenco principal"}),s(ot,{className:"carousel",ref:n,children:[e(oe,{style:{left:0},onClick:l,children:e(R,{style:{color:"#FFF",fontSize:"4rem"}})}),t==null?void 0:t.map(a=>{const h=a.profile_path!==null?k(a.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT05fi8hhDM3K386lZ1X5ohWlolSJV71FgMPySBO4XC9dcm5jD2AVAdd8gtRbgOQ-FdM&usqp=CAU";return s(st,{children:[e(at,{src:h}),s("div",{style:{width:"100%",height:"100%",textAlign:"center",background:"#f4f4f4",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:".5rem 0"},children:[e("p",{style:{fontSize:"1.4rem",fontWeight:"700",fontFamily:"Inter",flex:1,lineHeight:2},children:a.name}),e("p",{style:{fontSize:"1.4rem",fontFamily:"Roboto"},children:a.character})]})]},a.name)}),e(oe,{style:{right:0},onClick:o,children:e(j,{style:{color:"#FFF",fontSize:"4rem"}})})]})]})}const ct=i.div`
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
`,gt=i.iframe``;function ut({displayTrailer:t,displayHandler:n,movieTitle:r,haveTrailer:l}){const o=t=="flex";return e(ct,{style:{display:t},children:s(dt,{children:[s(mt,{children:[e(ft,{children:r}),e(ht,{children:e(Se,{onClick:n,style:{cursor:"pointer",fontSize:"3rem",color:"#fff"}})})]}),l&&o?e(L,{children:e(gt,{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${l.key||l[0].key}`,title:l.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{border:"none"}})}):""]})})}const pt=i.div`
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
`;function wt({type:t,recommendationsContent:n}){const r=m.exports.useRef(),l=t=="movie"?"Filmes":"S\xE9ries";let o=0;const a=()=>{r.current.scrollLeft-=r.current.offsetWidth,o--,o<=0&&(r.current.scrollLeft=r.current.offsetWidth*n.length,o=3)},h=()=>{r.current.scrollLeft+=r.current.offsetWidth,o++,o==4&&(r.current.scrollLeft=0,o=0)};return s(pt,{children:[e(yt,{children:`${l} semelhantes`}),s(bt,{className:"carousel",ref:r,children:[e(se,{className:"slide-btn",style:{left:0},onClick:a,children:e(R,{style:{color:"#FFF",fontSize:"4rem"}})}),n.map(g=>e("a",{href:`/${t}/${g.id}`,children:e(vt,{className:"slide-item",children:e(xt,{className:"slide-img",src:k(g.poster_path)})})},g.id)),e(se,{className:"slide-btn",style:{right:0},onClick:h,children:e(j,{style:{color:"#FFF",fontSize:"4rem"}})})]})]})}function St(){var V,U;const[t,n]=m.exports.useState([]),[r,l]=m.exports.useState([]),[o,a]=m.exports.useState(!0),[h,g]=m.exports.useState([]),[c,x]=m.exports.useState("none"),w=navigator.language;let u,v,$,S,f,p,y,b;const{type:I,id:W}=ee(),ce=()=>{Z.get(`https://api.themoviedb.org/3/${I}/${W}?api_key=${N}&append_to_response=videos,images,release_dates,content_ratings,recommendations,credits&include_image_language=${w},null&include_video_language=${w},en&language=${w}`).then(({data:d})=>{n(d),g(d.videos.results),d.release_dates&&l(d.release_dates.results)}).catch(d=>{console.warn(d)}).finally(()=>{a(!1)})};m.exports.useEffect(()=>{ce(),window.scrollTo(1,0)},[W]);const B=r==null?void 0:r.filter(d=>d.iso_3166_1==w.slice(3)),de=r==null?void 0:r.filter(d=>d.iso_3166_1=="US");switch(t.content_ratings&&(p=t.content_ratings.results.filter(d=>d.iso_3166_1==w.slice(3)),y=t.content_ratings.results.filter(d=>d.iso_3166_1=="US"),p!=!1?f=p==null?void 0:p[0].rating:p!=!1&&y?f=y==null?void 0:y[0].rating:f=null),t.content_ratings||(f=B!=!1?(V=B[0])==null?void 0:V.release_dates[0].certification:(U=de[0])==null?void 0:U.release_dates[0].certification),f){case"L":S="#20bf55";break;case"10":S="#009ffd";break;case"12":S="#fbd72b";break;case"14":S="#ef5734";break;case"16":S="#a40606";break;case"18":S="#28313b";break;default:S="#9795ef";break}b=t.vote_average>=5?`background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);`:`background-color: #feae96;
background-image: linear-gradient(315deg, #feae96 0%, #fe0944 74%);;
`,t.vote_average==0&&(b=`background-color: #b8c6db;
background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);`);const fe=d=>{const q=d/60,J=Math.floor(q),F=(q-J)*60;let K=F.toFixed()>0&&F.toFixed()<=9?`0${F.toFixed()}m`:`${F.toFixed()}m`;F==0&&(K="");let A=`${J}h ${K}`;return A.startsWith("NaN")&&(A="Em breve"),A},z=h.filter(d=>d.type=="Trailer"&&d.iso_3166_1==w.slice(3)),C=h.filter(d=>d.type=="Trailer"&&d.official&&d.name.toLowerCase().includes("dub")),T=h.filter(d=>d.type=="Trailer"&&d.iso_3166_1=="US");z.length>1?$=z[z.length-1]:$=z,C!=!1&&(C.length>1&&($=C[C.length-1]),$=C),z.length==0&&($=T.length>1?T[T.length-1]:T),I=="tv"?(v=t.episode_run_time,typeof v=="object"&&(v=v[0]),u=new Date(t.first_air_date).toLocaleDateString()):(v=t.runtime,u=new Date(t.release_date).toLocaleDateString());const H=()=>{c=="none"?x("flex"):x("none")},{addMovieToWatchList:me,watchlist:he}=m.exports.useContext(O),ge=!!he.find(d=>d.id===t.id);return e(L,{children:o?e(je,{}):s(Ee,{children:[s(Ae,{className:"moviepage-details",children:[e(Ge,{bg:k(t.backdrop_path)}),e(Pe,{className:"movie-imgdiv",children:e(Oe,{src:k(t.poster_path)})}),s(We,{children:[e(Be,{className:"movie-title",children:t.title||t.name}),s(He,{children:[s(Ue,{children:[f&&e(Ve,{certificationColor:S,children:f}),e(_e,{style:{color:"#fff",opacity:.8,fontSize:"2rem",marginLeft:"1rem"}}),e(re,{children:fe(v)})]}),e(Je,{children:u}),$!=!1&&s(Qe,{onClick:H,children:[e($e,{style:{color:"#fff",fontSize:"3rem"}}),e(Ze,{children:"Reproduzir Trailer"})]})]}),s(qe,{children:[e(et,{bgColor:b,children:e(tt,{children:t.vote_average!==0?t.vote_average:"SN"})}),e(Ke,{children:t.genres.map(d=>e(Xe,{to:`/movies/?gen=${d.id}`,children:d.name},d.id))})]}),s(rt,{disabled:ge,onClick:()=>me(P(G({},t),{type:I})),children:[e(ke,{style:{fontSize:"2.5rem"}}),"Adicionar \xE0 lista"]}),e(Ye,{children:t.tagline}),e(ie,{children:"Sinopse"}),e(ne,{children:t.overview})]})]}),s("div",{style:{backgroundColor:"#030b17",width:"100%",height:"100%"},children:[e(lt,{cast:t.credits.cast}),t.recommendations.results!=!1&&e(wt,{type:I,recommendationsContent:t.recommendations.results})]}),e(ut,{displayTrailer:c,displayHandler:H,movieTitle:t.title||t.name,haveTrailer:$})]})})}function _t({search:t,setSearch:n}){const[r,l]=m.exports.useState([]),o=navigator.language;m.exports.useEffect(()=>{setTimeout(()=>{a()},1e3)},[t]);const a=()=>{M.get(`search/multi?api_key=${N}&language=${o}&query=${t}&page=1&include_adult=false`).then(({data:h})=>l(h.results))};return s("section",{className:"search-container",children:[s("h1",{className:"search-title",children:['Resultados da busca: "',t,'"']}),e("div",{className:"movies-group",children:r.map(h=>e(L,{children:h.poster_path?e("div",{className:"item",children:e(_,{onClick:()=>n(""),to:`/${h.media_type}/${h.id}`,children:e("img",{className:"item-img",src:k(h.poster_path),alt:h.title||h.name})},h.id)}):""}))})]})}const $t=i.div`
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
`,Ft=()=>{const{watchlist:t}=m.exports.useContext(O);console.log(t);const n=r=>{let l=t;const o=t.indexOf(r);l.splice(o,1),l=JSON.stringify(l),localStorage.setItem("watchlist",l),location.reload()};return s($t,{children:[e(ae,{style:{fontSize:"3rem"},as:"h2",children:"Minha Lista"}),e(kt,{children:t.map(r=>s(Nt,{children:[e(_,{to:`/${r.type}/${r.id}`,children:e(Lt,{src:k(r.poster_path),alt:r.title||r.name})},r.id),s(Mt,{children:[s("div",{children:[e(ae,{children:r.title||r.name}),e(zt,{children:r.release_date?new Date(r.release_date).getFullYear():new Date(r.first_air_date).getFullYear()})]}),e(Ct,{style:{height:"4rem",width:"max-content"},onClick:()=>n(r),children:"Remover filme"})]})]},r.id))})]})};const le=({type:t})=>{const[n,r]=m.exports.useState([]),[l,o]=m.exports.useState([]),[a,h]=m.exports.useState(""),[g,c]=m.exports.useState([]),[x,w]=m.exports.useState(1),u=a.toString(),v=navigator.language;m.exports.useEffect(()=>{M.get(`genre/${t}/list?api_key=${N}&language=pt-BR`).then(({data:f})=>r(f.genres))},[]),m.exports.useEffect(()=>{M.get(`discover/${t}?api_key=${N}&language=${v}&region=${v.slice(3)}&sort_by=popularity.desc&include_adult=false&page=${x}&with_genres=${u}&with_watch_monetization_types=flatrate`).then(({data:f})=>{const p=g.map(b=>b.id),y=f.results.filter(b=>!p.includes(b.id));c(b=>[...b,...y])})},[x]),m.exports.useEffect(()=>{M.get(`discover/${t}?api_key=${N}&language=${v}&region=${v.slice(3)}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${u}&with_watch_monetization_types=flatrate`).then(({data:f})=>{c(f.results)})},[a]);const $=()=>{w(x+1)},S=(f,p)=>{f.preventDefault();const y=p.map(b=>b.toLocaleString().replace(".",""));h(y)};return s("section",{className:"search-container",style:{padding:"2rem 0",backgroundColor:"#030b17"},children:[e("div",{className:"genres-container",children:n.map(f=>e("a",{className:"genre-link",onClick:p=>{if(p.preventDefault(),p.target.classList.toggle("active"),p.target.classList.contains("active")&&o(y=>[...y,f.id]),l.includes(f.id)){let y=l.indexOf(f.id);l.splice(y,1),o(b=>[...b])}l==[]&&o("")},href:`/${f.id}`,children:f.name},f.id))}),e("div",{className:"genre-search-container",children:e("a",{className:"genre-search-item",onClick:f=>S(f,l),children:"Procurar"})}),s("div",{className:"movies-group",style:{display:"flex",justifyContent:"center",margin:0},children:[g.map(f=>e("div",{className:"item",style:{width:"18rem",height:"28rem"},children:e(_,{to:`/${t}/${f.id}`,children:e("img",{className:"item-img",src:k(f.poster_path),alt:f.title||f.name})})},f.id)),e("div",{className:"button-container",children:e("button",{className:"load-button",onClick:$,children:"Carregar mais"})})]})]})};function Dt(){const[t,n]=m.exports.useState("");return s(Ne,{children:[e(Fe,{setSearch:n,search:t}),t.length>1?e(_t,{search:t,setSearch:n}):e(L,{children:s(Le,{children:[e(D,{path:"/",element:e(Ie,{})}),e(D,{path:"/:type/:id",element:e(St,{})}),e(D,{path:"/my-list",element:e(Ft,{})}),e(D,{path:"/movies",element:e(le,{type:"movie"})}),e(D,{path:"/series",element:e(le,{type:"tv"})})]})})]})}Me.render(e(ze.StrictMode,{children:e(Re,{children:e(Dt,{})})}),document.getElementById("root"));
