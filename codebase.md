# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4192CF', // Updated blue color
          'primary-foreground': '#ffffff', // Keep the same or update if needed
          secondary: '#EAFD2A', // Updated yellow color
          'secondary-foreground': '#222222', // Keep the same or update if needed
          input: 'hsl(214.3, 31.8%, 91.4%)', // Keep the same or update if needed
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
```

# postcss.config.js

```js
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

# package.json

```json
{
  "name": "my-nextjs-website",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@heroicons/react": "^2.1.5",
    "@tailwindcss/forms": "^0.5.9",
    "@tailwindcss/typography": "^0.5.15",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.0.0",
    "lucide-react": "^0.447.0",
    "next": "^14.2.14",
    "postcss": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^3.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "eslintConfig": {
    "extends": [
      "next/core-web-vitals"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "typescript": "5.6.2"
  }
}

```

# next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['your-image-domain.com'],
    },
  }
  
  module.exports = nextConfig
```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/building-your-application/configuring/typescript for more information.

```

# README.md

```md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# src/setupTests.js

```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

# src/reportWebVitals.js

```js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

# src/logo.svg

This is a file of the type: SVG Image

# src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

# src/index.css

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

# src/App.test.js

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

# src/App.js

```js
import React from 'react';
import HomePage from './pages/index.tsx'; // Explicitly specify the .tsx extension if necessary

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

```

# src/App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

# public/robots.txt

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

# public/manifest.json

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

# public/logo512.png

This is a binary file of the type: Image

# public/logo192.png

This is a binary file of the type: Image

# public/logo.svg

This is a file of the type: SVG Image

# public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

# public/favicon.ico

This is a binary file of the type: Binary

# src/utils/googleMapsLoader.ts

```ts
declare global {
  interface Window {
    google: any;
  }
}

export const loadGoogleMapsAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVfRl3PtrFzGt-IGAPQvusRHALnK3NJhg&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps API'));
    document.head.appendChild(script);
  });
};
```

# src/types/index.ts

```ts


```

# src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --ring-offset-background: 0 0% 100%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --ring: 217.2 32.6% 17.5%;
    --ring-offset-background: 222.2 84% 4.9%;
  }
}

@layer base {
  * {
    border-color: hsl(var(--border));
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}

@layer components {
  .btn-primary {
    @apply bg-[#EAFC2B] text-black hover:bg-[#d9e527] py-3 px-6 rounded-lg; /* Original primary button style */
  }
  .btn-secondary {
    @apply bg-white text-black py-3 px-6 rounded-lg; /* Updated secondary button style */
  }
  .btn-tertiary {
    @apply bg-white text-black py-3 px-6 rounded-lg;
  }
  .input {
    @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
  }
  .textarea {
    @apply flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
  }
  .bg-background {
    background-color: hsl(var(--background));
  }
  .border-input {
    border-color: hsl(var(--input));
  }
  .ring-offset-background {
    ring-offset-color: hsl(var(--ring-offset-background));
  }
  .placeholder-muted-foreground::placeholder {
    color: hsl(var(--muted-foreground));
  }
  .focus-visible-ring-ring:focus-visible {
    ring-color: hsl(var(--ring));
  }
}
```

# src/services/api.ts

```ts
import { RentalRequestFormData } from '../components/ramprequestform/types';

export interface RentalRequestResponse {
  // Define the response structure here
  success: boolean;
  message: string;
}

export const submitRentalRequest = async (formData: RentalRequestFormData): Promise<RentalRequestResponse> => {
  // Implement the API call here
  const response = await fetch('/api/submit-rental-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit rental request');
  }

  return response.json();
};
```

# src/lib/utils.ts

```ts

```

# src/lib/api.ts

```ts

```

# src/pages/terms-of-service.tsx

```tsx
import React from 'react';
import Layout from '../components/Layout';

export default function TermsOfService() {
  return (
    <Layout
      title="Terms of Service"
      description="Read the terms of service for Same Day Ramps, outlining the rules and regulations for using our website and services."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="text-lg space-y-6">
          <p>
            Welcome to Same Day Ramps. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully.
          </p>
          <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>
            By accessing our website, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          <h2 className="text-2xl font-semibold mt-6">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Same Day Ramps' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <h2 className="text-2xl font-semibold mt-6">3. Disclaimer</h2>
          <p>
            The materials on Same Day Ramps' website are provided on an 'as is' basis. Same Day Ramps makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>
          <h2 className="text-2xl font-semibold mt-6">4. Limitations</h2>
          <p>
            In no event shall Same Day Ramps or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Same Day Ramps' website.
          </p>
          <h2 className="text-2xl font-semibold mt-6">5. Revisions and Errata</h2>
          <p>
            The materials appearing on Same Day Ramps' website could include technical, typographical, or photographic errors. Same Day Ramps does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
          <h2 className="text-2xl font-semibold mt-6">6. Links</h2>
          <p>
            Same Day Ramps has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Same Day Ramps.
          </p>
          <h2 className="text-2xl font-semibold mt-6">7. Site Terms of Use Modifications</h2>
          <p>
            Same Day Ramps may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
          <h2 className="text-2xl font-semibold mt-6">8. Governing Law</h2>
          <p>
            Any claim relating to Same Day Ramps' website shall be governed by the laws of the State of Texas without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/sitemap.xml.ts

```ts

```

# src/pages/privacy-policy.tsx

```tsx
import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Learn about Same Day Ramps' privacy policy, including how we collect, use, and protect your personal information."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="text-lg space-y-6">
          <p>
            At Same Day Ramps, we are committed to protecting your privacy. This policy outlines our practices regarding the collection, use, and disclosure of your information.
          </p>
          <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our site, place an order, subscribe to our newsletter, or fill out a form. The types of information we may collect include your name, email address, mailing address, phone number, and credit card information.
          </p>
          <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p>
            The information we collect from you may be used to personalize your experience, improve our website, process transactions, and send periodic emails.
          </p>
          <h2 className="text-2xl font-semibold mt-6">3. Information Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
          <h2 className="text-2xl font-semibold mt-6">4. Disclosure to Third Parties</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice.
          </p>
          <h2 className="text-2xl font-semibold mt-6">5. Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
          </p>
          <h2 className="text-2xl font-semibold mt-6">6. Changes to Our Privacy Policy</h2>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
          </p>
          <h2 className="text-2xl font-semibold mt-6">7. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below:
          </p>
          <p>Same Day Ramps</p>
          <p>Email: info@samedayramps.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/index.tsx

