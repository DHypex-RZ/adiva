import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function TablaIncidente({ incidentes }) {
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
                  </Card>
               )
         }
      </div>
   )
}