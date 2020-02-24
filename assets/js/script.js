$("a").on("click", function() {
  hideContainers();
  $("#" + this.innerHTML).attr("style", "display: block");
});

function hideContainers() {
  $("#Portfolio").attr("style", "display: none");
  $("#Contact").attr("style", "display: none");
  $("#Resume").attr("style", "display: none");
}
