import {Request, Response} from 'express';
import { ToolsService } from '../service/tools.service';
import { HttpStatusCode } from '../enum/http-status-code.enum';

export default new class ToolsController {

  public async create(req: Request, res: Response) {
    const service = new ToolsService();

    const tool = req?.body;
    try{
      const result = await service.create(tool);
      return res.status(HttpStatusCode?.Created).json(result);
    } catch(err) {
      console.error('Esse é o erro: ',err);
      return res.status(HttpStatusCode?.Forbidden).json({message: 'Error in procees'});
    }
  }

  public async list(req: Request, res: Response) {
    const service = new ToolsService();

    try{
      const tag = req?.query?.tag as string;
      const result = await service.list(tag);
      return res.status(HttpStatusCode?.OK).json(result);
    } catch(err) {
      console.error('Esse é o erro: ',err);
      return res.status(HttpStatusCode?.Forbidden).json({message: 'Error in procees'});
    }
  }

  public async delete(req: Request, res: Response) {
    const service = new ToolsService();

    try{
      const id = req?.params?.id;
      const result = await service.delete(id);
      return res.status(HttpStatusCode?.OK).json({});
    } catch(err) {
      console.error('Esse é o erro: ',err);
      return res.status(HttpStatusCode?.Forbidden).json({message: 'Error in procees'});
    }
  }
}