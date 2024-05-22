import {
   Card, Popover, PopoverContent, PopoverTrigger,
   Divider, Button, CardHeader, CardFooter, CardBody
} from "@nextui-org/react";
import FormularioIncidente from "@/Component/Incidentes/FormularioIncidente";
import TablaIncidente from "@/Component/Incidentes/TablaIncidente";

export default function Incidente({ edificio, usuario }) {
   return (
      <Card className="mt-4">
         <CardHeader>
            <div className="w-full">
               <h3 className="text-center text-xl text-bold">Incidentes</h3>
            </div>
         </CardHeader>
         <Divider />
         <CardBody className="overflow-auto h-[400px]">
            <TablaIncidente incidentes={edificio.incidents} />
         </CardBody>
         <Divider />
         <CardFooter className="flex justify-center">
            <Popover backdrop="blur">
               <PopoverTrigger>
                  <Button color="danger" variant="shadow">
                     Nuevo incidente
                  </Button>
               </PopoverTrigger>
               <PopoverContent>
                  <FormularioIncidente edificio={edificio} nombre={usuario.name} />
               </PopoverContent>
            </Popover>
         </CardFooter>
      </ Card>
   )
}