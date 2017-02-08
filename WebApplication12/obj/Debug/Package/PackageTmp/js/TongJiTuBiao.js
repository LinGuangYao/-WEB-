
//关闭图表
function TJ_close() {
    $('#TongJi_DanGe').empty();
    $('#TongJi_DueBi').empty();
    $('#TongJi_DigData').empty();
    $('#TongJi_DigData_yuce').empty();
}


function TJ_DigData_yuce_RanYi() {
    if (flag_WuMai_YuCe == 1) {
        TJ_DigData_yuce();
    }
    if (flag_WuMai_YuCe == 2) {
        TJ_DigData_duoBian_yuce();
    }
    if (flag_WuMai_YuCe == 3) {
        TJ_DigData_yuan_yuce();
    }
}

function TJ_DigData_yuan_yuce() {
    var TJ_BIGDATA_return = null;

    var Zhangdian_YuCe_ZiBiao = $("#TJ_BigDataZB_Yuce_select").val();

    var TJT_name = 0;
    var yAxis_name = null;

    var myChart = echarts.init(document.getElementById('TongJi_DigData_yuce'));

    $.ajax({
        url: "ashx/TongJi_BigData_circle.ashx",
        type: "POST",
        dataType: "json",
        traditional: true,
        async: false,
        data: { X: YuanXin, Y: BanJing, zibiao: Zhangdian_YuCe_ZiBiao },
        success: GetResults_TJ
    });
    function GetResults_TJ(json) {
        TJ_BIGDATA_return = json;
    }

    var base = +new Date(2016, 5, 15);  //起始日期本为6.16，但是由于显示，改成5.15
    var oneDay = 24 * 3600 * 1000;
    var date = [];
    var data = [];
    for (var i = 1; i < 365; i++) {//共有364行
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        if (Zhangdian_YuCe_ZiBiao == "AQI") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].AQI);
            TJT_name = 'AQI量面积图';
            yAxis_name = null;
        }
        if (Zhangdian_YuCe_ZiBiao == "PM25") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].PM25);
            TJT_name = 'PM2.5量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "PM10") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].PM10);
            TJT_name = 'PM10量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "NO2") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].NO2);
            TJT_name = 'NO2量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "SO2") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].SO2);
            TJT_name = 'SO2量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "CO") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].CO);
            TJT_name = 'CO量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "O3") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].O3);
            TJT_name = 'O3量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
    }
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: TJT_name
        },
        legend: {
            top: 'bottom',
            data: ['意向']
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            name: yAxis_name,
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 20
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
        {
            name: '浓度',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data
        }
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function TJ_DigData_duoBian_yuce() {
    var TJ_BIGDATA_return = null;

    var Zhangdian_YuCe_ZiBiao = $("#TJ_BigDataZB_Yuce_select").val();

    var TJT_name = 0;
    var yAxis_name = null;

    var myChart = echarts.init(document.getElementById('TongJi_DigData_yuce'));

    $.ajax({
        url: "ashx/TongJi_BigData_douBian.ashx",
        type: "POST",
        dataType: "json",
        traditional: true,
        async: false,
        data: { X: x_zhuoBiao_duoBian, Y: y_zhuoBiao_duoBian, zibiao: Zhangdian_YuCe_ZiBiao },
        success: GetResults_TJ
    });
    function GetResults_TJ(json) {
        TJ_BIGDATA_return = json;
    }

    var base = +new Date(2016, 5, 15);  //起始日期本为6.16，但是由于显示，改成5.15
    var oneDay = 24 * 3600 * 1000;
    var date = [];
    var data = [];
    for (var i = 1; i < 365; i++) {//共有364行
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        if (Zhangdian_YuCe_ZiBiao == "AQI") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].AQI);
            TJT_name = 'AQI量面积图';
            yAxis_name = null;
        }
        if (Zhangdian_YuCe_ZiBiao == "PM25") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].PM25);
            TJT_name = 'PM2.5量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "PM10") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].PM10);
            TJT_name = 'PM10量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "NO2") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].NO2);
            TJT_name = 'NO2量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "SO2") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].SO2);
            TJT_name = 'SO2量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "CO") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].CO);
            TJT_name = 'CO量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "O3") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].O3);
            TJT_name = 'O3量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
    }
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: TJT_name
        },
        legend: {
            top: 'bottom',
            data: ['意向']
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            name: yAxis_name,
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 20
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
        {
            name: '浓度',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data
        }
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function TJ_DigData_yuce() {
    var TJ_BIGDATA_return = null;

    var Zhangdian_YuCe_ZiBiao = $("#TJ_BigDataZB_Yuce_select").val();

   // alert(x_zhouBiao_dian);

    var TJT_name = 0;
    var yAxis_name = null;

    var myChart = echarts.init(document.getElementById('TongJi_DigData_yuce'));

    $.ajax({
        url: "ashx/TongJi_BigData_point.ashx",
        type: "POST",
        dataType: "json",
        async: false,
        data: { X: x_zhouBiao_dian,Y:y_zhouBiao_dian, zibiao: Zhangdian_YuCe_ZiBiao },
        success: GetResults_TJ
    });
    function GetResults_TJ(json) {
        TJ_BIGDATA_return = json;
    }

    var base = +new Date(2016, 5, 15);  //起始日期本为6.16，但是由于显示，改成5.15
    var oneDay = 24 * 3600 * 1000;
    var date = [];
    var data = [];
    for (var i = 1; i < 365; i++) {//共有364行
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        if (Zhangdian_YuCe_ZiBiao == "AQI") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].AQI);
            TJT_name = 'AQI量面积图';
            yAxis_name = null;
        }
        if (Zhangdian_YuCe_ZiBiao == "PM25") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].PM25);
            TJT_name = 'PM2.5量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "PM10") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].PM10);
            TJT_name = 'PM10量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "NO2") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].NO2);
            TJT_name = 'NO2量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "SO2") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].SO2);
            TJT_name = 'SO2量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "CO") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].CO);
            TJT_name = 'CO量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
        if (Zhangdian_YuCe_ZiBiao == "O3") {
            data.push(TJ_BIGDATA_return.BIGDATATJPOINT[i - 1].O3);
            TJT_name = 'O3量面积图';
            yAxis_name = '浓度(ug/m3)';
        }
    }
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: TJT_name
        },
        legend: {
            top: 'bottom',
            data: ['意向']
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            name: yAxis_name,
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 20
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
        {
            name: '浓度',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data
        }
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function TJ_DangGe() {  //单个站点的各参数分布统计图
    var myChart = echarts.init(document.getElementById('TongJi_DanGe'));
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                { value: data_Biao[TongJi_Hong - 1].PM25, name: 'PM2.5' },
                { value: data_Biao[TongJi_Hong - 1].PM10, name: 'PM10' },
                { value: data_Biao[TongJi_Hong - 1].SO2, name: 'SO2' },
                { value: data_Biao[TongJi_Hong - 1].O3, name: 'O3' },
                { value: data_Biao[TongJi_Hong - 1].NO2, name: 'NO2' },
                { value: data_Biao[TongJi_Hong - 1].CO, name: 'CO' }
            ]
        }
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


