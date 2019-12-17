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
        })
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
    }
}
