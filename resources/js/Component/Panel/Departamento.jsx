import { Link } from "@inertiajs/react";
import { Avatar, Button } from "@nextui-org/react";

export default function Departamento({ data, usuario }) {
   return (
      <div className="flex flex-col items-center justify-center my-2">
         <p className="text-center bg-gray-100 p-1 border rounded-full mb-2 cursor-pointer hover:bg-cyan-400">
            {data.floor} {String.fromCharCode(data.department + 96).toUpperCase()}
         </p>
         {
            data.user
               ?
               <>
                  <Avatar isBordered src={data.user.image} /> <p>{data.user.email}</p>
               </>
               : !usuario.department
                  ?
                  <Button
                     color="success" variant="shadow" className="" as={Link}
                     href={"/mudarse"} method="post" data={{ usuario: usuario.id, departamento: data.id }}
                  >
                     Mudarse aquí
                  </Button>
                  :
                  <p>Actualmente no esta ocupado</p>
         }
      </div>
   )
}