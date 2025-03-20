const translationCache = new Map<string, string>();

export async function translateText(
  text: string,
  targetLang: string
): Promise<string> {
  const cacheKey = `${text}_${targetLang}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang: targetLang }),
    });

    const data = await res.json();
    if (data.translatedText) {
      translationCache.set(cacheKey, data.translatedText);
      return data.translatedText;
    }
  } catch (error) {
    console.error("Translation Error:", error);
  }

  return text;
}

export async function translateTexts(
  texts: string[],
  targetLang: string
): Promise<string[]> {
  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts, lang: targetLang }),
    });

    const data = await res.json();
    return data.translations || texts; // Return original if translation fails
  } catch (error) {
    console.error("Translation Error:", error);
    return texts;
  }
}
