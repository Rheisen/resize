/* HEIGHT SCALING */

//default header - every page
$('#header').setHeight('min-height', .2);
$('#header').setHeight('margin-bottom', .025);

$('.logo_img').setHeight('height', .15);
$('.logo_img').setHeight('padding-top', .025);

$('.header_link').setHeight('margin-top', .1);
$('.header_link').setHeight('padding-top', .025);
$('.header_link').setHeight('padding-bottom', .025);
$('.header_link').setFontSize(.31);

//default footer - every page
$('#footer').setHeight('min-height', .05);
$('.footer_text').setHeight('margin-top', .01);
$('.footer_text').setFontSize(.3);

/* WIDTH SCALING */

//default header - every page
$('.logo_img').setWidth('padding-left', .02);
$('.logo_img').setWidth('margin-right', .15);
$('.header_link').setWidth('padding-left', .02);
$('.header_link').setWidth('padding-right', .02);

//footer
$('#footer').setWidth('width', .92);
$('#footer').setWidth('margin-left', .04);
$('#footer').setWidth('margin-right', .04);

$( window ).resize(function() {

$('#header').setHeight('min-height', .2);
$('#header').setHeight('margin-bottom', .025);
$('.logo_img').setHeight('height', .15);
$('.logo_img').setHeight('padding-top', .025);
$('.header_link').setHeight('margin-top', .1);
$('.header_link').setHeight('padding-top', .025);
$('.header_link').setHeight('padding-bottom', .025);
$('.header_link').setFontSize(.31);
$('#footer').setHeight('min-height', .05);
$('.footer_text').setHeight('margin-top', .01);
$('.footer_text').setFontSize(.3);
$('.logo_img').setWidth('padding-left', .02);
$('.logo_img').setWidth('margin-right', .15);
$('.header_link').setWidth('padding-left', .02);
$('.header_link').setWidth('padding-right', .02);
$('#footer').setWidth('width', .92);
$('#footer').setWidth('margin-left', .04);
$('#footer').setWidth('margin-right', .04);

});