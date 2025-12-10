# 📚 Documentación Completa del Portafolio

## 🎯 Descripción General

Portafolio web personal de **Ignacio Ravettini Novellino** desarrollado con tecnologías modernas y una estética AERO/glassmorphism. El sitio presenta información profesional, experiencia laboral, habilidades técnicas y un formulario de contacto.

**Información del propietario:**
- **Nombre:** Ignacio Ravettini Novellino
- **Rol:** Data Analyst | Web Developer
- **Ubicación:** Buenos Aires, Argentina
- **Trabajo actual:** Analista de datos en Gobierno de la Ciudad de Buenos Aires (GCBA)
- **Área:** Subsecretaría de Cultura Ciudadana y Responsabilidad Social

---

## 🛠️ Stack Tecnológico

### Core Technologies

#### **React 18.2.0**
- Biblioteca de JavaScript para construir interfaces de usuario
- Uso de componentes funcionales con hooks
- JSX para sintaxis de plantillas

#### **TypeScript 5.2.2**
- Superset de JavaScript con tipado estático
- Mejora la seguridad de tipos y la experiencia de desarrollo
- Configurado con modo estricto

#### **Vite 5.0.8**
- Build tool y dev server ultra-rápido
- Hot Module Replacement (HMR) para desarrollo
- Optimización de bundles para producción
- Configuración mínima y fácil de usar

### Styling

#### **TailwindCSS 3.4.0**
- Framework de utilidades CSS
- Diseño responsive-first
- Dark mode habilitado por defecto (`darkMode: 'class'`)
- Configuración personalizada con tema AERO

#### **PostCSS 8.4.32**
- Procesador de CSS
- Integración con TailwindCSS
- Autoprefixer para compatibilidad de navegadores

### Fuentes

#### **Inter Font**
- Fuente moderna y legible
- Cargada desde Google Fonts
- Fallback a fuentes del sistema

---

## 🎨 Diseño y Estética AERO/Glassmorphism

### Filosofía de Diseño

El diseño sigue una estética **AERO/glassmorphism** caracterizada por:
- Efectos de vidrio esmerilado (frosted glass)
- Transparencias y blur effects
- Fondos con gradientes radiales
- Bordes sutiles y sombras profundas
- Paleta de colores oscura con acentos vibrantes

### Paleta de Colores

#### Fondos Base
```css
#020617  /* Fondo principal - slate/indigo muy oscuro */
rgba(15,23,42,0.7)  /* Fondo de cards glassmorphism */
```

#### Gradientes
- **Azul:** `#1d4ed8` (aero-blue)
- **Cian:** `#22d3ee` (aero-cyan)
- **Violeta:** `#7c3aed` (aero-violet)

#### Texto
- **Principal:** `#f9fafb` (gray-100)
- **Secundario:** `#cbd5f5` / `#9ca3af` (gray-300/gray-400)
- **Acento:** `#38bdf8` / `#0ea5e9` (cyan-400/sky-500)

### Fondo de Página

El body utiliza múltiples gradientes radiales superpuestos sobre un fondo sólido oscuro:

```css
background: 
  radial-gradient(circle at 0% 0%, rgba(29, 78, 216, 0.15) 0%, transparent 50%),  /* Azul desde esquina superior izquierda */
  radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),  /* Violeta desde esquina inferior derecha */
  radial-gradient(circle at 70% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),  /* Cian suave cerca del centro/derecha */
  #020617;  /* Fondo base */
background-attachment: fixed;  /* Fondo fijo al hacer scroll */
```

### Cards Glassmorphism

Las cards importantes (Sobre mí, Habilidades, Experiencia, etc.) usan:

```css
.card-aero {
  background: rgba(15, 23, 42, 0.7);  /* bg-slate-900/70 */
  backdrop-filter: blur(18px);  /* Efecto de vidrio esmerilado */
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.35);  /* border-slate-400/35 */
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);  /* shadow-aero */
  padding: 1.5rem - 2rem;  /* p-6 o p-8 */
}
```

### Botones

#### Botón Primario
```css
.btn-primary {
  background: linear-gradient(to right, #2563eb, #06b6d4);  /* azul a cian */
  border-radius: 9999px;  /* rounded-full */
  padding: 0.625rem 1.5rem;  /* px-6 py-2.5 */
  font-weight: 600;  /* font-semibold */
  transition: all 300ms;
}
```

