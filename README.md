# zapier.connector
Typed wrapper over Zapier endpoints with retries, telemetry, and safe secrets.

## Example
```ts
import { Zapier } from "@zyto/zapier-connector";
const z = new Zapier({ auth: process.env.ZAPIER_AUTH });
await z.invoke({ app: "gmail", action: "send_email", input: {...} });
