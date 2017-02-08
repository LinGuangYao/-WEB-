
var vectLayer = null;      //矢量图形绘制图层
var drawControls = null;  //矢量图形绘制控件数组
var x_zhouBiao_dian;
var y_zhouBiao_dian;
var x_zhuoBiao_duoBian = new Array();
var y_zhuoBiao_duoBian = new Array();
var YuanXin;
var BanJing;
var flag_WuMai_YuCe = 0;

function initDrawLayer() {
    //初始化加载绘图矢量图层
    vectLayer = new OpenLayers.Layer.Vector("绘制图形");
    map.addLayer(vectLayer);
    //初始化加载交互绘制图形控件
    drawControls = {
        point: new OpenLayers.Control.DrawFeature(vectLayer,
                                OpenLayers.Handler.Point, { featureAdded: AppendFeature }),
        line: new OpenLayers.Control.DrawFeature(vectLayer,
                                OpenLayers.Handler.Path, { featureAdded: AppendFeature }),
        polygon: new OpenLayers.Control.DrawFeature(vectLayer,
                                OpenLayers.Handler.Polygon, { featureAdded: AppendFeature }),
        RegularPolygon: new OpenLayers.Control.DrawFeature(vectLayer, OpenLayers.Handler.RegularPolygon, { featureAdded: AppendFeature })
    };
    for (var key in drawControls) {
        map.addControl(drawControls[key]);
    }
}
//添加绘制图形
function AppendFeature(element) {
    if (element != null) {
        var typeIndex = document.getElementById("VectorType").selectedIndex;
        switch (typeIndex) {
            case 0: //点
                //var geomObj = new Zondy.Object.Point2D();
                //geomObj.setByOL(element.geometry);
                var geomObj = element.geometry;
                x_zhouBiao_dian = geomObj.x;
                y_zhouBiao_dian = geomObj.y;
                flag_WuMai_YuCe = 1;
                $("#getposInfoText").text("坐标信息：" + "\n" + "X:" + geomObj.x + " Y:" + geomObj.y);
                break;
            case 1: //多边形
            case 2: //矩形 

                var geomObj = element.geometry.components[0].components;
                var s = "";
                for (var i = 0; i < geomObj.length; i++) {
                    s = s + geomObj[i].x + "," + geomObj[i].y + ";"
                    x_zhuoBiao_duoBian[i] = geomObj[i].x;
                    y_zhuoBiao_duoBian[i] = geomObj[i].y;
                }
                s = s.substring(0, s.length - 1);
                flag_WuMai_YuCe = 2;
                $("#getposInfoText").text("坐标信息：" + "\n" + s);
                break;
            case 3: //圆
                var geomObj = new Zondy.Object.Circle();
                geomObj.setByOL(element.geometry);
                var s = "";
                YuanXin = geomObj.point.toString();
                BanJing = geomObj.radious;
                flag_WuMai_YuCe = 3;
            //    alert(YuanXin.x);
                $("#getposInfoText").text("坐标信息：" + "\n" + "圆心：" + geomObj.point.toString() + '\n' + "半径：" + geomObj.radious);
                break;

        }
    }
}

//根据当前选择的绘制选项，切换绘制矢量图形的控件
function toggleControl(element) {
    if (vectLayer == null) {
        initDrawLayer();
    }
    DeactiveDraw();
    for (key in drawControls) {
        var control = drawControls[key];
        if (element.value == key) {
            control.activate();
            var typeIndex = document.getElementById("VectorType").selectedIndex;
            switch (typeIndex) {
                case 2:
                    control.handler.setOptions({ sides: 4 });
                    break;

                case 3:
                    control.handler.setOptions({ sides: 40 });
                    break;
            }
        }
    }
}

//取消矢量图形绘制控件的激活状态
function DeactiveDraw() {
    for (key in drawControls) {
        var control = drawControls[key];
        control.deactivate();
    }
}

//清除绘制的图形
function clearGraphics() {
    if (vectLayer) {
        map.removeLayer(vectLayer);
    }
    vectLayer = null;
    DeactiveDraw(); //取消矢量图形绘制控件的激活状态
}    