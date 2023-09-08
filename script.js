// JavaScript code to handle the slideshow functionality

// Define the content for each slide
const slides = [
    {
        image: "images/AI.jpg",
        title: "Machine Learning Project",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis esse, magni expedita soluta asperiores. Dolores doloremque voluptatibus odit corporis esse facere, incidunt doloribus suscipit nostrum maiores fugiat, sapiente reprehenderit?",
    },
    {
        image: "images/augmented.jpg",
        title: "Augmented Reality Project",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis esse, magni expedita soluta asperiores. Dolores doloremque voluptatibus odit corporis esse facere, incidunt doloribus suscipit nostrum maiores fugiat, sapiente reprehenderit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis esse, magni expedita soluta asperiores. Dolores doloremque voluptatibus odit corporis esse facere, incidunt doloribus suscipit nostrum maiores fugiat, sapiente reprehenderit?",
    },
    {
        image: "images/webdev.jpg",
        title: "Website Development Project",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis esse, magni expedita soluta asperiores. Dolores doloremque voluptatibus odit corporis esse facere, incidunt doloribus suscipit nostrum maiores fugiat, sapiente reprehenderit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis esse, magni expedita soluta asperiores. Dolores doloremque voluptatibus odit corporis esse facere, incidunt doloribus suscipit nostrum maiores fugiat, sapiente reprehenderit?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis esse, magni expedita soluta asperiores. Dolores doloremque voluptatibus odit corporis esse facere, incidunt doloribus suscipit nostrum maiores fugiat, sapiente reprehenderit?",
    },
];

let currentIndex = 0; // Initialize the index of the current slide

const imageContainer = document.querySelector(".image-container");
const projectDetails = document.querySelector(".project-details");

function updateSlide(index) {
    const currentSlide = slides[index];
    imageContainer.innerHTML = `<img src="${currentSlide.image}" alt="${currentSlide.title}">`;
    projectDetails.innerHTML = `
        <h2>${currentSlide.title}</h2>
        <p>${currentSlide.description}</p>
    `;
}

updateSlide(currentIndex); // Initial display of the first slide

document.getElementById("prevButton").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Handle looping
    updateSlide(currentIndex);
});

document.getElementById("nextButton").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length; // Handle looping
    updateSlide(currentIndex);
});
