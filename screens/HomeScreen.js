import React from 'react';
import {ScrollView,TouchableOpacity,View,ActivityIndicator} from 'react-native';
import {Content,Left,Text,Card} from 'native-base';
import CountDown from 'react-native-countdown-component';
import {Image} from 'react-native-elements';
class HomeScreen extends React.Component {
  static navigationOptions = {
  title:'Restaurent App',
  };

  render() {
    return (
      <ScrollView>
      <View  style={{height: 780,backgroundColor:'#f2efef'}} >
     
      <View style={{paddingTop:20,paddingRight:10,paddingLeft:10}}>
         <TouchableOpacity>
           <Card  style={{height: 165,flexDirection:'row',paddingRight:5}} >
              <Left>
              <Image style={{ width: 150, height: 165}}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yvD4oy8DgQNigW4tNW7sIsEPehI56tCJedV4FVi8xiPBzNPubQ' }}
               PlaceholderContent={<ActivityIndicator />}/>
                </Left>
                <Content style={{paddingRight:15,paddingTop:10}}> 
                <View style={{flexDirection: 'row'}}>  
                <View style={{width:100}}>
                <Text>Salads,Soups&Chilly</Text>
                </View>
                <View style={{paddingLeft:28,paddingTop:1}}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={{paddingTop:15}}>
                <Text note>Chicken-salad,Fish-soup,Fish-bonanza,PorkMeal,Meat-Soups.Etc.,</Text>
                </View>
               
                <View style={{flexDirection:'row'}}>
                <View  style={{paddingTop:7.5}}>
                <Text>Ends In :</Text>
                </View>
                <View style={{paddingLeft:0}}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: null, m: null, s: null}}/>
                 </View>
                 </View>
                </Content>
              
            </Card>
            </TouchableOpacity>
            </View>
            <View style={{paddingTop:20,paddingRight:10,paddingLeft:10}}>
            <TouchableOpacity>
            <Card style={{height: 165,flexDirection:'row',paddingRight:5}} >
            <Left>
              <Image style={{width: 150, height: 165,backgroundColor:'red'}}
               source={{ uri: 'https://img.goldbelly.com/uploads/product_image/image/22592/rib-and-bbq-combo.644a3c5cff758efbcc7a2642b3714503.jpg?ixlib=rails-3.0.2&w=820&h=820' }}
               PlaceholderContent={<ActivityIndicator />}/>
              
              </Left>
              <Content style={{paddingRight:15,paddingTop:10}}> 
                <View style={{flexDirection: 'row'}}>  
                <View style={{width:100}}>
                <Text>SmokeHouse Combos</Text>
                </View>
                <View style={{paddingLeft:28,paddingTop:1}}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={{paddingTop:15}}>
                <Text note>Smokey-Grills,Firey-Grills,HotFist-Rolls,Fire-drop-Sausage,etc.,</Text>
                </View>
               
                <View style={{flexDirection:'row'}}>
                <View  style={{paddingTop:7.5}}>
                <Text>Ends In :</Text>
                </View>
                <View style={{paddingLeft:0}}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: null, m: null, s: null}}/>
                 </View>
                 </View>
                </Content>
           
           
            </Card>
            </TouchableOpacity>
            </View>
            <View style={{paddingTop:20,paddingRight:10,paddingLeft:10}}>
            <TouchableOpacity>
           <Card style={{height: 165,flexDirection:'row',paddingRight:5}}>
          
              <Left>
              <Image style={{ width: 150, height: 165}}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjquoYRMjywBxMe0VLlWtV_F3ol1F2NeHlea8gW-3mVFTFzB6XyQ' }}
               PlaceholderContent={<ActivityIndicator />}/>
            
              </Left>
              <Content style={{paddingRight:15,paddingTop:10}}> 
                <View style={{flexDirection: 'row'}}>  
                <View style={{width:100}}>
                <Text>Chicken & Sea-Foods</Text>
                </View>
                <View style={{paddingLeft:28,paddingTop:1}}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={{paddingTop:15}}>
                <Text note>Firey-Chicken,Devil,Chicken,Sting-Burger,Chicken-Sausage.Etc.,</Text>
                </View>
               
                <View style={{flexDirection:'row'}}>
                <View  style={{paddingTop:7.5}}>
                <Text>Ends In :</Text>
                </View>
                <View style={{paddingLeft:0}}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: null, m: null, s: null}}/>
                 </View>
                 </View>
                </Content>
           
            </Card>
            </TouchableOpacity>
            </View>
            <View style={{paddingTop:20,paddingRight:10,paddingLeft:10}}>
            <TouchableOpacity>
           <Card style={{height: 165,flexDirection:'row',paddingRight:5}}>
         
              <Left>
              <Image style={{ width: 150, height: 165}}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeN9HP_MHP2pLMy5xL2tlBh6UAHh47jSu31wlUDtHJft3ZaZhXNw' }}
               PlaceholderContent={<ActivityIndicator />}/>
           
              </Left>

              <Content style={{paddingRight:15,paddingTop:10}}> 
                <View style={{flexDirection: 'row'}}>  
                <View style={{width:100}}>
                <Text>Party-Platter Add-Ons</Text>
                </View>
                <View style={{paddingLeft:28,paddingTop:1}}>
                <Text style={{color:'deepskyblue'}}>$8.00</Text>
                </View>
                </View>
                <View style={{paddingTop:15}}>
                <Text note>King-Pizza,Twin-Tower-Burger,Family-Gathered-Bonanza,Multi-Dish-Cuisine.Etc.,</Text>
                </View>
               
                <View style={{flexDirection:'row'}}>
                <View  style={{paddingTop:7.5}}>
                <Text>Ends In :</Text>
                </View>
                <View style={{paddingLeft:0}}>
                <CountDown digitStyle	=  {{backgroundColor:null,background:null,size:40}}
                 until={1000}
                 onFinish={() => alert('Finished')}
                 timeToShow={['H', 'M', 'S']}
                 timeLabels={{h: null, m: null, s: null}}/>
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

export default HomeScreen;
