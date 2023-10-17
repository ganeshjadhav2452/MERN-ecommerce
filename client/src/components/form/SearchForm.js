import React from "react";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SearchForm = () => {
    const [search, setSearch] = useSearch()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.get(`/api/v1/product/search/${search.keyword}`)

            setSearch({ ...search, results: data.result })
            navigate('/search')
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <>
            <form className="d-flex me-5" role="search" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search.keyword}
                    onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchForm;
