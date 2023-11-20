jQuery(document).ready(listo);

function listo()
{
    jQuery(".bar").click(function(e)
    {
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".bar i").toggleClass("fa-xmark");
    });

   jQuery("header .container nav a").click(function()
    {
        jQuery("header .container nav").removeClass("open");
        jQuery(".bar i").removeClass("fa-xmark");

        var dev = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top -76
        })
    })
}

