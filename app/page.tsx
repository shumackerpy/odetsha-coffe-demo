import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f3] text-gray-800 font-sans">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 flex justify-between items-center px-8 py-4">
        <div className="font-bold text-2xl tracking-tighter text-[#4a3f35]">
          Odetsha Coffee
        </div>
        <div className="hidden md:flex gap-6 font-medium">
          <a href="#menu" className="hover:text-[#c4a484] transition">Menú</a>
          <a href="#ubicacion" className="hover:text-[#c4a484] transition">Ubicación</a>
        </div>
        <a 
          href="https://wa.me/TUNUMERODEPRUEBA" 
          target="_blank"
          className="bg-[#4a3f35] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#322a23] transition"
        >
          Pedir ahora
        </a>
      </nav>

      {/* HERO SECTION (Inicio) */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        {/* Imagen de fondo (asegúrate de tener hero-bg.jpeg en la carpeta public) */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* Capa oscura para leer el texto */}
        </div>
        
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Tu pausa perfecta
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Café de especialidad, postres artesanales y el mejor ambiente para tu día.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#menu" className="bg-[#c4a484] text-white px-8 py-3 rounded-full font-bold hover:bg-[#a68a6d] transition">
              Ver Menú
            </a>
            <a href="#ubicacion" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DEL MENÚ */}
      <section id="menu" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#4a3f35]">Nuestro Menú</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Categoría 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#c4a484] pb-2">Bebidas Calientes</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Expreso</h4>
                  <p className="text-sm text-gray-500">Intenso y aromático</p>
                </div>
                <span className="font-bold">$80.00</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Capuchino</h4>
                  <p className="text-sm text-gray-500">Expreso, leche vaporizada y espuma</p>
                </div>
                <span className="font-bold">$210.00</span>
              </li>
            </ul>
          </div>

          {/* Categoría 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#c4a484] pb-2">Brunch</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Waffles Fusion</h4>
                  <p className="text-sm text-gray-500">Frutas frescas</p>
                </div>
                <span className="font-bold">$570.00</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Croissant Serrano </h4>
                  <p className="text-sm text-gray-500">Jamon, Queso</p>
                </div>
                <span className="font-bold">$620.50</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE UBICACIÓN Y FOOTER */}
      <section id="ubicacion" className="bg-[#4a3f35] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ven a visitarnos</h2>
          <p className="mb-8">Estamos listos para prepararte tu café favorito.</p>
          
          <div className="bg-white/10 p-6 rounded-2xl mb-8 text-left inline-block">
            <p className="font-bold mb-2">📍 Dirección:</p>
            <p className="mb-4 text-gray-300">Calle Costa Rica 123, Santo Domingo Este</p>
            
            <p className="font-bold mb-2">⏰ Horarios:</p>
            <p className="text-gray-300">Lunes a Domingos: 9:00 AM - 7:00 PM</p>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            © {new Date().getFullYear()} Odetsha Coffee. Todos los derechos reservados.
          </div>
        </div>
      </section>

    </main>
  );
}