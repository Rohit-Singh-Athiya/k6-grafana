# K6 Performance Monitoring Framework

## Quick Start

k6-monitoring/
├── tests/ # Performance test suites
│ ├── smoke/ # Quick smoke tests
│ │ └── smoke.test.js
│ ├── load/ # Load testing scenarios
│ │ └── load.test.js
│ └── stress/ # Stress testing scenarios
│ └── stress.test.js
├── observability/ # Monitoring & observability stack
│ ├── docker-compose.yml # Container orchestration (Prometheus, Grafana, OTEL)
│ ├── otel-collector.yml # OpenTelemetry collector configuration
│ └── prometheus.yml # Prometheus scrape configuration
├── utils/ # Shared utilities
│ └── httpClient.js # HTTP client for making requests
├── config/ # Configuration files
│ └── dev.env.js # Development environment variables
├── data/ # Test data and fixtures
├── reports/ # Generated test reports
└── package.json # Project dependencies and scripts

1. **Install Docker**

   Go to 👉 https://www.docker.com/products/docker-desktop
   Download Docker Desktop for Windows
   Run the installer
   Keep WSL 2 option checked (default)
   Finish install → Restart your system when asked
   Open Powershell and run  'docker --version'
   If you see a version number 🎉 Docker is ready.

2. **Start observability stack** (Prometheus + Grafana + OpenTelemetry Collector):
   ```powershell
   cd observability
   docker-compose up -d
   cd ../
   ```

3. **Set environment variables** 
   ```powershell
   $env:OTEL_EXPORTER_OTLP_INSECURE="true"
   $env:OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4317"
   ```

4. **Run Tests** 
   ```powershell
   npm run test:smoke    # Smoke test
   npm run test:load     # Load test
   npm run test:stress   # Stress test
   npm run test:all      # All tests
   ```

5. **View K6 Metrics In Prometheus**
   Web UI: http://localhost:3000
   search by : k6_http_reqs_total