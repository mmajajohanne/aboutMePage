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