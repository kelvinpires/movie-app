var de=Object.defineProperty,me=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var Z=(t,r,s)=>r in t?de(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,P=(t,r)=>{for(var s in r||(r={}))fe.call(r,s)&&Z(t,s,r[s]);if(Q)for(var s of Q(r))ge.call(r,s)&&Z(t,s,r[s]);return t},G=(t,r)=>me(t,he(r));import{j as l,a as e,L as N,F as ee,b as ue,c as te,r as c,d as M,M as I,e as O,C as pe,f as ve,s as m,u as ye,g as be,h as Ne,i as xe,B as we,R as _e,k as F,l as Se,m as $e}from"./vendor.9e3274ba.js";const Le=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}};Le();const ke=({setSearch:t,search:r})=>l("header",{className:"header-menu",children:[e(N,{onClick:()=>t(""),to:"/",style:{textDecoration:"none"},children:l("div",{className:"logo-content",children:[e("h1",{className:"logo-title",children:"Movies."}),e(ee,{className:"logo",size:"4.5rem",color:"white"})]})}),e(N,{className:"page",to:"/movies",children:"Filmes"}),e(N,{className:"page",to:"/series",children:"S\xE9ries"}),e(N,{className:"page",to:"/my-list",children:"Minha lista"}),l("div",{className:"input-search-content",children:[e(ue,{size:"2rem",color:"white"}),e("input",{className:"input-search",value:r,onChange:s=>{s.preventDefault(),t(s.target.value)},type:"search",placeholder:"Search a movie"})]})]}),C="518e7f0f7d540796b4aed902d41c42c9",L=t=>`https://www.themoviedb.org/t/p/original${t}`,z=te.create({baseURL:"https://api.themoviedb.org/3"});function Me(){const[t,r]=c.exports.useState([]),s=navigator.language;let n=0;const o=()=>{z.get(`trending/all/day?api_key=${C}&language=${s}`).then(({data:h})=>{r(h.results.slice(0,4))}).catch(h=>{console.warn(h)})};c.exports.useEffect(()=>{o()},[]);const i=c.exports.useRef(),a=()=>{i.current.scrollLeft-=i.current.offsetWidth,n--,n<0&&(i.current.scrollLeft=i.current.offsetWidth*t.length,n=t.length-1)},g=()=>{i.current.scrollLeft+=i.current.offsetWidth,n++,n==t.length&&(i.current.scrollLeft=0,n=0)};return l(M,{children:[e("div",{className:"handle-slide",style:{left:".1rem"},onClick:a,children:e(I,{size:"5rem",color:"#f03a47"})}),e("div",{className:"banner-container",ref:i,children:e("ul",{className:"banner-carousel",children:t.map(h=>{const p=h.overview.length>250?h.overview.slice(0,250)+"...":h.overview;return l("li",{className:"banner-slider",children:[l("div",{className:"slider-content",children:[e(N,{to:`/${h.media_type}/${h.id}`,children:e("h1",{className:"slider-content-title",children:h.title||h.name})}),e("p",{className:"slider-content-description",children:p}),e(N,{className:"button-more",to:`/${h.media_type}/${h.id}`,children:"Saiba mais"})]}),e(N,{to:`/${h.media_type}/${h.id}`,children:e("img",{className:"slider-img",src:L(h.backdrop_path),alt:h.title||h.name})})]},h.id)})})}),e("div",{className:"handle-slide",style:{right:".1rem"},onClick:g,children:e(O,{size:"5rem",color:"#f03a47"})})]})}function j(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"4rem",alignItems:"center",justifyContent:"center",backgroundColor:"#030b17",position:"fixed",zIndex:999,bottom:0,top:0,left:0,right:0},children:[l("div",{style:{display:"flex",alignItems:"center"},children:[e("h1",{style:{fontSize:"4rem",fontFamily:"Roboto",color:"white",fontWeight:"600"},children:"Movie."}),e(ee,{size:"6rem",color:"#fff"})]}),e(pe,{style:{color:"#fff"}})]})}function W({Type:t,Genre:r,GenreName:s}){const[n,o]=c.exports.useState([]),[i,a]=c.exports.useState(!0),g=navigator.language;c.exports.useEffect(()=>{h()},[]);const h=()=>{z.get(`${t}/${r}?api_key=${C}&language=${g}&page=1`).then(({data:u})=>o(u.results)).finally(()=>{setTimeout(()=>{a(!1)},1e3)})},p=c.exports.useRef();let v=0;const S=()=>{p.current.scrollLeft-=p.current.offsetWidth,v--,v<0&&(p.current.scrollLeft=p.current.offsetWidth*n.length,v=3)},_=()=>{p.current.scrollLeft+=p.current.offsetWidth,v++,v==4&&(p.current.scrollLeft=0,v=0)};return e(M,{children:i?e(j,{}):l("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:s}),l("ul",{className:"slide-carousel",ref:p,children:[e("button",{className:"slide-button",style:{left:0},onClick:S,children:e(I,{size:"5rem",color:"white"})}),n.map(u=>e("li",{className:"slide-item",children:e(N,{to:`/${t}/${u.id}`,children:e("img",{className:"slide-img",src:L(u.poster_path),alt:u.title||u.name})})},u.id)),e("button",{className:"slide-button",style:{right:0},onClick:_,children:e(O,{size:"5rem",color:"white"})})]})]})})}function Ce(){return l(M,{children:[e(Me,{}),e(W,{Type:"movie",Genre:"popular",GenreName:"Filmes populares"}),e(W,{Type:"tv",Genre:"popular",GenreName:"S\xE9rie populares"}),e(W,{Type:"movie",Genre:"top_rated",GenreName:"Cl\xE1ssicos"}),e(W,{Type:"movie",Genre:"now_playing",GenreName:"Em cartaz"})]})}var ze=(t,r)=>{switch(r.type){case"ADD_MOVIE_TO_WATCHLIST":return G(P({},t),{watchlist:[r.payload,...t.watchlist]});default:return t}};const ie={watchlist:localStorage.watchlist?JSON.parse(localStorage.watchlist):[]},B=c.exports.createContext(ie),Re=t=>{const[r,s]=c.exports.useReducer(ze,ie);c.exports.useEffect(()=>{localStorage.setItem("watchlist",JSON.stringify(r.watchlist))},[r]);const n=o=>{s({type:"ADD_MOVIE_TO_WATCHLIST",payload:o})};return e(B.Provider,{value:{watchlist:r.watchlist,addMovieToWatchList:n},children:t.children})};function Te({cast:t}){let r=0;const s=c.exports.useRef();c.exports.useEffect(()=>{s.current.scrollLeft=0,r=0},[t]);const n=()=>{s.current.scrollLeft-=s.current.offsetWidth,r--,r<0&&(s.current.scrollLeft=s.current.offsetWidth*t.length,r=t.length-1)},o=()=>{s.current.scrollLeft+=s.current.offsetWidth,r++,r==t.length&&(s.current.scrollLeft=0,r=0)};return l("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:"Elenco principal"}),l("div",{className:"slide-carousel",ref:s,children:[e("button",{className:"slide-button",style:{left:0},onClick:n,children:e(I,{size:"4rem",color:"white"})}),t==null?void 0:t.map(i=>{const a=i.profile_path!==null?L(i.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT05fi8hhDM3K386lZ1X5ohWlolSJV71FgMPySBO4XC9dcm5jD2AVAdd8gtRbgOQ-FdM&usqp=CAU";return l("div",{className:"slide-item",children:[e("img",{className:"slide-img",src:a,alt:i.name}),l("div",{style:{width:"100%",height:"100%",textAlign:"center",background:"#f4f4f4",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:".5rem 0"},children:[e("p",{style:{fontSize:"1.4rem",fontWeight:"700",fontFamily:"Inter",flex:1,lineHeight:2},children:i.name}),e("p",{style:{fontSize:"1.4rem",fontFamily:"Roboto"},children:i.character})]})]},i.name)}),e("button",{className:"slide-button",style:{right:0},onClick:o,children:e(O,{size:"4rem",color:"white"})})]})]})}function De({displayTrailer:t,displayHandler:r,movieTitle:s,haveTrailer:n}){const o=t=="flex";return e("div",{className:"movie-trailer-container",style:{display:t},children:l("div",{className:"movie-trailer-content",children:[l("div",{className:"movie-content-action",children:[e("h2",{className:"movie-trailer-tag",children:s}),e("div",{className:"movie-content-exit",children:e(ve,{onClick:r,size:"3rem",color:"white",style:{cursor:"pointer"}})})]}),n&&o?e(M,{children:e("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${n.key||n[0].key}`,title:n.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{border:"none"}})}):""]})})}function Fe({type:t,recommendationsContent:r}){let s=0;c.exports.useEffect(()=>{s=4,n.current.scrollLeft=0},[r]);const n=c.exports.useRef(),o=t=="movie"?"Filmes":"S\xE9ries",i=()=>{n.current.scrollLeft-=n.current.offsetWidth,s--,s<=0&&(n.current.scrollLeft=n.current.offsetWidth*r.length,s=3)},a=()=>{n.current.scrollLeft+=n.current.offsetWidth,s++,s==4&&(n.current.scrollLeft=0,s=0)};return l("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:`${o} semelhantes`}),l("div",{className:"slide-carousel",ref:n,children:[e("button",{className:"slide-button",style:{left:0},onClick:i,children:e(I,{size:"4rem",color:"white"})}),r.map(g=>e(N,{to:`/${t}/${g.id}`,children:e("div",{className:"slide-item",children:e("img",{className:"slide-img",src:L(g.poster_path)})})},g.id)),e("button",{className:"slide-button",style:{right:0},onClick:a,children:e(O,{size:"4rem",color:"white"})})]})]})}m.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;m.div`
  width: 100%;
  height: 60%;
  display: flex;
  padding: 2rem 4rem;
`;const Ee=m.div`
  background: url("${({bg:t})=>t}");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`;m.div`
  height: 55rem;
  width: 45%;
  border-radius: 0.5rem;
  z-index: 2;
`;m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;m.div`
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
`;m.h1`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-shadow: 0.2rem 0.1rem 0.3rem #1a1a1a;
`;m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
`;m.div`
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
`;m.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;const Ie=m.span`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  color: #fff;
  opacity: 0.8;
  word-spacing: -0.2rem;
`;m.div`
  display: flex;
  align-items: center;
`;m.p`
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  color: white;
`;m.div`
  display: flex;
  max-width: 100%;
  gap: 1rem;
  margin: 1rem 0;
`;m(Ie)`
  font-size: 2rem;
`;m.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 4rem;
`;m(N)`
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
`;m.h3`
  opacity: 0.8;
  font-size: 1.8rem;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
`;const Oe=m.h2`
  font-size: 2.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: white;
`,We=m.p`
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;

  color: white;
  opacity: 0.9;
  line-height: 1.5;
  text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
`;m(Oe)``;m.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;m(We)`
  font-size: 1.4rem;
  text-align: center;
`;m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;m.h3`
  font-size: 2rem;
  color: #f5f5f5;
  font-family: "Inter", sans-serif;
`;m.div`
  height: 40%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
`;m.div`
  width: 20rem;
  height: 25rem;
`;m.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  padding: 0.5rem;

  ${({bgColor:t})=>t}/* background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%); */
`;m.div`
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
`;m.button`
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
`;function Ae(){var J,V;const[t,r]=c.exports.useState([]),[s,n]=c.exports.useState([]),[o,i]=c.exports.useState(!0),[a,g]=c.exports.useState([]),[h,p]=c.exports.useState("none"),v=navigator.language;let S,_,u,y,$,k,f,x,w;const{type:b,id:H}=ye(),se=()=>{te.get(`https://api.themoviedb.org/3/${b}/${H}?api_key=${C}&append_to_response=videos,images,release_dates,content_ratings,recommendations,credits,watch/providers&include_image_language=${v},null&include_video_language=${v},en&language=${v}`).then(({data:d})=>{r(d),g(d.videos.results),d.release_dates&&n(d.release_dates.results)}).catch(d=>{console.warn(d)}).finally(()=>{setTimeout(()=>{i(!1)},1e3)})};c.exports.useEffect(()=>{se(),window.scrollTo(1,0)},[H]);const U=s==null?void 0:s.filter(d=>d.iso_3166_1==v.slice(3)),ae=s==null?void 0:s.filter(d=>d.iso_3166_1=="US");switch(t.content_ratings&&(k=t.content_ratings.results.filter(d=>d.iso_3166_1==v.slice(3)),f=t.content_ratings.results.filter(d=>d.iso_3166_1=="US"),k!=!1?$=k==null?void 0:k[0].rating:k!=!1&&f?$=f==null?void 0:f[0].rating:$=null),t.content_ratings||($=U!=!1?(J=U[0])==null?void 0:J.release_dates[0].certification:(V=ae[0])==null?void 0:V.release_dates[0].certification),$){case"L":y="#20bf55";break;case"10":y="#009ffd";break;case"12":y="#fbd72b";break;case"14":y="#ef5734";break;case"16":y="#a40606";break;case"18":y="#28313b";break;default:y="#9795ef";break}t.vote_average>=5?(x="#7ee8fa",w="linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)"):t.vote_average==0?(x="#b8c6db",w="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"):(x="#feae96",w="linear-gradient(315deg, #feae96 0%, #fe0944 74%)");const le=d=>{const K=d/60,X=Math.floor(K),D=(K-X)*60;let Y=D.toFixed()>0&&D.toFixed()<=9?`0${D.toFixed()}m`:`${D.toFixed()}m`;D==0&&(Y="");let A=`${X}h ${Y}`;return A.startsWith("NaN")&&(A="Em breve"),A},R=a.filter(d=>d.type=="Trailer"&&d.iso_3166_1==v.slice(3)),T=a.filter(d=>d.type=="Trailer"&&d.official&&d.name.toLowerCase().includes("dub")),E=a.filter(d=>d.type=="Trailer"&&d.iso_3166_1=="US");R.length>1?u=R[R.length-1]:u=R,T!=!1&&(T.length>1&&(u=T[T.length-1]),u=T),R.length==0&&(u=E.length>1?E[E.length-1]:E),b=="tv"?(_=t.episode_run_time,typeof _=="object"&&(_=_[0]),S=new Date(t.first_air_date).toLocaleDateString()):(_=t.runtime,S=new Date(t.release_date).toLocaleDateString());const q=()=>{h=="none"?p("flex"):p("none")},{addMovieToWatchList:ne,watchlist:oe}=c.exports.useContext(B),ce=!!oe.find(d=>d.id===t.id);return e(M,{children:o?e(j,{}):l("div",{className:"movie-page-container",children:[l("div",{className:"movie-page-details",children:[e(Ee,{bg:L(t.backdrop_path)}),e("div",{className:"movie-img-container",children:e("img",{className:"movie-img",src:L(t.poster_path)})}),l("div",{className:"movie-description",children:[e("h1",{className:"movie-title",children:t.title||t.name}),l("div",{className:"movie-info",children:[l("div",{className:"movie-runtime-container",children:[$&&e("div",{className:"movie-certification",style:{border:`0.2rem solid ${y}`,backgroundColor:`${y}80`},children:$}),e(be,{style:{color:"#fff",opacity:.8,fontSize:"2rem",marginLeft:"1rem"}}),e("span",{className:"movie-runtime-span",children:le(_)})]}),e("span",{className:"movie-release-date",children:S}),u!=!1&&l("div",{className:"see-trailer",onClick:q,children:[e(Ne,{color:"#fff",size:"2rem"}),e("h3",{className:"play-trailer",children:"Reproduzir Trailer"})]})]}),l("div",{className:"movie-release-genre",children:[e("div",{className:"vote-container",style:{backgroundColor:`${x}`,backgroundImage:`${w}`},children:e("div",{className:"vote-done",children:t.vote_average!==0?t.vote_average:"SN"})}),e("div",{className:"movie-genres-container",children:t.genres.map(d=>e(N,{className:"movie-genre",to:`/movies/?gen=${d.id}`,children:d.name},d.id))})]}),l("button",{className:"add-list-btn",disabled:ce,onClick:()=>ne(G(P({},t),{type:b})),children:[e(xe,{size:"2.5rem"}),"Adicionar \xE0 lista"]}),e("h3",{className:"movie-tagline",children:t.tagline}),e("h2",{className:"sinopse-sbt",children:"Sinopse"}),e("p",{className:"sinopse-content",children:t.overview})]})]}),l("div",{style:{backgroundColor:"#030b17",width:"100%",height:"100%"},children:[e(Te,{cast:t.credits.cast}),t.recommendations.results!=!1&&e(Fe,{type:b,recommendationsContent:t.recommendations.results})]}),e(De,{displayTrailer:h,displayHandler:q,movieTitle:t.title||t.name,haveTrailer:u})]})})}function Pe({search:t,setSearch:r}){const[s,n]=c.exports.useState([]),o=navigator.language;c.exports.useEffect(()=>{setTimeout(()=>{i()},1e3)},[t]);const i=()=>{z.get(`search/multi?api_key=${C}&language=${o}&query=${t}&page=1&include_adult=false`).then(({data:a})=>n(a.results))};return l("section",{className:"search-container",children:[l("h1",{className:"search-title",children:['Resultados da busca: "',t,'"']}),e("div",{className:"movies-group",children:s.map(a=>e(M,{children:a.poster_path?e("div",{className:"item",children:e(N,{onClick:()=>r(""),to:`/${a.media_type}/${a.id}`,children:e("img",{className:"item-img",src:L(a.poster_path),alt:a.title||a.name})},a.id)}):""}))})]})}const Ge=()=>{const{watchlist:t}=c.exports.useContext(B),r=navigator.language,s=i=>{let a=t;const g=t.indexOf(i);a.splice(g,1),a=JSON.stringify(a),localStorage.setItem("watchlist",a),location.reload()},o=t.map(i=>{var a,g;return(g=(a=i["watch/providers"])==null?void 0:a.results[r.slice(3)])==null?void 0:g.flatrate}).map(i=>i);return l("div",{className:"container",children:[e("h3",{className:"item-title",style:{fontSize:"3rem"},as:"h2",children:"Minha Lista"}),e("ul",{className:"item-container",children:t.map((i,a)=>{var g;return l("li",{className:"item-list",children:[e(N,{to:`/${i.type}/${i.id}`,children:e("img",{className:"item-img",src:L(i.poster_path),alt:i.title||i.name})},i.id),l("div",{className:"item-info",children:[l("div",{children:[e("h3",{className:"item-title",children:i.title||i.name}),e("p",{className:"item-date",children:i.release_date?new Date(i.release_date).getFullYear():new Date(i.first_air_date).getFullYear()})]}),l("div",{children:[e("h3",{className:"platforms-availables",children:"Plataformas dispon\xEDveis:"}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:(g=o[a])==null?void 0:g.map(h=>e("div",{children:e("img",{src:`https://image.tmdb.org/t/p/w45${h.logo_path}`})},Math.random()*100))})]}),e("button",{className:"delete-btn",style:{height:"4rem",width:"max-content"},onClick:()=>s(i),children:"Remover"})]})]},i.id)})})]})};const re=({type:t})=>{const[r,s]=c.exports.useState(!0),[n,o]=c.exports.useState([]),[i,a]=c.exports.useState([]),[g,h]=c.exports.useState(""),[p,v]=c.exports.useState([]),[S,_]=c.exports.useState(1),u=g.toString(),y=navigator.language;c.exports.useEffect(()=>{z.get(`genre/${t}/list?api_key=${C}&language=pt-BR`).then(({data:f})=>o(f.genres)).finally(()=>s(!1))},[t]),c.exports.useEffect(()=>{z.get(`discover/${t}?api_key=${C}&language=${y}&region=${y.slice(3)}&sort_by=popularity.desc&include_adult=false&page=${S}&with_genres=${u}&with_watch_monetization_types=flatrate`).then(({data:f})=>{const x=p.map(b=>b.id),w=f.results.filter(b=>!x.includes(b.id));v(b=>[...b,...w])})},[S]),c.exports.useEffect(()=>{z.get(`discover/${t}?api_key=${C}&language=${y}&region=${y.slice(3)}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${u}&with_watch_monetization_types=flatrate`).then(({data:f})=>{v(f.results)})},[g||t]);const $=()=>{_(S+1)},k=(f,x)=>{f.preventDefault();const w=x.map(b=>b.toLocaleString().replace(".",""));h(w)};return e(M,{children:r?e(j,{}):l("section",{className:"search-container",style:{padding:"2rem 0",backgroundColor:"#030b17"},children:[e("div",{className:"genres-container",children:n.map(f=>e("a",{className:"genre-link",onClick:x=>{if(x.preventDefault(),x.target.classList.toggle("active"),x.target.classList.contains("active")&&a(w=>[...w,f.id]),i.includes(f.id)){let w=i.indexOf(f.id);i.splice(w,1),a(b=>[...b])}i==[]&&a("")},href:`/${f.id}`,children:f.name},f.id))}),e("div",{className:"genre-search-container",children:e("a",{className:"genre-search-item",onClick:f=>k(f,i),children:"Procurar"})}),l("div",{className:"movies-group",style:{display:"flex",justifyContent:"center",margin:0},children:[p.map(f=>e("div",{className:"item",style:{width:"18rem",height:"28rem"},children:e(N,{to:`/${t}/${f.id}`,children:e("img",{className:"item-img",src:L(f.poster_path),alt:f.title||f.name})})},f.id)),e("div",{className:"button-container",children:e("button",{className:"load-button",onClick:$,children:"Carregar mais"})})]})]})})};function je(){const[t,r]=c.exports.useState("");return l(we,{children:[e(ke,{setSearch:r,search:t}),t.length>1?e(Pe,{search:t,setSearch:r}):e(M,{children:l(_e,{children:[e(F,{path:"/",element:e(Ce,{})}),e(F,{path:"/:type/:id",element:e(Ae,{})}),e(F,{path:"/my-list",element:e(Ge,{})}),e(F,{path:"/movies",element:e(re,{type:"movie"})}),e(F,{path:"/series",element:e(re,{type:"tv"})})]})})]})}Se.render(e($e.StrictMode,{children:e(Re,{children:e(je,{})})}),document.getElementById("root"));
