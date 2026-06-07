# green-fact — 綠色宣稱與事實查核標記研究問卷

漂綠（greenwashing）× 事實查核標記的 **adaptive 雙 CBC** 線上問卷。自製 HTML，純靜態，部署於 GitHub Pages，作答資料經 SheetMonkey 寫入 Google Sheet。

## 線上問卷

<https://richyli.github.io/green-fact/>

## 檔案

| 檔案 | 用途 |
|------|------|
| `index.html` | 問卷本體（單檔 app：同意 → Study 1 → 過場 → Study 2 → 量表 → 送出）|
| `config.js` | 設計設定（屬性/水準/題數/秒數/量表/SheetMonkey endpoint）。**改這裡即可調，HTML 不用動。** |

## 設計摘要

- **Study 1**（CBC，五屬性綠色宣稱）：估個人 5 屬性重要性 → 取個人前 3 名。每屬性只用強/弱宣稱（無「未提及」），左右至少 3 屬性不同且互有勝負（避免 dominated）。
- **過場**：告知個人前 3 名 + 說明「接下來宣稱固定、只看查核標記」。
- **Study 2**（adaptive，CBC）：只用個人前 3 名，宣稱印一次 + 品牌 A/B 雙查核戳記欄。戳記「真/不實/部分各一」。
- **品質檢核**：注意力 trap（兩 study 不同邊）、鏡像重複一致性、最短停留 3 秒、位置偏誤 leftRatio。
- **屬性順序**：每位受訪者隨機一次、全程固定。
- **量表**：綠色消費意識 + 查核信任 + marker，亂數排序。

## 資料

作答以「一人一列」扁平 JSON 寫入 SheetMonkey → Google Sheet。
分析時以 `export?format=csv` 直抓 Sheet，無需 OAuth。

## 載體與文案

產品載體為個人清潔品（洗髮精），文案取自台灣真實市場語料。依據見研究資料夾 `analysis_output/product_category_prestudy.md`。

---
政大新聞　李怡志
