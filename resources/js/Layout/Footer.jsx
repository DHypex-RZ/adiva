import FacebookSVG from "@/Component/SVG/FacebookSVG.jsx";
import TwitterSVG from "@/Component/SVG/TwitterSVG.jsx";
import InstagramSVG from "@/Component/SVG/InstagramSVG.jsx";
import {Link} from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="static w-full bottom-0 grid grid-cols-3 py-2 border-t-1">
            <div className="flex justify-center items-center">
                <Link href={"/politica-privacidad-y-cookies"}>Política de privacidad y cookies</Link>
            </div>
            <div className="flex justify-center items-center">
                <p>Adiva © Copyright {new Date().getUTCFullYear()}</p>
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-center pb-2 cursor-default">Redes sociales</h3>
                <div className="flex justify-around">
                    <FacebookSVG/>
                    <TwitterSVG/>
                    <InstagramSVG/>
                </div>
            </div>
        </footer>
    )
}
