# homework02

## Getting Started

Open `index.html` in your web browser and start editing `sketch.js`.
## Concept

This project explores the relationship between the human body and a digital particle environment. The webcam is used as a live spatial input, where the presence and movement of a hand reshapes a field of floating blue particles.

Instead of treating the body as an object in front of the screen, it becomes an active force that continuously disturbs and reorganizes the surrounding space. The system is designed around the idea that interaction is not control, but deformation.

The particles behave like a soft digital matter. They are not decorative elements, but a responsive field that reacts to proximity, motion, and direction of the hand.

## Interaction
The camera captures real-time video as spatial background
The index finger position acts as a dynamic attractor
Particle motion is influenced by:
distance to the hand (attraction force)
hand velocity (flow direction)
noise field (ambient movement)

As the hand moves, particles gather, collapse, and re-expand, forming temporary structures in space.

## Development Process

The initial version started as a simple noise-based particle system with minimal interaction. At this stage, the particles were visually weak and behaved more like static points.

Several key adjustments were made during development:

The camera feed was reworked to maintain correct aspect ratio and avoid distortion
Particle count was significantly increased to build density and spatial presence
Particle size was enlarged to shift the system from “points” to “matter”
Interaction logic was changed from repulsion to attraction, creating a stronger sense of convergence toward the hand
Visual persistence (motion trails) was introduced to emphasize movement over time

These changes gradually transformed the system from a visual sketch into a spatial field.
 
## Reflection

This project made me rethink what interaction means in a digital environment. At first, I treated the system as something to be controlled precisely. However, the final result feels less like control and more like negotiation between body and system.

The most interesting moment is not when the hand “triggers” an effect, but when the particles hesitate, accumulate, and form unstable structures before collapsing again.

What emerged is not a static image, but a temporary condition of space.

## Running Locally

For projects with media files, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

## Resources

- [p5.js 2.0](https://beta.p5js.org/)
- [p5.js Reference](https://p5js.org/reference/)
