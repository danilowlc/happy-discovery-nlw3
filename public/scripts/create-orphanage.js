
const coordenadas = [-5.8304277,-35.2258358]
//create map
const mymap = L.map('mapid').setView(coordenadas, 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;
//create and add marker
mymap.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && mymap.removeLayer(marker)

    //add icon to layer
    marker = L.marker([lat, lng], { icon }).addTo(mymap)
})

// add field photos
function addPhotoFields() {
    // pegar o container de fotos 'new-upload' #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar fotos 'new-upload'
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada
    const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio
    const input = newfieldContainer.children[0]
    if (input.value == '') {
        return
    }
    //limpando o campo antes de adicionar ao container de imagens
    input.value = ''

    //adicionar o clone ao container de #images
    container.appendChild(newfieldContainer)

}


// delete field photos
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        //limpando o campo
        span.parentNode.children[0].value = ''
        return
    }

    //deletar o campo
    span.parentNode.remove()

}

//selecionar sim ou nao
function toggleSelect(event){
    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar a class .active no selecionado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden com o valor selecinado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validate(event) {

    //validar se lat e lng estao preenchidos
    event.preventDefault()
    alert('Selecione um ponto no mapa')
}