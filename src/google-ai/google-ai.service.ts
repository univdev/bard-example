import { Injectable } from '@nestjs/common';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleAiService {
  genAI: GoogleGenerativeAI;
  model: GenerativeModel;

  constructor(readonly configService: ConfigService) {
    this.genAI = new GoogleGenerativeAI(
      this.configService.get('GEMINI_API_KEY') as string,
    );
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }
}
