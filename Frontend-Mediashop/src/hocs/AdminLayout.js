import React from 'react'
import HeaderAdmin from "../components/header/HeaderAdmin";

export const AdminLayout = ({children}) => {
    return (
        <div>
            <HeaderAdmin />
      {children}
        </div>
    )
}
