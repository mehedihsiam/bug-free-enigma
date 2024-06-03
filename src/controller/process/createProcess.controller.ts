import { NextFunction, Request, Response } from "express";
import createProcess from "../../utils/createProcess";
import ResponseData from "../../utils/responseGenerator";

const createProcessController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const title = `Process ${new Date().toISOString()}`;
  const process = await createProcess(title);
  if (!process) {
    return next("Process creation failed");
  }
  const response = new ResponseData(200, "Success", process);
  return res.status(response.status).json(response);
};

export default createProcessController;
