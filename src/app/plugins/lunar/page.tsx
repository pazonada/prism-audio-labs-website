import type { Metadata } from "next";
import { ProductPage } from "@/components/prism/ProductPage";
import { products } from "@/lib/products";

const product = products.lunar;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tag}`,
  description: product.heroDesc,
};

export default function Page() {
  return <ProductPage product={product} />;
}
