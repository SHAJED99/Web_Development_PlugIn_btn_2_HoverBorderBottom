function btn_hover_bottom_border(head) {
    var key = $(head);


    key.append('<span></span>');
    var span_kay = $(head + '>span');

    key.css({
        'position': 'relative',
        'z-index': '1',
    })

    span_kay.css({
        'position': 'absolute',
        'z-index': '2',
        'left': '50%',
        'width': '0%',
        'transform': 'translate(-50%, 0%)',
    })

    key.addClass('btn_hover_bottom_border');
    span_kay.addClass('btn_hover_bottom_border_span');

    key.hover(function() {
        var key_width = key.innerWidth() - key.width();
        $(this).children('.btn_hover_bottom_border_span').css({
            'width': 'calc(100% - ' + key_width + 'px)',
        })
    }, function() {
        $(this).children('.btn_hover_bottom_border_span').css({
            'width': '0%',
        })
    });
}