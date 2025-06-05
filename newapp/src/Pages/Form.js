import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const Form = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is Required"),
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Email is Required"),
    age: yup
      .number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? undefined : value
      )
      .positive()
      .integer()
      .min(18)
      .required("Age is Required"),
    password: yup.string().min(5).max(20).required("Password is Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name"
        {...register("fullname")}
      ></input>
      <p className="ErrorMessage">{errors.fullname?.message}</p>
      <input type="text" placeholder="Email" {...register("email")}></input>
      <p className="ErrorMessage">{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")}></input>
      <p className="ErrorMessage">{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      ></input>
      <p className="ErrorMessage">{errors.password?.message}</p>
      <input
        type="password"
        placeholder="ConfirmPassword"
        {...register("confirmPassword")}
      ></input>
      <p className="ErrorMessage">{errors.confirmPassword?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
};
