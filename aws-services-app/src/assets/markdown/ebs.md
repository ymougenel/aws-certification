# 💾 Amazon EBS & EFS – Revision Card

---

## 📦 Amazon EBS (Elastic Block Store)

### 📝 Introduction
EBS provides **block storage volumes** for EC2 instances. Persistent, network-attached, and highly available within an AZ.

### ✅ Principles (3 Keypoints)
1. **Persistent block storage** tied to an AZ.  
2. **Durable and resizable volumes** (GP, IO1/IO2, ST1, SC1).  
3. **Can be attached to EC2 instances** for OS, apps, or databases.  

---

### 📸 EBS Snapshot Features
- Point-in-time copy of volumes, stored in **S3** (incremental).  
- Snapshots can be used to:  
  - Create new volumes.  
  - Share across accounts.  
  - Copy across Regions.  
- Automated lifecycle with **Data Lifecycle Manager (DLM)**.  

---

### 💾 Storage Types
- **General Purpose (gp2/gp3)** → Balanced price/performance, SSD.  
- **Provisioned IOPS (io1/io2)** → High-performance SSD, low latency, critical DBs.  
- **Throughput Optimized HDD (st1)** → Streaming, big data, data warehouses.  
- **Cold HDD (sc1)** → Low-cost, infrequent access.  

---

### 🔗 EBS Multi-Attach
- Supported for **io1/io2 volumes**.  
- Allows attachment of the same volume to **multiple EC2 instances** (within same AZ).  
- Use case: clustered applications (databases, file systems).  

---

### 🔐 EBS Encryption
- Encryption at rest using **KMS**.  
- Also supports **in-transit encryption**.  
- Snapshots & volumes created from encrypted EBS are **encrypted by default**.  

---

## 📷 Amazon Machine Image (AMI) Overview
- Template for launching EC2 instances (OS + configuration).  
- Can be **shared across accounts or Regions**.  
- If AMI uses encrypted snapshots → requires KMS key sharing.  

---

## ⚡ EC2 Instance Store

### ✅ Principles (3 Keypoints)
1. **Temporary block storage** physically attached to the host.  
2. Very high performance, but **ephemeral** (lost when instance stops/terminates).  
3. Ideal for **cache, buffer, temporary data**.  

---

### 🔄 Comparison with EBS
| Feature            | EBS                              | Instance Store                  |
|--------------------|----------------------------------|---------------------------------|
| Persistence        | Survives stop/start              | Lost when stopped/terminated    |
| Performance        | High (depends on volume type)    | Very high (directly on host)    |
| Use case           | Databases, OS, persistent data   | Cache, temp files, ephemeral    |
| Backup             | Snapshots to S3 supported        | No snapshots                    |
| AZ Scope           | Tied to a single AZ              | Tied to a specific EC2 instance |

---

## 📂 Amazon EFS (Elastic File System)
- **Managed network file system (NFS)** for EC2, Lambda, and on-premises servers.  
- **Multi-AZ, scalable, shared storage**.  
- Use cases: **web apps, content management, data sharing**.  

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which EBS type should you use for a high-performance database with consistent low latency?  
A. gp3  
B. io1/io2  
C. st1  
D. sc1  
✅ **Answer: B**

---

**Q2.** Which feature enables sharing EBS data across multiple EC2 instances?  
A. Snapshots  
B. Multi-Attach  
C. Auto Scaling  
D. Instance Store  
✅ **Answer: B**

---

**Q3.** Which storage solution provides **shared access across multiple AZs**?  
A. EBS  
B. EFS  
C. Instance Store  
D. S3 Glacier  
✅ **Answer: B**

**Q4.** When you try to delete an EBS snapshot used by an AMI:
A. The AMI is automatically deleted for you
B. An error message appears
C. The snapshot is removed from the console but the AMI can still use it under the hood
D. The snapshot is deleted but the AMI may not be used for launching EC2 instances anymore
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** EBS Snapshots are stored in S3 and incremental.  
✅ True  

**Q5.** Instance Store data persists after instance stop/restart.  
❌ False  

**Q6.** EBS encryption automatically encrypts snapshots derived from encrypted volumes.  
✅ True  

**Q7.** Creating an AMI from an EC2 instance requires you to first create an EBS snapshot.
❌ False (The EBS snapshot is automatically created for you when you create an AMI from an EC2 instance)

**Q8.** EBS Snapshots created by the creation of an AMI are not visible in the AWS console.
❌ False (They are listed along with the other snapshots under "EC2 > Volumes > Snapshots")

---

✅ **Exam Tip**: Distinguish **EBS (persistent, block), Instance Store (ephemeral, block), and EFS (shared, file system)**. Expect scenario-based questions about **durability vs performance vs cost**.
