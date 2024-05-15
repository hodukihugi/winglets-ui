import React, { useState } from "react";
import "./q&a.css";
import "../../assets/font/Roboto.css";
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

function QuestionAndAnswer() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [importance, setImportance] = useState(Array(questions.length).fill(1));

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleImportanceChange = (index, value) => {
    const newImportance = [...importance];
    newImportance[index] = value;
    setImportance(newImportance);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      {questions.map((q, index) => (
        <div
          key={index}
          className="question-block"
          style={{ marginBottom: "20px" }}
        >
          <h2>{q.question}</h2>
          <div className="options-grid">
            {q.options.map((option, i) => (
              <button
                key={i}
                className={`option-button ${
                  answers[index] === option ? "selected" : ""
                }`}
                onClick={() => handleAnswerChange(index, option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="sub-question">
            <h3>Bạn mong muốn đối phương trả lời như nào?</h3>
            <div className="options-grid">
              {q.options.map((option, i) => (
                <button key={i} className="option-button">
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="importance">
            <h3>Độ quan trọng của câu hỏi đối với bạn?</h3>
            <div className="radio-input">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  className={`star s${value}`}
                  type="radio"
                  id={`value-${value}`}
                  name={`value-radio-${index}`}
                  value={`value-${value}`}
                  onChange={() => handleImportanceChange(index, value)}
                  checked={importance[index] === value}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionAndAnswer;
