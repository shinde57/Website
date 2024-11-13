jQuery(document).ready(function () {
    // on submit_success event triggered on my specific form #itchy002
    jQuery(document).on('submit_success', '#quoteform001', function (e) {
        // hide all fields in this form
        jQuery('#quoteform001').find('.elementor-form-fields-wrapper').hide();
        jQuery('.section1_hide').hide();

        jQuery('.section2_show').show();

    });

});