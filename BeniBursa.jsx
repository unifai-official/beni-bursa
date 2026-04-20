const { useState, useEffect } = React;

// ============================================================
// DATA - STOCKS
// ============================================================

const stocksData = [
  {
    id: 1, name: 'אפל', symbol: 'AAPL', score: 85, risk: 'low', price: 178.52,
    change: 1.2, changeWeek: 2.1, changeMonth: 4.5, changeYear: 18.3,
    exchange: 'NASDAQ', type: 'stock',
    history: [165, 168, 172, 169, 175, 178, 176, 180, 177, 178.52],
    reason: 'החברה מרוויחה הרבה כסף ואנשים אוהבים את המוצרים שלה',
    good: ['רווחים יציבים', 'מותג חזק', 'מוצרים פופולריים'],
    bad: ['תחרות מסין', 'מחירים גבוהים']
  },
  {
    id: 2, name: 'טסלה', symbol: 'TSLA', score: 55, risk: 'high', price: 245.30,
    change: -2.8, changeWeek: -4.5, changeMonth: -8.2, changeYear: -15.4,
    exchange: 'NASDAQ', type: 'stock',
    history: [220, 260, 240, 280, 250, 230, 270, 255, 240, 245.30],
    reason: 'המחיר קופץ הרבה למעלה ולמטה, קשה לדעת מה יקרה',
    good: ['טכנולוגיה מתקדמת', 'מנהיג בשוק'],
    bad: ['תנודתיות גבוהה', 'תחרות גוברת']
  },
  {
    id: 3, name: 'מיקרוסופט', symbol: 'MSFT', score: 88, risk: 'low', price: 378.91,
    change: 0.8, changeWeek: 1.5, changeMonth: 3.8, changeYear: 22.1,
    exchange: 'NASDAQ', type: 'stock',
    history: [350, 355, 360, 358, 365, 370, 368, 375, 377, 378.91],
    reason: 'החברה גדלה בקצב יציב והרבה עסקים משתמשים במוצרים שלה',
    good: ['צמיחה יציבה', 'מובילה בענן', 'AI חזק'],
    bad: ['מחיר גבוה כבר']
  },
  {
    id: 4, name: 'אמזון', symbol: 'AMZN', score: 78, risk: 'medium', price: 178.25,
    change: 1.5, changeWeek: 2.8, changeMonth: 5.2, changeYear: 28.7,
    exchange: 'NASDAQ', type: 'stock',
    history: [160, 165, 162, 170, 168, 175, 172, 176, 177, 178.25],
    reason: 'אנשים קונים הרבה באינטרנט והחברה ממשיכה לגדול',
    good: ['שליטה במסחר', 'AWS חזק'],
    bad: ['רווחים נמוכים', 'תחרות']
  },
  {
    id: 5, name: 'גוגל', symbol: 'GOOGL', score: 82, risk: 'low', price: 141.80,
    change: 0.5, changeWeek: 1.2, changeMonth: 2.9, changeYear: 15.6,
    exchange: 'NASDAQ', type: 'stock',
    history: [130, 132, 135, 134, 138, 137, 140, 139, 141, 141.80],
    reason: 'כמעט כולם משתמשים בגוגל והחברה מרוויחה טוב',
    good: ['שליטה בחיפוש', 'יוטיוב', 'ענן'],
    bad: ['תלות בפרסום']
  },
  {
    id: 6, name: 'נבידיה', symbol: 'NVDA', score: 80, risk: 'medium', price: 495.00,
    change: 2.1, changeWeek: 3.5, changeMonth: 8.4, changeYear: 65.2,
    exchange: 'NASDAQ', type: 'stock',
    history: [420, 440, 460, 450, 480, 470, 490, 485, 500, 495.00],
    reason: 'מובילה בשבבים לבינה מלאכותית, ביקוש גבוה מאוד',
    good: ['מובילה ב-AI', 'צמיחה מהירה'],
    bad: ['מחיר גבוה', 'תחרות צפויה']
  },
  {
    id: 7, name: 'מטא', symbol: 'META', score: 78, risk: 'medium', price: 512.50,
    change: 1.8, changeWeek: 2.4, changeMonth: 6.1, changeYear: 42.8,
    exchange: 'NASDAQ', type: 'stock',
    history: [450, 465, 480, 475, 490, 505, 498, 510, 508, 512.50],
    reason: 'הבעלים של פייסבוק ואינסטגרם, משקיעה הרבה במציאות מדומה ו-AI',
    good: ['מיליארדי משתמשים', 'רווחים גבוהים מפרסום', 'השקעה ב-AI'],
    bad: ['תלות בפרסום', 'אתגרי רגולציה', 'השקעות יקרות ב-VR']
  },
  {
    id: 8, name: 'נטפליקס', symbol: 'NFLX', score: 72, risk: 'medium', price: 628.90,
    change: -0.5, changeWeek: 1.2, changeMonth: 4.5, changeYear: 35.6,
    exchange: 'NASDAQ', type: 'stock',
    history: [560, 580, 600, 595, 615, 625, 620, 635, 630, 628.90],
    reason: 'פלטפורמת הסטרימינג הגדולה בעולם, חזרה לצמיחה אחרי איבוד מנויים',
    good: ['מותג חזק', 'תוכן מקורי', 'התרחבות גלובלית'],
    bad: ['תחרות מדיסני ואחרים', 'עלויות תוכן גבוהות']
  },
  {
    id: 9, name: 'דיסני', symbol: 'DIS', score: 55, risk: 'medium', price: 103.40,
    change: 0.3, changeWeek: -1.2, changeMonth: -3.5, changeYear: -8.2,
    exchange: 'NYSE', type: 'stock',
    history: [115, 112, 108, 110, 106, 104, 107, 102, 104, 103.40],
    reason: 'ענקית בידור עם סרטים, פארקים ו-Disney+, אבל מתמודדת עם אתגרים',
    good: ['מותגים אהובים', 'פארקי שעשועים', 'ספרייה עצומה של תוכן'],
    bad: ['הפסדים בסטרימינג', 'תחרות חזקה', 'חוב גבוה']
  },
  {
    id: 10, name: 'קוקה קולה', symbol: 'KO', score: 75, risk: 'low', price: 64.20,
    change: 0.2, changeWeek: 0.8, changeMonth: 1.5, changeYear: 8.4,
    exchange: 'NYSE', type: 'stock',
    history: [59, 60, 61, 60.5, 62, 63, 62.5, 63.5, 64, 64.20],
    reason: 'מותג משקאות אייקוני, יציב ומשלם דיבידנדים כבר 60 שנה',
    good: ['יציבות גבוהה', 'דיבידנדים קבועים', 'מותג עולמי'],
    bad: ['צמיחה איטית', 'מגמת בריאות נגד סוכר']
  },
  {
    id: 11, name: 'AMD', symbol: 'AMD', score: 78, risk: 'medium', price: 172.40,
    change: 2.3, changeWeek: 4.1, changeMonth: 8.5, changeYear: 38.2,
    exchange: 'NASDAQ', type: 'stock',
    history: [150, 158, 165, 160, 170, 168, 175, 173, 170, 172.40],
    reason: 'יצרנית שבבים מתחרה של אינטל ונבידיה, צומחת בשוק ה-AI',
    good: ['מעבדים מהירים', 'תחרות חזקה לאינטל', 'כניסה לשוק AI'],
    bad: ['תחרות מול נבידיה', 'מחיר כבר גבוה']
  },
  {
    id: 12, name: 'אינטל', symbol: 'INTC', score: 48, risk: 'medium', price: 42.10,
    change: -1.2, changeWeek: -2.8, changeMonth: -5.5, changeYear: -18.3,
    exchange: 'NASDAQ', type: 'stock',
    history: [52, 50, 48, 49, 46, 45, 44, 43, 42.5, 42.10],
    reason: 'ענקית השבבים הוותיקה, מנסה לחזור למקום אחרי פיגור טכנולוגי',
    good: ['מותג ותיק', 'השקעה במפעלים חדשים', 'דיבידנדים'],
    bad: ['פיגור בשבבי AI', 'ירידה ברווחים', 'תחרות חזקה']
  },
  {
    id: 13, name: 'פייפאל', symbol: 'PYPL', score: 55, risk: 'medium', price: 72.30,
    change: 0.8, changeWeek: -1.2, changeMonth: 2.4, changeYear: -12.5,
    exchange: 'NASDAQ', type: 'stock',
    history: [80, 78, 75, 73, 71, 70, 72, 71, 72.5, 72.30],
    reason: 'שירות תשלומים מקוון, מתמודדת עם תחרות חזקה מאפל ו-Google Pay',
    good: ['מיליוני משתמשים', 'מותג מוכר', 'רווחיות'],
    bad: ['תחרות גוברת', 'ירידה במשתמשים פעילים']
  },
  {
    id: 14, name: 'אדובי', symbol: 'ADBE', score: 82, risk: 'low', price: 520.80,
    change: 1.1, changeWeek: 2.3, changeMonth: 4.8, changeYear: 25.6,
    exchange: 'NASDAQ', type: 'stock',
    history: [450, 470, 485, 480, 500, 510, 505, 515, 518, 520.80],
    reason: 'יצרנית תוכנות יצירה מובילות (Photoshop, Illustrator), עוברת ל-AI',
    good: ['מונופול בתוכנות יצירה', 'מודל מנוי יציב', 'AI חדש'],
    bad: ['תחרות מ-Canva', 'מחיר גבוה למשתמשים']
  },
  {
    id: 15, name: 'סיסקו', symbol: 'CSCO', score: 70, risk: 'low', price: 54.20,
    change: 0.4, changeWeek: 1.1, changeMonth: 2.8, changeYear: 12.3,
    exchange: 'NASDAQ', type: 'stock',
    history: [48, 49, 50, 51, 52, 53, 52.5, 53.5, 54, 54.20],
    reason: 'ענקית ציוד תקשורת ורשתות, יציבה ומשלמת דיבידנדים',
    good: ['שליטה בשוק רשתות', 'דיבידנדים', 'יציבות'],
    bad: ['צמיחה איטית', 'תחרות מסין']
  },
  {
    id: 16, name: 'קוואלקום', symbol: 'QCOM', score: 75, risk: 'medium', price: 168.50,
    change: 1.5, changeWeek: 2.8, changeMonth: 6.2, changeYear: 22.4,
    exchange: 'NASDAQ', type: 'stock',
    history: [145, 150, 155, 152, 160, 165, 162, 170, 167, 168.50],
    reason: 'יצרנית שבבים לסמארטפונים, מובילה בטכנולוגיית 5G',
    good: ['מוביל ב-5G', 'שותפות עם אפל וסמסונג', 'טכנולוגיה מתקדמת'],
    bad: ['תלות בשוק הטלפונים', 'תחרות מסין']
  },
  {
    id: 17, name: 'סטארבקס', symbol: 'SBUX', score: 65, risk: 'low', price: 88.40,
    change: -0.5, changeWeek: 0.3, changeMonth: -2.1, changeYear: -4.8,
    exchange: 'NASDAQ', type: 'stock',
    history: [95, 93, 90, 92, 89, 87, 88, 89, 88.5, 88.40],
    reason: 'רשת בתי קפה עולמית, מתמודדת עם ירידה במכירות בסין',
    good: ['מותג חזק', 'תוכנית נאמנות', 'פריסה גלובלית'],
    bad: ['ירידה בסין', 'תחרות מקומית', 'עליית מחירים']
  },
  {
    id: 18, name: 'ברודקום', symbol: 'AVGO', score: 83, risk: 'medium', price: 1420.00,
    change: 1.8, changeWeek: 3.5, changeMonth: 9.2, changeYear: 72.8,
    exchange: 'NASDAQ', type: 'stock',
    history: [1200, 1250, 1300, 1280, 1350, 1380, 1400, 1390, 1425, 1420.00],
    reason: 'יצרנית שבבים מובילה בתשתיות ענן ו-AI, רוכשת חברות מובילות',
    good: ['נהנית מגל ה-AI', 'רכישות חכמות', 'רווחיות גבוהה'],
    bad: ['מחיר גבוה מאוד', 'חוב מרכישות']
  },
  {
    id: 19, name: 'קוסטקו', symbol: 'COST', score: 85, risk: 'low', price: 745.00,
    change: 0.7, changeWeek: 1.5, changeMonth: 3.8, changeYear: 28.4,
    exchange: 'NASDAQ', type: 'stock',
    history: [680, 695, 710, 705, 720, 730, 728, 740, 742, 745.00],
    reason: 'רשת חברות אחסנאית, נאמנות לקוחות גבוהה וצמיחה יציבה',
    good: ['נאמנות לקוחות', 'דמי חבר יציבים', 'צמיחה עקבית'],
    bad: ['מחיר מניה גבוה', 'שולי רווח נמוכים']
  },
  {
    id: 20, name: 'פפסי', symbol: 'PEP', score: 72, risk: 'low', price: 172.60,
    change: 0.3, changeWeek: 0.8, changeMonth: 2.1, changeYear: 6.5,
    exchange: 'NASDAQ', type: 'stock',
    history: [162, 164, 166, 165, 168, 170, 169, 171, 172, 172.60],
    reason: 'ענקית משקאות וחטיפים, יציבה ומשלמת דיבידנדים',
    good: ['גיוון מוצרים', 'דיבידנדים', 'מותג חזק'],
    bad: ['צמיחה איטית', 'מגמת בריאות']
  },
  {
    id: 21, name: 'אפלייד מטיריאלס', symbol: 'AMAT', score: 78, risk: 'medium', price: 205.00,
    change: 2.1, changeWeek: 4.3, changeMonth: 8.8, changeYear: 42.5,
    exchange: 'NASDAQ', type: 'stock',
    history: [170, 180, 190, 185, 195, 200, 198, 208, 205, 205.00],
    reason: 'יצרנית ציוד ליצור שבבים, נהנית מהביקוש לשבבי AI',
    good: ['ציוד קריטי לתעשייה', 'ביקוש מ-AI', 'שולי רווח גבוהים'],
    bad: ['תלות במחזור שבבים', 'מתיחות ארה"ב-סין']
  },
  {
    id: 22, name: 'בוקינג', symbol: 'BKNG', score: 80, risk: 'medium', price: 3720.00,
    change: 1.2, changeWeek: 2.5, changeMonth: 5.8, changeYear: 18.2,
    exchange: 'NASDAQ', type: 'stock',
    history: [3200, 3300, 3400, 3380, 3500, 3600, 3650, 3700, 3710, 3720.00],
    reason: 'פלטפורמת הזמנות חופשות המובילה (Booking.com), רווחיות גבוהה',
    good: ['שליטה בשוק הנסיעות', 'רווחיות גבוהה', 'התאוששות מקורונה'],
    bad: ['מחיר מניה יקר מאוד', 'תלות בתיירות']
  },
  {
    id: 23, name: 'מיקרון', symbol: 'MU', score: 72, risk: 'high', price: 112.50,
    change: 2.8, changeWeek: 5.2, changeMonth: 11.5, changeYear: 52.3,
    exchange: 'NASDAQ', type: 'stock',
    history: [85, 92, 100, 95, 105, 108, 110, 115, 111, 112.50],
    reason: 'יצרנית שבבי זיכרון, נהנית מהביקוש לזיכרון HBM עבור AI',
    good: ['ביקוש חזק מ-AI', 'טכנולוגיית HBM', 'שיפור במחירים'],
    bad: ['תנודתיות גבוהה', 'מחזוריות קשה']
  },
  {
    id: 24, name: 'ASML', symbol: 'ASML', score: 82, risk: 'medium', price: 945.00,
    change: 1.3, changeWeek: 2.8, changeMonth: 6.4, changeYear: 28.5,
    exchange: 'NASDAQ', type: 'stock',
    history: [820, 850, 880, 870, 910, 930, 920, 950, 942, 945.00],
    reason: 'היצרנית היחידה בעולם של מכונות ליצור שבבים מתקדמים (EUV)',
    good: ['מונופול ב-EUV', 'ביקוש קריטי', 'רווחיות עצומה'],
    bad: ['מחיר גבוה מאוד', 'מגבלות ייצוא לסין']
  },
  {
    id: 25, name: 'אייר בי אנד בי', symbol: 'ABNB', score: 68, risk: 'medium', price: 148.20,
    change: 0.6, changeWeek: 1.8, changeMonth: 3.5, changeYear: 15.8,
    exchange: 'NASDAQ', type: 'stock',
    history: [130, 135, 140, 138, 145, 148, 146, 150, 148.5, 148.20],
    reason: 'פלטפורמת אירוח הבתים המובילה, משנה את תעשיית הנסיעות',
    good: ['מודל עסקי חכם', 'התרחבות גלובלית', 'קהילת מארחים גדולה'],
    bad: ['רגולציה מקומית', 'תחרות ממלונות']
  },
  {
    id: 26, name: 'טקסס אינסטרומנטס', symbol: 'TXN', score: 75, risk: 'low', price: 180.30,
    change: 0.5, changeWeek: 1.2, changeMonth: 3.1, changeYear: 10.4,
    exchange: 'NASDAQ', type: 'stock',
    history: [165, 168, 172, 170, 175, 178, 176, 180, 179, 180.30],
    reason: 'יצרנית שבבים אנלוגיים, שימוש רחב ברכב ותעשייה',
    good: ['שולי רווח גבוהים', 'דיבידנדים', 'גיוון לקוחות'],
    bad: ['האטה בתעשיית הרכב', 'מחזוריות']
  },
  {
    id: 27, name: 'אלקטרוניק ארטס', symbol: 'EA', score: 68, risk: 'medium', price: 142.50,
    change: 0.9, changeWeek: 2.1, changeMonth: 4.3, changeYear: 12.8,
    exchange: 'NASDAQ', type: 'stock',
    history: [128, 132, 136, 134, 138, 140, 139, 143, 141, 142.50],
    reason: 'יצרנית משחקי וידאו (פיפא, סימס), הכנסות יציבות ממשחקי ספורט',
    good: ['זכיונות ספורט', 'הכנסות חוזרות', 'קהל נאמן'],
    bad: ['תחרות בתעשיית המשחקים', 'תלות בפיפא']
  },
  {
    id: 28, name: 'מונדלז', symbol: 'MDLZ', score: 70, risk: 'low', price: 68.40,
    change: 0.2, changeWeek: 0.5, changeMonth: 1.2, changeYear: 4.5,
    exchange: 'NASDAQ', type: 'stock',
    history: [64, 65, 66, 65.5, 67, 68, 67.5, 68.5, 68.2, 68.40],
    reason: 'יצרנית חטיפים גדולה (אוריאו, מילקה), יציבה ודפנסיבית',
    good: ['מותגים אהובים', 'דיבידנדים', 'פריסה גלובלית'],
    bad: ['עליית מחירי חומרי גלם', 'מגמת בריאות']
  },
  {
    id: 29, name: 'פאלנטיר', symbol: 'PLTR', score: 65, risk: 'high', price: 24.80,
    change: 3.2, changeWeek: 6.5, changeMonth: 15.8, changeYear: 145.3,
    exchange: 'NASDAQ', type: 'stock',
    history: [15, 17, 20, 19, 22, 21, 23, 25, 24.2, 24.80],
    reason: 'חברת ניתוח ביג דאטה ו-AI, חוזים עם ממשלות וארגונים גדולים',
    good: ['צמיחה מהירה', 'חוזים ממשלתיים', 'פלטפורמת AI'],
    bad: ['מחיר מוערך יתר', 'תנודתיות קיצונית', 'הוצאות גבוהות']
  },
  {
    id: 30, name: 'מארוול', symbol: 'MRVL', score: 72, risk: 'medium', price: 65.40,
    change: 1.8, changeWeek: 3.2, changeMonth: 7.8, changeYear: 32.5,
    exchange: 'NASDAQ', type: 'stock',
    history: [55, 58, 62, 60, 64, 66, 63, 66.5, 65.2, 65.40],
    reason: 'יצרנית שבבי תשתית לדאטה סנטרים ותקשורת, נהנית מגל ה-AI',
    good: ['נהנית מ-AI', 'שותפויות חזקות', 'שבבים מתמחים'],
    bad: ['תחרות מברודקום', 'תלות בדאטה סנטרים']
  },
  {
    id: 31, name: 'ויזה', symbol: 'V', score: 85, risk: 'low', price: 280.50,
    change: 0.6, changeWeek: 1.4, changeMonth: 3.2, changeYear: 16.5,
    exchange: 'NYSE', type: 'stock',
    history: [250, 255, 260, 258, 265, 272, 270, 278, 279, 280.50],
    reason: 'רשת תשלומים ענקית, מרוויחה מעמלות על כל קנייה בכרטיס אשראי',
    good: ['רשת עולמית', 'רווחיות גבוהה', 'צמיחה יציבה'],
    bad: ['תחרות מדיגיטל', 'רגולציה']
  },
  {
    id: 32, name: 'מאסטרקארד', symbol: 'MA', score: 84, risk: 'low', price: 475.20,
    change: 0.8, changeWeek: 1.6, changeMonth: 3.8, changeYear: 18.2,
    exchange: 'NYSE', type: 'stock',
    history: [420, 430, 445, 440, 455, 465, 462, 472, 473, 475.20],
    reason: 'מתחרה ראשית של ויזה, רשת תשלומים עולמית ורווחית',
    good: ['מותג חזק', 'שולי רווח גבוהים', 'צמיחה גלובלית'],
    bad: ['תחרות מתשלומים דיגיטליים', 'רגולציה']
  },
  {
    id: 33, name: 'ג\'ונסון אנד ג\'ונסון', symbol: 'JNJ', score: 76, risk: 'low', price: 158.30,
    change: 0.2, changeWeek: 0.5, changeMonth: 1.2, changeYear: 5.8,
    exchange: 'NYSE', type: 'stock',
    history: [148, 150, 152, 151, 154, 156, 155, 157, 158, 158.30],
    reason: 'ענקית פרמצבטיקה וטיפוח, משלמת דיבידנדים 60 שנה ברציפות',
    good: ['יציבות קיצונית', 'דיבידנדים ותיקים', 'גיוון מוצרים'],
    bad: ['תביעות משפטיות', 'צמיחה איטית']
  },
  {
    id: 34, name: 'וולמארט', symbol: 'WMT', score: 78, risk: 'low', price: 84.60,
    change: 0.4, changeWeek: 1.1, changeMonth: 2.5, changeYear: 22.4,
    exchange: 'NYSE', type: 'stock',
    history: [70, 73, 76, 75, 78, 81, 80, 83, 84, 84.60],
    reason: 'רשת הסופרמרקטים הגדולה בעולם, מתרחבת לאיקומרס',
    good: ['שליטה בשוק הקמעונאות', 'איקומרס צומח', 'מחירים זולים'],
    bad: ['תחרות מאמזון', 'שולי רווח נמוכים']
  },
  {
    id: 35, name: 'ג\'יי פי מורגן', symbol: 'JPM', score: 80, risk: 'medium', price: 205.80,
    change: 1.1, changeWeek: 2.3, changeMonth: 4.5, changeYear: 28.6,
    exchange: 'NYSE', type: 'stock',
    history: [175, 180, 188, 185, 195, 200, 198, 204, 205, 205.80],
    reason: 'הבנק הגדול בארה"ב, רווחים חזקים ודיבידנדים',
    good: ['בנק מוביל', 'רווחיות גבוהה', 'דיבידנדים'],
    bad: ['רגישות לריבית', 'סיכון בזמן משבר']
  },
  {
    id: 36, name: 'ברקשייר האת\'וויי', symbol: 'BRK.B', score: 83, risk: 'low', price: 430.20,
    change: 0.3, changeWeek: 1.2, changeMonth: 3.5, changeYear: 18.8,
    exchange: 'NYSE', type: 'stock',
    history: [385, 395, 405, 400, 415, 425, 420, 428, 430, 430.20],
    reason: 'חברת האחזקות של וורן באפט, משקיעה בחברות מובילות',
    good: ['ניהול אגדי', 'תיק מגוון', 'יציבות'],
    bad: ['תלות בבאפט הזקן', 'גודל מגביל צמיחה']
  },
  {
    id: 37, name: 'פייזר', symbol: 'PFE', score: 55, risk: 'medium', price: 28.40,
    change: -0.5, changeWeek: -1.2, changeMonth: -3.2, changeYear: -15.5,
    exchange: 'NYSE', type: 'stock',
    history: [35, 33, 31, 32, 30, 29, 29.5, 28, 28.5, 28.40],
    reason: 'חברת תרופות ותיקה, ירידה חדה אחרי סיום גאות הקורונה',
    good: ['מותג רפואי', 'דיבידנדים גבוהים', 'פיתוח תרופות'],
    bad: ['ירידה במכירות קורונה', 'תחרות', 'ירידת מחיר']
  },
  {
    id: 38, name: 'מקדונלדס', symbol: 'MCD', score: 77, risk: 'low', price: 290.50,
    change: 0.2, changeWeek: 0.8, changeMonth: 2.2, changeYear: 8.5,
    exchange: 'NYSE', type: 'stock',
    history: [268, 272, 278, 275, 282, 287, 285, 289, 290, 290.50],
    reason: 'רשת המזון המהיר הגדולה בעולם, מותג חזק ודיבידנדים יציבים',
    good: ['מותג עולמי', 'דיבידנדים יציבים', 'מודל זיכיונות'],
    bad: ['מגמת בריאות', 'תחרות', 'עלויות עובדים']
  },
  {
    id: 39, name: 'טבע', symbol: 'TEVA', score: 58, risk: 'medium', price: 52.80,
    change: 1.2, changeWeek: 2.5, changeMonth: 5.8, changeYear: 22.4,
    exchange: 'TASE', type: 'stock',
    history: [42, 45, 48, 46, 50, 52, 51, 53, 52, 52.80],
    reason: 'ענקית התרופות הישראלית, מתמקדת בתרופות גנריות והתאוששות מחוב',
    good: ['הפחתת חוב', 'צנרת תרופות חדשה', 'נוכחות גלובלית'],
    bad: ['חוב גבוה היסטורית', 'תחרות בגנריקה']
  },
  {
    id: 40, name: 'בנק לאומי', symbol: 'LUMI', score: 72, risk: 'low', price: 38.40,
    change: 0.5, changeWeek: 1.2, changeMonth: 2.8, changeYear: 15.5,
    exchange: 'TASE', type: 'stock',
    history: [33, 34, 36, 35, 37, 38, 37.5, 38.5, 38.2, 38.40],
    reason: 'אחד משני הבנקים הגדולים בישראל, רווחי ויציב',
    good: ['רווחיות גבוהה', 'דיבידנדים', 'יציבות'],
    bad: ['תחרות', 'רגישות לריבית']
  },
  {
    id: 41, name: 'בנק הפועלים', symbol: 'POLI', score: 70, risk: 'low', price: 40.20,
    change: 0.4, changeWeek: 1.0, changeMonth: 2.5, changeYear: 14.2,
    exchange: 'TASE', type: 'stock',
    history: [35, 36, 38, 37, 39, 40, 39.5, 40.5, 40, 40.20],
    reason: 'הבנק הגדול בישראל, מעמד שוק חזק ורווחים קבועים',
    good: ['בנק מוביל', 'רווחיות', 'דיבידנדים'],
    bad: ['רגולציה', 'תחרות פינטק']
  },
  {
    id: 42, name: 'אלביט מערכות', symbol: 'ESLT', score: 82, risk: 'medium', price: 920.00,
    change: 1.8, changeWeek: 3.5, changeMonth: 8.5, changeYear: 48.5,
    exchange: 'TASE', type: 'stock',
    history: [700, 750, 820, 800, 860, 890, 880, 925, 918, 920.00],
    reason: 'חברת הביטחון הגדולה בישראל, גידול בביקוש עולמי למערכות הגנה',
    good: ['ביקוש גלובלי גבוה', 'טכנולוגיה מובילה', 'צמיחה חזקה'],
    bad: ['תלות בסכסוכים', 'תנודתיות גיאופוליטית']
  },
  {
    id: 43, name: 'נייס', symbol: 'NICE', score: 76, risk: 'medium', price: 720.50,
    change: 1.2, changeWeek: 2.5, changeMonth: 5.2, changeYear: 22.8,
    exchange: 'TASE', type: 'stock',
    history: [620, 650, 680, 670, 695, 710, 705, 722, 718, 720.50],
    reason: 'חברת תוכנה ישראלית לניתוח שיחות ו-AI לשירות לקוחות',
    good: ['מובילה בתחום', 'AI מתקדם', 'לקוחות גלובליים'],
    bad: ['תחרות גוברת', 'תלות בשוק חו"ל']
  },
  {
    id: 44, name: 'כיל', symbol: 'ICL', score: 62, risk: 'medium', price: 22.80,
    change: 0.8, changeWeek: 2.1, changeMonth: 3.5, changeYear: -8.4,
    exchange: 'TASE', type: 'stock',
    history: [25, 24, 23, 23.5, 22, 21.5, 22.5, 22, 22.5, 22.80],
    reason: 'מייצרת דשנים וכימיקלים, מושפעת ממחירי סחורות עולמיים',
    good: ['משאבי אשלג', 'ביקוש חקלאי', 'דיבידנדים'],
    bad: ['תנודתיות מחירי סחורות', 'רגולציה']
  },
  {
    id: 45, name: 'שטראוס גרופ', symbol: 'STRS', score: 68, risk: 'low', price: 95.50,
    change: 0.3, changeWeek: 0.8, changeMonth: 1.8, changeYear: 6.5,
    exchange: 'TASE', type: 'stock',
    history: [88, 90, 92, 91, 93, 95, 94, 96, 95.2, 95.50],
    reason: 'חברת מזון ישראלית, מותגים מוכרים כמו במבה, ביסלי, אלפא',
    good: ['מותגים אהובים', 'נוכחות חזקה', 'יציבות'],
    bad: ['תחרות', 'עליית מחירי חומרי גלם']
  },
  {
    id: 46, name: 'בזק', symbol: 'BEZQ', score: 60, risk: 'medium', price: 5.20,
    change: -0.3, changeWeek: 0.5, changeMonth: -1.2, changeYear: 8.5,
    exchange: 'TASE', type: 'stock',
    history: [4.8, 4.9, 5.1, 5.0, 5.2, 5.3, 5.1, 5.25, 5.15, 5.20],
    reason: 'חברת התקשורת הוותיקה בישראל, מתמודדת עם תחרות חזקה',
    good: ['תשתית מובילה', 'דיבידנדים', 'מותג מוכר'],
    bad: ['תחרות חזקה', 'ירידה בנתח שוק']
  },
  {
    id: 47, name: 'שופרסל', symbol: 'SAE', score: 65, risk: 'low', price: 23.40,
    change: 0.4, changeWeek: 1.2, changeMonth: 2.8, changeYear: 12.5,
    exchange: 'TASE', type: 'stock',
    history: [20, 21, 22, 21.5, 22.5, 23, 22.8, 23.5, 23.2, 23.40],
    reason: 'רשת הסופרמרקטים הגדולה בישראל, מתרחבת לאיקומרס',
    good: ['שליטה בשוק', 'פריסה ארצית', 'איקומרס'],
    bad: ['תחרות חזקה', 'שולי רווח נמוכים']
  },
  {
    id: 48, name: 'מזרחי טפחות', symbol: 'MZTF', score: 74, risk: 'low', price: 178.50,
    change: 0.6, changeWeek: 1.4, changeMonth: 3.2, changeYear: 18.8,
    exchange: 'TASE', type: 'stock',
    history: [150, 155, 162, 160, 168, 173, 171, 177, 178, 178.50],
    reason: 'הבנק השלישי בישראל בגודלו, צמיחה חזקה ברווחים',
    good: ['צמיחה חזקה', 'יעילות תפעולית', 'דיבידנדים'],
    bad: ['תחרות', 'רגישות לריבית']
  },
  { id: 49, name: 'אורקל', symbol: 'ORCL', score: 78, risk: 'low', price: 145.20, change: 0.8, changeWeek: 2.2, changeMonth: 5.5, changeYear: 32.5, exchange: 'NYSE', type: 'stock', history: [120, 125, 132, 130, 138, 142, 140, 146, 144, 145.20], reason: 'ענקית תוכנות מאגרי מידע, מתרחבת לענן ו-AI', good: ['מוביל במאגרי מידע', 'תשתית קריטית', 'דיבידנדים'], bad: ['תחרות מענן', 'צמיחה מתונה'] },
  { id: 50, name: 'IBM', symbol: 'IBM', score: 65, risk: 'low', price: 220.30, change: 0.3, changeWeek: 1.1, changeMonth: 3.2, changeYear: 22.5, exchange: 'NYSE', type: 'stock', history: [195, 200, 208, 205, 212, 218, 215, 222, 220, 220.30], reason: 'ענקית טכנולוגיה ותיקה, מתמקדת בענן היברידי ו-AI', good: ['מותג ותיק', 'דיבידנדים גבוהים', 'AI עסקי'], bad: ['ירידה בעסקים מסורתיים', 'תחרות'] },
  { id: 51, name: 'סיילספורס', symbol: 'CRM', score: 76, risk: 'medium', price: 340.80, change: 1.2, changeWeek: 2.8, changeMonth: 5.2, changeYear: 28.4, exchange: 'NYSE', type: 'stock', history: [280, 295, 310, 305, 320, 330, 328, 342, 340, 340.80], reason: 'ענקית תוכנות CRM, שולטת בשוק ניהול לקוחות עסקי', good: ['שליטה בשוק CRM', 'צמיחה ברווחיות', 'AI חדש'], bad: ['תחרות מגוברת', 'האטה בצמיחה'] },
  { id: 52, name: 'אובר', symbol: 'UBER', score: 72, risk: 'medium', price: 78.50, change: 1.5, changeWeek: 3.2, changeMonth: 6.8, changeYear: 38.5, exchange: 'NYSE', type: 'stock', history: [58, 62, 68, 65, 72, 76, 74, 80, 78, 78.50], reason: 'פלטפורמת הסעות ומשלוחים מובילה, הגיעה לרווחיות לראשונה', good: ['רווחיות לראשונה', 'שליטה בשוק הסעות', 'צמיחה גלובלית'], bad: ['תחרות מקומית', 'רגולציה לנהגים'] },
  { id: 53, name: 'ספוטיפיי', symbol: 'SPOT', score: 74, risk: 'medium', price: 305.40, change: 1.8, changeWeek: 3.5, changeMonth: 7.2, changeYear: 68.5, exchange: 'NYSE', type: 'stock', history: [185, 210, 245, 235, 270, 290, 285, 310, 305, 305.40], reason: 'פלטפורמת הסטרימינג המוזיקלי המובילה, הגיעה סוף סוף לרווחיות', good: ['מוביל בשוק', 'פודקאסטים', 'רווחיות חדשה'], bad: ['תחרות מאפל ויוטיוב', 'תלות בחברות תקליטים'] },
  { id: 54, name: 'זום', symbol: 'ZM', score: 55, risk: 'medium', price: 85.20, change: -1.2, changeWeek: -2.5, changeMonth: -5.8, changeYear: -18.5, exchange: 'NASDAQ', type: 'stock', history: [105, 100, 95, 97, 90, 88, 89, 85, 86, 85.20], reason: 'פלטפורמת וידאו שפרצה בקורונה, מתמודדת עם תחרות מטימס ו-Google Meet', good: ['מותג מוכר', 'מזומנים רבים'], bad: ['תחרות חזקה', 'ירידה בצמיחה', 'היצע גדול'] },
  { id: 55, name: 'בלוק', symbol: 'SQ', score: 62, risk: 'high', price: 88.50, change: 2.1, changeWeek: 4.5, changeMonth: 8.8, changeYear: 35.2, exchange: 'NYSE', type: 'stock', history: [65, 72, 80, 78, 85, 90, 87, 92, 88, 88.50], reason: 'חברת התשלומים של ג\'ק דורסי (Square + Cash App), מושקעת גם בביטקוין', good: ['מוצרי פינטק חדשניים', 'קאש אפ צומח', 'חשיפה לביטקוין'], bad: ['תחרות חזקה', 'תלות בקריפטו', 'רווחיות לא יציבה'] },
  { id: 56, name: 'רוקו', symbol: 'ROKU', score: 58, risk: 'high', price: 72.40, change: -2.5, changeWeek: -4.8, changeMonth: -8.5, changeYear: -22.4, exchange: 'NASDAQ', type: 'stock', history: [95, 88, 82, 84, 78, 75, 76, 73, 74, 72.40], reason: 'פלטפורמת סטרימינג לטלוויזיות, תחרות גוברת מענקים', good: ['מובילה בפלטפורמת טלוויזיה', 'פרסום דיגיטלי'], bad: ['תחרות מאמזון ונטפליקס', 'ירידה בצמיחה'] },
  { id: 57, name: 'קראודסטרייק', symbol: 'CRWD', score: 80, risk: 'medium', price: 320.50, change: 1.5, changeWeek: 3.8, changeMonth: 9.5, changeYear: 85.6, exchange: 'NASDAQ', type: 'stock', history: [195, 225, 260, 250, 290, 310, 305, 325, 318, 320.50], reason: 'מובילה בסייבר אבטחה מבוסס ענן, צמיחה מהירה מאוד', good: ['מובילה בסייבר', 'צמיחה מהירה', 'ביקוש גובר'], bad: ['מחיר גבוה', 'תחרות מתחזקת'] },
  { id: 58, name: 'סנואופלייק', symbol: 'SNOW', score: 70, risk: 'medium', price: 155.80, change: 0.8, changeWeek: 2.2, changeMonth: 4.5, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [135, 140, 148, 145, 152, 158, 155, 160, 156, 155.80], reason: 'מחסן נתונים מבוסס ענן, שימוש גדל על ידי ארגונים', good: ['טכנולוגיה מובילה', 'צמיחה חזקה', 'מעבר לענן'], bad: ['מחיר גבוה', 'הפסדים', 'תחרות'] },
  { id: 59, name: 'MongoDB', symbol: 'MDB', score: 75, risk: 'medium', price: 285.40, change: 2.2, changeWeek: 4.8, changeMonth: 10.2, changeYear: 58.5, exchange: 'NASDAQ', type: 'stock', history: [195, 215, 245, 235, 260, 275, 270, 290, 282, 285.40], reason: 'מאגר נתונים מבוסס מסמכים מוביל, פופולרי בקרב מפתחים', good: ['אהוב על מפתחים', 'צמיחה חזקה', 'Atlas ענן'], bad: ['תחרות מאמזון', 'מחיר יקר'] },
  { id: 60, name: 'קלאודפלייר', symbol: 'NET', score: 72, risk: 'medium', price: 105.60, change: 1.8, changeWeek: 3.5, changeMonth: 8.5, changeYear: 42.5, exchange: 'NYSE', type: 'stock', history: [72, 80, 88, 85, 95, 100, 98, 108, 104, 105.60], reason: 'ספקית שירותי CDN ואבטחה, מאיצה את אתרי האינטרנט', good: ['תשתית קריטית לאינטרנט', 'צמיחה גלובלית', 'מוצרים חדשים'], bad: ['תחרות מאמזון', 'תמחור גבוה'] },
  { id: 61, name: 'אטלסיאן', symbol: 'TEAM', score: 70, risk: 'medium', price: 240.30, change: 0.5, changeWeek: 1.8, changeMonth: 3.5, changeYear: 8.5, exchange: 'NASDAQ', type: 'stock', history: [215, 220, 228, 225, 232, 238, 236, 242, 240, 240.30], reason: 'יצרנית Jira ו-Confluence, מובילה בכלי עבודה למפתחים וצוותים', good: ['שליטה בכלי פיתוח', 'לקוחות ארגוניים', 'ענן צומח'], bad: ['תחרות מ-GitHub ו-Notion', 'האטה'] },
  { id: 62, name: 'דורדאש', symbol: 'DASH', score: 68, risk: 'medium', price: 155.20, change: 1.8, changeWeek: 3.5, changeMonth: 7.8, changeYear: 48.5, exchange: 'NASDAQ', type: 'stock', history: [105, 115, 130, 125, 140, 148, 145, 158, 154, 155.20], reason: 'פלטפורמת משלוחי אוכל מובילה בארה"ב, צמיחה מתמשכת', good: ['שליטה בשוק האמריקאי', 'צמיחה ברווחיות', 'DashPass'], bad: ['תחרות מאובר איטס', 'שולי רווח נמוכים'] },
  { id: 63, name: 'רובלוקס', symbol: 'RBLX', score: 60, risk: 'high', price: 42.50, change: 2.8, changeWeek: 5.5, changeMonth: 12.5, changeYear: 45.8, exchange: 'NYSE', type: 'stock', history: [28, 32, 36, 34, 38, 41, 40, 44, 42, 42.50], reason: 'פלטפורמת משחקים פופולרית במיוחד בקרב ילדים', good: ['קהל ילדים אדיר', 'כלכלה וירטואלית', 'מטאוורס'], bad: ['חששות בטיחות ילדים', 'הפסדים כרוניים'] },
  { id: 64, name: 'אטסי', symbol: 'ETSY', score: 55, risk: 'medium', price: 65.30, change: -1.5, changeWeek: -2.8, changeMonth: -5.5, changeYear: -12.5, exchange: 'NASDAQ', type: 'stock', history: [78, 74, 70, 72, 68, 66, 67, 64, 66, 65.30], reason: 'שוק למוצרים עבודת יד ויצירתיים, האטה אחרי גיאות קורונה', good: ['נישה ייחודית', 'קהילת יוצרים', 'מותג מוכר'], bad: ['תחרות מאמזון', 'ירידה במכירות'] },
  { id: 65, name: 'eBay', symbol: 'EBAY', score: 62, risk: 'low', price: 55.40, change: 0.3, changeWeek: 1.1, changeMonth: 2.8, changeYear: 12.5, exchange: 'NASDAQ', type: 'stock', history: [48, 50, 52, 51, 53, 55, 54, 56, 55, 55.40], reason: 'פלטפורמת מסחר מקוונת ותיקה, התאוששות אחרי שנים של קיפאון', good: ['מותג מוכר', 'רכישות חוזרות', 'דיבידנדים'], bad: ['תחרות מאמזון', 'צמיחה איטית'] },
  { id: 66, name: 'ריביאן', symbol: 'RIVN', score: 45, risk: 'high', price: 12.40, change: -2.8, changeWeek: -5.5, changeMonth: -12.5, changeYear: -35.8, exchange: 'NASDAQ', type: 'stock', history: [22, 20, 18, 19, 15, 14, 14.5, 12.5, 13, 12.40], reason: 'יצרנית רכב חשמלי צעירה, מתמודדת עם הפסדים ותחרות חזקה', good: ['שותפות עם אמזון', 'רכבי שטח חשמליים', 'טכנולוגיה'], bad: ['הפסדים כבדים', 'שריפת מזומנים', 'תחרות'] },
  { id: 67, name: 'פורד', symbol: 'F', score: 52, risk: 'medium', price: 12.10, change: -0.8, changeWeek: -1.8, changeMonth: -3.5, changeYear: -8.5, exchange: 'NYSE', type: 'stock', history: [14, 13.5, 13, 13.2, 12.5, 12.2, 12.4, 12, 12.2, 12.10], reason: 'יצרנית רכב אמריקאית ותיקה, מעבר איטי לרכב חשמלי', good: ['מותג חזק', 'דיבידנדים', 'רכבי פנים מפורסמים'], bad: ['מעבר איטי לחשמלי', 'הפסדים ב-EV', 'תחרות מסינית'] },
  { id: 68, name: 'ג\'נרל מוטורס', symbol: 'GM', score: 58, risk: 'medium', price: 45.30, change: 0.4, changeWeek: 1.2, changeMonth: 2.8, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [38, 40, 42, 41, 43, 44, 43.5, 45.5, 45, 45.30], reason: 'יצרנית רכב אמריקאית גדולה, מעבר הדרגתי לחשמלי', good: ['נוכחות גלובלית', 'רכבי חשמליים חדשים', 'דיבידנדים'], bad: ['תחרות מטסלה', 'עלויות מעבר'] },
  { id: 69, name: 'בואינג', symbol: 'BA', score: 48, risk: 'high', price: 195.80, change: -1.8, changeWeek: -3.5, changeMonth: -8.5, changeYear: -22.5, exchange: 'NYSE', type: 'stock', history: [248, 235, 220, 225, 210, 205, 200, 190, 198, 195.80], reason: 'יצרנית מטוסים מובילה, סובלת מבעיות איכות וטרגדיות', good: ['דואופוליה עם איירבאס', 'צבר הזמנות', 'פוטנציאל התאוששות'], bad: ['בעיות איכות קשות', 'תביעות', 'הפסדים'] },
  { id: 70, name: 'לוקהיד מרטין', symbol: 'LMT', score: 80, risk: 'low', price: 475.20, change: 0.8, changeWeek: 2.2, changeMonth: 4.5, changeYear: 18.5, exchange: 'NYSE', type: 'stock', history: [420, 430, 445, 440, 455, 465, 462, 478, 475, 475.20], reason: 'ענקית ביטחון אמריקאית, מייצרת מטוסי F-35 ומערכות טילים', good: ['חוזים ממשלתיים', 'ביקוש ביטחוני גלובלי', 'דיבידנדים'], bad: ['תלות בתקציבי ממשלה', 'תחרות'] },
  { id: 71, name: 'קטרפילר', symbol: 'CAT', score: 76, risk: 'medium', price: 360.50, change: 1.2, changeWeek: 2.5, changeMonth: 5.8, changeYear: 28.5, exchange: 'NYSE', type: 'stock', history: [300, 315, 330, 325, 340, 350, 348, 362, 358, 360.50], reason: 'יצרנית ציוד כבד לבנייה וכרייה, תלויה בכלכלה גלובלית', good: ['מותג עולמי', 'דיבידנדים', 'ביקוש מתשתיות'], bad: ['מחזוריות כלכלית', 'תחרות מסינית'] },
  { id: 72, name: 'אמריקן אקספרס', symbol: 'AXP', score: 78, risk: 'low', price: 225.80, change: 0.6, changeWeek: 1.5, changeMonth: 3.8, changeYear: 22.5, exchange: 'NYSE', type: 'stock', history: [190, 200, 212, 208, 220, 225, 222, 228, 225, 225.80], reason: 'חברת כרטיסי אשראי יוקרתית, מתמקדת בלקוחות פרימיום', good: ['לקוחות עשירים', 'נאמנות גבוהה', 'דיבידנדים'], bad: ['תחרות מוויזה ומאסטרקארד', 'רגישות לכלכלה'] },
  { id: 73, name: 'גולדמן זאקס', symbol: 'GS', score: 75, risk: 'medium', price: 450.30, change: 1.2, changeWeek: 2.8, changeMonth: 5.5, changeYear: 28.5, exchange: 'NYSE', type: 'stock', history: [380, 395, 410, 405, 425, 440, 435, 455, 448, 450.30], reason: 'בנק השקעות יוקרתי, מוביל בהנפקות ורכישות', good: ['מותג יוקרתי', 'רווחיות גבוהה', 'דיבידנדים'], bad: ['תנודתיות', 'תלות בשווקים'] },
  { id: 74, name: 'מורגן סטנלי', symbol: 'MS', score: 74, risk: 'medium', price: 95.80, change: 0.8, changeWeek: 1.8, changeMonth: 4.2, changeYear: 18.5, exchange: 'NYSE', type: 'stock', history: [82, 85, 90, 88, 92, 94, 93, 97, 95, 95.80], reason: 'בנק השקעות גדול, מוביל בניהול הון', good: ['ניהול הון גדל', 'דיבידנדים', 'גיוון'], bad: ['תחרות', 'תלות בשוק']  },
  { id: 75, name: 'וולס פארגו', symbol: 'WFC', score: 68, risk: 'medium', price: 58.40, change: 0.4, changeWeek: 1.2, changeMonth: 2.8, changeYear: 15.5, exchange: 'NYSE', type: 'stock', history: [50, 52, 54, 53, 55, 57, 56, 59, 58, 58.40], reason: 'בנק קמעונאי ותיק, מתאושש משערוריות עבר', good: ['פריסה רחבה', 'התאוששות', 'דיבידנדים'], bad: ['שערוריות עבר', 'מגבלות רגולציה'] },
  { id: 76, name: 'בנק אוף אמריקה', symbol: 'BAC', score: 72, risk: 'medium', price: 38.20, change: 0.5, changeWeek: 1.5, changeMonth: 3.2, changeYear: 18.5, exchange: 'NYSE', type: 'stock', history: [32, 33, 35, 34, 36, 37, 36.5, 38.5, 38, 38.20], reason: 'הבנק השני בארה"ב, רווחיות חזקה ודיבידנדים', good: ['בנק גדול ויציב', 'דיבידנדים', 'פריסה רחבה'], bad: ['רגישות לריבית', 'תחרות'] },
  { id: 77, name: 'בלאקרוק', symbol: 'BLK', score: 82, risk: 'low', price: 850.50, change: 0.6, changeWeek: 1.8, changeMonth: 4.2, changeYear: 22.5, exchange: 'NYSE', type: 'stock', history: [720, 750, 790, 780, 810, 830, 825, 855, 848, 850.50], reason: 'מנהלת הנכסים הגדולה בעולם, 10+ טריליון דולר בניהול', good: ['מנהלת נכסים ענקית', 'iShares ETFs', 'דיבידנדים'], bad: ['תלות בשווקים', 'ביקורת על ESG'] },
  { id: 78, name: 'AT&T', symbol: 'T', score: 60, risk: 'low', price: 18.40, change: 0.3, changeWeek: 0.8, changeMonth: 1.8, changeYear: 8.5, exchange: 'NYSE', type: 'stock', history: [16, 16.5, 17, 17.2, 17.8, 18, 17.9, 18.5, 18.3, 18.40], reason: 'ענקית תקשורת אמריקאית, דיבידנדים גבוהים אחרי פיצול מדיה', good: ['דיבידנדים גבוהים', 'תשתית 5G', 'יציבות'], bad: ['חוב גבוה', 'צמיחה איטית', 'תחרות'] },
  { id: 79, name: 'ורייזון', symbol: 'VZ', score: 65, risk: 'low', price: 42.30, change: 0.2, changeWeek: 0.5, changeMonth: 1.5, changeYear: 8.5, exchange: 'NYSE', type: 'stock', history: [38, 39, 40, 40.5, 41, 42, 41.5, 42.8, 42.2, 42.30], reason: 'ענקית תקשורת, דיבידנדים גבוהים ויציבים', good: ['דיבידנדים גבוהים', '5G מוביל', 'רשת איכותית'], bad: ['חוב', 'תחרות מ-T-Mobile'] },
  { id: 80, name: 'T-Mobile', symbol: 'TMUS', score: 78, risk: 'low', price: 195.80, change: 0.8, changeWeek: 2.1, changeMonth: 4.5, changeYear: 22.5, exchange: 'NASDAQ', type: 'stock', history: [165, 172, 180, 178, 185, 192, 190, 198, 194, 195.80], reason: 'חברת סלולר צומחת, ניצחה את AT&T ווריזון ברשת 5G', good: ['5G מוביל', 'צמיחה בלקוחות', 'חדשנות'], bad: ['תחרות מתגברת', 'חוב']  },
  { id: 81, name: 'קומקאסט', symbol: 'CMCSA', score: 65, risk: 'low', price: 42.60, change: 0.3, changeWeek: 0.8, changeMonth: 1.8, changeYear: 8.5, exchange: 'NASDAQ', type: 'stock', history: [38, 39, 40, 40.5, 41, 42, 41.5, 43, 42.5, 42.60], reason: 'ענקית תקשורת ובידור (NBCUniversal, Peacock)', good: ['נוכחות רחבה', 'דיבידנדים', 'גיוון'], bad: ['ירידה בטלוויזיה כבלים', 'תחרות סטרימינג'] },
  { id: 82, name: 'שירסיוו נאו', symbol: 'NOW', score: 83, risk: 'medium', price: 780.40, change: 1.5, changeWeek: 3.2, changeMonth: 7.5, changeYear: 42.5, exchange: 'NYSE', type: 'stock', history: [580, 620, 670, 650, 710, 750, 740, 790, 778, 780.40], reason: 'פלטפורמה לאוטומציית עבודה עסקית, צמיחה מהירה ו-AI', good: ['צמיחה חזקה', 'לקוחות ארגוניים', 'AI משולב'], bad: ['מחיר גבוה', 'תחרות'] },
  { id: 83, name: 'אינטואיט', symbol: 'INTU', score: 80, risk: 'low', price: 680.20, change: 0.8, changeWeek: 2.1, changeMonth: 4.5, changeYear: 18.5, exchange: 'NASDAQ', type: 'stock', history: [580, 600, 625, 615, 640, 660, 655, 685, 680, 680.20], reason: 'יצרנית QuickBooks ו-TurboTax, שולטת בשוק תוכנות עסקים קטנים', good: ['שליטה בשוק', 'מנוי יציב', 'AI חדש'], bad: ['מחיר גבוה', 'תחרות מחדשות'] },
  { id: 84, name: 'אקסון מוביל', symbol: 'XOM', score: 72, risk: 'medium', price: 115.80, change: 0.8, changeWeek: 2.2, changeMonth: 5.2, changeYear: 18.5, exchange: 'NYSE', type: 'stock', history: [102, 105, 110, 108, 112, 115, 113, 118, 116, 115.80], reason: 'ענקית נפט וגז אמריקאית, דיבידנדים גבוהים וחוזקה תפעולית', good: ['דיבידנדים גבוהים', 'יעילות תפעולית', 'תזרים מזומנים'], bad: ['מעבר לאנרגיה ירוקה', 'תלות במחירי נפט'] },
  { id: 85, name: 'שברון', symbol: 'CVX', score: 70, risk: 'medium', price: 155.20, change: 0.5, changeWeek: 1.5, changeMonth: 3.5, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [140, 143, 148, 145, 150, 153, 152, 157, 155, 155.20], reason: 'ענקית אנרגיה אמריקאית, משלמת דיבידנדים 35+ שנה ברציפות', good: ['דיבידנדים עקביים', 'משמעת פיננסית'], bad: ['תלות בנפט', 'לחץ סביבתי'] },
  { id: 86, name: 'יונייטדהלת\'', symbol: 'UNH', score: 80, risk: 'low', price: 520.40, change: 0.6, changeWeek: 1.5, changeMonth: 3.5, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [465, 475, 490, 485, 500, 512, 508, 525, 520, 520.40], reason: 'חברת ביטוח הבריאות הגדולה בארה"ב, צמיחה יציבה', good: ['מוביל בביטוח בריאות', 'צמיחה יציבה', 'דיבידנדים'], bad: ['רגולציה', 'ביקורת ציבורית'] },
  { id: 87, name: 'אלי לילי', symbol: 'LLY', score: 85, risk: 'medium', price: 765.30, change: 1.8, changeWeek: 4.2, changeMonth: 9.5, changeYear: 62.5, exchange: 'NYSE', type: 'stock', history: [525, 580, 640, 620, 690, 730, 720, 770, 760, 765.30], reason: 'ענקית תרופות, מובילה עם תרופת ההרזיה Mounjaro/Zepbound', good: ['תרופות הרזיה מוצלחות', 'צמיחה עצומה', 'חדשנות'], bad: ['מחיר גבוה מאוד', 'תחרות מנובו נורדיסק'] },
  { id: 88, name: 'מרק', symbol: 'MRK', score: 76, risk: 'low', price: 122.50, change: 0.5, changeWeek: 1.2, changeMonth: 3.2, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [108, 112, 116, 114, 118, 120, 119, 124, 122, 122.50], reason: 'חברת תרופות ותיקה, מובילה עם תרופת הסרטן Keytruda', good: ['Keytruda מצליח', 'דיבידנדים', 'מחקר חזק'], bad: ['פג תוקף פטנטים בעתיד', 'תחרות'] },
  { id: 89, name: 'אבבי', symbol: 'ABBV', score: 74, risk: 'low', price: 172.30, change: 0.4, changeWeek: 1.1, changeMonth: 2.8, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [155, 160, 165, 163, 168, 170, 169, 174, 172, 172.30], reason: 'חברת תרופות, מעבר מ-Humira לתרופות חדשות', good: ['דיבידנדים גבוהים', 'צנרת תרופות', 'רווחיות'], bad: ['ירידת Humira', 'תחרות גנרית'] },
  { id: 90, name: 'הום דיפו', symbol: 'HD', score: 78, risk: 'low', price: 380.50, change: 0.6, changeWeek: 1.8, changeMonth: 4.2, changeYear: 18.5, exchange: 'NYSE', type: 'stock', history: [325, 340, 355, 350, 365, 375, 372, 385, 380, 380.50], reason: 'ענקית חנויות כלי בית אמריקאית, מובילה בשוק השיפוצים', good: ['מותג מוביל', 'דיבידנדים', 'פריסה רחבה'], bad: ['תלות בשוק הדיור', 'תחרות'] },
  { id: 91, name: 'טרגט', symbol: 'TGT', score: 68, risk: 'medium', price: 165.40, change: 0.4, changeWeek: 1.2, changeMonth: 2.8, changeYear: 8.5, exchange: 'NYSE', type: 'stock', history: [148, 152, 158, 155, 160, 163, 162, 167, 165, 165.40], reason: 'רשת קמעונאות פופולרית, מתחרה בוולמארט ואמזון', good: ['מותג אהוב', 'מותג פרטי', 'דיבידנדים'], bad: ['תחרות חזקה', 'ירידה ברווחים'] },
  { id: 92, name: 'דטהדוג', symbol: 'DDOG', score: 75, risk: 'medium', price: 125.30, change: 1.5, changeWeek: 3.2, changeMonth: 7.5, changeYear: 38.5, exchange: 'NASDAQ', type: 'stock', history: [92, 100, 110, 105, 115, 122, 120, 128, 124, 125.30], reason: 'פלטפורמת ניטור וניתוח תשתיות ענן, צמיחה מהירה', good: ['צמיחה חזקה', 'לקוחות ארגוניים', 'הרחבת פלטפורמה'], bad: ['מחיר יקר', 'תחרות'] },
  { id: 93, name: 'וורקדיי', symbol: 'WDAY', score: 72, risk: 'medium', price: 255.80, change: 0.8, changeWeek: 2.1, changeMonth: 4.5, changeYear: 18.5, exchange: 'NASDAQ', type: 'stock', history: [220, 225, 235, 230, 240, 250, 248, 258, 254, 255.80], reason: 'תוכנה לניהול משאבי אנוש וכספים בענן לארגונים', good: ['לקוחות ארגוניים גדולים', 'מנוי יציב'], bad: ['תחרות מסיילספורס ומאוראקל', 'האטה'] },
  { id: 94, name: 'אוקטה', symbol: 'OKTA', score: 62, risk: 'medium', price: 95.20, change: 1.2, changeWeek: 2.5, changeMonth: 5.5, changeYear: 28.5, exchange: 'NASDAQ', type: 'stock', history: [72, 78, 85, 82, 90, 94, 92, 97, 94, 95.20], reason: 'פלטפורמת זיהוי וניהול גישה לארגונים', good: ['תשתית קריטית', 'צמיחה ברווחיות'], bad: ['פריצת אבטחה 2023', 'תחרות'] },
  { id: 95, name: 'נובו נורדיסק', symbol: 'NVO', score: 82, risk: 'medium', price: 125.60, change: 1.5, changeWeek: 3.5, changeMonth: 8.5, changeYear: 48.5, exchange: 'NYSE', type: 'stock', history: [85, 95, 108, 105, 115, 120, 118, 128, 124, 125.60], reason: 'חברת תרופות דנית, מובילה בתרופות סוכרת ותרופת ההרזיה אוזמפיק', good: ['אוזמפיק פופולרי', 'צמיחה עצומה', 'מחקר'], bad: ['תחרות מאלי לילי', 'תלות בתרופה אחת'] },
  { id: 96, name: 'SAP', symbol: 'SAP', score: 75, risk: 'low', price: 195.40, change: 0.5, changeWeek: 1.5, changeMonth: 3.5, changeYear: 22.5, exchange: 'NYSE', type: 'stock', history: [165, 172, 180, 178, 185, 190, 188, 197, 194, 195.40], reason: 'ענקית תוכנה ארגונית גרמנית, מעבר לפלטפורמת ענן', good: ['שליטה ב-ERP', 'לקוחות גלובליים', 'מעבר לענן'], bad: ['תחרות מסיילספורס', 'מעבר איטי'] },
  { id: 97, name: 'טויוטה', symbol: 'TM', score: 74, risk: 'low', price: 230.50, change: 0.4, changeWeek: 1.2, changeMonth: 3.2, changeYear: 12.5, exchange: 'NYSE', type: 'stock', history: [205, 210, 218, 215, 222, 228, 225, 232, 230, 230.50], reason: 'יצרנית הרכב הגדולה בעולם, מובילה ברכבים היברידיים', good: ['מותג אמין', 'רכבים היברידיים', 'דיבידנדים'], bad: ['מעבר איטי לחשמלי', 'תחרות מסינית'] },
  { id: 98, name: 'ג\'נרל אלקטריק', symbol: 'GE', score: 72, risk: 'medium', price: 170.30, change: 1.2, changeWeek: 2.8, changeMonth: 6.5, changeYear: 48.5, exchange: 'NYSE', type: 'stock', history: [115, 125, 140, 135, 150, 162, 158, 172, 168, 170.30], reason: 'חברת תעשייה היסטורית אחרי פיצול, מתמקדת בתעופה', good: ['מנועי מטוסים מובילים', 'התאוששות', 'פיצול מוצלח'], bad: ['חוב', 'מחזוריות תעופה'] },
];

