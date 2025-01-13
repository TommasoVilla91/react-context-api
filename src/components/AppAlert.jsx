import { useAlertContext } from "../contexts/AlertContext";

function AppAlert() {

    const {error, setError} = useAlertContext();

    return (
        <>        
           {error && (<div><button className="button bnt-erase" onClick={() => setError("")}>Chiudi</button>{error}</div>)}
        </>
    );
};

export default AppAlert;