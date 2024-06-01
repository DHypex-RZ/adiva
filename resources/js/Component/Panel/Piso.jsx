import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Departamento from "./Departamento";

export default function Piso({ data, usuario }) {

   return (
      <Card className="md:col-span-1">
         <CardHeader>
            <h2>Planta {data.floor}</h2>
         </CardHeader>
         <Divider />
         <CardBody className="grid grid-cols-2">
            {data.department.map((d) => <Departamento key={d.id} data={d} usuario={usuario} />)}
         </CardBody>
      </Card>
   )
}