
var pm25_nd;
var pm10_nd;
var so2_nd;
var co_nd;
var o3_nd;
var no2_nd;

var AQI_cs;
var shoYao_cs;
var chaoBiao_cs;

var JiShuanWuRan_return;
var jswr_return;

var AQI_max;
var AQI_shouyao;
var AQI_chaobiao;
var AIR_quality;

var WeiZhi;
//var riqi_shouDong;

var imgObjPreview = null;
var ShouDong_biaoTi = null;

var flag_save = 0;

function JiShuanWuRan_save() {
    flag_save = 1;
    JiShuanWuRan();
    alert("录入成功");
}

//下面用于图片上传预览功能
function setImagePreview(avalue) {
    var docObj = document.getElementById("doc");
    imgObjPreview = document.getElementById("preview");
    imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    ShouDong_biaoTi = docObj.value;
}
function clearZhaopian() {
    imgObjPreview.src = "D:\Documents\Pictures\Screenshots"; //指向空白照片
    document.getElementById("doc").value = null;
    // alert("1");
}
function JiShuanWuRan() {
    pm25_nd = $("#PM25_nongdu").val();
     //alert(pm25_nd);
    pm10_nd = $("#PM10_nongdu").val();
    //alert(pm10_nd);
    so2_nd = $("#SO2_nongdu").val();
    co_nd = $("#CO_nongdu").val();
    o3_nd = $("#O3_nongdu").val();
    no2_nd = $("#NO2_nongdu").val();
    WeiZhi = $("#JieDaoXingXi").val();
    //alert(ZhuoBiao_ShouDong_x);
//    riqi_shouDong = $("#date_shouDong").val();
//    alert(riqi_shouDong);

    $.ajax({
        url: "ashx/JiSuanWuRanWu.ashx",
        type: "POST",
        dataType: "text",
        async: false,
        data: { pm25: pm25_nd, pm10: pm10_nd, so2: so2_nd, co: co_nd, o3: o3_nd, no2: no2_nd, X_zhuoBiao: ZhuoBiao_ShouDong_x, Y_zhuoBiao: ZhuoBiao_ShouDong_y, Jeidao: WeiZhi, imgsrc: imgObjPreview.src, name: ShouDong_biaoTi ,flag:1},
        success: GetResults_WuRan
    });
    function GetResults_WuRan(data) {
        JiShuanWuRan_return =data;
    }

    jswr_return = JiShuanWuRan_return.split(",");
    AQI_max = jswr_return[0];
    AQI_shouyao = jswr_return[1];
    AQI_chaobiao = jswr_return[2];
    AIR_quality = jswr_return[3];

    document.getElementById("AQI_canShu").value = AQI_max;
    document.getElementById("shoyaowushan_canShu").value = AQI_shouyao;
    document.getElementById("chaobiao_canShu").value = AQI_chaobiao;
    document.getElementById("air_quality").value = AIR_quality;
    flag_save = 0;
}