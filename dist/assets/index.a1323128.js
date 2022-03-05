var ce=Object.defineProperty,oe=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var Y=(t,r,i)=>r in t?ce(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,O=(t,r)=>{for(var i in r||(r={}))he.call(r,i)&&Y(t,i,r[i]);if(X)for(var i of X(r))me.call(r,i)&&Y(t,i,r[i]);return t},I=(t,r)=>oe(t,de(r));import{j as n,a as e,L as N,F as Q,b as ue,c as Z,r as o,d as L,M as z,e as E,C as fe,f as ge,s as pe,u as ve,g as ye,h as Ne,i as be,B as we,R as _e,k as R,l as xe,m as $e}from"./vendor.9e3274ba.js";const Se=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(c){if(c.ep)return;c.ep=!0;const s=i(c);fetch(c.href,s)}};Se();const Le=({setSearch:t,search:r})=>n("header",{className:"header-menu",children:[e(N,{onClick:()=>t(""),to:"/",style:{textDecoration:"none"},children:n("div",{className:"logo-content",children:[e("h1",{className:"logo-title",children:"Movies."}),e(Q,{className:"logo",size:"4.5rem",color:"white"})]})}),e(N,{className:"page",to:"/movies",children:"Filmes"}),e(N,{className:"page",to:"/series",children:"S\xE9ries"}),e(N,{className:"page",to:"/my-list",children:"Minha lista"}),n("div",{className:"input-search-content",children:[e(ue,{size:"2rem",color:"white"}),e("input",{className:"input-search",value:r,onChange:i=>{i.preventDefault(),t(i.target.value)},type:"search",placeholder:"Search a movie"})]})]}),k="518e7f0f7d540796b4aed902d41c42c9",M=Z.create({baseURL:"https://api.themoviedb.org/3"});function ke(){const[t,r]=o.exports.useState([]),i=navigator.language;let a=0;const c=()=>{M.get(`trending/all/day?api_key=${k}&language=${i}`).then(({data:m})=>{r(m.results.slice(0,7))}).catch(m=>{console.warn(m)})};o.exports.useEffect(()=>{c()},[]);const s=o.exports.useRef(),l=()=>{s.current.scrollLeft-=s.current.offsetWidth,a--,a<0&&(s.current.scrollLeft=s.current.offsetWidth*t.length,a=t.length-1)},u=()=>{s.current.scrollLeft+=s.current.offsetWidth,a++,a==t.length&&(s.current.scrollLeft=0,a=0)};return n(L,{children:[e("div",{className:"handle-slide",style:{left:".1rem"},onClick:l,children:e(z,{size:"5rem",color:"#f03a47"})}),e("div",{className:"banner-container",ref:s,children:e("ul",{className:"banner-carousel",children:t.map(m=>{const g=m.overview.length>250?m.overview.slice(0,250)+"...":m.overview;return n("li",{className:"banner-slider",children:[n("div",{className:"slider-content",children:[e(N,{to:`/${m.media_type}/${m.id}`,children:e("h1",{className:"slider-content-title",children:m.title||m.name})}),e("p",{className:"slider-content-description",children:g}),e(N,{className:"button-more",to:`/${m.media_type}/${m.id}`,children:"Saiba mais"})]}),e(N,{to:`/${m.media_type}/${m.id}`,children:e("img",{className:"slider-img",src:`https://www.themoviedb.org/t/p/w1280${m.backdrop_path}`,alt:m.title||m.name})})]},m.id)})})}),e("div",{className:"handle-slide",style:{right:".1rem"},onClick:u,children:e(E,{size:"5rem",color:"#f03a47"})})]})}function G(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"4rem",alignItems:"center",justifyContent:"center",backgroundColor:"#030b17",position:"fixed",zIndex:999,bottom:0,top:0,left:0,right:0},children:[n("div",{style:{display:"flex",alignItems:"center"},children:[e("h1",{style:{fontSize:"4rem",fontFamily:"Roboto",color:"white",fontWeight:"600"},children:"Movie."}),e(Q,{size:"6rem",color:"#fff"})]}),e(fe,{style:{color:"#fff"}})]})}function W({Type:t,Genre:r,GenreName:i}){const[a,c]=o.exports.useState([]),[s,l]=o.exports.useState(!0),u=navigator.language;o.exports.useEffect(()=>{m()},[]);const m=()=>{M.get(`${t}/${r}?api_key=${k}&language=${u}&page=1`).then(({data:f})=>c(f.results)).finally(()=>{setTimeout(()=>{l(!1)},1e3)})},g=o.exports.useRef();let p=0;const x=()=>{g.current.scrollLeft-=g.current.offsetWidth,p--,p<0&&(g.current.scrollLeft=g.current.offsetWidth*a.length,p=3)},_=()=>{g.current.scrollLeft+=g.current.offsetWidth,p++,p==4&&(g.current.scrollLeft=0,p=0)};return e(L,{children:s?e(G,{}):n("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:i}),n("ul",{className:"slide-carousel",ref:g,children:[e("button",{className:"slide-button",style:{left:0},onClick:x,children:e(z,{size:"5rem",color:"white"})}),a.map(f=>e("li",{className:"slide-item",children:e(N,{to:`/${t}/${f.id}`,children:e("img",{className:"slide-img",src:`https://www.themoviedb.org/t/p/w342${f.poster_path}`,alt:f.title||f.name})})},f.id)),e("button",{className:"slide-button",style:{right:0},onClick:_,children:e(E,{size:"5rem",color:"white"})})]})]})})}function Me(){return n(L,{children:[e(ke,{}),e(W,{Type:"movie",Genre:"popular",GenreName:"Filmes populares"}),e(W,{Type:"tv",Genre:"popular",GenreName:"S\xE9rie populares"}),e(W,{Type:"movie",Genre:"top_rated",GenreName:"Cl\xE1ssicos"}),e(W,{Type:"movie",Genre:"now_playing",GenreName:"Em cartaz"})]})}var Ce=(t,r)=>{switch(r.type){case"ADD_MOVIE_TO_WATCHLIST":return I(O({},t),{watchlist:[r.payload,...t.watchlist]});default:return t}};const ee={watchlist:localStorage.watchlist?JSON.parse(localStorage.watchlist):[]},P=o.exports.createContext(ee),Te=t=>{const[r,i]=o.exports.useReducer(Ce,ee);o.exports.useEffect(()=>{localStorage.setItem("watchlist",JSON.stringify(r.watchlist))},[r]);const a=c=>{i({type:"ADD_MOVIE_TO_WATCHLIST",payload:c})};return e(P.Provider,{value:{watchlist:r.watchlist,addMovieToWatchList:a},children:t.children})};function De({cast:t}){let r=0;const i=o.exports.useRef();o.exports.useEffect(()=>{i.current.scrollLeft=0,r=0},[t]);const a=()=>{i.current.scrollLeft-=i.current.offsetWidth,r--,r<0&&(i.current.scrollLeft=i.current.offsetWidth*t.length,r=t.length-1)},c=()=>{i.current.scrollLeft+=i.current.offsetWidth,r++,r==t.length&&(i.current.scrollLeft=0,r=0)};return n("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:"Elenco principal"}),n("div",{className:"slide-carousel",ref:i,children:[e("button",{className:"slide-button",style:{left:0},onClick:a,children:e(z,{size:"4rem",color:"white"})}),t==null?void 0:t.map(s=>{const l=s.profile_path!==null?`https://www.themoviedb.org/t/p/w342/${s.profile_path}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT05fi8hhDM3K386lZ1X5ohWlolSJV71FgMPySBO4XC9dcm5jD2AVAdd8gtRbgOQ-FdM&usqp=CAU";return n("div",{className:"slide-item",children:[e("img",{className:"slide-img",src:l,alt:s.name}),n("div",{style:{width:"100%",height:"max-content",textAlign:"center",background:"#f4f4f4",display:"flex",alignItems:"center",flexDirection:"column",padding:".5rem 0"},children:[e("p",{style:{fontSize:"1.4rem",fontWeight:"700",fontFamily:"Inter",lineHeight:2},children:s.name}),e("p",{style:{fontSize:"1.4rem",fontFamily:"Roboto",marginTop:"1rem"},children:s.character})]})]},s.name)}),e("button",{className:"slide-button",style:{right:0},onClick:c,children:e(E,{size:"4rem",color:"white"})})]})]})}function Re({displayTrailer:t,displayHandler:r,movieTitle:i,haveTrailer:a}){const c=t=="flex";return e("div",{className:"movie-trailer-container",style:{display:t},children:n("div",{className:"movie-trailer-content",children:[n("div",{className:"movie-content-action",children:[e("h2",{className:"movie-trailer-tag",children:i}),e("div",{className:"movie-content-exit",children:e(ge,{onClick:r,size:"3rem",color:"white",style:{cursor:"pointer"}})})]}),a&&c?e(L,{children:e("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${a.key||a[0].key}`,title:a.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{border:"none"}})}):""]})})}function Fe({type:t,recommendationsContent:r}){let i=0;o.exports.useEffect(()=>{i=4,a.current.scrollLeft=0},[r]);const a=o.exports.useRef(),c=t=="movie"?"Filmes":"S\xE9ries",s=()=>{a.current.scrollLeft-=a.current.offsetWidth,i--,i<=0&&(a.current.scrollLeft=a.current.offsetWidth*r.length,i=3)},l=()=>{a.current.scrollLeft+=a.current.offsetWidth,i++,i==4&&(a.current.scrollLeft=0,i=0)};return n("div",{className:"slide-container",children:[e("h2",{className:"slider-genre-name",children:`${c} semelhantes`}),n("div",{className:"slide-carousel",ref:a,children:[e("button",{className:"slide-button",style:{left:0},onClick:s,children:e(z,{size:"4rem",color:"white"})}),r.map(u=>e(N,{to:`/${t}/${u.id}`,children:e("div",{className:"slide-item",children:e("img",{className:"slide-img",src:`https://www.themoviedb.org/t/p/w342${u.poster_path}`})})},u.id)),e("button",{className:"slide-button",style:{right:0},onClick:l,children:e(E,{size:"4rem",color:"white"})})]})]})}const ze=pe.div`
  background: url("${({bg:t})=>t}");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`;function Ee(){var U,q;const[t,r]=o.exports.useState([]),[i,a]=o.exports.useState([]),[c,s]=o.exports.useState(!0),[l,u]=o.exports.useState([]),[m,g]=o.exports.useState("none"),p=navigator.language;let x,_,f,v,$,S,h,b,w;const{type:y,id:B}=ve(),se=()=>{Z.get(`https://api.themoviedb.org/3/${y}/${B}?api_key=${k}&append_to_response=videos,images,release_dates,content_ratings,recommendations,credits,watch/providers&include_image_language=${p},null&include_video_language=${p},en&language=${p}`).then(({data:d})=>{r(d),u(d.videos.results),d.release_dates&&a(d.release_dates.results)}).catch(d=>{console.warn(d)}).finally(()=>{setTimeout(()=>{s(!1)},1e3)})};o.exports.useEffect(()=>{se(),window.scrollTo(1,0)},[B]);const H=i==null?void 0:i.filter(d=>d.iso_3166_1==p.slice(3)),re=i==null?void 0:i.filter(d=>d.iso_3166_1=="US");switch(t.content_ratings&&(S=t.content_ratings.results.filter(d=>d.iso_3166_1==p.slice(3)),h=t.content_ratings.results.filter(d=>d.iso_3166_1=="US"),S!=!1?$=S==null?void 0:S[0].rating:S!=!1&&h?$=h==null?void 0:h[0].rating:$=null),t.content_ratings||($=H!=!1?(U=H[0])==null?void 0:U.release_dates[0].certification:(q=re[0])==null?void 0:q.release_dates[0].certification),$){case"L":v="#20bf55";break;case"10":v="#009ffd";break;case"12":v="#fbd72b";break;case"14":v="#ef5734";break;case"16":v="#a40606";break;case"18":v="#28313b";break;default:v="#9795ef";break}t.vote_average>=5?(b="#7ee8fa",w="linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)"):t.vote_average==0?(b="#b8c6db",w="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"):(b="#feae96",w="linear-gradient(315deg, #feae96 0%, #fe0944 74%)");const ie=d=>{const J=d/60,V=Math.floor(J),D=(J-V)*60;let K=D.toFixed()>0&&D.toFixed()<=9?`0${D.toFixed()}m`:`${D.toFixed()}m`;D==0&&(K="");let A=`${V}h ${K}`;return A.startsWith("NaN")&&(A="Em breve"),A},C=l.filter(d=>d.type=="Trailer"&&d.iso_3166_1==p.slice(3)),T=l.filter(d=>d.type=="Trailer"&&d.official&&d.name.toLowerCase().includes("dub")),F=l.filter(d=>d.type=="Trailer"&&d.iso_3166_1=="US");C.length>1?f=C[C.length-1]:f=C,T!=!1&&(T.length>1&&(f=T[T.length-1]),f=T),C.length==0&&(f=F.length>1?F[F.length-1]:F),y=="tv"?(_=t.episode_run_time,typeof _=="object"&&(_=_[0]),x=new Date(t.first_air_date).toLocaleDateString()):(_=t.runtime,x=new Date(t.release_date).toLocaleDateString());const j=()=>{m=="none"?g("flex"):g("none")},{addMovieToWatchList:le,watchlist:ae}=o.exports.useContext(P),ne=!!ae.find(d=>d.id===t.id);return e(L,{children:c?e(G,{}):n("div",{className:"movie-page-container",children:[n("div",{className:"movie-page-details",children:[e(ze,{bg:`https://www.themoviedb.org/t/p/w1280${t.backdrop_path}`}),e("div",{className:"movie-img-container",children:e("img",{className:"movie-img",src:`https://www.themoviedb.org/t/p/w780${t.poster_path}`})}),n("div",{className:"movie-description",children:[e("h1",{className:"movie-title",children:t.title||t.name}),n("div",{className:"movie-info",children:[n("div",{className:"movie-runtime-container",children:[$&&e("div",{className:"movie-certification",style:{border:`0.2rem solid ${v}`,backgroundColor:`${v}80`},children:$}),e(ye,{style:{color:"#fff",opacity:.8,fontSize:"2rem",marginLeft:"1rem"}}),e("span",{className:"movie-runtime-span",children:ie(_)})]}),e("span",{className:"movie-release-date",children:x}),f!=!1&&n("div",{className:"see-trailer",onClick:j,children:[e(Ne,{color:"#fff",size:"2rem"}),e("h3",{className:"play-trailer",children:"Reproduzir Trailer"})]})]}),n("div",{className:"movie-release-genre",children:[e("div",{className:"vote-container",style:{backgroundColor:`${b}`,backgroundImage:`${w}`},children:e("div",{className:"vote-done",children:t.vote_average!==0?t.vote_average:"SN"})}),e("div",{className:"movie-genres-container",children:t.genres.map(d=>e(N,{className:"movie-genre",to:`/movies/?gen=${d.id}`,children:d.name},d.id))})]}),n("button",{className:"add-list-btn",disabled:ne,onClick:()=>le(I(O({},t),{type:y})),children:[e(be,{size:"2.5rem"}),"Adicionar \xE0 lista"]}),e("h3",{className:"movie-tagline",children:t.tagline}),e("h2",{className:"sinopse-sbt",children:"Sinopse"}),e("p",{className:"sinopse-content",children:t.overview})]})]}),n("div",{style:{backgroundColor:"#030b17",width:"100%",height:"100%"},children:[e(De,{cast:t.credits.cast}),t.recommendations.results!=!1&&e(Fe,{type:y,recommendationsContent:t.recommendations.results})]}),e(Re,{displayTrailer:m,displayHandler:j,movieTitle:t.title||t.name,haveTrailer:f})]})})}function We({search:t,setSearch:r}){const[i,a]=o.exports.useState([]),c=navigator.language;o.exports.useEffect(()=>{s()},[t]);const s=()=>{M.get(`search/multi?api_key=${k}&language=${c}&query=${t}&page=1&include_adult=false`).then(({data:l})=>a(l.results))};return n("section",{className:"search-container",children:[n("h1",{className:"search-title",children:['Resultados da busca: "',t,'"']}),e("ul",{className:"movies-group",children:i.map(l=>e(L,{children:l.poster_path?e("li",{className:"item",children:e(N,{onClick:()=>r(""),to:`/${l.media_type}/${l.id}`,children:e("img",{className:"item-img",src:`https://www.themoviedb.org/t/p/w342${l.poster_path}`,alt:l.title||l.name})})},l.id):""}))})]})}const Ae=()=>{const{watchlist:t}=o.exports.useContext(P),r=navigator.language,i=s=>{let l=t;const u=t.indexOf(s);l.splice(u,1),l=JSON.stringify(l),localStorage.setItem("watchlist",l),location.reload()},c=t.map(s=>{var l,u;return(u=(l=s["watch/providers"])==null?void 0:l.results[r.slice(3)])==null?void 0:u.flatrate}).map(s=>s);return n("div",{className:"container",children:[e("h3",{className:"item-title",style:{fontSize:"3rem"},as:"h2",children:"Minha Lista"}),e("ul",{className:"item-container",children:t.map((s,l)=>{var u;return n("li",{className:"item-list",children:[e(N,{to:`/${s.type}/${s.id}`,children:e("img",{className:"item-img",src:`https://www.themoviedb.org/t/p/w500${s.poster_path}`,alt:s.title||s.name})},s.id),n("div",{className:"item-info",children:[n("div",{children:[e("h3",{className:"item-title",children:s.title||s.name}),e("p",{className:"item-date",children:s.release_date?new Date(s.release_date).getFullYear():new Date(s.first_air_date).getFullYear()})]}),n("div",{children:[e("h3",{className:"platforms-availables",children:"Plataformas dispon\xEDveis:"}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:(u=c[l])==null?void 0:u.map(m=>e("div",{children:e("img",{src:`https://image.tmdb.org/t/p/w45${m.logo_path}`})},Math.random()*100))})]}),e("button",{className:"delete-btn",style:{height:"4rem",width:"max-content"},onClick:()=>i(s),children:"Remover"})]})]},s.id)})})]})};const te=({type:t})=>{const[r,i]=o.exports.useState(!0),[a,c]=o.exports.useState([]),[s,l]=o.exports.useState([]),[u,m]=o.exports.useState(""),[g,p]=o.exports.useState([]),[x,_]=o.exports.useState(1),f=u.toString(),v=navigator.language;o.exports.useEffect(()=>{M.get(`genre/${t}/list?api_key=${k}&language=pt-BR`).then(({data:h})=>c(h.genres)).finally(()=>i(!1))},[t]),o.exports.useEffect(()=>{M.get(`discover/${t}?api_key=${k}&language=${v}&region=${v.slice(3)}&sort_by=popularity.desc&include_adult=false&page=${x}&with_genres=${f}&with_watch_monetization_types=flatrate`).then(({data:h})=>{const b=g.map(y=>y.id),w=h.results.filter(y=>!b.includes(y.id));p(y=>[...y,...w])})},[x]),o.exports.useEffect(()=>{M.get(`discover/${t}?api_key=${k}&language=${v}&region=${v.slice(3)}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${f}&with_watch_monetization_types=flatrate`).then(({data:h})=>{p(h.results)})},[u||t]);const $=()=>{_(x+1)},S=(h,b)=>{h.preventDefault();const w=b.map(y=>y.toLocaleString().replace(".",""));m(w)};return e(L,{children:r?e(G,{}):n("section",{className:"search-container",style:{backgroundColor:"#030b17"},children:[e("div",{className:"genres-container",children:a.map(h=>e("a",{className:"genre-link",onClick:b=>{if(b.preventDefault(),b.target.classList.toggle("active"),b.target.classList.contains("active")&&l(w=>[...w,h.id]),s.includes(h.id)){let w=s.indexOf(h.id);s.splice(w,1),l(y=>[...y])}s==[]&&l("")},href:`/${h.id}`,children:h.name},h.id))}),e("div",{className:"genre-search-container",children:e("a",{className:"genre-search-item",onClick:h=>S(h,s),children:"Procurar"})}),e("ul",{className:"movies-group",children:g.map(h=>e("li",{className:"item",children:h.poster_path&&e(N,{to:`/${t}/${h.id}`,children:e("img",{className:"item-img",src:`https://www.themoviedb.org/t/p/w342${h.poster_path}`,alt:h.title||h.name})})},h.id))}),e("div",{className:"button-container",children:e("button",{className:"load-button",onClick:$,children:"Carregar mais"})})]})})};function Oe(){const[t,r]=o.exports.useState("");return n(we,{children:[e(Le,{setSearch:r,search:t}),t.length>1?e(We,{search:t,setSearch:r}):e(L,{children:n(_e,{children:[e(R,{path:"/",element:e(Me,{})}),e(R,{path:"/:type/:id",element:e(Ee,{})}),e(R,{path:"/my-list",element:e(Ae,{})}),e(R,{path:"/movies",element:e(te,{type:"movie"})}),e(R,{path:"/series",element:e(te,{type:"tv"})})]})})]})}xe.render(e($e.StrictMode,{children:e(Te,{children:e(Oe,{})})}),document.getElementById("root"));