# Portfolio Website - Srimani Teja Ejjagiri

## Overview

This is a modern, dark-themed portfolio website for Srimani Teja Ejjagiri, a cybersecurity developer and Computer Science student. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing cybersecurity projects, achievements, and technical skills.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Vite with custom middleware integration
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful API structure with `/api` prefix

## Key Components

### Frontend Components
1. **Navigation System**: Smooth scrolling navigation with mobile responsiveness
2. **Portfolio Sections**: 
   - Hero section with personal introduction
   - About section with academic achievements
   - Skills section with animated progress bars
   - Projects showcase with technology tags
   - Achievements and certifications
   - Education timeline
   - Contact information

3. **UI System**: Complete shadcn/ui component library integration including buttons, cards, forms, dialogs, and more

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory implementation
2. **Route Registration**: Centralized route management system
3. **Development Tooling**: Vite integration for hot module replacement

### Shared Components
1. **Database Schema**: Drizzle ORM schema definitions for users table
2. **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **Server Processing**: Express.js handles requests through registered routes
3. **Data Storage**: Currently uses in-memory storage, prepared for PostgreSQL integration
4. **Response Handling**: JSON responses with proper error handling and logging

## External Dependencies

### Core Dependencies
- **Database**: Configured for PostgreSQL with Neon Database (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation
- **UI Library**: Comprehensive Radix UI component collection

### Development Dependencies
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation
- **Code Quality**: TypeScript for type safety
- **Styling**: PostCSS and Autoprefixer for CSS processing

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server code to `dist`
3. **Production Start**: Node.js serves the compiled application

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with compiled backend
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Database Setup
- **Schema Management**: Drizzle Kit for migrations in `./migrations` directory
- **Development**: `npm run db:push` for schema synchronization
- **Production**: Migrations should be run before deployment

## Architecture Decisions

### Technology Choices

**React + TypeScript**: Chosen for type safety, component reusability, and strong ecosystem support. The portfolio benefits from React's component architecture for organizing different sections.

**Tailwind CSS**: Selected for rapid development and consistent design system. Custom CSS variables enable easy theme customization while maintaining the dark cybersecurity aesthetic.

**Express.js Backend**: Provides a minimal, flexible foundation for API development. The current in-memory storage allows for quick development while maintaining the interface for future database integration.

**Drizzle ORM**: Offers type-safe database operations with excellent TypeScript integration. The schema-first approach ensures data consistency between frontend and backend.

**Vite**: Chosen for fast development builds and excellent TypeScript support. The custom integration with Express enables full-stack development in a single environment.

### Design Patterns

**Component-based Architecture**: Each portfolio section is a separate component, enabling easy maintenance and updates.

**Storage Interface Pattern**: Abstracts data access logic, allowing easy transition from in-memory to database storage.

**Shared Types**: TypeScript types are shared between frontend and backend through the `shared` directory, ensuring consistency.

### Future Considerations

The application is structured to easily add:
- User authentication and authorization
- Database persistence with PostgreSQL
- Additional portfolio sections
- Contact form functionality
- Blog or article system