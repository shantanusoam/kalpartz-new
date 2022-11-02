import React from 'react';
import { useRouter } from 'next/router';
import { BiCategory } from 'react-icons/bi';
import CategoryComponent from '../../Components/Categories/CategoryComponent';

export default function CategoryRoute() {
  const router = useRouter();
  const { Category } = router.query;

  return (
    <div>
      <CategoryComponent />
      <h1 className="flex justify-center items-center text-5xl font-bold h-32">
        This is my <span className="text-orange-500 px-2">{Category}</span>
      </h1>
    </div>
  );
}
