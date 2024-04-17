async function iterateWithAsyncAwait(array) {
for (const value of array) {
setTimeout(() => {
    console.log(value)   
    
}, 1000);
}

}
const values = [1,2,3];
iterateWithAsyncAwait(values);
// creation d'une fonction assynchrone qui récupére les données a partir d'un API
// Fonction asynchrone qui simule la récupération de données à partir d'une API
async function waitCall() {
    try {
      // Supposons que nous récupérons des données après un délai de 2 secondes
      await new Promise(resolve => setTimeout(resolve, 2000));
      return ["Donnée 1", "Donnée 2", "Donnée 3"]; // Simulons des données récupérées de l'API
    } catch (error) {
      // En cas d'échec de la récupération des données, enregistrez un message d'erreur convivial
      console.error("Une erreur s'est produite lors de la récupération des données depuis l'API :", error);
      return []; // Retourner un tableau vide en cas d'échec
    }
  }
  
  // Fonction asynchrone qui itère sur les données et enregistre chaque valeur avec un délai de 1 seconde
  async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      // Attendez 1 seconde avant d'enregistrer la valeur
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
    }
  }
  
  // Utilisation de waitCall pour récupérer les données puis les enregistrer en utilisant iterateWithAsyncAwait
  async function processAPIData() {
    console.log("Récupération des données depuis l'API...");
    const data = await waitCall(); // Attendez la réponse de l'API
    if (data.length > 0) {
      console.log("Données récupérées :", data);
      console.log("Enregistrement des données avec un délai de 1 seconde entre chaque valeur :");
      await iterateWithAsyncAwait(data); // Enregistrez les données avec un délai de 1 seconde
    } else {
      console.log("Aucune donnée disponible à enregistrer.");
    }
  }
  
  // Appel de la fonction processAPIData pour commencer le processus
  processAPIData();
  // Fonction asynchrone qui enregistre un message après un délai de 1 seconde
async function logMessage(message) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(message);
  }
  
  // Fonction asynchrone qui appelle séquentiellement trois fonctions asynchrones distinctes
  async function chainedAsyncFunctions() {
    console.log("Démarrage des fonctions asynchrones...");
    
    // Chaîner les appels de fonctions en utilisant await
    await logMessage("Première fonction asynchrone terminée.");
    await logMessage("Deuxième fonction asynchrone terminée.");
    await logMessage("Troisième fonction asynchrone terminée.");
  
    console.log("Toutes les fonctions asynchrones ont été exécutées.");
  }
  
  // Appeler la fonction chainedAsyncFunctions pour commencer la chaîne d'exécution
  chainedAsyncFunctions();
  // Fonction asynchrone qui simule une requête à une API
async function apiRequest(endpoint) {
    // Supposons qu'une requête à l'API prend 2 secondes
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Retourne un objet simulé comme résultat de l'appel d'API
    return { endpoint, data: `Résultat de ${endpoint}` };
  }
  
  // Fonction asynchrone qui effectue deux appels d'API simultanément et enregistre les résultats combinés
  async function concurrentRequests() {
    console.log("Début des requêtes simultanées...");
  
    // Utilisation de Promise.all pour effectuer deux appels d'API simultanément
    const [result1, result2] = await Promise.all([
      apiRequest("endpoint1"),
      apiRequest("endpoint2")
    ]);
  
    // Enregistrement des résultats combinés une fois les deux demandes résolues
    console.log("Résultats combinés des requêtes :");
    console.log(result1);
    console.log(result2);
  }
  
  // Appel de la fonction concurrentRequests pour démarrer les demandes simultanées
  concurrentRequests();
  // Fonction asynchrone qui récupère les données à partir d'une URL
async function fetchData(url) {
    // Supposons qu'une requête à l'URL prend 2 secondes
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Retourne les données simulées récupérées de l'URL
    return `Données de ${url}`;
  }
  
  // Fonction asynchrone qui effectue des appels parallèles à partir d'un tableau d'URL
  async function parallelCalls(urls) {
    console.log("Début des appels parallèles...");
  
    // Utilisation de Promise.all pour récupérer les données de chaque URL simultanément
    const responses = await Promise.all(urls.map(url => fetchData(url)));
  
    // Enregistrement des réponses une fois que toutes les demandes sont terminées
    console.log("Réponses des appels parallèles :");
    responses.forEach((response, index) => {
      console.log(`Réponse ${index + 1}:`, response);
    });
  }
  
  // Tableau d'URL à partir desquelles les données doivent être récupérées simultanément
  const urls = ["https://example.com/api/1", "https://example.com/api/2", "https://example.com/api/3"];
  
  // Appel de la fonction parallelCalls pour démarrer les appels parallèles
  parallelCalls(urls);
  

  
  
