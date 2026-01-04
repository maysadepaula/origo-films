"use client";
import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">O que dizem sobre nós</h2>
        <p className="text-textSecondary mb-12">Resultados reais.</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card de Vídeo */}
          <VideoCard src="/media/prova_social1.mp4" />
          
          {/* Card de Imagem/Print */}
          <div className="w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 relative">
             <img src="/media/prova_social3.png" alt="Feedback" className="w-full h-full object-cover" />
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 text-left">
                <p className="text-white italic text-sm">Feedback via WhatsApp.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-componente para controlar o vídeo individualmente
function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.currentTime = 0; // Reinicia para ouvir
        videoRef.current.play();
      }
    }
  };

  return (
    <div 
      className="relative w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 cursor-pointer group hover:border-primary transition-all hover:-translate-y-1"
      onClick={toggleSound}
    >
      <video 
        ref={videoRef}
        src={src} 
        loop muted playsInline 
        className="w-full h-full object-cover"
        onMouseOver={(e) => e.currentTarget.play()}
        onMouseOut={(e) => { if(isMuted) e.currentTarget.pause() }}
      />
      
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 text-left pointer-events-none">
        <p className="text-white italic text-sm mb-1">"Clique para ouvir a experiência completa."</p>
        <p className="text-primary text-xs font-bold uppercase">Cliente Origo</p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 group-hover:opacity-0 transition-opacity pointer-events-none">
         {isMuted ? <FaVolumeMute size={28} /> : <FaVolumeUp size={28} />}
      </div>
    </div>
  );
}