```tsx
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Button from '../components/ui/button'
import { ChevronRight, ChevronDown } from 'lucide-react'
import RampRequestForm from '../components/ramprequestform/RampRequestForm'
import Modal from '../components/ui/Modal'; // Import the Modal component

interface ReasonProps {
  title: string
  details: string
}

const Reason: React.FC<ReasonProps> = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center justify-between w-full text-left"
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <ChevronDown className="flex-shrink-0" /> : <ChevronRight className="flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {details}
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const reasons = [
    {
      title: 'Quick installation',
      details: 'Our team of experts can typically install your ramp within hours of your request, ensuring you have the accessibility you need as soon as possible.'
    },
    {
      title: 'Flexible rental periods',
      details: 'Whether you need a ramp for a few days or several months, we offer rental terms that can be tailored to your specific situation.'
    },
    {
      title: 'High-quality, ADA-compliant ramps',
      details: 'All our ramps meet or exceed ADA standards, ensuring safety and ease of use for all users.'
    },
    {
      title: 'Experienced, professional installation team',
      details: 'Our installers are trained professionals who ensure your ramp is set up correctly and safely.'
    },
    {
      title: 'Serving the entire Dallas-Fort Worth metroplex',
      details: 'We provide our services throughout the DFW area, including all major cities and suburbs.'
    },
  ]

  return (
    <Layout>
      <section className="bg-[#3099e5] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wheelchair Ramp Rentals in DFW</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fast installation. Affordable rates. Rent as long as you need.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="#get-quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Residential', 'Commercial', 'Event'].map((type) => (
              <div key={type} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{type} Ramps</h3>
                <p className="mb-4">
                  {type === 'Residential'
                    ? 'Temporary ramp solutions for your home.'
                    : type === 'Commercial'
                    ? 'ADA-compliant ramps for businesses.'
                    : 'Short-term rentals for special occasions.'}
                </p>
                <Link href={`/wheelchair-ramp-rentals/${type.toLowerCase()}`} className="text-blue-600 hover:underline flex items-center">
                  Learn More <ChevronRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Same Day Ramps?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <Reason key={index} {...reason} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Helpful Information</h2>
          <p className="text-lg mb-8 text-center">
            Explore our resources to learn more about wheelchair ramps, including types, maintenance, and funding assistance.
          </p>
          <div className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/helpful-information">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="get-quote" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Request a Free Quote</h2>
          <Button onClick={() => setIsModalOpen(true)} className="btn-primary">
            Open Ramp Request Form
          </Button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RampRequestForm />
      </Modal>

      <section className="bg-[#3099e5] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Serving the DFW Area</h2>
          <div className="grid md:grid-cols-3 gap-4 text-lg">
            {['Dallas', 'Fort Worth', 'Arlington', 'Irving', 'Plano', 'Garland', 'Frisco', 'McKinney', 'Denton', 'Lewisville', 'Grand Prairie', 'Decatur', 'Weatherford', 'Rockwall'].map((city) => (
              <Link 
                key={city} 
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`} 
                className="btn-secondary"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent a Wheelchair Ramp?</h2>
        <p className="text-xl mb-6">Get in touch with us for a free quote and same-day installation in many cases.</p>
        <Button asChild size="lg" className="btn-primary">
          <Link href="/rental-request">Request a Quote</Link>
        </Button>
      </section>
    </Layout>
  )
}
```

# src/pages/contact-us.tsx

```tsx
import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/ui/button';
import Input from '../components/ui/input';
import Textarea from '../components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted')
  }

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Same Day Ramps for all your wheelchair ramp rental needs in the Dallas-Fort Worth area. We're here to help you with accessibility solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We're here to answer any questions you may have about our wheelchair ramp rental services. 
              Feel free to reach out to us using the contact information below or by filling out the form.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-2 text-blue-600" />
                <span>1-800-RAMP-NOW</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-blue-600" />
                <span>info@samedayramps.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-blue-600" />
                <span>123 Accessibility Lane, Dallas, TX 75201</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="tel" placeholder="Your Phone Number" required />
              <Textarea placeholder="Your Message" rows={4} required />
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
```

# src/pages/accessibility.tsx

```tsx

```

# src/pages/about-us.tsx

```tsx
import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/ui/button'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <Layout
      title="About Same Day Ramps"
      description="Learn about Same Day Ramps, your trusted provider of wheelchair ramp rentals in the Dallas-Fort Worth area. Our mission, values, and commitment to accessibility."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Same Day Ramps</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Same Day Ramps, our mission is to enhance accessibility and improve the quality of life for individuals with mobility challenges. We strive to provide quick, reliable, and affordable wheelchair ramp solutions to homes, businesses, and events throughout the Dallas-Fort Worth area.
          </p>
          <p className="text-lg mb-4">
            We believe that everyone deserves the freedom to access their surroundings with ease and dignity. Our team is dedicated to making this belief a reality through our top-quality ramp rentals and exceptional customer service.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Accessibility', description: 'We are committed to making spaces accessible for everyone.' },
              { title: 'Reliability', description: 'We deliver on our promises with same-day service whenever possible.' },
              { title: 'Quality', description: 'We provide only the highest quality, ADA-compliant ramps.' },
              { title: 'Customer-First', description: "We prioritize our customers' needs and satisfaction above all else." },
              { title: 'Innovation', description: 'We continuously seek new ways to improve our services and products.' },
              { title: 'Community', description: 'We are dedicated to making a positive impact in the DFW community.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our experienced team of professionals is passionate about accessibility and dedicated to providing the best possible service. From our knowledgeable customer service representatives to our skilled installation technicians, every member of the Same Day Ramps family is committed to excellence.
          </p>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Same Day Ramps Difference?</h2>
          <p className="text-lg mb-6">
            Whether you need a temporary ramp for your home, a long-term solution for your business, or accessibility for your special event, we're here to help.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
```

# src/pages/_document.tsx

```tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* You can add custom head tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

```

# src/pages/_app.tsx

```tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // This import ensures global styles are applied

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

```

# src/pages/404.tsx

```tsx
import React from 'react';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
    </div>
  );
};

export default Custom404;

```

# src/components/TestimonialCard.tsx

```tsx
import React from 'react'
import { Card, CardContent } from '../components/ui/card'

interface TestimonialCardProps {
  quote: string
  author: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <blockquote className="text-lg italic mb-4">"{quote}"</blockquote>
        <p className="text-right font-semibold">- {author}</p>
      </CardContent>
    </Card>
  )
}
```

# src/components/ServiceCard.tsx

```tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import Button from '../components/ui/button';

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

# src/components/Layout.tsx

```tsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './ui/Modal';
import RampRequestForm from './ramprequestform/RampRequestForm';
import Head from 'next/head';
import CookieConsent from './CookieConsent'; // Import the CookieConsent component

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRampRequest = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title ? `${title} | Same Day Ramps` : 'Same Day Ramps'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Header onOpenRampRequest={handleOpenRampRequest} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <RampRequestForm />
      </Modal>
      <CookieConsent /> {/* Add the CookieConsent component here */}
    </div>
  );
}
```

# src/components/Header.tsx

```tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenRampRequest: () => void;
}

export default function Header({ onOpenRampRequest }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#3099e5] text-white py-4 w-full">
      <div className="flex justify-between items-center px-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Same Day Ramps Logo" width={150} height={150} />
        </Link>
        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <nav className={`fixed inset-0 bg-[#3099e5] md:bg-transparent p-4 md:p-0 z-40 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex`}>
          <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-4 md:space-y-0 md:space-x-10">
            <Link href="/wheelchair-ramp-rentals" className="block md:inline-block py-2 md:py-0 text-4xl md:text-base hover:underline">Rentals</Link>
            <Link href="/service-areas" className="block md:inline-block py-2 md:py-0 text-4xl md:text-base hover:underline">Service Areas</Link>
            <Link href="/helpful-information" className="block md:inline-block py-2 md:py-0 text-4xl md:text-base hover:underline">Helpful Info</Link>
            <Link href="/about-us" className="block md:inline-block py-2 md:py-0 text-4xl md:text-base hover:underline">About Us</Link>
            <Link href="/contact-us" className="block md:inline-block py-2 md:py-0 text-4xl md:text-base hover:underline">Contact</Link>
          </div>
        </nav>
        <Button onClick={onOpenRampRequest} className="btn-primary hidden md:inline-flex">
          Request a Ramp
        </Button>
      </div>
    </header>
  );
}
```

# src/components/Footer.tsx

```tsx
import React from 'react'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Same Day Ramps</h2>
            <p>Making accessibility easy in DFW.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Phone className="mr-2" />
              <span>1-800-RAMP-NOW</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@samedayramps.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Same Day Ramps. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

# src/components/CookieConsent.tsx

```tsx
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          We use cookies to improve your experience on our site. By accepting, you agree to our use of cookies. 
          <a href="/privacy-policy" className="underline ml-1">Learn more</a>.
        </p>
        <div className="flex space-x-4">
          <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
            Accept
          </button>
          <button onClick={handleDecline} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
```

# src/components/CityServiceArea.tsx

```tsx
import React from 'react';
import Layout from './Layout';

interface CityServiceAreaProps {
  cityName: string;
  description: string;
}

const CityServiceArea: React.FC<CityServiceAreaProps> = ({ cityName, description }) => {
  return (
    <Layout
      title={`Wheelchair Ramp Rentals in ${cityName}`}
      description={description}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Wheelchair Ramp Rentals in {cityName}
        </h1>
        
        <section className="bg-[#3099e5] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Reliable Ramp Rentals in {cityName}</h2>
            <p className="text-lg mb-8">
              We provide top-quality, ADA-compliant wheelchair ramps for rent in {cityName}. Our team ensures fast installation and flexible rental terms to meet your needs.
            </p>
            <p className="text-lg mb-8">
              Whether you need a ramp for residential, commercial, or event purposes, we have the right solution for you. Contact us today for a free quote and same-day installation in many cases.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Quick and professional installation</li>
              <li>Flexible rental periods tailored to your needs</li>
              <li>High-quality, ADA-compliant ramps</li>
              <li>Experienced and professional installation team</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Customer Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg italic">"The service was excellent and the ramp was installed quickly. Highly recommend!"</p>
                <p className="mt-4 text-right">- Satisfied Customer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg italic">"Great quality ramps and very professional team. Will use again!"</p>
                <p className="mt-4 text-right">- Happy Client</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-4">For more information or to request a quote, please contact us:</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@samedayramps.com</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CityServiceArea;
```

# public/images/residential-ramp.jpg

This is a binary file of the type: Image

# public/images/residential-ramp-large.jpg

This is a binary file of the type: Image

# public/images/commercial-ramp.jpg

This is a binary file of the type: Image

# public/images/commercial-ramp-large.jpg

This is a binary file of the type: Image

# src/pages/wheelchair-ramp-rentals/residential.tsx

```tsx
import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Button from '../../components/ui/button'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'

export default function ResidentialRamps() {
  return (
    <Layout
      title="Residential Wheelchair Ramp Rentals"
      description="Temporary wheelchair ramp solutions for your home. Fast installation and flexible rental periods for short-term recovery or long-term accessibility needs."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Residential Wheelchair Ramp Rentals</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/images/residential-ramp-large.jpg"
              alt="Residential Wheelchair Ramp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Home Accessibility Solutions</h2>
            <p className="text-lg mb-4">
              Our residential wheelchair ramp rentals provide a safe and convenient solution for temporary or long-term accessibility needs at home. Whether you're recovering from surgery, dealing with a temporary injury, or need a long-term solution, we've got you covered.
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Quick and professional installation</li>
              <li>Customizable lengths to fit your home</li>
              <li>Non-slip surfaces for safety in all weather conditions</li>
              <li>ADA compliant designs</li>
              <li>Flexible rental periods</li>
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/rental-request">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Residential Ramps?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fast Installation', description: 'Same-day or next-day installation in most cases.' },
              { title: 'Affordable', description: 'Cost-effective solution compared to permanent modifications.' },
              { title: 'Flexible', description: 'Rent for as long as you need, with easy extension options.' },
              { title: 'Safe', description: 'Built to the highest safety standards with handrails and non-slip surfaces.' },
              { title: 'Customizable', description: 'Tailored to your specific home layout and needs.' },
              { title: 'Removable', description: 'No permanent changes to your property required.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Same Day Ramps made it so easy for my mother to come home from the hospital. They installed the ramp the same day I called!"
              author="Sarah J., Dallas"
            />
            <TestimonialCard
              quote="The flexibility of renting a ramp was perfect for my recovery. Great service and high-quality ramps."
              author="Michael T., Fort Worth"
            />
          </div>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Improve Your Home's Accessibility?</h2>
          <p className="text-lg mb-6">
            Contact us today for a free quote and learn how we can help make your home more accessible with our residential wheelchair ramp rentals.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
```

# src/pages/wheelchair-ramp-rentals/index.tsx

```tsx
import React from 'react'
import Layout from '../../components/Layout'
import ServiceCard from '../../components/ServiceCard'
import Button from '../../components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Residential Ramps',
    description: 'Temporary wheelchair ramp solutions for your home. Ideal for short-term recovery or long-term accessibility needs.',
    image: '/images/residential-ramp.jpg',
    link: '/wheelchair-ramp-rentals/residential',
  },
  {
    title: 'Commercial Ramps',
    description: 'ADA-compliant wheelchair ramps for businesses. Ensure your establishment is accessible to all customers and employees.',
    image: '/images/commercial-ramp.jpg',
    link: '/wheelchair-ramp-rentals/commercial',
  },
  {
    title: 'Event Ramps',
    description: 'Short-term wheelchair ramp rentals for special occasions. Make your event accessible and inclusive for all attendees.',
    image: '/images/event-ramp.jpg',
    link: '/wheelchair-ramp-rentals/events',
  },
]

export default function WheelchairRampRentals() {
  return (
    <Layout 
      title="Wheelchair Ramp Rental Services" 
      description="Explore our range of wheelchair ramp rental services including residential, commercial, and event solutions. Fast installation and flexible rental periods available."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Wheelchair Ramp Rental Services</h1>
        
        <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
          At Same Day Ramps, we offer a variety of wheelchair ramp rental solutions to meet your specific needs. 
          Whether you're looking for a temporary home solution, need to make your business accessible, or planning an inclusive event, we've got you covered.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Rent a Wheelchair Ramp?</h2>
          <p className="text-xl mb-6">Get in touch with us for a free quote and same-day installation in many cases.</p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
```

