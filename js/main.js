

function my_func() {

    var browserMaxWidth = parseInt($('.header_container').css('max-width'), 10);

    if (browserMaxWidth < 768) {
        $('li:first-child').text('');
    }

}
my_func();

$('.slider').slick({
    dots: true,
    infinite:false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


function myFunction() {
    const body = document.body;
    body.style.position = 'fixed';
    document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const body = document.body;
        body.style.position = '';
        body.style.top = '';
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}






