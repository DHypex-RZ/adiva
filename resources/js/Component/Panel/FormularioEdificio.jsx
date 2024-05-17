import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useForm } from "@inertiajs/react";

export default function FormularioEdificio({ id }) {
   const { data, setData, post, processing } = useForm({
      edificio: id,
      pisos: 0,
      departamentos: 0
   })

   function enviarFormulario(e) {
      e.preventDefault()
      post("/info-comunidad")
   }

   return (
      <Card className="mt-4">
         <CardHeader>
            <p>Parece que todavía faltan datos </p>
         </CardHeader>
         <CardBody>
            <h3 className="text-gray-400 mb-3">Datos del edificio - Este apartado no se puede cambiar luego</h3>
            <form className="flex flex-col justify-center" onSubmit={enviarFormulario}>
               <Input
                  type="number" label="Pisos" placeholder="Número de pisos del edificio" name="pisos" isRequired
                  labelPlacement="outside" className="pb-3" color={data.pisos <= 0 ? "danger" : "default"}
                  onChange={e => setData("pisos", e.target.value)}
               />
               <Input
                  type="number" label="Departamentos" placeholder="Departamentos por piso" name="departamentos" isRequired
                  labelPlacement="outside" className="pb-3" color={data.departamentos <= 0 ? "danger" : "default"}
                  onChange={e => setData("departamentos", e.target.value)}
               />
               <Button type="submit" className="mt-3 w-1/2 self-center" color="primary" disabled={processing}>
                  Continuar
               </Button>
            </form>
         </CardBody>
      </Card>
   )
}