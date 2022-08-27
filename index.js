var btns = document.querySelectorAll(".btn").length;
for (i=0; i<btns; i++){
  document.querySelectorAll('.btn')[i].addEventListener("click",function(){
    var qclass = this.id;
    for (p=0; p<5; p++){
      // document.querySelectorAll(".answer")[p].classList.add("hide");
      // document.querySelectorAll('.downarrow')[p].classList.remove("rotate");

      if (qclass === "b"+(p+1)){

      document.querySelector(".a"+(p+1)).classList.toggle("hide");
      document.querySelector(".d"+(p+1)).classList.toggle("rotate");
    }}
  })
}
