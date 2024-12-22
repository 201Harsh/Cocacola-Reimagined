import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CanvasScrollAnimation = () => {
  const canvasRef = useRef(null);

  const frameCount = 300; // Number of frames
  const imageSeq = { frame: 0 }; // Tracks the current frame
  const images = useRef([]); // Holds the preloaded images

  // Function to get image sources
  const files = (index) => {
    return `/coke_000/coke_${index.toString().padStart(3, "0")}.jpg`; // Adjust path format for proper image sequence
  };

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push(img);
            if (loadedImages.length === frameCount) {
              render(); // Render the first frame once images are loaded
            }
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${files(i)}`);
            resolve(); // Resolve even if the image fails to prevent blocking
          };
        });
      }
      images.current = loadedImages;
    };
    preloadImages();
  }, []);

  // Render function to draw images on canvas
  const render = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = images.current[imageSeq.frame];

    if (img && img.complete) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const hRatio = canvasWidth / img.width;
      const vRatio = canvasHeight / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvasWidth - img.width * ratio) / 2;
      const centerShiftY = (canvasHeight - img.height * ratio) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  // Set up GSAP animation with Locomotive Scroll
  useEffect(() => {
    const canvas = canvasRef.current;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth; // Full width of the parent container
      canvas.height = parent.offsetHeight; // Full height of the parent container
      render();
    };

    // Adjust canvas on resize
    window.addEventListener("resize", resizeCanvas);

    // Initial canvas sizing
    resizeCanvas();

    // GSAP scroll animation using Locomotive Scroll
    ScrollTrigger.create({
      trigger: canvas,
      start: "top top",
      end: "100% end",
      scrub: 0.1,
      pin: true,
      onUpdate: (self) => {
        imageSeq.frame = Math.round(self.progress * (frameCount - 1));
        render();
      },
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.killAll(); // Cleanup GSAP triggers
    };
  }, []); // Only run this after the initial render

  return (
    <div
      className="canvas-container"
      style={{
        position: "relative",
        width: "100%", // Ensure full width of parent
        height: "100vh", // Ensure full height of parent
        overflow: "hidden", // Prevent scrolling issues with large images
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "relative", // Keep the position relative
          top: 0,
          left: 0,
          zIndex: 10, // Ensure it's on top of other elements
          width: "100%", // Full width
          height: "100%", // Full height
        }}
      />
    </div>
  );
};

export default CanvasScrollAnimation;
