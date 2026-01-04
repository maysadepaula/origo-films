"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const HERO_VIDEO_ID = "l6gf_viUbUk"; 

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full scale-[1.35] md:scale-125">
            <iframe
            src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
            className="w-full h-full object-cover opacity-40"
            allow="autoplay; encrypted-media"
            title="Background Video"
            style={{ pointerEvents: 'none' }}
            />
        </div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                Revele a essência da sua marca com <span className="text-primary">filmes que vendem</span>.
              </h1>
            </motion.div>
            
            <p className="text-lg md:text-2xl text-textSecondary mb-10 max-w-2xl mx-auto">
              Do roteiro à tela, criamos narrativas visuais que conectam, emocionam e convertem.
            </p>
            
            <motion.a
              href="https://wa.me/5561981045584"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/80 transition-all shadow-[0_0_20px_rgba(106,118,98,0.5)] hover:shadow-[0_0_30px_rgba(106,118,98,0.8)]"
            >
              QUERO UM ORÇAMENTO
            </motion.a>
        </ScrollReveal>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        ▼
      </motion.div>
    </section>
  );
}