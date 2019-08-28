import React from 'react';
import PropTypes from 'prop-types';
import { List, Modal,Button } from 'antd-mobile';

const alert = Modal.alert;
const Item = List.Item;

const ProductList = ({ onDelete,products }) => {
    return (
        <List>
            {
                products.map((product,p) => {
                    return (
                        <Item
                            key={p}
                            extra={
                                <Button
                                    type="ghost" 
                                    size="small" 
                                    inline
                                    onClick={() =>
                                        alert('Delete', 'Are you sure???', [
                                            { text: 'Cancel'},
                                            { text: 'Ok', onPress: () => onDelete(product.id)},
                                        ])
                                    }
                                >
                                    Delete
                                </Button>
                            }
                        >
                            {product.name}
                        </Item>
                    )
                })
            }
      </List>
    )
}

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

export default ProductList;
