// Pegar a data agendada
const hourToCollect = document.querySelectorAll(".horario ul li a")

for(const hour of hourToCollect){
    hour.addEventListener("click", handleSelectedItem)
}

const collectdHour = document.querySelector("input[name=hora]")

let selectedhour = []

function handleSelectedItem(event){

    const hourA = event.target

    // Adicionar Classe

    hourA.classList.toggle("selected")
    const hourId = hourA.dataset.id

    // Verificar se exitem hora selecionada, se sim pegar a hora selecionada

    const alreadySelected = selectedhour.findIndex( hour => {
        const hourFound = hour == hourId
        return hourFound
    })
    
    // Se já estiver selecionado
    if(alreadySelected >= 0){

        // Tirar da seleção
        const filteredHour =  selectedhour.filter( hour => {
            const hourIsDiferrent = hour != hourId
            return hourIsDiferrent
        })

        selectedhour = filteredHour
    } 
    else{
        // colocando elemento no array
        selectedhour.push(hourId)
    }

    collectdHour.value = selectedhour

    
    
}
