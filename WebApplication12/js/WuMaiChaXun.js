
var gkd_wrw_select = null;
var data_Biao = null;
function close_grid() {
    $('#grid_div').empty();
}
function WMCX() {
    var gkd_select = $("#guoKongdian_select").val();
    gkd_wrw_select = $("#guoKongdian_weranwu_select").val();
    var gkd_riqi = $('#WuMaiChaXun_riqi_easyui input[name="gkd_xuanZheRiqi"]:checked ').val();

    if (gkd_riqi == "option_Dan") {
        $.ajax({
            url: "ashx/WuMaiChaXun.ashx",
            type: "POST",
            dataType: "json",
            async: false,
            data: { DAY: currentdate, GuoKongDian: gkd_select, GuoKongDian_WRW: gkd_wrw_select },
            success: GetResults
        });

        function GetResults(json) {
            var jsonPage = eval(json);
            data_Biao = json.WMXX;
        }
    }
    else {
        $.ajax({
            url: "ashx/WuMaiChaXun_DuoRi.ashx",
            type: "POST",
            dataType: "json",
            async: false,
            data: { sDAY: strat_date_GKD, eDAY: end_date_GKD, GuoKongDian: gkd_select, GuoKongDian_WRW: gkd_wrw_select },
            success: GetResults
        });

        function GetResults(json) {
            var jsonPage = eval(json);
            data_Biao = json.WMXX;
        }

    }

    var shtml, icolmax;

    var cols = new Array();
    for (var key in data_Biao[0]) {
        cols[cols.length] = key;
    }

    icolmax = cols.length;

    shtml = "<table class='table table-hover'><tr>";
    for (var i = 0; i < icolmax; i++) {
        shtml += "<th>" + cols[i] + "</th>";
    }
    shtml += "</tr>";

    var irowmax = data_Biao.length;

    for (var irow = 0; irow < irowmax; irow++) {
        shtml += "<tr>";
        for (var i = 0; i < icolmax; i++) {
            if (i == 0) {
                    shtml += "<td id=' " + irow + i + " '>" + data_Biao[irow][cols[i]] + "</td>"
            }
            else {
                var num = Math.floor(data_Biao[irow][cols[i]] * 100) / 100;
                shtml += "<td id=' " + irow + i + " '>" + num.toFixed(2) + "</td>";
            }
        }
        shtml += "</tr>";
    }

    document.getElementById('grid_div').innerHTML = shtml;

    // alert(data_Biao);
};
