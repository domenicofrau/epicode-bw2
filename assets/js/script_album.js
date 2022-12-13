var requestOptions = { method: 'GET', redirect: 'follow' };


function getArtist(id) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("Artista: ", result)
      })
      .catch(error => console.log('error', error));
    
}

function getAlbum(id) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log("Album: ",result)
    })
    .catch(error => console.log('error', error));
}

function getArtisTopTrack(id,limit) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=${limit}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log("Top: ",result)
    })
    .catch(error => console.log('error', error));
}

function search(key) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${key}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log("Ricerca: ",result)
    })
    .catch(error => console.log('error', error));
}

// getArtist(412)
// getArtisTopTrack(412,5)
// getAlbum(75621062)
// search("queen")
