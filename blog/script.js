let liEl1 = document.getElementById("idLi1")
let liEl2 = document.getElementById("idLi2")
let liEl3 = document.getElementById("idLi3")

        liEl1.addEventListener("click", menufunc)
        liEl2.addEventListener("click", menufunc)
        liEl3.addEventListener("click", menufunc)

        function menufunc(){
            liEl1.className = "";
            liEl2.className = "";
            liEl3.className = "";
            this.className = "active";
        }



//for m integrering av json file 
/*
let data22 = $.csv.toObjects(csv)
        type: 'lines', 
        data: {
            datasets: [{
                data: [{ 'data.key': 'one', 'data.value': 20 }, { 'data.key': 'two', 'data.value': 30 }]
            }]
        },
        options: {
            parsing: {
            xAxisKey: 'data\\.key',
            yAxisKey: 'data\\.value'
            }*/

$(document).ready(function() {
    $.ajax({
        type: "GET",
         url: "data2.txt",
         dataType: "text",
         success: function(data) {processData(data);}
    });
});
            
function processData(allText) {
     var allTextLines = allText.split(/\r\n|\n/);
     var headers = allTextLines[0].split(',');
     var lines = [];
            
     for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
         if (data.length == headers.length) {
            
            var tarr = [];
             for (var j=0; j<headers.length; j++) {
                 tarr.push(headers[j]+":"+data[j]);
             }
             lines.push(tarr);
        }
     }
                // alert(lines);
}