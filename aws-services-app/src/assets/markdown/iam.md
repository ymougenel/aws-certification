# 🔐 AWS IAM (Identity and Access Management) – Revision Card

---
AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. 
Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

## 📝 Summary (Keypoints)
- **Central service** for managing access to AWS resources.
- Works with **users, groups, roles, and policies**.
- **Global service** (not region-specific).
- Provides **fine-grained permissions** (JSON policies).
- Supports **MFA, federation, and temporary credentials**.

---


## 👤 IAM Roles
- **Temporary credentials** for AWS resources and services.
- Commonly used for **EC2, Lambda, ECS tasks** to access AWS services securely.
- Avoids using **long-term access keys**.

## 🔹 IAM Policies
- **JSON documents** defining permissions (Allow/Deny).
- Can be attached to **users, groups, or roles**.
- Types:
    - **AWS managed policies** (predefined by AWS).
    - **Customer managed policies** (custom).
    - **Inline policies** (Embedded directly in user, group, or role).
### 🔹 Policy Structure
**Effect**
* Allow or Deny
* Explicit deny overrides allow

**Action**

* Specific AWS service actions
* Wildcards supported for multiple actions
* Service:Action format (e.g., s3:GetObject)

**Resource**

* Specific AWS resources affected
* ARN (Amazon Resource Name) format
* Wildcards for multiple resources

**Condition**

* Additional constraints on permissions
* IP address, time, MFA requirements
* String, numeric, and boolean conditions

---

## 🏷️Access Control Models

### Attribute-Based Access Control (ABAC)
- **Authorization strategy** using **tags and attributes**.
- Policies evaluate **tags on users/roles/resources**.
- Example: Devs with `tag:Team=Dev` can only access resources with `tag:Team=Dev`.
- Makes it easier to **scale permissions** as environments grow.

## Role-Based Access Control (RBAC)

* Permissions based on job functions
* Pre-defined roles for common scenarios
* Simplified permission management

---

## 🛡️ Best Practices
1. **Least privilege principle** → Grant only necessary permissions.
2. **Use IAM Roles** for apps and services (never embed static keys).
3. **Enable MFA** for all users, especially root.
4. **Rotate credentials regularly** (ideally avoid long-term keys).
5. **Use groups and managed policies** instead of attaching policies to individual users.
6. **Monitor IAM with CloudTrail & IAM Access Analyzer**.
7. **Use ABAC and tagging** for scalable permission management.
8. **Avoid using root account** except for initial setup.

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which IAM entity should an EC2 instance use to access S3 securely?  
A. IAM User with access keys  
B. IAM Group  
C. IAM Role  
D. Root user  
✅ **Answer: C**

---

**Q2.** Which IAM policy type is AWS-predefined and reusable?  
A. Inline Policy  
B. AWS Managed Policy  
C. Customer Managed Policy  
D. Resource-based Policy  
✅ **Answer: B**

---

**Q3.** Which IAM feature enables scaling permissions by using **tags**?  
A. MFA  
B. ABAC  
C. IAM Groups  
D. Federation  
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** IAM is a regional service.  
❌ False (it is **global**).

**Q5.** Inline policies are reusable across multiple users.  
❌ False (attached to only one identity).

**Q6.** Best practice is to avoid using IAM roles for EC2 and instead use static access keys.  
❌ False (always prefer roles).

---

✅ **Exam Tip**:
- **IAM Role = temporary credentials for AWS services**.
- **IAM Policy = JSON permissions attached to identities**.
- **ABAC = scalable access management with tags**.
- **Security best practice = least privilege, MFA, avoid root**.  
