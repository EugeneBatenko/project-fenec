"use client"

import { Form, FormSelect, Input } from "@/ui/form";
import { FormButton } from "@/ui/buttons/FormButton";
import { FC, FormEvent, useState } from "react";
import { useTags, useTagsMutation } from "@/hooks/useTags";
import { ProjectItem, TagTypeEnum, TagTypes } from "@/types";
import Image from "next/image";
import { useProjectMutation } from "@/hooks/useProjects";

type ProjectFormProps = {
  edit?: boolean;
}

export const ProjectForm: FC<ProjectFormProps> = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const projectMutation = useProjectMutation();
  const [selectedCommonTags, setSelectedCommonTags] = useState<TagTypes[]>([]);
  const [selectedTechTags, setSelectedTechTags] = useState<TagTypes[]>([]);

  const { data: commonTags, refetch: refetchCommon } = useTags({ type: TagTypeEnum.COMMON });
  const { data: techTags, refetch: refetchTech } = useTags({ type: TagTypeEnum.TECH });
  const formattedCommonTags = commonTags?.map(tag => ({
    value: tag.name,
    label: tag.name,
    type: TagTypeEnum.COMMON,
  })) || [];
  const formattedTechTags = techTags?.map(tag => ({
    value: tag.name,
    label: tag.name,
    type: TagTypeEnum.TECH,
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const imageFile = formData.get("image") as File;

    const projectData = new FormData();
    projectData.set("name", formData.get("name") as string);
    projectData.set("description", formData.get("description") as string);
    projectData.set("start_date", formData.get("start_date") as string);
    projectData.set("end_date", formData.get("end_date") as string);
    projectData.set("image", imageFile);

    // Handle tags (as JSON)
    const tags = [
      ...selectedCommonTags,
      ...selectedTechTags,
    ];
    projectData.set("tags", JSON.stringify(tags));


    try {
      await projectMutation.create(projectData);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Project Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="form-control"
          required
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                if (e.target?.result) {
                  setPreviewUrl(e.target.result as string);
                }
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {previewUrl && (
          <div className="mt-2">
            <Image
              src={previewUrl}
              alt="Preview"
              width={500}
              height={300}
            />
            <button
              type="button"
              className="btn btn-sm btn-outline-danger d-block mt-2"
              onClick={() => {
                setPreviewUrl(null);
                const input = document.querySelector("input[name=\"image\"]") as HTMLInputElement;
                if (input) input.value = "";
              }}
            >
              Remove Image
            </button>
          </div>
        )}
        <div className="form-text">Upload a project image (optional)</div>
      </div>

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
            <Input type="month" name="end_date" label="End" required />
          </div>
        </div>

      </div>
      <div className="mb-3">
        <label className=" mb-1">Common tags</label>
        <FormSelect
          options={formattedCommonTags}
          multiple
          creatable
          value={selectedCommonTags.map(tag => tag.name)}
          onChange={value => {
            // value is string | string[] (names of selected tags)
            const arr = Array.isArray(value) ? value : value ? [value] : [];
            setSelectedCommonTags(arr.map(name => ({ name, type: TagTypeEnum.COMMON })));
          }}
          onCreateOption={(inputValue) => handleCreateTag(inputValue, TagTypeEnum.COMMON)}

        />

      </div>

      <div className="mb-3">
        <label className=" mb-1">Tech tags</label>
        <FormSelect
          options={formattedTechTags}
          multiple
          creatable
          value={selectedTechTags.map(tag => tag.name)}
          onChange={value => {
            const arr = Array.isArray(value) ? value : value ? [value] : [];
            setSelectedTechTags(arr.map(name => ({ name, type: TagTypeEnum.TECH })));
          }}
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