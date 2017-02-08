
var nodu_biao = null;

function MRMD() {

    var date = new Date();
    var nowdate, beforedate;
    var yy= date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd= date.getDate();
    nowdate = yy + "/" + mm + "/" + dd;

    $.ajax({
        url: "ashx/Tomorrow_nongdu.ashx",
        type: "POST",
        dataType: "json",
        async: false,
        data: { DAY: nowdate },
        success: GetResults
    });

    function GetResults(json) {
        var jsonPage = eval(json);
        nodu_biao = json.NDWC;
    }



    var shtml, icolmax;

    var cols = new Array();
    for (var key in nodu_biao[0]) {
        cols[cols.length] = key;
    }

    icolmax = cols.length;
   // icolmax = 7;

    shtml = "<table class='table table-hover'><tr>";
    for (var i = 0; i < icolmax; i++) {
        shtml += "<th>" + cols[i] + "</th>";
    }
    shtml += "</tr>";

    var irowmax = nodu_biao.length;

    for (var irow = 0; irow < 10; irow++) {

                shtml += "<tr>";
                for (var i = 0; i < icolmax; i++) {

                    if (i == 0) {
                        shtml += "<td id=' " + irow + i + " '>" + nodu_biao[irow*7][cols[i]] + "</td>";
                    }
                    else {
                       ss= (nodu_biao[irow * 7 + 1][cols[i]] + nodu_biao[irow * 7 + 2][cols[i]] + nodu_biao[irow * 7 + 3][cols[i]] + nodu_biao[irow * 7 + 4][cols[i]] + nodu_biao[irow * 7 + 5][cols[i]] + nodu_biao[irow * 7 + 6][cols[i]]) / 7;
                       shtml += "<td id=' " + irow + i + " '>" + ss.toFixed(2) + "</td>";
                       //保留二位小数 
                    }
                     }
                shtml += "</tr>";

//        shtml += "<tr>";
//        for (var i = 0; i < icolmax; i++) {
//            shtml += "<td id=' " + irow + i + " '>" + nodu_biao[irow][cols[i]] + "</td>";
//        }
//        shtml += "</tr>";
    }

    document.getElementById('mingri_biao').innerHTML = shtml;

}
