import React from 'react';
import {ScrollView,TouchableOpacity,View,ActivityIndicator,StyleSheet,Platform} from 'react-native';
import {Content,Left,Text,Card} from 'native-base';
import CountDown from 'react-native-countdown-component';
import {Image} from 'react-native-elements';
import TabBarIcon from '../components/TabBarIcon';
import FoodScreen from './FoodScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'



class HomeScreen extends React.Component {
  static navigationOptions = {
    
  title:'Restaurent App',
  };

  render() {
    // const { navigate } = this.props.navigation;
    // const HomeScreen = createStackNavigator({
    //   Home: { screen: HomeScreen },
    //   FoodScreen: { screen: FoodScreen },
    // });
    return (
      <ScrollView>
      <View  style={styles.content} >
     
      <View style={styles.container}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('FoodScreen')}>
           <Card  style={styles.card}  >
              <Left>
              <Image style={styles.image}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yvD4oy8DgQNigW4tNW7sIsEPehI56tCJedV4FVi8xiPBzNPubQ' }}
               PlaceholderContent={<ActivityIndicator />}/>
                </Left>
                <Content style={styles.cardbody}> 
                <View style={styles.heading}>  
                <View style={styles.heads}>
                <Text>Salads,Soups&Chilly</Text>
                </View>
                <View style={styles.rate}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description}>
                <Text note>Chicken-salad,Fish-soup,Fish-bonanza,PorkMeal,Meat-Soups.Etc.,</Text>
                </View>
               
