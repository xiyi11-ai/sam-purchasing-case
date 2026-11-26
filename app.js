const HERO_IMAGE = './assets/hero-five-grain.jpg';
const PRODUCT_IMAGE = './assets/product-closeup.jpg';

const packMarkup = `
  <span class="pack">
    <span class="pack__rail"></span>
    <span class="pack__meta"><b>MEMBER'S MARK</b><span>BUYER CONCEPT</span></span>
    <span class="pack__name">谷香<br>双豆饭</span>
    <span class="pack__sub">低GI软糯杂粮饭</span>
    <span class="pack__food"><img src="${PRODUCT_IMAGE}" alt="真实软糯杂粮饭近景"></span>
    <span class="pack__badge">90秒<small>即热</small></span>
    <span class="pack__foot"><span>GI TARGET ≤55</span><span>150g × 12</span></span>
  </span>`;

const sources = {
  guideline: '外部事实｜《中国居民膳食指南（2022）》；成年人每日全谷物和杂豆建议摄入量50–150g。',
  lowgi: '外部事实｜叮咚买菜披露，东方财富 / 新京报转引，2025-11；单一平台GMV信号，不外推为全市场规模。',
  sams: '外部事实｜会员、门店、年均消费与销售额均为2025-12至2026-01公开媒体报道口径，非沃尔玛中国官方披露。',
  model: '内部模型｜分值、价格、渗透率与门槛均为待验证假设，不是历史业绩或市场预测。'
};

