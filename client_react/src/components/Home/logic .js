// Smooth scrolling for anchor links
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

// Show/hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
};


// Toggle feature descriptions
$('.feature').click(function() {
    $(this).find('.description').slideToggle();
});


// Toggle pricing plan details
$('.pricing-plan').click(function() {
    $(this).find('.details').slideToggle();
});
