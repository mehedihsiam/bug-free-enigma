import { NextFunction, Request, Response } from "express";
import ResponseData from "../utils/responseGenerator";

const checkQueryId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.query.id;
  if (!id) {
    const response = new ResponseData(400, "Invalid Request", null);
    return res.status(response.status).json(response);
  }
  next();
};

export default checkQueryId;
