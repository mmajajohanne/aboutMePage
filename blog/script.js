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

        //DATA
        let mainDataArr = new Array()

        d3.csv("data2.csv", function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].Title);
                console.log(data[i].Date);
                console.log(data[i].Text);
            }
            for (var i = 0; i < data.length; i++) {
                mainDataArr.push(data[i].Title);
                mainDataArr.push(data[i].Date);
                mainDataArr.push(data[i].Text);
            }

            const perChunk = 3 // elements per chunk ("Title", "Date", "Txt")
            const result = mainDataArr.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)

            if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }
            resultArray[chunkIndex].push(item)
            return resultArray
            }, [])

            console.log(result); 
            console.log(result[1][1]);
            
            //sortere arrayen basert på dato? altså element 1 i hver av arrayene
            
        });
        