**Hover:** Escala 105%, sombra con glow cian

#### Botón Secundario
```css
.btn-secondary {
  background: transparent;
  border: 1px solid rgba(34, 211, 238, 0.7);  /* border-cyan-400/70 */
  border-radius: 9999px;
  color: #22d3ee;  /* text-cyan-400 */
}
```

**Hover:** Fondo ligeramente más claro, borde más visible

### Componentes CSS Personalizados

Definidos en `src/index.css` usando `@layer components`:

- `.card-aero` - Cards con efecto glassmorphism
- `.btn-primary` - Botón principal con gradiente
- `.btn-secondary` - Botón secundario transparente
- `.section-title` - Títulos de sección (text-4xl md:text-5xl)
- `.section-subtitle` - Subtítulos de sección (text-lg md:text-xl)
- `.chip` - Tags/chips para tecnologías (rounded-full, bg-slate-800/50)

---

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                    # Assets estáticos (vacío por ahora)
├── src/
│   ├── components/           # Componentes React
│   │   ├── Navbar.tsx       # Barra de navegación sticky
│   │   ├── Hero.tsx         # Sección principal/presentación
│   │   ├── About.tsx        # Sección sobre mí
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   ├── Experience.tsx   # Timeline de experiencia laboral
│   │   ├── Education.tsx    # Formación académica
│   │   ├── Projects.tsx     # Grid de proyectos (placeholders)
│   │   ├── Contact.tsx      # Formulario de contacto
│   │   └── Footer.tsx       # Pie de página
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada React
│   └── index.css            # Estilos globales y clases personalizadas
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración TypeScript
├── tsconfig.node.json       # Config TypeScript para Node
├── vite.config.ts           # Configuración Vite
├── tailwind.config.js       # Configuración TailwindCSS
├── postcss.config.js        # Configuración PostCSS
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Documentación básica
└── DOCUMENTACION.md        # Esta documentación completa
```

---

## 🧩 Componentes Detallados

### 1. **Navbar** (`src/components/Navbar.tsx`)

**Función:** Barra de navegación fija en la parte superior con scroll suave a secciones.

**Características:**
- **Sticky:** `fixed top-0 inset-x-0 z-50`
- **Glass effect:** `bg-slate-900/70 backdrop-blur-xl`
- **Responsive:** Menú hamburguesa en mobile, enlaces horizontales en desktop
- **Navegación:** 7 enlaces (Inicio, Sobre mí, Habilidades, Experiencia, Educación, Proyectos, Contacto)
- **Animación:** Línea inferior animada en hover (usando pseudo-elemento)

**Estado:**
- `isMenuOpen`: Controla visibilidad del menú móvil

### 2. **Hero** (`src/components/Hero.tsx`)

**Función:** Sección de presentación principal, primera impresión del visitante.

**Estructura Desktop:**
- **Columna izquierda:** Texto de presentación
  - Tag "Portafolio Personal"
  - Nombre completo (Ignacio Ravettini Novellino)
  - Rol (Data Analyst | Web Developer)
  - Descripción breve
  - 3 botones de acción (Ver proyectos, Contactarme, Descargar CV)

- **Columna derecha:** Card con avatar
  - Círculo con iniciales "IR"
  - Gradiente de cian a azul
  - Chips: "React" y "Data Analyst"

**Estructura Mobile:**
- Layout en columna
- Card de avatar aparece arriba o abajo

**Funcionalidad:**
- Scroll suave a secciones usando `scrollIntoView({ behavior: 'smooth' })`

### 3. **About** (`src/components/About.tsx`)

**Función:** Información detallada sobre el profesional.

**Contenido:**
- Título y subtítulo
- Card AERO grande con descripción extendida
- Grid "Actualmente" con 4 items:
  - Cargo
  - Organización
  - Área
  - Ubicación

**Diseño:**
- Grid responsive: 1 columna en mobile, 2 en desktop

### 4. **Skills** (`src/components/Skills.tsx`)

**Función:** Mostrar habilidades técnicas organizadas por categorías.

**Categorías:**
1. **Desarrollo Web:** HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React, Next.js, jQuery, Responsive Design
2. **Back-end y Bases de Datos:** SQL Server, MongoDB, APIs, CRUD, Node.js, Express, RESTful Services
3. **Análisis de Datos:** Manejo de datos, Consultas SQL, Limpieza y tratamiento, Visualizaciones, Informes, Análisis estadístico
4. **Educación y Comunicación:** Diseño de contenido didáctico, Planificación de currículas, Comunicación técnica, Documentación
5. **Soft Skills:** Comunicación clara, Trabajo en equipo, Organización, Orientación a resultados, Mejora continua, Resolución de problemas

**Diseño:**
- Grid responsive: 1 columna mobile, 2 tablet, 3 desktop
- Cards AERO con hover effect (translate-y)

### 5. **Experience** (`src/components/Experience.tsx`)

**Función:** Timeline vertical de experiencia laboral.

**Experiencias:**
1. **2024 – Presente** | Analista de datos | GCBA
2. **2022 – Presente** | Profesor de informática | Instituto Mater Dolorosa
3. **2023 – 2024** | Profesor de Programación | Centro de e-Learning UTN FRBA
4. **2022 – 2023** | Profesor de informática | Escuela Internacional Natán Gesang
5. **2022** | Pasante | Grupo MSA

**Diseño Desktop:**
- Línea vertical central con gradiente (cian → azul → violeta)
- Puntos en la línea para cada entrada
- Cards AERO a un lado de la línea

**Diseño Mobile:**
- Columna única sin línea vertical
- Cards apiladas verticalmente

**Cada experiencia incluye:**
- Título del puesto
- Institución/empresa
- Periodo de tiempo
- Lista de 3-5 logros/responsabilidades

### 6. **Education** (`src/components/Education.tsx`)

**Función:** Formación académica y profesional.

**Entrada principal:**
- **Título:** Diplomatura en Desarrollo web FULL-STACK
- **Institución:** Centro de e-Learning UTN FRBA
- **Periodo:** mar. 2023 – dic. 2023
- **Tecnologías:** HTML, CSS, Bootstrap, JavaScript, TypeScript, React, jQuery, SQL Server, MongoDB, Node.js, APIs
- **Descripción:** Resumen de la formación

**Diseño:**
- Similar a Experience pero más compacto
- Chips de tecnologías al final

### 7. **Projects** (`src/components/Projects.tsx`)

**Función:** Grid de proyectos (actualmente con placeholders).

**Estado actual:**
- 3 proyectos placeholder
- Mensaje: "Los proyectos se agregarán próximamente"
- Estructura lista para agregar proyectos reales

**Cada card incluye:**
- Nombre del proyecto
- Descripción breve
- Tags de tecnologías
- Botones "Ver demo" y "Ver código" (deshabilitados)

**Diseño:**
- Grid responsive: 1 columna mobile, 2 tablet, 3 desktop

### 8. **Contact** (`src/components/Contact.tsx`)

**Función:** Formulario de contacto y enlaces profesionales.

**Estructura:**
- **Columna izquierda:** Formulario
  - Campo nombre (required)
  - Campo email (required, validación de formato)
  - Campo mensaje/textarea (required)
  - Botón "Enviar mensaje"

- **Columna derecha:** Otras formas de contacto
  - Email (mailto link)
  - LinkedIn (link externo)
  - GitHub (link externo)

**Validación:**
- Frontend con validación básica
- Mensajes de error personalizados
- Validación de formato de email con regex

**Funcionalidad actual:**
- Demo: Muestra alert "Mensaje enviado (demo)"
- Sin backend real (preparado para implementar)

**Estado:**
- `formData`: { name, email, message }
- `errors`: { name, email, message }

### 9. **Footer** (`src/components/Footer.tsx`)

**Función:** Pie de página simple con copyright.

**Contenido:**
- Texto centrado: "© {año actual} Ignacio Ravettini Novellino. Todos los derechos reservados."
- Fondo ligeramente más oscuro que el resto
- Borde superior sutil

---

## ⚙️ Configuración Técnica

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

- Modo estricto habilitado
- JSX transform automático
- Bundler resolution para Vite

### Vite (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- Plugin React para JSX/TSX
- Configuración mínima (Vite maneja lo demás automáticamente)

### TailwindCSS (`tailwind.config.js`)

**Extensiones de tema:**
- **Colores personalizados:** aero-blue, aero-cyan, aero-violet, aero-accent, aero-accent-dark
- **Fuente:** Inter como fuente sans por defecto
- **Backdrop blur:** Valor personalizado 'aero' (18px)
- **Box shadows:** 'aero' y 'aero-glow' personalizados

**Dark mode:** `class` (siempre activo en este proyecto)

### PostCSS (`postcss.config.js`)

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 📱 Responsividad

### Breakpoints (TailwindCSS por defecto)

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Estrategia Responsive

- **Mobile First:** Diseño base para móviles, luego se agregan estilos para pantallas más grandes
- **Grids adaptativos:** 
  - Mobile: 1 columna
  - Tablet (md): 2 columnas
  - Desktop (lg): 3 columnas (cuando aplica)

### Elementos Responsive Clave

1. **Navbar:** Menú hamburguesa mobile, enlaces horizontales desktop
2. **Hero:** Columna única mobile, 2 columnas desktop
3. **Grids:** Secciones Skills, Projects, About adaptan columnas
4. **Contact:** Formulario apilado mobile, 2 columnas desktop
5. **Typography:** Tamaños de fuente escalan (text-lg, text-xl, text-3xl, text-4xl, text-5xl, text-6xl, text-7xl)

---

## 🎭 Animaciones y Microinteracciones

### Transiciones CSS

Todas las transiciones usan `transition-all duration-300` (300ms):

1. **Botones:**
   - Hover: Escala 105%, sombra más intensa
   - Transición suave de colores y sombras

2. **Cards:**
   - Hover: `translate-y-[-4px]` (se elevan ligeramente)
   - Sombra más intensa en hover

3. **Links:**
   - Hover: Cambio de color (gray → cyan)
   - Línea inferior animada (width: 0 → 100%)

4. **Navbar:**
   - Menú móvil: Aparición/desaparición suave

### Scroll Suave

Configurado globalmente en `index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

