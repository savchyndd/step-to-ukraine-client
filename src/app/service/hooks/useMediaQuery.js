import { useEffect, useState } from 'react';

// export const useMediaQuery = (query) => {
// 	const mediaMatch = window.matchMedia(query);
// 	const [matches, setMatches] = useState(mediaMatch.matches);

// 	useEffect(() => {
// 		const handler = (e) => setMatches(e.matches);
// 		mediaMatch.addListener(handler);
// 		return () => mediaMatch.removeListener(handler);
// 	});
// 	return matches;
// };

export const useMediaQuery = query => {
  const isClient = typeof window === 'object';
  const [matches, setMatches] = useState(
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    let mediaMatch;

    if (isClient) {
      mediaMatch = window.matchMedia(query);

      const handler = event => setMatches(event.matches);

      mediaMatch.addListener(handler);

      // Clean up the listener on component unmount
      return () => mediaMatch.removeListener(handler);
    }

    // Clean up for server-side rendering
    return () => {};
  }, [query, isClient]);

  return matches;
};
