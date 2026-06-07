/* R Fact-Checked Greenwashing — 設計設定檔
 * 五個漂綠屬性 × 各 3 內容水準；查核戳記 4 水準（含未查核 baseline）。
 * 改這裡即可調文案 / 水準 / 題數，HTML 不用動。
 */
window.GW_CONFIG = {
  // SheetMonkey 收件 endpoint（請替換成此研究新建 form 的 URL）
  endpoint: 'https://api.sheetmonkey.io/form/vXJvC1tS1MAo9Hin24KyfK',

  researcher: '政大新聞　李怡志',   // 首尾頁署名

  // 產品載體品類（固定單一品類，降低「品類 × 綠色在乎度」干擾）
  // 已定案：前置研究（2026-06-07）確認個人清潔品為唯一「五類綠色宣稱真實同框」品類，
  // 歐萊德洗髮精單品即五類齊發；天然成分訴求亦比洗衣精更自然。下方文案取自真實市場語料。
  productCategory: '洗髮精',

  // 題數
  study1Tasks: 8,    // Study 1 CBC 題數（五屬性）
  study2Tasks: 9,    // Study 2 CBC 題數（個人前 3 屬性；建議 3 的倍數，配合戳記固定組成）
  topN: 3,           // Study 2 取個人前幾名屬性
  minAnswerSec: 3,   // 每題最短停留秒數：此秒數內卡片不可點（倒數結束才能選），防搶答
  // Study 1 每屬性一律有宣稱（不用「未提及」），避免空屬性造成 trade-off 不平等（使用者實測 2026-06-07）

  // 五個漂綠屬性，每個 3 內容水準：L1 強宣稱 / L2 弱宣稱 / L3 不提（baseline）
  // 文案取自台灣個人清潔品真實市場語料（歐萊德/綠藤/台塑/台鹽/Biore 等）
  attrs: [
    { key: 'carbon',  name: '碳排放',  type: '誇大效果',
      levels: ['碳中和產品，每瓶碳足跡 100% 抵消', '採用再生製程，較原配方減碳約 20%', '（未提及碳排放）'] },
    { key: 'recycle', name: '回收材料', type: '隱藏權衡',
      levels: ['瓶身 100% 消費後回收塑膠（PCR）', '瓶身部分使用回收塑膠', '（未提及回收材料）'] },
    { key: 'cert',    name: '環保認證', type: '假認證',
      levels: ['通過環境部環保標章認證', '通過廠內自我環保檢核', '（未標示任何認證）'] },
    { key: 'natural', name: '天然成分', type: '模糊宣稱',
      levels: ['100% 植萃配方，無矽靈、無化學添加', '添加部分植物萃取成分', '（未強調天然成分）'] },
    { key: 'tech',    name: '環保科技', type: '無意義術語',
      levels: ['生物分解度高於 95%，海洋友善', '採用環境友善配方', '（未提及環保科技）'] },
  ],

  // 查核戳記（Study 2；與宣稱內容正交獨立隨機）。none = 未查核 baseline（估 Implied Truth）
  stamps: [
    { key: 'verified', icon: '✅', label: '已查核為真', color: '#1a8a3a', bg: '#e7f6ec' },
    { key: 'partial',  icon: '⚠️', label: '部分屬實',   color: '#b8860b', bg: '#fdf6e3' },
    // key 用 'refuted' 而非 'false'：避免 Google Sheet 把字串 false 當布林假值（2026-06-07）
    { key: 'refuted',  icon: '❌', label: '查核：不實', color: '#c0392b', bg: '#fdecea' },
    { key: 'none',     icon: '',   label: '未經查核',   color: '#9aa0a6', bg: '#f2f3f5' },
  ],

  // moderator 量表（5 點 Likert）。事後分析做 cross-group 比較。題目亂數排序，含 marker 題。
  scales: [
    { key: 'green1', text: '購買產品時，我會注意它是否環保。' },
    { key: 'green2', text: '我願意為更環保的產品付較高價格。' },
    { key: 'green3', text: '我認為自己是有環境意識的消費者。' },
    { key: 'fc1',    text: '我信任第三方事實查核機構提供的查核結果。' },
    { key: 'fc2',    text: '看到「查核為不實」的標記會降低我對該訊息的信任。' },
    { key: 'fc3',    text: '我認為事實查核能幫助消費者辨識不實的綠色宣稱。' },
    { key: 'marker_blue', text: '我很喜歡藍色。', marker: true }, // CMV marker（分析時當共同方法變異校正）
  ],
  scaleAnchors: ['非常不同意', '不同意', '普通', '同意', '非常同意'],
};
