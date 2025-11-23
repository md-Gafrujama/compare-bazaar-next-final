"use client";

import React from "react";
import CRMProductCard from "./CRMProductCard";
import { crmProducts } from "../../data/crmProducts";

const CRMProductListSection = () => {
  return (
    <section id="new-CRM-software" className="mt-8">
      {crmProducts.map((product) => (
        <CRMProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default CRMProductListSection;

