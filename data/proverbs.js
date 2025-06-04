const proverbs = [
  {
    id: 1,
    text: "خانه‌ای که مادر نباشد خانه نیست",
    text_pashto: "کور چې مور پکې نه وي، کور نه وي",
    translation: "A house without a mother is not a home.",
    meaning: "A mother is the heart of the home; her absence takes away its warmth and soul.",
    category: "family"
  },
  {
    id: 2,
    text: "دل به دل راه دارد",
    text_pashto: "زړه تر زړه لاره لري",
    translation: "Heart speaks to heart.",
    meaning: "Emotions and feelings can be shared without words; true connection needs no language.",
    category: "emotion"
  },
  {
    id: 3,
    text: "هر سخن جایی و هر نکته مکانی دارد",
    text_pashto: "هره خبره خپل وخت او خپل ځای لري",
    translation: "Every word has its place, and every point its time.",
    meaning: "Wisdom lies in knowing when and where to speak; context matters.",
    category: "wisdom"
  },
  {
    id: 4,
    text_dari: "چشم حسود کور",
    text_pashto: "د حسود سترګې دې ړندې شي",
    translation_en: "May the envious go blind.",
    meaning: "Used to ward off jealousy and express disdain for envious people.",
    category: "envy"
  },
  {
    id: 5,
    text_dari: "دشمن دانا به از نادان دوست",
    text_pashto: "عاقل دښمن تر ناپوه ملګري غوره دی",
    translation_en: "A wise enemy is better than a foolish friend.",
    meaning: "An ignorant friend can do more harm than a clever enemy.",
    category: "friendship"
  },
  {
    id: 6,
    text_dari: "ماه همیشه زیر ابر نمی‌ماند",
    text_pashto: "سپوږمۍ همیشه د ورېځو شاته نه پټېږي",
    translation_en: "The moon doesn't stay behind the clouds forever.",
    meaning: "Hard times or truths cannot be hidden forever; clarity will eventually come.",
    category: "hope"
  },
  {
    id: 7,
    text_dari: "مرغ همسایه غاز است",
    text_pashto: "د ګاونډي چرګه ورته الوزه ښکاري",
    translation_en: "The neighbor's chicken seems like a goose.",
    meaning: "People often think others have it better, even when it’s not true.",
    category: "envy"
  },
  {
    id: 8,
    text_dari: "هر که طاووس خواهد جور هندوستان کشد",
    text_pashto: "څوک چې طاووس غواړي، د هندستان کړاوونه به زغمي",
    translation_en: "Whoever wants the peacock must endure the hardships of India.",
    meaning: "Great rewards come with great effort and sacrifice.",
    category: "effort"
  },
  {
    id: 9,
    text_dari: "کل اگر طبیب بودی، سر خود را دوا نمودی",
    text_pashto: "که کل حکیم وای، خپل سر به یې درمل کړی وای",
    translation_en: "If the barber were a doctor, he would have cured his own head.",
    meaning: "People who offer advice should be able to fix their own problems first.",
    category: "irony"
  },
  {
    id: 10,
    text_dari: "با یک گل بهار نمی‌شود",
    text_pashto: "په یوه ګل پسرلی نه راځي",
    translation_en: "One flower does not make spring.",
    meaning: "One small change or effort isn't enough to change the whole situation.",
    category: "reality"
  },
  {
    id: 11,
    text_dari: "نیکی کن و به دریا بینداز",
    text_pashto: "ښه وکړه او بحر ته یې واچوه",
    translation_en: "Do good and throw it into the sea.",
    meaning: "Do good without expecting anything in return.",
    category: "morality"
  },
  {
    id: 12,
    text_dari: "آب که از سر گذشت، چه یک گز چه صد گز",
    text_pashto: "اوبه چې له سره واوړي، نو که یو ګز وي که سل ګزه",
    translation_en: "Once water crosses your head, whether a yard or a hundred, it doesn’t matter.",
    meaning: "Once a situation gets out of hand, the extent no longer matters.",
    category: "resignation"
  },
  {
    id: 13,
    text_dari: "هر چه بکاری، همان را درو می‌کنی",
    text_pashto: "څه چې کرې، هماغه رېبې",
    translation_en: "You reap what you sow.",
    meaning: "Your actions determine your outcomes; what you give is what you get.",
    category: "justice"
  },
  {
    id: 14,
    text_dari: "مار گزیده از ریسمان سیاه می‌ترسد",
    text_pashto: "له مار چیچلي له تور ريسمانه هم ویره لري",
    translation_en: "One bitten by a snake fears even a black rope.",
    meaning: "Someone who’s been hurt before becomes overly cautious afterward.",
    category: "fear"
  },
  {
    id: 15,
    text_dari: "اگر صبر کنی، ز غوره حلوا سازی",
    text_pashto: "که صبر وکړې، له ترشو خوږه حلوه جوړېږي",
    translation_en: "If you wait, even sour grapes turn into sweet halva.",
    meaning: "Patience turns hardship into something beautiful.",
    category: "patience"
  },
  {
    id: 16,
    text_dari: "عقل سالم در بدن سالم است",
    text_pashto: "صحتمند بدن کې سالم عقل وي",
    translation_en: "A sound mind exists in a sound body.",
    meaning: "Physical health is essential for good mental health.",
    category: "health"
  },
  {
    id: 17,
    text_dari: "کار از محکم کاری عیب نمی‌کند",
    text_pashto: "محکم کار له عیب نه ډکېږي",
    translation_en: "Cautious work has no flaws.",
    meaning: "Taking extra care or precautions is never a bad thing.",
    category: "wisdom"
  },
  {
    id: 18,
    text_dari: "دروغ‌گو حافظه ندارد",
    text_pashto: "دروغجن حافظه نه لري",
    translation_en: "A liar has no memory.",
    meaning: "Liars often forget what they’ve said, which leads to contradictions.",

category: "truth"
  },
  {
    id: 19,
    text_dari: "کار امروز را به فردا مگذار",
    text_pashto: "د نن کار سبا ته مه پرېږده",
    translation_en: "Don't leave today’s work for tomorrow.",
    meaning: "Avoid procrastination; do things on time.",
    category: "time"
  },
  {
    id: 20,
    text_dari: "درِ دروازه را می‌شود بست، ولی دهان مردم را نه",
    text_pashto: "د دروازې دروازه بندېږي، خو د خلکو خولې نه بندېږي",
    translation_en: "You can shut a door, but not people’s mouths.",
    meaning: "You can’t stop people from talking or gossiping, no matter what you do.",
    category: "society"
  }
];
export default proverbs;