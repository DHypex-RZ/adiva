import { Link } from "@inertiajs/react"
import { Button } from "@nextui-org/react"

export default function LineaActividad({ data, isAdmin, onClick }) {
   let extraClass = data.id % 2 != 1 ? "bg-gray-200" : ""

   return (
      <>
         <div className={"w-full h-full py-1 text-center " + extraClass}>
            {data.place.name}
         </div>
         <div className={"w-full h-full py-1 text-center " + extraClass}>
            {data.date}
         </div>
         <div className={"w-full h-full py-1 text-center " + extraClass}>
            {data.schedule}
         </div>
         {
            isAdmin
               ?
               <div
                  className={"col-span-3 flex justify-center items-center " + extraClass}
               >
                  <Button
                     className={"w-fit justify-self-center mb-2"} color="danger" variant="shadow"
                     as={Link} method="delete" data={{ actividad: data.id }} href="/actividades"
                     preserveScroll onClick={onClick}
                  >
                     Eliminar actividad
                  </Button>
               </div>
               :
               <></>
         }
      </>
   )
}