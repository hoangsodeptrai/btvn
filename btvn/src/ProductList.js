import { useState } from "react";

export default function ProductList() {
	let list = [
		{ name: "iphone 1", price: 100, quantity: 10, category: "phone" },
		{ name: "iphone 2", price: 200, quantity: 15, category: "phone" },
		{ name: "iphone 3", price: 205, quantity: 16, category: "phone" },
		{ name: "mac pro", price: 2050, quantity: 11, category: "laptop" },
		{ name: "mac mini", price: 2005, quantity: 12, category: "laptop" },
		{ name: "mac air", price: 2055, quantity: 13, category: "laptop" },
	];
    const [product,setProduct]=useState(list)

	const [categoryList, setCategoryList] = useState(["phone", "laptop"]);
	const [newCategory, setNewCategory] = useState("");
    const [filterCategory,setFilterCategory]=useState('');
    const [newProduct,setNewProduct]=useState(
        {name:'',
        price:'',
        quantity:'',
        category:''}
    );

	const handleAddCategory = () => {
		if (newCategory && !categoryList.includes(newCategory)) {
			setCategoryList([...categoryList, newCategory]);
			setNewCategory("");
		}
	};
    const handleAddProduct = ()=>{
        setProduct([...product,{...newProduct}]);
        setNewProduct({name:'',price:'',quantity:'',category:''});
    }

	return (
		<>
			<input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}></input> <hr>
            </hr>
            <input type="text" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} />
            <input type="text" value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})} />
            <input type="text" value={newProduct.quantity} onChange={(e)=>setNewProduct({...newProduct,quantity:e.target.value})} />
            <input type="text" value={newProduct.category} onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})} />
            <button onClick={()=>handleAddProduct()}>Thêm product</button>
			<button onClick={() => handleAddCategory()}>Thêm</button>
			<h1>
				{categoryList.map((cate, index) => (
					<span>
						{""} {cate}
					</span>
				))}
			</h1>
            <h3>
                {product.map((p)=>(
                    <li>
                        {p.name}-{p.price}-{p.quantity}-{p.category}
                    </li>
                ))}
            </h3>
		</>
	);
}
