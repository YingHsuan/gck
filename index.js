function httpGet(theUrl) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();
}
// document.write(httpGet("https://stackoverflow.com/"));
// document.write(httpGet("https://www.allbeauty.com.tw/GoldPrice/"));

var _table = document.getElementById("ListMetalPrice");
// 第一張表
var _result1 = [];
var _table1 = _table.childNodes[1];
var _table1_body = _table1.childNodes[1];
for (t = 0; t < _table1_body.childNodes.length; t++) {
    if (t == 0 || t % 2 == 1) {
        var _table1_body_tr = _table1_body.childNodes[t];
        var _object1 = [];
        for (r = 0; r < _table1_body_tr.childNodes.length; r++) {
            var _table1_body_tr_td = _table1_body_tr.childNodes[r];
            if (_table1_body_tr_td.childNodes[0] != undefined) {
                var content = _table1_body_tr_td.childNodes[0].data;
                var _word = content;
                if (_word != undefined) {
                    _object1.push(_word);
                }
            }
        }
        _result1.push(_object1);
    }
}
// 第二張表
var _result2 = [];
var _table2 = _table.childNodes[3];
var _table2_body = _table2.childNodes[1];
for (t = 0; t < _table2_body.childNodes.length; t++) {
    if (t == 0 || t % 2 != 1) {
        var _table2_body_tr = _table2_body.childNodes[t];
        var _object2 = [];
        for (r = 0; r < _table2_body_tr.childNodes.length; r++) {
            var _table2_body_tr_td = _table2_body_tr.childNodes[r];
            if (_table2_body_tr_td.childNodes[0] != undefined) {
                var content = _table2_body_tr_td.childNodes[0].data;
                var _word = content;
                if (_word != undefined) {
                    _object2.push(_word);
                }
            }
        }
        _result2.push(_object2);
    }
}
console.log(_result1);
console.log(_result2);