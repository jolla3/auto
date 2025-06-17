import { useEffect, useState } from "react";
import axios from "axios";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const img_url = "https://joll3a.pythonanywhere.com/static/images/";

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(stored);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://joll3a.pythonanywhere.com/api/get_product_details"
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getPhotoUrls = (product) => {
    const keys = Object.keys(product).filter((key) =>
      key.startsWith("car_photo")
    );
    return keys
      .map((key) => img_url + product[key])
      .filter((url) => url && !url.endsWith("null"));
  };

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter((id) => id !== productId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const filtered = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Your Wishlist</h3>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-muted">Your wishlist is empty.</div>
      ) : (
        <div className="row">
          {filtered.map((product, index) => {
            const photos = getPhotoUrls(product);

            return (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card shadow-sm h-100">
                  <div
                    id={`carousel-wish-${index}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {photos.map((url, i) => (
                        <div
                          className={`carousel-item ${i === 0 ? "active" : ""}`}
                          key={i}
                        >
                          <img
                            src={url}
                            className="d-block w-100"
                            alt="product"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h5>{product.car_name}</h5>
                    <p className="text-muted">{product.brand}</p>
                    <p>KES {product.price}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
