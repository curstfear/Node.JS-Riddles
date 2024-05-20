import React, { useState } from 'react';
const Item = () => {
    const riddles = [
        {
            id: 1,
            description: "Самая высокая гора называется ….",
            option1: "Эверест",
            option2: "Гималаи",
            option3: "Арарат",
            option4: "Чогори",
            correct: 1
        },
        {
            id: 2,
            description: "Чем является арбуз?",
            option1: "Фруктом",
            option2: "Овощем",
            option3: "Ягодой",
            option4: "Tidehunter",
            correct: 3,
        },
        {
            id: 3,
            description: "Какую максимальную скорость может развивать гепард?",
            option1: "60 км/ч",
            option2: "70 км/ч",
            option3: "80 км/ч",
            option4: "более 90 км/ч",
            correct: 4,
        },
        {
            id: 4,
            description: "Сколько месяцев в году имеют 28 дней?",
            option1: "1",
            option2: "12",
            option3: "6",
            option4: "7",
            correct: 2,
        },
        {
            id: 5,
            description: "Какая птица носит название каши?",
            option1: "Овсянка",
            option2: "Гречка",
            option3: "Пшенка",
            option4: "Перловка",
            correct: 1,
        }
    ];
    const [userAnswers, setUserAnswers] = useState({});
    const handleAnswerSelection = (riddleId, answer) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [riddleId]: answer,
        }));
    };
    return (
        <div>
            {riddles.map((riddle) => {
                const userAnswer = userAnswers[riddle.id];
                const isCorrect = userAnswer === riddle.correct;
                const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно.';
                return (
                    <div key={riddle.id} className="riddle-box">
                        <h3 className="riddle-description">{riddle.description} </h3>
                        <ol className="answer-options" style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 1)}>
                                    {riddle.option1}
                                </button>
                            </li>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 2)}>
                                    {riddle.option2}
                                </button>
                            </li>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 3)}>
                                    {riddle.option3}
                                </button>
                            </li>
                            <li>
                                <button className="answer-button"
                                    onClick={() => handleAnswerSelection(riddle.id, 4)}>
                                    {riddle.option4}
                                </button>
                            </li>
                        </ol>
                        {userAnswer && <p className="feedback">{feedback}</p>}
                    </div>
                );
            })}
        </div>
    );
}

export default Item;