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
    pageTitle: "J-Life Kit",
    pageDescription: "일본 생활비, 월세 초기비용, 체크리스트, 일본어 서류 검토를 빠르게 정리하는 도구",
    navTools: "도구",
    navGuides: "페이지",
    navHow: "작동 방식",
    navUseCases: "사용 상황",
    navPrivacy: "개인정보",
    navUseTool: "도구 사용",
    navMovein: "초기비용",
    navLiving: "생활비",
    navContract: "계약서",
    navChecklist: "체크리스트",
    heroBadge: "일본 생활 도구 · KR / JP / EN",
    heroLead: "일본 생활에서 막히는 비용, 집 계약, 행정 체크리스트, 일본어 서류를 빠르게 정리하는 외국인 거주자용 도구입니다.",
    heroPrimary: "도구 바로 쓰기",
    heroPrivacy: "개인정보 처리",
    heroGuides: "페이지별로 보기",
    heroMoveHint: "집 계약 전 첫 달 현금",
    heroLivingHint: "매달 나가는 고정비",
    heroContractHint: "해약/갱신/원상회복",
    heroChecklistHint: "입국 직후 할 일",
    proofCostTitle: "비용",
    proofCostSub: "생활비와 입주 초기비용 계산",
    proofDocsTitle: "서류",
    proofDocsSub: "계약서 리스크 프롬프트",
    proofLocalTitle: "로컬",
    proofLocalSub: "이미지 미리보기는 브라우저 안에서만",
    chromeTitle: "일본 생활 비용 계산",
    chromeStatus: "실시간",
    guideBadge: "바로 가기",
    guideHeading: "필요한 페이지로 바로 이동하세요.",
    guideSub: "계산기만 던져두지 않고, 상황별 설명 페이지와 실제 도구를 연결했습니다.",
    guideMoveTitle: "월세 초기비용",
    guideMoveText: "시키킹, 레이킹, 중개수수료, 보증회사 비용을 먼저 봅니다.",
    guideLivingTitle: "월 생활비",
    guideLivingText: "월세, 공과금, 식비, 교통비, 보험, 예비비를 나눠 봅니다.",
    guideContractTitle: "계약서 표현",
    guideContractText: "해약, 위약금, 갱신료, 원상회복 같은 표현을 먼저 확인합니다.",
    guideChecklistTitle: "이주 체크리스트",
    guideChecklistText: "주소 등록, 통신, 은행, 보험처럼 입국 직후 할 일을 정리합니다.",
    guideOpen: "열기",
    featureBadge: "실용 우선",
    featureHeading: "일본 생활에서 바로 막히는 문제만.",
    featureSub: "월세, 초기비용, 행정 절차, 계약서 표현처럼 실제 행동 전에 확인해야 하는 것들을 먼저 정리합니다.",
    featureCostTitle: "돈부터 계산",
    featureCostText: "월세, 생활비, 초기비용을 분리해 사용자가 가장 먼저 궁금해하는 숫자를 바로 보여줍니다.",
    featureDocsTitle: "일본어 리스크 표시",
    featureDocsText: "계약서와 안내문에서 먼저 확인할 단어를 찾고, 더 강한 AI에 붙일 검토 프롬프트를 생성합니다.",
    featureActionsTitle: "행동 목록으로 마무리",
    featureActionsText: "정보를 읽고 끝나는 대신 남은 할 일을 복사 가능한 체크리스트로 바꿉니다.",
    workflowBadge: "작동 방식",
    workflowHeading: "숫자와 서류를 행동 목록으로 바꿉니다.",
    workflowCostTitle: "비용을 먼저 계산",
    workflowCostText: "생활비와 입주 초기비용을 분리해서 첫 달에 필요한 현금을 대략 확인합니다.",
    workflowDocTitle: "서류를 붙여넣기",
    workflowDocText: "일본어 원문이나 OCR 결과를 넣고, 위험 표현과 질문용 프롬프트를 만듭니다.",
    workflowChecklistTitle: "남은 일을 복사",
    workflowChecklistText: "주소 등록, 보험, 은행, 휴대폰처럼 놓치기 쉬운 절차를 체크리스트로 관리합니다.",
    useBadge: "사용 상황",
    useHeading: "이런 상황에서 먼저 확인하세요.",
    useSub: "정확한 법률 판단은 전문가에게 확인해야 하지만, 계약 전 질문과 비용 감각은 미리 잡을 수 있습니다.",
    useRentTitle: "일본 집 계약 전",
    useRentText: "시키킹, 레이킹, 보증회사, 중개수수료를 예시로 분해합니다.",
    useBudgetTitle: "첫 달 예산 잡기",
    useBudgetText: "월세와 고정비 중심으로 첫 달 예산을 빠르게 잡습니다.",
    useContractTitle: "계약서 표현 확인",
    useContractText: "解約, 違約金, 更新料, 原状回復 같은 단어를 행동 질문으로 바꿉니다.",
    useArrivalTitle: "입국 직후 체크",
    useArrivalText: "입국 직후 월급 전까지 버틸 자금과 임시숙소 비용을 정리합니다.",
    privacyHeading: "이미지는 브라우저에서만 미리보기합니다.",
    privacyText: "현재 버전은 업로드한 이미지나 붙여넣은 일본어 문서를 서버로 전송하지 않습니다. OCR 또는 AI 검토를 사용할 때는 사용자가 직접 프롬프트를 복사해 원하는 도구에 붙여넣습니다.",
    privacyButton: "도구 다시 보기",
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
    shareLine: "같이 확인해보기:",
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
    pageTitle: "J-Life Kit",
    pageDescription: "日本の生活費、賃貸初期費用、チェックリスト、日本語書類確認をすばやく整理するツール",
    navTools: "ツール",
    navGuides: "ページ",
    navHow: "使い方",
    navUseCases: "利用シーン",
    navPrivacy: "プライバシー",
    navUseTool: "ツールを使う",
    navMovein: "初期費用",
    navLiving: "生活費",
    navContract: "契約書",
    navChecklist: "チェックリスト",
    heroBadge: "日本生活ツール · KR / JP / EN",
    heroLead: "日本生活で迷いやすい費用、賃貸契約、行政チェックリスト、日本語書類をすばやく整理する外国人居住者向けツールです。",
    heroPrimary: "ツールを使う",
    heroPrivacy: "プライバシー",
    heroGuides: "ページ別に見る",
    heroMoveHint: "契約前の初月現金",
    heroLivingHint: "毎月の固定費",
    heroContractHint: "解約/更新/原状回復",
    heroChecklistHint: "到着直後の手続き",
    proofCostTitle: "費用",
    proofCostSub: "月間生活費と賃貸初期費用",
    proofDocsTitle: "書類",
    proofDocsSub: "契約リスク確認プロンプト",
    proofLocalTitle: "ローカル",
    proofLocalSub: "画像プレビューはブラウザ内のみ",
    chromeTitle: "日本生活費用の見積",
    chromeStatus: "ライブ",
    guideBadge: "クイックリンク",
    guideHeading: "必要なページへすぐ移動できます。",
    guideSub: "説明ページと実際のツールをつなげて、次の行動が分かるようにしました。",
    guideMoveTitle: "賃貸初期費用",
    guideMoveText: "敷金、礼金、仲介手数料、保証会社費用を先に確認します。",
    guideLivingTitle: "月の生活費",
    guideLivingText: "家賃、光熱費、食費、交通費、保険、予備費を分けて確認します。",
    guideContractTitle: "契約書の表現",
    guideContractText: "解約、違約金、更新料、原状回復などの表現を先に確認します。",
    guideChecklistTitle: "移住チェックリスト",
    guideChecklistText: "住所登録、通信、銀行、保険など到着直後の手続きを整理します。",
    guideOpen: "開く",
    featureBadge: "実用性を優先",
    featureHeading: "日本生活で実際に困ることだけ。",
    featureSub: "家賃、初期費用、行政手続き、契約書の表現など、行動前に確認すべきことを先に整理します。",
    featureCostTitle: "まず費用を計算",
    featureCostText: "家賃、生活費、初期費用を分けて、最初に知りたい金額をすばやく表示します。",
    featureDocsTitle: "日本語リスク表現",
    featureDocsText: "契約書や通知で先に確認すべき単語を見つけ、AI確認用プロンプトを作成します。",
    featureActionsTitle: "行動リストに変換",
    featureActionsText: "読むだけで終わらせず、残りの作業をコピーできるチェックリストに変えます。",
    workflowBadge: "使い方",
    workflowHeading: "数字と書類を行動リストに変えます。",
    workflowCostTitle: "費用を先に計算",
    workflowCostText: "生活費と入居初期費用を分けて、初月に必要な現金を大まかに確認します。",
    workflowDocTitle: "書類を貼り付け",
    workflowDocText: "日本語原文やOCR結果を入れて、注意表現と質問用プロンプトを作ります。",
    workflowChecklistTitle: "残りをコピー",
    workflowChecklistText: "住所登録、保険、銀行、携帯など、忘れやすい手続きをチェックリストで管理します。",
    useBadge: "利用シーン",
    useHeading: "こんな時に先に確認してください。",
    useSub: "正確な法的判断は専門家に確認すべきですが、契約前の質問や費用感は事前に整理できます。",
    useRentTitle: "賃貸契約の前",
    useRentText: "敷金、礼金、保証会社、仲介手数料を例で分解します。",
    useBudgetTitle: "初月予算を作る",
    useBudgetText: "家賃と固定費を中心に初月の予算をすばやく把握します。",
    useContractTitle: "契約表現を確認",
    useContractText: "解約、違約金、更新料、原状回復などの単語を確認質問に変えます。",
    useArrivalTitle: "入国直後の確認",
    useArrivalText: "入国直後から初給料までに必要な資金と一時滞在費を整理します。",
    privacyHeading: "画像はブラウザ内でのみプレビューします。",
    privacyText: "現在のバージョンでは、アップロードした画像や貼り付けた日本語文書をサーバーへ送信しません。OCRやAI確認を使う場合は、ユーザー自身がプロンプトをコピーして任意のツールに貼り付けます。",
    privacyButton: "ツールに戻る",
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
    shareLine: "同じツールで確認:",
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
    pageTitle: "J-Life Kit",
    pageDescription: "Tools to estimate Japan living costs, move-in costs, checklists, and Japanese document review prompts.",
    navTools: "Tools",
    navGuides: "Pages",
    navHow: "How it works",
    navUseCases: "Use cases",
    navPrivacy: "Privacy",
    navUseTool: "Use tools",
    navMovein: "Move-in cost",
    navLiving: "Living cost",
    navContract: "Contract",
    navChecklist: "Checklist",
    heroBadge: "Japan life tools · KR / JP / EN",
    heroLead: "A practical toolkit for non-Japanese residents to organize Japan living costs, apartment contracts, admin checklists, and Japanese documents.",
    heroPrimary: "Use the tools",
    heroPrivacy: "Privacy",
    heroGuides: "Browse pages",
    heroMoveHint: "First-month cash before signing",
    heroLivingHint: "Monthly fixed costs",
    heroContractHint: "Cancel/renew/restore terms",
    heroChecklistHint: "Tasks after arrival",
    proofCostTitle: "Cost",
    proofCostSub: "monthly and move-in estimates",
    proofDocsTitle: "Docs",
    proofDocsSub: "contract risk prompts",
    proofLocalTitle: "Local",
    proofLocalSub: "image preview stays in browser",
    chromeTitle: "Japan life estimate",
    chromeStatus: "Live",
    guideBadge: "Quick paths",
    guideHeading: "Go straight to the page you need.",
    guideSub: "The explainer pages now connect directly to the practical tools.",
    guideMoveTitle: "Move-in cost",
    guideMoveText: "Check deposit, key money, agency fee, and guarantor costs first.",
    guideLivingTitle: "Monthly living cost",
    guideLivingText: "Separate rent, utilities, food, transport, insurance, and buffer.",
    guideContractTitle: "Contract terms",
    guideContractText: "Review cancellation, penalty, renewal, and restoration terms first.",
    guideChecklistTitle: "Moving checklist",
    guideChecklistText: "Organize address registration, phone, banking, and insurance steps.",
    guideOpen: "Open",
    featureBadge: "Practical first",
    featureHeading: "Only the Japan-life problems that block action.",
    featureSub: "Rent, move-in costs, admin steps, and contract terms are organized before you make a decision.",
    featureCostTitle: "Estimate money first",
    featureCostText: "Separate rent, living costs, and move-in costs so the numbers are visible before anything else.",
    featureDocsTitle: "Flag Japanese risk terms",
    featureDocsText: "Find terms to review in contracts and notices, then generate a prompt for a stronger AI assistant.",
    featureActionsTitle: "Turn it into actions",
    featureActionsText: "Instead of stopping at information, copy the remaining tasks as a practical checklist.",
    workflowBadge: "How it works",
    workflowHeading: "Turn numbers and documents into next actions.",
    workflowCostTitle: "Estimate costs first",
    workflowCostText: "Separate monthly living costs and move-in costs to understand the cash needed for the first month.",
    workflowDocTitle: "Paste the document",
    workflowDocText: "Paste Japanese text or OCR output, then generate risk terms and questions to ask.",
    workflowChecklistTitle: "Copy what remains",
    workflowChecklistText: "Track steps such as address registration, insurance, banking, and phone setup.",
    useBadge: "Use cases",
    useHeading: "Check these before you act.",
    useSub: "Legal certainty still needs a professional, but cost sense and contract questions can be prepared in advance.",
    useRentTitle: "Before signing a lease",
    useRentText: "Break down deposit, key money, guarantor company fees, and agency fees.",
    useBudgetTitle: "Plan the first month",
    useBudgetText: "Estimate the first-month budget around rent and recurring fixed costs.",
    useContractTitle: "Review contract terms",
    useContractText: "Turn terms like 解約, 違約金, 更新料, 原状回復 into questions to ask.",
    useArrivalTitle: "Right after arrival",
    useArrivalText: "Organize cash needed before the first paycheck and temporary housing costs.",
    privacyHeading: "Images are previewed in your browser only.",
    privacyText: "This version does not send uploaded images or pasted Japanese documents to a server. For OCR or AI review, copy the prompt and paste it into the tool you choose.",
    privacyButton: "Back to tools",
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
    shareLine: "Try the tool:",
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

