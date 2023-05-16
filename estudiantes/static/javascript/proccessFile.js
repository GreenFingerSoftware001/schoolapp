var num = 0;

function effect1() {
    num++;
    var cont = document.getElementById("accounts_manager");
    switch(num){
      case 1:
        cont.style.visibility = "visible";
        console.log(num)
      break;
      case 2:
        cont.style.visibility = "hidden";
        console.log(num)
        if (num == 2){
          num = 0;
        }
      break;
    }
}
