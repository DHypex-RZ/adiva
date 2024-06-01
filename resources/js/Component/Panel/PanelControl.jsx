import { useEffect, useState } from "react";
import FormularioEdificio from "@/Component/Panel/FormularioEdificio";
import FormularioSitio from "@/Component/Panel/FormularioSitio";
import Piso from "@/Component/Panel/Piso";
import {
   Button, Card, CardBody, CardFooter, CardHeader, Divider,
   Popover, PopoverContent, PopoverTrigger,
} from "@nextui-org/react";
import Sitio from "@/Component/Util/Sitio";
import FormularioAdmin from "./FormularioAdmin";
import { Link } from "@inertiajs/react";

export default function PanelControl({ edificio, usuario }) {
   const fecha = usuario.admin_time != null ? new Date(usuario.admin_time) : new Date()
   const [pisos, setPisos] = useState([])
   const [sitio, setSitio] = useState(null)

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
         <CardHeader className="flex justify-between">
            <h2 className="text-xl">
               {edificio.type.charAt(0).toUpperCase()
                  + edificio.type.slice(1)} {edificio.address.charAt(0).toUpperCase()
                     + edificio.address.slice(1)}, Nº {edificio.number}
            </h2>
            {edificio.admin !== true ? <FormularioAdmin usuario={usuario.id} /> : <></>}
         </CardHeader>
         <Divider />
         <CardBody>
            {
               edificio.floors === null
                  ?
                  <FormularioEdificio id={edificio.id} />
                  :
                  <>
                     <p className="text-center text-sm text-gray-400 mb-2">
                        {
                           usuario.admin == true
                              ?
                              `Serás el administrador hasta el ${fecha.getDate() < 10
                                 ? "0" + fecha.getDate()
                                 : fecha.getDate()}/${(fecha.getUTCMonth() + 1) < 10
                                    ? "0" + (fecha.getUTCMonth() + 1)
                                    : (fecha.getUTCMonth() + 1)}/${fecha.getFullYear()}`
                              : ""
                        }
                     </p>
                     <div className="grid grid-cols-2 gap-3">
                        {
                           pisos.map((p) =>
                              <Piso
                                 key={p.id} data={p} usuario={usuario}
                                 onClick={() => { window.location.reload() }}
                              />)
                        }
                        {
                           usuario.admin
                              ?
                              <Popover backdrop="blur">
                                 <PopoverTrigger>
                                    <Button
                                       className="justify-self-center text-3xl text-white my-8" color="success"
                                       variant="shadow"
                                    >
                                       +
                                    </Button>
                                 </PopoverTrigger>
                                 <PopoverContent>
                                    <FormularioEdificio id={edificio.id} actualizar={true} />
                                 </PopoverContent>
                              </Popover>
                              : <></>
                        }
                     </div>
                  </>
            }
         </CardBody>
         <Divider />
         <CardFooter className="grid grid-cols-3 gap-2">
            <h3 className="text-lg text-center">Espacios comunes</h3>
            <Sitio
               data={edificio.places}
               onChange={usuario.admin == true ? (e) => setSitio(e.target.value) : null}
            />
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
            {
               usuario.admin == true
                  ?
                  <Button
                     color="danger" variant="shadow" className="col-end-3 w-[175px] justify-self-center"
                     as={Link} method="delete" data={{ sitio: sitio, admin: usuario.id, comunidad: edificio.id }}
                     href={"/sitios"} isDisabled={sitio == null} preserveScroll
                  >
                     Eliminar sitio
                  </Button>
                  : <></>
            }
         </CardFooter>
      </Card >
   )
}