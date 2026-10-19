# Pending Figma edits (blocked by the Figma MCP rate limit on 19 Oct)

Run each script with `mcp__Figma__use_figma` on file `uzZ7B2copJrWqiUhxjKVNH` (skillNames `figma-use`), in order. After each script, check the result with `get_screenshot` on the nodes named in its heading. Scripts 1 and 2 have not been run yet; script 2 also needs a screenshot check because the entry card's inner layout was not re-read before writing it.

## 1. Every mobile button tactile, plus the Add bank cut-out

Screens to check: section `1471:99437`, wallet `1474:47969`.

- **Tactile style:** follows Exp/Biz/TactileButton.
  - Secondary: `Color/secondary` fill, 1 px `Color/line` stroke inside, white inner shadow at y 1.
  - Outline: the same, with a white fill, used when the button sits on grey.
  - Primary: `Color/brand` fill, `Color/brand-dark` stroke, white inner shadow at 22%, white icon.
- **Components changed:**
  - MobileTopBar buttons, plus a tactile pill for the Save and Done text action.
  - NextButton (Enabled is primary, Disabled is secondary).
  - ScoreTap.
- **Frames changed** on every mobile screen:
  - menu, create, back, close, quick-action buttons, play, send and undo;
  - the judging round actions and the help shortcuts;
  - the highlights See all circle and the chat quick replies.
- **Add bank:**
  - The pill is light grey and tactile, with a 5 px white ring in the page colour, so it cuts into the dark purple card and blends with the white page.
  - The plus is a tactile dark purple circle with a white plus.

