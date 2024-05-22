import {
    Avatar, Button, Popover, PopoverContent,
    PopoverTrigger, Tooltip
} from "@nextui-org/react";
import { Link } from "@inertiajs/react";
import BotonEditarImagen from "@/Component/Cabecera/FomularioPerfil.jsx";

export default function AvatarIcono({ usuario }) {

    return (
        <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
                <Avatar
                    src={"images/" + usuario.image} isBordered className="hover:cursor-pointer"
                />
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2 flex flex-col justify-center">
                    <p className="self-center pb-1 cursor-default font-bold">
                        {usuario.name}
                    </p>
                    <p className="self-center py-1 cursor-default">
                        {usuario.email}
                    </p>
                    <BotonEditarImagen imagen={usuario.image} />
                    <Tooltip
                        content="En caso querer dejar la comunidad de Adiva o mudanza"
                        placement="bottom" color="danger"
                    >
                        <Button
                            color="danger" variant="shadow" as={Link} method="delete"
                            className="self-center mt-1 w-full" href={"/google_auth/delete"}
                            data={{ email: usuario.email, id: usuario.id }}
                        >
                            Borrar cuenta
                        </Button>
                    </Tooltip>
                </div>
            </PopoverContent>
        </Popover>
    )
}
