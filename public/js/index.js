function sendJSON(method, path, data, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             callback(this);
         }
    };
    xhttp.open(method, path, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}

var exampleSocket = new WebSocket("ws://" + window.location.hostname + ':1337');
exampleSocket.onmessage = function(event) {
    sendJSON('GET', '/item/' + event.data, null, function(app) {
        var item = JSON.parse(app.responseText);
        add_one_indicator();
        add_one_inner(item);
    });
};
