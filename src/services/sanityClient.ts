import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "16cig573",  // Sanity ka project ID
  dataset: "production",  // Dataset ka naam (e.g., 'production')
  useCdn: true, // Fast caching ke liye true karein
  apiVersion: "2023-01-01", // Latest API version daalain
  token: "skwhGbsijlUHMM1MvQ9O0ny5IjvVqlUqCOiGhRzFOIwvzBfhPh3KSuoNXiZhdSToOMwd88fVYETvvU8ITC7hOGLcRLbGis46JfEwlqT4Pt3J6uBWjN4o1rc3OV45IXyUlj2YWQiCpj2LBTZS838k1Rzmcehcp1BCFSulbLUTAdRq5qkpas58",
});

export default sanityClient;
