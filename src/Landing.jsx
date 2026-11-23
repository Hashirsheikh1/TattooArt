import React,{useEffect,useRef,useState} from 'react'
import {ArrowUpRight,ArrowRight,Menu,X,ArrowDown,Sun,Moon} from 'lucide-react'
import Lenis from 'lenis'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './styles.css'
import {featuredWork} from './data'
const ROOT=''
const work=[
 ['Traditional piece, Upper arm','Ada Kirchner','photo-1598371839696-5c5bb00bdc28'],
 ['Traditional piece, Full sleeve','Juno Alvarez','photo-1542727365-19732a80dcfd'],
 ['Neo-Traditional piece, Full sleeve','Ada Kirchner','photo-1565058379802-bbe93b2f703a'],
 ['Traditional piece, Hand','Ada Kirchner','photo-1590246815117-cd24ccfa9a2e'],
 ['Neo-Traditional piece, Hand','Ines Varga','photo-1611501275019-9b5cda994e8d'],
 ['Realism piece, Hand','Tomas Reyes','photo-1590736969955-71cc94901144'],
 ['Neo-Traditional piece, Chest','Anouk Peeters','photo-1571205025503-5d4d137b7b87'],
 ['Realism piece, Chest','Delia Fontaine','photo-1598371839696-5c5bb00bdc28'],
 ['Portrait piece, Chest','Delia Fontaine','photo-1542727365-19732a80dcfd'],
 ['Realism piece, Back','Dov Sharman','photo-1565058379802-bbe93b2f703a']
]
const destinations=[
 ['Gallery','Thousands of finished pieces, filterable by style, placement and artist. Find a reference before you find an artist.','/gallery'],
 ['Artists','Full portfolios with pricing, studio location and a real calendar. Send a booking request in a couple of minutes.','/artists'],
 ['Studio','Studios with opening hours, resident artists and directions, so you know exactly where you are going.','/shops'],
 ['Tattoo Hub','Show healed work, ask for advice, join a group and catch flash drops and promotions before they go.','/social']
]
// Reuse copy from the original landing page rather than inventing new feature promises.
const story=[
 {number:'01',big:'Find your inspiration.',detail:'Explore finished tattoo pieces, from fine details to bold statements.',direction:'left'},
 {number:'02',big:'Discover the artists.',detail:'Explore portfolios, styles and the artists behind the work.',direction:'right'},
 {number:'03',big:'Make it yours.',detail:'Connect with an artist and request your next appointment.',direction:'left'},
 {number:'04',big:'Find your studio.',detail:'Browse studio locations, resident artists and opening hours.',direction:'right'},
 {number:'05',big:'Share your story.',detail:'Connect with the tattoo community and discover new work.',direction:'left'}
]
function Logo(){return <a className="logo" href="/" aria-label="Tattoo Art home">Tattoo <span>Art</span></a>}
function Artwork({entry,index}){
 const piece=featuredWork[index];
 return <a className="work-card" href={'/gallery/'+piece.slug} aria-label={'View '+piece.title}>
  <div className="work-photo"><img loading="lazy" src={piece.image} alt={piece.title}/>
   <div className="photo-caption"><span>VIEW WORK</span><ArrowUpRight size={17}/></div></div>
  <div className="work-info"><span>{piece.title}</span><small>Real tattoo reference photography</small></div>
 </a>
}
function SmoothScroll(){useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const lenis=new Lenis({duration:1.15,smoothWheel:true,wheelMultiplier:.95,touchMultiplier:1.1});lenis.scrollTo(0,{immediate:true,force:true});let frame=0;const tick=(time)=>{lenis.raf(time);frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);const handleAnchor=(event)=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const target=link.getAttribute('href');if(!target||target==='#')return;const elem=document.querySelector(target);if(elem){event.preventDefault();lenis.scrollTo(elem,{offset:-76,duration:1.2});history.replaceState(null,'',target)}};document.addEventListener('click',handleAnchor);return()=>{cancelAnimationFrame(frame);document.removeEventListener('click',handleAnchor);lenis.destroy()}},[]);return null}
function StorySection(){const root=useRef(null);useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ctx=gsap.context(()=>{const panels=gsap.utils.toArray('.story-panel');panels.forEach((panel,index)=>{const content=panel.querySelector('.story-content');gsap.fromTo(content,{autoAlpha:0,y:78},{autoAlpha:1,y:0,duration:.72,ease:'power2.out',scrollTrigger:{trigger:panel,start:'top 79%',toggleActions:'play none none none',once:true,invalidateOnRefresh:true}})})},root);ScrollTrigger.refresh();return()=>ctx.revert()},[]);return <section className="story" ref={root} aria-label="Discover Tattoo Art"><div className="shell story-shell">{story.map((s,i)=><article className={`story-panel ${i%2===0?'left':'right'}`} key={s.number}><div className="story-content"><h3>{s.big}</h3><p className="story-detail">{s.detail}</p></div></article>)}</div></section>}
function LandingCardReveals(){
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  // Target cards individually so they appear as they enter the viewport;
  // the approved hero intro and five story reveals remain independent.
  const ctx=gsap.context(()=>{
   const targets=gsap.utils.toArray(
    '.latest-section .section-heading, .latest-section .work-card, .explore-section .explore-heading, .explore-section .explore-card'
   );
   targets.forEach((el,i)=>{
    gsap.fromTo(el,
     {autoAlpha:0,y:46},
     {autoAlpha:1,y:0,duration:.78,ease:'power2.out',
      delay:el.classList.contains('work-card')?(i%3)*.065:0,
      scrollTrigger:{trigger:el,start:'top 93%',once:true,toggleActions:'play none none none'}})
   });
  });
  const refresh=requestAnimationFrame(()=>ScrollTrigger.refresh());
  return()=>{cancelAnimationFrame(refresh);ctx.revert()};
 },[]);
 return null
}
function App({theme,toggleTheme}){const[menu,setMenu]=useState(false);return <div className="site" id="top"><SmoothScroll/><LandingCardReveals/><header className="header"><div className="shell header-row"><Logo/><nav className="desktop-nav" aria-label="Primary navigation">{[['Gallery','/gallery'],['Artists','/artists'],['Studio','/shops'],['Tattoo Hub','/social']].map(([item,path])=><a key={item} href={path}>{item}</a>)}</nav><a className="sign-in" href="/sign-in">SIGN IN <ArrowUpRight size={15}/></a><button type="button" className="ta-theme-toggle ta-theme-toggle-home" onClick={toggleTheme} aria-label={theme==='dark'?'Switch to light theme':'Switch to dark theme'} title={theme==='dark'?'Light mode':'Dark mode'}>{theme==='dark'?<Sun size={19}/>:<Moon size={19}/>}<span>{theme==='dark'?'Light':'Dark'}</span></button><button type="button" className="menu-button" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(v=>!v)}>{menu?<X/>:<Menu/>}</button></div>{menu&&<nav className="mobile-nav">{[['Gallery','/gallery'],['Artists','/artists'],['Studio','/shops'],['Tattoo Hub','/social']].map(([t,path])=><a key={t} onClick={()=>setMenu(false)} href={path}>{t}</a>)}<a href="/sign-in">Sign in</a></nav>}</header>
<section className="hero" aria-labelledby="hero-heading"><div className="hero-image"/><div className="shell hero-inner"><div className="hero-copy"><span className="hero-eyebrow">Artists · Studios · Original ink</span><h1 id="hero-heading"><span>Discover the artwork</span><span>that defines</span><span>you.</span></h1><p className="hero-description">Browse original work, discover the right artist, and step into a studio that matches your style.</p><div className="hero-meta" aria-label="Highlights"><span>Original Work</span><span>Trusted Artists</span><span>Direct Requests</span></div><div className="hero-actions"><a className="btn-primary" href={`${ROOT}/artists`}>Browse artists <ArrowUpRight size={16}/></a><a className="btn-outline" href={`${ROOT}/gallery`}>Explore the gallery <ArrowRight size={16}/></a></div></div></div></section>
<main><section id="latest" className="latest-section"><div className="shell"><div className="section-heading"><div><span className="eyebrow">FRESH INK / 001</span><h2>Latest <em>work.</em></h2></div><a href={`${ROOT}/gallery`} className="text-link top-gallery-link">SEE ALL WORK <ArrowUpRight size={17}/></a></div><div className="work-grid">{work.map((entry,index)=><Artwork key={index} entry={entry} index={index}/>)}</div><a href={`${ROOT}/gallery`} className="text-link bottom-gallery-link">SEE ALL WORK <ArrowUpRight size={17}/></a></div></section>
<StorySection/>
<section className="explore-section"><div className="shell"><div className="explore-heading"><span className="eyebrow">EXPLORE TATTOO ART / 002</span><h2>Find your <em>next move.</em></h2></div><div className="explore-grid">{destinations.map(([title,copy,path],i)=><a id={title==='Studio'?'shops':title==='Tattoo Hub'?'social':title.toLowerCase()} key={title} className={`explore-card explore-${title.toLowerCase().replace(/\s+/g,'-')}`} href={`${ROOT}${path}`}><div className="explore-top"><span>0{i+1} / 04</span><ArrowUpRight size={23}/></div><div className="explore-main"><h3>{title}</h3><p>{copy}</p></div><div className="explore-bottom"><span>EXPLORE {title.toUpperCase()}</span><ArrowRight size={18}/></div></a>)}</div></div></section></main>
<footer className="footer"><div className="shell"><div className="footer-grid"><div className="footer-brand"><Logo/><p>Find the artist whose work you actually want on your skin. Browse portfolios, compare prices, check real availability and book a session.</p></div><div className="footer-list"><h3>Explore</h3><a href={`${ROOT}/gallery`}>Gallery</a><a href={`${ROOT}/artists`}>Tattoo Artists</a><a href={`${ROOT}/shops`}>Tattoo Studios</a><a href={`${ROOT}/social`}>Tattoo Hub</a></div><div className="footer-list"><h3>Community</h3><a href="/social/groups">Groups</a><a href="/social/promotions">Promotions</a></div><div className="footer-list"><h3>Company</h3><a href={`${ROOT}/about`}>About</a><a href={`${ROOT}/contact`}>Contact</a></div><div className="footer-list"><h3>Legal</h3><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a><a href="/cookie-policy">Cookie Policy</a></div></div><div className="footer-line"><span>© 2026 Tattoo Art. All rights reserved.</span><span>Tattooing is permanent. Always choose a licensed artist and follow their aftercare advice.</span></div></div></footer></div>}
export default App
