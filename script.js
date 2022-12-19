//include
let date1El = document.getElementById("idDate1")
let title1El = document.getElementById("idTitle1")
let quote1El = document.getElementById("idQuote1")

let date2El = document.getElementById("idDate2")
let title2El = document.getElementById("idTitle2")
let quote2El = document.getElementById("idQuote2")

let date3El = document.getElementById("idDate3")
let title3El = document.getElementById("idTitle3")
let quote3El = document.getElementById("idQuote3")

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
    //date1El.innerHTML = result[0][1]
    title1El.innerHTML = result[0][0]   
    
    quote1El.innerHTML = "'"+result[0][3]+"'"

    date2El.innerHTML = result[1][1]
    title2El.innerHTML = result[1][0]   
    quote2El.innerHTML = "'"+result[1][3]+"'"

    date3El.innerHTML = result[2][1]
    title3El.innerHTML = result[2][0]
    quote3El.innerHTML = "'"+result[2][3]+"'"
    
});
        