








let A_max = 100, A_min =70, B_max = 69, B_min = 60, C_max = 59, C_min = 50, D_max = 49, D_min = 45,
E_max = 44, E_min = 40, F = 39;

const studentGrade = document.querySelectorAll('.studentGrade');
const addGrade = document.querySelectorAll('.addGrade');

function changeGradeTo(grade){
    studentGrade.forEach((stuGrade)=>{
        stuGrade.innerHTML = grade;
    });
    //console.log('changer');
}

function enterScore(){
    let score = prompt("Enter Student Score: ");

    //console.log(score);
    let score_number = Number(score);

    if(score_number >= A_min){
        changeGradeTo('A');
    }
    else if(score_number >= B_min && score_number < A_min){
        changeGradeTo('B');
    }
    else if(score_number >= C_min && score_number < B_min && score_number < A_min){
        changeGradeTo('C');
    }
    else if(score_number >= D_min && score_number < B_min && score_number < A_min && score_number < C_min){
        changeGradeTo('D');
    }
    else if(score_number >= E_min && score_number < D_min && score_number < C_min && score_number < B_min && score_number < A_min){
        changeGradeTo('E');
    }
    else if(score_number < E_min){
        changeGradeTo('F');
    }
    else{
        console.log("Not Involved");
    }
}

addGrade.forEach((add_Grade)=>{
    add_Grade.addEventListener('click', ()=>{
        enterScore();
    });
});