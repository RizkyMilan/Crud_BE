import db from "../db/index.js";

const taskController = {
  getAllTask: (req, res) => {
    try {
      let sql = "SELECT * FROM user";
      const { tittle } = req.query;

      if (tittle) {
        sql = `SELECT * FROM task_management_system WHERE tittle = "${tittle}";`;
      }

      db.query(sql, (err, result) => {
        if (err) throw err;

        return res.status(200).json({
          message: "Get all task",
          data: result,
        });
      });
    } catch {
      return res.status(500).json({
        message: "server error",
      });
    }
  },

  getTaskById: (req, res) => {
    try {
      const { id } = req.params;
      let sql = `SELECT * FROM user WHERE id = ?`;

      db.query(sql, [id], (err, result) => {
        if (err) throw err;

        return res.status(200).json({
          message: "Get task by ID",
          data: result[0],
        });
      });
    } catch (error) {
      return res.status(500).json({
        message: "server error",
      });
    }
  },

  createNewTask: (req, res) => {
    try {
      let sql = `INSERT INTO user (tittle, description, status) VALUES
        (?, ?, ?)`;

      db.query(
        sql,
        [req.body.tittle, req.body.description, req.body.status],
        (err) => {
          if (err) throw err;

          return res.status(201).json({
            message: "task created",
          });
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },

  editTaskById: (req, res) => {},

  deleteTaskById: (req, res) => {
    try {
      const { id } = req.params;

      let sql = `DELETE FROM user WHERE id = ?`;

      db.query(sql, [id], (err) => {
        if (err) throw err;

        return res.status(200).json({
          message: "Task deleted",
        });
      });
    } catch (error) {
      return res.status(500).json({
        message: "server error",
      });
    }
  },
};

export default taskController;
