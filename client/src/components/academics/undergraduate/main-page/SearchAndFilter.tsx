"use client";

import { useForm } from "react-hook-form";

type FilterFormData = {
  keyword: string;
  field: string;
  duration: string;
};

type Props = {
  onFilterChange: (filters: FilterFormData) => void;
  fieldsOfStudy: string[];
  durations: string[];
};

export default function SearchAndFilter({
  onFilterChange,
  fieldsOfStudy,
  durations,
}: Props) {
  const { register, handleSubmit } = useForm<FilterFormData>({
    defaultValues: {
      keyword: "",
      field: "",
      duration: "",
    },
  });

  const onSubmit = (data: FilterFormData) => {
    onFilterChange(data);
  };

  return (
    <section className="w-full max-md:min-h-screen">
      <h2 className="text-xl lg:text-2xl font-semibold mb-6 md:mb-4 text-[#008080]">
        Search & Filters
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-md:min-h-screen md:flex-row md:items-end gap-6"
      >
        <div className="md:flex-grow">
          <label className="block md:hidden text-lg md:text-xl lg:text-2xl mb-2">
            Search Course
          </label>
          <input
            type="text"
            placeholder="Search programs"
            {...register("keyword")}
            className="w-full md:flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
          />
        </div>

        <div className="w-full md:w-40">
          <label className="block md:hidden text-lg md:text-xl lg:text-2xl mb-2">
            Select Field
          </label>
          <select
            {...register("field")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
          >
            <option value="">Field of Study</option>
            {fieldsOfStudy.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block md:hidden text-lg md:text-xl lg:text-2xl mb-2">
            Course Duration
          </label>
          <select
            {...register("duration")}
            className="w-full md:w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
          >
            <option value="">Duration</option>
            {durations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="max-md:mt-10 px-4 py-2 border border-[#008080] text-[#008080] rounded-md hover:bg-[#008080] hover:text-white transition"
        >
          Search
        </button>
      </form>
    </section>
  );
}