# src/pages/wheelchair-ramp-rentals/event.tsx

```tsx
import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Button from '../../components/ui/button'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'

export default function EventRamps() {
  return (
    <Layout
      title="Event Wheelchair Ramp Rentals"
      description="Short-term wheelchair ramp rentals for special occasions. Make your event accessible and inclusive for all attendees with our quick and easy solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Event Wheelchair Ramp Rentals</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/images/event-ramp-large.jpg"
              alt="Event Wheelchair Ramp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Inclusive Event Solutions</h2>
            <p className="text-lg mb-4">
              Our event wheelchair ramp rentals ensure that your special occasion is accessible to all attendees. Whether you're planning a wedding, conference, or outdoor festival, we provide quick and easy accessibility solutions.
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Suitable for indoor and outdoor events</li>
              <li>Quick setup and removal</li>
              <li>Various sizes to accommodate different venues</li>
              <li>ADA compliant designs</li>
              <li>Short-term rental options available</li>
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/rental-request">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Event Ramps?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Inclusivity', description: 'Ensure all guests can participate in your event.' },
              { title: 'Versatility', description: 'Suitable for various event types and venues.' },
              { title: 'Easy Setup', description: 'Quick installation and removal to fit your event schedule.' },
              { title: 'Safety First', description: 'Non-slip surfaces and optional handrails for guest safety.' },
              { title: 'Customizable', description: 'Different sizes and configurations available.' },
              { title: 'Professional Service', description: 'Expert advice and installation from our team.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Event Planners Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Same Day Ramps made our outdoor wedding accessible for all our guests. Their service was fantastic!"
              author="Emily R., Wedding Planner in Dallas"
            />
            <TestimonialCard
              quote="We use Same Day Ramps for all our corporate events. They're reliable, professional, and always deliver on time."
              author="Mark S., Event Coordinator in Irving"
            />
          </div>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Make Your Event Accessible to Everyone</h2>
          <p className="text-lg mb-6">
            Contact us today to learn how we can help make your event inclusive and accessible with our wheelchair ramp rental solutions.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
```

# src/pages/wheelchair-ramp-rentals/commercial.tsx

```tsx
import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Button from '../../components/ui/button'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'

export default function CommercialRamps() {
  return (
    <Layout
      title="Commercial Wheelchair Ramp Rentals"
      description="ADA-compliant wheelchair ramps for businesses. Ensure your establishment is accessible to all customers and employees with our flexible rental solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Commercial Wheelchair Ramp Rentals</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/images/commercial-ramp-large.jpg"
              alt="Commercial Wheelchair Ramp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Business Accessibility Solutions</h2>
            <p className="text-lg mb-4">
              Our commercial wheelchair ramp rentals provide ADA-compliant accessibility solutions for businesses of all sizes. Ensure your establishment is welcoming and accessible to all customers and employees.
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>ADA compliant designs</li>
              <li>Suitable for various business types</li>
              <li>Durable construction for high-traffic areas</li>
              <li>Professional installation and removal</li>
              <li>Flexible rental terms to suit your needs</li>
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/rental-request">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Our Commercial Ramps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'ADA Compliance', description: 'Meet legal requirements for accessibility.' },
              { title: 'Increased Customer Base', description: 'Welcome customers with mobility challenges.' },
              { title: 'Employee Accommodation', description: 'Provide equal access for all employees.' },
              { title: 'Flexible Solutions', description: 'Temporary or long-term rentals available.' },
              { title: 'Cost-Effective', description: 'More affordable than permanent construction.' },
              { title: 'Quick Installation', description: 'Minimize disruption to your business operations.' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Business Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Same Day Ramps helped us quickly comply with ADA requirements. Their service was prompt and professional."
              author="John D., Store Owner in Plano"
            />
            <TestimonialCard
              quote="The flexibility of renting a ramp was perfect for our seasonal business needs. Great quality and service!"
              author="Lisa M., Event Coordinator in Arlington"
            />
          </div>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Make Your Business Accessible Today</h2>
          <p className="text-lg mb-6">
            Contact us for a free consultation and quote. Let us help you make your business welcoming to all customers and compliant with accessibility regulations.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
```

# src/pages/helpful-information/wheelchair-ramp-types.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';

