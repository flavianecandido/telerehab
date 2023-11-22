import { CalendarDays, MonitorCheck } from "lucide-react";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";
import { ROUTER_CONFIG } from "../../../config/constants";


export function Cards() {
    const navigate = useNavigate()
    const goAccess = () => {
        navigate(ROUTER_CONFIG.ACCESS)
    }
    const goBooking = () => {
        navigate(ROUTER_CONFIG.BOOKING)
    }


    return (
        <>
            <div className=" flex py-16 justify-center">
                <h2 className="text-neutral-500 text-2xl font-bold">ESCOLHA A OPÇÃO DESEJADA:</h2>
            </div>
            <div className="flex px-96 justify-center gap-40">
                <div class="w-80 h-96 bg-secondary rounded-md border-2 border-primary">
                    <div className="flex px-11 py-2 justify-around items-center gap-4 bg-neutral-500" >
                        <MonitorCheck size={44} className="text-secondary" />
                        <h3 className="text-xl font-semibold text-secondary">Acessar consulta</h3>
                    </div>
                    <div className="flex px-5 py-24 text-black text-2xl font-semibold items-center">
                        <p>ACESSAR CONSULTA</p>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={goAccess} className=" bg-secondary rounded-md border-2 border-primary hover:bg-transparent">
                            <span className="text-primary font-bold">ACESSE AGORA</span>
                        </Button>
                    </div>
                </div>
                <div class="w-80 h-96 bg-secondary rounded-md border-2 border-primary">
                    <div className="flex px-11 py-2 justify-around items-center gap-4 bg-neutral-500" >
                        <CalendarDays size={44} className="text-secondary" />
                        <h3 className="text-xl font-semibold text-secondary">Agendamento</h3>
                    </div>
                    <div className="flex px-5 py-24 text-black text-2xl font-semibold items-center">
                        <p>AGENDE CONSULTAS</p>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={goBooking} className=" bg-secondary rounded-md border-2 border-primary hover:bg-transparent">
                            <span className="text-primary font-bold">AGENDE AGORA</span>
                        </Button>
                    </div>
                </div>

            </div >
        </>
    )
}