import {Request, Response} from 'express';

export default new class ConnectController {

  public async handle(req: Request, res: Response) {
    return res.json({message: 'Aplication connected'});
  }
}