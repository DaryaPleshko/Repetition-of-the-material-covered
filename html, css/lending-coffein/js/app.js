// Сохраняем оригинальный контент
const infoPeople = document.querySelector('.info-people');
const originalData = {
    feedback: infoPeople.querySelector('p').textContent,
    name: infoPeople.querySelector('h3').textContent,
    job: infoPeople.querySelector('h6').textContent,
    img: infoPeople.querySelector('img').src
};

const array = [
    originalData,
    {
        feedback: "For over a decade, we've sourced only the top 2% of Arabica beans, roasting each batch to unlock its unique character. From light floral notes to deep chocolate tones—every cup tells a story of terroir and mastery.",
        name: "Alex Chen",
        job: "Quality Director",
        img: "../assets/1.avif"
    },
    {
        feedback: "Our space was built on a simple idea: a place where every detail—from the acoustics to the aroma—creates a sense of belonging. The coffee is our art, but the experience is our legacy.",
        name: "Marco Rossi",
        job: "Founder & Curator of Experience",
        img: "../assets/foto1.jpg"
    },
    {
        feedback: "My work begins at origin, building direct relationships with farmers who share our values. Ethical sourcing and precise scoring ensure that every bean in our blends contributes to coffee perfection.",
        name: "Sofia Costa",
        job: "Green Coffee Buyer & Sustainability Lead",
        img: "../assets/2.avif"
    }
];

let currentIndex = 0;

function updateContent(index) {
    const infoPeople = document.querySelector('.info-people');
    const p = infoPeople.querySelector('p');
    const h3 = infoPeople.querySelector('h3');
    const h6 = infoPeople.querySelector('h6');
    const img = infoPeople.querySelector('img');

    p.textContent = array[index].feedback;
    h3.textContent = array[index].name;
    h6.textContent = array[index].job;
    img.src = array[index].img;
}

function setupNavigation() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-rigth');

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + array.length) % array.length;
        updateContent(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % array.length;
        updateContent(currentIndex);
    });
}

setupNavigation();