const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const copyState = {
  ko: "복사됨",
  ja: "コピー済み",
  en: "Copied",
};

const MAX_VALUES = {
  living: {
    rent: 2000000,
    utilities: 500000,
    food: 1000000,
    transport: 500000,
    insurance: 500000,
    phone: 200000,
    misc: 1000000,
    buffer: 100,
  },
  movein: {
    rent: 2000000,
    depositMonths: 12,
    keyMoneyMonths: 12,
    agencyMonths: 3,
    guaranteePercent: 300,
    fireInsurance: 1000000,
    lockClean: 1000000,
    moving: 5000000,
  },
};

const i18n = {
  ko: {
    tabLiving: "생활비",
    tabMovein: "초기비용",
    tabChecklist: "체크리스트",
    tabDocument: "서류검토",
    livingTitle: "일본 한 달 생활비",
    livingSub: "월세와 고정비를 넣으면 월/연간 예산과 비상금을 계산합니다.",
    moveinTitle: "일본 월세 초기비용",
    moveinSub: "시키킹, 레이킹, 중개수수료, 보증회사 비용을 한 번에 봅니다.",
    checkTitle: "일본 생활 체크리스트",
    checkSub: "입국, 집, 통신, 은행, 보험, 세금 순서로 막히는 일을 줄입니다.",
    docTitle: "일본어 서류 리스크 체크",
    docSub: "사진, 스크린샷, 메일 전문을 기준으로 AI에 넘길 검토 프롬프트를 만듭니다.",
    rent: "월세",
    utilities: "전기/가스/수도",
    food: "식비",
    transport: "교통",
    insurance: "보험/연금",
    phone: "통신",
    misc: "기타",
    buffer: "버퍼 %",
    monthlyTotal: "월 예상비용",
    yearlyTotal: "연 예상비용",
    reserve: "권장 비상금",
    copyResult: "결과 복사",
    deposit: "시키킹 개월",
    keyMoney: "레이킹 개월",
    agency: "중개수수료 개월",
    guarantee: "보증회사 %",
    fire: "화재보험",
    lockClean: "열쇠/청소",
    moving: "이사/가구",
    upfront: "초기비용 합계",
    rentEquivalent: "월세 대비",
    progress: "진행률",
    copyRemaining: "남은 일 복사",
    pasteJapanese: "일본어 원문 / OCR 결과",
    uploadImage: "사진/스크린샷 업로드",
    uploadImageSub: "이미지를 외부로 보내지 않고 미리보기와 OCR 프롬프트만 만듭니다.",
    imagePlaceholder: "업로드한 문서 이미지가 여기에 표시됩니다.",
    scan: "검토하기",
    foundTerms: "발견된 표현",
    reviewPrompt: "복사용 프롬프트",
    copyPrompt: "프롬프트 복사",
    disclaimer: "계산과 서류 체크는 참고용입니다. 법률, 세무, 비자 판단은 공식기관 또는 전문가에게 확인하세요.",
    noTerms: "위험 표현 없음",
    remainingTitle: "남은 체크리스트",
    promptPlaceholder: "여기에 일본어 원문 또는 OCR 결과를 붙여 넣으세요.",
    valueClamped: "일부 입력값이 현실적인 최대치로 조정됐습니다.",
    highLivingCost: "월 예상비용이 매우 큽니다. 회사 지원 주거비, 가족 동반, 특수 지역이 아니라면 입력값을 다시 확인하세요.",
    highMoveinCost: "초기비용이 월세 대비 높습니다. 단기해약 위약금, 갱신료, 불필요한 옵션을 계약 전 확인하세요.",
    imageReady: "이미지 미리보기 준비됨. 실제 OCR은 다음 단계에서 API 또는 브라우저 OCR로 붙이면 됩니다.",
  },
  ja: {
    tabLiving: "生活費",
    tabMovein: "初期費用",
    tabChecklist: "チェック",
    tabDocument: "書類確認",
    livingTitle: "日本の月間生活費",
    livingSub: "家賃と固定費から月間・年間予算と緊急資金を計算します。",
    moveinTitle: "賃貸の初期費用",
    moveinSub: "敷金、礼金、仲介手数料、保証会社費用をまとめて確認します。",
    checkTitle: "日本生活チェックリスト",
    checkSub: "入国、住居、通信、銀行、保険、税金の抜け漏れを減らします。",
    docTitle: "日本語書類リスク確認",
    docSub: "写真、スクリーンショット、メール本文をもとにAI確認用プロンプトを作ります。",
    rent: "家賃",
    utilities: "電気/ガス/水道",
    food: "食費",
    transport: "交通",
    insurance: "保険/年金",
    phone: "通信",
    misc: "その他",
    buffer: "余裕 %",
    monthlyTotal: "月間見積",
    yearlyTotal: "年間見積",
    reserve: "推奨予備費",
    copyResult: "結果をコピー",
    deposit: "敷金 月数",
    keyMoney: "礼金 月数",
    agency: "仲介手数料 月数",
    guarantee: "保証会社 %",
    fire: "火災保険",
    lockClean: "鍵/清掃",
    moving: "引越/家具",
    upfront: "初期費用合計",
    rentEquivalent: "家賃換算",
    progress: "進行率",
    copyRemaining: "残りをコピー",
    pasteJapanese: "日本語原文 / OCR結果",
    uploadImage: "写真/スクリーンショットをアップロード",
    uploadImageSub: "画像を外部送信せず、プレビューとOCR用プロンプトだけ作ります。",
    imagePlaceholder: "アップロードした書類画像がここに表示されます。",
    scan: "確認する",
    foundTerms: "見つかった表現",
    reviewPrompt: "コピー用プロンプト",
    copyPrompt: "プロンプトをコピー",
    disclaimer: "計算と書類チェックは参考用です。法律、税務、在留資格の判断は公的機関または専門家に確認してください。",
    noTerms: "注意表現なし",
    remainingTitle: "残りのチェックリスト",
    promptPlaceholder: "ここに日本語原文またはOCR結果を貼り付けてください。",
    valueClamped: "一部の入力値を現実的な上限に調整しました。",
    highLivingCost: "月間見積がかなり高いです。会社補助、家族帯同、特殊地域でなければ入力値を再確認してください。",
    highMoveinCost: "初期費用が家賃に対して高いです。短期解約違約金、更新料、不要なオプションを契約前に確認してください。",
    imageReady: "画像プレビューの準備ができました。実際のOCRは次の段階でAPIまたはブラウザOCRを接続します。",
  },
  en: {
    tabLiving: "Living",
    tabMovein: "Move-in",
    tabChecklist: "Checklist",
    tabDocument: "Docs",
    livingTitle: "Monthly Cost in Japan",
    livingSub: "Estimate monthly and yearly budgets plus emergency reserve.",
    moveinTitle: "Japan Apartment Move-In Cost",
    moveinSub: "See deposit, key money, agency fee, guarantor fee, and setup costs.",
    checkTitle: "Japan Life Checklist",
    checkSub: "Reduce misses across arrival, housing, phone, banking, insurance, and tax.",
    docTitle: "Japanese Document Risk Check",
    docSub: "Use a photo, screenshot, or pasted notice to generate an AI review prompt.",
    rent: "Rent",
    utilities: "Utilities",
    food: "Food",
    transport: "Transport",
    insurance: "Insurance/Pension",
    phone: "Phone",
    misc: "Misc",
    buffer: "Buffer %",
    monthlyTotal: "Monthly Estimate",
    yearlyTotal: "Yearly Estimate",
    reserve: "Emergency Reserve",
    copyResult: "Copy Result",
    deposit: "Deposit Months",
    keyMoney: "Key Money Months",
    agency: "Agency Fee Months",
    guarantee: "Guarantor %",
    fire: "Fire Insurance",
    lockClean: "Lock/Cleaning",
    moving: "Moving/Furniture",
    upfront: "Upfront Total",
    rentEquivalent: "Rent Equivalent",
    progress: "Progress",
    copyRemaining: "Copy Remaining",
    pasteJapanese: "Japanese Text / OCR Output",
    uploadImage: "Upload Photo/Screenshot",
    uploadImageSub: "Images are not sent anywhere. This only previews the file and prepares an OCR/review prompt.",
    imagePlaceholder: "Uploaded document image will appear here.",
    scan: "Scan",
    foundTerms: "Found Terms",
    reviewPrompt: "Prompt",
    copyPrompt: "Copy Prompt",
    disclaimer: "Calculations and document checks are for reference only. Confirm legal, tax, and visa matters with official sources or professionals.",
    noTerms: "No flagged terms",
    remainingTitle: "Remaining Checklist",
    promptPlaceholder: "Paste the Japanese text or OCR output here.",
    valueClamped: "Some inputs were adjusted to realistic maximum values.",
    highLivingCost: "The monthly estimate is very high. Unless this includes family housing, company support, or a special area, re-check the inputs.",
    highMoveinCost: "The move-in cost is high compared with rent. Check early cancellation penalties, renewal fees, and optional charges before signing.",
    imageReady: "Image preview is ready. Real OCR can be connected later through an API or browser OCR.",
  },
};

