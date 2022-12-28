import { createContext, useState } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    const { children } = props;
    const [userName, setUserName] = useState('User');

    return <UserContext.Provider value={{ userName }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
