var step = 1;

var steps = new Array(6);
steps[0] = "Beschrijving hier";
steps[1] = "Zet je bord en bestek neer op de tafel";
steps[2] = "Pak 2 sneden brood uit je broodzak";
steps[3] = "Leg je sneden brood op je bord";
steps[4] = "Pak je beleg na keuze";
steps[5] = "Leg je beleg tussen je brood";

$('.back').click(function () {
    window.location.replace('tasks.html');
});

$('.previous__step').click(function () {
    step == 1 ? step = 1 : step--;
    console.log(step);

    $('.main__task p').text(steps[step]);
    var newsrc = "images/step" + step + ".png";
    $('.main__task img').attr("src", newsrc);
    $('.step__count').text(step + ' / 5');

    if (step == 5) {
        $('.fake-next__step').removeClass('hidden');
        $('.real-next__step').addClass('hidden');
    } else {
        $('.fake-next__step').addClass('hidden');
        $('.real-next__step').removeClass('hidden');
    }
});

$('.next__step').click(function () {
    step == 5 ? step = 5 : step++;
    console.log(step);

    $('.main__task p').text(steps[step]);
    var newsrc = "images/step" + step + ".png";
    $('.main__task img').attr("src", newsrc);
    $('.step__count').text(step + ' / 5');

    if (step == 5) {
        $('.fake-next__step').removeClass('hidden');
        $('.real-next__step').addClass('hidden');
    } else {
        $('.fake-next__step').addClass('hidden');
        $('.real-next__step').removeClass('hidden');
    }
});

$('.audio').click(function () {
    var newAudio = new Audio();
    var audio = "audio/stap" + step + '.mp3';
    newAudio.src = audio;

    newAudio.play();
});

$('.panic').click(function () {
    if ($('.modal > .specialModal').length != 0) {
        $('.modal').css({
            width: '300px',
            height: '400px',
            margin: '60px auto',
            borderRadius: '0'
        });

        console.log("yes");
    } else {
        console.log("no");
    }
});

$('.rondAf').click(function() {
    if (localStorage.getItem('completed') == '' || localStorage.getItem('completed') == null) {
        localStorage.setItem('completed', true);
    } else {
        email.value = localStorage.getItem('email');
    }

    window.location.replace('tasks.html');
});