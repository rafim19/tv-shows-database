const searchBox = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

const Cards = async function() {
  // console.log('masuk show cards');
  const response = await fetching('https://api.tvmaze.com/search/shows?q=', searchBox.value);
  // response.forEach(data => console.log(data))

  // console.log(response)
  // searchBox.value = '';
  let datas = '';
  response.forEach(data => datas += addToCard(data))

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
  // console.log(data.show.image.original)
  // console.log(data.show.externals.imdb)
  if (data.show.externals.imdb) {
    if (data.show.image) {
      if(data.show.image.original) {
        // console.log('masuk')
        return `<section class="card bg-light">
                <section class="card-image">
                  <img src="${data.show.image.original}" alt="Cover of ${data.show.name}">
                </section>
                <section class="bottom-card-elements">
                  <section class="details">
                    <h4>${data.show.name}</h4>
                    <h6>${data.show.premiered}</h6>
                  </section>
                  <section class="bottom-card">
                    <section class="leftside">
                      <section class="rating-icon">
                        <!-- ! INI ICON BINTANG UNTUK RATING -->
                        <img src="img/cards/star.png" alt="">
                      </section>
                      <section class="card-rating">
                        <!-- ! INI RATINGNYA BERAPA -->
                        <p>${data.show.rating.average}</p>
                      </section>
                    </section>
                    <section class="rightside">
                      <section class="card-button">
                        <button class="more-details-button" data-imdbid="${data.show.externals.imdb}" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                      </section>
                    </section>
                  </section>
                </section>
              </section>`
      }
      return `<section class="card bg-light">
                <section class="card-image">
                  <img src="${data.show.image.medium}" alt="Cover of ${data.show.name}">
                </section>
                <section class="bottom-card-elements">
                  <section class="details">
                    <h4>${data.show.name}</h4>
                    <h6>${data.show.premiered}</h6>
                  </section>
                  <section class="bottom-card">
                    <section class="leftside">
                      <section class="rating-icon">
                        <!-- ! INI ICON BINTANG UNTUK RATING -->
                        <img src="img/cards/star.png" alt="">
                      </section>
                      <section class="card-rating">
                        <!-- ! INI RATINGNYA BERAPA -->
                        <p>${data.show.rating.average}</p>
                      </section>
                    </section>
                    <section class="rightside">
                      <section class="card-button">
                        <button class="more-details-button" data-imdbid="${data.show.externals.imdb}" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                      </section>
                    </section>
                  </section>
                </section>
              </section>`
    }
    return `<section class="card bg-light">
              <section class="card-image">
                <img src="" alt="Cover of ${data.show.name}">
              </section>
              <section class="bottom-card-elements">
                <section class="details">
                  <h4>${data.show.name}</h4>
                  <h6>${data.show.premiered}</h6>
                </section>
                <section class="bottom-card">
                  <section class="leftside">
                    <section class="rating-icon">
                      <!-- ! INI ICON BINTANG UNTUK RATING -->
                      <img src="img/cards/star.png" alt="">
                    </section>
                    <section class="card-rating">
                      <!-- ! INI RATINGNYA BERAPA -->
                      <p>${data.show.rating.average}</p>
                    </section>
                  </section>
                  <section class="rightside">
                    <section class="card-button">
                      <button type="button" class="more-details-button" data-imdbid="${data.show.externals.imdb}" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                    </section>
                  </section>
                </section>
              </section>
            </section>`
  }
  if (data.show.image) {
    if(data.show.image.original) {
      return `<section class="card bg-light">
                <section class="card-image">
                  <img src="${data.show.image.original}" alt="Cover of ${data.show.name}">
                </section>
                <section class="bottom-card-elements">
                  <section class="details">
                    <h4>${data.show.name}</h4>
                    <h6>${data.show.premiered}</h6>
                  </section>
                  <section class="bottom-card">
                    <section class="leftside">
                      <section class="rating-icon">
                        <!-- ! INI ICON BINTANG UNTUK RATING -->
                        <img src="img/cards/star.png" alt="">
                      </section>
                      <section class="card-rating">
                        <!-- ! INI RATINGNYA BERAPA -->
                        <p>${data.show.rating.average}</p>
                      </section>
                    </section>
                    <!-- <section class="rightside">
                      <section class="card-button">
                        <button class="more-details-button" data-imdbid="" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                      </section>
                    </section> -->
                  </section>
                </section>
              </section>`
    }
    return `<section class="card bg-light">
              <section class="card-image">
                <img src="${data.show.image.medium}" alt="Cover of ${data.show.name}">
              </section>
              <section class="bottom-card-elements">
                <section class="details">
                  <h4>${data.show.name}</h4>
                  <h6>${data.show.premiered}</h6>
                </section>
                <section class="bottom-card">
                  <section class="leftside">
                    <section class="rating-icon">
                      <!-- ! INI ICON BINTANG UNTUK RATING -->
                      <img src="img/cards/star.png" alt="">
                    </section>
                    <section class="card-rating">
                      <!-- ! INI RATINGNYA BERAPA -->
                      <p>${data.show.rating.average}</p>
                    </section>
                  </section>
                  <!-- <section class="rightside">
                    <section class="card-button">
                      <button class="more-details-button" data-imdbid="" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                    </section>
                  </section> -->
                </section>
              </section>
            </section>`
  }
  return `<section class="card bg-light">
            <section class="card-image">
              <img src="" alt="Cover of ${data.show.name}">
            </section>
            <section class="bottom-card-elements">
              <section class="details">
                <h4>${data.show.name}</h4>
                <h6>${data.show.premiered}</h6>
              </section>
              <section class="bottom-card">
                <section class="leftside">
                  <section class="rating-icon">
                    <!-- ! INI ICON BINTANG UNTUK RATING -->
                    <img src="img/cards/star.png" alt="">
                  </section>
                  <section class="card-rating">
                    <!-- ! INI RATINGNYA BERAPA -->
                    <p>${data.show.rating.average}</p>
                  </section>
                </section>
                <!-- <section class="rightside">
                  <section class="card-button">
                    <button type="button" class="more-details-button" data-imdbid="" data-bs-toggle="modal" data-bs-target="#more-details-modal">More Details</button>
                  </section>
                </section> -->
              </section>
            </section>
          </section>`
}

