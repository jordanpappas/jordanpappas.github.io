console.log('client code');

$(document).ready(function() {
    $('#fullpage').fullpage({
      responsiveWidth: 900,
      anchors: ['pageOne', 'pageTwo', 'pageThree', 'pageFour']
    });
});
