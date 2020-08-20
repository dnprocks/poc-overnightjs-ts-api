import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('template')
export class TemplateController {
  @Get('')
  public getTemplateForLoggedUser(_: Request, res: Response): void {
    res.send({ status: 'ok' });
  }
}
