
import { sendPrompt } from "../utils/geminiClient.js";



export const  askQuestion= async (req,res)=>{
    const {question} = req.body;
    const prompt =`based in this question answer this question clearly and helpfully: 
    
    Question:${question}`

   try {
    const ans = await sendPrompt(prompt)
    if (!ans) {
      console.error("No answer from Gemini API");
      return res.status(500).json({error:"No answer from Gemini API"});
    }
    res.json({ans})
} catch (error) {
    console.error("Error in askQuestion:", error);
    res.status(500).json({error:"failed to generate answer"})
}

}


export const summarizeTopic= async (req,res)=>{
    const {topic} = req.body
    const prompt=`Summarize the following topic for the student ${topic}`

try {
    
    const summary =await  sendPrompt(prompt)
    res.json({summary});
} catch (error) {
    res.status(500).json({error:"Failed to summarise topic"})
}

}

export const summarizeChapter = async(req,res)=>{
    const {text} = req.body;
    const prompt =`Generate 5 Mcq from this content with options ans correct answered marked:\n\n${text}`
    try {
        const summary =await sendPrompt(prompt)
        res.json({summary})
    } catch (error) {
        res.status(500).json({error:"Failed to summarize chapter"})
    }
}


export const generateMCQs=async (req, res)=> {
  const { text } = req.body;
  const prompt = `Generate 5 MCQs from this content with 4 options and correct answer marked:\n\n${text}`;
  try {
    const mcqs = await sendPrompt(prompt);
    res.json({ mcqs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate MCQs' });
  }
}

export const explainInHinglish= async(req, res)=> {
  const { text } = req.body;
  const prompt = `Explain this concept to a student in Hinglish and in english and in hindi:\n\n${text}`;
  try {
    const explanation = await sendPrompt(prompt);

    console.log("Prompt recieved",prompt)
    console.log("Ai response",explanation);
    res.json({ answer: explanation });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to explain in Hinglish' });
  }
}



export const generateFlashcards = async(req, res)=> {
  const { text } = req.body;
  const prompt = `Create flashcards from the following content. Format: Q: ... A: ...\n\n${text}`;
  try {
    const flashcards = await sendPrompt(prompt);
    res.json({ flashcards });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate flashcards' });
  }
}