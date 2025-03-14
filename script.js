let money = 10;
let moneyText = document.getElementById("money");
moneyText.innerText = "Money: " + money + " $";

let slotMusic = document.getElementById("slotMusic");
let legendarySound = document.getElementById("legendarySound");
slotMusic.play();

const commonCats = [
    "cats/common/common1.webp",
    "cats/common/common2.webp",
    "cats/common/common3.webp",
    "cats/common/common4.webp",
    "cats/common/common5.webp",
    "cats/common/common6.webp",
    "cats/common/common7.webp",
    "cats/common/common8.webp",
    "cats/common/common9.webp",
    "cats/common/common10.webp",
    "cats/common/common11.webp",
    "cats/common/common12.webp",
    "cats/common/common13.webp",
    "cats/common/common14.webp",
    "cats/common/common15.webp",
    "cats/common/common16.webp",
    "cats/common/common17.webp",
    "cats/common/common18.webp",
    "cats/common/common19.webp",
    "cats/common/common20.webp",
    "cats/common/common21.webp",
    "cats/common/common21.webp",
    "cats/common/common22.webp",
    "cats/common/common23.webp",
    "cats/common/common24.webp",
    "cats/common/common25.webp",
    "cats/common/common26.webp",
    "cats/common/common27.webp",
    "cats/common/common28.webp",
    "cats/common/common29.webp",
    "cats/common/common30.webp",
    "cats/common/common31.webp",
    "cats/common/common32.webp",
    "cats/common/common33.webp"
];
const rareCats = [
    "cats/rare/rare1.webp",
    "cats/rare/rare2.jpg",
    "cats/rare/rare3.webp",
    "cats/rare/rare4.webp",
    "cats/rare/rare5.webp",
    "cats/rare/rare6.webp",
    "cats/rare/rare7.webp",
    "cats/rare/rare8.webp",
    "cats/rare/rare9.webp",
    "cats/rare/rare10.webp",
    "cats/rare/rare11.webp",
    "cats/rare/rare12.webp",
    "cats/rare/rare13.webp",
    "cats/rare/rare14.webp",
    "cats/rare/rare15.webp",
    "cats/rare/rare16.webp",
    "cats/rare/rare17.webp",
    "cats/rare/rare18.webp",
    "cats/rare/rare19.webp",
    "cats/rare/rare20.webp"
];
const epicCats = [
    "cats/epic/epic1.webp",
    "cats/epic/epic2.webp",
    "cats/epic/epic3.webp",
    "cats/epic/epic4.webp",
    "cats/epic/epic5.webp",
    "cats/epic/epic6.webp",
    "cats/epic/epic7.webp",
    "cats/epic/epic8.webp",
    "cats/epic/epic9.webp",
    "cats/epic/epic10.webp",
    "cats/epic/epic11.webp"
];
const mythicalCats = [
    "cats/mythical/mythical1.webp",
    "cats/mythical/mythical2.webp",
    "cats/mythical/mythical3.webp",
    "cats/mythical/mythical4.webp",
    "cats/mythical/mythical5.webp",
    "cats/mythical/mythical6.webp",
    "cats/mythical/mythical7.webp",
    "cats/mythical/mythical8.webp",
    "cats/mythical/mythical9.webp",
    "cats/mythical/mythical10.webp"
];
const legendaryCats = [
    "cats/legendary/legendary1.gif",
    "cats/legendary/legendary2.gif",
    "cats/legendary/legendary3.gif", 
    "cats/legendary/legendary4.webp",
    "cats/legendary/legendary5.mp4",
    "cats/legendary/legendary6.gif",
    "cats/legendary/legendary7.jpeg"
];

function startRoll() {
    if (money < 5) {
        document.getElementById("result").innerText = "Not enough money!";
        document.getElementById("moneyGain").innerText = "";
        return;
    }

    money -= 5;
    updateMoneyText();

    let rollImage = document.getElementById("rollImage");
    let rollVideo = document.getElementById("rollVideo");
    let resultText = document.getElementById("result");
    let moneyGainText = document.getElementById("moneyGain");
    moneyGainText.innerText = ""; 

    let roll = Math.floor(Math.random() * 100) + 1;

    resultText.innerText = "Rolling...";
    rollImage.style.display = "block";
    rollImage.src = "cats/main.webp";
    rollVideo.style.display = "none";
    rollVideo.pause();

    const rollingImages = [
        ...commonCats,
        ...rareCats,
        ...epicCats,
        ...mythicalCats,
        ...legendaryCats
    ];

    let rollInterval = setInterval(() => {
        let randomFile = rollingImages[Math.floor(Math.random() * rollingImages.length)];
            rollImage.style.display = "none";
            rollImage.style.display = "block";
            rollImage.src = randomFile;
    }, 100);

    setTimeout(() => {
        clearInterval(rollInterval);

        let gainedMoney = 0;
        let selectedFile = "";
        
        if (roll === 1) {
            selectedFile = legendaryCats[Math.floor(Math.random() * legendaryCats.length)];
            resultText.innerText = "You found a Legendary Cat!";
            gainedMoney = 50;
        } else if (roll <= 5) {
            selectedFile = mythicalCats[Math.floor(Math.random() * mythicalCats.length)];
            resultText.innerText = "You found a Mythical Cat!";
            gainedMoney = 20;
        } else if (roll <= 15) {
            selectedFile = epicCats[Math.floor(Math.random() * epicCats.length)];
            resultText.innerText = "You found an Epic Cat!";
            gainedMoney = 10;
        } else if (roll <= 40) {
            selectedFile = rareCats[Math.floor(Math.random() * rareCats.length)];
            resultText.innerText = "You found a Rare Cat!";
            gainedMoney = 5;
        } else {
            selectedFile = commonCats[Math.floor(Math.random() * commonCats.length)];
            resultText.innerText = "You found a Common Cat!";
            gainedMoney = 1;
        }

        if (selectedFile.endsWith(".mp4")) {
            slotMusic.pause();
            rollImage.style.display = "none";
            rollVideo.style.display = "block";
            rollVideo.src = selectedFile;
            rollVideo.play();
        } else {
            rollImage.style.display = "block";
            rollVideo.style.display = "none";
            rollImage.src = selectedFile;
        }
        money += gainedMoney;
        updateMoneyText();
        moneyGainText.innerText = "Gained " + gainedMoney + " $!!";
    }, 3000);
}

function updateMoneyText() {
    moneyText.innerText = "Money: " + money + " $";
}

function resetMoney() {
    money = 10;
    rollImage.src = "cats/main.webp";
    document.getElementById("result").innerText = "Start Gamblin' Today!!";
    document.getElementById("moneyGain").innerText = "";
    updateMoneyText();
}

function toggleMusic() {
    if (slotMusic.paused) {
        slotMusic.play();
    } else {
        slotMusic.pause();
    }
}
