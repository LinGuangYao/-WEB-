var DanDianYuCe_x;
var DanDianYuCe_y;
var WMYC_return;
var YRW_return;
var AQI_YuCe ;
var ShouYao_YuCe ;
var CaoBiao_YuCe ;
var airQuality_YuCe;


function moveDanDianWuMai_YuCe() {
    $('#WuMai_YuCe_div').empty();
    map.events.unregister("click", map, DDWM_YC);
    map.events.unregister("click", map, DDWM_YC_douBian);
    map.events.unregister("click", map, DDWM_YC_Yuan);
    flag_WuMai_YuCe = 0;
}

function DanDianWuMai_YuCe() {
    if (flag_WuMai_YuCe == 1) {
        map.events.register("click", map, DDWM_YC(x_zhouBiao_dian, y_zhouBiao_dian, currentdate_danDianYuCe));
    }
    if (flag_WuMai_YuCe == 2) {
        map.events.register("click", map, DDWM_YC_douBian(x_zhuoBiao_duoBian, y_zhuoBiao_duoBian, currentdate_danDianYuCe));
    }
    if (flag_WuMai_YuCe == 3) {
        map.events.register("click", map, DDWM_YC_Yuan(YuanXin, BanJing, currentdate_danDianYuCe));
    }
}


function DDWM_YC_Yuan() {

    $.ajax({
        url: "ashx/WuMai_YuCe_circle.ashx",
        type: "POST",
        dataType: "text",
        traditional: true,
        async: false,
        data: { X: YuanXin, Y: BanJing, dateTime: currentdate_danDianYuCe },
        success: GetResults
    });
    function GetResults(data) {
        WuMai_YuCe_return = data;
    }
    WMYC_return = WuMai_YuCe_return.split(",");
    // AQI_YuCe = WMYC_return[0];
    no2_YuCe = WMYC_return[1];
    pm25_YuCe = WMYC_return[2];
    pm10_YuCe = WMYC_return[3];
    so2_YuCe = WMYC_return[4];
    o3_YuCe = WMYC_return[5];
    co_YuCe = WMYC_return[6];

    var JiShuanWuRan_yc_return;
    $.ajax({
        url: "ashx/JiSuanWuRanWu.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { pm25: pm25_YuCe, pm10: pm10_YuCe, so2: so2_YuCe, co: co_YuCe, o3: o3_YuCe, no2: no2_YuCe, X_zhuoBiao: 0, Y_zhuoBiao: 0, Jeidao: 0, imgsrc: 0, name: 0, flag: 0 },
        success: GetResults_WuRan_yc
    });
    function GetResults_WuRan_yc(data) {
        JiShuanWuRan_yc_return = data;
        // alert(JiShuanWuRan_yc_return);
    }

    YRW_return = JiShuanWuRan_yc_return.split(",");
    var AQI_YuCe = YRW_return[0];
    var ShouYao_YuCe = YRW_return[1];
    var CaoBiao_YuCe = YRW_return[2];
    var airQuality_YuCe = YRW_return[3];

    var ychtml;
    ychtml = "<form class='form-inline'>";
    // ychtml += "<div class='form-group'><label>坐标：" + "x坐标" + DanDianYuCe_x + " " + "y坐标" + DanDianYuCe_y + "</label> </div> <br>";
    ychtml += "<div class='form-group'><h4>污染物浓度:</h4> </div> <br>"
    ychtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>PM2.5浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='PM25_nongdu_yc'/></td>"
                                + "<th scope='col'>PM10浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='PM10_nongdu_yc'/></td>"

    ychtml += " <tr>"
                                + "<th scope='col'>SO2浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='SO2_nongdu_yc'/></td>"
                                + "<th scope='col'>CO浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='CO_nongdu_yc'/></td>"
    ychtml += " <tr>"
                                + "<th scope='col'>O3浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='O3_nongdu_yc'/></td>"
                                + "<th scope='col'>NO2浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='NO2_nongdu_yc'/></td>" + "</table>"


    ychtml += "<div class='form-group'><h4>分析结果:</h4> </div> <br>"
    ychtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>AQI:</th>" + "<td><input type='text' class='form-control' size='10' id='AQI_canShu_yc'/></td>"
                                + "<th scope='col'>首要污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='shoyaowushan_canShu_yc'/></td>"

    ychtml += " <tr>"
                                + "<th scope='col'>超标污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='chaobiao_canShu_yc'/></td>"
                                + "<th scope='col'>空气质量:</th>" + "<td><input type='text' class='form-control' size='10' id='air_quality_yc'/></td>" + "</table>"


    document.getElementById('WuMai_YuCe_div').innerHTML = ychtml;

    document.getElementById("PM25_nongdu_yc").value = pm25_YuCe;
    document.getElementById("PM10_nongdu_yc").value = pm10_YuCe;
    document.getElementById("SO2_nongdu_yc").value = so2_YuCe;
    document.getElementById("CO_nongdu_yc").value = co_YuCe;
    document.getElementById("NO2_nongdu_yc").value = no2_YuCe;
    document.getElementById("O3_nongdu_yc").value = o3_YuCe;

    document.getElementById("AQI_canShu_yc").value = AQI_YuCe;
    document.getElementById("shoyaowushan_canShu_yc").value = ShouYao_YuCe;
    document.getElementById("chaobiao_canShu_yc").value = CaoBiao_YuCe;
    document.getElementById("air_quality_yc").value = airQuality_YuCe;


};

