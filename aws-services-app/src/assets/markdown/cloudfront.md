# 🌍 Amazon CloudFront – Revision Card

---

## ✅ Key Principles
1. **CDN (Content Delivery Network)**: Delivers content closer to users via a global network of edge locations.  
2. **Performance via caching**: Static and dynamic content cached at edge → lower latency.  
3. **Security**: Integrated with **AWS Shield (DDoS protection)**, **WAF**, and **Field-level encryption**.  

---

## 🏗 Origins
- **S3 Bucket** → common for static websites, media.  
- **Custom Origin (HTTP/HTTPS)** → on-premises servers or non-S3 AWS services.  
- **ALB/EC2 in VPC** → used for dynamic web apps or APIs.  

---

## 🔁 CloudFront vs S3 Cross-Region Replication
- **CloudFront**:  
  - Focus on **performance**.  
  - Content is cached globally at edge locations.  
  - Ideal for **read-heavy, latency-sensitive apps**.  
- **S3 CRR**:  
  - Focus on **durability & compliance**.  
  - Maintains **full copy of bucket** in another Region.  
  - Use cases: **backup, compliance, disaster recovery**.  

👉 **Exam Tip**: Use **CloudFront for fast content delivery**, **CRR for cross-Region durability**.  

---

## 🌍 Geo-Restriction
- Control who can access content based on **geographic location**.  
- Two modes:  
  1. **Allowlist** → only selected countries.  
  2. **Blocklist** → deny selected countries.  

---

## 💰 Price Classes
- **Price Class All** → serve content from **all edge locations** worldwide.  
- **Price Class Most** → exclude most expensive edge locations.  
- **Price Class 100** → only the least expensive Regions (US, EU).  

---

## 🚀 Global Accelerator vs CloudFront

### 🌐 Global Accelerator – Key Principles
- **Operates at Layer 4 (TCP/UDP)**.  
- Provides **2 static anycast IP addresses**.  
- Directs traffic to **closest healthy AWS endpoint** (via AWS backbone).  
- Improves **availability and failover speed**.  
- Ideal for **non-HTTP workloads** (VoIP, gaming, IoT, APIs).  

### 🔄 Comparison
| Feature            | CloudFront (CDN)         | Global Accelerator            |
|--------------------|--------------------------|-------------------------------|
| Layer              | L7 (HTTP/HTTPS)         | L4 (TCP/UDP)                  |
| Focus              | Performance via caching | Global availability & routing |
| Origins            | S3, ALB, EC2, custom    | ALB, NLB, EC2, EIP            |
| Best for           | Web content, media, APIs| Latency-sensitive global apps |
| Caching            | Yes                     | No                            |
| IP addresses       | DNS-based               | Static Anycast IPs            |

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which CloudFront feature helps block users from specific countries?  
A. Shield  
B. Geo-Restriction  
C. WAF  
D. Price Classes  
✅ **Answer: B**

---

**Q2.** Which service gives **static IPs** and improves performance for TCP/UDP applications?  
A. CloudFront  
B. Global Accelerator  
C. S3 CRR  
D. ALB  
✅ **Answer: B**

---

**Q3.** What is the main difference between **CloudFront** and **S3 Cross-Region Replication**?  
A. CloudFront stores multiple copies permanently in each Region.  
B. CloudFront focuses on caching & latency, CRR on durability & compliance.  
C. Both provide DDoS protection.  
D. CRR supports Geo-restriction.  
✅ **Answer: B**

---

### 🔹 True / False
**Q4.** CloudFront can use an ALB as an origin.  
✅ True  

**Q5.** Global Accelerator caches static content at edge locations.  
❌ False (it routes traffic, no caching).  

**Q6.** Price Class 100 uses only the cheapest Regions (US & EU).  
✅ True  

---

✅ **Exam Tip**:  
- **CloudFront = Caching + Content Delivery** (web, video, APIs).  
- **Global Accelerator = Static IPs + Global TCP/UDP routing**.  
- Expect questions mixing **performance vs disaster recovery vs security** scenarios.  

- **ACM**: SSL certificate management
- **WAF**: Web application firewall
- **Lambda@Edge**: Custom logic at edge locations
