import { Process } from "../model/process.model";

const getSingleProcess = async (id: string) => {
  try {
    const process = await Process.findById(id);
    if (!process) {
      return null;
    }
    return process.logs;
  } catch (error) {
    console.error("Error fetching processes:", error);
    return null;
  }
};

export default getSingleProcess;
