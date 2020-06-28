//Random Gif plays at the top every x seconds
$(document).ready(function() {

    function Update(){
        var tid = setInterval(mycode, 6000);
        function mycode() {
            var rando = Math.floor((Math.random() * 10) + 1);

            alert(rando);

            if(rando = 1){//Sneeze
                //sneezing-brandy-sneeze.gif

            }else if(rando < 4){//Blink
                //sneezing-brandy-blink.gif

            }else{//Breath
                //sneezing-brandy-idle.gif

            }
        }
    }

});
