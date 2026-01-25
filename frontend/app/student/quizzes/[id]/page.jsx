"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { mockCompletedQuizzes, mockQuizQuestions } from "../../dashboard/mockData";
import FlashcardQuiz from "./FlashcardQuiz";
import MCQQuiz from "./MCQQuiz";
import FillInQuiz from "./FillInQuiz";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const quizId = parseInt(params.id);
    const quizData = mockCompletedQuizzes.find(q => q.id === quizId);
    const quizQuestions = mockQuizQuestions[quizId];

    if (!quizData || !quizQuestions) {
      router.push("/student/quizzes");
      return;
    }

    setQuiz(quizData);
    setQuestions(quizQuestions);
  }, [params.id, router]);

  if (!quiz || !questions) {
    return (
      <div className="loading-container">
        <div>Loading quiz...</div>
      </div>
    );
  }

  // Render the appropriate quiz type component
  switch (quiz.quizType) {
    case "Flashcard":
      return <FlashcardQuiz quiz={quiz} questions={questions} />;
    case "MCQ":
      return <MCQQuiz quiz={quiz} questions={questions} />;
    case "Fill-in":
      return <FillInQuiz quiz={quiz} questions={questions} />;
    default:
      return <div>Unknown quiz type</div>;
  }
}
