//alert("hello")
$(document).click(function() {
    $(".container").css("grid-template-columns", "(4, 1fr")
})

//If hover == 1, box turns yellow... else revert
$(document).mousemove(function() {
    //$(".item1").css("background", "yellow")
    if ($(".box1:hover").length == 1) {
        $(".box1").css("background", "rgb(212, 155, 112)")
        $("#title1").css("letter-spacing", "0.26mm")
    }
    else {
        $(".box1").css("background", "rgb(214, 209, 195)")
        $("#title1").css("letter-spacing", "normal")
    }
})

$(document).mousemove(function() {
    //$(".item1").css("background", "yellow")
    if ($(".box2:hover").length == 1) {
        $(".box2").css("background", "rgb(147, 176, 144)")
        $("#title2").css("letter-spacing", "0.26mm")
    }
    else {
        $(".box2").css("background", "rgb(214, 209, 195)")
        $("#title2").css("letter-spacing", "normal")
    }
})

$(document).mousemove(function() {
    //$(".item1").css("background", "yellow")
    if ($(".box3:hover").length == 1) {
        $(".box3").css("background", "rgb(118, 138, 156)")
        $("#title3").css("letter-spacing", "0.26mm")
    }
    else {
        $(".box3").css("background", "rgb(214, 209, 195)")
        $("#title3").css("letter-spacing", "normal")
    }
})

$(document).mousemove(function() {
    //$(".item1").css("background", "yellow")
    if ($(".box4:hover").length == 1) {
        $(".box4").css("background", "rgb(227, 206, 150)")
        $("#title4").css("letter-spacing", "0.26mm")
    }
    else {
        $(".box4").css("background", "rgb(214, 209, 195)")
        $("#title4").css("letter-spacing", "normal")
    }
})
