# K6 Performance Monitoring Framework

![K6](https://img.shields.io/badge/k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)

A complete performance testing and monitoring solution using K6, Prometheus, Grafana, and OpenTelemetry Collector.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Available Tests](#available-tests)
- [Monitoring & Observability](#monitoring--observability)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This framework provides a robust performance testing solution with real-time monitoring capabilities. It combines K6 for load testing with a complete observability stack for metrics collection and visualization.

### Key Features

- 🚀 **Multiple test scenarios** - Smoke, Load, and Stress tests
- 📊 **Real-time monitoring** - Prometheus metrics collection
- 📈 **Visualization** - Grafana dashboards
- 🔍 **Distributed tracing** - OpenTelemetry integration
- 🐳 **Containerized observability** - Docker-based stack
- 🛠️ **Reusable utilities** - Shared HTTP client and helpers

## 📁 Project Structure

```
k6-monitoring/
├── tests/                    # Performance test suites
│   ├── smoke/               # Quick smoke tests
│   │   └── smoke.test.js
│   ├── load/                # Load testing scenarios
│   │   └── load.test.js
│   └── stress/              # Stress testing scenarios
│       └── stress.test.js
├── observability/           # Monitoring & observability stack
│   ├── docker-compose.yml   # Container orchestration
│   ├── otel-collector.yml   # OpenTelemetry collector config
│   └── prometheus.yml       # Prometheus scrape config
├── utils/                   # Shared utilities
│   └── httpClient.js        # HTTP client for requests
├── config/                  # Configuration files
│   └── dev.env.js           # Development environment variables
├── data/                    # Test data and fixtures
├── reports/                 # Generated test reports
└── package.json             # Project dependencies and scripts
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Docker Desktop** (required for observability stack)

## 🚀 Quick Start

### Step 1: Install Docker

1. Navigate to [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Download Docker Desktop for Windows
3. Run the installer
4. Keep WSL 2 option checked (default)
5. Complete installation and restart your system when prompted

**Verify installation:**

```powershell
docker --version
```

If you see a version number, 🎉 Docker is ready!

### Step 2: Clone the Repository

```bash
git clone <your-repository-url>
cd k6-monitoring
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Observability Stack

Launch Prometheus, Grafana, and OpenTelemetry Collector:

```powershell
cd observability
docker-compose up -d
cd ../
```

**Verify containers are running:**

```powershell
docker ps
```

### Step 5: Configure Environment Variables

**For PowerShell:**

```powershell
$env:OTEL_EXPORTER_OTLP_INSECURE="true"
$env:OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4317"
```

**For Bash/Linux:**

```bash
export OTEL_EXPORTER_OTLP_INSECURE="true"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4317"
```

### Step 6: Run Tests

```bash
# Run smoke tests (quick validation)
npm run test:smoke

# Run load tests (sustained load)
npm run test:load

# Run stress tests (breaking point)
npm run test:stress

# Run all tests sequentially
npm run test:all
```

## 🧪 Available Tests

### Smoke Tests
Quick validation tests to ensure basic functionality works.

```bash
npm run test:smoke
```

**Use case:** Pre-deployment validation, quick health checks

### Load Tests
Simulate realistic user load over a sustained period.

```bash
npm run test:load
```

**Use case:** Capacity planning, performance benchmarking

### Stress Tests
Push the system beyond normal operating capacity to find breaking points.

```bash
npm run test:stress
```

**Use case:** Identify bottlenecks, test system limits

## 📊 Monitoring & Observability

### Access Grafana Dashboard

1. Open your browser and navigate to: **http://localhost:3000**
2. Default credentials:
   - **Username:** `admin`
   - **Password:** `admin`
3. Import K6 dashboards or create custom visualizations
<img width="2876" height="1476" alt="image" src="https://github.com/user-attachments/assets/887ad66d-d773-458d-866e-a147bd375a6e" />

### View Metrics in Prometheus

1. Navigate to: **http://localhost:9090**
2. Search for K6 metrics:
   - `k6_http_reqs_total` - Total HTTP requests
   - `k6_http_req_duration` - Request duration
   - `k6_http_req_failed` - Failed requests
   - `k6_vus` - Virtual users
   - `k6_iterations` - Test iterations

### OpenTelemetry Collector

The OTEL Collector receives metrics from K6 and forwards them to Prometheus.

- **gRPC endpoint:** `http://localhost:4317`
- **HTTP endpoint:** `http://localhost:4318`

## ⚙️ Configuration

### Environment Variables

Edit `config/dev.env.js` to configure:

- Target URLs
- Test duration
- Virtual user counts
- Thresholds
- Custom tags

### Docker Services

The `observability/docker-compose.yml` includes:

- **Prometheus** - Metrics storage and querying
- **Grafana** - Metrics visualization
- **OpenTelemetry Collector** - Metrics collection and export

### Prometheus Configuration

Modify `observability/prometheus.yml` to:

- Add scrape targets
- Configure retention periods
- Set up alerting rules

## 🐛 Troubleshooting

### Docker containers not starting

```powershell
# Check Docker service status
docker info

# View container logs
docker-compose logs -f

# Restart containers
docker-compose down
docker-compose up -d
```

### Port conflicts

If default ports are in use, modify `docker-compose.yml`:

- Prometheus: `9090`
- Grafana: `3000`
- OTEL Collector: `4317` (gRPC), `4318` (HTTP)

### Environment variables not set

Ensure you run the environment variable commands in the same terminal session where you execute tests.

### Tests failing to connect

Verify your target application is running and accessible. Check firewall settings if testing external services.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy Testing!** 🚀

For questions or issues, please open an issue on GitHub.
