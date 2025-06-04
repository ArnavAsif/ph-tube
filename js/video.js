// get time function 


function getTime(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return ` ${hour} hour ${minute} minutes ${remainingSecond} second ago`;
}

// onclick all button
function displayAll() {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
        .then(res => res.json())
        .then(data => {
            // ******* button active removing *****//
            activeRemover();
            
            // ******* button active added *****//   
            const activeBtn = document.getElementById('all-btn');
            activeBtn.classList.add('active')
            displayVideo(data.videos)})
        .catch((error) => console.log(error))
}

// onClick function selected
const activeRemover = ()=>{
    const buttons =  document.getElementsByClassName('active-remover')
    console.log(buttons)
    for(const btn of buttons ){
        btn.classList.remove('active')
    }
}

function displaySelectedProperties(id) {
    // alert(id)

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {

            // ******* button active removing *****//
            activeRemover();
            
            // ******* button active added *****//   
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add('active')

            displayVideo(data.category)
        })
        .catch((error) => console.log(error))
}


/***********************         categories button loader start         ****************/ 

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
        const button = document.createElement('div');
        button.innerHTML = `
        <button id="btn-${item.category_id}" onclick="displaySelectedProperties(${item.category_id})" class="btn active-remover">
        ${item.category}
        </button>
        `

        // button adding
        buttonContainer.append(button)
    })
}
/***********************         categories button loader end         ****************/ 



/***********************         video loader start         ****************/ 
const videoLoader = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch((error) => console.log(error))
};

const displayVideo = (videos) => {
    const newVideoSection = document.getElementById('video');
    newVideoSection.innerHTML = "";
    if(videos.length === 0){
        newVideoSection.classList.remove('grid')
        newVideoSection.innerHTML =`
        <div class="gap-5 flex flex-col justify-center items-center mt-10">
            <img class="w-52 h-52" src="logos/Icon.png">
            <p> NO Videos Right now
            </p>
        </div>
        </di/v>
        
        `
    }
    else {
        newVideoSection.classList.add('grid')
    }
    videos.forEach(video => {
        const div = document.createElement('div');
        div.innerHTML =
            `
        <figure class="h-[200px] relative">
            <img class="rounded-xl w-full h-full object-cover "
            src= ${video.thumbnail}
            alt="Shoes" />
            ${video.others.posted_date?.length === 0 ? '' : `<span class="absolute right-2 bottom-2 bg-black text-white p-2 rounded">${getTime(video.others.posted_date)}</span>`}
            
        </figure>
        <div class="py-3 flex gap-3">
            <div>
            <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture} />
            </div>

            <div>
                <h4 class="font-semibold text-xl ">${video.title} </h4>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${video.authors[0].profile_name} </p>
                        ${video.authors[0].verified === true ? `<img class="w-5 h-5 object-cover" src="logos/icons8-verified-badge-48.png" />` : ''}
                    </div>
                 <p>${video.others.views}</p>   
            </div> 
            
            
            
        </div>
        `
        newVideoSection.append(div)
    })
};
/***********************         video loader end         ****************/ 

loadCategories();
videoLoader();