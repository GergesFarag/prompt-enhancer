import { Router } from "express";
import { EnhancerController } from "../controllers/enhancer.controller";
import { EnhancerService } from "../services/enhancer.service";
import { EnhancementModel } from "../models/enhancement.model";

class EnhancerRoutes {
  public static readonly BASE_PATH = "/enhancer";
  public router: Router;
  private controller: EnhancerController;
  constructor() {
    this.router = Router();
    this.controller = new EnhancerController(
      new EnhancerService(EnhancementModel)
    );
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get("/", this.controller.getEnhancements.bind(this.controller))
      .post("/", this.controller.enhance.bind(this.controller));
  }
}

export const EnhancerRouter = new EnhancerRoutes().router;
