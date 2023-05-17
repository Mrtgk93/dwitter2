import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const history = useHistory();
  const onSubmit = (data) =>
    axios
      .post("https://dwitter-app.herokuapp.com/api/auth/register", data)
      .then((res) => {
        if (res == 201) {
          setTimeout(() => {
            history.push("/login");
          }, 2500);
        }
      })
      .catch((err) => console.log(err.response.data));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-stone-400 border text-white p-6 max-w-md mx-auto"
    >
      <div className=" mb-4">
        <div className="flex justify-between items-baseline">
          <label htmlFor="username">Username</label>
          {errors?.username && (
            <span className="text-sm text-red-700">
              {errors.username.message}
            </span>
          )}
        </div>
        <input
          className="text-black"
          id="username"
          {...register("username", { required: "username boş olamaz" })}
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-baseline">
          <label htmlFor="password">Password</label>
          {errors?.password && (
            <span className="text-sm text-red-700">
              {errors.password.message}
            </span>
          )}
        </div>
        <input
          className="text-black"
          id="password"
          type="password"
          {...register("password", { required: "Şifre boş olamaz" })}
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-baseline">
          <label htmlFor="email">Email</label>
          {errors?.email && (
            <span className="text-sm text-red-700">{errors.email.message}</span>
          )}
        </div>
        <input
          className="text-black"
          id="email"
          {...register("email", { required: "email boş olamaz" })}
        />
      </div>

      <div className="">
        <div className="flex justify-between items-baseline">
          <label htmlFor="rolename">Rolename</label>
          {errors?.rolename && (
            <span className="text-sm text-red-700">
              {errors.rolename.message}
            </span>
          )}
        </div>
        <input
          className="text-black"
          id="rolename"
          {...register("rolename", { required: "rolename boş olamaz" })}
        />
      </div>

      <button
        className="action-button text-white mt-4 py-3 px-8 rounded-full bg-blue-800"
        type="submit"
        disabled={!isValid}
      >
        Kayıt ol
      </button>
    </form>
  );
}
