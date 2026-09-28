export interface TemplateComponent {
  type: string;
  sub_type?: string;
  index?: string;
  parameters?: Array<{
    type: string;
    text?: string;
    image?: { link: string };
    document?: { link: string; filename?: string };
    video?: { link: string };
  }>;
}

export interface SendTemplateInput {
  to: string;
  templateName: string;
  language: string;
  components?: TemplateComponent[];
  correlationId?: string;
}

export interface SendTextInput {
  to: string;
  body: string;
  correlationId?: string;
}

export interface SendMediaInput {
  to: string;
  type: 'image' | 'document' | 'audio' | 'video';
  link: string;
  caption?: string;
  filename?: string;
  correlationId?: string;
}

export interface SendInteractiveInput {
  to: string;
  interactive: Record<string, unknown>;
  correlationId?: string;
}

export interface ProviderSendResult {
  success: boolean;
  metaMessageId?: string;
  errorCode?: string;
  errorMessage?: string;
}

export interface MetaTemplate {
  id: string;
  name: string;
  language: string;
  status: string;
  category?: string;
  components?: unknown[];
}
