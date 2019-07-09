const blocGerant = document.getElementById('gerant');
const blocServeurs = document.getElementById('serveurs');
const blocCuisinne = document.getElementById('cuisinne');
const blocAutre = document.getElementById('autre');

function fetchPeople() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "./personnel.json", true);
    xhr.onreadystatechange = (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(e.currentTarget.response)
            let people = JSON.parse(e.currentTarget.response);
            insertPeople(people);
        }
    };
    xhr.send();
}
function insertPeople(peopleJson) {

    for (let person in peopleJson) {
        
        let monImage = document.createElement('img');
        monImage.setAttribute('class', '.avatarPersonnel')

        switch (peopleJson[person].poste) {
            case 'gerant' :
                blocGerant.appendChild(monImage);
                monImage.setAttribute('src', `url('./images/${peopleJson[person].avatar}')`);
                console.log(blocGerant);
                break

            case 'service en salle' :
                blocServeurs.appendChild(monImage);
                monImage.setAttribute('src', `url(${peopleJson[person].avatar})`);
                console.log(blocServeurs);
                break

            case 'cuisinne' :
                blocCuisinne.appendChild(monImage);
                monImage.setAttribute('src', `url(${peopleJson[person].avatar})`);
                console.log(blocCuisinne);
                break

            default :
                blocAutre.appendChild(monImage);
                monImage.setAttribute('src', `url(${peopleJson[person].avatar})`);
                console.log(peopleJson[person].poste);
        }
    }
}

fetchPeople();