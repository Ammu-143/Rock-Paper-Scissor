
let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore");




const showwinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userscore++;
        userScore.innerText=userscore;
        msg.innerText=`you win!your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compscore++;
       compScore.innerText=compscore;
        msg.innerText=`you lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";

    }

}


const playgame=(userchoice)=>
{
    console.log("userchoice is=",userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice is=",compchoice);
    if(userchoice==compchoice)
    {
        msg.innerText="Game was Draw";
        msg.style.backgroundColor="orange";

        
    }
    else{
        let userwin=true;
        if(userchoice=="rock")
        {
            userwin=compchoice=="paper"?false:true;
            

        }
        else if(userchoice=="paper")
        {
            userwin=compchoice=="scissor"?false:true;
           
        }
         else{
            userwin=compchoice=="rock"?false:true;
           
        }
        showwinner(userwin,userchoice,compchoice);
        
    }
   
        
        



    }




const gencompchoice=()=>
{
    const option=["rock","paper","scissor"];
    const comp=Math.floor(Math.random()*3);
    return option[comp];


}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

        


    })

})
