import { useEffect, useState } from "react";
import FormularioEdificio from "@/Component/Panel/FormularioEdificio";
import FormularioSitio from "@/Component/Panel/FormularioSitio";
import Piso from "@/Component/Panel/Piso";
import {
   Button, Card, CardBody, CardFooter, CardHeader, Divider,
   Popover, PopoverContent, PopoverTrigger,
} from "@nextui-org/react";
import Sitio from "@/Component/Util/Sitio";

export default function PanelControl({ edificio, usuario }) {
   const [pisos, setPisos] = useState([])

   useEffect(() => {
      const peticion = async function () {
         let peticion = await fetch("/pisos/" + edificio.id)
         let data = await peticion.json()
         setPisos(data)
      }

      peticion()
   }, [usuario.department])

   return (
      <Card>
         <CardHeader>
            <h2 className="text-xl">
               {edificio.type.charAt(0).toUpperCase() + edificio.type.slice(1)} {edificio.address.charAt(0).toUpperCase()
                  + edificio.address.slice(1)}, Nº {edificio.number}
            </h2>
         </CardHeader>
         <Divider />
         <CardBody>
            {
               edificio.floors === null
                  ?
                  <FormularioEdificio id={edificio.id} />
                  :
                  <div className="grid grid-cols-2 gap-3">
                     {pisos.map((p) => <Piso key={p.id} data={p} usuario={usuario} />)}
                  </div>
            }
         </CardBody>
         <Divider />
         <CardFooter className="grid grid-cols-3 gap-2">
            <h3 className="text-lg text-center">Espacios comunes</h3>
            <Sitio data={edificio.places} />
            <Popover backdrop="blur" placement="top">
               <PopoverTrigger>
                  <Button color="success" variant="shadow" className="w-fit justify-self-center">
                     Nuevo espacio
                  </Button>
               </PopoverTrigger>
               <PopoverContent className="w-[340px]">
                  <FormularioSitio edificio={edificio.id} />
               </PopoverContent>
            </Popover>
         </CardFooter>

      </Card >
   )
}