import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {} 
});

const tmpSurveys = [

]

export const ContextProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState({
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "../../public/robert.png",
  });
  const [userToken, setUserToken] = useState('')
  const [surveys, setSurveys] = useState(tmpSurveys)

  return (
    <>
      <StateContext.Provider value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        surveys
      }}>
        {children}
      </StateContext.Provider>
    </>
  )
}

export const userContextState = () => useContext(StateContext)
