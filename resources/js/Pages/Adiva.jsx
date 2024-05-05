import Header from "@/Layout/Header.jsx";
import {Head, usePage} from "@inertiajs/react";
import Footer from "@/Layout/Footer.jsx";

export default function Adiva({nombre}){
    const {user} = usePage().props.auth
    return(
    <>
        <Head title="Inicio"/>
        <Header usuario={user}/>
        <p>Adiva</p>
        <Footer/>
    </>
    )
}
