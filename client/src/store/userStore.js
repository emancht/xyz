import { create } from "zustand";
import axios from "axios";

const URL = "https://xyz-nu-six.vercel.app/api/";

const UserStore = create((set) => ({
    // Track authentication status
    isAuthenticated: false,

    // Register request
    RegisterRequest: async (email, password) => {
        try {
            const res = await axios.post(`${URL}register`, { email, password });
            return res.data.status === "success";
        } catch (error) {
            console.error("Registration failed:", error);
            return false;
        }
    },

    // Login request
    LoginRequest: async (email, password) => {
        try {
            const res = await axios.post(`${URL}login`, { email, password }, { withCredentials: true });
            if (res.data.status === "success") {
                set({ isAuthenticated: true });  // Update authentication state
                return true;
            }
            return false;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    },

    // Logout request
    LogoutRequest: async () => {
        try {
            const res = await axios.get(`${URL}logOut`, { withCredentials: true });
            set({ isAuthenticated: false });  // Reset authentication state
            return res.data.status === "success";
        } catch (error) {
            console.error("Logout failed:", error);
            return false;
        }
    },

    // Optional: Check if user is already authenticated (e.g., on app load)
    CheckAuthStatus: async () => {
        try {
            const res = await axios.get(`${URL}check-auth-status`, { withCredentials: true });
            if (res.data.status === "authenticated") {
                set({ isAuthenticated: true });
            } else {
                set({ isAuthenticated: false });
            }
        } catch (error) {
            console.error("Error checking authentication status:", error);
            set({ isAuthenticated: false });
        }
    },
}));

export default UserStore;
