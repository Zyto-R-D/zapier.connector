export interface ZapierOptions {
  auth: string; // token
  baseUrl?: string; // optional self-hosted gateway
}

export class Zapier {
  private base = this.opts.baseUrl ?? "https://hooks.zapier.com";
  constructor(private opts: ZapierOptions) {}
