import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { About } from "../style";

import styled from "styled-components";

const FaqSection = () => {

    const [faqs] = useState([
        {
            id: uuidv4(),
            question: "How Do I Start?",
            answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            autem accusamus ex laboriosam porro, adipisci quam voluptatum
            magnam placeat corporis.`,
        },
        {
            id: uuidv4(),
            question: "Daily Schedule",
            answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            autem accusamus ex laboriosam porro, adipisci quam voluptatum
            magnam placeat corporis.`,
        },
        {
            id: uuidv4(),
            question: "Different Payment Methods",
            answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            autem accusamus ex laboriosam porro, adipisci quam voluptatum
            magnam placeat corporis.`,
        },
        {
            id: uuidv4(),
            question: "How Do I Start?",
            answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            autem accusamus ex laboriosam porro, adipisci quam voluptatum
            magnam placeat corporis.`,
        }
    ])

    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            {faqs.map(faq => {
                const { question, answer } = faq
                return (
                    <div className="question">
                        <h4>{question}</h4>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                {answer}
                            </p>
                        </div>
                        <div className="faq-line"></div>
                    </div>
                )
            })}
        </Faq>
    )
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .faq-line{
        background:#ccc;
        height:0.2rem;
        margin:2rem 0;
        width:100%
    }
    .question{
        padding:3rem 0;
        cursor:pointer;
    }
    .answer{
        padding:2rem 0;
        p{
            padding:1rem 0;
        }
    }
`;

export default FaqSection;