const showModal = async function(imdbID) {
  // console.log('masuk bos')
  // console.log(this.response.show.averageRuntime)
  const response = await fetching('https://api.tvmaze.com/lookup/shows?imdb=', imdbID);
  // console.log(response);
  let modal = addToModal(response);
  // response.forEach(data => modal += addToModal(data))

  const modalBox = document.querySelector('.modal-content');
  modalBox.innerHTML = modal;
}

const addToModal = data => {
  // console.log(data);
  // console.log(data.name)
  if(data.externals.imdb) {
    if (data.image) {
      if(data.image.original) {
        if(data.network) {
          return `<section class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </section>
                  <!-- ! START BODY -->
                  <section class="modal-body modal-details-contents">
                    <section class="modal-details-image">
                      <img src="${data.image.original}" alt="Cover of ${data.name}">
                    </section>
                    <section class="modal-details-info container-fluid">
                      <section class="info-keys">
                        <section class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                          <p class="key-info"><strong>Premiered</strong></p>
                        </section>
                        <section class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                          <p class="key-info"><strong>Status</strong></p>
                        </section>
                        <section class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                          <p class="key-info"><strong>Rating</strong></p>
                        </section>
                        <section class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                          <p class="key-info"><strong>Genre(s)</strong></p>
                        </section>
                        <section class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                          <p class="key-info"><strong>Channel(s)</strong></p>
                        </section>
                        <section class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                          <p class="key-info"><strong>Summary</strong></p>
                        </section>
                      </section>
                      <!-- ! INFO -->
                      <section class="info-details">
                        <section class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                          <p>${data.premiered}</p>
                        </section>
                        <section class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                          <p>${data.status}</p>
                        </section>
                        <section class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                          <p>${data.rating.average}</p>
                        </section>
                        <section class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                          <p>${data.premiered}</p>
                        </section>
                        <section class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                          <p>${data.network.name}</p>
                        </section>
                        <section class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                          ${data.summary}
                        </section>
                      </section>
                    </section>
                  </section>`
        }
        return `<section class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </section>
                  <!-- ! START BODY -->
                  <section class="modal-body modal-details-contents">
                    <section class="modal-details-image">
                      <img src="${data.image.original}" alt="Cover of ${data.name}">
                    </section>
                    <section class="modal-details-info container-fluid">
                      <section class="info-keys">
                        <section class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                          <p class="key-info"><strong>Premiered</strong></p>
                        </section>
                        <section class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                          <p class="key-info"><strong>Status</strong></p>
                        </section>
                        <section class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                          <p class="key-info"><strong>Rating</strong></p>
                        </section>
                        <section class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                          <p class="key-info"><strong>Genre(s)</strong></p>
                        </section>
                        <section class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                          <p class="key-info"><strong>Channel(s)</strong></p>
                        </section>
                        <section class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                          <p class="key-info"><strong>Summary</strong></p>
                        </section>
                      </section>
                      <!-- ! INFO -->
                      <section class="info-details">
                        <section class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                          <p>${data.premiered}</p>
                        </section>
                        <section class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                          <p>${data.status}</p>
                        </section>
                        <section class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                          <p>${data.rating.average}</p>
                        </section>
                        <section class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                          <p>${data.premiered}</p>
                        </section>
                        <section class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                          <p>null</p>
                        </section>
                        <section class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                          ${data.summary}
                        </section>
                      </section>
                    </section>
                  </section>`
      }
      if(data.network) {
        return `<section class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>
                <!-- ! START BODY -->
                <section class="modal-body modal-details-contents">
                  <section class="modal-details-image">
                    <img src="${data.image.medium}" alt="Cover of ${data.name}">
                  </section>
                  <section class="modal-details-info container-fluid">
                    <section class="info-keys">
                      <section class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                        <p class="key-info"><strong>Premiered</strong></p>
                      </section>
                      <section class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                        <p class="key-info"><strong>Status</strong></p>
                      </section>
                      <section class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                        <p class="key-info"><strong>Rating</strong></p>
                      </section>
                      <section class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                        <p class="key-info"><strong>Genre(s)</strong></p>
                      </section>
                      <section class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                        <p class="key-info"><strong>Channel(s)</strong></p>
                      </section>
                      <section class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                        <p class="key-info"><strong>Summary</strong></p>
                      </section>
                    </section>
                    <!-- ! INFO -->
                    <section class="info-details">
                      <section class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                        <p>${data.premiered}</p>
                      </section>
                      <section class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                        <p>${data.status}</p>
                      </section>
                      <section class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                        <p>${data.rating.average}</p>
                      </section>
                      <section class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                        <p>${data.premiered}</p>
                      </section>
                      <section class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                        <p>${data.network.name}</p>
                      </section>
                      <section class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                        ${data.summary}
                      </section>
                    </section>
                  </section>
                </section>`
      }
      return `<section class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>
                <!-- ! START BODY -->
                <section class="modal-body modal-details-contents">
                  <section class="modal-details-image">
                    <img src="${data.image.medium}" alt="Cover of ${data.name}">
                  </section>
                  <section class="modal-details-info container-fluid">
                    <section class="info-keys">
                      <section class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                        <p class="key-info"><strong>Premiered</strong></p>
                      </section>
                      <section class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                        <p class="key-info"><strong>Status</strong></p>
                      </section>
                      <section class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                        <p class="key-info"><strong>Rating</strong></p>
                      </section>
                      <section class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                        <p class="key-info"><strong>Genre(s)</strong></p>
                      </section>
                      <section class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                        <p class="key-info"><strong>Channel(s)</strong></p>
                      </section>
                      <section class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                        <p class="key-info"><strong>Summary</strong></p>
                      </section>
                    </section>
                    <!-- ! INFO -->
                    <section class="info-details">
                      <section class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                        <p>${data.premiered}</p>
                      </section>
                      <section class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                        <p>${data.status}</p>
                      </section>
                      <section class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                        <p>${data.rating.average}</p>
                      </section>
                      <section class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                        <p>${data.premiered}</p>
                      </section>
                      <section class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                        <p>null</p>
                      </section>
                      <section class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                        ${data.summary}
                      </section>
                    </section>
                  </section>
                </section>`
    }
    if (data.network) {
      return `<section class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </section>
              <!-- ! START BODY -->
              <section class="modal-body modal-details-contents">
                <section class="modal-details-image">
                  <img src="" alt="Cover of ${data.name}">
                </section>
                <section class="modal-details-info container-fluid">
                  <section class="info-keys">
                    <section class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                      <p class="key-info"><strong>Premiered</strong></p>
                    </section>
                    <section class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                      <p class="key-info"><strong>Status</strong></p>
                    </section>
                    <section class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                      <p class="key-info"><strong>Rating</strong></p>
                    </section>
                    <section class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                      <p class="key-info"><strong>Genre(s)</strong></p>
                    </section>
                    <section class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                      <p class="key-info"><strong>Channel(s)</strong></p>
                    </section>
                    <section class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                      <p class="key-info"><strong>Summary</strong></p>
                    </section>
                  </section>
                  <!-- ! INFO -->
                  <section class="info-details">
                    <section class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                      <p>${data.premiered}</p>
                    </section>
                    <section class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                      <p>${data.status}</p>
                    </section>
                    <section class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                      <p>${data.rating.average}</p>
                    </section>
                    <section class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                      <p>${data.premiered}</p>
                    </section>
                    <section class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                      <p>${data.network.name}</p>
                    </section>
                    <section class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                      ${data.summary}
                    </section>
                  </section>
                </section>
              </section>`
    }
    return `<section class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </section>
              <!-- ! START BODY -->
              <section class="modal-body modal-details-contents">
                <section class="modal-details-image">
                  <img src="" alt="Cover of ${data.name}">
                </section>
                <section class="modal-details-info container-fluid">
                  <section class="info-keys">
                    <section class="key-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                      <p class="key-info"><strong>Premiered</strong></p>
                    </section>
                    <section class="key-show-status"> <!-- MASIH BERJALAN GAK -->
                      <p class="key-info"><strong>Status</strong></p>
                    </section>
                    <section class="key-show-rating"> <!-- RATING TV SHOWNYA -->
                      <p class="key-info"><strong>Rating</strong></p>
                    </section>
                    <section class="key-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                      <p class="key-info"><strong>Genre(s)</strong></p>
                    </section>
                    <section class="key-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                      <p class="key-info"><strong>Channel(s)</strong></p>
                    </section>
                    <section class="key-summary"> <!-- SUMMARY / SINOPSIS -->
                      <p class="key-info"><strong>Summary</strong></p>
                    </section>
                  </section>
                  <!-- ! INFO -->
                  <section class="info-details">
                    <section class="info-premiered"> <!-- PERTAMA KALI TAYANG KAPAN -->
                      <p>${data.premiered}</p>
                    </section>
                    <section class="info-show-status"> <!-- MASIH BERJALAN GAK -->
                      <p>${data.status}</p>
                    </section>
                    <section class="info-show-rating"> <!-- RATING TV SHOWNYA -->
                      <p>${data.rating.average}</p>
                    </section>
                    <section class="info-genres"> <!-- GENRE-GENRE TV SHOWNYA -->
                      <p>${data.premiered}</p>
                    </section>
                    <section class="info-channel"> <!-- DITAYANGIN DI CHANNEL APA -->
                      <p>null</p>
                    </section>
                    <section class="info-summary"> <!-- SUMMARY / SINOPSIS -->
                      ${data.summary}
                    </section>
                  </section>
                </section>
              </section>`
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