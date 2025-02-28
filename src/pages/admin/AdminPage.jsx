import React, { useEffect, useState } from 'react'
import AdminDashboard from '../../components/admin/AdminDashboard'
import AdminLogin from '../../components/admin/AdminLogin';

function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
        if (token) {
            localStorage.setItem("accessToken", token);
        } else {
            localStorage.removeItem("accessToken");
        }
    }, [token]);
  
  return token ? (
    <AdminDashboard />
  ) : (
    <AdminLogin setToken={setToken}/>
  );
}

export default AdminPage