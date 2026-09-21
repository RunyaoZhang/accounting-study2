(function(){
  if(Number(document.body.dataset.chapter||0)!==21) return;
  if(document.querySelector('.audit21-core')) return;
  // 正文已覆盖：内部债权债务/存货/固定资产抵销、所得税、现金流含税抵销。
  // 下面只补课件考过、正文没点透的规则。
  const root=document.querySelector('.study-content')||document.body;
  const txt=root.innerText.replace(/\s+/g,'');
  const has=(...xs)=>xs.some(x=>txt.includes(x.replace(/\s+/g,'')));
  const blocks=[];
  const card=(t,x)=>`<div class="map2-step"><b>${t}</b><span>${x}</span></div>`;

  if(!has('顺流交易','逆流交易')) blocks.push(card('顺流 vs 逆流：先看“谁把货卖给了谁”','未实现内部交易损益，先调减出售方所在公司的净利润。母公司卖给子公司（顺流），全额抵销“归属于母公司所有者的净利润”；子公司卖给母公司（逆流），按母公司持股比例在“归属于母公司所有者的净利润”和“少数股东损益”之间分配抵销；子公司之间买卖，按母公司对出售方子公司的分配比例处理。'));
  if(!has('少数股东权益可以','出现负数')) blocks.push(card('少数股东权益可以是负数','它是合并报表特有的项目，不要求永远为正；少数股东损益同样只存在于合并报表。逆流交易的未实现损益（扣掉所得税影响后）还要按少数股东持股比例，同时调整这两个项目。'));
  if(!has('库存股')) blocks.push(card('子公司持有母公司股份＝库存股','从集团整体看，这相当于自己持有自己的股份。子公司账上的长期股权投资，在合并资产负债表中按取得成本转列为库存股，作为所有者权益的减项。'));
  if(!has('筹资活动')) blocks.push(card('少数股东现金增资，走筹资活动','子公司少数股东以货币资金增加权益性投资，是集团从外部少数股东收到的钱，在合并现金流量表中列入“筹资活动产生的现金流量”，不是投资活动。'));

  if(!blocks.length) return;
  const anchor=document.querySelector('.chapter-map2')||document.querySelector('.decision-lab')||document.querySelector('#why');
  if(!anchor) return;
  const s=document.createElement('section');
  s.className='audit21-core'; s.id='audit21';
  s.innerHTML=`
    <div class="kicker">合并抵销 · 课件易漏规则</div>
    <h2>集团视角下：自己和自己做生意，不算数</h2>
    <p>正文已经讲完抵销的大框架，下面只补课件里明确考过、正文又没点透的四条规则。</p>
    <div class="map2-grid">${blocks.join('')}</div>`;
  anchor.insertAdjacentElement('afterend',s);
  // 桌面 + 移动知识树补链接，保持幂等
  const label='补漏：合并易漏规则';
  document.querySelectorAll('.sidebar .tree, .mobile-tree .tree').forEach(tree=>{
    if(tree.querySelector('a[href="#audit21"]')) return;
    const li=document.createElement('li'); li.className='root';
    const a=document.createElement('a'); a.href='#audit21'; a.textContent=label;
    li.append(a); tree.append(li);
  });
})();
