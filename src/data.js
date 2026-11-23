export const artworkPhotoUrls=[
 '/images/female-ornamental-back.jpg',
 '/images/piece-lion-sleeve.jpg',
 '/images/female-bat-wings-back.jpg',
 '/images/piece-dragon-back.jpg',
 '/images/female-colour-wings-back.jpg',
 '/images/piece-oni-back.jpg',
 '/images/hand-feather-wrist.jpg',
 '/images/piece-dragon-shoulders.jpg',
 '/images/female-skull-back-in-progress.jpg',
 '/images/piece-color-arm-close.jpg',
 '/images/female-colour-sleeve-portrait.jpg',
 '/images/piece-color-forearms.jpg'
];
// Additional real reference images supplied by the client, not AI generated.
export const latestFemaleTattooPhotos=[
 '/images/female-ornamental-back.jpg',
 '/images/female-bat-wings-back.jpg',
 '/images/female-colour-wings-back.jpg',
 '/images/female-skull-back-in-progress.jpg',
 '/images/hand-feather-wrist.jpg',
 '/images/female-colour-sleeve-portrait.jpg'
];
export const artworkPhotoUrlsExpanded=[...artworkPhotoUrls,...latestFemaleTattooPhotos];
export const artistPhotoUrls=["/images/artist-female-bw.jpg", "/images/artist-female-color-close.jpg", "/images/artist-female-studio.jpg", "/images/artist-bw-beard.jpg", "/images/artist-white-shirt-process.jpg", "/images/artist-red-wall.jpg", "/images/artist-anime-arm.jpg", "/images/model-blonde-portrait.jpg", "/images/artist-female-studio.jpg", "/images/artist-white-shirt-process.jpg", "/images/artist-bw-beard.jpg", "/images/artist-female-bw.jpg", "/images/artist-anime-arm.jpg", "/images/artist-female-color-close.jpg", "/images/artist-female-studio.jpg", "/images/artist-red-wall.jpg", "/images/artist-bw-beard.jpg", "/images/artist-white-shirt-process.jpg", "/images/artist-female-color-close.jpg", "/images/artist-female-bw.jpg"];
export const studioPhotoUrls=["/images/proc-geometry.jpg", "/images/proc-classic-machine.jpg", "/images/proc-metal-grip.jpg", "/images/proc-close-pink-machine.jpg", "/images/machine-hand-dark.jpg", "/images/artist-female-studio.jpg"];
// The photos are representative editorial/reference photography provided by the client, not verified work of the named demo artists.
export const realPhotoUrls=artistPhotoUrls;
export const styles=['Traditional','Neo-Traditional','Realism','Portrait','Blackwork','Dotwork','Japanese','Fine Line','Geometric','Ornamental','Illustrative','Watercolour','Script','Lettering','Chicano','Trash Polka','New School','Minimalist','Biomechanical','Tribal'];
export const shops=[
['Ironhand Tattoo Collective','Manchester','England','Six chairs, walk-ins Thursday to Saturday','11:00 – 20:00','Appointments, Walk-ins','18 Tib Street, Manchester M4 1HN','ironhand-tattoo-collective'],
['Quietwater Studio','Bristol','England','Private, appointment only','10:00 – 14:00','Appointments','Bristol, England','quietwater-studio'],
['Lantern Row Tattoo','London','England','Custom work by consultation','11:00 – 20:00','Appointments, Home visits','London, England','lantern-row-tattoo'],
['Nightshift Ink','Leeds','England','Open late, seven days','12:00 – 23:00','Appointments, Walk-ins','Leeds, England','nightshift-ink'],
['Saltmarket Tattoo','Glasgow','Scotland','Traditional and Japanese, east end of the city','11:00 – 20:00','Appointments, Walk-ins','Glasgow, Scotland','saltmarket-tattoo'],
['Harbourline Tattoo','Dublin','Ireland','Fine line and ornamental, by the docks','11:00 – 20:00','Appointments, Walk-ins','Dublin, Ireland','harbourline-tattoo']].map(([name,city,country,desc,hours,services,address,slug],i)=>({id:i+1,name,city,country,desc,hours,services,address,slug}));
const artistRows=[
['Ada Kirchner','Manchester',0,'Traditional,Neo-Traditional,Blackwork',85,125],['Juno Alvarez','Glasgow',4,'Traditional,Japanese',100,140],['Sena Okafor','Bristol',1,'Fine Line,Minimalist',115,155],['Mira Halvorsen','Bristol',1,'Blackwork,Dotwork,Geometric',130,170],['Sasha Renko','London',2,'Illustrative,Watercolour',160,200],['Kit Marlowe','Dublin',5,'Fine Line,Ornamental',145,185],['Rosa Linden','Dublin',5,'Fine Line,Script',130,170],['Rue Delacroix','Leeds',3,'Script,Lettering',85,125],['Ines Varga','Manchester',0,'Neo-Traditional,Illustrative',115,155],['Tomas Reyes','Leeds',3,'Realism,Illustrative',145,185],['Nell Farraday','Dublin',5,'Dotwork,Ornamental',130,170],['Dov Sharman','Leeds',3,'Realism,Biomechanical',85,125],['Bram Ostler','Manchester',0,'Blackwork,Tribal',100,140],['Delia Fontaine','London',2,'Portrait,Realism',120,170],['Anouk Peeters','London',2,'Neo-Traditional,Illustrative',115,155],['Pilar Otxoa','Glasgow',4,'Portrait,Realism',100,140],['Hal Byrne','Manchester',0,'Traditional,Blackwork',90,130],['Vic Amundsen','Leeds',3,'Neo-Traditional,New School',110,145],['Teagan Ross','Dublin',5,'Fine Line,Ornamental',120,155],['Cleo Mercer','London',2,'Illustrative,Watercolour',130,180]];
export const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const artists=artistRows.map(([name,city,shop,style,min,max],i)=>({id:i+1,name,city,shop:shops[shop],styles:style.split(','),min,max,slug:slug(name),featured:i<4,years:4+i%9,notice:2}));
const raw=[
['Traditional','Upper arm','Ada Kirchner',1],['Traditional','Full sleeve','Juno Alvarez',0],['Neo-Traditional','Full sleeve','Ada Kirchner',1],['Traditional','Hand','Ada Kirchner',1],['Neo-Traditional','Hand','Ines Varga',0],['Realism','Hand','Tomas Reyes',1],['Neo-Traditional','Chest','Anouk Peeters',1],['Realism','Chest','Delia Fontaine',0],['Portrait','Chest','Delia Fontaine',1],['Realism','Back','Dov Sharman',1],['Portrait','Back','Pilar Otxoa',0],['Blackwork','Ribs','Mira Halvorsen',0],['Dotwork','Ribs','Mira Halvorsen',1],['Blackwork','Stomach','Bram Ostler',1],['Dotwork','Stomach','Nell Farraday',0],['Japanese','Stomach','Juno Alvarez',1],['Dotwork','Thigh','Mira Halvorsen',1],['Japanese','Thigh','Juno Alvarez',0],['Fine Line','Thigh','Sena Okafor',1],['Japanese','Calf','Juno Alvarez',1],['Fine Line','Calf','Kit Marlowe',0],['Geometric','Calf','Mira Halvorsen',1],['Illustrative','Head or face','Ines Varga',0],['Tribal','Stomach','Bram Ostler',1],['Tribal','Calf','Bram Ostler',1],['Portrait','Back','Delia Fontaine',1],['Japanese','Back','Juno Alvarez',1]
];
export const pieces=raw.map(([style,placement,by,healed],i)=>({id:i+1,style,placement,by,healed:!!healed,title:`${style} piece, ${placement}`,slug:`${slug(style)}-piece-${slug(placement)}-${i}`,city:artists.find(a=>a.name===by)?.city||'London',image:artworkPhotoUrls[i % artworkPhotoUrls.length]}));
// Landing previews are first-class artwork records: card and detail use the SAME image.
// Images are user-supplied editorial reference photography, not verified works of named artists.
export const featuredWork=[
 {title:'Ornamental spine tattoo',image:'/images/female-ornamental-back.jpg',style:'Ornamental',placement:'Back',by:'Sena Okafor'},
 {title:'Black-and-grey lion sleeve',image:'/images/piece-lion-sleeve.jpg',style:'Realism',placement:'Upper arm',by:'Tomas Reyes'},
 {title:'Colourful feather wings',image:'/images/female-colour-wings-back.jpg',style:'Illustrative',placement:'Back',by:'Cleo Mercer'},
 {title:'Japanese-inspired backpiece',image:'/images/piece-oni-back.jpg',style:'Japanese',placement:'Back',by:'Juno Alvarez'},
 {title:'Bat-wing back tattoo',image:'/images/female-bat-wings-back.jpg',style:'Blackwork',placement:'Back',by:'Mira Halvorsen'},
 {title:'Detailed shoulder tattoo',image:'/images/piece-dragon-shoulders.jpg',style:'Japanese',placement:'Shoulder',by:'Juno Alvarez'},
 {title:'Fine feather wrist ink',image:'/images/hand-feather-wrist.jpg',style:'Fine Line',placement:'Wrist',by:'Sena Okafor'},
 {title:'Colourful tattoo sleeve',image:'/images/piece-color-arm-close.jpg',style:'Traditional',placement:'Arm',by:'Ines Varga'},
 {title:'Back tattoo in progress',image:'/images/female-skull-back-in-progress.jpg',style:'Realism',placement:'Back',by:'Delia Fontaine'},
 {title:'Dragon backpiece tattoo',image:'/images/piece-dragon-back.jpg',style:'Japanese',placement:'Back',by:'Juno Alvarez'}
].map((item,index)=>({
 ...item,id:1001+index,slug:`featured-${slug(item.title)}-${index+1}`,
 city:artists.find(a=>a.name===item.by)?.city||'London',healed:false,referencePhoto:true
}));
pieces.push(...featuredWork);
export const openingDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// Example posts: captions describe the actual representative photographs below.
export const communitySeed=[
 {id:101,author:'Tattoo Art Community',handle:'tattooart',title:'A delicate feather on the wrist',body:'Fine black feather shapes and light shading give this wrist tattoo a graceful, detailed finish.',image:'/images/hand-feather-wrist.jpg',likes:186,promotion:false,comments:[{author:'Guest',text:'Beautiful linework on the wrist.'}],created:'Today'},
 {id:102,author:'Ink Inspiration',handle:'ink.inspiration',title:'Powerful lion sleeve reference',body:'A black-and-grey lion portrait worked across the upper arm, with high contrast around the eyes and mane.',image:'/images/piece-lion-sleeve.jpg',likes:212,promotion:false,comments:[{author:'Guest',text:'Amazing depth in the portrait.'}],created:'Yesterday'},
 {id:103,author:'Backpiece Inspiration',handle:'backpiece',title:'Colourful wings across the shoulders',body:'Bright orange and teal feather wings stretch naturally across the upper back in a balanced, symmetrical design.',image:'/images/female-colour-wings-back.jpg',likes:228,promotion:false,comments:[{author:'Guest',text:'The colours are incredible.'}],created:'2 days ago'},
 {id:104,author:'Tattoo Art Community',handle:'tattooart',title:'Japanese-inspired dragon across the back',body:'An expansive dragon composition combines layered scales, sweeping forms and floral details across the full back.',image:'/images/piece-dragon-back.jpg',likes:174,promotion:false,comments:[{author:'Guest',text:'Great flow and composition.'}],created:'3 days ago'},
 {id:105,author:'Studio Sessions',handle:'studiosessions',title:'A dramatic back tattoo in progress',body:'A close look at a large black-and-grey backpiece as the tattoo artist works through its detailed forms.',image:'/images/female-skull-back-in-progress.jpg',likes:158,promotion:false,comments:[],created:'4 days ago'},
 {id:106,author:'Ink Inspiration',handle:'ink.inspiration',title:'Bold black-and-grey backpiece',body:'A full-back tattoo with striking depth and powerful shapes shows what careful large-scale placement can achieve.',image:'/images/piece-oni-back.jpg',likes:141,promotion:false,comments:[],created:'Last week'},
 {id:107,author:'Tattoo Art Community',handle:'tattooart',title:'Ornamental tattoo along the spine',body:'A flowing botanical and ornamental motif creates a striking vertical composition on the back.',image:'/images/female-ornamental-back.jpg',likes:157,promotion:false,comments:[],created:'Last week'},
 {id:108,author:'Studio Sessions',handle:'studiosessions',title:'A colourful arm tattoo study',body:'Layered colours and precise detail give this arm tattoo a bold, energetic character.',image:'/images/piece-color-arm-close.jpg',likes:131,promotion:false,comments:[],created:'2 weeks ago'},
 {id:109,author:'Tattoo Art Community',handle:'tattooart',title:'Expressive colourful sleeve tattoos',body:'An expressive portrait shows bright tattoos across the arm, with soft colour transitions and illustrated details.',image:'/images/female-colour-sleeve-portrait.jpg',likes:164,promotion:false,comments:[],created:'2 weeks ago'},
 {id:110,author:'Ink Inspiration',handle:'ink.inspiration',title:'Traditional tattoo colour and movement',body:'A tightly framed sleeve shows layered colour, dark outlines and intricate traditional-inspired patterns.',image:'/images/piece-color-forearms.jpg',likes:145,promotion:false,comments:[],created:'3 weeks ago'}
];
