import ReactGA from 'react-ga4';

// Initialize Google Analytics with your Measurement ID
export const initGA = () => {
  ReactGA.initialize('G-12MFVNL1W7'); // Replace with your GA4 Measurement ID
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
