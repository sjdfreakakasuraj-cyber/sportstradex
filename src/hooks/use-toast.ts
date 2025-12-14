import { useCallback } from "react";
import { toast } from "react-hot-toast"; // Using react-hot-toast as an example

export function useToast() {
  interface ToastOptions {
    title: string;
    description: string;
    type?: "success" | "error" | "info" | "default";
  }

  const showToast = useCallback(
    ({ title, description, type = "default" }: ToastOptions) => {
      // Customize the toast based on the type
      switch (type) {
        case "success":
          toast.success(`${title}: ${description}`);
          break;
        case "error":
          toast.error(`${title}: ${description}`);
          break;
        case "info":
          toast(`${title}: ${description}`);
          break;
        default:
          toast(`${title}: ${description}`);
          break;
      }
    },
    []
  );

  return { toast: showToast };
}
