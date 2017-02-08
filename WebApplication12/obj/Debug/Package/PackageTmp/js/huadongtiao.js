$(function () {
    $("#slider-dishi").slider({
        range: "min",
        value: 50,
        min: 1,
        max: 100,
        slide: function (event, ui) {
            $("#diShi").val(ui.value);
        }
    });
    $("#diShi").val($("#slider-dishi").slider("value"));

    $("#slider_fs").slider({
        range: "min",
        value: 50,
        min: 1,
        max: 100,
        slide: function (event, ui) {
            $("#fengsu").val(ui.value);
        }
    });
    $("#fengsu").val($("#slider_fs").slider("value"));
});