import toast, { Toaster } from "react-hot-toast";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/Ui/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite } from "../utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  // console.log(singlePhone);

  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone;

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  return (
    <div className="w-full py-12">
      <img
        src={image}
        alt="Banner-img"
        className="w-full mx-auto md:w-auto mb-8"
      />
      {/* title and buttons */}
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">Name: {name}</h1>
        <div className="space-x-4">
          <Button label={<MdShoppingCartCheckout />} />
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
          <Toaster />
        </div>
      </div>
      {/* Details */}
      <div></div>
    </div>
  );
};

export default PhoneDetails;