const savedLang = localStorage.getItem("jlife-lang");
let currentLang = ["ko", "ja", "en"].includes(savedLang) ? savedLang : "ko";
let documentImageName = "";

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    language: currentLang,
    ...params,
  });
}

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

function viralLink(page) {
  return `https://attwist.github.io/project_koru/${page}?utm_source=result_copy&utm_medium=tool&utm_campaign=viral_loop`;
}

function withViralLink(text, page) {
  return `${text}\n\n${i18n[currentLang].shareLine}\n${viralLink(page)}`;
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
  document.title = i18n[currentLang].pageTitle;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", i18n[currentLang].pageDescription);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[currentLang][key]) node.textContent = i18n[currentLang][key];
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
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
  if (event.target.files?.[0]) {
    trackEvent("document_image_upload", { source: "file_input" });
  }
}

function handleDocumentPaste(event) {
  const imageItem = Array.from(event.clipboardData?.items || []).find((item) => item.type.startsWith("image/"));
  if (!imageItem) return;
  const file = imageItem.getAsFile();
  if (!file) return;
  previewDocumentImage(new File([file], `pasted-document-${Date.now()}.png`, { type: file.type }));
  trackEvent("document_image_upload", { source: "paste" });
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

function selectTool(tabName, shouldTrack = false) {
  const validTools = ["living", "movein", "checklist", "document"];
  if (!validTools.includes(tabName)) return;

  document.querySelectorAll(".tab").forEach((node) => node.classList.toggle("active", node.dataset.tab === tabName));
  document.querySelectorAll(".tool-panel").forEach((node) => node.classList.toggle("active", node.id === tabName));

  if (shouldTrack) trackEvent("tool_tab_open", { tool: tabName });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    selectTool(tab.dataset.tab, true);
  });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("jlife-lang", currentLang);
    updateI18n();
    trackEvent("language_switch");
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
  copyText(withViralLink(text, "living-cost.html"), event.currentTarget);
  trackEvent("living_copy");
});

document.querySelector("#copy-movein").addEventListener("click", (event) => {
  const rows = Array.from(document.querySelectorAll("#movein-breakdown .breakdown-row"))
    .map((row) => `${row.querySelector("span").textContent}: ${row.querySelector("strong").textContent}`)
    .join("\n");
  const text = `${i18n[currentLang].upfront}: ${document.querySelector("#movein-total").textContent}\n${rows}`;
  copyText(withViralLink(text, "move-in-cost.html"), event.currentTarget);
  trackEvent("movein_copy");
});

document.querySelector("#copy-checklist").addEventListener("click", (event) => {
  copyText(withViralLink(`${i18n[currentLang].remainingTitle}\n${getRemainingChecklist()}`, "moving-checklist.html"), event.currentTarget);
  trackEvent("checklist_copy");
});

document.querySelector("#copy-prompt").addEventListener("click", (event) => {
  copyText(withViralLink(document.querySelector("#prompt-output").value, "contract-check.html"), event.currentTarget);
  trackEvent("document_prompt_copy");
});

updateI18n();

const initialTool = new URLSearchParams(window.location.search).get("tool");
selectTool(initialTool);
