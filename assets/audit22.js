(function(){
  if(Number(document.body.dataset.chapter||0)!==22) return;
  if(document.querySelector('.audit22-core')) return;
  // 正文已覆盖：追溯调整、未来适用、估计变更、弃置义务、差错更正与涉税。
  // 下面只补课件考过、正文没点透的规则。
  const root=document.querySelector('.study-content')||document.body;
  const txt=root.innerText.replace(/\s+/g,'');
  const has=(...xs)=>xs.some(x=>txt.includes(x.replace(/\s+/g,'')));
  const blocks=[];
  const card=(t,x)=>`<div class="map2-step"><b>${t}</b><span>${x}</span></div>`;

  if(!has('不切实可行')) blocks.push(card('“不切实可行”有两档退法','算不出政策变更对前期各期的影响数，就从能追溯的最早期间期初开始用新政策；如果连当期期初的累积影响数都算不出来，就直接采用未来适用法，不再追溯。'));
  if(!has('成本法')) blocks.push(card('成本法转权益法：先看交易变没变','因出售部分股权丧失控制权、从成本法改按权益法核算，是本期交易发生了本质变化后采用适用的新政策，不属于会计政策变更。编制合并报表时统一子公司会计政策，也不是会计估计变更。'));
  if(!has('研究阶段')) blocks.push(card('研究阶段费用化的钱，泼出去收不回','内部研发支出在满足资本化条件之前已经费用化的，以后达到资本化条件也不能再塞回无形资产成本。若前期误资本化，应冲减无形资产、转回对应摊销，再通过“以前年度损益调整”处理。'));
  if(!has('每股收益')) blocks.push(card('差错更正别忘了每股收益','需要披露每股收益的企业，重要前期差错追溯重述时，要同步重算基本每股收益和稀释每股收益。'));

  if(!blocks.length) return;
  const anchor=document.querySelector('.chapter-map2')||document.querySelector('.decision-lab')||document.querySelector('#why');
  if(!anchor) return;
  const s=document.createElement('section');
  s.className='audit22-core'; s.id='audit22';
  s.innerHTML=`
    <div class="kicker">PDF 完整性补漏</div>
    <h2>先按“规则 / 估计 / 差错”判断，再决定追溯还是未来适用</h2>
    <div class="map2-grid">${blocks.join('')}</div>`;
  anchor.insertAdjacentElement('afterend',s);
  const label='补漏：政策估计差错';
  document.querySelectorAll('.sidebar .tree, .mobile-tree .tree').forEach(tree=>{
    if(tree.querySelector('a[href="#audit22"]')) return;
    const li=document.createElement('li'); li.className='root';
    const a=document.createElement('a'); a.href='#audit22'; a.textContent=label;
    li.append(a); tree.append(li);
  });
})();
