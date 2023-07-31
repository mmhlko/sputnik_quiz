import { TRoutes } from "components/app/App";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

type TApprouterProps = {
    isModal?: boolean,
    routes: TRoutes[]
}

const AppRouter = ({ isModal, routes }: TApprouterProps) => {

    const location = useLocation();
    const initialPath = location.state?.initialPath;
    const backgroundLocation = location.state?.backgroundLocation;      

    switch (isModal) {
        case true: return (
            backgroundLocation &&
            <Routes>
                {routes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
            </Routes>
        )
        default: return (
            <Routes location={backgroundLocation && { ...backgroundLocation, pathname: initialPath } || location}>
                {routes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
            </Routes>)

    }
}

export default React.memo(AppRouter);




