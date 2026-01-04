import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonSlider from "@/components/ComparisonSlider";
import Diferenciais from "@/components/Diferenciais";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clientes";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton"; // <--- NOVO IMPORT

function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-center text-textSecondary text-sm">
      <div className="flex justify-center gap-6 mb-8 text-white">
      </div>
      <p>&copy; 2025 Origo Films. Todos os direitos reservados.</p>
      <p className="mt-2 opacity-60">
        Feito por{' '}
        <a 
          href="https://maysadesign.com.br/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold hover:text-primary transition-colors duration-300"
        >
          Maysa Design
        </a>
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-textPrimary">
      <Navbar />
      <Hero />
      <ComparisonSlider />
      <Diferenciais />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Contact />
      <WhatsAppButton /> {/* <--- BOTÃO FLUTUANTE AQUI */}
      <Footer />
    </main>
  );
}