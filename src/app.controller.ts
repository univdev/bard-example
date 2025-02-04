import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleAiService } from './google-ai/google-ai.service';

@Controller('/ai')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly googleAiService: GoogleAiService,
  ) {}

  @Post('/text')
  async generateText(@Body('prompt') prompt: string) {
    return (await this.appService.generateText(prompt)).response.text();
  }
}
