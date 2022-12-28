import { createContext, useState } from 'react';
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const { children } = props;
    const [adminName, setAdminName] = useState('Admin');

    return <AdminContext.Provider value={{ adminName }}>{children}</AdminContext.Provider>;
};

export default AdminContextProvider;