// ============================================================
// DATA - CRYPTO
// ============================================================

const cryptoData = [
  {
    id: 101, name: 'ביטקוין', symbol: 'BTC', score: 70, risk: 'high', price: 43250,
    change: 2.5, changeWeek: 4.2, changeMonth: -5.8, changeYear: 58.4,
    exchange: 'Crypto', type: 'crypto',
    history: [38000, 40000, 42000, 41000, 44000, 43000, 45000, 42500, 43500, 43250],
    reason: 'המטבע הדיגיטלי הראשון והכי מוכר בעולם, אבל מאוד תנודתי',
    good: ['הכי מוכר', 'מוגבל בכמות', 'מקובל בהרבה מקומות'],
    bad: ['תנודתיות קיצונית', 'לא מגובה בכלום', 'רגולציה לא ברורה']
  },
  {
    id: 102, name: 'את\'ריום', symbol: 'ETH', score: 65, risk: 'high', price: 2280,
    change: 1.8, changeWeek: 3.1, changeMonth: -2.5, changeYear: 45.2,
    exchange: 'Crypto', type: 'crypto',
    history: [2000, 2100, 2200, 2150, 2300, 2250, 2350, 2200, 2300, 2280],
    reason: 'פלטפורמה לבניית אפליקציות, אבל התחרות גוברת',
    good: ['טכנולוגיה חכמה', 'הרבה שימושים', 'קהילה חזקה'],
    bad: ['עמלות גבוהות', 'תחרות', 'מסובך להבנה']
  },
  {
    id: 103, name: 'סולנה', symbol: 'SOL', score: 50, risk: 'high', price: 98.50,
    change: -3.2, changeWeek: -5.4, changeMonth: -12.3, changeYear: 82.5,
    exchange: 'Crypto', type: 'crypto',
    history: [80, 90, 100, 95, 110, 105, 100, 95, 100, 98.50],
    reason: 'מהיר וזול אבל היו בעיות טכניות בעבר',
    good: ['מהיר מאוד', 'עמלות זולות'],
    bad: ['בעיות יציבות', 'פחות מבוזר', 'סיכון גבוה']
  },
  {
    id: 104, name: 'קרדאנו', symbol: 'ADA', score: 45, risk: 'high', price: 0.58,
    change: -1.5, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.4,
    exchange: 'Crypto', type: 'crypto',
    history: [0.50, 0.55, 0.60, 0.58, 0.62, 0.55, 0.58, 0.56, 0.59, 0.58],
    reason: 'פיתוח איטי והרבה הבטחות שעוד לא התממשו',
    good: ['גישה מדעית', 'צוות חזק'],
    bad: ['פיתוח איטי', 'פחות שימושים', 'תחרות חזקה']
  },
  {
    id: 105, name: 'ביננס קוין', symbol: 'BNB', score: 62, risk: 'high', price: 580.00,
    change: 1.5, changeWeek: 3.2, changeMonth: -2.5, changeYear: 48.5,
    exchange: 'Crypto', type: 'crypto',
    history: [500, 520, 550, 540, 570, 585, 575, 595, 582, 580.00],
    reason: 'המטבע של בורסת ביננס, השימוש בו נותן הנחה בעמלות',
    good: ['בורסה גדולה מאחורי', 'שימושים פרקטיים'],
    bad: ['תלות בביננס', 'בעיות רגולציה']
  },
  {
    id: 106, name: 'ריפל', symbol: 'XRP', score: 55, risk: 'high', price: 0.52,
    change: 0.8, changeWeek: 2.1, changeMonth: -4.5, changeYear: 35.2,
    exchange: 'Crypto', type: 'crypto',
    history: [0.45, 0.48, 0.52, 0.50, 0.55, 0.53, 0.54, 0.51, 0.53, 0.52],
    reason: 'מטבע לתשלומים בין בנקים, ניצחה תביעה נגד רגולטור בארה"ב',
    good: ['שותפויות עם בנקים', 'מהירות עסקאות'],
    bad: ['ריכוזי', 'תלות בחברת ריפל']
  },
  {
    id: 107, name: 'דוג\'קוין', symbol: 'DOGE', score: 30, risk: 'high', price: 0.085,
    change: -2.1, changeWeek: -5.2, changeMonth: -12.5, changeYear: 18.5,
    exchange: 'Crypto', type: 'crypto',
    history: [0.07, 0.08, 0.095, 0.09, 0.10, 0.092, 0.087, 0.082, 0.088, 0.085],
    reason: 'התחיל כבדיחה על בסיס ממים, עלה בזכות ציוצים של אילון מאסק',
    good: ['קהילה אדירה', 'מהיר וזול'],
    bad: ['אין תועלת אמיתית', 'תנודתי מאוד', 'אינפלציה בכמות']
  },
  {
    id: 108, name: 'פוליגון', symbol: 'MATIC', score: 55, risk: 'high', price: 0.85,
    change: 1.2, changeWeek: 3.5, changeMonth: -3.2, changeYear: 28.4,
    exchange: 'Crypto', type: 'crypto',
    history: [0.70, 0.75, 0.82, 0.80, 0.88, 0.85, 0.87, 0.83, 0.86, 0.85],
    reason: 'פתרון קנה מידה לאת\'ריום, עמלות נמוכות ועסקאות מהירות',
    good: ['שימושי לאת\'ריום', 'אימוץ גבוה', 'שותפויות גדולות'],
    bad: ['תחרות חזקה', 'תלות באת\'ריום']
  },
  {
    id: 109, name: 'אוואלנץ\'', symbol: 'AVAX', score: 58, risk: 'high', price: 35.20,
    change: 2.5, changeWeek: 4.8, changeMonth: -5.5, changeYear: 42.3,
    exchange: 'Crypto', type: 'crypto',
    history: [28, 30, 33, 32, 36, 34, 37, 35, 36, 35.20],
    reason: 'בלוקצ\'יין מהיר עם תת-רשתות מותאמות אישית',
    good: ['טכנולוגיה מתקדמת', 'מהיר מאוד', 'גמיש'],
    bad: ['פחות מוכר', 'תחרות קשה']
  },
  {
    id: 110, name: 'צ\'יינלינק', symbol: 'LINK', score: 62, risk: 'high', price: 14.80,
    change: 1.8, changeWeek: 3.5, changeMonth: -1.2, changeYear: 32.5,
    exchange: 'Crypto', type: 'crypto',
    history: [12, 13, 14, 13.5, 15, 14.2, 15.2, 14.5, 15, 14.80],
    reason: 'מחבר בין בלוקצ\'יינים לנתונים בעולם האמיתי (אורקל)',
    good: ['שימוש בתעשייה', 'תפקיד קריטי', 'טכנולוגיה ייחודית'],
    bad: ['תחרות מצטרפת', 'מחיר תלוי בשוק כללי']
  },
  {
    id: 111, name: 'פולקאדוט', symbol: 'DOT', score: 50, risk: 'high', price: 7.20,
    change: -1.2, changeWeek: -2.5, changeMonth: -8.2, changeYear: -5.8,
    exchange: 'Crypto', type: 'crypto',
    history: [8.5, 8.2, 7.8, 8.0, 7.5, 7.3, 7.4, 7.1, 7.3, 7.20],
    reason: 'מחברת בלוקצ\'יינים שונים, אבל פיתוח איטי יחסית',
    good: ['מייסד של את\'ריום מאחורי', 'טכנולוגיה מתקדמת'],
    bad: ['פיתוח איטי', 'אימוץ נמוך', 'תחרות']
  },
  {
    id: 112, name: 'לייטקוין', symbol: 'LTC', score: 52, risk: 'high', price: 73.40,
    change: 0.5, changeWeek: 1.8, changeMonth: -4.2, changeYear: 12.5,
    exchange: 'Crypto', type: 'crypto',
    history: [65, 68, 72, 70, 75, 74, 76, 72, 74, 73.40],
    reason: 'מטבע ותיק המכונה "הכסף הדיגיטלי", מהיר יותר מביטקוין',
    good: ['ותיק ומוכר', 'מהיר וזול', 'פעיל מ-2011'],
    bad: ['חוסר חדשנות', 'פחות פופולרי בשנים האחרונות']
  },
  {
    id: 113, name: 'טרון', symbol: 'TRX', score: 40, risk: 'high', price: 0.11,
    change: 0.3, changeWeek: 1.2, changeMonth: 4.5, changeYear: 25.8,
    exchange: 'Crypto', type: 'crypto',
    history: [0.09, 0.10, 0.11, 0.105, 0.115, 0.108, 0.112, 0.108, 0.112, 0.11],
    reason: 'פלטפורמת תוכן עם שימוש רב ב-USDT, אבל ריכוזית',
    good: ['שימוש רב', 'עמלות נמוכות'],
    bad: ['ריכוזית מאוד', 'חששות מהמנכ"ל', 'רגולציה']
  },
  {
    id: 114, name: 'שיבה אינו', symbol: 'SHIB', score: 25, risk: 'high', price: 0.0000095,
    change: -3.5, changeWeek: -7.2, changeMonth: -18.5, changeYear: 12.4,
    exchange: 'Crypto', type: 'crypto',
    history: [0.0000085, 0.0000092, 0.00001, 0.0000098, 0.0000105, 0.0000095, 0.0000098, 0.0000092, 0.0000097, 0.0000095],
    reason: 'מטבע ממים שנוצר בתגובה לדוג\'קוין, אימוץ על ידי קהילה נאמנה',
    good: ['קהילה גדולה', 'זול לרכישה'],
    bad: ['אין תועלת אמיתית', 'אינפלציה גבוהה', 'ספקולטיבי מאוד']
  },
  {
    id: 115, name: 'יוניסוואפ', symbol: 'UNI', score: 55, risk: 'high', price: 6.50,
    change: 1.1, changeWeek: 2.8, changeMonth: -5.2, changeYear: 18.5,
    exchange: 'Crypto', type: 'crypto',
    history: [5.5, 5.8, 6.2, 6.0, 6.5, 6.3, 6.7, 6.4, 6.6, 6.50],
    reason: 'בורסת קריפטו מבוזרת (DEX) המובילה בעולם',
    good: ['מובילה בתחום DEX', 'נפח מסחר גבוה', 'שימוש יומיומי'],
    bad: ['תחרות מצטרפת', 'רגולציה עלולה לפגוע']
  },
  {
    id: 116, name: 'קוסמוס', symbol: 'ATOM', score: 48, risk: 'high', price: 9.20,
    change: -0.8, changeWeek: -2.2, changeMonth: -6.5, changeYear: -12.8,
    exchange: 'Crypto', type: 'crypto',
    history: [10.5, 10.2, 9.8, 10.0, 9.5, 9.3, 9.4, 9.1, 9.3, 9.20],
    reason: 'רשת של בלוקצ\'יינים המחוברים ביניהם ("אינטרנט של בלוקצ\'יינים")',
    good: ['חזון מעניין', 'קהילת פיתוח חזקה'],
    bad: ['קשה להבנה', 'אימוץ נמוך', 'תחרות']
  },
  {
    id: 117, name: 'סטלאר', symbol: 'XLM', score: 45, risk: 'high', price: 0.11,
    change: 0.2, changeWeek: 1.1, changeMonth: -3.5, changeYear: 8.5,
    exchange: 'Crypto', type: 'crypto',
    history: [0.10, 0.105, 0.11, 0.108, 0.115, 0.112, 0.113, 0.108, 0.111, 0.11],
    reason: 'דומה לריפל - תשלומים בין בנקים, מטרה להגיע לאנשים ללא חשבון',
    good: ['שותפויות עם בנקים', 'מטרה חברתית'],
    bad: ['פחות מוכר', 'תחרות מול XRP']
  },
  {
    id: 118, name: 'ניאר', symbol: 'NEAR', score: 55, risk: 'high', price: 3.40,
    change: 1.5, changeWeek: 3.8, changeMonth: -2.8, changeYear: 45.2,
    exchange: 'Crypto', type: 'crypto',
    history: [2.5, 2.8, 3.2, 3.0, 3.5, 3.3, 3.6, 3.3, 3.5, 3.40],
    reason: 'בלוקצ\'יין מהיר וידידותי לפיתוח, מיקוד ב-AI ושימושי משתמש',
    good: ['חוויית פיתוח טובה', 'מיקוד ב-AI', 'מהיר'],
    bad: ['צעיר יחסית', 'אימוץ מוגבל']
  },
  {
    id: 119, name: 'אלגורנד', symbol: 'ALGO', score: 42, risk: 'high', price: 0.18,
    change: -1.8, changeWeek: -3.5, changeMonth: -9.2, changeYear: -28.5,
    exchange: 'Crypto', type: 'crypto',
    history: [0.25, 0.23, 0.20, 0.22, 0.19, 0.18, 0.19, 0.17, 0.185, 0.18],
    reason: 'פרויקט אקדמי עם מייסד זוכה פרס טיורינג, אך אימוץ נמוך',
    good: ['טכנולוגיה מתקדמת', 'צוות אקדמי חזק', 'ידידותי לסביבה'],
    bad: ['אימוץ נמוך', 'ירידת מחיר מתמשכת']
  },
  {
    id: 120, name: 'אינטרנט קומפיוטר', symbol: 'ICP', score: 45, risk: 'high', price: 11.20,
    change: 1.2, changeWeek: 2.5, changeMonth: -5.8, changeYear: 22.5,
    exchange: 'Crypto', type: 'crypto',
    history: [9, 10, 11, 10.5, 12, 11.2, 11.8, 10.8, 11.3, 11.20],
    reason: 'חזון לבנות אינטרנט מבוזר על בלוקצ\'יין, אך ירד הרבה מהשיא',
    good: ['טכנולוגיה שאפתנית', 'פרויקט ייחודי'],
    bad: ['ירידה חדה מהשיא', 'מסובך להבנה', 'אימוץ נמוך']
  },
  {
    id: 121, name: 'מונרו', symbol: 'XMR', score: 58, risk: 'high', price: 158.00,
    change: 0.5, changeWeek: 1.8, changeMonth: -2.5, changeYear: 22.5,
    exchange: 'Crypto', type: 'crypto',
    history: [140, 145, 152, 150, 160, 155, 162, 156, 159, 158.00],
    reason: 'מטבע פרטיות שמסתיר לחלוטין את זהות השולחים והמקבלים',
    good: ['פרטיות מוחלטת', 'אמין טכנית', 'ותיק'],
    bad: ['משמש לפעילות לא חוקית', 'רגולציה מאיימת', 'הוצאה מבורסות']
  },
  {
    id: 122, name: 'ביטקוין קאש', symbol: 'BCH', score: 40, risk: 'high', price: 385.00,
    change: -1.5, changeWeek: -3.2, changeMonth: -8.5, changeYear: -15.8,
    exchange: 'Crypto', type: 'crypto',
    history: [450, 435, 420, 425, 400, 395, 405, 388, 390, 385.00],
    reason: 'פיצול מביטקוין ב-2017, אימץ בלוקים גדולים לעסקאות זולות',
    good: ['עסקאות זולות', 'עברה ביטקוין', 'אימוץ כלשהו'],
    bad: ['פחות מוכר מביטקוין', 'ירידה מתמשכת', 'פיצול נוסף']
  },
  {
    id: 123, name: 'את\'ריום קלאסיק', symbol: 'ETC', score: 38, risk: 'high', price: 24.50,
    change: -2.1, changeWeek: -4.5, changeMonth: -12.2, changeYear: -22.5,
    exchange: 'Crypto', type: 'crypto',
    history: [32, 30, 28, 29, 27, 26, 26.5, 25, 25.2, 24.50],
    reason: 'הגרסה המקורית של את\'ריום שלא קיבלה את העדכון אחרי פריצה ב-2016',
    good: ['עקרונות מקוריים', 'אלגוריתם יציב'],
    bad: ['תחרות מול ETH', 'אימוץ נמוך', 'התקפות רשת בעבר']
  },
  {
    id: 124, name: 'וי צ\'יין', symbol: 'VET', score: 42, risk: 'high', price: 0.032,
    change: 1.2, changeWeek: 3.5, changeMonth: -5.8, changeYear: 15.5,
    exchange: 'Crypto', type: 'crypto',
    history: [0.025, 0.028, 0.033, 0.030, 0.035, 0.032, 0.034, 0.030, 0.033, 0.032],
    reason: 'פלטפורמה לניהול שרשרת אספקה באמצעות בלוקצ\'יין',
    good: ['שימושים עסקיים', 'שותפויות אמיתיות'],
    bad: ['אימוץ איטי', 'ריכוזי יחסית']
  },
  {
    id: 125, name: 'אייב', symbol: 'AAVE', score: 55, risk: 'high', price: 92.30,
    change: 1.8, changeWeek: 4.2, changeMonth: -3.5, changeYear: 38.5,
    exchange: 'Crypto', type: 'crypto',
    history: [75, 80, 88, 85, 95, 90, 96, 88, 93, 92.30],
    reason: 'פלטפורמת הלוואות מבוזרת מובילה בעולם DeFi',
    good: ['מובילה ב-DeFi', 'הלוואות גדולות', 'חדשנות מתמדת'],
    bad: ['סיכוני חוזים חכמים', 'רגולציה']
  },
  {
    id: 126, name: 'טזוס', symbol: 'XTZ', score: 40, risk: 'high', price: 1.05,
    change: -0.8, changeWeek: -2.5, changeMonth: -7.5, changeYear: -18.5,
    exchange: 'Crypto', type: 'crypto',
    history: [1.35, 1.28, 1.20, 1.22, 1.10, 1.05, 1.08, 1.02, 1.07, 1.05],
    reason: 'בלוקצ\'יין עם מנגנון עדכונים מובנה, פיתוח איטי',
    good: ['מנגנון ממשל חכם', 'יציב טכנית'],
    bad: ['ירידה מתמשכת', 'אימוץ נמוך', 'תחרות']
  },
  {
    id: 127, name: 'פילקוין', symbol: 'FIL', score: 38, risk: 'high', price: 5.80,
    change: -1.2, changeWeek: -3.5, changeMonth: -10.5, changeYear: -25.4,
    exchange: 'Crypto', type: 'crypto',
    history: [8.5, 7.8, 7.0, 7.2, 6.5, 6.2, 6.5, 5.9, 6.0, 5.80],
    reason: 'רשת אחסון קבצים מבוזרת, חלופה ל-Dropbox ו-AWS',
    good: ['שימוש אמיתי באחסון', 'טכנולוגיה ייחודית'],
    bad: ['ירידה חדה במחיר', 'תחרות מענקים מסורתיים']
  },
  {
    id: 128, name: 'מייקר', symbol: 'MKR', score: 60, risk: 'high', price: 2180.00,
    change: 2.5, changeWeek: 5.8, changeMonth: 12.5, changeYear: 62.5,
    exchange: 'Crypto', type: 'crypto',
    history: [1500, 1700, 1900, 1850, 2050, 2150, 2100, 2220, 2180, 2180.00],
    reason: 'פרוטוקול DeFi המפעיל את המטבע היציב DAI',
    good: ['מייסד של DeFi', 'מודל עסקי ייחודי', 'יציבות יחסית'],
    bad: ['היצע נמוך', 'מחיר יקר', 'סיכוני רגולציה']
  },
  { id: 129, name: 'סטאקס', symbol: 'STX', score: 48, risk: 'high', price: 2.20, change: 1.8, changeWeek: 4.2, changeMonth: -5.5, changeYear: 45.5, exchange: 'Crypto', type: 'crypto', history: [1.60, 1.80, 2.10, 2.00, 2.30, 2.15, 2.25, 2.10, 2.20, 2.20], reason: 'מאפשר חוזים חכמים על גבי ביטקוין', good: ['מקושר לביטקוין', 'טכנולוגיה ייחודית'], bad: ['אימוץ נמוך', 'תחרות'] },
  { id: 130, name: 'קאספה', symbol: 'KAS', score: 42, risk: 'high', price: 0.15, change: 2.5, changeWeek: 5.8, changeMonth: -8.5, changeYear: 85.5, exchange: 'Crypto', type: 'crypto', history: [0.10, 0.12, 0.14, 0.13, 0.16, 0.15, 0.17, 0.14, 0.15, 0.15], reason: 'בלוקצ\'יין מהיר מאוד, מבוסס על GHOSTDAG', good: ['מהיר מאוד', 'חדשני טכנית'], bad: ['צעיר', 'אימוץ מוגבל', 'ספקולטיבי'] },
  { id: 131, name: 'רנדר', symbol: 'RNDR', score: 55, risk: 'high', price: 8.50, change: 1.5, changeWeek: 3.8, changeMonth: -4.5, changeYear: 52.5, exchange: 'Crypto', type: 'crypto', history: [6.5, 7.0, 7.8, 7.5, 8.2, 8.8, 8.5, 9.0, 8.4, 8.50], reason: 'רשת מבוזרת להשכרת כוח עיבוד גרפי (GPU), משמש לעיבוד וידאו ו-AI', good: ['שימוש במחשוב GPU', 'ביקוש מ-AI'], bad: ['תחרות ממסחרי', 'תלות בשוק AI'] },
  { id: 132, name: 'אינג\'קטיב', symbol: 'INJ', score: 55, risk: 'high', price: 32.50, change: 2.1, changeWeek: 4.5, changeMonth: -6.5, changeYear: 38.5, exchange: 'Crypto', type: 'crypto', history: [22, 26, 30, 28, 34, 32, 35, 30, 33, 32.50], reason: 'בורסת נגזרים מבוזרת, מהיר ואיפוני-ידידותי', good: ['נגזרים מבוזרים', 'מהיר'], bad: ['תחרות חזקה', 'רגולציה על נגזרים'] },
  { id: 133, name: 'פנטום', symbol: 'FTM', score: 48, risk: 'high', price: 0.75, change: 1.2, changeWeek: 3.2, changeMonth: -7.5, changeYear: 25.5, exchange: 'Crypto', type: 'crypto', history: [0.55, 0.62, 0.70, 0.68, 0.78, 0.74, 0.80, 0.72, 0.76, 0.75], reason: 'פלטפורמה מהירה וזולה לחוזים חכמים', good: ['מהיר', 'עמלות זולות'], bad: ['ירידה מהשיא', 'תחרות'] },
  { id: 134, name: 'דה גרף', symbol: 'GRT', score: 45, risk: 'high', price: 0.28, change: -0.8, changeWeek: -2.2, changeMonth: -8.5, changeYear: -12.5, exchange: 'Crypto', type: 'crypto', history: [0.35, 0.33, 0.30, 0.31, 0.29, 0.28, 0.29, 0.27, 0.28, 0.28], reason: 'פרוטוקול לאינדקס נתונים בלוקצ\'יין, "גוגל של בלוקצ\'יין"', good: ['תפקיד תשתיתי', 'שימושי לפיתוח'], bad: ['אימוץ איטי', 'ירידה במחיר'] },
  { id: 135, name: 'אימיוטייבל', symbol: 'IMX', score: 48, risk: 'high', price: 2.10, change: 1.5, changeWeek: 3.5, changeMonth: -5.8, changeYear: 38.5, exchange: 'Crypto', type: 'crypto', history: [1.50, 1.70, 1.90, 1.85, 2.10, 2.00, 2.20, 1.95, 2.05, 2.10], reason: 'פלטפורמה למשחקים מבוזרים ו-NFTs על את\'ריום', good: ['משחקים בבלוקצ\'יין', 'NFTs'], bad: ['תלות בהצלחת משחקים'] },
  { id: 136, name: 'ארביטרום', symbol: 'ARB', score: 52, risk: 'high', price: 1.30, change: 1.2, changeWeek: 2.8, changeMonth: -4.5, changeYear: 18.5, exchange: 'Crypto', type: 'crypto', history: [1.10, 1.15, 1.25, 1.20, 1.35, 1.28, 1.38, 1.25, 1.32, 1.30], reason: 'פתרון קנה מידה לאת\'ריום (Layer 2), מאיץ עסקאות ומוזיל עמלות', good: ['Layer 2 מוביל', 'שותפויות', 'אימוץ גבוה'], bad: ['תחרות', 'תלות באת\'ריום'] },
  { id: 137, name: 'אופטימיזם', symbol: 'OP', score: 50, risk: 'high', price: 2.80, change: 1.5, changeWeek: 3.2, changeMonth: -5.5, changeYear: 22.5, exchange: 'Crypto', type: 'crypto', history: [2.20, 2.40, 2.70, 2.60, 2.90, 2.75, 3.00, 2.65, 2.80, 2.80], reason: 'פתרון קנה מידה לאת\'ריום (Layer 2), מתחרה של Arbitrum', good: ['Layer 2 מוביל', 'קהילה פעילה'], bad: ['תחרות מ-ARB', 'תלות באת\'ריום'] },
  { id: 138, name: 'אייפקוין', symbol: 'APE', score: 30, risk: 'high', price: 1.20, change: -2.5, changeWeek: -5.5, changeMonth: -15.5, changeYear: -45.5, exchange: 'Crypto', type: 'crypto', history: [2.50, 2.20, 1.80, 2.00, 1.50, 1.30, 1.35, 1.15, 1.25, 1.20], reason: 'מטבע של קהילת NFT של קופי Bored Ape Yacht Club', good: ['קהילת NFT'], bad: ['ירידה קיצונית', 'NFTs לא בטרנד', 'ספקולטיבי'] },
  { id: 139, name: 'אקסי אינפיניטי', symbol: 'AXS', score: 35, risk: 'high', price: 7.20, change: -1.5, changeWeek: -3.5, changeMonth: -12.5, changeYear: -35.5, exchange: 'Crypto', type: 'crypto', history: [12, 10.5, 9.0, 9.5, 8.0, 7.5, 7.8, 7.0, 7.3, 7.20], reason: 'משחק NFT שהיה פופולרי בפיליפינים, איבד משיא', good: ['חלוץ play-to-earn', 'קהילה'], bad: ['ירידה חדה', 'ירידה בשחקנים'] },
  { id: 140, name: 'דסנטרלנד', symbol: 'MANA', score: 32, risk: 'high', price: 0.48, change: -2.2, changeWeek: -4.8, changeMonth: -12.5, changeYear: -38.5, exchange: 'Crypto', type: 'crypto', history: [0.75, 0.68, 0.58, 0.62, 0.52, 0.48, 0.50, 0.45, 0.48, 0.48], reason: 'עולם וירטואלי מבוזר (מטאוורס), הייפ שדעך', good: ['חלוץ מטאוורס'], bad: ['ירידה במשתמשים', 'מטאוורס לא פרץ'] },
  { id: 141, name: 'דה סנדבוקס', symbol: 'SAND', score: 35, risk: 'high', price: 0.52, change: -1.8, changeWeek: -4.2, changeMonth: -11.5, changeYear: -32.5, exchange: 'Crypto', type: 'crypto', history: [0.80, 0.72, 0.62, 0.65, 0.55, 0.52, 0.54, 0.48, 0.52, 0.52], reason: 'פלטפורמת משחקים וירטואלית, דומה לדסנטרלנד', good: ['שותפויות עם מותגים', 'טוקן משחק'], bad: ['ירידה מהשיא', 'תחרות'] },
  { id: 142, name: 'קרב', symbol: 'CRV', score: 42, risk: 'high', price: 0.60, change: -1.2, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [0.85, 0.78, 0.70, 0.72, 0.65, 0.60, 0.62, 0.58, 0.62, 0.60], reason: 'בורסה מבוזרת המתמחה במטבעות יציבים', good: ['נישה ייחודית', 'חשובה ל-DeFi'], bad: ['ירידה במחיר', 'פריצות בעבר'] },
  { id: 143, name: 'סינת\'טיקס', symbol: 'SNX', score: 40, risk: 'high', price: 3.20, change: -0.8, changeWeek: -2.2, changeMonth: -7.5, changeYear: -18.5, exchange: 'Crypto', type: 'crypto', history: [4.20, 3.90, 3.50, 3.60, 3.20, 3.10, 3.25, 3.00, 3.15, 3.20], reason: 'פרוטוקול לנכסים סינתטיים על בלוקצ\'יין', good: ['נכסים סינתטיים', 'חדשנות'], bad: ['מסובך', 'אימוץ מוגבל'] },
  { id: 144, name: 'קומפאונד', symbol: 'COMP', score: 45, risk: 'high', price: 62.30, change: -1.5, changeWeek: -3.2, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [82, 76, 70, 72, 65, 62, 65, 58, 63, 62.30], reason: 'פרוטוקול הלוואות מבוזר, חלוץ ב-DeFi', good: ['חלוץ DeFi', 'אימוץ גדול'], bad: ['תחרות מ-Aave', 'ירידה במחיר'] },
  { id: 145, name: 'ביטקוין SV', symbol: 'BSV', score: 30, risk: 'high', price: 72.00, change: -2.5, changeWeek: -5.5, changeMonth: -12.5, changeYear: -28.5, exchange: 'Crypto', type: 'crypto', history: [98, 92, 85, 88, 78, 72, 75, 70, 73, 72.00], reason: 'פיצול של ביטקוין קאש, מזוהה עם קרייג רייט השנוי במחלוקת', good: ['בלוקים גדולים'], bad: ['שנוי במחלוקת', 'ירידה מתמשכת', 'אימוץ נמוך'] },
  { id: 146, name: 'דאש', symbol: 'DASH', score: 38, risk: 'high', price: 32.50, change: -1.2, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [42, 38, 35, 36, 33, 32, 34, 30, 33, 32.50], reason: 'מטבע לתשלומים מהירים ופרטיים, אימוץ בחלק ממדינות', good: ['מהיר לתשלומים', 'אימוץ בחלק ממדינות'], bad: ['ירידה במחיר', 'תחרות'] },
  { id: 147, name: 'זיקאש', symbol: 'ZEC', score: 42, risk: 'high', price: 28.50, change: 0.8, changeWeek: 2.2, changeMonth: -4.5, changeYear: 15.5, exchange: 'Crypto', type: 'crypto', history: [24, 26, 29, 28, 31, 29, 30, 27, 29, 28.50], reason: 'מטבע פרטיות עם הצפנת Zero-knowledge proofs', good: ['פרטיות אופציונלית', 'טכנולוגיה מתקדמת'], bad: ['תחרות ממונרו', 'רגולציה'] },
  { id: 148, name: 'הליום', symbol: 'HNT', score: 45, risk: 'high', price: 5.80, change: 1.5, changeWeek: 3.5, changeMonth: -5.5, changeYear: 25.5, exchange: 'Crypto', type: 'crypto', history: [4.2, 4.8, 5.5, 5.2, 6.0, 5.8, 6.2, 5.5, 5.9, 5.80], reason: 'רשת אלחוטית מבוזרת של מכשירי IoT', good: ['שימוש אמיתי IoT', 'רשת גלובלית'], bad: ['אימוץ איטי', 'מודל עסקי מתפתח'] },
  { id: 149, name: 'ת\'טא', symbol: 'THETA', score: 40, risk: 'high', price: 1.45, change: -0.8, changeWeek: -2.2, changeMonth: -7.5, changeYear: -18.5, exchange: 'Crypto', type: 'crypto', history: [2.00, 1.80, 1.60, 1.65, 1.50, 1.40, 1.50, 1.35, 1.45, 1.45], reason: 'רשת וידאו מבוזרת, מטרה להחליף שרתי סטרימינג', good: ['שימוש אמיתי בווידאו', 'שותפויות'], bad: ['ירידה במחיר', 'תחרות'] },
  { id: 150, name: 'פלו', symbol: 'FLOW', score: 35, risk: 'high', price: 0.78, change: -1.5, changeWeek: -3.5, changeMonth: -12.5, changeYear: -38.5, exchange: 'Crypto', type: 'crypto', history: [1.35, 1.20, 1.00, 1.05, 0.85, 0.75, 0.85, 0.70, 0.80, 0.78], reason: 'בלוקצ\'יין שפותח על ידי Dapper Labs ליצירת NFTs', good: ['NBA Top Shot', 'יוצרי CryptoKitties'], bad: ['ירידה קיצונית', 'NFTs לא בטרנד'] },
  { id: 151, name: 'EOS', symbol: 'EOS', score: 28, risk: 'high', price: 0.75, change: -1.8, changeWeek: -4.2, changeMonth: -12.5, changeYear: -28.5, exchange: 'Crypto', type: 'crypto', history: [1.10, 0.98, 0.85, 0.90, 0.78, 0.72, 0.78, 0.68, 0.75, 0.75], reason: 'בלוקצ\'יין ותיק שגייס מיליארדים ב-ICO אבל לא הצליח', good: ['ותיק'], bad: ['כישלון יחסי', 'ירידה קיצונית', 'אימוץ נמוך'] },
  { id: 152, name: 'איוטה', symbol: 'IOTA', score: 32, risk: 'high', price: 0.22, change: -1.2, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [0.30, 0.28, 0.25, 0.26, 0.23, 0.22, 0.23, 0.21, 0.22, 0.22], reason: 'רשת ללא עמלות ל-IoT, שימוש בטופולוגיית Tangle', good: ['ללא עמלות', 'טכנולוגיה ייחודית'], bad: ['אימוץ נמוך', 'התקפות בעבר'] },
  { id: 153, name: 'נאו', symbol: 'NEO', score: 35, risk: 'high', price: 12.40, change: -0.8, changeWeek: -2.2, changeMonth: -7.5, changeYear: -15.5, exchange: 'Crypto', type: 'crypto', history: [16, 15, 13, 13.5, 12, 11.5, 12.5, 11, 12.5, 12.40], reason: 'בלוקצ\'יין סיני, מכונה "את\'ריום של סין"', good: ['מותג סיני חזק', 'ותיק'], bad: ['סיכוני רגולציה סינית', 'אימוץ מוגבל'] },
  { id: 154, name: 'וויבס', symbol: 'WAVES', score: 25, risk: 'high', price: 2.10, change: -2.5, changeWeek: -5.5, changeMonth: -15.5, changeYear: -42.5, exchange: 'Crypto', type: 'crypto', history: [4.20, 3.60, 2.80, 3.00, 2.40, 2.00, 2.20, 1.80, 2.05, 2.10], reason: 'בלוקצ\'יין ליצירת טוקנים, איבד אמון אחרי בעיות', good: ['יצירת טוקנים'], bad: ['קריסת USDN', 'איבד אמון', 'ירידה קיצונית'] },
  { id: 155, name: 'מאלטיוורס X', symbol: 'EGLD', score: 42, risk: 'high', price: 48.30, change: 0.8, changeWeek: 2.2, changeMonth: -5.5, changeYear: 18.5, exchange: 'Crypto', type: 'crypto', history: [38, 42, 46, 44, 50, 48, 52, 44, 49, 48.30], reason: 'בלוקצ\'יין מהיר מאוד, שינה את שמו מ-Elrond', good: ['מהיר מאוד', 'טכנולוגיה מתקדמת'], bad: ['אימוץ נמוך', 'מורכבות'] },
  { id: 156, name: 'הדרה', symbol: 'HBAR', score: 48, risk: 'high', price: 0.095, change: 1.5, changeWeek: 3.5, changeMonth: -5.5, changeYear: 38.5, exchange: 'Crypto', type: 'crypto', history: [0.07, 0.08, 0.09, 0.085, 0.10, 0.095, 0.10, 0.088, 0.095, 0.095], reason: 'רשת קונצנזוס עם גוף ממשלתי של ענקיות (IBM, גוגל)', good: ['שותפויות עם ענקיות', 'מהיר'], bad: ['ריכוזי יחסית', 'אימוץ איטי'] },
  { id: 157, name: 'קוואנט', symbol: 'QNT', score: 50, risk: 'high', price: 108.50, change: 0.8, changeWeek: 2.2, changeMonth: -4.5, changeYear: 15.5, exchange: 'Crypto', type: 'crypto', history: [88, 95, 105, 100, 110, 108, 115, 100, 108, 108.50], reason: 'פתרון חיבור בין בלוקצ\'יינים, מיקוד בארגונים גדולים', good: ['מיקוד בארגונים', 'טכנולוגיה ייחודית'], bad: ['היצע נמוך', 'אימוץ מוגבל'] },
  { id: 158, name: 'צ\'יליז', symbol: 'CHZ', score: 35, risk: 'high', price: 0.12, change: -1.2, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [0.18, 0.16, 0.14, 0.15, 0.13, 0.12, 0.13, 0.11, 0.12, 0.12], reason: 'טוקני אוהדים של קבוצות ספורט (ברצלונה, יובנטוס)', good: ['שותפויות ספורט', 'נישה מעניינת'], bad: ['ירידה במחיר', 'שימוש מוגבל'] },
  { id: 159, name: 'קאבה', symbol: 'KAVA', score: 38, risk: 'high', price: 0.88, change: -1.5, changeWeek: -3.2, changeMonth: -8.5, changeYear: -25.5, exchange: 'Crypto', type: 'crypto', history: [1.30, 1.15, 1.00, 1.05, 0.90, 0.85, 0.92, 0.80, 0.90, 0.88], reason: 'פלטפורמת DeFi על גבי Cosmos', good: ['חלק מ-Cosmos', 'DeFi'], bad: ['ירידה במחיר', 'תחרות חזקה'] },
  { id: 160, name: 'מינה', symbol: 'MINA', score: 42, risk: 'high', price: 0.65, change: -0.8, changeWeek: -2.2, changeMonth: -7.5, changeYear: -18.5, exchange: 'Crypto', type: 'crypto', history: [0.95, 0.82, 0.70, 0.75, 0.65, 0.62, 0.68, 0.58, 0.65, 0.65], reason: 'הבלוקצ\'יין הקל ביותר בעולם (22KB בלבד)', good: ['בלוקצ\'יין קל', 'zero-knowledge מתקדם'], bad: ['אימוץ איטי', 'תחרות'] },
  { id: 161, name: 'גאלה', symbol: 'GALA', score: 30, risk: 'high', price: 0.028, change: -2.5, changeWeek: -5.5, changeMonth: -15.5, changeYear: -42.5, exchange: 'Crypto', type: 'crypto', history: [0.055, 0.048, 0.038, 0.042, 0.032, 0.028, 0.032, 0.025, 0.030, 0.028], reason: 'פלטפורמת משחקים בבלוקצ\'יין', good: ['משחקים בבלוקצ\'יין'], bad: ['ירידה קיצונית', 'משחקים לא פרצו'] },
  { id: 162, name: 'אנג\'ין', symbol: 'ENJ', score: 35, risk: 'high', price: 0.32, change: -1.5, changeWeek: -3.5, changeMonth: -10.5, changeYear: -28.5, exchange: 'Crypto', type: 'crypto', history: [0.52, 0.45, 0.38, 0.40, 0.34, 0.32, 0.35, 0.28, 0.32, 0.32], reason: 'פלטפורמה ל-NFTs במשחקים', good: ['NFTs במשחקים', 'חלוץ בתחום'], bad: ['ירידה במחיר', 'NFTs לא בטרנד'] },
  { id: 163, name: 'בייזיק אטנשן', symbol: 'BAT', score: 40, risk: 'high', price: 0.25, change: -0.5, changeWeek: -1.8, changeMonth: -5.5, changeYear: -12.5, exchange: 'Crypto', type: 'crypto', history: [0.32, 0.30, 0.27, 0.28, 0.26, 0.24, 0.26, 0.23, 0.25, 0.25], reason: 'מטבע של דפדפן Brave, מתגמל על צפייה בפרסומות', good: ['שימוש אמיתי בדפדפן Brave', 'מודל פרסום חדש'], bad: ['ירידה במחיר', 'תחרות'] },
  { id: 164, name: 'קיוטום', symbol: 'QTUM', score: 30, risk: 'high', price: 3.10, change: -1.2, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [4.20, 3.80, 3.40, 3.50, 3.20, 3.00, 3.20, 2.80, 3.10, 3.10], reason: 'שילוב של ביטקוין ואת\'ריום, אימוץ נמוך', good: ['שילוב טכנולוגיות'], bad: ['אימוץ נמוך', 'ירידה מתמשכת'] },
  { id: 165, name: 'זיליקה', symbol: 'ZIL', score: 32, risk: 'high', price: 0.025, change: -1.8, changeWeek: -4.2, changeMonth: -12.5, changeYear: -32.5, exchange: 'Crypto', type: 'crypto', history: [0.040, 0.035, 0.030, 0.032, 0.027, 0.025, 0.027, 0.023, 0.026, 0.025], reason: 'בלוקצ\'יין מהיר עם sharding, אימוץ נמוך', good: ['sharding מתקדם'], bad: ['אימוץ נמוך', 'תחרות'] },
  { id: 166, name: 'הולו', symbol: 'HOT', score: 25, risk: 'high', price: 0.0022, change: -2.5, changeWeek: -5.5, changeMonth: -15.5, changeYear: -42.5, exchange: 'Crypto', type: 'crypto', history: [0.0045, 0.0038, 0.0030, 0.0032, 0.0025, 0.0022, 0.0024, 0.0020, 0.0023, 0.0022], reason: 'חלופה לבלוקצ\'יין (holochain), אימוץ מוגבל', good: ['חלופה מעניינת'], bad: ['אימוץ נמוך', 'ירידה קיצונית'] },
  { id: 167, name: 'ביטקוין גולד', symbol: 'BTG', score: 25, risk: 'high', price: 32.00, change: -2.2, changeWeek: -5.2, changeMonth: -12.5, changeYear: -28.5, exchange: 'Crypto', type: 'crypto', history: [45, 42, 38, 40, 35, 32, 34, 30, 33, 32.00], reason: 'פיצול של ביטקוין מ-2017, אימוץ מוגבל', good: ['פיצול ביטקוין'], bad: ['אימוץ נמוך', 'ירידה מתמשכת'] },
  { id: 168, name: 'אונטולוג\'י', symbol: 'ONT', score: 28, risk: 'high', price: 0.22, change: -1.5, changeWeek: -3.5, changeMonth: -10.5, changeYear: -28.5, exchange: 'Crypto', type: 'crypto', history: [0.32, 0.28, 0.25, 0.26, 0.23, 0.22, 0.24, 0.20, 0.22, 0.22], reason: 'בלוקצ\'יין עסקי, שותף של NEO', good: ['מיקוד בעסקים'], bad: ['אימוץ נמוך', 'ירידה'] },
  { id: 169, name: 'רייבנקוין', symbol: 'RVN', score: 28, risk: 'high', price: 0.022, change: -1.8, changeWeek: -4.2, changeMonth: -12.5, changeYear: -32.5, exchange: 'Crypto', type: 'crypto', history: [0.035, 0.032, 0.028, 0.029, 0.025, 0.022, 0.024, 0.020, 0.023, 0.022], reason: 'בלוקצ\'יין ליצירת נכסים וטוקנים', good: ['פשוט ליצירת טוקנים'], bad: ['אימוץ נמוך', 'תחרות'] },
  { id: 170, name: 'דיגיבייט', symbol: 'DGB', score: 25, risk: 'high', price: 0.010, change: -2.2, changeWeek: -5.2, changeMonth: -15.5, changeYear: -38.5, exchange: 'Crypto', type: 'crypto', history: [0.018, 0.015, 0.012, 0.013, 0.011, 0.010, 0.011, 0.009, 0.010, 0.010], reason: 'בלוקצ\'יין מהיר מ-2014, אימוץ מוגבל', good: ['ותיק'], bad: ['אימוץ נמוך', 'ירידה חדה'] },
  { id: 171, name: 'ורג\'', symbol: 'XVG', score: 20, risk: 'high', price: 0.0055, change: -2.8, changeWeek: -6.5, changeMonth: -18.5, changeYear: -48.5, exchange: 'Crypto', type: 'crypto', history: [0.012, 0.009, 0.007, 0.0075, 0.006, 0.0055, 0.006, 0.005, 0.0058, 0.0055], reason: 'מטבע פרטיות ותיק עם היסטוריה של בעיות אבטחה', good: ['פרטיות'], bad: ['בעיות אבטחה בעבר', 'ירידה חדה'] },
  { id: 172, name: 'לונה', symbol: 'LUNA', score: 15, risk: 'high', price: 0.62, change: -3.5, changeWeek: -8.5, changeMonth: -22.5, changeYear: -62.5, exchange: 'Crypto', type: 'crypto', history: [2.20, 1.50, 1.00, 1.10, 0.80, 0.65, 0.75, 0.55, 0.65, 0.62], reason: 'גרסה חדשה אחרי קריסת Luna המקורית ב-2022', good: ['ניסיון חוזר'], bad: ['קריסה היסטורית', 'אובדן אמון', 'ירידה'] },
  { id: 173, name: 'סלו', symbol: 'CELO', score: 35, risk: 'high', price: 0.75, change: -1.2, changeWeek: -2.8, changeMonth: -8.5, changeYear: -22.5, exchange: 'Crypto', type: 'crypto', history: [1.05, 0.95, 0.85, 0.88, 0.78, 0.72, 0.78, 0.68, 0.75, 0.75], reason: 'פלטפורמת תשלומים ניידים למדינות מתפתחות', good: ['מטרה חברתית', 'מיקוד במובייל'], bad: ['אימוץ מוגבל', 'תחרות'] },
  { id: 174, name: 'ביטורנט', symbol: 'BTT', score: 20, risk: 'high', price: 0.0000012, change: -2.5, changeWeek: -5.5, changeMonth: -15.5, changeYear: -42.5, exchange: 'Crypto', type: 'crypto', history: [0.0000025, 0.0000020, 0.0000016, 0.0000017, 0.0000014, 0.0000012, 0.0000013, 0.0000011, 0.0000012, 0.0000012], reason: 'מטבע של רשת ביטורנט על Tron, היצע ענק', good: ['שימוש בביטורנט'], bad: ['היצע אסטרונומי', 'ירידה מתמשכת'] },
  { id: 175, name: 'קונפלוקס', symbol: 'CFX', score: 42, risk: 'high', price: 0.22, change: 1.5, changeWeek: 3.5, changeMonth: -5.5, changeYear: 28.5, exchange: 'Crypto', type: 'crypto', history: [0.16, 0.18, 0.21, 0.20, 0.24, 0.22, 0.25, 0.20, 0.22, 0.22], reason: 'בלוקצ\'יין סיני עם אישור רגולטורי', good: ['אישור בסין', 'מהיר'], bad: ['סיכוני רגולציה', 'תלות בסין'] },
  { id: 176, name: 'סוי', symbol: 'SUI', score: 52, risk: 'high', price: 1.28, change: 2.1, changeWeek: 4.5, changeMonth: -5.5, changeYear: 48.5, exchange: 'Crypto', type: 'crypto', history: [0.85, 0.95, 1.15, 1.10, 1.30, 1.25, 1.35, 1.15, 1.25, 1.28], reason: 'בלוקצ\'יין חדש ומהיר מצוות Meta לשעבר', good: ['מהיר מאוד', 'צוות חזק', 'חדשני'], bad: ['צעיר', 'תחרות'] },
  { id: 177, name: 'אפטוס', symbol: 'APT', score: 50, risk: 'high', price: 8.50, change: 1.8, changeWeek: 3.8, changeMonth: -5.5, changeYear: 32.5, exchange: 'Crypto', type: 'crypto', history: [6.5, 7.2, 8.0, 7.8, 8.8, 8.5, 9.0, 8.0, 8.4, 8.50], reason: 'בלוקצ\'יין חדש ומהיר, מתחרה של Sui', good: ['מהיר', 'צוות מ-Meta', 'תמיכה מ-VCs'], bad: ['ריכוזי', 'תחרות מול Sui'] },
  { id: 178, name: 'פאקסוס גולד', symbol: 'PAXG', score: 68, risk: 'medium', price: 2050.00, change: 0.5, changeWeek: 1.2, changeMonth: 2.8, changeYear: 18.5, exchange: 'Crypto', type: 'crypto', history: [1850, 1900, 1950, 1940, 1980, 2020, 2010, 2060, 2045, 2050.00], reason: 'מטבע מגובה בזהב פיזי, כל טוקן = אונקיית זהב', good: ['מגובה בזהב אמיתי', 'נייד ומחולק', 'גידור מפני אינפלציה'], bad: ['עמלות שמירה', 'תלות בחברה מרכזית'] },
];

