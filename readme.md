Steps to run this repo: 

1. Install Docker 

2. PowerShell:
    cd observability 
    docker-compose up -d

    cd ../
    $env:OTEL_EXPORTER_OTLP_INSECURE="true"
    $env:OTEL_EXPORTER_OTLP_ENDPOINT="http://otel-collector:4317"
    k6 run --out opentelemetry tests/smoke/healthCheck.test.js