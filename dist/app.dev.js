"use strict";

$("button").click(function () {
  var txt = $("input").val();
  todo(txt);
  $("input").val('');
});

function todo(txt) {
  var h4 = $("<h4></h4>").text(txt);
  var li = $("<li></li>").append(h4);
  $("ul").append(li);
}