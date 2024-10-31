let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#rg")
let turn0=true
const wp = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const checkwin=(temps)=>
{
    for(let pattern of wp)
    {
        if(boxes[pattern[0]].innerText===temps && boxes[pattern[1]].innerText===temps && boxes[pattern[2]].innerText===temps)
        {
            return true;
        }
    }
    return false
}
let temps = "";
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        temps=turn0? "O":"X";
        box.innerText=temps;
        box.disabled=true
        if(checkwin(temps))
        {
            alert(`${temps} won the match!`)
            return 

        }
        turn0=!turn0
    })
})
reset.onclick=()=>
{
    boxes.forEach((box)=>
    {
        box.innerText="";
        box.disabled=false;
    })
}