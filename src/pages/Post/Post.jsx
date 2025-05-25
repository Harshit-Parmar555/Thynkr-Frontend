import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// idea store import
import { useIdeaStore } from "@/store/useIdeaStore";

const Upload = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { postIdea } = useIdeaStore();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("coverImage", data.coverImage[0]);
    formData.append("pitch", data.pitch);

    try {
      await postIdea(formData);
      reset();
    } catch (error) {
      console.error("Error uploading idea:", error);
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center pt-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col items-center gap-6 p-4"
      >
        <h1 className="text-2xl font-[Inter] font-semibold text-white">
          Upload Your Idea
        </h1>

        {/* Name Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Idea Name
          </label>
          <Input
            placeholder="Enter Title Of Idea"
            className="h-12 border border-zinc-600 text-white placeholder:text-zinc-600"
            {...register("title", {
              required: "Name is required",
              minLength: { value: 3, message: "Minimum 3 characters required" },
              maxLength: {
                value: 100,
                message: "Maximum 100 characters allowed",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Brief Description
          </label>
          <Textarea
            placeholder="Enter A Brief Description About Idea"
            className="h-12 border border-zinc-600 text-white placeholder:text-zinc-600"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
              maxLength: {
                value: 300,
                message: "Maximum 300 characters allowed",
              },
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Idea Category
          </label>
          <Select onValueChange={(value) => setValue("category", value)}>
            <SelectTrigger className="h-12 border border-zinc-600 text-zinc-200 placeholder-zinc-600">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-950 text-zinc-200 border border-zinc-700">
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="Environment">Environment</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
            </SelectContent>
          </Select>

          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
          {/* Hidden input to keep compatibility with react-hook-form */}
          <input
            type="hidden"
            {...register("category", {
              required: "Category is required",
            })}
          />
        </div>

        {/* Cover Image Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Cover Image
          </label>
          <Input
            type="file"
            accept="image/*"
            className="h-12 border border-zinc-600 text-white placeholder:text-zinc-600"
            {...register("coverImage", { required: "Cover image is required" })}
          />
          {errors.coverImg && (
            <p className="text-red-500 text-sm">{errors.coverImg.message}</p>
          )}
        </div>

        {/* Pitch Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Detailed Pitch
          </label>
          <Textarea
            placeholder="Enter Your Detailed Pitch"
            className="h-12 border border-zinc-600 text-white placeholder:text-zinc-600"
            {...register("pitch", {
              required: "Pitch is required",
              minLength: {
                value: 50,
                message: "Minimum 50 characters required",
              },
              maxLength: {
                value: 3000,
                message: "Maximum 3000 characters allowed",
              },
            })}
          />
          {errors.pitch && (
            <p className="text-red-500 text-sm">{errors.pitch.message}</p>
          )}
        </div>

        <Button className="w-full h-12 bg-white text-black rounded-md hover:bg-white/80 transition duration-200">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default Upload;
