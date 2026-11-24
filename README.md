# MENDOZA — Segurança e Tecnologia

Portada institucional estática en portugués de Brasil, diseñada primero para móviles. No requiere dependencias, instalación ni proceso de compilación.

## Dirección del rediseño

La portada se reconstruyó desde cero sin borrar la documentación del proyecto. Debe servir como muestra de la calidad de desarrollo web de MENDOZA: claridad, coherencia visual, accesibilidad, experiencia móvil cuidada y rendimiento. La confianza se construye con el alcance real de los servicios, no con clientes, testimonios, certificaciones, trayectoria empresarial ni garantías inventadas.

### Posicionamiento de una empresa nueva

MENDOZA está empezando como empresa, pero el CEO sí tiene experiencia en los servicios de redes y tecnología que se ofrecerán. Comunicar esa experiencia con precisión y sin atribuirla a años de operación de la empresa. El desarrollo web será realizado por el equipo de este proyecto; no presentar esa capacidad como experiencia previa del CEO ni inventar un portafolio de clientes.

La marca debe proyectar profesionalismo desde el primer contacto mediante un mensaje claro, buen diseño, alcance honesto y entregables comprensibles. No aparentar una estructura, historial, cartera de clientes o credenciales que no estén confirmados.

### Criterios de diseño y contenido

- Diseñar primero para móviles y adaptar después a tabletas y escritorio. La experiencia móvil es la prioridad: comprobar lectura, navegación, tamaño de los controles, encuadre de imágenes y rendimiento en conexiones móviles.
- La foto del CEO ya está en el hero, el logo oficial se usa en el encabezado y el pie, y el símbolo cuadrado se usa como favicon. Validar la legibilidad del logo en móvil y mantener la foto separada del texto.
- Crear una identidad visual consistente con la marca: azul oscuro, blanco y acentos azules, con tipografía, espaciado y jerarquía cuidados. Evitar adornos y secciones que no aporten al cliente.
- Tomar como referencia principios de diseño asociados al trabajo de Steve Jobs —simplicidad, foco, claridad y atención al detalle— sin copiar una identidad visual o un producto específico. Cada elemento debe ayudar a entender la oferta o a avanzar una tarea del visitante.
- Comunicar las dos líneas de trabajo en el hero con jerarquía clara, sin que la imagen del condominio eclipse los sitios institucionales.
- Explicar la configuración de redes y equipos, incluidos MikroTik, el monitoreo de disponibilidad por IP y la documentación de topología e inventario en planilla. La oferta corresponde a infraestructura de red, no a vigilancia de cámaras ni seguridad física.
- Usar textos públicos en portugués de Brasil, orientados a las necesidades del cliente y sin prometer servicios o condiciones no confirmados.
- El WhatsApp oficial de contacto con el CEO fue confirmado por el usuario y está enlazado desde la portada. No inventar otros canales ni formularios.
- La razón social y el CNPJ fueron confirmados por el usuario y aparecen en el borrador de privacidad; no publicar la dirección particular. Instagram y Facebook están enlazados en el pie.

### Forma de trabajo

1. Revisar la estructura completa en móvil y escritorio.
2. Revisar la legibilidad del logo y el encuadre de la fotografía en móvil y escritorio.
3. Ajustar composición y recorte a partir de las imágenes reales, sin cubrir el rostro con texto.
4. Continuar refinando sección por sección y validar cada ajuste.
5. Antes de publicar, probar con teclado, sin JavaScript y con movimiento reducido; revisar contraste, enlaces, rendimiento y desbordamientos. Validar también en un teléfono real.

### Información que falta confirmar

- Horarios y frecuencia del monitoreo, dispositivos y señales supervisados, límites de detección y condiciones de notificación.
- Si se incluye diagnóstico, corrección remota o visita presencial; cobertura y condiciones de atención.
- Para sitios web: responsables de textos e imágenes, alcance de las páginas, aprobación del diseño, dominio, alojamiento, mantenimiento y actualizaciones.
- Responsables de cada servicio y datos necesarios para completar la política de privacidad.

## Arquitectura actual

```text
dist/                       Archivos públicos del sitio estático
  index.html                Contenido semántico y metadatos SEO
  404.html                  Página de error
  privacidade.html          Borrador de política de privacidad para pruebas
  assets/css/base.css       Variables, tipografía y reglas generales
  assets/css/components.css Navegación, botones y componentes comunes
  assets/css/home.css       Composición de las secciones de inicio
  assets/js/main.js         Menú progresivo y accesible
  assets/js/privacy-notice.js Aviso informativo de privacidad
  assets/img/               Logo y fotografía del hero
README.md                   Instrucciones y pendientes
```

