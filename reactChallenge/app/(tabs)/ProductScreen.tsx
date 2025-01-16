import {View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import {useState,useEffect} from 'react';
import products1 from './products.json';
import Products from './index';
const ProductScreen = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        setProducts(products);
    },[])
    return(
        <ScrollView>
            <View>
                <Text>Top Products Of 2020</Text>
                <FlatList
                    data={products1}
                    renderItem={({item})=> (
                        <Products
                            name={item.name}
                            price={item.price}
                            stock={item.stock}
                            image={item.image}
                        />

                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ScrollView>
    )
}

export default ProductScreen;