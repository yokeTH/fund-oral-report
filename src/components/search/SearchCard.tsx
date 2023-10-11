"use client";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
export default function SearchCard() {
  const router = useRouter();
  const mock: FormEventHandler<HTMLFormElement> = (e) => {
    const inputValue = (e.currentTarget.elements[0] as HTMLInputElement).value;
    e.preventDefault();
    router.push(`/${inputValue}`);
  };
  return (
    <>
      <div className="card shadow-md mt-3 bg-base-200">
        <div className="card-body">
          <h2 className="card-title text-base-content">
            ตรวจสอบ % วิดีโอ วิชา Fund Oral
          </h2>
          <form onSubmit={mock}>
            <input
              className="input w-full text-sm font-normal leading-5  shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple border border-solid border-primary hover:border-primary-focus dark:hover:border-primary-focus focus:border-primary-focus dark:focus:border-primary-focus dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
              placeholder="รหัสนิสิต*"
              required
            ></input>
            <button type="submit" className="btn btn-primary w-full mt-3">
              ตรวจสอบ
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