// ============================================================
// DATA - EXCHANGES
// ============================================================

const exchangesData = [
  {
    id: 'nasdaq', name: 'נאסד"ק', nameEn: 'NASDAQ', country: '🇺🇸', score: 90,
    icon: '💻', color: '#3b82f6', type: 'stock',
    description: 'הבורסה של חברות הטכנולוגיה הגדולות',
    forWho: 'למי שרוצה טכנולוגיה',
    companies: ['אפל', 'מיקרוסופט', 'גוגל', 'אמזון'],
    pros: ['חברות מובילות', 'צמיחה'], cons: ['תנודתיות', 'צריך דולרים'],
    minInvest: '$100', hours: '16:30-23:00'
  },
  {
    id: 'nyse', name: 'וול סטריט', nameEn: 'NYSE', country: '🇺🇸', score: 88,
    icon: '🏛️', color: '#1e3a8a', type: 'stock',
    description: 'הבורסה הכי גדולה בעולם',
    forWho: 'למי שרוצה יציבות',
    companies: ['קוקה קולה', 'דיסני', 'ויזה'],
    pros: ['יציבות', 'דיבידנדים'], cons: ['צמיחה איטית'],
    minInvest: '$100', hours: '16:30-23:00'
  },
  {
    id: 'tase', name: 'בורסת ת"א', nameEn: 'TASE', country: '🇮🇱', score: 75,
    icon: '🇮🇱', color: '#10b981', type: 'stock',
    description: 'הבורסה הישראלית - קל להתחיל',
    forWho: 'למתחילים, בשקלים',
    companies: ['בנק לאומי', 'טבע', 'אלביט'],
    pros: ['בשקלים', 'קל להתחיל'], cons: ['פחות חברות'],
    minInvest: '₪100', hours: '09:45-17:25'
  },
  {
    id: 'binance', name: 'ביננס', nameEn: 'Binance', country: '🌐', score: 65,
    icon: '🪙', color: '#f59e0b', type: 'crypto',
    description: 'הבורסה הכי גדולה לקריפטו',
    forWho: 'למי שרוצה קריפטו',
    companies: ['ביטקוין', 'את\'ריום', 'מאות מטבעות'],
    pros: ['הרבה מטבעות', 'נזילות גבוהה'], cons: ['מסוכן', 'רגולציה'],
    minInvest: '$10', hours: '24/7'
  },
  {
    id: 'coinbase', name: 'קוינבייס', nameEn: 'Coinbase', country: '🇺🇸', score: 60,
    icon: '💰', color: '#8b5cf6', type: 'crypto',
    description: 'בורסת קריפטו אמריקאית מפוקחת',
    forWho: 'למתחילים בקריפטו',
    companies: ['ביטקוין', 'את\'ריום', 'מטבעות נבחרים'],
    pros: ['קל לשימוש', 'מפוקח'], cons: ['עמלות גבוהות', 'פחות מטבעות'],
    minInvest: '$1', hours: '24/7'
  },
];

