import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";

export function SelectSpecialty() {
    return (
        <>
            <Select>
                <SelectTrigger className="w-72 pl-6">
                    <SelectValue placeholder="SELECIONE A ESPECIALIDADE" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Especialidade</SelectLabel>
                        <SelectItem value="neurologia">Neurologia</SelectItem>
                        <SelectItem value="fonoaudiologia">Fonoaudiologia</SelectItem>
                        <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}