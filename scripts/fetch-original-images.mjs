/** TattooArt source image downloader (run locally on a machine with internet).
 * Fetches publicly displayed gallery artwork detail pages and saves their main photos.
 * Doesn't extract private assets, personal data, or copyrighted content behind login.
 * Confirm permission to reuse artwork images before distributing a public clone.
 */
import fs from 'node:fs/promises';import path from 'node:path';
const ROOT='https://tattooart.io',DIR=path.resolve('public/images');await fs.mkdir(DIR,{recursive:true});
const get=async u=>{const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0 TattooArtPreview/1.0'},signal:AbortSignal.timeout(25000)});if(!r.ok)throw Error(`${r.status}: ${u}`);return r};
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"');
const abs=(u,b)=>new URL(decode(u),b).href;
const links=[];
for(const page of [ROOT+'/gallery',ROOT]){
 try{const html=await(await get(page)).text();for(const m of html.matchAll(/<a\b([^>]*)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi)){
  const url=abs(m[2],page);if(!url.startsWith(ROOT+'/gallery/')||links.includes(url))continue;links.push(url);
 }}catch(e){console.warn(`Could not inspect ${page}: ${e.message}`)}
}
// Detail HTML may differ between server-side routes and web crawlers; don't guess URLs.
console.log(`Found ${links.length} source gallery detail pages.`);
let saved=0;const candidates=[];
for(let i=0;i<links.length;i++){
 const url=links[i];try{
 const html=await(await get(url)).text();const imgs=[...html.matchAll(/<img\b[^>]*>/gi)].map(m=>m[0]);
 let found=[];for(const t of imgs){const src=t.match(/\b(?:src|data-src)=["']([^"']+)["']/i)?.[1];if(!src||src.startsWith('data:'))continue;const alt=t.match(/\balt=["']([^"']*)["']/i)?.[1]||'';const full=abs(src,url);if(/logo|avatar|icon|favicon|placeholder/i.test(full))continue;found.push({url:full,score:(/tattoo|piece|sleeve|arm|chest|back|hand/i.test(alt)?12:0)+(full.includes('uploads')?5:0)})}
 found.sort((a,b)=>b.score-a.score);let bytes=null;
 for(const x of found){try{const r=await get(x.url);if(!(r.headers.get('content-type')||'').startsWith('image/'))continue;const b=Buffer.from(await r.arrayBuffer());if(b.length<2000)continue;bytes=b;break}catch{}}
 if(!bytes){console.warn(`No accessible artwork image: ${url}`);continue}
 const filename=`piece-${String(i+1).padStart(2,'0')}.jpg`;await fs.writeFile(path.join(DIR,filename),bytes);saved++;candidates.push({index:i+1,sourceDetail:url,local:`/images/${filename}`});console.log(`Saved ${filename}`);
 }catch(e){console.warn(`Skipped ${url}: ${e.message}`)}
}
await fs.writeFile('public/images/source-manifest.json',JSON.stringify({downloaded:saved,images:candidates},null,2));
console.log(`Downloaded ${saved} images; source manifest generated. There may be fewer than all gallery entries if source doesn't expose/download them.`);
