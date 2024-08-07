export function createMarcup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        dowloads,
      }) => `
        <li class="gallery-item">
        <div class="gallery">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        <ul class="search-list">
        <li class="info"><span class="info-item">Likes</span>${likes}</li>
        <li class="info"><span class="info-item">Views</span>${views}</li>
        <li class="info"><span class="info-item">Comments</span>${comments}</li>
        <li class="info"><span class="info-item">Dowloads</span>${dowloads}</li>
        </ul>
        </a>
        </div>
        </li>`
    )
    .join('');
}
