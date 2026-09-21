(function(){
  if(Number(document.body.dataset.chapter||0)!==23) return;
  if(document.querySelector('.audit23-core')) return;
  // 正文已覆盖：日后期间与批准报出日、调整/非调整判断、诉讼判决、坏账补提、
  // 火灾等非调整事项、次年现金不回头改报告年度货币资金。
  // 下面只补课件考过、正文没点透的规则。
  const root=document.querySelector('.study-content')||document.body;
  const txt=root.innerText.replace(/\s+/g,'');
  const has=(...xs)=>xs.some(x=>txt.includes(x.replace(/\s+/g,'')));
  const blocks=[];
  const card=(t,x)=>`<div class="map2-step"><b>${t}</b><span>${x}</span></div>`;

  if(!has('汇算清缴')) blocks.push(card('所得税先看“汇算清缴过没过”','调整事项发生在报告年度所得税汇算清缴之后、又涉及损益的，通常不再调整报告年度的应纳税额；发生在汇算清缴之前、符合税法规定的，才调整报告年度应交所得税。'));
  if(!has('所有者权益变动表')) blocks.push(card('调整事项要“三张表一起动”','涉及损益的调整事项，同步调整报告年度资产负债表、利润表和所有者权益变动表相关项目（课件例题都是这三组一起调），再按规定结转盈余公积和未分配利润。'));
  if(!has('无论是否重大','无论重大与否')) blocks.push(card('日后期间发现的差错，大小都算调整事项','在日后期间发现的报告年度会计差错，无论是否重大，都属于资产负债表日后调整事项。'));
  if(!has('销售退回')) blocks.push(card('报告年度的销售在日后退回','如果退货证明报告年度销售时就存在问题，属于调整事项：冲回报告年度收入和销项税、恢复存货并冲回成本，同时处理报告年度所得税、未分配利润和盈余公积。注意退货必须发生在日后期间内，出了期间就是当期事项。'));
  if(!has('现时义务')) blocks.push(card('用“现时义务”判断股利调不调','资产负债表日后才审议通过的现金股利或利润分配方案，在资产负债表日还没有形成现时义务，所以不调整报告年度负债；重大时作为非调整事项披露。'));

  const entries=[];
  if(!has('销售退回')) entries.push(`
    <div class="entry"><div class="entry-head">报告年度销售在日后全部退回 · 课件例23-6</div><div class="entry-grid">
      <div class="entry-row"><span class="dc debit">借</span><span><span class="acct" tabindex="0" data-kind="损益调整类" data-word="以前年度损益调整——主营业务收入" data-tip="冲回报告年度已经确认、现需更正的收入。" data-debit="减少以前年度利润" data-credit="增加以前年度利润">以前年度损益调整——主营业务收入</span></span><span class="amount">2 400 000</span></div>
      <div class="entry-row"><span class="dc debit">借</span><span><span class="acct" tabindex="0" data-kind="负债类" data-word="应交税费——应交增值税（销项税额）" data-tip="销售退回时冲减原确认的销项税额。" data-debit="减少" data-credit="增加">应交税费——应交增值税（销项税额）</span></span><span class="amount">312 000</span></div>
      <div class="entry-row"><span class="dc credit">贷</span><span><span class="acct" tabindex="0" data-kind="资产类" data-word="应收账款" data-tip="企业因销售商品、提供服务等应向客户收取的款项。" data-debit="增加" data-credit="减少">应收账款</span></span><span class="amount">2 712 000</span></div>
      <div class="entry-row"><span class="dc debit">借</span><span><span class="acct" tabindex="0" data-kind="资产类" data-word="库存商品" data-tip="已经完成生产、可供销售的商品。" data-debit="增加" data-credit="减少">库存商品</span></span><span class="amount">2 000 000</span></div>
      <div class="entry-row"><span class="dc credit">贷</span><span><span class="acct" tabindex="0" data-kind="损益调整类" data-word="以前年度损益调整——主营业务成本" data-tip="冲回报告年度因该销售结转的成本。" data-debit="增加以前年度成本" data-credit="减少以前年度成本">以前年度损益调整——主营业务成本</span></span><span class="amount">2 000 000</span></div>
    </div></div>`);

  if(!blocks.length && !entries.length) return;
  const anchor=document.querySelector('.chapter-map2')||document.querySelector('.decision-lab')||document.querySelector('#why');
  if(!anchor) return;
  const s=document.createElement('section'); s.className='audit23-core'; s.id='audit23';
  s.innerHTML=`<div class="kicker">这些地方最容易丢分</div><h2>日后事项：先问“旧状况的新证据，还是日后才发生的新事情？”</h2>${blocks.length?`<div class="map2-grid">${blocks.join('')}</div>`:''}${entries.join('')}`;
  anchor.insertAdjacentElement('afterend',s);
  const label='补漏：日后事项易漏规则';
  document.querySelectorAll('.sidebar .tree, .mobile-tree .tree').forEach(tree=>{
    if(tree.querySelector('a[href="#audit23"]')) return;
    const li=document.createElement('li'); li.className='root';
    const a=document.createElement('a'); a.href='#audit23'; a.textContent=label;
    li.append(a); tree.append(li);
  });
})();
