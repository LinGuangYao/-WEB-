/*==================地图标注==================*/

var markerLayer, marker;

var date_popu;
var jswrw_return_0, jswrw_return_1, jswrw_return_2, jswrw_return_3, jswrw_return_4, jswrw_return_5, jswrw_return_6, jswrw_return_7, jswrw_return_8, jswrw_return_9;
//添加标注图片
function addImage() {
    var imgURL = 'libs/img/marker.png';
    if (markerLayer == null) {
        markerLayer = new OpenLayers.Layer.Markers("国控点位置");
        map.addLayer(markerLayer);
    }
    if (TPBZMarkArr) {

        for (var i = 0; i < TPBZMarkArr.length; i++) {
            
            if (i == 0) {
                var html0 = "<div style='text-align:center;' >今日空气质量概况</div>";                
                html0 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_0'/></div>";
                html0 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_0'/></div>";
                html0 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_0'/></div>";
                html0 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_0'/></div>";
                var d = new Date();
                date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
                var jswrw;              
                $.ajax({
                    url: "ashx/Popu_wrw.ashx",
                    type: "POST",
                    dataType: "text",
                    async: false,
                    data: { DAY: date_popu, zhangdian: 0 },
                    success: GetResults
                });
                function GetResults(data) {
                    jswrw = data;                  
                }
                 jswrw_return_0 = jswrw.split(",");
           }
           if (i == 1) {
               var html1 = "<div style='text-align:center;' >今日空气质量概况</div>";
               html1 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_1'/></div>";
               html1 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_1'/></div>";
               html1 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_1'/></div>";
               html1 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_1'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;         
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 1 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_1 = jswrw.split(",");
           }
           if (i == 2) {
               var html2 = "<div style='text-align:center;' >今日空气质量概况</div>";
               html2 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_2'/></div>";
               html2 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_2'/></div>";
               html2 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_2'/></div>";
               html2 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_2'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 2 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_2 = jswrw.split(",");
           }
           if (i == 3) {
               var html3 = "<div style='text-align:center;'>今日空气质量概况</div>";
               html3 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_3'/></div>";
               html3 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_3'/></div>";
               html3 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_3'/></div>";
               html3 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_3'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 3 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_3 = jswrw.split(",");
           }
           if (i == 4) {
               var html4 = "<div style='text-align:center;'>今日空气质量概况</div>";
               html4 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_4'/></div>";
               html4 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_4'/></div>";
               html4 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_4'/></div>";
               html4 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_4'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 4 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_4 = jswrw.split(",");
           }
           if (i == 5) {
               var html5 = "<div style='text-align:center;'>今日空气质量概况</div>";
               html5 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_5'/></div>";
               html5 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_5'/></div>";
               html5 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_5'/></div>";
               html5 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_5'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 5 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_5 = jswrw.split(",");
           }
           if (i == 6) {
               var html6 = "<div style='text-align:center;'>今日空气质量概况</div>";
               html6 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_6'/></div>";
               html6 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_6'/></div>";
               html6 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_6'/></div>";
               html6 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_6'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 6 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_6 = jswrw.split(",");
           }
           if (i == 7) {
               var html7 = "<div style='text-align:center;' >今日空气质量概况</div>";
               html7 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_7'/></div>";
               html7 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_7'/></div>";
               html7 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_7'/></div>";
               html7 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_7'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 7 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
              jswrw_return_7 = jswrw.split(",");
           }
           if (i == 8) {
               var html8 = "<div style='text-align:center;'>今日空气质量概况</div>";
               html8 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_8'/></div>";
               html8 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_8'/></div>";
               html8 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_8'/></div>";
               html8 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_8'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 8 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_8 = jswrw.split(",");
           }
           if (i == 9) {
               var html9 = "<div style='text-align:center;' >今日空气质量概况</div>";
               html9 += "<div class='form-group'><label>AQI:</label><input type='text' class='form-control' id='AQI_zhangdian_9'/></div>";
               html9 += "<div class='form-group'><label>首要污染物:</label><input type='text' class='form-control' id='shoyaowushan_zhangdian_9'/></div>";
               html9 += "<div class='form-group'><label>超标污染物:</label><input type='text' class='form-control' id='chaobiao_zhangdian_9'/></div>";
               html9 += "<div class='form-group'><label>空气质量:</label><input type='text' class='form-control' id='air_quality_zhangdian_9'/></div>";
               var d = new Date();
               date_popu = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
               var jswrw;
               $.ajax({
                   url: "ashx/Popu_wrw.ashx",
                   type: "POST",
                   dataType: "text",
                   async: false,
                   data: { DAY: date_popu, zhangdian: 9 },
                   success: GetResults
               });
               function GetResults(data) {
                   jswrw = data;
               }
                jswrw_return_9 = jswrw.split(",");
           }      
            var lonlat = TPBZMarkArr[i];
            marker = new OpenLayers.Marker(lonlat, new OpenLayers.Icon(imgURL, new OpenLayers.Size(24, 30), new OpenLayers.Pixel(-(25 / 2), -25)));
            markerLayer.addMarker(marker);
            if (i == 0) {
                var popup = TPBZCreatePopup(lonlat, html0, null);
                document.getElementById("AQI_zhangdian_0").value = jswrw_return_0[0];
                document.getElementById("AQI_zhangdian_00").value = jswrw_return_0[0];
                document.getElementById("shoyaowushan_zhangdian_0").value = jswrw_return_0[1];
                document.getElementById("shoyaowushan_zhangdian_00").value = jswrw_return_0[1];
                document.getElementById("chaobiao_zhangdian_0").value = jswrw_return_0[2];
                document.getElementById("chaobiao_zhangdian_00").value = jswrw_return_0[2];
                document.getElementById("air_quality_zhangdian_0").value = jswrw_return_0[3];
                document.getElementById("air_quality_zhangdian_00").value = jswrw_return_0[3];
            }          
            if (i == 1) {
                var popup = TPBZCreatePopup(lonlat, html1, null);
                document.getElementById("AQI_zhangdian_1").value = jswrw_return_1[0];
                document.getElementById("AQI_zhangdian_11").value = jswrw_return_1[0];
                document.getElementById("shoyaowushan_zhangdian_1").value = jswrw_return_1[1];
                document.getElementById("shoyaowushan_zhangdian_11").value = jswrw_return_1[1];
                document.getElementById("chaobiao_zhangdian_1").value = jswrw_return_1[2];
                document.getElementById("chaobiao_zhangdian_11").value = jswrw_return_1[2];
                document.getElementById("air_quality_zhangdian_1").value = jswrw_return_1[3];
                document.getElementById("air_quality_zhangdian_11").value = jswrw_return_1[3];
            }
            if (i == 2) {
                var popup = TPBZCreatePopup(lonlat, html2, null);
                document.getElementById("AQI_zhangdian_2").value = jswrw_return_2[0];
                document.getElementById("shoyaowushan_zhangdian_2").value = jswrw_return_2[1];
                document.getElementById("chaobiao_zhangdian_2").value = jswrw_return_2[2];
                document.getElementById("air_quality_zhangdian_2").value = jswrw_return_2[3];
                document.getElementById("AQI_zhangdian_22").value = jswrw_return_2[0];
                document.getElementById("shoyaowushan_zhangdian_22").value = jswrw_return_2[1];
                document.getElementById("chaobiao_zhangdian_22").value = jswrw_return_2[2];
                document.getElementById("air_quality_zhangdian_22").value = jswrw_return_2[3];
            }
            if (i == 3) {
                var popup = TPBZCreatePopup(lonlat, html3, null);
                document.getElementById("AQI_zhangdian_3").value = jswrw_return_3[0];
                document.getElementById("shoyaowushan_zhangdian_3").value = jswrw_return_3[1];
                document.getElementById("chaobiao_zhangdian_3").value = jswrw_return_3[2];
                document.getElementById("air_quality_zhangdian_3").value = jswrw_return_3[3];
                document.getElementById("AQI_zhangdian_33").value = jswrw_return_3[0];
                document.getElementById("shoyaowushan_zhangdian_33").value = jswrw_return_3[1];
                document.getElementById("chaobiao_zhangdian_33").value = jswrw_return_3[2];
                document.getElementById("air_quality_zhangdian_33").value = jswrw_return_3[3];
            }
            if (i == 4) {
                var popup = TPBZCreatePopup(lonlat, html4, null);
                document.getElementById("AQI_zhangdian_4").value = jswrw_return_4[0];
                document.getElementById("shoyaowushan_zhangdian_4").value = jswrw_return_4[1];
                document.getElementById("chaobiao_zhangdian_4").value = jswrw_return_4[2];
                document.getElementById("air_quality_zhangdian_4").value = jswrw_return_4[3];
                document.getElementById("AQI_zhangdian_44").value = jswrw_return_4[0];
                document.getElementById("shoyaowushan_zhangdian_44").value = jswrw_return_4[1];
                document.getElementById("chaobiao_zhangdian_44").value = jswrw_return_4[2];
                document.getElementById("air_quality_zhangdian_44").value = jswrw_return_4[3];
            }
            if (i == 5) {
                var popup = TPBZCreatePopup(lonlat, html5, null);
                document.getElementById("AQI_zhangdian_5").value = jswrw_return_5[0];
                document.getElementById("shoyaowushan_zhangdian_5").value = jswrw_return_5[1];
                document.getElementById("chaobiao_zhangdian_5").value = jswrw_return_5[2];
                document.getElementById("air_quality_zhangdian_5").value = jswrw_return_5[3];
                document.getElementById("AQI_zhangdian_55").value = jswrw_return_5[0];
                document.getElementById("shoyaowushan_zhangdian_55").value = jswrw_return_5[1];
                document.getElementById("chaobiao_zhangdian_55").value = jswrw_return_5[2];
                document.getElementById("air_quality_zhangdian_55").value = jswrw_return_5[3];
            }
            if (i == 6) {
                var popup = TPBZCreatePopup(lonlat, html6, null);
                document.getElementById("AQI_zhangdian_6").value = jswrw_return_6[0];
                document.getElementById("shoyaowushan_zhangdian_6").value = jswrw_return_6[1];
                document.getElementById("chaobiao_zhangdian_6").value = jswrw_return_6[2];
                document.getElementById("air_quality_zhangdian_6").value = jswrw_return_6[3];
                document.getElementById("AQI_zhangdian_66").value = jswrw_return_6[0];
                document.getElementById("shoyaowushan_zhangdian_66").value = jswrw_return_6[1];
                document.getElementById("chaobiao_zhangdian_66").value = jswrw_return_6[2];
                document.getElementById("air_quality_zhangdian_66").value = jswrw_return_6[3];
            }
            if (i == 7) {
                var popup = TPBZCreatePopup(lonlat, html7, null);
                document.getElementById("AQI_zhangdian_7").value = jswrw_return_7[0];
                document.getElementById("shoyaowushan_zhangdian_7").value = jswrw_return_7[1];
                document.getElementById("chaobiao_zhangdian_7").value = jswrw_return_7[2];
                document.getElementById("air_quality_zhangdian_7").value = jswrw_return_7[3];
                document.getElementById("AQI_zhangdian_77").value = jswrw_return_7[0];
                document.getElementById("shoyaowushan_zhangdian_77").value = jswrw_return_7[1];
                document.getElementById("chaobiao_zhangdian_77").value = jswrw_return_7[2];
                document.getElementById("air_quality_zhangdian_77").value = jswrw_return_7[3];
            }
            if (i == 8) {
                var popup = TPBZCreatePopup(lonlat, html8, null);
                document.getElementById("AQI_zhangdian_8").value = jswrw_return_8[0];
                document.getElementById("shoyaowushan_zhangdian_8").value = jswrw_return_8[1];
                document.getElementById("chaobiao_zhangdian_8").value = jswrw_return_8[2];
                document.getElementById("air_quality_zhangdian_8").value = jswrw_return_8[3];
                document.getElementById("AQI_zhangdian_88").value = jswrw_return_8[0];
                document.getElementById("shoyaowushan_zhangdian_88").value = jswrw_return_8[1];
                document.getElementById("chaobiao_zhangdian_88").value = jswrw_return_8[2];
                document.getElementById("air_quality_zhangdian_88").value = jswrw_return_8[3];
            }
            if (i == 9) {
                var popup = TPBZCreatePopup(lonlat, html9, null);
                document.getElementById("AQI_zhangdian_9").value = jswrw_return_9[0];
                document.getElementById("shoyaowushan_zhangdian_9").value = jswrw_return_9[1];
                document.getElementById("chaobiao_zhangdian_9").value = jswrw_return_9[2];
                document.getElementById("air_quality_zhangdian_9").value = jswrw_return_9[3];
                document.getElementById("AQI_zhangdian_99").value = jswrw_return_9[0];
                document.getElementById("shoyaowushan_zhangdian_99").value = jswrw_return_9[1];
                document.getElementById("chaobiao_zhangdian_99").value = jswrw_return_9[2];
                document.getElementById("air_quality_zhangdian_99").value = jswrw_return_9[3];
            }
            TPBZPopupArr.push(popup);
            marker.index = i;
            popup.index = i;
            marker.events.register('mousedown', marker, function (evt) {
                var tmark = evt.object;
                TPBZPopupArr[tmark.index].toggle();
            });
        }
    }
}

