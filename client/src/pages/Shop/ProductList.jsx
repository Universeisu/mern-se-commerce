import { useState, useEffect } from "react";
import ProductService from "../../services/product.service";
import Card from "../../components/Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [itemPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.getAllProducts();
        setProducts(response.data);
        setFilteredItems(response.data);
        setCategories([
          "all",
          ...new Set(response.data.map((item) => item.category)),
        ]);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchData();
  }, []);

  const filterItem = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    handleSortChange(sortOption, filtered);
  };

  const handleSortChange = (option, items = filteredItems) => {
    setSortOption(option);
    let sortedItem = [...items];
    switch (option) {
      case "a-z":
        sortedItem.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedItem.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItem.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItem.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItem);
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        {/* Filter */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => filterItem(category)}
            >
              <p className="capitalize">{category}</p>
            </button>
          ))}
        </div>
        {/* Sort Options */}
        <div className="flex justify-end mb-4">
          <select
            name="sortOption"
            id="sortOption"
            className="bg-black text-white px-3 py-2 rounded-sm"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      {/* Products List */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {currentItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center my-8 flex-wrap gap-2">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-red-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
