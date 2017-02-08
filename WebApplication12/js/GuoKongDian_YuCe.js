
var gkd_i = 0;
var gkd_ii = 0;
var BanJing;
var markerLayer_ShouDong_zb = null, marker_ShouDong_zb;
function GuoKongDian_yuCe_Clear() {
    map.removeLayer(polygonLayer);
    polygonLayer = null;
    gkd_i = 0;
    gkd_ii = 0;

    map.events.unregister("click", map, GuoKongDian_ShouDong_zb);
    map.removeLayer(markerLayer_ShouDong_zb);
    map.removeLayer(polygonLayer_shuoDong);

}

function GuoKongDian_ShouDong() {
    map.events.register("click", map, GuoKongDian_ShouDong_zb);
}

function GuoKongDian_ShouDong_zb(ee) {
    var lonlat = map.getLonLatFromPixel(ee.xy);
    var imgURL = 'libs/img/marker-red2.png';
    if (markerLayer_ShouDong_zb == null) {
        markerLayer_ShouDong_zb = new OpenLayers.Layer.Markers("添加覆盖点的图标");
        map.addLayer(markerLayer_ShouDong_zb);
    }
    marker_ShouDong_zb = new OpenLayers.Marker(lonlat, new OpenLayers.Icon(imgURL, new OpenLayers.Size(24, 30), new OpenLayers.Pixel(-(25 / 2), -25)));
    markerLayer_ShouDong_zb.addMarker(marker_ShouDong_zb);

    if (gkd_ii == 0) {
        polygonLayer_shuoDong = new OpenLayers.Layer.Vector("添加覆盖点");
    }
    polygonLayer_shuoDong.styleMap.styles["default"].defaultStyle.strokeColor = "blue";  //设置默认样式策略中绘制要素的画笔颜色
    polygonLayer_shuoDong.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
    polygonLayer_shuoDong.styleMap.styles["default"].defaultStyle.fillColor = "blue";  //设置点要素的填充色

    var pointgeom_shouDong = new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat);
    var polygongeom_shouDong = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom_shouDong, BanJing, 50, 0);
    var polygonfeature_shouDong = new OpenLayers.Feature.Vector(polygongeom_shouDong);
    polygonLayer_shuoDong.addFeatures([polygonfeature_shouDong]); //将区要素添加到图层中
    map.addLayers([polygonLayer_shuoDong]); //将矢量层添加到地图容器中
    gkd_ii++;
}


function GuoKongDian_yuCe() {
    if (gkd_i == 0) {
        polygonLayer = new OpenLayers.Layer.Vector("国控点覆盖范围");
    }
    polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
    polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
    polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色
    //调用生成几何图形的快捷函数生成几何区
     BanJing = $("#YCGKD").val();

    var pointgeom = new OpenLayers.Geometry.Point(xxx[0], yyy[0]);
    var pointgeom1 = new OpenLayers.Geometry.Point(xxx[1], yyy[1]);
    var pointgeom2 = new OpenLayers.Geometry.Point(xxx[2], yyy[2]);
    var pointgeom3 = new OpenLayers.Geometry.Point(xxx[3], yyy[3]);
    var pointgeom4 = new OpenLayers.Geometry.Point(xxx[4], yyy[4]);
    var pointgeom5 = new OpenLayers.Geometry.Point(xxx[5], yyy[5]);
    var pointgeom6 = new OpenLayers.Geometry.Point(xxx[6], yyy[6]);
    var pointgeom7 = new OpenLayers.Geometry.Point(xxx[7], yyy[7]);
    var pointgeom8 = new OpenLayers.Geometry.Point(xxx[8], yyy[8]);
    var pointgeom9 = new OpenLayers.Geometry.Point(xxx[9], yyy[9]);

         var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, BanJing, 50, 0);
         var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, BanJing, 50, 0);
         var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, BanJing, 50, 0);
         var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, BanJing, 50, 0);
         var polygongeom4 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom4, BanJing, 50, 0);
         var polygongeom5 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom5, BanJing, 50, 0);
         var polygongeom6 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom6, BanJing, 50, 0);
         var polygongeom7 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom7, BanJing, 50, 0);
         var polygongeom8 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom8, BanJing, 50, 0);
         var polygongeom9 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom9, BanJing, 50, 0);
   // var polygongeom = OpenLayers.Geometry.fromWKT("POLYGON(-1899000.40098 -1348000.06383,1899000.40098 -1348000.06383,1899000.40098 348000.06383,-1899000.40098 1348000.06383,-1899000.40098 -1348000.06383)");
         var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
         var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
         var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
         var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素
         var polygonfeature4 = new OpenLayers.Feature.Vector(polygongeom4);  //生成区要素
         var polygonfeature5 = new OpenLayers.Feature.Vector(polygongeom5);  //生成区要素
         var polygonfeature6 = new OpenLayers.Feature.Vector(polygongeom6);  //生成区要素
         var polygonfeature7 = new OpenLayers.Feature.Vector(polygongeom7);  //生成区要素
         var polygonfeature8 = new OpenLayers.Feature.Vector(polygongeom8);  //生成区要素
         var polygonfeature9 = new OpenLayers.Feature.Vector(polygongeom9);  //生成区要素
         polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3, polygonfeature4, polygonfeature5, polygonfeature6, polygonfeature7, polygonfeature8]); //将区要素添加到图层中
         map.addLayers([polygonLayer]); //将矢量层添加到地图容器中
         gkd_i++;     