const scenes = [
  {
    name: 'PRODUCT REVEAL', count: '00 / 07',
    html: `<section class="scene scene--hero">
      <figure class="hero-image"><img src="${HERO_IMAGE}" alt="金属碗盛装的真实五谷双豆饭摄影"><figcaption>REAL FIVE-GRAIN RICE PHOTOGRAPHY<br>FOOD STYLING REFERENCE</figcaption></figure>
      <div class="hero-copy">
        <p class="eyebrow">A BUYER'S PROPOSAL / CHINA</p>
        <h1 class="hero-title">谷物营养，<br><em>软糯一口。</em></h1>
        <p class="hero-product">Member's Mark「谷香双豆饭」</p>
        <p class="hero-lead">不是把健康做成任务，而是把全谷物和杂豆，做成全家愿意反复吃的一碗饭。</p>
        <button class="glass-button" type="button" data-go="1">点击商品，进入选品历程</button>
        <p class="concept-disclaimer">CONCEPT PRODUCT · NOT AN OFFICIAL SAM'S CLUB SKU<br>包装、配方、价格与指标均为采购笔试概念。</p>
      </div>
      <button class="product-object" type="button" data-go="1" aria-label="点击谷香双豆饭概念包装进入选品故事">${packMarkup}<span class="product-hint">CLICK PRODUCT · OPEN THE CASE</span></button>
    </section>`
  },
  {
    name: 'THE MEMBER TENSION', count: '01 / 07',
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="01">THE MEMBER TENSION</div><h2 class="chapter-title">知道要吃，<br><em>不等于吃得到。</em></h2><p class="chapter-lead">健康认知已经建立，真正阻挡复购的是四个日常摩擦：时间、口感、份量和家庭共识。</p><p class="source-line">${sources.guideline}</p></div>
      <div class="visual-panel tension-panel">
        <figure class="editorial-photo"><img src="${PRODUCT_IMAGE}" alt="米粒油润、豆粒清晰的真实杂粮饭近景"><figcaption><span>THE REAL COMPETITOR</span><b>不是另一款健康食品，<br>而是今晚直接煮白米饭。</b></figcaption></figure>
        <div class="tension-evidence">
          <div class="recommendation-band"><span class="chart-kicker">DAILY RECOMMENDATION</span><strong>50—150<em>g / 天</em></strong><p>成年人全谷物和杂豆建议摄入量</p><div class="range-line"><i></i><i></i></div></div>
          <div class="friction-grid"><div><i>01</i><b>准备时间</b><small>浸泡、配比、成熟时间不同</small></div><div><i>02</i><b>家庭口感</b><small>粗硬夹生，老人孩子易拒绝</small></div><div><i>03</i><b>份量浪费</b><small>一锅太多，小份不值得开火</small></div><div><i>04</i><b>习惯迁移</b><small>代餐像任务，难进共同餐桌</small></div></div>
        </div>
      </div>
    </section>`
  },
  {
    name: 'DEMAND SIGNALS', count: '02 / 07', charts: ['gmv', 'bridge'],
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="02">DEMAND SIGNALS</div><h2 class="chapter-title">健康趋势要落到，<br><em>一顿真正的饭。</em></h2><p class="chapter-lead">低GI热度证明消费者愿意寻找更好的碳水；决定复购的，却是“熟悉主食 + 更少准备”。</p><p class="source-line">${sources.lowgi}</p></div>
      <div class="visual-panel evidence-panel">
        <div class="chart-module chart-module--major"><div class="chart-head"><div><span class="chart-kicker">MARKET MOMENTUM</span><h3>低GI商品GMV指数</h3></div><strong>+87%</strong></div><div class="chart" id="gmvChart"></div><p class="chart-note">上年同期=100；近半年同比增长87%。仅作为需求方向信号。</p></div>
        <div class="chart-module chart-module--minor"><div class="chart-head"><div><span class="chart-kicker">FROM SIGNAL TO SKU</span><h3>需求如何转化成商品</h3></div></div><div class="chart chart--bridge" id="bridgeChart"></div><p class="chart-note">采购洞察：趋势负责第一次拿起，口感与便利负责第二次购买。</p></div>
      </div>
    </section>`
  },
  {
    name: 'MEMBER OPPORTUNITY', count: '03 / 07', charts: ['opportunity'],
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="03">MEMBER OPPORTUNITY</div><h2 class="chapter-title">高频主食，<br><em>放大会员价值。</em></h2><p class="chapter-lead">山姆的优势不只是会员多，而是家庭囤货、稳定复购与自有品牌信任形成的放大器。</p><p class="source-line">${sources.sams}</p></div>
      <div class="visual-panel opportunity-panel">
        <div class="metric-ribbon"><div><span>PAID MEMBERS</span><strong>1,000<em>万+</em></strong><small>2025媒体报道</small></div><div><span>CHINA CLUBS</span><strong>63<em>家</em></strong><small>2025年末</small></div><div><span>AVG. SPEND</span><strong>1.3<em>万元</em></strong><small>会员年均估算</small></div><div><span>ANNUAL SALES</span><strong>1,400<em>亿+</em></strong><small>2025媒体报道</small></div></div>
        <div class="scenario-layout"><div class="scenario-copy"><span class="chart-kicker">CONSERVATIVE SCENARIO</span><h3>只触达 5% 会员，会发生什么？</h3><p>1,000万会员 × 5%购买 × 每月1箱 × 12个月</p><div class="scenario-answer"><strong>600<em>万箱 / 年</em></strong><span>情景测算，<br>不是销量预测。</span></div><ul><li>12碗 / 箱</li><li>7,200万次主食消费</li><li>¥69.9 测试价</li></ul></div><div class="chart-module scenario-chart"><div class="chart" id="opportunityChart"></div><p class="chart-note">情景模型：每位购买会员每月1箱，持续12个月；所有参数均需试点验证。</p></div></div>
      </div>
    </section>`
  },
  {
    name: 'WHITE SPACE', count: '04 / 07', charts: ['matrix'],
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="04">WHITE SPACE</div><h2 class="chapter-title">不是选最潮，<br><em>而是选最常吃。</em></h2><p class="chapter-lead">六个采购维度比较五种替代方案。目标不是赢一项，而是同时满足家庭、频次、物流与差异化。</p><p class="source-line">${sources.model}</p></div>
      <div class="visual-panel matrix-panel"><div class="chart-head"><div><span class="chart-kicker">BUYER SCORECARD / 5-POINT SCALE</span><h3>五类方案 × 六个采购维度</h3></div><div class="legend-row"><span><i></i>弱</span><span><i></i>强</span></div></div><div class="chart" id="matrixChart"></div><div class="matrix-conclusion"><span>唯一同时达到</span><b>高频主食 × 家庭共享 × 常温履约 × 配方壁垒</b><em>谷香双豆饭</em></div><p class="chart-note">评分依据：公开在售形态观察、使用场景与商品逻辑；属于采购决策模型，不是消费者调研结果。</p></div>
    </section>`
  },
  {
    name: 'PRODUCT SYSTEM', count: '05 / 07',
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="05">PRODUCT SYSTEM</div><h2 class="chapter-title">先做软糯，<br><em>再谈低GI。</em></h2><p class="chapter-lead">低GI是研发与合规目标，软糯才是消费语言。成品必须先通过口感盲测，再通过第三方GI检测。</p><p class="source-line">标准边界｜GI≤55为研发目标，须按WS/T 652—2019对完整成品检测；不等于减肥或医疗功效。</p></div>
      <div class="visual-panel product-panel"><figure class="product-photo"><img src="${PRODUCT_IMAGE}" alt="真实软糯杂粮饭近景"><figcaption><span>SERVING DIRECTION</span><b>看得见豆粒，<br>吃起来仍然软糯。</b><small>真实摄影用于口感方向展示，非最终配方样品。</small></figcaption></figure><div class="product-system"><div class="ingredient-line"><span>糙米</span><i></i><span>燕麦米</span><i></i><span>鹰嘴豆</span><i></i><span>红小豆</span></div><div class="spec-grid"><div><strong>≤55</strong><span>完整成品GI目标</span><small>第三方检测硬门槛</small></div><div><strong>90s</strong><span>微波复热目标</span><small>撕膜、加热、上桌</small></div><div><strong>150g</strong><span>单碗净含量</span><small>一人一餐，不留剩饭</small></div><div><strong>12碗</strong><span>家庭囤货装</span><small>符合山姆大包装逻辑</small></div><div><strong>9–12m</strong><span>常温货架期目标</span><small>降低冷链与损耗压力</small></div><div><strong>0</strong><span>医疗化表达</span><small>只讲营养与真实体验</small></div></div><div class="product-rule"><span>PRODUCT RULE</span><p>如果与白米饭对照盲测的口感接受率低于 70%，不进入价格测试。</p></div></div></div>
    </section>`
  },
  {
    name: 'PACK & PRICE TEST', count: '06 / 07', charts: ['price'],
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="06">PACK & PRICE TEST</div><h2 class="chapter-title">大包装，<br><em>不等于大冒险。</em></h2><p class="chapter-lead">先用6碗装降低第一次尝试成本，再用12碗家庭装验证山姆规格和复购。价格不猜，做三档测试。</p><p class="source-line">${sources.model}</p></div>
      <div class="visual-panel price-panel"><div class="pack-architecture"><span class="chart-kicker">TWO-STEP PACK ARCHITECTURE</span><div class="pack-step"><i>01</i><div><b>6碗试吃装</b><span>150g × 6</span><small>降低首次决策风险</small></div><em>¥39.9</em></div><div class="pack-step pack-step--hero"><i>02</i><div><b>12碗家庭装</b><span>150g × 12</span><small>目标长期规格</small></div><em>¥69.9</em></div><div class="pack-math"><span>家庭装单碗</span><strong>¥5.83</strong><small>比试吃装单碗低12.3%</small></div></div><div class="chart-module price-chart-wrap"><div class="chart-head"><div><span class="chart-kicker">PRICE ACCEPTANCE CELLS</span><h3>三档价格，不同问题</h3></div></div><div class="chart" id="priceChart"></div><div class="test-questions"><span>¥59.9<small>能否加速转化</small></span><span>¥69.9<small>目标价值平衡</small></span><span>¥79.9<small>溢价上限在哪</small></span></div><p class="chart-note">价格为A/B测试单元，不代表成本、毛利或最终零售价；需结合供应商询价后校准。</p></div></div>
    </section>`
  },
  {
    name: 'PILOT DECISION', count: '07 / 07', charts: ['pilot'],
    html: `<section class="scene scene--split">
      <div class="chapter-copy"><div class="chapter-no" data-number="07">PILOT DECISION</div><h2 class="chapter-title">先小范围证明，<br><em>再全国放大。</em></h2><p class="chapter-lead">上海、深圳、杭州、成都四城试销。行为指标决定“值不值得卖”，合规与品质决定“能不能卖”。</p><p class="source-line">${sources.model}</p></div>
      <div class="visual-panel pilot-panel"><div class="chart-module pilot-chart-wrap"><div class="chart-head"><div><span class="chart-kicker">BEHAVIOURAL FUNNEL</span><h3>从尝到复购的四道门槛</h3></div></div><div class="chart" id="pilotChart"></div><p class="chart-note">建议阈值：口感≥70%，价格接受≥60%，30天复购≥25%；正式立项需与现有即食主食基准校准。</p></div><div class="compliance-side"><div><span class="chart-kicker">NON-NEGOTIABLE GATES</span><h3>三项失败，立即停止</h3></div><div class="hard-gates"><div><i>01</i><span><b>完整成品 GI ≤55</b><small>原料低GI不能替代成品检测</small></span><em>LAB</em></div><div><i>02</i><span><b>货架期 9–12个月</b><small>微生物、质构与风味同步验证</small></span><em>QA</em></div><div><i>03</i><span><b>客诉率 &lt;2%</b><small>鼓包、夹生、异味零容忍</small></span><em>CX</em></div></div><div class="decision-stamp"><i>GO</i><div><b>推荐进入四城试销</b><small>因为它不是一件“健康零食”，而是一顿可被重复选择的饭。</small></div></div></div></div>
    </section>`
  }
];

