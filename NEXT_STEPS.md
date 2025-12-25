# Próximos Pasos - Desplegar Eosmoda en Vercel

¡Felicidades! Tu proyecto Eosmoda está completamente configurado y listo para desplegarse en Vercel.

## 🚀 Pasos Inmediatos para Desplegar

### Opción 1: Despliegue Rápido con un Clic (Recomendado)

1. **Fusiona este Pull Request** en la rama `main`
2. **Ve a [vercel.com/new](https://vercel.com/new)**
3. **Conecta tu repositorio GitHub**: `centrodigital2023/Eosmoda`
4. **Haz clic en "Deploy"** - ¡Eso es todo!

Vercel detectará automáticamente la configuración de Next.js y desplegará tu sitio.

### Opción 2: Usando Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Clonar el repositorio localmente
git clone https://github.com/centrodigital2023/Eosmoda.git
cd Eosmoda

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

## 🌐 Configurar Tu Dominio Personalizado

Una vez desplegado, configura tu dominio:

1. **Ve a tu proyecto en Vercel Dashboard**
2. **Settings → Domains**
3. **Agrega tu dominio** (ejemplo: `tudominio.com`)
4. **Configura DNS** según las instrucciones de Vercel:

   Para dominio raíz:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   Para subdominio www:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **Espera** a que el certificado SSL se genere (usualmente 1-2 minutos)

## 📝 Archivos Importantes que Debes Conocer

- **`VERCEL_SETUP.md`** - Resumen rápido de toda la configuración
- **`DEPLOYMENT.md`** - Guía completa de despliegue (217 líneas)
- **`README.md`** - Información general del proyecto
- **`vercel.json`** - Configuración de Vercel (optimizada)
- **`.github/workflows/`** - Workflows opcionales para CI/CD

## ⚙️ Configuración Opcional: GitHub Actions

Si quieres usar GitHub Actions para despliegues automáticos:

1. **Obtén tu token de Vercel**:
   ```bash
   vercel tokens create
   ```

2. **Obtén tus IDs**:
   ```bash
   vercel link
   cat .vercel/project.json
   ```

3. **Agrega estos secrets en GitHub**:
   - Ve a Settings → Secrets and variables → Actions
   - Agrega:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`

## ✅ Checklist Post-Despliegue

Después de desplegar, verifica:

- [ ] El sitio está accesible en la URL de Vercel
- [ ] El certificado SSL está activo (https://)
- [ ] La página de inicio se muestra correctamente
- [ ] (Si aplicable) Tu dominio personalizado funciona
- [ ] Los despliegues automáticos funcionan cuando haces push

## 🎨 Personalizar Tu Sitio

Ahora puedes personalizar:

1. **Contenido**: Edita `pages/index.js`
2. **Estilos**: Modifica `styles/Home.module.css` y `styles/globals.css`
3. **Agregar páginas**: Crea nuevos archivos en `pages/`
4. **Agregar imágenes**: Coloca archivos en `public/`

## 📚 Recursos Útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de Dominios Personalizados](https://vercel.com/docs/concepts/projects/custom-domains)

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa `DEPLOYMENT.md` para solución de problemas comunes
2. Consulta los logs en el dashboard de Vercel
3. Verifica que `npm run build` funcione localmente
4. Contacta al soporte de Vercel si es necesario

---

**¡Tu proyecto está listo para brillar en la web! 🌟**
