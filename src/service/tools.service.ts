import dotenv from 'dotenv';
import { HttpStatusCode } from '../enum/http-status-code.enum';
import { IToolsRequest, IToolsResponse, type IToolsFindReqiuest } from '../@Types/tools.types';
import ToolsSchema from '../schemas/tools.schema';
import type { DeleteResult } from 'mongoose';

export class ToolsService {
  public async create(tools: IToolsRequest): Promise<IToolsResponse> {
    const toolsSchema = ToolsSchema;

    try{
      const result = await toolsSchema.create(tools);
      return result;
    }catch(err) {
      throw new Error(`Erro create User ${err}`);
    }
  }

  public async list(tag?: string): Promise<IToolsResponse[]> {
    const toolsSchema = ToolsSchema;

    try{
      const result = await toolsSchema.find(tag ? {tags: {$in: [tag]}} : {}); 
      return result;
    }catch(err) {
      throw new Error(`Erro create User ${err}`);
    }
  }

  public async delete(_id: string): Promise<DeleteResult> {
    const toolsSchema = ToolsSchema;

    try{
      const result = await toolsSchema.deleteOne();
      return result;
    }catch(err) {
      throw new Error(`Erro create User ${err}`);
    }
  }
}

