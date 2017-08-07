
        $('.cover').hide().hover(function () {
            resize_cover()
        });
        function resize_cover() {
            $('.cover').each(function () {
                $(this).css({
                    'width': $(this).prev().width(),
                    'height': $(this).prev().height(),
                });
            });
        };

        $('p.noprice').click(function (e) {
            e.stopPropagation();
        })

        function _Init() {
           resize_cover();
           $('.container li').each(function () {
                $(this).width($(this).find('img').width());
           });
        }
        window.onresize = function () {
            _Init();
        };
        //点击阴影跳转
        $('.cover').click(function () {
            location.href = '' + $(this).prev().prev().attr('href');
        })
        var scrollflag = true;
        window.scrollflag = scrollflag;
        var bind = (window.addEventListener !== undefined) ? 'addEventListener' : 'attachEvent',
        wheel = (window.onwheel !== undefined) ? 'wheel' :
            (window.onmousewheel !== undefined) ? 'mousewheel' :
                (window.attachEvent) ? 'onmousewheel' : 'DOMMouseScroll';

        function horwheel(el) {
            if (el === undefined) {
                return;
            }
            document[bind](wheel, function (eve) {
                eve = eve || window.eve;
                if (scrollflag) {
                    var deltay = (eve.deltaY !== undefined) ? eve.deltaY :
                        (eve.detail !== undefined && eve.detail !== 0) ? eve.detail :
                            -eve.wheelDelta;
                    var deltax = (eve.deltaX !== undefined) ? eve.deltaX :
                        (eve.detail !== undefined && eve.detail !== 0) ? eve.detail :
                            -eve.wheelDelta;
                    var delta = deltay;
                    if (Math.abs(deltax) > Math.abs(deltay)) {
                        delta = deltax;
                    }
                    el.scrollLeft += delta;
                }
            }, false);
        }
        //经历滚动事件
        $('li').hover(function () {
            $(this).find('.cover').show();
        }, function () {
            $(this).find('.cover').hide();
        });
        //箭头左滑
        $('.rightContainer').scroll(function () {
           $('.rightContainer').scrollLeft() >= $('.experience').width() + 38?$('.srcoll_left').fadeIn():$('.srcoll_left').fadeOut()
        });
        $('.srcoll_left').click(function () {
            $('.rightContainer').animate({ 'scrollLeft': 0 }, 1000);
        });
        //收藏

        //引用横向滚动
        view = document.getElementsByClassName('rightContainer')[0];
        horwheel(view);
