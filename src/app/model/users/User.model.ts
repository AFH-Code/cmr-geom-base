export class User {

    constructor(
      public id: BigInteger,
      public nom: string,
      public prenom: string,
      public username: string,
      public email: string,
      public telephone: string,
      public roles: string,
      public statut: boolean,
      public adresse: string,
      public sexe: string
    ) {}
    
}