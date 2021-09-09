const searchBox = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const initialTexts = document.querySelector('.initial')

const Cards = async function() {
  const response = await fetching('https://api.tvmaze.com/search/shows?q=', searchBox.value);

  searchBox.value = '';
  let datas = '';
  response.forEach(data => datas += addToCard(data))

  initialTexts.remove();
  const cardsWrapper = document.querySelector('.cards-wrapper');
  cardsWrapper.innerHTML = datas;
}

const fetching = async function(url, value) {
  try {
    return await fetch(url + value)
            .then(response => response.json())
            .then(response => response);
  } catch (err) {
    console.log('ini errornya', err);
  }
}

const addToCard = data => {
  // ? The card HAS imdb id
  if (data.show.externals.imdb) {
    if (data.show.image) {
      if(data.show.image.original) {
        return cardOriginalImageImdbAvailable(data)
      }
      return cardMediumImageImdbAvailable(data)
    }
    return cardNoImageImdbAvailable(data)
  }

  // ? The card HAS NO imdb id
  if (data.show.image) {
    if(data.show.image.original) {
      return cardOriginalImageAvailable(data)
    }
    return cardMediumImageAvailable(data)
  }

  // ? The card HAS NO imdb id AND image
  return cardNoImageAvailable(data)
}

const showModal = async function(imdbID) {
  const response = await fetching('https://api.tvmaze.com/lookup/shows?imdb=', imdbID);
  let modal = addToModal(response);

  const modalBox = document.querySelector('.modal-content');
  modalBox.innerHTML = modal;
}

const addToModal = data => {
  if(data.externals.imdb) {
    if (data.image) {
      if(data.image.original) {
        if(data.network) {
          return modalNetworkImdbOriginal(data)
        }
        return modalNoNetworkImdbOriginal(data)
      }
      if(data.network) {
        return modalNetworkImdbMedium(data)
      }
      return modalNoNetworkImdbMedium(data)
    }
    if (data.network) {
      return modalNetworkImdbNoImage(data)
    }
    return modalNoNetworkImdbNoImage(data)
  }
}

searchButton.addEventListener('click', Cards)
document.addEventListener('click', function(element) {
  if (element.target.classList.contains('more-details-button')) {
    // console.log('masuk if')
    const imdbID = element.target.dataset.imdbid;
    // const imdbID = moreDetailsButton.dataset.imdbid;
    showModal(imdbID);
  }
})

// ! Functions for cards
const cardOriginalImageImdbAvailable = (data) => {
  return `<div class="card bg-light">
            <div class="card-image">
              <img src="${data.show.image.original}" alt="Cover of ${data.show.name}">
            </div>
            <div class="bottom-card-elements">
              <div class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </div>
              <div class="bottom-card">
                <div class="leftside">
                  <div class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </div>
                  <div class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </div>
                </div>
                <div class="rightside">
                  <div class="card-button">
                    <button class="more-details-button" data-imdbid="${data.show.externals.imdb}" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`
}

const cardOriginalImageAvailable = (data) => {
  return `<div class="card bg-light">
            <div class="card-image">
              <img src="${data.show.image.original}" alt="Cover of ${data.show.name}">
            </div>
            <div class="bottom-card-elements">
              <div class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </div>
              <div class="bottom-card">
                <div class="leftside">
                  <div class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </div>
                  <div class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </div>
                </div>
                <!-- <div class="rightside">
                  <div class="card-button">
                    <button class="more-details-button" data-imdbid="" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </div>
                </div> -->
              </div>
            </div>
          </div>`
}

const cardMediumImageImdbAvailable = (data) => {
  return `<div class="card bg-light">
            <div class="card-image">
              <img src="${data.show.image.medium}" alt="Cover of ${data.show.name}">
            </div>
            <div class="bottom-card-elements">
              <div class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </div>
              <div class="bottom-card">
                <div class="leftside">
                  <div class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </div>
                  <div class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </div>
                </div>
                <div class="rightside">
                  <div class="card-button">
                    <button class="more-details-button" data-imdbid="${data.show.externals.imdb}" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`
}

