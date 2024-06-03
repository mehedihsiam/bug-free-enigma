import { NextFunction, Request, Response } from "express";
import ResponseData from "../../utils/responseGenerator";
import getSingleProcess from "../../utils/getSingleProcess";

const getSingleProcessController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.query.id;
  const logs = await getSingleProcess(id as string);
  if (!logs) {
    return next("Error fetching process");
  }
  const response = new ResponseData(200, "Success", { logs });
  return res.status(response.status).json(response);
};

export default getSingleProcessController;