// ============================================================
// DATA - LESSONS
// ============================================================

const lessonsData = [
  {
    id: 'what-is-money', icon: '💵', title: 'מה זה כסף?', subtitle: 'ההתחלה של הכל',
    content: [
      { q: 'מה זה בעצם כסף?', a: 'כסף זה דרך להחליף דברים. פעם החליפו תרנגולות בלחם. היום יש לנו שטרות ומטבעות.' },
      { q: 'למה צריך כסף?', a: 'כסף עוזר לקנות אוכל, בגדים וצעצועים. בלי כסף היינו צריכים להחליף דברים ישירות.' },
      { q: 'מאיפה מגיע כסף?', a: 'הממשלה מדפיסה כסף, אבל רוב הכסף שלנו מגיע מעבודה.' }
    ]
  },
  {
    id: 'what-is-stock', icon: '📈', title: 'מה זה מניה?', subtitle: 'חלק מחברה',
    content: [
      { q: 'מה זה מניה?', a: 'מניה זה כמו חתיכה קטנה מחברה. אם קונים מניה של אפל, אתה בעלים של חלק קטנטן מאפל!' },
      { q: 'איך מרוויחים ממניות?', a: 'אם החברה מצליחה, המניה עולה במחיר. מוכרים ביותר ממה שקנית = רווח!' },
      { q: 'מה הסיכון?', a: 'אם החברה לא מצליחה, המניה יורדת. אפשר להפסיד כסף.' }
    ]
  },
  {
    id: 'what-is-crypto', icon: '🪙', title: 'מה זה קריפטו?', subtitle: 'כסף דיגיטלי',
    content: [
      { q: 'מה זה קריפטו?', a: 'קריפטו זה כסף שקיים רק במחשב, בלי בנק או ממשלה מאחוריו. הכי מפורסם הוא ביטקוין.' },
      { q: 'איך זה עובד?', a: 'במקום בנק, מחשבים ברחבי העולם עוקבים אחרי מי שולח כסף למי. זה נקרא בלוקצ\'יין.' },
      { q: 'למה אנשים קונים?', a: 'יש שחושבים שזה העתיד של הכסף. אחרים רוצים להרוויח מעליית המחיר.' }
    ]
  },
  {
    id: 'stock-vs-crypto', icon: '⚖️', title: 'מניות VS קריפטו', subtitle: 'מה ההבדל?',
    content: [
      { q: 'מה עומד מאחורי?', a: 'מניה = חברה אמיתית עם עובדים ומוצרים.\nקריפטו = רק קוד מחשב ואמונה של אנשים.' },
      { q: 'מי שולט?', a: 'מניות = יש רגולציה וחוקים.\nקריפטו = כמעט בלי פיקוח, "פרא מערב".' },
      { q: 'כמה מסוכן?', a: 'מניות = יכולות לרדת 20-50% בשנה רעה.\nקריפטו = יכול לרדת 80% בחודש!' },
    ]
  },
  {
    id: 'risk', icon: '⚠️', title: 'מה זה סיכון?', subtitle: 'חשוב להבין',
    content: [
      { q: 'מה זה סיכון?', a: 'סיכון = הסיכוי להפסיד כסף. ככל שהסיכון גבוה, אפשר להרוויח יותר אבל גם להפסיד יותר.' },
      { q: 'איך מפחיתים סיכון?', a: 'פיזור! לא לשים את כל הכסף במקום אחד. קצת במניות, קצת בבנק, אולי קצת בקריפטו.' },
      { q: 'מה עדיף?', a: 'תלוי בך! צעירים יכולים לקחת יותר סיכון. מי שצריך את הכסף בקרוב - עדיף בטוח.' }
    ]
  },
  {
    id: 'tips', icon: '💡', title: 'טיפים חשובים', subtitle: 'כללי זהב',
    content: [
      { q: 'התחל בקטן', a: 'לא צריך הרבה כסף. אפשר להתחיל עם 100 ש"ח! העיקר ללמוד.' },
      { q: 'אל תשקיע כסף שאתה צריך', a: 'רק כסף שאתה לא צריך בקרוב. אם יורד - לא נורא.' },
      { q: 'תהיה סבלני', a: 'השקעות טובות לוקחות זמן. אל תצפה להתעשר מחר.' },
    ]
  }
];