let activeIndex = 0;
let activeCharts = [];
const stage = document.getElementById('stage');
const sectionName = document.getElementById('sectionName');
const storyCount = document.getElementById('storyCount');
const storyProgress = document.getElementById('storyProgress');
const P = { paper:'#F4F0E7', muted:'#91A2AC', faint:'#203849', blue:'#2A6E91', gold:'#D8B26E', navy:'#061724', navy2:'#0D2A3D' };

function sz(n){ return innerWidth <= 760 ? Math.max(6, Math.round(n*.72)) : n; }
function label(color=P.muted){ return {color,fontFamily:'DM Sans, PingFang SC',fontSize:sz(9)}; }
function tip(){ return {backgroundColor:P.navy,borderColor:P.faint,textStyle:{color:P.paper,fontFamily:'DM Sans, PingFang SC',fontSize:sz(10)}}; }
function chart(id){ const node=document.getElementById(id); if(!node)return null; const c=echarts.init(node,null,{renderer:'svg'}); activeCharts.push(c); return c; }

function renderGmv(){ const c=chart('gmvChart'); c.setOption({animationDuration:900,grid:{top:28,right:22,bottom:34,left:42},tooltip:{...tip(),trigger:'axis'},xAxis:{type:'category',data:['上年同期','近半年'],axisLine:{lineStyle:{color:P.faint}},axisTick:{show:false},axisLabel:{...label(),margin:12}},yAxis:{type:'value',min:0,max:200,interval:50,axisLine:{show:false},axisTick:{show:false},axisLabel:label(),splitLine:{lineStyle:{color:P.faint}}},series:[{type:'bar',barWidth:'42%',data:[{value:100,itemStyle:{color:P.blue}},{value:187,itemStyle:{color:P.gold}}],label:{show:true,position:'top',color:P.paper,fontSize:sz(13),formatter:'{c}'}}]}); }
function renderBridge(){ const c=chart('bridgeChart'), names=['健康意识','准备摩擦','即食主食','家庭接受','稳定复购']; c.setOption({animationDuration:900,grid:{top:24,right:18,bottom:30,left:18},tooltip:{...tip(),formatter:p=>names[p.dataIndex]},xAxis:{type:'category',data:names,show:false},yAxis:{type:'value',min:0,max:100,show:false},series:[{type:'line',smooth:.25,symbolSize:sz(9),lineStyle:{color:P.gold,width:2},itemStyle:{color:P.gold},data:[72,38,64,78,88],areaStyle:{color:P.navy2,opacity:.55},label:{show:true,position:'bottom',distance:sz(12),color:P.paper,fontSize:sz(9),formatter:p=>names[p.dataIndex]}}]}); }
function renderOpportunity(){ const c=chart('opportunityChart'); c.setOption({animationDuration:900,grid:{top:30,right:28,bottom:42,left:58},tooltip:{...tip(),trigger:'axis',formatter:p=>`${p[0].name}会员渗透<br>${p[0].value}万箱 / 年`},xAxis:{type:'category',data:['1%','3%','5%'],axisLine:{lineStyle:{color:P.faint}},axisTick:{show:false},axisLabel:{...label(P.paper),margin:12}},yAxis:{type:'value',max:650,interval:200,name:'万箱 / 年',nameTextStyle:label(),axisLine:{show:false},axisTick:{show:false},axisLabel:label(),splitLine:{lineStyle:{color:P.faint}}},series:[{type:'bar',barWidth:'34%',data:[{value:120,itemStyle:{color:P.blue}},{value:360,itemStyle:{color:P.blue}},{value:600,itemStyle:{color:P.gold}}],label:{show:true,position:'top',color:P.paper,fontSize:sz(10),formatter:'{c}万'}}]}); }
function renderMatrix(){ const c=chart('matrixChart'), products=['谷香双豆饭','自煮杂粮饭','冷冻饭团','代餐蛋白棒','即食白米饭'], criteria=['熟悉度','家庭共享','便利性','复购频次','常温履约','差异化'], scores=[[5,5,5,5,5,5],[5,4,1,4,5,2],[4,3,4,3,2,2],[2,1,5,2,5,3],[5,5,5,5,5,1]], data=[]; scores.forEach((r,y)=>r.forEach((v,x)=>data.push([x,y,v]))); c.setOption({animationDuration:850,tooltip:{...tip(),formatter:p=>`${products[p.value[1]]}<br>${criteria[p.value[0]]}：${p.value[2]} / 5`},grid:{top:20,right:24,bottom:20,left:innerWidth<=760?70:115},xAxis:{type:'category',data:criteria,position:'top',axisLine:{lineStyle:{color:P.faint}},axisTick:{show:false},axisLabel:{...label(),interval:0}},yAxis:{type:'category',data:products,inverse:true,axisLine:{show:false},axisTick:{show:false},axisLabel:{...label(P.paper),fontSize:sz(10)}},visualMap:{show:false,min:1,max:5,inRange:{color:['#102C3E','#1D4A61','#39758A','#7B9784','#D8B26E']}},series:[{type:'heatmap',data,label:{show:true,color:P.paper,fontSize:sz(9)},itemStyle:{borderColor:P.navy,borderWidth:3}}]}); }
function renderPrice(){ const c=chart('priceChart'); c.setOption({animationDuration:850,grid:{top:24,right:32,bottom:30,left:48},tooltip:{...tip(),trigger:'axis',formatter:p=>`${p[0].name}<br>单碗 ¥${p[0].value}`},xAxis:{type:'category',data:['¥59.9','¥69.9','¥79.9'],axisLine:{lineStyle:{color:P.faint}},axisTick:{show:false},axisLabel:{...label(P.paper),margin:12}},yAxis:{type:'value',min:4.5,max:7,interval:.5,axisLine:{show:false},axisTick:{show:false},axisLabel:{...label(),formatter:'¥{value}'},splitLine:{lineStyle:{color:P.faint}}},series:[{type:'bar',barWidth:'32%',data:[{value:4.99,itemStyle:{color:P.blue}},{value:5.83,itemStyle:{color:P.gold}},{value:6.66,itemStyle:{color:P.blue}}],label:{show:true,position:'top',color:P.paper,fontSize:sz(10),formatter:p=>`¥${p.value}/碗`}}]}); }
function renderPilot(){ const c=chart('pilotChart'); c.setOption({animationDuration:950,tooltip:{...tip(),formatter:p=>`${p.name}：${p.value}%`},series:[{type:'funnel',left:'8%',top:18,bottom:10,width:'84%',min:0,max:100,minSize:'24%',maxSize:'100%',sort:'descending',gap:4,label:{show:true,position:'inside',color:P.paper,fontSize:sz(10),formatter:'{b}  {c}%'},labelLine:{show:false},itemStyle:{borderColor:P.navy,borderWidth:3},data:[{value:100,name:'有效试吃',itemStyle:{color:'#1C4A63'}},{value:70,name:'口感接受',itemStyle:{color:'#2A6E91'}},{value:60,name:'价格接受',itemStyle:{color:'#6E8B7C'}},{value:25,name:'30天复购',itemStyle:{color:'#D8B26E'}}]}]}); }

