function Closefunction() {
    document.querySelector('#modal_block').style.visibility = "hidden";
}


function Openit(){
    var creating = document.querySelector('#modal_block');
    creating.style.visibility = "visible";

}

function create(){
    var object = document.getElementById('form_block');
    object.style.visibility = "visible";
  
}

window.onclick = function(event) {
    var modal = document.querySelector('#modal_work')
    if (event.target == modal) {
      modal.style.visibility = "hidden";
    }
  }



  let visi = 0;
  function slider(){
      visi += 1;
      slider1 = document.querySelector('#courses_container');
      switch(visi){
         case 1:
            slider1.style.visibility = "visible";
         break;
         case 2:
            slider1.style.visibility = "hidden";
            visi = 0;
         break;
     
      }
  }


  let block = 0;
  function menuhidden(){
      block += 1;
      menuConf = document.querySelector('#more_conf');
      let pos = 680;
      switch(block){
         case 1:
            menuConf.style.visibility = "visible";
         break;
         case 2:
            menuConf.style.visibility = "hidden";
            block = 0;
         break;
     
      }
  }


  let move = 0;
  function accountpanel() {
    move += 1;
      var account = document.querySelector('#accounts_manager');
      switch(move){
         case 1:
            account.style.visibility = "visible";
         break;
         case 2:
            account.style.visibility = "hidden";
            move = 0;
         break;
     
      }
  }


function closefunction(){
   var closingwindow = document.querySelector('#form_block');
   closingwindow.style.visibility = "hidden";
}

function closefunction2(){
  var closingwindow = document.querySelector('#modal_work');
  closingwindow.style.visibility = "hidden";
}

function searcher(){
 result = document.getElementById('results');
 result.style.visibility = "visible";

}

function searcherout(){
   result = document.getElementById('results');
   result.style.visibility = "hidden";
  
}

let folders = document.querySelectorAll('.folders');
   folders.forEach(folder => {
      folder.addEventListener('click', () => {
         folder.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      });
   });


function Close(){
   var element = document.getElementById('select_lesson');
   element.style.visibility = "hidden";
}