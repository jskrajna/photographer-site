$(document).ready(function() {
$('.item').each(function (i) {
            setTimeout(function(){
            $('.item').eq(i).addClass('appear');
                }, 400*i);
        });
    });

$(function(){
    $('#side').on('click',function() {
        $('.photoPreview').attr('src',$(this).find('img').attr('src'));
        $('#photoModal').modal('show');
    });
});