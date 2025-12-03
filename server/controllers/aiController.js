import Resume from "../modals/Resume.js";
import ai from "../configs/ai.js"; // THIS MUST be Google Gemini client

//--------------------------------------------
// ENHANCE PROFESSIONAL SUMMARY
//--------------------------------------------
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent, personalInfo, skills } = req.body;

    // Extract useful info
    const profession = personalInfo?.profession || "";
    const name = personalInfo?.full_name || "";
    const skillList = (skills || []).join(", ");

    // Build strong prompt
    const finalPrompt = `
Write a highly professional 1–2 sentence ATS-friendly resume summary.
Use this data:

Name: ${name}
Profession/Role: ${profession}
Skills: ${skillList}
User Summary Input: "${userContent}"

Rules:
- No templates
- No placeholders
- No asking user for input
- No brackets
- Produce final polished summary only
`;

    const model = ai.getGenerativeModel({
      model: process.env.OPENAI_MODEL,
    });

    const result = await model.generateContent(finalPrompt);

    const enhanced = result.response.text();

    return res.status(200).json({ enhancedContent: enhanced.trim() });
  } catch (err) {
    console.error("AI enhance summary error:", err);
    return res.status(500).json({ message: "AI request failed" });
  }
};

//--------------------------------------------
// ENHANCE JOB DESCRIPTION
//--------------------------------------------
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent?.trim()) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const model = ai.getGenerativeModel({ model: process.env.OPENAI_MODEL });

    const prompt = `
Rewrite this job description into 1–2 strong, measurable, ATS-friendly achievement statements.
Only return the improved bullet(s), no explanation.

Job Description:
${userContent}
`;

    const result = await model.generateContent(prompt);
    const enhancedText = result.response.text();

    return res.status(200).json({ enhancedContent: enhancedText.trim() });
  } catch (err) {
    console.error("enhanceJobDescription ERROR:", err);
    return res.status(500).json({ message: "AI request failed" });
  }
};

//--------------------------------------------
// UPLOAD RESUME
//--------------------------------------------
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText?.trim()) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `
Extract structured resume data in clean JSON only with EXACT format:

{
  "professional_summary": "",
  "skills": [],
  "personal_info": {
    "image": "",
    "full_name": "",
    "professional_summary": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [],
  "project": [],
  "education": []
}

Resume text:
${resumeText}
`;

    // FIX: correct API usage
    const model = ai.getGenerativeModel({
      model: process.env.OPENAI_MODEL,
    });

    const result = await model.generateContent(prompt);
    const raw = result.response.text();

    const first = raw.indexOf("{");
    const last = raw.lastIndexOf("}");
    const jsonString = raw.slice(first, last + 1);

    const parsed = JSON.parse(jsonString);

    const newResume = await Resume.create({ userId, title, ...parsed });

    return res.status(200).json({ resumeId: newResume._id });
  } catch (err) {
    console.error("uploadResume ERROR:", err);
    return res.status(500).json({ message: "Failed to parse resume" });
  }
};
