class Final {
    constructor(correctAnswers,totalAmount){
        this.scoreElement=document.querySelector(".score");
        this.againBtn = document.querySelector("#again");


        this.render(correctAnswers,totalAmount); // to run the function
        this.againBtn.addEventListener('click',this.startAgain)
    }
    startAgain=()=>{
        location.reload();
    }
    render=(correctAnswers,totalAmount)=>{
        this.scoreElement.innerHTML=`You Answered ${correctAnswers} out of ${totalAmount} correct`
    
    }
}
export default Final;