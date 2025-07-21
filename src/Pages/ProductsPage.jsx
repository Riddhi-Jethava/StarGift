import React from 'react'
import PageHeader from './../StaticComponents/PageHeader';
import ProductShowcaseComponent from './../Components/ProductsComponent/ProductShowcaseComponent';

const ProductsPage = () => {
    return (
        <div>
            <PageHeader
                title="Our Products"
                subtitle=""
                description="Honor For The Best."
                // breadcrumbs = [
                // {label: "Home", href: "/", icon: Home }
                // {label: "Pages", href: "/pages" }
                // {label: "About Us", href: "/about" }
                // ]
                backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            />
            <ProductShowcaseComponent />
        </div>
    )
}

export default ProductsPage
