import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import { About, Description, Image } from "../style";

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
        <Services>
            <Description>
                <h2>High <span>qualtiy</span> services</h2>
                <Cards>
                    {services.map(service => {
                        return (
                            <Card key={service.id}>
                                <div className="icon">
                                    <img src={service.icon} alt="Icons" />
                                    <h3>{service.title}</h3>
                                </div>
                                <p>{service.descrition}</p>
                            </Card>
                        )
                    })}
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding:2rem 0 4rem;
    }
`;

const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Card = styled.div`
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:#fff;
            color:#000;
            padding:1rem;
        }
    };
`;

export default ServicesSection;