// get time function 


function getTime(time) {
    const hour =parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return ` ${hour} hour ${minute} minutes ${remainingSecond} second ago`;
}



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

// {
//       "category_id": "1001",
//       "video_id": "aaab",
//       "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//       "title": "Midnight Serenade",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//           "profile_name": "Noah Walker",
//           "verified": false
//         }
//       ],
//       "others": {
//         "views": "543K",
//         "posted_date": ""
//       }

const videoLoader = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch((error) => console.log(error))
};

const displayVideo = (videos) => {
    const newVideoSection = document.getElementById('video');
    videos.forEach(video => {
        const div = document.createElement('div');
        div.innerHTML =
            `
        <figure class="h-[200px] relative">
            <img class="rounded-xl w-full h-full object-cover "
            src= ${video.thumbnail}
            alt="Shoes" />
            ${video.others.posted_date?.length === 0 ? '': `<span class="absolute right-2 bottom-2 bg-black text-white p-2 rounded">${getTime(video.others.posted_date)}</span>`}
            
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


loadCategories();
videoLoader();