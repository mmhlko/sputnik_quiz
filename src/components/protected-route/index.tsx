import { Location, Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "storage/hook-types";
import { User } from "@supabase/supabase-js";

interface IProtectedRouteProps {
  onlyOnAuth?: boolean;
  children: ReactNode;
}

interface IProtectionConditions extends IProtectedRouteProps {
  user: User,
  location: Location
}

const protectionConditions = ({onlyOnAuth, user, location, children}:IProtectionConditions) => {

  if (onlyOnAuth && user) {
    //если это компонент авторизации => редирект на главную или куда заходили по прямому url    
    const from = location?.state?.from || { pathname: '/' };
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

const ProtectedRoute = ({ onlyOnAuth, children }: IProtectedRouteProps) => {
  const location = useLocation();
  const user = useAppSelector(state => state.user.data);  
  return protectionConditions({onlyOnAuth, user, location, children});
}

export default ProtectedRoute;
