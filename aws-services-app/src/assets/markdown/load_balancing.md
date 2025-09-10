# ⚖️ AWS Load Balancing – Revision Card

---

## 🌐 Types of Load Balancers

### 🏛 Classic Load Balancer (CLB)
- Legacy (Layer 4 & Layer 7).
- Basic load balancing for HTTP(S) & TCP apps.
- Limited features → replaced by ALB & NLB.
- **Cross-AZ data transfer is charged** (unless Cross-Zone LB enabled).

---

### 🧩 Application Load Balancer (ALB)
- Operates at **Layer 7 (HTTP/HTTPS)**.
- **Routing based on content**: hostname, URL path, HTTP headers.
- Supports **microservices & container-based apps** (ECS, EKS).
- Target types: instance, IP, Lambda.
- Supports **WebSockets** and **gRPC**.

---

### ⚡ Network Load Balancer (NLB)
- Operates at **Layer 4 (TCP/UDP, TLS)**.
- **High throughput, ultra-low latency** (millions of requests/sec).
- Supports **static IP** or **Elastic IP per AZ**.
- Health checks support **TCP, HTTP, HTTPS**.
- Ideal for **real-time, latency-sensitive apps** (gaming, IoT, VoIP).

---

### 🌍 Gateway Load Balancer (GLB)
- Operates at **Layer 3 (IP)**.
- Routes traffic to **third-party appliances** (firewalls, IDS, DPI, etc).
- Combines **gateway** + **load balancer** in one.
- Transparent to applications.

---

## 🍪 ELB Sticky Sessions
- Also called **session affinity**.
- Uses a **cookie** to ensure a client is always routed to the same target.
- Useful for **stateful apps** (shopping cart).
- Supported by CLB & ALB (via application-based cookies).

---

## 🔀 Cross-Zone Load Balancing
- Distributes traffic **evenly across all registered targets in all AZs**.
- Prevents imbalance if some AZs have fewer instances.
- By default:
    - **ALB** → always enabled (no extra cost).
    - **NLB & GWLB** → optional, **cross-AZ data charges apply**.
    - **CLB** → optional, **no extra cost**.

---

## 📊 Comparison Table

| Feature                | CLB           | ALB (L7)                    | NLB (L4)                 | GWLB (L3) |
|-------------------------|--------------|-----------------------------|--------------------------|-----------|
| OSI Layer              | 4 & 7        | 7 (HTTP/HTTPS)              | 4 (TCP/UDP, TLS)         | 3 (IP)    |
| Use case               | Legacy       | Web, microservices, APIs    | High perf., real-time    | Firewalls |
| Routing features       | Basic        | Path, host, headers, query  | Port, protocol           | IP-based  |
| Performance            | Low/Med      | High                        | **Highest, lowest latency** | Medium   |
| Cross-Zone LB cost     | Free opt.    | Always on, free             | Optional, charges apply  | Charges   |
| Sticky sessions        | Yes          | Yes (cookies)               | No                       | No        |

---

## ❓ Exam Practice Quiz

### 🔹 Multiple Choice
**Q1.** Which Load Balancer is best for **microservices with path-based routing**?  
A. CLB  
B. ALB  
C. NLB  
D. GWLB  
✅ **Answer: B**

---

**Q2.** Which Load Balancer supports **TCP/UDP** and offers **ultra-low latency**?  
A. ALB  
B. CLB  
C. NLB  
D. GWLB  
✅ **Answer: C**

---

**Q3.** Which Load Balancer is designed to integrate **third-party security appliances**?  
A. ALB  
B. NLB  
C. GWLB  
D. CLB  
✅ **Answer: C**

---

### 🔹 True / False
**Q4.** Sticky sessions are available on ALB and CLB.  
✅ True

**Q5.** Cross-Zone Load Balancing is always free on NLB.  
❌ False (it incurs inter-AZ data charges).

**Q6.** ALB can route traffic to Lambda functions.  
✅ True

---

✅ **Exam Tip**: Expect scenario questions like:
- “Need **host/path-based routing** → **ALB**.”
- “Need **extreme performance TCP/UDP** → **NLB**.”
- “Need to route traffic through **firewalls/IDS** → **GWLB**.”
- “Need **session affinity** → enable sticky sessions.”  
