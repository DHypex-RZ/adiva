import { Head } from "@inertiajs/react";
import Header from "@/Layout/Header.jsx";
import Footer from "@/Layout/Footer.jsx";

export default function Presentacion() {
   return (
      <>
         <Head title="Presentación" />
         <Header usuario={null} />
         <div className="relative flex flex-col justify-center items-center h-screen">
            <img
               className="absolute w-full h-full object-cover" alt="Imagen de presentación"
               src={"/images/fondo_vista_presentacion.jpg"}
            />
            <div className="relative bg-black/70 p-4 rounded-3xl w-1/2">
               <p className="text-white text-3xl text-center">Bienvenidos a Adiva</p>
               <p className="text-white text-xl text-center text-pretty">
                  Descubre cómo juntos podemos construir una comunidad más fuerte y unida,
                  disfrutando de espacios comunes de calidad,
                  actividades comunitarias enriquecedoras y una gestión transparente y eficiente.
                  ¡Únete a nosotros y sé parte de Adiva!
               </p>
            </div>
         </div>
         <Footer />
      </>
   );
}