const cardMediumImageAvailable = (data) => {
  return `<div class="card bg-light">
            <div class="card-image">
              <img src="${data.show.image.medium}" alt="Cover of ${data.show.name}">
            </div>
            <div class="bottom-card-elements">
              <div class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </div>
              <div class="bottom-card">
                <div class="leftside">
                  <div class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </div>
                  <div class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </div>
                </div>
                <!-- <div class="rightside">
                  <div class="card-button">
                    <button class="more-details-button" data-imdbid="" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </div>
                </div> -->
              </div>
            </div>
          </div>`
}

const cardNoImageImdbAvailable = (data) => {
  return `<div class="card bg-light">
            <div class="card-image">
              <img src="" alt="Cover of ${data.show.name}">
            </div>
            <div class="bottom-card-elements">
              <div class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </div>
              <div class="bottom-card">
                <div class="leftside">
                  <div class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </div>
                  <div class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </div>
                </div>
                <div class="rightside">
                  <div class="card-button">
                    <button type="button" class="more-details-button" data-imdbid="${data.show.externals.imdb}" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`
}

const cardNoImageAvailable = (data) => {
  return `<div class="card bg-light">
            <div class="card-image">
              <img src="" alt="Cover of ${data.show.name}">
            </div>
            <div class="bottom-card-elements">
              <div class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </div>
              <div class="bottom-card">
                <div class="leftside">
                  <div class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </div>
                  <div class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </div>
                </div>
                <!-- <div class="rightside">
                  <div class="card-button">
                    <button type="button" class="more-details-button" data-imdbid="" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </div>
                </div> -->
              </div>
            </div>
          </div>`
}

// ! Functions for modals
const modalNetworkImdbOriginal = (data) => {
  return `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- ! START BODY -->
          <div class="modal-body modal-details-contents">
            <div class="modal-details-image">
              <img src="${data.image.original}" alt="Cover of ${data.name}">
            </div>
            <div class="modal-details-info container-fluid">
              <div class="info-keys">
                <div class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p class="key-info"><strong>Premiered</strong></p>
                </div>
                <div class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p class="key-info"><strong>Status</strong></p>
                </div>
                <div class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p class="key-info"><strong>Rating</strong></p>
                </div>
                <div class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p class="key-info"><strong>Genre(s)</strong></p>
                </div>
                <div class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p class="key-info"><strong>Channel(s)</strong></p>
                </div>
                <div class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                  <p class="key-info"><strong>Summary</strong></p>
                </div>
              </div>
              <!-- ! INFO -->
              <div class="info-details">
                <div class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p>${data.status}</p>
                </div>
                <div class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p>${data.rating.average}</p>
                </div>
                <div class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p>${data.network.name}</p>
                </div>
                <div class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                  ${data.summary}
                </div>
              </div>
            </div>
          </div>`
}

const modalNoNetworkImdbOriginal = (data) => {
  return `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- ! START BODY -->
          <div class="modal-body modal-details-contents">
            <div class="modal-details-image">
              <img src="${data.image.original}" alt="Cover of ${data.name}">
            </div>
            <div class="modal-details-info container-fluid">
              <div class="info-keys">
                <div class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p class="key-info"><strong>Premiered</strong></p>
                </div>
                <div class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p class="key-info"><strong>Status</strong></p>
                </div>
                <div class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p class="key-info"><strong>Rating</strong></p>
                </div>
                <div class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p class="key-info"><strong>Genre(s)</strong></p>
                </div>
                <div class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p class="key-info"><strong>Channel(s)</strong></p>
                </div>
                <div class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                  <p class="key-info"><strong>Summary</strong></p>
                </div>
              </div>
              <!-- ! INFO -->
              <div class="info-details">
                <div class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p>${data.status}</p>
                </div>
                <div class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p>${data.rating.average}</p>
                </div>
                <div class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p>null</p>
                </div>
                <div class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                  ${data.summary}
                </div>
              </div>
            </div>
          </div>`
}

