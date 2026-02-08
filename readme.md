# K6 Performance Monitoring Framework

## Quick Start

1. **Install Docker**

2. **Start observability stack** (Prometheus + Grafana + OpenTelemetry Collector):
   ```powershell
   cd observability
   docker-compose up -d
   cd ../

2. **Set environment variables** 
$env:OTEL_EXPORTER_OTLP_INSECURE="true"
$env:OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4317"  

2. **Run Tests** 
npm run test:smoke    # Smoke test
npm run test:load     # Load test
npm run test:stress   # Stress test
npm run test:all      # All tests