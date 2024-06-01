import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export default function BotonTemporizador({onClick}) {
   const [temporizador, setTemporizador] = useState(15)

   useEffect(() => {
      const intervalo = setInterval(() => {
         if (temporizador > 0) {
            setTemporizador(temporizador - 1)
         }
      }, 1000)

      return () => clearInterval(intervalo)
   }, [temporizador])

   return (
      <Button
         className="mt-2" color="primary" isDisabled={temporizador !== 0} onClick={onClick}
      >
         {temporizador !== 0 ? "Espera " + temporizador + " segundos" : "Acepto ser administrador"}
      </Button>
   )
}