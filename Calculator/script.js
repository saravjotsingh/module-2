
var output = []; 

  


$(document).ready(function(){
    
    
   $('#one').click(function(){
//       $('#textarea').append(1);
//        output.push(1);
     var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '1'; 
         output.push(1);
   })
    
   $('#two').click(function(){
//       $('#textarea').append(2);
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '2'; 
       output.push(2);
   })
   $('#three').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '3'; 
       output.push(3);
   })
   
   $('#four').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '4'; 
       output.push(4);
   })
   
   $('#five').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '5'; 
       output.push(5);
   })
   
   $('#six').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '6'; 
       output.push(6);
   })
   
   $('#seven').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '7'; 
       output.push(7);
   })
   
   $('#eight').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '8'; 
       output.push(8);
   })
   
   $('#nine').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '9'; 
       output.push(9);
   })
   
   $('#zero').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '0'; 
       output.push(0);
   })
   
   $('#d').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '.'; 
       output.push('.');
   })
   
   $('#div').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '/'; 
       output.push('/');
   })
   
   $('#mul').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '*'; 
       output.push('*');
   })
   
   $('#min').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '-'; 
       output.push('-');
   })
   
   $('#add').click(function(){
       var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '+'; 
       output.push('+');
       console.log(output)
   })
   
   $('#clear').click(function(){
       document.getElementById('textarea').innerHTML = ' '; 
       output = [];
       
   })
   
   $('#e').click(function(){
       var d = output.join('');
       var a = eval(d);
       $('#textarea').append('<br>'+ a);
   })
   
   

});


document.getElementById("mod").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '%'; 
       output.push('%');
})

document.getElementById("addsign")
    .addEventListener('click',function(){
    let value = document.getElementById("textarea").innerHTML;
    document.getElementById('textarea').innerHTML = '-' + value;
    value = '-' + value;
    value = parseInt(value);
    output.unshift('-');
    console.log(output);
    
})




function sqrt(){
    var val = document.getElementById("textarea").innerHTML;   
    document.getElementById("textarea").innerHTML = '&radic;' + val; 
    var a = Math.sqrt(parseInt(val));
    document.getElementById("textarea").innerHTML  ='&radic;' + val  + '<br>' +a;
    
    

}
  
function backspace(){
    output.pop();
    console.log(output);
    var val = document.getElementById("textarea").innerHTML;
    document.getElementById("textarea").innerHTML = val.substring(0,val.length-1)
    
    
}
