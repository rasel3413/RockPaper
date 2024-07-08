let userScore=0
let compScore=0
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")


const compScorePara=document.querySelector("#com-score")

const genComChoice= ()=>{
const options=["rock", "paper", "scissors"]
const randidx= Math.floor(Math.random()*3);
return options[randidx]
}

const showDraw=()=>{
    msg.innerText="Game Was Draw"
    msg.style.backgroundColor="#081b31"
}
const showWInner= (userWin,userChoice,compChoice)=>
{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore
    
    msg.innerText=`You Win!!! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="green"

  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose!!! Computer ${compChoice} beats Your ${userChoice}`
      msg.style.backgroundColor="red"
  }
}

const playGame=(userChoice)=>{

    const compChoice=genComChoice();
    console.log("computer choice="+compChoice)
    console.log("user choice= "+userChoice)
    let userWin=true;
    if(userChoice==compChoice){
        console.log("draw")
        showDraw() 
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice=='paper'?false:true
        }
        else if(userChoice==='paper'){
            userWin= compChoice==="scissors"? false :true
        }
        else{
            userWin= compChoice==="rock" ? false : true
        }
        showWInner(userWin,userChoice,compChoice)
    }

  
}

choices.forEach(choice => {

    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
    
        playGame(userChoice)
    })
    
});