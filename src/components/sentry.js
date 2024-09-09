// src/sentry.js
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: 'https://<https://64925d0afb6651da38dc236dda43655b@o4507921908563968.ingest.de.sentry.io/4507922102485072>@o<org-id>.ingest.sentry.io/<project-id>', // Replace with your actual DSN
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust this value as needed
});
