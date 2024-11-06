import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { value: "latest", label: "مرتب سازی (جدیدترین)" },
  { value: "earliest", label: "مرتب سازی (قدیمی ترین)" },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSE",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="md:flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold mb-4 md:mb-0">لیست پروژه ها</h1>
      <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 md:gap-x-2">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
