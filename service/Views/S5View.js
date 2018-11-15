import React, {
    Component
} from 'react';

import {
    View,
    Text
} from 'react-native';

//5）lamda表达式
export default class S5View extends Component {


  render() {
    var allJobs = [{id: 1, isSelected: true}, {id: 2, isSelected: true}, {id: 3, isSelected: false}];
    var selected = allJobs.filter(job => job.isSelected);
    console.log(selected[0].id);

    //()=>console.log('baobao');

    var values = [1, 2, 3];
    var total = values.reduce((a, b) => a + b, 0);
    console.log(total);

    //=>右边为一个对象时，要使用({})
    //var chewToys = puppies.map(puppy => {});    //bug
    //var chewToys = puppies.map(puppy => ({});   //right

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
        <Text>{total}</Text>
      </View>
      );
  }
}