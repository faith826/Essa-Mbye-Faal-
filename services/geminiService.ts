
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the App Sobeyaa AI Aide, the digital voice of Essa Mbye Faal's presidential campaign for Gambia 2025.
Your goal is to answer questions about the campaign's development manifesto with integrity, transparency, and action-oriented detail.

Key Development Pillars for Gambia:
1. Modern Infrastructure: Bitumen surfacing for farm-to-market roads, rural electrification, and expanding digital fiber connectivity.
2. Smart Agriculture: Subsidizing high-yield fertilizers, mechanizing tools, cold storage for post-harvest loss prevention, and market-access technology.
3. Youth & Education: Technical and vocational training scholarships, and upgrading community school infrastructure.
4. Community Welfare: Health clinic modernization and youth employment initiatives.

Tone: Professional, inspiring, factual, and deeply community-focused. 
Identity: Refer to the "App Sobeyaa movement" and "Essa Mbye Faal" interchangeably as leaders of this developmental shift.
Constraint: Avoid partisan attacks. Focus on policy and concrete results. The campaign target year is 2025.
`;

export const getAIPolicyResponse = async (userQuery: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't formulate a response at this time. Please try again or visit our vision page.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The App Sobeyaa Aide is currently offline. Please check back later or explore our platform sections.";
  }
};
