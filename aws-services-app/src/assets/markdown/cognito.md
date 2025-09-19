# 🔑 Amazon Cognito – Revision Card

---

## 📝 Summary (Keypoints)
- **Managed authentication & authorization service** for web and mobile apps.
- Provides **user sign-up, sign-in, and access control**.
- Integrates with **social identity providers** (Google, Facebook, Apple), **SAML**, and enterprise directories.
- Can provide **temporary AWS credentials** for accessing AWS resources.
- Scales automatically to millions of users.

---

## 👥 Cognito User Pools
- **User directories** to handle sign-up & sign-in flows.
- Provide **authentication** (who the user is).
- Can integrate with **social providers** (Google, Facebook, Amazon) and enterprise IdPs.
- Issues **JWT tokens (ID, Access, Refresh)** for authentication.
- Supports **MFA, password policies, Lambda triggers** for customization.

---

## 🆔 Cognito Identity Pools (Federated Identities)
- Provide **temporary AWS credentials** for accessing AWS resources (via STS).
- Combine identities from **User Pools, social IdPs, or SAML**.
- Allow **authorization** (what the user can access).
- Map users to **IAM roles** based on attributes.

---

## ⚖️ Cognito vs IAM
- **Cognito** → Designed for **app users** (external customers, mobile/web apps).
- **IAM** → Designed for **AWS accounts and services** (internal users, admins, EC2, Lambda, etc.).
- Cognito provides **authentication + temporary credentials**.
- IAM provides **long-term permissions and policies**.

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which Cognito feature is used for **sign-up and sign-in with social IdPs**?  
A. Identity Pools  
B. User Pools  
C. IAM Roles  
D. STS  
✅ **Answer: B**

---

**Q2.** Which Cognito component provides **temporary AWS credentials**?  
A. User Pools  
B. Identity Pools  
C. IAM  
D. Secrets Manager  
✅ **Answer: B**

---

**Q3.** Which statement best describes the relationship between Cognito and IAM?  
A. Cognito replaces IAM.  
B. IAM is only for EC2, Cognito is for S3.  
C. Cognito handles app user auth; IAM handles AWS user/service permissions.  
D. Cognito is for admins, IAM is for mobile apps.  
✅ **Answer: C**

---

### 🔹 True / False
**Q4.** Cognito User Pools provide JWT tokens for authentication.  
✅ True

**Q5.** Cognito Identity Pools can directly authenticate users without User Pools.  
✅ True (they can federate identities directly with social IdPs or SAML).

**Q6.** Cognito should be used instead of IAM for managing developers and AWS administrators.  
❌ False (that’s IAM).

---

✅ **Exam Tip**:
- **User Pools = Authentication** (who the user is).
- **Identity Pools = Authorization** (temporary AWS credentials).
- **IAM = Internal AWS users & services**.  
