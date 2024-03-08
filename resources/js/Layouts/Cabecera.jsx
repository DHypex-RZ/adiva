import {
   Button,
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem
} from "@nextui-org/react";
import {Link, usePage} from "@inertiajs/react";

export default function Cabecera() {
   const {props} = usePage()

   return (
      <Navbar>
         <NavbarContent
            justify="start"
         >
            <NavbarBrand>
               <Link
                  href={route("inicio")} className="text-4xl font-bold"
               >Adiva</Link>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent
            justify="end"
         >
            {props.auth.user !== null ?
               <NavbarItem>
                  <Button
                     as={Link} color="primary" href={route("login")}
                  >Iniciar sesión</Button>
               </NavbarItem> :
               <>
                  <NavbarItem>
                     <Button
                        as={Link} color="default" href={route("perfil")}
                     >Mi perfil</Button>
                  </NavbarItem>
                  <NavbarItem>
                     <Button
                        as={Link} color="danger" variant="ghost" href={route("cerrar.sesion")} method="post"
                     >Cerrar sesión</Button>
                  </NavbarItem>
               </>
            }
         </NavbarContent>
      </Navbar>
   )
}
