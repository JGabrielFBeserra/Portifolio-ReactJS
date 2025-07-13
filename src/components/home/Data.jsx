import React from "react";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">João Gabriel</h1>
            
            <h3 className="home__subtitle">Desenvolvedor Full Stack</h3>
            <p className="home__description">
                Gosto do novo, amo programar e sou movido por boas propostas de trabalho.
            </p>
            <a href="#contato" className="button button--flex" style={{ fontWeight: "var(--font-semi-bold)" }}>
                Entre em contato

            </a>
            
        </div>
    );
}

export default Data;