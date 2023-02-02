import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import ShoppingCart from "../models/ShoppingCart";

export default {
  async create(request: Request, response: Response) {
    //desestruturar o corpo da requisição (JSON)
    const { description, unitprice, quantity, totalprice, image} = request.body;

    const scRepository = AppDataSource.getRepository(ShoppingCart);

    const sc = scRepository.create({
        description, 
        unitprice, 
        quantity, 
        totalprice, 
        image
    });

    await scRepository.save(sc);

    return response.status(201).json(sc);
  },
  async index(request: Request, response: Response) {
    const scRepository = AppDataSource.getRepository(ShoppingCart);

    const scs = await scRepository.find();

    response.json(scs);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const scRepository = AppDataSource.getRepository(ShoppingCart);

    const sc = await scRepository.findOneBy({
      id: +id,
    });

    response.json(sc);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const scRepository = AppDataSource.getRepository(ShoppingCart);

    const sc = await scRepository.findOneBy({
      id: +id,
    });
    
    if (sc) {
      await scRepository.remove(sc);
      return response.status(204).json(sc);
    }
    response.status(404).json();
    
  },
};