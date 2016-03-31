var ps = new brickjs.PageSwitch({
    pages: '.page',
    onSwitchEnd: function() {
        $('.page').height($('.page').width()*1136/640);
        $('.page>.wrapper').removeClass('current').eq(ps.curPage).addClass('current');
    }
})