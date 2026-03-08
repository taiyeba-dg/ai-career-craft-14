import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { action, content, mode, resumeData, jobDescription } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    let systemPrompt = "";
    let userPrompt = "";

    switch (action) {
      case "rewrite":
        systemPrompt =
          "You are an expert resume writer. Rewrite the given resume content in the requested style. Return ONLY the rewritten text, no explanations.";
        userPrompt = `Rewrite this resume content in a ${mode} style:\n\n${content}`;
        break;

      case "expand":
        systemPrompt =
          "You are an expert resume writer. Expand the given content with more detail, metrics, and impact. Return ONLY the expanded text.";
        userPrompt = `Expand this resume content with more detail and impact:\n\n${content}`;
        break;

      case "shorten":
        systemPrompt =
          "You are an expert resume writer. Shorten the given content while keeping key achievements and metrics. Return ONLY the shortened text.";
        userPrompt = `Shorten this resume content while keeping key points:\n\n${content}`;
        break;

      case "summary":
        systemPrompt =
          "You are an expert resume writer. Generate a compelling professional summary based on the resume data provided. Return ONLY the summary paragraph (3-4 sentences).";
        userPrompt = `Generate a professional summary for:\nName: ${resumeData?.name}\nTitle: ${resumeData?.title}\nSkills: ${resumeData?.skills?.join(", ")}\nExperience: ${resumeData?.experience?.map((e: any) => `${e.role} at ${e.company}`).join("; ")}`;
        break;

      case "bullet":
        systemPrompt =
          "You are an expert resume writer. Improve this resume bullet point to be more impactful with quantified achievements and strong action verbs. Return ONLY the improved bullet point.";
        userPrompt = `Improve this resume bullet point:\n\n${content}`;
        break;

      case "cover-letter":
        systemPrompt =
          "You are an expert career coach. Write a compelling, personalized cover letter based on the resume data and job description. The cover letter should be professional, 3-4 paragraphs, and highlight relevant experience. Return ONLY the cover letter text.";
        userPrompt = `Write a cover letter for:\n\nResume:\nName: ${resumeData?.name}\nTitle: ${resumeData?.title}\nSummary: ${resumeData?.summary}\nSkills: ${resumeData?.skills?.join(", ")}\nExperience: ${resumeData?.experience?.map((e: any) => `${e.role} at ${e.company}: ${e.bullets?.join("; ")}`).join("\n")}\n\nJob Description:\n${jobDescription}`;
        break;

      case "match-keywords":
        systemPrompt =
          'You are an ATS optimization expert. Analyze the job description and resume, then return a JSON object with: {"matched": ["keyword1", ...], "missing": ["keyword1", ...], "suggestions": ["suggestion1", ...]}. Return ONLY valid JSON.';
        userPrompt = `Job Description:\n${jobDescription}\n\nResume Skills: ${resumeData?.skills?.join(", ")}\nResume Summary: ${resumeData?.summary}\nExperience: ${resumeData?.experience?.map((e: any) => e.bullets?.join("; ")).join("\n")}`;
        break;

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI usage limit reached. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || "";

    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("resume-ai error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
