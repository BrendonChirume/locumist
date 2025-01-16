import React from 'react';

interface UseScrollTriggerOptions {
    disableHysteresis?: boolean;
    target?: HTMLElement | Window | null;
    threshold?: number;
    axis?: 'X' | 'Y'; // Choose whether to track horizontal (X) or vertical (Y) scroll
}

export default function useCustomScrollTrigger(
  {
      threshold = 100,
      disableHysteresis = true,
      target,
      axis = 'Y',
  }: UseScrollTriggerOptions) {
    const [trigger, setTrigger] = React.useState(false);
    const [offset, setOffset] = React.useState(0); // Stores the current offset for the chosen axis

    React.useEffect(() => {
        const targetElement = target ?? window;

        // Helper to get the scroll position for both axes
        const getScrollPosition = (): { Y: number; X: number } => {
            if (targetElement instanceof HTMLElement) {
                return {
                    Y: targetElement.scrollTop,
                    X: targetElement.scrollLeft,
                };
            } else if (targetElement === window) {
                return {
                    Y: window.scrollY,
                    X: window.scrollX,
                };
            }
            return { X: 0, Y: 0 };
        };

        const handleScroll = () => {
            const scrollPosition = getScrollPosition();
            const currentOffset = scrollPosition[axis];

            setOffset(currentOffset); // Update the offset for the chosen axis

            if (disableHysteresis) {
                setTrigger(currentOffset > threshold);
            } else {
                setTrigger(currentOffset > threshold && !trigger);
            }
        };

        // Initialize the state based on the initial scroll position
        const initialScrollPosition = getScrollPosition()[axis];
        if (initialScrollPosition > threshold) {
            setTrigger(true);
        }

        // Attach the scroll listener
        targetElement.addEventListener('scroll', handleScroll);

        // Clean up the listener on unmount
        return () => {
            targetElement.removeEventListener('scroll', handleScroll);
        };
    }, [threshold, disableHysteresis, target, trigger, axis]);

    return { trigger, offset };
}