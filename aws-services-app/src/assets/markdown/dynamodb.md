# ⚡ Amazon DynamoDB – Revision Card

---

## 📝 DynamoDB Keypoints
- **Fully managed NoSQL database** (key-value & document).
- **Serverless**: automatic scaling, high availability, multi-AZ replication.
- **Low-latency performance** at any scale (single-digit ms).
- **Highly durable** (replicates data across multiple AZs).
- Supports **fine-grained access control** with IAM.

---

## ⚙️ DynamoDB Under the Hood
- Data organized into **tables**.
- Each table requires a **primary key**:
    - **Partition key** (hash key).
    - **Partition key + Sort key** (composite).
- Supports **indexes**:
    - **LSI (Local Secondary Index)** → same partition key, different sort key.
    - **GSI (Global Secondary Index)** → different partition & sort key.

---

## 📑 Supported Data Types
- **Scalar**: String, Number, Binary, Boolean, Null.
- **Document**: JSON-like Map, List.
- **Set**: String Set, Number Set, Binary Set.
- Good for **evolving schemas** (schema-less, flexible attributes).

---

## ⚖️ Provisioned vs On-Demand Mode
- **Provisioned mode (default)**:
    - You define **RCU (Read Capacity Units)** & **WCU (Write Capacity Units)**.
    - Can enable **Auto Scaling**.
- **On-Demand mode**:
    - No capacity planning required.
    - Scales automatically with traffic.
    - Pay-per-request (ideal for unpredictable workloads).

---

## 🚀 DynamoDB DAX (DynamoDB Accelerator)
- **In-memory cache** for DynamoDB (similar to Redis).
- Reduces **read latency** to microseconds.
- Fully managed, highly available, secure (VPC integration).
- Good for **read-heavy workloads**.

---

## 🌍 DynamoDB Global Tables
- **Multi-region replication** (active-active).
- Provides **low-latency reads & writes** across regions.
- Automatic conflict resolution (last write wins).
- Great for **global applications**.

---

## ⏳ DynamoDB TTL (Time to Live)
- Expiration timestamp attribute → items deleted automatically after expiry.
- Helps reduce storage cost.
- Common use case: **session management, temporary data**.

---

## 💾 DynamoDB Backups
- **On-Demand Backups**: full table snapshot at a point in time.
- **Point-in-Time Recovery (PITR)**:
    - Continuous backups.
    - Recover table state to any point in the last **35 days**.

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which DynamoDB feature reduces read latency with in-memory caching?  
A. Global Tables  
B. TTL  
C. DAX  
D. PITR  
✅ **Answer: C**

---

**Q2.** Which mode of DynamoDB is best for unpredictable workloads?  
A. Provisioned  
B. On-Demand  
C. Auto Scaling  
D. TTL  
✅ **Answer: B**

---

**Q3.** Which backup type allows recovery up to 35 days in the past?  
A. On-Demand  
B. PITR  
C. LSI  
D. GSI  
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** DynamoDB is a regional service replicated across multiple AZs.  
✅ True

**Q5.** TTL deletes items automatically after expiry to save cost.  
✅ True

**Q6.** Global Tables are only available in a single region.  
❌ False (multi-region).

---

✅ **Exam Tip**:
- **Provisioned = predictable traffic, On-Demand = unpredictable traffic.**
- **DAX = cache for microsecond read latency.**
- **TTL = auto-expire data.**
- **PITR = 35-day continuous backup.**
- **Global Tables = multi-region active-active replication.**  
