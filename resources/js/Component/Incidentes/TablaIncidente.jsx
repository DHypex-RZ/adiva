import { Link } from "@inertiajs/react";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Incidente from "./Incidente";

export default function TablaIncidente({ incidentes, usuario }) {
   return (
      <div className="flex flex-col gap-y-2">
         {
            incidentes.length === 0
               ?
               <p className="text-center">Sin incidentes este mes</p>
               :
               incidentes.map((i) =>
                  <Card key={i.id}>
                     <CardHeader>
                        <h3><span
                           className="text-lg font-bold"
                        >{i.user_name}</span> - {i.day}/{i.month}/{i.year}</h3>
                     </CardHeader>
                     <Divider />
                     <CardBody>
                        <p className="text-sm">
                           {i.comment}
                        </p>
                     </CardBody>
                     <Divider />
                     {
                        usuario.admin
                           ?
                           <CardFooter className="flex justify-center">
                              <Button
                                 className="w-fit" color="danger" variant="shadow"
                                 as={Link} data={{ incidente: i.id }} method="delete" href={"/incidentes"}
                                 preserveScroll
                              >
                                 Eliminar incidente
                              </Button>
                           </CardFooter>

                           : <></>
                     }
                  </Card>
               )
         }
      </div>
   )
}