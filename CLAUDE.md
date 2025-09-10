# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` or `pnpm start`
- **Build for production**: `npm run build` or `pnpm build`
- **Run tests**: `npm test` or `pnpm test`
- **Eject from Create React App**: `npm run eject` (use with caution)

## Architecture Overview

This is a personal portfolio website built with Create React App and TypeScript. The application follows a component-based architecture with the following structure:

### Key Architecture Patterns

- **Single Page Application**: Uses React Router but currently renders only the Home page
- **Context-based State Management**: `UiContext` manages global UI state (night mode, blob visibility)
- **Component Organization**: 
  - `components/`: Reusable UI components (Blob, Header, TimelineItem, etc.)
  - `sections/`: Page sections (Hero, Experience)
  - `pages/`: Top-level page components
  - `context/`: React Context providers for state management
  - `hooks/`: Custom React hooks
  - `lib/`: Utility functions

### UI State Management

The app uses React Context (`UiContext`) to manage:
- `nightMode`: Boolean for dark/light theme toggle
- `showBlob`: Boolean to control animated blob visibility
- Global toggle functions for these states

### Styling

- **Tailwind CSS**: Primary styling framework with custom configuration
- **Custom Colors**: `my-green` (#41ff11), `my-teal` (#3ca6b9)
- **Custom Fonts**: Lato (sans-serif), Abril Fatface (serif)
- **Animations**: Custom grow-shrink animation with CSS variables for scaling
- **GSAP**: Used for advanced animations (imported in components)

### Component Architecture

- **Blob System**: Animated background elements with container management
- **Timeline Components**: For displaying experience/career information
- **Header/Footer**: Standard layout components
- **Glowing Text**: Specialized text effect component

## Package Manager

This project uses `pnpm` as indicated by the `pnpm-lock.yaml` file, though `npm` commands will also work.

## Testing

Uses React Testing Library with Jest (standard Create React App setup).