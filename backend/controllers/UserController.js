const { User } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        order: [["updatedAt", "desc"]],
      });

      if (users) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: users });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: users });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async getOneUser(req, res) {
    try {
      const id = +req.userData.id;
      const user = await User.findOne({
        where: { id: id },
      });

      if (user) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: user });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: user });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async registerUser(req, res) {
    try {
      const { username, password, active } = req.body;
      const result = await User.create({
        username,
        password,
        active,
      });

      if (result) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: result });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: result });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await User.findOne({
        where: { username },
      });

      if (result) {
        if (decryptPass(password, result.password)) {
          const token = tokenGenerator(result);
          res.status(200).json({ ResponseCode: "00", ResponseDesc: { token } });
        } else {
          res
            .status(403)
            .json({ ResponseCode: "01", message: `invalid password!` });
        }
      } else {
        res
          .status(404)
          .json({ ResponseCode: "01", message: `user not found!` });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", error: error });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const result = await User.destroy({
        where: { id },
      });

      if (result === 1) {
        res
          .status(200)
          .json({ ResponseCode: "00", message: `user has been deleted` });
      } else {
        res
          .status(404)
          .json({ ResponseCode: "01", message: `id is not found` });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const userId = +req.userData.id;
      const { username, password, active } = req.body;
      const result = await User.update(
        {
          username,
          password,
          active,
        },
        {
          where: { id: userId },
          individualHooks: true,
        }
      );

      if (result[0] === 1) {
        res
          .status(200)
          .json({ ResponseCode: "00", message: `user has been updated` });
      } else {
        res
          .status(404)
          .json({ ResponseCode: "01", message: `id is not right` });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }
}

module.exports = UserController;
