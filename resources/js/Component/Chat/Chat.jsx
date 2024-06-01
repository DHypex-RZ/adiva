import { useForm } from "@inertiajs/react"
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider } from "@nextui-org/react"
import { Textarea } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function Chat({ comunidad, usuario }) {
   const [temporizador, setTemporizador] = useState(100)
   const [mensajes, setMensajes] = useState([])

   useEffect(() => {
      const obtenerMensajes = async () => {
         setTimeout(async () => {
            let peticion = await fetch("/mensajes/" + comunidad);
            let data = await peticion.json()
            setMensajes(data)
            setTemporizador(5000)
         }, temporizador)
      }

      obtenerMensajes()
   }, [mensajes])

   const { data, setData, post, processing } = useForm({
      edificio: comunidad,
      usuario: usuario.id,
      comentario: ""
   })

   function enviarFormulario(e) {
      e.preventDefault()
      data.comentario = data.comentario.trim()
      post("/mensajes", {
         preserveScroll: true,
         onSuccess: () => { setData("comentario", "") }
      })
   }

   return (
      <Card>
         <CardHeader>
            <h2 className="text-xl">Chat comunitario</h2>
         </CardHeader>
         <Divider />
         <CardBody className="h-[300px] overflow-auto flex flex-col gap-3">
            {mensajes.map((m) =>
               <div key={m.id} className={"flex " + (m.user === usuario.id ? "justify-end" : "justify-start")}>
                  <Chip
                     size="md" color={m.user === usuario.id ? "success" : "default"}
                     avatar={
                        m.user !== usuario.id
                           ?
                           <Avatar src={"images/" + m.image} />
                           :
                           <></>
                     }
                  >{m.comment}
                  </Chip>
               </div>
            )}
         </CardBody>
         <Divider />
         <CardFooter >
            <form className="grid grid-cols-3 gap-4 w-full items-center" onSubmit={enviarFormulario}>
               <Textarea
                  disableAnimation disableAutosize maxLength={255} label="Comentario"
                  onChange={(e) => setData("comentario", e.target.value)} isRequired
                  className="col-span-2" value={data.comentario}
                  description={"Limite de caracteres: " + (255 - data.comentario.length)}
                  style={{ border: 0 }}
               />
               <Button
                  type="submit" color="success" disabled={processing}
               >
                  Enviar
               </Button>
            </form>
         </CardFooter>
      </Card>
   )
}