function TJ_DigData() { 

var TJ_BIGDATA_return=null;

var Zhangdian_name=0;
var Zhangdian=$("#TJ_BigData_select").val();

var Zhangdian_ZiBiao = $("#TJ_BigDataZB_select").val();

var TJT_name = 0;
var yAxis_name = null;

if(Zhangdian == "食品厂"){
Zhangdian_name="shipinchang0";
}
if(Zhangdian == "客车厂"){
Zhangdian_name="kechechang0";
}
if(Zhangdian == "邮电学院"){
Zhangdian_name="youdianxueyuan0";
}
if(Zhangdian == "劳动公园"){
Zhangdian_name="laodonggongyuan0";
}
if(Zhangdian == "园林处"){
Zhangdian_name="yuanlinchu0";
}
if(Zhangdian == "净月潭"){
Zhangdian_name="jingyuetan0";
}
if(Zhangdian == "甩湾子"){
Zhangdian_name="shuaiwanzi0";
}
if(Zhangdian == "经开区环卫处"){
Zhangdian_name="jingkaiquhuanweichu0";
}
if(Zhangdian == "高新区管委会"){
Zhangdian_name="gaoxinquguanweihui0";
}
if(Zhangdian == "岱山公园"){
Zhangdian_name="daishangongyuan0";
}

 var myChart = echarts.init(document.getElementById('TongJi_DigData'));
 
    $.ajax({
        url: "ashx/TongJi_BigData.ashx",
        type: "POST",
        dataType: "json",
        async: false,
        data: { name:Zhangdian_name,zibiao:Zhangdian_ZiBiao},
        success: GetResults_TJ
    });
    function GetResults_TJ(json) {
         TJ_BIGDATA_return =json;
    }

var base = +new Date(2016, 5, 15);  //起始日期本为6.16，但是由于显示，改成5.15
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [];
for (var i = 1; i < 365; i++) {//共有364行
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    if(Zhangdian_ZiBiao == "AQI"){
        data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].AQI);
        TJT_name = 'AQI量面积图';
        yAxis_name = null;
    }
     if(Zhangdian_ZiBiao == "PM25"){
         data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].PM25);
         TJT_name = 'PM2.5量面积图';
         yAxis_name = '浓度(ug/m3)';
    }
     if(Zhangdian_ZiBiao == "PM10"){
           data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].PM10);
           TJT_name = 'PM10量面积图';
           yAxis_name = '浓度(ug/m3)';
    }
     if(Zhangdian_ZiBiao == "NO2"){
         data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].NO2);
         TJT_name = 'NO2量面积图';
         yAxis_name = '浓度(ug/m3)';
    }
        if(Zhangdian_ZiBiao == "SO2"){
            data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].SO2);
            TJT_name = 'SO2量面积图';
            yAxis_name = '浓度(ug/m3)';
    }
     if(Zhangdian_ZiBiao == "CO"){
         data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].CO);
         TJT_name = 'CO量面积图';
         yAxis_name = '浓度(ug/m3)';
    }
     if(Zhangdian_ZiBiao == "O3"){
         data.push(TJ_BIGDATA_return.BIGDATATJ[i - 1].O3);
         TJT_name = 'O3量面积图';
         yAxis_name = '浓度(ug/m3)';
    }
}
option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: TJT_name
    },
    legend: {
        top: 'bottom',
        data:['意向']
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        name: yAxis_name,
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 20
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name:'浓度',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

function TJ_DangGe() {  //单个站点的各参数分布统计图
    var myChart = echarts.init(document.getElementById('TongJi_DanGe'));
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                { value: data_Biao[0].PM25, name: 'PM2.5' },
                { value: data_Biao[0].PM10, name: 'PM10' },
                { value: data_Biao[0].SO2, name: 'SO2' },
                { value: data_Biao[0].O3, name: 'O3' },
                { value: data_Biao[0].NO2, name: 'NO2' },
                { value: data_Biao[0].CO, name: 'CO' }
            ]
        }
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


