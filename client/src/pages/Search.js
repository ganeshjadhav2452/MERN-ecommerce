import React from "react";
import Layout from "./../components/layout/Layout";
import { useSearch } from "../context/search";
import { Link } from "react-router-dom";
const Search = () => {
    const [search, setSearch] = useSearch();

    return (
        <Layout title={"Search results"}>
            <div className="container">
                <div className="text-center">
                    <h1>Search Resuts</h1>
                    <h6>
                        {search?.results.length < 1
                            ? "No Products Found"
                            : `Found ${search?.results?.length}`}
                    </h6>
                    <div className="d-flex flex-wrap mt-4">
                        {search?.results.map((p) => (
                            <div className="card m-2" style={{ width: "18rem" }}>
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">
                                        {p.description.substring(0, 30)}...
                                    </p>
                                    <p className="card-text"> $ {p.price}</p>
                                    <Link to={`/product/${p.slug}`} class="btn btn-primary ms-1">More Details</Link>
                                    <button class="btn btn-secondary ms-1">ADD TO CART</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;