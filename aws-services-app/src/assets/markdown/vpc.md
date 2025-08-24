# Amazon VPC (Virtual Private Cloud)

Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment.

## Key Features

### Network Isolation
- Logically isolated from other virtual networks
- Complete control over IP address ranges
- Custom routing tables and network gateways

### Flexible Connectivity
- Multiple connectivity options to on-premises networks
- VPN connections and AWS Direct Connect
- Internet Gateway for public internet access

### Security
- Security Groups at instance level
- Network ACLs at subnet level
- Flow Logs for network monitoring

### Scalability
- Multiple subnets across Availability Zones
- Elastic Network Interfaces
- Enhanced networking capabilities

## Core Components

### Subnets
- Segments of VPC IP address range
- Reside in single Availability Zone
- Public and private subnet configurations

### Internet Gateway
- Horizontally scaled, redundant connection
- Allows communication between VPC and internet
- Required for public internet access

### Route Tables
- Control traffic routing within VPC
- Each subnet must be associated with route table
- Default and custom route tables

### Security Groups
- Virtual firewall for EC2 instances
- Stateful packet filtering
- Allow rules only (deny is default)

### Network ACLs
- Subnet-level security
- Stateless packet filtering
- Allow and deny rules supported

## Subnet Types

### Public Subnets
- Route to Internet Gateway
- Resources can have public IP addresses
- Accessible from internet with proper security

### Private Subnets
- No direct route to Internet Gateway
- Resources only have private IP addresses
- Access internet through NAT Gateway/Instance

### VPN-only Subnets
- Route to Virtual Private Gateway
- Connected to on-premises network
- No internet access

## Connectivity Options

### Internet Gateway
- Connect VPC to internet
- Horizontally scalable and highly available
- No bandwidth constraints

### NAT Gateway
- Managed NAT service
- Allow outbound internet access from private subnets
- Highly available within Availability Zone

### NAT Instance
- Self-managed NAT on EC2 instance
- More configuration control
- Single point of failure without HA setup

### VPN Connection
- Secure connection to on-premises network
- IPsec VPN tunnels
- Customer Gateway and Virtual Private Gateway

### AWS Direct Connect
- Dedicated network connection to AWS
- Consistent network performance
- Reduced bandwidth costs

### VPC Peering
- Network connection between two VPCs
- Route traffic using private IP addresses
- No single point of failure

### Transit Gateway
- Central hub for connecting VPCs
- Simplify network architecture
- Support for on-premises connectivity

## IP Addressing

### IPv4 CIDR Blocks
- Primary CIDR block (required)
- Additional CIDR blocks (optional)
- RFC 1918 address ranges recommended

### IPv6 Support
- Amazon-provided IPv6 CIDR block
- Dual-stack configuration
- Internet Gateway supports IPv6

### Elastic IP Addresses
- Static public IPv4 addresses
- Remap addresses between instances
- Mask instance or software failures

## Security

### Security Groups
- Instance-level firewall
- Stateful connection tracking
- Multiple security groups per instance

### Network ACLs
- Subnet-level firewall
- Stateless packet filtering
- Numbered rules processed in order

### Flow Logs
- Capture network traffic information
- Troubleshoot connectivity issues
- Security monitoring and analysis

### AWS PrivateLink
- Private connectivity to AWS services
- No internet gateway or NAT required
- Secure service-to-service communication

## Use Cases

### Multi-tier Applications
Host web servers in public subnets and databases in private subnets.

### Hybrid Cloud
Extend on-premises network to AWS using VPN or Direct Connect.

### Disaster Recovery
Create backup environment in different region or AZ.

### Development/Testing
Isolate development environments from production.

## Best Practices

### Network Design
- Plan IP address ranges carefully
- Use multiple Availability Zones
- Separate public and private subnets

### Security
- Follow principle of least privilege
- Use security groups as primary defense
- Enable VPC Flow Logs for monitoring

### High Availability
- Distribute resources across multiple AZs
- Use redundant connectivity options
- Implement proper load balancing

### Cost Optimization
- Right-size NAT Gateways
- Use VPC endpoints for AWS services
- Monitor data transfer costs

## Monitoring

### VPC Flow Logs
- Network traffic capture
- CloudWatch Logs or S3 delivery
- Security and troubleshooting analysis

### CloudWatch Metrics
- NAT Gateway metrics
- VPN connection metrics
- Network performance monitoring

### AWS Config
- Configuration compliance monitoring
- Change tracking and notifications
- Security group and NACL analysis

## Getting Started

1. **Create VPC**: Define IP address range (CIDR block)
2. **Create Subnets**: Public and private subnets in different AZs
3. **Configure Routing**: Set up route tables and gateways
4. **Security Setup**: Configure security groups and NACLs
5. **Launch Resources**: Deploy EC2 instances and other resources

## Advanced Features

### VPC Endpoints
- Private connection to AWS services
- Gateway endpoints for S3 and DynamoDB
- Interface endpoints for other services

### Dedicated Tenancy
- Physical isolation of instances
- Dedicated hardware for compliance
- Higher cost but enhanced security

### Enhanced Networking
- Single Root I/O Virtualization (SR-IOV)
- Higher packet per second performance
- Lower network jitter