// 1つ目のAPIリクエスト
const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
  .then(response => response.json());

// 2つ目のAPIリクエスト
const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m')
  .then(response => response.json());

// 両方のリクエストが完了したら処理を実行
Promise.all([request1, request2])
  .then(data => {
    const data1 = data[0]; // 1つ目のAPIのレスポンスデータ
    const data2 = data[1]; // 2つ目のAPIのレスポンスデータ

    const today = data1.forecasts[0];
    const tommorow = data1.forecasts[1];
    

    const todaysWeather = today.detail.weather;
    const tommorowsWeather = tommorow.detail.weather;
    const todayElementId = 'todaysWeather';
    const tommorowElementId = 'tommorowsWeather';
    const todayElement = document.getElementById(todayElementId);
    const tommorowElement = document.getElementById(tommorowElementId);

    // ここで両方のデータを使用して処理を行う
    console.log(data1.title);
    console.log(data1.forecasts[0].detail);
    console.log(data2);
    todayElement.innerHTML = todaysWeather;
    tommorowElement.innerHTML = tommorowsWeather;

  });