const renderers={gmv:renderGmv,bridge:renderBridge,opportunity:renderOpportunity,matrix:renderMatrix,price:renderPrice,pilot:renderPilot};
function renderCharts(types=[]){ activeCharts.forEach(c=>c.dispose()); activeCharts=[]; types.forEach(t=>renderers[t]?.()); }
function renderProgress(){ storyProgress.innerHTML=scenes.map((s,i)=>`<button type="button" class="${i===activeIndex?'active':''}" aria-label="打开 ${s.name}" data-progress="${i}"></button>`).join(''); storyProgress.querySelectorAll('[data-progress]').forEach(b=>b.addEventListener('click',()=>goTo(Number(b.dataset.progress)))); }
function renderScene(){ const s=scenes[activeIndex]; activeCharts.forEach(c=>c.dispose()); activeCharts=[]; stage.innerHTML=s.html; sectionName.textContent=s.name; storyCount.textContent=s.count; renderProgress(); document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>goTo(Number(b.dataset.go)))); requestAnimationFrame(()=>renderCharts(s.charts)); }
function goTo(i){ activeIndex=(i+scenes.length)%scenes.length; renderScene(); }
document.getElementById('nextButton').addEventListener('click',()=>goTo(activeIndex+1));
document.getElementById('previousButton').addEventListener('click',()=>goTo(activeIndex-1));
document.querySelector('.identity').addEventListener('click',()=>goTo(0));
document.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'||e.key==='PageDown')goTo(activeIndex+1); if(e.key==='ArrowLeft'||e.key==='PageUp')goTo(activeIndex-1); });
let touchStartX=0; document.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX},{passive:true}); document.addEventListener('touchend',e=>{const d=e.changedTouches[0].screenX-touchStartX;if(Math.abs(d)>55)goTo(activeIndex+(d<0?1:-1))},{passive:true});
addEventListener('resize',()=>activeCharts.forEach(c=>c.resize()));
renderScene();
