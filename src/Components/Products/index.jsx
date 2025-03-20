import React from "react";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineViewInAr } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import {addProduct} from '../../Redux/Reducers/addProductPanleToggle'
import { useState,useEffect } from "react";
import SearchBox from "../../Components/SearchBox";
import axios from 'axios'
const Products = ({openAddProductPanel}) => {
  
 const progressValue = 40;
  const [progreshType,setProgressType] = useState('')
  const [products,setProducts]= useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(()=>{
    if (progressValue<=0) {
      setProgressType('error')
    }else if(progressValue<30){
      setProgressType('warning')
    }else{
      setProgressType('success')
    }
  },[progressValue])
  const [search,setSearch] = useState('')

  useEffect(() => {
    const getAllProduct=async()=>{
      try {
        const response = await axios.get('http://localhost:1000/api/product/') 
        if (response.status===200) {
          setProducts(response.data.products)
          console.log(response.data.products);
          
        }
      } catch (error) {
        console.error(error);
        
      }
    }
    getAllProduct()
  },[])
  const filteredProducts=products.filter((item)=>(
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.catName.toLowerCase().includes(search.toLowerCase())
  ))
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  
  return (
    <>
    <div className="w-full px-4">
      <section className={`card w-auto p-5  mt-4  bg-white shadow-md rounded-md  flex items-center`}>
        <div className={`col1 `}>
          <h1 className="font-[500] mb-3 text-xl ">Products</h1>
          <Link>
            <Button className="btn-blue !capitalize flex gap-1 !p-2" onClick={openAddProductPanel}>
  <FaPlus />
  Add Product
</Button>
          </Link>

        </div>
         
      </section>
  <div className="container flex gap-5">
    <div className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] w-[100%] bg-white shadow-md mt-4 p-4">
      
      <div className="w-full flex justify-between">
        <div className="leftSide">
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <p className="mb-4">Total Products: {filteredProducts.length}</p>
        </div>
        <div className="rightSide">
          <SearchBox onSearchChange={setSearch} className='ml-auto'/>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Checkbox defaultChecked size="small" />
              </th>
              <th scope="col" className="px-6 py-3">Products</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">SubCategory</th>
              <th scope="col" className="px-6 py-3">Brand</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Sale</th>
              <th scope="col" className="px-6 py-3">Rating</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
            paginatedProducts.map((item,indx)=>(

            <tr key={indx} className="odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">
                <div className="w-[60%]">
                  <Checkbox defaultChecked size="small" />
                </div>
              </td>
              <td className=" py-4">
                <div className="flex items-center gap-4 w-[220px]">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src={`${item.images[0]}`}
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[40%]">
                    <Link to="/products/1221" className="leading-6">
                      <h3 className="font-[600] text-[12px] hover:text-primary ">
                        {item.name.substring(0,20)}...
                      </h3>
                      <span className="text-[12px]">{item.catName}</span>
                    </Link>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{item.catName}</td>
              <td className="px-6 py-4">{item.subCat}</td>
              <td className="px-6 py-4">{item.brand}</td>
              <td className="px-6 py-4">{item.price}

              </td>
              <td className="px-6 py-4"><span className="font-[600]">234</span><span>sale</span><ProgressBar value={progressValue} type={progreshType}/>
              </td>
              <td className="px-6 py-4">{item.rating}</td>
              <td className="px-6 py-4">
                <div className="flex gap-1 items-center">
                  <Button className="!w-[35px] !rounded-full hover:!bg-white !h-[35px] !min-w-[35px] !bg-[#f1f1f1] ">
                    <FaRegEdit className="text-[rgba(0,0,0,0.7)] text-[42px]"/>  
                  </Button>
                  <Button className="!w-[35px] !rounded-full hover:!bg-white !h-[35px] !min-w-[35px] !bg-[#f1f1f1] ">
                    <MdOutlineViewInAr className="text-[rgba(0,0,0,0.7)] text-[42px]"/>  
                  </Button>
                  <Button className="!w-[35px] !rounded-full hover:!bg-white !h-[35px] !min-w-[35px] !bg-[#f1f1f1] ">
                    <MdDelete className="text-[rgba(0,0,0,0.7)] text-[42px]"/>  
                  </Button>
                </div>
              </td>
            </tr>
            ))
            }
          
          </tbody>
        </table>
      </div>
    <div className="flex items-center justify-end mt-4 mb-4 ">

    <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" />

    </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Products;

