import React, { useState, useEffect } from 'react'
import axios from 'axios'
const useCategory = () => {
    const [category, setCategory] = useState([])


    const getCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');

            setCategory(data?.categories)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    return category;
}

export default useCategory;