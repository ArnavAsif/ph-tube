const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
};
const displayCategories = (categories) => {

    const buttonContainer = document.getElementById('categories')

    categories.forEach(item => {
        // making button api
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        // button adding
        buttonContainer.append(button)
    })
}

const videoLoader = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch((error) => console.log(error))
};

const displayVideo = (videos) => {
    videos.forEach(video => {

    })
};

videoLoader();
loadCategories();