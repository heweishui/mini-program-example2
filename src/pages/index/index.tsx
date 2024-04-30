import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {

  useLoad(() => {
    console.log("Page loaded.");
  });

  const canvasToTempFilePath = () => {
    let inputData = {
      x: 100,
      y: 200,
      width: 50,
      height: 50,
      destWidth: 100,
      destHeight: 100,
      canvasId: "myCanvas",
    };
    Taro.canvasToTempFilePath(
      {
        ...inputData,
        success: (res) => {
          console.log('succses',res)
        },
        fail: (res) => {
          console.log('fail',res)
        },
        complete: (res) => {
          console.log('complete',res)
        },
      },
    ).then((res) => {
      console.log('then',res)
    });
  };

  const NavigateTo = () =>{
    Taro.navigateTo({
      url:'page/index/111'
    })
    Taro.onPageNotFound(()=>{
      console.log('1111111')
    })
  }
  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Button onClick={canvasToTempFilePath}>canvasToTempFilePath</Button>
      <Button onClick={NavigateTo}>NavigateTo</Button>
    </View>
  );
}
