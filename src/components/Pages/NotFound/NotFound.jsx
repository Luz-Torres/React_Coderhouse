import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const NotFound = () => {
    const [reporting, setReporting] = useState(false);
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect (() => {
        console.log(`El estado de reporting ha cambiado a ${reporting}`);
    }, [reporting]);

    const handleReportIssue = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setReporting(true);
        }, 1000);
    };

    const handleRegret = () => {
        navigate('/');
    };

    const handleCloseReporting = () => {
        setReporting(false);
    };

    return (
        <main className="container d-block text-center" role="alert">
            <h1 className="mt-5">
                <span>[</span> 404 <span>]</span>
            </h1>
            <h2 className="mt-5">¡Ups! página no encontrada</h2>
            <article className="m-3 p-3">
                Lo sentimos, la página que estas buscando no fue encontrada.
                Si cree que algo esta mal, informe el problema.
            </article>
            <div className="buttons m-3">
                <button className="btn m-3" onClick={handleRegret}>
                    Regresar
                </button>
                <button
                    className="btn m-3"
                    onClick={handleReportIssue}
                    disabled={reporting}
                >
                    Reportar
                </button>
            </div>
            {processing && <div className="loading-spinner">Loading...</div>}
            {reporting && (
                <div className="reporting-message">
                    Gracias por reportar el problema. Nos encargaremos de solucionarlo lo antes posible.
                    <button className="close-button" onClick={handleCloseReporting}>
                        Cerrar
                    </button>
                </div>
            )}
        </main>
    );
};

export default NotFound;