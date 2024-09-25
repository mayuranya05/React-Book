import { useState } from "react";
import FilterableProductTable from "."

export default function App() {
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: true, name: "Passionfruit" },
        { category: "Vagetable", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vagetable", price: "$4", stocked: true, name: "Pumpkin" },
        { category: "Vagetable", price: "$1", stocked: true, name: "Peas" },
    ];

    const [filterText, setFilterText] = useState("");
    const [inStock0nly, setInStock0nly] = useState(false);

    return (
      <FilterableProductTable
          products={products}
          filterData={filterText}
          filterAction={setFilterText}
          inStockOnlyData={inStockOnly}
          inStockOnlyAction={setInStockOnly}
      />
  );
}