// ============================================================
// HELPERS
// ============================================================

const getScoreInfo = (score) => {
  if (score >= 75) return { label: 'מומלץ', emoji: '👍', color: '#10b981' };
  if (score >= 50) return { label: 'אפשרי', emoji: '🤔', color: '#f59e0b' };
  return { label: 'לא מומלץ', emoji: '👎', color: '#ef4444' };
};

const formatPrice = (price, type, exchange) => {
  const symbol = exchange === 'TASE' ? '₪' : '$';
  if (type === 'crypto' && price < 0.01) return `$${price.toFixed(8)}`;
  if (type === 'crypto' && price < 1) return `$${price.toFixed(3)}`;
  if (price >= 1000) return `${symbol}${(price/1000).toFixed(1)}K`;
  return `${symbol}${price.toLocaleString()}`;
};

// ============================================================
// RESPONSIVE HOOK
// ============================================================

const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
};

// ============================================================
// COMPONENTS
// ============================================================

const Sparkline = ({ data, color, height = 40, width = 100 }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * (height - 8) - 4}`).join(' ');

  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id={`g-${color.replace('#','')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#g-${color.replace('#','')})`} points={`0,${height} ${points} ${width},${height}`} />
      <polyline fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={points} />
    </svg>
  );
};

const AnimatedScore = ({ score, size = 100 }) => {
  const [display, setDisplay] = useState(0);
  const info = getScoreInfo(score);
  
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 3;
      if (current >= score) { setDisplay(score); clearInterval(interval); }
      else setDisplay(Math.round(current));
    }, 20);
    return () => clearInterval(interval);
  }, [score]);

  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (display / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={40} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="8" />
        <circle cx={size/2} cy={size/2} r={40} fill="none" stroke={info.color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset 0.1s' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: size * 0.3, fontWeight: '700', color: '#1e3a8a' }}>{display}</span>
      </div>
    </div>
  );
};

