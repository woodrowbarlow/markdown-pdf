// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

(function() {
    var links = $('body a:not([href$="amy_hemmeter_cv.pdf"])');
    if(links.length > 0) {
        $('footer').first().append("<ol></ol>");
        var footer = $('footer ol').first();
        links.each(function() {
            footer.append("<li>" + $(this).attr('href') + "</li>");
        });
    }
}());