function DDWM_YC_douBian() {
       
    $.ajax({
        url: "ashx/WuMai_YuCe_DoBian.ashx",
        type: "POST",
        dataType: "text",
        traditional: true,
        async: false,
        data: { X: x_zhuoBiao_duoBian, Y: y_zhuoBiao_duoBian, dateTime: currentdate_danDianYuCe },
        success: GetResults
    });
    function GetResults(data) {
        WuMai_YuCe_return = data;
    }
    WMYC_return = WuMai_YuCe_return.split(",");
    // AQI_YuCe = WMYC_return[0];
    no2_YuCe = WMYC_return[1];
    pm25_YuCe = WMYC_return[2];
    pm10_YuCe = WMYC_return[3];
    so2_YuCe = WMYC_return[4];
    o3_YuCe = WMYC_return[5];
    co_YuCe = WMYC_return[6];

    var JiShuanWuRan_yc_return;
    $.ajax({
        url: "ashx/JiSuanWuRanWu.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { pm25: pm25_YuCe, pm10: pm10_YuCe, so2: so2_YuCe, co: co_YuCe, o3: o3_YuCe, no2: no2_YuCe, X_zhuoBiao: 0, Y_zhuoBiao: 0, Jeidao: 0, imgsrc: 0, name: 0, flag: 0 },
        success: GetResults_WuRan_yc
    });
    function GetResults_WuRan_yc(data) {
        JiShuanWuRan_yc_return = data;
        // alert(JiShuanWuRan_yc_return);
    }

    YRW_return = JiShuanWuRan_yc_return.split(",");
    var AQI_YuCe = YRW_return[0];
    var ShouYao_YuCe = YRW_return[1];
    var CaoBiao_YuCe = YRW_return[2];
    var airQuality_YuCe = YRW_return[3];

    var ychtml;
    ychtml = "<form class='form-inline'>";
    // ychtml += "<div class='form-group'><label>坐标：" + "x坐标" + DanDianYuCe_x + " " + "y坐标" + DanDianYuCe_y + "</label> </div> <br>";
   
    ychtml += "<div class='form-group'><h4>污染物浓度:</h4> </div> <br>"
    ychtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>PM2.5浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='PM25_nongdu_yc'/></td>"
                                + "<th scope='col'>PM10浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='PM10_nongdu_yc'/></td>"

    ychtml += " <tr>"
                                + "<th scope='col'>SO2浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='SO2_nongdu_yc'/></td>"
                                + "<th scope='col'>CO浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='CO_nongdu_yc'/></td>"
    ychtml += " <tr>"
                                + "<th scope='col'>O3浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='O3_nongdu_yc'/></td>"
                                + "<th scope='col'>NO2浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='NO2_nongdu_yc'/></td>" + "</table>"



    ychtml += "<div class='form-group'><h4>分析结果:</h4> </div> <br>"
    ychtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>AQI:</th>" + "<td><input type='text' class='form-control' size='10' id='AQI_canShu_yc'/></td>"
                                + "<th scope='col'>首要污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='shoyaowushan_canShu_yc'/></td>"

    ychtml += " <tr>"
                                + "<th scope='col'>超标污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='chaobiao_canShu_yc'/></td>"
                                + "<th scope='col'>空气质量:</th>" + "<td><input type='text' class='form-control' size='10' id='air_quality_yc'/></td>" + "</table>"

    document.getElementById('WuMai_YuCe_div').innerHTML = ychtml;

    document.getElementById("PM25_nongdu_yc").value = pm25_YuCe;
    document.getElementById("PM10_nongdu_yc").value = pm10_YuCe;
    document.getElementById("SO2_nongdu_yc").value = so2_YuCe;
    document.getElementById("CO_nongdu_yc").value = co_YuCe;
    document.getElementById("NO2_nongdu_yc").value = no2_YuCe;
    document.getElementById("O3_nongdu_yc").value = o3_YuCe;

    document.getElementById("AQI_canShu_yc").value = AQI_YuCe;
    document.getElementById("shoyaowushan_canShu_yc").value = ShouYao_YuCe;
    document.getElementById("chaobiao_canShu_yc").value = CaoBiao_YuCe;
    document.getElementById("air_quality_yc").value = airQuality_YuCe;


};

