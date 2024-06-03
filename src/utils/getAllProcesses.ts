import { Process } from "../model/process.model";
import processPartialView from "../view/processPartial.view";

const getAllProcesses = async () => {
  try {
    const processes = await Process.find();
    const arr = [];
    for (let i = 0; i < processes.length; i++) {
      arr.push(processPartialView(processes[i]));
    }
    return arr;
  } catch (error) {
    console.error("Error fetching processes:", error);
    return null;
  }
};

export default getAllProcesses;
