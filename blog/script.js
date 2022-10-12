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
            //hide and replace "home", "archive" and "about" div
            }

//include
let date1El = document.getElementById("idDate1")
let title1El = document.getElementById("idTitle1")
let quote1El = document.getElementById("idQuote1")
            
//DATA
let mainDataArr = new Array()

d3.csv("data2.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        mainDataArr.push(data[i].Title);
        mainDataArr.push(data[i].Date);
        mainDataArr.push(data[i].Text);
        mainDataArr.push(data[i].Quote);
    }

    const perChunk = 4; // elements per chunk ("Title", "Date", "Txt")
    const result = mainDataArr.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/perChunk);

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        };
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    //console.log(result); 
    //console.log(result[1][1]);
    date1El.innerHTML = result[0][1]
    title1El.innerHTML = result[0][0]   
    quote1El.innerHTML = "'"+result[0][3]+"'"
});
        