var num = 0;

function function1(){
    num++;
    var cont = document.querySelector("#accounts_manager")
    switch(num){
        case 1:
          cont.style.visibility = "visibility";
        break;
        case 2:
          cont.style.visibility = "hidden";
          if (num == 0){
            num = 0;
          }
        break;
    }
    console.log(num)
}

function newPost() {
    var posting = document.getElementById('publish');
    posting.style.visibility = "visible";
}

function closingTab(){
    document.getElementById('publish').style.visibility = "hidden";
}