export default function WheelchairRampTypes() {
  return (
    <Layout
      title="Types of Wheelchair Ramps"
      description="Explore the different types of wheelchair ramps available to suit various needs and environments."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Types of Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            Wheelchair ramps come in various types, each designed to meet specific needs and environments. Understanding the differences can help you choose the right ramp for your situation.
          </p>

          <h2 className="text-3xl font-semibold mt-6">Portable Ramps</h2>
          <p>
            Portable ramps are lightweight and easy to transport, making them ideal for temporary use or travel. They can be used to overcome small obstacles like steps or curbs.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Easy to carry and set up, suitable for temporary needs.</li>
            <li><strong>Ideal For:</strong> Travel, temporary access needs, and small height differences.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Threshold Ramps</h2>
          <p>
            Threshold ramps are designed to bridge small height differences at doorways or other thresholds. They provide a smooth transition for wheelchairs and scooters.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Simple installation, enhances accessibility at doorways.</li>
            <li><strong>Ideal For:</strong> Homes, offices, and any place with small steps or raised thresholds.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Modular Ramps</h2>
          <p>
            Modular ramps are customizable and can be configured to fit various spaces. They are suitable for both residential and commercial use and can be adjusted as needed.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Flexible design, can be reconfigured or expanded.</li>
            <li><strong>Ideal For:</strong> Long-term use, complex access needs, and larger height differences.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Permanent Ramps</h2>
          <p>
            Permanent ramps are built to last and are typically constructed from durable materials like concrete or metal. They are a long-term solution for accessibility.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Durable and reliable, requires professional installation.</li>
            <li><strong>Ideal For:</strong> Homes and businesses with ongoing accessibility needs.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Folding Ramps</h2>
          <p>
            Folding ramps are similar to portable ramps but can be folded for easier storage and transport. They are convenient for users who need a ramp on the go.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Compact storage, easy to transport.</li>
            <li><strong>Ideal For:</strong> Travel, temporary access, and users with limited storage space.</li>
          </ul>

          <p>
            Choosing the right type of wheelchair ramp depends on your specific needs, the environment, and the level of accessibility required. For more information or assistance in selecting the right ramp, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/helpful-information/maintenance-safety-tips.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';

export default function MaintenanceSafetyTips() {
  return (
    <Layout
      title="Maintenance and Safety Tips for Wheelchair Ramps"
      description="Discover essential maintenance and safety tips to keep your wheelchair ramp in top condition."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Maintenance and Safety Tips for Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            Regular maintenance and safety checks are crucial to ensure that your wheelchair ramp remains safe and functional. Here are some tips to help you maintain your ramp.
          </p>
          {/* Add more detailed content here */}
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/helpful-information/index.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const HelpfulInformation: React.FC = () => {
  const topics = [
    { title: 'ADA Guidelines', path: '/helpful-information/ada-guidelines' },
    { title: 'FAQs', path: '/helpful-information/faqs' },
    { title: 'Funding Assistance', path: '/helpful-information/funding-assistance' },
    { title: 'How to Get a Wheelchair Ramp', path: '/helpful-information/how-to-get-a-wheelchair-ramp' },
    { title: 'Maintenance and Safety Tips', path: '/helpful-information/maintenance-safety-tips' },
    { title: 'Wheelchair Ramp Types', path: '/helpful-information/wheelchair-ramp-types' },
  ];

  return (
    <Layout
      title="Helpful Information"
      description="Explore helpful information about wheelchair ramps, including types, maintenance, and funding assistance."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Helpful Information</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <Link key={topic.title} href={topic.path} className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-100">
              <h2 className="text-2xl font-semibold">{topic.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HelpfulInformation;

```

# src/pages/helpful-information/how-to-get-a-wheelchair-ramp.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';

export default function HowToGetAWheelchairRamp() {
  return (
    <Layout
      title="How to Get a Wheelchair Ramp"
      description="Learn the steps involved in acquiring a wheelchair ramp for your home or business."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">How to Get a Wheelchair Ramp</h1>
        <div className="text-lg space-y-6">
          <p>
            Getting a wheelchair ramp involves several steps, including assessing your needs, choosing the right type of ramp, and arranging for installation.
          </p>
          {/* Add more detailed content here */}
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/helpful-information/funding-assistance.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';

export default function FundingAssistance() {
  return (
    <Layout
      title="Funding Assistance for Wheelchair Ramps"
      description="Explore funding options available for wheelchair ramp rentals and installations."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Funding Assistance for Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            There are various funding options available to help cover the cost of wheelchair ramp rentals and installations. These may include government programs, non-profit organizations, and insurance coverage.
          </p>
          {/* Add more detailed content here */}
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/helpful-information/faqs.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link'; // Import the Link component

export default function FAQs() {
  return (
    <Layout
      title="Frequently Asked Questions"
      description="Find answers to common questions about our wheelchair ramp rental services."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="text-lg space-y-6">
          <h2 className="text-2xl font-semibold mt-6">1. How do I rent a wheelchair ramp?</h2>
          <p>
            Renting a wheelchair ramp is easy. Simply contact us to discuss your needs, and we'll guide you through the process. We offer flexible rental terms to suit your specific situation.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. What types of ramps do you offer?</h2>
          <p>
            We offer a variety of ramps including portable, threshold, modular, and permanent ramps. Each type is designed to meet different needs and environments. Visit our <Link href="/helpful-information/wheelchair-ramp-types" className="text-blue-600 hover:underline">Wheelchair Ramp Types</Link> page for more details.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Are your ramps ADA compliant?</h2>
          <p>
            Yes, all our ramps meet or exceed ADA standards, ensuring safety and accessibility for all users. We adhere to the guidelines to provide the best solutions for residential, commercial, and event settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. How quickly can a ramp be installed?</h2>
          <p>
            Our team of experts can typically install your ramp within hours of your request, ensuring you have the accessibility you need as soon as possible. Same-day installation is available in many cases.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Do you offer long-term rentals?</h2>
          <p>
            Yes, we offer both short-term and long-term rental options. Whether you need a ramp for a few days or several months, we can tailor our rental terms to meet your needs.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. How do I maintain the ramp?</h2>
          <p>
            Regular maintenance is important to ensure the safety and functionality of your ramp. Check out our <Link href="/helpful-information/maintenance-safety-tips" className="text-blue-600 hover:underline">Maintenance and Safety Tips</Link> page for guidance.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. What if I need financial assistance?</h2>
          <p>
            There are various funding options available to help cover the cost of wheelchair ramp rentals and installations. Visit our <Link href="/helpful-information/funding-assistance" className="text-blue-600 hover:underline">Funding Assistance</Link> page for more information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. How can I contact you for more information?</h2>
          <p>
            You can reach us via email at <a href="mailto:info@samedayramps.com" className="text-blue-600 hover:underline">info@samedayramps.com</a> or call us at (123) 456-7890. Our team is ready to assist you with any questions or concerns.
          </p>
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/helpful-information/ada-guidelines.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';

export default function ADAGuidelines() {
  return (
    <Layout
      title="ADA Guidelines for Wheelchair Ramps"
      description="Learn about the ADA guidelines for wheelchair ramps to ensure accessibility and compliance for residential, commercial, and event rentals."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">ADA Guidelines for Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            The Americans with Disabilities Act (ADA) provides guidelines to ensure that wheelchair ramps are accessible and safe for all users. These guidelines are crucial for residential, commercial, and event settings to ensure compliance and accessibility.
          </p>

          <h2 className="text-3xl font-semibold mt-6">Residential Rentals</h2>
          <p>
            For residential settings, ADA guidelines help ensure that ramps provide safe and easy access to homes. Key considerations include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Slope:</strong> The recommended slope for residential ramps is 1:12, meaning for every inch of height, there should be at least 12 inches of ramp run.</li>
            <li><strong>Width:</strong> Ramps should be at least 36 inches wide to accommodate most wheelchairs.</li>
            <li><strong>Handrails:</strong> Handrails are recommended for ramps with a rise greater than 6 inches.</li>
            <li><strong>Surface:</strong> Non-slip surfaces are essential for safety in all weather conditions.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Commercial Rentals</h2>
          <p>
            In commercial settings, ADA compliance is not only about accessibility but also about meeting legal requirements. Considerations include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Slope:</strong> The maximum slope for commercial ramps is 1:12, but a gentler slope is preferred for ease of use.</li>
            <li><strong>Landing:</strong> Ramps must have a level landing at the top and bottom, and at any change of direction.</li>
            <li><strong>Width:</strong> A minimum width of 36 inches is required, but wider ramps are recommended for high-traffic areas.</li>
            <li><strong>Signage:</strong> Proper signage should be used to direct users to accessible entrances.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Event Rentals</h2>
          <p>
            For events, temporary ramps must be both functional and compliant. Key points include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Portability:</strong> Ramps should be easy to set up and remove, with a design that accommodates temporary use.</li>
            <li><strong>Stability:</strong> Ensure ramps are securely anchored to prevent movement during use.</li>
            <li><strong>Accessibility:</strong> Ramps should be placed to provide the most direct access to event areas.</li>
            <li><strong>Safety:</strong> Non-slip surfaces and handrails are crucial for guest safety.</li>
          </ul>

          <p>
            Ensuring compliance with ADA guidelines not only meets legal requirements but also enhances accessibility for all users. For more information or assistance with your specific needs, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
}

```

# src/pages/reviews/index.tsx

```tsx

```

# src/pages/portfolio/residential.tsx

```tsx

```

# src/pages/portfolio/index.tsx

```tsx

```

# src/pages/portfolio/events.tsx

```tsx

```

# src/pages/portfolio/commercial.tsx

```tsx

```

# src/pages/service-areas/weatherford.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function WeatherfordServiceArea() {
  return (
    <CityServiceArea
      cityName="Weatherford"
      description="Offering wheelchair ramp rentals in Weatherford with quick installation and customizable rental periods. Get your free quote today."
    />
  );
}
```

# src/pages/service-areas/rockwall.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function RockwallServiceArea() {
  return (
    <CityServiceArea
      cityName="Rockwall"
      description="Providing wheelchair ramp rentals in Rockwall with fast installation and flexible rental terms. Contact us for a free quote."
    />
  );
}
```

# src/pages/service-areas/plano.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function PlanoServiceArea() {
  return (
    <CityServiceArea
      cityName="Plano"
      description="Reliable wheelchair ramp rentals in Plano. Fast installation and flexible rental terms. Get a free quote today."
    />
  );
}

```

# src/pages/service-areas/mckinney.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function McKinneyServiceArea() {
  return (
    <CityServiceArea
      cityName="McKinney"
      description="Offering wheelchair ramp rentals in McKinney with quick installation and customizable rental periods. Get your free quote today."
    />
  );
}
```

# src/pages/service-areas/lewisville.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function LewisvilleServiceArea() {
  return (
    <CityServiceArea
      cityName="Lewisville"
      description="Wheelchair ramp rentals in Lewisville with professional installation and adaptable rental options. Contact us for a free estimate."
    />
  );
}
```

# src/pages/service-areas/irving.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function IrvingServiceArea() {
  return (
    <CityServiceArea
      cityName="Irving"
      description="Wheelchair ramp rentals in Irving with professional installation and adaptable rental options. Contact us for a free estimate."
    />
  );
}

```

# src/pages/service-areas/index.tsx

```tsx
import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const ServiceAreas: React.FC = () => {
  const cities = [
    'Dallas', 'Fort Worth', 'Arlington', 'Irving', 'Plano', 'Garland',
    'Frisco', 'McKinney', 'Denton', 'Lewisville', 'Grand Prairie',
    'Decatur', 'Weatherford', 'Rockwall'
  ];

  return (
    <Layout
      title="Service Areas"
      description="Explore our wheelchair ramp rental services across various cities in the Dallas-Fort Worth area."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Service Areas</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city} href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`} className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-100">
              <h2 className="text-2xl font-semibold">{city}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServiceAreas;

```

# src/pages/service-areas/grand-prairie.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function GrandPrairieServiceArea() {
  return (
    <CityServiceArea
      cityName="Grand Prairie"
      description="Grand Prairie's premier wheelchair ramp rental service. Quick installation and flexible rental periods. Request your free quote."
    />
  );
}
```

# src/pages/service-areas/garland.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function GarlandServiceArea() {
  return (
    <CityServiceArea
      cityName="Garland"
      description="Garland's premier wheelchair ramp rental service. Quick installation and flexible rental periods. Request your free quote."
    />
  );
}

```

# src/pages/service-areas/frisco.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function FriscoServiceArea() {
  return (
    <CityServiceArea
      cityName="Frisco"
      description="Frisco's trusted provider for wheelchair ramp rentals. Fast setup and flexible terms. Request a free quote now."
    />
  );
}
```

# src/pages/service-areas/fort-worth.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function FortWorthServiceArea() {
  return (
    <CityServiceArea
      cityName="Fort Worth"
      description="Offering wheelchair ramp rentals in Fort Worth with quick installation and customizable rental periods. Get your free quote today."
    />
  );
}

```

# src/pages/service-areas/denton.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function DentonServiceArea() {
  return (
    <CityServiceArea
      cityName="Denton"
      description="Providing wheelchair ramp rentals in Denton with fast installation and flexible rental terms. Contact us for a free quote."
    />
  );
}
```

# src/pages/service-areas/decatur.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function DecaturServiceArea() {
  return (
    <CityServiceArea
      cityName="Decatur"
      description="Decatur's trusted provider for wheelchair ramp rentals. Fast setup and flexible terms. Request a free quote now."
    />
  );
}
```

# src/pages/service-areas/dallas.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function DallasServiceArea() {
  return (
    <CityServiceArea
      cityName="Dallas"
      description="Providing wheelchair ramp rentals in Dallas with fast installation and flexible rental terms. Contact us for a free quote."
    />
  );
}

```

