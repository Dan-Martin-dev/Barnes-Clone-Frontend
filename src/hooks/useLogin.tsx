import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router"; 

interface UseLoginReturn {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    isClient: boolean;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
  }
  
const useLogin = (): UseLoginReturn => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Initialize the TanStack Router

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (!isClient) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        { email, password }
      );

      if (response.status === 201) {
        toast.success("Felicitaciones! Tu usuario ha sido creado!");
        setTimeout(() => {
            void router.navigate({ to: "/" });
        }, 3000);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        if (
          axiosError.response.status === 400 &&
          axiosError.response.data.message === "Email is not available"
        ) {
          toast.error("Este email ya ha sido utilizado", {
            position: "top-right",
          });
        } else {
          toast.error("Ha habido un error, intente nuevamente", {
            position: "top-right",
          });
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          position: "top-right",
        });
      }
    }
  };

  return { email, setEmail, password, setPassword, isClient, handleSubmit };
};

export default useLogin;
