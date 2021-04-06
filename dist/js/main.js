(function($) {
"use strict";


// Set the count down timer
if ($('.countdown').length) {
    var count = $('.countdown').data('count');
    var template = $('.countdown').html();
    $('.countdown').countdown(count, function(event) {
        $(this).html(event.strftime(template));
    });
}

//get url by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var sn = getParameterByName('to');

    document.getElementById("write").innerHTML = sn;

// Modal
$('#myModal').modal('show');

// Back to top button
// $('#modal-open').on('click',function(){
    
// });
$('#modal-open').click(function() {
    musik.play();
});

})(jQuery);