Implementado también programáticamente en componentes:
```typescript
element.scrollIntoView({ behavior: 'smooth' })
```

---

## ♿ Accesibilidad

### Implementaciones

1. **Contraste:** Texto claro sobre fondos oscuros (cumple WCAG AA)
2. **Focus visible:** Estados `:focus-visible` en botones, links y inputs
3. **Labels:** Todos los inputs tienen labels asociados
4. **ARIA:** 
   - `aria-label` en botón de menú hamburguesa
   - `aria-label` en formulario de contacto
5. **Semantic HTML:** Uso de `<nav>`, `<main>`, `<section>`, `<footer>`
6. **Textos seleccionables:** No se usa `user-select: none` en texto normal
7. **Enlaces externos:** `target="_blank" rel="noopener noreferrer"` en enlaces externos

---

## 🚀 Scripts y Comandos

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm start
# o
npm run dev
```

Servidor de desarrollo en: `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

Genera carpeta `dist/` con archivos optimizados.

### Preview de Build

```bash
npm run preview
```

Sirve la build de producción localmente para probar.

---

## 📦 Dependencias

### Dependencias de Producción

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Dependencias de Desarrollo

```json
{
  "@types/react": "^18.2.43",
  "@types/react-dom": "^18.2.17",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.2.2",
  "vite": "^5.0.8"
}
```