# src/pages/service-areas/arlington.tsx

```tsx
import React from 'react';
import CityServiceArea from '../../components/CityServiceArea';

export default function ArlingtonServiceArea() {
  return (
    <CityServiceArea
      cityName="Arlington"
      description="Arlington's trusted provider for wheelchair ramp rentals. Fast setup and flexible terms. Request a free quote now."
    />
  );
}

```

# src/pages/api/contact.ts

```ts

```

# src/pages/blog/index.tsx

```tsx

```

# src/pages/blog/[slug].tsx

```tsx

```

# src/components/ui/textarea.tsx

```tsx
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea(props: TextareaProps) {
  return <textarea {...props} className={`form-textarea ${props.className || ''}`} />
}
```

# src/components/ui/spinner.tsx

```tsx
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900"></div>
  );
};

export default Spinner;
```

# src/components/ui/select.tsx

```tsx
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <select
      {...props}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      {children}
    </select>
  );
};

export default Select;
```

# src/components/ui/input.tsx

```tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return <input {...props} className={`form-input ${props.className || ''}`} />
}

```

# src/components/ui/card.tsx

```tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-card text-card-foreground p-4 rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border-b border-input p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border-t border-input p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return (
    <h2 className={`text-xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

const CardDescription: React.FC<CardProps> = ({ children, className }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  );
};

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription };
```

# src/components/ui/button.tsx

```tsx
import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  size?: string; // Add this line
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, disabled, children, className, asChild, size }) => {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className} ${size}`} // Use className to apply btn-primary or btn-secondary
    >
      {children}
    </Component>
  );
};

export default Button;

```

# src/components/ui/Modal.tsx

```tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl h-auto max-h-[90vh] mx-auto p-4 overflow-y-auto rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

# src/components/ramprequestform/validation.ts

```ts
import { RentalRequestFormData, FormErrors } from './types';

