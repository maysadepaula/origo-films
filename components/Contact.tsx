"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem para o WhatsApp
    const text = `*Novo Lead via Site* 🎬%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Mensagem:* ${formData.message}`;
    
    // Abre o WhatsApp com a mensagem (Seu número já configurado)
    window.open(`https://wa.me/5561981045584?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Vamos criar algo juntos?</h2>
            <p className="text-textSecondary text-lg">Preencha o formulário ou chame direto no WhatsApp.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LADO ESQUERDO: Informações */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 bg-card p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-primary mb-6">Canais de Atendimento</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">WhatsApp</p>
                  <a href="https://wa.me/5561981045584" className="text-lg font-medium hover:text-primary transition-colors">(61) 98104-5584</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Instagram</p>
                  <a href="https://www.instagram.com/origofilms/" target="_blank" className="text-lg font-medium hover:text-primary transition-colors">@origofilms</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Email</p>
                  <p className="text-lg font-medium">contato@origofilms.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Localização</p>
                  <p className="text-lg font-medium">Brasília - DF</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* LADO DIREITO: Formulário */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-white/5">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Seu nome"
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder-white/30"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-textSecondary mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder-white/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textSecondary mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="seu@email.com"
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Como podemos ajudar?</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte um pouco sobre seu projeto..."
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder-white/30 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                ENVIAR MENSAGEM
              </motion.button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}