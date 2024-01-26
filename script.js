function btnclick(val){
    console.log(val)
    document.getElementById("screen").value+=val
}
function clr(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById("screen").value=res
}