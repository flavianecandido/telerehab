import { Button } from "../../../components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"

const res = [
    {
        dateHour: "23/11/2023 - 07:27",
        doctor: "FLAVIO NASCIMENTO",
    },
    {
        dateHour: "24/11/2023 - 07:42",
        doctor: "VICTOR ALVES",
    },
    {
        dateHour: "25/11/2023 - 08:00",
        doctor: "ANA CAROLINA MACEDO",
    },
]

export function TableList() {
    return (
        <Table className="w-[50%] ml-28">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">DATA/ HORÁRIO</TableHead>
                    <TableHead>PROFISSIONAL</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {res.map((dateHour) => (
                    <TableRow key={dateHour.dateHour}>
                        <TableCell className="font-medium">{dateHour.dateHour}</TableCell>
                        <TableCell>{dateHour.doctor}</TableCell>
                        <TableCell><Button>AGENDAR</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
