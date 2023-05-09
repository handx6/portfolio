import React, { useState } from "react";
import CardProjectPreview from "../Cards/CardProjectPreview";
import ProjectSearch from "./ProjectSearch";
import ProjectCategorySelect from "./ProjectCategorySelect";

export default function ProjectsGrid({ projects }) {
  const [searchProjects, setSearchProjects] = useState("");
  const [selectProjects, setSelectProjects] = useState("");
  // Search projects by title
  const searchProjectsByTitle = projects.filter((item) => {
    let result = [];
    result = item.fields.title
      .toLowerCase()
      .includes(searchProjects.toLowerCase())
      ? item
      : searchProjects === ""
      ? item
      : "";
    return result;
  });
  // Select projects by project category
  const selectProjectsByCategory = projects.filter((item) => {
    let category = item.fields.category.toLowerCase();
    return category.includes(selectProjects.toLowerCase());
  });
  console.log(selectProjects);
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-normal text-2xl sm:text-4xl mb-1 text-[#1E3851]">
          Projects portfolio
        </p>
      </div>
      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          Search projects by title or filter by category
        </h3>
        <div className="flex justify-between border-b border-[#F7F8FC] pb-3 gap-3">
          <ProjectSearch setSearchProject={setSearchProjects} />
          <ProjectCategorySelect setSelectProject={setSelectProjects} selectedProject={selectProjects}/>
          {/* <ProjectsFilter setSelectProject={setSelectProject} /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {selectProjects
          ? selectProjectsByCategory.map((project) => (
              <CardProjectPreview
                title={project.fields.title}
                category={project.fields.category}
                urlImg={project.fields.images[0].fields.file.url}
                key={project.sys.id}
                slug={project.fields.slug}
              />
            ))
          : searchProjects
          ? searchProjectsByTitle.map((project) => (
              <CardProjectPreview
                title={project.fields.title}
                category={project.fields.category}
                urlImg={project.fields.images[0].fields.file.url}
                key={project.sys.id}
                slug={project.fields.slug}
              />
            ))
          : projects.map((project) => (
              <CardProjectPreview
                title={project.fields.title}
                category={project.fields.category}
                urlImg={project.fields.images[0].fields.file.url}
                key={project.sys.id}
                slug={project.fields.slug}
              />
            ))}
      </div>
    </section>
  );
}
