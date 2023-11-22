import { BANNER_CONFIG } from './banner.config'
import { Image } from '../image'

export function Banner() {
    return (
        <>
            <div className="flex px-72 justify-center items-center gap-36 bg-neutral-100">
                <div className="text-neutral-500 font-bold">
                    <h2><span className="text-4xl">{BANNER_CONFIG.TITLE}</span></h2>
                    <p className='text-xl font-semibold'>Nome: {BANNER_CONFIG.FULL_NAME}</p>
                    <p className='text-xl font-semibold'>Idade: {BANNER_CONFIG.AGE}</p>
                    <p className='text-xl font-semibold'>Diagnóstico: {BANNER_CONFIG.DIAGNOSIS}</p>
                    <p className='text-xl font-semibold'>Situação: {BANNER_CONFIG.SITUATION}</p>
                </div>
                <div>
                    <Image />
                </div>
            </div>
        </>
    )
}