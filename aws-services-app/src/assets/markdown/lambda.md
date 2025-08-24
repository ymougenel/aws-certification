# AWS Lambda

AWS Lambda is a serverless computing service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume—there's no charge when your code isn't running.

## Key Features

### Serverless Architecture
- No server management required
- Automatic scaling based on demand
- Built-in fault tolerance and high availability

### Event-Driven Execution
- Triggered by various AWS services
- HTTP requests via API Gateway
- File uploads to S3, database changes, and more

### Multiple Runtime Support
- Node.js, Python, Java, C#, Go, Ruby
- Custom runtime API for other languages
- Container image support

### Pay-per-Use Pricing
- Charged only for requests and compute time
- Free tier includes 1M requests per month
- No charges for idle time

## How Lambda Works

1. **Upload Code**: Package your function code and dependencies
2. **Set Trigger**: Configure event source to invoke your function
3. **Lambda Executes**: Service runs your code when triggered
4. **Auto Scaling**: Lambda automatically scales to handle requests

## Event Sources

### API Gateway
- HTTP/REST API requests
- WebSocket connections
- Perfect for web applications and APIs

### S3 Events
- Object creation, deletion, or modification
- Automatic image processing, file validation

### DynamoDB Streams
- Database record changes
- Real-time data processing and analytics

### CloudWatch Events
- Scheduled executions (cron jobs)
- AWS service state changes

### SQS and SNS
- Message queue processing
- Notification handling

## Use Cases

### Real-time File Processing
Process files immediately when uploaded to S3.

### Data Transformation
Transform data as it moves between systems.

### Web APIs
Build RESTful APIs without managing servers.

### Scheduled Tasks
Run maintenance tasks, reports, or cleanup jobs.

### IoT Backend
Process sensor data and device telemetry.

### Chat Bots
Handle conversational interfaces and natural language processing.

## Best Practices

### Function Design
- Keep functions small and focused
- Minimize cold start impact
- Use environment variables for configuration

### Performance Optimization
- Optimize memory allocation
- Reuse connections and objects
- Minimize package size and dependencies

### Security
- Follow principle of least privilege
- Use IAM roles, not hardcoded credentials
- Encrypt sensitive data

### Monitoring and Debugging
- Use CloudWatch Logs for debugging
- Implement proper error handling
- Monitor performance metrics

## Limitations

- **Execution Time**: Maximum 15 minutes per invocation
- **Memory**: 128 MB to 10,240 MB
- **Deployment Package**: 50 MB (zipped), 250 MB (unzipped)
- **Concurrent Executions**: 1000 (can be increased)

## Getting Started

1. **Create Function**: Choose runtime and upload code
2. **Set Permissions**: Configure IAM execution role
3. **Add Trigger**: Connect to event source
4. **Test**: Verify function works as expected
5. **Monitor**: Use CloudWatch for monitoring and logs

## Pricing

- **Requests**: $0.20 per 1M requests
- **Duration**: $0.0000166667 per GB-second
- **Free Tier**: 1M requests and 400,000 GB-seconds per month