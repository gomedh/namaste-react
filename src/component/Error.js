import { useRouteError } from "react-router-dom"; //hook, if a fn start with use Keyword like useEffect, useState

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error">
        <h1>OOPS.... Something Went Wrong - {err.status} {err.statusText}</h1>
        </div>

    )
}


export default Error;