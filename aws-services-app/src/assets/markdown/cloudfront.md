# Amazon CloudFront

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.

## Key Features

### Global Content Delivery
- 400+ edge locations worldwide
- Reduced latency for global users
- Automatic routing to nearest edge location

### High Performance
- Caching at edge locations
- Optimized for AWS services
- HTTP/2 and IPv6 support

### Security
- AWS Shield Standard included
- Integration with AWS WAF
- SSL/TLS encryption support
- Signed URLs and cookies

### Cost Effective
- Pay-as-you-go pricing
- No minimum commitments
- Regional edge caches for better economics

## How CloudFront Works

1. **User Request**: User requests content from your website
2. **Edge Location**: Request routed to nearest edge location
3. **Cache Check**: CloudFront checks if content is cached
4. **Origin Fetch**: If not cached, retrieves from origin server
5. **Content Delivery**: Delivers content to user and caches at edge

## Origin Types

### S3 Bucket
- Static website hosting
- Media distribution
- Software distribution
- Automatic origin failover

### Custom Origin
- EC2 instances
- Elastic Load Balancer
- Any HTTP server
- On-premises servers

### Multiple Origins
- Route different content types to different origins
- Path-based routing
- Failover between origins

## Caching Behavior

### TTL (Time To Live)
- Control how long content stays cached
- Different TTLs for different content types
- Minimum, maximum, and default TTL settings

### Cache Headers
- Cache-Control and Expires headers
- ETags for validation
- Origin response caching directives

### Invalidation
- Remove content from edge caches
- Immediate content updates
- Wildcard invalidations supported

## Security Features

### AWS Shield
- DDoS protection included
- Automatic attack detection and mitigation
- 24/7 support for advanced protection

### AWS WAF Integration
- Web application firewall
- SQL injection and XSS protection
- Custom security rules

### SSL/TLS Support
- Free SSL certificates with ACM
- SNI custom SSL certificates
- Dedicated IP custom SSL

### Access Control
- Signed URLs for time-limited access
- Signed cookies for multiple files
- Origin Access Identity for S3

## Use Cases

### Website Acceleration
Improve website performance by caching static content globally.

### Video Streaming
Deliver video content with adaptive bitrate streaming.

### API Acceleration
Speed up API responses by caching at edge locations.

### Software Distribution
Distribute software updates and patches globally.

### Security Enhancement
Protect web applications from common attacks.

## Distribution Types

### Web Distribution
- General purpose content delivery
- HTTP and HTTPS support
- Real-time metrics and logging

### RTMP Distribution
- Adobe Flash Media Server protocol
- Streaming media distribution
- Being phased out in favor of HLS

## Performance Optimization

### Origin Shield
- Additional caching layer
- Reduce origin load
- Improve cache hit ratio

### Compression
- Automatic GZIP compression
- Reduce transfer sizes
- Faster content delivery

### HTTP/2 Support
- Modern protocol benefits
- Multiplexing and server push
- Improved performance for modern browsers

## Monitoring and Analytics

### Real-time Metrics
- Requests, data transfer, error rates
- CloudWatch integration
- Popular objects report

### Access Logs
- Detailed request information
- Delivered to S3 bucket
- Analyze user behavior and performance

### Real-time Logs
- Live request data
- Delivered to Kinesis Data Streams
- Immediate analysis and alerting

## Pricing

### Data Transfer Out
- Varies by geographic region
- Volume discounts available
- Free tier includes 1TB per month

### HTTP/HTTPS Requests
- Per request pricing
- Different rates for different regions
- HTTPS requests slightly higher cost

### Optional Features
- Dedicated IP SSL certificates
- Real-time logs
- Origin Shield

## Best Practices

### Cache Optimization
- Set appropriate TTL values
- Use versioning for static assets
- Implement cache-friendly URL structure

### Security
- Enable HTTPS everywhere
- Use AWS WAF for application protection
- Implement signed URLs for sensitive content

### Performance
- Optimize origin server response times
- Use compression for text content
- Monitor cache hit ratios

### Cost Optimization
- Analyze usage patterns
- Use appropriate price class
- Implement efficient invalidation strategies

## Getting Started

1. **Create Distribution**: Choose web or RTMP distribution
2. **Configure Origin**: Set up origin server details
3. **Configure Behaviors**: Set caching and security rules
4. **Distribution Settings**: Configure SSL, logging, etc.
5. **Deploy**: Distribution deploys to global edge network

## Integration with AWS Services

- **S3**: Origin for static content
- **ELB**: Origin for dynamic content
- **Route 53**: DNS integration
- **ACM**: SSL certificate management
- **WAF**: Web application firewall
- **Lambda@Edge**: Custom logic at edge locations