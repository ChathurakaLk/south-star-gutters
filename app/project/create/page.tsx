"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ProjectFormData = {
  fullName: string;
  phone: string;
  whatsapp: string;
  address: string;
  stories: string;
  roofType: string;
  gutterLength: string;
  downspouts: string;
  notes: string;
};

export default function ProjectForm() {
  const form = useForm<ProjectFormData>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = form;

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ProjectFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        toast.error("Failed to submit the form. Server returned an error.");
        return;
      }
      toast.success("Project added successfully!");
      reset();
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full md:h-[100vh] w-full bg-neutral-950 relative flex justify-center antialiased">
      <div className="max-w-7xl w-full mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Add Project
        </h1>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border p-4 w-full rounded-lg my-5 md:my-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h2 className="text-white col-span-1 md:col-span-2 text-lg md:text-xl font-semibold mb-2 md:mb-4 mt-2 md:mt-0 text-center md:text-left">
                Customer Details
              </h2>

              <FormField
                name="fullName"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...register("fullName", {
                          required: "Full Name is required",
                        })}
                        className="text-white z-10 !bg-transparent"
                      />
                    </FormControl>
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="phone"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                          minLength: {
                            value: 10,
                            message: "Phone must be at least 10 digits",
                          },
                          pattern: {
                            value: /^\d+$/,
                            message: "Must be digits only",
                          },
                        })}
                        className="text-white z-10 !bg-transparent"
                      />
                    </FormControl>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="whatsapp"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Whatsapp Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...register("whatsapp", {
                          minLength: {
                            value: 10,
                            message: "WhatsApp must be at least 10 digits",
                          },
                          pattern: {
                            value: /^\d+$/,
                            message: "Must be digits only",
                          },
                        })}
                        className="text-white z-10 !bg-transparent"
                      />
                    </FormControl>
                    {errors.whatsapp && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.whatsapp.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="address"
                render={() => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className="text-white">Address</FormLabel>
                    <FormControl>
                      <Textarea
                        {...register("address", {
                          required: "Address is required",
                        })}
                        className="text-white z-10 !bg-transparent"
                        rows={3}
                      />
                    </FormControl>
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <h2 className="text-white col-span-1 md:col-span-2 text-lg md:text-xl font-semibold mb-2 md:mb-4 mt-2 md:mt-0 text-center md:text-left">
                Project Details
              </h2>

              <FormField
                name="stories"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Number of Stories
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...register("stories", {
                          required: "Number of stories is required",
                          valueAsNumber: true,
                          min: {
                            value: 1,
                            message: "Stories must be at least 1",
                          },
                        })}
                        placeholder="e.g., 1, 2"
                        className="text-white z-10 !bg-transparent"
                      />
                    </FormControl>
                    {errors.stories && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.stories.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="roofType"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">Roof Type</FormLabel>
                    <FormControl>
                      <Input
                        {...register("roofType")}
                        placeholder="e.g., Shingle, Metal, Tile"
                        className="text-white z-10 !bg-transparent"
                      />
                    </FormControl>
                    {errors.roofType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.roofType.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="gutterLength"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">Feet of Gutter</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...register("gutterLength", {
                          valueAsNumber: true,
                          min: { value: 0, message: "Must be positive" },
                          required: "Feet of gutter is required",
                        })}
                        placeholder="e.g., 120"
                        className="text-white z-10 !bg-transparent"
                      />
                    </FormControl>
                    {errors.gutterLength && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.gutterLength.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="downspouts"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Downspouts Needed (Qty & Location)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...register("downspouts")}
                        placeholder="e.g., 3 total — Front left, Back center, Garage right"
                        className="text-white z-10 !bg-transparent"
                        rows={3}
                      />
                    </FormControl>
                    {errors.downspouts && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.downspouts.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="notes"
                render={() => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className="text-white">
                      Special Requests / Notes
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...register("notes")}
                        placeholder="Any other project-specific notes..."
                        className="text-white z-10 !bg-transparent"
                        rows={3}
                      />
                    </FormControl>
                    {errors.notes && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.notes.message as string}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting || isLoading}
                variant="secondary"
                className="col-span-1 md:col-span-2 z-10"
              >
                {isSubmitting || isLoading ? "Adding..." : "Add Project"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
