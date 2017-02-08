
var markerLayerAndroid, markerAndroid;
var data_wizi = null;
var data_xixi = null;
var x_A = new Array();
var y_A = new Array();
var l_jialu = 0;


function Android_QingChu() {

    map.removeLayer(markerLayerAndroid);
}


function Android_XIAN() {


    var TPBZandriod = [];
    var TPBZMarkAndroid = [];

    for (var i = 0; i < l_jialu; i++) {
        TPBZMarkAndroid[i] = new OpenLayers.LonLat(x_A[i], y_A[i]);
    }

    var imgURL = 'libs/img/marker-blue.png';
    if (markerLayerAndroid == null) {
        markerLayerAndroid = new OpenLayers.Layer.Markers("移动端反馈");
        map.addLayer(markerLayerAndroid);
    }
    if (TPBZMarkAndroid) {
        //遍历标注位置坐标数组
        for (var i = 0; i < l_jialu; i++) {

            var html = '<div style="width:220px;height:130px;"><img style="width:100%;height:100%" src="ashx/andriod_readPic.ashx" /></div>';
      

            //获取第一个标注的位置坐标
            var lonlat = TPBZMarkAndroid[i];
            //创建一个地图标注
            markerAndroid = new OpenLayers.Marker(lonlat, new OpenLayers.Icon(imgURL, new OpenLayers.Size(24, 30), new OpenLayers.Pixel(-(25 / 2), -25)));
            //添加标注到标注图层
            markerLayerAndroid.addMarker(markerAndroid);
            //通过调用函数获取popup
            var popup = TPBZCreatePopup(lonlat, html, null);
            //将popup添加到数组中
            TPBZandriod.push(popup);
            //设置标注的序列号.注意：这里的index不是marker的固有属性，只是一个临时属性。
            markerAndroid.index = i;
            //给标注注册一个鼠标点击事件
            markerAndroid.events.register('mousedown', markerAndroid, function (evt) {
                var tmark = evt.object;
                TPBZandriod[tmark.index].toggle();
            });
        }
    }

    //选中图片时显示出该图片
    function changeTPBZImg(val) {
        var imgURL = '../../libs/img/' + val;
        document.getElementById("imgMarkTPBZSrc").src = imgURL;
    }

    //创建popup层
    function TPBZCreatePopup(logxy, context, callback) {
        //创建一个popup
        var popup = new OpenLayers.Popup.FramedCloud(null, logxy, new OpenLayers.Size(220, 110), context, null, true, null);
        //添加popup到地图容器中
        map.addPopup(popup);
        //隐藏popup
        popup.hide();
        //返回创建好的popup
        return popup;
    }
    //        //清除结果
    function clearImgMarker() {
        //根据图层的名称获取图层
        var layer = map.getLayersByName("Marker Layer");
        if (layer[0]) {
            //调用函数移除popup
            clearImgMarbox();
            //移除标注图层
            map.removeLayer(markerLayerAndroid);
            //清空标注图层
            markerLayerAndroid = null;
        }
        // TPBZandriod = [];
    }

}

function Android_CAXUN() {

    $.ajax({
        url: "ashx/Android.ashx",
        type: "POST",
        dataType: "json",
        async: false,
        data: { DAY: android_time, flag: 1 },
        success: GetResults
    });

    function GetResults(json) {
        var jsonPage = eval(json);
        data_wizi = json.ANDROIDWZ;
    }

    var shtml, icolmax;

    var cols = new Array();
    for (var key in data_wizi[0]) {
        cols[cols.length] = key;
    }

    icolmax = cols.length;

    shtml = "<table class='table table-hover'><tr>";
    for (var i = 0; i < icolmax; i++) {
        shtml += "<th>" + cols[i] + "</th>";
    }
    shtml += "</tr>";

    var irowmax = data_wizi.length;

    for (var irow = 0; irow < irowmax; irow++) {
        shtml += "<tr>";
        for (var i = 0; i < icolmax; i++) {
                shtml += "<td id=' " + irow + i + " '>" + data_wizi[irow][cols[i]] + "</td>";
        }
        shtml += "</tr>";
    }
    document.getElementById('android_div').innerHTML = shtml;

    //alert(irowmax);
    for (var ii = 0; ii < irowmax; ii++) {
        x_A[ii] = data_wizi[ii].X;
        y_A[ii] = data_wizi[ii].Y;
    }
    l_jialu = irowmax;
}
