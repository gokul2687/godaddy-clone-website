var signin = document.getElementById("nav9")
console.log(signin)
var sign = signin.addEventListener("click",function()
{
    // signin.style.backgroundColor="white"
    // signin.style.color="black"

    var a = document.getElementById("signdiv")
    if(a.style.display=="none")
    {
         a.style.display="block";
    }else
    {
        a.style.display="none";
    }
    
})
console.log(sign)

var a;
function pass()
{
if(a==false)
{
    document.getElementById("userin1")
    document.getElementById("passicon")
    
}
else(a==true)
{
    document.getElementById("userin1").setAttribute("type" , "text");
    document.getElementById("passicon")

}
}