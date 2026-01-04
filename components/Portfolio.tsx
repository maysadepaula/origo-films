"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Lista de Projetos
const projects = [
  { 
    id: 1, 
    // Capa automática do YouTube
    thumb: "https://img.youtube.com/vi/ARV7fahnPS8/maxresdefault.jpg", 
    // Link do vídeo
    video: "https://www.youtube.com/embed/ARV7fahnPS8" 
  },
  { 
    id: 2, 
    thumb: "https://img.youtube.com/vi/EgWztMLKkUU/maxresdefault.jpg", 
    video: "https://www.youtube.com/embed/EgWztMLKkUU" 
  },
   { 
    id: 3, 
    // Capa automática do YouTube
    thumb: "https://img.youtube.com/vi/ARV7fahnPS8/maxresdefault.jpg", 
    // Link do vídeo
    video: "https://www.youtube.com/embed/ARV7fahnPS8" 
  },
  { 
    id: 4, 
    thumb: "https://img.youtube.com/vi/EgWztMLKkUU/maxresdefault.jpg", 
    video: "https://www.youtube.com/embed/EgWztMLKkUU" 
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfólio</h2>
            <p className="text-textSecondary mb-12">Projetos criados para impactar.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
            <div className="relative px-4 md:px-12">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                centeredSlides={projects.length <= 3} 
                slidesPerView={1.2}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2.2, centeredSlides: false },
                    768: { slidesPerView: 3.2, centeredSlides: false },
                    1024: { slidesPerView: 4, centeredSlides: false },
                }}
                className="portfolio-swiper !pb-12"
            >
                {projects.map((project) => (
                <SwiperSlide key={project.id}>
                    <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group border border-white/10 mx-auto"
                    onClick={() => setSelectedVideo(project.video)}
                    >
                    <img 
                        src={project.thumb} 
                        alt={`Projeto ${project.id}`} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <FaPlay className="ml-1" size={24} />
                        </div>
                    </div>
                    </motion.div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </ScrollReveal>
      </div>

      {/* MODAL DE VÍDEO */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-primary transition-colors"
                title="Fechar vídeo"
              >
                <FaTimes size={20} />
              </button>
              
              {selectedVideo.includes("youtube") ? (
                 <iframe 
                    // Adicionei hl=pt para a interface do YouTube ficar em Português
                    src={`${selectedVideo}?autoplay=1&rel=0&controls=1&hl=pt`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Vídeo do Portfólio"
                 />
              ) : (
                  <video 
                    src={selectedVideo} 
                    controls autoPlay 
                    className="w-full h-full object-cover"
                  />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .portfolio-swiper .swiper-button-next,
        .portfolio-swiper .swiper-button-prev {
          color: #fff;
          background: rgba(106, 118, 98, 0.8);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(5px);
        }
        .portfolio-swiper .swiper-button-prev { left: 0; }
        .portfolio-swiper .swiper-button-next { right: 0; }
        .portfolio-swiper .swiper-button-next::after,
        .portfolio-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        .portfolio-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #6a7662;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}