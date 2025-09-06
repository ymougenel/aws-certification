# 🔐 AWS Security & Encryption – Revision Card

---

## 🔑 AWS KMS (Key Management Service)

### 📝 Introduction
AWS KMS is a managed service to create, control, and use cryptographic keys for data encryption.

### ✅ Principles (3 Keypoints)
1. **Customer Managed Keys (CMK)**: Symmetric or asymmetric keys for encryption/decryption.
2. **Integrated with AWS services**: S3, EBS, RDS, Lambda, etc.
3. **Centralized key management**: Audit with CloudTrail, IAM-controlled access.

### 🌍 Multi-Region Keys
- Keys can be **replicated across Regions**.
- Enable cross-Region disaster recovery and global applications.
- Same key ID, but independent copies per Region.

---

## 📷 AMI Sharing
- **Amazon Machine Images (AMI)** can be shared across **accounts or Regions**.
- AMIs with **encrypted snapshots** require KMS key sharing.

---

## 🛠️ AWS SSM (Systems Manager)

### ✅ Principles (3 Keypoints)
1. **Fleet management**: Patch, configure, and automate servers at scale.
2. **Session Manager**: Secure shell access without SSH keys.
3. **Parameter Store**: Store config values and secrets (with KMS encryption).

---

## 🔐 AWS Secrets Manager

### ✅ Principles (3 Keypoints)
1. **Secure storage** for secrets (DB passwords, API keys).
2. **Automatic rotation** of credentials with Lambda.
3. **Fine-grained IAM permissions** for access control.

---

## 📜 AWS ACM (Certificate Manager)

### ✅ Principles (3 Keypoints)
1. **Provision & manage SSL/TLS certificates**.
2. **Free public certificates** for ACM-integrated services (CloudFront, ALB).
3. **Automatic renewal** and lifecycle management.

---

## 🛡️ AWS WAF (Web Application Firewall)

### ✅ Principles (3 Keypoints)
1. Protects against **Layer 7 (HTTP/S) attacks** (SQLi, XSS).
2. Define **rules and conditions** (IP, headers, rate limiting).
3. Integrated with **CloudFront, ALB, API Gateway**.

---

## 🛡️ AWS Shield

### ✅ Principles (3 Keypoints)
1. **DDoS protection** for AWS workloads.
2. **Shield Standard**: Free, auto-enabled.
3. **Shield Advanced**: Paid, higher protection, 24/7 DDoS response team.

---

## 🔥 AWS Firewall Manager

### ✅ Principles (3 Keypoints)
1. **Centralized WAF and Shield policy management** across accounts.
2. Works with **AWS Organizations**.
3. Ensures compliance and consistent security rules.

---

## 👁️ AWS GuardDuty

### ✅ Principles (3 Keypoints)
1. **Threat detection** with ML & anomaly detection.
2. Monitors **CloudTrail, VPC Flow Logs, DNS Logs**.
3. Identifies compromised accounts or instances.

---

## 🕵️ AWS Inspector

### ✅ Principles (3 Keypoints)
1. **Automated vulnerability management** for EC2, ECR, Lambda.
2. Scans for **known CVEs and misconfigurations**.
3. Continuous assessment integrated with Security Hub.

---

## 📂 AWS Macie

### ✅ Principles (3 Keypoints)
1. **Data security for S3** using ML to detect PII (Personally Identifiable Information).
2. Identifies sensitive data exposure (public buckets).
3. Generates dashboards & alerts for compliance (GDPR, HIPAA).

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which service automatically rotates secrets such as database credentials?  
A. KMS  
B. Secrets Manager  
C. SSM Parameter Store  
D. ACM  
✅ **Answer: B**

---

**Q2.** Which service is designed to detect anomalous or malicious activity using VPC Flow Logs?  
A. Inspector  
B. GuardDuty  
C. Macie  
D. Shield Advanced  
✅ **Answer: B**

---

**Q3.** Which AWS service provides **free DDoS protection by default**?  
A. Shield Standard  
B. GuardDuty  
C. WAF  
D. Firewall Manager  
✅ **Answer: A**

---

### 🔹 True / False
**Q4.** KMS Multi-Region Keys allow you to use the same key ID across multiple Regions.  
✅ True

**Q5.** AWS Inspector is mainly used to scan S3 buckets for sensitive data.  
❌ False (That’s **Macie**).

**Q6.** AWS ACM provides free SSL/TLS certificates for services like CloudFront.  
✅ True

---

✅ **Exam Tip**: Know the **differences between GuardDuty, Inspector, Macie, WAF, Shield**. Expect scenario-based questions asking *“Which service to use when…”*.

