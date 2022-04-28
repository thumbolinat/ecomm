import React from "react";
import { API } from "../../config";

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/pic/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "500px", maxWidth: "312px", minHeight:"350px", minWidth: "312px" }}
        />
    </div>
);

export default ShowImage;
