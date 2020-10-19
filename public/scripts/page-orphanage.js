// Configuracao do mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
const coordenadas = [
    document.querySelector('span[data-lat]').dataset.lat,
    document.querySelector('span[data-LNG]').dataset.lng
]

//create map
const mymap = L.map('mapid', options).setView(coordenadas, 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and add marker
L.marker(coordenadas, {icon})
    .addTo(mymap)
    .openPopup();


//image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(b=>{
        b.classList.remove('active')
    })

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classes active para este botao
    button.classList.add('active')
    
}