//Random Gif plays at the top every x seconds
$(document).ready(function() {

    function Update(){
        var tid = setInterval(mycode, 6000);
        function mycode() {
            //random between 0 and 1, max = 11, min = 1
            var rando = Math.floor((Math.random() * 10) + 1);

            alert(rando);

            if(rando = 1){//Sneeze
                //sneezing-brandy-sneeze.gif

            }else if(rando < 6){//Blink
                //sneezing-brandy-blink.gif

            }else{//Breath
                //sneezing-brandy-idle.gif

            }
        }
    }

});
