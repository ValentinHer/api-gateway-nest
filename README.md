# api-gateway-nest

API Gateway desarrollado con NestJS + TypeScript.  
Actúa como punto de entrada unificado a tus distintos microservicios: rutea peticiones, gestiona autenticación/autorización, y permite mantener una interfaz limpia hacia el cliente.

## 📄 Descripción

Este proyecto funciona como puerta de enlace (gateway) para los microservicios (usuarios, productos, autenticación, etc.).  
Recibe peticiones HTTP entrantes, las redirige al servicio adecuado, y devuelve la respuesta al cliente, abstrayendo la complejidad del backend detrás de una API unificada.  

Entre sus responsabilidades típicas se encuentran:  
- Enrutamiento / proxy hacia microservicios.  
- Manejo centralizado de autenticación / autorización si lo configuras (por ejemplo, validar credenciales del usuario).    

## ⚙️ Requisitos

- Node.js 
- npm
- Variables de entorno (.env) — copia `.env.example` como `.env` y configura según tu entorno
- Docker / docker-compose para la BD. 

## 🚀 Instalación & Ejecución

# Instalar dependencias
```bash
npm install
```

# Levantar BD PostgresSQL
```bash
docker compose up -d
```

# Parar BD PostgresSQl
```bash
docker compose down
```

# En desarrollo
```bash
npm run start:dev
```
