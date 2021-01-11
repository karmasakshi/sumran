import { PRODUCTS } from '../../constants/products';
import { Product } from '../../interfaces/product';

interface ProductListProps { };

const ProductList: (props: ProductListProps) => JSX.Element = (): JSX.Element => (

  <section>

    <div className="bg-white border border-gray-100 inline-block mt-4 p-4 rounded shadow-lg">

      <table className="table-fixed text-base">

        <thead>
          <tr>
            <th className="text-left w-3/4">Product</th>
            <th className="text-right w-1/4">Price (₹)*</th>
          </tr>
        </thead>

        <tbody>
          {
            PRODUCTS.map((product: Product): JSX.Element => (
              <tr key={product.name}>
                <td className="text-left">{product.name} {product.otherNames.length ? <span className="text-gray-500 text-xs">({product.otherNames.join(', ')})</span> : ''}</td>
                <td className="text-right">{product.rate} / {product.unit}</td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>

    <p className="block mt-2 text-xs">* Prices are indicative and depend on the quality, quantity and demand of harvest.<br />Final price will be communicated to you upon inquiry.</p>

  </section>

);

export default ProductList;
