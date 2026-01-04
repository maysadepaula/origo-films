"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Lista de logos
const logos = [
  "/media/cliente_1.png", "/media/cliente_2.png", "/media/cliente_3.png", 
  "/media/cliente_4.png", "/media/cliente_5.png",
  "/media/cliente_1.png", "/media/cliente_2.png", "/media/cliente_3.png"
];

export default function Clients() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          speed={3000} // Velocidade contínua
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          className="client-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Cliente" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Ajuste fino para o Swiper rodar linearmente sem paradas */}
      <style jsx global>{`
        .client-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}