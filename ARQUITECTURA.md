# Arquitectura de Componentes - Aegis OS

## Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                      app/layout.tsx                         │
│                  (Metadata SEO + Fonts)                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       app/page.tsx                          │
│                  (Ensamblador Principal)                    │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
         ┌──────────┐  ┌──────────┐  ┌──────────┐
         │  Navbar  │  │   Hero   │  │ Features │
         └──────────┘  └──────────┘  └──────────┘
                              │
                              ▼
                       ┌──────────┐
                       │Philosophy│
                       └──────────┘
                              │
                              ▼
                       ┌──────────┐
                       │  Footer  │
                       └──────────┘
```

## Jerarquía de Componentes

```
app/page.tsx
│
├── components/layout/Navbar
│   ├── hooks/useScroll ──────────┐
│   ├── components/ui/Button      │
│   └── lucide-react (Shield)     │
│                                  │
├── components/hero/HeroSection   │
│   ├── hooks/useCryptoRate       │
│   ├── components/ui/Badge       │
│   ├── components/ui/Input       │
│   ├── components/ui/Button      │
│   └── components/hero/AegisMockup
│       ├── lib/utils (formatCurrency, formatUSDT)
│       └── lucide-react (Shield, Eye, RefreshCw, etc.)
│
├── components/features/FeaturesGrid
│   └── components/features/FeatureCard (x3)
│       └── lucide-react (Mail, AlertTriangle, Smartphone)
│
├── components/philosophy/PhilosophySection
│   ├── components/ui/Button
│   └── lucide-react (TrendingUp, RefreshCw)
│
└── components/layout/Footer
    └── lucide-react (Shield, Mail, Lock)
```

## Dependencias de Hooks

```
┌─────────────────────┐
│   useScroll.ts      │
│                     │
│  - useState         │
│  - useEffect        │
│  - window.scrollY   │
└─────────────────────┘
         ▲
         │ usado por
         │
┌─────────────────────┐
│   Navbar.tsx        │
└─────────────────────┘


┌─────────────────────┐
│  useCryptoRate.ts   │
│                     │
│  - useState         │
│  - useEffect        │
│  - setInterval      │
└─────────────────────┘
         ▲
         │ usado por
         │
┌─────────────────────┐
│  HeroSection.tsx    │
│         │           │
│         ▼           │
│  AegisMockup.tsx    │
└─────────────────────┘
```

## Utilidades Compartidas

```
┌─────────────────────────────────────┐
│          lib/utils.ts               │
├─────────────────────────────────────┤
│  • cn()                             │
│    - Combina clases Tailwind        │
│    - Usa clsx + tailwind-merge      │
│                                     │
│  • formatCurrency()                 │
│    - Formatea ARS                   │
│                                     │
│  • formatUSDT()                     │
│    - Formatea USDT                  │
│                                     │
│  • arsToUsdt()                      │
│    - Convierte ARS → USDT           │
└─────────────────────────────────────┘
         ▲         ▲         ▲
         │         │         │
    ┌────┴───┐ ┌──┴───┐ ┌───┴────┐
    │ Button │ │Badge │ │ Mockup │
    └────────┘ └──────┘ └────────┘
```

## Componentes UI (Átomos)

```
components/ui/
│
├── Button.tsx
│   ├── Variantes: primary, secondary, ghost
│   ├── Tamaños: sm, md, lg
│   └── Props: className, children, ...HTMLButtonProps
│
├── Badge.tsx
│   ├── Props: children, className, animated
│   └── Animación de pulso opcional
│
└── Input.tsx
    ├── Props: className, ...HTMLInputProps
    └── Estados: focus, hover
```

## Flujo de Estado

```
┌──────────────────────────────────────────────────┐
│              Estado de la Aplicación             │
├──────────────────────────────────────────────────┤
│                                                  │
│  HeroSection (Local State)                      │
│  ├── email: string                              │
│  └── usdtRate: number (desde useCryptoRate)     │
│                                                  │
│  Navbar (Local State)                           │
│  └── isScrolled: boolean (desde useScroll)      │
│                                                  │
│  AegisMockup (Props)                            │
│  └── usdtRate: number (pasado desde Hero)       │
│                                                  │
└──────────────────────────────────────────────────┘
```

## Patrones de Diseño Utilizados

1. **Composition Pattern**: Los componentes se componen de otros más pequeños
2. **Container/Presentational**: Separación entre lógica (hooks) y UI (components)
3. **Custom Hooks**: Lógica reutilizable extraída en hooks
4. **Barrel Exports**: Archivos index.ts para importaciones limpias
5. **Utility-First CSS**: Tailwind CSS con función `cn()` para merge

## Convenciones de Código

- **Componentes**: PascalCase, exportados como named exports
- **Hooks**: camelCase, prefijo `use`
- **Utilidades**: camelCase
- **Archivos**: PascalCase para componentes, camelCase para hooks/utils
- **Props**: Interfaces con sufijo `Props`
- **Client Components**: Marcados con `'use client'` cuando necesario

---

**Última actualización**: 2026-01-05
