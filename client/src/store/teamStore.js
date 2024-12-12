import { create } from "zustand";
import axios from "axios";

const TeamStore = create((set) => ({
    TeamList: [],
    TeamDetails: null,

    // Fetch all team members
    TeamListRequest: async () => {
        try {
            const res = await axios.get("/api/MemberList");
            if (res.data.status === "success") {
                set({ TeamList: res.data.data });
            }
        } catch (error) {
            console.error("Error fetching team list:", error);
        }
    },


    // Create a new team member
    CreateTeamMemberRequest: async (formData) => {
        try {
            const res = await axios.post(`/api/CreateMember`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.data.status === "success") {
                return res.data.data;
            }
        } catch (error) {
            console.error("Error creating team member:", error);
            throw error;
        }
    },



    // Delete a team member
    DeleteTeamMemberRequest: async (memberID) => {
        try {
            const res = await axios.get(`/api/DeleteMember/${memberID}`);
            if (res.data.status === "success") {
                set((state) => ({
                    TeamList: state.TeamList.filter((member) => member._id !== memberID),
                }));
            }
        } catch (error) {
            console.error("Error deleting team member:", error);
        }
    },
}));

export default TeamStore;
