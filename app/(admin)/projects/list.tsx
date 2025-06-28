"use client";

import { FC, Fragment } from "react";
import { useProjects } from "@/hooks/useProjects";
import { ProjectItem } from "@/types";
import Link from "next/link";

import styles from "./list.module.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { DefaultButton, DefaultLinkButton } from "@/ui/buttons";
import { Tags } from "@/ui/tags/Tags";

export const ProjectsPanel: FC = () => {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="alert alert-danger" role="alert"><p>Error: {error?.message}</p></div>;

  return (
    <section className={`${styles.section} container py-4 mt-5`}>
      <h1 className="mb-4">Projects Panel</h1>

      <div className={`${styles.actionsPanel} w-100`}>
        <Link href="/projects/create" className="link mx-auto me-0">Create</Link>
      </div>


      <div className={`${styles.listContainer}`}>
        <div className="grid-header fw-bold"><span>Name</span></div>
        <div className="grid-header fw-bold"><span>Period</span></div>
        <div className="grid-header fw-bold"><span>Type</span></div>
        <div className="grid-header fw-bold text-end"><span>Actions</span></div>

        {data?.map((project: ProjectItem) => (
          <Fragment key={project.id}>
            <div className="d-flex align-items-center"><span>{project.name}</span></div>
            <div className="d-flex align-items-center"><span>{project.period}</span></div>
            <div className="d-flex align-items-center">
              <Tags tags={project.types}/>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <DefaultLinkButton href={`/projects/${project.slug}`} className="btn btn-sm btn-outline-primary me-2"><MdEdit/></DefaultLinkButton>
              <DefaultButton className="btn btn-sm btn-outline-danger"><MdDelete/></DefaultButton>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
