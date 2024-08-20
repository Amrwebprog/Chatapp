import { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {

    const [activeUser, setActiveUser] = useState(0);
    return (
        <NavContext.Provider value={{ activeUser,setActiveUser }}>
            {children}
        </NavContext.Provider>
    );
};

export { NavContext, NavProvider };

