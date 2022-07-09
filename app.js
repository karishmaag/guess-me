const submitbutton = document.getElementById("checkButton");
console.log(submitbutton)
const message = document.getElementById("message");
const lives = document.getElementById("attemptsLable");
var number = Math.round(Math.random()*100);
var text;
var live = 10;
submitbutton.onclick = ()=>
{
    let userinput = document.getElementById("textBox").value;
    live--;
    if(userinput == number )
    {
     location.href = "./win.html";
    }
    else if(live == 0)
    {
        location.href = "./lose.html";
    }
    else if(userinput > number)
    {
        text = `GOD! YOUR GUESS IS BEYOND MINE.YOU HAVE ${live} LIVES REMAINING.`;
    }
    else if(userinput < number)
    {
        text = `OHOH! YOUR GUESS IS LESS THAN MINE.YOU HAVE ${live} LIVES REMAINING.`;
    }
    message.style.display = "inherit";
    message.innerHTML = text;
    lives.innerHTML = live;
}