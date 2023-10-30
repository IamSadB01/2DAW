import React from 'react';
import '../css/Pie.css';

/* Footer de mi librería (default) */
const Pie = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <section className="footer-about">
                    <h4>Sobre la aplicación</h4>
                    <p>Una aplicación de gestión de películas desarrollada por Sergio Alfonso Deltell.</p>
                </section>
                <section className="footer-contact">
                    <h4>Contacto</h4>
                    <p>Email: ehlfonsdesigns.contacto@gmail.com</p>
                    <p>Tel: +34 123 456 789</p>
                </section>
                <section className="footer-social">
                    <h4>Sígueme</h4>
                    <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="#" target="_blank" rel="noreferrer">Twitter</a>
                </section>
            </div>
            <div className="footer-bottom">
                © 2023 Sergio Alfonso Deltell. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Pie;