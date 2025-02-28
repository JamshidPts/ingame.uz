import React from 'react'

function AdminDashboard() {
    const handleLogout = () => {
        localStorage.removeItem("accessToken"); // Удаляем токен
        window.location.reload();
    };

    return (
        <div className=''>
            <div className='min-h-screen m-auto'>

                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default AdminDashboard