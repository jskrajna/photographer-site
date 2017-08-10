$(document).ready(function() {
$('.item').each(function (i) {
            setTimeout(function(){
            $('.item').eq(i).addClass('appear');
                }, 400*i);
        });
    });

$(function(){
    $('.pop').on('click',function() {
        $('.photoPreview').attr('src',$(this).find('img').attr('src'));
        $('#photoModal').modal('show');
    });
});