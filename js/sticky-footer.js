// JavaScript for sticky footer

document.addEventListener('DOMContentLoaded', function () {
    var contentWrapper = document.querySelector('.content-wrapper');
    var stickyFooter = document.querySelector('.sticky-footer');

    // Check if the content is scrollable
    function checkScroll() {
        if (contentWrapper.scrollHeight > contentWrapper.clientHeight) {
            // Content is scrollable, show the sticky footer
            stickyFooter.style.display = 'block';
        } else {
            // Content is not scrollable, hide the sticky footer
            stickyFooter.style.display = 'none';
        }
    }

    // Check initially and on window resize
    checkScroll();
    window.addEventListener('resize', checkScroll);

    // Check when content is scrolled
    contentWrapper.addEventListener('scroll', function () {
        checkScroll();
    });
});