const checklistText = {
  ko: [
    "재류카드 주소 등록 또는 변경",
    "집 계약 전 초기비용 내역 확인",
    "보증회사와 긴급연락처 조건 확인",
    "전기, 가스, 수도 개통",
    "휴대폰/SIM 개통",
    "은행 계좌 개설",
    "국민건강보험 가입 또는 회사 보험 확인",
    "국민연금 면제/납부 여부 확인",
    "마이넘버 카드 또는 통지서 확인",
    "쓰레기 배출 요일과 분리수거 규칙 저장",
    "가까운 병원, 약국, 야간 응급처 찾기",
    "월 예산과 비상금 기준 정하기",
  ],
  ja: [
    "在留カードの住所登録または変更",
    "契約前に初期費用の内訳を確認",
    "保証会社と緊急連絡先の条件を確認",
    "電気、ガス、水道の開始",
    "携帯/SIMの契約",
    "銀行口座の開設",
    "国民健康保険または会社保険の確認",
    "国民年金の免除/納付を確認",
    "マイナンバーカードまたは通知書を確認",
    "ごみ出し曜日と分別ルールを保存",
    "近くの病院、薬局、夜間救急を確認",
    "月間予算と緊急資金の基準を決める",
  ],
  en: [
    "Register or update residence card address",
    "Check move-in cost breakdown before signing",
    "Confirm guarantor company and emergency contact terms",
    "Start electricity, gas, and water",
    "Set up phone or SIM",
    "Open a bank account",
    "Confirm national health insurance or employer insurance",
    "Check pension exemption or payment status",
    "Confirm My Number card or notice",
    "Save trash collection and sorting rules",
    "Find nearby hospital, pharmacy, and night emergency care",
    "Set monthly budget and emergency reserve",
  ],
};

