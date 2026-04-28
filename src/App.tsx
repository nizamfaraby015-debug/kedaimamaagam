import React from 'react';
import { 
  MessageCircle, Star, MapPin, Phone, 
  Utensils, ShoppingBag, Bike, 
  ChevronLeft, ChevronRight,
  Leaf, Heart, ChefHat, Tag, Clock, Users,
  UtensilsCrossed, LayoutGrid
} from 'lucide-react';

const WA_NUMBER = "6281252443928";
const WA_MESSAGE = "Halo, saya mau pesan dari Kedai Mama Agam (Karina Catering)";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function App() {
  return (
    <div className="font-sans text-[#3B200B] bg-[#FCF9F2] min-h-screen selection:bg-[#8B2311] selection:text-white">
      {/* NAVBAR */}
      <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-[#EBE4D5]">
        <div className="flex items-center gap-3 text-[#3B200B]">
          <UtensilsCrossed size={32} className="text-[#8B2311]"/>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl leading-none tracking-tight">Kedai Mama Agam</span>
            <span className="text-[0.65rem] tracking-[0.2em] font-bold mt-1 text-gray-500 uppercase">Karina Catering</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-semibold text-sm">
          <a href="#" className="text-[#8B2311] border-b-[3px] border-[#8B2311] pb-1">Beranda</a>
          <a href="#menu" className="text-gray-600 hover:text-[#8B2311] transition-colors pb-1 border-b-[3px] border-transparent">Menu</a>
          <a href="#layanan" className="text-gray-600 hover:text-[#8B2311] transition-colors pb-1 border-b-[3px] border-transparent">Layanan</a>
          <a href="#tentang" className="text-gray-600 hover:text-[#8B2311] transition-colors pb-1 border-b-[3px] border-transparent">Tentang Kami</a>
          <a href="#ulasan" className="text-gray-600 hover:text-[#8B2311] transition-colors pb-1 border-b-[3px] border-transparent">Ulasan</a>
          <a href="#galeri" className="text-gray-600 hover:text-[#8B2311] transition-colors pb-1 border-b-[3px] border-transparent">Galeri</a>
          <a href="#lokasi" className="text-gray-600 hover:text-[#8B2311] transition-colors pb-1 border-b-[3px] border-transparent">Lokasi</a>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#8B2311] hover:bg-[#721c0e] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
          <MessageCircle size={18} />
          <span>Pesan via WhatsApp</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-start md:justify-center pt-8 md:pt-0 min-h-[700px] md:min-h-[650px] overflow-hidden bg-[#FCF9F2]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/rekomendasi-sego-tempong-di-jabodetabek.jpeg" 
            alt="Nasi Box Kedai Mama Agam" 
            className="w-full h-full object-cover object-bottom md:object-center" 
          />
          {/* Overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-[#FCF9F2] md:via-[#FCF9F2]/95 to-transparent md:bg-none md:bg-transparent"></div>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#FCF9F2] via-[#FCF9F2]/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="w-full md:w-[65%] lg:w-[55%] flex flex-col justify-start md:justify-center px-6 md:px-12 lg:px-20 pt-8 pb-48 md:py-16 z-10 relative mt-4 md:mt-0">
          
          <div className="inline-flex items-center gap-2 bg-[#4A2C11] text-white px-4 py-1.5 rounded-md w-max mb-6">
            <Star size={14} className="fill-[#F0B83E] text-[#F0B83E]" />
            <span className="text-sm font-semibold tracking-wide">4,9 Rating Google (19 Ulasan)</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3B200B] leading-[1.1] mb-2 tracking-tight">
            Kedai Mama Agam<br/>(Karina Catering)
          </h1>
          <h2 className="text-xl md:text-2xl text-[#8B2311] italic font-semibold mb-6">
            Makanan Rumahan Enak di Banyuwangi
          </h2>
          
          <p className="text-lg mb-8 max-w-md font-medium text-[#513014] leading-relaxed">
            Melayani makan di tempat, bawa pulang, dan catering harian dengan rasa rumahan yang selalu fresh setiap hari.
          </p>

          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#DBCAB6] flex items-center justify-center bg-white shadow-sm">
                <Utensils size={20} className="text-[#8B2311]" />
              </div>
              <span className="font-bold text-sm leading-tight text-[#3B200B]">Makan<br/>Tempat</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#DBCAB6] flex items-center justify-center bg-white shadow-sm">
                <ShoppingBag size={20} className="text-[#8B2311]" />
              </div>
              <span className="font-bold text-sm leading-tight text-[#3B200B]">Bawa<br/>Pulang</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#DBCAB6] flex items-center justify-center bg-white shadow-sm">
                <Bike size={20} className="text-[#8B2311]" />
              </div>
              <span className="font-bold text-sm leading-tight text-[#3B200B]">Pesan<br/>Antar</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8B2311] hover:bg-[#721c0e] text-white px-7 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-md">
              <MessageCircle size={22} />
              <span>Pesan Sekarang via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" id="tentang">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-[40%]">
            <h4 className="text-[#8B2311] font-bold text-sm tracking-widest uppercase mb-2">Tentang Kami</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B200B] mb-5 leading-tight tracking-tight">Catering Rumahan<br/>Khas Banyuwangi</h2>
            <p className="text-gray-700 leading-relaxed mb-8 font-medium">
              Kedai Mama Agam (Karina Catering) adalah usaha makanan rumahan yang berlokasi di Kertosari, Banyuwangi. Kami menyajikan masakan lezat, bersih, dan bergizi dengan bahan pilihan dan proses masak higienis.
            </p>
            <a href="#menu" className="inline-flex items-center justify-center bg-[#4A2C11] hover:bg-[#341b0b] text-white px-7 py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
              Selengkapnya Tentang Kami
            </a>
          </div>
          
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-[#EBE4D5] rounded-2xl p-8 text-center shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FDF5E6] rounded-full flex items-center justify-center text-[#A6612A] mb-5">
                <UtensilsCrossed size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#3B200B]">Masakan Rumahan</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">Rasa asli rumahan yang selalu bikin rindu.</p>
            </div>
            <div className="bg-white border border-[#EBE4D5] rounded-2xl p-8 text-center shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F0F7F2] rounded-full flex items-center justify-center text-[#4CAF50] mb-5">
                <Leaf size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#3B200B]">Bahan Segar</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">Bahan pilihan setiap hari, fresh & berkualitas.</p>
            </div>
            <div className="bg-white border border-[#EBE4D5] rounded-2xl p-8 text-center shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FDF0F0] rounded-full flex items-center justify-center text-[#E53935] mb-5">
                <Heart size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#3B200B]">Pelayanan Ramah</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">Kami melayani dengan senyum dan sepenuh hati.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU & LAYANAN */}
      <section className="py-20 px-6 md:px-12 bg-white" id="menu">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h4 className="text-[#8B2311] font-bold text-sm tracking-widest uppercase mb-2">Menu & Layanan</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B200B]">Menu Favorit & Layanan Kami</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Nasi Box",
              desc: "Berbagai pilihan nasi box dengan menu lengkap dan lezat.",
              price: "Mulai Rp 15.000",
              img: "/nasi%20box.jpeg"
            },
            {
              title: "Menu Harian",
              desc: "Menu harian bergizi seimbang dengan cita rasa rumahan.",
              price: "Mulai Rp 12.000",
              img: "/menu%20harian.jpeg"
            },
            {
              title: "Catering Acara",
              desc: "Melayani berbagai acara seperti nikahan, syukuran, arisan, dll.",
              price: "Harga Menyesuaikan",
              img: "/catering%20acara.jpeg"
            },
            {
              title: "Pesanan Keluarga",
              desc: "Cocok untuk makan keluarga, arisan, atau acara kecil.",
              price: "Harga Menyesuaikan",
              img: "/pesanan%20keluarga.jpeg"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#FCF9F2] rounded-3xl overflow-hidden border border-[#EBE4D5] flex flex-col hover:shadow-lg transition-all group">
              <div className="overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 className="font-bold text-xl mb-2 text-[#3B200B]">{item.title}</h3>
                <p className="text-[13px] text-gray-600 mb-4 flex-1 px-2">{item.desc}</p>
                <div className="text-[#8B2311] font-bold mb-5 text-[15px]">{item.price}</div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 border-[1.5px] border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2.5 rounded-full font-bold transition-colors">
                  <MessageCircle size={18} />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KENAPA MEMILIH KAMI? */}
      <section className="py-16 px-6 md:px-12 bg-[#FCF9F2] border-y border-[#EBE4D5]">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h4 className="text-[#8B2311] font-bold text-sm tracking-widest uppercase mb-2">Kenapa Memilih Kami?</h4>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {[
            { icon: <ChefHat size={28} className="text-[#A6612A]" />, title: "Rasa Enak", desc: "Cita rasa khas rumahan yang selalu dijaga." },
            { icon: <Tag size={28} className="text-[#A6612A]" />, title: "Harga Terjangkau", desc: "Harga bersahabat dengan kualitas terbaik." },
            { icon: <Clock size={28} className="text-[#A6612A]" />, title: "Pengiriman Tepat Waktu", desc: "Kami selalu on time untuk setiap pesanan Anda." },
            { icon: <Users size={28} className="text-[#A6612A]" />, title: "Banyak Pelanggan Setia", desc: "Kepercayaan Anda adalah kebanggaan kami." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 bg-white border border-[#EBE4D5] rounded-full flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-[#3B200B] mb-1 text-[15px]">{item.title}</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed pr-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ULASAN PELANGGAN */}
      <section className="py-20 px-6 md:px-12 bg-white" id="ulasan">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h4 className="text-[#8B2311] font-bold text-sm tracking-widest uppercase mb-2">Ulasan Pelanggan</h4>
        </div>
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <button className="hidden md:flex w-12 h-12 rounded-full bg-[#FCF9F2] text-[#3B200B] items-center justify-center border border-[#EBE4D5] hover:bg-[#EBE4D5] transition-colors shrink-0 shadow-sm">
            <ChevronLeft size={24} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {[
              {
                stars: 5,
                text: "Bersih dan sigenis, murah meriah. Rasa mantap!",
                name: "Rian Nyot",
                role: ""
              },
              {
                stars: 5,
                text: "Ngopi + diskusi. Kuliah nyata 👍 Makanannya enak semua.",
                name: "zulfikar alrasyid",
                role: ""
              },
              {
                stars: 5,
                text: "Nikahan yang punya, makanannya enak dan puas banget.",
                name: "Widhi",
                role: "Local Guide"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#FCF9F2] p-8 rounded-2xl border border-[#EBE4D5] flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4 text-[#F0B83E]">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-[#3B200B] font-medium mb-8 leading-relaxed min-h-[50px] text-[15px]">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden shrink-0">
                     <img src={`https://i.pravatar.cc/150?u=${idx}`} alt={review.name} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#3B200B] text-sm">{review.name}</h5>
                    {review.role && <p className="text-xs text-[#8B2311] font-medium">{review.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex w-12 h-12 rounded-full bg-[#FCF9F2] text-[#3B200B] items-center justify-center border border-[#EBE4D5] hover:bg-[#EBE4D5] transition-colors shrink-0 shadow-sm">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* LOKASI KAMI */}
      <section className="py-20 px-6 md:px-12 bg-[#FCF9F2] border-t border-[#EBE4D5]" id="lokasi">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-0 bg-white rounded-3xl overflow-hidden border border-[#EBE4D5] shadow-sm">
          <div className="w-full lg:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-white z-10 lg:shadow-[10px_0_20px_-10px_rgba(0,0,0,0.05)]">
            <h4 className="text-[#8B2311] font-bold text-sm tracking-widest uppercase mb-8">Lokasi Kami</h4>
            
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-[#8B2311] shrink-0 mt-1" size={22} />
              <p className="text-[#3B200B] text-[15px] font-medium leading-relaxed">
                Perum Puri Kertosari Asri Blok H3,<br/>
                Jl. Ikan Tongkol, RT.05/RW.04, Kertosari,<br/>
                Kec. Banyuwangi, Kabupaten Banyuwangi,<br/>
                Jawa Timur 68418
              </p>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <Phone className="text-[#8B2311] shrink-0" size={22} />
              <p className="text-[#3B200B] font-bold text-[17px]">0812-5244-3928</p>
            </div>
            
            <div className="flex items-start gap-4">
              <LayoutGrid className="text-[#8B2311] shrink-0 mt-1" size={22} />
              <p className="text-[#3B200B] text-[15px] font-medium leading-relaxed">
                Q9CF+FR Kertosari,<br/>
                Kabupaten Banyuwangi,<br/>
                Jawa Timur
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[60%] h-[350px] lg:h-auto min-h-[350px] bg-sky-100">
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.100913847326!2d114.364375!3d-8.2255866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15ab671ec4f6d%3A0xe6f0e9b9d3eecdbb!2sKedai%20Mama%20Agam!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Kedai Mama Agam"
              className="w-full h-full object-cover filter grayscale-[10%] contrast-[95%]"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 px-6 bg-[#8B2311] overflow-hidden">
        {/* Background Patters & Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-xl">
              <MessageCircle size={36} className="text-white" />
            </div>
            <div>
              <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Siap pesan makanan enak hari ini?</h2>
              <p className="text-white/90 text-lg max-w-lg font-medium">Hubungi kami sekarang untuk pesanan harian, box, atau catering acara. Kami siap melayani dengan sepenuh hati.</p>
            </div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1">
            <MessageCircle size={28} />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-lg">Pesan via WhatsApp</span>
              <span className="font-medium text-sm text-white/90">0812-5244-3928</span>
            </div>
          </a>
        </div>
      </section>

      {/* MODERN FOOTER */}
      <footer className="bg-[#1A0F06] text-white/70 pt-20 pb-10 px-6 md:px-12 border-t-4 border-[#4A2C11]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <UtensilsCrossed size={36} className="text-[#8B2311]"/>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl leading-none tracking-tight">Kedai Mama Agam</span>
                <span className="text-[0.65rem] tracking-[0.2em] font-bold mt-1 text-[#8B2311] uppercase">Karina Catering</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Menyajikan masakan lezat rumahan dengan bahan pilihan yang bersih, bergizi, dan higienis. Solusi praktis untuk makan harian dan acara spesial Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Jelajahi</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-[#8B2311]" /> Beranda</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-[#8B2311]" /> Menu & Layanan</a></li>
              <li><a href="#tentang" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-[#8B2311]" /> Tentang Kami</a></li>
              <li><a href="#ulasan" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-[#8B2311]" /> Ulasan Pelanggan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Hubungi Kami</h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#8B2311] transition-colors shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-medium mt-1">0812-5244-3928</a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#8B2311] transition-colors shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="leading-relaxed mt-0.5">
                  Perum Puri Kertosari Asri Blok H3,<br/>
                  Jl. Ikan Tongkol, RT.05/RW.04,<br/>Kertosari, Banyuwangi 68418
                </span>
              </li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Jam Operasional</h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex justify-between items-center">
                  <span>Senin - Jumat</span>
                  <span className="text-white font-medium">07:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sabtu</span>
                  <span className="text-white font-medium">07:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-center text-red-400 font-medium border-t border-white/10 pt-3 mt-1">
                  <span>Minggu</span>
                  <span>Tutup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Kedai Mama Agam (Karina Catering). All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
