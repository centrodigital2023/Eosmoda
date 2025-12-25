# Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar la aplicación Eosmoda en Vercel y configurar un dominio personalizado.

## Requisitos Previos

- Una cuenta en [Vercel](https://vercel.com)
- Acceso al repositorio de GitHub
- (Opcional) Un dominio personalizado

## Paso 1: Desplegar en Vercel

### Opción A: Despliegue desde la Interfaz Web de Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
2. Haz clic en "Add New..." → "Project"
3. Selecciona el repositorio `centrodigital2023/Eosmoda`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configura las siguientes opciones (las predeterminadas deberían funcionar):
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Haz clic en "Deploy"

### Opción B: Despliegue usando Vercel CLI

1. Instala Vercel CLI globalmente:
   ```bash
   npm install -g vercel
   ```

2. Autentícate con Vercel:
   ```bash
   vercel login
   ```

3. En el directorio raíz del proyecto, ejecuta:
   ```bash
   vercel
   ```

4. Sigue las instrucciones en pantalla:
   - Set up and deploy? Y
   - Which scope? (Selecciona tu cuenta/organización)
   - Link to existing project? N
   - What's your project's name? eosmoda
   - In which directory is your code located? ./

5. Para desplegar en producción:
   ```bash
   vercel --prod
   ```

## Paso 2: Configurar Dominio Personalizado

### A través de la Interfaz Web de Vercel

1. Ve a tu proyecto en el [dashboard de Vercel](https://vercel.com/dashboard)
2. Selecciona el proyecto "eosmoda"
3. Ve a la pestaña "Settings"
4. En el menú lateral, selecciona "Domains"
5. Haz clic en "Add" para agregar un dominio
6. Ingresa tu dominio personalizado (ejemplo: `www.eosmoda.com` o `eosmoda.com`)
7. Haz clic en "Add"

### Configurar DNS

Vercel te proporcionará instrucciones específicas para configurar tu dominio. Generalmente necesitarás:

#### Para un dominio raíz (ejemplo: eosmoda.com)

Agrega un registro A en tu proveedor de DNS:
```
Type: A
Name: @
Value: 76.76.21.21
```

#### Para un subdominio (ejemplo: www.eosmoda.com)

Agrega un registro CNAME en tu proveedor de DNS:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Configuración Recomendada

Para que tanto `eosmoda.com` como `www.eosmoda.com` funcionen:

1. Agrega el registro A para el dominio raíz
2. Agrega el registro CNAME para www
3. En Vercel, agrega ambos dominios
4. Configura uno como dominio principal (redirect)

### A través de Vercel CLI

```bash
vercel domains add eosmoda.com
vercel domains add www.eosmoda.com
```

## Paso 3: Variables de Entorno (Opcional)

Si tu aplicación necesita variables de entorno:

1. En el dashboard de Vercel, ve a Settings → Environment Variables
2. Agrega las variables necesarias:
   - Nombre de la variable
   - Valor
   - Selecciona los entornos (Production, Preview, Development)
3. Haz clic en "Save"

O usando CLI:
```bash
vercel env add VARIABLE_NAME
```

## Paso 4: Verificar el Despliegue

1. Vercel te proporcionará una URL de despliegue (ejemplo: `eosmoda.vercel.app`)
2. Visita la URL para verificar que la aplicación está funcionando correctamente
3. Si configuraste un dominio personalizado, verifica que también funcione

## Despliegues Automáticos

Vercel automáticamente despliega tu aplicación cuando:
- Haces push a la rama principal (producción)
- Haces push a cualquier otra rama (preview)
- Abres o actualizas un Pull Request (preview)

## Comandos Útiles de Vercel CLI

```bash
# Ver información del proyecto
vercel inspect

# Ver logs de la aplicación
vercel logs

# Listar todos los despliegues
vercel list

# Eliminar un despliegue
vercel remove [deployment-url]

# Ver dominios configurados
vercel domains ls

# Remover un dominio
vercel domains rm [domain]
```

## Solución de Problemas

### El despliegue falla

1. Verifica que `package.json` tenga las dependencias correctas
2. Asegúrate de que el comando `npm run build` funcione localmente
3. Revisa los logs del build en Vercel

### El dominio no funciona

1. Verifica que los registros DNS estén configurados correctamente
2. Los cambios de DNS pueden tardar hasta 48 horas en propagarse
3. Usa herramientas como [DNS Checker](https://dnschecker.org) para verificar la propagación

### Certificado SSL no se genera

1. Verifica que los registros DNS apunten correctamente a Vercel
2. El certificado SSL se genera automáticamente una vez que el DNS esté configurado
3. Puede tardar unos minutos en generarse

## Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Configuración de Dominios Personalizados](https://vercel.com/docs/concepts/projects/custom-domains)
- [Variables de Entorno](https://vercel.com/docs/concepts/projects/environment-variables)

## Soporte

Si encuentras algún problema durante el despliegue:
1. Consulta los logs en el dashboard de Vercel
2. Revisa la documentación oficial
3. Contacta al soporte de Vercel si es necesario
