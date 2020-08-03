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

function sliding() {
$window = $(window);
    if ($window.width() > 1023) {
        let slider = document.querySelector(".header");
        let bg = document.querySelector(".bg");
        let sliderWidth = slider.offsetWidth;
        let slideeHeight = slider.offsetHeight;
        let bgMovement = 40;
    
        slider.addEventListener("mousemove", (event) => {
        movement(event);
        });
        function movement(event) {
        let mouseX = Math.floor(
            -(event.offsetX - sliderWidth / 2) * (bgMovement / sliderWidth)
        );
        let mouseY = Math.floor(
            -(event.offsetY - slideeHeight / 2) * (bgMovement / slideeHeight)
        );
        bg.style.transform = `translate(${mouseX}px,${mouseY}px)`;
        }
    }
}   

const btn = () => {
    let button = document.querySelector('.playBtn');
    console.log(button);
    button.addEventListener('click', function(){videoPlay();});
}

const videoPlay = () => {
    let video = document.querySelector('.video');
    let materials = document.querySelector('.video_materials');
    video.play();
    video.setAttribute('controls', true);
    materials.style.display = 'none';
}

$(document).ready(function () {
    initCarouselIndicators();
    sliding();
    btn();
})

