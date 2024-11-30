import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/Slice';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.Product);
  console.log(JSON.stringify(products));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Products
        </Text>
      </View>
      <FlatList data={products.data} renderItem={({ item }) => {
        return (
          <View style={styles.listContainer}>
            <Image source={{ uri: item.image }} style={styles.imageStyle} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <View style={styles.addToCartButtonContainer}>
                <TouchableOpacity style={{
                  width: '50%',
                  backgroundColor: 'green',
                  borderRadius: 10,
                  opacity: 0.8,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{ color: 'white' }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width: '20%',
                  backgroundColor: 'green',
                  borderRadius: 10,
                  opacity: 0.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10
                }}>
                  <Text style={{ color: 'white' }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 400, alignSelf: 'center' }}>{'0'}</Text>
                <TouchableOpacity style={{
                  width: '20%',
                  backgroundColor: 'green',
                  borderRadius: 10,
                  opacity: 0.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10
                }}>
                  <Text style={{ color: 'white' }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

        )
      }} />



    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    backgroundColor: 'white',
    paddingLeft: 20

  },
  headingText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 700
  },
  listContainer: {
    width: '96%',
    height: 120,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 10

  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  addToCartButtonContainer: {
    width: '60%',
    height: 40,
    flexDirection: 'row',

  }

})