import React from 'react'
import HeaderAdmin from "../components/header/HeaderAdmin";
import FooterAdmin from "../components/footer/FooterAdmin";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <HeaderAdmin />
            {children}
            <FooterAdmin />
        </div>
    )
}
export default AdminLayout