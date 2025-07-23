import useMenuStore from '@/zustand/menuStore';
import Image from 'next/image';
import Link from 'next/link';

export default function Categroy() {
  const { handleMenuClick, mainCategoryId, subCategoryId } = useMenuStore();

  return (
    <>
      <section className="categroy block w-full bg-white">
        <ul className="flex text-2xl justify-center gap-20 font-logo font-bold text-button-color text-center">
          <li>
            <figure>
              <Link href="/shopping/category/PC0301">
                <Image
                  src={'/image/category_icon/summer_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">여름나기 용품</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link
                href="/shopping/category/PC0302"
                onClick={() =>
                  handleMenuClick(
                    'shopping',
                    mainCategoryId,
                    subCategoryId ?? undefined,
                  )
                }
              >
                <Image
                  src={'/image/category_icon/furniture.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">가구</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0303">
                <Image
                  src={'/image/category_icon/household_item.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">생활 용품</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0304">
                <Image
                  src={'/image/category_icon/decoration_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">소품 &middot; 데코</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0305">
                <Image
                  src={'/image/category_icon/digital_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">가전 &middot; 디지털</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0306">
                <Image
                  src={'/image/category_icon/diy_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">공구 &middot; DIY</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0307">
                <Image
                  src={'/image/category_icon/acceptance_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">수납 &middot; 정리</figcaption>
              </Link>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
}
