# Amazon DynamoDB

Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-region, multi-active, durable database with built-in security, backup and restore, and in-memory caching.

## Key Features

### Performance at Scale
- Single-digit millisecond latency
- Automatic scaling up to millions of requests per second
- Global tables for multi-region deployment

### Fully Managed
- No server provisioning or management
- Automatic software patching
- Built-in monitoring and alerting

### Security and Compliance
- Encryption at rest and in transit
- Fine-grained access control with IAM
- VPC endpoints for secure access
- HIPAA eligible and SOC compliant

### Flexible Data Model
- Key-value and document data structures
- Support for complex data types
- Flexible schema design

## Core Concepts

### Tables, Items, and Attributes
- **Table**: Collection of data
- **Item**: Group of attributes (like a row)
- **Attribute**: Fundamental data element (like a column)

### Primary Keys
- **Partition Key**: Simple primary key
- **Composite Key**: Partition key + sort key
- Uniquely identifies each item in table

### Global Secondary Indexes (GSI)
- Query data using different attributes
- Different partition and sort keys than base table
- Eventually consistent reads

### Local Secondary Indexes (LSI)
- Alternative sort key for items with same partition key
- Strongly consistent reads available
- Must be created when table is created

## Capacity Modes

### On-Demand
- Pay-per-request pricing
- Automatic scaling based on traffic
- No capacity planning required
- Great for unpredictable workloads

### Provisioned
- Specify read and write capacity units
- Auto Scaling available
- More cost-effective for predictable traffic
- Reserved capacity options available

## Data Types

### Scalar Types
- String, Number, Binary, Boolean, Null

### Document Types
- List, Map (nested attributes)

### Set Types
- String Set, Number Set, Binary Set

## Use Cases

### Mobile Applications
Store user profiles, game states, and application data.

### Web Applications
Session management, shopping carts, user preferences.

### Gaming
Player data, game states, leaderboards.

### IoT Applications
Sensor data, device status, time-series data.

### Real-time Analytics
Clickstream data, metrics, and event tracking.

## Best Practices

### Design for Scale
- Distribute data evenly across partitions
- Use composite primary keys when appropriate
- Avoid hot partitions

### Query Optimization
- Use Query instead of Scan when possible
- Implement pagination for large result sets
- Use projection expressions to limit returned data

### Cost Optimization
- Choose appropriate capacity mode
- Use DynamoDB Accelerator (DAX) for caching
- Implement TTL for automatic item deletion

### Security
- Use IAM roles and policies for access control
- Enable encryption for sensitive data
- Monitor access patterns with CloudTrail

## Getting Started

1. **Create Table**: Define table name and primary key
2. **Choose Capacity**: Select on-demand or provisioned mode
3. **Add Items**: Insert data into your table
4. **Query Data**: Retrieve items using keys or indexes
5. **Monitor**: Use CloudWatch for performance monitoring

## Integration with AWS Services

- **Lambda**: Trigger functions on data changes
- **API Gateway**: Build REST APIs backed by DynamoDB
- **S3**: Export/import data for analytics
- **Kinesis**: Stream changes to other services
- **CloudFormation**: Infrastructure as code deployment