function TJ_DueBi() {  //单个站点的各参数分布统计图
    var myChart = echarts.init(document.getElementById('TongJi_DueBi'));
    if (gkd_wrw_select == "AQI") { 
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                  { value: data_Biao[0].AQI, name: '食品厂' },
                  { value: data_Biao[1].AQI, name: '客车厂' },
                  { value: data_Biao[2].AQI, name: '邮电学院' },
                  { value: data_Biao[3].AQI, name: '劳动公园' },
                  { value: data_Biao[4].AQI, name: '园林处' },
                  { value: data_Biao[5].AQI, name: '净月潭 ' },
                  { value: data_Biao[6].AQI, name: '甩湾子' },
                  { value: data_Biao[7].AQI, name: '经开区环卫处' },
                  { value: data_Biao[8].AQI, name: '高新区管委会' },
                  { value: data_Biao[9].AQI, name: '岱山公园' }
            ]
        }
     ]
    };
}

if (gkd_wrw_select == "NO2") {
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                 { value: data_Biao[0].NO2, name: '食品厂' },
                  { value: data_Biao[1].NO2, name: '客车厂' },
                  { value: data_Biao[2].NO2, name: '邮电学院' },
                  { value: data_Biao[3].NO2, name: '劳动公园' },
                  { value: data_Biao[4].NO2, name: '园林处' },
                  { value: data_Biao[5].NO2, name: '净月潭 ' },
                  { value: data_Biao[6].NO2, name: '甩湾子' },
                  { value: data_Biao[7].NO2, name: '经开区环卫处' },
                  { value: data_Biao[8].NO2, name: '高新区管委会' },
                  { value: data_Biao[9].NO2, name: '岱山公园' }         
            ]
        }
     ]
    };
}

