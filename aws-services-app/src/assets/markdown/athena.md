# 🌟 Amazon Athena – Revision Card

---

## ✅ Key Principles

1. **Serverless query service**: No infrastructure to manage; analyzes data in S3 using standard SQL.
2. **Pay-per-query**: Charged only for data scanned per query (1 TB free tier monthly).
3. **Fast performance**: Executes queries in parallel, results in seconds even on petabyte-scale data.
4. **Data formats**: Supports CSV, JSON, Parquet, ORC, Avro, and more directly from S3.
5. **Scales automatically**: Handles complex queries without provisioning clusters.

---

## 🔄 Core Features

- **Workgroups**: Logical groups for query management, cost allocation, and encryption settings.
- **Federation**: Query across S3, RDS, Redshift, and other sources via connectors.
- **Named queries**: Save and reuse common SQL queries for teams.
- **Integration**: Works with QuickSight for BI, Glue for catalogs, Lake Formation for governance.
- **Results storage**: Writes query results back to S3 in CSV/Parquet/ORC.

---

## 🛡️ Security & Compliance

- **IAM policies**: Fine-grained access control to S3 data and Athena resources.
- **Encryption**: Queries encrypted S3 data (SSE-S3, SSE-KMS, CSE); results encrypted too.
- **Lake Formation**: Column-level security, row filtering, and audit logging.
- **VPC endpoints**: Private access without internet exposure.

---

## 📊 Athena vs Other Query Services

| Feature        | Athena           | Redshift Spectrum      | Glue ETL             |
|----------------|------------------|------------------------|----------------------|
| Infrastructure | Serverless       | Provisioned clusters   | Serverless jobs      |
| Data Location  | S3 only          | S3 + Redshift          | S3 + transformations |
| Pricing        | Per TB scanned   | Per node + scanned     | Per DPU-hour         |
| Use Case       | Ad-hoc SQL on S3 | Data warehouse queries | ETL pipelines        |
| Setup Time     | Instant          | Cluster spin-up        | Job definition       | 

👉 **Exam Tip**:

- Use **Athena** for interactive analysis on S3 data lakes without ETL.
- Use **Redshift** for heavy BI workloads needing columnar storage.

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice

**Q1.** What is Amazon Athena's underlying data store?  
A. DynamoDB  
B. Amazon S3  
C. Redshift  
D. EBS  
✅ **Answer: B**

**Q2.** How does Athena charge for usage?  
A. Per provisioned capacity  
B. Per query runtime  
C. Per TB scanned  
D. Flat monthly fee  
✅ **Answer: C**

**Q3.** Which feature allows querying data across multiple sources like RDS?  
A. Workgroups  
B. Query Federation  
C. Named Queries  
D. VPC Endpoints  
✅ **Answer: B**

### 🔹 True / False

**Q4.** Athena requires provisioning compute clusters.  
❌ False (fully serverless).

**Q5.** Athena supports querying encrypted data in S3.  
✅ True

**Q6.** Athena executes queries serially for best performance.  
❌ False (parallel execution).

---

✅ **Exam Tip**: Athena often appears in scenarios like:

- "Analyze petabytes in S3 with SQL, no servers → **Athena**."
- "Cost-effective ad-hoc queries on data lake logs → **Athena**."
- "BI on raw S3 data without moving it → **Athena + QuickSight**."