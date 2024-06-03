import { Process } from "../model/process.model";
import processPartialView from "../view/processPartial.view";

const createProcess = async (title: string) => {
  try {
    const process = await Process.create({ name: title });
    return processPartialView(process);
  } catch (error) {
    console.log("PROCESS CREATION ERROR__", error);
    return null;
  }
};

export default createProcess;
