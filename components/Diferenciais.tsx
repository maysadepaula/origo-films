"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal"; // O import funciona pois estão na mesma pasta

const features = [
  { icon: "🔥", title: "Histórias que Vendem", desc: "Vídeos roteirizados para tocar, conectar e converter espectadores em clientes fiéis." },
  { icon: "🧠", title: "Estratégia + Arte", desc: "Planejamento de marketing e criatividade cinematográfica caminhando juntos." },
  { icon: "🎥", title: "Qualidade Cinema", desc: "Color grading, sound design e enquadramentos pensados como cinema." },
  { icon: "💎", title: "Entrega Premium", desc: "Pontualidade rigorosa, organização impecável e suporte total." },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-background relative z-10 overflow-hidden">
      
      {/* Luz de fundo decorativa (Estilo Magic UI) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a Origo?</h2>
            <p className="text-textSecondary text-lg">Não entregamos apenas arquivos de vídeo. Entregamos resultados.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.1}> 
              <motion.div
                whileHover={{ y: -10 }} 
                className="group relative bg-card p-8 rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-primary/50"
              >
                {/* Efeito de Brilho (Glow) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-xl border border-white/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(106,118,98,0.4)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-textPrimary group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}