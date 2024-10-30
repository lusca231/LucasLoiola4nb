export interface User {
  id: number;
  name: string;
  email: string;
  passwordhash: string; // Armazenar o hash da senha
}
