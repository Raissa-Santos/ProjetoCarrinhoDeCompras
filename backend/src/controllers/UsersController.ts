import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User from "../models/User";

export default {
  async create(request: Request, response: Response) {
    //desestruturar o corpo da requisição (JSON)
    const { name, email, password } = request.body;

    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.create({
      name,
      email,
      password
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  },
  async index(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    response.json(users);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: +id,
    });

    response.json(user);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: +id,
    });
    
    if (user) {
      await userRepository.remove(user);
      return response.status(204).json(user);
    }
    response.status(404).json();
    
  },
};