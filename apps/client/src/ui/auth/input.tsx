import { useFormContext } from "react-hook-form";

type Props={
    registerName:string,
    type?:string
}

const Input = ({registerName, type}:Props) => {
    const {register} = useFormContext();
    return (
        <input
            type={"text" || type}
            placeholder="Type here"
            className={`input input-bordered w-full max-w-xs !rounded-full placeholder:text-sm`}
            {...register(registerName)}
        />
    );
}

export default Input;