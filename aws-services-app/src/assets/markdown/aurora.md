# 🌟 Amazon Aurora – Revision Card

---

## ✅ Aurora Principles (5 Keypoints)
1. **AWS-native RDS engine**: Fully managed, compatible with MySQL & PostgreSQL.  
2. **Performance**: Up to 5x faster than MySQL and 3x faster than PostgreSQL.  
3. **Storage**: Auto-scaling up to 128 TB per cluster.  
4. **Fault-tolerant**: Data replicated across 3 AZs, 6 copies total.  
5. **Pay-per-use**: Only pay for what you consume (compute + storage).  

---

## 🔄 High Availability & Read Scaling
- **Primary instance** for writes.  
- Up to **15 Aurora Replicas** (read replicas) for read scaling.  
- Replicas share the same **cluster volume** → replication latency is very low (sub-millisecond).  
- Automatic failover to a replica in case of primary failure.  

---

## 🌍 Global Aurora
- **Multi-Region Aurora cluster**.  
- Provides **cross-Region disaster recovery** and **global reads**.  
- Replication lag typically **<1 second**.  
- One Region = primary (writes), other Regions = secondary (reads).  

---

## 🐠 Babelfish for Aurora PostgreSQL
- Allows Aurora PostgreSQL to **understand T-SQL** (SQL Server dialect).  
- Supports apps written for **Microsoft SQL Server** with minimal code changes.  
- Useful for migrations from SQL Server to Aurora.  

---

## 🧬 Aurora Cloning vs Snapshots

### 🔹 Aurora Cloning
- Creates a **new Aurora cluster** quickly using **copy-on-write**.  
- Very fast and cost-effective (only changes are copied).  
- Great for **testing, dev, and analytics**.  

### 🔹 Snapshots
- Full backup of Aurora cluster stored in S3.  
- Restoring a snapshot = new cluster, but slower and more storage-intensive.  
- Better for **long-term backup and recovery**.  

👉 **Exam Tip**:  
- Use **cloning** for fast duplication (test environments).  
- Use **snapshots** for long-term backup or disaster recovery.  

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which feature provides cross-Region disaster recovery for Aurora?  
A. Aurora Replicas  
B. Aurora Global Database  
C. Multi-AZ  
D. Aurora Clone  
✅ **Answer: B**

---

**Q2.** Which is faster and more cost-efficient for creating a test environment?  
A. Snapshot restore  
B. Aurora Cloning  
C. Multi-AZ  
D. Babelfish  
✅ **Answer: B**

---

**Q3.** Which Aurora feature enables migration of SQL Server apps with minimal code change?  
A. Global Aurora  
B. Babelfish  
C. Aurora Replicas  
D. RDS Custom  
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** Aurora automatically replicates your data across 6 copies in 3 AZs.  
✅ True  

**Q5.** Aurora Replicas use asynchronous replication with high latency.  
❌ False (they use shared storage with sub-ms latency).  

**Q6.** Aurora cloning uses copy-on-write and is faster than restoring snapshots.  
✅ True  

---

✅ **Exam Tip**: Aurora often comes in scenario questions like:  
- “Global high availability with sub-second replication → **Aurora Global Database**.”  
- “Migrate SQL Server workloads with minimal refactoring → **Babelfish**.”  
- “Create dev/test cluster instantly without duplicating full storage → **Cloning**.”  
