$(document).ready(function() {
    $.ajax({
        url: 'problem_1.php',
        type:'GET',
        success: function (data) {
            data = JSON.parse(data)
            let value = "";
            for(let key in data){
               value += "<div class='border p-2' data-value='"+data[key]+"' onclick='getDropFirstLevel("+key+")'>"+data[key]+"</div>"

            }


            document.getElementById("d1").innerHTML = value
            setActive("d1")
        }
    });
});
let fisrt_level_key;
function getDropFirstLevel(key){
    fisrt_level_key = key
    document.getElementById("d3").innerHTML = ""
        $.ajax({
        url: 'problem_1.php?type_id='+key,
        type:'GET',
        success: function (data) {
            data = JSON.parse(data)
            let value = "";
            for(let key in data){
                value += "<div class='border p-2' data-value='"+data[key]+"' onclick='getDropSecondLevel("+key+")'>"+data[key]+"</div>"
            }
            document.getElementById("d2").innerHTML = value
            setActive("d2")
        }
    });
}
function getDropSecondLevel(key){
    $.ajax({
        url: 'problem_1.php?type_id='+fisrt_level_key+'&group_id='+key,
        type:'GET',
        success: function (data) {
            data = JSON.parse(data)
            let value = "";
            for(let key in data){
                value += "<div class='border p-2' data-value='"+data[key]+"'>"+data[key]+"</div>"
            }
            document.getElementById("d3").innerHTML = value
        }
    });
}
function setActive(div_id){
    let divContainer = document.getElementById(div_id);
    let divs = divContainer.getElementsByClassName("border");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            // Add the active class to the current/clicked button
            this.className += " active";
        });
    }
}