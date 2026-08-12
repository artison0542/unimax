import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Camera, ChevronDown, Clapperboard, Eye, Flame,
  Instagram, Menu, Maximize, MonitorPlay, Palette, Pause, Phone,
  Play, Sparkles, Volume2, VolumeX, X, Youtube
} from "lucide-react";

type Language = "ua" | "en";
type Category = "all" | "music" | "commercial";

const COPY = {
  ua: {
    nav: ["Шоуріл","Послуги","Портфоліо","Кольорокорекція","Контакти"],
    heroEyebrow:"Кінематографічне відеовиробництво",
    heroTitle:"Створюємо візуальні історії,",
    heroAccent:"які неможливо забути",
    heroBody:"Unimax Production — повний цикл виробництва для брендів, артистів і компаній. Від першої ідеї до фінального кадру.",
    showreel:"HERO SHOWREEL", showreelTitle:"Головний шоуріл",
    showreelBody:"Центральна відеоробота Unimax Production — головний шоуріл, що збирає найсильніші кадри студії.",
    portfolio:"MUSIC VIDEOS SECTION", portfolioBody:"Музичні кліпи",
    grading:"Наш підпис", gradingTitle:"Кольорокорекція Teal & Orange",
    gradingBody:"Ми будуємо настрій кожного кадру через глибокі тіні, теплі відблиски та фірмовий кінематографічний контраст.",
    services:"Послуги", servicesTitle:"Від задуму до готового фільму",
    about:"Про нас", aboutTitle:"Точність у кожному кадрі",
    aboutBody:"Unimax Production — команда, що поєднує режисуру, операторську майстерність і сучасний постпродакшн.",
    contact:"Контакти", contactTitle:"Готові створити щось сильне?",
    contactBody:"Оберіть зручний спосіб звʼязку — без форм і зайвих кроків.",
    filters:{all:"Усі",music:"Музичні кліпи",commercial:"Реклама"}, watch:"Дивитись",
    location:"Київ · Працюємо по всьому світу", footer:"© 2026 Unimax Production. Усі права захищено."
  },
  en: {
    nav:["Showreel","Services","Portfolio","Color Grading","Contact"],
    heroEyebrow:"Cinematic video production", heroTitle:"We craft visual stories",
    heroAccent:"that stay with you",
    heroBody:"Unimax Production is a full-service studio for brands, artists, and companies — from the first idea to the final frame.",
    showreel:"HERO SHOWREEL", showreelTitle:"Main showreel",
    showreelBody:"The central Unimax Production film — a focused reel of the studio’s strongest frames.",
    portfolio:"MUSIC VIDEOS SECTION", portfolioBody:"Music videos",
    grading:"Our signature", gradingTitle:"Teal & Orange Color Grading",
    gradingBody:"We shape the mood of every frame through deep shadows, warm highlights, and a signature cinematic contrast.",
    services:"Services", servicesTitle:"From first idea to final film",
    about:"About us", aboutTitle:"Precision in every frame",
    aboutBody:"Unimax Production combines direction, cinematography, and modern post-production to give every story its own visual language.",
    contact:"Contact", contactTitle:"Ready to make something powerful?",
    contactBody:"Choose the way you want to connect — no forms, no extra steps.",
    filters:{all:"All",music:"Music Videos",commercial:"Commercials"}, watch:"Watch",
    location:"Kyiv · Working worldwide", footer:"© 2026 Unimax Production. All rights reserved."
  }
};

const images = {
  hero:"https://images.pexels.com/photos/10395639/pexels-photo-10395639.jpeg?auto=compress&cs=tinysrgb&w=1400",
  showreel:"https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1200",
  before:"https://images.pexels.com/photos/2510431/pexels-photo-2510431.jpeg?auto=compress&cs=tinysrgb&w=1000",
  after:"https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg?auto=compress&cs=tinysrgb&w=1000",
  detail:"https://images.pexels.com/photos/2877326/pexels-photo-2877326.jpeg?auto=compress&cs=tinysrgb&w=1000"
};

