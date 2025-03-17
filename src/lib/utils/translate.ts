import translate from "google-translate-api-x";

export async function translateText(
  text: string,
  targetLang: string
): Promise<string> {
  try {
    const response = await translate(text, { to: targetLang });
    return response.text;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Return original text if translation fails
  }
}
