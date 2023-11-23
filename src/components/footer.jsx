import { Stethoscope, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants"

export function Footer() {
    return (
        <footer className="bg-zinc-100 py-16">
            <div className="flex gap-14 px-72">
                <div className="">
                    <div className="flex justify-between gap-3 items-center">
                        <Stethoscope size={36} className="text-primary" />
                        <h1 className="text-3xl font-bold"><span className="text-neutral-500">Tele</span><span className=" text-primary">Rehab</span></h1>
                    </div>
                    <div className="flex gap-4 ml-12 mt-4 text-neutral-500">
                        <Link><Instagram size={26} /></Link>
                        <Link><Facebook size={26} /></Link>
                        <Link><Linkedin size={26} /></Link>
                    </div>
                </div>
                <div className="flex gap-28">
                    <div className="ml-14 mt-12">
                        <ul>
                            <li className="font-bold text-neutral-500 text-2xl">SERVIÇOS</li>
                            <Link to={ROUTER_CONFIG.ACCESS} className="font-medium text-neutral-500 text-lg hover:underline"><li>Acessar Consulta</li></Link>
                            <Link to={ROUTER_CONFIG.BOOKING} className="font-medium text-neutral-500 text-lg hover:underline"><li>Agendamento</li></Link>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <ul>
                            <li className="font-bold text-neutral-500 text-2xl">ATENDIMENTO</li>
                            <Link className="font-medium text-neutral-500 text-lg hover:underline"><li>Canais de Saúde</li></Link>
                            <Link className="font-medium text-neutral-500 text-lg hover:underline"><li>Ouvidoria</li></Link>
                            <Link className="font-medium text-neutral-500 text-lg hover:underline"><li>Dúvidas Frequentes</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" w-[100%] absolute bg-primary mt-14">
                <p className="text-secondary text-center py-7 font-semibold">© 2023 TeleRehab. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}