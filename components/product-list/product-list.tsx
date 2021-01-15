import { PRODUCTS } from '@constants/products';
import { Product } from '@interfaces/product';
import styles from './product-list.module.scss';

interface ProductListProps { }

const ProductList: (props: ProductListProps) => JSX.Element = (): JSX.Element => (

  <div className={styles.productList}>

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

    <p className="mt-2 px-2 text-xs">* <strong>Prices are indicative</strong> and depend on the quality, quantity and demand of harvest.</p>

  </div>

);

export default ProductList;
