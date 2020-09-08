$('#navbar-site').on('show.bs.collapse', function () {
    $('#header-banner').css('transform', ' translateY(10%) translateX(-50%)')
})

$('#navbar-site').on('hidden.bs.collapse', function () {
    $('#header-banner').css('transform', ' translateY(-50%) translateX(-50%)')
})