import { TProcess } from "../types/process";

const processPartialView = (process: TProcess) => {
  return {
    pid: process._id,
    createdAt: process.createdAt,
  };
};

export default processPartialView;
