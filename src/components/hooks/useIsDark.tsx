import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useIsDark = () => {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Return false during SSR to avoid hydration mismatch
  if (!mounted) {
    return false;
  }
  
  // Use resolvedTheme for more reliable theme detection
  return resolvedTheme === "dark";
};

export default useIsDark;