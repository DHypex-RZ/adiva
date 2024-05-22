import { useForm } from "@inertiajs/react";
import { Button, Textarea } from "@nextui-org/react";

export default function FormularioIncidente({ edificio, nombre }) {
   const { data, setData, post, processing } = useForm({
      edificio: edificio.id,
      incidente: "",
      nombre: nombre

   })

   function enviarFormulario(e) {
      e.preventDefault()
      data.incidente = data.incidente.trim()
      post("/incidentes", {
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
         <h2 className="text-lg text-center mb-2">
            Declarar incidencia
         </h2>
         <Textarea
            maxLength={255} placeholder="Comenta el incidente" label="Incidente"
            onChange={(e) => setData("incidente", e.target.value)} isRequired
            description={"Limite de caracteres: " + (255 - data.incidente.length)}
         />
         <Button
            className="w-1/2 m-auto mt-3" color="danger" disabled={processing}
            type="submit" variant="shadow"
         >
            Crear
         </Button>
      </form>
   )
}