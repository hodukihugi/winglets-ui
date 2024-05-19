import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./q&a.css";
import "../../assets/font/Roboto.css";
import { BookHeart, NotebookPen, Home } from "lucide-react";
import Error from "./Error";
import Success from "./Success";
import logoReal from "../../assets/image/LogoReal.svg";

function QuestionAndAnswer() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [desiredAnswers, setDesiredAnswers] = useState({});
  const [importance, setImportance] = useState({});
  const [progress, setProgress] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [error, setError] = useState(null);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [navigateHome, setNavigateHome] = useState(false);

  const navigate = useNavigate();

  const questions = useMemo(
    () => [
      {
        id: "1",
        question: "Bạn thích làm gì trong thời gian rảnh?",
        options: [
          { id: "1", text: "Đọc sách" },
          { id: "2", text: "Xem phim" },
          { id: "3", text: "Tập thể dục" },
          { id: "4", text: "Du lịch" },
        ],
      },
      {
        id: "2",
        question: "Môn thể thao yêu thích của bạn là gì?",
        options: [
          { id: "1", text: "Bóng đá" },
          { id: "2", text: "Bóng rổ" },
          { id: "3", text: "Bơi lội" },
          { id: "4", text: "Cầu lông" },
        ],
      },
      {
        id: "3",
        question: "Bạn thích loại phim nào nhất?",
        options: [
          { id: "1", text: "Hành động" },
          { id: "2", text: "Lãng mạn" },
          { id: "3", text: "Kinh dị" },
          { id: "4", text: "Hài hước" },
        ],
      },
      {
        id: "4",
        question: "Bạn thích nghe loại nhạc nào?",
        options: [
          { id: "1", text: "Pop" },
          { id: "2", text: "Rock" },
          { id: "3", text: "Jazz" },
          { id: "4", text: "Cổ điển" },
        ],
      },
      {
        id: "5",
        question: "Bạn thích ăn món ăn nào nhất?",
        options: [
          { id: "1", text: "Món Á" },
          { id: "2", text: "Món Âu" },
          { id: "3", text: "Món chay" },
          { id: "4", text: "Món nhanh (fast food)" },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const answeredQuestions = Object.keys(answers).length;
    setProgress((answeredQuestions / questions.length) * 100);
  }, [answers, questions.length]);

  const handleCardClick = (index) => {
    if (index <= currentCardIndex) {
      setSelectedQuestion(index);
      setError(null);
    } else {
      setError(
        "Vui lòng trả lời hết tất cả các câu hỏi phần này trước khi tiếp tục hoặc quay lại."
      );
    }
  };

  const handleOptionClick = (questionId, optionId, answerType) => {
    setError(null);
    if (answerType === "self") {
      setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    } else {
      setDesiredAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    }
  };

  const handleImportanceChange = (questionId, value) => {
    setImportance((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNextButtonClick = () => {
    const currentQuestionId = questions[currentCardIndex].id;

    if (navigateHome) {
      navigate("/");
    } else {
      if (
        !answers[currentQuestionId] ||
        !desiredAnswers[currentQuestionId] ||
        !importance[currentQuestionId]
      ) {
        setError(
          "Vui lòng trả lời hết tất cả các câu hỏi phần này trước khi tiếp tục hoặc quay lại."
        );
        return;
      }

      setError(null);

      if (currentCardIndex < questions.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
        setSelectedQuestion(currentCardIndex + 1);
        setAnsweredCount(answeredCount + 1);
      } else {
        const allAnswered = questions.every(
          (question) =>
            answers[question.id] &&
            desiredAnswers[question.id] &&
            importance[question.id]
        );

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
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleCloseSuccess = () => {
    setIsCompleted(false);
  };

  useEffect(() => {
    console.log("Các câu trả lời của người dùng:");

    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = questions.find((q) => q.id === questionId);
      if (question) {
        const selectedOption = question.options.find(
          (option) => option.id === optionId
        );
        if (selectedOption) {
          console.log(
            `Câu hỏi: ${question.question}, Câu trả lời: ${selectedOption.id}`
          );
        }
      }
    });

    console.log("Câu trả lời mong muốn của người dùng:", desiredAnswers);
    console.log("Độ quan trọng của câu hỏi đối với người dùng:", importance);
  }, [answers, desiredAnswers, importance, questions]);

  return (
    <div className="container">
      <div className="left-pane">
        <div className="questioncard-container">
          <div className="survey-title">
            <NotebookPen
              size={36}
              color="#fe93db"
              strokeWidth={1.5}
              style={{ marginLeft: 37 }}
            />
            <img
              src={logoReal}
              alt="Logo"
              style={{ width: "100px", height: "80px", marginLeft: 10 }}
            />
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
                {questions[selectedQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    className={`option-button ${
                      answers[questions[selectedQuestion].id] === option.id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleOptionClick(
                        questions[selectedQuestion].id,
                        option.id,
                        "self"
                      )
                    }
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            <div className="sub-question">
              <h3>Bạn mong muốn đối phương trả lời như nào?</h3>
              <div className="options-grid">
                {questions[selectedQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    className={`option-button ${
                      desiredAnswers[questions[selectedQuestion].id] ===
                      option.id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleOptionClick(
                        questions[selectedQuestion].id,
                        option.id,
                        "desired"
                      )
                    }
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            <div className="importance-question">
              <h3>Độ quan trọng của câu hỏi đối với bạn?</h3>
              <div className="radio-input">
                {[5, 4, 3, 2, 1].map((value) => (
                  <input
                    key={value}
                    className={`star s${value}`}
                    type="radio"
                    id={`value-${value}`}
                    name={`value-radio-${selectedQuestion}`}
                    value={`value-${value}`}
                    onChange={() =>
                      handleImportanceChange(
                        questions[selectedQuestion].id,
                        value
                      )
                    }
                    checked={
                      importance[questions[selectedQuestion].id] === value
                    }
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
            <div className="content-wrapper">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionAndAnswer;