---

## 🔧 Personalización y Mejoras Futuras

### Para Agregar Proyectos Reales

Editar `src/components/Projects.tsx`:

1. Reemplazar array `placeholderProjects` con datos reales
2. Agregar imágenes de proyectos (si aplica)
3. Actualizar URLs de "Ver demo" y "Ver código"
4. Remover mensaje de "próximamente"

### Para Implementar Backend de Contacto

1. Crear API endpoint para recibir formulario
2. Actualizar `handleSubmit` en `Contact.tsx`
3. Usar `fetch` o `axios` para enviar datos
4. Agregar manejo de estados de carga y éxito/error

### Para Agregar Descarga de CV

1. Colocar archivo PDF en carpeta `public/`
2. Actualizar link en `Hero.tsx`:
```typescript
<a href="/cv.pdf" download className="btn-secondary">
  Descargar CV
</a>
```

### Para Actualizar Enlaces Sociales

En `src/components/Contact.tsx`, actualizar:
- Email: `mailto:tu-email@example.com`
- LinkedIn: `https://linkedin.com/in/tu-perfil`
- GitHub: `https://github.com/tu-usuario`

### Para Agregar Más Secciones

1. Crear nuevo componente en `src/components/`
2. Importar en `App.tsx`
3. Agregar ruta en `Navbar.tsx`
4. Agregar id correspondiente en el componente

