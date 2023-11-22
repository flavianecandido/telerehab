
import { SelectShift } from "./components/selectShift";
import { SelectSpecialty } from "./components/selectSpecialty";
import { Button } from "../../components/ui/button";
import { TableList } from "./components/table";

export function Booking() {
    return (
        <>
            <div className=" flex py-16 justify-center">
                <h2 className="text-neutral-500 text-2xl font-bold flex gap-1">AGENDAMENTO DE CONSULTAS</h2>
            </div>
            <div className=" flex py-4 px-28">
                <h2 className="text-neutral-500 text-xl font-semibold flex gap-1">ESCOLHA ESPECIALIDADE E MELHOR HORÁRIO PARA SUA CONSULTA</h2>
            </div>
            <div className="flex gap-8 pl-28 justify-start ">
                <div>
                    <SelectSpecialty />
                </div>
                <div>
                    <SelectShift />
                </div>
                <div>
                    <Button>BUSCAR</Button>
                </div>
            </div>
            <div className="flex flex-col py-10 pl-28">
                <div className="text-neutral-500 text-base">
                    <p><span className=" font-semibold">ESPECIALIDADE: </span>NEUROLOGIA</p>
                    <p><span className=" font-semibold">TURNO: </span>MANHÃ</p>
                </div>
                <div className="mt-3">
                    <h3 className="text-neutral-500 font-semibold">HORÁRIOS DISPONÍVEIS PARA OS FILTROS SELECIONADOS:</h3>
                </div>
            </div>
            <div>
                <TableList />
            </div>
        </>
    )

}