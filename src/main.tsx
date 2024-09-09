import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';


Sentry.init({
  dsn: 'https://<https://64925d0afb6651da38dc236dda43655b@o4507921908563968.ingest.de.sentry.io/4507922102485072>@o<org-id>.ingest.sentry.io/<project-id>', // Replace with your DSN
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust this value for production
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
