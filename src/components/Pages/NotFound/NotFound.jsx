import React from 'react';
import Inicio from '../Inicio/Inicio';
const NotFound = () => {
    const [reporting, setReporting] = useState(false);

    const handleReportIssue = () => {
        setReporting(true);
        console.log("REPORTAMOS UN ERROR")
    }

    const handleRegret = () => {
        return <Inicio/>
    }

    return (
        <main className='container d-block text-center' role='alert'>
            <h1 className='mt-5'><span>[</span> 404 <span>]</span></h1>
            <h2 className='mt-5'> ¡Ups! página no encontrada</h2>
            <article className=' m-3 p-3'>
                Lo sentimos, la página que estas buscando no fue encontrada.
                Si cree que algo esta mal, informe el problema.
            </article>
            <div className="buttons m-3">
                <button className="btn m-3" onClick={handleRegret}> Regresar</button>
                <button className="btn m-3" onClick={handleReportIssue}>Reportar</button>
            </div>
            {reporting && (
                <div className="reporting-message">
                    Gracias por reportar el problema. Nos encargaremos de solucionarlo lo antes posible.
                </div>
            )}
        </main>
    )
}

export default NotFound