// ============================================================
// SPLASH SCREEN  (Premium Gradient · shown only once, first visit)
// ============================================================

const SPLASH_FLAG = 'hasSeenSplashV1';
const SPLASH_DURATION = 2500;

const SplashScreen = ({ onDone }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), SPLASH_DURATION - 400);
    const doneTimer  = setTimeout(() => { onDone(); }, SPLASH_DURATION);
    return () => { clearTimeout(leaveTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'radial-gradient(ellipse at 30% 20%, #1e3a8a 0%, #0c1e4e 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      opacity: leaving ? 0 : 1,
      transition: 'opacity 0.4s var(--ios-soft)',
      pointerEvents: leaving ? 'none' : 'auto'
    }}>
      {/* Floating orbs */}
      <div style={{
        position: 'absolute', top: '12%', right: '12%',
        width: '220px', height: '220px', borderRadius: '50%',
        background: '#3b82f6', filter: 'blur(48px)', opacity: 0.55,
        animation: 'splash-orb-float 4.5s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', bottom: '14%', left: '14%',
        width: '180px', height: '180px', borderRadius: '50%',
        background: '#8b5cf6', filter: 'blur(44px)', opacity: 0.5,
        animation: 'splash-orb-float 5s ease-in-out 1s infinite'
      }} />
      <div style={{
        position: 'absolute', top: '42%', left: '18%',
        width: '140px', height: '140px', borderRadius: '50%',
        background: '#06b6d4', filter: 'blur(40px)', opacity: 0.42,
        animation: 'splash-orb-float 4s ease-in-out 2s infinite'
      }} />

      {/* Logo + text */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center',
                    animation: 'splash-rise 0.9s var(--ios-spring) both' }}>
        <div style={{
          width: '104px', height: '104px', margin: '0 auto 24px',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '56px',
          boxShadow: '0 24px 48px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.35)',
          animation: 'splash-float 3.2s ease-in-out 0.6s infinite'
        }}>📈</div>

        <h1 style={{
          margin: 0, fontSize: '48px', fontWeight: 800,
          background: 'linear-gradient(90deg, #ffffff 0%, #bfdbfe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-1px',
          animation: 'splash-text-reveal 0.9s var(--ios-spring) 0.15s both'
        }}>Beni Bursa</h1>

        <p style={{
          margin: '8px 0 0', fontSize: '13px', fontWeight: 500,
          color: 'rgba(255,255,255,0.72)',
          letterSpacing: '4px',
          animation: 'fade-in 0.6s ease-out 0.7s both'
        }}>SMART INVESTING</p>
      </div>

      {/* Shimmer loader bar */}
      <div style={{
        position: 'absolute', bottom: '56px', left: '50%', transform: 'translateX(-50%)',
        width: '180px', height: '3px', borderRadius: '3px',
        background: 'rgba(255,255,255,0.12)', overflow: 'hidden',
        animation: 'fade-in 0.5s ease-out 0.9s both'
      }}>
        <div style={{
          position: 'absolute', top: 0, height: '100%', width: '45%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)',
          animation: 'splash-shimmer 1.4s ease-in-out infinite'
        }} />
      </div>
    </div>
  );
};

