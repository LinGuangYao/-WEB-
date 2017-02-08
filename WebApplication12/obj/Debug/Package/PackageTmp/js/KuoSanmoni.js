var markerLayer_KM, marker_KM;
 var  ZhuoBiao_Km_x;
 var ZhuoBiao_Km_y;
function KuoSanMoMi_clear() {
    map.events.unregister("click", map, KuoSanMoMi_xuandian);
    map.removeLayer(markerLayer_KM);
    map.removeLayer(polygonLayer);
    polygonLayer = null;
}


function ksmixu() {
    map.events.register("click", map, KuoSanMoMi_xuandian);
}

function KuoSanMoMi_xuandian(e) {

    var lonlat = map.getLonLatFromPixel(e.xy);
     ZhuoBiao_Km_x = lonlat.lon;
     ZhuoBiao_Km_y = lonlat.lat;

    //添加站点图标
    var imgURL = 'libs/img/marker-gold.png';
    if (markerLayer_KM == null) {
        markerLayer_KM = new OpenLayers.Layer.Markers("添加模拟站点");
        map.addLayer(markerLayer_KM);
    }
    marker_KM = new OpenLayers.Marker(lonlat, new OpenLayers.Icon(imgURL, new OpenLayers.Size(24, 30), new OpenLayers.Pixel(-(25 / 2), -25)));
    markerLayer_KM.addMarker(marker_KM);

}

function KuoSanMoMi() {

    var fangxiang = $("#XiaJiFengFangXiang").val();   
    if (fangxiang == "东南风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 200 * i, ZhuoBiao_Km_y + 200 * i);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }
    if (fangxiang == "西北风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y - 200 * i);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }

    if (fangxiang == "西南风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }


    if (fangxiang == "东北风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 200 * i, ZhuoBiao_Km_y - 200 * i);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }

    if (fangxiang == "北风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y - 200 * i);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }
    if (fangxiang == "南风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y6 + 200 * i);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }

    if (fangxiang == "西风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x -200*i, ZhuoBiao_Km_y);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }
    if (fangxiang == "东风") {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                polygonLayer = new OpenLayers.Layer.Vector("扩散模拟");
            }
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeColor = "orange";  //设置默认样式策略中绘制要素的画笔颜色
            polygonLayer.styleMap.styles["default"].defaultStyle.strokeWidth = 1;  //设置画笔宽度
            polygonLayer.styleMap.styles["default"].defaultStyle.fillColor = "red";  //设置点要素的填充色

            if (i == 2) {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 200 * i, ZhuoBiao_Km_y + 200 * i);
                var pointgeom1 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x + 100 * i, ZhuoBiao_Km_y);
                var pointgeom2 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x, ZhuoBiao_Km_y + 100 * i);
                var pointgeom3 = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 150 * i, ZhuoBiao_Km_y);

                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);
                var polygongeom1 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom1, 400, 50, 0);
                var polygongeom2 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom2, 400, 50, 0);
                var polygongeom3 = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom3, 400, 50, 0);


                var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);  //生成区要素
                var polygonfeature1 = new OpenLayers.Feature.Vector(polygongeom1);  //生成区要素
                var polygonfeature2 = new OpenLayers.Feature.Vector(polygongeom2);  //生成区要素
                var polygonfeature3 = new OpenLayers.Feature.Vector(polygongeom3);  //生成区要素

                polygonLayer.addFeatures([polygonfeature, polygonfeature1, polygonfeature2, polygonfeature3]);
            }
            else {
                var pointgeom = new OpenLayers.Geometry.Point(ZhuoBiao_Km_x - 200 * i, ZhuoBiao_Km_y);
                var polygongeom = OpenLayers.Geometry.Polygon.createRegularPolygon(pointgeom, 400, 50, 0);

            }
            var polygonfeature = new OpenLayers.Feature.Vector(polygongeom);
            polygonLayer.addFeatures([polygonfeature]);
            map.addLayers([polygonLayer]);
            sleep(1000); //当前方法暂停5秒
        }
    }
}

function sleep(d) {
    for (var t = Date.now(); Date.now() - t <= d; );
    alert("扩散模拟中"); //必需有弹出框才行

}

//sleep(5000); //当前方法暂停5秒