const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCatagories(data.categories))
        .catch((error) => console.log(error))
};
const displayCatagories = (categories) => {
    
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

loadCategories();