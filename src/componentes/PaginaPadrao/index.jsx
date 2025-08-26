import { Outlet } from "react-router-dom"

export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Outlet/>
            {children}
        </main>
    )
}