import { Process } from "../model/process.model";

const updateLogs = async () => {
  try {
    const currentDateTime = new Date();
    await Process.updateMany({}, { $push: { logs: currentDateTime } });
    console.log(`Logs updated with current date and time: ${currentDateTime}`);
  } catch (error) {
    console.error("Error updating logs:", error);
  }
};

export default updateLogs;
