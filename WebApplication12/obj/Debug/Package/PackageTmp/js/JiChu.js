



function papa() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
}







//地图缩小一级
function JiChu_shuoxiao() {
    map.zoomOut();
}
//地图放大一级
function JiChu_fangda() {
    map.zoomIn();
}
//地图复位，即缩放到最大范围
function reset() {
    map.zoomToMaxExtent();
}
//拉框放大
function JiChu_lada() {
    //创建一个拉框缩放的控件（默认是拉框放大）
    var zoomBox = new OpenLayers.Control.ZoomBox();
    //添加控件到地图容器中
    map.addControl(zoomBox);
    //激活控件
    zoomBox.activate();
}
//拉框缩小
function JiChu_laxiao() {
    //创建一个拉框缩放的控件（out:参数表示是否缩小）
    var zoomBox = new OpenLayers.Control.ZoomBox({ out: true });
    //添加控件到地图容器中
    map.addControl(zoomBox);
    //激活控件
    zoomBox.activate();
}
//鼠标拖拽
function JiChu_move() {
    //创建一个鼠标拖拽控件
    var dragPan = new OpenLayers.Control.DragPan();
    //添加控件到地图容器中
    map.addControl(dragPan);
    //激活控件
    dragPan.activate();
}




var bLC = new OpenLayers.Control.ScaleLine({
                         topOutUnits:"毫米",
                         topInUnits: "毫米",
        bottomOutUnits:"英寸",
        bottomInUnits:"英寸"
        //如果底部单位为空 则不显示比例尺下部分
});
var bLC_flag = null;

OpenLayers.INCHES_PER_UNIT["毫米"] = OpenLayers.INCHES_PER_UNIT["km"];
OpenLayers.INCHES_PER_UNIT["毫米"] = OpenLayers.INCHES_PER_UNIT["m"];
OpenLayers.INCHES_PER_UNIT["英寸"] = OpenLayers.INCHES_PER_UNIT["mi"];
OpenLayers.INCHES_PER_UNIT["英寸"] = OpenLayers.INCHES_PER_UNIT["ft"];

//比例尺
function JiChu_bilichu() {

    if (bLC_flag == null) {
        bLC_flag = 0;
    }

    if (bLC_flag == 0) {
        map.addControl(bLC);
        bLC_flag = 1;
    }
    else {
        map.removeControl(bLC);
        bLC_flag =0 ;
    }

}

//地图复位
function JiChu_reset() {
    map.setCenter(new OpenLayers.LonLat(13952055.49402, 5448014.63491), 10);
}

function getCurResolution() {
    //获取最大分辨率
    this.curResolution = map.getResolution();
    //弹框显示 
    alert("当前分辨率:" + this.curResolution);
}

function getCurBound() {
    //获取地图范围
    this.curMapBound = map.getExtent();
    //弹框显示
    alert("当前范围为：" + this.curMapBound.toString());
}
function getMapDivInfo() {
    //获取当前地图容器div的大小
    this.viewSize = map.getSize();
    //弹框显示
    alert("当前div高：" + viewSize.h + " 宽：" + this.viewSize.w);
}

function dispPos(e) {
    document.getElementById("TXT_ViewPort").value = e.xy.x + "," + e.xy.y;
    //将视窗坐标转换为逻辑坐标
    var lonlat = map.getLonLatFromViewPortPx(e.xy);
    //如果小数位数太长，可调用lonlat.lon.toFixed(5);
    document.getElementById("TXT_Logic").value = lonlat.toShortString();
}