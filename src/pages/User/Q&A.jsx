import React, { useState } from "react";
import "./q&a.css";
import "../../assets/font/Roboto.css";

function QuestionAndAnswer() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [desiredAnswers, setDesiredAnswers] = useState(Array(5).fill(null));
  const [importance, setImportance] = useState(Array(5).fill(1));

  const questions = [
    {
      question: "Bạn thích làm gì trong thời gian rảnh?",
      options: ["Đọc sách", "Xem phim", "Tập thể dục", "Du lịch"],
    },
    {
      question: "Môn thể thao yêu thích của bạn là gì?",
      options: ["Bóng đá", "Bóng rổ", "Bơi lội", "Cầu lông"],
    },
    {
      question: "Bạn thích loại phim nào nhất?",
      options: ["Hành động", "Lãng mạn", "Kinh dị", "Hài hước"],
    },
    {
      question: "Bạn thích nghe loại nhạc nào?",
      options: ["Pop", "Rock", "Jazz", "Cổ điển"],
    },
    {
      question: "Bạn thích ăn món ăn nào nhất?",
      options: ["Món Á", "Món Âu", "Món chay", "Món nhanh (fast food)"],
    },
  ];

  const handleCardClick = (index) => {
    setSelectedQuestion(index);
  };

  const handleOptionClick = (questionIndex, option, answerType) => {
    if (answerType === "self") {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = option;
      setAnswers(newAnswers);
    } else {
      const newDesiredAnswers = [...desiredAnswers];
      newDesiredAnswers[questionIndex] = option;
      setDesiredAnswers(newDesiredAnswers);
    }
  };

  const handleImportanceChange = (questionIndex, value) => {
    const newImportance = [...importance];
    newImportance[questionIndex] = value;
    setImportance(newImportance);
  };

  return (
    <div className="container">
      <div className="left-pane">
        <div className="card-container">
          <h1>Khảo sát</h1>
          {questions.map((q, index) => (
            <div
              key={index}
              className={`card ${selectedQuestion === index ? "selected" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-details">
                <p className="text-title">Question {index + 1}</p>
                <p className="text-body">{q.question}</p>
              </div>
              <button className="card-button">More info</button>
            </div>
          ))}
        </div>
      </div>
      <div className="right-pane">
        {selectedQuestion !== null && (
          <div className="question-block">
            <div className="question-and-answer">
              <h2>{questions[selectedQuestion].question}</h2>
              <div className="options-grid">
                {questions[selectedQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${
                      answers[selectedQuestion] === option ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleOptionClick(selectedQuestion, option, "self")
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="sub-question">
              <h3>Bạn mong muốn đối phương trả lời như nào?</h3>
              <div className="options-grid">
                {questions[selectedQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${
                      desiredAnswers[selectedQuestion] === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleOptionClick(selectedQuestion, option, "desired")
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="importance-question">
              <h3>Độ quan trọng của câu hỏi đối với bạn?</h3>
              <div className="radio-input">
                {[1, 2, 3, 4, 5].map((value) => (
                  <input
                    key={value}
                    className={`star s${value}`}
                    type="radio"
                    id={`value-${value}`}
                    name={`value-radio-${selectedQuestion}`}
                    value={`value-${value}`}
                    onChange={() =>
                      handleImportanceChange(selectedQuestion, value)
                    }
                    checked={importance[selectedQuestion] === value}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionAndAnswer;
