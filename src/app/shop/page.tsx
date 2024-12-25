import Link from 'next/link';
const Shop = ()=> {
    return(<>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Tech Insights Hub - The Focus</h1>
      <p className="text-lg mb-6">Explore the latest trends, innovations, and insights in the world of technology. Stay updated with cutting-edge content and resources designed to help you stay ahead.</p>
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
        <p>
        Mastering Remote Work: Tips for Success
          <br />
          Learn the essential tips and tools for staying productive and engaged while working remotely. Discover how to create the perfect work-from-home setup and manage time effectively.
        </p>
        <Link href="/blog" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Read More</Link>
      </section>
    </div>
    
        </>)
}
export default Shop;