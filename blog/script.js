let liEl1 = document.getElementById("idLi1")
let liEl2 = document.getElementById("idLi2")
let liEl3 = document.getElementById("idLi3")


        //for m integrering av json file 
        liEl1.addEventListener("click", menufunc)
        liEl2.addEventListener("click", menufunc)
        liEl3.addEventListener("click", menufunc)

        function menufunc(){
            liEl1.className = "";
            liEl2.className = "";
            liEl3.className = "";
            this.className = "active";
        }


        /*
        type: 'line',
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