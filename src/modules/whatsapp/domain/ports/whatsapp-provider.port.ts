import type {
  MetaTemplate,
  ProviderSendResult,
  SendInteractiveInput,
  SendMediaInput,
  SendTemplateInput,
  SendTextInput,
} from '../types/provider.types.js';

export const WHATSAPP_PROVIDER = Symbol('WHATSAPP_PROVIDER');

export interface WhatsAppProvider {
  sendTemplate(input: SendTemplateInput): Promise<ProviderSendResult>;
  sendText(input: SendTextInput): Promise<ProviderSendResult>;
  sendMedia(input: SendMediaInput): Promise<ProviderSendResult>;
  sendInteractive(input: SendInteractiveInput): Promise<ProviderSendResult>;
  listTemplates(): Promise<MetaTemplate[]>;
}
