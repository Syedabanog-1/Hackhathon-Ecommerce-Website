import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "16cig573",  // Sanity ka project ID
  dataset: "production",  // Dataset ka naam (e.g., 'production')
  useCdn: true, // Fast caching ke liye true karein
  apiVersion: "2023-01-01", // Latest API version daalain
  token: "sk238kWAA870Q49tEQ3iXMpeqoHMZyOqHuyMXqZLW6fQ42IGpYMqZXcNFl3kU6ZaC2F4miFr4UAz7dghxr2h5u1Syk25CzyYjNdXB2q4AeFnZ0CGdtGVA4n8iHFLR8lhFlhtRYdFGdAFh5AM6GgKVQ92uVnvXTEeGWNkKuaC9c9jlh60Pi5m",
});

export default sanityClient;
