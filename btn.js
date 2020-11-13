function btn_hover_bottom_border(head, animition_type = 'width', transition_delay = '0s') {
    var key = $(head);
    key.append('<span></span>');
    var span_kay = $(head + '>span');

    var span_height = span_kay.css('height');
    var key_temp_width = key.innerWidth() - key.width() + 'px';

    key.css({
        'position': 'relative',
        'z-index': '1',
    })



    var span_width = 'calc(100% - ' + key_temp_width + ')';
    var transition = transition_delay + ' all ease-in-out';

    setTimeout(function() {
        span_kay.css({
            'transition': transition,
        })
    }, 10);

    span_kay.css({
        'position': 'absolute',
        'z-index': '2',
        'left': '50%',
        'transform': 'translate(-50%, 0%)',
        'transition': 'none',
    })

    if (animition_type == 'height') {
        span_kay.css({
            'height': '0px',
            'width': span_width,
        })
    } else {
        span_kay.css({
            'height': span_height,
            'width': '0px',
        })
    }

    key.hover(function() {
        $(this).children('span').css({
            'width': span_width,
            'height': span_height,
        })
    }, function() {
        if (animition_type == 'height') {
            $(this).children('span').css({
                'height': '0px',
            })
        } else {
            $(this).children('span').css({
                'width': '0px',
            })
        }
    })
}
