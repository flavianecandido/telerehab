import { Stethoscope, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./index"
import {ROUTER_CONFIG} from "../config/constants"

export function Header() {
    const style =
        "border-b-2 border-secondary hover:border-primary";
    const styleActive = "border-b-2 border-primary";
    return (
        <header className="flex px-28 py-9 justify-between items-center">
            <div className="flex gap-3 items-center">
                <Stethoscope size={36} className="text-primary" />
                <h1 className="text-3xl font-bold"><span className="text-neutral-500">Tele</span><span className=" text-primary">Rehab</span></h1>
            </div>
            <nav className="flex gap-8 text-xl font-semibold text-neutral-500">
                <NavLink
                    className={({ isActive }) => (isActive ? styleActive : style)}
                    to={ROUTER_CONFIG.HOME}
                >
                    Página Inicial
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styleActive : style)}
                    to={ROUTER_CONFIG.ACCESS}
                >
                    Acessar Consulta
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styleActive : style)}
                    to={ROUTER_CONFIG.BOOKING}
                >
                    Agendamento
                </NavLink>
            </nav>
            <div>
                <Button className="flex gap-2 items-center text-lg">
                    <div>
                        <UserCircle size={28} className="text-secondary" />
                    </div>
                    Minha área
                </Button>
            </div>
        </header>
    );
}