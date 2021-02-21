import { Product } from '@interfaces/product';
import { FunctionComponent, ReactElement } from 'react';

interface ProductListProps {
  products: Product[];
}

const ProductList: FunctionComponent<ProductListProps> = ({ products }: ProductListProps): ReactElement => (

  <div>

    <div className="bg-white border border-gray-100 inline-block mt-2 p-4 rounded shadow-md">

      <table className="table-fixed">

        <thead>
          <tr>
            <th className="text-left w-3/4">Product</th>
            <th className="text-right w-1/4">Price (₹)*</th>
          </tr>
        </thead>

        <tbody>

          {

            products.map((product: Product): JSX.Element => (

              <tr key={product.name}>
                <td className="text-left">{product.name} {product.otherNames.length ? <span className="text-gray-500 text-xs">({product.otherNames.join(', ')})</span> : ''}</td>
                <td className="text-right">{product.rate} / {product.unit}</td>
              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

    <p className="mt-2 px-2 text-xs">* <strong>Prices are indicative</strong> and depend on the quality, quantity and demand of harvest.</p>

  </div>

);

export default ProductList;
