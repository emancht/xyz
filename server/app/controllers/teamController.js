import TeamModel from "../models/teamModel.js";

// Create or Upsert a team member (Create or Update)
export const saveMember = async (req, res) => {
    try {
        const { memberID } = req.params; // Optional parameter for update
        const { name, role, bio } = req.body;
// console.log(name, role, bio);
        // Validate required fields
        if (!name || !role || !bio) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const image = req.file ? req.file.filename : null; // Handle uploaded image

        if (memberID) {
            // Update existing team member
            const updates = { name, role, bio };
            if (image) {
                updates.image = image;
            }

            const updatedMember = await TeamModel.findByIdAndUpdate(memberID, updates, {
                new: true,
            });

            if (!updatedMember) {
                return res.status(404).json({ status: "fail", message: "Team member not found" });
            }

            return res
                .status(200)
                .json({ status: "success", message: "Team member updated successfully", member: updatedMember });
        } else {
            // Create a new team member
            const newMember = new TeamModel({ name, role, bio, image });
            await newMember.save();

            return res
                .status(201)
                .json({ status: "success", message: "Team member created successfully", data: newMember });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: "Error processing team member", error: error.message });
    }
};

// Get a specific team member
export const readMember = async (req, res) => {
    try {
        const member = await TeamModel.findById(req.params.memberID);
        if (!member) {
            return res.status(404).json({ status: "fail", message: 'Team member not found' });
        }
        res.status(200).json({ status: "success", data: member });
    } catch (error) {
        res.status(500).json({ status: "error", message: 'Error fetching team member', error: error.message });
    }
};

// Delete a team member
export const deleteMember = async (req, res) => {
    try {
        const deletedMember = await TeamModel.findByIdAndDelete(req.params.memberID);

        if (!deletedMember) {
            return res.status(404).json({ status: "fail", message: 'Team member not found' });
        }
        res.status(200).json({ status: "success", message: 'Team member deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: "error", message: 'Error deleting team member', error: error.message });
    }
};

// List all team members
export const memberList = async (req, res) => {
    try {
        const members = await TeamModel.find().sort({ createdAt: -1 }); // Sort by newest first

        res.status(200).json({
            status: "success",
            data: members,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Error fetching team members",
            error: error.message,
        });
    }
};
