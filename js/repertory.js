$(document).ready(function() {
    //Enable-disable backround when active
    $('.for-young__item').click(function(){
        $('.for-senior__item').siblings().removeClass('active');
        $(this).siblings().removeClass('active').end().addClass('active');
    });
    $('.for-senior__item').click(function(){
        $('.for-young__item').siblings().removeClass('active');
        $(this).siblings().removeClass('active').end().addClass('active');
    });
    //Open-close show-window
    function showHide() {
        $('.shows__description .show').hide()
    }
    $('#lake-trigger').click(function() {
        showHide();
        $('#lake').show();
    });

    $('#trap-trigger').click(function() {
        showHide();
        $('#trap').show();
    });

    $('#child-trigger').click(function() {
        showHide();
        $('#child').show();
    });

    $('#advantures-trigger').click(function() {
        showHide();
        $('#advantures').show();
    });

    $('#princess-trigger').click(function() {
        showHide();
        $('#princess').show();
    });

    $('#words-trigger').click(function() {
        showHide();
        $('#words').show();
    });

    $('#treasury-trigger').click(function() {
        showHide();
        $('#treasury').show();
    });

    $('#ulianka-trigger').click(function() {
        showHide();
        $('#ulianka').show();
    });

    $('#bears-trigger').click(function() {
        showHide();
        $('#bears').show();
    });

    $('#lyana-trigger').click(function() {
        showHide();
        $('#lyana').show();
    });

    $('#advices-trigger').click(function() {
        showHide();
        $('#advices').show();
    });

    $('#fairytale-trigger').click(function() {
        showHide();
        $('#fairytale').show();
    });

    $('#teaching-trigger').click(function() {
        showHide();
        $('#teaching').show();
    });

    $('#esper-trigger').click(function() {
        showHide();
        $('#esper').show();
    });

    $('#ivanko-trigger').click(function() {
        showHide();
        $('#ivanko').show();
    });

    $('#caprise-trigger').click(function() {
        showHide();
        $('#caprise').show();
    });

    $('#reload-trigger').click(function() {
        showHide();
        $('#reload').show();
    });
    $('#capitalist-trigger').click(function() {
        showHide();
        $('#capitalist').show();
    });

    $('#dreamers-trigger').click(function() {
        showHide();
        $('#dreamers').show();
    });

    $('#maze-trigger').click(function() {
        showHide();
        $('#maze').show();
    });

    $('#house-trigger').click(function() {
        showHide();
        $('#house').show();
    });

    $('#hero-trigger').click(function() {
        showHide();
        $('#hero').show();
    });

    //open-close feedback-popup
    $('.feedback__trigger').click(function() {
        $('.feedback').fadeIn();
    });
    $('.feedback__close').click(function() {
        $('.feedback').fadeOut();
    })
});
