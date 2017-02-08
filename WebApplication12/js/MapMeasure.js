var Mcontrol, controlm;

function activateCtl(type) {
    switch (type) {
        case "dist":
            //注销并删除量测控件
            Mcontrol = map.getControl("zondyCD");
            if (Mcontrol) {
                Mcontrol.deactivate();
                map.removeControl(Mcontrol);
            }
            Mcontrol = map.getControl("zondyCA");
            if (Mcontrol) {
                Mcontrol.deactivate();
                map.removeControl(Mcontrol);
            }
            controlm = new Zondy.Control.Measure(OpenLayers.Handler.Path, { id: "zondyCD" });
            map.addControl(controlm);
            controlm.activate();
            break;
        case "area":
            //注销并删除量测控件
            Mcontrol = map.getControl("zondyCD");
            if (Mcontrol) {
                Mcontrol.deactivate();
                map.removeControl(Mcontrol);
            }
            Mcontrol = map.getControl("zondyCA");
            if (Mcontrol) {
                Mcontrol.deactivate();
                map.removeControl(Mcontrol);
            }
            controlm = new Zondy.Control.Measure(OpenLayers.Handler.Polygon, { id: "zondyCA" });
            map.addControl(controlm);
            controlm.activate();
            break;
        default:
            //注销并删除量测控件
            Mcontrol = map.getControl("zondyCD");
            if (Mcontrol) {
                Mcontrol.deactivate();
                map.removeControl(Mcontrol);
            }
            Mcontrol = map.getControl("zondyCA");
            if (Mcontrol) {
                Mcontrol.deactivate();
                map.removeControl(Mcontrol);
            }
            break;
    }
}

//清除功能及界面
function clearMeasure() {
    //注销并删除量测控件
    clearCLMeasure();
    clearMbox();

}

//删除弹出框
function clearMbox() {
    var divobj = $("#MMCLdialog");
    if (divobj[0]) {
        divobj.remove();
    }
}

//清除图层
function clearMlayer() {
    var layerA = map.getLayersByName("measureLayer");
    var textA = map.getLayersByName("measureTexts");
    var closeA = map.getLayersByName("measureClose");
    if (layerA[0] != null) {
        for (var i = layerA.length - 1; i > -1; i--) {
            map.removeLayer(layerA[i]);
            map.removeLayer(textA[i]);
            map.removeLayer(closeA[i]);
        }
    }
}

function clearCLMeasure() {
    //注销并删除量测控件
    Mcontrol = map.getControl("zondyCD");
    if (Mcontrol) {
        Mcontrol.deactivate();
        map.removeControl(Mcontrol);
    }
    Mcontrol = map.getControl("zondyCA");
    if (Mcontrol) {
        Mcontrol.deactivate();
        map.removeControl(Mcontrol);
    }
    clearMlayer();

}
