# MENDOZA — Segurança e Tecnologia

Primera etapa: portada institucional estática en portugués de Brasil. Sin dependencias, instalación, compilación, envío de datos ni servicios externos.

## Arquitectura

```text
dist/                       Raíz pública para Cloudflare Pages
  index.html                Contenido semántico y metadatos SEO
  assets/css/base.css       Variables, tipografía y reglas generales
  assets/css/components.css Navegación, botones y componentes comunes
  assets/css/home.css       Composición de las secciones de inicio
  assets/js/main.js         Menú progresivo y accesible
README.md                   Instrucciones y pendientes
```

El logotipo suministrado se utiliza en la cabecera y el pie de página, con tamaño adaptable y texto alternativo. La portada utiliza la imagen suministrada de vigilancia y conectividad como fondo decorativo, con un degradado para la lectura. Se conserva el PNG original; su optimización queda pendiente.

## Probar localmente

Abrir `dist/index.html` en el navegador. También puede servirse por HTTP si Python está instalado, desde la raíz del proyecto:

```powershell
python -m http.server 8080 --directory dist
```

Visitar http://localhost:8080 y detener con Ctrl+C. No es necesario instalar Python para abrir el HTML directamente.

Revisar a 360, 768 y 1280 píxeles: navegación, ausencia de desbordamiento, enlaces internos y secciones. Con teclado, comprobar enlace de salto, foco visible, botón de menú, Enter/Espacio y cierre con Escape. Sin JavaScript, los enlaces de navegación permanecen visibles. Comprobar también zoom al 200 % y preferencia de movimiento reducido.

## Pendientes antes de publicar

- Aprobación de la composición visual con el logotipo suministrado.
- Completar el alcance comercial y las condiciones de las líneas Infraestrutura & Tecnologia y Desenvolvimento Web presentadas en la sección de soluciones.
- Validación del proceso propuesto y de los compromisos institucionales.
- E-mail, teléfono/WhatsApp y región de atención reales.
- Datos legales y cadastrais verificables que correspondan; no se inventaron CNPJ, dirección, clientes, certificaciones, métricas ni testimonios.
- Definir un canal comercial funcional. Actualmente no hay formulario ni recepción de solicitudes; no se recopilan datos.
- Revisar el encuadramiento legal de monitoreo de CFTV antes de considerar su incorporación a la oferta.
- Al definir dominio, agregar URL canónica y metadatos sociales con URL e imagen aprobadas.

## Cloudflare Pages (configuración futura)

La sección de soluciones incorpora tarjetas adaptables (dos columnas desde 760 px), iconos SVG locales y detalles nativos con la acción «Conhecer solução». Los detalles funcionan sin JavaScript y con teclado. La aparición al entrar en pantalla utiliza IntersectionObserver; se omite con movimiento reducido o si el navegador no lo soporta. Los efectos de hover se limitan a dispositivos con puntero preciso.

Sitio estático sin comando de build; directorio de salida `dist`. Los recursos usan rutas relativas. No se realizó deploy, registro de sitio, commit ni integración con servicios de terceros.
