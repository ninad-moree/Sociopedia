import express from "express";
import {getUser, getUserFriends, addRemoveFriend} from "../controllers/users.js";
import { verfiyToken } from "../middleware/auth.js";

const router = express.Router();

// ##### READ ##### //
router.get("/:id", verfiyToken, getUser);
router.get("/:id/friends", verfiyToken, getUserFriends);

router.patch("/:id/:friendId", verfiyToken, addRemoveFriend);

export default router;