export const validateContactInfo = (formData: RentalRequestFormData): FormErrors => {
  const errors: FormErrors = { customerInfo: {} };

  if (!formData.customerInfo.firstName) {
    errors.customerInfo!.firstName = 'First name is required';
  }
  if (!formData.customerInfo.lastName) {
    errors.customerInfo!.lastName = 'Last name is required';
  }
  if (!formData.customerInfo.email) {
    errors.customerInfo!.email = 'Email is required';
  }
  if (!formData.customerInfo.phone) {
    errors.customerInfo!.phone = 'Phone number is required';
  }

  return errors;
};
```

# src/components/ramprequestform/types.ts

```ts
export interface RentalRequestFormData {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  rampDetails: {
    knowRampLength: boolean;
    knowRentalDuration: boolean;
    installTimeframe: string;
    mobilityAids: string[];
    rampLength?: number;
    rentalDuration?: number;
  };
  installAddress: string;
}

export interface FormErrors {
  customerInfo?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  rampDetails?: {
    rampLength?: string;
    rentalDuration?: string;
    installTimeframe?: string;
    mobilityAids?: string;
  };
  installAddress?: string;
}

export type FormChangeHandler = (field: string, value: any, error?: string) => void;
```

# src/components/ramprequestform/RampRequestForm.tsx

```tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { ConfirmationPage } from './ConfirmationPage';
import { RentalRequestFormData, FormErrors, FormChangeHandler } from './types';
import { submitRentalRequest, RentalRequestResponse } from '../../services/api';

export const RampRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<RentalRequestFormData>({
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    rampDetails: {
      knowRampLength: false,
      knowRentalDuration: false,
      installTimeframe: '',
      mobilityAids: [],
    },
    installAddress: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange: FormChangeHandler = (field, value, error?) => {
    setFormData(prevData => {
      const newData = { ...prevData };
      const [section, subField] = field.split('.');
      if (subField) {
        newData[section as keyof RentalRequestFormData] = {
          ...(newData[section as keyof RentalRequestFormData] as object),
          [subField]: value,
        } as any;
      } else {
        (newData as any)[field] = value;
      }
      return newData;
    });

    if (error !== undefined) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        const [section, subField] = field.split('.');
        if (subField) {
          if (!newErrors[section as keyof FormErrors]) {
            newErrors[section as keyof FormErrors] = {} as any;
          }
          (newErrors[section as keyof FormErrors] as any)[subField] = error;
        } else {
          (newErrors as any)[field] = error;
        }
        return newErrors;
      });
    } else {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        const [section, subField] = field.split('.');
        if (subField) {
          if (newErrors[section as keyof FormErrors]) {
            delete (newErrors[section as keyof FormErrors] as any)[subField];
          }
        } else {
          delete (newErrors as any)[field];
        }
        return newErrors;
      });
    }
  };

  const sendHeight = useCallback(() => {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ type: 'setHeight', height }, '*');
  }, []);

  useEffect(() => {
    sendHeight();

    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    resizeObserver.observe(document.body);

    window.addEventListener('load', sendHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('load', sendHeight);
    };
  }, [sendHeight]);

  useEffect(() => {
    sendHeight();
  }, [currentPage, formData, sendHeight]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const response: RentalRequestResponse = await submitRentalRequest(formData);
        console.log('Form submitted successfully:', response);
        setCurrentPage(2); // Move to the confirmation page
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.customerInfo.firstName) {
      if (!newErrors.customerInfo) newErrors.customerInfo = {};
      newErrors.customerInfo.firstName = 'First name is required';
    }
    if (!formData.customerInfo.lastName) {
      if (!newErrors.customerInfo) newErrors.customerInfo = {};
      newErrors.customerInfo.lastName = 'Last name is required';
    }
    if (!formData.customerInfo.email) {
      if (!newErrors.customerInfo) newErrors.customerInfo = {};
      newErrors.customerInfo.email = 'Email is required';
    }
    if (!formData.customerInfo.phone) {
      if (!newErrors.customerInfo) newErrors.customerInfo = {};
      newErrors.customerInfo.phone = 'Phone number is required';
    }
    if (!formData.rampDetails.installTimeframe) {
      if (!newErrors.rampDetails) newErrors.rampDetails = {};
      newErrors.rampDetails.installTimeframe = 'Installation timeframe is required';
    }
    if (!formData.installAddress) {
      newErrors.installAddress = 'Installation address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="rental-form-container w-full max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Ramp Request Form</h1>
      {currentPage < 2 ? (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="form-section">
            {currentPage === 0 && (
              <ContactInfoForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onNextPage={handleNextPage}
              />
            )}
            {currentPage === 1 && (
              <RampDetailsForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onPrevPage={handlePrevPage}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
          {submitError && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              Error: {submitError}
            </div>
          )}
        </form>
      ) : (
        <ConfirmationPage />
      )}
    </div>
  );
};

export default RampRequestForm;
```

# src/components/ramprequestform/RampDetailsForm.tsx

```tsx
import React, { useEffect, useRef } from 'react';
import FormField from './FormField';
import Button from '../ui/button';
import Input from '../ui/input';
import Select from '../ui/select';
import Spinner from '../ui/spinner';
import { RentalRequestFormData, FormErrors, FormChangeHandler } from './types';
import { loadGoogleMapsAPI } from '../../utils/googleMapsLoader';