//     pointLayer = new OpenLayers.Layer.Vector("pointMarker");
//     pointLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制点要素的画笔的颜色
//     pointLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 300;  //设置画笔宽度
//     pointLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色
//     pointLayer.styleMap.styles["default"].defaultStyle.pointRadius = $("#YCGKD").val();

//     var pointgeom  = new OpenLayers.Geometry.Point(8331047.6989, 3238213.25146);
//     var pointgeom1 = new OpenLayers.Geometry.Point(8328659.04177, 3237558.75941);
//     var pointgeom2 = new OpenLayers.Geometry.Point(8328152.64646, 3231200.15412);
//     var pointgeom3 = new OpenLayers.Geometry.Point(8333875.86895, 3234224.19405);
//     var pointgeom4 = new OpenLayers.Geometry.Point(8331171.90907, 3233851.56354);
//     var pointgeom5 = new OpenLayers.Geometry.Point(8339679.4757, 3226448.91693);
//     var pointgeom6 = new OpenLayers.Geometry.Point(8351702.02459, 3204569.96091);
//     var pointgeom7 = new OpenLayers.Geometry.Point(8337321.61981, 3233579.75989);
//     var pointgeom8 = new OpenLayers.Geometry.Point(8326238.2137, 3229127.34926);
//     var pointgeom9 = new OpenLayers.Geometry.Point(8323992.87599, 3232083.83994);

//     var pointfeature = new OpenLayers.Feature.Vector(pointgeom);  //生成点要素
//     var pointfeature1 = new OpenLayers.Feature.Vector(pointgeom1);  //生成点要素
//     var pointfeature2 = new OpenLayers.Feature.Vector(pointgeom2);  //生成点要素
//     var pointfeature3 = new OpenLayers.Feature.Vector(pointgeom3);  //生成点要素
//     var pointfeature4 = new OpenLayers.Feature.Vector(pointgeom4);  //生成点要素
//     var pointfeature5 = new OpenLayers.Feature.Vector(pointgeom5);  //生成点要素
//     var pointfeature6 = new OpenLayers.Feature.Vector(pointgeom6);  //生成点要素
//     var pointfeature7 = new OpenLayers.Feature.Vector(pointgeom7);  //生成点要素
//     var pointfeature8 = new OpenLayers.Feature.Vector(pointgeom8);  //生成点要素
//     var pointfeature9 = new OpenLayers.Feature.Vector(pointgeom9);  //生成点要素

//     pointLayer.addFeatures([pointfeature, pointfeature1, pointfeature2, pointfeature3, pointfeature4, pointfeature5, pointfeature6, pointfeature7, pointfeature8, pointfeature9]);  //将点要素添加到图层中
//     map.addLayer(pointLayer); //将矢量层添加到地图容器中          

        }
        