// ============================================================
// HELP BOTTOM SHEET  (content of former onboarding — shown on demand)
// ============================================================

const HELP_CARDS = [
  { emoji: '👋', title: 'ברוכים הבאים',  desc: 'Beni Bursa עוזר להכיר את עולם ההשקעות בשפה פשוטה וברורה.' },
  { emoji: '📊', title: 'מניות',        desc: 'כשקונים מניה, אתם הבעלים של חלק קטן מחברה אמיתית.' },
  { emoji: '🪙', title: 'קריפטו',       desc: 'מטבעות דיגיטליים — זהירות, מאוד מסוכן ותנודתי!' },
  { emoji: '🎯', title: 'הציון שלנו',    desc: 'מ-0 עד 100. ככל שהציון גבוה יותר — הנכס נראה לנו יציב יותר.' },
];

const HelpBottomSheet = ({ open, onClose, isDesktop }) => {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) setMounted(true);
    else {
      const t = setTimeout(() => setMounted(false), 320);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1500,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      pointerEvents: open ? 'auto' : 'none'
    }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(12,30,78,0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: open ? 1 : 0,
        transition: 'opacity 0.32s var(--ios-soft)'
      }} />

      {/* Sheet */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: isDesktop ? '560px' : '100%',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderRadius: '28px 28px 0 0',
        padding: isDesktop ? '28px 32px 36px' : '22px 22px 32px',
        paddingBottom: 'max(32px, env(safe-area-inset-bottom))',
        boxShadow: '0 -24px 64px rgba(12,30,78,0.25)',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.42s var(--ios-spring)',
        maxHeight: '85vh',
        overflowY: 'auto'
      }}>
        {/* Handle */}
        <div style={{
          width: '44px', height: '5px', borderRadius: '3px',
          background: 'rgba(12,30,78,0.18)',
          margin: '0 auto 18px'
        }} />

        <h2 style={{
          margin: '0 0 4px', fontSize: isDesktop ? '26px' : '22px',
          fontWeight: 700, color: '#0c1e4e', letterSpacing: '-0.02em'
        }}>איך זה עובד? 🚀</h2>
        <p style={{
          margin: '0 0 22px', fontSize: '14px', color: '#64748b'
        }}>כל מה שכדאי לדעת לפני שמתחילים</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {HELP_CARDS.map((c, i) => (
            <div key={c.title} style={{
              display: 'flex', alignItems: 'flex-start', gap: '14px',
              padding: '16px 18px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.04))',
              borderRadius: '18px',
              border: '1px solid rgba(59,130,246,0.12)',
              animation: `slide-up-in 0.5s var(--ios-spring) ${0.08 + i * 0.07}s both`
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '14px', flexShrink: 0,
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px',
                boxShadow: '0 6px 16px rgba(30,58,138,0.25)'
              }}>{c.emoji}</div>
              <div style={{ flex: 1, paddingTop: '2px' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#0c1e4e', marginBottom: '4px' }}>{c.title}</div>
                <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.55 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={onClose} className="bb-press" style={{
          marginTop: '22px', width: '100%',
          padding: '16px', borderRadius: '16px', border: 'none',
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          color: 'white', fontSize: '16px', fontWeight: 600, cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(30,58,138,0.28)',
          animation: `slide-up-in 0.5s var(--ios-spring) ${0.08 + HELP_CARDS.length * 0.07}s both`
        }}>הבנתי, תודה! ✨</button>
      </div>
    </div>
  );
};

// ============================================================
// HELP FAB  (floating question-mark button, always visible)
// ============================================================

const HelpFAB = ({ onClick, isDesktop }) => (
  <button onClick={onClick} aria-label="עזרה · איך זה עובד" className="bb-press" style={{
    position: 'fixed',
    top: isDesktop ? '24px' : '16px',
    left: isDesktop ? '24px' : '16px',
    width: isDesktop ? '48px' : '44px',
    height: isDesktop ? '48px' : '44px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
    color: 'white',
    fontSize: isDesktop ? '22px' : '20px',
    fontWeight: 700,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 120,
    animation: 'fab-pulse 2.6s var(--ios-soft) infinite'
  }}>?</button>
);

// ============================================================
// FLOATING TAB BAR
// ============================================================

const FloatingTabBar = ({ active, onChange, isDesktop }) => {
  const tabs = [
    { id: 'stocks', icon: '📊', label: 'מניות' },
    { id: 'crypto', icon: '🪙', label: 'קריפטו' },
    { id: 'compare', icon: '⚖️', label: 'השוואה' },
    { id: 'exchanges', icon: '🏛️', label: 'בורסות' },
    { id: 'learn', icon: '📚', label: 'למד' },
  ];

  return (
    <nav className="bb-glass" style={{
      position: 'fixed',
      bottom: isDesktop ? '24px' : '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255,255,255,0.72)',
      borderRadius: '28px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 8px 32px rgba(30, 58, 138, 0.18), 0 0 0 1px rgba(255,255,255,0.6)',
      display: 'flex',
      padding: isDesktop ? '8px 12px' : '6px 8px',
      gap: isDesktop ? '8px' : '4px',
      zIndex: 100,
      paddingBottom: isDesktop ? '8px' : 'max(6px, env(safe-area-inset-bottom, 6px))'
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className="bb-press"
          style={{
            background: active === tab.id
              ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
              : 'transparent',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            alignItems: 'center',
            gap: isDesktop ? '8px' : '2px',
            padding: isDesktop ? '12px 20px' : '10px 14px',
            transition: 'background 0.32s var(--ios-spring), color 0.32s var(--ios-spring), transform 0.22s var(--ios-spring)',
            minWidth: isDesktop ? 'auto' : '56px',
            boxShadow: active === tab.id ? '0 6px 16px rgba(30,58,138,0.3)' : 'none'
          }}
          onMouseEnter={e => { if (active !== tab.id) e.currentTarget.style.background = 'rgba(59,130,246,0.1)' }}
          onMouseLeave={e => { if (active !== tab.id) e.currentTarget.style.background = 'transparent' }}
        >
          <span style={{ 
            fontSize: isDesktop ? '20px' : '22px', 
            filter: active === tab.id ? 'none' : 'grayscale(0.4)',
            transition: 'filter 0.2s'
          }}>{tab.icon}</span>
          <span style={{ 
            fontSize: isDesktop ? '14px' : '10px', 
            fontWeight: active === tab.id ? '600' : '500', 
            color: active === tab.id ? 'white' : '#64748b'
          }}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// ============================================================
// SEARCH BAR
// ============================================================

const SearchBar = ({ value, onChange, placeholder, isDesktop }) => (
  <div style={{
    position: 'relative',
    marginBottom: isDesktop ? '20px' : '16px'
  }}>
    <span style={{
      position: 'absolute',
      right: isDesktop ? '18px' : '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: isDesktop ? '18px' : '16px',
      pointerEvents: 'none',
      opacity: 0.6
    }}>🔍</span>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      dir="rtl"
      style={{
        width: '100%',
        padding: isDesktop ? '14px 48px 14px 44px' : '12px 40px 12px 36px',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.9)',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        fontSize: isDesktop ? '15px' : '14px',
        color: '#1e3a8a',
        outline: 'none',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        fontFamily: 'inherit',
        boxSizing: 'border-box',
        transition: 'box-shadow 0.2s'
      }}
      onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.18), 0 4px 20px rgba(0,0,0,0.04)'}
      onBlur={e => e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'}
    />
    {value && (
      <button
        onClick={() => onChange('')}
        aria-label="נקה חיפוש"
        style={{
          position: 'absolute',
          left: isDesktop ? '12px' : '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(100,116,139,0.15)',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          fontSize: '12px',
          color: '#64748b',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          lineHeight: 1
        }}
      >✕</button>
    )}
  </div>
);

// ============================================================
// HEADER
// ============================================================

const Header = ({ title, showBack, onBack, isDesktop }) => (
  <header style={{
    padding: isDesktop ? '20px 32px' : '14px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(20px)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    borderBottom: '1px solid rgba(0,0,0,0.04)'
  }}>
    {showBack && (
      <button onClick={onBack} style={{
        position: 'absolute', right: isDesktop ? '32px' : '16px',
        background: 'rgba(59,130,246,0.1)', border: 'none', borderRadius: '12px',
        padding: '8px 16px', fontSize: '14px', color: '#3b82f6', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500'
      }}>
        <span>←</span> חזרה
      </button>
    )}
    <h1 style={{ fontSize: isDesktop ? '20px' : '17px', fontWeight: '600', color: '#1e3a8a', margin: 0 }}>{title}</h1>
  </header>
);

// ============================================================
// ASSET CARD
// ============================================================

const AssetCard = ({ asset, index, onClick, isDesktop }) => {
  const info = getScoreInfo(asset.score);
  const isUp = asset.change >= 0;
  const isCrypto = asset.type === 'crypto';

  // Cap stagger delay so deep items don't wait forever (first 12 get the fancy entrance).
  const staggerDelay = Math.min(index, 11) * 0.035;

  return (
    <div
      onClick={onClick}
      className="bb-press bb-glass"
      style={{
        background: 'rgba(255,255,255,0.82)',
        borderRadius: '20px',
        padding: isDesktop ? '20px' : '16px',
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.9)',
        boxShadow: 'var(--shadow-md)',
        willChange: 'transform, box-shadow',
        animation: `card-in 0.55s var(--ios-spring) ${staggerDelay}s both`
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.005)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: isDesktop ? '16px' : '12px' }}>
        <div style={{
          width: isDesktop ? '36px' : '28px', 
          height: isDesktop ? '36px' : '28px', 
          borderRadius: '10px',
          background: index < 3 
            ? (isCrypto ? 'linear-gradient(135deg, #f59e0b, #fbbf24)' : 'linear-gradient(135deg, #1e3a8a, #3b82f6)') 
            : 'rgba(0,0,0,0.05)',
          color: index < 3 ? 'white' : '#64748b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: isDesktop ? '14px' : '12px', fontWeight: '700'
        }}>{index + 1}</div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: isDesktop ? '17px' : '15px', fontWeight: '600', color: '#1e3a8a' }}>{asset.name}</span>
            <span style={{ fontSize: isDesktop ? '18px' : '16px' }}>{info.emoji}</span>
            <span style={{
              fontSize: '10px', padding: '3px 8px', borderRadius: '6px',
              background: isCrypto ? 'rgba(245,158,11,0.12)' : 'rgba(59,130,246,0.1)',
              color: isCrypto ? '#d97706' : '#3b82f6', fontWeight: '500'
            }}>{isCrypto ? '🪙 קריפטו' : '📊 מניה'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: isDesktop ? '14px' : '12px', color: '#64748b' }}>
            <span style={{ fontWeight: '500' }}>{formatPrice(asset.price, asset.type, asset.exchange)}</span>
            <span style={{ color: isUp ? '#10b981' : '#ef4444', fontWeight: '600' }}>
              {isUp ? '↑' : '↓'} {Math.abs(asset.change)}%
            </span>
          </div>
        </div>

        <Sparkline data={asset.history} color={isUp ? '#10b981' : '#ef4444'} width={isDesktop ? 80 : 60} height={isDesktop ? 36 : 28} />

        <div style={{
          width: isDesktop ? '52px' : '42px', 
          height: isDesktop ? '52px' : '42px', 
          borderRadius: '50%',
          background: `${info.color}15`, 
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: isDesktop ? '18px' : '15px', fontWeight: '700', color: info.color }}>{asset.score}</span>
        </div>

        <span style={{ color: '#cbd5e1', fontSize: '16px' }}>←</span>
      </div>
    </div>
  );
};

// ============================================================
// STOCKS SCREEN
// ============================================================

const StocksScreen = ({ onSelect, isDesktop }) => {
  const [query, setQuery] = useState('');
  const sorted = [...stocksData].sort((a, b) => b.score - a.score);

  const q = query.toLowerCase().trim();
  const filtered = q === '' ? sorted : sorted.filter(asset =>
    asset.name.toLowerCase().includes(q) ||
    asset.symbol.toLowerCase().includes(q)
  );

  return (
    <div className="bb-tab-content" style={{
      padding: isDesktop ? '32px 48px' : '20px',
      paddingBottom: '120px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: isDesktop ? '24px' : '18px' }}>
        <h2 style={{ fontSize: isDesktop ? '32px' : '22px', color: '#1e3a8a', fontWeight: '700', marginBottom: '8px' }}>
          📊 מניות
        </h2>
        <p style={{ color: '#64748b', fontSize: isDesktop ? '16px' : '14px' }}>חלק מחברות אמיתיות</p>
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="חיפוש מניה לפי שם או סמל..."
        isDesktop={isDesktop}
      />

      <div style={{
        background: 'rgba(59,130,246,0.08)', borderRadius: '16px', padding: isDesktop ? '16px 24px' : '14px',
        marginBottom: isDesktop ? '20px' : '16px', fontSize: isDesktop ? '15px' : '13px', color: '#3b82f6', textAlign: 'center'
      }}>
        💡 מניה = קונים חלק קטן מחברה. אם החברה מצליחה - מרוויחים!
      </div>

      {q !== '' && (
        <div style={{
          fontSize: isDesktop ? '13px' : '12px',
          color: '#64748b',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          נמצאו {filtered.length} תוצאות עבור "{query}"
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: isDesktop ? '60px 24px' : '40px 16px',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '20px',
          marginTop: '8px'
        }}>
          <div style={{ fontSize: isDesktop ? '48px' : '40px', marginBottom: '12px' }}>🔍</div>
          <div style={{ fontSize: isDesktop ? '18px' : '16px', fontWeight: '600', color: '#1e3a8a', marginBottom: '6px' }}>
            לא נמצאו תוצאות
          </div>
          <div style={{ fontSize: isDesktop ? '14px' : '13px', color: '#64748b' }}>
            נסי לחפש שם אחר או סמל
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isDesktop ? '12px' : '10px'
        }}>
          {filtered.map((asset, i) => (
            <AssetCard key={asset.id} asset={asset} index={i} onClick={() => onSelect(asset)} isDesktop={isDesktop} />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================
// CRYPTO SCREEN
// ============================================================

const CryptoScreen = ({ onSelect, isDesktop }) => {
  const [query, setQuery] = useState('');
  const sorted = [...cryptoData].sort((a, b) => b.score - a.score);

  const q = query.toLowerCase().trim();
  const filtered = q === '' ? sorted : sorted.filter(asset =>
    asset.name.toLowerCase().includes(q) ||
    asset.symbol.toLowerCase().includes(q)
  );

  return (
    <div className="bb-tab-content" style={{
      padding: isDesktop ? '32px 48px' : '20px',
      paddingBottom: '120px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: isDesktop ? '24px' : '18px' }}>
        <h2 style={{ fontSize: isDesktop ? '32px' : '22px', color: '#1e3a8a', fontWeight: '700', marginBottom: '8px' }}>
          🪙 קריפטו
        </h2>
        <p style={{ color: '#64748b', fontSize: isDesktop ? '16px' : '14px' }}>מטבעות דיגיטליים</p>
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="חיפוש מטבע לפי שם או סמל..."
        isDesktop={isDesktop}
      />

      <div style={{
        background: 'rgba(239,68,68,0.08)', borderRadius: '16px', padding: isDesktop ? '16px 24px' : '14px',
        marginBottom: isDesktop ? '20px' : '16px', fontSize: isDesktop ? '15px' : '13px', color: '#dc2626', textAlign: 'center'
      }}>
        ⚠️ קריפטו מאוד מסוכן! רק כסף שמוכנים להפסיד
      </div>

      {q !== '' && (
        <div style={{
          fontSize: isDesktop ? '13px' : '12px',
          color: '#64748b',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          נמצאו {filtered.length} תוצאות עבור "{query}"
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: isDesktop ? '60px 24px' : '40px 16px',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '20px',
          marginTop: '8px'
        }}>
          <div style={{ fontSize: isDesktop ? '48px' : '40px', marginBottom: '12px' }}>🔍</div>
          <div style={{ fontSize: isDesktop ? '18px' : '16px', fontWeight: '600', color: '#1e3a8a', marginBottom: '6px' }}>
            לא נמצאו תוצאות
          </div>
          <div style={{ fontSize: isDesktop ? '14px' : '13px', color: '#64748b' }}>
            נסי לחפש שם אחר או סמל
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: isDesktop ? '12px' : '10px' }}>
          {filtered.map((asset, i) => (
            <AssetCard key={asset.id} asset={asset} index={i} onClick={() => onSelect(asset)} isDesktop={isDesktop} />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================
// COMPARE SCREEN
// ============================================================

const CompareScreen = ({ isDesktop }) => {
  const comparisons = [
    { topic: 'מה זה?', stock: 'חלק מחברה אמיתית', crypto: 'קוד מחשב דיגיטלי' },
    { topic: 'מה מאחורי?', stock: 'עובדים, מוצרים, רווחים', crypto: 'אמונה של אנשים בלבד' },
    { topic: 'מי שולט?', stock: 'יש חוקים ורגולציה', crypto: 'כמעט בלי פיקוח' },
    { topic: 'סיכון', stock: 'בינוני - עד 30%', crypto: 'גבוה מאוד - עד 80%!' },
    { topic: 'שעות מסחר', stock: 'רק בשעות הבורסה', crypto: '24/7 כל הזמן' },
    { topic: 'מינימום', stock: 'בד"כ $100', crypto: 'אפילו $1' },
    { topic: 'היסטוריה', stock: '100+ שנים', crypto: '15 שנים בלבד' },
  ];

  return (
    <div className="bb-tab-content" style={{
      padding: isDesktop ? '32px 48px' : '20px',
      paddingBottom: '120px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: isDesktop ? '32px' : '24px' }}>
        <h2 style={{ fontSize: isDesktop ? '32px' : '22px', color: '#1e3a8a', fontWeight: '700', marginBottom: '8px' }}>
          ⚖️ מניות VS קריפטו
        </h2>
        <p style={{ color: '#64748b', fontSize: isDesktop ? '16px' : '14px' }}>מה ההבדל ביניהם?</p>
      </div>

      <div style={{ display: 'flex', gap: isDesktop ? '16px' : '10px', marginBottom: isDesktop ? '28px' : '20px' }}>
        <div style={{
          flex: 1, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          borderRadius: '20px', padding: isDesktop ? '24px' : '18px', textAlign: 'center', color: 'white'
        }}>
          <div style={{ fontSize: isDesktop ? '48px' : '36px', marginBottom: '8px' }}>📊</div>
          <div style={{ fontSize: isDesktop ? '20px' : '16px', fontWeight: '700' }}>מניות</div>
          <div style={{ fontSize: isDesktop ? '14px' : '12px', opacity: 0.9, marginTop: '4px' }}>יותר בטוח</div>
        </div>
        <div style={{
          flex: 1, background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
          borderRadius: '20px', padding: isDesktop ? '24px' : '18px', textAlign: 'center', color: 'white'
        }}>
          <div style={{ fontSize: isDesktop ? '48px' : '36px', marginBottom: '8px' }}>🪙</div>
          <div style={{ fontSize: isDesktop ? '20px' : '16px', fontWeight: '700' }}>קריפטו</div>
          <div style={{ fontSize: isDesktop ? '14px' : '12px', opacity: 0.9, marginTop: '4px' }}>יותר מסוכן</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: isDesktop ? '12px' : '10px' }}>
        {comparisons.map((row, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
            borderRadius: '16px', padding: isDesktop ? '20px' : '16px',
            border: '1px solid rgba(255,255,255,0.9)'
          }}>
            <div style={{ 
              fontSize: isDesktop ? '14px' : '12px', 
              fontWeight: '600', 
              color: '#1e3a8a', 
              marginBottom: '12px', 
              textAlign: 'center' 
            }}>{row.topic}</div>
            <div style={{ display: 'flex', gap: isDesktop ? '12px' : '8px' }}>
              <div style={{
                flex: 1, background: 'rgba(59,130,246,0.08)', borderRadius: '12px',
                padding: isDesktop ? '14px' : '10px', fontSize: isDesktop ? '14px' : '12px', 
                color: '#334155', textAlign: 'center'
              }}>
                <span style={{ color: '#3b82f6', marginLeft: '6px' }}>📊</span>{row.stock}
              </div>
              <div style={{
                flex: 1, background: 'rgba(245,158,11,0.08)', borderRadius: '12px',
                padding: isDesktop ? '14px' : '10px', fontSize: isDesktop ? '14px' : '12px', 
                color: '#334155', textAlign: 'center'
              }}>
                <span style={{ color: '#f59e0b', marginLeft: '6px' }}>🪙</span>{row.crypto}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: isDesktop ? '24px' : '20px', 
        background: 'rgba(16,185,129,0.1)', 
        borderRadius: '16px',
        padding: isDesktop ? '20px' : '16px', 
        textAlign: 'center'
      }}>
        <span style={{ fontSize: isDesktop ? '16px' : '14px', color: '#10b981', fontWeight: '500' }}>
          💡 טיפ: רוב הכסף במניות, קצת בקריפטו (אם בכלל)
        </span>
      </div>
    </div>
  );
};

// ============================================================
// EXCHANGES SCREEN
// ============================================================

const ExchangesScreen = ({ onSelect, isDesktop }) => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? exchangesData : exchangesData.filter(e => e.type === filter);

  return (
    <div className="bb-tab-content" style={{
      padding: isDesktop ? '32px 48px' : '20px',
      paddingBottom: '120px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: isDesktop ? '32px' : '24px' }}>
        <h2 style={{ fontSize: isDesktop ? '32px' : '22px', color: '#1e3a8a', fontWeight: '700', marginBottom: '8px' }}>
          🏛️ בורסות
        </h2>
        <p style={{ color: '#64748b', fontSize: isDesktop ? '16px' : '14px' }}>איפה קונים?</p>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: isDesktop ? '28px' : '20px' }}>
        {[
          { id: 'all', label: 'הכל' },
          { id: 'stock', label: '📊 מניות' },
          { id: 'crypto', label: '🪙 קריפטו' }
        ].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{
            padding: isDesktop ? '12px 24px' : '10px 18px', 
            border: 'none', 
            borderRadius: '24px',
            background: filter === f.id ? 'linear-gradient(135deg, #1e3a8a, #3b82f6)' : 'rgba(255,255,255,0.8)',
            color: filter === f.id ? 'white' : '#64748b',
            fontSize: isDesktop ? '15px' : '13px', 
            fontWeight: '500', 
            cursor: 'pointer',
            boxShadow: filter === f.id ? '0 4px 15px rgba(30,58,138,0.3)' : 'none',
            transition: 'all 0.2s'
          }}>{f.label}</button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr', 
        gap: isDesktop ? '16px' : '12px' 
      }}>
        {filtered.map(exchange => (
          <div key={exchange.id} onClick={() => onSelect(exchange)} style={{
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
            borderRadius: '20px', padding: isDesktop ? '24px' : '18px', cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.9)',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(59,130,246,0.12)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: isDesktop ? '56px' : '48px', 
                height: isDesktop ? '56px' : '48px', 
                borderRadius: '16px',
                background: `${exchange.color}15`, 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isDesktop ? '28px' : '24px'
              }}>{exchange.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: isDesktop ? '18px' : '16px', fontWeight: '600', color: '#1e3a8a' }}>{exchange.name}</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{exchange.country}</span>
                </div>
                <p style={{ fontSize: isDesktop ? '14px' : '12px', color: '#64748b', margin: 0 }}>{exchange.forWho}</p>
              </div>

              <div style={{
                width: isDesktop ? '48px' : '40px', 
                height: isDesktop ? '48px' : '40px', 
                borderRadius: '50%',
                background: `${exchange.color}20`, 
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontSize: isDesktop ? '16px' : '14px', fontWeight: '700', color: exchange.color }}>{exchange.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// LEARN SCREEN
// ============================================================

// Pick a "Stock of the Day" deterministically (same for everyone, different each day).
// Keeps it fresh without changing mid-session.
const getStockOfTheDay = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const eligible = stocksData.filter(s => s.score >= 70);
  return eligible[dayOfYear % eligible.length];
};

const StockOfTheDay = ({ stock, onOpen, isDesktop }) => {
  const info = getScoreInfo(stock.score);
  const isUp = stock.change >= 0;
  return (
    <div onClick={onOpen} className="bb-press" style={{
      cursor: 'pointer',
      borderRadius: '24px',
      padding: isDesktop ? '26px' : '20px',
      marginBottom: isDesktop ? '32px' : '24px',
      background: 'linear-gradient(140deg, #0c1e4e 0%, #1e3a8a 55%, #3b82f6 100%)',
      color: 'white',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.1), 0 24px 64px rgba(30,58,138,0.25)',
      position: 'relative', overflow: 'hidden',
      animation: 'slide-up-in 0.6s var(--ios-spring) both'
    }}>
      {/* Decorative orb */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', position: 'relative' }}>
        <span style={{
          fontSize: '11px', letterSpacing: '2px', fontWeight: 600,
          padding: '5px 12px', borderRadius: '20px',
          background: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.22)'
        }}>🔥 המניה של היום</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap', position: 'relative' }}>
        <div>
          <div style={{ fontSize: isDesktop ? '32px' : '26px', fontWeight: 700, letterSpacing: '-0.02em' }}>{stock.name}</div>
          <div style={{ opacity: 0.78, fontSize: '14px', marginTop: '2px' }}>{stock.symbol} · {stock.exchange}</div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: isDesktop ? '28px' : '22px', fontWeight: 700 }}>{formatPrice(stock.price, stock.type, stock.exchange)}</div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: isUp ? '#86efac' : '#fca5a5' }}>
            {isUp ? '↑' : '↓'} {Math.abs(stock.change)}%
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '18px', padding: '14px 16px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '16px',
        display: 'flex', alignItems: 'center', gap: '14px',
        border: '1px solid rgba(255,255,255,0.14)',
        position: 'relative'
      }}>
        <Sparkline data={stock.history} color="rgba(255,255,255,0.95)" width={isDesktop ? 140 : 96} height={42} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', opacity: 0.7, letterSpacing: '1px' }}>הציון שלנו</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#86efac' }}>{stock.score} <span style={{ fontSize: '14px', opacity: 0.7 }}>/100</span></div>
        </div>
      </div>

      <div style={{ marginTop: '18px', position: 'relative' }}>
        <div style={{ fontSize: '12px', opacity: 0.72, marginBottom: '6px', letterSpacing: '0.5px' }}>מה שתפס לנו את העין</div>
        <p style={{ margin: 0, fontSize: isDesktop ? '16px' : '15px', lineHeight: 1.6, opacity: 0.95 }}>
          {stock.reason}
        </p>
      </div>

      <div style={{
        marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative'
      }}>
        <span style={{ fontSize: '11px', opacity: 0.7 }}>💡 זו דעה אישית, לא ייעוץ השקעות</span>
        <span style={{
          fontSize: '14px', fontWeight: 600,
          padding: '10px 18px', borderRadius: '14px',
          background: 'rgba(255,255,255,0.18)',
          border: '1px solid rgba(255,255,255,0.28)'
        }}>קרא עוד ←</span>
      </div>
    </div>
  );
};

const LearnScreen = ({ onSelect, onSelectStock, isDesktop }) => (
  <div className="bb-tab-content" style={{
    padding: isDesktop ? '32px 48px' : '20px',
    paddingBottom: '120px',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <div style={{ textAlign: 'center', marginBottom: isDesktop ? '28px' : '22px' }}>
      <h2 style={{ fontSize: isDesktop ? '32px' : '22px', color: '#1e3a8a', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.02em' }}>
        📚 למד
      </h2>
      <p style={{ color: '#64748b', fontSize: isDesktop ? '16px' : '14px' }}>הכל בשפה פשוטה</p>
    </div>

    <StockOfTheDay stock={getStockOfTheDay()} onOpen={() => onSelectStock(getStockOfTheDay())} isDesktop={isDesktop} />

    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr', 
      gap: isDesktop ? '16px' : '12px' 
    }}>
      {lessonsData.map((lesson, i) => (
        <div key={lesson.id} onClick={() => onSelect(lesson)} style={{
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
          borderRadius: '20px', padding: isDesktop ? '24px' : '18px', cursor: 'pointer',
          border: '1px solid rgba(255,255,255,0.9)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(59,130,246,0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: isDesktop ? '56px' : '48px', 
              height: isDesktop ? '56px' : '48px', 
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: isDesktop ? '26px' : '22px'
            }}>{lesson.icon}</div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: isDesktop ? '18px' : '16px', fontWeight: '600', color: '#1e3a8a', marginBottom: '4px' }}>{lesson.title}</div>
              <p style={{ fontSize: isDesktop ? '14px' : '12px', color: '#64748b', margin: 0 }}>{lesson.subtitle}</p>
            </div>

            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6' }}>{i + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ============================================================
// ASSET DETAIL
// ============================================================

const AssetDetail = ({ asset, onBack, isDesktop }) => {
  const [tab, setTab] = useState(0);
  const info = getScoreInfo(asset.score);
  const isUp = asset.change >= 0;
  const isCrypto = asset.type === 'crypto';

  return (
    <div style={{ paddingBottom: '120px' }}>
      <Header title={asset.name} showBack onBack={onBack} isDesktop={isDesktop} />

      <div style={{ 
        padding: isDesktop ? '32px 48px' : '20px',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {/* Hero */}
        <div style={{
          background: isCrypto 
            ? 'linear-gradient(160deg, #f59e0b, #fbbf24)' 
            : 'linear-gradient(160deg, #1e3a8a, #3b82f6)',
          borderRadius: '24px', padding: isDesktop ? '32px' : '24px', marginBottom: '20px', color: 'white'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: isDesktop ? '32px' : '26px', fontWeight: '700', marginBottom: '4px' }}>{asset.name}</div>
              <div style={{ opacity: 0.9, fontSize: '14px' }}>
                {asset.symbol} · {isCrypto ? '🪙 קריפטו' : '📊 מניה'}
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: isDesktop ? '32px' : '26px', fontWeight: '700' }}>{formatPrice(asset.price, asset.type, asset.exchange)}</div>
              <div style={{ fontSize: '16px', color: isUp ? '#86efac' : '#fca5a5', fontWeight: '600' }}>
                {isUp ? '↑' : '↓'} {Math.abs(asset.change)}%
              </div>
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)', borderRadius: '16px', padding: '16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <Sparkline data={asset.history} color="rgba(255,255,255,0.9)" width={isDesktop ? 160 : 120} height={50} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '40px' }}>{info.emoji}</span>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>ציון</div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>{asset.score}</div>
              </div>
            </div>
          </div>
        </div>

        {isCrypto && (
          <div style={{
            background: 'rgba(239,68,68,0.1)', borderRadius: '14px', padding: '14px',
            marginBottom: '20px', textAlign: 'center'
          }}>
            <span style={{ fontSize: '14px', color: '#dc2626' }}>⚠️ קריפטו מאוד מסוכן - רק כסף שמוכנים להפסיד!</span>
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.04)', borderRadius: '14px', padding: '4px', marginBottom: '20px' }}>
          {['סקירה', 'למה?', 'מסקנה'].map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              flex: 1, padding: '12px', border: 'none', borderRadius: '12px',
              background: tab === i ? 'white' : 'transparent',
              color: tab === i ? '#1e3a8a' : '#64748b',
              fontSize: '14px', fontWeight: tab === i ? '600' : '400', cursor: 'pointer',
              boxShadow: tab === i ? '0 2px 10px rgba(0,0,0,0.06)' : 'none'
            }}>{t}</button>
          ))}
        </div>

        {/* Content */}
        <div style={{ 
          background: 'rgba(255,255,255,0.85)', 
          borderRadius: '20px', 
          padding: isDesktop ? '28px' : '22px', 
          minHeight: '200px' 
        }}>
          {tab === 0 && (
            <div style={{ textAlign: 'center' }}>
              <AnimatedScore score={asset.score} size={isDesktop ? 130 : 110} />
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { label: 'סוג', value: isCrypto ? '🪙 קריפטו' : '📊 מניה' },
                  { label: 'סיכון', value: asset.risk === 'low' ? 'נמוך' : asset.risk === 'medium' ? 'בינוני' : 'גבוה!', color: asset.risk === 'high' ? '#ef4444' : undefined },
                ].map(item => (
                  <div key={item.label} style={{ padding: '12px 20px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{item.label}</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: item.color || '#1e3a8a' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {/* ============ אחוזי שינוי לפי תקופה ============ */}
              <div style={{ marginTop: '28px' }}>
                <h4 style={{ fontSize: '14px', color: '#1e3a8a', fontWeight: '600', marginBottom: '14px' }}>
                  📈 שינוי באחוזים
                </h4>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {[
                    { label: 'יומי', value: asset.change },
                    { label: 'שבועי', value: asset.changeWeek },
                    { label: 'חודשי', value: asset.changeMonth },
                    { label: 'שנתי', value: asset.changeYear },
                  ].map(item => {
                    const isPositive = item.value >= 0;
                    const color = isPositive ? '#10b981' : '#ef4444';
                    return (
                      <div key={item.label} style={{
                        minWidth: '84px',
                        padding: '14px 16px',
                        background: `${color}12`,
                        borderRadius: '14px',
                        border: `1px solid ${color}25`
                      }}>
                        <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '6px' }}>{item.label}</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color }}>
                          {isPositive ? '↑' : '↓'} {Math.abs(item.value).toFixed(1)}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div>
              <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#334155', marginBottom: '20px', paddingRight: '14px', borderRight: `4px solid ${isCrypto ? '#f59e0b' : '#3b82f6'}` }}>
                {asset.reason}
              </p>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#10b981', marginBottom: '10px' }}>✓ יתרונות</div>
                {asset.good.map((item, i) => (
                  <div key={i} style={{ padding: '12px 16px', background: 'rgba(16,185,129,0.08)', borderRadius: '12px', marginBottom: '8px', fontSize: '14px' }}>{item}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>✗ חסרונות</div>
                {asset.bad.map((item, i) => (
                  <div key={i} style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', borderRadius: '12px', marginBottom: '8px', fontSize: '14px' }}>{item}</div>
                ))}
              </div>
            </div>
          )}

          {tab === 2 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>{info.emoji}</div>
              <h3 style={{ fontSize: '24px', color: info.color, fontWeight: '700', marginBottom: '16px' }}>
                {asset.score >= 75 ? 'נראה טוב!' : asset.score >= 50 ? 'אפשרי, אבל בזהירות' : 'לא מומלץ כרגע'}
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: '0 auto 24px', maxWidth: '320px' }}>
                {asset.score >= 75 
                  ? (isCrypto ? 'ציון גבוה לקריפטו, אבל עדיין מסוכן! רק סכום קטן.' : 'נראה טוב להשקעה. עדיין חשוב לפזר!')
                  : asset.score >= 50 ? 'יש פוטנציאל אבל גם סיכונים. זהירות.'
                  : 'עדיף לחכות או לחפש אפשרויות אחרות.'
                }
              </p>
              <div style={{ padding: '16px', background: `${info.color}15`, borderRadius: '16px', display: 'inline-block' }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>ציון סופי</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: info.color }}>{asset.score}/100</div>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8' }}>💡 זו דעה אישית שלנו - לא ייעוץ השקעות. כל החלטה על אחריותכם</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// EXCHANGE DETAIL
// ============================================================

const ExchangeDetail = ({ exchange, onBack, isDesktop }) => (
  <div style={{ paddingBottom: '120px' }}>
    <Header title={exchange.name} showBack onBack={onBack} isDesktop={isDesktop} />

    <div style={{ 
      padding: isDesktop ? '32px 48px' : '20px',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      <div style={{
        background: `linear-gradient(160deg, ${exchange.color}, ${exchange.color}cc)`,
        borderRadius: '24px', padding: isDesktop ? '32px' : '24px', marginBottom: '20px', color: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px'
          }}>{exchange.icon}</div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: '700' }}>{exchange.name}</div>
            <div style={{ opacity: 0.9, fontSize: '14px' }}>{exchange.country} · {exchange.nameEn}</div>
          </div>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.7', margin: 0, opacity: 0.95 }}>{exchange.description}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '16px', padding: '18px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#64748b' }}>מינימום</div>
          <div style={{ fontSize: '22px', fontWeight: '700', color: '#1e3a8a' }}>{exchange.minInvest}</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '16px', padding: '18px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#64748b' }}>שעות</div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>{exchange.hours}</div>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '20px', padding: '20px', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e3a8a', marginBottom: '14px' }}>🏢 מה אפשר לקנות</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {exchange.companies.map(c => (
            <span key={c} style={{ padding: '8px 16px', background: `${exchange.color}15`, borderRadius: '20px', fontSize: '14px', color: exchange.color, fontWeight: '500' }}>{c}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '20px', padding: '20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#10b981', marginBottom: '10px' }}>✓ יתרונות</div>
          {exchange.pros.map((p, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'rgba(16,185,129,0.08)', borderRadius: '12px', marginBottom: '8px', fontSize: '14px' }}>{p}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>✗ חסרונות</div>
          {exchange.cons.map((c, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', borderRadius: '12px', marginBottom: '8px', fontSize: '14px' }}>{c}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ============================================================
// LESSON DETAIL
// ============================================================

const LessonDetail = ({ lesson, onBack, isDesktop }) => (
  <div style={{ paddingBottom: '120px' }}>
    <Header title={lesson.title} showBack onBack={onBack} isDesktop={isDesktop} />

    <div style={{ 
      padding: isDesktop ? '32px 48px' : '20px',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      <div style={{
        background: 'linear-gradient(160deg, #1e3a8a, #3b82f6)',
        borderRadius: '24px', padding: isDesktop ? '36px' : '28px', marginBottom: '24px', color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>{lesson.icon}</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>{lesson.title}</h2>
        <p style={{ opacity: 0.9, fontSize: '16px', margin: 0 }}>{lesson.subtitle}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {lesson.content.map((item, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.85)', borderRadius: '18px', padding: '20px',
            border: '1px solid rgba(255,255,255,0.9)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '14px', fontWeight: '700', flexShrink: 0
              }}>{i + 1}</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a', margin: '0 0 10px 0' }}>{item.q}</h4>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line' }}>{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================
// MAIN APP
// ============================================================

const App = () => {
  // Splash shown on every page load/refresh.
  const [showSplash, setShowSplash] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('stocks');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedAsset(null);
    setSelectedExchange(null);
    setSelectedLesson(null);
  };

  const renderContent = () => {
    if (selectedAsset)    return <AssetDetail    asset={selectedAsset}       onBack={() => setSelectedAsset(null)}    isDesktop={isDesktop} />;
    if (selectedExchange) return <ExchangeDetail exchange={selectedExchange} onBack={() => setSelectedExchange(null)} isDesktop={isDesktop} />;
    if (selectedLesson)   return <LessonDetail   lesson={selectedLesson}     onBack={() => setSelectedLesson(null)}   isDesktop={isDesktop} />;

    switch (activeTab) {
      case 'stocks':    return <StocksScreen    onSelect={setSelectedAsset}    isDesktop={isDesktop} />;
      case 'crypto':    return <CryptoScreen    onSelect={setSelectedAsset}    isDesktop={isDesktop} />;
      case 'compare':   return <CompareScreen                                  isDesktop={isDesktop} />;
      case 'exchanges': return <ExchangesScreen onSelect={setSelectedExchange} isDesktop={isDesktop} />;
      case 'learn':     return <LearnScreen     onSelect={setSelectedLesson}   onSelectStock={setSelectedAsset} isDesktop={isDesktop} />;
      default:          return <StocksScreen    onSelect={setSelectedAsset}    isDesktop={isDesktop} />;
    }
  };

  return (
    <div dir="rtl" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 50%, #f8fafc 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif'
    }}>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <HelpFAB onClick={() => setHelpOpen(true)} isDesktop={isDesktop} />
      <HelpBottomSheet open={helpOpen} onClose={() => setHelpOpen(false)} isDesktop={isDesktop} />
      {renderContent()}
      <FloatingTabBar active={activeTab} onChange={handleTabChange} isDesktop={isDesktop} />
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
