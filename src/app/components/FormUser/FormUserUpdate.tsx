"use client";

import { useFetchUserById } from "@/app/hooks/users/useFetchUser";
import React, { useEffect, useState } from "react";
import Loading from "../PostCard/Loading";
import { useUpdateUser } from "@/app/hooks/users/useUpdateUser";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useDeleteUserById } from "@/app/hooks/users/useDeleteUser";

interface FormUserUpdateProps {
  id: string;
}

interface FormUserState {
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
}

export default function FormUserUpdate({ id }: FormUserUpdateProps) {
  const { data, isLoading } = useFetchUserById(id);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutate, isError, isSuccess, isPending, error } = useUpdateUser(id);
  const { mutate: mutateDelete, isSuccess: isSuccessDelete } =
    useDeleteUserById();
  const router = useRouter();

  const [form, setForm] = useState<FormUserState>({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        email: data.email,
        gender: data.gender,
        status: data.status,
      });
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess === true) {
      router.back();
      toast.success(`Success update ${form.name} `, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessDelete === true) {
      router.back();
      toast.success(`Success delete ${form.name} `, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessDelete]);

  function handleDelete() {
    mutateDelete(id);
  }

  function handleInput(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: keyof FormUserState
  ) {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, gender, status } = form;
    mutate({
      name: name,
      email: email,
      gender: gender,
      status: status,
    });
  }

  if (isLoading)
    return (
      <section className="mx-2 md:mx-10 my-20 md:my-20">
        <Loading mssg="User" />
      </section>
    );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex justify-end ">
        <button
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ml-2 "
          onClick={openModal}
        >
          <FaTrash color="white" size={20} />
        </button>
      </div>
      {isError && (
        <div className="bg-red-400 rounded-md px-1 py-2 h-15 w-1/4 mx-auto text-center mb-4">
          <p className="font-semibold text-[14px] md:text-[16px]">
            {error.message}
          </p>
        </div>
      )}
      {data && (
        <form className="w-full px-0  md:px-20" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="your name"
              value={form.name}
              onChange={(e) => handleInput(e, "name")}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@mail.com"
              value={form.email}
              onChange={(e) => handleInput(e, "email")}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <select
              id="gender"
              required
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={form.gender}
              onChange={(e) => handleInput(e, "gender")}
            >
              <option disabled value="default" hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              required
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={form.status}
              onChange={(e) => handleInput(e, "status")}
            >
              <option disabled value="default" hidden>
                Select Status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {isPending ? (
            <button
              type="submit"
              className="disabled text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Update
            </button>
          )}
        </form>
      )}
      <Modal
        isOpen={isOpen}
        setOpen={() => setIsOpen(true)}
        setClose={() => setIsOpen(false)}
        onDelete={handleDelete}
        title="Delete User"
        description="Are you sure to delete this user?"
      />
    </>
  );
}
