import type e = require("express");
import { HttpStatus } from "../../utils/http-status.enum";

export abstract class Controller {
  protected ok(res: e.Response, data: any) {
    return res.status(HttpStatus.OK).json(data);
  }
  protected created(res: e.Response, data: any) {
    return res.status(HttpStatus.CREATED).json(data);
  }
  protected badRequest(res: e.Response, message: string) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message });
  }
  protected unauthorized(res: e.Response, message: string) {
    return res.status(HttpStatus.UNAUTHORIZED).json({ message });
  }
  protected forbidden(res: e.Response, message: string) {
    return res.status(HttpStatus.FORBIDDEN).json({ message });
  }
  protected notFound(res: e.Response, message: string) {
    return res.status(HttpStatus.NOT_FOUND).json({ message });
  }
}
