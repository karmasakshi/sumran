import { PRODUCTS } from '../../constants/products';
import { Product } from '../../interfaces/product';

interface ProductListProps { };

const ProductList: (props: ProductListProps) => JSX.Element = (): JSX.Element => (

  <section>

    <div className="inline-block p-8 rounded shadow-lg">

      <table className="table-fixed text-lg">

        <thead>
          <tr>
            <th className="text-left w-3/4">Product</th>
            <th className="w-1/4">Price (₹)*</th>
          </tr>
        </thead>

        {

          PRODUCTS.map((product: Product): JSX.Element => (

            <tbody>
              <tr>
                <td className="text-left">{product.name} {product.otherNames.length ? <span className="text-gray-400">({product.otherNames.join(', ')})</span> : ''}</td>
                <td>{product.rate} per {product.unit}</td>
              </tr>
            </tbody>

          ))

        }

      </table>

    </div>

    <p className="block mt-4 text-sm">* Prices are indicative and depend on the quality, quantity and demand of harvest.<br />Final price will be communicated to you upon inquiry.</p>

  </section>

);

export default ProductList;
