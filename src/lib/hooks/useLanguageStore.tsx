import { create } from "zustand";

type LanguageState = {
  language: string;
  initialized: boolean; // Track initialization to prevent UI flickering
  setLanguage: (lang: string) => void;
};

// Safe client-side language retrieval
const getStoredLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("selectedLanguage") || "en"; // Default to English
  }
  return "en"; // Default for SSR
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en", // Default value (will update after mount)
  initialized: false, // Track if localStorage is read
  setLanguage: (lang: string) => {
    localStorage.setItem("selectedLanguage", lang);
    set({ language: lang });
  },
}));

// Ensure Zustand initializes the stored language on mount
export const useInitializeLanguage = () => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const initialized = useLanguageStore((state) => state.initialized);

  if (typeof window !== "undefined" && !initialized) {
    const storedLanguage = getStoredLanguage();
    setLanguage(storedLanguage);
    useLanguageStore.setState({ initialized: true }); // Prevent multiple updates
  }
};
