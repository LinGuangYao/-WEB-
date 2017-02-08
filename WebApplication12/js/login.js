



var userName, passWord, flag, mima;
function log() {
    userName = document.getElementById("username").value;
    passWord = document.getElementById("password").value;

//    $.ajax({
//        url: "ashx/Login.ashx",
//        type: "POST",
//        dataType: "json",
//        async: false,
//        data: { user: userName, pass: passWord },
//        success: GetResults
//    });

//    function GetResults(json) {
//        mima = json;
//    }

//    //alert(mima.MIMA[0].PASSWORD)
//    if (mima.MIMA[0].PASSWORD == passWord)
//    { window.location.href = "/index.htm"; }
//    else alert("用户名或者密码错误");
    window.location.href = "/index.htm";
}