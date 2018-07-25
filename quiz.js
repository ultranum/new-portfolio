document.getElementById("markQuiz").addEventListener("click", markQuiz);
let mark = 0

function markArray() {
    let Answer = []
    Answer[0] = document.querySelector("input[name='first']:checked").value
    Answer[1] = document.querySelector("input[name='second']:checked").value
    Answer[2] = document.querySelector("input[name='third']:checked").value
    Answer[3] = document.querySelector("input[name='fourth']:checked").value
    console.log(Answer)

    if (Answer[0] == 1)
        mark++
        if (Answer[1] == 22)
            mark++
            if (Answer[2] == 33)
                mark++
                if (Answer[3] == 44)
                    mark++
                    return mark
}

function markQuiz() {
    // Get answer to question 
    markArray()
    console.log(mark)
    alert(results(mark))
    mark = 0
}

function results() {
    return ('mark of ' + mark)

}


// let Answer = document.querySelector("input[name='first']:checked").value;
// console.log(Answer)
// if (Answer == 1){
//     mark += 1
// }
// console.log(mark)
// Answer = document.querySelector("input[name='second']:checked").value;
// console.log(Answer)
// if (Answer == 22){
//     mark += 1
// }
// console.log(mark)
// Answer = document.querySelector("input[name='third']:checked").value;
// console.log(Answer)
// if (Answer == 33){
//     mark += 1
// }
// console.log(mark)
// Answer = document.querySelector("input[name='fourth']:checked").value;
// console.log(Answer)
// if (Answer == 44){
//     mark += 1
// }
// console.log(mark)