import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUserTable1674586068170 } from "./database/migrations/1674586068170-CreateUserTable";
import { CreateShoppingCartTable1674587525167 } from "./database/migrations/1674587525167-CreateShoppingCartTable";
import ShoppingCart from "./models/ShoppingCart";
import User from "./models/User";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "raissa",
  password: "Senha_123",
  database: "db_aula",
  synchronize: false,
  logging: false,
  entities: [User, ShoppingCart],
  migrations: [
    CreateUserTable1674586068170, 
    CreateShoppingCartTable1674587525167
  ],
  subscribers: [],
});