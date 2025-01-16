import {View,Text,StyleSheet,Image} from 'react-native';
interface propsI {
  id:number,
  name:string,
  category:string,
  price:string,
  stock:string,
  image:string,
  description:string

}

const Products = (props) =>{
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri:`${props.image}`}} style={styles.img}/>
      <View style={styles.cardContainer}>
        <Text>{props.name}</Text>
        <Text>{props.desc}</Text>
        <View style={styles.footer}>
          <Text>Stock: {props.stock}</Text>
          <Text>Price: {props.price}</Text>
        </View>
      </View>
    </View>
  )
}

export default Products;

const styles = StyleSheet.create({
  cardContainer:{
    backgroundColor:'white',
    marginBottom:10,
    borderRadius:10
  },
  img:{
    width:250,
    height:100,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  footer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'

  }
})