import { Head } from "@inertiajs/react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "@inertiajs/react";

export default function Comunidad() {
   const { data, setData, post, processing } = useForm({
      cp: "",
      tipo: "",
      direccion: "",
      numero: "",
   })

   function enviarFormulario(e) {
      e.preventDefault()
      data.direccion = data.direccion.trim().toLowerCase()
      data.cp = data.cp.trim().toLowerCase()
      data.numero = data.numero.trim().toLowerCase()
      post("/asignar-comunidad")
   }

   return (
      <>
         <Head title="Busca tu comunidad" />
         <div className="h-screen w-full flex justify-center items-center">
            <form
               className="w-screen md:w-1/2 xl:w-1/3 bg-white px-10 py-7 rounded-2xl
                  flex flex-col items-center shadow-2xl" onSubmit={enviarFormulario}
            >
               <h2 className="text-2xl">Bienvenido a Adiva</h2>
               <p className="text-sm mb-4 text-gray-400">Asegúrate de que la información sea correcta</p>
               <Input
                  type="text" label="Código postal" placeholder="Código postal de la comunidad" name="cp"
                  isRequired labelPlacement="outside" className="my-3" value={data.cp}
                  onChange={e => setData("cp", e.target.value)} style={{ border: 0 }}
               />
               <Select
                  label="Tipo de calle" placeholder="Tipo de calle de la comunidad" isRequired name="tipo"
                  labelPlacement="outside" className="my-3" onChange={(e) => setData("tipo", e.target.value)}
               >
                  <SelectItem key={"calle"}>Calle</SelectItem>
                  <SelectItem key={"avenida"}>Avenida</SelectItem>
               </Select>
               <Input
                  type="text" label="Dirección" placeholder="Dirección de la comunidad" name="direccion"
                  isRequired labelPlacement="outside" className="my-3" value={data.direccion}
                  onChange={e => setData("direccion", e.target.value)} style={{ border: 0 }}
               />
               <Input
                  type="number" label="Número" placeholder="Número de la comunidad" name="numero" isRequired
                  labelPlacement="outside" className="my-3" value={data.numero} style={{ border: 0 }}
                  onChange={e => setData("numero", e.target.value)} defaultValue="1"

               />
               <Button color="primary" variant="flat" className="my-3" type="submit" disabled={processing}>
                  Acceder a la comunidad
               </Button>
            </form>
         </div>
      </>
   )
}