import { Process } from "../model/process.model";

const deleteProcess = async (id: string) => {
  try {
    const process = await Process.findByIdAndDelete(id);
    if (!process) {
      console.log("THERE IS NO PROCESS TO DELETE");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error fetching processes:", error);
    return null;
  }
};

export default deleteProcess;
