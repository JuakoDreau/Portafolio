import React from "react";

function Experience(props) {
    return(
        <section className="experiencia-laboral">
        <h2>Experiencia Laboral</h2>
        <div className="experiencias-contenedor">
            <article className="experiencia">
            <h3>Desarrollador Frontend</h3>
            <p>Empresa XYZ</p>
            <p>2022 - 2024</p>
            <p>Trabajé en React, optimización y testing.</p>
            </article>
            <article className="experiencia">
            <h3>Ingeniero QA</h3>
            <p>Empresa ABC</p>
            <p>2020 - 2022</p>
            <p>Automatización con Selenium y Cypress.</p>
            </article>
            {/* Más experiencias */}
        </div>
        </section>
    );
}

export {Experience}