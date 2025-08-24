# AWS IAM (Identity and Access Management)

AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

## Key Features

### Centralized Access Control
- Single place to manage all AWS access
- Fine-grained permissions
- Shared access to AWS account

### Granular Permissions
- Control access to specific AWS services
- Resource-level permissions
- Condition-based access control

### Identity Federation
- Integration with existing identity systems
- SAML 2.0 and OpenID Connect support
- Active Directory integration

### Multi-Factor Authentication
- Additional security layer
- Virtual and hardware MFA devices
- SMS and authenticator app support

## Core Components

### Users
- Represents a person or service
- Long-term credentials (password, access keys)
- Can belong to multiple groups

### Groups
- Collection of users with similar permissions
- Simplify permission management
- Users inherit group permissions

### Roles
- Temporary security credentials
- Can be assumed by users, services, or applications
- Cross-account access capability

### Policies
- JSON documents defining permissions
- Specify allowed or denied actions
- Can be attached to users, groups, or roles

## Policy Types

### AWS Managed Policies
- Created and maintained by AWS
- Cover common use cases
- Automatically updated by AWS

### Customer Managed Policies
- Created and managed by you
- Customized for specific needs
- Version control and rollback

### Inline Policies
- Embedded directly in user, group, or role
- One-to-one relationship
- Deleted when the principal is deleted

## Policy Structure

### Effect
- Allow or Deny
- Explicit deny overrides allow

### Action
- Specific AWS service actions
- Wildcards supported for multiple actions
- Service:Action format (e.g., s3:GetObject)

### Resource
- Specific AWS resources affected
- ARN (Amazon Resource Name) format
- Wildcards for multiple resources

### Condition
- Additional constraints on permissions
- IP address, time, MFA requirements
- String, numeric, and boolean conditions

## Access Control Models

### Role-Based Access Control (RBAC)
- Permissions based on job functions
- Pre-defined roles for common scenarios
- Simplified permission management

### Attribute-Based Access Control (ABAC)
- Permissions based on attributes
- Dynamic access control
- Tags and conditions for fine-grained access

## Best Practices

### Principle of Least Privilege
- Grant minimum permissions required
- Regularly review and reduce permissions
- Use policies with specific resources

### Use Groups for Users
- Assign permissions to groups, not individual users
- Easier permission management
- Consistent access control

### Enable MFA
- Require MFA for sensitive operations
- Use MFA for root account access
- Consider MFA for privileged users

### Rotate Access Keys
- Regular key rotation
- Use IAM roles instead of access keys when possible
- Monitor access key usage

### Monitor and Audit
- Enable CloudTrail for API logging
- Use Access Analyzer to review permissions
- Regular access reviews and cleanup

## Common Use Cases

### Cross-Account Access
Allow users from one AWS account to access resources in another account.

### Temporary Access
Provide time-limited access to AWS resources using STS tokens.

### Service-to-Service Communication
Allow AWS services to communicate securely using IAM roles.

### Federation
Enable users to access AWS using existing corporate credentials.

## Security Features

### Password Policies
- Minimum length and complexity requirements
- Password expiration and history
- Prevention of password reuse

### Account Security
- Root account protection
- Security contact information
- Account-level settings

### Access Keys Management
- Generate and manage programmatic access
- Key rotation capabilities
- Usage monitoring

## Monitoring and Compliance

### CloudTrail Integration
- Log all IAM API calls
- Track permission changes
- Audit user activities

### Access Analyzer
- Analyze resource policies
- Identify unintended access
- Generate policy recommendations

### Credential Report
- Account-wide credential usage report
- Password and access key status
- MFA device information

## Identity Providers

### SAML 2.0
- Enterprise identity provider integration
- Single sign-on (SSO) capabilities
- Active Directory Federation Services

### OpenID Connect
- Web identity federation
- Social identity providers (Google, Facebook)
- Mobile application authentication

### AWS Organizations
- Centralized management across accounts
- Service Control Policies (SCPs)
- Consolidated billing and governance

## Getting Started

1. **Secure Root Account**: Enable MFA and create IAM users
2. **Create Admin User**: Set up administrative user with IAM access
3. **Create Groups**: Organize users by job function
4. **Assign Policies**: Attach appropriate managed policies
5. **Enable Monitoring**: Set up CloudTrail and monitoring

## Advanced Features

### IAM Roles for EC2
- Temporary credentials for applications
- Automatic credential rotation
- No need to store access keys

### Cross-Account Roles
- Secure access between AWS accounts
- Temporary credential assumption
- Centralized identity management

### Permission Boundaries
- Maximum permissions for users and roles
- Additional control layer
- Delegate permission management safely

### Service-Linked Roles
- Predefined roles for AWS services
- Created and managed automatically
- Service-specific permissions

## Common Policies

### ReadOnlyAccess
- Read-only access to all AWS services
- Good for auditors and monitoring

### PowerUserAccess
- Full access except IAM management
- Suitable for developers and admins

### IAMFullAccess
- Complete IAM management permissions
- Only for trusted administrators

### Custom Policies
- Tailored to specific needs
- Resource and action specific
- Condition-based restrictions