function loadData() {
    var url =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRi-kp3oj4EDMfK4IfSIzQzhAvyt_3zGHmWkMvj3hUJ9EyIMbONA1WSTYdVFGgNP8bTsHMHw07c6U3G/pub?gid=0&single=true&range=A2&output=csv';
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('miles').innerHTML = parseInt(
                xmlhttp.responseText
            ).toLocaleString('en-US');
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send(null);
}

function loadData2() {
    var url2 =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRi-kp3oj4EDMfK4IfSIzQzhAvyt_3zGHmWkMvj3hUJ9EyIMbONA1WSTYdVFGgNP8bTsHMHw07c6U3G/pub?gid=0&single=true&range=B2&output=csv';
    xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
        if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
            document.getElementById('jobs').innerHTML = parseInt(
                xmlhttp2.responseText
            ).toLocaleString('en-US');
        }
    };
    xmlhttp2.open('GET', url2, true);
    xmlhttp2.send(null);
}

function loadData3() {
    var url3 =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRi-kp3oj4EDMfK4IfSIzQzhAvyt_3zGHmWkMvj3hUJ9EyIMbONA1WSTYdVFGgNP8bTsHMHw07c6U3G/pub?gid=0&single=true&range=C2&output=csv';
    xmlhttp3 = new XMLHttpRequest();
    xmlhttp3.onreadystatechange = function () {
        if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
            document.getElementById('review-count').innerHTML = parseInt(
                xmlhttp3.responseText
            ).toLocaleString('en-US');
        }
    };
    xmlhttp3.open('GET', url3, true);
    xmlhttp3.send(null);
}

loadData();
loadData2();
loadData3();
