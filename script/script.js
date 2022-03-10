$(document).ready(function() {
    $('#welcome-content').hide();

    setInterval(function() {
        $('#clock').html(new Date());
    }, 1000);

    $('#welcome-toggle').on('click', function() {
        $('#welcome-content').slideToggle(500);
    });

    $('#send-button').on('click', function() {
        $('.posted-comment').html.$('.comment-text[value]');
    });

});

//Figure out how to create 