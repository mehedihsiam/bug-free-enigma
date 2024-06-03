import { NextFunction, Request, Response } from "express";
import ResponseData from "../../utils/responseGenerator";
import getAllProcesses from "../../utils/getAllProcesses";

const getProcessListController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const processes = await getAllProcesses();
  if (!processes) {
    return next("Error fetching processes");
  }
  const response = new ResponseData(200, "Success", processes);
  return res.status(response.status).json(response);
};

export default getProcessListController;
