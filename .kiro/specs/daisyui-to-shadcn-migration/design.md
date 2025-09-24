# Design Document

## Overview

This design outlines the migration strategy from DaisyUI to shadcn/ui for the Helpy frontend application. The migration will maintain existing functionality while modernizing the component library to provide better TypeScript support, improved customization, and a more maintainable codebase.

**Current State Analysis:**
- DaisyUI is currently installed as a devDependency (v5.0.43)
- shadcn/ui is partially configured with components.json already present
- Tailwind CSS v4.1.8 is being used with custom CSS variables for theming
- The application uses a custom primary color (rgba(230, 30, 90, 1)) and Fira Sans font
- Key DaisyUI components in use: btn, input, card, modal, navbar, menu, timeline, tooltip, dropdown, toggle, checkbox

## Architecture

### Component Migration Strategy

The migration will follow a systematic approach:

1. **Configuration Phase**: Update build configuration and dependencies
2. **Core Components Phase**: Migrate foundational UI components
3. **Layout Components Phase**: Update navigation, sidebar, and layout components  
4. **Page Components Phase**: Migrate all page-level components
5. **Cleanup Phase**: Remove DaisyUI dependencies and unused styles

### Dependency Management

**Remove:**
- `daisyui` (v5.0.43) from devDependencies

**Add/Update:**
- Ensure all required shadcn/ui dependencies are present
- Update Tailwind configuration for shadcn/ui compatibility

**Already Present (Good):**
- `@radix-ui/react-*` components for shadcn/ui foundation
- `class-variance-authority`, `clsx`, `tailwind-merge` for styling utilities
- `lucide-react` for icons (will complement existing @mdi/react)

## Components and Interfaces

### Component Mapping Strategy

| DaisyUI Component | shadcn/ui Equivalent | Migration Notes |
|-------------------|---------------------|-----------------|
| `btn` | `Button` | Replace btn-* classes with Button variants |
| `input`, `input-bordered` | `Input` | Update styling and validation integration |
| `card`, `card-body`, `card-title` | `Card`, `CardContent`, `CardHeader` | Restructure card layouts |
| `modal`, `modal-box` | `Dialog`, `DialogContent` | Update modal behavior and styling |
| `navbar` | Custom component with shadcn/ui primitives | Maintain existing navigation structure |
| `menu` | `NavigationMenu` or custom component | Preserve menu functionality |
| `tooltip` | `Tooltip` | Direct replacement with similar API |
| `dropdown` | `DropdownMenu` | Update dropdown interactions |
| `toggle` | `Switch` | Replace toggle with Switch component |
| `checkbox` | `Checkbox` | Direct replacement with form integration |
| `timeline` | Custom component | Create custom timeline using shadcn/ui primitives |

### Theme Configuration

**CSS Variables Mapping:**
```css
/* Current DaisyUI variables */
--color-primary: rgba(230, 30, 90, 1)
--font-display: 'Fira Sans', sans-serif

/* shadcn/ui CSS variables */
--primary: 230 30 90
--font-sans: 'Fira Sans', sans-serif
```

**Tailwind Configuration:**
- Update `tailwind.config.js` to include shadcn/ui configuration
- Maintain existing color scheme and typography
- Ensure dark mode compatibility

### Icon Strategy

**Current:** @mdi/react icons are extensively used
**Approach:** Keep @mdi/react for existing icons, use lucide-react for new shadcn/ui components
**Benefit:** Maintains visual consistency while leveraging shadcn/ui's icon ecosystem

## Data Models

### Component Props Interface Updates

**Button Component:**
```typescript
// Before (DaisyUI)
<button className="btn btn-primary">

// After (shadcn/ui)
<Button variant="default" className="bg-primary">
```

**Input Component:**
```typescript
// Before (DaisyUI)
<input className="input input-bordered" />

// After (shadcn/ui)
<Input className="border-input" />
```

**Card Component:**
```typescript
// Before (DaisyUI)
<div className="card bg-base-100">
  <div className="card-body">
    <h2 className="card-title">Title</h2>
  </div>
</div>

// After (shadcn/ui)
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

## Error Handling

### Migration Error Prevention

1. **Type Safety**: Leverage TypeScript to catch component prop mismatches
2. **Gradual Migration**: Migrate components incrementally to identify issues early
3. **Fallback Styling**: Maintain custom CSS for edge cases during transition
4. **Testing Strategy**: Visual regression testing for each migrated component

### Runtime Error Handling

1. **Component Fallbacks**: Implement error boundaries for new components
2. **Style Conflicts**: Use CSS specificity and !important judiciously during transition
3. **Theme Switching**: Ensure dark/light mode continues to work with new components

## Testing Strategy

### Component Testing Approach

1. **Visual Testing**: Screenshot comparison for each migrated component
2. **Functional Testing**: Ensure all interactive elements work identically
3. **Accessibility Testing**: Verify ARIA attributes and keyboard navigation
4. **Responsive Testing**: Confirm mobile and desktop layouts remain intact

### Migration Validation

1. **Page-by-Page Validation**: Test each page after component migration
2. **User Flow Testing**: Verify critical user journeys (login, navigation, forms)
3. **Theme Testing**: Validate both light and dark themes
4. **Cross-Browser Testing**: Ensure compatibility across major browsers

### Performance Considerations

1. **Bundle Size**: Monitor bundle size changes during migration
2. **Runtime Performance**: Ensure no performance regressions
3. **CSS Optimization**: Remove unused DaisyUI styles progressively

## Implementation Phases

### Phase 1: Configuration and Setup
- Remove DaisyUI from dependencies
- Update Tailwind configuration for shadcn/ui
- Install missing shadcn/ui components
- Update CSS variables and theme configuration

### Phase 2: Core UI Components
- Migrate Button components
- Migrate Input and form components
- Migrate Card components
- Update basic styling utilities

### Phase 3: Layout and Navigation
- Migrate Navbar component
- Migrate Sidebar component
- Update Layout component
- Migrate modal and dialog components

### Phase 4: Page Components
- Migrate LoginPage and SignupPage
- Migrate Homepage and AdminPage
- Migrate ProfilePage and WellnessPage
- Update NotFoundPage

### Phase 5: Specialized Components
- Migrate timeline components (MedicationCard)
- Update notification components
- Migrate admin interface components
- Handle any remaining custom components

### Phase 6: Cleanup and Optimization
- Remove all DaisyUI class references
- Clean up unused CSS
- Optimize bundle size
- Final testing and validation