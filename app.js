




$("button").click(function () { 
    let txt = $("input").val();
    todo(txt);
    $("input").val('');
});

function todo(txt) {
     let h4 = $("<h4></h4>").text(txt)
    let li = $("<li></li>").append(h4);
    $("ul").append(li);
}
