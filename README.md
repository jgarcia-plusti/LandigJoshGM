# 🚀 Landing Page - Josue Garcia Monterroso

Landing page profesional y moderna para mostrar servicios de desarrollo web y backend.

## ✨ Características Principales

### 🎨 Diseño Moderno
- **Dark Mode**: Tema oscuro/claro con toggle persistente
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Responsive Design**: Optimizado para todos los dispositivos
- **Glassmorphism**: Efectos de vidrio esmerilado en navegación

### 🛠️ Funcionalidades

#### Navegación
- Menú hamburger para móviles
- Navegación sticky con indicador de sección activa
- Scroll suave entre secciones
- Indicador de progreso de scroll

#### Formulario de Contacto
- Validación en tiempo real
- Feedback visual de errores
- Integración con WhatsApp
- Mensajes de éxito/error

#### Optimizaciones
- Lazy loading de imágenes
- Código modular (ES6 Modules)
- SEO optimizado (meta tags, Schema.org)
- Accesibilidad mejorada

## 📁 Estructura del Proyecto

```
LandigJoshGM/
├── public/
│   └── images/          # Imágenes del proyecto
├── src/
│   ├── utils/           # Módulos JavaScript
│   │   ├── theme.js     # Gestión de temas (Dark Mode)
│   │   ├── navigation.js # Navegación y menú móvil
│   │   ├── animations.js # Animaciones de scroll
│   │   ├── formValidation.js # Validación de formularios
│   │   └── scroll.js     # Scroll progress y back to top
│   └── index.js         # Punto de entrada principal
├── index.html           # HTML principal
├── index.css            # Estilos CSS
├── server.js            # Servidor Express
└── package.json         # Dependencias
```

## 🚀 Instalación y Uso

### Requisitos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El servidor se iniciará en `http://localhost:3000`

## 🎯 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, animaciones, dark mode
- **JavaScript ES6+**: Módulos, clases, async/await
- **Express.js**: Servidor Node.js
- **Intersection Observer API**: Para animaciones al scroll

## 📱 Secciones de la Página

1. **Hero**: Presentación principal con avatar animado
2. **Skills**: Barras de habilidades con animación
3. **Servicios**: Grid de servicios profesionales
4. **Experiencia**: Timeline de experiencia profesional
5. **Portafolio**: Proyectos destacados
6. **Contacto**: Formulario de contacto con validación
7. **FAQ**: Preguntas frecuentes con acordeón
8. **Testimonios**: Carrusel de testimonios

## 🎨 Personalización

### Colores
Los colores se definen en variables CSS en `index.css`:

```css
:root {
    --primary: #0078d7;
    --primary-light: #00b4d8;
    --primary-dark: #005a9e;
    /* ... más variables */
}
```

### Dark Mode
El dark mode se gestiona automáticamente y guarda la preferencia del usuario en `localStorage`.

### Contenido
Edita directamente `index.html` para cambiar el contenido de las secciones.

## 🔧 Mejoras Implementadas (Remodelación)

### ✅ Completadas
- [x] Dark Mode con toggle persistente
- [x] Menú hamburger para móviles
- [x] Botón "Volver arriba" flotante
- [x] Indicador de progreso de scroll
- [x] Validación robusta de formularios
- [x] Código modularizado (ES6 Modules)
- [x] Lazy loading de imágenes
- [x] SEO mejorado (meta tags, Schema.org)
- [x] Accesibilidad mejorada

### 🚧 Futuras Mejoras
- [ ] PWA básica (Service Worker)
- [ ] Analytics (Google Analytics 4)
- [ ] Backend para formularios
- [ ] Sistema de blog
- [ ] Galería de proyectos con lightbox

## 📝 Licencia

© 2025 Josue Garcia Monterroso. Todos los derechos reservados.

## 👨‍💻 Autor

**Josue Garcia Monterroso**
- Ingeniero de Software & Full Stack Developer
- Especialista en .NET, JavaScript y SQL

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
