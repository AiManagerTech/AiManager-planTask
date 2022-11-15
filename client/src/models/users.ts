// Path: client/src/models/index.ts

export interface user {
  uid: number;
  name: string;
  alias: string;
  role: 'subscriber' | 'editor' | 'admin' | 'owner' | 'superadmin';
  // role :
  // El rol subscriber puede únicamente leer (read).
  // El rol editor puede actualizar (update).
  // El rol admin puede crear y eliminar (create, delete) en franquicias asignadas.
  // El rol owner puede crear y eliminar (create, delete) en todas las franquisias de la marca, además de los usuarios y las formas de pago.
  // El rol superadmin puede crear y eliminar (create, delete) todos.
}

// Obtener roles de usuario
service cloud.firestore {
  match/databases/{database}/documents {
    match/NOMBREDECOLLECTION{
     function getRole(role) {
       return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.roles[role]
      }
      allow read: if getRole('subscriber') == true;
      allow update: if getRole('editor') == true;
      allow create, delete: if getRole('admin'||'owner'||'superadmin') == true;
    }
    match /{document=**} {
      allow read, write: if (request.auth.uid != null);
    }
  }
}

//  llevar a otro documento

export interface Survey {}

export interface SurveyResponse {}

export interface SurveyResponseAnswer {}
