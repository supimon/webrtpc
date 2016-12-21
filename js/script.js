$(function(){
    var validatedFields = {};
    $('input[type=text], input[type=tel], input[type=email], select', '#user-form').each(function(i){
        $(this).attr('id') != 'inputPhone' ? validatedFields[$(this).attr('id')] = true : '';
    });
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
    window.validateUserForm = function(errorIDs, showDataCheck) {
        errorIDs = Array.prototype.slice.call(errorIDs); // errorIDs is by default treated as string
        resetValidations();
        showDataCheck ? $('.form-group.data-check').show():$('.form-group.data-check').hide();
        errorIDs.forEach(function(item, index){
            $('.error-feedback.'+item+
                (item == 'inputPostal' ? ', .error-code-feedback.'+item : '')).removeClass('no-display');
            validatedFields[item] = false;
        });
        for (var key in validatedFields) {
            validatedFields[key] ? $('#'+key).addClass('tick') : '';
        }
    }
    function resetValidations(){
        $('input, select', '#user-form').removeClass('tick');
        $('.error-code-feedback, .error-feedback', '#user-form').addClass('no-display');
        for (var key in validatedFields) {
            validatedFields[key] = true;
        }
    }
});
