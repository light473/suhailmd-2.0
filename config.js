const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_29_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0puL2l6Y1hGeExqc1VoU1dMZWY2Tkt3RUtabnZGejN1Rnk3elZFaEt4bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNDk2TERTOVBTSmVJcVM5UGJWM3BWUVwiLFxuICBcInBob25lSWRcIjogXCJjNjhjMGM1Ni0yNzc3LTQyZTEtOTZiNS0zZjVjY2ZiMjhkNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAxOTUsXG4gICAgICAyMDcsXG4gICAgICAyMCxcbiAgICAgIDEwOCxcbiAgICAgIDE2NCxcbiAgICAgIDEzNCxcbiAgICAgIDI0MCxcbiAgICAgIDIwLFxuICAgICAgMTYwLFxuICAgICAgMjksXG4gICAgICAxNzIsXG4gICAgICAxMjQsXG4gICAgICA0MixcbiAgICAgIDE5NixcbiAgICAgIDU1LFxuICAgICAgMTMyLFxuICAgICAgMjI3LFxuICAgICAgOSxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDIwOCxcbiAgICAgIDEzNixcbiAgICAgIDIyMixcbiAgICAgIDE4NSxcbiAgICAgIDIxMixcbiAgICAgIDgyLFxuICAgICAgMTg5LFxuICAgICAgNjksXG4gICAgICA3NSxcbiAgICAgIDEzOCxcbiAgICAgIDIwNixcbiAgICAgIDc4LFxuICAgICAgMjA5LFxuICAgICAgMTQ3LFxuICAgICAgMixcbiAgICAgIDIwOSxcbiAgICAgIDIyNSxcbiAgICAgIDEzNyxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZVEtURDJTU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NTk5MDY0NjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5MTczMTI1ODk4MzQyOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qNDV1Z0dFTVRnb0xzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODBCV1oxSFBwVHRmaDRhaE14VHlxNUJLaFZDQ3FSbkcxZ2dtdjJPY2EzRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6cDJGMGNITzNuSmtZZklqYUFYaG9DWXoycGFVcjFKNXRjTGxUQUlWWFNvdHlvMlY0enJMRmk0UGdCcldVaUc5M3MxSDh4UTQxYmNxbXZhRWNxNnJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJUmlBMEpUQlNSdFZBODVBZDd3UnF6WGlnRGhOYTdRVHF5eWJveXByTUZQL1czWnhZQ3BNeXNSOUVVQ0Q1NkdLeEJmNVFXTnNPaFc1OVRibmhUQjJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY1OTkwNjQ2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg4MTM1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNSK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1IrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNXV3c01UcW11NkhqdkFqZDlqMjNYT0F2aGs3UW9vNzJjbG5JbnY1Yis1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODMwNDAzMTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0ODgxMTAzNDQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
