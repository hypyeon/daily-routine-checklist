function getName() {
    const name = document.getElementById("name").value;
    const nameSpan = document.getElementById("userName");
    if (name.trim() === '') {
        alert("Oops, sorry we missed your name.");
    } else {
        nameSpan.innerText = `${name},`;
    }
}
function generateTitle(arr) {
    const numOfChoice = arr.length;
    const h3 = document.getElementById("h3");
    let title;
    if (numOfChoice <= 1 && numOfChoice >= 4) {
        title = `You've done ${numOfChoice} healthy routines today. Hope you accomplish more healthy routines tomorrow!`;
    } else if (numOfChoice > 4 && numOfChoice <= 7) {
        title = `Nice! You've done ${numOfChoice} healthy routines today.`;
    } else if (numOfChoice > 7 && numOfChoice <= 9) {
        title = `Way to go! You've done ${numOfChoice} healthy routines today!`;
    } else if (numOfChoice === 10) {
        title = `UNBELIEVABLE! You've done all healthy routines today. Come back tomorrow to check the list and keep your healthy routine going!`;
        h3.classList.add("hidden");
    } else {
        return;
    };
    document.getElementById("title").innerText = title;
};
function generateSuggestion(arr) {
    const early = `Start your day by waking up early to make the most of your day.`;
    const hydrate = `Drink a glass of water as soon as you wake up to rehydrate your body after a night's sleep.`;
    const breakfast = `Eat a balanced and nutritious breakfast to provide your body with the necessary energy and.`;
    const exercise = `Incorporate physical activity into your daily routine, whether it's a morning walk, yoga, or a workout at the gym.`;
    const eating = `Consume a diet rich in fruits, vegetables, lean proteins, and whole grains.`;
    const meditation = `Take some time for mindfulness and meditation to reduce stress and improve focus.`;
    const sleep = `Ensure you get enough quality sleep (7-9 hours for most adults).`;
    const goals = `Set daily goals and prioritize tasks to stay organized and maintain a sense of accomplishment.`;
    const social = `Connect with family and friends or engage in social activities to maintain a healthy support system.`;
    const relax = `Dedicate time to relax and enjoy hobbies.`;

    let sentenceArray = [];
    arr.forEach((item) => {
        switch (item) {
            case 'early': 
                sentenceArray.push(early);
                break;
            case 'hydrate':
                sentenceArray.push(hydrate);
                break;
            case 'breakfast':
                sentenceArray.push(breakfast);
                break;
            case 'exercise':
                sentenceArray.push(exercise);
                break;
            case 'eating':
                sentenceArray.push(eating);
                break;
            case 'meditation':
                sentenceArray.push(meditation);
                break;
            case 'sleep':
                sentenceArray.push(sleep);
                break;
            case 'goals':
                sentenceArray.push(goals);
                break;
            case 'social':
                sentenceArray.push(social);
                break;
            case 'relax':
                sentenceArray.push(relax);
                break;
            default:
                console.log('Error');
        };
        return sentenceArray;
    });
    sentenceArray.forEach((item) => {
        const ul = document.getElementById("description");
        const li = document.createElement("li");
        ul.append(li);
        li.style.listStyle = 'none';
        li.style.padding = '.25rem';
        const emoji = document.createTextNode("💜 ");
        li.prepend(emoji);
        li.append(item);
    });
};
function generateAnswer() {
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    const checkedArray = Array.from(checkbox).filter(checkbox => checkbox.checked);
    const uncheckedArray = Array.from(checkbox).filter(checkbox => !checkbox.checked);
    const selectedArray = checkedArray.map(item => item.name);
    const unselectedArray = uncheckedArray.map(item => item.name);

    getName();
    generateTitle(selectedArray);
    generateSuggestion(unselectedArray);
};
function formHandler() {
    const form = document.querySelector("form");
    const question = document.getElementById("firstSection");
    const result = document.getElementById("secondSection");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        generateAnswer();
        result.classList.remove("hidden");
        question.classList.add("hidden");
    });
};
function remove() {
    const resetBtn = document.getElementById("reset");
    const form = document.querySelector("form");
    const question = document.getElementById("firstSection");
    const result = document.getElementById("secondSection");
    const ul = document.getElementById("description");
    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        question.classList.remove("hidden");
        result.classList.add("hidden");
        form.reset();
        ul.innerText = '';
    });
};

window.onload = () => {
    formHandler();
    remove();
}