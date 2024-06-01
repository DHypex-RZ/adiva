import { useEffect, useState } from "react"
import LineaActividad from "@/Component/Actividades/LineaActividad"

export default function TablaActividad({ fecha, edificio, usuario }) {
   const [actividades, setActividades] = useState([])

   useEffect(() => {
      const obtenerActividades = async () => {
         let peticion = await fetch(`/actividades/${edificio}/${fecha}`)
         let data = await peticion.json()
         setActividades(data)
      }

      obtenerActividades();
   }, [fecha])

   return (
      <div className="grid grid-cols-3 grid-rows-auto">
         <div className="">
            <p className="text-center font-bold">
               Ubicación
            </p>
         </div>
         <div className="">
            <p className="text-center font-bold">
               Fecha
            </p>
         </div>
         <div className="">
            <p className="text-center font-bold">
               Hora
            </p>
         </div >
         {
            actividades.length === 0
               ?
               <p className="col-span-3 text-center">Sin actividades</p>
               :
               actividades.map((a) => <LineaActividad
                  key={a.id} data={a} isAdmin={usuario.admin}
                  onClick={() => { window.location.reload() }}
               />)
         }
      </div >
   )
}