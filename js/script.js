function initCarouselIndicators() {
    $(".carousel-indicators[data-target]").each(function (i, indicators) {
        var targetId = indicators.dataset.target;
        if (targetId != "") {
            var $carousel = $(targetId);
            $carousel.bind('slide.bs.carousel', function (e) {
                var $targetSlide = $(e.relatedTarget);
                var index = $targetSlide.index();
                $('.carousel-indicators[data-target="' + targetId + '"] li').removeClass('active')
                $('.carousel-indicators[data-target="' + targetId + '"] li:nth-child(' + (index + 1) + ')').addClass('active');
            });
        }
    });
}

$(document).ready(function () {
    initCarouselIndicators();
})