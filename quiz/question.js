// wherer to put the ques , where to put answers , answer and know if right or wrong 


class Question {
    constructor(question){ //  question is coming from the response of the api
        // as we said before we first have to capture the elements we need from the dom
        this.questionElement=document.querySelector("#question");
        this.answerElements =[
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4')
        ]
        this.correctAnswer= question.correct_answer;
        this.question=question.question;
        this.isCorrect=false;
        this.answers=[
            question.correct_answer,...question.incorrect_answers
        ]

    }

    answer(checkedElement){
        this.isCorrect = checkedElement[0].textContent === this.correctAnswer? true : false; 
    // why of zero ? because the captured element returns an array whose first elelment if the one we want 
    } 
    render() {

        this.questionElement.innerHTML=this.question;
        this.answerElements.forEach((e,index)=>{
            e.innerHTML=`<input type="radio" name="radio">` + this.answers[index];
        })
    }
}
export default Question;