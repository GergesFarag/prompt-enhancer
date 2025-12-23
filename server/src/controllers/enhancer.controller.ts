import { Request, Response } from "express";
import { EnhancerService } from "../services/enhancer.service";
import { Controller } from "../_base/controller/controller";

export class EnhancerController extends Controller {
  constructor(private readonly service: EnhancerService) {
    super();
  }

  public async enhance(req: Request, res: Response) {
    return this.created(res, await this.service.enhancePrompt(req, res));
  }

  public async getEnhancements(req: Request, res: Response) {
    return this.ok(res, await this.service.getAllEnhancements());
  }
}
