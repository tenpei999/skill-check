// 1つ目のAPIリクエスト
const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
  .then(response => response.json());

// 2つ目のAPIリクエスト
const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo')
  .then(response => response.json());

// 両方のリクエストが完了したら処理を実行
Promise.all([request1, request2])
  .then(data => {
    const data1 = data[0]; // 1つ目のAPIのレスポンスデータ
    const data2 = data[1]; // 2つ目のAPIのレスポンスデータ

    //１週間分の日付
    const today = data1.forecasts[0]; //今日
    const tommorow = data1.forecasts[1]; //明日
    const dayAfterTommorow = data2.daily.time[2]; //明後日
    const fourDaysLater = data2.daily.time[3];  //4日後
    const fiveDaysLater = data2.daily.time[4]; //5日後
    const sixDaysLater = data2.daily.time[5]; //6日後
    const oneWeekLater = data2.daily.time[6]; //7日後
    const hoge = data2.daily; //7日後

    // 天気
    const todaysWeather = today.detail.weather;
    const tommorowsWeather = tommorow.detail.weather;
    const dayAfterTommorowsWeather = data2.daily.weathercode[2];
    const fourDaysLatersWeather = data2.daily.weathercode[3];
    const fiveDaysLatersWeather = data2.daily.weathercode[4];
    const sixDaysLatersWeather = data2.daily.weathercode[5];
    const oneWeekLatersWeather = data2.daily.weathercode[6];

    //最高気温
    const todaysMaxTemp = today.temperature.max;
    const tommorowsMaxTemp = tommorow.temperature.max;
    const dayAfterTommorowsMaxTemp = data2.daily.temperature_2m_max[2]; 
    const fourDaysLatersMaxTemp = data2.daily.temperature_2m_max[3]; 
    const fiveDaysLatersMaxTemp = data2.daily.temperature_2m_max[4]; 
    const sixDaysLatersMaxTemp = data2.daily.temperature_2m_max[5]; 
    const oneWeekLatersMaxTemp = data2.daily.temperature_2m_max[6]; 

    //最低気温
    const todaysMinTemp = today.temperature.min;
    const tommorowsMinTemp = tommorow.temperature.min;
    const dayAfterTommorowsMinTemp = data2.daily.temperature_2m_min[2]; 
    const fourDaysLatersMinTemp = data2.daily.temperature_2m_min[3]; 
    const fiveDaysLatersMinTemp = data2.daily.temperature_2m_min[4]; 
    const sixDaysLatersMinTemp = data2.daily.temperature_2m_min[5]; 
    const oneWeekLatersMinTemp = data2.daily.temperature_2m_min[6]; 

    const todayElementId = 'todaysWeather';
    const tommorowElementId = 'tommorowsWeather';
    const todayElement = document.getElementById(todayElementId);
    const tommorowElement = document.getElementById(tommorowElementId);

    // ここで両方のデータを使用して処理を行う
    console.log(data1.title);
    console.log(dayAfterTommorow);
    console.log(fourDaysLater);
    console.log(fiveDaysLater);
    console.log(sixDaysLater);
    console.log(oneWeekLater);

    console.log(dayAfterTommorowsWeather);
    console.log(fourDaysLatersWeather);
    console.log(fiveDaysLatersWeather);
    console.log(sixDaysLatersWeather);
    console.log(oneWeekLatersWeather);

    console.log(todaysMaxTemp);
    console.log(tommorowsMaxTemp);
    console.log(dayAfterTommorowsMaxTemp);
    console.log(fourDaysLatersMaxTemp);
    console.log(fiveDaysLatersMaxTemp);
    console.log(sixDaysLatersMaxTemp);
    console.log(oneWeekLatersMaxTemp);

    console.log(todaysMinTemp);
    console.log(tommorowsMinTemp);
    console.log(dayAfterTommorowsMinTemp);
    console.log(fourDaysLatersMinTemp);
    console.log(fiveDaysLatersMinTemp);
    console.log(sixDaysLatersMinTemp);
    console.log(oneWeekLatersMinTemp);


    console.log(data1.forecasts[0].detail);
    console.log(data2);
    console.log(hoge);
    todayElement.innerHTML = todaysWeather;
    tommorowElement.innerHTML = tommorowsWeather;

  });
