import TablaActividad from "@/Component/Actividades/TablaActividad";
import {
   Card, Popover, PopoverContent, PopoverTrigger,
   Divider, Button, CardHeader, CardFooter, CardBody
} from "@nextui-org/react";
import FormularioActividad from "@/Component/Actividades/FormularioActividad";

export default function Actividad({ fecha, edificio }) {
   const fechaBusqueda = fecha.year + "-" +
      (fecha.month > 10 ? fecha.month : '0' + fecha.month) +
      "-" + (fecha.day > 10 ? fecha.day : '0' + fecha.day)

   return (
      <Card className="mt-4">
         <CardHeader>
            <div className="w-full">
               <h3 className="text-center text-xl">Actividades del día</h3>
            </div>
         </CardHeader>
         <Divider />
         <CardBody>
            <TablaActividad fecha={fechaBusqueda} edificio={edificio.id} />
         </CardBody>
         <Divider />
         <CardFooter className="flex justify-center">
            <Popover className="w-[300px]" backdrop="blur">
               <PopoverTrigger>
                  <Button color="success" variant="shadow">
                     Nueva actividad
                  </Button>
               </PopoverTrigger>
               <PopoverContent>
                  <FormularioActividad edificio={edificio} />
               </PopoverContent>
            </Popover>
         </CardFooter>
      </ Card>
   )
}