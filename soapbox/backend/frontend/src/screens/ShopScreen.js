import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Messages from "../components/Messages";
import { useParams, useSearchParams } from "react-router-dom";

function ShopScreen() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    console.log(category);

    dispatch(listProducts(category));
  }, [dispatch, category]);

  return (
    <div>
      <h1>Our Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages variant={"danger"} children={error}></Messages>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col
              className="p-20 h-100"
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ShopScreen;
