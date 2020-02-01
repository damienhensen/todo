i = 0;

function setTime() {
    var d = new Date();

    var weekdays = new Array(7);
        weekdays[0] = "Zondag";
        weekdays[1] = "Maandag";
        weekdays[2] = "Dinsdag";
        weekdays[3] = "Woensdag";
        weekdays[4] = "Donderdag";
        weekdays[5] = "Vrijdag";
        weekdays[6] = "Zaterdag";
        var w = weekdays[d.getDay()];

    var months = new Array(12);
        months[0]  = "Januari";
        months[1]  = "Februari";
        months[2]  = "Maart";
        months[3]  = "April";
        months[4]  = "Mei";
        months[5]  = "Juni";
        months[6]  = "Juli";
        months[7]  = "Augustus";
        months[8]  = "September";
        months[9]  = "Oktober";
        months[10] = "November";
        months[11] = "December";
        var m = months[d.getMonth()];

    var classListDay = $('.day').attr('class').split(/\s+/);
    $.each(classListDay, function(index, item) {
        if (item === 'pickedDate') {
            $('.time').text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
        }
    });

    var classListWeek = $('.week').attr('class').split(/\s+/);
    $.each(classListWeek, function(index, item) {
        if (item === 'pickedDate') {
            $('.time').text(w + " " + d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
        }
    });

    var classListMonth = $('.month').attr('class').split(/\s+/);
    $.each(classListMonth, function(index, item) {
        if (item === 'pickedDate') {
            $('.time').text(d.getDate() + " " + m + " " + d.getFullYear() + " " + d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
        }
    });

    
    i++;
    // console.log(i + " second(s) have passed");
}

setInterval(setTime, 1000);

function nognietgedaan() {
    if ($('#nognietgedaan').is(':checked')) {
        $('.task__completed').addClass('hidden');
    } else {
        $('.task__completed').removeClass('hidden');
    }
}

$('.day').click(function() {
    $('.day').addClass('pickedDate');
    $('.week').removeClass('pickedDate');
    $('.month').removeClass('pickedDate');

    $('.day__tasks').removeClass('hidden');
    $('.week__tasks').addClass('hidden');
    $('.month__tasks').addClass('hidden');
});

$('.week').click(function() {
    $('.day').removeClass('pickedDate');
    $('.week').addClass('pickedDate');
    $('.month').removeClass('pickedDate');

    $('.day__tasks').addClass('hidden');
    $('.week__tasks').removeClass('hidden');
    $('.month__tasks').addClass('hidden');
});
    


$('.month').click(function() {
    $('.day').removeClass('pickedDate');
    $('.week').removeClass('pickedDate');
    $('.month').addClass('pickedDate');

    $('.day__tasks').addClass('hidden');
    $('.week__tasks').addClass('hidden');
    $('.month__tasks').removeClass('hidden');
});

$('.enigsteWerkende').click(function() {
    window.location.replace('task.html')
});