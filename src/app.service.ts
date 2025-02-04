import { Injectable } from '@nestjs/common';
import { GoogleAiService } from './google-ai/google-ai.service';

@Injectable()
export class AppService {
  constructor(private readonly googleAiService: GoogleAiService) {}

  async generateText(text: string) {
    return await this.googleAiService.model.generateContent(text);
  }
}
