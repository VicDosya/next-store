//Assigning Storefront access token and the shop URL
const storefrontAccessToken: any =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const storeURL: any = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

export async function storefront(query: any, variables = {}) {
  try {
    const response = await fetch(storeURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    });
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error: any) {
    console.error("Storefront Error:", error);
  }
}

export async function shopifyAdmin(query: any, variables = {}) {
  try {
    const response = await fetch(process.env.SHOPIFY_ADMIN_DOMAIN!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    });
    console.log("shopify response:", response);
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error: any) {
    console.error("Shopify Admin API error:", error);
  }
}
