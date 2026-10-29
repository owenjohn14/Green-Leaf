$(document).ready(function () {

    // Fade the sections in when the page loads
    $("main section").hide().fadeIn(800);

    // Show or hide the services list with a slide animation
    $("#toggleServicesBtn").on("click", function () {
        $("#servicesList").slideToggle(400);
    });

    // Add or remove a highlight class and update the button text
    $("#highlightBtn").on("click", function () {
        $("#about").toggleClass("highlight");
        if ($("#about").hasClass("highlight")) {
            $(this).text("Remove highlight");
        } else {
            $(this).text("Highlight this section");
        }
    });

    // Underline navigation links on hover
    $("nav a").hover(
        function () { $(this).css("text-decoration", "underline"); },
        function () { $(this).css("text-decoration", "none"); }
    );

    // Smooth scroll to sections when a navigation link is clicked
    $("nav a").on("click", function (e) {
        e.preventDefault();
        let target = $(this.hash);
        $("html, body").animate({ scrollTop: target.offset().top - 20 }, 500);
    });

    // Contact form: validate input and show a message
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        let name = $.trim($("#name").val());
        let email = $.trim($("#email").val());

        if (name === "" || email === "") {
            $("#formMessage").text("Please fill in your name and email.").css("color", "red");
            return;
        }

        $("#formMessage").text("Thank you, " + name + ". We will contact you soon.").css("color", "green");
        this.reset();
    });
});