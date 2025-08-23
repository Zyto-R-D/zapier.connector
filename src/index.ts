export interface ZapierOptions {
  auth: string; // token
  baseUrl?: string; // optional self-hosted gateway
}

export class Zapier {
  private base = this.opts.baseUrl ?? "https://hooks.zapier.com";
  constructor(private opts: ZapierOptions) {}

  async invoke(hookPath: string, input: unknown) {
    const res = await fetch(`${this.base}/${hookPath}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.opts.auth}` },
      body: JSON.stringify(input)
    });
    if (!res.ok) throw new Error(`zapier invoke failed: ${res.status}`);
    return res.json().catch(() => ({}));
  }
}
