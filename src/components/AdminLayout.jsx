import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader";
import AppAlert from "./AppAlert";

function AdminLayout() {

    return (
        <>
            <AppHeader />
            <AppAlert />
            <Outlet />
        </>
    )
}

export default AdminLayout;