if (gkd_wrw_select == "PM2.5") {
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                  { value: data_Biao[0].PM25, name: '食品厂' },
                { value: data_Biao[1].PM25, name: '客车厂' },
                { value: data_Biao[2].PM25, name: '邮电学院' },
                  { value: data_Biao[3].PM25, name: '劳动公园' },
                  { value: data_Biao[4].PM25, name: '园林处' },
                  { value: data_Biao[5].PM25, name: '净月潭 ' },
                  { value: data_Biao[6].PM25, name: '甩湾子' },
                  { value: data_Biao[7].PM25, name: '经开区环卫处' },
                  { value: data_Biao[8].PM25, name: '高新区管委会' },
                  { value: data_Biao[9].PM25, name: '岱山公园' }

            ]
        }
     ]
    };
}
if (gkd_wrw_select == "PM10") {
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                  { value: data_Biao[0].PM10, name: '食品厂' },
                  { value: data_Biao[1].PM10, name: '客车厂' },
                  { value: data_Biao[2].PM10, name: '邮电学院' },
                  { value: data_Biao[3].PM10, name: '劳动公园' },
                  { value: data_Biao[4].PM10, name: '园林处' },
                  { value: data_Biao[5].PM10, name: '净月潭 ' },
                  { value: data_Biao[6].PM10, name: '甩湾子' },
                  { value: data_Biao[7].PM10, name: '经开区环卫处' },
                  { value: data_Biao[8].PM10, name: '高新区管委会' },
                  { value: data_Biao[9].PM10, name: '岱山公园' }
                

            ]
        }
     ]
    };
}

if (gkd_wrw_select == "SO2") {
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                  { value: data_Biao[0].SO2, name: '食品厂' },
                { value: data_Biao[1].SO2, name: '客车厂' },
                { value: data_Biao[2].SO2, name: '邮电学院' },
                  { value: data_Biao[3].SO2, name: '劳动公园' },
                  { value: data_Biao[4].SO2, name: '园林处' },
                  { value: data_Biao[5].SO2, name: '净月潭 ' },
                  { value: data_Biao[6].SO2, name: '甩湾子' },
                  { value: data_Biao[7].SO2, name: '经开区环卫处' },
                  { value: data_Biao[8].SO2, name: '高新区管委会' },
                  { value: data_Biao[9].SO2, name: '岱山公园' }

            ]
        }
     ]
    };
}
if (gkd_wrw_select == "O3") {
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                  { value: data_Biao[0].O3, name: '食品厂' },
                { value: data_Biao[1].O3, name: '客车厂' },
                { value: data_Biao[2].O3, name: '邮电学院' },
                  { value: data_Biao[3].O3, name: '劳动公园' },
                  { value: data_Biao[4].O3, name: '园林处' },
                  { value: data_Biao[5].O3, name: '净月潭 ' },
                  { value: data_Biao[6].O3, name: '甩湾子' },
                  { value: data_Biao[7].O3, name: '经开区环卫处' },
                  { value: data_Biao[8].O3, name: '高新区管委会' },
                  { value: data_Biao[9].O3, name: '岱山公园' }

            ]
        }
     ]
    };
}

if (gkd_wrw_select == "CO") {
    // 指定图表的配置项和数据
    var option = {
        series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                  { value: data_Biao[0].CO, name: '食品厂' },
                { value: data_Biao[1].CO, name: '客车厂' },
                 { value: data_Biao[2].CO, name: '邮电学院' },
                  { value: data_Biao[3].CO, name: '劳动公园' },
                  { value: data_Biao[4].CO, name: '园林处' },
                  { value: data_Biao[5].CO, name: '净月潭 ' },
                  { value: data_Biao[6].CO, name: '甩湾子' },
                  { value: data_Biao[7].CO, name: '经开区环卫处' },
                  { value: data_Biao[8].CO, name: '高新区管委会' },
                  { value: data_Biao[9].CO, name: '岱山公园' }

            ]
        }
     ]
    };
}
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}