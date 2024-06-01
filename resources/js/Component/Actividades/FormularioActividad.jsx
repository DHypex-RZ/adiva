import { useForm } from "@inertiajs/react";
import Sitio from "@/Component/Util/Sitio";
import { Button, DateInput, TimeInput } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";


export default function FormularioActividad({ edificio }) {
   const { data, setData, post, processing, errors } = useForm({
      edificio: edificio.id,
      sitio: "",
      fecha: {},
      horario: {}
   })

   function enviarFormulario() {
      post("/actividades", {
         preserveScroll: true,
         onSuccess: () => {
            const element = document.elementFromPoint(0, 0)
            if (element) {
               const event = new MouseEvent('click', {
                  view: window,
                  bubbles: true,
                  cancelable: true,
                  clientX: 0,
                  clientY: 0
               })
               element.dispatchEvent(event)
            }
         }
      })
   }

   return (
      <form className="flex flex-col" onSubmit={enviarFormulario}>
         <h2 className="text-lg text-center mb-2">Nueva actividad</h2>
         <Sitio
            data={edificio.places} className="mt-2"
            onChange={(e) => setData("sitio", e.target.value)}
         />
         <I18nProvider locale="es-ES-spain">
            <DateInput
               className="mt-2" onChange={(e) => setData("fecha", e)} isRequired
               color={errors.fecha ? "danger" : "default"}
            />
         </I18nProvider>
         <TimeInput
            className="mt-2" labelPlacement="outside-left" label="Horario" hourCycle={24}
            onChange={(e) => setData("horario", e)} isRequired
         />
         <Button
            className="w-1/2 m-auto mt-5" color="primary" disabled={processing} type="submit"
            variant="shadow"
         >
            Crear
         </Button>
      </ form>
   )
}