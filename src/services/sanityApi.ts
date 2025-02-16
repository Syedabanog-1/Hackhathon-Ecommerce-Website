
"use server";

import { client } from "@/sanity/lib/client";




export interface ICard {
  productImage: string;
  colors: string;
  title: string;
  _id: string;
  category: string;
  status: string;
  description: string;
  inventory: number;
  price: number;
}

//-----------------------------------------------product Fetch Sanity
export async function sanityFetch(query: string) {
  try {
    if (!query) throw new Error("Query string is empty!");

    const res: ICard[] = await client.fetch(
      `${query} {
        "productImage": productImage.asset->url,
        colors,
        title,
        _id,
        category,
        status,
        description,
        inventory,
        price
      }`
    );

    if (!res) throw new Error("No data returned from Sanity");
    return res;
  } catch (error) {
    console.error("❌ Fetch error:", error);
    return [];
  }
}

//-----------------------------------------------product-Image-Asset-Id
async function uploadImageToSanity(imageUrl: string) {
  try {
    if (!imageUrl) throw new Error("Image URL is empty!");

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);

    const blob = await response.blob();
    const asset = await client.assets.upload("image", blob);

    return asset?._id || null;
  } catch (error) {
    console.error("❌ Image upload failed:", error);
    return null;
  }
}

export interface IReturnSanityProduct {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  category: string;
  colors: string[];
  description: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  inventory: number;
  price: number;
  productName: string;
  status: string;
}

//-----------------------------------------------product Update Sanity
export async function productPostSanity(updatedProduct: ICard) {
  
  try {
    if (!updatedProduct._id) throw new Error("Product ID is missing!");

    const imageAssetId = await uploadImageToSanity(updatedProduct.productImage);
    
    if (!imageAssetId) {
      console.warn("⚠️ Image upload failed, keeping existing image.");
    }

    const res = await client
      .patch(updatedProduct._id)
      .set({
        image: imageAssetId ? { _type: "image", asset: { _type: "reference", _ref: imageAssetId } } : undefined,
        productName: updatedProduct.title,
        price: updatedProduct.price,
        category: updatedProduct.category,
        inventory: updatedProduct.inventory,
        description: updatedProduct.description,
      })
      .commit();

    return res;
  } catch (error) {
    console.error("❌ Product update failed:", error);
    throw error;
  }
}

//-----------------------------------------------product Delete Sanity
export async function productDeleteSanity(updatedProduct: ICard) {
  try {
    if (!updatedProduct._id) throw new Error("Product ID is missing!");

    const res = await client.delete(updatedProduct._id);
    return res;
  } catch (error) {
    console.error("❌ Product delete failed:", error);
    throw error;
  }
}

//-----------------------------------------------product Create Sanity
export async function productCreateSanity(updatedProduct: ICard) {
  try {
    if (!updatedProduct.title) throw new Error("Title is required!");
    if (!updatedProduct.price) throw new Error("Price is required!");

    const res = await client.create({
      _type: "product",
      productName: updatedProduct.title,
      price: updatedProduct.price,
      category: updatedProduct.category,
      inventory: updatedProduct.inventory,
      description: updatedProduct.description,
      status: "active",
      colors: updatedProduct.colors || [],
    });

    console.log("✅ Product created successfully:", res._id);
    return res;
  } catch (error) {
    console.error("❌ Product creation failed:", error);
    throw error;
  }
}

// src\services\sanityApi.ts
{/** 
"use server"

import { client } from "@/sanity/lib/client"


export interface ICard {
  productImage: string;
  colors: string;
  title: string;
  _id: string;
  category: string;
  status: string;
  description: string;
  inventory: number;
  price: number;
}

//-----------------------------------------------product Fetch Sanity
export async function sanityFetch(query: string) {
  const res: ICard[] =  await client.fetch(`${query}{
          'productImage': productImage.asset->url,
          colors,
          title,
          _id,
          category,
          status,
          description,
          inventory,
          price
        }`)

  return res;
}

//-----------------------------------------------product-Image-Asset-Id

async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();

    const asset = await client.assets.upload("image", blob);
 
    return asset;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}



export interface IReturnSanityProduct {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  category: string;
  colors: string[],
  description: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: 'reference'
    }
  },
  inventory: number;
  price: number;
  productName: string
  status: string;
}


//-----------------------------------------------product Update Sanity

export async function productPostSanity(updatedProduct: ICard) {
  
  const imageAsset = await uploadImageToSanity(updatedProduct.productImage)
  
  const res = await client
  .patch(updatedProduct._id)
  .set({
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id,
      },
    },
    productName: updatedProduct.title,
    price: updatedProduct.price,
    category: updatedProduct.category,
    inventory: updatedProduct.inventory,
    description: updatedProduct.description,
  })
  .commit();

  return res
  
}



//-----------------------------------------------product Delete Sanity
export async function productDeleteSanity(updatedProduct: ICard) {
    
  const res = await client.delete(updatedProduct._id);

  return res
  
}



//-----------------------------------------------product Create Sanity
export async function productCreateSanity(updatedProduct: ICard) {
  try {
    const res = await client.create({
      _type: "product",
      productName: updatedProduct.title,
      price: updatedProduct.price,
      category: updatedProduct.category,
      inventory: updatedProduct.inventory,
      description: updatedProduct.description,
      status: "active",
      colors: [],
    });

    console.log("✅ Product created successfully:", res._id);
    return res;
  } catch (error) {
    console.error("😡 Product creation failed:", error);
    throw error;
  }
}

**/}

