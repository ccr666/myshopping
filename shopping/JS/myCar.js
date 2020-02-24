
$(document).ready(function(){
    console.log($("input[name='checkboxAll']"))
    $("input[name='checkboxAll']").click(function(){
        console.log(1)
       var inputLength = $("input[name = 'checkbox']").length;
       if($(this)[0].checked){
           for(let i=0;i<inputLength;i++){
               $('input[name="checkbox"]')[i].checked = true;
           }
       }else{
               for(let i=0;i<inputLength;i++){
                   $('input[name="checkbox"]')[i].checked=false;
               }
       }
       });
       $("input[name='checkbox']").click(function(){
           var checkedLength = $("input[name='checkbox']:checked").length;
           var inputLength = $("input[name = 'checkbox']").length;
           if(checkedLength === inputLength){
               $('input[name="checkboxAll"]')[0].checked=true;
           }else{
               $('input[name="checkboxAll"]')[0].checked=false;
           }
      })
})