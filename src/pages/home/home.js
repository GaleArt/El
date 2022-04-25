const Home = () => {
  return (
    <div class="container">
    <div class="calculator">
      <div class="calcTitle">Кулькулятор Rиз</div>
      <div class="box">
        <div class="description">U общ.</div>
        <input
        type="number"
        placeholder="Напряжение общее"
        id="voltage-full"
        class="input"
        />
      </div>
      <div class="box">
        <div class="description">R пр.</div>
        <input
        type="number"
        placeholder="R прибора"
        id="resist-pr"
        class="input"
        />
      </div>
      <div class="box">
        <div  class="description">U+</div>
        <input
        type="number"
        placeholder="Напряжение на +"
        id="voltage-plus"
        class="input"
        />
      </div>
      <div class="box">
        <div  class="description">U-</div>
        <input
        type="number"
        placeholder="Напряжение на -"
        id="voltage-minus"
        class="input"
        />
      </div>
      <div class="calcTitle padding">Результаты измерений:</div>
      <div class="box">
        <div  class="description">Rиз на +</div>
        <input
        type="number"
        id="total-plus"
        class="input"
        value="0"
        />
      </div>
      <div class="box">
        <div  class="description">Rиз общ</div>
        <input
        type="number"
        id="total-all"
        class="input"
        value="0"
        />
      </div>
      <div class="box">
        <div  class="description">Rиз на -</div>
        <input
        type="number"
        id="total-minus"
        class="input"
        value="0"
        />
      </div>
    </div>

    <div class="calculator">
      <div class="calcTitle">Суточная утечка Н2</div>
      <div class="box">
        <div class="description">Время</div>
        <input
        type="number"
        placeholder="Время испытаний (8 ч?)"
        id="h2test-time"
        class="input"
        />
        <div class="unit">ч.</div>
      </div>
      <div class="box">
        <div  class="description">Рн</div>
        <input
        type="number"
        placeholder="Р в корпусе в начале"
        id="h2pressure-begin"
        class="input"
        />
        <div class="unit">кгс/см²</div>
      </div>
      <div class="box">
        <div  class="description">Рк</div>
        <input
        type="number"
        placeholder="Р в корпусе в конце"
        id="h2pressure-end"
        class="input"
        />
        <div class="unit">кгс/см²</div>
      </div>
      <div class="box">
        <div  class="description">Тн</div>
        <input
        type="number"
        placeholder="Т в начале"
        id="h2temperature-begin"
        class="input"
        />
        <div class="unit">℃</div>
      </div>
      <div class="box">
        <div class="description">Тк</div>
        <input
        type="number"
        placeholder="Т в конце"
        id="h2temperature-end"
        class="input"
        />
        <div class="unit">℃</div>
      </div>
      <div class="calcTitle padding">Результаты утечки:</div>
      <div class="box">
        <div class="description">Утечка</div>
        <input
        type="number"
        id="h2leak-m"
        class="input"
        value="0"
        />
        <div class="unit">м³</div>
      </div>
      <div class="box">
        <div class="description">Утечка</div>
        <input
        type="number"
        id="h2leak-p"
        class="input"
        value="0"
        />
        <div class="unit">%</div>
      </div>
      <div class="specialist">
        ** Для измерений (Р и Т) в начале и конце испытаний использовать
        приборы одной позиции!!
      </div>
    </div>
  </div>
  );
}

export {Home};
