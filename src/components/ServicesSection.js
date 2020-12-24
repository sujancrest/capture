import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png"

const ServicesSection = () => {

    const [services] = useState([
        {
            id: uuidv4(),
            icon: clock,
            title: "Efficient",
            descrition: "Lorem ipsum dolor sit amet.",
        },
        {
            id: uuidv4(),
            icon: diaphragm,
            title: "Diaphragm",
            descrition: "Lorem ipsum dolor sit amet.",
        },
        {
            id: uuidv4(),
            icon: money,
            title: "Affordable",
            descrition: "Lorem ipsum dolor sit amet.",
        },
        {
            id: uuidv4(),
            icon: teamwork,
            title: "Affordable",
            descrition: "Lorem ipsum dolor sit amet.",
        },
    ])

    return (
        <div className="services">
            <div className="description">
                <h2>High <span>qualtiy</span> services</h2>
                <div className="cards">
                    {services.map(service => {
                        return (
                            <div key={service.id} className="card">
                                <div className="icon">
                                    <img src={service.icon} alt="Icons" />
                                    <h3>{service.title}</h3>
                                </div>
                                <p>{service.descrition}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="" />
            </div>
        </div>
    )
}

export default ServicesSection;