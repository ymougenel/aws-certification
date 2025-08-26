# AWS Concepts - The App

A modern Angular application with Tailwind CSS that provides comprehensive information about AWS services, certification preparation materials, and interactive quizzes.

## Project Structure

- `src/app/components/`: All Angular components
   - `shell/header/`: Header with navigation and GitHub link
   - `shell/footer/`: Footer with MIT license, credits, and About modal
   - `dashboard/`: Main dashboard displaying service cards
   - `aws-service-card/`: Individual service cards with tabs
- `src/app/services/`: Service layer for data management
- `src/app/models/`: TypeScript interfaces and models
- `src/assets/`: Markdown cards for AWS services

## AWS Services Included

1. **Amazon S3**: Object storage service
2. **Amazon Aurora**: MySQL/PostgreSQL-compatible database
3. **AWS Lambda**: Serverless compute service
...

Each service includes:
- Detailed descriptions and key features
- Architecture and best practices information
- 5 interactive quiz questions with explanations

## Technology Stack

- **Angular 17**: Modern web framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Standalone Components**: Modern Angular architecture

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to `http://localhost:4200`

## Building for Production

```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

l with love and AI (cursor) in 2025.