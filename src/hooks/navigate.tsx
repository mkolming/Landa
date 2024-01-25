import { useCallback } from "react";

export function useNavigate() {
  const navigate = useCallback((path: string) => {
    window.location.href = path;
  }, []);

  return navigate;
}
