const machines = [
    {
        name: 'Abdominal Crunch Machine-abs1',
        actualMusclesUsed: 'Rectus Abdominis',
        img: 'machine-images/abdominal-crunch-machine.jpg',
        possibleMusclesUsed: ['Delts', 'Biceps, Traps', 'Quadriceps Femoris', 'Rectus Abdominis']
    },
    {
        name: 'G.H.R. Machine-hamstrings2',
        actualMusclesUsed: 'Semitendinosus, Semimembranosus, Biceps Femoris',
        img: 'machine-images/ghr-machine.jpg',
        possibleMusclesUsed: ['Supraspinatus, Infraspinatus, Teres Minor', 'Semitendinosus, Semimembranosus, Biceps Femoris', 'Latissimus Dorsi', 'Pectoralis Major']
    },
    {
        name: 'Iso-Lateral Bicep Curl Machine-biceps3',
        actualMusclesUsed: 'Biceps Brachii',
        img: 'machine-images/iso-lateral-biceps-curl-machine.jpg',
        possibleMusclesUsed: ['Teres Minor and Subscapularis', 'Quadriceps femoris', 'Biceps Brachii', 'Tibialis Anterior']
    },
    {
        name: 'Iso-Lateral Decline Press Machine-chest4',
        actualMusclesUsed: 'Pectoralis Major',
        img: 'machine-images/iso-lateral-decline-press-machine.jpg',
        possibleMusclesUsed: ['Latissimus Dorsi', 'Teres Minor and Subscapularis, Traps', 'Quadriceps Femoris', 'Pectoralis Major']
    },
    {
        name: 'Iso-Lateral High Row Machine-back-5',
        actualMusclesUsed: 'Latissimus Dorsi',
        img: 'machine-images/iso-lateral-high-row-machine.jpg',
        possibleMusclesUsed: ['Pectoralis', 'Teres Minor and Subscapularis', 'Latissimus Dorsi', 'Quadriceps femoris']
    },

    // {
    //     name: 'Seated Dip Machine-triceps-6',
    //     actualMusclesUsed: 'Triceps & Anterior Deltoids',
    //     img: 'machine-images/seated-dip-machine.jpg',
    //     possibleMusclesUsed: ['Biceps Brachii', 'Teres Minor and Subscapularis', 'Quadriceps Femoris', 'Triceps & Anterior Deltoids']
    // },

    {
        name: 'Seated/Standing Shrug Machine-traps-7',
        actualMusclesUsed: 'Trapezius',
        img: 'machine-images/shrug-machine.jpg',
        possibleMusclesUsed: ['Trapezius', 'Teres Minor and Subscapularis', 'Quadriceps femoris', 'Gastrocnemius']
    },

    {
        name: 'Standing Calf Raise Machine-8',
        actualMusclesUsed: 'Soleus',
        img: 'machine-images/standing-calf-raise-machine.jpg',
        possibleMusclesUsed: ['Soleus', 'Teres Minor and Subscapularis', 'Latissimus Dorsi', 'Gastrocnemius']
    },

    {
        name: 'Seated Calf Raise Machine-9',
        actualMusclesUsed: 'Gastrocnemius',
        img: 'machine-images/seated-calf-raise-machine.jpg',
        possibleMusclesUsed: ['Latissimus Dorsi', 'Teres Minor and Subscapularis', 'Gastrocnemius', 'Semitendinosus, Semimembranosus, Biceps Femoris']
    },

    {
        name: 'Tibia Dorsi Flexion Machine-tibialis-10',
        actualMusclesUsed: 'Tibialis Anterior',
        img: 'machine-images/tibia-dorsi-flexion-machine.jpg',
        possibleMusclesUsed: ['Quadriceps Femoris', 'Teres Minor and Subscapularis', 'Latissimus Dorsi - back', 'Tibialis Anterior']
    },

    {
        name: 'Leg Extension Machine-11',
        actualMusclesUsed: 'Quadriceps Femoris',
        img: 'machine-images/leg-extension-machine.jpg',
        possibleMusclesUsed: ['Latissimus Dorsi', 'Teres Minor and Subscapularis', 'Quadriceps Femoris', 'Tibialis Anterior']
    },

    {
        name: 'Lateral Raise Machine-12',
        actualMusclesUsed: 'Supraspinatus, Infraspinatus, Teres Minor, Subscapularis',
        img: 'machine-images/lateral-raise-machine.jpg',
        possibleMusclesUsed: ['Flexor Carpi Radialis', 'Supraspinatus, Infraspinatus, Teres Minor, Subscapularis', 'Soleus', 'Latissimus Dorsi']
    },

];

//Loops through machines
let superNumber = Math.floor(Math.random() * machines.length)
let randomMachine = machines[superNumber];
let theRightQuestion;

// function textInButtons() {

//     let muscleGroups = randomMachine.possibleMusclesUsed
//     let buttonDisplay = document.getElementsByClassName('buttons');
//     for (let i = 0; i < buttonDisplay.length; i++) {
//         buttonDisplay[i].innerHTML = `${muscleGroups[i]}`
//     }
// }

function textInButtons(randomlyGeneratedMachine) {

    let muscleGroups = randomlyGeneratedMachine.possibleMusclesUsed
    let buttonDisplay = document.getElementsByClassName('buttons');
    for (let i = 0; i < buttonDisplay.length; i++) {
        buttonDisplay[i].innerHTML = `${muscleGroups[i]}`
    }
}
//Questions Images being displayed
// function displayQuestion() {
//     console.log('called');
//     let machineImg = document.querySelector('.machine-img');
//     machineImg.style.backgroundImage = `url('${randomMachine.img}')`;
//     textInButtons();
// }
// displayQuestion()

function displayQuestion(machine) {
    let machineImg = document.querySelector('.machine-img');
    machineImg.style.backgroundImage = `url('${machine.img}')`;
    theRightQuestion = machine;
    textInButtons(machine);
}
displayQuestion(randomMachine);


// for random muscles used 
let actualMusclesUsed = randomMachine.actualMusclesUsed;
let randomPosMusclesUsed = randomMachine.possibleMusclesUsed;

let muscleGroups = machines[superNumber].possibleMusclesUsed;
// let theRightQuestion = machines[superNumber];




let buttons = document.querySelectorAll('.buttons');


for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', alertBox);

}

// for (i = 0; i < buttons.length; i++) {
//     button[i].removeEventListener('click', alertBox);

// }

function alertBox(event) {
    let superNumber = Math.floor(Math.random() * machines.length)
    let newRandomMachine = machines[superNumber];
    let correctMuscleGroup = event.target;
    let answer = theRightQuestion.actualMusclesUsed;
    if (correctMuscleGroup.innerHTML === answer) {
        alert('CORRECT!!!')
        theRightQuestion = newRandomMachine;
        displayQuestion(newRandomMachine);
    } else {
        alert('THAT IS INCORRECT')
    }

}
