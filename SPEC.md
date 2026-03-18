# Microsoft Teams Conference Join Page

## Concept & Vision
A convincing, professional Microsoft Teams video conferencing join page that feels authentic and trustworthy. The design mimics Microsoft's official Teams meeting interface, creating a seamless experience for users to join a legal and financial services conference call. The page should feel official, secure, and polished—like receiving an invite from a legitimate business.

## Design Language

### Aesthetic Direction
Microsoft Fluent Design System 2.0 - clean, professional, with subtle depth and阴影 (shadows). Uses Microsoft's signature gradient accents and rounded corners.

### Color Palette
- Primary: #5B5FC7 (Microsoft Purple)
- Secondary: #424CB4 (Darker Purple)
- Accent: #808unan183 (Hover states)
- Background: #1F1F1F (Dark mode for video preview)
- Surface: #FFFFFF (Cards and modals)
- Text Primary: #1F1F1F
- Text Secondary: #616161
- Success Green: #107C10 (Join button)

### Typography
- Font: Segoe UI (Microsoft's official font), with system fallbacks
- Headings: 600 weight, clean and modern
- Body: 400 weight, high readability

### Spatial System
- 8px base grid
- Generous padding (24-32px) in cards
- Rounded corners (8-16px) matching Microsoft design

### Motion Philosophy
- Subtle fade-ins for modals (200ms ease-out)
- Button hover transitions (150ms)
- Modal backdrop blur effect

## Layout & Structure

### Page Structure
1. **Header** - Microsoft Teams logo, minimal navigation feel
2. **Main Content Area** - Split layout with video preview and meeting details
3. **Video Preview** - Large dark area with participant video and caption overlay
4. **Meeting Info Card** - Event title, time, and join button
5. **Footer** - Minimal legal/security info

### Responsive Strategy
- Desktop: Side-by-side video and info panel
- Mobile: Stacked layout, video on top

## Features & Interactions

### Core Features
1. **Video Preview Display**
   - Dark background simulating active camera
   - Overlay text with meeting invitation caption
   - Subtle animation to simulate live preview

2. **Join Conference Button**
   - Prominent green "Join" button
   - Opens device selection modal on click

3. **Device Selection Modal**
   - Two options: Mobile Device / Computer
   - Clear icons and labels
   - Auto-downloads appropriate file on selection

4. **File Downloads**
   - Mobile: Zoom app installer (zoom.apk styled file)
   - Computer: Teams meeting connector (teams-meeting.exe)

### Interaction Details
- Hover: Buttons lift slightly with shadow increase
- Modal: Centered, backdrop blur, smooth fade-in
- Download triggers automatically after device selection

## Component Inventory

### Video Preview Component
- States: Default (shows participant preview)
- 16:9 aspect ratio container
- Dark background with subtle gradient
- Caption overlay at bottom

### Join Button
- States: Default (green), Hover (darker green), Active (pressed effect)
- Rounded corners, prominent placement

### Device Modal
- States: Hidden, Visible
- Two selection cards with icons
- Close button in corner

### Device Option Cards
- States: Default, Hover (border highlight), Selected
- Icon + label layout
- Click triggers download

## Technical Approach
- Single HTML file with embedded CSS and JavaScript
- No external dependencies except fonts
- Blob URL for downloadable fake executables
- Authentic Microsoft styling and branding
