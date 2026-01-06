# Aegis OS - Estructura Modularizada

## 📁 Estructura de Directorios

La aplicación ha sido completamente modularizada siguiendo las mejores prácticas de Next.js con TypeScript. Esta estructura separa claramente la lógica de negocio, los componentes visuales y las secciones de la landing page.

```
src/
├── app/
│   ├── layout.tsx       # Fuente global (Geist), Metadatos SEO
│   ├── page.tsx         # Página principal (Solo ensambla secciones)
│   ├── globals.css      # Estilos globales y configuración Tailwind
│   └── favicon.ico      # Icono de la aplicación
├── components/
│   ├── ui/              # Átomos reutilizables
│   │   ├── Button.tsx   # Componente de botón con variantes (primary, secondary, ghost)
│   │   ├── Badge.tsx    # Badge con animación opcional
│   │   └── Input.tsx    # Input estilizado con focus states
│   ├── layout/          # Elementos estructurales
│   │   ├── Navbar.tsx   # Barra de navegación con efecto scroll
│   │   └── Footer.tsx   # Pie de página
│   ├── hero/            # Componentes específicos del Hero
│   │   ├── HeroSection.tsx    # Sección hero principal
│   │   └── AegisMockup.tsx    # Dashboard mockup con lógica compleja
│   ├── features/        # Sección de Grid de Características
│   │   ├── FeatureCard.tsx    # Tarjeta individual de característica
│   │   └── FeaturesGrid.tsx   # Grid de características
│   └── philosophy/      # Sección de Filosofía/Propuesta de valor
│       └── PhilosophySection.tsx
├── hooks/
│   ├── useScroll.ts     # Hook para detectar scroll (navbar effect)
│   └── useCryptoRate.ts # Hook para simular/fetchear tasas USDT
└── lib/
    └── utils.ts         # Helpers para clases (cn) y formateo de moneda
```

## 🎯 Principios de Diseño

### 1. **Separación de Responsabilidades**
- **`app/`**: Solo configuración y ensamblaje
- **`components/`**: Lógica visual y presentacional
- **`hooks/`**: Lógica de estado y efectos reutilizables
- **`lib/`**: Utilidades puras sin dependencias de React

### 2. **Componentes Atómicos (UI)**
Los componentes en `components/ui/` son completamente reutilizables y no tienen lógica de negocio:
- `Button`: Variantes (primary, secondary, ghost) y tamaños (sm, md, lg)
- `Badge`: Con soporte para animación de pulso
- `Input`: Con estados de focus y validación visual

### 3. **Componentes de Sección**
Cada sección principal tiene su propia carpeta:
- **`hero/`**: Contiene el hero y el mockup del dashboard
- **`features/`**: Grid de características con tarjetas
- **`philosophy/`**: Propuesta de valor y filosofía

### 4. **Hooks Personalizados**
- **`useScroll`**: Detecta cuando el usuario hace scroll para aplicar efectos al navbar
- **`useCryptoRate`**: Simula cambios en la tasa USDT (preparado para integración con API real)

## 🔧 Componentes Clave

### `AegisMockup.tsx`
El componente más complejo, muestra:
- Net Worth en USDT
- Tasa de conversión ARS/USDT en tiempo real
- Conexiones a diferentes servicios (MercadoPago, Galicia, Binance, Lemon)
- Alertas de oportunidades de arbitraje

### `Navbar.tsx`
- Usa el hook `useScroll` para cambiar su apariencia
- Transparente al inicio, con backdrop blur al hacer scroll
- Responsive con menú oculto en mobile

### `FeaturesGrid.tsx`
- Renderiza 3 características principales
- Usa `FeatureCard` para mantener consistencia
- Cada tarjeta tiene hover effects y colores de acento

## 🎨 Sistema de Diseño

### Colores
- **Primary**: Emerald (verde) - `#10B981`
- **Accent**: Blue, Orange, Yellow, Green (según contexto)
- **Background**: `#050505` (casi negro)
- **Text**: White con variaciones de gray

### Tipografía
- **Sans**: Geist (fuente principal)
- **Mono**: Geist Mono (para números y datos financieros)

### Efectos Visuales
- Gradientes de fondo con blur
- Glassmorphism en tarjetas
- Animaciones de pulso en badges
- Hover effects con transiciones suaves

## 🚀 Cómo Usar

### Ejecutar en Desarrollo
```bash
npm run dev
```

### Agregar Nuevas Características
1. **Nuevo componente UI**: Crear en `components/ui/`
2. **Nueva sección**: Crear carpeta en `components/` e importar en `page.tsx`
3. **Nuevo hook**: Crear en `hooks/`
4. **Nueva utilidad**: Agregar a `lib/utils.ts`

## 📝 Metadatos SEO

El `layout.tsx` incluye metadatos optimizados:
- Title: "Aegis OS - Tu Dinero Unificado y Blindado"
- Description optimizada para búsqueda
- Keywords relevantes
- Open Graph tags para redes sociales

## 🔄 Estado y Lógica

### Estado Local
- Email del usuario (Hero)
- Tasa USDT (simulada con `useCryptoRate`)
- Scroll position (con `useScroll`)

### Preparado para Expansión
- Los hooks están listos para conectar con APIs reales
- Los componentes aceptan props para datos dinámicos
- La estructura permite agregar nuevas secciones fácilmente

## 🎯 Próximos Pasos Sugeridos

1. **Integración con API real** para tasas de crypto
2. **Backend para captura de emails** (waitlist)
3. **Animaciones con Framer Motion** (ya instalado)
4. **Modo oscuro/claro** (opcional)
5. **Internacionalización** (i18n)

---

**Desarrollado con ❤️ para el mercado argentino**