const riskTerms = [
  { term: "解約", label: "해약/해지", level: "high" },
  { term: "違約金", label: "위약금", level: "high" },
  { term: "更新料", label: "갱신료", level: "high" },
  { term: "原状回復", label: "원상복구", level: "high" },
  { term: "退去", label: "퇴거", level: "high" },
  { term: "敷金", label: "시키킹", level: "low" },
  { term: "礼金", label: "레이킹", level: "low" },
  { term: "保証会社", label: "보증회사", level: "low" },
  { term: "自動更新", label: "자동갱신", level: "high" },
  { term: "契約期間", label: "계약기간", level: "low" },
  { term: "短期解約", label: "단기해약", level: "high" },
  { term: "借主負担", label: "임차인 부담", level: "high" },
  { term: "特約", label: "특약", level: "high" },
];

let currentLang = "ko";
let documentImageName = "";

function clampNumber(value, max) {
  if (!Number.isFinite(value)) return { value: max, clamped: true };
  if (value < 0) return { value: 0, clamped: true };
  if (value > max) return { value: max, clamped: true };
  return { value, clamped: false };
}

function normalizeNumberInputs(form, limits) {
  let clamped = false;
  Object.entries(limits).forEach(([name, max]) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) return;
    input.max = String(max);
    const parsed = Number(input.value);
    const result = clampNumber(parsed, max);
    if (result.clamped || input.value === "") {
      input.value = String(result.value);
      clamped = true;
    }
  });
  return clamped;
}

function numberValue(form, name, max = Number.MAX_SAFE_INTEGER) {
  const input = form.querySelector(`[name="${name}"]`);
  const parsed = Number(input?.value || 0);
  return clampNumber(parsed, max).value;
}

function formatYen(value) {
  return yen.format(Math.round(value));
}

function setWarning(id, messages) {
  const node = document.querySelector(id);
  if (!node) return;
  const filtered = messages.filter(Boolean);
  node.textContent = filtered.join(" ");
  node.classList.toggle("active", filtered.length > 0);
}

function updateI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[currentLang][key]) node.textContent = i18n[currentLang][key];
  });
  renderChecklist();
  calculateLiving();
  calculateMovein();
  scanDocument();
}

function calculateLiving() {
  const form = document.querySelector("#living-form");
  const clamped = normalizeNumberInputs(form, MAX_VALUES.living);
  const base = ["rent", "utilities", "food", "transport", "insurance", "phone", "misc"]
    .map((name) => numberValue(form, name, MAX_VALUES.living[name]))
    .reduce((sum, value) => sum + value, 0);
  const buffer = base * (numberValue(form, "buffer", MAX_VALUES.living.buffer) / 100);
  const monthly = base + buffer;
  const yearly = monthly * 12;
  const reserve = monthly * 3;

  document.querySelector("#living-monthly").textContent = formatYen(monthly);
  document.querySelector("#living-yearly").textContent = formatYen(yearly);
  document.querySelector("#living-reserve").textContent = formatYen(reserve);
  setWarning("#living-warning", [
    clamped ? i18n[currentLang].valueClamped : "",
    monthly > 900000 ? i18n[currentLang].highLivingCost : "",
  ]);
}

