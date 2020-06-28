import product from '../../pages/api/product';
import { Item, ItemGroup, Label } from 'semantic-ui-react';
import AddProductToCart from './AddProductToCart';

const ProductSummary = ({ name, mediaUrl, _id, price, sku }) => {
  console.log({ name, mediaUrl, _id, price, sku, line: 'productSummary 6' });

  return (
    <>
      <ItemGroup>
        <Item>
          {' '}
          <Item.Content>
            <Item.Image size='medium' src={mediaUrl} />
            <Item.Header> {name}</Item.Header>
            <Item.Description>
              <p>${price}</p>
              <Label>SKU: {sku}</Label>
            </Item.Description>
            <Item.Extra>
              <AddProductToCart productId={_id} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </ItemGroup>
    </>
  );
};

export default ProductSummary;
