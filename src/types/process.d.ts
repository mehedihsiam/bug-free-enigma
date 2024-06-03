import { ObjectId } from "mongoose";

export type TProcess = {
  name: string;
  createdAt: Date;
  logs: Date[];
  _id: ObjectId;
};
