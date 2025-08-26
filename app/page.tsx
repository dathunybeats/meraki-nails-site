"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-visible");
          } else {
            element.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="reveal">{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
             {/* Top Header Bar */}
       <div className="bg-pink-100 py-2 px-4 md:px-6">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2 md:gap-0">
           <div className="text-gray-700 font-bold text-base">
             Mon - Fri: 10AM - 6PM
           </div>
           <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
             <div className="flex items-center gap-1 md:gap-2 text-gray-700">
               <svg className="w-3 h-3 md:w-4 md:h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
               </svg>
               <span className="hidden sm:inline">+1(212) 555-0198</span>
               <span className="sm:hidden">+1(212) 555-0198</span>
             </div>
             <div className="flex items-center gap-1 md:gap-2 text-gray-700">
               <svg className="w-3 h-3 md:w-4 md:h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
               </svg>
               <span className="hidden sm:inline">301 Milam St, Houston</span>
               <span className="sm:hidden">Houston, TX</span>
             </div>
           </div>
         </div>
       </div>

             {/* Main Navigation Bar */}
       <nav className="shadow-sm border-b border-pink-200" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
         <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
           <div className="flex items-center justify-between">
             {/* Logo */}
             <div className="flex items-center gap-2 md:gap-3">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                 <span className="text-white font-bold text-base md:text-lg">S</span>
               </div>
               <span className="text-lg md:text-xl font-script italic text-gray-800">NAILS by Sarah Q</span>
             </div>

             {/* Navigation Links - Desktop */}
             <div className="hidden md:flex items-center gap-8">
               <a href="#about" className="text-gray-700 hover:text-pink-500 font-bold transition-colors">About</a>
               <a href="#services" className="text-gray-700 hover:text-pink-500 font-bold transition-colors">Services</a>
               <a href="#team" className="text-gray-700 hover:text-pink-500 font-bold transition-colors">Team</a>
               <a href="#faq" className="text-gray-700 hover:text-pink-500 font-bold transition-colors">FAQ</a>
             </div>

             {/* Book Now Button - Desktop */}
             <div className="hidden md:flex items-center gap-3">
               <button className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center border border-pink-300 hover:bg-pink-200 transition-colors">
                 <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                 </svg>
               </button>
               <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 font-medium px-6 py-2 rounded-full transition-colors">
                 Book Now
               </button>
             </div>

             {/* Mobile Menu Button */}
             <div className="md:hidden flex items-center gap-2">
               <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 font-medium px-4 py-2 rounded-full transition-colors text-sm">
                 Book Now
               </button>
               <button className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center border border-pink-300 hover:bg-pink-200 transition-colors">
                 <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                 </svg>
               </button>
             </div>
           </div>

           
         </div>
       </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <Reveal><div className="text-center md:text-left reveal-blur">
                             <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-4">
                 Nails By <span className="italic text-pink-600 font-black">Sarah Q</span>
               </h1>
               <div className="w-24 h-1 bg-pink-400 mx-auto md:mx-0 mb-8"></div>
              <p className="text-base md:text-lg font-script italic text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
                <span className="line">Hi, I&#39;m Sarah, a passionate nail artist dedicated to creating beautiful, flawless nails.</span>{" "}
                <span className="line">With meticulous attention to detail and a love for elegant designs,</span>{" "}
                <span className="line">I&#39;m here to give you the perfect manicure that reflects your unique style.</span>
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                                 <div className="flex items-center gap-2 text-gray-700">
                   <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                   </svg>
                   <span>Houston, TX</span>
                 </div>
              </div>

              <div className="text-center md:text-left">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg pink-shadow">
                  BOOK NOW!
                </button>
              </div>
            </div></Reveal>

                                                 {/* Right Side - Nail Art Image */}
            <Reveal><div className="relative flex justify-center reveal-blur">
                <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-2xl relative overflow-hidden shadow-xl">
        <Image
                    src="/SnapInsta.to_498239139_17889855213257578_4920639422939679441_n.jpg"
                    alt="Coral Pink Nail Art"
                    fill
                    className="object-cover rounded-2xl"
          priority
        />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-rose-400/20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Coral Pink Elegance</h3>
                    <p className="text-white/90 text-xs drop-shadow-lg">Long square nails with glossy finish</p>
                  </div>
                </div>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Hours and Contact Section */}
      <section className="py-16 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Hours */}
            <Reveal><div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-pink-50/60 border border-pink-200 rounded-lg px-4 py-3">
                  <h3 className="font-bold text-gray-800 line">MONDAY–FRIDAY</h3>
                  <p className="text-gray-700 font-jakarta line">10:00 AM – 5:00 PM</p>
                </div>
                <div className="flex items-center justify-between bg-pink-50/60 border border-pink-200 rounded-lg px-4 py-3">
                  <h3 className="font-bold text-gray-800 line">SATURDAY</h3>
                  <p className="text-gray-700 font-jakarta line">11:00 AM – 6:00 PM</p>
                </div>
                <div className="flex items-center justify-between bg-pink-50/60 border border-pink-200 rounded-lg px-4 py-3">
                  <h3 className="font-bold text-gray-800 line">SUNDAY</h3>
                  <p className="text-gray-700 font-jakarta line">Closed / By Appointment</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-pink-200 space-y-3 text-sm text-gray-600 font-jakarta">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2"></span>
                  <p className="line">Last appointment begins 60 minutes before closing.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2"></span>
                  <p className="line">Please arrive 5–10 minutes early for check‑in and prep.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2"></span>
                  <p className="line">Holiday hours may vary; same‑day bookings depend on availability.</p>
                </div>
              </div>
            </div></Reveal>

            {/* Contact */}
            <Reveal><div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
              <div className="space-y-4">
                                 <div className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                   </svg>
                   <span className="text-gray-700">DM/email/text to book</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                   </svg>
                   <span className="text-gray-700">Contact for booking</span>
                 </div>
                                 <div className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                   </svg>
                   <span className="text-gray-700">@n4iledbysq_</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.348-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                   </svg>
                   <span className="text-gray-700">@n4iledbysq_</span>
                 </div>
                                 <div className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">linktr.ee/N4ILEDBYSQ</span>
                 </div>
              </div>
            </div></Reveal>
          </div>
        </div>
      </section>

             {/* Services Section */}
       <section className="py-16 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
         <div className="max-w-6xl mx-auto">
                      <h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 mb-4"> Top Rated Nail Artist </h2>
           <h3 className="text-3xl md:text-4xl font-black text-center text-pink-600 mb-12 italic">Specializing In</h3>
           <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300 h-full">
               <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                 <span className="text-2xl">💅</span>
               </div>
               <h3 className="font-bold text-gray-800 mb-2">Gel-X</h3>
               <p className="text-sm text-gray-600 font-jakarta">Professional gel extensions for long-lasting, beautiful nails</p>
            </div></Reveal>
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300 h-full">
               <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                 <span className="text-2xl">✨</span>
               </div>
               <h3 className="font-bold text-gray-800 mb-2">Natural Nail Enhancement</h3>
               <p className="text-sm text-gray-600 font-jakarta">Strengthening and beautifying your natural nails</p>
            </div></Reveal>
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300 h-full">
               <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                 <span className="text-2xl">🎨</span>
               </div>
               <h3 className="font-bold text-gray-800 mb-2">Press-ons</h3>
               <p className="text-sm text-gray-600 font-jakarta">Custom designed press-on nails for any occasion</p>
            </div></Reveal>
           </div>
         </div>
       </section>

       {/* Booking Policies */}
       <section className="py-5 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
         <div className="max-w-6xl mx-auto">
           <h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 mb-12">Booking Policies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Deposit */}
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">DEPOSIT</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestibus lacus quam, ac sodales velit ultrices in.</p>
            </div></Reveal>

            {/* Rescheduling */}
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">RESCHEDULING</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestibus lacus quam, ac sodales velit ultrices in.</p>
            </div></Reveal>

            {/* Cancellation */}
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">CANCELLATION</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestibus lacus quam, ac sodales velit ultrices in.</p>
            </div></Reveal>

            {/* Late Arrival */}
            <Reveal><div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">LATE ARRIVAL</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestibus lacus quam, ac sodales velit ultrices in.</p>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Before Your Appointment */}
      <section className="py-16 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 mb-12">Before your Appointment</h2>
          <Reveal><div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-gray-800 mb-4">Preparation Tips:</h3>
                <p className="text-gray-600 mb-4 font-jakarta font-bold">
                  Avoid heavy lotions or oils before your appointment for better adhesion.
                </p>
                <p className="text-gray-600 font-jakarta font-bold">
                  Remove any old polish or nail decorations 24 hours before your visit.
                </p>
              </div>
              <div>
                <h3 className="font-black text-gray-800 mb-4">Important Notes:</h3>
                <p className="text-gray-600 mb-4 font-jakarta font-bold">
                  Let your technician know if you have sensitivities to certain products.
                </p>
                <p className="text-gray-600 font-jakarta font-bold">
                  Arrive on time to ensure you receive your full appointment duration.
                </p>
              </div>
            </div>
          </div></Reveal>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
        <div className="max-w-6xl mx-auto">
          <Reveal><h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 mb-12 reveal-blur"><span className="line">Client Reviews</span></h2></Reveal>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-6 md:w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(249,239,233,1), transparent)'}}></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 md:w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, rgba(249,239,233,1), transparent)'}}></div>
            
            <div className="flex reviews-scroll gap-3 md:gap-6">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Amy Smith</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Amazing nail art! Sarah is so talented and professional. My nails lasted for weeks!&rdquo;</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Best nail experience I&#39;ve ever had! The attention to detail is incredible. Highly recommend!&rdquo;</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Emma Davis</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Clean salon, friendly service, and beautiful results every time. Sarah is the best!&rdquo;</p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Maria Lopez</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Absolutely love my nails! The quality and artistry is outstanding. Will definitely be back!&rdquo;</p>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Jessica Kim</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Perfect manicure every time! Sarah really knows her craft and creates beautiful designs.&rdquo;</p>
            </div>

            {/* Review 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Lisa Chen</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Such a relaxing experience! The salon is beautiful and Sarah is incredibly skilled.&rdquo;</p>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Amy Smith</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Amazing nail art! Sarah is so talented and professional. My nails lasted for weeks!&rdquo;</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Best nail experience I&#39;ve ever had! The attention to detail is incredible. Highly recommend!&rdquo;</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-200 w-[calc(100vw-3rem)] md:w-[300px] flex-shrink-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-800">Emma Davis</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-jakarta text-xs md:text-sm leading-snug whitespace-normal break-words">&ldquo;Clean salon, friendly service, and beautiful results every time. Sarah is the best!&rdquo;</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
        <div className="max-w-6xl mx-auto">
          <Reveal><h2 className="text-5xl md:text-6xl font-black text-center text-gray-800 mb-4 reveal-blur"><span className="line">TAG US ON YOUR</span></h2></Reveal>
          <Reveal><h3 className="text-4xl md:text-5xl font-black text-center text-pink-600 mb-12 italic font-script reveal-blur"><span className="line">Nail-fies</span></h3></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Coral Pink Nails */}
            <Reveal><div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-300 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group">
              <Image
                src="/SnapInsta.to_498239139_17889855213257578_4920639422939679441_n.jpg"
                alt="Coral Pink Nail Art"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-rose-400/20"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <h4 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">Coral Pink</h4>
                <p className="text-white/80 text-xs drop-shadow-lg">Long square nails</p>
              </div>
            </div></Reveal>

            {/* Cat Charm Nails */}
            <Reveal><div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-300 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group">
              <Image
                src="/SnapInsta.to_520235498_17897536680257578_3627261489491205274_n.jpg"
                alt="Cat Charm Nail Art"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-400/20"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <h4 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">Cat Charm</h4>
                <p className="text-white/80 text-xs drop-shadow-lg">3D cat with bow</p>
              </div>
            </div></Reveal>

            {/* 3D Swirl Nails */}
            <Reveal><div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group">
              <Image
                src="/SnapInsta.to_539431182_17902717632257578_8018595042623517885_n.jpg"
                alt="3D Swirl Nail Art"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300/20 to-pink-400/20"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <h4 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">3D Swirls</h4>
                <p className="text-white/80 text-xs drop-shadow-lg">Pearlescent design</p>
              </div>
            </div></Reveal>

            {/* Pink & Blue Bows */}
            <Reveal><div className="aspect-square bg-gradient-to-br from-blue-200 to-pink-300 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group">
          <Image
                src="/SnapInsta.to_498239139_17889855213257578_4920639422939679441_n.jpg"
                alt="Pink & Blue Bow Nail Art"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-pink-400/20"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <h4 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">Pink & Blue</h4>
                <p className="text-white/80 text-xs drop-shadow-lg">Decorative bows</p>
              </div>
            </div></Reveal>

            {/* Milky White */}
            <Reveal><div className="aspect-square bg-gradient-to-br from-gray-200 to-pink-200 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group">
          <Image
                src="/SnapInsta.to_520235498_17897536680257578_3627261489491205274_n.jpg"
                alt="Milky White Nail Art"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-pink-300/20"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <h4 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">Milky White</h4>
                <p className="text-white/80 text-xs drop-shadow-lg">Elegant & clean</p>
              </div>
            </div></Reveal>

            {/* Luxury 3D */}
            <Reveal><div className="aspect-square bg-gradient-to-br from-amber-200 to-rose-300 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group">
          <Image
                src="/SnapInsta.to_539431182_17902717632257578_8018595042623517885_n.jpg"
                alt="Luxury 3D Nail Art"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-rose-400/20"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <h4 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">Luxury 3D</h4>
                <p className="text-white/80 text-xs drop-shadow-lg">Sculptural art</p>
              </div>
            </div></Reveal>
          </div>
                     <div className="text-center mt-8">
             <p className="text-gray-600 mb-4 font-jakarta">@n4iledbysq_ | #nailart #3dnails #gelx #pressons</p>
           </div>
        </div>
      </section>

      {/* Thank You & Book Now */}
      <section className="py-1 px-6" style={{backgroundColor: 'rgba(249,239,233,1)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><h2 className="text-5xl font-bold text-pink-600 mb-8 reveal-blur"><span className="line">Thank You</span></h2></Reveal>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-colors duration-300 shadow-lg pink-shadow hover:scale-105">
            BOOK NOW!
          </button>
          <div className="mt-8 flex justify-center items-center gap-8 text-gray-600 flex-wrap">
                         <span className="flex items-center gap-2">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
               </svg>
               DM/email/text to book
             </span>
             <span className="flex items-center gap-2">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
               </svg>
               linktr.ee/N4ILEDBYSQ
             </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs md:text-sm text-gray-500">
        website made by meraki
      </footer>

             {/* Floating Phone Call Button */}
       <div className="fixed bottom-6 right-6 z-50">
         <div className="relative">
           {/* Pulsing rings */}
           <div className="absolute inset-0 w-14 h-14 bg-pink-400 rounded-full animate-pulse-ring"></div>
           <div className="absolute inset-0 w-14 h-14 bg-pink-400 rounded-full animate-pulse-ring" style={{animationDelay: '1s'}}></div>
           
           {/* Main button */}
           <button className="relative w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
             </svg>
           </button>
         </div>
       </div>
    </div>
  );
}
