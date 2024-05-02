import dress from "../assets/clothes/dress.png";
import ghoodie from "../assets/clothes/ghoodie.png";
import rhoodie from "../assets/clothes/rhoodie.png";
import whoodie from "../assets/clothes/whoodie.png";
import skirt from "../assets/clothes/skirt.png";
import rskirt from "../assets/clothes/rskirt.png";
import skn from "../assets/clothes/skn.png";
import rskn from "../assets/clothes/rskn.png";
import lskn from "../assets/clothes/lskn.png";
import xskn from "../assets/clothes/xskn.png";
import { useState } from "react";
import { Input } from "antd";
import "./forceAntd.css";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [searchText, setSearchText] = useState("");

  const productusArray = [
    {
      id: 1,
      name: "Dress",
      pic: dress,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 2,
      name: "Hoodie",
      pic: ghoodie,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 3,
      name: "Hoodie",
      pic: rhoodie,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 4,
      name: "Hoodie",
      pic: whoodie,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 5,
      name: "Skirt",
      pic: skirt,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 6,
      name: "Skirt",
      pic: rskirt,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 7,
      name: "Sneakers",
      pic: skn,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 8,
      name: "Sneakers",
      pic: rskn,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 9,
      name: "Sneakers",
      pic: lskn,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: 10,
      name: "Sneakers",
      pic: xskn,
      price: "100$",
      description:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
  ];

  const normalizedSearchText = searchText.toLowerCase();

  return (
    <div className="min-h-screen px-14">
      <p className="mt-7 text-2xl text-bordgen font-semibold">
        Explore Our Shop
      </p>

      <div className="mt-5 flex justify-center">
        <Input.Search
          placeholder="Search here..."
          allowClear
          onChange={(e) => setSearchText(e.target.value)}
          onSearch={(value) => setSearchText(value)}
          className="px-12"
        />
      </div>

      <div className="mt-7 flex items-center justify-center flex-wrap gap-12">
        {productusArray
          .filter(
            (item) =>
              normalizedSearchText === "" ||
              item.name.toLowerCase().includes(normalizedSearchText)
          )
          .map((item, idx) => (
            <div key={idx} className="">
              <Link
                to={`/shop/${item.id}`}
                state={{ item }}
                className="w-[14rem] h-[15rem] bg-slate-50 hover:bg-slate-100 p-5 flex justify-center rounded-md shadow-md hover:shadow-bordgen hover:scale-105 duration-200 cursor-pointer"
              >
                <img src={item.pic} className="object-cover" alt={item.name} />
              </Link>

              <div className="flex items-center justify-between mt-2 text-sm">
                <p className="text-center font-semibold">{item.name}</p>
                <p className="text-center font-semibold">{item.price}</p>
              </div>

              <button className="mt-5 bg-slate-800 text-white w-full p-3 hover:bg-opacity-85">
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
