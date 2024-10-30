import { Pool } from "pg";
import pool from "../config/database";
import { User } from "../models/userModel";

export class UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar usuário pelo email
  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    console.log(rows[0]);
    console.log(rows[0].passwordhash);
    return rows[0] || null;
  }

  // Método para adicionar um novo usuário com senha hashed
  async addUser(
    name: string,
    email: string,
    passwordHash: string,
  ): Promise<User> {
    const queryText =
      "INSERT INTO users(name, email, passwordHash) VALUES($1, $2, $3) RETURNING *";
    const { rows } = await this.pool.query(queryText, [
      name,
      email,
      passwordHash,
    ]);
    return rows[0];
  }
  async getAllUsers() {
    // ... logic to retrieve all users ...
    return []; // Replace with the actual logic
  }
}