function calculateMovein() {
  const form = document.querySelector("#movein-form");
  const clamped = normalizeNumberInputs(form, MAX_VALUES.movein);
  const rent = numberValue(form, "rent", MAX_VALUES.movein.rent);
  const rows = [
    [i18n[currentLang].deposit, rent * numberValue(form, "depositMonths", MAX_VALUES.movein.depositMonths)],
    [i18n[currentLang].keyMoney, rent * numberValue(form, "keyMoneyMonths", MAX_VALUES.movein.keyMoneyMonths)],
    [i18n[currentLang].agency, rent * numberValue(form, "agencyMonths", MAX_VALUES.movein.agencyMonths)],
    [i18n[currentLang].guarantee, rent * (numberValue(form, "guaranteePercent", MAX_VALUES.movein.guaranteePercent) / 100)],
    [i18n[currentLang].fire, numberValue(form, "fireInsurance", MAX_VALUES.movein.fireInsurance)],
    [i18n[currentLang].lockClean, numberValue(form, "lockClean", MAX_VALUES.movein.lockClean)],
    [i18n[currentLang].moving, numberValue(form, "moving", MAX_VALUES.movein.moving)],
  ];
  const total = rows.reduce((sum, [, value]) => sum + value, 0);
  const months = rent > 0 ? (total / rent).toFixed(1) : "0.0";

  document.querySelector("#movein-total").textContent = formatYen(total);
  document.querySelector("#movein-months").textContent = `${months}x`;
  document.querySelector("#movein-breakdown").innerHTML = rows
    .map(([label, value]) => `<div class="breakdown-row"><span>${label}</span><strong>${formatYen(value)}</strong></div>`)
    .join("");
  setWarning("#movein-warning", [
    clamped ? i18n[currentLang].valueClamped : "",
    Number(months) > 7 ? i18n[currentLang].highMoveinCost : "",
  ]);
}

function renderChecklist() {
  const items = checklistText[currentLang];
  const root = document.querySelector("#checklist-items");
  const existing = Array.from(document.querySelectorAll(".check-item input")).map((input) => input.checked);
  root.innerHTML = items
    .map((item, index) => `
      <label class="check-item">
        <input type="checkbox" data-index="${index}" ${existing[index] ? "checked" : ""}>
        <span>${item}</span>
      </label>
    `)
    .join("");
  root.querySelectorAll("input").forEach((input) => input.addEventListener("change", updateChecklistProgress));
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const checks = Array.from(document.querySelectorAll(".check-item input"));
  const done = checks.filter((input) => input.checked).length;
  const progress = checks.length ? Math.round((done / checks.length) * 100) : 0;
  document.querySelector("#check-progress").textContent = `${progress}%`;
  document.querySelector("#progress-fill").style.width = `${progress}%`;
}

function getRemainingChecklist() {
  return Array.from(document.querySelectorAll(".check-item"))
    .filter((item) => !item.querySelector("input").checked)
    .map((item) => `- ${item.querySelector("span").textContent}`)
    .join("\n");
}

function buildPrompt(text, found) {
  const termList = found.length ? found.map((item) => `${item.term}(${item.label})`).join(", ") : i18n[currentLang].noTerms;
  if (currentLang === "ja") {
    const japaneseImageLine = documentImageName
      ? `\n添付/スクリーンショットのファイル名: ${documentImageName}\nまず画像から日本語をOCRで読み取り、読みにくい部分は推測せず [確認必要] と表示してください。\n`
      : "";
    return `次の日本語文書を日本語が母語ではない居住者向けに確認してください。${japaneseImageLine}\n確認したい表現: ${termList}\n\nやってほしいこと:\n1. やさしい日本語で要約\n2. 金銭負担、解約、更新、期限、借主負担を表で整理\n3. 契約前に質問すべきことを日本語文で作成\n4. 法的断定は避け、確認が必要な点を分ける\n\n本文/OCR結果:\n${text}`;
  }
  if (currentLang === "en") {
    const englishImageLine = documentImageName
      ? `\nAttached/screenshot file name: ${documentImageName}\nFirst perform OCR on the image. If a section is unclear, mark it as [needs confirmation] instead of guessing.\n`
      : "";
    return `Review the following Japanese document for a non-Japanese resident in Japan.${englishImageLine}\nFlagged terms: ${termList}\n\nTasks:\n1. Summarize it in plain English\n2. Make a table of money, cancellation, renewal, deadlines, and tenant obligations\n3. Draft Japanese questions to ask before signing\n4. Avoid legal certainty and separate items that need official confirmation\n\nText/OCR output:\n${text}`;
  }
  const koreanImageLine = documentImageName
    ? `\n첨부/스크린샷 파일명: ${documentImageName}\n먼저 이미지에서 일본어를 OCR로 읽고, 읽기 어려운 부분은 추정하지 말고 [확인 필요]로 표시해줘.\n`
    : "";
  return `다음 일본어 문서를 일본 거주 외국인 관점에서 검토해줘.${koreanImageLine}\n발견된 표현: ${termList}\n\n해줄 일:\n1. 쉬운 한국어로 요약\n2. 금전 부담, 해약, 갱신, 기한, 임차인 부담을 표로 정리\n3. 계약 전 일본어로 물어볼 질문 작성\n4. 법률적 단정은 피하고 공식 확인이 필요한 부분 분리\n\n본문/OCR 결과:\n${text}`;
}

