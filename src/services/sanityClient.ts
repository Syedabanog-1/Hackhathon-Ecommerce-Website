import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "16cig573",  // Sanity ka project ID
  dataset: "production",  // Dataset ka naam (e.g., 'production')
  useCdn: true, // Fast caching ke liye true karein
  apiVersion: "2023-01-01", // Latest API version daalain
});

export default sanityClient;
