(function(){
  if(Number(document.body.dataset.chapter||0)!==25) return;
  if(document.querySelector('.audit25-core')) return;
  // 正文已覆盖：净资产取代所有者权益、捐赠承诺、服务捐赠凭据、限定性/非限定性、
  // 受托代理、业务活动成本、限制解除重分类、例25-6全部分录。
  // PDF 未支持"三张基本报表""名义金额1元"，不补。
  // 唯一缺口：退回未使用捐款只有分录、正文缺少文字解释。
  const root=document.querySelector('.study-content')||document.body;
  const txt=root.innerText.replace(/\s+/g,'');
  const has=(...xs)=>xs.some(x=>txt.includes(x.replace(/\s+/g,'')));
  const blocks=[];
  const card=(t,x)=>`<div class="map2-step"><b>${t}</b><span>${x}</span></div>`;

  if(!has('退款义务','退回未使用捐款')) blocks.push(card('剩余限定捐款需要退回','如果因组织自身原因未按限制使用、剩余款需要退给捐赠人，课件例25-6通过费用确认退款义务，而不是继续留在净资产里。'));
  if(!has('四个问题','按4个问题')) blocks.push(card('捐赠题只按 4 个问题走','①收到的是捐赠还是捐赠承诺？承诺不满足非交换交易收入确认条件，不确认收入。②捐赠人设了时间或用途限制吗？有→限定性收入；理事会等内部限制可自行撤销，不构成限定性。③组织是真正受益，还是只替指定受益人中转？中转→受托代理业务，不确认捐赠收入。④限制解除或要退款？解除→限定性净资产重分类为非限定性；因自身原因退款→借管理费用、贷其他应付款（例25-6）。'));

  if(!blocks.length) return;
  const anchor=document.querySelector('.chapter-map2')||document.querySelector('.decision-lab')||document.querySelector('#why');
  if(!anchor) return;
  const s=document.createElement('section'); s.className='audit25-core'; s.id='audit25';
  s.innerHTML=`<div class="kicker">这些地方最容易丢分</div><h2>民非会计最核心：钱是谁给的、有没有外部限制、你是受赠人还是只是中转人</h2><div class="map2-grid">${blocks.join('')}</div>`;
  anchor.insertAdjacentElement('afterend',s);
  const label='补漏：民非会计易漏规则';
  document.querySelectorAll('.sidebar .tree, .mobile-tree .tree').forEach(tree=>{
    if(tree.querySelector('a[href="#audit25"]')) return;
    const li=document.createElement('li'); li.className='root';
    const a=document.createElement('a'); a.href='#audit25'; a.textContent=label;
    li.append(a); tree.append(li);
  });
})();
