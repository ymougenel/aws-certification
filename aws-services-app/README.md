# AWS Concepts App

My AWS Certification Study, provides 
* Comprehensive information about AWS services, 
* Certification preparation materials, and 
* Interactive quizzes.

## Features

- **Service Overview Cards**: Comprehensive information about AWS services like S3, Aurora, and Lambda

[//]: # (- **Three-Tab Interface**:)

[//]: # (   - Summary: Key features, use cases, and pricing)

[//]: # (   - Architect Certification: Detailed technical information, best practices, and limitations)

[//]: # (   - Quiz: Interactive 5-question quizzes to test your knowledge)
- **Responsive Design**: Built with Tailwind CSS for modern, mobile-first design
- **Interactive UI**: Modal dialogs, progress bars, and smooth transitions

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

## License

This project is licensed under the [MIT License](https://github.com/ymougenel/aws-certification#).

## Author

Created by ymougenel with love and AI (cursor) in 2025.