
var output = []; 

document.getElementById("one").addEventListener('click',function(){
     var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '1'; 
         output.push(1);
})


document.getElementById("two").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '2'; 
       output.push(2);
})

document.getElementById("three").addEventListener('click',function(){
     var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '3'; 
       output.push(3);
})

document.getElementById("four").addEventListener('click',function(){
     var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '4'; 
       output.push(4);
})

document.getElementById("five").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '5'; 
       output.push(5);
})

document.getElementById("six").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '6'; 
       output.push(6);
})

document.getElementById("seven").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '7'; 
       output.push(7);
})

document.getElementById("eight").addEventListener('click',function(){
      var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '8'; 
       output.push(8);
})

document.getElementById("nine").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '9'; 
       output.push(9);
})

document.getElementById("zero").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '0'; 
       output.push(0);
})

document.getElementById("d").addEventListener('click',function(){
     var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '.'; 
       output.push('.');
})

document.getElementById("div").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '/'; 
       output.push('/');
})

document.getElementById("mul").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '*'; 
       output.push('*');
})


document.getElementById("min").addEventListener('click',function(){
     var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '-'; 
       output.push('-');
})


document.getElementById("add").addEventListener('click',function(){
    var val = document.getElementById("textarea").innerHTML;   
        document.getElementById("textarea").innerHTML = val + '+'; 
       output.push('+');
       console.log(output)
})


document.getElementById("clear").addEventListener('click',function(){
    document.getElementById('textarea').innerHTML = ' '; 
       output = [];
})



document.getElementById("e").addEventListener('click',function(){
    var d = output.join('');
       var a = eval(d);
    var value = document.getElementById("textarea").innerHTML
    document.getElementById('textarea').innerHTML = value  + '<br>' + a;
})

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

document.getElementById('num').addEventListener('click',function(){
    var val = parseInt(document.getElementById("textarea").innerHTML);
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
