# Amazon EBS (Elastic Block Store)

Amazon Elastic Block Store (EBS) provides high-performance block storage volumes for use with Amazon EC2 instances. EBS volumes are highly available and reliable storage that can be attached to any running instance in the same Availability Zone.

## Volume Types

### General Purpose SSD (gp3)
- Latest generation general purpose SSD
- Baseline performance of 3,000 IOPS
- Provision up to 16,000 IOPS independently
- Cost-effective for most workloads

### General Purpose SSD (gp2)
- Previous generation general purpose SSD
- Baseline performance scales with volume size
- Burstable to 3,000 IOPS for volumes under 1 TiB
- Good balance of price and performance

### Provisioned IOPS SSD (io2)
- Highest performance SSD volume
- Up to 64,000 IOPS per volume
- 99.999% durability SLA
- Critical business applications

### Provisioned IOPS SSD (io1)
- High performance SSD for mission-critical workloads
- Up to 64,000 IOPS per volume
- 99.999% durability
- Sub-millisecond latency

### Throughput Optimized HDD (st1)
- Low-cost HDD for frequently accessed workloads
- Throughput up to 500 MiB/s
- Big data, data warehouses, log processing
- Cannot be boot volume

### Cold HDD (sc1)
- Lowest cost HDD for less frequently accessed data
- Throughput up to 250 MiB/s
- File servers, backup, archival storage
- Cannot be boot volume

## Key Features

### High Availability
- Automatically replicated within Availability Zone
- Point-in-time snapshots to Amazon S3
- 99.999% availability for io1 and io2 volumes

### Scalability
- Modify volume size, type, and performance
- No downtime for most modifications
- Elastic Volumes feature for live changes

### Security
- Encryption at rest using AWS KMS
- Encryption in transit between EC2 and EBS
- Access control through IAM policies

### Backup and Recovery
- Point-in-time snapshots stored in S3
- Incremental snapshots save costs
- Cross-region snapshot copying

## Use Cases

### Operating System Boot Volumes
Primary storage for EC2 instance operating systems.

### Database Storage
High-performance storage for transactional databases.

### File Systems
Network attached storage for applications requiring shared access.

### Backup and Disaster Recovery
Reliable backup storage with cross-region replication.

### Big Data Analytics
High-throughput storage for data processing workloads.

## Performance

### IOPS (Input/Output Operations Per Second)
- Measure of read/write operations
- Important for transactional workloads
- Database applications, file servers

### Throughput (MiB/s)
- Measure of data transfer rate
- Important for sequential workloads
- Big data processing, log analysis

### Latency
- Time to complete I/O operation
- Sub-millisecond for io1/io2 volumes
- Critical for real-time applications

## Snapshots

### Point-in-Time Backup
- Incremental backups to Amazon S3
- First snapshot is full copy
- Subsequent snapshots only store changed blocks

### Cross-Region Copy
- Copy snapshots to other AWS regions
- Disaster recovery and compliance
- Share snapshots across accounts

### Fast Snapshot Restore
- Instantly initialize volumes from snapshots
- Eliminate performance penalty
- Faster instance launch times

## Best Practices

### Performance Optimization
- Choose appropriate volume type for workload
- Pre-warm volumes created from snapshots
- Use multiple volumes for higher performance

### Cost Optimization
- Right-size volumes based on actual usage
- Use gp3 volumes for better price/performance
- Delete unnecessary snapshots regularly

### Security
- Enable encryption for sensitive data
- Use IAM policies to control access
- Monitor access with CloudTrail

### Backup Strategy
- Regular automated snapshots
- Test restore procedures
- Implement cross-region backup for DR

## Getting Started

1. **Create Volume**: Choose volume type and size
2. **Attach to Instance**: Connect volume to EC2 instance
3. **Format and Mount**: Prepare volume for use
4. **Configure Backups**: Set up automated snapshots
5. **Monitor Performance**: Use CloudWatch metrics

## Monitoring

### CloudWatch Metrics
- VolumeReadOps, VolumeWriteOps
- VolumeThroughputPercentage
- VolumeQueueLength

### Performance Insights
- Monitor I/O patterns
- Identify performance bottlenecks
- Optimize volume configuration

## Integration

- **EC2**: Primary block storage for instances
- **RDS**: Storage backend for database instances
- **EMR**: Storage for big data processing
- **CloudFormation**: Infrastructure as code deployment