import React, { useEffect } from "react";
import DeshboardBoxes from "../../Components/DeshboardBoxes";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
// import AddProductForm from "../../Components/addProductForm";
import ProgressBar from "../../Components/ProgressBar";
import Products from "../../Components/Products";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineViewInAr } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Reducers/addProductPanleToggle";
const Deshboard = ({openAddProductPanel}) => {
  const dispatch = useDispatch()
  const [isOpenProductDetails, setIsOpenProductDetails] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const progressValue = 40;
  const [progreshType,setProgressType] = useState('')
  useEffect(()=>{
    if (progressValue<=0) {
      setProgressType('error')
    }else if(progressValue<30){
      setProgressType('warning')
    }else{
      setProgressType('success')
    }
  },[progressValue])


  const handleOpenProductDetails = () => {
    setIsOpenProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setIsOpenProductDetails(false);
  };
  const handleToggle = () => {
    dispatch(addProduct(true));
  };
  return (
    <div>
      <div className="w-full py-2 mt-4  bg-white shadow-md  px-5 border border-[0,0,0,0.5]  flex items-center gap-5 mb-5 justify-between rounded-md">
        <div className="info">
          <h2 className="text-[30px] font-[600] mb-3">Good Morning</h2>
          <p className="mb-3">Hey What happing Today ,How's going.</p>
          <Button className="btn-blue !capitalize flex gap-1 !p-2" onClick={openAddProductPanel}>
            <FaPlus />
            Add Products
          </Button>
        </div>
        <img
          src="http://isomorphic-furyroad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop-illustration.b3542492.png&w=2048&q=75"
          className="w-[250px]"
          alt=""
          />
          </div>
          <DeshboardBoxes />
      <div className=" w-full ">
        <div className="container flex gap-5">
          <div className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] w-[100%] bg-white shadow-md mt-4 p-4">
            <h2 className="text-xl font-bold mb-2">Recent Orders</h2>
            <p className="mb-4">There are 2 Orders</p>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Order ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Products
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Pincode
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Order Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-primary whitespace-nowrap">
                      12345
                    </td>
                    <td className="px-6 py-4 text-primary">PAY12345</td>
                    <td className="px-6 py-4">
                      <Button
                        onClick={handleOpenProductDetails}
                        className="!text-black bg-white rounded-md !px-1"
                      >
                        View Products
                      </Button>
                    </td>
                    <td className="px-6 py-4">John Doe</td>
                    <td className="px-6 py-4">1234567890</td>
                    <td className="px-6 py-4">123 Main St</td>
                    <td className="px-6 py-4">123456</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">john.doe@example.com</td>
                    <td className="px-6 py-4">Delivered</td>
                    <td className="px-6 py-4">2023-10-01</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      12345
                    </td>
                    <td className="px-6 py-4">PAY12345</td>
                    <td className="px-6 py-4">
                      <Button
                        onClick={handleOpenProductDetails}
                        className="!text-black bg-white rounded-md !px-1"
                      >
                        View Products
                      </Button>
                    </td>
                    <td className="px-6 py-4">John Doe</td>
                    <td className="px-6 py-4">1234567890</td>
                    <td className="px-6 py-4">123 Main St</td>
                    <td className="px-6 py-4">123456</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">john.doe@example.com</td>
                    <td className="px-6 py-4">Delivered</td>
                    <td className="px-6 py-4">2023-10-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Dialog
          open={isOpenProductDetails}
          onClose={handleCloseProductDetails}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <div className="flex justify-between items-center">
              <span>Product Details</span>
              <Button onClick={handleCloseProductDetails}>
                <IoMdClose className="text-gray-600" />
              </Button>
            </div>
          </DialogTitle>
          <DialogContent>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SubTotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    P12345
                  </td>
                  <td className="px-6 py-4">Apple MacBook Pro 17"</td>
                  <td className="px-6 py-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Product"
                      className="w-10 h-10"
                    />
                  </td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseProductDetails} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="w-full">
  {/* <div className="container flex gap-5">
    <div className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] w-[100%] bg-white shadow-md mt-4 p-4">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      <p className="mb-4">There are 2 Orders</p>

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
            <tr className="odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">
                <div className="w-[60%]">
                  <Checkbox defaultChecked size="small" />
                </div>
              </td>
              <td className=" py-4">
                <div className="flex items-center gap-4 w-[220px]">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[40%]">
                    <Link to="/products/1221" className="leading-6">
                      <h3 className="font-[600] text-[12px] hover:text-primary ">
                        Ganesh suthra
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </Link>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">Category</td>
              <td className="px-6 py-4">SubCategory</td>
              <td className="px-6 py-4">Brand</td>
              <td className="px-6 py-4">Price

              </td>
              <td className="px-6 py-4"><span className="font-[600]">234</span><span>sale</span><ProgressBar value={progressValue} type={progreshType}/>
              </td>
              <td className="px-6 py-4">Rating</td>
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
            <tr className="odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">
                <div className="w-[60%]">
                  <Checkbox defaultChecked size="small" />
                </div>
              </td>
              <td className=" py-4">
                <div className="flex items-center gap-4 w-[220px]">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[40%]">
                    <Link to="/products/1221" className="leading-6">
                      <h3 className="font-[600] text-[12px] hover:text-primary ">
                        Ganesh suthra
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </Link>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">Category</td>
              <td className="px-6 py-4">SubCategory</td>
              <td className="px-6 py-4">Brand</td>
              <td className="px-6 py-4">Price

              </td>
              <td className="px-6 py-4"><span className="font-[600]">234</span><span>sale</span><ProgressBar value={progressValue} type={progreshType}/>
              </td>
              <td className="px-6 py-4">Rating</td>
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
          </tbody>
        </table>
      </div>
    <div className="flex items-center justify-end mt-4 mb-4 ">

      <Pagination count={10} color="primary" />

    </div>
    </div>
  </div> */}
  <Products/>
</div> 
    </div>
  );
};

export default Deshboard;
