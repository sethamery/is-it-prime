$( document ).ready(function(){
  $( "#box" ).append("<button onclick='prime()'>Check Prime</button>");
  console.log("ready!");
});

function prime(){
  let value = $( "#check" ).val();
  console.log(value);
  let prime = true;
  let i = 2;
  if (isNaN(value)){
    window.alert("please enter a number");
  }
  else{
    do{
      console.log("i: " + i);
      if(value % i === 0){
        prime = false;
      }
      else{
        console.log(value + " > " + i);
        prime = true;
        i++;
      }
    }
    while(i < value && prime);

    alertMe(prime, i, value);
  }
}

function alertMe(prime, factor, value){
  if(prime){
    window.alert("Prime!");
  }
  else if(prime == false){
    let x = value / factor;
    window.alert("Not prime! (" + value + " divided by " + factor + " is " + x + ")");
  }
}
