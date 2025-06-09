
import { db, ref, set, push, get, child } from './firebase.js';

// Exemple simple : ajouter un utilisateur
export function ajouterUtilisateur(nom, age) {
  const utilisateursRef = ref(db, 'utilisateurs');
  const newUserRef = push(utilisateursRef);
  set(newUserRef, {
    nom: nom,
    age: age
  });
}

// Exemple : récupérer les utilisateurs
export async function getUtilisateurs() {
  const utilisateursRef = ref(db);
  const snapshot = await get(child(utilisateursRef, 'utilisateurs'));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}
