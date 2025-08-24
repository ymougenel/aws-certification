# AWS Services Dashboard

A modern, mobile-responsive Angular application showcasing various AWS services organized by categories. Click on any service card to view detailed information loaded from markdown files.

## Features

- 📱 Mobile-responsive design
- 🎨 Modern UI with Bootstrap 5
- 📋 AWS services organized by categories (Compute, Storage, Databases, Networking, Security)
- 📖 Detailed service information from markdown files
- 🔍 Interactive service cards with hover effects
- 🌐 Font Awesome icons for visual appeal

## AWS Services Included

### Compute
- Amazon EC2
- AWS Lambda
- Amazon ECS

### Storage
- Amazon S3
- Amazon EBS

### Databases
- Amazon Aurora
- Amazon RDS
- Amazon DynamoDB

### Networking
- Amazon Route 53
- Amazon CloudFront
- Amazon VPC

### Security
- AWS IAM
- Amazon Cognito

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Angular CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/          # Main dashboard with service cards
│   │   └── service-detail/     # Individual service detail pages
│   ├── models/                 # TypeScript interfaces and models
│   ├── services/               # Angular services for data management
│   └── app.routes.ts          # Application routing configuration
├── assets/
│   └── markdown/               # Service documentation in markdown format
└── styles.scss                # Global styles and Bootstrap customization
```

## Customization

### Adding New Services

1. Add service data to `aws-services.service.ts`
2. Create corresponding markdown file in `src/assets/markdown/`
3. The service will automatically appear in the appropriate category

### Styling

The application uses Bootstrap 5 with custom AWS-themed colors defined in `styles.scss`:

- `--aws-orange`: #ff9900
- `--aws-dark-blue`: #232f3e
- `--aws-light-blue`: #4b9cd3
- `--aws-gray`: #879196

## Mobile Compatibility

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## Technologies Used

- Angular 17
- Bootstrap 5
- TypeScript
- SCSS
- Marked (for markdown parsing)
- Font Awesome icons

## License

This project is for educational and demonstration purposes.