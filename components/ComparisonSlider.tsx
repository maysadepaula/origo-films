"use client";

import { useState, useRef, MouseEvent, TouchEvent, useEffect } from "react";
import { FaArrowsAltH } from "react-icons/fa";

// --- CONFIGURAÇÃO DOS VÍDEOS ---
const VIDEO_BEFORE_ID = "Fuw7NKYHzKQ"; // Vídeo "Antes"
const VIDEO_AFTER_ID = "ZWw4AGLwGiA";  // Vídeo "Depois"

export default function ComparisonSlider() {
  const [width, setWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidthPx, setContainerWidthPx] = useState(0);

  // Ajusta a largura interna para o vídeo não distorcer ao mover a barra
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidthPx(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width: containerTotalWidth } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const percent = (x / containerTotalWidth) * 100;
    setWidth(Math.min(Math.max(percent, 0), 100));
  };

  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  // Gera o link do YouTube limpo (sem anúncios, sem controles, mudo e em loop)
  const getEmbedUrl = (id: string) => {
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;
  };

  return (
    <section className="py-24 bg-background px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">O impacto da qualidade visual</h2>
        <p className="text-textSecondary text-lg">Veja a diferença na prática.</p>
      </div>

      <div 
        ref={containerRef}
        // OBS: Se os vídeos forem verticais (Shorts), troque 'aspect-video' por 'aspect-[9/16]' aqui embaixo
        className="relative w-full max-w-[1000px] mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-col-resize group bg-black"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* --- ETIQUETAS --- */}
        <div className="absolute top-8 right-8 bg-black/60 text-white/70 px-4 py-2 rounded-full text-sm font-bold z-30 border border-white/20 backdrop-blur-sm pointer-events-none select-none">
          Antes da Origo
        </div>
        <div className="absolute top-8 left-8 bg-black/60 text-primary px-4 py-2 rounded-full text-sm font-bold z-30 border border-primary backdrop-blur-sm pointer-events-none select-none">
          Depois da Origo
        </div>

        {/* --- CAMADA "ANTES" (Fundo total - Lado Direito) --- */}
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src={getEmbedUrl(VIDEO_BEFORE_ID)}
            className="w-full h-full object-cover opacity-60 grayscale-[30%]"
            allow="autoplay; encrypted-media"
            title="Video Antes"
            loading="lazy"
            style={{ pointerEvents: 'none' }} 
          />
        </div>

        {/* --- CAMADA "DEPOIS" (Recorte - Lado Esquerdo) --- */}
        <div 
          className="absolute inset-0 border-r-2 border-white overflow-hidden pointer-events-none"
          style={{ width: `${width}%` }}
        >
          {/* Container interno com largura fixa para o vídeo não espremer */}
          <div style={{ width: containerWidthPx || '100vw', height: '100%' }}>
            <iframe 
              src={getEmbedUrl(VIDEO_AFTER_ID)}
              className="w-full h-full object-cover"
              allow="autoplay; encrypted-media"
              title="Video Depois"
              loading="lazy"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>

        {/* --- O BOTÃO DO MEIO (Slider) --- */}
        <div 
          className="absolute top-0 bottom-0 w-10 -ml-5 z-40 flex items-center justify-center pointer-events-none"
          style={{ left: `${width}%` }}
        >
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black shadow-lg shadow-black/50 transform scale-100 transition-transform group-hover:scale-110">
             <FaArrowsAltH size={20} />
          </div>
        </div>
        
        {/* Camada invisível para garantir o funcionamento do mouse/touch */}
        <div className="absolute inset-0 z-50 bg-transparent" />
      </div>
    </section>
  );
}