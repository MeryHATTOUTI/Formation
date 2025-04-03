const epiList = [
    { image: "chaussures.png", title: "Chaussures de Sécurité", description: "Protection optimale pour vos pieds contre les chocs et perforations." },
    { image: "ensemble_vert.png", title: "Ensemble Vert", description: "Tenue complète assurant sécurité et confort au travail." },
    { image: "ensemble_bleu.png", title: "Ensemble Bleu", description: "Vêtements adaptés aux environnements exigeant propreté et protection." },
    { image: "tshirt_bleu.png", title: "T-Shirt Bleu", description: "T-shirt confortable et respirant pour un usage quotidien." },
    { image: "tshirt_vert.png", title: "T-Shirt Vert", description: "Idéal pour assurer un confort optimal lors du travail." },
    { image: "tshirt_noir.png", title: "Pull Noir", description: "Pull chaud et résistant pour conditions exigeantes." },
    { image: "bottes_blanches.png", title: "Les Bottes Blanches", description: "Bottes de sécurité antidérapantes pour milieux humides." },
    { image: "bottes_vertes.png", title: "Les Bottes Vertes", description: "Bottes adaptées aux zones glissantes et de travail." },
    { image: "gilet.png", title: "Gilet", description: "Gilet haute visibilité pour assurer une meilleure sécurité." },
    { image: "ecran_facial.png", title: "Écran Facial avec Serre-Tête", description: "Protection contre les projections et éclats dangereux." },
    { image: "gants_coupure.png", title: "Gants Anti-Coupure", description: "Protection contre les coupures et objets tranchants." },
    { image: "lunettes.png", title: "Lunettes de Protection", description: "Lunettes robustes contre éclats et produits chimiques." },
    { image: "gants_rouges_sale.png", title: "Gants Rouges Zone Sale", description: "Gants adaptés aux zones de travail contaminées." },
    { image: "gants_rouges_propre.png", title: "Gants Rouges Zone Propre", description: "Gants dédiés aux zones nécessitant hygiène stricte." },
    { image: "tablier.png", title: "Tablier", description: "Tablier imperméable et résistant pour la protection." },
    { image: "casquette.png", title: "Casquette", description: "Casquette de protection pour compléter votre tenue." },
    { image: "tenues_impermeables.png", title: "Tenues Imperméables", description: "Vêtements résistants à l’eau et aux liquides." }
];

let currentIndex = 0;
const epiImage = document.getElementById("epi-image");
const epiTitle = document.getElementById("epi-title");
const epiDescription = document.getElementById("epi-description");

function updateEpi(index) {
    epiImage.src = epiList[index].image;
    epiTitle.textContent = epiList[index].title;
    epiDescription.textContent = epiList[index].description;
}

document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex === 0) ? epiList.length - 1 : currentIndex - 1;
    updateEpi(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex === epiList.length - 1) ? 0 : currentIndex + 1;
    updateEpi(currentIndex);
});