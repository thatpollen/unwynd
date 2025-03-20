import { NextResponse } from "next/server";
import translate from "google-translate-api-x";

export async function POST(req: Request) {
  try {
    const { texts, lang } = await req.json();

    if (!Array.isArray(texts)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const translations = await Promise.all(
      texts.map(async (text) => {
        const translated = await translate(text, { to: lang });
        return Array.isArray(translated) ? translated[0].text : translated.text;
      })
    );

    return NextResponse.json({ translations });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
