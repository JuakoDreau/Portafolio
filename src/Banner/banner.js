import React from "react";
import "./banner.css"

function Banner(params) {
    return(
        <header className="header">
            <div className="title">Mi Portafolio</div>
            <nav className="menu">
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </header>
    )
}

export {Banner};