import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import {Content,Left,Text,Card} from 'native-base';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Image, Rating, AirbnbRating } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import {ScrollView,TouchableOpacity,View,ActivityIndicator,StyleSheet,Platform,
AsyncStorage} from 'react-native';

 class FoodScreen extends React.Component {
    static navigationOptions = {
        title: 'FoodScreen',
      };
      ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }
      ratingFinished(val){
        console.log(val)
        AsyncStorage.getItem('my_rating')
        .then((res)=>{
          console.log("already stored ... ",JSON.stringify(val))
            AsyncStorage.setItem('my_rating', JSON.stringify(val))
        })
      }
     
    render() {
      return (
        <View style={{
          height: hp('150%'),
          backgroundColor:'#f2efef'}}>
              <View style={{
              paddingTop: hp('1.8%'),
              paddingRight:wp('4%'),
              paddingLeft:wp('4%')}}>
                      <Card style={{
                            flexDirection:'column',
                            height: hp('50%'),
                            width: wp('90.8%')}}>
         <Image style={{width: wp('90.8%'),height: hp('24%'),}}source={require('../assets/images/burger.jpg')}/>
                  <View style={{display:'flex',
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: 10}}>
         <View style={{display:'flex',
                       flex:1,
                       textAlign: 'left'}}>  
         <Text style={{fontWeight: 'bold',fontSize:25}}>
           Burger Combos
         </Text>
         </View>
         <View style={{display:'flex',
                       flex:1,
                       flexDirection:'row',
                       justifyContent:'space-between'}}>  
                     
          <Text note style={{fontSize:20,alignSelf:'flex-start'}}>
           Restaurent
         </Text>
         <Text style={{color:'deepskyblue'}}>$8.00</Text>
           
         </View>
        
         <View style={{display:'flex',
                       flexDirection: 'row',
                       alignSelf:'flex-start'}}>

         <Text style={{marginTop:hp('1.27%')}}>Ends In :</Text>
                             
         <CountDown digitStyle	=  {{backgroundColor:"#f1f2f6",background:null,size:40}}
                    until={1000} 
                    onFinish={() => alert('Finished')}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{h: null, m: null, s: null}}/>
        
         </View>
         <View style={{display:'flex',
                       flexDirection: 'row',
                       alignSelf:'flex-start',
                       paddingTop: hp('2%')}}>
                       <View style={{paddingTop:hp('0.3%')}}>
         <Text>Ratings :</Text>
         </View>
         <View style={{paddingLeft:wp('1%')}}>
         <AirbnbRating count={5}
                       defaultRating={0}
                       showRating={false}
                       onFinishRating={this.ratingFinished}
                       size={20}/>
                       </View>
                       <View>
                         <Text>
                           
                         </Text>
                       </View>
         </View>
        
        
         </View>
         </Card>
         
         </View>
         <View style={{ paddingTop: hp('1.8%'),
                        paddingRight:wp('4%'),
                        paddingLeft:wp('4%'),
                        flexDirection:'row',
                        justifyContent:'space-between'}}>
         <Card style={{ height: hp('10%'),
                        width: wp('20.2%')}}>
         <View style={{paddingLeft:wp('8.05%'),paddingTop:hp('2%')}}>
          <TabBarIcon 
             
              name={Platform.OS === 'ios' ? 'ios-watch' : 'md-watch'}/>
              
            </View>
            <Text style={{paddingLeft:wp('1.6%'),paddingTop:hp('1.3%'),color:'deepskyblue'}}>
                6pm-9pm
              </Text>
          </Card>
          <Card style={{ height: hp('10%'),
                        width: wp('20.2%')}}>
          <View style={{paddingLeft:wp('7.2%'),paddingTop:hp('2%')}}>
          <TabBarIcon
              name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}/>
            
            </View>
            <Text style={{paddingLeft:wp('5%'),paddingTop:hp('1.3%'),color:'deepskyblue'}}>
                Direct
              </Text>
          </Card>
          <Card style={{ height: hp('10%'),
                        width: wp('20.2%')}}>
          <View style={{paddingLeft:wp('7.4%'),paddingTop:hp('2.2%')}}>
          <TabBarIcon style={{paddingLeft:wp('50%')}}
              name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}/>
            
            </View>
            <Text style={{paddingLeft:wp('2.6%'),paddingTop:hp('1.2%'),color:'deepskyblue'}}>
                call-Now
              </Text>
          </Card>
          <Card style={{ height: hp('10%'),
                        width: wp('20.2%')}}>
           <View style={{paddingLeft:wp('8.4%'),paddingTop:hp('2%')}}>
          <TabBarIcon style={{paddingLeft:wp('50%')}}
              name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}/>
             
           </View> 
           <Text style={{paddingLeft:wp('1.2%'),paddingTop:hp('1.3%'),color:'deepskyblue'}}>
                Bookmark
              </Text>
          </Card>
         </View>
        </View>
      );
    }
  }

  export default FoodScreen;