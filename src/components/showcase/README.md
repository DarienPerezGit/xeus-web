# SyncShowcase Component

## Descripción

Componente visual espectacular inspirado en "Portfolio in sync" que muestra el poder de Aegis OS para sincronizar automáticamente todas las fuentes de dinero del usuario.

## Características Visuales

### 🎯 Hub Central
- Logo de Aegis (Shield) en el centro
- Anillos de glow animados con `animate-ping` y `animate-pulse`
- Efecto de backdrop-blur para glassmorphism premium

### 🔗 Nodos de Conexión (14+)
**Crypto Exchanges & Wallets:**
- Binance
- Lemon
- Metamask
- Trust Wallet
- Coinbase
- Kraken

**Bancos Argentinos:**
- Galicia
- BBVA
- Santander
- Macro

**Billeteras Virtuales:**
- MercadoPago
- Ualá
- Naranja X
- Personal Pay

### ✨ Animaciones

1. **Float Animation**: Cada nodo flota suavemente con diferentes duraciones (3-5s)
2. **Sync Pulses**: Partículas que emergen del centro simulando sincronización en tiempo real
3. **Hover Effects**: 
   - Escala 110% en los nodos
   - Tooltips con el nombre de la plataforma
   - Líneas de conexión que se iluminan

### 📊 Stats Section
Muestra métricas clave:
- **14+ Plataformas** soportadas
- **15min** de actualización automática
- **100% Seguridad** (Read-only APIs)
- **0% Esfuerzo** (Sin input manual)

## Tecnología

- **Lucide Icons**: Para los iconos de cada plataforma
- **Tailwind CSS**: Gradientes, animaciones y responsive
- **Custom Keyframes**: Animación `syncPulse` para las partículas
- **SVG**: Líneas de conexión dinámicas

## Responsive Design

- **Mobile**: Layout adaptado con iconos más pequeños
- **Tablet**: Aspect ratio optimizado
- **Desktop**: Experiencia completa con todas las animaciones

## Integración

```tsx
import { SyncShowcase } from '@/components/showcase/SyncShowcase';

// En tu página
<SyncShowcase />
```

## Posición en el Layout

Ubicado entre `HeroSection` y `FeaturesGrid` para:
1. Captar la atención después del Hero
2. Demostrar visualmente el valor antes de explicar features
3. Crear un "wow moment" temprano en la experiencia

## Personalización

Para agregar más conexiones, edita el array `connections` en `SyncShowcase.tsx`:

```tsx
const connections = [
  {
    name: 'NuevaBanco',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    position: 'top-[30%] left-[20%]'
  },
  // ... más conexiones
];
```

## Colores Disponibles

- `from-yellow-500 to-orange-500` (Crypto)
- `from-green-500 to-emerald-500` (Wallets)
- `from-blue-500 to-cyan-500` (Bancos)
- `from-red-500 to-pink-500` (Billeteras)
- `from-purple-500 to-indigo-500` (Exchanges)

---

**Última actualización**: 2026-01-05  
**Autor**: Aegis OS Team
