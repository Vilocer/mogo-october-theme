$(function() {

    var header = $('#header'),
        introH = $('#intro').innerHeight()
        scrollOffset =  $(window).scrollTop();


    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if ( scrollOffset >= introH ) {
            header.addClass('fixed');

        } else {
            header.removeClass('fixed');

            // Close nav for intro scroll
            $('#nav').removeClass('active');
            $('#nav-toggle').removeClass('active');

        }
    }


    // Smooth Scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        // Get offset for scroll
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 80;

        // Set current link active
        $('#nav .nav__link').removeClass('active');
        $this.addClass('active');

        // Scroll to Element
        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);

        // Close nav for mobile
        $('#nav').removeClass('active');
        $('#nav-toggle').removeClass('active');
    });


    // Nav Toggle
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();

        $('#nav').toggleClass('active');
        $(this).toggleClass('active');

    });

    // Close nav by click outside header.
    $(document).on('click', function(event) {
        var header = $('#header');

        if ( !header.is(event.target) && header.has(event.target).length == 0 ) {
            $('#nav').removeClass('active');
            $('#nav-toggle').removeClass('active');

        }

    });

    // Accordion
    $('[data-collapse]').on('click', function(event) {
        event.preventDefault();

        var accordionId = $(this).data('collapse');
        $(accordionId).toggleClass('asas');
    });

});