```js
const p = figma.root.children.find(p=>p.id==='644:37'); await figma.setCurrentPageAsync(p);
const resolve=async v=>{let cur=v;for(let i=0;i<5;i++){const val=cur.valuesByMode[Object.keys(cur.valuesByMode)[0]];if(val.type==='VARIABLE_ALIAS')cur=await figma.variables.getVariableByIdAsync(val.id);else return val;}};
const PC={};const paint=async id=>{if(!PC[id]){const v=await figma.variables.getVariableByIdAsync(id);const c=await resolve(v);PC[id]=figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:c.r,g:c.g,b:c.b}},'color',v);}return PC[id];};
const V={card:'VariableID:355:40',sec:'VariableID:355:86',panel:'VariableID:355:39',line:'VariableID:355:44',fg:'VariableID:355:41',brand:'VariableID:355:46',brandDark:'VariableID:355:47'};
const nameCache={};const vname=async id=>{if(!(id in nameCache)){try{nameCache[id]=(await figma.variables.getVariableByIdAsync(id)).name}catch(e){nameCache[id]=''}}return nameCache[id];};
const fillName=async n=>{if(!('fills' in n))return null;const a=n.fills;if(a===figma.mixed||!a.length||a[0].visible===false)return null;const b=a[0].boundVariables&&a[0].boundVariables.color;return b?await vname(b.id):'literal';};
const greyAnc=async n=>{let a=n.parent;while(a&&a.type!=='SECTION'&&a.type!=='PAGE'){const fn=await fillName(a);if(fn)return fn==='Color/secondary'||fn==='Color/panel';a=a.parent;}return false;};
const shadow=a=>[{type:'INNER_SHADOW',color:{r:1,g:1,b:1,a},offset:{x:0,y:1},radius:0,spread:0,visible:true,blendMode:'NORMAL'}];
const whiteIcons=async n=>{for(const v of n.findAll(x=>x.type!=='FRAME'&&x.type!=='TEXT'&&'fills' in x&&x.fills!==figma.mixed&&x.fills.length))v.fills=[await paint(V.card)];for(const v of n.findAll(x=>x.type!=='FRAME'&&x.type!=='TEXT'&&'strokes' in x&&x.strokes.length))v.strokes=[await paint(V.card)];};
const tact=async(n,force)=>{const fn=await fillName(n);let kind=force;if(!kind){if(fn==='Color/brand'||fn==='Color/primary'||fn==='Color/brand-dark')kind='primary';else if(fn==='Color/fg')kind='ink';else kind=(await greyAnc(n))?'outline':'secondary';}
 if(kind==='primary'){n.fills=[await paint(V.brand)];n.strokes=[await paint(V.brandDark)];n.effects=shadow(0.22);await whiteIcons(n);}
 else if(kind==='ink'){n.strokes=[await paint(V.fg)];n.effects=shadow(0.2);}
 else{n.fills=[await paint(kind==='outline'?V.card:V.sec)];n.strokes=[await paint(V.line)];n.effects=shadow(1);}
 n.strokeWeight=1;n.strokeAlign='INSIDE';return kind;};
const log={};const bump=k=>log[k]=(log[k]||0)+1;
for(const id of ['1451:52962','1471:870','1471:876','1471:881']){await tact(await figma.getNodeByIdAsync(id),'secondary');bump('topbar');}
const nb=await figma.getNodeByIdAsync('1471:856');for(const v of nb.children){await tact(v,/Enabled/.test(v.name)?'primary':'secondary');bump('next');}
for(const id of ['1383:772','1383:774']){const st=await figma.getNodeByIdAsync(id);const vs=st.type==='COMPONENT_SET'?st.children:[st];for(const v of vs){await tact(v);bump('scoretap');}}
for(const id of ['1483:841','1483:842']){const hit=await figma.getNodeByIdAsync(id);const t=hit.findOne(x=>x.type==='TEXT');if(!t||t.parent.name==='action pill')continue;const pill=figma.createAutoLayout('HORIZONTAL');pill.name='action pill';pill.paddingLeft=pill.paddingRight=14;pill.paddingTop=pill.paddingBottom=8;pill.cornerRadius=999;hit.appendChild(pill);pill.appendChild(t);await tact(pill,'secondary');bump('save pill');}
const sec=await figma.getNodeByIdAsync('1471:99437');
const isBtnName=n=>/^(menu|create|back|close|button|play|send|undo|attach|plus)$/i.test(n.name);
for(const f of sec.children.filter(x=>x.type==='FRAME')){
 for(const n of f.findAll(x=>x.type==='FRAME'&&isBtnName(x)&&x.width<=72&&x.height<=72&&x.parent.name!=='add bank')){const k=await tact(n);bump('frame-'+k);}
 for(const a of f.findAll(x=>x.type==='FRAME'&&/^(action · |shortcut · )/.test(x.name))){const c=a.children.find(k=>k.type==='FRAME'&&k.width<=72);if(c&&!isBtnName(c)){await tact(c);bump('action-circle');}}
 for(const r of f.findAll(x=>x.name==='ring'&&x.parent&&/See all/.test(x.parent.name))){r.fills=[await paint(V.sec)];r.strokes=[await paint(V.line)];r.strokeWeight=1;r.effects=shadow(1);const fill=r.findOne(x=>x.name==='fill');if(fill)fill.visible=false;bump('seeall');}
 for(const q of f.findAll(x=>x.type==='FRAME'&&/quick repl/i.test(x.name))){for(const c of q.children.filter(k=>k.type==='FRAME')){await tact(c,'secondary');bump('reply');}}
}
const ab=await figma.getNodeByIdAsync('1513:49920');
ab.fills=[await paint(V.sec)];ab.strokes=[await paint(V.line)];ab.strokeWeight=1;ab.strokeAlign='INSIDE';ab.effects=[...shadow(1),{type:'DROP_SHADOW',color:{r:1,g:1,b:1,a:1},offset:{x:0,y:0},radius:0,spread:5,visible:true,blendMode:'NORMAL',showShadowBehindNode:false}];
const plus=await figma.getNodeByIdAsync('1513:49921');await tact(plus,'primary');
const t=ab.findOne(x=>x.type==='TEXT');t.fills=[await paint(V.fg)];
return log;
```

## 2. Judging swipe stack: a clearer stack and a long first entry with a scroll bar

Screens to check: N41 `1477:48525` and N42 `1477:48581` (each has a `card stack` holding `card behind`, `card behind` and `entry card`).

- **Back cards:**
  - They step down and narrow (inset 12 px and then 24 px each side, peeking 10 px and then 20 px below), so the stack reads as a pile.
  - The nearer one is `Color/line` and the farther one `Color/line2` at 40%, with no rotation.
- **Front card:**
  - Light grey with a 1 px line border and a soft drop shadow.
  - It holds a long entry, a few paragraphs, so the text runs past the bottom edge and is clipped.
  - A scroll bar (a 4 px track with a 40 px dark thumb) sits inside its right edge, and a fade at the bottom shows there is more to read.

