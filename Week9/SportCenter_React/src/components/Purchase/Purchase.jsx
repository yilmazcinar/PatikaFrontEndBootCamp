import React from "react";
import SectionHeader from "./SectionHeader";
import PurchaseGrid from "./PurchaseGrid";
import PurchaseCard from "./PurchaseCard";

const Purchase = () => {
  const purchaseData = [
    {
      id: 1,
      name: "Kettlebell / 5kg",
      originalPrice: "89,99$",
      salePrice: "59,99$",
      image: "/images/purchase1.jpg",
    },
    {
      id: 2,
      name: "Treadmill",
      originalPrice: "899,00$",
      salePrice: "599,99$",
      image: "/images/purchase2.jpg",
    },
    {
      id: 3,
      name: "Adjustable Dumbbell",
      originalPrice: "89,99$",
      salePrice: "59,99$",
      image: "/images/purchase3.jpg",
    },
    {
      id: 4,
      name: "Kettlebell / 3kg",
      originalPrice: "89,99$",
      salePrice: "59,99$",
      image: "/images/purchase4.jpg",
    },
  ];

  return (
    <section className="purchase-section">
      <div className="container">
        <SectionHeader
          title="PURCHASE FROM US"
          description="Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <PurchaseGrid>
          {purchaseData.map((product) => (
            <PurchaseCard key={product.id} product={product} />
          ))}
        </PurchaseGrid>
      </div>
    </section>
  );
};

export default Purchase;
