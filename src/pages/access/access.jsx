import { PlayCircle } from "lucide-react";
import { VideoPlayer } from "./components/videoPlayer";


export function Access() {
    return (
        <>
            <div className=" flex py-16 justify-center">
                <h2 className="text-neutral-500 text-2xl font-bold flex gap-1 items-center">APERTE O PLAY <PlayCircle size={44} className="text-primary" />PARA INICIAR SUA FISIOTERAPIA</h2>
            </div>
            <div className="flex px-96 justify-center items-center">
                <VideoPlayer />
            </div>
        </>
    )
}