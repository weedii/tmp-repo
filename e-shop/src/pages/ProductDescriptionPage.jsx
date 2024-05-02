import { useLocation } from "react-router-dom";
import { Select } from "antd";
import { useState } from "react";

const ProductDescriptionPage = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const optionsQuantity = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
  ];

  return (
    <div className="min-h-screen flex gap-5 px-5">
      <div className="w-1/2 h-[10rem] mt-7">
        <img src={location.state.item.pic} className="object-cover" />
      </div>
      <div className="w-1/2 mt-7 flex flex-col gap-5">
        <p className="text-3xl">{location.state.item.name}</p>
        <p className="text-xl">{location.state.item.price}</p>
        <p className="text-lg max-w-xl">{location.state.item.description}</p>

        <div className="w-full flex flex-col gap-3">
          <p>Select Quantity</p>
          <Select
            defaultValue={quantity}
            options={optionsQuantity}
            placeholder="Select Qt"
            onChange={(e) => setQuantity(e)}
            className="w-1/2"
          />
        </div>

        <button className="mt-5 bg-slate-800 text-white w-full p-3 hover:bg-opacity-85">
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
