import {Avatar, Button, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import GoogleSVG from "@/Component/GoogleSVG.jsx";
import {Link, router} from "@inertiajs/react";

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
                            <Button color="success" variant="shadow" endContent={<GoogleSVG/>}>
                                Iniciar sesión con Google
                            </Button>
                        </Link>
                        :
                        <>
                            <Avatar isBordered className="hover:cursor-pointer"/>
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
