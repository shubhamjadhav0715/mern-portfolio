import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 2
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#3b82f6'
          },
          links: {
            color: '#3b82f6',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          collisions: {
            enable: false
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 50
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
