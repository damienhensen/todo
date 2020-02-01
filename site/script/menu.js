function check() {
    if ($('#menu').is(':checked')) {
        $('.menu-items a').animate({
            display: 'block',
            left: '0'
        });

        $('.header').animate({
            height: '100vh'
        });

        $('html').css({
            overflow: 'hidden'
        });

        $('.menu-items').css({
            display: 'block'
        });

        $('.time').css({
            display: 'none'
        });

        $('.dates').css({
            display: 'none'
        });

        $('.menu--hamburger').attr("src", 'images/cross.svg');
       
        var msg = new SpeechSynthesisUtterance();

        speechSynthesis.speak("bruh");



    } else {
        $('.menu-items a').animate({
            // display: 'none',
            left: '1000px'
        });

        $('.header').animate({
            height: '72px'
        });

        $('html').css({
            overflow: 'auto'
        })

        $('.menu-items').css({
            display: 'none'
        });

        $('.time').css({
            display: 'initial'
        });

        $('.dates').css({
            display: 'grid'
        });

        $('.menu--hamburger').attr("src", 'images/hamburger.svg');
        
    }
}
