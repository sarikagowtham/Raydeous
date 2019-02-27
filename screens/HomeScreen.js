import React from 'react';
import {ScrollView,TouchableOpacity,View,ActivityIndicator,StyleSheet,Platform} from 'react-native';
import {Content,Left,Text,Card} from 'native-base';
import CountDown from 'react-native-countdown-component';
import {Image} from 'react-native-elements';
import TabBarIcon from '../components/TabBarIcon';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

class HomeScreen extends React.Component {
  static navigationOptions = {
  title:'Restaurent App',
  };

  render() {
    return (
      <ScrollView>
      <View  style={styles.content1} >
     
      <View style={styles.container1}>
         <TouchableOpacity>
           <Card  style={styles.card1} >
              <Left>
              <Image style={styles.image1}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yvD4oy8DgQNigW4tNW7sIsEPehI56tCJedV4FVi8xiPBzNPubQ' }}
               PlaceholderContent={<ActivityIndicator />}/>
                </Left>
                <Content style={styles.cardbody1}> 
                <View style={styles.heading1}>  
                <View style={styles.heads1}>
                <Text>Salads,Soups&Chilly</Text>
                </View>
                <View style={styles.rate1}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description1}>
                <Text note>Chicken-salad,Fish-soup,Fish-bonanza,PorkMeal,Meat-Soups.Etc.,</Text>
                </View>
               
                <View style={styles.countdown1}>
                <View  style={styles.endsin1}>
                <Text >Ends In :</Text>
                </View>
                <View style={styles.timer1}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: 'Hrs', m: 'Mins', s: 'Secs'}}/>
                 </View>
                 </View>
                </Content>
              
            </Card>
            </TouchableOpacity>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity>
            <Card style={styles.card2} >
            <Left>
              <Image style={styles.image2}
               source={{ uri: 'https://img.goldbelly.com/uploads/product_image/image/22592/rib-and-bbq-combo.644a3c5cff758efbcc7a2642b3714503.jpg?ixlib=rails-3.0.2&w=820&h=820' }}
               PlaceholderContent={<ActivityIndicator />}/>
              
              </Left>
              <Content style={styles.cardbody2}> 
                <View style={styles.heading2}>  
                <View style={styles.heads2}>
                <Text>SmokeHouse Combos</Text>
                </View>
                <View style={styles.rate2}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description2}>
                <Text note>Smokey-Grills,Firey-Grills,HotFist-Rolls,Fire-drop-Sausage,etc.,</Text>
                </View>
               
                <View style={styles.countdown2}>
                <View  style={styles.endsin1}>
                <Text>Ends In :</Text>
                </View>
                <View style={styles.timer2}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: 'Hrs', m: 'Mins', s: 'Secs'}}/>
                 </View>
                 </View>
                </Content>
           
           
            </Card>
            </TouchableOpacity>
            </View>
            <View style={styles.container3}>
            <TouchableOpacity>
           <Card style={styles.card3}>
          
              <Left>
              <Image style={styles.image3}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjquoYRMjywBxMe0VLlWtV_F3ol1F2NeHlea8gW-3mVFTFzB6XyQ' }}
               PlaceholderContent={<ActivityIndicator />}/>
            
              </Left>
              <Content style={styles.cardbody3}> 
                <View style={styles.heading3}>  
                <View style={styles.heads3}>
                <Text>Chicken & Sea-Foods</Text>
                </View>
                <View style={styles.rate3}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description3}>
                <Text note>Firey-Chicken,Devil,Chicken,Sting-Burger,Chicken-Sausage.Etc.,</Text>
                </View>
               
                <View style={styles.countdown3}>
                <View  style={styles.endsin1}>
                <Text>Ends In :</Text>
                </View>
                <View style={styles.timer3}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: 'Hrs', m: 'Mins', s: 'Secs'}}/>
                 </View>
                 </View>
                </Content>
           
            </Card>
            </TouchableOpacity>
            <View style={styles.btmcard} >
            <Card>
              <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>
                <Text>-CallNow</Text>
                </View>
            </Card>
            </View>
            </View>
            <View style={styles.container4}>
            <TouchableOpacity>
           <Card style={styles.card4}>
         
              <Left>
              <Image style={styles.image4}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeN9HP_MHP2pLMy5xL2tlBh6UAHh47jSu31wlUDtHJft3ZaZhXNw' }}
               PlaceholderContent={<ActivityIndicator />}/>
           
              </Left>

              <Content style={styles.cardbody4}> 
                <View style={styles.heading4}>  
                <View style={styles.heads4}>
                <Text>Party-Platter Add-Ons</Text>
                </View>
                <View style={styles.rate4}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description4}>
                <Text note>King-Pizza,Twin-Tower-Burger,Family-Gathered-Bonanza,Multi-Dish-Cuisine.Etc.,</Text>
                </View>
               
                <View style={styles.countdown4}>
                <View  style={styles.endsin1}>
                <Text>Ends In :</Text>
                </View>
                <View style={styles.timer4}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: 'Hrs', m: 'Mins', s: 'Secs'}}/>
                 </View>
                 </View>
                </Content>
            
            </Card>
            </TouchableOpacity>
           </View>
          
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  content1: {
    height: hp('115%'),
    backgroundColor:'#f2efef'
},
  container1:{
    paddingTop: hp('3%'),
    paddingRight:wp('2.5%'),
    paddingLeft:wp('2.5%')
  },
  card1:{
    flexDirection:'row',
    height: hp('24%'),
    paddingRight: wp('2.5%')
  },
  image1:{
    width: wp('38.2%'), 
    height: hp('24%')
  },
  cardbody1:{
    paddingRight: wp('3%'),
    paddingTop: hp('1.5%')
  },
  heading1:{
    flexDirection: 'row'
  },
  heads1: {
    width: wp('25%')
  },
  rate1:{
    paddingLeft: wp('8.5%'),
    paddingTop: hp('1.5%')
  },
  description1:{
    paddingTop: hp('1%'),
    minHeight:hp('8%')
  },
  countdown1:{
    flexDirection:'row'
  },
  endsin1:{
     marginTop:hp('1.4%')
  },
  timer1:{
    paddingLeft: wp('1%')
  },

  container2:{
    paddingTop: hp('3%'),
    paddingRight:wp('2.5%'),
    paddingLeft:wp('2.5%')
  },
  card2:{
    flexDirection:'row',
    height: hp('24%'),
    paddingRight: wp('2.5%')
  },
  icnm:{
   flexDirection:'row'
  },
  image2:{
    width: wp('38.2%'), 
    height: hp('24%')
  },
  cardbody2:{
    paddingRight: wp('3%'),
    paddingTop: hp('1.5%')
  },
  heading2:{
    flexDirection: 'row'
  },
  heads2: {
    width: wp('25%')
  },
  rate2:{
    paddingLeft: wp('8.5%'),
    paddingTop: hp('1.5%')
  },
  description2:{
    paddingTop: hp('1%'),
    minHeight:hp('8%')
  },
  countdown2:{
    flexDirection:'row'
  },
  endsin2:{
    paddingTop:hp('1%')
  },
  timer2:{
    paddingLeft: wp('1%')
  },

  
  container3:{
    paddingTop: hp('3%'),
    paddingRight:wp('2.5%'),
    paddingLeft:wp('2.5%')
  },
  card3:{
    flexDirection:'row',
    height: hp('24%'),
    paddingRight: wp('2.5%')
  },
  image3:{
    width: wp('38.2%'), 
    height: hp('24%')
  },
  cardbody3:{
    paddingRight: wp('3%'),
    paddingTop: hp('1.5%')
  },
  heading3:{
    flexDirection: 'row'
  },
  heads3: {
    width: wp('25%')
  },
  rate3:{
    paddingLeft: wp('8.5%'),
    paddingTop: hp('1.5%')
  },
  description3:{
    paddingTop: hp('1%'),
    minHeight:hp('8%')
  },
  countdown3:{
    flexDirection:'row'
  },
  endsin3:{
    paddingTop:hp('1%')
  },
  timer3:{
    paddingLeft: wp('1%')
  },

  
  container4:{
    paddingTop: hp('3%'),
    paddingRight:wp('2.5%'),
    paddingLeft:wp('2.5%')
  },
  card4:{
    flexDirection:'row',
    height: hp('24%'),
    paddingRight: wp('2.5%')
  },
  image4:{
    width: wp('38.2%'), 
    height: hp('24%')
  },
  cardbody4:{
    paddingRight: wp('3%'),
    paddingTop: hp('1.5%')
  },
  heading4:{
    flexDirection: 'row'
  },
  heads4: {
    width: wp('25%')
  },
  rate4:{
    paddingLeft: wp('8.5%'),
    paddingTop: hp('1.5%')
  },
  description4:{
    paddingTop: hp('1%'),
    minHeight:hp('8%')
  },
  countdown4:{
    flexDirection:'row'
  },
  endsin4:{
    paddingTop:hp('1%')
  },
  timer4:{
    paddingLeft: wp('1%')
  }
  
});
export default HomeScreen;
