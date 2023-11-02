import express from "express";
import {getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";
import { verfiyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verfiyToken, getFeedPosts);
router.get("/:userId/posts", verfiyToken, getUserPosts);

router.patch("/:id/like", verfiyToken, likePost);

export default router;