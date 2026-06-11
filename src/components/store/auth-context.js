import React, { useState } from "react";
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});
export const AuthContextProvider=(props)=>{
const[token,setToken]=useState(null);
const userIsLoggedIn=!!token; //convert true or false value into true or false boolen
const loginHandler=(token)=>{
setToken(token);
}
const logoutHandler=()=>{
    setToken(null);
}
const contextValue={
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
};
return<AuthContext.Provider value={contextValue}>
    {props.children}
</AuthContext.Provider>
}
export default AuthContext;