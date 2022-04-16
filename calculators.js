/* Входные данные для калькулятора сопротивления изоляции: */
const voltageFull = document.getElementById('voltage-full'),
      resistPr = document.getElementById('resist-pr'),
      voltagePlus = document.getElementById('voltage-plus'),
      voltageMinus = document.getElementById('voltage-minus'),
/* Входные данные для калькулятора суточной утечки: */
      h2testTime = document.getElementById('h2test-time'),
      h2pressureBegin = document.getElementById('h2pressure-begin'),
      h2pressureEnd = document.getElementById('h2pressure-end'),
      h2temperatureBegin = document.getElementById('h2temperature-begin'),
      h2temperatureEnd = document.getElementById('h2temperature-end');

/* Расчетные данные калькулятора сопротивления изоляции: */
const totalPlusInput = document.getElementById('total-plus'),
      totalAllInput = document.getElementById('total-all'),
      totalMinusInput = document.getElementById('total-minus'),
/* Расчетные данные калькулятора суточной утечки: */
      h2leakMetersInput = document.getElementById('h2leak-m'),
      h2leakPercentsInput = document.getElementById('h2leak-p');

let totalPlus, totalAll, totalMinus, h2leakMeters, h2leakPercents;

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input', () => {
        elements();
    })
}

/* Перевод строк */
const strToNum = str => str.value ? parseFloat(str.value) : 0

const elements = () => {
/* Расчетная часть калькулятора сопротивления изоляции: */
    const resistanceAll = strToNum(voltageFull) / ( strToNum(voltagePlus) +
     strToNum(voltagePlus) );
    const resistancePlus = ( strToNum(voltageFull) -
     strToNum(voltagePlus) ) / strToNum(voltageMinus);
    const resistanceMinus = ( strToNum(voltageFull) -
     strToNum(voltageMinus) ) / strToNum(voltagePlus);

    rPlus = (resistancePlus - 1) * strToNum(resistPr);
    rMinus = (resistanceMinus - 1) * strToNum(resistPr);
    rObs = (resistanceAll - 1) * strToNum(resistPr);
/* Расчетная часть калькулятора суточной утечки водорода: */
    const testTimer = 589248 / strToNum(h2testTime);
    const parametersBegin = ( strToNum(h2pressureBegin) + 1 ) /
      ( strToNum(h2temperatureBegin) + 273 );
    const parametersEnd = ( strToNum(h2pressureEnd) + 1 ) /
      ( strToNum(h2temperatureEnd) + 273 );

    const leakMeters = testTimer * (parametersBegin - parametersEnd);
    const leakPercents = (200 * leakMeters) / (strToNum(h2pressureBegin) * 93);
/* Вывод значений для калькулятора сопротивления изоляции: */
    totalAllInput.value = rObs.toFixed(2);
    totalPlusInput.value = rPlus.toFixed(2);
    totalMinusInput.value = rMinus.toFixed(2);
/* Вывод значений для калькулятора суточной утечки водорода: */
    h2leakMetersInput.value = leakMeters.toFixed(4);
    h2leakPercentsInput.value = leakPercents.toFixed(4);
}