function DDWM_YC() {
//    var lonlat = map.getLonLatFromPixel(e.xy);
//    DanDianYuCe_x = lonlat.lon;
    //   DanDianYuCe_y = lonlat.lat;

    DanDianYuCe_x = x_zhouBiao_dian;
    DanDianYuCe_y = y_zhouBiao_dian;


//    //Web墨卡托转经纬度
//    DanDianYuCe_x = x_zhouBiao_dian / 20037508.34 * 180;
//    DanDianYuCe_y = x_zhouBiao_dian / 20037508.34 * 180;
//    DanDianYuCe_y = 180 / Math.PI * (2 * Math.atan(Math.exp(DanDianYuCe_y * Math.PI / 180)) - Math.PI / 2);
//    alert(DanDianYuCe_y);


   var WuMai_YuCe_return;
    $.ajax({
        url: "ashx/WuMai_YuCe.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { X: DanDianYuCe_x, Y: DanDianYuCe_y, dateTime: currentdate_danDianYuCe },
        success: GetResults
    });
    function GetResults(data) {
        WuMai_YuCe_return = data;
    }

    WMYC_return = WuMai_YuCe_return.split(",");
    // AQI_YuCe = WMYC_return[0];
    no2_YuCe = WMYC_return[1];
    pm25_YuCe = WMYC_return[2];
    pm10_YuCe = WMYC_return[3];
    so2_YuCe = WMYC_return[4];
    o3_YuCe = WMYC_return[5];
    co_YuCe = WMYC_return[6];

    var JiShuanWuRan_yc_return;
    $.ajax({
        url: "ashx/JiSuanWuRanWu.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { pm25: pm25_YuCe, pm10: pm10_YuCe, so2: so2_YuCe, co: co_YuCe, o3: o3_YuCe, no2: no2_YuCe, X_zhuoBiao: 0, Y_zhuoBiao: 0, Jeidao: 0, imgsrc: 0, name: 0, flag: 0 },
        success: GetResults_WuRan_yc
    });
    function GetResults_WuRan_yc(data) {
        JiShuanWuRan_yc_return = data;
    }

    YRW_return = JiShuanWuRan_yc_return.split(",");
    var AQI_YuCe = YRW_return[0];
    var ShouYao_YuCe = YRW_return[1];
    var CaoBiao_YuCe = YRW_return[2];
    var airQuality_YuCe = YRW_return[3];

    var ychtml;
    ychtml = "<form class='form-inline'>";
   // ychtml += "<div class='form-group'><label>坐标：" + "x坐标" + DanDianYuCe_x + " " + "y坐标" + DanDianYuCe_y + "</label> </div> <br>";

    ychtml += "<div class='form-group'><h4>污染物浓度:</h4> </div> <br>"
    ychtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>PM2.5浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='PM25_nongdu_yc'/></td>"
                                + "<th scope='col'>PM10浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='PM10_nongdu_yc'/></td>"

    ychtml += " <tr>"
                                + "<th scope='col'>SO2浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='SO2_nongdu_yc'/></td>"
                                + "<th scope='col'>CO浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='CO_nongdu_yc'/></td>"
    ychtml += " <tr>"
                                + "<th scope='col'>O3浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='O3_nongdu_yc'/></td>"
                                + "<th scope='col'>NO2浓度(ug/m3)</th>" + "<td><input type='text' class='form-control' size='10' id='NO2_nongdu_yc'/></td>" + "</table>"



    ychtml += "<div class='form-group'><h4>分析结果:</h4> </div> <br>"
    ychtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>AQI:</th>" + "<td><input type='text' class='form-control' size='10' id='AQI_canShu_yc'/></td>"
                                + "<th scope='col'>首要污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='shoyaowushan_canShu_yc'/></td>"

    ychtml += " <tr>"
                                + "<th scope='col'>超标污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='chaobiao_canShu_yc'/></td>"
                                + "<th scope='col'>空气质量:</th>" + "<td><input type='text' class='form-control' size='10' id='air_quality_yc'/></td>" + "</table>"

    document.getElementById('WuMai_YuCe_div').innerHTML = ychtml;

    document.getElementById("PM25_nongdu_yc").value = pm25_YuCe;
    document.getElementById("PM10_nongdu_yc").value = pm10_YuCe;
    document.getElementById("SO2_nongdu_yc").value = so2_YuCe;
    document.getElementById("CO_nongdu_yc").value = co_YuCe;
    document.getElementById("NO2_nongdu_yc").value = no2_YuCe;
    document.getElementById("O3_nongdu_yc").value = o3_YuCe;

    document.getElementById("AQI_canShu_yc").value = AQI_YuCe;
    document.getElementById("shoyaowushan_canShu_yc").value = ShouYao_YuCe;
    document.getElementById("chaobiao_canShu_yc").value = CaoBiao_YuCe;
    document.getElementById("air_quality_yc").value = airQuality_YuCe;

};