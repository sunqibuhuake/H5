var ps = new brickjs.PageSwitch({
    pages: '.page',
    onSwitchEnd: function() {
        $('.page>.wrapper').removeClass('current').eq(ps.curPage).addClass('current');
    }
})