El logo oficial aparece en el encabezado y el pie desde `dist/assets/img/MENDOZA_LOGO_ORIGINAL.png`. El favicon `dist/assets/img/favicon-64.png` es una versión reducida del símbolo suministrado en `dist/assets/img/favicon-mendoza.png`. Instagram y Facebook enlazan a los perfiles proporcionados por el usuario. La foto del CEO se muestra en `.hero-photo-slot` desde `dist/assets/img/Profissional de Segurança no Condomínio Moderno.png`, con texto alternativo y dimensiones intrínsecas. En móvil aparece debajo del texto; revisar su encuadre y optimizar el peso del logo y la foto antes de publicar.

## Probar localmente

Abrir `dist/index.html` en el navegador. También puede servirse por HTTP si Python está instalado, desde la raíz del proyecto:

```powershell
python -m http.server 8080 --directory dist
```

Visitar http://localhost:8080 y detener con Ctrl+C. No es necesario instalar Python para abrir el HTML directamente.

Revisar a 320, 360, 390, 768 y 1280 píxeles: navegación, ausencia de desbordamiento, imagen del CEO y todas las secciones. Con teclado, comprobar enlace de salto, foco visible, botón de menú, Enter/Espacio y cierre con Escape. Sin JavaScript, los enlaces de navegación permanecen visibles. Comprobar también zoom al 200 % y preferencia de movimiento reducido.

## Preparar despliegue de prueba

El sitio publicado debe tomar como raíz el contenido de `dist/`; no necesita comando de compilación. Si Vercel se conecta a un repositorio cuya raíz contiene `dist/`, configurar la salida estática como `dist`. Comprobar en la configuración efectiva del proyecto que no haya un directorio raíz o comando heredado que cambie esa ruta.

Después del despliegue de prueba, verificar la portada, sus imágenes y scripts, la página de privacidad, el aviso, el menú y los enlaces de WhatsApp. Comprobar también la respuesta para una URL inexistente: servir `404.html` con estado 404 depende de la configuración de la plataforma, no del servidor local de prueba.

La política es un borrador y la configuración del proveedor aún debe revisarse; este despliegue no equivale a una publicación comercial definitiva. Cloudflare será el destino previsto para el lanzamiento y requiere una validación independiente.

## Pendientes antes de publicar

- Revisar el tamaño del logo en la cabecera y el pie y la legibilidad del favicon en la pestaña del navegador. Revisar en móvil el recorte de la foto y optimizar el peso del logo y la foto antes de publicar.
- Completar las condiciones del monitoreo: frecuencia, dispositivos, notificaciones y límites de atención.
- Confirmar alcance de sitios web: contenidos, imágenes, páginas, dominio, alojamiento y mantenimiento.
- Completar en la política los fines y bases legales del tratamiento, retención, compartición, derechos y procedimiento de solicitudes; revisar legalmente el borrador antes del lanzamiento comercial. No publicar la dirección particular sin necesidad confirmada.
- Verificar registros, cookies y tecnologías de Vercel durante las pruebas y de Cloudflare antes de la publicación definitiva. Si se incorporan cookies o tecnologías opcionales, implementar su control real antes de activarlas y actualizar la política.
- Definir dominio y completar URL canónica y metadatos sociales.

## Implementación actual

La portada contiene la foto del CEO en el hero, el logo oficial, dos líneas de servicio, proceso de trabajo y contacto directo por WhatsApp. La navegación principal lleva directamente a cada público; el menú móvil se controla con JavaScript vanilla por debajo de 960 px y, sin JavaScript, los enlaces permanecen visibles. El botón de WhatsApp abre un enlace externo, sin scripts de terceros. El código actual no incluye formulario ni cookies de analítica o publicidad. La página de privacidad es un borrador para pruebas; el aviso inicial es informativo, no registra consentimiento y reaparece al recargar la portada. Sin JavaScript el aviso no aparece, pero el enlace al borrador sigue en el pie.

Sitio estático sin comando de build; los archivos públicos están en `dist` y los recursos usan rutas relativas. La publicación y el directorio raíz de Vercel deben verificarse antes de cada despliegue.
