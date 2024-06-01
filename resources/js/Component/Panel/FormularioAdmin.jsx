import { Popover, PopoverTrigger, PopoverContent, Button, user } from "@nextui-org/react"
import BotonTemporizador from "@/Component/Util/BotonTemporizador"
import { router } from "@inertiajs/react"

export default function FormularioAdmin({ usuario }) {
   return (
      <Popover backdrop="blur" placement="bottom">
         <PopoverTrigger>
            <Button color="secondary" variant="shadow">
               Ser administrador
            </Button>
         </PopoverTrigger>
         <PopoverContent>
            <ul className="list-disc ml-4">
               <p
                  className="text-lg font-bold underline mb-2"
               >Capacidades que tendrás como administrador</p>
               <li>Serás administrador por un mes</li>
               <li>
                  Expulsar usuarios <br />
                  (Por favor no abuses y expulsa a aquellos que se lo merezcan)
               </li>
               <li>Eliminar actividades</li>
               <li>Eliminar sitios</li>
               <li>Ver todos los incidentes</li>
               <li>Eliminar incidentes</li>
               <li>
                  Editar cantidad de pisos y departamentos <br />
                  (Solo se puede aumentar)
               </li>
            </ul>
            <BotonTemporizador onClick={() => router.post("/admin", { user: usuario })} />
         </PopoverContent>
      </Popover>
   )
}