const modalNetworkImdbMedium = (data) => {
  return `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- ! START BODY -->
          <div class="modal-body modal-details-contents">
            <div class="modal-details-image">
              <img src="${data.image.medium}" alt="Cover of ${data.name}">
            </div>
            <div class="modal-details-info container-fluid">
              <div class="info-keys">
                <div class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p class="key-info"><strong>Premiered</strong></p>
                </div>
                <div class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p class="key-info"><strong>Status</strong></p>
                </div>
                <div class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p class="key-info"><strong>Rating</strong></p>
                </div>
                <div class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p class="key-info"><strong>Genre(s)</strong></p>
                </div>
                <div class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p class="key-info"><strong>Channel(s)</strong></p>
                </div>
                <div class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                  <p class="key-info"><strong>Summary</strong></p>
                </div>
              </div>
              <!-- ! INFO -->
              <div class="info-details">
                <div class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p>${data.status}</p>
                </div>
                <div class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p>${data.rating.average}</p>
                </div>
                <div class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p>${data.network.name}</p>
                </div>
                <div class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                  ${data.summary}
                </div>
              </div>
            </div>
          </div>`
}

const modalNoNetworkImdbMedium = (data) => {
  return `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- ! START BODY -->
          <div class="modal-body modal-details-contents">
            <div class="modal-details-image">
              <img src="${data.image.medium}" alt="Cover of ${data.name}">
            </div>
            <div class="modal-details-info container-fluid">
              <div class="info-keys">
                <div class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p class="key-info"><strong>Premiered</strong></p>
                </div>
                <div class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p class="key-info"><strong>Status</strong></p>
                </div>
                <div class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p class="key-info"><strong>Rating</strong></p>
                </div>
                <div class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p class="key-info"><strong>Genre(s)</strong></p>
                </div>
                <div class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p class="key-info"><strong>Channel(s)</strong></p>
                </div>
                <div class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                  <p class="key-info"><strong>Summary</strong></p>
                </div>
              </div>
              <!-- ! INFO -->
              <div class="info-details">
                <div class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p>${data.status}</p>
                </div>
                <div class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p>${data.rating.average}</p>
                </div>
                <div class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p>null</p>
                </div>
                <div class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                  ${data.summary}
                </div>
              </div>
            </div>
          </div>`
}

const modalNetworkImdbNoImage = (data) => {
  return `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- ! START BODY -->
          <div class="modal-body modal-details-contents">
            <div class="modal-details-image">
              <img src="" alt="Cover of ${data.name}">
            </div>
            <div class="modal-details-info container-fluid">
              <div class="info-keys">
                <div class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p class="key-info"><strong>Premiered</strong></p>
                </div>
                <div class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p class="key-info"><strong>Status</strong></p>
                </div>
                <div class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p class="key-info"><strong>Rating</strong></p>
                </div>
                <div class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p class="key-info"><strong>Genre(s)</strong></p>
                </div>
                <div class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p class="key-info"><strong>Channel(s)</strong></p>
                </div>
                <div class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                  <p class="key-info"><strong>Summary</strong></p>
                </div>
              </div>
              <!-- ! INFO -->
              <div class="info-details">
                <div class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p>${data.status}</p>
                </div>
                <div class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p>${data.rating.average}</p>
                </div>
                <div class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p>${data.network.name}</p>
                </div>
                <div class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                  ${data.summary}
                </div>
              </div>
            </div>
          </div>`
}

const modalNoNetworkImdbNoImage = (data) => {
  return `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- ! START BODY -->
          <div class="modal-body modal-details-contents">
            <div class="modal-details-image">
              <img src="" alt="Cover of ${data.name}">
            </div>
            <div class="modal-details-info container-fluid">
              <div class="info-keys">
                <div class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p class="key-info"><strong>Premiered</strong></p>
                </div>
                <div class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p class="key-info"><strong>Status</strong></p>
                </div>
                <div class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p class="key-info"><strong>Rating</strong></p>
                </div>
                <div class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p class="key-info"><strong>Genre(s)</strong></p>
                </div>
                <div class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p class="key-info"><strong>Channel(s)</strong></p>
                </div>
                <div class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                  <p class="key-info"><strong>Summary</strong></p>
                </div>
              </div>
              <!-- ! INFO -->
              <div class="info-details">
                <div class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                  <p>${data.status}</p>
                </div>
                <div class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                  <p>${data.rating.average}</p>
                </div>
                <div class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                  <p>${data.premiered}</p>
                </div>
                <div class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                  <p>null</p>
                </div>
                <div class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                  ${data.summary}
                </div>
              </div>
            </div>
          </div>`
}