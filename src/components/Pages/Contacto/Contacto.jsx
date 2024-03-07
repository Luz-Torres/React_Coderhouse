import { React } from "react";

const Contacto = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado");
    };

    return (
        <main id="contacto" className="container text-center">
            <div className="row">
                <form className="col-12" onSubmit={handleSubmit}>
                    <h1 className="m-5">
                        <span>[</span> Contacto <span>]</span>
                    </h1>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" required />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control" id="apellido" placeholder="apellido" required />
                        <label htmlFor="apellido">Apellido</label>
                    </div>
                    <div className="form-floating mb-5">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-floating mb-5">
                        <input type="tel" className="form-control" id="telefono" placeholder="Telefono" required />
                        <label htmlFor="telefono">Telefono</label>
                    </div>
                    <div className="form-floating mb-5">
                        <textarea className="form-control" placeholder="Deja tu comentario" id="mensaje" required />
                        <label htmlFor="mensaje">Mensaje</label>
                    </div>
                    <div className="mb-5">
                        <button type="reset" className="btn" style={{ margin: "8px" }}>
                            Borrar
                        </button>
                        <button type="submit" className="btn" style={{ margin: "8px" }}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Contacto