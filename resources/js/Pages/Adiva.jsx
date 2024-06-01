import Header from "@/Layout/Header.jsx";
import { Head, usePage } from "@inertiajs/react";
import Footer from "@/Layout/Footer.jsx";
import PanelControl from "@/Component/Panel/PanelControl";
import { Calendar } from "@nextui-org/calendar";
import { today } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import Actividad from "@/Component/Actividades/Actividad";
import { useState } from "react";
import Incidente from "@/Component/Incidentes/Incidente";
import Chat from "@/Component/Chat/Chat";

export default function Adiva({ comunidad }) {
   const { user } = usePage().props.auth
   const [fecha, setFecha] = useState({
      day: "0",
      month: "0",
      year: "0000"
   })

   return (
      <>
         <Head title="Inicio" />
         <Header usuario={user} />
         <main className="grid grid-cols-10 my-5 mx-2 md:mx-5 lg:mx-10 xl:mx-30 gap-2">
            <div className="col-span-10 md:col-span-6 lg:col-span-7">
               <div className="mr-5 lg:mr 2 mb-4">
                  <Chat comunidad={comunidad.id} usuario={user} />
               </div>
               <div className="mr-5 lg:mr-2">
                  <PanelControl edificio={comunidad} usuario={user} />
               </div>
            </div>
            <div className="col-span-10 md:col-span-4 lg:col-span-3 flex flex-col justify-start mr-3">
               <I18nProvider locale="ES-es-spain">
                  <Calendar
                     showMonthAndYearPickers defaultValue={today} className="max-witdh-[263.4px]"
                     onFocusChange={(e) => setFecha({ day: e.day, month: e.month, year: e.year })}
                     color="success"
                  />
               </I18nProvider>
               <Actividad fecha={fecha} edificio={comunidad} usuario={user.admin ? user : null} />
               <Incidente edificio={comunidad} usuario={user} />
            </div>
         </main>
         <Footer />
      </>
   )
}
