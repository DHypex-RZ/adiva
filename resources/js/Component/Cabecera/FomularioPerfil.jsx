import {
   Button, Input, Popover,
   PopoverContent, PopoverTrigger
} from "@nextui-org/react";

export default function BotonEditarImagen() {
   const csrf = document.getElementById("csrf-token").content
   return (
      <Popover backdrop="blur" placement="bottom">
         <PopoverTrigger>
            <Button
               color="success" variant="shadow" className="self-center my-1 w-full"
            >
               Editar Perfil
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[240px]">
            {(titleProps) => (
               <>
                  <div className="px-1 py-2 w-full flex flex-col">
                     <p className="text-small font-bold text-foreground self-center" {...titleProps}>
                        Foto de pefil
                     </p>
                  </div>
                  <div className="mt-2 flex flex-col gap-2 w-full">
                     <form encType="multipart/form-data" method="post" action="/editar-perfil">
                        <input name="_token" type="hidden" defaultValue={csrf} />
                        <Input
                           type="text" label="Nombre" placeholder="Cambia tu nombre de pefil"
                           className="mb-4" name="nombre" labelPlacement="outside"
                        />
                        <Input type="file" name="imagen" />
                        <Button type="submit" color="primary" className="mt-4 w-full">
                           Aceptar
                        </Button>
                     </form>
                  </div>
               </>
            )}
         </PopoverContent>
      </Popover>
   )
}
