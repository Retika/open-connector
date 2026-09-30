import type { CredentialValidators, ProviderExecutors } from "../../core/types.ts";

import { defineApiKeyProviderExecutors } from "../provider-runtime.ts";
import { indexedActionHandlers, validateIndexedCredential } from "./runtime.ts";

const service = "indexed";

export const executors: ProviderExecutors = defineApiKeyProviderExecutors(service, indexedActionHandlers);

export const credentialValidators: CredentialValidators = {
  apiKey: validateIndexedCredential,
};
