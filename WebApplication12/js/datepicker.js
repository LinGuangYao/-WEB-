var currentdate = null;
var currentdate_relitu = null;
var strat_date = null;
var end_date = null;
var strat_date_GKD = null;
var end_date_GKD = null;
var strat_date_YuCe = null;
var end_date_YuCe = null;
var time_sd = null;
var tongji = null;
var android_time = null;

$(function () {
    $.datepicker.regional['zh-CN'] = {
        closeText: '关闭',
        prevText: '<上月',
        nextText: '下月>',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                    '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六',
                    '七', '八', '九', '十', '十一', '十二'],
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);

    $("#android_date").datepicker({
        onSelect: function () {
            android_time = $("#android_date").val();
        }
    });

    $("#datepicker").datepicker({
        onSelect: function () {
            currentdate = $("#datepicker").val();
        }
    });

    $("#Zhangdian_tongji_datapicker").datepicker({
        onSelect: function () {
            tongji = $("#Zhangdian_tongji_datapicker").val();
        }
    });
    $("#datepicker_zd").datepicker({
        onSelect: function () {
            currentdate = $("#datepicker").val();
        }
    });
    $("#datepicker_danDianYuCe").datepicker({
        onSelect: function () {
            currentdate_danDianYuCe = $("#datepicker_danDianYuCe").val();
        }
    });

    $("#datepicker_ReLiTu").datepicker({
        onSelect: function () {
            currentdate_relitu = $("#datepicker_ReLiTu").val();
        }
    });

    $("#riqi_SD").datepicker({
        onSelect: function () {
            time_sd = $("#riqi_SD").val();
        }
    });
    var dates = $("#start_daytime,#end_daytime");
    dates.datepicker({
        onSelect: function (selectedDate) {
            var option = this.id == "start_daytime" ? "minDate" : "maxDate";
            dates.not(this).datepicker("option", option, selectedDate);

            if (this.id == "start_daytime") {
                strat_date = $("#start_daytime").val();
                //  alert(strat_date);
            }
            if (this.id == "end_daytime") {
                end_date = $("#end_daytime").val();
              // alert(end_date);
            }
        }
    });

    var dates = $("#start_daytime_gkd,#end_daytime_gkd");
    dates.datepicker({
        onSelect: function (selectedDate) {
            var option = this.id == "start_daytime_gkd" ? "minDate" : "maxDate";
            dates.not(this).datepicker("option", option, selectedDate);

            if (this.id == "start_daytime_gkd") {
                strat_date_GKD = $("#start_daytime_gkd").val();
                //  alert(strat_date);
            }
            if (this.id == "end_daytime_gkd") {
                end_date_GKD = $("#end_daytime_gkd").val();
                // alert(end_date);
            }
        }
    });

});