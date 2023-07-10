import { Navigate, useLocation } from "react-router-dom";
import { Spiner } from "../spiner";
import { ReactNode } from "react";
import { useAppSelector } from "storage/hook";



interface IProtectedRouteProps {
  onlyUnAuth?: boolean; 
  children: ReactNode;
}

function ProtectedRoute({onlyUnAuth, children}: IProtectedRouteProps) {
  const user = useAppSelector(state => state.user.data);
  const isAuthChecked = useAppSelector(state => state.user.isAuthChecked);;
  /* const location = useLocation(); */
  
  if (null/* !isAuthChecked */) return <Spiner />
  
  if (onlyUnAuth && user) {
    //const { from } = location?.state || { from: {pathname: '/'} } не работает
    /* const from  = location.state.from || {pathname: '/'};  
    const { backgroundLocation } = location?.state?.from?.state || { backgroundLocation: null }
    return <Navigate replace to={from} state={{ backgroundLocation }} /> */
    return <><h2>Залогинился</h2></>
  }

  if (!onlyUnAuth && !user) {
    return (
      //<Navigate replace to={{ pathname: '/login' }} state={{ from: location }} />
      <><h2>Надо залогиниться</h2></>
    )
  }
  return <>{children}</>
}

export default ProtectedRoute;


/* простая версия 
function ProtectedRoute({loggedIn, children}) {
  return ( 
    loggedIn === true
    ? <>{children}</>
    : <Navigate to={'/login'} />
   );
} */