import express from "express"
import { taskController } from "../controllers/index.js"

const router = express.Router()

router.get("/tampil", taskController.getAllTask)
router.post("/tambah", taskController.createNewTask)
router.get("/tampil/:id", taskController.getTaskById)
router.delete("/hapus/:id", taskController.deleteTaskById)

export default router