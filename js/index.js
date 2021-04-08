$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });

        $('.ui.rating').rating();

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
        // modal
        $('.ios.modal')
            .modal('attach events', '.ios.button', 'show');
        $('.vue.modal')
            .modal('attach events', '.vue.button', 'show');
        $('.python.modal')
            .modal('attach events', '.python.button', 'show');

    });