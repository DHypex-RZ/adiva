import Header from "@/Layout/Header.jsx";
import {Head} from "@inertiajs/react";
import Footer from "@/Layout/Footer.jsx";
import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";

export default function Politicas() {
    return (
        <>
            <Head title="Política de privacidad y cookies"/>
            <Header usuario={null}/>
            <div className="my-4 mx-10 flex justify-center">
                <Card className="min-w-[450px] w-[1000px]">
                    <CardHeader className="flex justify-center">
                        <h2 className="text-2xl">Política de privacidad y cookies</h2>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>
                            En Adiva, nos comprometemos a proteger la privacidad de nuestros usuarios y a utilizar sus
                            datos personales de manera responsable. Esta Política de Privacidad y Cookies describe cómo
                            recolectamos, utilizamos y divulgamos sus datos personales cuando utiliza nuestro sitio web,
                            aplicaciones móviles u otros servicios.
                        </p>
                        <p className="text-xl mt-2">Recopilación de datos personales</p>
                        <ul className="list-disc ml-4">
                            <p className="text-lg">
                                Recopilamos varios tipos de datos personales sobre usted, incluyendo:
                            </p>
                            <li>
                                Información de contacto: como su nombre, dirección de correo electrónico y dirección
                                postal.
                            </li>
                            <p className="text-lg">Recopilamos estos datos de diversas maneras, incluyendo:</p>
                            <li>
                                Cuando usted nos los proporciona directamente: como cuando crea una cuenta, realiza una
                                compra o se suscribe a nuestro boletín informativo.
                            </li>
                            <li>
                                Cuando utiliza nuestros Servicios: como cuando navega por nuestro sitio web, utiliza
                                nuestras aplicaciones móviles o interactúa con nosotros en las redes sociales.
                            </li>
                            <li>
                                De terceros: como proveedores de servicios, plataformas de redes sociales y
                                sitios web de terceros.
                            </li>
                        </ul>
                        <p className="text-xl mt-2">Uso de datos personales</p>
                        <ul className="list-disc ml-4">
                            <p className="text-lg">Utilizamos sus datos personales para los siguientes propósitos:</p>
                            <li>
                                Para proporcionarle y mejorar nuestros Servicios: como para procesar sus pedidos,
                                proporcionarle asistencia al cliente y desarrollar nuevas funciones.
                            </li>
                            <li>
                                Para comunicarnos con usted: como para enviarle correos electrónicos de marketing,
                                notificaciones de cuenta y actualizaciones de servicios.
                            </li>
                            <li>
                                Para personalizar su experiencia: como para recomendarle productos y servicios que
                                puedan interesarle.
                            </li>
                            <li>
                                Para analizar y comprender cómo utiliza nuestros Servicios: con el fin de mejorarlos y
                                ofrecerle una experiencia más personalizada.
                            </li>
                            <li>
                                Para prevenir el fraude y proteger la seguridad: como para detectar y prevenir
                                actividades fraudulentas.
                            </li>
                        </ul>
                        <p className="text-xl mt-2">Divulgación de datos personales</p>
                        <ul className="list-disc ml-4">
                            <p className="text-lg">
                                Podemos divulgar sus datos personales a terceros en las siguientes circunstancias:
                            </p>
                            <li>
                                A las autoridades gubernamentales: cuando así lo exija la ley o en caso de
                                una investigación legal.
                            </li>
                            <li>
                                A terceros con su consentimiento: como cuando usted decide compartir sus datos con
                                plataformas de redes sociales u otras aplicaciones de terceros.
                            </li>
                        </ul>
                        <p className="text-xl mt-2">Sus derechos</p>
                        <ul className="list-disc ml-4">
                            <p className="text-lg">
                                Usted tiene ciertos derechos sobre sus datos personales, incluyendo:
                            </p>
                            <li>
                                El derecho a acceder a sus datos personales: puede solicitar una copia de sus datos
                                personales que tenemos en nuestro poder.
                            </li>
                            <li>
                                El derecho a rectificar sus datos personales: puede solicitar que rectifiquemos
                                cualquier información incorrecta o incompleta que tengamos sobre usted.
                            </li>
                            <li>
                                El derecho a eliminar sus datos personales: puede solicitar que eliminemos sus datos
                                personales en determinadas circunstancias.
                            </li>
                            <li>
                                El derecho a restringir el tratamiento de sus datos personales: puede solicitar que
                                restrinjamos el tratamiento de sus datos personales en determinadas circunstancias.
                            </li>
                            <li>
                                El derecho a oponerse al tratamiento de sus datos personales: puede oponerse al
                                tratamiento de sus datos personales en determinadas circunstancias.
                            </li>
                            <li>
                                El derecho a la portabilidad de sus datos: puede solicitar que le proporcionemos sus
                                datos personales en un formato estructurado, de uso común y legible por máquina, y que
                                los transmitamos a otro responsable del tratamiento en determinadas circunstancias.
                            </li>
                        </ul>
                        <p className="text-xl mt-2">
                            Cookies
                        </p>
                        <p>
                            Utilizamos cookies y tecnologías similares para recopilar y almacenar información sobre su
                            uso de nuestros Servicios. Las cookies son pequeños archivos de texto que se almacenan en su
                            dispositivo cuando visita un sitio web. Se utilizan para recordar su información, como sus
                            preferencias de idioma y de inicio de sesión, y para ayudarnos a comprender cómo utiliza
                            nuestros Servicios.
                        </p>
                        <p>
                            Puede configurar su navegador para que bloquee todas las cookies o para que le avise antes
                            de que se instale una cookie. Sin embargo, si bloquea todas las cookies, es posible que no
                            pueda utilizar algunas de las funciones de nuestros Servicios.
                        </p>
                        <p className="text-xl mt-2">Cambios en esta Política</p>
                        <p>
                            Podemos actualizar esta Política periódicamente para reflejar cambios en nuestras prácticas
                            de privacidad o los requisitos legales. Le notificaremos de cualquier cambio material
                            mediante la publicación de la Política revisada en nuestros Servicios.
                        </p>
                    </CardBody>
                </Card>
            </div>
            <Footer/>
        </>
)
}
