// import { GoogleGenAI } from '@google/genai';
// import * as fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const ai = new GoogleGenAI({ apiKey: "AIzaSyD3QRIIZHCKzOcGTfFKSWemzNWTw8TscmM" });

// // Converts local file information to a Part object.  
// function fileToGenerativePart(filePath, mimeType) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
//       mimeType
//     },
//   };
// }

//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);
//   const imagePath = path.join(__dirname, 'sci.jpeg');
//   const imagePart = fileToGenerativePart(imagePath, "image/jpeg");
// export default imagePart
// export async function sendPrompt(prompt="explan that image") {

//   const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash',
//     contents: [imagePart, prompt],
//     config:{
//       systemInstruction:`You are an agent who solve people queries in one line answers`
//     }
//   });

//   console.log(response.text); // The output often is markdown
//   return response.text
// }

// sendPrompt();

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyD4NF8JzxqYNCLNp2XlywSmLQDkX96K2E4"});

// export async function sendPrompt(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//     config:{
//       systemInstruction:`You are a helpful, smart AI assistant. Your job is to respond clearly, cleanly, and informatively. 

// Always format the answer like this:
// 1. If the answer is short, give it directly in a single line.
// 2. If the answer needs explanation, use the following clean format:
//    - Use **bold titles** for sections.
//    - Use numbered or bulleted key points.
//    - Avoid special symbols like `*`, instead use hyphens `-` or numbers.
//    - Keep answers concise and structured.
//    - Use paragraphs only if necessary.
//    - Do not add extra fluff or long intros. Get to the point quickly.
//    - Highlight important points using ALL CAPS or **bold** if helpful.


//  `
//     }
//   });
//   console.log(response.text)
//   return response.text
// }

// sendPrompt('how are you')

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function sendPrompt(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `You are a helpful, smart AI assistant. ...`
    }
  });
  // console.log("Gemini API raw response:", response);
  if (!response || !response.text) {
    throw new Error("No text in Gemini API response");
  }
  return response.text;
}