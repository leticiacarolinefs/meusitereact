import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Principal.css';


export default function Principal(props) {
    return (
        <>
            <Header usuarioID={props.usuarioID} onLogout={props.onLogout}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
