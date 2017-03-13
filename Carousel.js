$(document).ready(function() {

    var req = $.getJSON("image.JSON", function(result) {


        var bdImg = result.image.source;
        var i = 0; //creation of var i init at 0
        var imgIndex = bdImg.length - 1; //last index of image
        $('#image').attr("src", bdImg[i]).fadeOut(3000); //the current image init at 0



        $("#preview").on('click', function() {
            if (i <= imgIndex, i !== 0) {
                i--;
                $('#image').attr("src", bdImg[i]);

            } else {
                i = imgIndex;
                $('#image').attr("src", bdImg[i]);

            }
        });
        $("#next").on('click', function() {
            if (i < imgIndex) {
                i++;
                $('#image').attr("src", bdImg[i]);

            } else {
                i = 0;
                $('#image').attr("src", bdImg[i]);

            }
        });

        function slideImg() {
            $('#image').attr("src", bdImg[i]).fadeOut(1500);
            setTimeout(function() { // on utilise une fonction anonyme
                if (i < imgIndex) { // si le compteur est inférieur au dernier index
                    i++; // on l'incrémente
                    $('#image').attr("src", bdImg[i]).fadeIn(1500);

                    console.log(bdImg[i]);
                } else { // sinon, on le remet à 0 (première image)

                    i = 0;
                    $('#image').attr("src", bdImg[i]).fadeIn(1500);

                }





                slideImg(); // on oublie pas de relancer la fonction à la fin

            }, 3000); // on définit l'intervalle à 3000 millisecondes (3s)
        }

        slideImg(); // enfin, on lance la fonction une première fois

    });

});