                <View style={styles.countdown}>
                <View  style={styles.endsin}>
                <Text >Ends In :</Text>
                </View>
                <View style={styles.timer}>
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
            <View>
            <Card  style={styles.btmcard} >
              <View style={styles.icnm1}>
              <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}/>
                <View style={styles.texton}>
                <Text style={{color:'green'}}>CallNow</Text>
                </View>
                </View>
                <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}/>
                  <View style={styles.texton}>
                <Text  style={{color:'orange'}}>Show Directions</Text>
                </View>
                </View>
                </View>
            </Card>
            </View>
            </View>
            <View style={styles.container}>
            <TouchableOpacity>
            <Card style={styles.card} >
            <Left>
              <Image style={styles.image}
               source={{ uri: 'https://img.goldbelly.com/uploads/product_image/image/22592/rib-and-bbq-combo.644a3c5cff758efbcc7a2642b3714503.jpg?ixlib=rails-3.0.2&w=820&h=820' }}
               PlaceholderContent={<ActivityIndicator />}/>
              
              </Left>
              <Content style={styles.cardbody}> 
                <View style={styles.heading}>  
                <View style={styles.heads}>
                <Text>SmokeHouse Combos</Text>
                </View>
                <View style={styles.rate}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description}>
                <Text note>Smokey-Grills,Firey-Grills,HotFist-Rolls,Fire-drop-Sausage,etc.,</Text>
                </View>
               
                <View style={styles.countdown}>
                <View  style={styles.endsin}>
                <Text>Ends In :</Text>
                </View>
                <View style={styles.timer}>
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
            <View>
            <Card  style={styles.btmcard} >
              <View style={styles.icnm1}>
              <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}/>
                <View style={styles.texton}>
                <Text style={{color:'green'}}>CallNow</Text>
                </View>
                </View>
                <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}/>
                  <View style={styles.texton}>
                <Text  style={{color:'orange'}}>Show Directions</Text>
                </View>
                </View>
                </View>
            </Card>
            </View>
            </View>
            <View style={styles.container}>
            <TouchableOpacity>
           <Card style={styles.card}>
          
              <Left>
              <Image style={styles.image}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjquoYRMjywBxMe0VLlWtV_F3ol1F2NeHlea8gW-3mVFTFzB6XyQ' }}
               PlaceholderContent={<ActivityIndicator />}/>
            
              </Left>
              <Content style={styles.cardbody}> 
                <View style={styles.heading}>  
                <View style={styles.heads}>
                <Text>Chicken & Sea-Foods</Text>
                </View>
                <View style={styles.rate}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description}>
                <Text note>Firey-Chicken,Devil,Chicken,Sting-Burger,Chicken-Sausage.Etc.,</Text>
                </View>
               
                <View style={styles.countdown}>
                <View  style={styles.endsin}>
                <Text>Ends In :</Text>
                </View>
                <View style={styles.timer}>
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
            <View>
            <Card  style={styles.btmcard} >
              <View style={styles.icnm1}>
              <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}/>
                <View style={styles.texton}>
                <Text style={{color:'green'}}>CallNow</Text>
                </View>
                </View>
                <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}/>
                  <View style={styles.texton}>
                <Text  style={{color:'orange'}}>Show Directions</Text>
                </View>
                </View>
                </View>
            </Card>
            </View>
            </View>
            <View style={styles.container}>
            <TouchableOpacity>
           <Card style={styles.card}>
         
              <Left>
              <Image style={styles.image}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeN9HP_MHP2pLMy5xL2tlBh6UAHh47jSu31wlUDtHJft3ZaZhXNw' }}
               PlaceholderContent={<ActivityIndicator />}/>
           
              </Left>

              <Content style={styles.cardbody}> 
                <View style={styles.heading}>  
                <View style={styles.heads}>
                <Text>Party-Platter Add-Ons</Text>
                </View>
                <View style={styles.rate}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={styles.description}>
                <Text note>King-Pizza,Twin-Tower-Burger,Family-Gathered-Bonanza,Multi-Dish-Cuisine.Etc.,</Text>
                </View>
               
                <View style={styles.countdown}>
                <View  style={styles.endsin}>
                <Text>Ends In :</Text>
                </View>
                <View style={styles.timer}>
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
            <View>
            <Card  style={styles.btmcard} >
              <View style={styles.icnm1}>
              <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}/>
                <View style={styles.texton}>
                <Text style={{color:'green'}}>CallNow</Text>
                </View>
                </View>
                <View style={styles.icnm}>
            <TabBarIcon
                name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}/>
                  <View style={styles.texton}>
                <Text  style={{color:'orange'}}>Show Directions</Text>
                </View>
                </View>
                </View>
            </Card>
            </View>
           </View>
          
      </View>
      </ScrollView>
    );
  }
}
const Rootstack = createStackNavigator({
  HomeScreen: HomeScreen,
  FoodScreen: FoodScreen,
},
{
  initialRouteName: 'HomeScreen',
}

);
const AppContainer = createAppContainer(Rootstack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  content: {
    height: hp('150%'),
    backgroundColor:'#f2efef'
},
 
  container:{
    paddingTop: hp('3%'),
    paddingRight:wp('2.5%'),
    paddingLeft:wp('2.5%')
  },
  card:{
    flexDirection:'row',
    height: hp('24%'),
    paddingRight: wp('2.5%')
  },
  btmcard:{
    height: hp('6%'),
    paddingTop: hp('0.5%'),
   
  },
  icnm1:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft: wp('7%'),
    paddingRight: wp('10%'),
    paddingTop: hp('0.8%')
   },
  icnm:{
   flexDirection:'row',
   paddingLeft: wp('')
  },
  image:{
    width: wp('38.2%'), 
    height: hp('24%')
  },
  cardbody:{
    paddingRight: wp('3%'),
    paddingTop: hp('1.5%')
  },
  heading:{
    flexDirection: 'row'
  },
  heads: {
    width: wp('25%')
  },
  rate:{
    paddingLeft: wp('8.5%'),
    paddingTop: hp('1.5%')
  },
  description:{
    paddingTop: hp('1%'),
    minHeight:hp('8%')
  },
  countdown:{
    flexDirection:'row'
  },
  endsin:{
    paddingTop:hp('1%')
  },
  timer:{
    paddingLeft: wp('1%')
  },
  texton:{
    paddingLeft: wp('2%'),
    paddingTop: hp('0.3%')
  }
  
});
// export default HomeScreen;
