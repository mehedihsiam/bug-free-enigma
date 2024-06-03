import express from "express";
import ROUTES from "../constants/ROUTES";
import createProcessController from "../controller/process/createProcess.controller";
import getProcessListController from "../controller/process/getProcessList.controller";
import getSingleProcessController from "../controller/process/getSingleProcess.controller";
import checkQueryId from "../middlewares/checkQueryId";
import deleteProcessController from "../controller/process/deleteProcess.controller";

const router = express.Router();

router.post(ROUTES.PROCESS_CREATE, createProcessController);

router.get(ROUTES.PROCESS_GET_ALL, getProcessListController);

router.get(ROUTES.PROCESS_GET_SINGLE, checkQueryId, getSingleProcessController);

router.delete(ROUTES.PROCESS_DELETE, checkQueryId, deleteProcessController);

export const processRouter = router;
