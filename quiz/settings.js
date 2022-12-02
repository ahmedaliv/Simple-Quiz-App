// https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple

import Quiz from "./quiz.js";

class Settings {
    constructor(){
        this.settingDom=document.querySelector(".settings");
        this.quizDom= document.querySelector(".quiz");
        this.categoryDom=document.querySelector("#category");
        this.nQuestions=document.querySelector("#nQuestions");
        this.difficulty=[
            document.querySelector("#easy"),
            document.querySelector("#meduim"),
            document.querySelector("#hard")
        ];

        this.quiz={};
        this.startBtn=document.querySelector("#startBtn");

        this.startBtn.addEventListener('click',this.startQuizApp);
        
    }
    startQuizApp = async () => {
        try {
            const amount=this.getAmount();
            const categoryID=this.categoryDom.value;
            const difficulty=this.getDifficulty();
            
            const url=`https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}&type=multiple`;
            let {results}= await this.fetchData(url) ;  // {result } this is for destructuing the object 
           // instead of i.e let res= blbalba then when we need result we type res.result
           
           this.quiz=new Quiz(this.quizDom,amount,results);
           
           this.toggleElements();
            }
        catch(err){
            alert(err);
        }

    }
 
    
    fetchData= async (url) => {
        const response= await fetch(url);
        const result=await response.json();
        return result; 
        
    }
    toggleElements = ()=> {
        this.quizDom.style.display="block";
        this.settingDom.style.display="none";
    }
    getDifficulty=() => {
        const difficulty=this.difficulty.filter(e=> e.checked);
        if(difficulty.length === 1) return difficulty[0].id;
        else alert("Please select a difficulty");
    }
    getAmount=()=> {
        const amount = this.nQuestions.value;
        if(amount>0 && amount <20){
            return amount;
        }
        else {
            alert("enter a valid number of questions")
            return 0;
        }
    }
 


};

export default Settings;