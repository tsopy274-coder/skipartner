export interface Article {
  id: string;
  slug: string;
  title: {
    el: string;
    en: string;
  };
  excerpt: {
    el: string;
    en: string;
  };
  content: {
    el: string;
    en: string;
  };
  image: string;
  date: string;
  author: string;
  category: string;
}

export const defaultArticles: Article[] = [
  {
    id: '1',
    slug: 'saronikos-hidden-gems',
    title: {
      el: 'Κρυμμένοι Παράδεισοι του Σαρωνικού',
      en: 'Hidden Paradises of the Saronic Gulf'
    },
    excerpt: {
      el: 'Ανακαλύψτε τους μυστικούς όρμους και τις απάτητες παραλίες που μόνο με σκάφος μπορείς να φτάσεις.',
      en: 'Discover secret coves and untouched beaches only accessible by boat.'
    },
    content: {
      el: `<p>Ο Σαρωνικός κόλπος κρύβει θησαυρούς που λίγοι γνωρίζουν. Με το THEMIS IV έχουμε εξερευνήσει κάθε γωνιά του.</p>
      <h3>Η Μονή - Το μυστικό της Αίγινας</h3>
      <p>Ένα ακατοίκητο νησί με κρυστάλλινα νερά και ελάφια που κολυμπούν δίπλα στο σκάφος. Ιδανικό για snorkeling και απόλυτη ηρεμία.</p>
      <h3>Δοκός - Η αρχαία βυθισμένη πόλη</h3>
      <p>Στα νερά της Δοκού βρίσκεται το αρχαιότερο ναυάγιο του κόσμου (2700 π.Χ.). Τα νερά είναι τόσο διαυγή που βλέπεις τον βυθό στα 15 μέτρα.</p>`,
      en: `<p>The Saronic Gulf hides treasures that few know about. With THEMIS IV we have explored every corner.</p>
      <h3>Moni - Aegina's Secret</h3>
      <p>An uninhabited island with crystal waters and deer that swim next to the boat. Perfect for snorkeling and absolute tranquility.</p>
      <h3>Dokos - The Ancient Sunken City</h3>
      <p>In Dokos waters lies the world's oldest shipwreck (2700 BC). The water is so clear you can see the bottom at 15 meters.</p>`
    },
    image: '/images/hero-yacht.jpg',
    date: '2024-06-15',
    author: 'Captain Haris',
    category: 'Destinations'
  },
  {
    id: '2',
    slug: 'boat-share-explained',
    title: {
      el: 'Boat Share: Ο Οικονομικός Τρόπος',
      en: 'Boat Share: The Affordable Way'
    },
    excerpt: {
      el: 'Πώς μπορείς να απολαύσεις πολυτελές yachting πληρώνοντας μόνο τα πραγματικά έξοδα.',
      en: 'How you can enjoy luxury yachting by paying only actual expenses.'
    },
    content: {
      el: `<p>Πολλοί πιστεύουν ότι το yachting είναι μόνο για εκατομμυριούχους. Με το boat share, αυτό αλλάζει.</p>
      <h3>Τι πληρώνεις</h3>
      <ul><li><strong>Καύσιμα:</strong> ~120 λίτρα/ώρα</li><li><strong>Λιμενικά:</strong> 20-50€</li></ul>
      <p>Για 2 άτομα σε 4ήμερη: ~800-1000€ ανά άτομο για ΟΛΑ.</p>`,
      en: `<p>Many believe yachting is only for millionaires. With boat share, that changes.</p>
      <h3>What you pay</h3>
      <ul><li><strong>Fuel:</strong> ~120 liters/hour</li><li><strong>Marina:</strong> €20-50</li></ul>
      <p>For 2 people 4-day: ~€800-1000 per person for EVERYTHING.</p>`
    },
    image: '/images/greek-islands.jpg',
    date: '2024-05-28',
    author: 'Captain Haris',
    category: 'Boat Share'
  },
  {
    id: '3',
    slug: 'themis-iv-story',
    title: {
      el: 'THEMIS IV: Η Ιστορία',
      en: 'THEMIS IV: The Story'
    },
    excerpt: {
      el: 'Από την πρώτη μέρα που την είδα, ήξερα ότι ήταν κάτι ξεχωριστό.',
      en: 'From the first day I saw her, I knew she was special.'
    },
    content: {
      el: `<p>Το THEMIS IV δεν είναι απλά ένα σκάφος. Είναι το σπίτι μου εδώ και 8 χρόνια.</p>
      <h3>Ιταλική φινέτσα</h3>
      <p>Κατασκευασμένο στην Ιταλία με Volvo Penta IPS 600.</p>`,
      en: `<p>THEMIS IV is not just a boat. It's my home for 8 years.</p>
      <h3>Italian finesse</h3>
      <p>Built in Italy with Volvo Penta IPS 600.</p>`
    },
    image: '/images/cabin.jpg',
    date: '2024-04-10',
    author: 'Captain Haris',
    category: 'The Yacht'
  }
];

const STORAGE_KEY = 'skipartner_articles';

export const getArticles = (): Article[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  return defaultArticles;
};

export const saveArticles = (articles: Article[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
};

export const addArticle = (article: Omit<Article, 'id' | 'date'>) => {
  const articles = getArticles();
  const newArticle: Article = {
    ...article,
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0]
  };
  const updated = [newArticle, ...articles];
  saveArticles(updated);
  return newArticle;
};

export const updateArticle = (id: string, updates: Partial<Article>) => {
  const articles = getArticles();
  const updated = articles.map(a => a.id === id ? { ...a, ...updates } : a);
  saveArticles(updated);
};

export const deleteArticle = (id: string) => {
  const articles = getArticles();
  const updated = articles.filter(a => a.id !== id);
  saveArticles(updated);
};
