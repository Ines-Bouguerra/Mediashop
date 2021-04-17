import React from 'react'
import HeaderAdmin from "../components/header/HeaderAdmin";

const AdminLayout = ({children}) => {
    return (
        <div>
            <HeaderAdmin />
      {children}
        </div>
    )
}
export default AdminLayout