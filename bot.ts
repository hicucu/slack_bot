const { WebClient } = require("@slack/web-api");
import { BOT_TOKEN } from "./env";
import * as schedule from "node-schedule";
import * as moment from "moment";

// 봇 접근
const web = new WebClient(BOT_TOKEN);
// 봇이 메세지를 보낼 채널 ID
const conversationId = "daily";

const scheduler = schedule.scheduleJob(
  { dayOfWeek: 5, hour: 12, minute: 10, tz: "Asia/Seoul" },
  async () => {
    const res = await web.chat.postMessage({
      channel: conversationId,
      text: "오늘은 금요일, 햄버거를 먹는 날이죠",
    });

    console.log("Message sent: ", res.ts);
  }
);

// const schedulerTest = schedule.scheduleJob(
//   { second: 10, tz: "Asia/Seoul" },
//   async () => {
//     console.log("test");
//   }
// );

