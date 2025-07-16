import React from "react";
import { FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";


const Devops = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                Devops
            </h3>
            <div className="skills__box">
                <div className="skills__group">


                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaDocker className="skills__icon" />    Docker
                            </h3>
                            <span className="skills__level">
                                Já subi dois containers, sei o básico para poder usar.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaGitAlt className="skills__icon" />    Git
                            </h3>
                            <span className="skills__level">
                                Versionamento é essencial, manjo o suficiente.
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">

                        <div className="">
                            <h3 className="skills__name">
                                <FaGithub className="skills__icon" />    GitHub
                            </h3>
                            <span className="skills__level">
                                Já trabalhei sozinho e em equipe, sei como usar.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default Devops;