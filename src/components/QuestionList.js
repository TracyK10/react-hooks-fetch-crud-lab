import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {
  function handleUpdatedAnswer(updatedChoice){
    const updatedAnswer = questions.map(q => {
      if(q.correctIndex === updatedChoice.correctIndex){
        return updatedChoice
      } else{
        return q
      }
    })
  }

  function handleDeleteQuestion(question){
    const updatedQuestions = questions.filter(q => q.id !== question.id)
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem onUpdateQuestion={handleUpdatedAnswer} onDeleteQuestion={handleDeleteQuestion} question={question} key={question.id} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
