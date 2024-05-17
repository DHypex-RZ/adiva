import Header from "@/Layout/Header.jsx";
import { Head, usePage } from "@inertiajs/react";
import Footer from "@/Layout/Footer.jsx";
import PanelControl from "@/Component/Panel/PanelControl";

export default function Adiva({ comunidad }) {
   const { user } = usePage().props.auth

   return (
      <>
         <Head title="Inicio" />
         <Header usuario={user} />
         <main
            className="grid grid-cols-10 my-5 mx-2 md:mx-5 lg:mx-10 xl:mx-30 gap-2"
         >
            <div className="col-span-10 md:col-span-6 lg:col-span-7">
               <div className="mr-5 lg:mr-2">
                  <PanelControl edificio={comunidad} usuario={user} />
               </div>
            </div>
            <div className="col-span-10 md:col-span-4 lg:col-span-3 flex flex-col justify-center mr-3">

            </div>
         </main>
         <Footer />
      </>
   )
}
