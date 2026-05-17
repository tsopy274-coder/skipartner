import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Mail, Anchor, Wind, Users, Calendar, MapPin, Check, ChevronRight, Plus, Edit2, Trash2, Save, Eye, Globe, Fuel, Gauge, Bed, Bath, Ship } from 'lucide-react';
import { Lang, useTranslation } from './lib/i18n';
import { getArticles, addArticle, updateArticle, deleteArticle, Article } from './lib/articles';

export default function App() {
  const [lang, setLang] = useState<Lang>('el');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showCMS, setShowCMS] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [viewingArticle, setViewingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', dates: '', guests: '2', type: 'multi', message: '' });
  const [formSent, setFormSent] = useState(false);
  
  const t = useTranslation(lang);

  useEffect(() => {
    setArticles(getArticles());
    const savedLang = localStorage.getItem('skipartner-lang') as Lang;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('skipartner-lang', lang);
  }, [lang]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', phone: '', email: '', dates: '', guests: '2', type: 'multi', message: '' });
    }, 3000);
  };

  const handleSaveArticle = () => {
    if (!editingArticle) return;
    if (editingArticle.id && articles.find(a => a.id === editingArticle.id)) {
      updateArticle(editingArticle.id, editingArticle);
    } else {
      addArticle({
        slug: editingArticle.slug,
        title: editingArticle.title,
        excerpt: editingArticle.excerpt,
        content: editingArticle.content,
        image: editingArticle.image,
        author: editingArticle.author,
        category: editingArticle.category
      });
    }
    setArticles(getArticles());
    setEditingArticle(null);
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === 'el' ? 'Διαγραφή άρθρου;' : 'Delete article?')) {
      deleteArticle(id);
      setArticles(getArticles());
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        * { font-family: 'Outfit', sans-serif; }
        h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }
        .glass { backdrop-filter: blur(16px); background: rgba(10, 22, 40, 0.8); }
        .glass-light { backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.05); }
      `}</style>

      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-lg leading-none">SkiPartner</div>
                <div className="text-[10px] text-cyan-400 uppercase tracking-widest">THEMIS IV</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {Object.entries(t.nav).slice(0, 6).map(([key, label]) => (
                <button key={key} onClick={() => scrollTo(key === 'home' ? 'home' : key)} className={`text-sm font-medium transition-colors hover:text-cyan-400 ${activeSection === (key === 'home' ? 'home' : key) ? 'text-cyan-400' : 'text-white/70'}`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
                <button onClick={() => setLang('el')} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lang === 'el' ? 'bg-white text-[#0a1628]' : 'text-white/60 hover:text-white'}`}>ΕΛ</button>
                <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lang === 'en' ? 'bg-white text-[#0a1628]' : 'text-white/60 hover:text-white'}`}>EN</button>
              </div>
              <button onClick={() => scrollTo('contact')} className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">{t.nav.book}</button>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2">{mobileMenu ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center pt-[72px]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#0a1628] via-[#0e1f3a] to-[#0a1628]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-cyan-400/30 mb-6">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100">{t.hero.subtitle}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold mb-4 leading-[0.9]">
              <span className="serif">{t.hero.title}</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{t.hero.yacht}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-white/80 mb-8 font-light">{t.hero.tagline}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('contact')} className="group px-8 py-4 bg-white text-[#0a1628] rounded-2xl font-medium flex items-center gap-2 hover:shadow-2xl hover:shadow-white/20 transition-all">
                {t.hero.cta}<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('boat')} className="px-8 py-4 glass-light border border-white/20 rounded-2xl font-medium hover:bg-white/10 transition-all">{t.hero.secondary}</button>
            </motion.div>
          </div>
        </div>
      </section>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {[
                { icon: Ship, label: lang === 'el' ? '13.90μ' : '13.90m', sub: t.boat.specList.length },
                { icon: Users, label: '2-6', sub: t.boat.specList.guests },
                { icon: Bed, label: '2', sub: t.boat.specList.cabins },
                { icon: Gauge, label: '37kn', sub: t.boat.specList.speed },
              ].map((stat, i) => (
                <div key={i} className="glass-light rounded-2xl p-4 border border-white/10">
                  <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
                  <div className="text-2xl font-semibold">{stat.label}</div>
                  <div className="text-xs text-white/60">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">{t.intro.title}</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">{t.intro.p1}</p>
              <p className="text-white/70 leading-relaxed mb-8">{t.intro.p2}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {t.intro.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl"></div>
              <div className="relative rounded-[2rem] w-full aspect-[4/3] bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-white/10 flex items-center justify-center">
                <Ship className="w-24 h-24 text-cyan-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="boat" className="py-24 px-4 bg-[#050e1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 serif">{t.boat.title}</h2>
            <p className="text-white/60 text-lg">{t.boat.subtitle}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 aspect-[16/10] flex items-center justify-center">
                <Ship className="w-32 h-32 text-cyan-400/30" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-light rounded-[1.5rem] p-6 border border-white/10">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Ship className="w-5 h-5 text-cyan-400" />
                  {t.boat.specs}
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { k: t.boat.specList.length, v: '13.90 m' },
                    { k: t.boat.specList.beam, v: '4.75 m' },
                    { k: t.boat.specList.engines, v: '2x Volvo Penta IPS 600' },
                    { k: t.boat.specList.speed, v: '37 knots' },
                    { k: t.boat.specList.consumption, v: '~120 L/h' },
                    { k: t.boat.specList.cabins, v: '2' },
                    { k: t.boat.specList.bathrooms, v: '2' },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-white/60">{spec.k}</span>
                      <span className="font-medium">{spec.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trips" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 serif">{t.trips.title}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { data: t.trips.multi, icon: Calendar, color: 'from-cyan-500 to-blue-600' },
              { data: t.trips.day, icon: MapPin, color: 'from-blue-600 to-indigo-600' }
            ].map((trip, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${trip.color} rounded-[2rem] opacity-20 group-hover:opacity-30 blur-xl transition-opacity`}></div>
                <div className="relative glass-light rounded-[2rem] p-8 border border-white/10 h-full">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${trip.color} flex items-center justify-center mb-6`}>
                    <trip.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 serif">{trip.data.title}</h3>
                  <div className="flex gap-4 mb-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-white/10">{trip.data.duration}</span>
                    <span className="px-3 py-1 rounded-full bg-white/10">{trip.data.guests}</span>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">{trip.data.desc}</p>
                  <div className="space-y-2">
                    {trip.data.includes.map((inc, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-white/80">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="share" className="py-24 px-4 bg-[#050e1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 serif">{t.share.title}</h2>
            <p className="text-xl text-cyan-400">{t.share.subtitle}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{t.share.p1}</p>
              <p className="text-white/70 leading-relaxed mb-8">{t.share.p2}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.share.how}</h3>
              <div className="space-y-4">
                {t.share.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">{i + 1}</div>
                    <div className="pt-1"><p className="text-white/90">{step}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 serif">{t.blog.title}</h2>
              <p className="text-white/60">{t.blog.subtitle}</p>
            </div>
            <button onClick={() => setShowCMS(!showCMS)} className="hidden md:flex items-center gap-2 px-4 py-2 glass-light rounded-xl border border-white/10 hover:bg-white/10 text-sm">
              <Edit2 className="w-4 h-4" />{t.blog.manage}
            </button>
          </div>

          {showCMS && (
            <div className="mb-12 glass-light rounded-[2rem] p-6 border border-cyan-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">CMS</h3>
                <button onClick={() => setEditingArticle({id: '', slug: '', title: { el: '', en: '' }, excerpt: { el: '', en: '' }, content: { el: '', en: '' }, image: '', date: '', author: 'Captain Haris', category: ''})} className="flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-xl text-sm font-medium hover:bg-cyan-600">
                  <Plus className="w-4 h-4" />{t.blog.newPost}
                </button>
              </div>
              <div className="grid gap-3">
                {articles.map(article => (
                  <div key={article.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{article.title[lang]}</div>
                      <div className="text-xs text-white/50">{article.date}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setViewingArticle(article)} className="p-2 hover:bg-white/10 rounded-lg"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => setEditingArticle(article)} className="p-2 hover:bg-white/10 rounded-lg"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(article.id)} className="p-2 hover:bg-red-500/20 rounded-lg text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <article key={article.id} className="group cursor-pointer" onClick={() => setViewingArticle(article)}>
                <div className="relative overflow-hidden rounded-[1.5rem] mb-4 border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 aspect-[4/3] flex items-center justify-center">
                  <Ship className="w-16 h-16 text-cyan-400/30" />
                </div>
                <div className="flex items-center gap-3 text-xs text-white/50 mb-2">
                  <span>{article.date}</span><span>•</span><span>{article.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{article.title[lang]}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{article.excerpt[lang]}</p>
                <span className="text-sm text-cyan-400 flex items-center gap-1">{t.blog.readMore} <ChevronRight className="w-3 h-3" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-[#050e1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 serif">{t.contact.title}</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{t.contact.captain}</h3>
                <p className="text-white/60">Private Yacht Share</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: t.contact.phone, value: '+30 6976 292001', href: 'tel:+306976292001' },
                  { icon: MessageCircle, label: t.contact.whatsapp, value: 'WhatsApp', href: 'https://wa.me/306976292001' },
                  { icon: Mail, label: t.contact.email, value: 'info@skipartner.gr', href: 'mailto:info@skipartner.gr' },
                ].map((contact, i) => (
                  <a key={i} href={contact.href} className="flex items-center gap-4 p-4 glass-light rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-light rounded-[2rem] p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-white/70 mb-1.5 block">{t.contact.form.name}</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1.5 block">{t.contact.form.phone}</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-white/70 mb-1.5 block">{t.contact.form.email}</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1.5 block">{t.contact.form.dates}</label>
                    <input value={formData.dates} onChange={e => setFormData({...formData, dates: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1.5 block">{t.contact.form.guests}</label>
                    <select value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50">
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n} className="bg-[#0a1628]">{n}</option>)}
                    </select>
                  </div>
                </div>
                <button type="submit" disabled={formSent} className="w-full mt-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50">
                  {formSent ? t.contact.success : t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Anchor className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-sm">SkiPartner.gr</div>
              <div className="text-xs text-white/50">© 2024 {t.footer.rights}</div>
            </div>
          </div>
          <div className="text-xs text-white/40">{t.footer.made}</div>
        </div>
      </footer>

      <AnimatePresence>
        {viewingArticle && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setViewingArticle(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={e => e.stopPropagation()} className="relative w-full max-w-4xl max-h-[90vh] overflow-auto glass rounded-[2rem] border border-white/20">
              <button onClick={() => setViewingArticle(null)} className="absolute top-4 right-4 z-10 p-2 glass-light rounded-xl hover:bg-white/20"><X className="w-5 h-5" /></button>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                  <span>{viewingArticle.date}</span><span>•</span><span>{viewingArticle.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 serif">{viewingArticle.title[lang]}</h1>
                <div className="prose prose-invert max-w-none text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: viewingArticle.content[lang] }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
