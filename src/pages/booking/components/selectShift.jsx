import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";

export function SelectShift() {
    return (
        <>
            <Select>
                <SelectTrigger className="w-72 pl-6">
                    <SelectValue placeholder="TURNO DE PREFERÊNCIA" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Turno</SelectLabel>
                        <SelectItem value="manhã">Manhã</SelectItem>
                        <SelectItem value="tarde">Tarde</SelectItem>
                        <SelectItem value="noite">Noite</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}