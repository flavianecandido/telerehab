import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Banner } from "../components/detailsBanner/banner";
import { Footer } from "../components/footer";
import VLibras from "@djpfs/react-vlibras";


export function Layout() {
    return (
        <>
            <VLibras forceOnload={true} />
            <Header />
            <Banner />
            <Outlet />
            <div className=" w-[100%] mt-56">
                <hr className="border-primary" />
                <Footer />
            </div>
        </>
    )
}