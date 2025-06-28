import { ProjectForm } from "@/admin/components/ProjectForm/ProjectForm";

export default function Page() {

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="my-5">Create project</h1>
          <ProjectForm/>
        </div>
      </div>
    </section>
  );
}