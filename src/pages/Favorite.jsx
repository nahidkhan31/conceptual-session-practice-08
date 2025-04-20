import React, { useEffect, useState } from "react";
import PhoneShow from "../components/PhoneShow/PhoneShow";
import { getFavorites, removeFavorite } from "../utils/index";
import EmptyState from "../components/Ui/EmptyState";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savePhones = getFavorites();
    setDisplayPhones(savePhones);
  }, []);

  const handleDelete = (id) => {
    removeFavorite(id);
    setDisplayPhones(getFavorites());
  };
  if (displayPhones.length < 1) return <EmptyState></EmptyState>;
  return (
    <div>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayPhones.map((phone) => (
            <PhoneShow
              key={phone.id}
              phone={phone}
              deletable={true}
              handleDelete={handleDelete}></PhoneShow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
