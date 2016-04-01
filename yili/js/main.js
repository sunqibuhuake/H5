var g3_cao = document.querySelector('#cao');
g3_cao.addEventListener("webkitAnimationEnd", function () {
    this.className = 'cao';
}, false);

var g3_circleArrow = document.querySelector('#circleArrow');
g3_circleArrow.addEventListener("webkitAnimationEnd", function () {
    this.className = 'circleArrow';
}, false);

var ps = new brickjs.PageSwitch({
    pages: '.page',
    onSwitchEnd: function () {

        g3_cao.className = '';
        g3_circleArrow.className = '';

        $('.page>.wrapper').removeClass('current').eq(ps.curPage).addClass('current');
    }
});

