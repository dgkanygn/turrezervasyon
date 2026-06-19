import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { BASE_URL } from '@/App'

// sections
import Hero from './sections/Hero'
import PopularTours from './sections/PopularTours'

const Home = () => {
    const [dbContent, setDbContent] = useState(null)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetchHomepageContent()
    // }, [])

    const fetchHomepageContent = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/Admin/Homepage-Content/Display`)
            setDbContent(response.data)
        } catch (error) {
            console.error('Ana sayfa içerikleri yüklenirken hata:', error)
        } finally {
            setLoading(false)
        }
    }

    // const content = { ...defaultContent, ...dbContent };

    return (
        <div className="bg-white min-h-screen relative">
            <Hero />
            <PopularTours />
        </div>
    )
}

export default Home
