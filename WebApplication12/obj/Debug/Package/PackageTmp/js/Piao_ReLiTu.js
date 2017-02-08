
var Piao_ReLi_Biao = null;
//var length_AQI;
var number_biao = 10;
var day_flag = 0;

var day_return;
var st_ed_time;

function Piao_WuMai() {

    $.ajax({
        url: "ashx/Day_handler.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { stratdate: strat_date, enddate: end_date, flag: day_flag },
        success: GetResultsDay
    });
    function GetResultsDay(data) {
        day_return = data;
    }
    st_ed_time = day_return.split(",");
    strat_date = st_ed_time[0];
    end_date = st_ed_time[1];
      alert(day_return);


    while (strat_date <= end_date) {
        setTimeout(alert("当前日期:" + strat_date + "\n" + "截止日期:" + end_date), 1000);
        Piao_WuMai_dong();
        // setTimeout(alert(day_return), 1000);
    }
    if (strat_date == end_date)
    { clearHeatPoints2(); };

}



function Piao_WuMai_dong() {

    $.ajax({
        url: "ashx/Piao_ReLiTu.ashx",
        type: "POST",
        dataType: "json",
        async: false,
        data: { stratdate: strat_date },
        success: GetResults
    });
    function GetResults(json) {
        var jsonPage = eval(json);
        Piao_ReLi_Biao = json.AQI;
    }

    var strjson = new Array(number_biao);
    var geoInfo = new Array(number_biao);
    for (var i1 = 0; i1 < number_biao; i1++) {
        strjson[i1] = Piao_ReLi_Biao[i1].AQI;
    }

    clearHeatPoints2(); //清除之前的热力点
    var heatPoints = [];
    var radius = 5000; //生成热力图的半径，需根据地图的实际情况设置（比如墨卡托坐标系的地图，radius数字位数不能太小，7位左右），否则热力图可能看不到
    var unit = "degree",
    			useGeoRadius = false;
    if ("degree" == unit) {
        useGeoRadius = true;  //如果单位为degree，则返回true；如果是px，则返回false，这里没有让用户设置，使用默认值是degree
    }

    heatMapLayer_piao.radius = radius;

    for (var j = 0; j < number_biao; j++) {
        var geometry = new OpenLayers.Geometry.Point(xxx[j], yyy[j]);
        var attribute = {
            "AQI": strjson[j],
            "geoRadius": useGeoRadius ? radius : null
        };
        var vector = new OpenLayers.Feature.Vector(geometry, attribute, null);
        heatPoints.push(vector);
        //   alert("a");
    }
    heatMapLayer_piao.addHeatFeatures(heatPoints);

    map.addLayers([heatMapLayer_piao]);
    day_flag = 1;

    $.ajax({
        url: "ashx/Day_handler.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { stratdate: strat_date, enddate: end_date, flag: day_flag },
        success: GetResultsDay
    });
    function GetResultsDay(data) {
        day_return = data;
        //  alert(day_return);
    }
    st_ed_time = day_return.split(",");
    strat_date = st_ed_time[0];
    end_date = st_ed_time[1];
}

function clearHeatPoints2() {
    heatMapLayer_piao.removeAllFeatures();
}














