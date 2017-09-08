$(function() {

    var page = 0;
    var lastPage = parseInt($(".slideshow .image").length - 1);
    $(".slideshow .image").css("display", "none");
    $(".slideshow .image").eq(page).css("display", "block");

    function changePage() {
        $(".slideshow .image").fadeOut(1000);
        $(".slideshow .image").eq(page).fadeIn(1000);
    };

    var Timer;

    function startTimer() {
        Timer = setInterval(function() {
            if (page === lastPage) {
                page = 0;
                changePage();
            } else {
                page++;
                changePage();
            };
        }, 5000);
    }

    function stopTimer() {
        clearInterval(Timer);
    }

    startTimer();

});
