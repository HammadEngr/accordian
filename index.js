$("button").click(function(){
  var qid = this.id;
  for (p=0; p<5; p++)
  if (this.id === "b"+(p+1)){
  // $(".questions").css("color","black");
  $(".a"+(p+1)).slideToggle();
  $(".d"+(p+1)).toggleClass("rotate");
  $("#b"+(p+1)).toggleClass("btncolor");
  }

})
