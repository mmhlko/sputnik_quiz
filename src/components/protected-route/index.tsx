import { Navigate, useLocation } from "react-router-dom";
import { Spiner } from "../spiner";
import { ReactElement, ReactNode } from "react";
import { useAppSelector } from "storage/hook";
import { Button } from "antd";



interface IProtectedRouteProps {
  onlyOnAuth?: boolean; 
  children: ReactNode;
}

function ProtectedRoute({onlyOnAuth, children}: IProtectedRouteProps) {
  const user = useAppSelector(state => state.user.data);
  const isAuthChecked = useAppSelector(state => state.user.isAuthChecked);;
  const location = useLocation();
  
  //if (!isAuthChecked) return <Spiner /> //если не прошла проверка
  
  if (onlyOnAuth && user) {
    //если это компонент авторизации => редирект на главную или куда заходили по прямому url

    //const { from } = location?.state || { from: {pathname: '/'} } не работает
    const from  = location?.state?.from || {pathname: '/'};  
    const { backgroundLocation } = location?.state?.from?.state || { backgroundLocation: null }
    return <Navigate replace to={from} state={{ backgroundLocation }} />
  }

  if (!onlyOnAuth && !user) {
    //если компонент защищен то редирект на логин
    return (      
      <Navigate replace to={{ pathname: '/login' }} state={{ from: location }} />      
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