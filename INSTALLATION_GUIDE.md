# Installation Guide for @ikelongo/react-component-library

## For Package Consumers

### 1. Setup GitHub Package Registry Access

Create or update your `.npmrc` file in your project root:

```
@ikelongo:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. Generate GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "NPM Package Access"
4. Select scopes: `read:packages`
5. Copy the generated token

### 3. Set Environment Variable

**Windows (PowerShell):**
```powershell
$env:GITHUB_TOKEN="your_token_here"
```

**Windows (Command Prompt):**
```cmd
set GITHUB_TOKEN=your_token_here
```

**macOS/Linux:**
```bash
export GITHUB_TOKEN=your_token_here
```

### 4. Install the Package

```bash
npm install @ikelongo/react-component-library
# or
yarn add @ikelongo/react-component-library
# or
pnpm add @ikelongo/react-component-library
```

## Usage

### Basic Navbar Usage

```tsx
import { Navbar } from '@ikelongo/react-component-library';

function App() {
  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <Navbar 
      navLinks={navItems}
      logoSrc="/your-logo.png"
      backgroundColor="bg-white"
      showBookingButton={true}
      showLoginButton={true}
      bookingText="Book Now"
      loginText="Login"
      bookingHref="/booking"
      loginHref="/login"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navLinks` | `Array<{href: string, label: string}>` | `[]` | Navigation menu items |
| `logoSrc` | `string` | Logo image | Path to logo image |
| `backgroundColor` | `string` | `"bg-white"` | Tailwind CSS background class |
| `showBookingButton` | `boolean` | `true` | Show/hide booking button |
| `showLoginButton` | `boolean` | `true` | Show/hide login button |
| `bookingText` | `string` | `"Book a Call"` | Text for booking button |
| `loginText` | `string` | `"Log In"` | Text for login button |
| `bookingHref` | `string` | `"/booking"` | URL for booking button |
| `loginHref` | `string` | `"/login"` | URL for login button |

## Requirements

- React 19.1.0+
- Next.js 15.3.4+ (if using Next.js)
- Tailwind CSS (for styling)

## Troubleshooting

### Authentication Issues
- Ensure your GitHub token has `read:packages` permission
- Verify the token is correctly set in environment variables
- Check that your `.npmrc` file is properly configured

### TypeScript Issues
- Make sure you have proper type imports
- The package includes TypeScript definitions

### Styling Issues
- Ensure Tailwind CSS is properly configured in your project
- The component uses Tailwind classes for styling