const portfolio = [
  {title:"Artison — Спогади",category:"music" as const,ua:"Музичний кліп",en:"Music Video",views:"1 923 027",videoId:"rGpyuvgNElg",image:images.hero},
  {title:"Artison — У саду",category:"music" as const,ua:"Музичний кліп",en:"Music Video",views:"2 464 814",videoId:"VmDB2O2SF0A",image:images.showreel},
  {title:"OMUT — В її очах",category:"music" as const,ua:"Музичний кліп",en:"Music Video",views:"53 146",videoId:"0ZQC0KGBIOY",image:images.before},
  {title:"Commercial 01",category:"commercial" as const,ua:"Реклама",en:"Commercial",views:"",videoId:"LkOX86yzKsc",image:images.after},
  {title:"Commercial 02",category:"commercial" as const,ua:"Реклама",en:"Commercial",views:"",videoId:"hTXvx_uz7Lk",image:images.detail}
];

function scrollTo(id:string){document.querySelector(id)?.scrollIntoView({behavior:"smooth"});}
function Heading({label,title,body}:{label:string,title:React.ReactNode,body?:string}) {
  return <div className="heading"><span className="pill">{label}</span><h2>{title}</h2>{body&&<p>{body}</p>}</div>
}

function Header({lang,setLang,copy}:{lang:Language,setLang:(x:Language)=>void,copy:any}){
  const [open,setOpen]=useState(false), [scrolled,setScrolled]=useState(false);
  const ids=["#showreel","#services","#portfolio","#grading","#contact"];
  useEffect(()=>{const f=()=>setScrolled(scrollY>25);addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
  return <header className={scrolled?"scrolled":""}><div className="nav wrap">
    <button className="logo" onClick={()=>scrollTo("#top")}>UNIMAX<span>.</span><small>Production</small></button>
    <nav>{copy.nav.map((x:string,i:number)=><button key={x} onClick={()=>scrollTo(ids[i])}>{x}</button>)}</nav>
    <div className="navRight"><div className="langs"><button className={lang==="ua"?"active":""} onClick={()=>setLang("ua")}>UA</button><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button></div><button className="orangeBtn" onClick={()=>scrollTo("#contact")}>{lang==="ua"?"Звʼязатись":"Get in touch"}</button></div>
    <button className="mobileMenu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>{open&&<div className="mobileNav">{copy.nav.map((x:string,i:number)=><button key={x} onClick={()=>{setOpen(false);scrollTo(ids[i])}}>{x}</button>)}</div>}</header>
}

function Hero({copy,lang}:{copy:any,lang:Language}){
 return <section id="top" className="hero"><img src={images.hero}/><div className="overlay"/><div className="wrap heroContent">
   <div className="eyebrow"><Sparkles size={13}/>{copy.heroEyebrow}</div><h1>{copy.heroTitle}<br/><span>{copy.heroAccent}</span></h1><p>{copy.heroBody}</p>
   <div className="actions"><button className="orangeBtn" onClick={()=>scrollTo("#showreel")}><Play size={15} fill="currentColor"/>{lang==="ua"?"Дивитись шоуріл":"Watch showreel"}</button><button className="outlineBtn" onClick={()=>scrollTo("#portfolio")}>{lang==="ua"?"Портфоліо":"View portfolio"}<ArrowRight size={15}/></button></div>
   <div className="stats"><div><b>320+</b><span>{lang==="ua"?"завершених проєктів":"completed projects"}</span></div><div><b>6</b><span>{lang==="ua"?"років досвіду":"years experience"}</span></div><div><b>20+</b><span>{lang==="ua"?"відомих брендів":"known brands"}</span></div></div>
 </div><ChevronDown className="down"/></section>
}

function Showreel({copy}:{copy:any}){
 const [videoError,setVideoError]=useState(false);
 return <section id="showreel" className="dark"><div className="wrap"><Heading label={copy.showreel} title={copy.showreelTitle} body={copy.showreelBody}/>
   <div className="showreelBox">{!videoError?<video controls playsInline preload="metadata" poster={images.showreel} src="/videos/showreel.mp4" onError={()=>setVideoError(true)}/>:<><img src={images.showreel}/><div className="videoFallback"><MonitorPlay size={38}/><b>Showreel</b><span>{copy.showreelBody}</span><small>Чтобы включить локальный шоуріл, положи файл <code>public/videos/showreel.mp4</code></small></div></>}</div>
 </div></section>
}

function Portfolio({copy,lang}:{copy:any,lang:Language}){
 const [filter,setFilter]=useState<Category>("all"),[selected,setSelected]=useState<any>(null);
 const list=filter==="all"?portfolio:portfolio.filter(x=>x.category===filter);
 return <section id="portfolio"><div className="wrap"><Heading label={copy.portfolio} title={<>{copy.portfolio} <span className="teal">Unimax</span></>} body={copy.portfolioBody}/>
   <div className="filters">{(["all","music","commercial"] as Category[]).map(k=><button className={filter===k?"active":""} key={k} onClick={()=>setFilter(k)}>{copy.filters[k]}</button>)}</div>
   <div className="grid">{list.map(x=><button className="card" key={x.videoId} onClick={()=>setSelected(x)}><div className="thumb"><img src={x.image}/><span className="category">{lang==="ua"?x.ua:x.en}</span>{x.views&&<span className="views"><Eye size={12}/>{x.views}</span>}<span className="play"><Play size={20} fill="currentColor"/></span></div><div className="cardTitle">{x.title}<ArrowRight size={16}/></div></button>)}</div>
 </div>{selected&&<div className="modal" onClick={()=>setSelected(null)}><div className="modalBox" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)}><X/></button><div className="embed"><iframe src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1&rel=0`} title={selected.title} allow="autoplay; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div><div className="modalTitle">{selected.title}</div></div></div>}</section>
}

function Grading({copy}:{copy:any}){return <section id="grading" className="dark"><div className="wrap"><Heading label={copy.grading} title={copy.gradingTitle} body={copy.gradingBody}/><div className="gradeGrid"><div><img src={images.before}/><span>FLAT / BEFORE</span></div><div><img className="after" src={images.after}/><span>TEAL & ORANGE / AFTER</span></div></div></div></section>}
function Services({copy}:{copy:any}){const s=copy===COPY.ua?[["Пре-продакшн","Концепція, сценарій, розкадровка та точний план зйомки.",Clapperboard],["Зйомка","Sony, професійне світло та команда, яка тримає кадр.",Camera],["Кольорокорекція","DaVinci Resolve і фірмовий Teal & Orange look.",Palette]]:[["Pre-production","Concept, script, storyboard, and a precise production plan.",Clapperboard],["Production","Sony, professional lighting, and a crew that owns the frame.",Camera],["Color grading","DaVinci Resolve and our signature Teal & Orange look.",Palette]];return <section id="services"><div className="wrap"><Heading label={copy.services} title={copy.servicesTitle}/><div className="serviceGrid">{s.map(([a,b,I])=><div className="service" key={a as string}><I/><h3>{a as string}</h3><p>{b as string}</p></div>)}</div></div></section>}
function About({copy}:{copy:any}){return <section className="dark"><div className="wrap about"><div><Heading label={copy.about} title={copy.aboutTitle} body={copy.aboutBody}/><div className="tags"><span>Sony</span><span>DaVinci Resolve</span><span>Teal & Orange</span></div></div><img src={images.detail}/></div></section>}
function Contact({copy}:{copy:any}){return <section id="contact"><div className="wrap"><Heading label={copy.contact} title={copy.contactTitle} body={copy.contactBody}/><div className="contactGrid"><a href="https://www.youtube.com/@i.artison" target="_blank"><Youtube/><span>YouTube<strong>@i.artison</strong></span></a><a href="https://www.instagram.com/i.artison" target="_blank"><Instagram/><span>Instagram<strong>@i.artison</strong></span></a><a href="tel:+380993695507"><Phone/><span>{copy.location}<strong>+38 099 369 55 07</strong></span></a></div></div></section>}

export default function App(){
 const [lang,setLang]=useState<Language>("ua"),copy=COPY[lang];
 useEffect(()=>{document.documentElement.lang=lang==="ua"?"uk":"en";document.title="Unimax Production"},[lang]);
 return <><Header lang={lang} setLang={setLang} copy={copy}/><main><Hero copy={copy} lang={lang}/><Showreel copy={copy}/><Portfolio copy={copy} lang={lang}/><Grading copy={copy}/><Services copy={copy}/><About copy={copy}/><Contact copy={copy}/></main><footer><div className="wrap"><b>UNIMAX<span>.</span></b><small>{copy.footer}</small></div></footer></>
}
