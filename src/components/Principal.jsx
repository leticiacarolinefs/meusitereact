import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


export default function Principal(props) {
    return (
        <>
            <Header onLogout={props.onLogout}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
