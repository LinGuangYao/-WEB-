var xxx = new Array();
for (var i = 0; i < 10; i++) {
    xxx[i]=i;
}

var yyy = new Array();
for (var i = 0; i < 10; i++) {
    yyy[i]=i;
}


$.ajax({
    url: "ashx/ZhangDianZhuoBiao.ashx",
    type: "POST",
    dataType: "json",
    async :false,
    success: GetResults
});

function GetResults(json) {
    var jsonPage = eval(json);
    var jsonArray = json.points;
    $.each(jsonArray, function (index, item) {
        xxx[index] = jsonArray[index].X;
        yyy[index] = jsonArray[index].Y;  
 
    });
}
