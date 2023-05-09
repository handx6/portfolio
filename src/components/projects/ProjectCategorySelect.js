const selectOptions = [
  "Back-end",
  "Front end",
  "UI/UX",
];

export default function ProjectCategorySelect({ selectedProject, setSelectProject }) {
  return (
    <select onChange={(e) => {
        setSelectProject(e.target.value);
      }} className="font-normal px-4 sm:px-6 py-2 border rounded-lg text-sm sm:text-md bg-white text-[#0D2438]" >
      <option value={selectedProject} className="text-sm sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

