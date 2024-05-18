import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./q&a.css";
import "../../assets/font/Roboto.css";
import { BookHeart, NotebookPen, Home } from "lucide-react";
import Error from "./Error";
import Success from "./Success";

function QuestionAndAnswer() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [desiredAnswers, setDesiredAnswers] = useState(Array(5).fill(null));
  const [importance, setImportance] = useState(Array(5).fill(null));
  const [progress, setProgress] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [error, setError] = useState(null);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [navigateHome, setNavigateHome] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    const answeredQuestions = answers.filter(
      (answer) => answer !== null
    ).length;
    setProgress((answeredQuestions / questions.length) * 100);
  }, [answers, questions.length]);

  const handleCardClick = (index) => {
    if (index <= currentCardIndex) {
      if (
        answers[currentCardIndex] === null ||
        desiredAnswers[currentCardIndex] === null ||
        importance[currentCardIndex] === null
      ) {
        setError(
          "Vui lòng trả lời hết tất cả các câu hỏi phần này trước khi tiếp tục hoặc quay lại."
        );
      } else {
        setSelectedQuestion(index);
        setError(null);
      }
    }
  };

  const handleOptionClick = (questionIndex, option, answerType) => {
    setError(null);
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

  const handleNextButtonClick = () => {
    if (navigateHome) {
      navigate("/");
    } else {
      if (
        answers[currentCardIndex] === null ||
        desiredAnswers[currentCardIndex] === null ||
        importance[currentCardIndex] === null
      ) {
        setError(
          "Vui lòng trả lời hết tất cả các câu hỏi phần này trước khi tiếp tục hoặc quay lại."
        );
      } else {
        if (importance[currentCardIndex] === null) {
          const newDesiredAnswers = [...desiredAnswers];
          newDesiredAnswers[currentCardIndex] = null;
          setDesiredAnswers(newDesiredAnswers);
          setError(
            "Vui lòng chọn độ quan trọng của câu hỏi phụ trước khi tiếp tục."
          );
          return;
        }

        if (currentCardIndex < questions.length - 1) {
          setCurrentCardIndex(currentCardIndex + 1);
          setSelectedQuestion(currentCardIndex + 1);
          setAnsweredCount(answeredCount + 1);
          setError(null);
        } else {
          const allAnswered =
            answers.every((answer) => answer !== null) &&
            desiredAnswers.every((answer) => answer !== null) &&
            importance.every((answer) => answer !== null);
          if (allAnswered) {
            setIsCompleted(true);
            setNavigateHome(true);
          } else {
            setError(
              "Vui lòng trả lời hết tất cả các câu hỏi trước khi hoàn thành."
            );
          }
        }
      }
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleCloseSuccess = () => {
    setIsCompleted(false);
  };

  return (
    <div className="container">
      <div className="left-pane">
        <div className="questioncard-container">
          <div className="survey-title">
            <NotebookPen
              size={36}
              color="#fe93db"
              strokeWidth={1.5}
              style={{ marginLeft: 25 }}
            />
            <h1>Khảo sát</h1>
          </div>
          {questions.map((q, index) => (
            <div
              key={index}
              className={`questioncard ${
                selectedQuestion === index ? "selected" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="questioncard-details">
                <p className="text-title">Question {index + 1}</p>
                <p className="text-body">{q.question}</p>
              </div>
              <button className="questioncard-button">
                <BookHeart size={21} strokeWidth={3} />
              </button>
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
            <div className="progress-container">
              <div
                className={`progress-bar ${progress > 0 ? "filled" : ""}`}
                style={{ width: `${progress}%` }}
              >
                <div className={`heart ${progress > 0 ? "filled" : ""}`}></div>
              </div>
            </div>

            <section className="loader">
              <div className="slider" style={{ "--i": 0 }}></div>
              <div className="slider" style={{ "--i": 1 }}></div>
              <div className="slider" style={{ "--i": 2 }}></div>
              <div className="slider" style={{ "--i": 3 }}></div>
              <div className="slider" style={{ "--i": 4 }}></div>
            </section>

            {error && <Error errorTitle={error} onClose={handleCloseError} />}
            {isCompleted && (
              <Success
                message="Chúc mừng bạn đã hoàn thành khảo sát!"
                onClose={handleCloseSuccess}
              />
            )}
            <button className="next-button" onClick={handleNextButtonClick}>
              <div className="bgContainer">
                <span>{navigateHome ? <Home /> : "Tiếp theo"}</span>
              </div>
              <div className="arrowContainer">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 45 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionAndAnswer;
