

function popup(){
    var left_element = document.getElementById('left_column');
    var menu = document.querySelector('#menu-links')
    var elements = document.getElementsByClassName('links');
    var words = document.getElementsByClassName('hyperlink');
    var hiddenCard = document.getElementById('news');
    var icons = document.getElementsByClassName('icons');
   left_element.style.width = "24%";
   left_element.style.background = "#e5e7e9";
   menu.style.width = "100%";
   menu.style.background = "#f2f3f4";
   if (left_element.style.width == "24%") {
       hiddenCard.style.visibility = "visible";
       hiddenCard.style.transform = "translateX(-205px)";
    for (var i=0; i<elements.length; i++) {
        elements[i].style.width = "34.1%";
        elements[i].style.background = "#d5dbdb";
 
     }
     for (var j=0; j<words.length; j++){
         words[j].style.visibility = "hidden";
     }
     for (var s=0; s<icons.length; s++){
         icons[s].style.transform = "translateY(2px)";
     }
   
   }
}

function closing(){
    var left_element = document.getElementById('left_column');
    var elements = document.getElementsByClassName('links');
    var menu = document.querySelector('#menu-links')
    var words = document.getElementsByClassName('hyperlink');
    var hiddenCard = document.getElementById('news');
    var icons = document.getElementsByClassName('icons');
    hiddenCard.style.visibility = "hidden";
    left_colum.style.width = "20%";
    if (left_column.width = "20%"){
      menu.style.background = "orange";       
    }
}


var amount = 0;
function settings(){
        amount += 1
        switch(amount){
            case 1:
                document.querySelector('#more_block').style.visibility = "visible";
            break;
            case 2:
                document.querySelector('#more_block').style.visibility = "hidden"
                amount = 0;
                console.log(amount)
            break;
        }
     
}

var changes = 0;

function Night(){
    var element = document.querySelector('#left_column');
    var boxes = document.getElementsByClassName('links');
    var element = document.querySelector('#left_column');
    var boxes = document.getElementsByClassName('links');
    changes += 1;
    switch(changes){
       case 1:    
         element.style.background = "#17202a";
         for (e=0; e<boxes.length; e++){
            boxes[e].style.background = "#17202a";
         }
        break;
        case 2:
          element.style.background = "#17202a";
          for (e=0; e<boxes.length; e++){
             boxes[e].style.background = "#17202a";
          }
        break;
    }

}