import CarouselHome from './componentsHome/CarouselHome';

export const Home = () => {
  return (
    <div className="grid max-w-full bg-slate-200">
      {/* Carrusel */}
      <CarouselHome />

      {/* Sección de Bienvenida */}
      <div className="rounded grid w-full h-72 bg-blue-600  place-items-center">
        <div className="text-center m-4">
          <h2 className="text-white text-2xl font-bold font-serif">
            Bienvenido a Tvnet
          </h2>
          <p className="text-white font-bold font-serif m-3">
            Somos una Empresa de Televisión por Cable e Internet con tecnología de Fibra Óptica.
          </p>
          <div className='flex justify-center'>
            <div className='w-[150px] h-[35px] mt-4 rounded-xl bg-white font-serif cursor-pointer hover:bg-amber-500 hover:text-white'>
              <a className="flex items-center justify-center h-full font-">Conoce más</a>
            </div>
          </div>
        </div>
      </div> 

      {/* Mapa de Google */}
      <div className="grid w-full h-[450px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.9768336876787!2d-97.68905098574895!3d21.3514089820625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d9ddfa78ffe335%3A0x23f877ad94b55545!2sTvnet!5e0!3m2!1ses-419!2smx!4v1666734338838!5m2!1ses-419!2smx"
          allowFullScreen=""
          loading="lazy"
          title="Mapa de Tvnet">
          </iframe>
      </div>
    </div>
  );
};
