$(document).ready(function () {
    $("#navToggle").click(function () {
        $(this).toggleClass("active");
        $(".header_wrapper").toggleClass("active-menu");
        $("body").toggleClass("locked");
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



