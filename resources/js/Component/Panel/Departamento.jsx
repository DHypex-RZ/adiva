import { Link } from "@inertiajs/react";
import { Avatar, Button, Chip } from "@nextui-org/react";

export default function Departamento({ data, usuario, onClick }) {
   return (
      <div className="flex flex-col items-center justify-center my-2 col-span-2 lg:col-span-1">
         <Chip className="mb-2">
            {data.floor} {String.fromCharCode(data.department + 96).toUpperCase()}
         </Chip>
         {
            data.user
               ?
               <>
                  <Avatar isBordered src={data.user.image !== null ? "images/" + data.user.image : ""} />
                  <p className="text-center">{data.user.name}</p>
                  {
                     usuario.admin && data.user.id != usuario.id
                        ?
                        <Button
                           color="danger" variant="shadow" as={Link} method="post"
                           data={{ usuario: data.user.id }} href={"/expulsar"} onClick={onClick}
                        >Expulsar</Button>
                        :
                        <></>
                  }
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
                  <p className="text-center">Actualmente no esta ocupado</p>
         }
      </div>
   )
}