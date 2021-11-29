//variables

//functions

function makeMadLib (e){
    e.preventDefault();
    let noun = $("#noun").val();
    let adjective = $("#adjective").val();
    let person = $("#person").val();
    $("#story").append(person + " is a(n) " + adjective + " " + noun + ".");
    console.log(madLibList);
}

//function executions

$("#lib-button").on("click", makeMadLib);