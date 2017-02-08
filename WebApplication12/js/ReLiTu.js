//热力图
function createHeatPoints() {

    var rlt_biao = null;
    $.ajax({
        url: "ashx/ReLiTu.ashx",
        type: "POST",
        dataType: "json",
        async: false,
        data: { DAY: currentdate_relitu },
        success: GetResults
    });

    function GetResults(json) {
        var jsonPage = eval(json);
        rlt_biao = json.WMXX;
    }



    var strjson = new Array(rlt_biao.length);
    var geoInfo = new Array(rlt_biao.length);
    for (var i = 0; i < rlt_biao.length; i++) {
        geoInfo[i] = new Zondy.Object.Point2D();
        strjson[i] = rlt_biao[i].AQI;
        geoInfo[i] = new Zondy.Object.Point2D(xxx[i], yyy[i]);
    }

    clearHeatPoints(); //清除之前的热力点
    var heatPoints = [];
    var radius = 5000; //生成热力图的半径，需根据地图的实际情况设置（比如墨卡托坐标系的地图，radius数字位数不能太小，7位左右），否则热力图可能看不到
    var unit = "degree",
			useGeoRadius = false;
    if ("degree" == unit) {
        useGeoRadius = true;  //如果单位为degree，则返回true；如果是px，则返回false，这里没有让用户设置，使用默认值是degree
    }

    heatMapLayer.radius = radius;

    for (var j = 0; j < rlt_biao.length; j++) {
        var geometry = new OpenLayers.Geometry.Point(geoInfo[j].x, geoInfo[j].y);
        var attribute = {
            "AQI": strjson[j],
            "geoRadius": useGeoRadius ? radius : null
        };
        var vector = new OpenLayers.Feature.Vector(geometry, attribute, null);
        heatPoints.push(vector);
        // alert(geometry);
    }
    heatMapLayer.addHeatFeatures(heatPoints);
    map.addLayers([heatMapLayer]);
}
//清除之前的热力点
function clearHeatPoints() {
    heatMapLayer.removeAllFeatures();
}