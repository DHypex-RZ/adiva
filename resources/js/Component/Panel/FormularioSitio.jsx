import { useForm } from "@inertiajs/react"
import { Button, Input } from "@nextui-org/react"

export default function FormularioEdificio({ edificio }) {
   const { data, setData, post, processing } = useForm({
      edificio: edificio,
      nombre: ""
   })

   function enviarFormulario(e) {
      e.preventDefault()
      post("/sitios", {
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
         <h2 className="text-lg text-center mb-2">Nuevo espacio común</h2>
         <Input
            type="text" placeholder="Nombre del sitio" name="nombre" isRequired
            labelPlacement="outside" onChange={e => setData("nombre", e.target.value)}
         />
         <Button
            className="w-1/2 m-auto mt-3" color="primary" disabled={processing} type="submit"
            variant="shadow"
         >
            Crear
         </Button>
      </ form>
   )
}