import { getWeatherInfo } from './hooks/getWeatherInfo.js';

window.addEventListener('DOMContentLoaded', () => {
  getWeatherInfo();
});

// 1つ目のAPIリクエスト
const request1 = fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
  .then(response => response.json());

// 2つ目のAPIリクエスト
const request2 = fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo')
  .then(response => response.json());

// 両方のリクエストが完了したら処理を実行
Promise.all([request1, request2])
  .then(data => {
    const data1 = data[0]; // 1つ目のAPIのレスポンスデータ
    const data2 = data[1]; // 2つ目のAPIのレスポンスデータ

    /*日付
    -----------------------*/
    //昨日の日付
    const yesterday = data2.daily.time[0];
    //今日の日付
    const today = data1.forecasts[0];
    //明日の日付
    const tommorow = data1.forecasts[1];
    //明後日の日付
    const dayAfterTommorow = data2.daily.time[3];
    const dayAfterTommorowElementId = 'dayAfterTommorow';
    const dayAfterTommorowElement = document.getElementById(dayAfterTommorowElementId);
    dayAfterTommorowElement.innerHTML = dayAfterTommorow;
    const threeDayLater = data2.daily.time[4];
    const threeDayLaterElementId = 'threeDayLater';
    const threeDayLaterElement = document.getElementById(threeDayLaterElementId);
    threeDayLaterElement.innerHTML = threeDayLater;
    //四日後の日付
    const fourDayLater = data2.daily.time[5];
    const fourDayLaterElementID = 'fourDayLater';
    const fourDayLaterElement = document.getElementById(fourDayLaterElementID);
    fourDayLaterElement.innerHTML = fourDayLater;
    //五日後の日付
    const fiveDayLater = data2.daily.time[6];
    const fiveDayLaterElementID = 'fiveDayLater';
    const fiveDayLaterElement = document.getElementById(fiveDayLaterElementID);
    fiveDayLaterElement.innerHTML = fiveDayLater;
    //六日目の日付
    const sixDayLater = data2.daily.time[7];
    const sixDayLaterElementID = 'sixDayLater';
    const sixDayLaterElement = document.getElementById(sixDayLaterElementID);
    sixDayLaterElement.innerHTML = sixDayLater;

    /*天気
    -----------------------*/
    //今日の天気
    const todaysWeather = today.detail.weather;
    const todaysWeatherElementId = 'todaysWeather';
    const todaysWeatherElement = document.getElementById(todaysWeatherElementId);
    todaysWeatherElement.innerHTML = todaysWeather;

    //明日の天気
    const tommorowsWeather = tommorow.detail.weather;
    const tommorowsWeatherElementId = 'tommorowsWeather';
    const tommorowsWeatherElement = document.getElementById(tommorowsWeatherElementId);
    tommorowsWeatherElement.innerHTML = tommorowsWeather;

    //明後日の天気
    const dayAfterTommorowWeatherID = data2.daily.weathercode[3];
    const dayAfterTommorowWeather = getWeatherInfo(dayAfterTommorowWeatherID).label;
    const dayAfterTommorowWeatherElementId = 'dayAfterTommorowWeather';
    const dayAfterTommorowWeatherElement = document.getElementById(dayAfterTommorowWeatherElementId);
    dayAfterTommorowWeatherElement.innerHTML = dayAfterTommorowWeather;

    //三日後の天気
    const threeDayLaterWeatherID = data2.daily.weathercode[4];
    const threeDayLaterWeather = getWeatherInfo(threeDayLaterWeatherID).label;
    const threeDaysLaterWeatherElementID = 'threeDayLaterWeather'
    const threeDayLaterWeatherElement = document.getElementById(threeDaysLaterWeatherElementID);
    threeDayLaterWeatherElement.innerHTML = threeDayLaterWeather;

    //四日後の天気
    const fourDayLaterWeatherID = data2.daily.weathercode[5];
    const fourDayLaterWeather = getWeatherInfo(fourDayLaterWeatherID).label;
    const fourDayLaterWeatherElementID = 'fourDayLaterWeather';
    const fourDaysLaterWeatherElement = document.getElementById(fourDayLaterWeatherElementID);
    fourDaysLaterWeatherElement.innerHTML = fourDayLaterWeather;

    //五日後の天気
    const fiveDayLaterWeatherID = data2.daily.weathercode[6];
    const fiveDayLaterWeather = getWeatherInfo(fiveDayLaterWeatherID).label;
    const fiveDayLaterWeatherElementID = 'fiveDayLaterWeather'
    const fiveDayLaterWeatherElement = document.getElementById(fiveDayLaterWeatherElementID);
    fiveDayLaterWeatherElement.innerHTML = fiveDayLaterWeather;

    //六日後の天気
    const sixDayLaterWeatherID = data2.daily.weathercode[7];
    const sixDayLaterWeather = getWeatherInfo(sixDayLaterWeatherID).label;
    const sixDayLaterWeatherElementID = 'sixDayLaterWeather'
    const sixDayLaterWeatherElement = document.getElementById(sixDayLaterWeatherElementID);
    sixDayLaterWeatherElement.innerHTML = sixDayLaterWeather;


    /*天気アイコン
    -----------------------------*/
    //今日の天気アイコン
    const todaysWeatherImg = today.image.url;
    const todaysWeatherImgElementId = 'todaysWeatherImg';
    const todaysWeatherImgElementIDParent = document.getElementById(todaysWeatherImgElementId);
    const todaysWeatherImgElementChild = document.createElement('img');
    todaysWeatherImgElementChild.src = todaysWeatherImg;
    todaysWeatherImgElementIDParent.appendChild(todaysWeatherImgElementChild);

    //明日の天気アイコン
    const tommorowsWeatherImg = tommorow.image.url;
    const tommorowsWeatherImgElementId = 'tommorowsWeatherImg';
    const tommorowsWeatherImgElementIDParent = document.getElementById(tommorowsWeatherImgElementId);
    const tommorowsWeatherImgElementChild = document.createElement('img');
    tommorowsWeatherImgElementChild.src = tommorowsWeatherImg;
    tommorowsWeatherImgElementIDParent.appendChild(tommorowsWeatherImgElementChild);

    //明後日の天気アイコン
    const dayAfterTommorowWeatherImg = getWeatherInfo(dayAfterTommorowWeatherID).icon;
    const dayAfterTommorowWeatherImgElementId = 'dayAfterTommorowWeatherImg';
    const dayAfterTommorowWeatherImgElementIDParent = document.getElementById(dayAfterTommorowWeatherImgElementId);
    const dayAfterTommorowWeatherImgElementChild = document.createElement('img');
    dayAfterTommorowWeatherImgElementChild.src = dayAfterTommorowWeatherImg;
    dayAfterTommorowWeatherImgElementIDParent.appendChild(dayAfterTommorowWeatherImgElementChild);

    //三日後の天気アイコン
    const threeDayLaterWeatherImg = getWeatherInfo(threeDayLaterWeatherID).icon;
    const threeDayLaterWeatherImgElementId = 'threeDayLaterWeatherImg';
    const threeDayLaterWeatherImgElementIDParent = document.getElementById(threeDayLaterWeatherImgElementId);
    const threeDayLaterWeatherImgElementChild = document.createElement('img');
    threeDayLaterWeatherImgElementChild.src = threeDayLaterWeatherImg;
    threeDayLaterWeatherImgElementIDParent.appendChild(threeDayLaterWeatherImgElementChild);

    //四日後の天気アイコン
    const fourDayLaterWeatherImg = getWeatherInfo(fourDayLaterWeatherID).icon;
    const fourDayLaterWeatherImgElementId = 'fourDayLaterWeatherImg';
    const fourDayLaterWeatherImgElementIDParent = document.getElementById(fourDayLaterWeatherImgElementId);
    const fourDayLaterWeatherImgElementChild = document.createElement('img');
    fourDayLaterWeatherImgElementChild.src = fourDayLaterWeatherImg;
    fourDayLaterWeatherImgElementIDParent.appendChild(fourDayLaterWeatherImgElementChild);

    //五日後の天気アイコン
    const fiveDayLaterWeatherImg = getWeatherInfo(fiveDayLaterWeatherID).icon;
    const fiveDayLaterWeatherImgElementId = 'fiveDayLaterWeatherImg';
    const fiveDayLaterWeatherImgElementIDParent = document.getElementById(fiveDayLaterWeatherImgElementId);
    const fiveDayLaterWeatherImgElementChild = document.createElement('img');
    fiveDayLaterWeatherImgElementChild.src = fiveDayLaterWeatherImg;
    fiveDayLaterWeatherImgElementIDParent.appendChild(fiveDayLaterWeatherImgElementChild);

    //六日後の天気アイコン
    const sixDayLaterWeatherImg = getWeatherInfo(sixDayLaterWeatherID).icon;
    const sixDayLaterWeatherImgElementId = 'sixDayLaterWeatherImg';
    const sixDayLaterWeatherImgElementIDParent = document.getElementById(sixDayLaterWeatherImgElementId);
    const sixDayLaterWeatherImgElementChild = document.createElement('img');
    sixDayLaterWeatherImgElementChild.src = sixDayLaterWeatherImg;
    sixDayLaterWeatherImgElementIDParent.appendChild(sixDayLaterWeatherImgElementChild);




    /*最高気温
    -----------------------------*/
    //昨日の最高気温
    const yesterdayTempMax = data2.daily.temperature_2m_max[0];

    //今日の最高気温
    const todaysTempMax = today.temperature.max.celsius;
    const todaysTempMaxElementID = 'todaysTempMax';
    const todaysTempMaxElement = document.getElementById(todaysTempMaxElementID);
    todaysTempMaxElement.innerHTML = todaysTempMax;

    //明日の最高気温
    const tommorowsTempMax = tommorow.temperature.max.celsius;
    const tommorowsTempMaxElementID = 'tommorowsTempMax';
    const tommorowsTempMaxElement = document.getElementById(tommorowsTempMaxElementID);
    tommorowsTempMaxElement.innerHTML = tommorowsTempMax;

    //明後日の最高気温
    const dayAfterTommorowTempMax = data2.daily.temperature_2m_max[2];
    const dayAfterTommorowTempMaxElementID = 'dayAfterTommorowTempMax';
    const dayAfterTommorowTempMaxElement = document.getElementById(dayAfterTommorowTempMaxElementID);
    dayAfterTommorowTempMaxElement.innerHTML = dayAfterTommorowTempMax;

    //三日後の最高気温
    const threeDayLaterTempMax = data2.daily.temperature_2m_max[3];
    const threeDayLaterTempMaxElementID = 'threeDayLaterTempMax';
    const threeDayLaterTempMaxElement = document.getElementById(threeDayLaterTempMaxElementID);
    threeDayLaterTempMaxElement.innerHTML = threeDayLaterTempMax;

    //四日後の最高気温
    const fourDayLaterTempMax = data2.daily.temperature_2m_max[4];
    const fourDayLaterTempMaxElementID = 'fourDayLaterTempMax';
    const fourDayLaterTempMaxElement = document.getElementById(fourDayLaterTempMaxElementID);
    fourDayLaterTempMaxElement.innerHTML = fourDayLaterTempMax;

    //五日後の最高気温
    const fiveDayLaterTempMax = data2.daily.temperature_2m_max[5];
    const fiveDayLaterTempMaxElementID = 'fiveDayLaterTempMax';
    const fiveDayLaterTempMaxElement = document.getElementById(fiveDayLaterTempMaxElementID);
    fiveDayLaterTempMaxElement.innerHTML = fiveDayLaterTempMax;

    //六日後の最高気温
    const sixDayLaterTempMax = data2.daily.temperature_2m_max[6];
    const sixDayLaterTempMaxElementID = 'sixDayLaterTempMax';
    const sixDayLaterTempMaxElement = document.getElementById(sixDayLaterTempMaxElementID);
    sixDayLaterTempMaxElement.innerHTML = sixDayLaterTempMax;

    /*最低気温
    -----------------------------*/

    //昨日の最低気温
    const yesterdayTempMin = data2.daily.temperature_2m_min[0];

    //今日の最低気温
    const todaysTempMin = today.temperature.min.celsius;
    const todaysTempMinElementID = 'todaysTempMin';
    const todaysTempMinElement = document.getElementById(todaysTempMinElementID);
    todaysTempMinElement.innerHTML = todaysTempMin;

    //明日の最高気温
    const tommorowsTempMin = tommorow.temperature.min.celsius;
    const tommorowsTempMinElementID = 'tommorowsTempMin';
    const tommorowsTempMinElement = document.getElementById(tommorowsTempMinElementID);
    tommorowsTempMinElement.innerHTML = tommorowsTempMin;

    //明後日の最高気温
    const dayAfterTommorowTempMin = data2.daily.temperature_2m_min[2];
    const dayAfterTommorowTempMinElementID = 'dayAfterTommorowTempMin';
    const dayAfterTommorowTempMinElement = document.getElementById(dayAfterTommorowTempMinElementID);
    dayAfterTommorowTempMinElement.innerHTML = dayAfterTommorowTempMin;

    //三日後の最高気温
    const threeDayLaterTempMin = data2.daily.temperature_2m_min[3];
    const threeDayLaterTempMinElementID = 'threeDayLaterTempMin';
    const threeDayLaterTempMinElement = document.getElementById(threeDayLaterTempMinElementID);
    threeDayLaterTempMinElement.innerHTML = threeDayLaterTempMin;

    //四日後の最高気温
    const fourDayLaterTempMin = data2.daily.temperature_2m_min[4];
    const fourDayLaterTempMinElementID = 'fourDayLaterTempMin';
    const fourDayLaterTempMinElement = document.getElementById(fourDayLaterTempMinElementID);
    fourDayLaterTempMinElement.innerHTML = fourDayLaterTempMin;

    //五日後の最高気温
    const fiveDayLaterTempMin = data2.daily.temperature_2m_min[5];
    const fiveDayLaterTempMinElementID = 'fiveDayLaterTempMin';
    const fiveDayLaterTempMinElement = document.getElementById(fiveDayLaterTempMinElementID);
    fiveDayLaterTempMinElement.innerHTML = fiveDayLaterTempMin;

    //六日後の最高気温
    const sixDayLaterTempMin = data2.daily.temperature_2m_min[6];
    const sixDayLaterTempMinElementID = 'sixDayLaterTempMin';
    const sixDayLaterTempMinElement = document.getElementById(sixDayLaterTempMinElementID);
    sixDayLaterTempMinElement.innerHTML = sixDayLaterTempMin;


    // // ここで両方のデータを使用して処理を行う
    // console.log(data1.title);
    // console.log(dayAfterTommorow);
    // console.log(fourDaysLater);
    // console.log(fiveDaysLater);
    // console.log(sixDaysLater);
    // console.log(oneWeekLater);

    // console.log(dayAfterTommorowsWeather);
    // console.log(fourDaysLatersWeather);
    // console.log(fiveDaysLatersWeather);
    // console.log(sixDaysLatersWeather);
    // console.log(oneWeekLatersWeather);

    // console.log(todaysMaxTemp);
    // console.log(tommorowsMaxTemp);
    // console.log(dayAfterTommorowsMaxTemp);
    // console.log(fourDaysLatersMaxTemp);
    // console.log(fiveDaysLatersMaxTemp);
    // console.log(sixDaysLatersMaxTemp);
    // console.log(oneWeekLatersMaxTemp);

    // console.log(todaysMinTemp);
    // console.log(tommorowsMinTemp);
    // console.log(dayAfterTommorowsMinTemp);
    // console.log(fourDaysLatersMinTemp);
    // console.log(fiveDaysLatersMinTemp);
    // console.log(sixDaysLatersMinTemp);
    // console.log(oneWeekLatersMinTemp);


    // console.log(data1.forecasts[0].detail);
    // console.log(data2);
    // console.log(hoge);
  });
