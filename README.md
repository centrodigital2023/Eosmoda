# Eosmoda

Plataforma de comercio electrónico de moda construida con Next.js.

## 🚀 Despliegue en Vercel

Este proyecto está configurado para desplegarse en Vercel. Para instrucciones detalladas de despliegue y configuración de dominio, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

### Despliegue Rápido

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/centrodigital2023/Eosmoda)

## 📋 Requisitos

- Node.js 18.0 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en modo producción
npm start
```

## 📁 Estructura del Proyecto

```
Eosmoda/
├── pages/           # Páginas de Next.js
│   ├── _app.js     # Componente de aplicación principal
│   └── index.js    # Página de inicio
├── styles/         # Archivos CSS
│   ├── globals.css
│   └── Home.module.css
├── public/         # Archivos estáticos
├── next.config.js  # Configuración de Next.js
├── vercel.json     # Configuración de Vercel
└── package.json    # Dependencias del proyecto
```

## 🌐 Configuración de Dominio Personalizado

Para configurar un dominio personalizado en Vercel:

1. Ve al dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a Settings → Domains
4. Agrega tu dominio personalizado
5. Configura los registros DNS según las instrucciones de Vercel

Para más detalles, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🔧 Tecnologías

- **Framework**: Next.js 14
- **Lenguaje**: JavaScript
- **UI**: React 18
- **Despliegue**: Vercel

## 📝 Licencia

© 2024 Eosmoda - Todos los derechos reservados