//创建popup层
function TPBZCreatePopup(logxy, context, callback) {
    var popup = new OpenLayers.Popup.FramedCloud(null, logxy, new OpenLayers.Size(220, 110), context, null, true, null); // (null, logxy, new OpenLayers.Size(220, 110), null, context, true, moPopupCloseCallBack);
    map.addPopup(popup);
    popup.hide();
    return popup;
}
//清除结果
function clearImgMarker() {
    var layer = map.getLayersByName("国控点位置");
    if (layer[0]) {
        clearImgMarbox();
        map.removeLayer(markerLayer);
        markerLayer = null;
    }
    TPBZPopupArr = [];
}
//删除气泡弹出框
function clearImgMarbox() {
    if (TPBZPopupArr) {
        if (TPBZPopupArr.length > 0) {
            for (var i = 0; i < TPBZPopupArr.length; i++) {
                map.removePopup(TPBZPopupArr[i]);
            }
        }
        TPBZPopupArr = null;
    }
}


//点击定位到该点
function shipinchang_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[0], yyy[0]), 12);   
        TPBZPopupArr[0].toggle();    
}
function kechechang_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[1], yyy[1]), 12);
    TPBZPopupArr[1].toggle(); 
}
function youdianxueyuan_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[2], yyy[2]), 12);
    TPBZPopupArr[2].toggle(); 
}
function laodonggongyuan_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[3], yyy[3]), 12);
    TPBZPopupArr[3].toggle(); 
}
function yunlinchu_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[4], yyy[4]), 12);
    TPBZPopupArr[4].toggle(); 
}
function jingyuetan_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[5], yyy[5]), 12);
    TPBZPopupArr[5].toggle(); 
}
function shuaiwanzi_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[6], yyy[6]), 12);
    TPBZPopupArr[6].toggle(); 
}
function jingkaiquhuanweichu_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[7], yyy[7]), 12);
    TPBZPopupArr[7].toggle(); 
}
function gaoxinquguanweihui_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[8], yyy[8]), 12);
    TPBZPopupArr[8].toggle(); 
}
function daishangongyuan_dingwei() {
    map.setCenter(new OpenLayers.LonLat(xxx[9], yyy[9]), 12);
    TPBZPopupArr[9].toggle(); 
}