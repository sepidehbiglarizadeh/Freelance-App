import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          filterField="category"
          options={[{ value: "All", label: "دسته بندی (همه)" }, ...transformedCategories]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
