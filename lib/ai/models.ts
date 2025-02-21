import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { anthropic } from '@ai-sdk/anthropic';
import { xai } from '@ai-sdk/xai';
import { perplexity } from '@ai-sdk/perplexity';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'deepseek-r1';

export const myProvider = customProvider({
  languageModels: {
    'gpt-4o-mini': openai('gpt-4o-mini'),
    'gpt-4o': openai('gpt-4o'),
    'gpt-o3-mini': openai('o3-mini'),
    'claude-3-5-sonnet': anthropic('claude-3-5-sonnet-20241022'),
    'xai': xai('grok-2-1212'),
    'perplexity-sonar-pro': perplexity('sonar-pro'),
    'deepseek-r1': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': openai('gpt-4-turbo'),
    'artifact-model': openai('gpt-4o-mini'),
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o-mini',
    description: '',
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: '',
  },
  {
    id: 'gpt-o3-mini',
    name: 'GPT-o3-mini',
    description: '',
  },
  {
    id: 'perplexity-sonar-pro',
    name: 'Perplexity Sonar Pro',
    description: '',
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    description: '',
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    description: '',
  },
  {
    id: 'xai',
    name: 'xAI',
    description: '',
  },
];
