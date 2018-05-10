const imagesData = [
  { src: "img/photo_paris/photo1.jpg", alt: "photo1", legend: " Angle de la rue de Charras et du Boulevard Haussmann" },
  { src: "img/photo_paris/photo2.jpg", alt: "photo2", legend: " Coucher de soleil en automne" },
  { src: "img/photo_paris/photo3.jpg", alt: "photo3", legend: " Paris est une fête Ernest Hemingway" },
  { src: "img/photo_paris/photo4.jpg", alt: "photo4", legend: " Vue sur la Tour Eiffel" },
  { src: "img/photo_paris/photo5.jpg", alt: "photo5", legend: " Vue panoramique sur Paris" },
  { src: "img/photo_paris/photo6.jpg", alt: "photo6", legend: " La Dame de Fer" },
  { src: "img/photo_paris/photo7.jpg", alt: "photo7", legend: " La Seine et le Pont d'Alexandre III" },
  { src: "img/photo_paris/photo8.jpg", alt: "photo8", legend: " Vue sur Le Louvre et sa Pyramide" },
  { src: "img/photo_paris/photo9.jpg", alt: "photo9", legend: " Rosace de Notre Dame de Paris" },
  { src: "img/photo_paris/photo10.jpg", alt: "photo10", legend: " Les péniches du bord de Seine" },
  { src: "img/photo_paris/photo11.jpg", alt: "photo11", legend: " l'Île de la Cité" },
  { src: "img/photo_paris/photo12.jpg", alt: "photo12", legend: " le Pont Alexandre III" },
  { src: "img/photo_paris/photo13.jpg", alt: "photo13", legend: " Quai de Montebello" },
  { src: "img/photo_paris/photo14.jpg", alt: "photo14", legend: " La Dame de Fer" },
  { src: "img/photo_paris/photo15.jpg", alt: "photo15", legend: " Mairie du 12ème arrondissement" },
  { src: "img/photo_paris/photo16.jpg", alt: "photo16", legend: " l'Île de la Cité" },
  { src: "img/photo_paris/photo17.jpg", alt: "photo17", legend: " Paris de nuit" },
  { src: "img/photo_paris/photo18.jpg", alt: "photo18", legend: " La Conciergerie de l'Île de la Cité" },
  { src: "img/photo_paris/photo19.jpg", alt: "photo19", legend: " Vue sur le Champs de Mars et la Tour Eiffel" },
  { src: "img/photo_paris/photo20.jpg", alt: "photo20", legend: " Le Louvre hypnotique" },
  { src: "img/photo_paris/photo21.jpg", alt: "photo21", legend: " Pont Alexandre III de nuit" },
  { src: "img/photo_paris/photo22.jpg", alt: "photo22", legend: " Pont Alexandre III de jour" },
  { src: "img/photo_paris/photo23.jpg", alt: "photo23", legend: " Ici c'est Paris" },
  { src: "img/photo_paris/photo24.jpg", alt: "photo24", legend: " Avenue Charles de Gaulle menant à la Défense." },
  { src: "img/photo_paris/photo25.jpg", alt: "photo25", legend: " Gargouille de Notre-Dame de Paris" },
  { src: "img/photo_paris/photo26.jpg", alt: "photo26", legend: " Champs de Mars et sa Tour Eiffel" },
  { src: "img/photo_paris/photo27.jpg", alt: "photo27", legend: " Vue intérieur Printemps, boulevard Haussmann" },
  { src: "img/photo_paris/photo28.jpg", alt: "photo28", legend: " Paris est magique" },
  { src: "img/photo_paris/photo29.jpg", alt: "photo29", legend: " Arc de Triomphe" },
  { src: "img/photo_paris/photo30.jpg", alt: "photo30", legend: " la Grande Roue domine" },
  { src: "img/photo_paris/photo31.jpg", alt: "photo31", legend: " Notre Dame de Paris" },
  { src: "img/photo_paris/photo32.jpg", alt: "photo32", legend: " Opéra Garnier" },
  { src: "img/photo_paris/photo33.jpg", alt: "photo33", legend: " Basilique du Sacré Coeur" },
  { src: "img/photo_paris/photo34.jpg", alt: "photo34", legend: " Pont de l'Archevêché, le pont des amoureux" },
  { src: "img/photo_paris/photo35.jpg", alt: "photo35", legend: " l'Île de la Cité" },
  { src: "img/photo_paris/photo36.jpg", alt: "photo36", legend: " Jolie rue de Montmartre" },
  { src: "img/photo_paris/photo37.jpg", alt: "photo37", legend: " Fontaine de la Concorde, Place de la Concorde" },
  { src: "img/photo_paris/photo38.jpg", alt: "photo38", legend: " Le pont Alexandre III et sa vue sur l'Hôtel des Invalides - Musée de l'Armée" },
  { src: "img/photo_paris/photo39.jpg", alt: "photo39", legend: " Entrée du Musée du Louvre" },
  { src: "img/photo_paris/photo40.jpg", alt: "photo40", legend: " Vue sur l'esplanade du Trocadéro et de la Tour Eiffel" },
  { src: "img/photo_paris/photo41.jpg", alt: "photo41", legend: " Détail Tour Eiffel" },
  { src: "img/photo_paris/photo42.jpg", alt: "photo42", legend: " Fontaine de la Concorde, Place de la Concorde" },
  { src: "img/photo_paris/photo43.jpg", alt: "photo43", legend: " Avenue des Champs Elysée" },
  { src: "img/photo_paris/photo44.jpg", alt: "photo44", legend: " Café restaurant Esmeralda, 2 rue Cloître Notre-Dame" },
  { src: "img/photo_paris/photo45.jpg", alt: "photo45", legend: " Au Fournil, boulevard Voltaire" },
  { src: "img/photo_paris/photo46.jpg", alt: "photo46", legend: " Vue sur l'île Saint Louis" },
  { src: "img/photo_paris/photo47.jpg", alt: "photo47", legend: " Pont Napoléon" },
  { src: "img/photo_paris/photo48.jpg", alt: "photo48", legend: " l'Île de la Cité" },
  { src: "img/photo_paris/photo49.jpg", alt: "photo49", legend: " Vue panoramique de Paris" },
  { src: "img/photo_paris/photo50.jpg", alt: "photo50", legend: " Vue sur la butte Montmartre et son Sacré Coeur" },
  { src: "img/photo_paris/photo51.jpg", alt: "photo51", legend: " Notre-Dame de Paris" },
  { src: "img/photo_paris/photo52.jpg", alt: "photo52", legend: " Le jardin du Trocadéro et sa Tour Eiffel" },
  { src: "img/photo_paris/photo53.jpg", alt: "photo53", legend: " Pont Alexandre III" },
  { src: "img/photo_paris/photo54.jpg", alt: "photo54", legend: " Vue panoramique de Paris" },
  { src: "img/photo_paris/photo55.jpg", alt: "photo55", legend: " Vue panoramique au-dessus de Notre-Dame de Paris" },
  { src: "img/photo_paris/photo56.jpg", alt: "photo56", legend: " Péniche restaurant sur La Seine" },
]

//creation du template html
const createItems = img => {

  return `<div class="col-xs col-sm-6 col-md-4 col-lg-3">

            <a href="#" class="thumbnail">
              <img src="${img.src}" onclick="oppenDiapo(this.src)" alt="${img.alt}"/>
            </a>

            <p class="legende">${img.legend}</p>

          </div>`

}

  //ajout des information du tableau dans le template
  const createdItems = imagesData.map(createItems).join("")
  //selection du container
  const gallery = document.querySelector("#gallery")

//injection de la data dans le container
gallery.innerHTML = createdItems
