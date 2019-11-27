
export default function GeneratePhotos(photos) {
    let outcome = photos.map((photo) => 
        `<div class='photo__container'>
            <img src=${photo.src.medium} alt=''/> 
            <div class="photo__details">
                <div>
                    <h4 class="photo__author">Author</h4>
                    <a class="photo__link" href=${photo.url}>
                        <h3 class="photo__photographer">${photo.photographer}</h3>
                    </a>
                </div>
            </div>
        </div>`
    );
    return outcome
}