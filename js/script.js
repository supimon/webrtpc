$(function(){
    $('#currYear').text(new Date().getFullYear());
    resizeModal();
    $(window).on('resize', function(){
        resizeModal()
    });
    function resizeModal() {
        var modalMarginTop = $('.modal-dialog').css('margin-top');
        $('.modal-dialog').height($(window).height() - 2 * parseInt(modalMarginTop, 10));
        $('#myModal').on('shown.bs.modal', function () {
            $('.modal-dialog').height($(window).height() - 2 * parseInt(modalMarginTop, 10));
        });
    }
});
