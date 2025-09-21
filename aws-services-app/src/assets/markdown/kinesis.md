# 🔄 Amazon Kinesis – Revision Card

---

## 📝 Amazon Kinesis Keypoints
- **Real-time streaming data platform**.
- Handles ingestion, processing, and analysis of **massive real-time data**.
- Supports **low-latency streaming use cases**: logs, IoT data, clickstreams, metrics.
- Components:
    - **Kinesis Data Streams (KDS)** – ingest & store data.
    - **Kinesis Data Firehose** – load data into S3, Redshift, OpenSearch, etc.
    - **Kinesis Data Analytics** – run SQL queries on streaming data.
    - **Kinesis Video Streams** – handle real-time video streaming.

---

## 📊 Kinesis Data Streams (KDS)
- Stores **shards** (1 MB/s write, 2 MB/s read).
- **Retention**: default 24h, can be extended up to **365 days**.
- **Replay support** → reprocess old data (until retention expires).
- **Data cannot be deleted manually** → only removed after expiration.
- **Encryption at rest** with KMS + in transit (TLS).
- **Kinesis Client Library (KCL)**: handles **shard discovery, checkpointing, load balancing**.
- **Kinesis Producer Library (KPL)**: helps batch & aggregate records before sending.

---

## ⚖️ Kinesis Provisioned vs On-Demand Mode

### 🔹 Provisioned Mode
- You **specify number of shards** in advance.
- **Capacity planning required**.
- Good for **predictable workloads**.
- Cost = number of shards provisioned.

### 🔹 On-Demand Mode
- **Automatic scaling** based on traffic.
- No shard management required.
- Handles **sudden spikes** in traffic.
- Cost = per request & per MB ingested.
- Good for **unpredictable workloads**.

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which Kinesis feature allows reprocessing of old data?  
A. KCL  
B. Retention period  
C. Encryption  
D. Firehose  
✅ **Answer: B**

---

**Q2.** Which mode of Kinesis Data Streams is best for unpredictable traffic patterns?  
A. Provisioned  
B. On-Demand  
C. Manual Shards  
D. Firehose  
✅ **Answer: B**

---

**Q3.** In Kinesis, what is the unit of scaling capacity?  
A. Partition  
B. Instance  
C. Shard  
D. Region  
✅ **Answer: C**

---

### 🔹 True / False
**Q4.** Data in Kinesis Data Streams can be deleted manually before expiration.  
❌ False

**Q5.** KCL helps manage consumer load balancing and checkpointing.  
✅ True

**Q6.** On-demand mode eliminates the need to manually provision shards.  
✅ True

---

✅ **Exam Tip**:
- **KDS = shards, replay, retention, encryption**.
- **Provisioned = predictable traffic, manual shard scaling**.
- **On-Demand = unpredictable traffic, auto-scaling**.
- Use **Firehose** if you need automatic delivery to S3/Redshift/OpenSearch.  