interface RampDetailsFormProps {
  formData: RentalRequestFormData;
  errors: FormErrors;
  onChange: FormChangeHandler;
  onPrevPage: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export const RampDetailsForm: React.FC<RampDetailsFormProps> = ({
  formData,
  errors,
  onChange,
  onPrevPage,
  onSubmit,
  isSubmitting,
}) => {
  const addressInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadGoogleMapsAPI().then(() => {
      if (window.google && addressInputRef.current) {
        const autocomplete = new (window as any).google.maps.places.Autocomplete(addressInputRef.current, {
          types: ['address'],
          componentRestrictions: { country: 'us' },
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.formatted_address) {
            onChange('installAddress', place.formatted_address);
          }
        });
      }
    }).catch(error => {
      console.error('Error loading Google Maps API:', error);
    });
  }, [onChange]);

  const handleMobilityAidChange = (aid: string) => {
    const newMobilityAids = formData.rampDetails.mobilityAids.includes(aid)
      ? formData.rampDetails.mobilityAids.filter(item => item !== aid)
      : [...formData.rampDetails.mobilityAids, aid];
    onChange('rampDetails.mobilityAids', newMobilityAids);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Ramp Details</h2>
      
      <div className="space-y-2">
        <label className="form-label">
          Do you know the required ramp length?
        </label>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="knowRampLength"
              value="true"
              checked={formData.rampDetails.knowRampLength === true}
              onChange={(e) => onChange('rampDetails.knowRampLength', e.target.value === 'true')}
              className="form-radio"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="knowRampLength"
              value="false"
              checked={formData.rampDetails.knowRampLength === false}
              onChange={(e) => onChange('rampDetails.knowRampLength', e.target.value === 'true')}
              className="form-radio"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      
      {formData.rampDetails.knowRampLength && (
        <div className="mb-4">
          <label className="form-label" htmlFor="rampLength">
            Estimated ramp length required (in feet)
          </label>
          <Input
            type="number"
            name="rampLength"
            id="rampLength"
            value={formData.rampDetails.rampLength || ''}
            onChange={(e) => onChange('rampDetails.rampLength', parseFloat(e.target.value))}
            min="4"
            max="60"
            step="1"
          />
          {errors.rampDetails?.rampLength && <p className="form-error">{errors.rampDetails.rampLength}</p>}
        </div>
      )}

      <div className="mb-4">
        <label className="form-label">
          Do you know the duration of the rental?
        </label>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="knowRentalDuration"
              value="true"
              checked={formData.rampDetails.knowRentalDuration === true}
              onChange={(e) => onChange('rampDetails.knowRentalDuration', e.target.value === 'true')}
              className="form-radio"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="knowRentalDuration"
              value="false"
              checked={formData.rampDetails.knowRentalDuration === false}
              onChange={(e) => onChange('rampDetails.knowRentalDuration', e.target.value === 'true')}
              className="form-radio"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {formData.rampDetails.knowRentalDuration && (
        <div className="mb-4">
          <label className="form-label" htmlFor="rentalDuration">
            Estimated rental duration (in months)
          </label>
          <Input
            type="number"
            name="rentalDuration"
            id="rentalDuration"
            value={formData.rampDetails.rentalDuration || ''}
            onChange={(e) => onChange('rampDetails.rentalDuration', parseInt(e.target.value))}
            min="1"
            max="72"
            step="1"
          />
          {errors.rampDetails?.rentalDuration && <p className="form-error">{errors.rampDetails.rentalDuration}</p>}
        </div>
      )}
      <div className="mb-4">
        <label className="form-label">How soon do you need it installed?</label>
        <Select
          name="installTimeframe"
          value={formData.rampDetails.installTimeframe}
          onChange={(e) => onChange('rampDetails.installTimeframe', e.target.value)}
        >
          <option value="">Select timeframe</option>
          <option value="Within 24 hours">Within 24 hours</option>
          <option value="Within 2 days">Within 2 days</option>
          <option value="Within 3 days">Within 3 days</option>
          <option value="Within 1 week">Within 1 week</option>
          <option value="Over 1 week">Over 1 week</option>
        </Select>
        {errors.rampDetails?.installTimeframe && <p className="form-error">{errors.rampDetails.installTimeframe}</p>}
      </div>
      <div className="mb-4">
        <label className="form-label">Mobility aids to be used with the ramp</label>
        <div className="space-y-3">
          {['Wheelchair', 'Motorized Scooter', 'Walker/Cane', 'None'].map((aid) => (
            <label key={aid} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.rampDetails.mobilityAids.includes(aid)}
                onChange={() => handleMobilityAidChange(aid)}
                className="form-checkbox"
              />
              <span className="ml-3 text-input">
                {aid}
              </span>
            </label>
          ))}
        </div>
        {errors.rampDetails?.mobilityAids && <p className="form-error">{errors.rampDetails.mobilityAids}</p>}
      </div>
      <FormField
        label="Installation Address"
        name="installAddress"
        value={formData.installAddress}
        onChange={(e) => onChange('installAddress', e.target.value)}
        error={errors.installAddress}
        required
        ref={addressInputRef}
        placeholder="Start typing an address..."
      />
      <div className="mt-8 space-y-4">
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="btn btn-primary w-full"
        >
          {isSubmitting ? <Spinner /> : 'Submit Request'}
        </Button>
        <div className="flex justify-center">
          <button 
            type="button" 
            onClick={onPrevPage} 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

```

# src/components/ramprequestform/FormField.tsx

```tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = 'text',
  placeholder,
}, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
          error ? 'border-red-500' : ''
        }`}
        required={required}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default FormField;
```

# src/components/ramprequestform/ContactInfoForm.tsx

```tsx
import React from 'react';
import FormField from './FormField';
import Button from '../ui/button';
import { RentalRequestFormData, FormErrors, FormChangeHandler } from './types';
import { validateContactInfo } from './validation';

interface ContactInfoFormProps {
  formData: RentalRequestFormData;
  errors: FormErrors;
  onChange: FormChangeHandler;
  onNextPage: () => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  formData,
  errors,
  onChange,
  onNextPage,
}) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(value);
    onChange('customerInfo.phone', formattedPhoneNumber);
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength <= 3) {
      return phoneNumber;
    } else if (phoneNumberLength <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleNextPage = () => {
    const validationErrors = validateContactInfo(formData);
    if (Object.keys(validationErrors.customerInfo || {}).length === 0) {
      onNextPage();
    } else {
      Object.entries(validationErrors.customerInfo || {}).forEach(([field, error]) => {
        onChange(`customerInfo.${field}`, formData.customerInfo[field as keyof typeof formData.customerInfo], error);
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <FormField
        label="First Name"
        name="customerInfo.firstName"
        value={formData.customerInfo.firstName}
        onChange={(e) => onChange('customerInfo.firstName', e.target.value)}
        error={errors.customerInfo?.firstName}
        required
      />
      <FormField
        label="Last Name"
        name="customerInfo.lastName"
        value={formData.customerInfo.lastName}
        onChange={(e) => onChange('customerInfo.lastName', e.target.value)}
        error={errors.customerInfo?.lastName}
        required
      />
      <FormField
        label="Email Address"
        name="customerInfo.email"
        type="email"
        value={formData.customerInfo.email}
        onChange={(e) => onChange('customerInfo.email', e.target.value)}
        error={errors.customerInfo?.email}
        required
      />
      <FormField
        label="Phone Number"
        name="customerInfo.phone"
        type="tel"
        value={formData.customerInfo.phone}
        onChange={handlePhoneChange}
        error={errors.customerInfo?.phone}
        required
        placeholder="(123) 456-7890"
      />
      <div className="flex justify-center mt-6">
        <Button 
          type="button" 
          onClick={handleNextPage} 
          className="btn btn-primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

```

# src/components/ramprequestform/ConfirmationPage.tsx

```tsx
import React from 'react';

export const ConfirmationPage: React.FC = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
      <p className="text-lg mb-6">
        Your ramp request has been submitted successfully. We will contact you shortly to confirm the details.
      </p>
      <p className="text-lg">
        If you have any questions, feel free to reach out to us at <a href="mailto:info@samedayramps.com" className="text-blue-600 hover:underline">info@samedayramps.com</a>.
      </p>
    </div>
  );
};

```

