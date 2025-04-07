# IAESTE Hamburg Conflict Timeline

An interactive timeline application for visualizing conflicts within the IAESTE Hamburg organization.

## Original Implementation

The original implementation is a single HTML file with embedded CSS and JavaScript. It provides a simple timeline interface for exploring conflicts within the organization.

## Modern Implementation

The modern implementation is located in the `new-implementation/` directory. It's built with:

- **React**: For component-based UI development
- **TypeScript**: For type safety and better developer experience
- **Vite**: For fast development and optimized builds
- **CSS**: For styling with modern CSS features

### Features

- Interactive timeline with draggable slider
- Color-coded markers for different conflict types
- Detailed summaries of each conflict
- Responsive design that works on all devices
- Keyboard navigation support

### Getting Started

To run the modern implementation:

1. Navigate to the `new-implementation/` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to http://localhost:12000

### Building for Production

To create a production build:

```bash
cd new-implementation
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.