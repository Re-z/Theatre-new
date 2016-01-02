$(document).ready(function() {
    //Enable-disable background when active
    $('.for-young__item').click(function(){
        $('.for-senior__item').siblings().removeClass('active');
        $(this).siblings().removeClass('active').end().addClass('active');
    });
    $('.for-senior__item').click(function(){
        $('.for-young__item').siblings().removeClass('active');
        $(this).siblings().removeClass('active').end().addClass('active');
    });

    //Close-animate show window
    $('.show__close-btn').click(function(){
       $('.show').animate({
           right: -230
       },800);
    });

    var rightShift = 110;

    //Open-close show-window
    function showHide() {
        $('.shows__description .show').hide()
    }

    $('#lake-trigger').click(function() {
        showHide();
        $('#lake').show().animate({
            right: rightShift
        },800);
    });

    $('#trap-trigger').click(function() {
        showHide();
        $('#trap').show().animate({
            right: rightShift
        },800);
    });

    $('#child-trigger').click(function() {
        showHide();
        $('#child').show().animate({
            right: rightShift
        },800);
    });

    $('#advantures-trigger').click(function() {
        showHide();
        $('#advantures').show().animate({
            right: rightShift
        },800);
    });

    $('#princess-trigger').click(function() {
        showHide();
        $('#princess').show().animate({
            right: rightShift
        },800);
    });

    $('#words-trigger').click(function() {
        showHide();
        $('#words').show().animate({
            right: rightShift
        },800);
    });

    $('#treasury-trigger').click(function() {
        showHide();
        $('#treasury').show().animate({
            right: rightShift
        },800);
    });

    $('#ulianka-trigger').click(function() {
        showHide();
        $('#ulianka').show().animate({
            right: rightShift
        },800);
    });

    $('#bears-trigger').click(function() {
        showHide();
        $('#bears').show().animate({
            right: rightShift
        },800);
    });

    $('#lyana-trigger').click(function() {
        showHide();
        $('#lyana').show().animate({
            right: rightShift
        },800);
    });

    $('#advices-trigger').click(function() {
        showHide();
        $('#advices').show().animate({
            right: rightShift
        },800);
    });

    $('#fairytale-trigger').click(function() {
        showHide();
        $('#fairytale').show().animate({
            right: rightShift
        },800);
    });

    $('#teaching-trigger').click(function() {
        showHide();
        $('#teaching').show().animate({
            right: rightShift
        },800);
    });

    $('#esper-trigger').click(function() {
        showHide();
        $('#esper').show().animate({
            right: rightShift
        },800);
    });

    $('#ivanko-trigger').click(function() {
        showHide();
        $('#ivanko').show().animate({
            right: rightShift
        },800);
    });

    $('#caprise-trigger').click(function() {
        showHide();
        $('#caprise').show().animate({
            right: rightShift
        },800);
    });

    $('#reload-trigger').click(function() {
        showHide();
        $('#reload').show().animate({
            right: rightShift
        },800);
    });
    $('#capitalist-trigger').click(function() {
        showHide();
        $('#capitalist').show().animate({
            right: rightShift
        },800);
    });

    $('#dreamers-trigger').click(function() {
        showHide();
        $('#dreamers').show().animate({
            right: rightShift
        },800);
    });

    $('#maze-trigger').click(function() {
        showHide();
        $('#maze').show().animate({
            right: rightShift
        },800);
    });

    $('#house-trigger').click(function() {
        showHide();
        $('#house').show().animate({
            right: rightShift
        },800);
    });

    $('#hero-trigger').click(function() {
        showHide();
        $('#hero').show().animate({
            right: rightShift
        },800);
    });

    //open-close feedback-popup
    $('.feedback__trigger').click(function() {
        $('.feedback').fadeIn();
    });
    $('.feedback__close').click(function() {
        $('.feedback').fadeOut();
    });

    //adaptive menu
    $('.menu-burger').click(function(){
        $('ul.nav').slideToggle();
        $(this).toggleClass('menu-burger_pressed')
    });

});


//feedback script
document.getElementById('feedback-form').onsubmit = function(){
    var http = new XMLHttpRequest();
    http.open("POST", "../contacts.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("nameFF=" + this.nameFF.value + "&contactFF=" + this.contactFF.value + "&messageFF=" + this.messageFF.value);
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText + ', Ваше сообщение получено!.\nАдминистрация ответит на него на протяжении 2х дней.\nСпасибо!');
        }
    };
    http.onerror = function() {
        alert('Извините, данные не передано');
    };
    return false;
};