---

## 📝 ID de Secciones

Todas las secciones tienen IDs para navegación por anclas:

- `#inicio` - Hero
- `#sobre-mi` - About
- `#habilidades` - Skills
- `#experiencia` - Experience
- `#educacion` - Education
- `#proyectos` - Projects
- `#contacto` - Contact

---

## 🎯 Características Clave del Diseño

### Consistencia Visual

- **Espaciado:** Padding y margins consistentes (py-16 para secciones, p-6/p-8 para cards)
- **Tipografía:** Jerarquía clara con tamaños escalonados
- **Colores:** Paleta limitada y coherente (cians, azules, violetas)
- **Bordes:** Border radius consistente (18px para cards, full para botones/chips)

### Profundidad Visual

- **Capas:** Múltiples gradientes radiales crean profundidad
- **Sombras:** Box shadows profundos (shadow-aero) para elevación
- **Blur:** Backdrop blur para efecto glassmorphism
- **Gradientes:** Transiciones de color en botones y elementos de acento

### Interactividad

- **Feedback visual:** Todos los elementos interactivos tienen estados hover
- **Transiciones:** Animaciones suaves en todas las interacciones
- **Scroll:** Navegación fluida entre secciones
- **Formulario:** Validación en tiempo real con feedback visual

---

## 🔍 Estructura de Clases Tailwind Comunes

### Layout
- `max-w-6xl mx-auto` - Contenedor centrado con ancho máximo
- `px-4 md:px-6` - Padding horizontal responsive
- `py-16` - Padding vertical para secciones
- `grid md:grid-cols-2 lg:grid-cols-3` - Grids adaptativos

### Espaciado
- `space-y-4`, `space-y-6`, `space-y-8` - Espaciado vertical
- `gap-2`, `gap-4`, `gap-6`, `gap-8` - Gaps en grids/flex

### Tipografía
- `text-4xl md:text-5xl` - Títulos grandes responsive
- `text-gray-100` - Texto principal
- `text-gray-300`, `text-gray-400` - Texto secundario
- `text-cyan-400` - Texto de acento
- `font-bold`, `font-semibold`, `font-medium` - Pesos de fuente

### Efectos
- `backdrop-blur-xl`, `backdrop-blur-[18px]` - Blur para glassmorphism
- `shadow-aero`, `shadow-aero-glow` - Sombras personalizadas
- `hover:translate-y-[-4px]` - Elevación en hover
- `hover:scale-105` - Escala en hover

---

## 📚 Recursos y Referencias

### Documentación Oficial

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

### Conceptos de Diseño

- **Glassmorphism:** Diseño de interfaces con efectos de vidrio esmerilado
- **AERO Design:** Estética moderna con transparencias y gradientes
- **Dark Mode:** Modo oscuro como estilo por defecto

---

## 🐛 Notas de Implementación

### Limitaciones Actuales

1. **Formulario de contacto:** Solo frontend, sin backend real
2. **Proyectos:** Placeholders, no proyectos reales aún
3. **CV:** Botón de descarga muestra alert placeholder
4. **Enlaces sociales:** URLs de ejemplo, necesitan actualización

### Consideraciones Técnicas

1. **Performance:** Vite optimiza automáticamente en build
2. **SEO:** Considerar agregar meta tags y Open Graph
3. **Analytics:** Considerar agregar Google Analytics o similar
4. **Accesibilidad:** Ya implementada básica, considerar auditoría completa

---

## 📞 Información de Contacto del Proyecto

**Repositorio:** https://github.com/Ravettini/portafolio2

**Desarrollado para:** Ignacio Ravettini Novellino

**Última actualización:** Enero 2025

---

## 🔄 Flujo de Desarrollo Típico

1. **Editar componentes** en `src/components/`
2. **Ajustar estilos** en `src/index.css` o usando clases Tailwind
3. **Probar cambios** con `npm start` (hot reload automático)
4. **Build** con `npm run build` cuando esté listo
5. **Preview** con `npm run preview` para verificar build
6. **Commit y push** al repositorio

---

Este documento proporciona toda la información necesaria para entender, mantener y extender el portafolio. Cualquier desarrollador que trabaje en este proyecto debería poder seguir esta guía para ponerse en contexto rápidamente.

