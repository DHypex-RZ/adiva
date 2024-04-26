import {Head} from "@inertiajs/react";
import Header from "@/Layout/Header.jsx";
import Footer from "@/Layout/Footer.jsx";

export default function Presentacion() {
    return (
        <>
            <Head title="Presentación"/>
            <Header usuario={null}/>
            <p>Esta es la pagina de presentacion. muestra el inicio se sesión</p>
            <Footer/>
        </>
    )
}
