# 🌐 Amazon VPC – Revision Card

---

## 📝 VPC Keypoints
- **Virtual Private Cloud (VPC)** → logically isolated section of AWS cloud.
- Define your **own IP address range** (CIDR).
- Launch AWS resources (EC2, RDS, etc.) inside subnets.
- Control networking via **route tables, NACLs, security groups**.
- Default VPC available in each region.

---

## 📏 VPC Limits
- **Max 5 CIDR blocks per VPC**.
- CIDR range must be between:
    - **/28 (16 IPs min)** → smallest subnet.
    - **/16 (65,536 IPs max)** → largest subnet.
- Only **IPv4 supported by default** (IPv6 opt-in).
- CIDRs must **not overlap** with on-premises or other VPCs.

---

## 🌍 Internet Gateway (IGW)
- Enables **communication between VPC & internet**.
- Must be attached to VPC + route table entry to work.
- **Highly available** and horizontally scaled.

---

## 🔐 Bastion Host
- Special EC2 in **public subnet** used for **SSH/RDP access** to private instances.
- Secured via **Security Groups** (only allow trusted IPs).
- Best practice: **limit access**, use **SSM Session Manager** instead.

---

## ⚠️ NAT Instance (Deprecated)
- Legacy method for private subnets to access the internet.
- Requires manual scaling & configuration.
- Replaced by **NAT Gateway**.

---

## ⚡ NAT Gateway
- **Managed service** for private subnet → internet access.
- Highly available within AZ (use multiple for multi-AZ).
- Supports **5 Gbps–45 Gbps** burst capacity.
- **Easier and more secure** than NAT instances.

---

## 🛡️ NACLs (Network ACLs)
- **Stateless, subnet-level firewall**.
- Rules applied in order (lowest → highest number).
- Supports **allow & deny rules**.
- Useful for **blocking specific IPs**.

---

## 🔄 VPC Peering
- Connects **two VPCs** (same or different accounts/regions).
- Uses private IPs for communication.
- **No transitive peering** (A ↔ B, B ↔ C ≠ A ↔ C).

---

## 🔌 VPC Endpoints
- **Private connection** to AWS services without internet.
- **Interface Endpoints** (powered by PrivateLink).
- **Gateway Endpoints** (S3, DynamoDB).

---

## 📊 VPC Flow Logs
- Capture **network traffic metadata** (source/dest IP, port, action).
- Can send logs to **CloudWatch Logs** or **S3**.
- Used for **troubleshooting, auditing, and security analysis**.

---

## 🌉 VPN Site-to-Site
- Connects on-premises DC to AWS via **IPSec VPN**.
- Uses **Virtual Private Gateway** on AWS side.
- Encrypted connection over internet.

---

## 🔗 Direct Connect
- **Dedicated private line** from on-premises DC to AWS.
- Lower latency, higher bandwidth than VPN.
- Can be combined with VPN for **redundancy**.

---

## 🌀 Transit Gateway
- Hub-and-spoke model for connecting **multiple VPCs & on-prem networks**.
- Simplifies large network topologies.
- Supports **inter-region peering**.

---

## 🔍 VPC Traffic Mirroring
- Capture actual **network packets** from ENIs (Elastic Network Interfaces).
- Useful for **deep packet inspection, threat monitoring, and debugging**.

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which VPC feature allows private subnets to access the internet securely?  
A. Internet Gateway  
B. NAT Gateway  
C. VPC Endpoint  
D. Transit Gateway  
✅ **Answer: B**

---

**Q2.** Which service allows connecting multiple VPCs in a hub-and-spoke design?  
A. VPC Peering  
B. Direct Connect  
C. Transit Gateway  
D. VPN Site-to-Site  
✅ **Answer: C**

---

**Q3.** Which VPC feature can block IP addresses at the subnet level?  
A. Security Groups  
B. NACLs  
C. Route Tables  
D. Flow Logs  
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** VPC Flow Logs capture the actual packet data transferred between instances.  
❌ False (they capture metadata only).

**Q5.** NAT Gateways are automatically highly available across all AZs in a region.  
❌ False (they are AZ-specific, you need one per AZ for HA).

**Q6.** You cannot set overlapping CIDRs between VPCs.  
✅ True

---

✅ **Exam Tip**:
- **NAT Gateway > NAT Instance** (scalable & managed).
- **IGW for inbound + outbound**, **NAT for outbound only**.
- **Transit Gateway** solves complex peering limitations.  
