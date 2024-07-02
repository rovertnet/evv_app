
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GeustLeyaouts() {

  const { userToken } = useStateContext();
  
  if (userToken) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src="../../public/logocrevv.png"
            alt="Your Company"
          />
        </div>

        <Outlet />
      </div>
    </>
  );
}
