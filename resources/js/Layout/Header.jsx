import {Button, Divider, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import GoogleSVG from "@/Component/SVG/GoogleSVG.jsx";
import {Link} from "@inertiajs/react";
import AvatarIcono from "@/Component/AvatarIcono.jsx";

export default function Header({usuario}) {
    return (
        <header className="sticky top-0 z-10">
            <Navbar>
                <NavbarBrand>
                    <Link href={"/"} className="text-4xl font-bold">Adiva</Link>
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
            <Divider/>
        </header>
    )
}
