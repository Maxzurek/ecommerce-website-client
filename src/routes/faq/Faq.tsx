import { useState } from "react";
import ExpandableDivWithLabel from "../../components/expandableDiv/ExpandableDivWithLabel";
import "./Faq.scss";

enum QuestionNumber {
    one,
    two,
    three,
    four
}

const Faq = () => {
    const [expandedQuestionNumber, setExpandedQuestionNumber] = useState<QuestionNumber>();

    const handleClickLabelQuestion = (questionNumber: QuestionNumber, isExpanded: boolean) => {
        return () => setExpandedQuestionNumber(isExpanded ? null : questionNumber);
    };

    return (
        <div className="faq">
            <span className="faq__header">FREQUENTLY ASKED QUESTIONS</span>
            <ExpandableDivWithLabel
                isExpanded={expandedQuestionNumber === QuestionNumber.one}
                label="Are you selling real products?"
                onClickLabel={handleClickLabelQuestion(
                    QuestionNumber.one,
                    expandedQuestionNumber === QuestionNumber.one
                )}
            >
                <p>
                    <span>No.</span>
                </p>
                <p>
                    <span>
                        Products displayed on this website are fake and their images were generated
                        by an AI.
                    </span>
                </p>
            </ExpandableDivWithLabel>
            <ExpandableDivWithLabel
                isExpanded={expandedQuestionNumber === QuestionNumber.two}
                label="How were the images generated?"
                onClickLabel={handleClickLabelQuestion(
                    QuestionNumber.two,
                    expandedQuestionNumber === QuestionNumber.two
                )}
            >
                <p>
                    <span>
                        Images were generated using Midjourney&apos;s text-to-image generative AI.
                    </span>
                </p>
                <p>
                    <span>Visit </span>
                    <a href="https://www.midjourney.com" rel="noreferrer" target="_blank">
                        Midjourney website
                    </a>
                    <span> to learn more.</span>
                </p>
            </ExpandableDivWithLabel>
            <ExpandableDivWithLabel
                isExpanded={expandedQuestionNumber === QuestionNumber.three}
                label="Who made this website?"
                onClickLabel={handleClickLabelQuestion(
                    QuestionNumber.three,
                    expandedQuestionNumber === QuestionNumber.three
                )}
            >
                <p>
                    <span>The website was made by Maxime Cesare-Zurek, a web developer.</span>
                </p>
                <p>
                    <span>You can find his GitHub profile </span>
                    <a href="https://github.com/Maxzurek" rel="noreferrer" target="_blank">
                        here
                    </a>
                    <span>.</span>
                </p>
            </ExpandableDivWithLabel>
            <ExpandableDivWithLabel
                isExpanded={expandedQuestionNumber === QuestionNumber.four}
                label="Is the source code available publicly?"
                onClickLabel={handleClickLabelQuestion(
                    QuestionNumber.four,
                    expandedQuestionNumber === QuestionNumber.four
                )}
            >
                <p>
                    <span>Yes.</span>
                </p>
                <p>
                    <span>Visit the project </span>
                    <a
                        href="https://github.com/Maxzurek/ecommerce-website-client"
                        rel="noreferrer"
                        target="_blank"
                    >
                        GitHub repo
                    </a>
                    <span> if you want to take a look!</span>
                </p>
            </ExpandableDivWithLabel>
        </div>
    );
};

export default Faq;
