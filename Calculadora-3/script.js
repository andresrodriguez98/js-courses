const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  // Obtener los valores de los operandos y el operador
  const operacion = txtOperacion.value;
  const op1 = parseFloat(txtOp1.value);
  const op2 = parseFloat(txtOp2.value);

  if (
    (operacion == "+" ||
      operacion == "-" ||
      operacion == "*" ||
      operacion == "/") &&
    !isNaN(op1) &&
    !isNaN(op2)
  ) {
    //se coloca el breack para que no se ejecute todas las operaciones
    let resultado;
    switch (operacion) {
      case "+":
        resultado = op1 + op2;
        break;

      case "-":
        resultado = op1 - op2;
        break;

      case "*":
        resultado = op1 * op2;
        break;

      case "/":
        resultado = op1 / op2;
        break;
    }
    pResultado.style = "color:red";
    pResultado.innerText = "=" + resultado;
  } else {
    pResultado.style = "color:red";
    pResultado.innerText = "calculo imposible";
  }
}
