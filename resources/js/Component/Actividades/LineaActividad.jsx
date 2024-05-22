export default function LineaActividad({ data }) {
   let extraClass = data.id % 2 != 1 ? "bg-gray-200" : ""

   return (
      <>
         <div
            className={"w-full h-full py-1 text-center " + extraClass}
         >
            {data.place.name}
         </div>
         <div
            className={"w-full h-full py-1 text-center " + extraClass}
         >
            {data.date}
         </div>
         <div
            className={"w-full h-full py-1 text-center " + extraClass}
         >
            {data.schedule}
         </div>
      </>
   )
}