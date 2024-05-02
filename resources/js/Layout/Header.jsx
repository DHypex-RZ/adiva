import {Button, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import GoogleSVG from "@/Component/GoogleSVG.jsx";
import {Link} from "@inertiajs/react";
import AvatarIcono from "@/Component/AvatarIcono.jsx";

export default function Header({usuario}) {
    return (
        <header>
            <Navbar>
                <NavbarBrand>
                    <h1
                        className="text-4xl font-bold cursor-default"
                    >Adiva</h1>
                </NavbarBrand>
                <NavbarContent justify="end">
                    {usuario === null ?
                        <Link href={"/google_auth/redirect"}>
                            <Button
                                color="success" variant="shadow" endContent={<GoogleSVG/>}>
                                Iniciar sesión con Google
                            </Button>
                        </Link>
                        :
                        <>
                            <AvatarIcono usuario={usuario}/>
                            <Link href={"/google_auth/logout"}>
                                <Button color="danger" variant="flat">
                                    Cerrar sesión en Adiva
                                </Button>
                            </Link>
                        </>
                    }
                </NavbarContent>
            </Navbar>
        </header>
    )
}
