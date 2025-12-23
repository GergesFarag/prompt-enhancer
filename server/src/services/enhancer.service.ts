import { Request, Response } from "express";
import { HttpStatus } from "../utils/http-status.enum";
import { Model } from "mongoose";
import { IEnhancement } from "../interfaces/enhancement.interface";
import OpenAI from "openai";
import { SYS_PROMPT_ENHANCE } from "../_base/constants/system-prompt";
import { EnhancementResponseDto } from "../dto/enhancement-response.dto";

export class EnhancerService {
  private openAiClient;
  constructor(private readonly enhancementModel: Model<IEnhancement>) {
    const apiKey = process.env.OPENAI_API_KEY as string;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not defined in environment variables");
    }
    this.openAiClient = new OpenAI({
      apiKey,
    });
  }

  public async enhancePrompt(req: Request, res: Response) {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: "Prompt is required" });
      }

      const response = await this.openAiClient.chat.completions.create({
        model: "gpt-4o-mini",
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content: SYS_PROMPT_ENHANCE,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const enhancedPrompt = response.choices[0]?.message?.content || prompt;

      if (!enhancedPrompt || enhancedPrompt.trim() === "") {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          error: "Failed to generate an enhanced prompt",
        });
      }
      this.enhancementModel.create({
        original: prompt,
        enhanced: enhancedPrompt,
      });

      res
        .status(HttpStatus.OK)
        .json({
          status: "success",
          data: { enhancedPrompt },
        } as EnhancementResponseDto);
    } catch (error) {
      console.error("OpenAI API Error:", error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: "Failed to enhance prompt",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async getAllEnhancements() {
    return await this.enhancementModel.find({ isActive: true }).exec();
  }
}
