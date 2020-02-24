let li = $(".myAccountItem");
console.log(li);
$(".myAccountItem").click(function(){
    for(let i = 0;i<li.length;i++){
        console.log(li[i])
    }
   
})
