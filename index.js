// alert("hh");

// document.querySelector(".heading").addEventListener("click", function () {
//   document.querySelector(".heading").style.backgroundColor = "yellow";
// });
$(document).keydown(function (event) {
  $("h1").text(event.key);
});

// method 1 - change color permanently
// $("button").on("mouseover", function () {
//   $("button").css("color", "yellow");
// });

// method 2 - change when mouse leaves
// $(selector).hover(inFunction,outFunction)
$("button").hover(
  function () {
    $(".btn").css("color", "blue");
    $(".delBtn").css("color", "red");
    $(".showBtn").css("color", "green");
    $(".toggleBtn").css("color", "purple");
  },
  function () {
    $("button").css("color", "black");
  }
);

$("h1").on("click", function () {
  $("h1").text("Don't click me!");
});

$(".delBtn").on("click", function () {
  $(".btn").remove();
});

$(".showBtn").on("click", function () {
  $(".btn").show();
});

$(".toggleBtn").on("click", function () {
  $(".btn").toggle();
});

$(".hideBtn").on("click", function () {
  $(".btn").hide();
});

$(".fadeOutBtn").on("click", function () {
  $(".btn").fadeOut();
});

$(".fadeInBtn").on("click", function () {
  $(".btn").fadeIn();
});

$(".fadeToggleBtn").on("click", function () {
  $(".btn").fadeToggle();
});

$(".opacityBtn").on("click", function () {
  $(".btn").slideUp().slideDown().animate({ opacity: 0.5 }); // only CSS between the curly braces/works only for numeric values
});
