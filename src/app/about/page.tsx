// src/app/about/page.tsx
export default function About() {
    return (
      <div className="about-us">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-6">
          Welcome to our platform! We are a dedicated team focused on delivering high-quality content and solutions to our community. Our mission is to provide useful resources, tools, and knowledge to help individuals and businesses thrive in today&apos;s digital age.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to empower individuals and organizations by offering insightful content and actionable advice. We aim to inspire growth, productivity, and innovation through the power of knowledge and technology.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="mb-6">
          We specialize in providing educational resources on a variety of topics such as productivity, technology, business strategies, and remote work. Whether you&apos;re a student, professional, or entrepreneur, we are here to help you succeed.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6">
          <li>Commitment to Excellence</li>
          <li>Continuous Learning</li>
          <li>Innovation and Creativity</li>
          <li>Empathy and Support</li>
        </ul>
      </div>
    );
  }