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
        var ERR_CLASSNAME;
        errorIDs.forEach(function(item, index){
            ERR_CLASSNAME = item == 'inputPostal' ?  'has-code-error-feedback': 'has-error-feedback';
            $('.form-group.'+item).addClass(ERR_CLASSNAME);
            validatedFields[item] = false;
        });
        for (var key in validatedFields) {
            validatedFields[key] ? $('#'+key).addClass('tick') : '';
        }
    }
    function resetValidations(){
        $('input, select, .form-group', '#user-form').removeClass('tick has-error-feedback has-code-error-feedback');
        for (var key in validatedFields) {
            validatedFields[key] = true;
        }
    }
});
