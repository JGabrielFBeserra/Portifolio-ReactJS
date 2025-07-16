import React from "react";
import './qualification.css';
import { FaGraduationCap } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { LuCalendarArrowUp } from "react-icons/lu";

const Qualification = () => {
    return (
        <section className="qualification section" id="qualificacoes">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minhas qualificações e experiências</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active">
                       <FaGraduationCap /> {""}
                       Institucional
                    </div>
                    <div className="qualification__button button--flex qualification__active">
                        <GiGymBag /> {""}
                        Profissional
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Tecnologia em Análise e Desenvolvimento de Sistemas
                                </h3>
                                <span className="qualification__subtitle">
                                    Instituto Federal de São Paulo - Câmpus Caraguatatuba
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2024.1 - Presente

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                             <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Ensino Técnico em Desenvolvimento Web
                                </h3>
                                <span className="qualification__subtitle">
                                    Instituto Federal de São Paulo - Câmpus Caraguatatuba
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2023.1 - 2024.1

                                </div>
                            </div>
                           
                        </div>

                        
                       
                    </div>
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Tecnologia
                                </h3>
                                <span className="qualification__subtitle">
                                    Instituto Federal de São Paulo - Câmpus Caraguatatuba
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2023 - Presente

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                             <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Estagiário em Desenvolvimento Web
                                </h3>
                                <span className="qualification__subtitle">
                                    Instituto Federal de São Paulo - Câmpus Caraguatatuba
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2023 - Presente

                                </div>
                            </div>
                           
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Tecnologia
                                </h3>
                                <span className="qualification__subtitle">
                                    Instituto Federal de São Paulo - Câmpus Caraguatatuba
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2023 - Presente

                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                             <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Estagiário em Desenvolvimento Web
                                </h3>
                                <span className="qualification__subtitle">
                                    Instituto Federal de São Paulo - Câmpus Caraguatatuba
                                </span>
                                <div className="qualification__calendar">
                                    <LuCalendarArrowUp /> 2023 - Presente

                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;