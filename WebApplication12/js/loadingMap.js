var map, layers;
//地图初始化函数
var lonlat, select;
var TPBZPopupArr = []; //标注弹框数组
//图片标注的坐标数组
var TPBZMarkArr = [ new OpenLayers.LonLat(xxx[0], yyy[0]),
                    new OpenLayers.LonLat(xxx[1], yyy[1]),
                    new OpenLayers.LonLat(xxx[2], yyy[2]),
                    new OpenLayers.LonLat(xxx[3], yyy[3]),
                    new OpenLayers.LonLat(xxx[4], yyy[4]),
                    new OpenLayers.LonLat(xxx[5], yyy[5]),
                    new OpenLayers.LonLat(xxx[6], yyy[6]),
                    new OpenLayers.LonLat(xxx[7], yyy[7]),
                    new OpenLayers.LonLat(xxx[8], yyy[8]),
                    new OpenLayers.LonLat(xxx[9], yyy[9]),
                  ];

function init() {
    //初始化地图容器
    map = new OpenLayers.Map({
  
        div: "mapCon",
        layers: [

         new Zondy.Map.GaodeLayer("高德矢量数据", {
             isBaseLayer: true
         })

                ],
        controls: [
       
        //图层切换控件
                    new OpenLayers.Control.LayerSwitcher(),
        //地图浏览导航控件
                    new OpenLayers.Control.Navigation(),
        //鼠标位置控件
                    new OpenLayers.Control.MousePosition(),
        //鹰眼控件
                    new OpenLayers.Control.OverviewMap(),              

                ]
    });

    heatMapLayer = new Zondy.Map.HeatMapLayer("heatMap", {
        VFGradius: 2000,      //点半径
        featureWeight: "AQI",   //用于生成热力图的权值设置
        featureRadius: "geoRadius"    //用于生成热力图的要素半径设置
    });

    heatMapLayer_piao = new Zondy.Map.HeatMapLayer("heatMap_piao", {
        VFGradius: 2000,      //点半径
        featureWeight: "AQI",   //用于生成热力图的权值设置
        featureRadius: "geoRadius"    //用于生成热力图的要素半径设置
    });
      
    //设置地图的显示中心及显示级数
    map.setCenter(new OpenLayers.LonLat(13952055.49402, 5448014.63491), 10);
    map.events.on({ 'mousemove': dispPos });
}

