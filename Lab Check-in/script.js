// alert("Welcome to the Access Gate");
let flagMenu = false;
// let userInfo = {
//     name: "",
//     age: 0,
//     role: "",
//     hours: 0,
//     acceptance: false,
//     risk:0,
// };

function menu(){
    const option = intValidation(`Choose an option \n1. Check-in \n2. Risk Calculator \n3. Access Validation \n4. Exit`,1,4);
    return option
}

function intValidation(message, min = null, max = null){
    let flag = false;
    while (!flag) {
        let value = prompt(message, "Type here");
        if (value === null) return null;

        value = value.trim();

        if (value === "") {
            alert("The field cannot be empty");
            continue;
        }

        if (!/^-?\d+$/.test(value)) {
            alert("Please enter numbers only.");
            continue;
        }

        value = Number(value);

        if (!Number.isInteger(value)) {
            alert("Wrong entry. Try again.");
            continue;
        }
        if ((min !== null && value < min) || (max !== null && value > max)) {
            alert("Value out of range. Try again.");
            continue;
        }
        return value;
    }
}

function strValidation(message){
    let flag = false;
    while (!flag) {
        let value = prompt(message, "Type here");
        if (value === null) return null;

        if (value === "") {
            alert("The field cannot be empty");
            continue;
        }

        if (!/^[a-zA-Z ]+$/.test(value)) {
            alert("The field must include only letters");
            continue;
        }

        return value.toLowerCase();
    }
}

function register() {
    let userRole = 'visitor';
    let userName = strValidation("Enter your name");
    let userAge = intValidation("Enter your age", 5);
    let optRole = intValidation("Choose your role \n1. Coder \n2.Tutor \n3. Visitor",1,3);
    let userHours = intValidation("Available hours", 1,12);

    let optRules = intValidation("Do you accept the Lab Rules \n1. Yes \n2. No", 1,2);

    let rules = (optRules === 1) ? true : false;

    if (optRole ===1) {
        userRole = 'coder';
    } else if (optRole === 2) {
        userRole = 'tutor';
    }

    userInfo = {
    name: userName,
    age: userAge,
    role: userRole,
    hours: userHours,
    acceptance: rules,
    };
    return  userInfo
}

function riskCalculation(user) {
    let risk = 0;
    if (user.inputHours < 2) {
        risk+=2;
    } else if (user.inputHours > 3){
        risk--;
    }
    if (user.inputRole == 'visitor') {
        risk+=2;
    } else if (user.inputRole == 'coder'){
        risk--;
    }
    if (user.inputAge>17 && user.inputAge < 21) {
        risk+=2;
    }

    if (risk < 0) {
        risk = 0
    }
    user.risk = risk;
    return user;
}

function showUser(user){
    alert(`Name: ${user.name} \nAge: ${user.age} \nHours: ${user.hours} \nRole: ${user.role}`)
    return
}

function finalDecision(user) {
    let decision = 'Access Granted. Welcome!';
    if (user.age < 19 || user.acceptance === false) {
        decision = 'Access Denied';
    }
    else if (user.risk > 3){
        decision = 'Access under review';
    }
    console.log(`Dear ${user.name} \n${decision}`);
    //alert(`Dear ${user.name} \n${decision}`);
    return decision
}

function showDecision(finalDes) {
    const output = document.querySelector('section');

    const newContent = document.createTextNode(finalDes);

    output.appendChild(newContent)

}

function main(value){
    switch (value) {
        case 1:
            userInfo = register();
            alert("Check-in in process");
            console.log(userInfo)
            showUser(userInfo);
            break;

        case 2:
            let userRisk = riskCalculation(userInfo);
            console.log(`Your risk score is: ${userRisk}`)
            alert(`Your risk score is: ${userRisk}`)
            break;
        case 3:
            finalDecision(userInfo);
            break;
    
        default:
            break;
    }
}

// while (!flagMenu) {
//     let option = menu();

//     if (option === 4) {
//         flagMenu = true;
//         alert("Thanks for using the System");

//     } else {
//         flagMenu = false;
//         main(option);
//     }
// }

const btn = document.getElementById('btn-submit');

const form = document.querySelector("form");

function saveUser(e){
    const formData = new FormData(e.target);
    
    const user = {};
    for (const [key, value] of formData) {
        user[key] = value;
    }

    user.rulesCheck = user.rulesCheck ? true:false;
    
    return user

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    userInfo = saveUser(e)
    riskCalculation(userInfo)
    console.log(riskCalculation(userInfo))
    showDecision(finalDecision(riskCalculation(userInfo)))
}
)
