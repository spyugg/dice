

$(".four").on("click", function(){
  rollIt(4);
});

$(".six").on("click", function(){
  rollIt(6);
});

$(".eight").on("click", function(){
  rollIt(8);
});

$(".ten").on("click", function(){
  rollIt(10);
});

$(".twenty").on("click", function(){
  rollIt(20);
});

$(".hundred").on("click", function(){
  rollIt(100);
});

function rollIt(input){
  var result=Math.floor(Math.random()*input+1);
  $("h2").html("You rolled a " + result);
}
