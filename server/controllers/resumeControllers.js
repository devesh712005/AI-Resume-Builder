import Resume from "../modals/Resume.js";
import imagekit from "../configs/imagekit.js";
import fs from "fs";

// CREATE RESUME
export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    const newResume = await Resume.create({ userId, title });

    res.status(201).json({
      message: "Resume created successfully",
      resume: newResume,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE RESUME
export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });

    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET USER RESUME
export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });

    if (!resume) return res.status(404).json({ message: "resume not found" });

    res.status(200).json({ resume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET PUBLIC RESUME
export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ public: true, _id: resumeId });

    if (!resume) return res.status(404).json({ message: "resume not found" });

    res.status(200).json({ resume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE RESUME
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resumeData = JSON.parse(req.body.resumeData);
    const removeBackground = req.body.removeBackground === "true";

    let updates = resumeData;

    // ⭐ ADD THIS LINE — allow public/private update
    if (req.body.public !== undefined) {
      updates.public = req.body.public === "true";
    }

    if (req.file) {
      const fileData = fs.readFileSync(req.file.path);

      const uploaded = await imagekit.upload({
        file: fileData,
        fileName: `resume_${Date.now()}.png`,
        folder: "user-resumes",
      });

      updates.personal_info.image = removeBackground
        ? uploaded.url + "?tr=e-bgremove"
        : uploaded.url;
    }

    const updated = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      { $set: updates },
      { new: true }
    );

    res.status(200).json({ message: "Saved successfully", resume: updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
