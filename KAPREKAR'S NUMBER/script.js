function createElement(name){
     var x= document.createElement(name)
      return x;
}

var head= createElement("div")
head.setAttribute("class","heading")
head.innerHTML="<h1>GENERATE KAPREKAR'S NUMBER</h1>"
document.body.append(head)

var body=createElement("div")
body.setAttribute("class","block")
input=createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","input-res")
input.setAttribute("id","value")
input.setAttribute("maxlength","4")
input.setAttribute("required","")
body.append(input)
document.body.append(body)

br=createElement("br")
document.body.append(br)


var body2=createElement("div")
body2.setAttribute("class","align")
var button=createElement("div")
button.setAttribute("class","button")
button.setAttribute("type","submit")
button.setAttribute("id","check")
button.setAttribute("onclick","check(document.getElementById('value').value)")
button.innerHTML="Generate"
body2.append(button)
document.body.append(body2)



var textarea=createElement("div")
textarea.setAttribute("class","text")
textarea.setAttribute("id","text")
document.body.append(textarea)



function check(arr)
{
document.getElementById("text").innerHTML=""
checks(arr)
function checks(arr){
points=arr.split("")
if(points.length==0)
{
    alert("Please Enter the Number to check")
}
else{
as=points.sort(function(a,b){return a-b})
val1=as.map((a) => +a).join("")
ds=points.sort(function(a, b){return b - a});
s=ds.map((a) => +a).join("").toString()
val2=s;
saw=val2 - val1;
console.log(val2 +"-" +val1+ "=" +saw)
document.getElementById("text").innerHTML+=`${val2}-${val1}=${saw}<br>`
saws=saw.toString();

if(saw=="6174")
{
    return 0;
 
}else{
  checks(saws)  
  
}
}

}

}
