import { NextFunction, Request, Response } from "express";
import ResponseData from "../../utils/responseGenerator";
import deleteProcess from "../../utils/deleteProcesses";

const deleteProcessController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id;
  const processDelete = await deleteProcess(id as string);
  if (!processDelete) {
    return next("Internal Server Error");
  }
  const response = new ResponseData(200, "Process Deleted", null);
  return res.status(response.status).json(response);
};

export default deleteProcessController;
