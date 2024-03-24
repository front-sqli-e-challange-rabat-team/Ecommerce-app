import { z } from "zod";

const useAuth = () => {
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(1, "The password can't be empty")
    });

    
    
    const login = (data: z.infer<typeof loginSchema>) => {
        console.log(data);
    }

    

    return {loginSchema, login}
}
 
export default useAuth;