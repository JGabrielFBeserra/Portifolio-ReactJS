import React from "react";

const Info = () => {
    return (
        <div className="about__info grid" >
            <div className="about__box">
                <i class='bxr  bx-medal-star-alt about__icon'  ></i> 
                <h3 className="about__title">
                    Experiência
                </h3>
                <span className="about__subtitle">
                    2y+ comendo DevWeb
                </span>
            </div>
            <div className="about__box">
                <i class='bxr  bx-briefcase-alt-2 about__icon'  ></i> 
                <h3 className="about__title">
                    Workshop
                </h3>
                <span className="about__subtitle">
                    + 10 projetos desenvolvidos 
                </span>
            </div>
            <div className="about__box">
                <i class='bxr  bx-certification about__icon'  ></i> 
                <h3 className="about__title">

                    Habilidades
                </h3>
                <span className="about__subtitle">
                ReactJS, Python, Java +
                </span>
            </div>

        </div>
    )
}

export default Info;