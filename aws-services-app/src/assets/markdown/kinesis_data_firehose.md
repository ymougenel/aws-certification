# 🔥 Amazon Kinesis Data Firehose – Revision Card

---

## 📝 Keypoints
- **Fully managed service** to load streaming data into AWS destinations.
- Requires **no administration** (serverless, auto scaling).
- Designed for **near real-time** ingestion and delivery.
- **No storage** (unlike Kinesis Data Streams) → data is immediately delivered.
- Common use case: **ETL + delivery** into analytics services.

---

## ⚡ Firehose Features
- **Automatic scaling** → adjusts to throughput (no shard management).
- **Pay-per-use** → pricing based on volume of data ingested + transformations.
- **Near real-time buffering** (minimum buffer size = 1 MB or buffer interval = 60s).
- Supports **data transformation** with AWS Lambda (ex: JSON → Parquet/ORC).
- **Compression support** → GZIP, Snappy, ZIP.
- **Encryption** at rest (KMS) + in transit (TLS).

---

## 🔄 Supported Data Types & Conversions
- Accepts **structured and unstructured** streaming data.
- Can automatically **convert formats**:
    - JSON → Parquet
    - JSON → ORC
- Compression to reduce storage costs.

---

## 🔗 AWS Service Integrations (Destinations)
- **Amazon S3** → long-term storage.
- **Amazon Redshift** → analytics (via S3 intermediate stage).
- **Amazon OpenSearch Service (Elasticsearch)** → log & search analytics.
- **Amazon Kinesis Data Analytics** → real-time SQL analytics.
- **Third-party tools** via custom HTTP endpoint.
- Can send simultaneously to **multiple destinations** (S3 backup + Redshift, etc.).

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which Kinesis service provides **data storage and replay**?  
A. Firehose  
B. Data Streams  
C. Redshift  
D. S3  
✅ **Answer: B**

---

**Q2.** Minimum buffer size for Firehose delivery is:  
A. 100 MB  
B. 10 MB  
C. 1 MB or 60 seconds  
D. 128 KB  
✅ **Answer: C**

---

**Q3.** Which service is best for sending logs into **Amazon OpenSearch Service** with minimal management?  
A. Kinesis Data Streams  
B. Firehose  
C. SQS  
D. SNS  
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** Firehose stores data and allows replay like Kinesis Data Streams.  
❌ False (no replay, no storage).

**Q5.** Firehose can automatically compress and transform incoming data.  
✅ True

**Q6.** Firehose requires manual shard provisioning.  
❌ False (auto scaling).

---

✅ **Exam Tip**:
- **Use Firehose** if you want **easy, serverless, near real-time delivery** to destinations (S3, Redshift, OpenSearch).
- **Use Data Streams** if you need **custom processing, replay, or long retention**.
- Firehose = **ETL + delivery**, Streams = **raw ingestion + replay**.  
