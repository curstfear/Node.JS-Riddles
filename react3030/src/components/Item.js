import React, { useState } from 'react';

function Item() {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({ text, options, correctAnswer });
    setText('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleAnswerSubmit = (index, selectedOption) => {
    setUserAnswers([...userAnswers, { questionIndex: index, selectedOption }]);
  };

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Добавить новый вопрос</h1>
        <div>
          <label>
            Вопрос:
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Ответ:
            <input
              type="text"
              value={options[0]}
              onChange={(e) => handleOptionChange(0, e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Ответ 2:
            <input
              type="text"
              value={options[1]}
              onChange={(e) => handleOptionChange(1, e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Ответ 3:
            <input
              type="text"
              value={options[2]}
              onChange={(e) => handleOptionChange(2, e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Ответ 4:
            <input
              type="text"
              value={options[3]}
              onChange={(e) => handleOptionChange(3, e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Правильный ответ:
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Добавить вопрос</button>
      </form>
      <div>
        <h2>Список вопросов</h2>
        {questions.length === 0 ? (
          <p>Вопрос пока нет.</p>
        ) : (
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <h3>{question.text}</h3>
                <ul>
                  {question.options.map((option, idx) => (
                    <li
                      key={idx}
                      style={{
                        color:
                          userAnswers.find(
                            (answer) =>
                              answer.questionIndex === index &&
                              answer.selectedOption === option
                          ) &&
                          option === question.correctAnswer
                            ? 'green'
                            : userAnswers.find(
                                (answer) =>
                                  answer.questionIndex === index &&
                                  answer.selectedOption === option
                              )
                            ? 'red'
                            : 'black'
                      }}
                    >
                      {option}
                      {!userAnswers.find(
                        (answer) =>
                          answer.questionIndex === index &&
                          answer.selectedOption === option
                      ) && (
                        <button
                          onClick={() => handleAnswerSubmit(index, option)}
                        >
                          Answer
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
                {userAnswers.find((answer) => answer.questionIndex === index) && (
                  <p>
                    <strong>Правильный ответ: </strong>
                    {question.correctAnswer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Item;