function scanDocument() {
  const text = document.querySelector("#document-input").value.trim();
  const found = riskTerms.filter((item) => text.includes(item.term));
  const chips = document.querySelector("#risk-terms");
  chips.innerHTML = found.length
    ? found.map((item) => `<span class="chip ${item.level === "low" ? "low" : ""}">${item.term} · ${item.label}</span>`).join("")
    : `<span class="chip low">${i18n[currentLang].noTerms}</span>`;
  document.querySelector("#prompt-output").value = buildPrompt(text || i18n[currentLang].promptPlaceholder, found);
}

function previewDocumentImage(file) {
  const preview = document.querySelector("#image-preview");
  if (!file || !preview) return;

  documentImageName = file.name;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    preview.classList.remove("empty");
    preview.innerHTML = `<img src="${reader.result}" alt="${file.name}">`;
    scanDocument();
  });
  reader.readAsDataURL(file);
}

function handleDocumentImage(event) {
  previewDocumentImage(event.target.files?.[0]);
}

function handleDocumentPaste(event) {
  const imageItem = Array.from(event.clipboardData?.items || []).find((item) => item.type.startsWith("image/"));
  if (!imageItem) return;
  const file = imageItem.getAsFile();
  if (!file) return;
  previewDocumentImage(new File([file], `pasted-document-${Date.now()}.png`, { type: file.type }));
}

async function copyText(text, button) {
  let copied = false;
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      copied = false;
    }
  }
  if (!copied) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  const original = button.textContent;
  button.textContent = copyState[currentLang];
  window.setTimeout(() => {
    button.textContent = original;
  }, 900);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((node) => node.classList.remove("active"));
    document.querySelectorAll(".tool-panel").forEach((node) => node.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
  });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    document.querySelectorAll(".lang-button").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    updateI18n();
  });
});

document.querySelector("#living-form").addEventListener("input", calculateLiving);
document.querySelector("#movein-form").addEventListener("input", calculateMovein);
document.querySelector("#document-input").addEventListener("input", scanDocument);
document.querySelector("#document-input").addEventListener("paste", handleDocumentPaste);
document.querySelector("#document-image").addEventListener("change", handleDocumentImage);
document.querySelector("#scan-document").addEventListener("click", scanDocument);

document.querySelector("#copy-living").addEventListener("click", (event) => {
  const text = [
    `${i18n[currentLang].monthlyTotal}: ${document.querySelector("#living-monthly").textContent}`,
    `${i18n[currentLang].yearlyTotal}: ${document.querySelector("#living-yearly").textContent}`,
    `${i18n[currentLang].reserve}: ${document.querySelector("#living-reserve").textContent}`,
  ].join("\n");
  copyText(text, event.currentTarget);
});

document.querySelector("#copy-movein").addEventListener("click", (event) => {
  const rows = Array.from(document.querySelectorAll("#movein-breakdown .breakdown-row"))
    .map((row) => `${row.querySelector("span").textContent}: ${row.querySelector("strong").textContent}`)
    .join("\n");
  const text = `${i18n[currentLang].upfront}: ${document.querySelector("#movein-total").textContent}\n${rows}`;
  copyText(text, event.currentTarget);
});

document.querySelector("#copy-checklist").addEventListener("click", (event) => {
  copyText(`${i18n[currentLang].remainingTitle}\n${getRemainingChecklist()}`, event.currentTarget);
});

document.querySelector("#copy-prompt").addEventListener("click", (event) => {
  copyText(document.querySelector("#prompt-output").value, event.currentTarget);
});

updateI18n();
