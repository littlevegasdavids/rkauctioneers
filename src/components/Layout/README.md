# Layout System

This layout system provides a responsive container with breakout capabilities for full-width components.

## Components

### Container
A responsive container that centers content with a maximum width and appropriate padding.

**Props:**
- `size`: "sm" | "md" | "lg" | "xl" | "full" (default: "xl")
- All standard Box props from Chakra UI

**Responsive Behavior:**
- **Desktop (lg+)**: Max width 1300px with 32px padding
- **Tablet (md)**: Max width 1300px with 24px padding  
- **Mobile (base)**: Full width with 16px padding

### Breakout
Allows components to break out of the container and span the full viewport width.

## Usage Examples

### Basic Container Usage
```tsx
import { Container } from "@/components";

<Container>
  <YourContent />
</Container>
```

### Full-Width Component with Breakout
```tsx
import { Container, Breakout } from "@/components";

<Container>
  <RegularContent />
  
  <Breakout>
    <HeroSection /> {/* This will be full-width */}
  </Breakout>
  
  <MoreRegularContent />
</Container>
```

### Different Container Sizes
```tsx
<Container size="sm">Small container (640px)</Container>
<Container size="md">Medium container (768px)</Container>
<Container size="lg">Large container (1024px)</Container>
<Container size="xl">Extra large container (1300px)</Container>
<Container size="full">Full width container</Container>
```

## Responsive Breakpoints

The system uses Chakra UI's default breakpoints:
- **base**: 0px (mobile)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)

## Implementation in HomePage

The HomePage demonstrates the layout system:
- NavBar, AnnouncementStrip, and Footer remain full-width
- Main content is wrapped in Container
- Hero section uses Breakout to achieve full-width display
- All other sections remain within the container bounds
