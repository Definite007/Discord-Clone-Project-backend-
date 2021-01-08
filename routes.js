import express from "express";
import {
  getPosts,
  addNewChannel,
  getChannelList,
  newMessage,
  getData,
  getConversation,
} from "./controller.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/new/channel", addNewChannel);
router.get("/get/channelList", getChannelList);
router.post("/new/message", newMessage);
router.get("/get/data", getData);
router.get("/get/conversation", getConversation);
export default router;
