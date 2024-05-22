import { Select, SelectItem } from "@nextui-org/react"

export default function Sitio({ data, onChange = null }) {
   return (
      <Select
         label="Sitios" placeholder="Ver espacios comunes" onChange={onChange}
         isRequired={onChange !== null}
      >
         {
            Object.keys(data).length === 0
               ?
               <SelectItem>
                  No hay espacios comunes
               </SelectItem>
               :
               data.map((p) => <SelectItem key={p.id}>{p.name}</SelectItem>)
         }
      </Select>
   )
}