```js
const p = figma.root.children.find(p=>p.id==='644:37'); await figma.setCurrentPageAsync(p);
for(const s of ['Regular','Medium','SemiBold','Bold']) await figma.loadFontAsync({family:'Plus Jakarta Sans',style:s});
const resolve=async v=>{let cur=v;for(let i=0;i<5;i++){const val=cur.valuesByMode[Object.keys(cur.valuesByMode)[0]];if(val.type==='VARIABLE_ALIAS')cur=await figma.variables.getVariableByIdAsync(val.id);else return val;}};
const PC={};const paint=async id=>{if(!PC[id]){const v=await figma.variables.getVariableByIdAsync(id);const c=await resolve(v);PC[id]=figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:c.r,g:c.g,b:c.b}},'color',v);}return PC[id];};
const V={sec:'VariableID:355:86',line:'VariableID:355:44',line2:'VariableID:355:45',fg:'VariableID:355:41',fg2:'VariableID:355:42'};
const LONG=['Zobo, but louder. Made here, sold here, and it says so on the can. Long for a name, but it sounds like a market call.','Picture the seller at Balogun with a cooler of cold cans: "Zobolicious! Loud and local!" It is easy to shout, easy to remember, and it tells you what is inside before you read the label.','On the shelf the word does the work. Put it in bold on a deep red can with a ginger stripe, and the "loud" part becomes the design: big type, no pictures needed.','Why it fits the brief: it keeps zobo in the name, it says the drink is from here, and it has energy without sounding like a soft drink copy.','One risk: it is long for a small can. "Zobo-licious" with the hyphen may read faster at a glance.'];
const out=[];
for(const fid of ['1477:48525','1477:48581']){
 const f=await figma.getNodeByIdAsync(fid);const stack=f.findOne(n=>n.name==='card stack');if(!stack){out.push(fid+' no stack');continue;}
 const front=stack.children.find(c=>c.name==='entry card');const behind=stack.children.filter(c=>c.name==='card behind');
 const W=front.width,H=front.height,X=front.x,Y=front.y;
 behind.forEach((b,i)=>{b.rotation=0;const inset=12*(i+1);b.resize(W-inset*2,H);b.x=X+inset;b.y=Y+10*(i+1);});
 if(behind[0])behind[0].fills=[await paint(V.line)];
 if(behind[1]){behind[1].fills=[await paint(V.line2)];behind[1].opacity=0.4;}
 if(behind.length===2&&stack.children.indexOf(behind[0])<stack.children.indexOf(behind[1]))stack.insertChild(stack.children.indexOf(behind[0]),behind[1]);
 front.fills=[await paint(V.sec)];front.strokes=[await paint(V.line)];front.strokeWeight=1;front.strokeAlign='INSIDE';front.clipsContent=true;
 front.effects=[{type:'DROP_SHADOW',color:{r:0,g:0,b:0,a:0.08},offset:{x:0,y:8},radius:24,spread:-4,visible:true,blendMode:'NORMAL',showShadowBehindNode:false}];
 if(fid==='1477:48525'){
  const texts=front.findAll(n=>n.type==='TEXT');const body=texts.sort((a,b)=>b.characters.length-a.characters.length)[0];
  await figma.loadFontAsync(body.fontName);body.characters=LONG.join('\n\n');body.textAutoResize='HEIGHT';
  if(front.layoutMode&&front.layoutMode!=='NONE'){front.primaryAxisSizingMode='FIXED';front.resize(W,H);}
  const track=figma.createRectangle();track.name='scroll track';front.appendChild(track);if(front.layoutMode&&front.layoutMode!=='NONE')track.layoutPositioning='ABSOLUTE';track.resize(4,H-48);track.x=W-10;track.y=24;track.cornerRadius=2;track.fills=[await paint(V.line)];
  const thumb=figma.createRectangle();thumb.name='scroll thumb';front.appendChild(thumb);if(front.layoutMode&&front.layoutMode!=='NONE')thumb.layoutPositioning='ABSOLUTE';thumb.resize(4,40);thumb.x=W-10;thumb.y=24;thumb.cornerRadius=2;thumb.fills=[await paint(V.fg2)];
  const fade=figma.createRectangle();fade.name='more below';front.appendChild(fade);if(front.layoutMode&&front.layoutMode!=='NONE')fade.layoutPositioning='ABSOLUTE';fade.resize(W-2,56);fade.x=1;fade.y=H-57;
  const c=await resolve(await figma.variables.getVariableByIdAsync(V.sec));fade.fills=[{type:'GRADIENT_LINEAR',gradientTransform:[[0,1,0],[-1,0,1]],gradientStops:[{position:0,color:{r:c.r,g:c.g,b:c.b,a:0}},{position:1,color:{r:c.r,g:c.g,b:c.b,a:1}}]}];
 }
 out.push(fid+' ok '+behind.length+' behind, '+Math.round(W)+'x'+Math.round(H));
}
return out;
```
