import { useEffect, useRef, useState } from "react";

const SearchableDropdown = ({
  options: { locations, placeholder, itemHandler },
} = props) => {
  const [search, setSearch] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [selected, setSelected] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const extractNestedValues = (obj) => {
    return Object.values(obj)
      .flatMap((value) =>
        typeof value === "object" && value !== null
          ? extractNestedValues(value)
          : value
      )
      .join(" ");
  };

  const createFilter = (
    searchKey,
    { deep = false, ignoreCase = false } = {}
  ) => {
    return (item) => {
      if (!searchKey) return true;

      let reduceStr = Object.entries(item).reduce((result, [, value]) => {
        return !(value instanceof Object) ? (result += ` ${value}`) : result;
      }, "");

      if (deep) {
        reduceStr += extractNestedValues(item);
      }

      if (!ignoreCase) {
        searchKey = searchKey.toLowerCase();
        reduceStr = reduceStr.toLowerCase();
      }

      return reduceStr.includes(searchKey);
    };
  };

  const filtered = locations.filter(
    createFilter(search, { deep: false, ignoreCase: true })
  );
  const handleSelect = (option) => {
    setSelected(option.id);
    itemHandler(option);
    setSelectedLabel(option ? `${option.name}, ${option.country}` : "");
    setSearch("");
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700  focus:border-none focus:outline-none focus:ring-2 focus:ring-green-600"
        placeholder={placeholder || "Search..."}
        value={search || selectedLabel}
        onFocus={() => setShowDropdown(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(true);
        }}
      />

      {showDropdown && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filtered.length === 0 ? (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          ) : (
            filtered.map((option) => (
              <li
                key={option.id}
                className={`px-4 py-2 hover:bg-green-100 cursor-pointer ${
                  selected === option.id ? "bg-green-50" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.name}, {option.country}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
