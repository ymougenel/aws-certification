# Amazon EC2 (Elastic Compute Cloud)

Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.

## Key Features

### Flexible Instance Types
- Choose from various instance families optimized for different use cases
- General Purpose, Compute Optimized, Memory Optimized, Storage Optimized
- Burstable performance instances for variable workloads

### Scalability
- Auto Scaling to automatically adjust capacity
- Elastic Load Balancing to distribute traffic
- Scale up or down based on demand

### Security
- Amazon VPC for network isolation
- Security Groups as virtual firewalls
- Key pairs for secure login
- IAM integration for access control

### Storage Options
- Amazon EBS for persistent block storage
- Instance Store for temporary storage
- EFS for shared file storage
- S3 integration for object storage

## Instance Types

### General Purpose (M, T, A series)
- Balanced compute, memory, and networking
- Ideal for web servers and small databases

### Compute Optimized (C series)
- High-performance processors
- Perfect for CPU-intensive applications

### Memory Optimized (R, X, Z series)
- Fast performance for memory-intensive workloads
- In-memory databases and real-time analytics

### Storage Optimized (I, D, H series)
- High sequential read/write access
- Distributed file systems and data processing

### Accelerated Computing (P, G, F series)
- Hardware accelerators (GPUs, FPGAs)
- Machine learning and high-performance computing

## Use Cases

### Web Applications
Host web servers and application servers with auto-scaling capabilities.

### Big Data Analytics
Process large datasets with compute-optimized instances.

### Machine Learning
Train models using GPU-accelerated instances.

### Development and Testing
Spin up development environments quickly and cost-effectively.

## Pricing Models

### On-Demand
- Pay by the hour or second
- No long-term commitments
- Ideal for unpredictable workloads

### Reserved Instances
- Significant discounts for 1 or 3-year terms
- Capacity reservation in specific Availability Zone
- Best for steady-state workloads

### Spot Instances
- Up to 90% discount compared to On-Demand
- Use spare EC2 capacity
- Great for fault-tolerant applications

### Dedicated Hosts
- Physical EC2 server dedicated for your use
- Compliance and licensing requirements
- Bring your own licenses

## Getting Started

1. **Choose AMI**: Select an Amazon Machine Image
2. **Select Instance Type**: Pick the right instance for your workload
3. **Configure Instance**: Set up networking and storage
4. **Add Storage**: Attach EBS volumes as needed
5. **Configure Security**: Set up security groups and key pairs
6. **Launch**: Start your instance and connect

## Best Practices

- Use Auto Scaling for dynamic workloads
- Implement proper security group rules
- Regular snapshots for backup
- Monitor with CloudWatch
- Use IAM roles instead of hardcoded credentials
- Right-size your instances for cost optimization
- Use placement groups for high-performance applications