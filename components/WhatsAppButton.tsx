"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Efeito de "Ondas" (Pulse) atrás do botão para chamar atenção */}
      <span className="absolute w-full h-full bg-[#25D366] rounded-full opacity-75 animate-ping"></span>
      
      <motion.a
        href="https://wa.me/5561981045584"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-shadow duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </div>
  );
}