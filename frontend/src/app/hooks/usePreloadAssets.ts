import { useEffect, useState } from "react";

export function usePreloadAssets(assets: string[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === assets.length) {
        setLoaded(true);
      }
    };

    assets.forEach((src) => {
      if (src.endsWith(".ttf") || src.endsWith(".woff2")) {
        const font = new FontFace("Optima", `url(${src})`);
        font.load().then(() => {
          document.fonts.add(font);
          handleLoad();
        });
      } else {
        const img = new Image();
        img.src = src;
        img.onload = handleLoad;
        img.onerror = handleLoad;
      }
    });
  }, [assets]);

  return loaded;
}
