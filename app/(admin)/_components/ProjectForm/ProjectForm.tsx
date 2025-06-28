"use client"

import { Form, FormSelect, Input } from "@/ui/form";
import { FormButton } from "@/ui/buttons/FormButton";
import { FC, FormEvent } from "react";
import { useTags, useTagsMutation } from "@/hooks/useTags";
import { TagTypeEnum } from "@/types";

type ProjectFormProps = {
  edit?: boolean;
}

export const ProjectForm: FC<ProjectFormProps> = () => {
  const { data: commonTags, refetch: refetchCommon } = useTags({ type: TagTypeEnum.COMMON });
  const { data: techTags, refetch: refetchTech } = useTags({ type: TagTypeEnum.TECH });
  const formattedCommonTags = commonTags?.map(tag => ({
    value: tag.name,
    label: tag.name
  })) || [];
  const formattedTechTags = techTags?.map(tag => ({
    value: tag.name,
    label: tag.name
  })) || [];

  const createTagMutation = useTagsMutation();

  const handleCreateTag = (inputValue: string, type: TagTypeEnum) => {
    createTagMutation.mutate({ name: inputValue, type: type }, {
      onSuccess: async () => {
        try {
          if (type === TagTypeEnum.COMMON) {
            await refetchCommon();
          } else if (type === TagTypeEnum.TECH) {
            await refetchTech();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // Here you would typically send the data to your API
    console.log("Form submitted with data:", data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Input type="text" name="name" label="Project Name" required />
      </div>
      <div className="mb-3">
        <p>Period</p>
        <div className="d-flex gap-4">
          {/*WARNING: Chromium support only*/}
          <div className="w-50">
            <Input type="month" name="start_date" label="Start" required />
          </div>
          <div className="w-50">
            <Input type="month" name="end_start" label="End" required />
          </div>
        </div>

      </div>
      <div className="mb-3">
        <label className=" mb-1">Common tags</label>
        <FormSelect
          options={formattedCommonTags}
          multiple
          creatable
          onCreateOption={(inputValue) => handleCreateTag(inputValue, TagTypeEnum.COMMON)}
        />

      </div>

      <div className="mb-3">
        <label className=" mb-1">Tech tags</label>
        <FormSelect
          options={formattedTechTags}
          multiple
          creatable
          onCreateOption={(inputValue) => handleCreateTag(inputValue, TagTypeEnum.TECH)}
        />
      </div>

      <div className="mb-3">
        <label className=" mb-1">Description</label>
        <textarea
          name="description"
          style={{minHeight: "150px"}}
          rows={5}
          minLength={100}
          placeholder="Project description"
          required
          />
      </div>


      <FormButton type="submit" name="Create" />
    </Form>
  )
}