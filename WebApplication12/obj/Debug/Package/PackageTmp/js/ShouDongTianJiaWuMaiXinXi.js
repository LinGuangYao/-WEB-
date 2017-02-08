
var markerLayer_ShouDong, marker_ShouDong;
var ZhuoBiao_ShouDong_x;
var ZhuoBiao_ShouDong_y;

function moveXX() {
    $('#ShouDong_XingXi').empty();
    map.events.unregister("click", map, SDTJ);
}
function removeMarker() {
    map.removeLayer(markerLayer_ShouDong);
    markerLayer_ShouDong = null;
    map.events.unregister("click", map, SDTJ);
}

function ShouDongTianJia() {
    map.events.register("click", map, SDTJ);
} 

function SDTJ(ee) {

    var lonlat = map.getLonLatFromPixel(ee.xy);
    ZhuoBiao_ShouDong_x = lonlat.lon;
    ZhuoBiao_ShouDong_y = lonlat.lat;
    // alert(lonlat.lon+" "+lonlat.lat);

    //添加站点图标
    var imgURL = 'libs/img/marker-gold.png';
    if (markerLayer_ShouDong == null) {
        markerLayer_ShouDong = new OpenLayers.Layer.Markers("手动添加的站点");
        map.addLayer(markerLayer_ShouDong);
    }
    marker_ShouDong = new OpenLayers.Marker(lonlat, new OpenLayers.Icon(imgURL, new OpenLayers.Size(24,30), new OpenLayers.Pixel(-(25 / 2), -25)));
    markerLayer_ShouDong.addMarker(marker_ShouDong);

    //信息框
    var xxhtml;
    xxhtml = "<form class='form-inline'>";
    xxhtml += "<div class='form-group'><h4>坐标:</h4> </div> <br>";
    xxhtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>x坐标:</th>" + "<td>"+lonlat.lon+"</td>"
                                + "<th scope='col'>y坐标</th>" + "<td>"+lonlat.lat+"</td></table>"
    xxhtml += "<div class='form-group'><h4>信息录入:</h4> </div> <br>";
    xxhtml+=" <table class='gridtable' style='width:95%;margin:0px auto;'>"+" <tr>"
                                + "<th scope='col'>街道位置:</th>" + "<td><input type='text' class='form-control' size='10' id='JieDaoXingXi' '/></td>"
                                + "<th scope='col'>PM10浓度(ug/m3):</th>" + "<td><input type='text' class='form-control'size='10' id='PM10_nongdu'/></td>"
   
    xxhtml += " <tr>"
                                + "<th scope='col'>PM2.5浓度(ug/m3):</th>" + "<td><input type='text' class='form-control'size='10' id='PM25_nongdu'/></td>"
                                + "<th scope='col'>SO2浓度(ug/m3):</th>" + "<td><input type='text' class='form-control'size='10' id='SO2_nongdu'/></td>"

    xxhtml +=  " <tr>"
                                + "<th scope='col'>CO浓度(ug/m3):</th>" + "<td><input type='text' class='form-control'size='10' id='CO_nongdu'/></td>"
                                + "<th scope='col'>>O3浓度(ug/m3):</th>" + "<td><input type='text' class='form-control' size='10' id='O3_nongdu'/></td>"
   
    xxhtml += " <tr>"
                                + "<th scope='col'>>NO2浓度(ug/m3):</th>" + "<td><input type='text' class='form-control' size='10 ' id='NO2_nongdu'/></td>"
                                + "<th scope='col'>SO2浓度(ug/m3):</th>" + "<td><input type='text' class='form-control' size='10' id='SO2_nongdu'/></td>"

    xxhtml += " <tr>"
                                + "<th scope='col'>SO2浓度(ug/m3):</th>" + "<td><input type='text' class='form-control' size='10' id='SO2_nongdu'/></td>"
                                + "<th scope='col'>SO2浓度(ug/m3):</th>" + "<td><input type='text' class='form-control' size='10' id='SO2_nongdu'/></td>" + "</table>"



    xxhtml += "<div class='form-group'><h4>分析结果:</h4> </div> <br>";


    xxhtml += " <table class='gridtable' style='width:95%;margin:0px auto;'>" + " <tr>"
                                + "<th scope='col'>AQI:</th>" + "<td><input type='text' class='form-control'size='10' id='AQI_canShu'/></td>"
                                + "<th scope='col'>首要污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='shoyaowushan_canShu'/></td>"

    xxhtml += " <tr>"
                                + "<th scope='col'>超标污染物:</th>" + "<td><input type='text' class='form-control' size='10' id='chaobiao_canShu'/></td>"
                                + "<th scope='col'>空气质量:</th>" + "<td><input type='text' class='form-control' size='10' id='air_quality'/></td>" + "</table>"


    document.getElementById('ShouDong_XingXi').innerHTML = xxhtml;
};
    